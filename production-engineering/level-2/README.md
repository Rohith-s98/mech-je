# Production Engineering Level 2: Theory Deep Dive

Nov 9, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the short notes and past questions are.

Conventions used throughout:

- Lengths are in mm. Cutting speed is in m/min, so V = πDN/1000 with D in mm and N in rpm. Grinding wheel speed is in m/s.
- Feed f is in mm per revolution (mm/rev) for turning and drilling, and in mm per tooth for milling. Depth of cut d is in mm.
- Stress is in MPa, and 1 MPa = 1 N/mm². So length (mm) × thickness (mm) × stress (MPa) gives a force in newtons directly.
- In metal cutting, α is the rake angle, φ the shear angle and β the friction angle, all in degrees.

## 1. Welding processes and defects

Welding turns two pieces of metal into one by letting their atoms bond across the joint. Fusion processes melt the edges together; solid-state processes use pressure and heat below melting. Nearly every question here pairs a process with its electrode, gas, flame or polarity, and the pairs stop looking random once you see what each process is solving.

### The picture

Think of frying an egg in an open kitchen. You need a stove, a lid to keep dust off, and sometimes extra food added to the pan. Hot metal is far fussier than an egg: at 1,500 °C it grabs oxygen, nitrogen and hydrogen from the air within a second, and they leave it brittle or full of holes.

So every welding process is three answers: where the heat comes from, what keeps the air out, and where any extra (filler) metal comes from.

| Process | Heat | What keeps the air out | Filler |
| --- | --- | --- | --- |
| Stick (SMAW) | Arc | Gas and slag from the electrode coating | The coated electrode itself |
| TIG (GTAW) | Arc from a tungsten electrode | Argon or helium | A separate rod, or none |
| MIG / MAG (GMAW) | Arc | Argon or helium (MIG); CO₂ or argon–CO₂ (MAG) | Wire fed continuously |
| Submerged arc (SAW) | Arc, hidden under flux | A blanket of granular flux | Bare wire |
| Oxy-acetylene gas | Flame | The flame's own outer envelope, plus flux for some metals | A separate rod |
| Resistance | I²Rt at the contact | Nothing needed: the joint is squeezed shut | None |
| Thermit | A chemical reaction | Slag floating on top | Iron made by the reaction |
| Electron beam | Beam of electrons | Vacuum | Usually none |
| Laser | Beam of light | Gas jet | Usually none |

Learn each row as its three answers. "Which process uses granular flux" and "which electrode does TIG use" are then just a look along one row.

### Twisted points

**Polarity: electrons hit hardest at the positive end.** In a DC arc, electrons stream at high speed from the negative terminal to the positive one. Their impact releases about two-thirds of the arc heat at the positive end and one-third at the negative end. In DCEN (straight polarity) the work is positive, so it gets the larger share and the weld penetrates deeper. In DCEP (reverse polarity) the electrode gets it, so the electrode melts fast while thin sheet is spared from burning through.

TIG shows why this matters. On steel, TIG runs on DCEN so the tungsten gets only a third of the heat and stays solid. Aluminium is TIG welded on AC: in the electrode-positive half, positive ions strike the work and break its tough oxide skin (cathodic cleaning), and in the other half the tungsten cools. MIG runs on DCEP because there the wire is meant to melt fast; penetration questions still follow the two-thirds rule.

**The neutral flame is 1 : 1 at the torch but 1 : 2.5 overall.** Burning acetylene completely takes 2.5 volumes of oxygen per volume of acetylene. The torch supplies only one: the inner cone burns acetylene to carbon monoxide and hydrogen, and the 3,200 °C peak sits just beyond its tip. The outer envelope then burns those two gases with 1.5 volumes of oxygen drawn from the surrounding air.

```math
\text{Inner cone: } \mathrm{C_2H_2 + O_2 \rightarrow 2CO + H_2} \qquad \text{Outer envelope: } \mathrm{2CO + H_2 + 1.5\,O_2 \rightarrow 2CO_2 + H_2O}
```

This is also how a gas flame shields the pool. The CO and H₂ from the inner cone are hungry for oxygen, so they mop it up before it reaches the molten metal.

**Each flame suits the metal it protects.** Extra oxygen gives an oxidising flame, the hottest of the three. It would burn the carbon out of steel, but it suits brass: zinc boils at 907 °C, about where brass melts, and the oxide skin the flame forms stops the zinc fuming away. Extra acetylene gives a carburising flame, with a white feather beyond the inner cone. It adds carbon instead of removing it, so it suits high-carbon steel, nickel alloys and hard-facing.

**Acetylene hides in acetone, like gas in a soda bottle.** Free acetylene compressed above about 1 bar can decompose explosively, even with no oxygen present. So the cylinder is packed with a porous filler soaked in acetone, which dissolves about 25 times its own volume of acetylene at atmospheric pressure, and more as pressure rises. Open the valve and the gas bubbles out, as CO₂ leaves an opened soda; keep the cylinder upright, or acetone comes out too.

**Coating, flux and gas do the same job three ways.** In stick welding the coating burns to give a gas shield and melts into slag that floats up and covers the hot bead. It also carries easily ionised salts that help the arc strike and stay lit, which matters on AC. SAW does the shielding with a separate blanket of granular flux, so its wire is bare; TIG and MIG do it with argon or helium, so they need no flux at all.

**Why SAW welds flat only, and its arc cannot be seen.** The arc burns under a heap of loose granules, so there is no glare and almost no spatter. The same loose heap would slide off a vertical or overhead joint. So SAW is kept to flat welds and horizontal fillets, where it lays down metal very fast on thick plate: ship decks, pressure vessels, pipe seams.

**Arc length and the drooping power source.** Arc voltage rises with arc length, roughly V = A + Bl. A longer arc spreads its heat: the bead gets wider and flatter, penetration drops, and spatter and undercut rise. A hand-held stick electrode never keeps an exact arc length, so its machine has a drooping (constant-current) characteristic: a change in arc length moves the voltage a lot but the current, which sets the melting, only a little. MIG uses a flat (constant-voltage) source instead, and the wire's melting rate corrects the arc length by itself.

**Resistance welding heats exactly where the sheets touch.** H = I²Rt, and the highest resistance in the whole circuit is the contact between the two sheets. So the heat appears right there, as warmth appears where you rub your palms together. The copper electrodes have low resistance and are water-cooled, so they stay cool and do not stick.

That contact resistance is only micro-ohms, so the process needs thousands of amperes at a few volts for a fraction of a second. Current is squared, so it matters far more than time: double the current and the heat goes up four times. The family differs only in how the current reaches the joint:

- **Spot:** two pointed electrodes make one nugget.
- **Seam:** two roller electrodes make a row of overlapping spots, a leak-tight joint for fuel tanks.
- **Projection:** small bumps pressed into one sheet focus the current, so several welds form at once.
- **Upset butt:** the ends are pressed together first, then the current flows.
- **Flash butt:** current first, with the ends touched lightly so they arc and flash, then pushed hard together. Used for rails and chain links.
- **Percussion:** a capacitor discharge welds a wire or stud to a surface in milliseconds.

**Thermit needs no electricity.** Aluminium powder pulls the oxygen out of iron oxide, and the reaction runs hot enough, around 2,500 °C, to leave molten steel. That steel is poured into a mould around the gap. It needs no power supply and no gas cylinders, so it is how rails are joined out on the track, while flash butt welding joins them in the depot.

```math
\mathrm{Fe_2O_3 + 2\,Al \rightarrow 2\,Fe + Al_2O_3} + \text{heat}
```

**Brazing and soldering never melt the base metal.** In welding, the joint edges melt and mix with the filler. In brazing and soldering only the filler melts; it wets the clean surfaces and is drawn into a tight gap by capillary action, the way tea climbs up a sugar cube. The only line between them is the filler's melting point, 450 °C. Braze welding is the odd one: brazing filler (brass or bronze) laid as a bead in a groove, like a weld, with no capillary flow.

**Beams: a tiny spot, a deep narrow weld.** An electron beam or a laser puts a huge power into a spot less than a millimetre across. The metal vaporises into a thin keyhole, so the weld can be more than ten times deeper than it is wide, with the smallest HAZ of any process. Electrons are tiny charged particles that scatter off air molecules, so EBW needs a vacuum chamber, which limits the job size; light passes through air, so a laser does not.

**The HAZ, not the bead, is often the weak spot.** The weld metal is fresh filler, often a little stronger than the plate. The metal beside it never melted, but it was heated nearly to melting and then cooled fast by the cold plate around it. Its grains grow coarse, and hardenable steel can quench there to hard, brittle martensite.

That is why thick or alloy steel is preheated: slower cooling gives a softer HAZ. Hydrogen from damp electrodes makes things worse, cracking the HAZ hours after welding (cold cracking). Low-hydrogen electrodes are baked dry before use for this reason.

**Every defect traces back to heat, air or dirt.**

| Defect | What you see | Root cause |
| --- | --- | --- |
| Porosity, blowholes | Round gas holes | Air or moisture: damp electrodes, rust, oil, poor shielding |
| Slag inclusion | Slag trapped inside the bead | Dirt: slag not chipped off between passes |
| Undercut | A groove melted at the toe and left unfilled | Too much heat at the edge: high current, long arc, fast travel |
| Lack of fusion | Weld lying on the plate, not melted into it | Too little heat, wrong electrode angle, dirty surface |
| Incomplete penetration | Root of the joint not reached | Too little heat, fast travel, small root gap |
| Hot crack | Crack down the bead centre as it freezes | Sulphur in the steel, high restraint |
| Cold crack | Crack in the HAZ, hours later | Hydrogen plus a hard HAZ |
| Spatter | Metal droplets stuck around the weld | High current, long arc |
| Distortion | The plate bends or twists | Uneven heating, then uneven shrinkage |

**Testing: match the method to where the flaw hides.**

| Method | How it shows a flaw | Finds | Works on |
| --- | --- | --- | --- |
| Dye penetrant | Dye seeps into a crack; a white developer draws it back out | Surface-breaking flaws only | Any non-porous material |
| Magnetic particle | A crack makes the magnetic field leak out, and iron powder gathers there | Surface and just below it | Ferromagnetic metals only (not aluminium, copper or austenitic stainless) |
| Radiography | Less metal lets more X-rays through, so flaws show dark on film | Internal porosity and slag | Any metal |
| Ultrasonic | A sound pulse echoes back early from a flaw | Internal cracks and laminations, from one side | Most metals |

### Worked numbers

**Duty cycle.** A welding set is rated 300 A at 60% duty cycle, meaning it can run 6 minutes in every 10 at 300 A. Heating goes as I², so I²D stays constant.

```math
D_2 = D_1\left(\frac{I_1}{I_2}\right)^2 = 60\% \times \left(\frac{300}{250}\right)^2 = 60\% \times 1.44 = 86.4\%
```

For continuous welding (D = 100%), I = 300 × √0.60 = 232 A.

**Where the arc settles.** A power source has 80 V open-circuit voltage and 400 A short-circuit current, so its line is V = 80 − 0.2I. The arc follows V = 20 + 4l, with l in mm.

- At l = 5 mm the arc needs 20 + 4 × 5 = 40 V. Then 40 = 80 − 0.2I, so I = 200 A and the arc power is 40 × 200 = 8 kW.
- At l = 6 mm the arc needs 44 V, so I = 180 A.

The arc got 20% longer but the current fell only 10%. That steadiness is what the drooping source is for.

**Heat input per mm.** Stick welding at 24 V and 200 A, travelling at 4 mm/s, with an arc efficiency of 0.75:

```math
H = \frac{\eta V I}{v} = \frac{0.75 \times 24 \times 200}{4} = 900\ \text{J/mm} = 0.9\ \text{kJ/mm}
```

Travel twice as fast and the heat input halves, giving a smaller bead that cools faster and a harder HAZ.

**Spot weld heat.** Current 10,000 A, contact resistance 100 µΩ (0.0001 Ω), time 0.25 s:

```math
H = I^2 R t = (10\,000)^2 \times 0.0001 \times 0.25 = 2\,500\ \text{J}
```

