# Production Engineering Study Guide

Oct 27, 2026 · @Rohith

## How to use this guide

Production Engineering is the second-ranked subject in your topic map, at about 18% of technical questions across RRB JE, SSC JE and Kerala PSC AE. It is also RRB JE's heaviest area, at about 28 of every 100 technical questions. Finish it in about 16 study days, one sub-topic at a time, in the order below.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the formulas you must memorise), and real questions from past papers (mostly 2019–2026) with worked solutions. Questions are tagged with the exam and year they appeared in.

| # | Sub-topic | Days | How often it is asked |
| --- | --- | --- | --- |
| 1 | Welding processes and defects | 3 | Every paper; about 11 Qs in RRB JE |
| 2 | Machining: lathe, tool geometry, chips, tool life | 3 | Every paper; about 9 Qs in RRB JE |
| 3 | Casting | 2 | Every paper |
| 4 | Grinding and finishing | 1 | Regular; about 7 Qs in RRB JE |
| 5 | Metal forming and sheet metal | 2 | Regular |
| 6 | Milling, drilling, shaping, broaching | 2 | Regular |
| 7 | Unconventional machining | 1 | Regular |
| 8 | NC/CNC and part programming | 1 | Occasional |
| 9 | Jigs and fixtures, powder metallurgy | 1 | Occasional |

Method per sub-topic: read the contents, write the formulas on one page, solve the past questions without looking, then check the solutions.

## 1. Welding processes and defects

Welding is RRB JE's single biggest production topic, at about 11 questions per paper. Most questions ask which electrode, flame, gas or polarity goes with which process, so learn the table below as pairs.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Fusion vs solid-state welding | Fusion processes melt the joint (arc, gas, thermit, electron beam, laser). Solid-state processes join with pressure and heat below melting (resistance, forge, friction, diffusion, explosive). |
| Gas welding flames | Neutral: oxygen and acetylene 1:1, about 3200 °C at the inner cone tip, used for most steels. Oxidising: excess oxygen, used for brass and bronze. Carburising (reducing): excess acetylene, used for high-carbon steel and nickel alloys. |
| Acetylene cylinder | Acetylene is dissolved in acetone inside a porous filler, because free acetylene is unstable above about 1 bar. |
| DC polarity | DCEN (straight polarity): electrode negative, about two-thirds of the heat goes into the work, so penetration is deeper. DCEP (reverse polarity): electrode positive, more heat at the electrode, used for thin sheet and non-ferrous metals. |
| Consumable vs non-consumable electrodes | Consumable electrodes melt and become filler: coated stick (SMAW), wire (MIG), bare wire (SAW). Non-consumable: tungsten (TIG) and carbon or graphite (carbon arc). |
| Electrode coating (flux) | Gives off shielding gas, forms slag over the bead, stabilises the arc and can add alloying elements. |
| TIG (GTAW) | Non-consumable tungsten electrode, argon or helium shielding, filler rod fed separately. Clean welds on thin sheet, aluminium, magnesium and stainless steel. |
| MIG (GMAW) | Consumable wire fed continuously, shielded by argon or helium. With CO2 shielding it is called MAG. |
| Submerged arc welding (SAW) | Bare consumable wire under a blanket of granular flux, so the arc cannot be seen. High deposition on thick plate, flat position only. |
| Resistance welding | Heat comes from the resistance of the joint, H = I²Rt, under electrode pressure. Spot, seam (continuous spot with roller electrodes), projection, flash butt, upset butt and percussion. |
| Thermit welding | Aluminium powder reacts with iron oxide and the molten iron fills the joint. Used to repair rails and heavy sections. |
| Electron beam and laser welding | Very concentrated heat: deep, narrow welds with the smallest heat-affected zone. Electron beam needs a vacuum. |
| Soldering vs brazing | Soldering filler melts below 450 °C, brazing filler above 450 °C. In both, the base metal does not melt. |
| Heat-affected zone (HAZ) | Base metal next to the weld that did not melt but whose grain structure changed. |
| Weld defects | Porosity and blowholes: gas trapped by moisture, rust or poor shielding. Undercut: a groove at the weld toe from too much current or a long arc. Also slag inclusion, lack of fusion or penetration, cracks, spatter and distortion. |
| Weld inspection | Visual and dye penetrant find surface defects. Magnetic particle finds surface and near-surface defects, ferromagnetic metals only. Radiography and ultrasonic find internal defects. |

### Formulas to memorise

```math
H = I^2 R t \qquad P = V I \qquad \text{Heat input per mm} = \frac{\eta\, V I}{v}\ (v = \text{travel speed})
```

```math
V = A + B\,l \quad \text{(arc voltage rises linearly with arc length } l\text{)}
```

