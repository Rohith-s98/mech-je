// Study guide reader. Shows README.md from the page's own folder (GitHub shows the same file on the repo page)
// and adds formulas, a contents list, links between levels, a Hide answers toggle and a timed test mode.
(function(){
  const doc = document.getElementById("doc");
  const slugify = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  // Levels of this topic, from the switcher in the top bar (pages without one simply skip the level links).
  // Levels marked data-topics follow the numbered topics, so their topics link to each other.
  const levels = [...document.querySelectorAll(".levels a")];
  const here = levels.findIndex(a => a.getAttribute("aria-current") === "page");
  const next = here > -1 ? levels[here + 1] || null : null;
  const topicLevels = levels.filter(a => a.hasAttribute("data-topics"));
  const ti = topicLevels.indexOf(levels[here]);
  const tPrev = ti > 0 ? topicLevels[ti - 1] : null, tNext = ti > -1 ? topicLevels[ti + 1] || null : null;
  const onTopicLevel = here < 0 || ti > -1;
  const levelName = a => a.firstChild.textContent.trim();

  fetch("README.md").then(r => { if (!r.ok) throw new Error(r.status); return r.text(); }).then(md => {
    doc.innerHTML = DOMPurify.sanitize(marked.parse(md));
    const h1 = doc.querySelector("h1");
    if (h1) { document.title = h1.textContent; document.getElementById("ttl").textContent = h1.textContent; }

    // Formula blocks (```math or ```latex) → KaTeX
    doc.querySelectorAll("pre > code.language-math, pre > code.language-latex").forEach(code => {
      const box = document.createElement("div"); box.className = "math";
      try { katex.render(code.textContent.trim(), box, { displayMode: true, throwOnError: false }); }
      catch (e) { box.textContent = code.textContent; }
      code.parentElement.replaceWith(box);
    });

    // Wide tables scroll inside their own box
    doc.querySelectorAll("table").forEach(t => { const s = document.createElement("div"); s.className = "tscroll"; t.replaceWith(s); s.append(t); });

    // Past questions: a bold "Q1." paragraph starts a question. An italic "Answer:" paragraph starts its solution,
    // which runs on (steps, traps, doubts) until the next question or heading, and hides as one block.
    const lead = (el, tag, re) => el.tagName === "P" && el.firstElementChild && el.firstElementChild.tagName === tag && re.test(el.textContent.trim());
    [...doc.children].forEach(el => { if (lead(el, "STRONG", /^Q\d+\./)) el.classList.add("q"); });
    [...doc.children].filter(el => lead(el, "EM", /^Answer:/)).forEach(p => {
      const box = document.createElement("div"); box.className = "ans";
      p.before(box);
      for (let n = p; n && !n.classList.contains("q") && !/^(H[1-6]|HR)$/.test(n.tagName);) { const after = n.nextElementSibling; box.append(n); n = after; }
      const b = document.createElement("button"); b.type = "button"; b.className = "reveal"; b.textContent = "Show answer";
      b.addEventListener("click", () => { box.classList.add("shown"); b.classList.add("used"); });
      box.before(b);
    });
    // A guide with no answers (such as a theory level) has nothing to hide.
    if (!doc.querySelector(".ans")) document.getElementById("hide").style.display = "none";

    // Contents from the h2 headings. Numbered topics also link to the same topic in the neighbouring levels.
    const tocl = document.getElementById("tocl");
    const links = [];
    doc.querySelectorAll("h2").forEach(h => {
      h.id = slugify(h.textContent);
      const li = document.createElement("li"), a = document.createElement("a");
      a.href = "#" + h.id; a.textContent = h.textContent; li.append(a); tocl.append(li); links.push([h, a]);
      const num = h.textContent.match(/^(\d+)\./);
      if (!num) return;
      h.dataset.n = num[1];
      if (!(tPrev || tNext)) return;
      const row = document.createElement("p"); row.className = "xlevel";
      [[tPrev, "← ", ""], [tNext, "", " →"]].forEach(([lv, before, after]) => {
        if (!lv) return;
        const x = document.createElement("a");
        x.href = lv.getAttribute("href") + "#sec-" + num[1];
        x.textContent = before + lv.dataset.cue + " (" + levelName(lv) + ")" + after;
        row.append(x);
      });
      h.after(row);
    });
    if (next) {
      const card = document.createElement("a"), small = document.createElement("span"), big = document.createElement("strong");
      card.className = "nextcard"; card.href = next.getAttribute("href");
      small.textContent = "Next level"; big.textContent = next.textContent + " →";
      card.append(small, big); doc.append(card);
    }
    setupTests();

    // Contents start open beside the guide on wide screens, folded above it on narrow ones
    const narrow = matchMedia("(max-width:900px)"), toc = document.getElementById("toc");
    const fit = () => { toc.open = !narrow.matches; };
    fit(); narrow.addEventListener("change", fit);
    const spy = () => {
      let cur = links[0];
      links.forEach(l => { if (l[0].getBoundingClientRect().top < 120) cur = l; });
      links.forEach(l => l[1].classList.toggle("on", l === cur));
    };
    addEventListener("scroll", spy, { passive: true }); spy();

    // #sec-3 (from another level) opens topic 3; any other hash is a heading id
    const sec = location.hash.match(/^#sec-(\d+)$/);
    const target = sec ? doc.querySelector('h2[data-n="' + sec[1] + '"]') : location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }).catch(() => {
    doc.innerHTML = '<p class="status">Could not load this guide. If you opened the file directly, serve the folder over http (for example <code>python -m http.server</code>) or use the GitHub page.</p>';
  });

  // Test mode. A "## Mock" section becomes a timed test that works like the exam's CBT screen. On a level that
  // follows the numbered topics, each topic with 3 or more multiple-choice questions gets a shorter practice test.
  // One minute per question, +1 for a right answer and −1/3 for a wrong one. Attempts are kept in this browser.
  const STORE = "study-guide-tests", LETTERS = ["a", "b", "c", "d"];
  const readAll = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } };
  const entry = key => Object.assign({ hist: [] }, readAll()[key]);
  const putEntry = (key, rec) => { const all = readAll(); all[key] = rec; try { localStorage.setItem(STORE, JSON.stringify(all)); } catch (e) {} };
  // The guides used to live at /thermal-engineering/ and /production-engineering/ before moving into /mech-je/.
  // Carry scores saved at those addresses over once. In the old Thermal layout, mocks were on level 3 and tricky
  // questions on level 2, so those keys move up a level to match the pages they belong to now.
  (() => {
    const site = location.pathname.match(/^\/[^/]+\//);
    if (!site || site[0] !== "/mech-je/") return;
    const all = readAll(); let moved = false;
    Object.keys(all).forEach(k => {
      const m = k.match(/^\/(thermal-engineering|production-engineering)\/(.*)$/);
      if (!m) return;
      let rest = m[2];
      if (m[1] === "thermal-engineering") {
        if (/^level-3\/(index\.html)?#mock/.test(rest)) rest = rest.replace("level-3/", "level-4/");
        else if (/^level-2\//.test(rest)) rest = rest.replace("level-2/", "level-3/");
      }
      const nk = "/mech-je/" + m[1] + "/" + rest;
      if (!all[nk]) all[nk] = all[k];
      delete all[k]; moved = true;
    });
    if (moved) try { localStorage.setItem(STORE, JSON.stringify(all)); } catch (e) {}
  })();
  const mmss = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
  const fmt = x => (Math.round(x * 100) / 100).toFixed(2).replace(/\.00$/, "");
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const button = (cls, text, fn) => { const b = el("button", cls, text); b.type = "button"; if (fn) b.addEventListener("click", fn); return b; };
  const cards = [], topicNames = {};

  // A question the test can use has options (a) to (d) inside its paragraph and an "Answer: (x)" line.
  // The bold label (exam, date, topic) is left out of the test, because spotting the topic is part of the skill.
  const parseQ = (p, topic) => {
    let sol = p.nextElementSibling;
    while (sol && !sol.classList.contains("ans") && !sol.classList.contains("q") && !/^H[1-6]$/.test(sol.tagName)) sol = sol.nextElementSibling;
    if (!sol || !sol.classList.contains("ans")) return null;
    const key = (sol.firstElementChild?.textContent || "").match(/^Answer:\s*\(([a-d])\)/i);
    if (!key) return null;
    const label = p.firstElementChild.textContent, c = p.cloneNode(true);
    c.firstElementChild.remove();
    const t = c.textContent.replace(/\s+/g, " ").trim(), at = [];
    let from = 0;
    for (const k of LETTERS) { const i = t.indexOf("(" + k + ") ", from); if (i < 0) return null; at.push(i); from = i + 4; }
    const tm = label.match(/Topic (\d+)/);
    return { stem: t.slice(0, at[0]).trim(), opts: at.map((i, n) => t.slice(i + 4, at[n + 1]).trim()), right: LETTERS.indexOf(key[1].toLowerCase()),
      topic: tm ? +tm[1] : topic, src: label.replace(/^Q\d+\.\s*/, "").replace(/\.$/, ""), sol };
  };

  const setupTests = () => {
    doc.querySelectorAll("h2[data-n]").forEach(h => { topicNames[h.dataset.n] = h.textContent.replace(/^\d+\.\s*/, ""); });
    doc.querySelectorAll("h2").forEach(h => {
      const mock = /^Mock\b/i.test(h.textContent), n = h.dataset.n;
      if (!mock && !(n && onTopicLevel)) return;
      const nodes = [];
      for (let x = h.nextElementSibling; x && x.tagName !== "H2" && !x.classList.contains("nextcard"); x = x.nextElementSibling) nodes.push(x);
      const qs = nodes.filter(x => x.classList.contains("q")).map(p => parseQ(p, n ? +n : 0)).filter(Boolean);
      if (qs.length < 3) return;
      const test = { key: location.pathname + "#" + h.id, title: mock ? h.textContent : "Practice · " + h.textContent, qs, mock };
      const card = el("div", "testcard" + (mock ? "" : " topic"));
      if (mock) {
        // The mock's intro stays in view. Its questions fold away so the answers are not seen before the test.
        const intro = nodes[0] && nodes[0].tagName === "P" && !nodes[0].classList.contains("q") ? nodes.shift() : null;
        const fold = el("details", "qlist");
        fold.append(el("summary", "", "Questions and solutions (read after the test)"), ...nodes);
        (intro || h).after(card); card.after(fold);
      } else {
        const row = h.nextElementSibling;
        (row && row.classList.contains("xlevel") ? row : h).after(card);
      }
      cards.push([card, test]); renderCard(card, test);
    });
    if (!cards.length) return;
    // Topic names for the result table come from the first topic level's guide when this page has none
    if (cards.some(([, t]) => t.mock) && !Object.keys(topicNames).length && topicLevels[0]) {
      fetch(topicLevels[0].getAttribute("href") + "README.md").then(r => r.ok ? r.text() : "").then(md => md.split("\n").forEach(l => {
        const m = l.match(/^## (\d+)\.\s+(.+)/); if (m) topicNames[m[1]] = m[2].trim();
      })).catch(() => {});
    }
    // Keep "Resume · time left" current while a test is paused
    setInterval(() => { if (!document.body.classList.contains("testing")) cards.forEach(([c, t]) => { if (entry(t.key).live) renderCard(c, t); }); }, 15000);
  };

  const renderCard = (card, test) => {
    const rec = entry(test.key), n = test.qs.length, last = rec.hist[rec.hist.length - 1];
    const info = el("div", "info");
    info.append(el("strong", "", test.mock ? "Timed test" : "Practise this topic"), el("span", "", n + " questions · " + n + " minutes · +1 right, −1/3 wrong"));
    if (last) info.append(el("span", "hist", "Last " + fmt(last.score) + "/" + last.n + " · Best " + fmt(Math.max(...rec.hist.map(a => a.score))) + " · " + rec.hist.length + (rec.hist.length > 1 ? " attempts" : " attempt")));
    const left = rec.live ? (rec.live.end - Date.now()) / 1000 : 0;
    const label = rec.live ? (left > 0 ? "Resume · " + mmss(left) + " left" : "Time up · see result") : last ? "Retake" : "Start";
    card.replaceChildren(info, button("btn go", label, () => startTest(test, card)));
  };

  const tally = (test, st) => {
    const r = { right: 0, wrong: 0, skip: 0, topics: {} };
    test.qs.forEach((q, i) => {
      const t = r.topics[q.topic] = r.topics[q.topic] || { n: 0, right: 0, wrong: 0, skip: 0 };
      const k = st.pick[i] < 0 ? "skip" : st.pick[i] === q.right ? "right" : "wrong";
      r[k]++; t[k]++; t.n++;
    });
    r.score = r.right - r.wrong / 3;
    return r;
  };

  const startTest = (test, card) => {
    const n = test.qs.length, saved = entry(test.key).live;
    const st = saved && saved.pick.length === n ? saved
      : { pick: Array(n).fill(-1), mark: Array(n).fill(false), seen: Array(n).fill(false), cur: 0, start: Date.now(), end: Date.now() + n * 60000 };
    const save = () => { const rec = entry(test.key); rec.live = st; putEntry(test.key, rec); };
    save();

    const box = el("div", "cbt"), top = el("div", "cbt-top"), body = el("div", "cbt-body"), foot = el("div", "cbt-foot");
    box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", test.title);
    const clock = el("span", "cbt-time"); clock.setAttribute("role", "timer"); clock.title = "Time left";
    const submitBtn = button("btn", "Submit", () => askSubmit()), closeBtn = button("btn", "Close", () => close());
    closeBtn.title = "Your answers are kept and the clock keeps running";
    top.append(el("strong", "", test.title), clock, submitBtn, closeBtn);

    const grid = el("div", "cbt-grid"), main = el("div", "sheet cbt-main"), side = el("div", "sheet cbt-pal");
    const num = el("p", "cbt-n"), stem = el("p", "cbt-stem"), opts = el("div", "cbt-opts"), ask = el("div", "cbt-confirm");
    stem.tabIndex = -1; opts.setAttribute("role", "radiogroup"); opts.setAttribute("aria-label", "Options"); ask.hidden = true;
    main.append(num, stem, opts, ask);
    const pal = el("div", "pal"), legend = el("ul", "legend");
    const palBtns = test.qs.map((q, i) => { const b = button("", String(i + 1), () => show(i)); pal.append(b); return b; });
    [["done", "Answered"], ["mark", "Marked for review"], ["seen", "Not answered"], ["", "Not visited"]].forEach(([c, t]) => {
      const li = el("li"); li.append(el("i", c), t); legend.append(li);
    });
    side.append(el("p", "cbt-n", "Questions"), pal, legend);
    grid.append(main, side); body.append(grid);

    const prevBtn = button("btn", "Previous", () => show(st.cur - 1));
    const markBtn = button("btn mk", "Mark", () => { st.mark[st.cur] = !st.mark[st.cur]; save(); show(st.cur, -1); });
    markBtn.append(el("span", "sub", " for review"));
    const clearBtn = button("btn", "Clear", () => { st.pick[st.cur] = -1; save(); show(st.cur); });
    const nextBtn = button("btn go", "Next", () => st.cur < n - 1 ? show(st.cur + 1) : askSubmit());
    foot.append(prevBtn, markBtn, clearBtn, el("span", "sp"), nextBtn);
    box.append(top, body, foot);
    const behind = [...document.body.children];
    behind.forEach(x => { x.inert = true; });
    document.body.append(box); document.body.classList.add("testing");

    // focusOn: an option index to keep focus on after choosing it, -1 to leave focus alone, or nothing for a new question
    const show = (i, focusOn) => {
      ask.hidden = true; st.cur = i; st.seen[i] = true; save();
      const q = test.qs[i];
      num.replaceChildren("Question " + (i + 1) + " of " + n);
      if (st.mark[i]) num.append(el("span", "flag", "Marked for review"));
      stem.textContent = q.stem;
      opts.replaceChildren(...q.opts.map((o, k) => {
        const b = button("opt", null, () => { st.pick[i] = k; save(); show(i, k); });
        b.setAttribute("role", "radio"); b.setAttribute("aria-checked", st.pick[i] === k);
        b.append(el("span", "k", LETTERS[k]), el("span", "", o));
        return b;
      }));
      markBtn.setAttribute("aria-pressed", st.mark[i]); prevBtn.disabled = i === 0; clearBtn.disabled = st.pick[i] < 0;
      nextBtn.textContent = i === n - 1 ? "Finish" : "Next";
      palBtns.forEach((b, j) => {
        b.className = [st.pick[j] > -1 ? "done" : st.seen[j] ? "seen" : "", st.mark[j] ? "mark" : "", j === i ? "cur" : ""].filter(Boolean).join(" ");
        b.setAttribute("aria-label", "Question " + (j + 1) + (st.pick[j] > -1 ? ", answered" : st.seen[j] ? ", not answered" : ", not visited") + (st.mark[j] ? ", marked for review" : ""));
        if (j === i) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
      });
      if (focusOn == null) { body.scrollTop = 0; stem.focus({ preventScroll: true }); }
      else if (focusOn > -1) opts.children[focusOn].focus();
    };

    const askSubmit = () => {
      const done = st.pick.filter(p => p > -1).length, marked = st.mark.filter(Boolean).length;
      ask.replaceChildren(el("p", "", "Submit the test? " + done + " answered, " + (n - done) + " not answered" + (marked ? ", " + marked + " marked for review" : "") + ". Answers cannot be changed after this."),
        button("btn go", "Submit test", () => finish(false)), button("btn", "Keep going", () => { ask.hidden = true; nextBtn.focus(); }));
      ask.hidden = false; ask.querySelector(".go").focus();
    };

    let over = false;
    const finish = auto => {
      if (over) return;
      over = true; clearInterval(timer);
      const r = tally(test, st), secs = (Math.min(Date.now(), st.end) - st.start) / 1000, rec = entry(test.key);
      delete rec.live;
      rec.hist = rec.hist.concat({ at: Date.now(), score: r.score, right: r.right, wrong: r.wrong, skip: r.skip, n, secs: Math.round(secs) }).slice(-20);
      putEntry(test.key, rec);
      foot.remove(); clock.remove(); submitBtn.remove();
      body.replaceChildren(result(test, st, r, secs, auto, () => { close(); startTest(test, card); }, () => close()));
      body.scrollTop = 0; closeBtn.focus();
    };

    const tick = () => {
      const left = (st.end - Date.now()) / 1000;
      clock.textContent = mmss(left); clock.classList.toggle("low", left <= 120);
      if (left <= 0) finish(true);
    };

    const keys = ev => {
      if (ev.key === "Escape") { ev.preventDefault(); close(); return; }
      if (ev.key === "Tab") {
        const f = [...box.querySelectorAll("button:not(:disabled), a[href], summary")].filter(x => x.offsetParent !== null);
        if (f.length && ev.shiftKey && document.activeElement === f[0]) { ev.preventDefault(); f[f.length - 1].focus(); }
        else if (f.length && !ev.shiftKey && document.activeElement === f[f.length - 1]) { ev.preventDefault(); f[0].focus(); }
        return;
      }
      const k = LETTERS.indexOf(ev.key.toLowerCase());
      if (over || k < 0 || ev.ctrlKey || ev.metaKey || ev.altKey || !ask.hidden) return;
      st.pick[st.cur] = k; save(); show(st.cur, k);
    };

    const close = () => {
      clearInterval(timer); if (!over) save();
      box.remove(); behind.forEach(x => { x.inert = false; });
      document.body.classList.remove("testing"); document.removeEventListener("keydown", keys);
      renderCard(card, test); card.querySelector("button").focus();
    };

    document.addEventListener("keydown", keys);
    const timer = setInterval(tick, 1000);
    show(st.cur); tick();
  };

  const result = (test, st, r, secs, auto, again, close) => {
    const wrap = el("div", "sheet doc cbt-res"), n = test.qs.length;
    if (auto) wrap.append(el("p", "cbt-auto", "Time is up, so your answers were submitted."));
    const head = el("div", "res-score"), tl = el("ul", "tally");
    head.append(el("strong", "", fmt(r.score)), el("span", "", "out of " + n));
    [["Right", r.right], ["Wrong", r.wrong], ["Skipped", r.skip], ["Time used", mmss(secs)]].forEach(([k, v]) => {
      const li = el("li"); li.append(el("b", "", String(v)), el("span", "", k)); tl.append(li);
    });
    wrap.append(head, tl);
    if (r.wrong) wrap.append(el("p", "res-note", r.wrong + " wrong " + (r.wrong > 1 ? "answers" : "answer") + " took off " + fmt(r.wrong / 3) + (r.wrong / 3 === 1 ? " mark." : " marks.")));

    // Marks by topic. A topic scoring under half its questions links back to that topic in each topic level.
    const tks = Object.keys(r.topics).map(Number).sort((a, b) => a - b);
    if (tks.length > 1) {
      wrap.append(el("h3", "", "By topic"));
      const table = el("table"), thead = el("thead"), tbody = el("tbody"), hr = el("tr");
      ["Topic", "Right", "Marks", "Revise"].forEach(t => hr.append(el("th", "", t)));
      thead.append(hr);
      tks.forEach(t => {
        const x = r.topics[t], tr = el("tr"), marks = x.right - x.wrong / 3, weak = marks < x.n / 2, td = el("td");
        const name = topicNames[t] && topicNames[t].replace(/\s*\(.*\)$/, "").replace(/:.*$/, "");
        tr.append(el("td", "", name ? t + ". " + name : "Topic " + t), el("td", "", x.right + "/" + x.n), el("td", "", fmt(marks)));
        if (weak && topicLevels.length) topicLevels.forEach(lv => {
          const a = el("a", "", levelName(lv)); a.href = lv.getAttribute("href") + "#sec-" + t; td.append(a);
        });
        else td.textContent = weak ? "Revise" : "On track";
        if (weak) tr.className = "weak";
        tr.append(td); tbody.append(tr);
      });
      const s = el("div", "tscroll"); table.append(thead, tbody); s.append(table); wrap.append(s);
    }

    // Review: every question with your answer, the right one and the full solution (open for the ones you missed)
    wrap.append(el("h3", "", "Review"));
    const miss = test.qs.filter((q, i) => st.pick[i] !== q.right).length, filters = el("div", "filters");
    const fAll = button("btn", "All · " + n), fMiss = button("btn", "Wrong or skipped · " + miss);
    const only = on => { wrap.classList.toggle("only-miss", on); fAll.setAttribute("aria-pressed", !on); fMiss.setAttribute("aria-pressed", on); };
    fAll.addEventListener("click", () => only(false)); fMiss.addEventListener("click", () => only(true));
    filters.append(fAll, fMiss); wrap.append(filters); only(false);
    test.qs.forEach((q, i) => {
      const p = st.pick[i], ok = p === q.right, item = el("div", "rv" + (ok ? " ok" : "")), h = el("p", "rv-h"), ol = el("ol", "rv-opts");
      h.append(el("span", p < 0 ? "sk" : ok ? "yes" : "no", (i + 1) + " · " + (p < 0 ? "Skipped" : ok ? "Right" : "Wrong")), el("span", "rv-src", q.src));
      q.opts.forEach((o, k) => {
        const li = el("li", [k === q.right ? "right" : "", k === p ? "picked" : ""].filter(Boolean).join(" "));
        li.append(el("span", "k", LETTERS[k]), el("span", "", o));
        if (k === p || k === q.right) li.append(el("span", "why", k !== q.right ? "Your answer" : k === p ? "Your answer · right" : "Right answer"));
        ol.append(li);
      });
      const sol = el("details"), box = el("div", "ans");
      q.sol.childNodes.forEach(c => box.append(c.cloneNode(true)));
      sol.append(el("summary", "", "Solution"), box); sol.open = !ok;
      item.append(h, el("p", "rv-stem", q.stem), ol, sol);
      wrap.append(item);
    });
    const acts = el("div", "res-actions");
    acts.append(button("btn go", "Retake", again), button("btn", "Back to the guide", close));
    wrap.append(acts);
    return wrap;
  };

  // Hide answers toggle (remembered per browser, shared by every guide on this site)
  const btn = document.getElementById("hide"), KEY = "study-guide-hide-answers";
  const set = on => {
    btn.setAttribute("aria-pressed", on); doc.classList.toggle("hide-ans", on);
    if (on) doc.querySelectorAll(".ans.shown").forEach(a => { a.classList.remove("shown"); a.previousElementSibling?.classList.remove("used"); });
    try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
  };
  let saved = false; try { saved = localStorage.getItem(KEY) === "1"; } catch (e) {}
  set(saved);
  btn.addEventListener("click", () => set(btn.getAttribute("aria-pressed") !== "true"));
})();
