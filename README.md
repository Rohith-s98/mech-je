# Mech JE Study Guides

Study guides for Mechanical JE exams (RRB JE, SSC JE and Kerala PSC AE), one website for every topic.

**Open it: https://rohith-s98.github.io/mech-je/**

The home page lists the nine technical subjects, ranked by their average share of the questions in the three exams. Pick a topic to open its guide. A topic can have up to four levels:

1. **Basics:** the guide itself, with past questions and solutions.
2. **Theory:** each topic explained in depth with everyday examples. No questions.
3. **Tricky questions:** the traps examiners set, with every option explained.
4. **Exam room:** timed mocks that work like the exam's CBT screen.

| Topic | Levels |
| --- | --- |
| [Thermal Engineering](https://rohith-s98.github.io/mech-je/thermal-engineering/) | 1 to 4 |
| [Production Engineering](https://rohith-s98.github.io/mech-je/production-engineering/) | 1 to 2 |

The [exam plan](https://rohith-s98.github.io/mech-je/exam-plan/) has the exam timeline, age limits and a sub-topic checklist for every subject.

## What's in this repo

- `index.html`: the home page where you choose a topic.
- `assets/reader.js` and `assets/site.css`: one reader and one stylesheet shared by every guide. The reader loads the `README.md` next to each page and adds formulas, a contents list, the level switch, a Hide answers button and test mode.
- `thermal-engineering/`, `production-engineering/`: one folder per topic. Each holds `index.html` and `README.md` (the guide). Higher levels sit in `level-2/`, `level-3/` and `level-4/` inside the topic folder.
- `exam-plan/`: the exam plan page.
- `.nojekyll`: makes GitHub Pages serve the files exactly as they are.

## Adding a topic

1. Write the guide in Claude as a doc and export it as Markdown.
2. Make a folder named after the topic, for example `engineering-mechanics/`. Copy `production-engineering/index.html` into it and save the export there as `README.md`. Change any ` ```latex ` fences to ` ```math `.
3. On the home page (`index.html`), turn the topic's card from "Not started" into links to its levels, and add it to the table above.
4. Commit and push. The page is live a minute or two later.

## Adding a level to a topic

1. Write the level in Claude with the same numbered `## N.` sections as Level 1, so each topic can link to its partner.
2. Copy `thermal-engineering/level-2/index.html` into the topic's new `level-2/` folder and save the export there as `README.md`. Point any link to another level's doc in Claude at that level's folder (`../` for Level 1, `../level-3/` and so on).
3. Put the `<div class="levels">` block from `thermal-engineering/index.html` into every level's `index.html`, keeping only the levels the topic has, with `aria-current="page"` on the page's own level.

The reader then adds a level switch in the top bar and a "Next level" card at the end of each level. Between levels whose link carries `data-topics`, it adds a link under every numbered topic to the same topic in the other level. A level with no *Answer:* lines, like the theory level, gets no Hide answers button.

## Test mode

The reader turns questions into timed tests: one minute per question, +1 for a right answer, −1/3 for a wrong one. Scores are saved in the browser, and the home page shows tests taken and the best mock for each topic.

- A `## Mock …` section becomes a full test with a start card. Its questions fold away until the test is taken, and the result shows marks by topic with links back to weak topics.
- On a level that follows the numbered topics, any topic with 3 or more usable questions gets a "Practise this topic" card.
- A question is usable when its paragraph has all four options written as `(a) … (b) … (c) … (d) …` and its solution starts *Answer: (x)*. In a mock, end the bold label with `· Topic N.` so the result can group it.

## Viewing locally

Browsers block a page from reading `README.md` when it is opened straight from disk. Serve the folder above this one and open http://localhost:8000/mech-je/:

```bash
python -m http.server 8000
```