Double the current and halve the time: 4 × ½ = 2 times the heat, 5,000 J. Current beats time.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Reverse polarity (DCEP) gives deeper penetration. | Straight polarity (DCEN) puts about two-thirds of the heat into the work, so it penetrates deeper. DCEP melts the electrode faster. |
| The neutral flame gets all its oxygen from the cylinder. | The cylinder gives 1 volume per volume of acetylene; the other 1.5 volumes come from the air around the outer envelope. |
| The oxidising flame is for steel. | It burns carbon out of steel. It is for brass and bronze, where its oxide skin stops the zinc boiling off. |
| Acetylene is stored as a compressed gas. | It is dissolved in acetone in a porous filler, because free acetylene above about 1 bar can explode. |
| TIG always uses filler, from the tungsten. | Tungsten never melts into the joint. TIG welds with a separate filler rod or with none at all. |
| MIG and MAG use the same gas. | MIG uses inert argon or helium. MAG uses active CO₂ or argon–CO₂ mixes, so it suits steels only. |
| Seam welding is an arc weld along a seam. | It is resistance welding with roller electrodes: a row of overlapping spot welds. |
| Brazing is just hot soldering, and both melt the joint a little. | Neither melts the base metal. The only line between them is the filler's melting point, 450 °C. |
| SAW can weld in any position. | Its loose flux would fall away, so it is flat and horizontal-fillet only. |
| Undercut comes from trapped gas. | Gas causes porosity. Undercut is a groove at the toe from high current, a long arc or fast travel. |
| Magnetic particle testing finds deep internal flaws in any metal. | It finds surface and near-surface flaws, in ferromagnetic metals only. Use radiography or ultrasonic for internal flaws. |
| The weld bead is always the weakest part. | The HAZ often is, because its grains coarsened or it hardened as it cooled. |

## 2. Machining: lathe, tool geometry, chips and tool life

A cutting tool does not slice metal like a knife through butter. It pushes the metal ahead of it until a thin layer shears off along a plane and slides up the tool's face as a chip. Tool angles, chip types, Merchant's circle and Taylor's equation all describe that one event: how easily the layer shears, how hard it rubs on the way out, and how hot the tool gets.

### The picture

Stand a deck of playing cards on a table, leaning a little, and push its bottom edge with a ruler. The cards do not crush; each one slips over the next, and the deck piles up thicker than it was. That is a chip forming: the ruler is the tool face, the line where the cards slip is the shear plane, and the thickened pile is the chip.

The picture explains the three numbers that matter. Tilt the ruler back (more rake) and the cards slip more easily. Make the ruler sticky (more friction) and the pile grows thicker. And since a chip is always that thickened pile, it is always thicker than the layer it came from.

### Twisted points

**Speed, feed and depth are three different motions.** On a lathe the job spins and the tool walks along it. Cutting speed is how fast the job's surface passes the tool tip, V = πDN/1000 m/min. Feed is how far the tool moves along per revolution (mm/rev), and depth of cut is how far it goes in.

Two traps follow. Turning a 50 mm bar down to 46 mm is a depth of cut of 2 mm, not 4, because depth is measured on the radius. And at a fixed rpm, cutting speed depends on diameter: when facing from the outside to the centre, speed falls all the way to zero at the axis. That is why CNC lathes have a constant-surface-speed mode.

**Why the lead screw is used only for threads.** A thread needs the tool to move exactly one pitch for every turn of the job, with no slip. The lead screw is a precision screw geared directly to the spindle, and the half nut locks the carriage onto it. Using it for everyday turning would wear it and spoil its accuracy, so ordinary feed goes through the separate feed rod. For a thread, the change gears are set so that

```math
\frac{\text{driver teeth}}{\text{driven teeth}} = \frac{\text{pitch to cut}}{\text{lead screw pitch}} \qquad \text{e.g. } \frac{1.5}{6} = \frac{1}{4} = \frac{20}{80}
```

**Taper turning works on half the angle.** A taper from diameter D to d over a length L has a half angle given by tan θ = (D − d)/2L. The compound rest is swung to this half angle, not the full included angle, because the tool cuts one side of the job at a time. The other methods trade length against steepness: the compound rest's short slide limits it to short, steep tapers, and offsetting the tailstock suits long, gentle ones.

**What each tool angle does, using a wood chisel.** The rake angle is how far the top face leans back from the cutting edge. More positive rake makes a sharper wedge that cuts with less force, like a freshly sharpened chisel, but it is thinner, so it chips and overheats sooner. The clearance (relief) angle only stops the flank below the edge from rubbing the job; it does not reduce the cutting force.

The nose radius rounds the tip. A bigger radius leaves smaller feed ridges and a stronger tip, but too big a radius makes the tool chatter. The ridge height is h = f²/8R, so doubling the feed makes the surface four times rougher (see the worked numbers).

**The ASA signature reads rakes, reliefs, edges, nose.** Its seven numbers come in pairs, each pair a different kind of angle: back rake and side rake, end relief and side relief, end cutting edge and side cutting edge angles, then the nose radius in mm. A tool marked 8-14-6-6-6-15-1 has an 8° back rake, 14° side rake, 6° end and side relief, 6° end and 15° side cutting edge angles, and a 1 mm nose radius.

**Negative rake suits hard, brittle tools.** Carbides and ceramics are very hard but brittle, like a ceramic mug: strong when squeezed, weak when bent. A negative rake turns the wedge so the cutting load squeezes the edge instead of bending it, and makes the wedge thicker. It costs more force and needs a rigid machine, but it survives hard metals and the shock of interrupted cuts.

**Chip types tell you what is happening at the edge.**

| Chip | When it forms | What it means |
| --- | --- | --- |
| Continuous ribbon | Ductile metal, high speed, large positive rake, good coolant | Steady cutting and good finish; needs a chip breaker so the ribbon does not tangle |
| Continuous with built-up edge (BUE) | Ductile metal, low speed, small rake, poor lubrication | Bits of work weld onto the tool face, grow, break off and scar the surface; raising the speed cures it |
| Discontinuous (segments) | Brittle metal such as cast iron or brass, or very low speed with a heavy feed | Normal and harmless on cast iron |
| Serrated (saw-tooth) | Poor heat conductors such as titanium and hardened steel | Shearing concentrates in narrow bands that heat and soften |

The built-up edge behaves like gum stuck to a shoe: it keeps building up, breaking away and leaving lumps behind. Higher speed makes the chip's underside too hot to stick, so the BUE vanishes.

**Why the chip thickness ratio is below 1.** The chip is the thickened pile of cards, so its thickness t₂ is always more than the uncut thickness t₁, and r = t₁/t₂ is less than 1. Its inverse, the chip reduction coefficient, is more than 1. Metal is not lost, so the chip gets shorter by the same ratio it gets thicker: r = chip length / uncut length = chip speed / cutting speed. Measuring a chip's length is easier than measuring its thickness, so this gives a quick way to find r.

From r and the rake angle you get the shear angle φ. A large φ means a short shear plane, a thin chip and low force. More rake raises φ, because the chip can turn away sooner. More friction lowers it, because the chip drags and piles up. Merchant joined the three in 2φ + β − α = 90°.

**Merchant's circle is one force split three ways.** A dynamometer measures two forces on the tool: the cutting force Fc along the cutting speed, and the thrust force Ft pushing the tool away from the work. Their sum is one resultant R. That same R can be split along the rake face (friction F and normal N) or along the shear plane (shear force Fs and normal Fn).

Every right-angled split of the same R fits on a circle drawn with R as the diameter, which is why the diagram is a circle.

```math
F = F_c\sin\alpha + F_t\cos\alpha \qquad N = F_c\cos\alpha - F_t\sin\alpha \qquad \mu = \frac{F}{N} = \tan\beta
```

```math
F_s = F_c\cos\phi - F_t\sin\phi \qquad A_s = \frac{b\,t_1}{\sin\phi} \qquad \tau_s = \frac{F_s}{A_s} \qquad P = F_c\, V
```

Only Fc does work. The tool moves along the thrust direction at feed speed, which is tiny, so cutting power is simply Fc × V.

**Where the heat goes.** Most cutting heat is made in the shear plane, and the rest by the chip rubbing up the rake face. The chip carries away about 80% of it, the tool about 10% and the work about 10%; at higher speed the chip takes an even bigger share. What limits speed is the tool's share, because a tool softened by heat wears fast.

**Two kinds of wear, two places.** Flank wear is a worn land on the clearance face, rubbed by the newly cut surface. It grows steadily, spoils size and finish, and is what tool life is usually judged by. Crater wear is a hollow on the rake face, dug by the hot chip sliding over it; at high speed, atoms diffuse from the tool into the chip, so it is worst on carbides cutting steel fast.

**Taylor's equation: why speed matters most.** VTⁿ = C means tool life T varies as V to the power −1/n, and n is small. For HSS, n is about 0.125, so T varies as V⁻⁸: double the speed and tool life falls 2⁸ = 256 times. For carbide (n about 0.25) the same doubling cuts life 16 times, and for ceramics (n about 0.5) only 4 times, which is why harder tools run faster.

C is the cutting speed that gives a tool life of exactly 1 minute. The extended form, VTⁿ fᵃ dᵇ = K, has b smaller than a, which is the formal way of saying speed affects tool life most, then feed, then depth of cut.

**The tool-material ladder is a hot-hardness ladder.** A tool must stay hard while red hot at the edge. Carbon steel softens at about 250 °C, HSS (18-4-1: 18% tungsten, 4% chromium, 1% vanadium) at about 600 °C, and cemented carbide at about 1,000 °C. Ceramics, CBN and diamond go higher still.

Diamond is the hardest, but it is not used on steel. At cutting temperatures its carbon dissolves into iron, so the tool wears away chemically, and CBN is used for hard steel instead. Carbide grades are coded by the work they suit: P (blue) for steel, M (yellow) for stainless, K (red) for cast iron.

**Orthogonal and oblique cutting.** In orthogonal cutting the edge is square to the cutting speed, so the chip flows straight up the face and there are only two force components. In oblique cutting the edge is inclined, the chip flows off sideways, and a third, radial force appears. Real turning is oblique; orthogonal is the simplified version used for the theory.

### Worked numbers

**Turning a bar.** A 50 mm bar runs at 400 rpm with feed 0.2 mm/rev, depth of cut 2 mm and a 100 mm length of cut.

```math
V = \frac{\pi \times 50 \times 400}{1000} = 62.8\ \text{m/min} \qquad t = \frac{L}{fN} = \frac{100}{0.2 \times 400} = 1.25\ \text{min}
```

```math
MRR = 1000\, f\, d\, V = 1000 \times 0.2 \times 2 \times 62.8 = 25\,130\ \text{mm}^3/\text{min}
```

The bar comes out at 46 mm, since a 2 mm depth comes off each side.

**Chip ratio and shear angle.** Uncut thickness 0.5 mm, chip thickness 1.25 mm, rake angle 10°. So r = 0.5/1.25 = 0.4.

```math
\tan\phi = \frac{r\cos\alpha}{1 - r\sin\alpha} = \frac{0.4 \times 0.985}{1 - 0.4 \times 0.174} = \frac{0.394}{0.931} = 0.423 \;\Rightarrow\; \phi = 22.9^\circ
```

The shear strain is γ = cot φ + tan(φ − α) = 2.36 + 0.23 = 2.59.

**Friction on the rake face, and power.** Fc = 1,000 N, Ft = 500 N, rake angle 10°, cutting speed 60 m/min (1 m/s).

- F = 1000 × 0.174 + 500 × 0.985 = 666 N and N = 1000 × 0.985 − 500 × 0.174 = 898 N.
- μ = 666/898 = 0.74, so β = tan⁻¹ 0.74 = 36.6°.
- Power = Fc × V = 1,000 N × 1 m/s = 1 kW.

**Taylor's equation.** A carbide tool with n = 0.25 lasts 60 minutes at 100 m/min. Raise the speed to 150 m/min:

```math
T_2 = T_1\left(\frac{V_1}{V_2}\right)^{1/n} = 60 \times \left(\frac{100}{150}\right)^{4} = 60 \times 0.198 = 11.9\ \text{min}
```

A 50% rise in speed cuts tool life to about one-fifth. Going the other way, if 30 m/min gives 64 minutes and 60 m/min gives 4 minutes, then n = ln(60/30) / ln(64/4) = ln 2 / ln 16 = 0.25.

**Surface roughness from feed and nose radius.** Feed 0.2 mm/rev, nose radius 0.8 mm:

```math
h = \frac{f^2}{8R} = \frac{0.2^2}{8 \times 0.8} = 0.00625\ \text{mm} = 6.25\ \mu\text{m}
```

Halve the feed and h falls to a quarter, 1.56 µm. Double the nose radius and it only halves.

