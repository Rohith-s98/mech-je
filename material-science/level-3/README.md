# Material Science & Metallurgy Level 3: Tricky Questions

Nov 24, 2026 · @Rohith

## How to use Level 3

Level 3 comes after the Level 1 guide and the Level 2 theory. It has the same 10 topics in the same order, but only the parts examiners twist into traps. Finish a topic in Levels 1 and 2 first, then do it here.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Formulas worth adding | The formulas that Level 1 leaves out but harder papers use. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from ESE, GATE, ISRO, state AE and lecturer papers and other technical exams, Kerala PSC included. Each solution goes step by step and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam. Its mechanical paper has a whole section on engineering materials, so 12 of the 40 questions here come from it: statement questions, Statement (I) and (II) questions and short calculations. GATE ME asks few materials questions, but the ones it asks are lever-rule calculations on the iron-carbon diagram. ISRO, Vizag Steel and state lecturer papers like one-line facts with a near-miss option. Kerala PSC likes to ask what drives a change, such as where the energy for recrystallisation comes from, and temperature ranges that books quote differently.

**Statement questions.** ESE and several state papers list three or four statements and ask which are correct. Check each statement on its own first, then cross out every option that contains a false one. Usually two checks are enough to leave a single option.

**Statement (I) and Statement (II) questions.** ESE also gives two statements with four fixed options. First decide whether each statement is true on its own. Only if both are true, read them as one sentence: "(I), because (II)". If that makes sense as cause and effect, the answer is the first option; if both are true but unrelated, it is the second.

**Numbers used throughout.** The iron-carbon figures are the ones in Levels 1 and 2: eutectoid at 727 °C and 0.8% C, eutectic at 1147 °C and 4.3% C, at most 0.022% C in ferrite and 6.67% C in cementite. When a question gives its own values, such as 0.76% or 0.025%, work with those and pick the nearest option. Any rule written as a fraction of the melting point needs the melting point in kelvin.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam. On the website, a topic with three or more four-option questions also gets a timed Practise this topic card.

## 1. Crystal structure

The traps here are in Miller-index arithmetic (take reciprocals first, then clear fractions), in packing formulas that belong to a different lattice, and in the idea that more slip systems always mean more ductility.

### Going deeper

| Idea | What it means |
| --- | --- |
| Miller indices from intercepts | Write the intercepts in units of a, b and c, take their reciprocals, then clear fractions to the smallest whole numbers. A plane parallel to an axis meets it at infinity, so its index for that axis is 0. A negative intercept gets a bar over its index. |
| Intercepts from Miller indices | Go backwards: take reciprocals of the indices and multiply by their lowest common multiple. (326) gives 1/3, 1/2, 1/6, and multiplying by 6 gives intercepts 2a, 3b, c. The biggest index goes with the shortest intercept. |
| Close-packed planes | FCC: the {111} planes, where every atom touches six neighbours in its own plane. HCP: the basal plane (0001), the same layer. BCC has no fully close-packed plane; its densest planes are {110}. |
| Slip systems | FCC has 12 (four {111} planes with three directions each), all on close-packed planes. BCC has up to 48, but on less dense planes that need more stress, especially when cold. HCP has only 3 easy ones at room temperature. |
| Where atoms touch | Simple cubic along the edge, a = 2r. BCC along the body diagonal, √3 a = 4r. FCC along the face diagonal, √2 a = 4r. Every packing and density result starts from this. |
| Atoms per cell and coordination | Simple cubic 1 and 6, BCC 2 and 8, FCC 4 and 12, HCP 6 and 12. FCC and HCP both pack at 0.74; BCC at 0.68; simple cubic at 0.52. |
| Size of the holes | FCC has fewer but larger holes than BCC: its octahedral hole fits a sphere 0.414 times the atom's radius, while BCC's largest hole fits only 0.291 times. That is why FCC austenite dissolves up to 2.11% carbon and BCC ferrite only 0.022%. |
| Polymorphism | Iron is BCC up to 910 °C, FCC up to 1400 °C, then BCC again. Because FCC packs more tightly, a bar of iron shrinks slightly as it is heated through 910 °C. |

### Formulas worth adding

```math
\text{APF}_{\text{BCC}} = \frac{2 \times \tfrac{4}{3}\pi r^3}{a^3} = \frac{\pi\sqrt{3}}{8} = 0.68
```

This uses 2 atoms per cell and a = 4r/√3.

```math
\text{APF}_{\text{FCC}} = \frac{4 \times \tfrac{4}{3}\pi r^3}{a^3} = \frac{\pi\sqrt{2}}{6} = 0.74
```

This uses 4 atoms per cell and a = 2√2 r. HCP gives the same value.

```math
\rho = \frac{n\,A}{a^3 N_A}
```

This is the density of a crystal with n atoms per cell, atomic mass A (g/mol), cell edge a (cm) and Avogadro's number Nₐ = 6.023 × 10²³.

```math
d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}
```

This is the spacing between neighbouring (hkl) planes in a cubic crystal. Planes with low indices are far apart and densely packed.

### Doubts cleared

**Doubt: FCC packs more tightly than BCC, so why does FCC iron hold more carbon?** What matters is the size of the biggest hole, not the total empty space. FCC's empty space sits in a few large holes that a carbon atom can squeeze into; BCC's is split into many small ones.

**Doubt: BCC has 48 slip systems and FCC only 12. Isn't BCC more ductile?** No. BCC's slip planes are not close-packed, so dislocations need a higher stress to move, and that stress rises steeply in the cold. FCC's 12 systems work easily at any temperature.

**Doubt: Why do zinc and magnesium crack when cold-worked?** HCP metals slip easily only on the basal plane at room temperature, which gives 3 slip systems. A grain needs about 5 independent systems to change shape freely inside a polycrystal, so the grains crack instead.

**Doubt: Is (222) a different plane from (111)?** For describing planes, indices are cleared to the smallest whole numbers, so both describe the same family of parallel planes, written (111). X-ray books keep (222) to mean planes at half the spacing.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2015, Paper 2.** A plane intersects the coordinate axes at x = 2/3, y = 1/3 and z = 1/2. What is the Miller index of this plane? (a) 9, 3, 2 (b) 4, 3, 2 (c) 4, 2, 3 (d) 3, 6, 4

*Answer: (d) 3, 6, 4.*

1. Take reciprocals of the intercepts: 3/2, 3 and 2.
2. Clear the fraction by multiplying all three by 2: 3, 6 and 4.
3. They have no common factor, so the plane is (364).

**The trap:** (c) is what you get by clearing fractions in the intercepts themselves, without taking reciprocals: 2/3, 1/3 and 1/2 multiplied by 6 give 4, 2, 3. The other wrong options mix the two steps.

**Q2. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 1.** If (3 2 6) are the Miller indices of a plane, the intercepts made by the plane on the three crystallographic axes are (a) (a, b, c) (b) (2a, 3b, c) (c) (a, 2b, 3c) (d) (2a, b, 3c)

*Answer: (b) (2a, 3b, c).*

1. Take reciprocals of the indices: 1/3, 1/2 and 1/6.
2. Multiply by 6 to make them whole: 2, 3 and 1.
3. So the plane cuts x at 2a, y at 3b and z at c.

**The trap:** The largest index, 6, belongs to the shortest intercept. (c) and (d) put a long intercept on z, which turns the rule upside down.

**Q3. AAI Junior Executive (ATC) 2015, Shift 2.** In a bcc structure, the packing fraction is: (a) √2 π/6 (b) π/3 (c) π√3/8 (d) √5 π/6

*Answer: (c) π√3/8.*

1. BCC has 2 atoms per cell, touching along the body diagonal, so √3 a = 4r.
2. Packing fraction = 2 × (4/3)πr³ ÷ a³ = π√3/8 = 0.68.

**The trap:** (a) equals 0.74, the FCC and HCP value. (b) is 1.05 and (d) is 1.17; a packing fraction can never exceed 1, so working out the decimals rules them out at once.

**Q4. RRB JE CBT 2, 22 April 2025, Shift 2.** Which of the following are the Miller Indices of a close packed plane in the FCC crystal? (a) (100) (b) (112) (c) (110) (d) (111)

*Answer: (d) (111).*

1. In FCC the atoms touch along the face diagonals. The plane that cuts off a corner of the cube contains three face diagonals: that is the (111) plane.
2. On it each atom touches six others in a triangular pattern, the densest layer possible, the same as the basal plane of HCP.

**The trap:** (110) is the densest plane in BCC, not FCC. (100) is a cube face, which in FCC has a square pattern with more space between atoms.

**Q5. ISRO Scientist (Mechanical) 2013.** Usually materials with the following crystal structure fail in ductile mode: (a) FCC (b) BCC (c) HCP (d) None of these

*Answer: (a) FCC.*

1. FCC metals have 12 slip systems on close-packed planes that work at low stress at every temperature. Aluminium, copper, nickel and austenitic stainless steel stretch and neck a long way before they break.
2. BCC metals such as ferritic steel and tungsten need more stress to slip and can turn brittle below their transition temperature.
3. HCP metals such as zinc and magnesium have too few easy slip systems and often crack.

**The trap:** BCC has more slip systems on paper, which tempts (b). How easily the systems work matters more than how many there are.

## 2. Crystal imperfections and diffusion

The traps here are in how a dislocation's line, its Burgers vector and its direction of motion relate, in the names of planar defects, and in which properties defects can change at all.

### Going deeper

