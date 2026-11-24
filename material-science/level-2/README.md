# Material Science & Metallurgy Level 2: Theory Deep Dive

Nov 24, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the formula lists and past questions are.

Conventions used throughout:

- Carbon contents are percentages by weight. The iron-carbon numbers are the ones in Level 1: eutectoid at 727 °C and 0.8% C, eutectic at 1147 °C and 4.3% C, at most 2.11% C in austenite and 0.022% C in ferrite, and 6.67% C in cementite. Older books round some of these (723 °C, 0.77%, 2%, 0.02%); in a question, use whichever the options suggest.
- Pure iron changes from BCC to FCC at 910 °C, back to BCC at 1400 °C, and melts at about 1539 °C.
- Temperatures are in °C, except in the recrystallisation and diffusion formulas, which need kelvin (add 273).
- Avogadro's number is 6.023 × 10²³ per mole, and 1 nm = 10⁻⁹ m = 10⁻⁷ cm.
- Topics 1 to 3 look inside a metal. Topics 4 and 5 are phase diagrams. Topics 6 and 7 change a steel by heating and cooling. Topics 8 and 9 are the materials themselves, and Topic 10 is how they are tested.

## 1. Crystal structure

A crystal is one small box of atoms repeated in all three directions. Nearly everything in this topic follows from two facts: where in the box the atoms sit, and along which line they touch. Exam setters twist the counting of atoms per cell, the radius relations, the difference between FCC and HCP, Miller indices, and why loosely packed BCC iron holds less carbon than tightly packed FCC iron.

### The picture

Fruit sellers stack oranges in a pyramid. Each layer sits in the hollows of the layer below. Pick any orange in the middle of the pile: it touches six others in its own layer, three in the layer above and three in the layer below, 12 neighbours in all. About 74% of the pile is orange and 26% is air, and no way of stacking equal balls does better. That is close packing.

There are two ways to place the third layer. If its oranges sit straight above those of the first layer, the order is ABAB…: that is hexagonal close-packed (HCP). If they sit over the hollows the first layer left open, the order is ABCABC…: that is face-centred cubic (FCC). Same layers, same 12 neighbours, same 74%. Only the order differs, and the order decides in how many directions the layers can slide (Topic 3).

Now put one orange at each corner of a cardboard box and one in the middle, so the middle one touches all eight corners but the corners do not touch each other. That is body-centred cubic (BCC). There is more air between the oranges, and only 68% of the box is filled.

### Twisted points

**Count shares, not the atoms you can see.** A drawing of a BCC cell shows 9 atoms, but each corner atom is shared by the 8 cells that meet at that corner. So the cell owns 8 × 1/8 + 1 = 2 atoms. An FCC drawing shows 14 atoms, but the cell owns 8 × 1/8 + 6 × 1/2 = 4. The hexagonal prism of HCP owns 12 × 1/6 (corners) + 2 × 1/2 (top and bottom face centres) + 3 (inside) = 6. An atom on a cell edge would be shared by 4 cells and count 1/4.

**Find the line along which the atoms touch, and the rest follows.** In simple cubic the atoms touch along the cube edge, so a = 2r. In BCC the body-centre atom touches the corner atoms along the body diagonal, which is √3 a long and spans four radii, so √3 a = 4r. In FCC the face-centre atom touches the corner atoms along the face diagonal, √2 a long, so √2 a = 4r. The commonest mistake is to make BCC atoms touch along the cube edge.

**Neighbours and packing rise together.** Simple cubic: 6 neighbours, 52% full. BCC: 8 neighbours, 68%. FCC and HCP: 12 neighbours, 74%. Diamond cubic (diamond, silicon, germanium) has only 4 neighbours and 34%, because its covalent bonds point in four fixed directions instead of letting atoms crowd round.

**FCC and HCP pack the same but behave differently.** Both have 12 neighbours and 0.74. But FCC has close-packed planes facing four different ways (the four {111} planes), each with three close-packed directions, giving 12 easy slip systems. HCP has close-packed planes facing only one way (the basal plane), giving 3. So copper and aluminium bend easily, while zinc and magnesium crack when worked cold. A mistake in the ABCABC order inside an FCC metal is a stacking fault (Topic 2).

**Looser packing does not mean bigger holes.** BCC iron (68% full) has more empty space than FCC iron (74%), yet austenite (FCC) can dissolve up to 2.11% carbon and ferrite (BCC) only 0.022%. BCC's empty space is split into many small holes; FCC's into fewer, larger ones. The largest hole in FCC, at the centre of the cube, fits a sphere of 0.414r, about 0.053 nm in iron. The largest in BCC fits only about 0.29r, about 0.036 nm. A carbon atom has a radius of about 0.07 nm, so it squeezes into FCC iron with some strain but hardly into BCC at all. When a quench traps carbon in BCC iron anyway, the carbon stretches the cell along one axis into a tetragon: that is martensite (Topic 6).

**Iron shrinks when it is heated past 910 °C.** On turning from BCC to FCC it packs tighter, so its volume falls by about 1% even though it is getting hotter. The reverse change on cooling makes it swell. Quenched steel swells more still when austenite turns into martensite, which is one reason a hard quench can crack a part.

**Seven systems, fourteen lattices.** The 7 crystal systems differ in their cell's edges and angles. Adding points at the body centre, the face centres or the centres of one pair of faces gives the 14 Bravais lattices: cubic 3 (simple, body-centred, face-centred), tetragonal 2, orthorhombic 4, hexagonal 1, rhombohedral 1, monoclinic 2 and triclinic 1. Cubic needs one length to describe it (a), orthorhombic three (a, b, c), triclinic all six (three edges and three angles). Cubic is the most symmetric and triclinic the least.

**Miller indices are reciprocals of the intercepts.** Note where the plane cuts the three axes, in units of the cell edge; take reciprocals; clear the fractions to the smallest whole numbers. An axis the plane never meets is cut at infinity, and 1/∞ = 0. A negative intercept is shown by a bar over its number. In a cubic crystal, the direction \[h k l\] is at right angles to the plane (h k l), and the spacing between neighbouring (h k l) planes is a/√(h² + k² + l²). The closest-packed planes are {111} in FCC and {110} in BCC.

### Worked numbers

**Packing factor of BCC.** Two atoms per cell, and a = 4r/√3.

```math
\text{APF} = \frac{2 \times \tfrac{4}{3}\pi r^{3}}{\left(4r/\sqrt{3}\right)^{3}}
```

```math
= \frac{8\pi r^{3}/3}{64 r^{3}/(3\sqrt{3})} = \frac{\sqrt{3}\,\pi}{8} = 0.68
```

**Density of iron from its cell.** BCC iron has a = 0.2866 nm = 0.2866 × 10⁻⁷ cm and an atomic mass of 55.85 g/mol. The cell volume is a³ = 2.354 × 10⁻²³ cm³.

```math
\rho = \frac{nA}{a^{3} N_A} = \frac{2 \times 55.85}{2.354\times10^{-23} \times 6.023\times10^{23}} = 7.88\ \text{g/cm}^3
```

The handbook value is 7.87 g/cm³, so the hard-sphere picture works.

**Atomic radius of copper.** FCC copper has a = 0.3615 nm. From √2 a = 4r, r = 1.414 × 0.3615 ÷ 4 = 0.128 nm.

**Miller indices.** A plane cuts the axes at x = 2, y = 3 and never meets z. Reciprocals: 1/2, 1/3, 0. Multiply by 6 to clear fractions: (3 2 0).

**Spacing of planes.** In FCC aluminium, a = 0.405 nm, so the close-packed (111) planes are 0.405 ÷ √3 = 0.234 nm apart.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A BCC cell holds 9 atoms. | It owns 2: eight corners at 1/8 each, plus the centre. |
| An FCC cell holds 14 atoms. | It owns 4: eight corners at 1/8, plus six faces at 1/2. |
| In BCC the atoms touch along the cube edge. | They touch along the body diagonal: √3 a = 4r. |
| HCP packs more tightly than FCC. | Both fill 74% with 12 neighbours. Only the stacking order differs. |
| BCC iron, being more open, dissolves more carbon. | Its holes are smaller. FCC austenite dissolves about a hundred times more. |
| Triclinic is the most symmetric system. | It is the least symmetric. Cubic is the most. |
| There are 14 crystal systems. | There are 7 crystal systems and 14 Bravais lattices. |
| Miller indices are the intercepts. | They are the reciprocals of the intercepts, cleared to whole numbers. |
| An axis the plane never meets gets the index ∞. | It gets 0, the reciprocal of infinity. |
| A metal always expands when heated. | Iron contracts slightly at 910 °C as it turns from BCC to FCC. |
| HCP has 8 nearest neighbours. | It has 12, the same as FCC. BCC has 8. |
| Simple cubic is common in metals. | Only polonium has it. |

## 2. Crystal imperfections and diffusion

No crystal is perfect, and its defects are not just flaws: they are what make metals useful. Vacancies let atoms move, dislocations let metals bend, and grain boundaries make them strong. Exam setters twist the dimension of each defect, the Burgers vector of edge and screw dislocations, Schottky against Frenkel defects, and how fast different atoms diffuse.

### The picture

Try to drag a large, heavy carpet across a room in one go: the whole carpet rubs on the floor at once, and it barely moves. Now lift one end, make a small ruck in it, and push the ruck along to the far end. Each part of the carpet moves only a little, one part at a time, and when the ruck reaches the end the whole carpet has shifted by the width of the ruck. The work was easy.

A dislocation is that ruck inside a crystal. Slipping a whole plane of atoms over the next one at once would need a huge stress. Moving a dislocation through the crystal breaks and remakes bonds one row at a time, so real metals bend at a small fraction of the stress a perfect crystal would need.

Vacancies work like an empty seat in a crowded cinema hall. Nobody can change seats until one is empty. Then the person next to it moves in, the next person moves into the seat just left, and so on. The people shuffle one way and the empty seat wanders the other. That is how large atoms diffuse through a metal.

### Twisted points

**Sort every defect by how many dimensions it has.** A point defect has no size in any direction: a vacancy, an interstitial atom, a substitutional atom. A line defect stretches in one direction: a dislocation. A surface defect stretches in two: a grain boundary, a twin boundary, a stacking fault, the free surface. A volume defect has size in all three: a void, a crack, a slag inclusion, a precipitate. Most "which kind of defect" questions are answered by asking which of these shapes it is.

**Every crystal above absolute zero holds vacancies.** They are not mistakes in growth. Making a vacancy costs energy but adds disorder, and above 0 K some vacancies always pay their way. Their number rises steeply with temperature: in copper near its melting point about one site in 2000 is empty, while at room temperature almost none are. Quenching from a high temperature traps the extra vacancies inside the metal.

**Schottky changes the density; Frenkel does not.** Both are pairs of point defects in ionic crystals, made so that the crystal stays electrically neutral. In a Schottky defect a cation and an anion are both missing; the ions have gone to the surface, so the crystal has the same mass spread over more sites and its density falls. In a Frenkel defect an ion, usually the smaller cation, leaves its site and squeezes into a gap nearby. Nothing leaves, so mass and volume, and hence density, stay the same.