**Compound rest angle.** A taper runs from 50 mm to 40 mm over 60 mm. Then tan θ = (50 − 40) / (2 × 60) = 0.083, so the compound rest is set to θ = 4.8°.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Turning 50 mm to 46 mm is a 4 mm depth of cut. | Depth is on the radius: 2 mm. |
| Same rpm means same cutting speed. | Speed is πDN, so it falls with diameter and is zero at the centre in facing. |
| The lead screw drives the carriage for all turning. | Only for thread cutting, through the half nut. The feed rod does ordinary feeds. |
| The compound rest is set to the full taper angle. | It is set to the half angle, tan θ = (D − d)/2L. |
| The clearance angle reduces the cutting force. | Rake angle governs the force. Clearance only stops the flank rubbing. |
| A bigger rake angle is always better. | It weakens the edge and its heat path. Carbides and ceramics use negative rake on hard work. |
| The chip thickness ratio is more than 1. | It is always below 1, because the chip is thicker. Its inverse, the chip reduction coefficient, is above 1. |
| A built-up edge forms at high speed. | It forms at low speed on ductile metal. Raising the speed removes it. |
| Discontinuous chips always mean bad cutting. | They are normal and harmless on cast iron and brass. |
| Thrust force adds to the cutting power. | Power = Fc × V. The thrust direction moves only at feed speed, so its work is negligible. |
| Flank wear is on the rake face. | Flank wear is on the clearance face. Crater wear is on the rake face. |
| Depth of cut affects tool life most. | Speed affects it most, then feed, then depth of cut. |
| Diamond is the best tool for every metal. | Not for steel: its carbon dissolves into hot iron. CBN is used for hard steel. |
| The tool signature starts with side rake. | It starts with back rake: back rake, side rake, end relief, side relief, end cutting edge, side cutting edge, nose radius. |

## 3. Casting

Casting pours liquid metal into a hollow shaped like the part and lets it freeze. Every rule in this topic deals with one of three facts: metal shrinks as it cools, gas must get out of the mould, and liquid metal flows like water but starts freezing as soon as it touches the cold sand. Allowances, sand properties, gating, risers and most defects make sense once you see which fact each one handles.

### The picture

At the beach, press a toy into firm, damp sand and lift it out carefully. The hole left behind is a mould cavity, the toy is the pattern, and the damp sand holds its shape because water binds the grains, as clay and water do in a foundry. Pour in plaster, let it set, and you have a casting.

Now imagine the plaster is at 1,500 °C. It shrinks as it cools, boils the water in the sand into steam, and freezes first at the walls. Every foundry rule is a fix for one of those three problems.

### Twisted points

**The pattern is not the size of the part.** Each allowance fixes one problem, and only one of them makes the pattern smaller.

| Allowance | Problem it fixes | Effect on the pattern |
| --- | --- | --- |
| Shrinkage (contraction) | The solid casting shrinks as it cools to room temperature | Bigger |
| Machining | Cast surfaces are rough and need a cut to finish | Bigger, on faces to be machined |
| Draft | Vertical faces would drag the sand as the pattern is lifted | A taper, bigger at the parting line |
| Shake (rapping) | Rapping the pattern loose enlarges the cavity | Smaller (negative allowance) |
| Distortion | Uneven cooling bends long or U-shaped castings | Bent the opposite way in advance |

Three twists hide in this table. Inner surfaces get more draft than outer ones, because sand gripped inside a pocket holds the pattern tighter. The top (cope) face gets more machining allowance, because slag and gas float up to it. And grey cast iron needs only about half the shrinkage allowance of steel (about 10 mm/m against 20 mm/m), because graphite flakes expand as they form and make up some of the shrinkage.

**Metal shrinks three times, and the pattern handles only one.** Liquid metal shrinks as it cools to its freezing point. It shrinks again, often by several percent, as it turns from liquid to solid. Then the solid shrinks as it cools to room temperature.

The first two happen while there is still liquid, so the riser feeds them with extra metal. Only the last, solid contraction, is handled by the pattern's shrinkage allowance. A question asking what the shrinkage allowance compensates for wants solid contraction only.

**Moulding sand is a tug-of-war.** The sand has to be strong enough to hold its shape, open enough to let steam and gas escape, able to stand the heat, and weak enough to crumble when the casting shrinks. Most changes that help one property hurt another:

- Finer grains and more clay give strength and a smooth finish, but lower the permeability.
- Harder ramming raises strength and also lowers permeability.
- Some moisture is needed for strength; too much turns to steam and causes blowholes.
- Sawdust or cereal binder burns away in the heat and leaves room, so collapsibility improves. Coal dust in sand for cast iron gives a cleaner skin.

Green sand means damp, unbaked sand, not green-coloured sand. A dry sand mould is baked first, which makes it stronger and gives off less steam. Vent holes made with a vent wire give the gas an easy way out.

**Why the sprue tapers.** Watch water fall from a tap: the stream gets thinner as it falls, because it speeds up and the same flow needs less area. Molten metal does the same in the sprue. A straight sprue would leave the stream pulling away from the walls, creating low pressure that sucks air and sand in (aspiration); tapering the sprue to match the stream stops that.

```math
v = \sqrt{2gh} \qquad A\,v = \text{constant} \;\Rightarrow\; A_1\sqrt{h_1} = A_2\sqrt{h_2}
```

The gating system also has to keep slag out and fill the cavity calmly. A skim bob or strainer catches slag, and a well at the sprue bottom takes the force out of the falling stream.

The ratio of sprue to runner to ingate areas sets the flow. A pressurised system, about 1 : 0.75 : 0.5, keeps the channels full and the air out, so it suits iron and steel. An unpressurised system, about 1 : 3 : 3, lets the metal in slowly and gently, so it suits aluminium and magnesium, which form oxide skins when stirred up.

**Top gating and bottom gating trade against each other.** Top gating fills fast and leaves the hottest metal at the top, next to the riser, which helps the casting freeze in the right order. But the metal falls into the cavity and can wash away the sand. Bottom gating fills calmly from below, but the hottest metal ends up at the bottom, away from the riser. Gating at the parting line is the usual compromise.

**A riser must freeze last, and Chvorinov says how big it must be.** Heat leaves a casting through its surface, but the amount of heat to lose depends on its volume. So a big pot of dal stays hot far longer than the same dal spread on a plate, though both started at the same temperature.

Chvorinov's rule puts this as freezing time proportional to (V/A)². A riser with a larger V/A than the part it feeds stays liquid longer, so it can keep pouring metal into the shrinking casting. The usual rule is a riser modulus (V/A) about 1.2 times the casting's.

```math
t_s = k\left(\frac{V}{A}\right)^2 \qquad \text{cylinder with } H = D:\ \frac{V}{A} = \frac{\pi D^2 D/4}{\pi D D + 2\pi D^2/4} = \frac{D}{6}
```

A sphere has the largest V/A for its size, but a cylinder is easier to mould, so risers are cylinders.

**Directional solidification: freeze from far away towards the riser.** The casting should freeze first at the thin parts farthest from the riser, then step by step towards it, so every part freezing has liquid metal next to it to draw from. If a thick section freezes after the thin neck that connects it to the riser, it is cut off and leaves a shrinkage cavity. Chills (metal pieces in the mould) speed up freezing where it should happen early. Insulating sleeves or exothermic powder on the riser keep it liquid longer.

**Core prints locate, chaplets support.** A core is a sand shape for a hole or inner passage. Its ends sit in core prints, extra seats in the mould made by projections on the pattern, which hold it in position. Where a long or heavy core would sag or float, small metal chaplets prop it up inside the cavity. They are made of a metal like the casting's and fuse into it.

Cores do float. Molten iron is about four times denser than core sand, so a core feels a strong upward push, just as a ball held under water does (see the worked numbers).

A core is surrounded by hot metal on nearly every side, so it needs more strength, permeability and collapsibility than the mould sand. It is usually baked with an oil binder, and its gas escapes through the core prints.

**Each special process exists for one reason.**

| Process | The key idea | So it suits |
| --- | --- | --- |
| Shell moulding | Resin-bonded sand cured into a thin shell on a hot metal pattern | Small, thin, accurate parts in large numbers |
| Investment (lost wax) | A wax copy is coated with ceramic slurry and melted out: no parting line, no draft | Complex shapes with the best finish: turbine blades, jewellery, dental work |
| Hot-chamber die casting | The injection pump sits in the molten metal | Low-melting zinc, tin and lead, which do not attack the steel pump |
| Cold-chamber die casting | Metal is ladled into a shot sleeve for each shot | Aluminium and brass, which would dissolve a submerged steel pump (magnesium is cast both ways) |
| True centrifugal | The mould spins about the part's own axis; the spin forms the bore | Pipes and tubes with no core |
| Semi-centrifugal | Spun about a vertical axis; the centre may still use a core | Wheels, pulleys and gear blanks |
| Centrifuging | Many small cavities around a central sprue, spun to force metal in | Small parts of any shape |
| Slush | Liquid poured out once a shell has frozen | Hollow ornaments, lamp bases, toys |
| Lost foam | A polystyrene pattern stays in the sand and vaporises as metal arrives | Complex parts with no cores and no parting line |

In true centrifugal casting, the spin throws the heavy metal outward and lets lighter slag and gas collect at the bore. That inner layer is machined off, leaving dense, sound metal.

**Tell defects apart by their shape and cause.**

| Defect | How it looks | Cause |
| --- | --- | --- |
| Blowhole | Smooth, round, shiny-walled holes, often near the top | Gas: wet sand, low permeability, hard ramming, poor venting |
| Shrinkage cavity | Rough, jagged hollow at the last place to freeze | Poor feeding: riser too small or frozen too early |
| Misrun | The casting stops short; part of the cavity is unfilled | Metal too cold or poured too slowly for a thin section |
| Cold shut | A seam where two streams met but did not fuse | Same causes as a misrun, at a meeting point |
| Hot tear | A ragged crack formed while the metal was still hot | Mould or core too strong to give way as the casting shrank |
| Scab | A rough lump where a patch of sand broke away | Sand too weak or overheated |
| Swell | A bulge where the mould wall gave way | Soft ramming |
| Mismatch (shift) | The top and bottom halves of the casting are offset | Cope and drag misaligned |
| Fins (flash) | Thin metal sheet at the parting line | A gap between the mould halves |

The classic pairs to separate are blowhole against shrinkage cavity (smooth against jagged), and misrun against cold shut (unfilled against unfused).

### Worked numbers

**Chvorinov: thin parts freeze first.** A 60 mm cube freezes in 4 minutes. Its V/A is a/6 = 10 mm.

- A 120 mm cube has V/A = 20 mm, twice as much, so it takes 2² × 4 = 16 minutes.
- A 60 × 60 × 15 mm plate has V/A = 54,000 / 10,800 = 5 mm, half as much, so it takes 4 / 4 = 1 minute.
- A cylindrical riser with H = D for the 60 mm cube needs D/6 = 1.2 × 10, so D = 72 mm.

**Sizing a sprue.** The metal level in the pouring basin stands 50 mm above the sprue top, and the sprue is 200 mm long. Its bottom (choke) area is 300 mm².

```math
A_1 = A_2\sqrt{\frac{h_2}{h_1}} = 300 \times \sqrt{\frac{250}{50}} = 300 \times 2.24 = 671\ \text{mm}^2
```

```math
v_2 = \sqrt{2 \times 9.81 \times 0.25} = 2.21\ \text{m/s} \qquad Q = 300 \times 10^{-6} \times 2.21 = 0.66\ \text{L/s}
```

A 10-litre casting then takes about 10 / 0.66 = 15 seconds to pour.

**Pattern length.** A steel part is 500 mm long, with 3 mm machining allowance on each end and 2% shrinkage. The shrinkage applies to the full rough size, including the machining stock: (500 + 6) × 1.02 = 516.1 mm.

**Core buoyancy.** A 2,000 cm³ (0.002 m³) core sits in molten cast iron of density 7,200 kg/m³; core sand is 1,600 kg/m³.

```math
F = V g (\rho_{metal} - \rho_{core}) = 0.002 \times 9.81 \times (7200 - 1600) = 110\ \text{N}
```

That is like an 11 kg weight pushing the core upward, which is why chaplets are needed.

**Spinning speed for a centrifugal pipe.** A pipe mould of 200 mm diameter (R = 0.1 m) is spun so the metal feels 60 times gravity (G = 60):