| Idea | What it means |
| --- | --- |
| Edge dislocation | The Burgers vector b is at right angles to the dislocation line, and the line moves parallel to b. It has one slip plane, and at high temperature it can also climb out of it by gaining or losing vacancies. |
| Screw dislocation | b is parallel to the line, and the line moves at right angles to b. Because the line and b do not fix a single plane, a screw dislocation can cross-slip onto another plane to get round an obstacle. It cannot climb. |
| Mixed dislocation | b lies at some other angle to the line. A dislocation loop is pure edge at two points, pure screw at two others and mixed everywhere in between. In every case the crystal ends up slipped by b. |
| Structure-sensitive properties | Yield strength, hardness, work hardening, fatigue strength, fracture strength, creep resistance and electrical conductivity depend on dislocations, grain boundaries, impurities and flaws, so processing changes them a lot. |
| Structure-insensitive properties | Elastic constants, density, melting point and thermal expansion come from the bonds and the crystal structure. Cold work and heat treatment hardly change them. |
| Planar defects | Grain boundaries, twin boundaries, stacking faults (a wrong step in the ABCABC stacking of close-packed planes), anti-phase boundaries in ordered alloys, and the free surface. |
| Ordered alloys (superlattices) | Some alloys, such as Cu₃Au and beta brass, place their two kinds of atoms in a fixed pattern below a critical temperature. A dislocation gliding through puts like atoms face to face across its slip plane, and that disordered plane is an anti-phase boundary. |
| Point defects in ionic crystals | Schottky: a matching pair of a cation vacancy and an anion vacancy, so density falls. Frenkel: an ion, usually the small cation, moves from its site into an interstitial hole, so mass, volume and density stay the same. Silver bromide shows both. |
| Diffusion routes | Small atoms such as C, N and H jump between interstitial holes, which is fast. Substitutional atoms must wait for a vacancy next door, which is slow. Atoms move faster along grain boundaries and surfaces than through the lattice. |

### Formulas worth adding

```math
\frac{n_v}{N} = \exp\left(-\frac{Q_v}{kT}\right)
```

This is the fraction of sites that are vacant at temperature T (kelvin). It rises steeply with temperature.

```math
J = -D\,\frac{dC}{dx}
```

This is Fick's first law for steady flow: the flux J is proportional to the concentration gradient, and D is in m²/s.

```math
D = D_0 \exp\left(-\frac{Q}{RT}\right)
```

This is how D rises with temperature. Q is in J/mol with R = 8.314 J/mol K; per atom, use k instead of R.

```math
\frac{C_s - C_x}{C_s - C_0} = \operatorname{erf}\left(\frac{x}{2\sqrt{Dt}}\right)
```

This is Fick's second law for carburising a bar with surface carbon Cₛ and starting carbon C₀. A given carbon level is reached at a depth proportional to √(Dt), so doubling the case depth takes four times as long.

### Doubts cleared

**Doubt: Does a screw dislocation move in the direction of its Burgers vector?** No, its line moves sideways, at right angles to b. The edge dislocation is the one whose line moves along b. In both, the material on one side of the slip plane shifts by b.

**Doubt: Carbon dissolves far more in austenite. Does it also diffuse faster there?** At the same temperature it diffuses faster in ferrite, whose open BCC lattice has easier paths between holes. Carburising is still done in austenite because only austenite can hold enough carbon, and it is hotter.

**Doubt: Why does a Frenkel defect not change the density?** No ion leaves the crystal; one just moves into a hole. In a Schottky defect, ions go to the surface and leave empty sites behind, so the crystal grows slightly in volume without gaining mass.

**Doubt: Is a vacancy a sign of an impure or badly made crystal?** No. Vacancies are in equilibrium: every crystal above absolute zero has some, and more of them the hotter it is. Near the melting point, about one site in a thousand to ten thousand is empty.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2020.** Which of the following statements regarding screw dislocation is correct? (a) It lies parallel to its Burgers vector (b) It moves in the direction parallel to its Burgers vector (c) It initially requires very less force to move (d) It moves very fast as compared to edge dislocation

*Answer: (a) It lies parallel to its Burgers vector.*

1. In a screw dislocation the atoms are shifted along the line itself, so b is parallel to the line.
2. Under stress the line sweeps sideways, at right angles to b. Moving parallel to b is what an edge dislocation does.
3. Every dislocation lets a crystal slip at a small fraction of the stress needed to shift a whole plane at once, so (c) is not special to screw dislocations. Neither kind is generally faster, so (d) is not a rule either.

**The trap:** (b) sounds like the natural partner of (a), but it describes the edge dislocation. Line parallel to b and motion parallel to b never go together.

**Q2. ISRO Scientist (Mechanical) 2020.** Region of disorder created by movement of dislocations in superlattice is called: (a) Twin (b) Stacking fault (c) Anti-phase boundary (d) Orowon loop

*Answer: (c) Anti-phase boundary.*

1. In a superlattice, the two kinds of atoms alternate in a fixed pattern.
2. When one dislocation glides through, the atoms above its slip plane shift by one spacing, so like atoms now face each other across that plane. The order is broken along the plane: that is an anti-phase boundary.
3. A second dislocation following the first puts the order back, which is why dislocations in ordered alloys travel in pairs.

**The trap:** A stacking fault is also a planar defect left by a dislocation, but it is a slip in the ABC stacking sequence and can form in any FCC metal, ordered or not. An Orowan loop is the ring a dislocation leaves round a hard particle it bypasses.

**Q3. Vizag Steel Management Trainee (Mechanical) 2013.** The material property which depends only on the basic crystal structure is (a) fatigue strength (b) work hardening (c) fracture strength (d) elastic constant

*Answer: (d) elastic constant.*

1. Young's modulus, the shear modulus and the bulk modulus come from the stiffness of the bonds between atoms and the way the atoms are arranged. Steel's E is about 200 GPa whether it is annealed, cold-worked or hardened.
2. Fatigue strength, work hardening and fracture strength depend on dislocations, grain size, inclusions and surface flaws, all of which processing changes.

**The trap:** All four sound like basic material properties. Ask whether heat treatment can change the property a lot: it can double the fatigue or fracture strength of a steel, but it leaves E almost unchanged.

## 3. Plastic deformation, cold working and recrystallisation

The traps here are in what drives each stage of annealing, in how the stress to work a dislocation source depends on its length, and in what hot and cold really mean.

### Going deeper

| Idea | What it means |
| --- | --- |
| Slip and twinning | In slip, blocks of crystal shift past each other by whole atom spacings along slip planes; it carries most plastic deformation. In twinning, a band of crystal shears into a mirror image of the rest, each atom moving less than one spacing. Twinning gives little strain itself but turns grains so that they can slip; it is common in HCP metals and in BCC metals when cold or loaded suddenly. |
| Schmid's law | A grain starts to slip when the shear stress resolved on its slip plane, in its slip direction, reaches the critical resolved shear stress. The resolved share is largest, half the applied stress, when the plane and direction are both at 45° to the load. |
| Frank-Read source | A dislocation segment pinned at both ends bows out under stress, wraps round its pins and pinches off a loop, again and again. This is how dislocations multiply during cold work. The shorter the segment, the higher the stress needed. |
| Work hardening | Dislocation density rises from about 10¹⁰ to 10¹² per m² in annealed metal to 10¹⁴ to 10¹⁶ per m² after heavy cold work. The dislocations tangle and block each other, so more stress is needed to keep slipping. |
| Recovery | On mild heating, excess vacancies disappear and dislocations rearrange into low-energy walls (polygonisation). Residual stresses and electrical resistance fall, but hardness hardly changes. Stress-relief annealing uses this stage. |
| Recrystallisation | New grains, almost free of dislocations, form and grow through the deformed metal. Hardness falls and ductility returns. The driving force is the energy stored in the dislocations. |
| Recrystallisation temperature | The temperature at which a heavily cold-worked metal fully recrystallises in about an hour: roughly 0.3 to 0.5 of the melting point in kelvin. It is lower for heavier cold work, purer metal and finer starting grains. |
| Grain growth | Held hotter or longer, the new grains grow, because fewer, bigger grains mean less grain boundary area. Coarse grains lower the strength and toughness. |
| Hot and cold working | Hot working is done above the recrystallisation temperature, cold working below it, whatever the actual temperature. |

### Formulas worth adding

```math
\tau_R = \sigma \cos\phi \cos\lambda
```

This is Schmid's law: φ is the angle between the load and the normal to the slip plane, λ the angle between the load and the slip direction.

```math
\tau \approx \frac{G\,b}{L}
```

This is the stress needed to operate a Frank-Read source of length L in a metal of shear modulus G with Burgers vector b.

```math
\sigma_y = \sigma_0 + k\,d^{-1/2}
```

This is the Hall-Petch relation: the yield stress rises as the grain size d falls.

### Doubts cleared

**Doubt: Recrystallisation forms new crystals. Does the crystal structure change?** No. The new grains have the same lattice as the old ones; only their shape, size and dislocation content change. A change of lattice, such as BCC to FCC iron at 910 °C, is a phase change, not recrystallisation.

**Doubt: Why does lead not work-harden when bent at room temperature?** Lead melts at 600 K, so it recrystallises at roughly 0.4 × 600 = 240 K, about −33 °C. At room temperature it recrystallises as fast as it is deformed: bending it is hot working.

**Doubt: Recovery already softens a little. Why is recrystallisation needed?** Recovery relieves residual stress and restores conductivity, but most of the dislocations remain, so the metal stays hard. Only recrystallisation clears them out and restores the ductility needed for more cold work.

**Doubt: Is slip the same as twinning?** No. In slip, the crystal on both sides keeps the same orientation. In twinning, the sheared band takes up a mirror-image orientation, which can be seen as bands under the microscope.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 68/2026, Q44.** The free energy decrease during recrystallization comes mainly from (a) excess point defects (b) excess dislocations (c) grain boundaries (d) lower energy of the new crystal structure

*Answer: (b) excess dislocations.*

1. Most of the energy stored by cold work sits in the strain fields of the dense tangle of dislocations.
2. Recrystallisation replaces the deformed grains with new grains almost free of dislocations, and that stored energy is released.
3. Excess point defects have mostly disappeared earlier, during recovery. Grain boundary energy drives the next stage, grain growth.