**Edge and screw dislocations differ in where b points.** Walk round a dislocation in equal atom steps; the gap needed to close the loop is the Burgers vector b. In an edge dislocation, b is at right angles to the dislocation line, and the line moves in the direction of b. In a screw dislocation, b lies along the line, and the line moves at right angles to b, like a tear spreading sideways across a sheet of paper. A curved dislocation loop is edge where b is at right angles to it, screw where b runs along it, and mixed everywhere between.

**A few dislocations make a metal soft; very many make it hard.** With few dislocations, each glides freely. Cold work multiplies them by a factor of up to a million, and they tangle and block each other: that is work hardening (Topic 3). Fine whiskers of metal with almost no dislocations come close to the theoretical strength of a perfect crystal, roughly G/30, where G is the shear modulus.

**Dislocations breed during deformation.** In a Frank-Read source, a segment of dislocation pinned at both ends bows out under shear stress like a skipping rope in the wind. The stress needed is greatest when the bowed segment is a half circle, whose radius is half the pinned length. Past that point it grows without any more stress, wraps round the pins, joins up behind them and throws off a closed loop, leaving the original segment ready to do it again.

**Small atoms diffuse far faster than large ones.** Carbon, nitrogen and hydrogen sit in the gaps between iron atoms and hop from gap to gap; the next gap is almost always empty. Large atoms such as nickel, chromium, manganese and tungsten sit in regular sites and can move only when a vacancy happens to be next to them, which is rare. So at 1000 °C carbon in steel diffuses many thousands of times faster than nickel. That is why carburising and nitriding work: carbon and nitrogen can be driven into a steel surface in hours.

**Carbon diffuses faster in ferrite, but steel is carburised as austenite.** The open BCC lattice of ferrite lets carbon hop more easily, so at the same temperature its diffusion coefficient is higher in ferrite. But ferrite can hold only 0.022% carbon, while austenite can hold 2.11%. Carburising is therefore done at 900–950 °C, where the steel is austenite and can soak up carbon, and the high temperature speeds the diffusion as well.

**Depth grows with the square root of time.** The distance atoms spread grows as √(Dt). Doubling the case depth needs four times the time at the same temperature; doubling the time gives only √2, about 1.4 times, the depth. Raising the temperature is far more effective, because D rises exponentially with temperature.

**Grain boundaries are fast lanes.** Atoms are packed loosely along a boundary, so diffusion along it is faster than through the grains. The same loose packing gives boundaries extra energy, which is why they etch first and show up dark under the microscope, and why precipitates and impurities collect there.

### Worked numbers