```math
\omega = \sqrt{\frac{G g}{R}} = \sqrt{\frac{60 \times 9.81}{0.1}} = 76.7\ \text{rad/s} \qquad N = \frac{60\,\omega}{2\pi} = 733\ \text{rpm}
```

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Every allowance makes the pattern bigger. | Shake allowance is negative: the pattern is made smaller because rapping enlarges the cavity. |
| The shrinkage allowance covers all shrinkage. | It covers only solid contraction. Liquid and solidification shrinkage are fed by the riser. |
| Green sand is green in colour. | It is damp, unbaked sand. |
| Harder ramming always gives a better mould. | It lowers permeability, so gas is trapped as blowholes. |
| A straight sprue works as well as a tapered one. | A straight sprue lets the stream pull away from the walls and suck in air. |
| The riser should freeze first. | It must freeze last, so it can keep feeding the casting. |
| Chills slow the cooling down. | Chills speed it up, so a region freezes early. |
| Core prints hold the core up inside the metal. | Core prints locate the core at its ends. Chaplets support it inside the cavity and fuse into the casting. |
| Hot-chamber die casting suits aluminium. | Aluminium would attack the submerged pump, so it uses cold chamber. Hot chamber is for zinc, tin and lead. |
| True centrifugal casting needs a core for the bore. | The spin forms the bore, with no core. |
| A misrun and a cold shut are the same defect. | A misrun leaves the cavity unfilled. A cold shut is a seam where two streams met but did not fuse. |
| A blowhole and a shrinkage cavity look alike. | A blowhole is smooth and round. A shrinkage cavity is rough and jagged. |
| Investment castings have a parting line. | There is no parting line and no draft, because the wax pattern is melted out, not lifted. |

## 4. Grinding and finishing

Grinding is machining with thousands of tiny cutting edges at once, each one a hard abrasive grain. The wheel marking code and all the selection rules come down to one question: how long should the bond hold each grain before letting it go? Finishing processes (honing, lapping, superfinishing) take the same idea further, removing less and less metal for a better and better surface.

### The picture

Think of a grinding wheel as a team on shift work. Each grain cuts until it goes blunt. A good wheel then lets the tired grain break away so a fresh, sharp one underneath takes over: the wheel sharpens itself.

The bond decides when the shift changes. On a tough job (hard metal) workers tire fast, so you want quick shift changes: a weak (soft) bond. On an easy job (soft metal) they stay fresh, so a strong (hard) bond keeps them working longer. That is the whole of "soft wheel for hard metal, hard wheel for soft metal".

### Twisted points

**Why grinding uses so much energy.** A grain is a rounded lump, so it meets the metal with a large negative rake. Much of its action is ploughing and rubbing, not clean cutting, and the chips are tiny. So grinding needs several times more energy per mm³ than turning, and most of that turns to heat at the surface. Too little coolant leaves burn marks, soft spots or fine cracks.

**Read the wheel code left to right: abrasive, grain, grade, structure, bond.** One way to remember it: "All Good Grinders Stay Balanced". In 51 A 60 K 5 V 23:

| Part | In the example | What it means |
| --- | --- | --- |
| Prefix | 51 | Maker's code for the exact abrasive (optional) |
| Abrasive | A | Aluminium oxide |
| Grain size | 60 | Medium grit |
| Grade | K | Soft-to-medium bond strength |
| Structure | 5 | Medium spacing between grains |
| Bond | V | Vitrified |
| Maker's mark | 23 | Maker's own record (optional) |

**A bigger grit number means smaller grains.** The number is the mesh of the sieve the grains pass through: the count of openings per inch. A sieve with 60 openings per inch has smaller holes than one with 24, so grit 60 is finer than grit 24. Coarse grit removes metal fast; fine grit gives a better finish.

**Grade is the glue, not the grain.** A "hard" wheel is not made of harder abrasive. Its bond grips the grains more firmly, so they stay in longer. A to H are soft, I to P medium and Q to Z hard.

**Structure is room for chips.** A dense wheel (low number) packs grains close for fine finish and form holding. An open wheel (high number) leaves pockets between grains where chips can go. So it does not clog on soft, ductile metal, and it runs cooler.

**Selection rules, with the reason for each.**

| Condition | Choose | Why |
| --- | --- | --- |
| Hard work | Soft grade | Grains blunt fast, so the bond must release them early |
| Soft work | Hard grade | Grains stay sharp; a soft bond would waste the wheel |
| Soft, ductile work | Coarse grit, open structure | Room for long chips, so the wheel does not load |
| Hard, brittle work, or a fine finish | Fine grit | Small grains take small cuts |
| Large area of contact (surface or internal grinding) | Softer grade, coarser grit | Many grains rub at once, so more heat and quicker blunting |
| Higher wheel speed | Softer grade | Each grain takes a smaller cut and wears less, so the wheel acts harder |

The last rule is a favourite twist: speed up the wheel and it behaves like a harder wheel. Speed up the work instead and it behaves like a softer one, because each grain takes a bigger bite and breaks out sooner.

**Silicon carbide is harder, yet steel is ground with aluminium oxide.** Silicon carbide is harder than aluminium oxide, but more brittle, and at grinding heat it reacts chemically with iron. On tough steel its grains shatter and wear away. So aluminium oxide grinds steels, and silicon carbide grinds the low-strength or brittle materials: cast iron, brass, aluminium, stone and glass, with green silicon carbide for carbides. CBN takes hardened steel, and diamond takes carbides, glass and ceramics.

**Each bond has its own personality.** Vitrified (V) is a glass-like ceramic: rigid, porous, and the most common, but brittle, so it is kept to normal speeds. Resinoid (B) is tough and takes shock, so it runs fast on cut-off and fettling wheels. Rubber (R) is flexible, so it makes thin cut-off wheels and the centreless regulating wheel. Shellac (E) gives a high finish on rolls and cams, silicate (S) a mild, cool cut for edge tools, and metal (M) holds diamond grains.

**Glazing and loading look different and have opposite causes.** A glazed wheel has blunt grains that should have broken out but did not: the face looks shiny, the wheel rubs and burns the work. It means the wheel is too hard or running too fast. A loaded wheel has its pores clogged with metal, usually from soft metals like aluminium or copper. The cure is an open, coarse wheel and good coolant.

**Dressing sharpens, truing reshapes.** Dressing removes the blunt or clogged outer layer, so fresh sharp grains face the work, like cleaning and sharpening a knife. Truing makes the wheel run round and gives its face the right shape, like straightening a bent blade. One diamond dresser can do both, but they are different aims.

**Centreless grinding: the regulating wheel is in charge.** The job rests on a work rest blade between two wheels. The grinding wheel spins fast and does the cutting, pushing the job against a slow, rubber-bonded regulating wheel. The rubber grips the job, so the regulating wheel sets how fast the job turns; tilt it a few degrees and it also pulls the job through.

The job's centre is set a little above the line joining the wheel centres, so it grinds round instead of to a lobed shape. Through-feed suits plain pins and rollers; in-feed (plunge) suits parts with shoulders or a profile. Centreless grinding needs no centre holes and runs very fast. It cannot grind flats or keyways, and it cannot make a surface concentric with another one on the same part.

**Finishing processes do different jobs, not just finer ones.**

| Process | How it works | What it corrects or gives |
| --- | --- | --- |
| Honing | Bonded stones rotate and reciprocate inside a bore | Size, taper and out-of-round, with a cross-hatch that holds oil; the tool floats, so it cannot move the hole's axis |
| Lapping | Loose abrasive in oil between the work and a soft lap | The best flatness and accuracy (slip gauges, valve seats), removing only microns |
| Superfinishing | A stone oscillates in short, fast strokes at low pressure | Removes the smeared, damaged top layer for a mirror finish |
| Polishing | Abrasive glued to a flexible wheel | Removes scratches |
| Buffing | Fine compound on a cloth wheel | Lustre, with almost no removal |
| Burnishing | Hard rollers or balls press the surface | Smooths and hardens the surface by cold working, removing no metal |

The lap is softer than the work on purpose. The abrasive grains bed into the soft lap (charging), turning it into a fine file that cuts the hard work, instead of embedding in the work.

### Worked numbers

**Wheel speed as the wheel wears.** A 300 mm wheel runs at 2,000 rpm.

```math
V = \frac{\pi D N}{60\,000} = \frac{\pi \times 300 \times 2000}{60\,000} = 31.4\ \text{m/s}
```

Worn down to 250 mm at the same rpm, it runs at 26.2 m/s and acts softer. Raising the speed to 2,400 rpm restores 31.4 m/s.

**Centreless through-feed.** The regulating wheel is 250 mm in diameter, turns at 30 rpm and is tilted 3°.

```math
f = \pi\, d_r\, N_r \sin\alpha = \pi \times 250 \times 30 \times \sin 3^\circ = 23\,562 \times 0.0523 = 1\,233\ \text{mm/min}
```

A 100 mm pin passes through in 100 / 1,233 min, about 5 seconds.

**Grinding ratio.** Grinding removes 6,000 mm³ of steel while the wheel loses 150 mm³. So G = 6,000 / 150 = 40. Conventional wheels on steel often give G of 20 to 80; CBN can reach thousands.

**How little grinding removes.** A surface grinder takes 0.02 mm depth with 5 mm cross-feed at a table speed of 10 m/min (10,000 mm/min). MRR = 0.02 × 5 × 10,000 = 1,000 mm³/min, against 25,000 mm³/min for the lathe example in Topic 2. Grinding is for accuracy and finish, not for removing bulk metal.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Grade is the hardness of the abrasive. | Grade is how strongly the bond holds the grains. |
| A bigger grit number means coarser grains. | It means finer grains: more sieve openings per inch. |
| A hard wheel suits hard metal. | A soft wheel suits hard metal, so blunt grains break away. A hard wheel suits soft metal. |
| Silicon carbide is harder, so it grinds steel best. | Steel is ground with aluminium oxide. Silicon carbide suits cast iron, non-ferrous metals and non-metals. |
| A faster wheel acts softer. | A faster wheel acts harder. Faster work makes it act softer. |
| Glazing and loading are the same. | Glazing: blunt grains stay in place (wheel too hard). Loading: pores clog with metal (soft work). |
| Dressing and truing are the same. | Dressing sharpens the face. Truing makes the wheel round and gives it shape. |
| In centreless grinding the regulating wheel does the cutting. | The grinding wheel cuts. The rubber-bonded regulating wheel controls the job's speed and feed. |
| A lap must be harder than the work. | A lap is softer, so the abrasive beds into it and not into the work. |
| Honing can correct a hole's position. | Honing corrects size, taper and roundness. Its floating tool follows the existing axis. |
| Burnishing is a light grinding cut. | Burnishing removes no metal. It presses the surface smooth. |
| Grinding gives the best finish. | Honing, superfinishing and lapping give better finishes, in that order. |

## 5. Metal forming and sheet metal

Forming reshapes metal by making it flow, without cutting any away. Two questions settle almost everything in this topic: is the metal worked above or below its recrystallisation temperature, and does the process squeeze it, pull it or shear it? Compression lets metal flow a long way, tension soon tears it, and shear cuts it.

### The picture

An Indian kitchen has every forming process. Rolling a chapati between a rolling pin and the board is rolling. Pressing dough through a murukku or sev press is extrusion. Pulling toffee into a thin strand is wire drawing, and a cookie cutter punching shapes out of rolled dough is blanking.

The kitchen also shows the stress rule. You can squeeze dough through a press as hard as you like and it keeps flowing. Pull toffee too hard and it snaps. That is why extrusion can take huge reductions in one go, while wire drawing needs many small passes.

### Twisted points

**Hot and cold are set by recrystallisation, not by room temperature.** Deforming metal tangles its crystal structure, so it gets harder and stronger with every pass (strain hardening). Above the recrystallisation temperature, new strain-free grains grow as fast as the old ones are distorted, so the metal never hardens. That temperature is roughly 0.4 to 0.5 of the melting point in kelvin.

So lead, which recrystallises below room temperature, is hot worked on a bench at 30 °C. Tungsten recrystallises at about 1,200 °C, so working it red hot at 1,000 °C is still cold working (see the worked numbers).