**The trap:** (d) sounds right because new crystals form, but their lattice is the same as before. Recrystallisation is not a phase change, so there is no "lower energy structure" to gain.

**Q2. Kerala PSC AE (Mechanical) 68/2026, Q45.** The length of the Frank-Read source operating after work hardening to double the initial yield stress is approximately (a) half (b) same as before (c) double (d) 4 times

*Answer: (a) half.*

1. The stress needed to operate a Frank-Read source is τ ≈ Gb/L, so it is inversely proportional to the length L.
2. For the source to operate at twice the stress, L must be half as long.
3. Physically, work hardening fills the crystal with dislocation tangles that pin the segments at closer intervals, so only shorter sources are left.

**The trap:** (c) assumes stress grows with length. A longer segment bows out more easily, like a long rope being easier to bend than a short stick.

**Q3. UPRVUNL AE (Mechanical) 2021.** Which of the following statements is INCORRECT? (a) Oxide layers are formed during hot forming (b) Lubrication is crucial for cold forming (c) The surface finish is poor in hot working as compared to cold forming (d) Recrystallization takes place in cold forming

*Answer: (d) Recrystallization takes place in cold forming.*

1. Cold forming is done below the recrystallisation temperature, so the grains stay elongated and the metal work-hardens. No recrystallisation occurs during it.
2. Hot forming is done above that temperature, so new grains form as the metal deforms, and the hot surface oxidises into scale. That is why (a) and (c) are true.
3. Cold forming presses the die hard against the work, so lubrication is essential to limit force and die wear: (b) is true.

**The trap:** "Cold" and "hot" are measured against the recrystallisation temperature, not by touch. Tungsten worked at 1000 °C is still cold-worked.

**Q4. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 1.** A disadvantage of cold working of metals is (a) maximum deformation that can be given is limited (b) dimensional accuracy obtained is less (c) surface finish obtained is poor (d) None of these

*Answer: (a) maximum deformation that can be given is limited.*

1. Every pass work-hardens the metal and uses up some of its ductility. After a certain reduction it cracks unless it is annealed between passes.
2. Close dimensions and a bright, smooth finish are advantages of cold working, so (b) and (c) have it backwards.

**The trap:** (b) and (c) are true of hot working. Reading quickly, they look like the familiar list of drawbacks, but of the wrong process.

## 4. Solid solutions, phase diagrams and the phase rule

The traps here are in which arm of the lever goes with which phase, in which way the valency rule runs, and in the names of the lines on a phase diagram.

### Going deeper

| Idea | What it means |
| --- | --- |
| Substitutional and interstitial solid solutions | A substitutional solute takes the place of a solvent atom, as nickel does in copper. An interstitial solute squeezes into the holes between them, which only small atoms can do: carbon, nitrogen, hydrogen and boron in iron. |
| Hume-Rothery rules | Wide solid solubility needs four things: atom sizes within about 15% of each other, the same crystal structure, similar electronegativity (strongly attracting pairs form compounds instead), and the right valency. On valency, a metal of lower valency dissolves more of a higher-valency metal than the other way round. |
| Isomorphous system | Two metals that meet all four rules dissolve completely in each other as liquid and as solid, as copper and nickel do. The diagram is a single lens between the liquidus above and the solidus below. |
| Liquidus, solidus and solvus | Above the liquidus everything is liquid; below the solidus everything is solid. The solvus is the limit of solubility of one solid in another, and usually falls as the temperature drops. |
| Invariant reactions | Eutectic: liquid → two solids. Eutectoid: one solid → two solids. Peritectic: liquid + solid → a new solid. Peritectoid: two solids → a new solid. Monotectic: one liquid → a second liquid + a solid. "-ic" reactions involve a liquid; "-oid" reactions are all solid. |
| Gibbs phase rule | F = C − P + 2. Metallurgists usually fix the pressure, which leaves F = C − P + 1. At a binary eutectic point, F = 2 − 3 + 1 = 0: temperature and all three compositions are fixed. |
| Lever rule | In a two-phase field, draw the tie line at that temperature. The fraction of each phase is the length of the arm on the opposite side, divided by the whole tie line. |
| Intermetallic compounds | Phases with a fixed ratio of atoms, such as Fe₃C, CuAl₂ and Mg₂Sn. They appear as vertical lines on the diagram and are hard and brittle. |
| Cooling curves | A pure metal and a eutectic alloy both freeze at one temperature, giving a flat step. Any other alloy freezes over a range, so its curve only bends. |

### Formulas worth adding

```math
F = C - P + 2
```

This is the phase rule with pressure free to vary. With pressure fixed, the 2 becomes 1.

```math
W_{\alpha} = \frac{C_{\beta} - C_0}{C_{\beta} - C_{\alpha}}
```

This is the lever rule: the fraction of phase α in an alloy of overall composition C₀, where the tie line meets α at Cₐ and the other phase at Cᵦ.

### Doubts cleared

**Doubt: Which arm of the lever goes with which phase?** The opposite one. Check it with a limit: as the alloy's composition moves towards the α end of the tie line, the far arm grows and so does the amount of α, reaching all α at that end.

**Doubt: Why is the eutectic point a single point and not a line?** With pressure fixed, a binary alloy with three phases present (liquid and two solids) has F = 0. Nothing can be varied, so the temperature and every composition are fixed. A pure metal freezing has F = 1 − 2 + 1 = 0 for the same reason.

**Doubt: Is a eutectic a phase?** No, it is a mixture of two phases that froze together in a fine pattern. Ledeburite is the eutectic of the iron-carbon diagram; pearlite is the eutectoid.

**Doubt: Why do copper and nickel dissolve completely, but copper and zinc only partly?** Copper and nickel are both FCC, differ in radius by about 2% and have similar electronegativity and valency. Zinc is HCP and has valency 2, so copper can take only about 38% zinc before a new phase appears.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2015, Paper 2.** A copper-nickel alloy containing 20 wt% Ni, at a certain temperature, consists of a solid phase containing 26 wt% Ni and a liquid phase containing 16 wt% Ni. The weight ratio of the solid phase to the liquid phase is (a) 1 : 1 (b) 3 : 2 (c) 2 : 3 (d) 1 : 2

*Answer: (c) 2 : 3.*

1. Fraction of solid = (20 − 16) ÷ (26 − 16) = 4 ÷ 10 = 0.4.
2. Fraction of liquid = (26 − 20) ÷ 10 = 0.6.
3. Solid : liquid = 0.4 : 0.6 = 2 : 3.

**The trap:** (b) comes from using the near arm instead of the far one. The alloy, at 20% Ni, lies nearer the liquid's 16% than the solid's 26%, so there must be more liquid than solid.

**Q2. ESE Mechanical 2018.** Consider the following statements regarding solid solution of metals: 1. The solubility of metallic solids is primarily limited by size factor. 2. A metal with high valence can dissolve large amount of metal of lower valence. 3. A metal with same lattice crystal structure can form a series of solid solutions. 4. The limit of solid solubility is indicated by a phase boundary called liquidus. Which of the above statements are correct? (a) 1 and 4 (b) 2 and 4 (c) 1 and 3 (d) 1 and 2

*Answer: (c) 1 and 3.*

1. Statement 1 is true. Size is the first Hume-Rothery rule; beyond about 15% difference in radius, solubility is small.
2. Statement 2 is false. The valency rule runs the other way: copper (valency 1) dissolves about 38% zinc (valency 2), but zinc dissolves very little copper.
3. Statement 3 is true. The same crystal structure is what allows a continuous series of solid solutions, as in copper-nickel.
4. Statement 4 is false. The limit of solid solubility is the solvus line. The liquidus is the line above which the alloy is fully liquid.

**The trap:** "Liquidus" sounds like a solubility boundary, which pulls students towards (a). Liquidus bounds the liquid, solidus marks the end of freezing, and solvus bounds solid solubility.

**Q3. UPPSC AE (Mechanical) 2022, Paper I.** Solubility of two non-ferrous metals both in liquid and solid states is governed by: 1. Crystal structure 2. Relative size factor 3. Chemical affinity factor 4. Relative valency factor. Which of the above are correct? (a) 1, 2 and 3 only (b) 1, 2, 3 and 4 (c) 2, 3 and 4 only (d) 1 and 4 only

*Answer: (b) 1, 2, 3 and 4.*

1. These are the four Hume-Rothery factors. Each one alone can limit solubility.
2. Crystal structure: metals with different lattices cannot form a continuous series of solid solutions.
3. Size: a radius difference above about 15% strains the lattice too much.
4. Chemical affinity: strongly attracting metals form compounds instead of solutions.
5. Valency: a metal dissolves more of a metal of higher valency than of one with lower valency.

**The trap:** The valency factor is the least familiar, so options without it, such as (a), look safe. All four are needed for complete solubility.

## 5. The iron-carbon diagram

The traps here are in which two ends of the lever to use, in options that are real temperatures from the wrong line, and in the slightly different numbers that different books use.

### Going deeper