**Steady flow through a plate (Fick's first law).** A steel plate 5 mm thick, of area 0.1 m², has hydrogen at 2.0 kg/m³ on one face and 0.4 kg/m³ on the other. D = 2 × 10⁻⁹ m²/s.

```math
J = D\,\frac{\Delta C}{\Delta x} = 2\times10^{-9} \times \frac{2.0-0.4}{0.005} = 6.4\times10^{-7}\ \text{kg/(m}^2\,\text{s)}
```

The mass flow is J × A = 6.4 × 10⁻⁸ kg/s, or about 0.23 g in an hour.

**Case depth and time.** A steel carburised for 4 hours at 930 °C has a case 0.5 mm deep. For a 1 mm case at the same temperature, the depth must double, so the time must rise four-fold: t = 4 × (1/0.5)² = 16 hours.

**How much faster at a higher temperature.** For carbon in austenite, D₀ = 2.3 × 10⁻⁵ m²/s and Q = 148 kJ/mol. At 900 °C (1173 K):

```math
D = 2.3\times10^{-5}\, \exp\!\left(-\frac{148\,000}{8.314\times1173}\right) = 5.9\times10^{-12}\ \text{m}^2/\text{s}
```

Repeated at 1100 °C (1373 K), the same formula gives 5.4 × 10⁻¹¹ m²/s. A rise of 200 °C makes carbon diffuse about nine times faster.

**Vacancies in copper.** Making one vacancy in copper takes about 0.9 eV, and Boltzmann's constant is 8.62 × 10⁻⁵ eV/K. At 1000 °C (1273 K) the fraction of empty sites is exp(−0.9 ÷ 0.1097) = exp(−8.2) = 2.7 × 10⁻⁴, about one in 3700. At room temperature (300 K) it is exp(−34.8), about 10⁻¹⁵.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A grain boundary is a line defect. | It is a surface (two-dimensional) defect. Dislocations are the line defects. |
| A stacking fault is a volume defect. | It is a surface defect: a wrong layer in the stacking order. |
| In an edge dislocation, b lies along the line. | In an edge dislocation b is at right angles to the line. In a screw dislocation b is parallel to it. |
| A screw dislocation moves in the direction of b. | It moves at right angles to b. An edge dislocation moves along b. |
| A Schottky defect leaves the density unchanged. | Schottky lowers the density. Frenkel leaves it unchanged. |
| Dislocations always make a metal weaker. | A few make slip easy. Very many tangle and make it stronger. |
| A perfect crystal has no vacancies at any temperature. | Above 0 K every crystal holds some, more as it gets hotter. |
| Nickel and carbon diffuse in steel at similar rates. | Interstitial carbon diffuses thousands of times faster than substitutional nickel. |
| Carbon diffuses faster in austenite than in ferrite. | It diffuses faster in ferrite at the same temperature. Austenite simply dissolves far more carbon. |
| Doubling the time doubles the case depth. | Depth grows as √t, so doubling the time gives about 1.4 times the depth. |
| The diffusion coefficient is in m/s. | It is in m²/s. |
| Diffusion is fastest through the middle of the grains. | It is faster along grain boundaries and free surfaces. |

## 3. Plastic deformation, cold working and recrystallisation

When a metal is loaded past its elastic limit, dislocations glide and the new shape stays. This topic answers three questions: how a metal deforms, why deforming it cold makes it harder, and how heat undoes that hardening. Exam setters twist slip against twinning, the number of slip systems, the recrystallisation temperature, and where the line between hot and cold working falls.

### The picture

Bend a paper clip open and try to bend the same spot back. It is harder than before, and if you keep bending that one spot it gets stiffer still, then snaps. Bend a soft copper wire and try to straighten it: the wire straightens, but it bends again somewhere next to the old bend, because the old bend has become the hardest part. That is work hardening.

Now hold the hardened part in a gas flame until it glows dull red, and let it cool. It bends as easily as new. That is annealing.

Inside the metal, each bend multiplies dislocations until they jam like traffic at a crowded junction, each one blocking the others. The flame lets atoms move: first the jam sorts itself out a little (recovery), then fresh, empty crystals grow and swallow the jammed ones (recrystallisation).

### Twisted points

**Slip takes the easiest road: the densest planes in the densest directions.** Close-packed planes lie farthest apart, so they are the most loosely bonded to each other, and close-packed directions give the shortest step from one atom to the next. A slip plane plus one slip direction lying in it is a slip system.

**Count slip systems, but check their quality too.** FCC has 12 (four {111} planes, three directions in each), all truly close-packed, so FCC metals are the most ductile. BCC has up to 48, but none of its planes is truly close-packed, so slip needs more stress and gets much harder as the temperature falls; that is why BCC steels turn brittle in the cold (Topic 10). HCP has only 3, all on the basal plane, so zinc and magnesium are brittle at room temperature.

**Only the resolved part of the load drives slip.** A pull σ on a crystal produces a shear stress on a slip system of σ cosφ cosλ, where φ is the angle between the pull and the normal to the slip plane and λ the angle between the pull and the slip direction. This is largest, σ/2, when both angles are 45°. If the slip plane is parallel or at right angles to the pull, the resolved stress is zero and that system cannot slip at all. Slip starts when the resolved stress reaches the critical resolved shear stress (Schmid's law).

**Twinning turns part of the crystal into its mirror image; slip does not.** In slip, a block of crystal slides by whole atom spacings and keeps its orientation, leaving steps (slip lines) on the surface. In twinning, every atom in the twinned band moves by a fraction of a spacing, in proportion to its distance from the twin plane, and the band ends up as a mirror image of the rest. Twinning happens suddenly, under impact or at low temperature, mostly in HCP and BCC metals; it gives little strain itself, but it turns the crystal so that slip can carry on. Bent tin rods click as they twin (the "tin cry"). FCC copper and brass show annealing twins, which form during recrystallisation, not during deformation.

**Fine grains make a metal both stronger and tougher.** Each grain boundary stops dislocations, so more boundaries give a higher yield strength (the Hall-Petch relation). A crack also has to change direction at every boundary, so fine grains make the metal tougher at the same time. No other strengthening method raises both. Coarse grains are better only for resisting creep at high temperature, where sliding along boundaries is the problem.

**Annealing a cold-worked metal goes through three stages, and only the second softens it.** Recovery, at a low temperature: dislocations rearrange into low-energy walls, internal stresses relax and electrical conductivity returns, but hardness hardly changes. Stress-relief annealing of cold-worked brass at about 250–300 °C uses this stage to stop it cracking in moist ammonia (season cracking) without losing its hardness. Recrystallisation, at a higher temperature: new, strain-free, equiaxed grains form and grow, and hardness falls steeply as ductility returns. Grain growth, if heating goes on: big grains eat small ones and the metal coarsens.

**The recrystallisation temperature is not a fixed property.** It is the temperature at which the cold-worked metal recrystallises fully in about an hour, roughly 0.3 to 0.5 of the melting point in kelvin. It falls with more prior cold work (more stored energy to drive it), with higher purity, with a finer starting grain and with a longer time. There is also a minimum amount of cold work, a few per cent, below which the metal does not recrystallise at all; and a small amount just above that minimum gives a few, very coarse grains on annealing.

**Hot or cold depends on the metal, not the thermometer.** Hot working means working above the metal's own recrystallisation temperature. Lead melts at 327 °C, so it recrystallises below room temperature, and rolling lead at room temperature is hot working: it never hardens. Tungsten melts at 3410 °C and recrystallises at about 1200 °C, so forging tungsten at 1000 °C, though red hot, is cold working. Working between the two, warm enough to cut the force but below recrystallisation, is called warm working.

**A metal pulled past yield is weaker in compression.** After a tensile plastic strain, the same metal yields at a lower stress when it is compressed. This is the Bauschinger effect: the piled-up dislocations, pushed back the other way, glide more easily.

### Worked numbers

**Resolved shear stress.** A single crystal is pulled with 100 MPa. The slip-plane normal is at 60° to the pull and the slip direction at 35°.

```math
\tau_R = \sigma\cos\phi\cos\lambda = 100 \times 0.5 \times 0.819 = 41\ \text{MPa}
```

If the critical resolved shear stress is 30 MPa, the crystal slips. It starts to yield at a pull of 30 ÷ (0.5 × 0.819) = 73 MPa.

**Recrystallisation temperatures from 0.4 Tm.** Work in kelvin. Copper melts at 1083 °C = 1356 K, so T\_R ≈ 0.4 × 1356 = 542 K, or about 270 °C. Lead melts at 327 °C = 600 K, so T\_R ≈ 240 K, about −33 °C: below room temperature. Tungsten melts at 3410 °C = 3683 K, so T\_R ≈ 1473 K, about 1200 °C.

**Percentage cold work.** A wire drawn from 10 mm to 8 mm diameter loses area in the ratio of the diameters squared: (10² − 8²) ÷ 10² × 100 = 36% cold work.

**Finer grains, higher yield.** For a brass, σ₀ = 70 MPa and k = 0.74 MPa·m½. With grains of 64 µm, d^(−½) = 1 ÷ √(64 × 10⁻⁶) = 125 m^(−½).

```math
\sigma_y = \sigma_0 + k\,d^{-1/2} = 70 + 0.74 \times 125 = 162\ \text{MPa}
```

With grains a quarter of that size, 16 µm, d^(−½) doubles to 250 and σ\_y = 70 + 185 = 255 MPa.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Slip can happen on any plane. | It happens on the densest planes, along the densest directions. |
| BCC metals, with 48 slip systems, are the most ductile. | FCC, with 12 truly close-packed systems, is. BCC slip needs more stress and fails in the cold. |
| The resolved shear stress can equal the applied stress. | Its largest value is half the applied stress, at 45°. |
| Slip and twinning both leave the crystal's orientation unchanged. | Slip does. The twinned band becomes a mirror image of the rest. |
| Coarse grains make a metal stronger. | Fine grains make it stronger and tougher. Coarse grains help only against creep. |
| Cold working raises ductility. | It raises strength and hardness and lowers ductility. |
| Recovery softens a cold-worked metal. | Recovery relieves internal stress; hardness barely changes. Recrystallisation softens it. |
| More cold work raises the recrystallisation temperature. | It lowers it. |
| T\_R = 0.4 Tm works in °C. | Both temperatures must be in kelvin. |
| Hot working means working above about 500 °C. | It means working above that metal's recrystallisation temperature. |
| Rolling lead at room temperature is cold working. | It is hot working, since lead recrystallises below room temperature. |
| A lightly cold-worked metal gives fine grains on annealing. | Cold work just above the minimum gives a few very coarse grains. |

## 4. Solid solutions, phase diagrams and the phase rule

A phase diagram is a map. Pick an alloy and a temperature, and it tells you which phases are present, what each one is made of, and how much of each there is. Exam setters twist the meaning of phase and component, the Hume-Rothery rules, whether the phase rule counts pressure, which arm of the lever goes on top, and the names of the invariant reactions.

### The picture

Stir sugar into hot tea: a lot dissolves. Let the same sweet tea cool, and sugar crystals settle at the bottom of the cup, because cold tea cannot hold as much. The tea is now two phases: a liquid that holds as much sugar as it can at that temperature, and solid sugar. How much sugar can dissolve at each temperature is a solubility line.

Metals do the same in the solid state. Copper can dissolve some zinc, iron can dissolve some carbon, and the limit changes with temperature. Past the limit a second phase comes out, just as the sugar did. A phase diagram is a chart of those limits for every mix of the two metals at every temperature.

To find how much of each phase there is, think of a see-saw. Put the two phases at the two ends of a plank, with the alloy's composition as the pivot. The phase nearer the pivot must be the heavier one to balance; that is the lever rule.

### Twisted points

**A phase, a component and a constituent are three different things.** A component is a chemical ingredient: Fe and Fe₃C in steel, Cu and Ni in a Cu-Ni alloy. A phase is a region that is uniform in structure and composition, with a clear boundary: a liquid, a solid solution, a compound. A constituent (or microconstituent) is what you see under the microscope, and it can be one phase or a mixture of two. Pearlite is a constituent made of two phases, ferrite and cementite. Ice floating in water is one component in two phases; salt water is two components in one phase.

**A solid solution keeps the solvent's crystal structure.** Copper with 10% nickel dissolved in it is still FCC, like copper. In a substitutional solution the solute atoms take solvent sites (Ni in Cu, Zn in Cu). In an interstitial solution small atoms fit in the gaps, which is possible only when the solute's radius is less than about 0.6 of the solvent's: carbon, nitrogen, hydrogen and boron in iron. Either way, the misfit strains the lattice and blocks dislocations, so a solid solution is stronger than its pure solvent.

**All four Hume-Rothery rules matter, not just size.** For complete substitutional solubility the radii must differ by less than about 15%, the crystal structures must match, the electronegativities must be close and the valencies equal. Copper (0.128 nm) and nickel (0.125 nm) differ by about 2%, are both FCC and have similar electronegativity and valency, so they mix in all proportions. Zinc (0.133 nm) differs from copper by only about 4%, yet copper dissolves at most about 39% zinc, because zinc is HCP. If the electronegativities differ a lot, the metals form an intermetallic compound instead of a solution.

**The phase rule explains the shape of every cooling curve.** With pressure fixed at one atmosphere, P + F = C + 1. A pure metal freezing has C = 1 and P = 2 (liquid and solid), so F = 0: the temperature cannot change until freezing ends, and the cooling curve shows a flat step. A binary alloy freezing as a solid solution has C = 2 and P = 2, so F = 1: the temperature keeps falling as it freezes, and the curve only bends. At a binary eutectic, C = 2 and P = 3, so F = 0 again: a flat step, like a pure metal. Gibbs' full rule, P + F = C + 2, counts pressure as a variable too; for water at its triple point, C = 1 and P = 3, so F = 0.

**The tie line gives compositions at its ends and amounts from its lengths.** In a two-phase region, draw a horizontal line at the temperature, across to the boundaries. The composition of each phase is read where the line meets its boundary, not at the alloy's own composition. The amount of each phase is the length of the line on the far side of the alloy, divided by the whole length. Putting the near arm on top is the commonest error.

**Slow cooling gives uniform grains; fast cooling gives cored ones.** As a Cu-Ni alloy freezes, the first solid to form is rich in nickel, the metal with the higher melting point, and later layers hold less. With very slow cooling, diffusion evens this out. In ordinary castings it does not, so each grain has a nickel-rich core and a copper-rich rim: coring. A homogenising anneal just below the solidus lets diffusion even it out.

**Learn the invariant reactions by their word parts.** Words ending in -ic involve a liquid: eutectic (liquid → two solids) and peritectic (liquid + solid → a new solid). Words ending in -oid copy them in the all-solid state: eutectoid (one solid → two solids) and peritectoid (two solids → a new solid). Eu- reactions split one phase into two on cooling; peri- reactions join two phases into one. A monotectic reaction splits one liquid into a solid and a second liquid.

**The eutectic alloy melts below both of its metals.** Lead melts at 327 °C and tin at 232 °C, but 62% tin with 38% lead melts at only 183 °C, and at a single temperature, like a pure metal. That is why near-eutectic tin-lead is the classic soft solder, and why cast irons near the 4.3% C eutectic are easy to cast. An alloy to the left of the eutectic is hypoeutectic; to the right, hypereutectic. Each first grows crystals of the phase on its own side (the proeutectic phase), and the remaining liquid freezes as eutectic.

**A phase diagram says nothing about time.** It shows what the alloy becomes after cooling slowly enough to reach balance. How fast a change happens, and what forms when there is no time for balance, needs a different chart, the TTT diagram (Topic 6). That is why martensite does not appear on any phase diagram.

### Worked numbers

**Lever rule in a Cu-Ni alloy.** An alloy of 35% Ni is held at 1250 °C, between liquidus and solidus. The tie line meets the liquidus at 31.5% Ni and the solidus at 42.5% Ni. So the liquid holds 31.5% Ni and the solid 42.5% Ni.

```math
W_L = \frac{42.5 - 35}{42.5 - 31.5} = 0.68 \qquad W_S = \frac{35 - 31.5}{42.5 - 31.5} = 0.32
```

The alloy is 68% liquid and 32% solid. The liquid is the larger share because 35% is nearer its end of the line.

**Inside a tin-lead eutectic.** The eutectic holds 61.9% Sn at 183 °C and freezes into α (18.3% Sn) and β (97.8% Sn).

```math
W_{\alpha} = \frac{97.8 - 61.9}{97.8 - 18.3} = 0.45 \qquad W_{\beta} = 0.55
```

**Degrees of freedom.** In a binary system with pressure fixed: one-phase region, F = 2 − 1 + 1 = 2, so temperature and composition can both be changed freely. Two-phase region, F = 1: choose the temperature and the phase compositions are fixed. Eutectic point, F = 0: nothing can change.

**Size rule.** Copper's radius is 0.128 nm and nickel's 0.125 nm: (0.128 − 0.125) ÷ 0.128 = 2.3%, well inside 15%. Silver (0.144 nm) against copper: (0.144 − 0.128) ÷ 0.128 = 12.5%, inside 15% but near the limit; with the other rules only partly met, Cu-Ag is a eutectic system with limited solubility.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Pearlite is a phase. | It is a mixture of two phases, ferrite and cementite: a constituent. |
| A component and a phase mean the same. | A component is a chemical ingredient. A phase is a uniform region with a boundary. |
| Ice in water is two components. | It is one component in two phases. |
| For metals the phase rule is always P + F = C + 2. | With pressure fixed, as it is for metals, P + F = C + 1. |
| In the lever rule, a phase's own arm goes on top. | The opposite arm goes on top. |
| The ends of the tie line give the amounts of the phases. | They give the phases' compositions. The arm lengths give their amounts. |
| Every alloy freezes at one temperature. | Only pure metals, eutectic alloys and compounds do. Other alloys freeze over a range. |
| A eutectic reaction turns one solid into two solids. | That is eutectoid. Eutectic turns a liquid into two solids. |
| A peritectic reaction splits a liquid into two solids. | It joins a liquid and a solid into a new solid. |
| Radii within 15% guarantee complete solubility. | Structure, electronegativity and valency must also match. Cu-Zn fails on structure. |
| A eutectic alloy melts at the average of its two metals. | It melts below both of them. |
| A phase diagram shows how fast a change happens. | It shows only equilibrium. Rates need the TTT diagram. |

## 5. The iron-carbon diagram

The iron-carbon diagram is the map every steel and cast iron follows when it cools slowly. If you can sketch it and walk an alloy down a vertical line, most questions read straight off it. Exam setters twist the numbers (727 or 723 °C, 0.8 or 0.77%), the difference between a phase and a mixture, what happens at each line, and the lever rule for pearlite.

### The picture

Cooling a steel is a walk straight down the map. Every line you cross is a border, and across each border something new appears.

Follow a 0.4% carbon steel. At the top it is liquid. Crossing the liquidus, crystals start to form. Just below 1500 °C the peritectic reaction turns the first solid and some of the liquid into austenite, and by about 1400 °C the steel is all austenite: one uniform FCC phase, holding all 0.4% of its carbon in solution. It stays like that through a long, quiet stretch, down to about 800 °C.

There it crosses the A3 line. Below this line part of the iron prefers to be BCC again, so grains of ferrite, which hold almost no carbon, begin to grow at the austenite grain boundaries. The carbon they reject crowds into the austenite that is left, which gets richer and richer. At 727 °C the remaining austenite has reached exactly 0.8% carbon, and it all turns at once into pearlite. The steel ends as about half ferrite grains and half pearlite.

Every steel follows the same story. Only the border it crosses first, and how much of each constituent it ends with, depend on its carbon.

### Twisted points

**The diagram is really iron against cementite, and cementite is not fully stable.** Given very long times, or plenty of silicon, Fe₃C breaks down into iron and graphite. The truly stable diagram is iron-graphite, shown dashed in some books, with its eutectic at about 1153 °C and eutectoid at about 738 °C. Steels never get there in practice, so the Fe-Fe₃C diagram is treated as the equilibrium diagram for steel. Grey cast iron, which holds graphite, follows the iron-graphite lines (Topic 8).

**The x-axis stops at 6.67% because that is cementite.** Fe₃C has three iron atoms (3 × 55.85 = 167.6) for each carbon atom (12.0), so carbon is 12.0 ÷ 179.6 = 6.7% of its weight. Beyond 6.67% the alloy would be cementite plus graphite, which is of no practical use.

**The eutectoid is the eutectic happening in solid austenite.** At 1147 °C a liquid of 4.3% C splits into two solids (ledeburite). At 727 °C a solid, austenite of 0.8% C, splits into two solids (pearlite). Both form thin alternate plates, because the carbon only has to move a short distance sideways, from what becomes ferrite into what becomes cementite. Below 727 °C the austenite inside ledeburite turns to pearlite too, so room-temperature ledeburite is pearlite plus cementite.

**Pearlite is mostly ferrite, yet much harder than ferrite.** By the lever rule pearlite is about 88% ferrite and 12% cementite. Its strength comes from the thin plates: dislocations in each ferrite plate are stopped by cementite every fraction of a micrometre. That is why the finer the pearlite (the faster it formed), the harder it is (Topic 6).

**A1 is flat; A3 and Acm slope.** A1, the eutectoid line, is at 727 °C for every steel. A3, where ferrite starts to form in a hypoeutectoid steel, falls from 910 °C at 0% C to 727 °C at 0.8%: more carbon keeps austenite stable to a lower temperature. Acm, where cementite starts to come out in a hypereutectoid steel, rises from 727 °C at 0.8% to 1147 °C at 2.11%: more carbon means austenite is saturated sooner. Austenite exists at room temperature only in alloy steels, such as 18-8 stainless, where nickel stretches its field down.

**Hypereutectoid steels grow a brittle cementite network.** Between Acm and A1 their extra carbon comes out as cementite along the austenite grain boundaries, so after slow cooling each pearlite grain is wrapped in a thin shell of brittle cementite. This is why such steels are hardened from just above A1, not above Acm, and why they are spheroidised before machining (Topic 6).

**0.8 or 0.77 can change the answer.** The eutectoid carbon content is 0.8% in most Indian textbooks and 0.76–0.77% in newer ones. Most questions give the same answer either way, but lever-rule numbers shift: the pearlite in a 0.55% C steel is 0.68 with 0.8% and 0.71 with 0.77%. Work it both ways if your answer is not among the options.

**The magnetic change at 768 °C is not a phase change.** Ferrite loses its magnetism above its Curie point (A2, 768 °C), but its BCC structure does not change. The old name β-iron for non-magnetic ferrite is therefore not a separate phase. Austenite, being FCC, is never magnetic, which is the blacksmith's old test: steel hot enough to have turned austenite no longer sticks to a magnet.

**Heating and cooling see different critical temperatures.** The lines on the diagram are for very slow change. On heating, a steel transforms a little above them (Ac1, Ac3; c for the French chauffage, heating). On cooling, it transforms a little below them (Ar1, Ar3; r for refroidissement, cooling). The faster the change, the bigger the gap.

**Steel and cast iron are split at 2.11% C, not 4.3%.** 2.11% is the most carbon austenite can hold; any more and the alloy must end with eutectic (ledeburite), which makes it a cast iron. 4.3% is the eutectic itself, the middle of the cast-iron range.

### Worked numbers

**A 0.4% C steel, just below 727 °C.** Constituents first: pearlite and the ferrite that formed before it (proeutectoid ferrite).

```math
W_{\text{pearlite}} = \frac{0.4 - 0.022}{0.8 - 0.022} = \frac{0.378}{0.778} = 0.49
```

So 49% pearlite and 51% proeutectoid ferrite. Phases next: all the ferrite (inside and outside the pearlite) against all the cementite.

```math
W_{\text{ferrite}} = \frac{6.67 - 0.4}{6.67 - 0.022} = 0.94 \qquad W_{\text{Fe}_3\text{C}} = 0.06
```

The two answers differ because one counts constituents and the other phases. Read the question to see which it wants.

**A 1.2% C steel.** Its constituents are pearlite and proeutectoid cementite.

```math
W_{\text{Fe}_3\text{C, pro}} = \frac{1.2 - 0.8}{6.67 - 0.8} = \frac{0.4}{5.87} = 0.068
```

About 7% cementite network and 93% pearlite. Even at the steel limit of 2.11% C the network is only (2.11 − 0.8) ÷ (6.67 − 0.8) = 22%.

**Carbon from a micrograph.** A slowly cooled plain carbon steel shows 75% pearlite and 25% ferrite. Turn the lever rule round: C = 0.022 + 0.75 × (0.8 − 0.022) = 0.61%, or roughly 0.75 × 0.8 = 0.6%.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Pearlite is a phase. | It is a mixture of two phases, ferrite and cementite. |
| Pearlite is half ferrite and half cementite. | It is about 88% ferrite and 12% cementite. |
| Ferrite can hold up to 2% carbon. | Ferrite holds at most 0.022%. Austenite holds up to 2.11%. |
| Austenite is magnetic. | It is FCC and non-magnetic. Ferrite is magnetic below 768 °C. |
| β-iron is a separate allotrope. | It is just ferrite above its Curie point; the structure does not change. |
| The eutectoid is at 1147 °C. | The eutectoid is at 727 °C and 0.8% C. The eutectic is at 1147 °C and 4.3% C. |
| Cast iron starts at 4.3% C. | It starts at 2.11% C (often rounded to 2%). 4.3% is the eutectic. |
| A hypereutectoid steel has less than 0.8% C. | It has more. Hypoeutectoid steels have less. |
| A1 rises with carbon content. | A1 is flat at 727 °C. A3 falls and Acm rises with carbon. |
| Martensite is shown on the iron-carbon diagram. | It needs fast cooling and appears only on TTT and CCT diagrams. |
| The Fe-Fe₃C diagram is a true equilibrium diagram. | Cementite is metastable. The truly stable diagram is iron-graphite. |
| Tensile strength keeps rising with carbon. | It peaks near 0.8–1% C. Hardness keeps rising. |

## 6. TTT diagram and heat treatment

Heat treatment is a race against carbon. Austenite holds its carbon in solution; on cooling, the carbon has to move out of the way before ferrite can form. Give it time and the result is soft pearlite. Give it none and the carbon is trapped, and the result is hard martensite. Exam setters twist the order of hardness of the structures, why the TTT curve has a nose, what austempering and martempering really do, hardness against hardenability, and what each tempering temperature gives.

### The picture

Think of a crowd leaving a stadium when the match ends. If the match ends dull and calm, nobody is in a hurry: people drift out slowly. If an alarm goes off at night while everyone is half asleep, they all want to leave at once, but they move slowly. The stadium empties fastest somewhere in between, when people both want to leave and are awake enough to move.

Austenite cooled just below A1 is the calm crowd: it can change to pearlite, but the urge is small, so the change starts late. Cooled far below, the urge is huge, but carbon atoms move so slowly that the change is slow again. The change is fastest at a middle temperature, about 550 °C for plain carbon steel. Plotted as time against temperature, the start of the change makes a C-shaped curve, and that fastest point is its nose.

Now slam the gates before anyone can leave. That is a quench. The carbon cannot get out, and the iron is forced to change its structure with the carbon still trapped inside: that is martensite.

### Twisted points

**The cooling rate decides the structure; the heating only prepares it.** Every hardening, annealing and normalising treatment starts the same way, by turning the steel into austenite. What follows depends on how fast it is cooled. Furnace cooling gives coarse pearlite (annealing), still air gives fine pearlite (normalising), and a quench faster than the critical cooling rate gives martensite (hardening).

**Martensite forms without diffusion, and almost instantly.** The iron atoms shift together by a small shear, like a deck of cards pushed sideways, so martensite has exactly the composition of the austenite it came from. The carbon trapped in it stretches the cell along one axis, making it body-centred tetragonal (BCT). Martensite forms as fast as sound travels through the steel, and how much forms depends on how far below Ms the steel is cooled, not on how long it is held there. Mf, where the change ends, may lie below room temperature in high-carbon steel, leaving some retained austenite; cooling to below zero (sub-zero treatment) converts it.

**Carbon decides how hard martensite is; alloying decides how deep it goes.** The hardness of martensite rises with carbon up to about 0.6–0.8% (about 65 HRC) and hardly depends on anything else. Alloying elements such as chromium, molybdenum, manganese and nickel (but not cobalt) slow the pearlite change and push the nose of the TTT curve to the right. A slower quench then still misses the nose, so thicker parts harden right through, and in oil instead of water. That is hardenability, measured by the Jominy test, and it is a different property from hardness.

**From hardest to softest: martensite, bainite, fine pearlite, coarse pearlite, spheroidite.** The finer the cementite and the more carbon trapped in the iron, the harder the structure. Spheroidite, with cementite gathered into a few round globules, has the least cementite-ferrite boundary, so it is the softest and most machinable. Toughness runs roughly the other way, except that tempered martensite and lower bainite are both hard and tough.

**A TTT diagram is for holding at one temperature; real parts cool continuously.** TTT means the austenite is quenched to a temperature and held there (isothermal). A part cooling steadily in water or oil follows a continuous-cooling (CCT) diagram, whose curves sit a little lower and to the right. Questions that say "TTT curves are isothermal" mean exactly this.

**Austempering gives bainite; martempering gives martensite.** Both quench into a hot salt bath and both reduce distortion and cracking, because the whole part reaches the same temperature before the final change. In austempering the bath is above Ms and the part is held until all the austenite has turned to bainite, so no tempering is needed. In martempering the bath is just above Ms and the part is held only until its temperature is even, then cooled through Ms in air; it ends as martensite and must still be tempered.

**Tempering lets the trapped carbon out in small steps.** Reheating below A1 lets carbon leave the martensite as fine carbide particles, and the BCT cell relaxes back towards BCC ferrite. The higher the tempering temperature, the more carbon escapes and the softer and tougher the steel becomes: about 200 °C keeps cutting tools hard, about 400 °C gives troostite for springs, and about 600 °C gives sorbite for shafts and gears. Tempering at about 250–350 °C can make some steels more brittle, not less (tempered-martensite or blue brittleness), so that range is usually avoided. Tool-makers once judged temperature by the oxide colour on a polished surface: pale straw near 220 °C, blue near 300 °C.

**Annealing and normalising differ mainly in the cooling.** Both heat 30–50 °C above A3. Annealing cools in the furnace over many hours and gives coarse pearlite, the softest state. Normalising cools in still air and gives finer pearlite and a finer, more even grain, so it is a little harder and stronger. For a hypereutectoid steel the two part ways: annealing goes only above A1, so as not to dissolve and re-form the brittle cementite network, while normalising goes above Acm on purpose, to dissolve that network so that the faster air cooling does not let it re-form.

**A quench has three stages, and the slow first one is what brine and stirring attack.** When a hot part enters water, a blanket of steam forms round it and insulates it: cooling is slow. Then the blanket collapses and the water boils on the surface: cooling is fastest. Last, the surface drops below boiling and heat leaves only by convection: slow again. Salt in brine and stirring both break up the steam blanket early, which is why brine quenches harder than plain water. Quench severity runs brine, water, oil, air.

**Big parts cool slower inside.** However fast the surface is quenched, the core of a thick bar cools more slowly and may miss the critical rate, ending as pearlite or bainite under a martensite skin. This is the mass effect, and it is why heavy sections are made of alloy steels with high hardenability.

### Worked numbers

**Choosing temperatures.** A 0.4% C steel has A3 at about 800 °C, so it is annealed, normalised and hardened from about 830–850 °C. A 1.0% C steel is hardened from just above A1, about 760–780 °C. Its Acm is roughly 727 + (1.0 − 0.8) × 320 ≈ 790 °C (Acm rises about 320 °C for each 1% of carbon from 0.8% to 2.11%), so it is normalised from about 830 °C.

**How fast is fast enough?** For a plain eutectoid steel, the nose of the TTT curve is at about 550 °C and one second. To miss it, the steel must fall the 177 °C from A1 to 550 °C in under a second, so it must cool at roughly 180 °C/s or more. Only a thin section quenched in water manages that, which is why plain carbon steels harden only to a shallow depth.

**How much the cell stretches.** The ratio of the long axis to the short axis of martensite rises with carbon roughly as c/a = 1 + 0.045 × (%C). For 0.8% C:

```math
\frac{c}{a} = 1 + 0.045 \times 0.8 = 1.036
```

The cell is stretched by about 3.6% along one axis. At zero carbon it would be 1, plain cubic BCC, which is why carbon-free iron cannot be hardened by quenching.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Martensite appears on the iron-carbon diagram. | It appears only on TTT and CCT diagrams. |
| Martensite forms by diffusion of carbon. | It forms by a diffusionless shear, with the carbon trapped in place. |
| Holding longer below Ms forms more martensite. | The amount depends on how far below Ms the steel is cooled, not on time. |
| Alloying elements make martensite harder. | Carbon decides its hardness. Alloying raises hardenability, the depth of hardening. |
| Hardness and hardenability are the same thing. | Hardness is how hard; hardenability is how deep the hardening goes. |
| Annealed steel is cooled in air. | Annealing cools in the furnace. Normalising cools in still air. |
| Normalised steel is softer than annealed steel. | It is a little harder and stronger, because its pearlite is finer. |
| Tempering is done above A1. | It is always done below A1. |
| Austempering produces martensite. | It produces bainite. Martempering produces martensite. |
| Martempered parts need no tempering. | They do. Austempered parts do not. |
| Plain water is the most severe quench. | Brine is more severe, because salt breaks up the steam blanket. |
| TTT curves describe continuous cooling. | They describe holding at one temperature. Continuous cooling uses CCT curves. |
| Hypereutectoid steels are hardened from above Acm. | They are hardened from just above A1. |
| Spheroidite is the hardest structure. | It is the softest, used to make high-carbon steel machinable. |

## 7. Surface hardening

A gear tooth has two jobs that pull against each other. Its surface must resist wear, which needs hardness; its body must survive shock, which needs toughness. Surface hardening gives both by treating only the skin. Exam setters twist which process adds what, at what temperature, whether a quench follows, and which steel each process needs.

### The picture

Put a slice of bread under a hot grill for a short time. The surface turns crisp and hard, while the inside stays soft. That is surface hardening by heat alone: flame and induction hardening heat only the skin of a steel part and quench it, without adding anything.

Now spread butter on the bread and let it soak in before you toast it. The surface itself has changed: it now holds something the inside does not. That is the other family: carburising, nitriding and cyaniding drive carbon or nitrogen into the skin, so the skin becomes a different steel from the core.

### Twisted points

**A case-hardened part is two steels in one.** After carburising, the surface holds about 0.8–1% carbon while the core still holds 0.1–0.25%. Quenched, the case turns to hard martensite, while the low-carbon core can form only a little martensite and stays tough. The hard case also ends in compression, because martensite takes up more room than the austenite it came from; that compressive skin stops fatigue cracks from starting, so case-hardened gears last far longer under repeated loads.

**Each family needs its own kind of steel.** Carburising, cyaniding and carbonitriding add carbon, so they suit low-carbon steels that could not harden otherwise. Flame and induction hardening add nothing, so they need a steel that already holds enough carbon to form martensite, at least about 0.35–0.4%. Flame-hardening a mild steel achieves almost nothing. Nitriding needs a steel with nitride-forming elements: aluminium, chromium, molybdenum or vanadium (Nitralloy steels). On plain carbon steel, nitriding forms brittle iron nitrides that flake off.

**Carburising is done hot because only austenite can take the carbon in.** At 900–950 °C the steel is austenite, which can dissolve up to about 2% carbon; ferrite below A1 could take in almost none. The high temperature also makes carbon diffuse fast. The case is kept at about 0.8–1% carbon: more would leave a brittle network of cementite at the surface.

**Pack carburising needs an energiser because solid carbon cannot get in by itself.** Charcoal touching the steel at only a few points would carburise it very slowly. The energiser, barium or sodium carbonate, breaks down on heating to give carbon dioxide. That reacts with the hot charcoal to make carbon monoxide, a gas that reaches every surface; at the steel, carbon monoxide gives up carbon to the steel and turns back into carbon dioxide, which goes back to the charcoal for more.

**A carburised part still needs hardening and tempering.** Carburising only adds carbon. The part must then be quenched to turn the high-carbon case into martensite, and tempered at a low temperature, about 150–200 °C, to relieve stress without losing hardness. For the best result it is quenched twice: first from above the core's A3, to refine the core grain, then from just above the case's A1, to harden the case without coarse grains.

**Nitriding needs no quench and barely distorts the part.** It works at 500–550 °C, below A1, so the steel never becomes austenite and there is nothing to quench. Its hardness comes from fine, hard nitrides of aluminium, chromium and the other nitride-formers, not from martensite. So the part is hardened and tempered first, machined to final size, and nitrided last. The case is the hardest of all, about 1000–1100 HV, and keeps its hardness up to about 500 °C. The price is time: 40 to 100 hours, for a case only a few tenths of a millimetre deep.

**Cyaniding and carbonitriding add nitrogen as well as carbon, and the nitrogen helps.** Nitrogen raises hardenability, so a carbonitrided case can be hardened by an oil quench instead of water, with less distortion. Cyaniding uses a poisonous molten sodium cyanide bath; carbonitriding does the same job with a gas mixture of a carbon-rich gas and ammonia, which is safer and easier to control.

**In induction hardening, the frequency sets the depth.** Alternating current crowds towards the surface of a conductor (the skin effect), and the higher the frequency, the thinner the layer it heats. Low frequencies, a few kilohertz, heat several millimetres deep; radio frequencies of a few hundred kilohertz heat less than a millimetre. Induction heating takes only seconds, so it is easy to automate on a production line for crankshaft journals, axles and gear teeth. Flame hardening needs no expensive equipment and suits very large or odd-shaped parts. Laser and electron-beam hardening work the same way on very small areas.

**Shot peening hardens the surface without any heat.** Blasting a surface with small steel balls dents and stretches the outer layer, which the metal underneath holds back, so the surface ends up in compression. Like the case of a carburised gear, the compressive skin resists the start of fatigue cracks. Peening is used on springs, gears, shafts and turbine blades, and its intensity is checked with a thin steel test strip (the Almen strip), which curves by an amount that depends on the peening.

### Worked numbers

**Case depth at a fixed temperature.** At about 925 °C, a widely used rule for gas carburising gives the case depth as d = 0.635√t, with d in mm and t in hours.

```math
t = \left(\frac{d}{0.635}\right)^{2} = \left(\frac{1.0}{0.635}\right)^{2} = 2.5\ \text{h for a 1 mm case}
```

For a 1.5 mm case, t = (1.5 ÷ 0.635)² = 5.6 hours. Half as deep again takes more than twice as long.

**Why a little more heat saves a lot of time.** Carbon in austenite has Q = 148 kJ/mol, so Q/R = 148 000 ÷ 8.314 = 17 800 K. Compare carburising at 925 °C (1198 K) with 870 °C (1143 K):

```math
\frac{D_{925}}{D_{870}} = \exp\!\left[17\,800\left(\frac{1}{1143} - \frac{1}{1198}\right)\right] = e^{0.715} = 2.0
```

Carbon diffuses twice as fast at the higher temperature, so the same case takes about half the time.

**Depth of induction heating.** The heated depth is about δ = 503√(ρ / (μᵣ f)) metres, where ρ is the resistivity in Ω·m, μᵣ the relative permeability and f the frequency in Hz. Hot steel above its Curie point has ρ ≈ 1.2 × 10⁻⁶ Ω·m and μᵣ = 1. At 10 kHz, δ = 503 × √(1.2 × 10⁻¹⁰) = 5.5 mm. At 400 kHz, δ = 503 × √(3 × 10⁻¹²) = 0.87 mm. Forty times the frequency gives about one sixth (1 ÷ √40) of the depth.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Case hardening makes the whole part hard. | Only the skin is hardened. The core stays soft and tough. |
| Mild steel can be flame or induction hardened. | These need about 0.35% carbon or more. Mild steel is carburised instead. |
| Carburising is done below A1. | It is done at 900–950 °C, where the steel is austenite and can take in carbon. |
| The more carbon in the case, the better. | About 0.8–1% is best. More leaves a brittle cementite network. |
| A carburised part is hard as soon as it leaves the furnace. | It must be quenched and then tempered at a low temperature. |
| Nitriding is followed by a quench. | It needs none: it works below A1 and its hardness comes from nitrides. |
| Any steel can be nitrided. | It needs Al, Cr, Mo or V. Plain carbon steel forms brittle iron nitrides. |
| Carburising gives the hardest case. | Nitriding gives the hardest case, though the thinnest and slowest. |
| Cyaniding adds only carbon. | It adds carbon and nitrogen. |
| Higher induction frequency hardens deeper. | Higher frequency heats a thinner layer. |
| Nitrided parts are machined after nitriding. | They are finish-machined before, since nitriding hardly distorts them. |
| Shot peening is a heat treatment. | It is cold work that leaves the surface in compression. |

## 8. Steels, cast irons and alloying elements

Every steel and cast iron is iron plus carbon plus a little of something else. The carbon sets how strong and hard the metal can be. The other elements decide how deep it hardens, whether it rusts, how it behaves when hot, and, in cast iron, whether the carbon ends up as cementite or as graphite. Exam setters twist the carbon ranges, the three kinds of stainless steel, the order of 18-4-1, and how each cast iron is made.

### The picture

Think of salt in cooking. A pinch changes the whole dish; a little more makes it stronger in taste; past a point it becomes a different dish altogether. Carbon is iron's salt. A few tenths of a per cent turn soft iron into a steel that can be hardened. Past about 2% the metal can no longer be forged at all, and it becomes cast iron.

For cast iron, take two sheets of paper. Cut a short, sharp slit in the middle of one, and punch a small round hole in the other. Pull each by its ends. The slit tears open at once; the sheet with the round hole holds. Graphite flakes in grey cast iron are those slits: sharp-edged cracks that make the iron weak and brittle in tension. Graphite spheres in SG iron are the round holes, and SG iron can bend like steel. Same metal, same carbon; only the shape of the graphite differs.

### Twisted points

**Low carbon is what makes structural steel weldable.** Near a weld, the steel is heated into austenite and then cooled fast by the cold metal around it. With much carbon, that zone turns to brittle martensite and cracks. Mild steel holds too little carbon for that, which is why bridges, ships and building frames use it. Alloying elements add to the risk, and the carbon equivalent, CE = C + Mn/6 + (Cr + Mo + V)/5 + (Ni + Cu)/15, sums their effect: below about 0.4 the steel welds easily; above it, it needs preheating.

**Sulphur breaks steel when hot; phosphorus breaks it when cold.** Sulphur forms iron sulphide, which melts at a low temperature and coats the grain boundaries, so the steel cracks during rolling or forging: hot shortness. Manganese takes the sulphur away as manganese sulphide, which melts high and stays harmless. Phosphorus makes ferrite brittle at low temperatures: cold shortness. In free-cutting steels, extra sulphur (with manganese) or lead is added on purpose, because the inclusions break chips short and speed up machining.

**Every alloying element either widens austenite or widens ferrite.** Nickel, manganese, carbon, nitrogen, copper and cobalt stabilise austenite: enough of them keeps steel austenitic at room temperature, as in 18-8 stainless and 13% manganese (Hadfield) steel. Chromium, molybdenum, tungsten, vanadium, silicon, titanium and aluminium stabilise ferrite. Separately, titanium, vanadium, niobium, molybdenum, tungsten and chromium form hard carbides; nickel, silicon, aluminium, copper and cobalt do not, and silicon and nickel push carbon towards graphite instead.

**Stainless steel can still corrode.** Its chromium oxide film heals itself in air, but it can break down. Chloride (sea water, salt) eats small pits through it; molybdenum, as in grade 316, resists that. Heating austenitic stainless steel between about 450 and 850 °C, as near a weld, lets chromium carbides form along the grain boundaries, draining the chromium beside them; the boundaries then corrode while the grains stay bright. This is sensitisation, or weld decay. Low-carbon grades (304L, 316L) or grades stabilised with titanium or niobium (321, 347) avoid it, because there is too little carbon left to grab the chromium.

**Only austenitic stainless steel is non-magnetic.** Ferritic (BCC) and martensitic (BCT) stainless steels are magnetic, like ordinary steel. Austenitic 18-8 is FCC and non-magnetic when annealed, though heavy cold work makes it slightly magnetic, because some austenite turns to martensite. That is also why 18-8 is hardened only by cold work, never by quenching: quenching keeps it austenite.

**High-speed steel stays hard when red hot.** Tungsten, molybdenum, vanadium and chromium form very hard carbides that do not soften until about 600 °C, so a tool can cut at speeds that make its edge glow. HSS is hardened from very near its melting point, about 1250–1300 °C, to dissolve those carbides, then tempered two or three times at about 550 °C. Unusually, that tempering makes it harder, not softer, because fine alloy carbides come out of the martensite: secondary hardening. The standard grade 18-4-1 is 18% tungsten, 4% chromium, 1% vanadium; today's most used grade, M2, replaces much tungsten with molybdenum (about 6% W, 5% Mo, 4% Cr, 2% V).

**Hadfield manganese steel is soft when made and hardens in use.** With about 12–14% manganese and 1.2% carbon, it is quenched from about 1050 °C to keep it austenite: tough but fairly soft. Under repeated hammering, its surface work-hardens strongly, while the core stays tough. That suits rail crossings, crusher jaws and excavator teeth, but it also makes the steel very hard to machine.

**Silicon and slow cooling make grey iron; low silicon and fast cooling make white.** Silicon pushes carbon out as graphite, and slow cooling gives it time to do so. A casting with thin and thick parts can be grey in the thick sections and white in the thin ones, where it cooled fast. Chilled iron uses this on purpose: a metal chill in the mould makes the surface white and hard while the inside stays grey. The carbon equivalent of a cast iron, C + (Si + P)/3, says how near it is to the 4.3% eutectic, and so how freely it flows.

**Grey iron's flakes are not all bad.** They weaken it in tension, but they also absorb vibration (excellent damping), break chips short and lubricate the tool (easy machining), act as a dry lubricant on machine slideways, and expand on forming, which offsets the metal's shrinkage so castings come out sound. In compression the flakes close up, so grey iron is three to four times stronger in compression than in tension. That is why machine beds, frames and engine blocks are grey iron.

**Malleable iron is not malleable.** It is still a cast iron and is never forged. Its name only means it bends a little before breaking, unlike grey iron. It is made by casting white iron, then annealing it for a day or more so the cementite breaks down into rounded clumps of temper carbon. The whole casting must first come out white, which limits malleable iron to thin sections.

**SG iron needs magnesium added at the last moment.** Magnesium (or cerium) makes graphite grow as spheres, but magnesium boils at about 1090 °C, far below the pouring temperature, so it is added as a nickel-magnesium or iron-silicon-magnesium alloy just before pouring, leaving only about 0.03–0.05% in the casting. Sulphur must be kept low, because it uses up the magnesium. Between grey and SG iron lies compacted-graphite iron, with short, blunt, worm-like graphite, used for diesel engine blocks.

**Read Indian designations as codes.** Plain carbon steel: C45 holds 0.45% carbon; Fe 410 is a structural steel with a minimum tensile strength of 410 MPa. In low-alloy steel the first number is carbon in hundredths of a per cent, and each element's number is its percentage multiplied by 4 (Cr, Co, Mn, Ni, Si, W) or by 10 (Al, Cu, Mo, Nb, Ti, V and some others). High-alloy steels start with X and give the real percentages: X5Cr18Ni10 is 0.05% carbon, 18% chromium and 10% nickel, an 18-8 stainless. Grey cast iron FG 200 has a minimum tensile strength of 200 MPa; SG 400/15 has 400 MPa and 15% elongation. In the American AISI system, 1020 is plain carbon steel with 0.20% carbon and 4140 a chromium-molybdenum steel with 0.40% carbon.

### Worked numbers

**Can it be welded without preheating?** Steel A has 0.20% C, 1.2% Mn, 0.2% Cr and 0.1% Ni.

```math
\text{CE} = 0.20 + \frac{1.2}{6} + \frac{0.2}{5} + \frac{0.1}{15} = 0.20 + 0.20 + 0.04 + 0.007 = 0.45
```

Above 0.4, so it needs preheating. Steel B, with 0.15% C and 0.8% Mn, has CE = 0.15 + 0.13 = 0.28 and welds freely.

**Decoding designations.** 40Cr4Mo2: 0.40% C, 4 ÷ 4 = 1% Cr, 2 ÷ 10 = 0.2% Mo. 35Mn6Mo3: 0.35% C, 6 ÷ 4 = 1.5% Mn, 3 ÷ 10 = 0.3% Mo. X5Cr18Ni10: 0.05% C, 18% Cr, 10% Ni.

**How a cast iron sits against the eutectic.** A grey iron has 3.2% C, 2.1% Si and 0.15% P.

```math
\text{CE} = 3.2 + \frac{2.1 + 0.15}{3} = 3.95
```

Below 4.3, so it is hypoeutectic. The closer CE is to 4.3, the lower its freezing range and the better it fills thin sections.

**Why mild steel is soft.** A 0.2% C steel holds only (0.2 − 0.022) ÷ (0.8 − 0.022) = 0.23, or 23% pearlite. The other 77% is soft ferrite, which is why it bends, draws and welds so easily.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| 18-4-1 HSS is 18% Cr, 4% W and 1% V. | It is 18% tungsten, 4% chromium and 1% vanadium. |
| Stainless steel never corrodes. | Chlorides can pit it, and sensitised austenitic steel corrodes along its grain boundaries. |
| Every stainless steel is non-magnetic. | Only annealed austenitic grades are. Ferritic and martensitic grades are magnetic. |
| 18-8 stainless steel is hardened by quenching. | Quenching keeps it austenite. It is hardened only by cold work. |
| Nickel and chromium both stabilise austenite. | Nickel stabilises austenite. Chromium stabilises ferrite. |
| Phosphorus causes hot shortness. | Sulphur causes hot shortness. Phosphorus causes cold shortness. |
| High-carbon steel welds best. | Low-carbon steel welds best; a carbon equivalent above 0.4 needs preheating. |
| Tempering always softens a steel. | High-speed steel gets harder when tempered at about 550 °C (secondary hardening). |
| Grey cast iron is weak in compression. | It is strong in compression and weak in tension. |
| Silicon makes cast iron white. | Silicon promotes graphite and grey iron. Low silicon and fast cooling make white iron. |
| White cast iron contains white graphite. | It has no graphite; all its carbon is in cementite. |
| Malleable iron is made by adding magnesium. | It is made by annealing white iron. Magnesium makes SG iron. |
| Malleable iron can be forged. | It is a cast iron; the name means only that it bends a little. |
| Wrought iron is a kind of cast iron. | It is nearly pure iron with threads of slag. |

## 9. Non-ferrous alloys and other engineering materials

Non-ferrous metals earn their place where steel falls short: in weight (aluminium, titanium, magnesium), in conductivity (copper), in resisting corrosion (copper, nickel and titanium alloys) or in low friction (bearing metals). Polymers, ceramics and composites fill the gaps no metal can. Exam setters ask what each alloy is made of and where it is used, so this topic is mostly about why each make-up suits its use.

### The picture

Look round an Indian kitchen. The water pot is brass, the old dinner plates bronze (kansa), the decorative tray German silver. The pressure cooker is aluminium, the tiffin box stainless steel. The frying pan has a Teflon coating, its handle is Bakelite, and the cups are ceramic.

Every one of those was chosen for a reason. Brass is easy to beat into shape and looks like gold. Bronze is harder and does not tarnish as fast. Aluminium is light and spreads heat quickly. Teflon is slippery and stands frying heat. Bakelite does not soften or conduct heat, so the handle stays cool and firm. The ceramic cup is hard and glossy but breaks if dropped. Learn each material the same way: what it is made of, what that gives it, and so what it is used for.

### Twisted points

**Up to about 36% zinc, brass gets better; beyond that it changes character.** Zinc dissolves in copper's FCC lattice up to about 36%, giving single-phase alpha brass, which grows stronger and stays ductile as zinc rises. 70/30 cartridge brass sits near that limit and is the best brass for deep drawing. Above about 38% zinc a second, BCC phase (beta) appears, which is harder and less ductile when cold but easy to work hot. So 60/40 Muntz metal is hot-rolled and hot-forged, not drawn cold.

**Brass in sea water can lose its zinc.** Sea water can dissolve the zinc out of brass and leave behind a weak, porous, copper-coloured sponge: dezincification. A little tin (Admiralty and naval brass) or arsenic stops it, which is why condenser tubes use them. Cold-worked brass can also crack in moist air with ammonia (season cracking), which stress-relief annealing prevents (Topic 3).

**Bronze is harder than brass, and each addition has a job.** Tin strengthens copper more than zinc does and gives better corrosion resistance. Phosphorus, added to deoxidise the melt, also hardens it and makes phosphor bronze springy and wear-resistant: springs, gears and bearings. Aluminium bronze is strong and resists sea water. Bell metal, with about 20–25% tin, is hard and brittle and rings clearly. Gun metal is a bronze with a little zinc, which makes the melt flow better and the castings sound: valves, pump bodies, bushes.

**Pure aluminium is soft; its alloys get their strength from age hardening.** Only alloys whose added element dissolves more when hot than when cold can be age-hardened: aluminium with copper (2000 series, duralumin), with magnesium and silicon (6000) and with zinc (7000, the strongest, for aircraft). Alloys of aluminium with manganese (3000) or magnesium alone (5000) cannot, and are strengthened by cold work instead.

**Ageing has a peak, and going past it softens the alloy.** After quenching, the dissolved copper gathers into tiny clusters (Guinier-Preston zones), then into fine particles that still fit the aluminium lattice and strain it strongly. That is peak hardness. Aged longer or hotter, the particles grow into separate CuAl₂ crystals that are far apart and easy for dislocations to pass round: over-ageing. Duralumin ages at room temperature within days, so duralumin rivets are kept in a refrigerator after quenching and driven while still soft.

**Duralumin rusts more easily than pure aluminium.** The copper particles set up tiny electric cells with the aluminium around them. Aircraft sheet is therefore clad with a thin skin of pure aluminium (Alclad), which protects the strong alloy underneath.

**Nickel alloys are chosen for one special property each.** Monel resists sea water and acids, so it is used for pump shafts, propeller shafts and chemical plant. Nichrome's high resistance and its tough oxide layer make it the standard heating-element wire. Nimonic alloys keep their strength and resist creep at red heat: gas turbine blades. Constantan's resistance hardly changes with temperature: thermocouples and precision resistors. Invar's magnetism happens to cancel almost all its thermal expansion near room temperature, so it is used for measuring tapes, clock pendulums and, paired with brass, the bimetal strips in thermostats.

**A good bearing metal is soft and hard at once.** It must be soft enough to bed in to the shaft and to bury grit (conformability and embeddability), yet hard enough to carry the load, and it must not seize on steel. Babbitt (white metal) does this with a soft tin matrix holding hard crystals of tin-antimony and copper-tin: the shaft rides on the hard crystals while the soft matrix wears into shallow channels that hold oil. Babbitt is weak in fatigue, so it is cast as a thin lining on a steel shell. Copper-lead and aluminium-tin linings carry heavier loads, as in car engines, and porous sintered bronze soaked in oil gives self-lubricating bushes.

**Titanium and magnesium are both light, for different reasons.** Titanium (4.5 g/cm³) is about as strong as steel at 60% of its weight and resists corrosion superbly, but it is costly to extract and to machine: aircraft parts, compressor blades and implants. Magnesium (1.74 g/cm³) is the lightest structural metal, but as an HCP metal it is hard to work cold, and fine magnesium chips can catch fire.

**Thermoplastics and thermosets differ in their bonds between chains.** Thermoplastic chains are held to each other only by weak forces, so heat lets them slide past one another; the plastic softens, flows and sets again every time. Thermoset chains are tied together by strong chemical cross-links into one network, so heat cannot make them slide: they stay rigid until they char. Most thermoplastics are made by addition polymerisation (polyethylene, PVC, polystyrene); Bakelite and nylon are made by condensation, which gives off a small molecule such as water. A plasticiser added to PVC makes it soft and flexible, as in cable insulation.

**Ceramics are brittle because their atoms cannot slip, not because their bonds are weak.** Their ionic and covalent bonds are very strong, which gives high hardness and melting points. But in an ionic crystal, sliding one row of ions past the next would bring like charges face to face, so dislocations hardly move. With no slip to blunt them, tiny surface flaws grow into cracks under tension. In compression the flaws close, so ceramics are many times stronger in compression than in tension. A cermet, such as tungsten carbide grains bonded by cobalt, puts hard ceramic particles in a tough metal matrix.

**A fibre composite is stiff along its fibres and weak across them.** Along the fibres, fibres and matrix stretch together and share the load in proportion to their stiffness, so the stiff fibres carry nearly all of it. Across the fibres, the load must pass through the soft matrix, and the composite is barely stiffer than the matrix alone. Laminates stack layers at different angles (0°, 90°, ±45°) to even this out. A composite's real gain is stiffness and strength per unit weight.

### Worked numbers

**Stiffness along and across the fibres.** A glass-epoxy composite has 60% glass fibres (E = 72 GPa) and 40% epoxy (E = 3.5 GPa).

```math
E_{\parallel} = 0.6 \times 72 + 0.4 \times 3.5 = 43.2 + 1.4 = 44.6\ \text{GPa}
```

```math
\frac{1}{E_{\perp}} = \frac{0.6}{72} + \frac{0.4}{3.5} = 0.1226 \quad\Rightarrow\quad E_{\perp} = 8.2\ \text{GPa}
```

The same material is more than five times stiffer along the fibres than across them.

**How much load the fibres carry.** Along the fibres, the share carried by the fibres is their part of the stiffness: 43.2 ÷ 44.6 = 0.97. The fibres carry 97% of the load, though they are only 60% of the volume.

**Stiffness per unit weight.** Divide Young's modulus (GPa) by density (g/cm³). Steel: 200 ÷ 7.85 = 25. Aluminium: 70 ÷ 2.7 = 26. Titanium: 110 ÷ 4.5 = 24. The common metals are almost equal, which is why swapping steel for aluminium saves weight only when the part can be made thicker. A carbon-fibre composite along its fibres: about 140 ÷ 1.6 = 88, more than three times better.

**Size of a polymer chain.** Polyethylene with an average molar mass of 280 000 g/mol is made of ethylene units, C₂H₄, of 28 g/mol each. Its degree of polymerisation is 280 000 ÷ 28 = 10 000 units per chain.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Brass is copper and tin. | Brass is copper and zinc. Bronze is copper and tin. |
| German silver contains silver. | It has none: it is copper, zinc and nickel. |
| Gun metal is a kind of brass. | It is a bronze (copper and tin) with a little zinc. |
| The more zinc, the more ductile the brass. | Ductility peaks near 30–36% zinc. Above about 38% the hard beta phase appears. |
| Pure aluminium is strong. | It is soft. Its alloys get their strength from alloying and age hardening. |
| Every aluminium alloy can be age-hardened. | Only those with copper, magnesium-silicon or zinc. The others are work-hardened. |
| Longer ageing always gives a harder alloy. | Past the peak, over-ageing softens it. |
| Duralumin resists corrosion as well as pure aluminium. | It corrodes more easily, so aircraft sheet is clad with pure aluminium. |
| Nichrome is used for thermocouples. | Nichrome is for heating elements. Constantan is for thermocouples. |
| Invar expands a lot when heated. | It hardly expands at all near room temperature. |
| Babbitt is hard throughout. | It is a soft matrix holding hard crystals. |
| Thermosetting plastics can be remelted and remoulded. | Thermoplastics can. Thermosets char instead of melting. |
| Ceramics are brittle because their bonds are weak. | Their bonds are very strong. They are brittle because dislocations cannot move. |
| A fibre composite is equally stiff in every direction. | It is far stiffer along the fibres than across them. |

## 10. Mechanical testing and non-destructive testing

Every property in this guide is a number that came out of a test. Mechanical tests pull, dent, strike or load a sample to measure its strength, ductility, hardness, toughness, fatigue life and creep. Non-destructive tests search the real part for flaws without harming it. Exam setters ask about the details: the indenter, the load, the specimen, which way the notch faces, and which NDT method suits which flaw.

### The picture

Think of a hospital check-up. A blood test takes a small sample and uses it up, just as a tensile test pulls a sample until it breaks: you learn a lot, but only about that sample. A blood-pressure reading is like a hardness test: done in a minute, it leaves no harm and says a good deal about overall health. A treadmill test watches how the heart copes with a load repeated over and over, like a fatigue test, and the slow changes of old age under a steady load are like creep.

Then there are X-rays and ultrasound scans, which find what is wrong inside without cutting the patient open. These are the non-destructive tests, and like scans they must be matched to what you are looking for: an X-ray shows a broken bone well and a torn ligament badly.

### Twisted points

**The highest point of the engineering stress–strain curve is not where the bar breaks.** Engineering stress divides the load by the original area. Up to the ultimate tensile strength (UTS) the bar stretches evenly along its length and work-hardens as it goes. At the UTS one spot starts to thin faster than work hardening can make up for, and a neck forms. From then on the load falls, so the engineering curve falls, but the true stress in the shrinking neck keeps rising until fracture. The UTS marks where necking begins.

**Mild steel has a yield point; most other metals do not.** In mild steel, carbon and nitrogen atoms gather round dislocations and pin them. Pulling the dislocations free needs a higher stress (the upper yield point). Once free they move at a lower stress (the lower yield point), and the bar stretches for a while with little rise in load, in bands that sweep along it (Lüders bands). Aluminium, copper and hardened steels show no such step, so their yield strength is taken as the 0.2% proof stress: draw a line parallel to the straight part of the curve, starting at 0.2% strain, and read where it cuts the curve. The limit of proportionality, the elastic limit and the yield point come in that order, and on mild steel they are so close that many questions treat them as one.

**Percentage elongation depends on the gauge length; reduction in area does not.** Most of the final stretch happens in the neck, which is about the same length whatever the gauge length. So a short gauge length gives a higher elongation figure than a long one on the same bar. Standards fix the gauge length at 5.65√A₀, which for a round bar is five times its diameter, so results can be compared. The percentage reduction in area at the neck does not depend on gauge length.

**Resilience is the area under the elastic part; toughness is the whole area.** The modulus of resilience is the energy a unit volume stores without permanent set, σ²/2E. Toughness is the energy it absorbs up to fracture, which needs both strength and ductility. Spring steel has high resilience. Mild steel, with its long plastic stretch, is tougher than a hard but brittle high-strength steel.

**Brinell measures the area of a dent made by a ball.** A hardened steel or tungsten carbide ball, usually 10 mm across, is pressed in with 3000 kgf for steel (500 kgf for soft metals) for 10 to 15 seconds, and the dent's diameter is measured. The Brinell number is the load divided by the curved area of the dent, in kgf/mm². Results only agree between different loads and balls when P/D² is kept the same: 30 for steel and cast iron, 10 for copper and aluminium alloys, 5 for pure copper and aluminium, 1 for lead and tin. The dent should be between about 0.24D and 0.6D across. Because the dent is large, Brinell averages out coarse, uneven metals like cast iron well, but it cannot test thin sheet, and on very hard steel a steel ball flattens (above about 450 HB).

**Vickers uses a diamond pyramid whose 136° angle was chosen to match Brinell.** The square diamond pyramid has 136° between opposite faces, the same angle as the tangents to a Brinell ball at the edge of a dent 0.375D across, a typical Brinell dent. So Vickers and Brinell numbers agree closely up to about 300. Because every Vickers dent has the same shape, the number hardly depends on the load, and one scale runs from the softest metals to the hardest. The small dent suits thin sheet and case-hardened surfaces, and microhardness testers with tiny loads can test single grains. The Knoop test uses a long, narrow diamond for very thin layers and brittle materials.

**Rockwell measures depth, not area, and reads straight off a dial.** A minor load of 10 kgf seats the indenter, the major load is added and removed, and the extra depth that remains gives the number on the dial; nothing has to be measured under a microscope. That makes it the quick production test. Each scale pairs an indenter with a load. Rockwell B uses a 1/16-inch steel ball with 100 kgf in all, for soft steel and brass. Rockwell C uses a 120° diamond cone with 150 kgf in all, for hardened steel. A Rockwell number means nothing without its scale letter. Two more tests come up in questions: the Shore scleroscope measures how high a diamond-tipped hammer bounces, so it can test large rolls in place, and the Mohs scale ranks scratch hardness from talc (1) to diamond (10).

**In Izod the notch faces the striker; in Charpy it faces away.** Both break a notched bar 10 mm square with a swinging pendulum and work out the energy absorbed from the swing height lost. Izod clamps a 75 mm bar upright as a cantilever, notch facing the pendulum, and strikes it 22 mm above the notch. Charpy lays a 55 mm bar across two supports as a simple beam and strikes it in the middle, on the face behind the notch. The notch concentrates the stress and makes it three-dimensional, so a metal that would bend as a plain bar may snap. The energy figure is for comparing materials and checking for brittleness; it cannot be used directly in a design calculation.

**Steel turns brittle in the cold; aluminium and copper do not.** Charpy tests over a range of temperatures show that BCC metals such as ordinary ferritic steel change from ductile to brittle over a narrow band, the ductile-to-brittle transition temperature. Some welded Liberty ships of the Second World War cracked in two in cold seas partly for this reason. FCC metals such as aluminium, copper, nickel and austenitic stainless steel stay tough down to very low temperatures, so they are used for cryogenic tanks. Fine grains and nickel lower the transition temperature; coarse grains and phosphorus raise it.

**Steel has an endurance limit; aluminium alloys do not.** A fatigue test spins a loaded specimen so each point on it goes from tension to compression every turn, and counts the cycles to failure at different stresses to draw the S–N curve. For steel the curve flattens after about a million to ten million cycles: below this endurance limit, roughly half the UTS for a polished specimen, it never fails. The curves for aluminium, copper and magnesium alloys keep falling, so their fatigue strength is quoted at a set number of cycles, such as 10⁸. Fatigue cracks start at the surface, at scratches, notches and sharp corners. Polishing, generous fillets, and shot peening or surface rolling (which leave compressive stress at the surface) raise fatigue life; decarburisation and rough machining lower it. A fatigue fracture shows smooth beach marks spreading from the starting point and a rough patch where the last section broke all at once.

**Creep matters above about 0.4 of the melting point in kelvin.** Under a steady load at high temperature a metal keeps stretching slowly. The strain rate falls at first (primary creep), then stays steady for most of the life (secondary creep), then speeds up as voids and necking set in, until it breaks (tertiary creep). Designers use the steady secondary rate, or the time to rupture. Unlike at room temperature, coarse grains resist creep better than fine ones, because at high temperature grains slide over one another at their boundaries. The best turbine blades are cast as single crystals with no grain boundaries at all.

**Each NDT method sees only certain flaws.** Liquid (dye) penetrant finds cracks open to the surface, in any non-porous material. Magnetic particle testing finds surface and just-below-surface cracks, but only in magnetic metals such as ferritic steel and cast iron, and only cracks lying across the magnetic field, so parts are magnetised in two directions. Eddy current testing finds surface flaws in any electrical conductor, and also measures coating thickness and sorts mixed-up metals. Ultrasonic testing sends high-frequency sound (usually 1 to 10 MHz) through a couplant such as oil or gel and times the echoes: it finds deep internal flaws, especially flat ones such as cracks and lack of fusion, and measures wall thickness from one side. Radiography (X-rays, or gamma rays from cobalt-60 or iridium-192) shows internal pores, slag and shrinkage cavities as dark patches on film and leaves a permanent record, but a crack shows only if it lies along the beam.

### Worked numbers

**A tensile test from start to finish.** A round steel bar 10 mm in diameter has a gauge length of 50 mm. The highest load is 31.4 kN. After fracture the gauge length is 62 mm and the neck is 7 mm across. The area is π/4 × 10² = 78.5 mm², so the UTS is 31 400 ÷ 78.5 = 400 MPa. Elongation = (62 − 50) ÷ 50 = 24%. The neck's area is (7/10)² = 0.49 of the original, so the reduction in area is 51%.

**True stress at the UTS.** If the engineering strain at the UTS in that test was 0.15, then, since the bar is still stretching evenly at that point:

```math
\sigma_T = \sigma\,(1 + \varepsilon) = 400 \times 1.15 = 460\ \text{MPa}
```

```math
\varepsilon_T = \ln(1 + \varepsilon) = \ln 1.15 = 0.140
```

True stress is higher, and true strain lower, than the engineering values.

**Energy stored without permanent set.** Mild steel with a yield stress of 250 MPa and E = 200 GPa:

```math
u = \frac{\sigma_y^2}{2E} = \frac{250^2}{2 \times 200\,000} = 0.156\ \text{MJ/m}^3
```

**Brinell number.** A 10 mm ball under 3000 kgf leaves a dent 4 mm across, which is 0.4D, inside the allowed range.

```math
\text{HB} = \frac{2P}{\pi D\left(D - \sqrt{D^2 - d^2}\right)}
```

```math
\text{HB} = \frac{2 \times 3000}{\pi \times 10 \times (10 - 9.165)} = 229
```

For steels, the UTS in MPa is roughly 3.45 × HB, so this steel's UTS is about 790 MPa. The rule of thumb does not hold for other metals.

**Vickers number.** A Vickers test at 30 kgf leaves a dent with a mean diagonal of 0.5 mm.

```math
\text{HV} = \frac{2P\sin 68^\circ}{d^2} = \frac{1.854 \times 30}{0.5^2} = 222
```

That is close to the Brinell number of 229, as expected below about 300.

**Impact energy.** A Charpy pendulum of mass 20 kg is released from 1.5 m above its lowest point and swings up to 0.6 m after breaking the specimen. Energy absorbed = 20 × 9.81 × (1.5 − 0.6) = 177 J.

**Depth of a flaw by ultrasound.** Sound travels through steel at about 5900 m/s. An echo comes back 20 µs after the pulse. The sound went to the flaw and back, so:

```math
\text{depth} = \frac{c\,t}{2} = \frac{5900 \times 20 \times 10^{-6}}{2} = 0.059\ \text{m}
```

The flaw is 59 mm below the surface.

**When creep begins.** Take 0.4 of the melting point in kelvin. Lead melts at 327 °C (600 K), so creep matters above 240 K, which is −33 °C: lead creeps at room temperature, which is why old lead pipes and roof sheets sag. For aluminium (933 K) it begins near 373 K, about 100 °C. For iron (1812 K) it begins near 725 K, about 450 °C.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The UTS is the stress at which the bar breaks. | The UTS is the top of the engineering curve, where necking begins. The bar breaks later, at a lower engineering stress. |
| Engineering stress falls after the UTS because the metal gets weaker. | The true stress in the neck keeps rising. Only the load per original area falls. |
| Every metal shows a clear yield point. | Mild steel does. Aluminium and copper do not, so the 0.2% proof stress is used. |
| Percentage elongation is the same whatever the gauge length. | A shorter gauge length gives a higher figure, because the neck is a bigger part of it. |
| Brinell suits every metal, including hardened steel. | A steel ball flattens on very hard metal. Use Vickers or Rockwell C. |
| Rockwell measures the area of the dent. | Rockwell measures depth. Brinell and Vickers measure the dent's size. |
| The Vickers number changes with the load. | Every Vickers dent has the same shape, so the number hardly changes with load. |
| In Izod the specimen is a simply supported beam. | Izod is a cantilever. Charpy is the simply supported beam. |
| In Charpy the striker hits the notch. | It hits the face behind the notch. In Izod the notch faces the striker. |
| Impact energy can be used directly in design. | It is only for comparing materials, and depends on the specimen and notch. |
| All metals turn brittle in the cold. | BCC steels do. FCC metals such as aluminium, copper and austenitic stainless steel stay tough. |
| Aluminium alloys have an endurance limit like steel. | They do not. Their fatigue strength is quoted at a set number of cycles. |
| Fine grains always give better creep resistance. | At high temperature coarse grains resist creep better, because grain boundaries slide. |
| Design for creep uses the fast tertiary stage. | It uses the steady secondary creep rate, or the time to rupture. |
| Magnetic particle testing works on any metal. | Only on magnetic metals such as ferritic steel and cast iron. |
| Dye penetrant finds flaws inside the metal. | It finds only flaws open to the surface. |
| Radiography finds every crack. | A crack shows only if it lies along the beam. Ultrasonic testing is better for cracks. |

## Further reading

The temperatures, compositions and other figures in this guide are the ones Indian textbooks and exam keys use most. Books differ a little on several of them: the eutectoid is given as 723 °C or 727 °C and as 0.76%, 0.77% or 0.8% carbon, and the composition limits of brasses and bronzes vary by a few percent from book to book. Figures such as the endurance limit being about half the UTS, or creep starting at 0.4 of the melting point, are rules of thumb, not laws. If only one of these figures appears among a question's options, pick it. If two close figures both appear, go with the one your exam board's past answer keys use.

- O. P. Khanna, *A Textbook of Material Science and Metallurgy*: the book many Indian exam setters draw on, strong on alloy compositions, heat treatment and testing.
- V. Raghavan, *Materials Science and Engineering: A First Course*: clear on crystal structures, defects, diffusion and phase diagrams.
- William D. Callister and David G. Rethwisch, *Materials Science and Engineering: An Introduction*: the standard international text, with good figures and worked examples on every topic, including polymers, ceramics and composites.
- Sidney H. Avner, *Introduction to Physical Metallurgy*: steels, heat treatment, cast irons and non-ferrous alloys in depth.
- V. D. Kodgire and S. V. Kodgire, *Material Science and Metallurgy for Engineers*: especially good on the iron–carbon diagram, TTT curves and heat treatment.
- R. K. Rajput, *Material Science and Engineering*: short, exam-oriented chapters with many objective questions.
- George E. Dieter, *Mechanical Metallurgy*: tensile, hardness, impact, fatigue and creep testing explained from the ground up.
- Baldev Raj, T. Jayakumar and M. Thavasimuthu, *Practical Non-Destructive Testing*: each NDT method, its equipment and where it is used in Indian industry.