|  | Hot working | Cold working |
| --- | --- | --- |
| Force and power | Lower | Higher |
| Amount of deformation | Large, in few passes | Limited; needs annealing between passes |
| Strength after | No strain hardening; grains refined | Raised by strain hardening; ductility falls |
| Surface and size | Scale; poorer accuracy | Bright finish; close tolerances |
| Bonus | Breaks up the cast structure and closes internal pores | Residual stresses, which can help or hurt |

**Grain flow is why forged and rolled parts are stronger.** Worked metal has a grain, like wood. A wooden hook carved across the grain snaps easily, while one bent along the grain holds. Forging, thread rolling and ring rolling bend the grain to follow the part's shape; machining the same shape from bar cuts straight across it. That is why a rolled thread outlasts a cut one.

**Why wire drawing is limited to about 63% per pass.** In drawing, the wire coming out of the die has to carry the pulling force. If the stress needed to draw it reaches the wire's own yield stress, the wire stretches or breaks instead of passing through. For an ideal metal with no friction and no strain hardening, that limit is reached when ln(A₀/A₁) = 1, with A₀ and A₁ the areas before and after the die. That works out to a 63% reduction in area. Friction makes the real limit lower, so wire is drawn through a series of dies.

**Direct, indirect and impact extrusion.** In direct extrusion the ram pushes the billet along the container towards a fixed die, so the whole billet rubs on the walls. In indirect extrusion the die moves into a billet that stays put, so there is little friction and less force is needed. Impact extrusion hits a small slug with a punch so fast that the metal squirts up around the punch: toothpaste tubes and drink cans.

Extrusion defects show up when the flow is uneven. Surface cracks come from too much heat or speed. Piping (a funnel at the end) comes from drawing the oxidised outer skin into the middle. Centre bursts (chevrons) come from tension at the centre when the reduction per pass is small.

**Rolling needs friction.** The rolls can only drag the strip into the gap if friction pulls harder than the rolls push it away. That sets the biggest reduction one pass can take: Δh max = μ²R. Hot rolling, with its rough, scaled surfaces and higher friction, can take much bigger bites than cold rolling.

Volume is constant, so as the strip gets thinner it must speed up. At the entry it moves slower than the roll surface, and at the exit it moves faster. At one point in between, the neutral point, the two speeds are equal.

Small rolls touch the strip over a shorter arc, so they need less force, but they bend easily. A four-high mill backs up two small work rolls with two big rolls. A cluster mill goes further for very thin, hard sheet.

**The flash in closed-die forging is a pressure valve, not just waste.** As the dies close, excess metal squirts out into the thin flash gap. That thin sliver cools fast and resists further flow, so pressure builds inside and forces metal into the die's corners. The flash gutter beyond it gives the extra metal somewhere to go.

The forging operations each move metal a particular way:

- **Drawing out:** lengthens a bar by reducing its section.
- **Upsetting:** shortens and thickens it, as in a bolt head. The unsupported length is kept below about three diameters, or the bar buckles.
- **Fullering:** thins the section with a rounded tool, pushing metal away from a spot.
- **Edging:** gathers metal towards a spot, ready for the next die.

Press forging squeezes slowly, so its work reaches the core of large sections. Hammer blows work mostly on the surface.

**How a punch actually cuts.** As the punch presses, the sheet first bends and is pressed, then cracks start from both the punch edge and the die edge. With the right clearance the two cracks meet cleanly. The cut edge shows a rounded rollover, a shiny burnished band, a rough fracture band and a small burr. Too little clearance needs more force and gives a double burnished band; too much gives a big burr and rollover.

**Clearance goes on the tool that does not shape the product.** The part that matters is copied from one tool, so that tool is made exactly to size. A blank is pushed through the die opening, so the die is made to the blank size and the punch is made smaller. A hole is made by the punch, so the punch is made to the hole size and the die is made larger.

**Shear spreads the cut like a pair of scissors.** Scissors never cut along the whole blade at once; the cut moves along the edge. Grinding an angle (shear) on the punch or die does the same, so the peak force drops. The total energy does not change, though: the same metal is still sheared, only over a longer stroke.

Shear always goes on the tool that touches the scrap, so the product stays flat. In blanking that is the die, and in punching it is the punch.

**Deep drawing: tension in the wall, compression in the flange.** As a cup is drawn, the flange is pulled inward to a smaller circle, so it is squeezed around its circumference and tries to wrinkle. A blank holder presses it flat. The cup wall carries the pull from the punch, so if the blank is too big, the wall tears near the punch nose.

The blank size comes from keeping the surface area constant (the sheet thickness stays about the same). The limiting draw ratio, the biggest blank diameter over cup diameter in one draw, is about 2. Deeper cups need redrawing.

**Springback: the metal remembers a little.** A bent sheet holds some elastic strain along with the plastic bend. When the punch lifts, that elastic part springs back, opening the bend slightly. High-strength sheet and large bend radii spring back more. The cure is to overbend, or to bottom (coin) the bend so the whole section yields.

**Coining against embossing.** Coining squeezes the blank in a closed die, with a different pattern on each face, so metal flows and the thickness varies. It needs very high pressure, as in making coins. Embossing presses a raised shape on one side that shows sunk on the other, with the thickness nearly unchanged and much less force.

**Progressive, compound and combination dies.** A progressive die has several stations, and the strip moves on one station per stroke, so a finished part drops out every stroke. A compound die does two cutting operations at one station in one stroke, such as a washer's hole and outside together. A combination die does a cutting and a forming operation at one station, such as blanking and then drawing a cup.

### Worked numbers

**Hot or cold?** Take recrystallisation as 0.4 of the melting point in kelvin.

- Lead melts at 600 K, so it recrystallises at 240 K, about −33 °C. Working it at room temperature is hot working.
- Tungsten melts at 3,695 K, so it recrystallises at about 1,480 K, about 1,200 °C. Working it at 1,000 °C is cold working.

**Punch and die sizes.** Sheet 2 mm thick, clearance 5% of thickness per side: c = 0.1 mm.

- Blanking a 50 mm blank: die 50.0 mm, punch 50 − 2 × 0.1 = 49.8 mm.
- Punching a 50 mm hole: punch 50.0 mm, die 50 + 2 × 0.1 = 50.2 mm.

**Force and energy, with and without shear.** A 50 mm hole in 2 mm sheet with shear strength 300 MPa, penetration 40% and 1.6 mm of shear on the punch:

```math
F_{max} = \pi d t \tau = \pi \times 50 \times 2 \times 300 = 94\,200\ \text{N} = 94.2\ \text{kN}
```

```math
F_{shear} = \frac{F_{max}\,(p\,t)}{s} = \frac{94.2 \times (0.4 \times 2)}{1.6} = 47.1\ \text{kN}
```

The energy is the same either way: 94.2 kN × 0.8 mm = 75.4 J. The shear only halves the peak force.

**Deep-drawing blank.** A cup 50 mm across and 40 mm deep:

```math
D = \sqrt{d^2 + 4dh} = \sqrt{50^2 + 4 \times 50 \times 40} = \sqrt{10\,500} = 102.5\ \text{mm}
```

D/d = 2.05, just over the usual limit of about 2. So this cup needs a first draw to a wider, shallower cup and then a redraw.

**Rolling bite.** Rolls of radius 300 mm:

- Cold, with μ = 0.1: Δh max = 0.1² × 300 = 3 mm per pass.
- Hot, with μ = 0.3: Δh max = 0.3² × 300 = 27 mm per pass.

Rolling a plate from 10 mm to 7 mm gives a true strain of ln(10/7) = 0.36.

**The wire-drawing limit.** For an ideal metal, the drawing stress is Y ln(A₀/A₁), where Y is the yield stress. Setting this equal to Y:

```math
\ln\frac{A_0}{A_f} = 1 \;\Rightarrow\; \frac{A_f}{A_0} = \frac{1}{e} = 0.37 \;\Rightarrow\; \text{reduction} = 1 - 0.37 = 63\%
```

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Hot working means working above room temperature. | It means above the recrystallisation temperature. Lead is hot worked at room temperature; tungsten at 1,000 °C is cold worked. |
| Cold working makes metal more ductile. | It makes metal stronger and harder but less ductile. |
| Extrusion and wire drawing both pull the metal. | Extrusion pushes, so the metal is in compression. Drawing pulls, so it is in tension and limited per pass. |
| Friction in rolling is only a nuisance. | Friction is what draws the strip in. The biggest draft per pass is μ²R. |
| Indirect extrusion has more friction than direct. | Less: in indirect extrusion the billet does not slide along the container. |
| Flash is pure waste. | Flash builds the pressure that fills the die corners. |
| In blanking, the clearance goes on the die. | In blanking it goes on the punch (die = blank size). In punching it goes on the die (punch = hole size). |
| Shear on the punch reduces the energy needed. | It reduces the peak force only. The energy stays the same. |
| Shear always goes on the punch. | On the die for blanking, on the punch for punching, so the product stays flat. |
| Wrinkling in deep drawing happens in the cup wall. | Wrinkling happens in the flange, which is squeezed. The wall is in tension and tears. |
| Springback is cured by underbending. | By overbending, or by bottoming the bend. |
| Coining and embossing are the same. | Coining: closed die, both faces, thickness changes, very high force. Embossing: raised on one side, sunk on the other, thickness unchanged. |
| A compound die has several stations. | A compound die does two cuts at one station. A progressive die has several stations. |
| Thread rolling cuts the thread. | It forms the thread with no chips, so the grain follows the thread and it is stronger. |

## 6. Milling, drilling, shaping and broaching

These machines differ in three ways: which part makes the cutting motion (the tool or the work), how many cutting edges the tool has, and whether it cuts continuously or in strokes. Learn the motions and most questions about parts and operations answer themselves. The rest are reasons: why the return stroke is quick, why climb milling needs a backlash eliminator, why a reamer cannot straighten a hole.

### The picture

Think of a carpenter's tools. A hand plane pushed along a fixed board is a shaper. Sliding the board under a plane held still is a planer. A spinning router bit with several edges is a milling cutter, and an electric drill is a drilling machine. A broach is like a row of small planes on one stick, each set a hair deeper than the one before, so one pull does all the cuts.

Every machine tool combines a cutting motion, which makes the chip, and a feed motion, which brings fresh metal to the tool:

| Machine | Cutting motion | Feed motion | Cutting edges |
| --- | --- | --- | --- |
| Lathe (for comparison) | Work rotates | Tool moves along or across | One |
| Shaper | Tool moves back and forth | Work moves sideways between strokes | One |
| Planer | Work moves back and forth | Tool moves sideways between strokes | One |
| Slotter | Tool moves up and down | Work moves between strokes | One |
| Milling | Cutter rotates | Work (on the table) moves | Many |
| Drilling | Drill rotates | Drill moves along its axis | Two lips |
| Broaching | Broach moves in a straight line | None: built into the rise of each tooth | Many |

### Twisted points

**Why the return stroke is quick.** A shaper cuts only on the forward stroke; the return stroke is wasted time. So a crank and slotted lever makes the return faster than the cut. The crank turns at a steady speed, but it spends a bigger angle on the cutting stroke and a smaller one on the return.

The angles come from the geometry. If r is the crank radius and c the distance between the crank centre and the lever's pivot, the return stroke takes an angle β with cos(β/2) = r/c. The ratio of cutting time to return time is then (360° − β)/β, usually about 3 : 2.

Because the cut takes only part of each cycle, the actual cutting speed is higher than stroke length times strokes per minute suggests. That is where the (1 + m) in the shaper speed formula comes from, with m = return time / cutting time.

**Shaper, planer and slotter split the work by size.** A shaper moves a light ram with the tool over a small, fixed job. A planer moves a heavy table with the job under fixed tools, so it handles large, heavy work like machine beds, and can carry several tools at once. A slotter is a vertical shaper, used mainly for internal keyways and slots.

**Up and down milling, explained by where the tooth enters.**

|  | Up (conventional) milling | Down (climb) milling |
| --- | --- | --- |
| Cutter turns | Against the feed | With the feed |
| Chip thickness | Starts at zero, ends at maximum | Starts at maximum, ends at zero |
| Tooth entry | Rubs before it bites, which wears it and hardens the surface | Bites at once; no rubbing, longer tool life |
| Force on the work | Lifts it, so it must be clamped firmly | Presses it onto the table, good for thin parts |
| Feed screw backlash | No problem: the cutter pushes the table back against the nut | The cutter pulls the table forward, so it needs a backlash eliminator |
| Finish | Poorer | Better |
| Castings with scale or sand | Preferred: the tooth starts under the skin and lifts it off | Avoided: each tooth would hit the hard skin at full thickness |