| Idea | What it means |
| --- | --- |
| A metastable diagram | The iron-carbon diagram used for steels is really iron-iron carbide. Cementite is not fully stable: held long enough, or helped by silicon, it breaks down into iron and graphite. Grey cast irons follow the stable iron-graphite version. |
| The critical lines | A1 is the eutectoid line at 727 °C. A3 is where ferrite starts to form from austenite on cooling a hypoeutectoid steel, falling from 910 °C at 0% C to 727 °C at 0.8% C. Acm is where cementite starts to form in a hypereutectoid steel, rising from 727 °C at 0.8% C to 1147 °C at 2.11% C. A2, at 768 °C, is where iron stops being magnetic. |
| Heating and cooling labels | Ac means the line as reached on heating (from the French chauffage) and Ar on cooling (refroidissement). Ac lines sit a little above the equilibrium line and Ar lines a little below. |
| Proeutectoid phases | In a hypoeutectoid steel, ferrite forms first along the austenite grain boundaries; the rest becomes pearlite at 727 °C. In a hypereutectoid steel, cementite forms first as a brittle network round the grains. |
| Proeutectoid versus total | A lever between 0.022% and 0.8% C gives proeutectoid ferrite and pearlite. A lever between 0.022% and 6.67% C gives the total ferrite and total cementite, counting what is inside the pearlite. |
| Inside pearlite | Pearlite at 0.8% C is about 88% ferrite and 12% cementite by weight, so its ferrite plates are roughly seven times thicker than its cementite plates. |
| Ledeburite | The eutectic, formed at 1147 °C and 4.3% C, is a mixture of austenite and cementite. Below 727 °C its austenite turns to pearlite, giving transformed ledeburite in white cast iron. |
| Reading carbon from a micrograph | In a slowly cooled hypoeutectoid steel, carbon content ≈ 0.8 × the fraction of pearlite. A steel that looks half pearlite has about 0.4% C. |

### Formulas worth adding

```math
W_{\text{pearlite}} = \frac{C_0 - 0.022}{0.8 - 0.022}
```

This is the pearlite fraction in a hypoeutectoid steel of carbon content C₀; the rest is proeutectoid ferrite.

```math
W_{\text{Fe}_3\text{C, pro}} = \frac{C_0 - 0.8}{6.67 - 0.8}
```

This is the proeutectoid cementite in a hypereutectoid steel; the rest is pearlite.

```math
W_{\text{Fe}_3\text{C, total}} = \frac{C_0 - 0.022}{6.67 - 0.022}
```

This is all the cementite in any steel, including that inside the pearlite.

### Doubts cleared

**Doubt: A question says "cooled to room temperature", but the lever uses values just below 727 °C. Does that change the answer?** Hardly. Below 727 °C, ferrite's carbon solubility falls from 0.022% to almost nothing, which changes the fractions only in the third decimal place. Exam keys use the values just below the eutectoid.

**Doubt: Why do books give the eutectoid as 0.76%, 0.77%, 0.8% or 0.83% carbon?** Measurements have been refined over the years. Older and many Indian books give 0.8% or 0.83%; Callister gives 0.76%. When a question gives a value, use it; when it does not, the nearest option will match any of them.

**Doubt: Is pearlite a phase?** No. It is a mixture of two phases, ferrite and cementite, in alternating plates. Ferrite, austenite and cementite are phases; pearlite and ledeburite are micro-constituents.

**Doubt: Why does the diagram stop at 6.67% carbon?** At 6.67% the alloy is entirely cementite, a compound. Every useful steel and cast iron lies well below that, and alloys richer in carbon are too brittle to use.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports) 65/2026, Q58.** The melting point of pure iron is (a) 1535 °C (b) 1400 °C (c) 910 °C (d) 768 °C

*Answer: (a) 1535 °C.*

1. Pure iron melts at about 1535 to 1539 °C; books differ in the last digit, and Levels 1 and 2 use 1539 °C. Only (a) is near.
2. 1400 °C is where FCC gamma iron changes back to BCC delta iron.
3. 910 °C is where BCC alpha iron changes to FCC gamma iron on heating.
4. 768 °C is the Curie temperature, where iron stops being magnetic.

**The trap:** Every wrong option is a real temperature from iron's cooling curve, so recognising a familiar number is not enough. Know what happens at each one.

**Q2. ESE Mechanical 2022.** For a 99.65 wt% Fe – 0.35 wt% C alloy at a temperature just below the eutectoid, the fractions of proeutectoid ferrite and pearlite, respectively, are (a) 0.44 and 0.56 (b) 0.56 and 0.44 (c) 0.044 and 0.056 (d) 0.056 and 0.044

*Answer: (b) 0.56 and 0.44.*

1. Just below the eutectoid, a 0.35% C steel is proeutectoid ferrite plus pearlite, so use the lever between ferrite (0.022% C) and the eutectoid point. ESE took the eutectoid at 0.76% C.
2. Pearlite = (0.35 − 0.022) ÷ (0.76 − 0.022) = 0.328 ÷ 0.738 = 0.44.
3. Proeutectoid ferrite = 1 − 0.44 = 0.56.
4. With 0.8% C instead, the fractions are 0.58 and 0.42, so (b) is still the nearest option.

**The trap:** (a) has the right numbers in the wrong order. A 0.35% steel is less than halfway to the eutectoid, so it must be mostly ferrite. (c) and (d) slip a decimal point.

**Q3. GATE ME 2022, Shift 1.** In the Fe-Fe₃C phase diagram, the eutectoid composition is 0.8 wt% C at 725 °C, and the maximum solubility of carbon in α-ferrite is 0.025 wt% C. A steel with 0.5 wt% C is slowly cooled from 1000 °C to room temperature. The fraction of pro-eutectoid α-ferrite is (a) 0.387 (b) 0.864 (c) 0.475 (d) 0.775

*Answer: (a) 0.387.*

1. At 1000 °C the steel is all austenite. On slow cooling, ferrite separates between the A3 line and 725 °C, and the remaining austenite becomes pearlite at 725 °C.
2. Proeutectoid ferrite = (0.8 − 0.5) ÷ (0.8 − 0.025) = 0.3 ÷ 0.775 = 0.387.

**The trap:** (d) is the bottom of the fraction and (c) is the top of the pearlite fraction, (0.5 − 0.025); both appear while working. Note too that the question wants proeutectoid ferrite only. All the ferrite, counting that inside the pearlite, would be (6.67 − 0.5) ÷ (6.67 − 0.025) = 0.93.

**Q4. UPRVUNL AE (Mechanical) 2022, Shift 1.** In an iron-iron carbide phase diagram, the X-axis depicting composition extends up to 6.70 wt% carbon. At this concentration the intermediate compound \_\_\_\_ is formed. (a) ferrite (b) cementite (c) austenite (d) pearlite

*Answer: (b) cementite.*

1. Cementite is Fe₃C. Its carbon content by weight is 12 ÷ (3 × 55.85 + 12) = 12 ÷ 179.6 = 6.7%.
2. The diagram ends there because an alloy of that composition is entirely cementite.

**The trap:** Ferrite and austenite are solid solutions that hold at most 0.022% and 2.11% carbon, and pearlite is a mixture at 0.8%. Do not be put off by 6.70 instead of 6.67: both are roundings of the same 6.69%.

## 6. TTT diagram and heat treatment

The traps here are in the order of hardness of the steel structures, in what each tempering range produces, and in what makes one diagram equilibrium and the other not.

### Going deeper

| Idea | What it means |
| --- | --- |
| What a TTT diagram shows | Austenite is quenched to a fixed temperature below A1 and held there. Two C-shaped curves show when it starts and when it finishes changing. For a plain eutectoid steel the nose is near 550 °C and is reached in about a second. |
| Above the nose | Pearlite forms: coarse just below A1, where atoms move easily and plates grow thick; fine near the nose. |
| Below the nose | Bainite forms: feathery upper bainite in the upper part of the range, needle-like lower bainite near Ms. Lower bainite is both harder and tougher. |
| Ms and Mf | Martensite starts at Ms and is complete at Mf, drawn as horizontal lines. Martensite forms without diffusion, so the amount depends on how far below Ms the steel is cooled, not on how long it waits. In high-carbon steels Mf is below room temperature, so some austenite is retained. |
| CCT diagram | For continuous cooling the curves shift lower and to the right. The critical cooling rate is the slowest rate that just misses the nose and gives all martensite. |
| Alloying and the curves | Almost every alloying element except cobalt pushes the curves to the right, so a slower quench, such as oil or air, still gives martensite. That is higher hardenability. |
| Tempering ranges | Up to about 250 °C: tempered martensite, stress-relieved but still very hard. About 350 to 450 °C: troostite. About 450 to 650 °C: sorbite, tougher. Just below A1 for a long time: spheroidite. Books quote these ranges differently; the order never changes. |
| Isothermal treatments | Austempering: quench into a bath above Ms and hold until all the austenite becomes bainite; no tempering needed. Martempering: quench to just above Ms, hold only until the whole part is at one temperature, then cool through to martensite and temper. It reduces cracking and distortion. |
| Annealing and normalising | Full annealing heats above A3 and cools in the furnace, giving coarse pearlite. Normalising cools in still air, giving finer pearlite and a harder, stronger steel. Spheroidising holds just below A1 for many hours. |

### Formulas worth adding

```math
M_s\,(^{\circ}\text{C}) \approx 539 - 423\,C - 30.4\,\text{Mn} - 17.7\,\text{Ni} - 12.1\,\text{Cr} - 7.5\,\text{Mo}
```

This estimates the martensite start temperature from the percentages of each element, for steels with up to about 0.6% C. A 0.4% C steel with 0.7% Mn gives about 350 °C. Every element lowers Ms, and carbon most of all.

```math
P = T\,(20 + \log_{10} t)
```

This is the Hollomon-Jaffe tempering parameter, with T in kelvin and t in hours. Equal P gives equal hardness, so 1 hour at 600 °C does about what 16 hours at 550 °C does.

### Doubts cleared

**Doubt: Why are Ms and Mf horizontal lines when the other curves bend with time?** Martensite forms by a sudden shear of the lattice, with no diffusion. Each degree below Ms converts a fixed extra amount almost instantly; holding longer adds nothing.

**Doubt: Can a TTT diagram be read along a continuous cooling curve?** Only roughly. In continuous cooling the steel spends less time at each temperature, so the real curves (CCT) lie lower and further right. The TTT diagram overstates how fast the quench must be.

**Doubt: Austempering and martempering both quench into a hot bath. What is the difference?** Austempering holds until all the austenite has become bainite. Martempering holds only long enough for the surface and core to reach the same temperature, then lets the part form martensite, which is then tempered.