```math
I_1^2 D_1 = I_2^2 D_2 \quad \text{(duty cycle } D \text{: same heating at a different current)}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 6 December 2025 (Shift 2).** What is the ratio between oxygen and acetylene gases for a neutral flame in gas welding? (a) 2 : 1 (b) 1 : 2 (c) 4 : 1 (d) 1 : 1

*Answer: (d).* A neutral flame burns equal volumes of oxygen and acetylene at the torch. Extra oxygen makes it oxidising; extra acetylene makes it carburising.

**Q2. SSC JE Mechanical, 6 December 2025 (Shift 2).** Seam welding is a/an \_\_\_\_ welding process. (a) arc (b) multi spot (c) gas (d) continuous spot

*Answer: (d).* Seam welding is resistance welding with two rotating roller electrodes. It makes a row of overlapping spot welds, so it works like continuous spot welding and gives a leak-tight joint.

**Q3. SSC JE Mechanical, 6 December 2025 (Shift 2).** Which gas is typically employed as a shielding gas in inert gas welding processes? (a) Hydrogen (b) Oxygen (c) Water vapour (d) Helium or argon

*Answer: (d).* TIG and MIG use helium or argon because inert gases do not react with the molten pool. They keep out oxygen and nitrogen, which would cause oxidation and porosity.

**Q4. SSC JE Mechanical, 6 December 2025 (Shift 2).** Flux is used in the form of granules in which welding? (a) Submerged arc welding (b) Resistance welding (c) Plasma welding (d) TIG welding

*Answer: (a).* In SAW the arc burns under a heap of granular flux poured ahead of the electrode. Resistance welding uses no flux, and TIG and plasma welding use gas shielding.

**Q5. RRB JE CBT-2 Mechanical (re-exam), 4 June 2025.** \_\_\_\_\_\_ is used in the submerged arc welding process. (a) Tungsten electrode (b) Carbon electrode (c) Consumable bare electrode (d) Graphite electrode

*Answer: (c).* The wire melts into the joint, so it is consumable. It needs no coating because the flux blanket does the shielding.

**Q6. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2).** \_\_\_\_\_\_ type of electrode is used in gas tungsten arc welding (GTAW). (a) Non-consumable tungsten (b) Consumable bare (c) Consumable coated (d) Non-consumable carbon

*Answer: (a).* Tungsten melts at about 3400 °C, so it holds the arc without melting. Filler, when needed, is added as a separate rod.

**Q7. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2).** \_\_\_\_\_\_ is a welding defect caused by trapping of gas during the welding process. (a) Undercut (b) Burn through (c) Cracking (d) Porosity

*Answer: (d).* Gas from moisture, rust or poor shielding is trapped as the pool freezes, leaving pores. Undercut is a groove at the toe caused by excess current, not by gas.

## 2. Machining: lathe, tool geometry, chips and tool life

RRB JE asks about 9 machining questions per paper. SSC JE 2025 mostly asked lathe parts and operations, while numericals on Taylor's equation and Merchant's circle turn up across all exams. Learn the lathe parts first, then the formulas.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Lathe parts | Bed carries everything. Headstock holds the spindle and speed gears. Tailstock holds the dead centre or a drill. Carriage = saddle + cross-slide + compound rest + tool post + apron. |
| Lead screw vs feed rod | The lead screw drives the carriage only for thread cutting, through the half nut. The feed rod gives automatic feed for ordinary turning and facing. |
| Lathe operations | Turning, facing, drilling, boring, threading and parting-off. Parting-off feeds the tool square to the axis with the cross-slide. Knurling presses a pattern into the surface and removes no chip. |
| Taper turning methods | Form tool: very short tapers. Compound rest swivel: short, steep tapers, fed by hand. Tailstock offset: long, gentle tapers between centres. Taper turning attachment: long tapers with power feed. |
| Single-point tool angles | Rake angle (back and side) lets the chip flow over the face. Clearance (relief) angles stop the flank rubbing the work. Cutting edge angles and nose radius set the finish and edge strength. |
| Tool signature (ASA) | Seven numbers in order: back rake, side rake, end relief, side relief, end cutting edge angle, side cutting edge angle, nose radius. |
| Positive vs negative rake | Positive rake: lower cutting force but a weaker edge, used with HSS on ductile metals. Negative rake: a stronger edge, used with carbides and ceramics on hard metals and interrupted cuts. |
| Orthogonal vs oblique cutting | Orthogonal: the cutting edge is square to the cutting velocity, so there are two force components. Oblique: the edge is inclined, three components, and it is the usual real case. |
| Chip types | Continuous: ductile metal, high speed, large rake, good coolant. Continuous with built-up edge: ductile metal at low speed, small rake and poor lubrication. Discontinuous: brittle metal such as cast iron. Serrated: titanium and hardened steel. |
| Chip thickness ratio | r = uncut thickness / chip thickness. It is always below 1 because the chip thickens as it shears. Its inverse is the chip reduction coefficient. |
| Merchant's circle | A force diagram linking cutting force Fc and thrust Ft to shear-plane forces (Fs, Fn) and rake-face friction (F, N). The friction angle β gives μ = tan β. |
| Tool wear | Flank wear on the clearance face sets the tool life. Crater wear on the rake face comes from heat and diffusion at high speed. |
| Taylor's tool life | VTⁿ = C. Typical n: 0.1–0.15 for HSS, 0.2–0.4 for carbide, 0.5–0.7 for ceramics. Cutting speed affects tool life most, then feed, then depth of cut. |
| Tool materials by hot hardness | Carbon steel < HSS (18-4-1 = W-Cr-V) < stellite < cemented carbide < ceramic < CBN < diamond. Diamond is not used on steel because carbon diffuses into iron. |

### Formulas to memorise

```math
V = \frac{\pi D N}{1000}\ (\text{m/min}) \qquad t = \frac{L}{f N} \qquad MRR = 1000\, f\, d\, V\ (\text{mm}^3/\text{min})
```

```math
r = \frac{t_1}{t_2} = \frac{\sin\phi}{\cos(\phi - \alpha)} \qquad \tan\phi = \frac{r\cos\alpha}{1 - r\sin\alpha} \qquad \gamma = \cot\phi + \tan(\phi - \alpha)
```

```math
2\phi + \beta - \alpha = 90^\circ \qquad F_s = F_c\cos\phi - F_t\sin\phi \qquad \mu = \tan\beta = \frac{F_t + F_c\tan\alpha}{F_c - F_t\tan\alpha}
```

```math
V T^n = C \qquad V_1 T_1^{\,n} = V_2 T_2^{\,n} \qquad \frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{1/n}
```

(φ = shear angle, α = rake angle, β = friction angle, f = feed in mm/rev, d = depth of cut in mm, N = rpm.)

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 4 December 2025 (Shift 2).** Which part holds the tool in a lathe? (a) Tailstock (b) Tool post (c) Lead screw (d) Saddle

*Answer: (b).* The tool post sits on the compound rest and clamps the cutting tool. The saddle carries the cross-slide, and the tailstock holds centres or drills.

**Q2. SSC JE Mechanical, 4 December 2025 (Shift 2).** Which lathe part moves the carriage automatically? (a) Feed rod (b) Chuck (c) Tailstock (d) Compound rest

*Answer: (a).* The feed rod takes drive from the feed gearbox to the apron for automatic turning and facing feeds. The lead screw also moves the carriage, but only for thread cutting.

**Q3. SSC JE Mechanical, 5 December 2025 (Shift 2).** Which taper turning method uses swivelling of the compound rest? (a) Form tool method (b) Tailstock offset (c) Compound rest method (d) Taper turning attachment

*Answer: (c).* The compound rest is swung to half the taper angle and the tool is fed along it by hand. Its short travel limits it to short, steep tapers.

**Q4. RRB JE CBT-2 Mechanical (re-exam), 4 June 2025.** In a parting-off operation, how is the cutting tool fed into the workpiece? (a) By moving the carriage along the lathe bed (b) By rotating the cross-slide screw by hand (c) By adjusting the tailstock manually (d) By rotating the headstock spindle directly

*Answer: (b).* Parting-off cuts the job off square to its axis, so the tool must move radially. The cross-slide gives that radial motion; the carriage only moves along the axis.

**Q5. BHEL ET Mechanical, May 2019.** Using Taylor's tool life equation VT^0.5 = C, if the cutting speed is halved, what is the percentage increase in tool life? (a) 300% (b) 50% (c) 200% (d) 75%

*Answer: (a).* T₂/T₁ = (V₁/V₂)^(1/n) = 2^(1/0.5) = 2² = 4. Tool life becomes four times longer, which is an increase of 300%.

**Q6. APPSC Lecturer (Polytechnic), March 2020.** Using Merchant's shear angle theory, what is the shear angle for a tool with a positive rake angle of 20° and a friction angle of 40°? (a) 35° (b) 30° (c) 90° (d) 40°

*Answer: (a).* 2φ = 90° + α − β = 90 + 20 − 40 = 70°, so φ = 35°. A larger rake or less friction gives a larger shear angle and a thinner chip.

## 3. Casting

Casting is asked in every paper of all three exams. The questions are mostly one-line facts: which allowance does what, which special process suits which job, and what causes each defect.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Pattern, mould, core | The pattern is a replica that leaves the mould cavity when it is withdrawn. A core forms holes and inner shapes. The flask has a top half (cope), a bottom half (drag) and sometimes a middle (cheek). |
| Pattern materials | Wood for a few castings, metal (often aluminium) for mass production, wax for investment casting, expanded polystyrene for lost-foam casting. |
| Pattern types | Single piece, split, match plate (machine moulding in mass production), gated, loose piece, sweep and skeleton patterns. |
| Pattern allowances | Shrinkage and machining allowances make the pattern bigger. Draft is a taper on vertical faces so the pattern lifts out cleanly. Shake (rapping) allowance is negative: the pattern is made smaller because rapping enlarges the cavity. Distortion allowance pre-bends the pattern. |
| Moulding sand properties | Permeability lets gases escape. Refractoriness resists the heat. Green strength (cohesiveness) holds the shape. Collapsibility lets the sand give way as the casting shrinks. Green sand is silica with 5–15% clay and 2–8% water. |
| Core prints and chaplets | Core prints are seats in the mould that locate the core. Chaplets are small metal supports that hold the core in place and fuse into the casting. |
| Gating system | Pouring basin → tapered sprue → runner → ingates. The sprue is tapered so the stream does not suck in air. A skim bob traps slag. |
| Riser | A reservoir that feeds liquid metal as the casting shrinks, so it must freeze last. Chvorinov's rule sets its size. Chills placed in the mould speed up freezing where needed. |
| Shell moulding | A thin shell of resin-bonded sand formed on a heated metal pattern. Good finish and accuracy for small, thin castings. |
| Investment (lost wax) casting | A wax replica is coated with ceramic and melted out. Best finish and finest detail: turbine blades, jewellery. |
| Die casting | Metal forced into a steel die under pressure. Hot chamber for low-melting zinc, tin and lead. Cold chamber for aluminium, magnesium and brass. |
| Centrifugal casting | The mould spins. True centrifugal makes pipes with no core; semi-centrifugal makes wheels and pulleys; centrifuging fills small parts. |
| Slush and continuous casting | Slush: metal poured out before it fully freezes, leaving a hollow shell (ornaments, toys). Continuous: billets and slabs drawn out of a water-cooled mould. |
| Casting defects | Blowholes: trapped gas from low permeability or moist sand. Shrinkage cavity: poor feeding. Misrun and cold shut: metal too cold or poured too slowly. Hot tear: contraction resisted by the mould. Also mismatch (shift), fins, scab and inclusions. |

### Formulas to memorise

```math
t_s = k\left(\frac{V}{A}\right)^2 \quad \text{(Chvorinov's rule; for a cylindrical riser with } H = D\text{, } V/A = D/6\text{)}
```

```math
v = \sqrt{2 g h} \qquad t_{pour} = \frac{V}{A_g\, v} \qquad A_1\sqrt{h_1} = A_2\sqrt{h_2}\ \text{(sprue taper)}
```

```math
\text{Pattern size} = \text{casting size} \times (1 + \text{shrinkage}) \quad \text{(cast iron about 10 mm/m, steel about 20 mm/m)}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 7 June 2024 (Shift 2).** What is the purpose of a pattern in the casting process? (a) To clean the mould before casting (b) To pour molten metal into the mould cavity (c) To create the mould cavity (d) To remove the casting from the mould

*Answer: (c).* Sand is rammed around the pattern, and lifting it out leaves a cavity of the part's shape. Metal is poured through the gating system, not the pattern.

**Q2. SSC JE Mechanical, 6 December 2025 (Shift 2).** What is the main purpose of the chaplet in sand moulding? (a) To ensure directional solidification (b) To provide efficient venting (c) To align the mould boxes (d) To support the cores

*Answer: (d).* Chaplets hold a long or heavy core steady against the lift of the molten metal. They are made of a similar metal and fuse into the casting.

**Q3. SSC JE Mechanical, 6 December 2025 (Shift 2).** Shell moulding is best suited for which of the following applications? (a) Producing milling cutters (b) Making gold ornaments (c) Producing heavy and thick-walled castings (d) Producing thin castings

*Answer: (d).* The thin resin-bonded shell gives a smooth, accurate cavity but cannot take the weight of a heavy casting. It suits small, thin-walled parts.

**Q4. NHPC JE Mechanical, 29 October 2025 (Shift 2).** What is the purpose of providing a draft allowance in a pattern? (a) To minimise shrinkage defects (b) To improve the surface finish (c) To prevent mould damage during pattern removal (d) To increase the strength of the mould cavity

*Answer: (c).* Draft is a slight taper on vertical faces. Without it the pattern drags against the sand as it is lifted and breaks the cavity edges.

**Q5. ISRO MCF Technical Assistant Mechanical, 23 June 2019.** Which one of the following casting processes gives products with a better surface finish? (a) Sand casting (b) Hot die casting (c) Investment casting (d) Cold die casting

*Answer: (c).* The ceramic slurry copies the smooth wax pattern exactly, and there is no parting line. Investment casting gives the best finish of all casting processes.

## 4. Grinding and finishing

RRB JE asks about 7 grinding and finishing questions per paper, and SSC JE 2025 asked three in a row in one shift. Nearly all of them come from the wheel marking code and the selection rules, so learn the code letter by letter.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| How grinding cuts | A wheel of hard abrasive grains held by a bond. Each grain is a tiny cutting edge with a large negative rake, so grinding needs high energy but gives a fine finish and close tolerance. |
| Abrasives | A = aluminium oxide, for steels. C = silicon carbide, for cast iron, non-ferrous metals and (green SiC) carbides. B = CBN, for hardened steel. D = diamond, for carbides, glass and ceramics. |
| Wheel marking (IS 551) | In order: abrasive – grain size – grade – structure – bond, e.g. A 46 K 5 V. A number before it is the maker's abrasive code; one after it is the maker's own mark. |
| Grain size | The mesh number: 8–24 coarse, 30–60 medium, 70–180 fine, 220–600 very fine. A bigger number means smaller grains. |
| Grade | The strength with which the bond holds the grains, not the hardness of the abrasive. A–H soft, I–P medium, Q–Z hard. |
| Structure | Grain spacing: low numbers are dense, high numbers are open. Open wheels suit soft, ductile work that would clog a dense wheel. |
| Bonds | V vitrified (most common), B resinoid, R rubber (centreless regulating wheels, cut-off wheels), E shellac, S silicate, M metal (diamond wheels). |
| Selection rules | Soft wheel for hard metal and hard wheel for soft metal. Coarse grit for soft metal and fast removal, fine grit for hard metal and finish. |
| Glazing vs loading | Glazing: grains go blunt and shiny because the wheel is too hard or too fast. Loading: chips clog the pores, usually on soft metals. |
| Dressing vs truing | Dressing sharpens the face again by removing glazed or loaded grains. Truing restores the wheel's true shape and roundness. |
| Grinding machines | Surface grinder for flat faces, cylindrical grinder between centres, internal grinder for bores, tool and cutter grinder. |
| Centreless grinding | The job rests on a work rest blade between the grinding wheel and a rubber-bonded regulating wheel, with no centres needed. Tilting the regulating wheel 2–8° feeds the job through. Used for pins, rollers and shafts. |
| Honing | Abrasive stones rotate and reciprocate inside a bore, leaving a cross-hatch that holds oil. Used for engine cylinder bores; corrects small taper and out-of-round. |
| Lapping | Loose abrasive in oil between a soft lap and the work. Gives the best flatness and accuracy (slip gauges), removing only 0.005–0.01 mm. |
| Superfinishing, polishing, buffing, burnishing | Superfinishing: a short-stroke oscillating stone at low pressure for a mirror finish. Polishing and buffing: flexible wheels for lustre. Burnishing: rollers press the surface smooth without removing metal. |
| Finish, best to worst | Lapping < superfinishing < honing < grinding < turning. |

### Formulas to memorise

```math
V_{wheel} = \frac{\pi D N}{60\,000}\ (\text{m/s, usually 25–35 m/s}) \qquad G = \frac{\text{volume of work removed}}{\text{volume of wheel worn}}
```

```math
f_{axial} = \pi\, d_r\, N_r \sin\alpha \quad \text{(centreless through-feed; } d_r, N_r \text{ = regulating wheel, } \alpha \text{ = its tilt)}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** From the following options, choose what a grinding wheel is made from. (a) Wood (b) Abrasive particles (c) Cast iron (d) Copper

*Answer: (b).* A wheel is abrasive grains (aluminium oxide, silicon carbide, CBN or diamond) held in a bond. The grains do the cutting; the bond gives the wheel its shape and strength.

**Q2. SSC JE Mechanical, 5 December 2025 (Shift 2).** Centreless grinding is used for: (a) Gear cutting (b) Welding (c) Cylindrical jobs (d) Boring

*Answer: (c).* The round job is supported on a work rest blade and turned by the regulating wheel, so it needs no centre holes or chuck. That makes it fast for pins, rollers and shafts.

**Q3. SSC JE Mechanical, 5 December 2025 (Shift 2).** The grade of a grinding wheel refers to: (a) Abrasive size (b) Wheel size (c) Bond strength (d) Wheel colour

*Answer: (c).* Grade is how firmly the bond holds the grains: A–H soft, I–P medium, Q–Z hard. Abrasive size is the grain size number.

**Q4. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 1).** Which of the following is the correct rule when selecting a grinding wheel? (a) Close structure for ductile and soft material (b) Soft wheel for hard metal and hard wheel for soft metal (c) Hard wheel for hard metal and soft wheel for soft metal (d) Fine finish needs open structure

*Answer: (b).* Hard metal blunts the grains quickly, so a soft bond lets blunt grains drop out and expose fresh ones. On soft metal the grains stay sharp, so a hard bond holds them longer.

**Q5. DMRC Maintainer Fitter, 21 February 2020 (Shift 1).** The grinding of carbide materials is done by using a \_\_\_\_\_\_. (a) Ceramic grain wheel (b) White aluminium oxide wheel (c) Diamond wheel (d) Zirconia aluminium oxide wheel

*Answer: (c).* Cemented carbide is harder than aluminium oxide, so only diamond (or, more slowly, green silicon carbide) can grind it well.

**Q6. UPRVUNL Technician Grade 2 Mechanical Fitter, 9 May 2015.** The bore of the cylinder of an IC engine is well refined by: (a) Ultrasonic machining (b) Honing (c) Lapping (d) Grinding

*Answer: (b).* Honing stones finish the bore and leave a cross-hatch pattern that holds lubricating oil for the piston rings.

## 5. Metal forming and sheet metal

Forming questions split into two kinds: which process puts which stress on the metal, and the blanking-versus-punching clearance rule. The rule is asked across exams almost every year, along with a short force numerical.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Hot vs cold working | Hot working is done above the recrystallisation temperature (about 0.4–0.5 of the melting point in kelvin): lower force, no strain hardening, but scale and poorer accuracy. Cold working is below it: strain hardening raises strength and gives better finish and accuracy, but needs more force. |
| Recrystallisation temperature | It sets the boundary, not room temperature. Lead and tin recrystallise below room temperature, so working them at room temperature counts as hot working. |
| Forging | Shaping by hammer or press blows. Open die (smith) forging, closed (impression) die and drop forging, press forging, and upset forging for bolt heads. Operations: drawing out, upsetting, fullering, edging, punching, bending. Closed dies have a flash gutter for excess metal. |
| Rolling | Metal is squeezed between rolls to reduce thickness. Hot rolling makes blooms, billets, slabs and plate; cold rolling makes sheet with a good finish. Mills: two-high, three-high, four-high (small work rolls backed up), cluster and planetary. |
| Thread and ring rolling | Thread rolling forms threads cold without cutting, so the grain flow follows the thread and it is stronger. Ring rolling makes seamless rings such as bearing races. |
| Extrusion | Metal is pushed through a die, so it is under compression and must be highly plastic (aluminium, copper, lead). Direct: ram and product move the same way, more friction. Indirect: the die moves with the ram, less friction. Impact extrusion makes collapsible tubes and cans. |
| Wire and tube drawing | Metal is pulled through a die, so it is under tension. That limits the reduction per pass; tubes are drawn over a mandrel or plug. |
| Blanking vs punching (piercing) | Blanking: the piece cut out is the product, so the die is made to the blank size and the clearance goes on the punch. Punching: the hole is the product, so the punch is made to the hole size and the clearance goes on the die. |
| Clearance and shear | Clearance per side is about 2.5–10% of sheet thickness. Grinding shear (an angle) on the punch or die spreads the cut and lowers the peak force. Shear goes on the die for blanking and on the punch for punching, so the product stays flat. |
| Other sheet metal operations | Bending (with springback), deep drawing (cups), spinning, embossing, coining (both faces in a closed die), notching, lancing, nibbling, trimming and shaving. |
| Press dies | Progressive die: several operations at successive stations, one per stroke. Compound die: two cutting operations at one station in one stroke. Combination die: a cutting and a forming operation at one station. |
| Springback | The sheet opens up a little after bending as elastic strain recovers. It is corrected by overbending. |

### Formulas to memorise

```math
F_{max} = L\, t\, \tau_u \ \ (= \pi d t \tau_u \text{ for a round hole}) \qquad F_{shear} = \frac{F_{max}\, (p\, t)}{s} \ \ (p = \text{penetration fraction, } s = \text{shear})
```

```math
\text{Blanking: } D_{die} = D_{blank},\ D_{punch} = D_{blank} - 2c \qquad \text{Punching: } D_{punch} = D_{hole},\ D_{die} = D_{hole} + 2c
```

```math
D_{blank} = \sqrt{d^2 + 4 d h}\ \text{(cup of diameter } d\text{, height } h\text{)} \qquad \Delta h_{max} = \mu^2 R\ \text{(rolling)} \qquad \varepsilon = \ln\frac{A_0}{A_f}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** Which property must a metal possess to undergo extrusion effectively? (a) Low plasticity (b) High strain hardening (c) High plasticity (d) More toughness

*Answer: (c).* Extrusion forces the whole billet through a small die opening, so the metal must flow easily. A metal that strain hardens quickly would need ever-rising pressure.

**Q2. SSC JE Mechanical, 7 June 2024 (Shift 2).** \_\_\_\_\_\_ is a type of rolling process used in metalworking. (a) Hot rolling (b) Hydroforming (c) Injection moulding (d) Powder metallurgy

*Answer: (a).* Rolling is done hot or cold. Hydroforming shapes sheet with fluid pressure, injection moulding is for plastics, and powder metallurgy compacts powder.

**Q3. ISRO HSFC Technical Assistant Mechanical, 2 January 2025.** In a punching operation, the clearance is provided on: (a) Punch (b) Die (c) Half on the punch and half on the die (d) Either, depending on the designer's choice

*Answer: (b).* In punching the hole is the product, so the punch is kept at the hole size and the die opening is enlarged by the clearance.

**Q4. UPRVUNL JE Mechanical, 25 October 2021 (Shift 2).** In a blanking operation, clearance is provided: (a) Both on punch and die (b) Only on punch (c) Only on die (d) On punch or die depending on the designer's decision

*Answer: (b).* In blanking the cut-out piece is the product, so the die is kept at the blank size and the punch is made smaller by twice the clearance. It is the opposite of Q3.

**Q5. UPPSC AE Mechanical 2019 (Paper I, held 13 December 2020).** Find the blanking force required to punch 10 mm diameter holes in a 3 mm steel sheet. Shear strength = 400 MPa, penetration = 40%, shear on the punch = 2 mm. (a) 22.6 kN (b) 37.7 kN (c) 61.6 kN (d) 94.3 kN

*Answer: (a).* Without shear, F = πdtτ = π × 10 × 3 × 400 = 37.7 kN, which is the trap option. With shear, the same work is spread over 2 mm: F = 37.7 × (0.4 × 3) / 2 = 22.6 kN.

## 6. Milling, drilling, shaping and broaching

SSC JE 2025 asked these machine tools as simple which-part and which-motion questions. RRB JE adds up versus down milling, the drill family of operations and indexing. Learn which tool and work motion each machine uses.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Shaper, planer, slotter | Shaper: a single-point tool moves back and forth in a straight line over a fixed job, cutting on the forward stroke only. Planer: the job moves under a fixed tool, for large work. Slotter: a vertical shaper for internal keyways. |
| Quick return mechanism | A crank and slotted lever makes the idle return stroke faster than the cutting stroke, usually in a ratio of about 3 : 2. |
| Milling | A rotating multi-point cutter. Peripheral (plain or slab) milling cuts with teeth on the circumference, axis parallel to the surface, and is the main job of a horizontal miller: flat faces. Face milling uses teeth on the end face. End mills cut slots and pockets. |
| Up vs down milling | Up (conventional): the cutter turns against the feed and the chip goes from zero to full thickness, so it tends to lift the job. Down (climb): the cutter turns with the feed and the chip goes from full to zero, so it presses the job down, gives a better finish and longer tool life, but needs a backlash eliminator. |
| Milling machines and setups | Column-and-knee types: horizontal, vertical and universal (the table swivels for helical work). Gang milling: several cutters on one arbor at once. Straddle milling: two side cutters machine two parallel faces. |
| Dividing head | A 40 : 1 worm drive for spacing teeth and flutes. Simple indexing: crank turns = 40/N for N divisions. |
| Gear cutting | Form milling with a dividing head for one-off gears. Gear hobbing generates spur and helical gears in mass production. Gear shaping cuts internal and cluster gears. |
| Drilling machines | Bench (sensitive) for small holes with hand feed, pillar, radial (the arm swings over large, heavy jobs), gang and multi-spindle. A chuck holds straight-shank drills; taper-shank drills fit a Morse taper socket and come out with a drift. |
| Twist drill | Standard point angle 118°, helix angle about 30°. Two flutes carry the chips out. |
| Hole-finishing operations | Reaming sizes and smooths a drilled hole with a small cut. Boring enlarges and trues a hole with a single-point tool. Counterboring makes a flat-bottomed step for a bolt head; countersinking makes a cone for a flat-head screw. Spot facing flattens a seat; tapping cuts an internal thread. |
| Broaching | A long tool whose teeth each stand a little higher than the last (rise per tooth), so one pass gives the finished shape. Internal broaching makes keyways, splines and square holes; external broaching shapes outer faces. The feed is built into the tool. Fast, but the tool is costly, so it suits mass production. |

### Formulas to memorise

```math
f_m = f_z\, z\, N\ (\text{mm/min}) \qquad MRR_{mill} = w\, d\, f_m \qquad \text{approach (slab milling)} = \sqrt{d\,(D - d)}
```

```math
t_{drill} = \frac{L + 0.3D}{f N} \qquad MRR_{drill} = \frac{\pi D^2}{4}\, f N \qquad \text{Simple indexing: crank turns} = \frac{40}{N}
```

```math
V_{shaper} = \frac{L\, N\, (1 + m)}{1000}\ (\text{m/min}) \quad (m = \text{return time / cutting time},\ L = \text{stroke in mm},\ N = \text{strokes/min})
```

(f\_z = feed per tooth, z = number of teeth, w = width and d = depth of cut, D = cutter or drill diameter.)

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** In peripheral milling, cutting action occurs at the: (a) Cutter's face (b) Cutter's circumference (c) Cutter's shank (d) Cutter arbor

*Answer: (b).* In peripheral (slab) milling the cutter axis is parallel to the work surface and the teeth on its circumference do the cutting. Cutting with the end teeth is face milling.

**Q2. SSC JE Mechanical, 4 December 2025 (Shift 2).** Which surface is mainly produced on a horizontal milling machine? (a) Spiral (b) Circular (c) Flat (d) Helical

*Answer: (c).* A horizontal miller's arbor-mounted cutter mainly mills flat faces, slots and steps. Helical work needs a universal machine with a swivelling table and a dividing head.

**Q3. SSC JE Mechanical, 4 December 2025 (Shift 2).** Which part holds the drill in the drilling machine? (a) Base (b) Chuck (c) Arbor (d) Arm

*Answer: (b).* A drill chuck grips straight-shank drills. The arm belongs to a radial drill, and an arbor carries milling cutters.

**Q4. SSC JE Mechanical, 11 October 2023 (Shift 2).** In the shaping process, the cutting tool moves: (a) In a parabolic motion (b) In an elliptical motion (c) In a circular motion (d) In a straight line

*Answer: (d).* The ram carries the single-point tool back and forth in a straight line. It cuts on the forward stroke, and the job is fed sideways during the quick return.

**Q5. RRB JE CBT-2 Mechanical, 31 August 2019.** Which of the following operations does NOT use a multiple-point cutting tool? (a) Broaching (b) Drilling (c) Turning (d) Milling

*Answer: (c).* Turning uses a single-point tool. A drill has two cutting lips, and milling cutters and broaches have many teeth.

**Q6. SSC JE / RRB JE question bank (Testbook).** Down milling is also called: (a) End milling (b) Conventional milling (c) Face milling (d) Climb milling

*Answer: (d).* In down milling the cutter "climbs" onto the work in the feed direction. Up milling is the one called conventional milling.

## 7. Unconventional machining

These questions match a process to its energy source, its fluid and the materials it can or cannot cut. One table of pairs covers nearly all of them, and Kerala PSC asks this area more than the other two exams.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Why unconventional | For very hard or brittle materials, complex shapes and fine holes, where a cutting tool would fail. Grouped by energy: mechanical (USM, AJM, WJM), electrochemical (ECM, ECG), thermal (EDM, wire EDM, LBM, EBM, PAM) and chemical (chemical milling). |
| EDM (electric discharge machining) | Repeated sparks across a small gap erode the work, which must conduct electricity. Tool and work sit in a dielectric (kerosene or paraffin oil). A servo holds the gap at about 0.025–0.05 mm. The tool (copper or graphite) also wears. Used for dies, moulds, hardened steel and carbide. |
| Wire EDM | A moving brass wire is the electrode and deionised water is the dielectric. It cuts through-profiles such as punch and die shapes. |
| ECM (electrochemical machining) | Electroplating in reverse: the work is the anode, the tool the cathode, and electrolyte (NaCl or NaNO₃) is pumped through the gap. The tool does not wear, and the surface is burr-free with no residual stress. Used for turbine blades and deburring. |
| USM (ultrasonic machining) | The tool vibrates at about 20 kHz with an amplitude of 15–50 µm and hammers an abrasive slurry (boron carbide, SiC) into the work. Best for hard, brittle non-conductors such as glass, ceramics, silicon and germanium; poor on ductile metals such as copper. |
| AJM and water jet | AJM blows fine abrasive (10–50 µm) in a gas jet at about 150–300 m/s, for brittle materials, deburring and frosting glass. A water jet cuts soft materials (rubber, food, foam); an abrasive water jet cuts metals and stone. |
| LBM (laser beam machining) | A focused CO₂ or Nd:YAG laser melts and vaporises the material. It drills tiny holes in almost any material, conductive or not, with no contact. Shiny, reflective metals are harder to machine. |
| EBM (electron beam machining) | A beam of fast electrons in a vacuum for very fine holes and slots. The vacuum chamber limits job size. |
| PAM (plasma arc machining) | Plasma at about 10 000–30 000 °C cuts conductive metals quickly, such as stainless steel and aluminium plate. |
| Chemical machining | An etchant dissolves metal where a maskant does not cover it. Chemical milling, chemical blanking, printed circuit boards. |
| Which process cannot cut what | EDM and ECM need a conductive workpiece, so they cannot machine glass, ceramics or plastics. USM and AJM need brittle work and are poor on soft, ductile metals. |

### Formulas to memorise

```math
\dot m_{ECM} = \frac{A\, I}{Z\, F} \qquad MRR_{ECM} = \frac{A\, I}{\rho\, Z\, F} \quad (F = 96\,500 \text{ C}; A = \text{atomic weight}, Z = \text{valency})
```

```math
E_{spark} = \tfrac{1}{2} C V^2 \ \text{(EDM, RC circuit)} \qquad \text{Laser power density} = \frac{P}{\pi d^2/4}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 16 November 2022 (Shift 2).** In electric discharge machining (EDM), the gap between the tool and workpiece should be: (a) 0.1 to 0.3 mm (b) 0.025 to 0.05 mm (c) 0.25 to 0.5 mm (d) 0.015 to 0.025 mm

*Answer: (b).* A servo keeps the spark gap at about 0.025–0.05 mm. Wider, and no spark jumps; closer, and the tool shorts against the work.

**Q2. NPCIL Stipendiary Trainee Mechanical, 7 November 2019 (Shift 2).** A dielectric is used in: (a) Electrochemical machining (b) Ultrasonic machining (c) Electric discharge machining (d) Laser machining

*Answer: (c).* EDM's kerosene or oil dielectric stays insulating until the spark breaks it down, then flushes away the eroded particles. ECM uses a conducting electrolyte, which is the opposite.

**Q3. UPPSC AE Mechanical 2019 (Paper I, held 13 December 2020).** For machining ceramics, glasses and plastics, which method is NOT applicable? (a) LBM (b) AJM (c) EDM (d) USM

*Answer: (c).* A spark can only pass through a conductive workpiece, and these three materials are insulators. Laser, abrasive jet and ultrasonic machining do not need conductivity.

**Q4. ISRO Refrigeration and Air Conditioning, 2020.** Which of the following is not generally machined by ultrasonic machining (USM)? (a) Copper (b) Glass (c) Silicon (d) Germanium

*Answer: (a).* USM removes material by brittle chipping under abrasive impact. Ductile copper just deforms, while glass, silicon and germanium are brittle.

**Q5. UPPSC Lecturer Mechanical 2021 (Paper I, held 23 December 2021).** Electrochemical machining is used to: (a) Remove material from the workpiece (b) Clean the internal surface (c) Clean the external surface (d) None of the above

*Answer: (a).* ECM dissolves metal atom by atom from the anode (work) into the electrolyte, so it is a material removal process shaped by the tool.

## 8. NC/CNC and part programming

CNC questions are nearly always "what does this code mean". Memorise the two code lists below, plus absolute versus incremental, and this sub-topic is quick marks.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| NC, CNC, DNC | NC: a fixed, hard-wired controller read from punched tape. CNC: an on-board computer stores and edits the program. DNC: one central computer feeds programs to several machines. |
| Axes | Z is always the spindle axis. X is the longest horizontal travel at right angles to Z. Y follows the right-hand rule. A, B and C are rotations about X, Y and Z. |
| Types of control | Point-to-point for drilling and punching (position only). Straight-cut for movement along one axis at a time. Contouring (continuous path) for profiles, with two or more axes moving together. |
| Open vs closed loop | Open loop: stepper motors with no position feedback. Closed loop: servo motors with an encoder or resolver feeding back the actual position. |
| Ball screw | A recirculating ball screw turns rotation into table movement with low friction and almost no backlash. |
| Program block | One line of word-address code: N (sequence number), G (preparatory), X/Y/Z (coordinates), F (feed), S (spindle speed), T (tool), M (miscellaneous). |
| Common G codes | G00 rapid traverse, G01 linear interpolation, G02 clockwise arc, G03 counter-clockwise arc, G04 dwell. G17/G18/G19 select the XY/ZX/YZ plane, G20/G21 inch/metric. G28 return home. G40/G41/G42 cutter radius compensation off/left/right. G81 drilling cycle. G90 absolute, G91 incremental. G94 feed per minute, G95 feed per revolution. |
| Common M codes | M00 program stop, M01 optional stop, M02 end of program, M03 spindle on clockwise, M04 spindle on counter-clockwise, M05 spindle stop, M06 tool change, M08 coolant on, M09 coolant off, M30 end of program and rewind. |
| Absolute vs incremental | Absolute (G90): every coordinate is measured from the program zero. Incremental (G91): every coordinate is measured from the previous point. |
| APT and CAD/CAM | APT is a high-level part programming language for complex shapes. CAD/CAM software now writes the G-code from the 3D model. |
| Machining and turning centres | CNC machines with an automatic tool changer (ATC) and often a pallet changer, so one setup can do many operations. |

### Formulas to memorise

```math
BLU = \frac{p}{n_s \times i} \quad (p = \text{lead screw pitch},\ n_s = \text{motor steps per revolution},\ i = \text{gear ratio motor : screw})
```

### Past exam questions with solutions

**Q1. DRDO CEPTAM Tier-II STA-B Mechanical, 15 June 2026.** The part programming code for tool rapid traverse in CNC machines is: (a) G05 (b) G06 (c) G04 (d) G00

*Answer: (d).* G00 moves the tool to a point at the machine's fastest rate without cutting. G01 is the cutting move at feed rate, and G04 is a dwell.

**Q2. NRL GET Mechanical, 23 September 2021 (Shift 3).** In CNC part programming, G03 and G91 refer to: (a) Counter-clockwise circular interpolation and incremental dimension (b) Clockwise circular interpolation and incremental dimension (c) Clockwise circular interpolation and absolute dimension (d) Counter-clockwise circular interpolation and absolute dimension

*Answer: (a).* G02 is clockwise and G03 counter-clockwise. G90 is absolute and G91 incremental.

**Q3. WBMSC Sub-Assistant Engineer Mechanical, 5 June 2022.** In CNC machines, the M09 code stands for: (a) Coolant on (b) Coolant off (c) Flood coolant on (d) Coolant heat up

*Answer: (b).* M08 turns the coolant on and M09 turns it off. Learn the M codes as pairs: M03/M04/M05 for the spindle, M08/M09 for coolant.

**Q4. TSPSC AEE Mechanical 2015 (Paper II).** M06 represents which instruction in CNC programming? (a) Program stop (b) Tool change (c) Coolant on (d) Spindle on

*Answer: (b).* M06 calls the tool change. Program stop is M00, coolant on is M08 and spindle on (clockwise) is M03.

## 9. Jigs and fixtures, powder metallurgy

These two small topics are asked only now and then, but the questions repeat: jig versus fixture, the 3-2-1 rule, and the order of powder metallurgy steps. One study day covers both.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Jig vs fixture | A jig holds the work and also guides the tool through hardened drill bushes (drilling, reaming, tapping). A fixture only locates and holds the work, often with a setting block for setting the tool (milling, turning, grinding, welding). |
| 3-2-1 principle | A free body has 12 degrees of freedom (6 movements, 6 rotations). Three locators on the main face, two on the side and one on the end remove 9; the clamps remove the last 3. |
| Locators | Pins, V-blocks for round work, a diamond pin to avoid locating the same direction twice, nests. Locate on machined faces, and make the design fool-proof so a job can only go in one way. |
| Clamps | Strap, screw, cam (quick action), toggle, and hydraulic or pneumatic clamps. Clamp over a solid support so the work does not bend, and let the cutting force push towards the locators, not the clamps. |
| Drill bushes | Fixed (press-fit) for one operation, renewable for long runs, slip bushes for drilling then reaming the same hole, liner bushes to hold renewable ones. |
| Types of jig | Template, plate, leaf (hinged lid), box (work on several faces), channel and indexing jigs. |
| Powder production | Atomisation of molten metal (the most common), reduction of oxides, electrolysis and mechanical pulverisation. |
| Powder metallurgy steps | Blending (with a lubricant such as zinc stearate) → compaction in a die into a green compact → sintering below the melting point, where particles bond by diffusion → secondary operations. |
| Secondary operations | Sizing, coining, machining, heat treatment, forging. Impregnation fills the pores with oil or grease for self-lubricating bearings. Infiltration fills them with a lower-melting metal, such as copper into iron. |
| Typical PM products | Cemented carbide tool tips (tungsten carbide with cobalt binder), self-lubricating bronze bearings, porous filters, tungsten filaments, small gears and magnets. |
| Why PM | Almost no scrap, controlled porosity, and metals or mixes that cannot be cast (tungsten, carbides, cermets). Against it: costly powders and dies, limited part size and lower strength from porosity. |

### Formulas to memorise

```math
\text{Relative density} = \frac{\rho_{part}}{\rho_{solid}} \qquad \text{Porosity} = 1 - \frac{\rho_{part}}{\rho_{solid}} \qquad F_{press} = p \times A_{projected}
```

### Past exam questions with solutions

**Q1. RRB ALP CBT-2 Fitter, 21 January 2019 (Shift 2).** A fixture is used to: (a) Cut the workpiece (b) Drill the workpiece (c) Hold the workpiece (d) Guide the tool

*Answer: (c).* A fixture locates and holds the job. Guiding the tool is what makes a device a jig.

**Q2. NHPC JE Mechanical, 6 April 2022 (Shift 1).** Cemented carbide tools are normally manufactured via: (a) Powder metallurgy (b) Welding (c) Forging (d) Casting

*Answer: (a).* Tungsten carbide melts at about 2870 °C and cannot be cast economically. Its powder is mixed with cobalt, pressed and sintered, with the cobalt binding the grains.

**Q3. SAIL OCTT Mechanical 2019 (Shift 1).** Arrange in sequence the operations for producing powder metallurgy parts: P. Forging, Q. Sintering, R. Compaction, S. Blending. (a) S, R, P, Q (b) S, P, R, Q (c) S, R, Q, P (d) None of these

*Answer: (c).* Blend, compact, sinter, then any secondary operation. Forging a sintered preform (powder forging) comes last.

**Q4. ESE Mechanical 2014 (Paper 2).** The process of impregnation in powder metallurgy is best described by: (a) Rapid cooling after sintering to avoid thermal stresses (b) Filling a low-melting metal into the pores of a sintered part (c) Filling liquid oil or grease into the pores of a sintered part (d) Rapid heating during sintering to avoid gas pressure from the lubricant

*Answer: (c).* Impregnation gives self-lubricating bearings that release oil as they warm up in service. Option (b) is infiltration, a different operation.

## Sources

Each question's exam and date come from the page it was taken from; the solutions are written fresh. Where JE papers had no published question on a point, the question comes from another technical exam at the same level (BHEL, ISRO, NHPC, UPPSC, DRDO and others). The one marked "question bank" comes from a Testbook topic page that shows no year. Few RRB JE 2024–25 questions are published one by one, so also solve the full official papers.

- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Sub-topic 1: [neutral flame ratio](https://testbook.com/question-answer/what-is-the-ratio-between-oxygen-and-acetylene-gas--6946cb4980d15f57f7cdd63c), [seam welding](https://testbook.com/question-answer/seam-welding-is-aan-____-welding-process--6946cb498fab3f1eae9d38a0), [shielding gas](https://testbook.com/question-answer/which-gas-is-typically-employed-as-a-shielding-gas--6946cb4a36b413234f08e5c0), [granular flux](https://testbook.com/question-answer/flux-is-used-in-the-form-of-granules-in-which-weld--6946cb4b6acde68c6196d178), [SAW electrode](https://testbook.com/question-answer/_________-is-used-in-submerged-arc-welding-process--68470be27f3dd5d94bcf6ab6), [GTAW electrode](https://testbook.com/question-answer/_______________-type-of-electrode-is-used-in-gas-t--6811f63749458142f38dbb73), [porosity](https://testbook.com/question-answer/_____-is-a-welding-defect-caused-by-trapping-of-ga--6811fbdec0bf944e8394d144)
- Sub-topic 2: [tool post](https://testbook.com/question-answer/which-part-holds-the-tool-in-a-lathe--6946c89124dd1216cfdb1b84), [feed rod](https://testbook.com/question-answer/which-lathe-part-moves-the-carriage-automatically--6946c89186ed7ecb99da45d1), [compound rest taper](https://testbook.com/question-answer/which-taper-turning-method-uses-swiveling-of-the-c--6946c9aecf47ed7ecd095695), [parting-off feed](https://testbook.com/question-answer/in-a-parting-off-operation-how-is-the-cutting-too--68470cff63828dcc1f55618c), [Taylor tool life](https://testbook.com/question-answer/using-taylors-tool-life-vt0-5-cthe-t--5f45f1cc65935845cc92e5a9), [Merchant shear angle](https://testbook.com/question-answer/in-the-metal-cutting-operation-what-will-be-the-s--5f3292d8516b720d14edf802)
- Sub-topic 3: [purpose of a pattern](https://testbook.com/question-answer/what-is-the-purpose-of-a-pattern-in-the-casting-pa--666d8de2269eca80e6aafc07), [chaplet](https://testbook.com/question-answer/what-is-the-main-purpose-of-the-chaplet-in-sand-mo--6946cb496acde68c6196d106), [shell moulding](https://testbook.com/question-answer/shell-molding-is-best-suited-for-which-of-the-foll--6946cb4a896dfb75f9cd68f6), [draft allowance](https://testbook.com/question-answer/what-is-the-purpose-of-providing-a-draft-allowance--690a7b4cf579995fc0b2e8d2), [investment casting finish](https://testbook.com/question-answer/which-one-of-the-following-casting-processes-produ--5fc77c603dcf02bacb65f8c4)
- Sub-topic 4: [what a wheel is made of](https://testbook.com/question-answer/from-the-following-options-choose-what-a-grinding--6946c9b3cf47ed7ecd0956da), [centreless grinding](https://testbook.com/question-answer/in-which-of-the-following-is-centerless-grinding-u--6946c9b3b4bedd969c3c4455), [wheel grade](https://testbook.com/question-answer/the-grade-of-a-grinding-wheel-refers-to--6946c9b33667aefd61dcc01a), [wheel selection rule](https://testbook.com/question-answer/which-of-the-following-is-the-correct-rule-when-se--681084cc7e52c055c843d09f), [grinding carbide](https://testbook.com/question-answer/the-grinding-of-carbide-materials-is-done-by-using--624fd9c47657657110350653), [honing a bore](https://testbook.com/question-answer/the-bore-of-the-cylinder-of-the-ic-engine-is-well--5fa11753ef9f4a5a9f043392)
- Sub-topic 5: [extrusion property](https://testbook.com/question-answer/which-property-must-a-metal-possess-to-undergo-ext--6946c9b486ed7ecb99da5781), [hot rolling](https://testbook.com/question-answer/________-is-a-type-of-rolling-process-used-in-meta--666d8e0471114110c81ca402), [punching clearance](https://testbook.com/question-answer/in-punching-operation-the-clearance-is-provided-o--684fc2b13bfa91895005cd08), [blanking clearance](https://testbook.com/question-answer/in-blanking-operation-clearance-provided-is--618cc92594236c15a936940d), [blanking force with shear](https://testbook.com/question-answer/find-the-blanking-force-required-to-punch-10-mm-di--5ff49639f3f02592ba1a492f)
- Sub-topic 6: [peripheral milling](https://testbook.com/question-answer/in-peripheral-milling-cutting-action-occurs-at--6946c9ae4364627d0bcc8528), [horizontal milling](https://testbook.com/question-answer/which-surface-is-mainly-produced-on-a-horizontal-m--6946c892d23147c2e27eb9a7), [drill chuck](https://testbook.com/question-answer/which-part-holds-the-drill-in-the-drilling-machine--6946c892b57af4bb273f0390), [shaper tool motion](https://testbook.com/question-answer/in-the-shaping-process-the-cutting-tool-moves-___--6530213d603df04d931cfd0e), [single-point tool](https://testbook.com/question-answer/which-of-the-following-operations-does-not-use-a-m--5f642aec4cd219f7ac5a7e13), [climb milling](https://testbook.com/question-answer/down-milling-is-also-called--5a9156dca267a826fd839340)
- Sub-topic 7: [EDM gap](https://testbook.com/question-answer/in-electrode-discharge-machining-edm-process-th--637efce6742435922b08774d), [dielectric](https://testbook.com/question-answer/a-dielectric-is-used-in--5fbcd4dcab63c84da0cdce1f), [EDM on ceramics](https://testbook.com/question-answer/for-machining-ceramics-glasses-and-plastics-whic--5ff611dc84465a600ad7c4c3), [USM on copper](https://testbook.com/question-answer/which-of-the-following-is-not-generally-machined-b--600dc5099a930a0bd69bbc47), [ECM use](https://testbook.com/question-answer/electro-chemical-machining-is-used-to--61cdb6f3f90057a671450721)
- Sub-topic 8: [G00 rapid traverse](https://testbook.com/question-answer/the-part-programming-code-for-tool-rapid-traverse--6a38caf8f0d3338fcbf7d522), [G03 and G91](https://testbook.com/question-answer/in-the-cnc-part-programming-g03-and-g91-refers-to--6166d275fdb77cebe3723d97), [M09](https://testbook.com/question-answer/in-cnc-machines-m09-code-stands-for--68c0393782fc7fd4f1d2d2ea), [M06](https://testbook.com/question-answer/mo6-represents-the-following-instruction-in-cnc-pr--6323813ae89a057146ee51f7)
- Sub-topic 9: [fixture](https://testbook.com/question-answer/a-fixture-is-used-to-_____--5f55b19ed59f3d9e4e2bb967), [carbide tools by PM](https://testbook.com/question-answer/cemented-carbides-tools-are-normally-manufactured--625c1c96dc4014cdafec4585), [PM sequence](https://testbook.com/question-answer/the-following-operations-are-involved-in-producing--65e2fbab7590df4ebbb5a5e1), [impregnation](https://testbook.com/question-answer/the-process-of-impregnation-in-powder-metallurgy-t--5ef99fc7749d541b6099e102)