The backlash row is the classic question. In down milling the cutter tries to pull the work along. Any slack in the feed screw lets the table jump forward, and a tooth can dig in and break.

**Peripheral and face milling.** In peripheral (slab) milling the cutter axis is parallel to the surface and the teeth on the circumference cut, which is the main job of a horizontal miller. In face milling the axis is square to the surface, and the end teeth do the finishing cut. A universal miller adds a table that swivels about 45° each way, so the job can be set at the helix angle for cutting helical grooves.

**Indexing: the crank turns 40 times for one turn of the job.** A dividing head has a 40 : 1 worm and worm wheel. To divide the job into N equal parts, the crank turns 40/N times. When that is not a whole number, the fraction is made up with holes on an index plate, using a circle whose hole count fits the fraction.

One turn of the crank turns the job 360/40 = 9°. So for an angle, the crank turns are the angle divided by 9°. Direct indexing skips the worm altogether, using a plate of 24 holes on the spindle itself, so it only gives divisions of 24 (2, 3, 4, 6, 8, 12, 24). Numbers that no plate fits, such as 127, need differential indexing, where the plate itself turns slowly through change gears.

**Three ways to cut a gear.** Form milling uses a cutter shaped like the tooth space, with the dividing head turning the blank between teeth. A module has only eight standard cutters, each covering a range of tooth counts, so the tooth shape is approximate. Gear hobbing is generating: the hob is like a worm with gashed teeth, and the blank turns in mesh with it, so one hob cuts any number of teeth of its module accurately and continuously.

A hob needs room to run past the gear. So internal gears and cluster gears (two gears close together on one shaft) are cut by gear shaping, where a cutter shaped like a gear moves up and down while both turn in mesh.

**A twist drill's angles change along the lip.** The standard point angle is 118°: bigger (up to about 135°) for hard metals, smaller for soft materials. The helix angle, about 30°, acts as the rake angle, but only at the outer corner. Nearer the centre the rake falls, and at the chisel edge it is strongly negative.

The chisel edge at the very centre, where cutting speed is zero, does not really cut. It pushes and squeezes the metal aside, and it causes most of the thrust force. That is why a small pilot hole makes drilling a big hole much easier.

**A reamer follows the hole; a boring bar can move it.** A reamer has many edges, removes only a fraction of a millimetre, and floats along the drilled hole. It gives size and finish, but if the drill wandered, the reamed hole wanders too. A single-point boring tool on a rigid bar cuts where the machine puts it, so boring can correct a hole's position and straightness.

The other operations each shape the hole's mouth or make a thread:

| Operation | What it makes | Typical use |
| --- | --- | --- |
| Counterboring | A flat-bottomed, larger step at the mouth | Sinking a socket-head bolt below the surface |
| Countersinking | A cone at the mouth | Seating a flat-head screw flush |
| Spot facing | A shallow flat seat on a rough surface | A square seat for a nut on a casting |
| Trepanning | A ring-shaped groove, leaving a solid core | Large holes in plate without drilling all the metal |
| Tapping | An internal thread | Tap drill size = major diameter − pitch |

**A broach carries its own feed.** Each tooth stands a little higher than the one before, the rise per tooth, so every tooth takes its own thin cut. One pass goes from rough to finished size: roughing teeth first, then semi-finishing teeth, then a few finishing teeth all of the same size to hold the size. At least two teeth should cut at once, so the broach does not wobble.

A pull broach is pulled through, so it is in tension and can be long. A push broach is pushed, so it is short, or it would buckle. One broach makes one shape and size only, and it is costly, so broaching pays off only in mass production, where its speed and accuracy win.

### Worked numbers

**Slab milling.** An 80 mm cutter with 8 teeth runs at 250 rpm with 0.1 mm feed per tooth. It mills a face 200 mm long and 50 mm wide, 4 mm deep.

```math
f_m = f_z\, z\, N = 0.1 \times 8 \times 250 = 200\ \text{mm/min} \qquad V = \frac{\pi \times 80 \times 250}{1000} = 62.8\ \text{m/min}
```

```math
\text{approach} = \sqrt{d(D - d)} = \sqrt{4 \times 76} = 17.4\ \text{mm} \qquad t = \frac{200 + 17.4}{200} = 1.09\ \text{min}
```

MRR = w × d × fₘ = 50 × 4 × 200 = 40,000 mm³/min.

**Quick return ratio.** A crank of radius 100 mm with its centre 200 mm from the lever pivot: cos(β/2) = 100/200 = 0.5, so β/2 = 60° and the return takes β = 120°. Cutting takes 240°, so the ratio is 240 : 120 = 2 : 1.

**Shaper cutting speed.** Stroke 200 mm, 30 strokes per minute, ratio 3 : 2, so m = 2/3:

```math
V = \frac{L N (1 + m)}{1000} = \frac{200 \times 30 \times (1 + 0.667)}{1000} = 10\ \text{m/min}
```

**Drilling a through hole.** A 20 mm drill at 400 rpm with 0.2 mm/rev feed drills through 30 mm of plate. The drill's cone adds about 0.3D to the travel, since (D/2)/tan 59° = 0.3D.

```math
t = \frac{L + 0.3D}{fN} = \frac{30 + 6}{0.2 \times 400} = 0.45\ \text{min} \qquad MRR = \frac{\pi \times 20^2}{4} \times 0.2 \times 400 = 25\,130\ \text{mm}^3/\text{min}
```

**Indexing.**

- 52 divisions: 40/52 = 10/13 = 30/39, so 30 holes on a 39-hole circle.
- 27 divisions: 40/27 = 1 13/27, so one full turn plus 13 holes on a 27-hole circle.
- An angle of 35°: 35/9 = 3 8/9 = 3 16/18, so three full turns plus 16 holes on an 18-hole circle.

**Tap drill.** An M10 × 1.5 thread needs a tap drill of 10 − 1.5 = 8.5 mm.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| In a shaper the work moves back and forth. | In a shaper the tool moves. In a planer the work (table) moves. |
| The quick return mechanism makes the cutting stroke faster. | It makes the idle return faster. The cutting stroke takes the larger crank angle. |
| Up milling is called climb milling. | Down milling is climb milling. Up milling is conventional milling. |
| Down milling lifts the work. | Up milling lifts it. Down milling presses it onto the table. |
| Down milling suits castings with hard scale. | Up milling does: its teeth start under the scale and lift it off. |
| Up milling needs a backlash eliminator. | Down milling does, because the cutter pulls the table forward. |
| Simple indexing is 40 × N crank turns. | It is 40/N turns. One crank turn moves the job 9°. |
| A hob can cut internal gears. | Internal and cluster gears are cut by gear shaping. |
| The standard drill point angle is 135°. | It is 118°. 135° is for hard metals. |
| The chisel edge cuts like the lips. | It mostly pushes metal aside and causes most of the thrust. |
| Reaming corrects a hole's position. | A reamer follows the existing hole. Boring corrects position and straightness. |
| Counterboring and countersinking are the same. | Counterboring makes a flat-bottomed step. Countersinking makes a cone. |
| A broach needs a feed motion. | The feed is built into the tool as the rise per tooth. |
| Broaching suits small batches. | Each broach is costly and fits one shape, so it suits mass production. |

## 7. Unconventional machining

Unconventional processes remove metal without a harder tool cutting a chip. Each uses one form of energy: mechanical impact, electric sparks, electrochemical dissolution, light, electrons or hot plasma. That energy decides what the process can machine and what it cannot. So hardness, which rules ordinary machining, barely matters here; conductivity and brittleness do.

### The picture

Think of three ways to make a hole in a block of ice. You can tap it with an ice pick and chip it away, melt through it with a hot iron rod, or pour warm salt water on it and dissolve it. Chipping only works because ice is brittle. Melting works on anything that melts. Dissolving needs something that dissolves.

The processes split the same way: chipping (USM, AJM, water jet), melting and vaporising (EDM, laser, electron beam, plasma), and dissolving (ECM, chemical machining). Each family's need is also its limit.

| Process | Energy | Medium | The work must be | Poor on, or cannot do | Typical use |
| --- | --- | --- | --- | --- | --- |
| EDM | Thermal: sparks | Dielectric oil (kerosene, paraffin) | Electrically conductive | Glass, ceramics, plastics | Dies, moulds, hardened steel, carbide |
| Wire EDM | Thermal: sparks | Deionised water | Conductive | Blind cavities (it must cut right through) | Punch and die profiles |
| ECM | Electrochemical | Electrolyte (NaCl, NaNO₃) | Conductive | Non-conductors, sharp inside corners | Turbine blades, deburring |
| USM | Mechanical: impact | Abrasive slurry | Hard and brittle | Soft, ductile metals | Holes in glass, ceramics, silicon |
| AJM | Mechanical: erosion | Dry gas with abrasive | Brittle | Soft, ductile metals | Deburring, frosting glass, thin cuts |
| Water jet, abrasive water jet | Mechanical | Water (plus garnet) | Anything | Pure water cannot cut hard metal | Rubber, foam, food; with abrasive, metal and stone |
| LBM | Thermal: light | Air, with an assist gas | Almost anything | Shiny, reflective metals are harder | Fine holes, cutting sheet |
| EBM | Thermal: electrons | Vacuum | Anything | Large parts (vacuum chamber) | Very fine holes and slots |
| PAM | Thermal: plasma jet | Gas | Conductive | Non-conductors | Fast cutting of stainless and aluminium plate |
| Chemical machining | Chemical | Etchant with a maskant | Etchable | Deep or fast work | Aircraft skin panels, PCBs |

### Twisted points

**How a spark machines metal in EDM.** The tool and work sit in an insulating oil, a tiny gap apart. When the voltage is high enough, the oil breaks down at the closest point and a spark leaps across. Its plasma channel, many thousands of degrees, melts and vaporises a tiny crater. When the pulse ends, the vapour bubble collapses and the oil flushes the molten droplet away. This repeats thousands of times a second.

The dielectric has three jobs: it insulates until breakdown, so each spark is sharp and localised; it cools; and it flushes away the debris. The work is usually connected as the positive side. The electrons strike it, so most of the heat lands there, much as in DCEN welding.

**Hardness does not matter to EDM.** A spark melts hardened die steel or carbide as readily as soft steel, as long as the metal conducts. So dies are hardened first and EDM'd afterwards, avoiding heat-treatment distortion. The tool, usually copper or graphite, also erodes, but more slowly. It is chosen for good conductivity and a high melting point (graphite does not melt at all; it vaporises at about 3,600 °C).

The cavity comes out slightly bigger than the tool on every side, by about the spark gap (the overcut). The surface is a matt field of tiny craters, with a thin recast layer of re-frozen metal on top. Bigger sparks remove metal faster but leave bigger craters, so a job is roughed with big sparks and finished with small ones.

**Wire EDM never wears out its tool.** The electrode is a thin brass wire, about 0.1 to 0.3 mm across, fed continuously from a spool. Fresh wire keeps arriving, so wear never changes the cut. It must pass right through the job, so it cuts through-profiles like punch and die shapes, never blind cavities. The slot it leaves is the wire diameter plus two spark gaps.

**ECM is electroplating in reverse.** In electroplating, metal leaves the anode and deposits on the work. In ECM the work is the anode, so its surface dissolves as metal ions into a fast-flowing salt solution. At the tool (cathode) only hydrogen gas bubbles off. The dissolved metal forms hydroxide sludge in the electrolyte instead of plating onto the tool, so the tool never wears.

By Faraday's law, the metal removed depends on the current, the atomic weight and the valency, and not at all on hardness. There is no heat and no force, so the surface is free of burrs, cracks and residual stress. The price is heavy currents (thousands of amperes at low voltage), corrosive electrolyte, sludge disposal and complicated tool shapes. Electrochemical grinding (ECG) adds a conductive abrasive wheel: most of the metal is removed electrolytically and the abrasive only clears the surface, which makes it a fast, burr-free way to grind carbide.

**USM: the tool is softer than the work.** The tool vibrates about 20,000 times a second over a few hundredths of a millimetre, hammering abrasive grains in a slurry against the work. Each impact chips tiny flakes off brittle material. The tool itself is tough, ductile mild steel or brass: it is never the cutter, just the hammer, and the grains are the chisels.

That is also why USM is poor on copper and other ductile metals: they dent instead of chipping, and grains embed in them. The hole is the shape of the tool, a little larger by about the grain size. Boron carbide is the favourite abrasive because it is hard and cuts fastest.