**Doubt: Annealing and normalising both give pearlite. Why is normalised steel harder?** Air cooling is faster than furnace cooling, so the pearlite forms at a lower temperature with thinner, closer plates. Finer pearlite is harder and stronger.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q45.** Select the correct statement: (a) Iron-Carbon and TTT diagram are both non equilibrium diagrams (b) Iron-Carbon is a non-equilibrium but TTT diagram equilibrium diagram (c) Iron-Carbon and TTT diagram, both are equilibrium diagrams (d) Iron-Carbon is equilibrium diagram but TTT diagram is a non equilibrium diagram

*Answer: (d) Iron-Carbon is equilibrium diagram but TTT diagram is a non equilibrium diagram.*

1. The iron-carbon diagram shows the phases present when cooling is slow enough for equilibrium at every temperature. It has no time axis.
2. The TTT diagram shows how long austenite takes to change when it is held below A1, and it includes bainite and martensite, which never appear under equilibrium.

**The trap:** Strictly, iron-iron carbide is metastable, because cementite can break down into graphite. That pulls a careful reader towards (a), but every textbook and exam treats it as the equilibrium diagram for steels.

**Q2. Kerala PSC AE (Mechanical) 68/2026, Q47.** Sorbite is the structure obtained by (a) Quenching austenite (b) Quenching austenite and then heating into the range of 200 to 375 °C (c) Quenching austenite and then heating into the range of 375 to 660 °C (d) Quenching austenite and then heating into the range of 660 to 700 °C

*Answer: (c) Quenching austenite and then heating into the range of 375 to 660 °C.*

1. Quenching alone gives martensite, so (a) is out.
2. Tempering in the lower range gives tempered martensite and then troostite, both still hard: that is (b).
3. Tempering in the upper range, below about 650 °C, gives sorbite: fine cementite particles in ferrite, tough and fairly strong.
4. Holding just below A1 rounds the cementite into spheroidite: that is (d).

**The trap:** The ranges in (b) and (c) overlap with what different books give for troostite and sorbite. Fix the order instead: martensite, troostite, sorbite, spheroidite as the tempering temperature rises. Sorbite is the higher middle range.

**Q3. ESE Mechanical 2022.** Consider the followings statements regarding the mechanical behaviour of iron-carbon alloys: 1. Martensitic steels are most ductile. 2. Tempered martensite is relatively brittle. 3. Fine pearlite is more brittle than coarse pearlite. Which of the above statements is/are correct? (a) 1 only (b) 2 only (c) 3 only (d) 1, 2 and 3

*Answer: (c) 3 only.*

1. Statement 1 is false. Martensite is the hardest and least ductile structure in steel.
2. Statement 2 is false. Tempering exists to remove martensite's brittleness; tempered martensite combines high strength with good toughness.
3. Statement 3 is true. Thinner plates mean more ferrite-cementite boundary to block slip, so fine pearlite is harder, stronger and less ductile than coarse pearlite.

**The trap:** Tempered martensite is still harder than pearlite, so "relatively brittle" sounds reasonable, pulling towards (b). Compared with the martensite it came from, it is much tougher.

**Q4. Vizag Steel Management Trainee (Mechanical) 2013.** During heat treatment of steel, the hardness of various structures in increasing order is (a) martensite, fine pearlite, coarse pearlite, spherodite (b) fine pearlite, coarse pearlite, spherodite, martensite (c) martensite, coarse pearlite, fine pearlite, spherodite (d) spherodite, coarse pearlite, fine pearlite, martensite

*Answer: (d) spherodite, coarse pearlite, fine pearlite, martensite.*

1. Spheroidite has its cementite as separate balls in continuous soft ferrite, with the least boundary area: the softest.
2. Pearlite is harder, and fine pearlite, with thinner plates, is harder than coarse.
3. Martensite, with carbon trapped in a strained lattice, is the hardest.

**The trap:** (a) is the right list in decreasing order. Read "increasing" twice before ticking the option that looks familiar.

**Q5. ESE Mechanical 2021.** As per mechanical properties, which one of the following microconstituents is soft and ductile? (a) Bainite (b) Martensite (c) Spheroidite (d) Tempered martensite

*Answer: (c) Spheroidite.*

1. In spheroidite the soft ferrite is continuous and the hard cementite sits in isolated rounded particles, so the steel deforms easily: it is the softest and most ductile structure of a given steel.
2. Bainite and tempered martensite are strong and tough but much harder; martensite is the hardest of all.

**The trap:** (d) is softer than fresh martensite, which makes it sound like the answer. It is still several times harder than spheroidite.

## 7. Surface hardening

The traps here are in which processes add an element and which only heat and quench, which steels each one suits, and what goes wrong when a process is overdone.

### Going deeper

| Idea | What it means |
| --- | --- |
| Two families | Thermochemical processes change the surface composition: carburising, nitriding, cyaniding and carbonitriding. Thermal processes only heat the surface and quench it: flame, induction, laser and electron-beam hardening. These need a steel that already has about 0.35% to 0.5% carbon or more. |
| Carburising | Low-carbon steel (0.1% to 0.2% C) is held in austenite at 900 to 950 °C in a carbon-rich solid, gas or salt bath, then quenched and lightly tempered. Pack carburising uses charcoal with an energiser such as barium carbonate. Cases are typically 0.5 to 2 mm deep. |
| Double quenching | Long carburising coarsens the grains. A first quench from about 900 °C refines the core; a second from about 760 to 780 °C hardens the high-carbon case without coarsening it. |
| Nitriding | The part, already hardened and tempered, is held in ammonia at about 500 to 550 °C for 20 to 100 hours. This is below A1, so there is no quench and almost no distortion. The case is thin but very hard, because aluminium, chromium and molybdenum in the steel form fine nitrides. |
| Cyaniding and carbonitriding | Cyaniding uses a molten sodium cyanide bath at about 800 to 870 °C; carbon and nitrogen enter together and give a thin case in under an hour, but the salt is poisonous. Carbonitriding does the same with a gas carburising atmosphere plus ammonia, and the nitrogen lets an oil quench do the job. |
| Induction and flame hardening | Induction uses a high-frequency current to heat the surface in seconds; the higher the frequency, the thinner the heated skin. Flame hardening uses an oxy-acetylene torch and suits large parts such as lathe beds. Both harden selected areas only. |
| Why it improves fatigue life | A hard case resists wear, and because the case expands slightly as it hardens, it ends up under compressive residual stress, which keeps fatigue cracks from starting at the surface. |
| Overdoing it | Too long or too rich a carburise raises surface carbon well above 0.8%, giving retained austenite and brittle carbide networks after quenching. Too hot a flame or induction cycle can melt or crack edges. |

### Formulas worth adding

```math
d \approx 0.635\sqrt{t}
```

This is the case depth in mm after t hours of gas carburising at about 925 °C (Harris's rule). Doubling the depth takes four times as long.

```math
\delta = 503\sqrt{\frac{\rho}{\mu_r f}}
```

This is the depth (m) to which induction heating mainly reaches, for resistivity ρ (ohm m), relative permeability μᵣ and frequency f (Hz).

### Doubts cleared

**Doubt: Why is nitrided steel not quenched?** Its hardness does not come from martensite. Nitriding runs below A1, where the steel stays ferritic, and the hardness comes from tiny alloy nitrides that form in place. The core was hardened and tempered beforehand.

**Doubt: Can a plain carbon steel be nitrided?** Not usefully. Without aluminium, chromium or molybdenum, the nitrogen forms a brittle iron-nitride layer instead of a hard, tough case. Special nitriding steels such as Nitralloy are used.

**Doubt: Will induction hardening work on mild steel?** Hardly. With about 0.15% carbon, the quenched surface forms too little hard martensite. Induction and flame hardening suit medium-carbon and alloy steels, such as those used for gears and crankshafts.

**Doubt: Does a higher induction frequency give a deeper case?** No, a thinner one. High-frequency current crowds into a thinner surface skin, so a few hundred kilohertz is used for thin cases and a few kilohertz for deep ones.

### Tricky past questions with solutions

**Q1. Kerala PSC Deputy Engineer / AE (Mechanical) 050/2023, Q8.** The case hardening technique suitable for steels with very low carbon content: (a) Cyaniding (b) Induction hardening (c) Electron beam hardening (d) Flame hardening

*Answer: (a) Cyaniding.*

1. Induction, electron-beam and flame hardening only heat the surface and quench it. They add nothing, so the surface can harden only if the steel already has enough carbon.
2. A very low carbon steel treated that way would stay almost as soft as before.
3. Cyaniding adds carbon and nitrogen to the surface from a molten salt bath, so even a low-carbon steel gets a hard case after quenching.

**The trap:** Flame and induction hardening are the best-known surface hardening methods, which makes them tempting, but they are meant for medium-carbon steels.

**Q2. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 1.** Which of the following case hardening processes result in a change in the composition of a steel component? 1. Carburizing 2. Cyaniding 3. Nitriding 4. Flame hardening (a) 2, 3 and 4 only (b) 1, 3 and 4 only (c) 1, 2 and 3 only (d) 1, 2, 3 and 4

*Answer: (c) 1, 2 and 3 only.*

1. Carburising adds carbon, cyaniding adds carbon and nitrogen, and nitriding adds nitrogen. All three change the surface composition.
2. Flame hardening only heats and quenches the surface; its composition stays the same as the core's.

**The trap:** All four are surface hardening processes, which tempts you to (d). The question asks which ones change composition, and only the thermochemical ones do.

**Q3. RRB JE CBT 2 (Mechanical), 2 July 2026.** Which defect is most likely to result from excessive carburizing time in steel heat treatment? (a) Development of coarse pearlite across the section (b) Initiation of intergranular corrosion in the core (c) Formation of excessive retained austenite at the surface (d) Increase in porosity throughout the component

*Answer: (c) Formation of excessive retained austenite at the surface.*

1. Longer carburising drives more carbon into the surface, well above the 0.8% to 0.9% that is wanted.
2. More carbon lowers the Ms and Mf temperatures. With Mf below room temperature, part of the high-carbon case stays as austenite after quenching.
3. Retained austenite is soft, so the case loses hardness, and it may turn to martensite later in service, changing the part's size.

**The trap:** Long carburising does coarsen the grains, which makes (a) sound right. But the part is quenched afterwards, so it does not end up as coarse pearlite. Corrosion and porosity have nothing to do with carburising time.

## 8. Steels, cast irons and alloying elements

The traps here are in what each alloying element really does, which steels cannot be hardened by quenching, and which use goes with which steel.

### Going deeper

| Idea | What it means |
| --- | --- |
| Plain carbon steels | Low-carbon or mild steel has up to about 0.3% C and is used for sheets, wire and structures. Medium-carbon steel (0.3% to 0.6% C) is used for shafts, axles and rails. High-carbon steel (0.6% to 1.5% C) is used for springs, chisels, files and cutting tools. |
| Cast irons | Grey iron has carbon as graphite flakes; it damps vibration and suits machine beds. White iron has carbon as cementite and is hard and brittle. Malleable iron is white iron annealed into graphite rosettes. SG or ductile iron has graphite as spheres, made by adding magnesium or cerium. |
| Austenite stabilisers | Nickel, manganese, carbon, nitrogen and copper widen the austenite region. With enough nickel or manganese the steel stays austenitic at room temperature, as in 18-8 stainless and Hadfield manganese steel. |
| Ferrite stabilisers | Chromium, silicon, molybdenum, tungsten, vanadium, titanium and aluminium shrink the austenite region. |
| Hardenability | Almost every alloying element slows the pearlite reaction and lets thicker sections harden. Manganese, chromium, molybdenum and nickel are the main ones. Cobalt is the exception: it speeds up the reaction and lowers hardenability. |
| Element by element | Chromium gives corrosion resistance and wear-resistant carbides. Nickel gives toughness, especially at low temperature. Molybdenum gives creep strength and reduces temper embrittlement. Vanadium refines grain, deoxidises and forms very hard carbides. Tungsten keeps hardness when red hot. Manganese deoxidises, ties up sulphur as MnS and adds hardenability. Silicon deoxidises and, in cast iron, turns carbon into graphite. |
| Stainless steel families | Ferritic (about 12% to 18% Cr, low C) is magnetic and cannot be quench hardened. Martensitic (12% to 14% Cr, more C) is magnetic and can be quench hardened, as in cutlery and turbine blades. Austenitic (18% Cr, 8% Ni, as in 304) is non-magnetic and can be hardened only by cold work. |
| Tool steels | High-speed steel 18-4-1 has 18% W, 4% Cr and 1% V. Molybdenum grades such as M2 replace much of the tungsten. Cobalt is added to super HSS for more red hardness. |

### Formulas worth adding

```math
CE = \%C + \frac{\%Si + \%P}{3}
```

This is the carbon equivalent of a cast iron. A value near 4.3 means near-eutectic iron that casts well; above 4.3 it is hypereutectic.

```math
CE = C + \frac{Mn}{6} + \frac{Cr + Mo + V}{5} + \frac{Ni + Cu}{15}
```

This is the IIW carbon equivalent of a steel, in weight percent. Below about 0.4 the steel welds easily; above about 0.45 it needs preheating to avoid cracking.

### Doubts cleared

**Doubt: Is stainless steel always non-magnetic?** No. Only austenitic grades such as 304 and 316 are non-magnetic when annealed, and even they become slightly magnetic after heavy cold work. Ferritic and martensitic stainless steels are magnetic.

**Doubt: Why does welding sometimes make stainless steel rust?** Between about 450 and 850 °C, chromium carbides form at grain boundaries and leave the nearby metal short of chromium. This is sensitisation, and it leads to intergranular corrosion. Low-carbon grades such as 304L, or grades stabilised with titanium or niobium such as 321 and 347, avoid it.

**Doubt: Why is grey cast iron strong in compression but weak in tension?** The graphite flakes act like sharp internal cracks. Under tension they open up and concentrate stress; under compression they are pressed shut and carry load.

**Doubt: Hadfield steel is very hard-wearing, so is it hard to begin with?** No. As supplied it is austenitic and fairly soft, about 200 HB. Its surface work hardens to 500 HB or more under impact, which is why it suits rail crossings, crusher jaws and excavator teeth.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 68/2026, Q48.** The hardness and tensile strength in austenitic stainless steel can be increased by: (a) hardening and cold working (b) normalizing (c) martempering (d) full annealing

*Answer: (a) hardening and cold working.*

1. Austenitic stainless steel stays austenitic all the way down to room temperature, so quenching it does not form martensite. It cannot be hardened by heat treatment.
2. Normalising and full annealing soften steel, and martempering is a route to martensite, which austenitic stainless does not form.
3. The only way left is cold working. Austenitic steels work harden strongly, and some of the austenite may even turn to martensite under heavy deformation.
4. "Hardening" in option (a) must therefore be read as work hardening, which is what cold working produces.

**The trap:** The word "hardening" makes (a) look wrong to anyone who knows that austenitic stainless cannot be quench hardened. It is still the only option that names cold working, and the commission's final key gives (a).

**Q2. ISRO Scientist (Mechanical) 2020.** Which of the following elements is added to high-speed tool steels as a scavenger to remove slag impurities during melting and also for increasing the cutting efficiency of tools? (a) Chromium (b) Vanadium (c) Molybdenum (d) Manganese

*Answer: (b) Vanadium.*

1. Vanadium combines readily with oxygen and nitrogen, so it cleans the melt. That is the scavenger role.
2. It also forms vanadium carbide, one of the hardest carbides in steel, which raises wear resistance and keeps the grain fine. Both raise cutting efficiency.
3. Manganese is a deoxidiser too, but it does not add to cutting performance in HSS.

**The trap:** Manganese is the element people associate with deoxidising and desulphurising, which pulls you to (d). The question asks for both jobs at once, and only vanadium does both in HSS.

**Q3. ESE Civil 2018.** Which one of the following types of steel is used in the manufacturing of metro and mono rails? (a) Mild steel (b) Cast steel (c) Manganese steel (d) Bessemer steel

*Answer: (c) Manganese steel.*

1. Rails need high wear resistance and toughness under repeated wheel loads.
2. Mild steel is too soft and would wear quickly. Cast steel is used for wheels and castings, not rolled rails.
3. Rail steel is a carbon-manganese steel with about 0.6% to 0.8% C and about 1% Mn, and Hadfield steel with 12% to 14% Mn is used where wear is worst, at crossings and points.

**The trap:** Bessemer steel was used for the first steel rails in the nineteenth century, so (d) sounds historically right. The Bessemer process is long obsolete, and modern rails are manganese steels.

**Q4. ISRO URSC Technical Assistant (Mechanical), 24 March 2019.** Manganese in steel increases its: (a) Hardenability (b) Malleability (c) Ductility (d) Fluidity

*Answer: (a) Hardenability.*

1. Manganese slows down the austenite-to-pearlite change, so martensite can form at a slower cooling rate and deeper into a section. That is higher hardenability.
2. It also raises strength, which normally lowers ductility and malleability, not raises them.

**The trap:** Manganese ties up sulphur and so stops the steel cracking during hot rolling, which sounds like better malleability. That is a side benefit; its main effect in every textbook is on hardenability.

## 9. Non-ferrous alloys and other engineering materials

The traps here are in alloy compositions that look alike, the two rules of mixtures for composites, and comparisons where most options are true and one is not.

### Going deeper

| Idea | What it means |
| --- | --- |
| Brasses (copper and zinc) | Cartridge brass (70% Cu, 30% Zn) is the most ductile and is used for deep drawing. Muntz metal (60% Cu, 40% Zn) is stronger and is hot worked. Adding about 1% tin gives Admiralty brass (70/29/1) and naval brass (60/39/1), which resist seawater. |
| Bronzes (copper and tin) | Phosphor bronze is used for springs and bearings. Gun metal (88% Cu, 10% Sn, 2% Zn) is used for valves and bushes. Bell metal has about 20% tin. Aluminium bronze is called a bronze though it has no tin. |
| Aluminium alloys | Duralumin (about 4% Cu, 0.5% Mg, 0.5% Mn) is age hardened and used for aircraft structures. Y-alloy (about 4% Cu, 2% Ni, 1.5% Mg) keeps its strength when hot and is used for pistons and cylinder heads. Aluminium-silicon alloys cast well. |
| Nickel and iron-nickel alloys | Monel (about 67% Ni, 30% Cu) resists corrosion. Nichrome (80% Ni, 20% Cr) is used for heating elements. Inconel is a nickel-chromium-iron alloy for high temperatures. Invar (iron with 36% Ni) barely expands with heat and is used in measuring tapes and precision instruments. |
| Bearing metals | Babbitt or white metal is mostly tin with some antimony and copper. Hard copper-antimony crystals carry the load while the soft tin matrix lets the bearing conform and hold oil. |
| Polymers | Thermoplastics such as polyethylene, PVC and nylon have chains that are not cross-linked, so they soften on heating and can be remoulded. Thermosets such as Bakelite and epoxy are cross-linked, so they char instead of melting. Below the glass transition temperature an amorphous polymer is rigid and glassy; above it, rubbery. |
| Ceramics | Ionic and covalent bonds make ceramics hard, stiff, heat resistant and electrically insulating, but with no easy slip they are brittle. Tiny flaws make them weak in tension though strong in compression. Alumina, silicon nitride and cubic boron nitride are used as cutting tools. |
| Composites | A matrix holds a reinforcement: fibres (glass, carbon, aramid), particles (cemented carbide, which is WC in cobalt) or layers (plywood). Loaded along continuous fibres, both phases stretch equally (isostrain). Loaded across them, both carry the same stress (isostress). |

### Formulas worth adding

```math
E_c = V_f E_f + V_m E_m
```

This is the composite's modulus when loaded along the fibres (isostrain), where V is the volume fraction of fibre f and matrix m. It is the upper bound.

```math
\frac{1}{E_c} = \frac{V_f}{E_f} + \frac{V_m}{E_m}
```

This is the modulus when loaded across the fibres (isostress). It is the lower bound, and it lies close to the matrix modulus.

### Doubts cleared

**Doubt: Is every bronze a copper-tin alloy?** Not any more. Bronze first meant copper with tin, but aluminium bronze, silicon bronze and beryllium copper are also called bronzes. Brass always means copper with zinc as the main addition.

**Doubt: Does German silver contain silver?** No. It is copper, nickel and zinc. The nickel gives it a silvery colour.

**Doubt: Why can't a thermoset be remelted?** Its chains are joined by strong cross-links in all three directions. Heating cannot let them slide past each other; it breaks bonds and chars the material.

**Doubt: Are all ceramics poor conductors of heat?** Most are, but not all. Diamond, silicon carbide and aluminium nitride conduct heat very well, which is why they are used as heat sinks. Almost all ceramics are poor conductors of electricity.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2016, Paper 2.** The modulus of elasticity of E-glass is 72 GPa and that of epoxy resin is 3 GPa. The modulus of elasticity (to the nearest unit magnitude) for a composite material consisting of 60% by volume of continuous E-glass fibre and 40% epoxy resin for the matrix, when stressed under isostress conditions, is: (a) 4 GPa (b) 5 GPa (c) 6 GPa (d) 7 GPa

*Answer: (d) 7 GPa.*

1. Under isostress, the reciprocal rule applies.

```math
\frac{1}{E_c} = \frac{0.6}{72} + \frac{0.4}{3} = 0.00833 + 0.13333 = 0.14167
```

2. So the composite modulus is 1/0.14167, about 7.06 GPa, which rounds to 7 GPa.

**The trap:** The isostrain rule gives 0.6 × 72 + 0.4 × 3 = 44.4 GPa, which is not among the options, so most people stop and look again. The real trap is arithmetic: the answer sits close to the epoxy modulus, and it is easy to round 7.06 down or mix up the two volume fractions.

**Q2. ESE Mechanical 2019.** The distinct characteristic of Invar is: (a) it is magnetic (b) it has low coefficient of thermal expansion (c) it has high tensile strength (d) it is non-corrosive

*Answer: (b) it has low coefficient of thermal expansion.*

1. Invar is iron with about 36% nickel. Its name comes from "invariable", because its length hardly changes with temperature.
2. That is why it is used for measuring tapes, clock pendulums and precision instruments.

**The trap:** Invar is in fact magnetic, so (a) is a true statement. But it is not what sets Invar apart; plain iron and most steels are magnetic too. The question asks for the distinct characteristic.

**Q3. WBPSC JE (Mechanical) 2018.** Duralumin contains: (a) 3.5% to 4.5% copper, 0.4% to 0.7% magnesium, 0.4% to 0.7% manganese and rest aluminium (b) 3.5% to 4.5% copper, 1.2% to 1.7% manganese, 1.8% to 2.3% nickel, 0.6% each of silicon, magnesium and iron and rest aluminium (c) 4% to 4.5% magnesium, 3% to 4% copper and rest aluminium (d) 5% to 6% tin, 2% to 3% copper and rest aluminium

*Answer: (a).*

1. Duralumin is about 4% copper with about 0.5% each of magnesium and manganese. Copper is the main addition and the one that makes age hardening possible.
2. Option (b) contains about 2% nickel, which marks it as a Y-alloy-type piston alloy, not duralumin.
3. Option (c) has more magnesium than copper, and option (d) is a tin-based bearing alloy.

**The trap:** Options (a) and (b) both start with 3.5% to 4.5% copper, so a half-remembered composition does not separate them. The nickel in (b) is the clue: duralumin has none.

**Q4. HPCL Engineer (Mechanical), 18 August 2024.** Which of the following statements is FALSE in case of ceramics compared with metals? (a) Bonds are stronger (b) Electrical resistance is less (c) Hardness is more (d) Thermal conductivity is less

*Answer: (b) Electrical resistance is less.*

1. Ceramics have ionic and covalent bonds, which are stronger than metallic bonds, so (a) is true and (c) follows from it.
2. They have no free electrons, so they conduct heat poorly, making (d) true, and they resist electric current far more than metals do.
3. So "electrical resistance is less" is the false statement.

**The trap:** The question asks for the FALSE statement, and three options are correct facts. Reading quickly and picking the first familiar property, "bonds are stronger", is the usual slip.

**Q5. ESE Mechanical 2015, Paper 2.** Statement (I): The ceramic tools used in machining of material have highly brittle tooltips. Statement (II): Ceramic tools can be used on the hard-to-machine work material. (a) Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I) (b) Both Statement (I) and Statement (II) are individually true but Statement (II) is not the correct explanation of Statement (I) (c) Statement (I) is true but Statement (II) is false (d) Statement (I) is false but Statement (II) is true