**AJM and water jets.** Abrasive jet machining blows fine grains (10 to 50 µm) in a dry gas at 150 to 300 m/s through a carbide or sapphire nozzle: a precise, miniature sandblaster. The gas is air, nitrogen or CO₂, never oxygen, because of the fire risk with fine dust. The grains are not reused, since they blunt and pick up dirt.

A pure water jet, at up to about 4,000 bar, slices soft materials such as rubber, foam, food and paper. Add garnet grains and the abrasive water jet cuts metal, stone, glass and composites. Water jets cut cold, so they leave no heat-affected zone.

**Why a laser can be focused so finely.** Laser light is one colour (monochromatic), its waves are in step (coherent), and its beam hardly spreads. A lens can therefore squeeze it into a spot only a fraction of a millimetre across, where the power per square millimetre is enormous. Ordinary light from a bulb spreads in all directions and cannot be focused nearly as tightly.

Shiny metals like copper, aluminium and gold reflect much of the beam, especially the long-wave CO₂ laser's, so they are harder to machine. Nd:YAG and fibre lasers, with a shorter wavelength, are absorbed better by metals. An oxygen assist gas burns steel along the cut and adds heat; nitrogen or argon gives a clean, unoxidised edge.

**EBM needs a vacuum because electrons are tiny.** Electrons boiled off a hot tungsten filament are accelerated by a very high voltage and focused by magnetic lenses. In air they would scatter off gas molecules almost at once, so the work goes in a vacuum chamber. That limits job size and adds pumping time, and the impact also gives off X-rays, so the machine is shielded.

**Plasma cuts what an oxy-fuel torch cannot.** An oxy-fuel torch cuts steel by burning the iron in a jet of oxygen. Stainless steel and aluminium form tough oxide skins that will not burn away, so the torch fails on them. A plasma arc simply melts any conductor at 10,000 to 30,000 °C and blows it out of the cut. It is fast on thick plate, but the kerf is wide and the edge rougher than a laser's.

**Chemical machining: slow, even and stress-free.** The part is coated with a maskant, the coating is cut and peeled where metal is to go, and the part is dipped in an etchant. The etchant eats down and also sideways under the mask edge, so the depth-to-undercut ratio (the etch factor) is set in the design. It is slow, but it removes metal evenly over huge areas with no force or heat: thinning aircraft skin panels, making PCBs, blanking thin intricate parts.

### Worked numbers

**ECM removal rate.** Machining iron (atomic weight 56, valency 2, density 7.86 g/cm³) at 1,000 A:

```math
\dot m = \frac{A I}{Z F} = \frac{56 \times 1000}{2 \times 96\,500} = 0.290\ \text{g/s} \qquad \dot V = \frac{0.290}{7.86} = 0.0369\ \text{cm}^3/\text{s} = 36.9\ \text{mm}^3/\text{s}
```

With a tool face of 500 mm², the tool can advance at 36.9 / 500 = 0.074 mm/s, about 4.4 mm/min, keeping a steady gap.

**EDM spark energy.** An RC circuit with a 10 µF capacitor charged to 100 V:

```math
E = \tfrac{1}{2} C V^2 = 0.5 \times 10 \times 10^{-6} \times 100^2 = 0.05\ \text{J} = 50\ \text{mJ}
```

At 1,000 sparks a second, that is 50 W into the gap. A 10 mm tool with a 0.05 mm spark gap makes a hole of about 10 + 2 × 0.05 = 10.1 mm.

**Laser power density.** A 1 kW beam focused to a 0.2 mm spot:

```math
\frac{P}{\pi d^2/4} = \frac{1000}{\pi \times 0.2^2/4} = \frac{1000}{0.0314} = 31\,800\ \text{W/mm}^2 \approx 3 \times 10^{6}\ \text{W/cm}^2
```

**Water jet speed.** Water at 4,000 bar (400 MPa) leaving the orifice, by Bernoulli:

```math
v = \sqrt{\frac{2p}{\rho}} = \sqrt{\frac{2 \times 400 \times 10^6}{1000}} = 894\ \text{m/s}
```

That is more than twice the speed of sound in air.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| EDM needs a tool harder than the work. | Hardness does not matter. The work must conduct electricity; the tool erodes too, but slowly. |
| EDM uses an electrolyte. | EDM uses a dielectric (insulating) fluid. ECM uses an electrolyte. |
| EDM can machine glass and ceramics. | They do not conduct, so no spark can pass. Use USM, AJM or a laser. |
| The ECM tool wears like an EDM tool. | Only hydrogen forms at the ECM tool, so it does not wear. |
| ECM removes metal with heat or sparks. | It dissolves metal atom by atom, with no heat, so it leaves no residual stress. |
| Harder metals machine more slowly by ECM. | Hardness has no effect. The rate depends on current, atomic weight and valency. |
| USM suits copper and other metals. | USM chips brittle materials. Ductile copper just dents. |
| The USM tool must be harder than the work. | The tool is soft and tough. The abrasive grains do the cutting. |
| AJM can use oxygen as its carrier gas. | It uses air, nitrogen or CO₂. Oxygen with fine dust is a fire risk. |
| A water jet cannot cut metal. | An abrasive water jet can, and leaves no heat-affected zone. |
| Laser machining needs a vacuum. | EBM needs a vacuum. A laser works in air. |
| Shiny metals are the easiest for a laser. | Shiny metals reflect the beam, so they are the hardest. |
| Wire EDM can sink blind cavities. | The wire must pass right through, so it only cuts through-profiles. |
| An oxy-fuel torch cuts stainless steel well. | Stainless and aluminium oxides will not burn away. Plasma cutting is used instead. |

## 8. NC/CNC and part programming

A CNC machine is a machine tool that follows a list of coordinates and commands instead of a person's hands on the handwheels. Most questions ask what a code means. The codes are far easier to hold once you see them as a grammar: G codes say how to move, M codes switch things on and off, and the letters X, Y, Z, F, S and T fill in where, how fast and with what.

### The picture

Think of guiding a driver through a city by phone. "Go quickly to the junction" is G00, a rapid move where the route does not matter. "Now drive slowly along this road" is G01, a straight move at a set speed. "Take the roundabout clockwise" is G02, and anticlockwise is G03.

The same call shows absolute and incremental. "Go to house number 25" is absolute (G90): the address is measured from a fixed origin. "Go five houses further" is incremental (G91): measured from wherever you are now. Give one wrong incremental step and every step after it is off too.

### Twisted points

**Axes start from the spindle.** Z is always the spindle axis, whichever way the spindle points. Positive Z moves the tool away from the work, so feeding into the job is a negative Z move. X is the longest travel at right angles to Z. Y completes a right-hand set: point your right thumb along +X and index finger along +Y, and your middle finger points along +Z.

On a lathe, the spindle lies along the bed, so Z runs along the bed and X is the cross-slide, across the diameter. A, B and C are rotations about X, Y and Z, as on a rotary table or a five-axis head.

**NC, CNC and DNC differ in where the program lives.** NC read its program from punched tape through fixed, hard-wired logic, so changing a job meant punching a new tape. CNC has its own computer, so programs are stored, edited at the machine, and corrected with tool offsets and compensation. DNC links several machines to one central computer that sends each its program.

**What kind of path the job needs.**

| Control | What it controls | Why that is enough | Used for |
| --- | --- | --- | --- |
| Point-to-point | Only the end position of each move | No cutting happens while moving between points | Drilling, punching, spot welding |
| Straight-cut | Moves parallel to one axis at a time, at a feed rate | Cutting along one axis only | Simple milling of steps and slots |
| Contouring (continuous path) | Two or more axes moving together, at every instant | The tool cuts while moving, so the path itself matters | Profiles, arcs, 3D surfaces |

Contouring works by interpolation. The controller works out a stream of points along the line or arc and drives each axis so they arrive together.

**Open loop counts steps; closed loop watches.** An open-loop machine sends pulses to a stepper motor and assumes each one moved the table a fixed distance, like walking with your eyes shut, counting steps. If the load is too heavy and the motor slips a step, nothing notices. A closed-loop machine uses servo motors with an encoder or a scale that reports the actual position, and the controller keeps correcting until it matches: walking with your eyes open.

The smallest move the control can command, one pulse's worth, is the basic length unit (BLU). It sets the machine's resolution.

**Why CNC machines use ball screws.** In an ordinary screw the nut slides on the threads, so there is friction, and stick-slip makes small moves jerky. A ball screw puts a ring of steel balls between screw and nut, so they roll instead. Friction drops, efficiency is often above 90%, and a preloaded double nut takes out the backlash. The same low friction means the screw can be back-driven, so a vertical axis needs a brake.

**Codes stay on until changed (modal).** Most G codes, and F and S, are modal: once given, they stay in force for all later blocks until another code from the same group replaces them. So after G01 F120, a block with only X60 is still a straight feed move at 120 mm/min. A few codes, such as G04 (dwell), act in their own block only.

G codes come in groups, and only one from each group is active at a time:

| Group | Codes |
| --- | --- |
| Motion | G00 rapid, G01 straight feed, G02 clockwise arc, G03 counter-clockwise arc |
| Plane | G17 XY, G18 ZX, G19 YZ |
| Units | G20 inch, G21 mm |
| Dimensions | G90 absolute, G91 incremental |
| Cutter radius compensation | G40 off, G41 left, G42 right |
| Feed mode | G94 per minute, G95 per revolution |
| Lathe spindle mode | G96 constant surface speed, G97 constant rpm |

**Arcs need an end point and a centre.** A G02 or G03 block gives the end point of the arc, and either its radius R or the centre position as I, J (and K). I and J are measured from the arc's start point to its centre, along X and Y. Clockwise is judged looking down on the plane from the positive side of the third axis, so in the XY plane you look down from +Z.

**Cutter radius compensation lets you program the drawing.** Without it you would have to work out the path of the cutter's centre, one radius away from every edge. With G41 or G42 you program the part outline itself and the control offsets the path by the radius stored for that tool. G41 puts the tool on the left of the path, looking in the direction of travel, and G42 on the right. When the cutter is resharpened and gets smaller, only the stored radius changes, not the program.

**M codes come in pairs and families.**

- **Stops:** M00 always stops the program until the operator presses start. M01 stops only if the optional-stop switch is on.
- **Ends:** M02 ends the program. M30 ends it and also rewinds to the start, ready for the next part.
- **Spindle:** M03 clockwise, M04 counter-clockwise, M05 stop.
- **Tool and coolant:** M06 tool change. M08 coolant on, M09 off.

**APT and CAM write the G-code for you.** In APT the programmer describes the geometry (points, lines, circles) and the tool motion along it in English-like statements. The computer works out the cutter path as a cutter location (CL) file, and a postprocessor translates that into the G-code for one particular machine. CAD/CAM software works the same way, starting from the 3D model.

**Machining centres and turning centres.** A machining centre is a CNC mill with an automatic tool changer and a magazine of tools. A pallet changer lets the next job be loaded while the current one is being cut. So one setup can drill, mill, bore and tap a part on several faces, which saves the time and errors of moving it between machines.

### Worked numbers

**A short milling program.** It mills a straight slot and a quarter-circle in a 2 mm deep cut.

| Block | Meaning |
| --- | --- |
| N10 G21 G90 G17 | Millimetres, absolute dimensions, XY plane |
| N20 T01 M06 | Change to tool 1 |
| N30 S1000 M03 | Spindle at 1,000 rpm, clockwise |
| N40 G00 X20 Y20 Z5 M08 | Rapid to 5 mm above the start point, coolant on |
| N50 G01 Z−2 F50 | Feed down to 2 mm deep at 50 mm/min |
| N60 X60 F120 | Still G01 (modal): cut along to X60 at 120 mm/min |
| N70 G02 X80 Y40 R20 | Clockwise quarter-circle of radius 20 to (80, 40); its centre is (80, 20), so I20 J0 would do the same |
| N80 G00 Z5 | Rapid up out of the cut |
| N90 M09 M05 | Coolant off, spindle stop |
| N100 M30 | End of program, rewind |

**Absolute against incremental.** The tool moves from A (10, 10) to B (40, 10) to C (40, 30).

- Absolute: G90, then X40 Y10, then X40 Y30. Each block names the point itself.
- Incremental: G91, then X30 Y0, then X0 Y20. Each block names the step from the last point.