*Answer: (b).*

1. Statement (I) is true. Ceramic tool tips are very brittle and chip under shock or interrupted cuts, so they need rigid machines and negative rake angles.
2. Statement (II) is true. Their high hot hardness lets them cut hardened steels and cast irons at high speed.
3. Brittleness comes from the ionic and covalent bonding, which allows no plastic slip. Being able to cut hard materials does not explain it.

**The trap:** Both statements describe the same tool and sound linked, which pulls you to (a). Ask whether II is the reason for I: being usable on hard materials is not why the tips are brittle.

## 10. Mechanical testing and non-destructive testing

The traps here are in hardness arithmetic, in which test measures which property, and in which NDT method works on which material and which flaw.

### Going deeper

| Idea | What it means |
| --- | --- |
| Tensile test | The curve runs through the proportional limit, yield point, ultimate tensile strength (where necking starts) and fracture. Percentage elongation depends on gauge length, so standard test pieces use a gauge length of 5.65√A₀. |
| Brinell hardness | A 10 mm hard ball is pressed in, usually with 3000 kgf for steel, and the mean indentation diameter is measured. The ratio P/D² is kept the same (30 for steel, 10 for copper, 5 or less for soft metals) so that different ball sizes give the same number. |
| Vickers, Rockwell and others | Vickers uses a 136° square diamond pyramid and works from the softest to the hardest metals. Rockwell reads depth, not area: the B scale uses a 1/16 inch ball with 100 kgf, the C scale a diamond cone with 150 kgf, after a 10 kgf minor load. Knoop is a microhardness test; Shore scleroscope measures rebound; Mohs is a scratch scale. |
| Impact tests | Charpy holds a notched 10 × 10 × 55 mm bar as a simple beam and strikes it behind the notch. Izod holds it as a cantilever with the notch facing the striker. Impact energy plotted against temperature shows the ductile-to-brittle transition. |
| Fatigue test | A rotating-beam (R. R. Moore) test gives the S-N curve. Steels show an endurance limit, roughly half the UTS, below which they last indefinitely. Aluminium and copper alloys have none, so a fatigue strength at a stated number of cycles is quoted. |
| Creep test | A constant load is held at high temperature. Primary creep slows down, secondary creep runs at a steady minimum rate, and tertiary creep speeds up as necking and voids lead to rupture. Creep matters above about 0.4 of the melting point in kelvin. |
| Surface NDT | Dye penetrant finds cracks open to the surface in any non-porous material; fluorescent dye viewed under UV light shows finer cracks. Magnetic particle testing (Magnaflux) finds surface and near-surface cracks, but only in ferromagnetic materials. Eddy current testing works on any electrical conductor. |
| Volume NDT | Radiography with X-rays or gamma rays shows porosity, slag and inclusions inside welds and castings, and gives a permanent film record. Ultrasonic testing finds internal cracks and laminations and measures thickness from one side. |

### Formulas worth adding

```math
BHN = \frac{2P}{\pi D\left(D - \sqrt{D^2 - d^2}\right)}
```

This is the Brinell hardness number, with load P in kgf and ball diameter D and indentation diameter d in mm.

```math
HV = \frac{1.854\,P}{d^2}
```

This is the Vickers hardness number, with P in kgf and d the mean diagonal of the indentation in mm.

```math
\sigma_T = \sigma(1 + \varepsilon), \qquad \varepsilon_T = \ln(1 + \varepsilon)
```

These convert engineering stress σ and strain ε to true values, up to the start of necking.

### Doubts cleared

**Doubt: Why do FCC metals such as copper and aluminium show no ductile-to-brittle transition?** They have many slip systems that stay easy to activate even at very low temperature. In BCC metals such as ferritic steel, the yield strength rises steeply as temperature falls, until the metal breaks before it can yield.

**Doubt: Can magnetic particle testing check aluminium or austenitic stainless welds?** No. Neither is ferromagnetic, so no leakage field forms at a crack. Use dye penetrant, often fluorescent, or eddy current testing instead.

**Doubt: Will dye penetrant show a crack below the surface?** No. The dye can only enter a flaw that is open to the surface. Subsurface flaws need magnetic particle, ultrasonic, eddy current or radiographic testing.

**Doubt: Which creep rate is used in design?** The secondary, or minimum, creep rate. It covers most of the part's life and is the most repeatable stage of the curve.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2019.** The indentation on a steel sample has been taken using a 10 mm tungsten carbide ball at 500 kgf load. If the average diameter of the indentation is 2.5 mm, the BHN will be nearly: (a) 90 (b) 100 (c) 110 (d) 120

*Answer: (b) 100.*

1. Find the square root first: √(10² − 2.5²) = √93.75 = 9.6825.
2. Then the depth term is D − √(D² − d²) = 10 − 9.6825 = 0.3175 mm.

```math
BHN = \frac{2 \times 500}{\pi \times 10 \times 0.3175} = \frac{1000}{9.975} \approx 100
```

**The trap:** The depth term is a small difference between two nearly equal numbers. Rounding √93.75 to 9.7 makes it 0.30 instead of 0.3175, gives a BHN of about 106, and pulls you to (c) 110. Keep at least four figures in the square root.

**Q2. NPCIL Scientific Assistant / Stipendiary Trainee (Mechanical), 7 November 2019, Shift 1.** Which of the following tests can be used to detect surface cracks in the welding of nonmagnetic alloys? (a) Fluorescent test (b) Gamma ray test (c) X-ray test (d) Magnaflux test

*Answer: (a) Fluorescent test.*

1. The flaw is a surface crack, and the metal is non-magnetic.
2. Magnaflux is magnetic particle testing, which needs a ferromagnetic part, so it is ruled out.
3. X-ray and gamma ray testing are meant for flaws inside the weld. A tight surface crack shows up on film only if it happens to lie along the beam.
4. A fluorescent penetrant seeps into any crack open to the surface, whatever the metal, and glows under UV light.

**The trap:** Magnaflux is the best-known crack test, and "crack detection" makes it the reflex answer. The word "nonmagnetic" rules it out.

**Q3. UPRVUNL AE (Mechanical) 2022, Shift 1.** Temperature-dependent ductile-to-brittle transition can be determined by \_\_\_\_\_\_\_\_. (a) tensile testing (b) Charpy impact testing (c) roughness testing (d) Brinell hardness testing

*Answer: (b) Charpy impact testing.*

1. The transition shows up as a sharp drop in the energy needed to break a notched bar as the temperature falls.
2. Charpy specimens are tested over a range of temperatures, and the energy is plotted against temperature to find the transition.
3. The notch and the high striking speed make the test sensitive to the change in a way a slow tensile test is not.

**The trap:** "Ductile" brings the tensile test to mind, since percentage elongation is the usual measure of ductility. But the transition is defined from notched impact energy, not from a smooth bar pulled slowly.

**Q4. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 1.** Which portion of the creep curve provides the information on steady-state creep rate? (a) Primary stage (b) Secondary stage (c) Tertiary stage (d) All the above

*Answer: (b) Secondary stage.*

1. In the primary stage the creep rate falls as the metal work hardens.
2. In the secondary stage work hardening and recovery balance each other, so the curve is a straight line with a constant slope. That slope is the steady-state creep rate.
3. In the tertiary stage the rate rises as the section necks and voids grow, until it breaks.

**The trap:** The primary stage is where creep first settles into a pattern, which makes (a) tempting. Only the secondary stage has a constant rate, so only it can be called steady.

## Sources

Of the 40 past questions, 12 are from ESE (11 Mechanical and 1 Civil), 1 from GATE ME, 7 from Kerala PSC AE papers and 20 from other AE, JE, lecturer, PSU and ISRO exams. None of them appears in Level 1. The Kerala PSC questions come from the official question booklets (version A), with answers from the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. They are listed by paper and question number. The rest were checked on their Testbook question pages, which name the paper each was asked in. Every answer was worked out again for this guide.

- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 65/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- **1. Crystal structure:** [Q1 ESE 2015](https://testbook.com/question-answer/a-plane-intersects-the-coordinate-axes-at-x-f--5e8dbb62f994d30d33844fd1), [Q2 RPSC Lecturer 2020](https://testbook.com/question-answer/if-3-2-6-are-the-miller-indices-of-a-plane-the-i--58a569920328216af380a745), [Q3 AAI Junior Executive 2015](https://testbook.com/question-answer/in-a-bcc-structure-the-packing-fraction-is--5fc8bcfdcd87efa3ebd4b6cc), [Q4 RRB JE 2025](https://testbook.com/question-answer/which-of-the-following-are-the-miller-indices-of-a--6961e9f9246f0574f0a35f59), [Q5 ISRO Scientist 2013](https://testbook.com/question-answer/usually-materials-with-the-following-crystal-struc--5f4739865e1f560d142e2b68)
- **2. Crystal imperfections and diffusion:** [Q1 ESE 2020](https://testbook.com/question-answer/which-of-the-following-statements-regarding-screw--5fad1f1a50ffb433383c52b9), [Q2 ISRO Scientist 2020](https://testbook.com/question-answer/region-of-disorder-created-by-movement-of-dislocat--5e849cf3f60d5d3f31801cb1), [Q3 Vizag Steel MT 2013](https://testbook.com/question-answer/the-material-property-which-depends-only-on-the-ba--56581076995a2d13ea3f0e42)
- **3. Plastic deformation, cold working and recrystallisation:** Q1 Kerala PSC 68/2026 Q44, Q2 Kerala PSC 68/2026 Q45, [Q3 UPRVUNL AE 2021](https://testbook.com/question-answer/which-of-the-following-statements-is-incorrect--628cd561dd6026a5dff659f8), [Q4 RPSC Lecturer 2020](https://testbook.com/question-answer/a-disadvantage-of-cold-working-of-metals-is--60f049bc81ab23095265c296)
- **4. Solid solutions, phase diagrams and the phase rule:** [Q1 ESE 2015](https://testbook.com/question-answer/x--5ea2d48df60d5d53736f2dcb), [Q2 ESE 2018](https://testbook.com/question-answer/consider-the-following-statements-regarding-solid--5e8b45c1bace020d2e44f962), [Q3 UPPSC AE 2022](https://testbook.com/question-answer/solubility-of-two-non-ferrous-metals-both-in-liqui--6298ce48704e52fcd4d54670)
- **5. The iron-carbon diagram:** Q1 Kerala PSC 65/2026 Q58, [Q2 ESE 2022](https://testbook.com/question-answer/for-a-99-65-wt-fe-0-35-wt-c-alloy-at-a-temperatu--627911898e2e7449b3d717b6), [Q3 GATE 2022](https://testbook.com/question-answer/in-fe-fe3c-phase-diagram-the-eutectoid-compositio--620ddf646dfed84a389fb55e), [Q4 UPRVUNL AE 2022](https://testbook.com/question-answer/in-an-iron-iron-carbide-phase-diagram-the-x-axis--62dd82c9b308019544f18209)
- **6. TTT diagram and heat treatment:** Q1 Kerala PSC 104/2025 Q45, Q2 Kerala PSC 68/2026 Q47, [Q3 ESE 2022](https://testbook.com/question-answer/consider-the-followings-statements-regarding-the-m--627911fc055ed6f472792aff), [Q4 Vizag Steel MT 2013](https://testbook.com/question-answer/during-heat-treatment-of-steel-the-hardness-of-va--5a02b6d537ac600d6ca73dcb), [Q5 ESE 2021](https://testbook.com/question-answer/as-per-mechanical-properties-which-one-of-the-fol--61545828f106acb8953eccd5)
- **7. Surface hardening:** Q1 Kerala PSC 050/2023 Q8, [Q2 RPSC Lecturer 2020](https://testbook.com/question-answer/which-of-the-following-case-hardening-processes-r--6102dace0bec93a20c5a4bd5), [Q3 RRB JE 2026](https://testbook.com/question-answer/which-defect-is-most-likely-to-result-from-excessi--6a523deb4639216d9658e707)
- **8. Steels, cast irons and alloying elements:** Q1 Kerala PSC 68/2026 Q48, [Q2 ISRO Scientist 2020](https://testbook.com/question-answer/which-of-the-following-element-is-added-to-high-sp--5e849ccef60d5d3f31801caa), [Q3 ESE Civil 2018](https://testbook.com/question-answer/which-one-of-the-following-types-of-steel-is-used--5eb8e9d9f60d5d2d189298e8), [Q4 ISRO URSC 2019](https://testbook.com/question-answer/manganese-in-steel-increases-its--5a7951ea3e88a20f7fb9be77)
- **9. Non-ferrous alloys and other engineering materials:** [Q1 ESE 2016](https://testbook.com/question-answer/the-modulus-of-elasticity-of-e-glass-is-72-gpa-and--5ea3ed93f60d5d53736fa10e), [Q2 ESE 2019](https://testbook.com/question-answer/the-distinct-characteristic-of-invar-is--5e79eb6bf60d5d107c9a8cac), [Q3 WBPSC JE 2018](https://testbook.com/question-answer/duralumin-contains--63b5be03952e38d05e1f9671), [Q4 HPCL Engineer 2024](https://testbook.com/question-answer/which-of-the-following-statements-is-false-in-case--684a3561699af38be37bacf2), [Q5 ESE 2015](https://testbook.com/question-answer/statement-i-the-ceramic-tools-used-in-machining--5ea2dbdcf60d5d53736f32c6)
- **10. Mechanical testing and non-destructive testing:** [Q1 ESE 2019](https://testbook.com/question-answer/the-indentation-on-a-steel-sample-has-been-taken-u--5e79ef42f60d5d107c9a8e58), [Q2 NPCIL 2019](https://testbook.com/question-answer/which-of-the-following-tests-can-be-used-to-detect--5fb64b1ae115852a1546e13f), [Q3 UPRVUNL AE 2022](https://testbook.com/question-answer/temperature-depended-ductile-to-brittle-transition--62dc241dc2617b2f28f93d95), [Q4 RPSC Lecturer 2020](https://testbook.com/question-answer/which-portion-of-the-creep-curve-provides-the-info--60e6e3bf0b052628b240dd19)
- Wording changes: all options are lettered (a) to (d) here, instead of A to D in the Kerala PSC papers and 1 to 4 on Testbook. Questions are lightly edited for grammar, and the stems of 4 Q1 and 5 Q2 are reworded to read more clearly; their data, options and answers are unchanged. Kerala PSC 65/2026 Q58 gives the melting point of iron as 1535 °C, where this guide uses 1539 °C. The key of 8 Q1 is discussed in its solution.