**Basic length unit.** A 5 mm pitch lead screw is driven by a 200-step motor through a 2 : 1 reduction (the motor turns twice per screw turn).

```math
BLU = \frac{p}{n_s \times i} = \frac{5}{200 \times 2} = 0.0125\ \text{mm}
```

To move the table at 300 mm/min, the control must send 300 / 0.0125 = 24,000 pulses a minute, that is 400 pulses a second.

**Constant surface speed on a lathe.** With G96 S150, the control holds 150 m/min at the tool as the diameter changes.

```math
N = \frac{1000\,V}{\pi D}: \qquad D = 50\ \text{mm} \Rightarrow 955\ \text{rpm} \qquad D = 20\ \text{mm} \Rightarrow 2\,387\ \text{rpm}
```

Near the centre the rpm would shoot up without limit, so a maximum spindle speed is always set with it.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Z is always the vertical axis. | Z is always the spindle axis, which is horizontal on a lathe. |
| A positive Z move feeds into the work. | Positive Z moves the tool away from the work. |
| G02 is counter-clockwise. | G02 is clockwise and G03 counter-clockwise. |
| G90 is incremental. | G90 is absolute and G91 incremental. |
| G20 selects millimetres. | G20 is inches and G21 millimetres. |
| G00 cuts at high speed. | G00 is rapid positioning with no cutting. G01 cuts at feed rate F. |
| M02 and M30 do the same thing. | Both end the program, but M30 also rewinds to the start. |
| M00 and M01 are the same stop. | M00 always stops. M01 stops only if the optional-stop switch is on. |
| An open-loop system has position feedback. | Open loop has none. Closed loop uses an encoder or scale. |
| Point-to-point control can mill a profile. | It controls only end positions, so it suits drilling and punching. |
| Modal codes must be repeated in every block. | They stay active until replaced by another code from the same group. |
| Absolute programming lets errors pile up. | Incremental does: one wrong step shifts every later point. |
| A ball screw has more backlash than a plain screw. | A preloaded ball screw has almost none, and much less friction. |
| I and J give the arc's centre from the program zero. | I and J give the centre from the arc's start point. |

## 9. Jigs and fixtures, powder metallurgy

Both topics are about making many identical parts cheaply. A jig or fixture makes every part sit in exactly the same place under the tool, so no time is spent marking out and lining up. Powder metallurgy makes parts by pressing metal powder into shape and baking it, with almost no metal wasted and no melting or cutting.

### The picture

For jigs and fixtures, think of a stencil and a clipboard. A stencil holds the paper and also guides your pen to the right place: that is a jig, which guides the tool. A clipboard only holds the paper still; you place the pen yourself: that is a fixture, which only locates and holds the work.

For powder metallurgy, think of a snowball. Loose snow pressed in your hands holds a shape but crumbles easily, like a green compact. Leave the snowball a while and the grains fuse where they touch, until it is hard as ice, though it never melted. That bonding at the contact points, below the melting point, is sintering.

### Twisted points

**A jig guides the tool; a fixture sets it once.** A jig carries hardened drill bushes that steer the drill, reamer or tap into exactly the right place for every part. A fixture has no bushes. It holds the work, and a setting block lets the operator set the cutter's position once, using a feeler, at the start of the batch.

The forces differ too. Drilling forces are small and push straight down, so a drill jig is often just slid around on the drilling machine table. Milling forces are large and change direction, so a fixture is always bolted to the table, lined up by tenons in its T-slots.

**Why 3-2-1, and why only three on the base.** A three-legged stool never rocks, even on an uneven floor, because three points always define a plane. A four-legged chair rocks unless all four legs are perfectly even. So the largest, best-finished face sits on three locators, spaced as far apart as possible.

In jig design, a free body is said to have 12 degrees of freedom, because each of the 6 usual ones (3 slides and 3 rotations) is counted in each direction. The locators then take them away one group at a time:

| Locators | On which face | Freedoms removed | Running total |
| --- | --- | --- | --- |
| 3 | The main (largest) face | Movement into that face, and rotation both ways about two axes | 5 |
| 2 | A side face | Movement into the side, and rotation both ways about the third axis | 8 |
| 1 | An end face | Movement into the end | 9 |
| Clamps | Opposite the locators | The three movements away from the locators | 12 |

The locators remove 9 freedoms and the clamps the last 3. That makes 3-2-1 a rule of six locating points.

**More locating points make things worse, not better.** Adding a fourth pin under the base, or a second pin on the end, locates the same direction twice (redundant location). One of them will always be slightly off, so the part either rocks or gets forced out of shape when clamped.

The classic case is locating a part by two holes. Two round pins in two holes both stop the part sliding along the line joining the holes, so if the hole spacing varies even slightly, the part will not go on. Making the second pin a diamond (relieved) pin fixes this: it touches only at two narrow lands, so it stops rotation but lets the part float along that line.

**Clamping rules come from common sense.** Press down over a solid support, the way you hold a notebook where the table is under it, not on the part hanging over the edge. Arrange the job so the cutting force pushes the part towards the locators, not against the clamps. Clamps should be quick to work, and should never push the part off its locators.

Two more design habits matter. Fool-proofing (poka-yoke) adds a pin or shape so a part can only be loaded the right way round. And locating faces are kept small and raised, with room for chips to fall clear, because a single chip trapped under the part tilts it.

**Drill bushes come in three kinds.** A fixed bush is pressed straight into the jig plate, for low-volume work. A renewable bush sits in a liner bush and is locked by a screw, so a worn bush is replaced without damaging the jig. A slip bush comes out quickly, so one hole can be drilled through one bush and reamed through another, in the same liner.

**Each jig type suits a shape of job.**

- **Template and plate jigs:** a plate with bushes laid on or clamped to the work, for holes on one face.
- **Leaf jig:** a hinged lid carrying the bushes swings open for loading.
- **Box jig:** encloses the part, so holes can be drilled on several faces by turning the jig over.
- **Channel jig:** a simple U-section that holds the part for holes on two or three faces.
- **Indexing jig:** turns the part to drill holes equally spaced round a circle.

**Making the powder: the method sets the particle shape.** Atomisation, the most common method, breaks a stream of molten metal into droplets with jets of gas or water. Gas gives round particles that flow well into a die but hold together poorly; water gives irregular ones that interlock and make a stronger green compact. Reduction turns metal oxides into spongy powder with hydrogen or carbon monoxide, as for iron and tungsten. Electrolysis gives very pure, branched copper powder, and milling crushes brittle materials.

**Blending adds a lubricant, not a glue.** The powders are mixed with alloy additions and a lubricant such as zinc stearate. The lubricant cuts friction between the powder and the die wall, so pressing is more even and the part comes out of the die more easily. It is burnt off early in sintering.

**Compaction leaves density uneven, and that limits the shape.** Powder does not flow like a liquid. Friction against the die walls means a punch pressing from one end packs the powder densest near the punch and loosest at the far end. Pressing from both ends (double action) gives a more even part, loosest in the middle. Isostatic pressing, with fluid pressure from every side, is the most uniform of all.

This is why PM parts are kept short compared with their diameter. A press can only push straight down and eject straight up, so undercuts, cross holes and threads cannot be pressed; they are machined later. The force a press needs is the compacting pressure times the projected area, so press size also limits part size.

**Sintering bonds the grains without melting them.** The green compact is heated to about 0.7 to 0.9 of the melting point (in kelvin) in a protective, reducing atmosphere such as hydrogen, so it does not oxidise. Atoms move across each contact point and build a neck between neighbouring particles, just as snow grains fuse. The part gets stronger and shrinks slightly as pores close, but some porosity remains.

Carbide tool tips use liquid-phase sintering. The cobalt binder melts at sintering temperature and wets the tungsten carbide grains, pulling them together, while the carbide stays solid.

**Impregnation and infiltration fill the pores with different things.** Impregnation fills the pores with oil. A self-lubricating bronze bearing is about a quarter pores, all soaked in oil: as the shaft turns and warms the bearing, the oil expands and seeps out to the surface, then soaks back in as it cools. Infiltration fills the pores with a molten metal of lower melting point, such as copper wicking into an iron part, which raises its density and strength.

Other secondary operations sharpen size or properties. Sizing and coining re-press the part for closer size and higher density, and powder forging forges a sintered preform to almost full density. Heat treatment and machining are done as for any metal; a part to be plated must first have its pores sealed, or plating solution gets trapped inside.

**Why PM, and when not.** Over 95% of the powder ends up in the part, with little or no machining. It makes things nothing else can: tungsten filaments (tungsten melts at about 3,400 °C), carbide tool tips, porous filters and bearings, and mixtures like copper-graphite brushes or tungsten-copper contacts.

Against that, powders and dies are costly, so PM pays only over long runs of thousands of parts. Size is limited by the press, shapes by the die, and strength and toughness by the leftover porosity.

### Worked numbers

**Porosity and oil in a bearing.** A sintered bronze bearing has a density of 6.6 g/cm³; solid bronze is 8.8 g/cm³.

```math
\text{Relative density} = \frac{6.6}{8.8} = 0.75 \qquad \text{Porosity} = 1 - 0.75 = 0.25 = 25\%
```

A 4 cm³ bearing can then hold up to 0.25 × 4 = 1 cm³ of oil, if all its pores are connected.

**Press force.** A gear blank 50 mm in diameter, pressed at 500 MPa:

```math
F = p \times A = 500 \times \frac{\pi \times 50^2}{4} = 500 \times 1\,963 = 982\,000\ \text{N} \approx 982\ \text{kN}
```

That is about 100 tonnes for one small blank, which is why PM parts stay small.

**Sizing the die for sintering shrinkage.** A compact pressed to 80% relative density sinters to 90%, with no change in mass. Its volume shrinks by 0.80 / 0.90 = 0.889, so each length shrinks by the cube root, 0.889^(1/3) = 0.962, about 3.8%. A part that must finish at 50 mm is pressed at 50 / 0.962 = 52.0 mm.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A fixture guides the tool. | A jig guides the tool through bushes. A fixture only locates and holds the work. |
| Fixtures are moved about freely on the table. | Fixtures are bolted down against milling forces. Drill jigs are often left free. |
| A body has 6 degrees of freedom in jig design. | Jig design counts 12, each of the 6 in both directions. |
| The 3-2-1 locators remove all 12 freedoms. | They remove 9. The clamps remove the last 3. |
| More locating points make a part more accurate. | Locating one direction twice makes the part rock or distort. |
| Two round pins are best for locating by two holes. | The second should be a diamond pin, so varying hole spacing still fits. |
| A clamp can press anywhere it is convenient. | Clamp over a support, and let the cutting force push towards the locators. |
| Zinc stearate is a binder that holds the compact together. | It is a lubricant for pressing, and it burns off in sintering. |
| A green compact is nearly finished. | It is as weak as chalk until it is sintered. |
| Pressing from one end gives an even density. | It is densest near the punch. Double-action or isostatic pressing is more even. |
| Sintering melts the powder. | It bonds the grains below the melting point, by diffusion. In liquid-phase sintering only the binder melts. |
| Impregnation and infiltration are the same. | Impregnation fills pores with oil. Infiltration fills them with a lower-melting metal. |
| Porosity is always a defect in PM. | Sometimes it is the point, as in filters and self-lubricating bearings. |
| PM suits small batches. | Dies are costly, so PM pays only over long runs. |

## Further reading

Level 2 follows the standard textbook treatment of each topic. Typical values (temperatures, speeds, ratios and percentages) are rounded textbook figures, so another book may quote a slightly different range.

- P. N. Rao, *Manufacturing Technology*, Volumes 1 and 2: Topics 1 to 6.
- Serope Kalpakjian and Steven R. Schmid, *Manufacturing Engineering and Technology*: every topic, with the reasons behind each process.
- Amitabha Ghosh and Asok Kumar Mallik, *Manufacturing Science*: the theory behind Topics 2, 4, 5 and 7.
- Mikell P. Groover, *Fundamentals of Modern Manufacturing*: Topics 2, 8 and 9.
- P. C. Pandey and H. S. Shan, *Modern Machining Processes*: Topic 7.
- S. K. Hajra Choudhury, *Elements of Workshop Technology*, Volumes I and II: machine tools, lathe work and jigs (Topics 2, 6 and 9) at exam level.
- P. H. Joshi, *Jigs and Fixtures*: Topic 9.
- R. K. Jain, *Production Technology*: every topic, at exam level.
