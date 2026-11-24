# Material Science & Metallurgy Study Guide

Nov 24, 2026 · @Rohith

## How to use this guide

Material Science & Metallurgy is the seventh-ranked subject in your topic map, at about 6.3% of technical questions across RRB JE, SSC JE and Kerala PSC AE: about 7 of every 100 in RRB JE and 12 in Kerala PSC AE. SSC JE has no separate Material Science section; it asks steels and heat treatment inside Production Engineering, so this guide helps there too. Kerala PSC gives the subject a block of 10 to 12 questions in every AE paper, which makes it worth more in Kerala PSC than in any other exam. Finish it in about 13 study days, one sub-topic at a time, in the order below.

Sub-topics 1 to 3 look inside a metal: how its atoms are packed, the defects in that packing, and how those defects let a metal bend and harden. Sub-topics 4 and 5 are phase diagrams, ending with the iron-carbon diagram, the most asked chart in the subject. Sub-topics 6 and 7 use that diagram to change a steel's properties by heating and cooling. Sub-topics 8 and 9 are the materials themselves: steels, cast irons and the main non-ferrous alloys. The last sub-topic is how materials are tested.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the numbers and formulas you must memorise), and real questions from past papers (mostly 2015–2026) with worked solutions. Questions are tagged with the exam and year they appeared in. Kerala PSC papers since 2023 have started asking deeper materials-science questions (dislocations, diffusion, the phase rule), so sub-topics 2 to 4 matter more for Kerala PSC than for RRB JE.

| # | Sub-topic | Days | How often it is asked |
| --- | --- | --- | --- |
| 1 | Crystal structure | 1 | Most Kerala PSC papers |
| 2 | Crystal imperfections and diffusion | 1 | Kerala PSC 2023 and 2026 papers |
| 3 | Plastic deformation, cold working and recrystallisation | 1 | Regular |
| 4 | Solid solutions, phase diagrams and the phase rule | 1 | Most Kerala PSC papers |
| 5 | The iron-carbon diagram | 2 | Every paper |
| 6 | TTT diagram and heat treatment | 2 | Every paper |
| 7 | Surface hardening | 1 | Most papers |
| 8 | Steels, cast irons and alloying elements | 2 | Every paper |
| 9 | Non-ferrous alloys and other engineering materials | 1 | Regular |
| 10 | Mechanical testing and non-destructive testing | 1 | Regular (most in RRB JE) |

Method per sub-topic: read the contents, write the key numbers on one page, solve the past questions without looking, then check the solutions. From sub-topic 5 onwards, keep one sketch of the iron-carbon diagram and one of the TTT curve in front of you; most questions in sub-topics 5 to 8 are read straight off them.

## 1. Crystal structure

Crystal-structure questions come from one small table: how many atoms each cubic or hexagonal cell holds, how many neighbours each atom has, how tightly the atoms pack, and which metals take which structure. Learn the table and the three radius relations, and most questions answer themselves.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Crystalline and amorphous solids | In a crystalline solid the atoms sit in a pattern that repeats in all three directions; every metal is crystalline. An amorphous solid (glass, most polymers) has no long-range order, so it softens over a range of temperature instead of melting at one point. |
| Space lattice and unit cell | The space lattice is the 3-D array of points where the atoms sit. The unit cell is the smallest block that, repeated, builds the whole lattice. Its edges a, b, c and the angles α, β, γ between them are the lattice parameters. |
| Crystal systems and Bravais lattices | There are 7 crystal systems and 14 Bravais lattices. Cubic: a = b = c, all angles 90°. Tetragonal: a = b ≠ c, all 90°. Orthorhombic: a ≠ b ≠ c, all 90°. Hexagonal: a = b ≠ c, γ = 120°. Then rhombohedral (trigonal), monoclinic and triclinic. Cubic is the most symmetric; triclinic, with every edge and angle different, the least. |
| Atoms per unit cell | A corner atom is shared by 8 cells and counts 1/8; a face atom is shared by 2 and counts 1/2; a body-centre atom counts 1. Simple cubic: 8 × 1/8 = 1. BCC: 1 + 1 = 2. FCC: 1 + 6 × 1/2 = 4. HCP: 6 in the hexagonal prism. |
| Coordination number | The number of nearest neighbours touching an atom: simple cubic 6, BCC 8, FCC and HCP 12. The higher it is, the closer the packing. |
| Atomic packing factor (APF) | The fraction of the cell's volume filled by atoms taken as hard spheres. Simple cubic 0.52, BCC 0.68, FCC 0.74, HCP 0.74, diamond cubic 0.34. 0.74 is the most that equal spheres can fill, so FCC and HCP are both called close-packed. |
| Radius and lattice parameter | The atoms touch along the cube edge in simple cubic (a = 2r), along the body diagonal in BCC (√3 a = 4r) and along the face diagonal in FCC (√2 a = 4r). |
| Which metals have which | BCC: α-iron (ferrite), δ-iron, chromium, tungsten, molybdenum, vanadium. FCC: γ-iron (austenite), aluminium, copper, nickel, lead, silver, gold. HCP: zinc, magnesium, cadmium, cobalt, titanium, beryllium. Among metals, only polonium is simple cubic. |
| Stacking of close-packed layers | FCC and HCP are both stacks of the same close-packed layer: FCC stacks them ABCABC…, HCP ABAB…. That is why both have APF 0.74 and coordination number 12, yet FCC metals are far more ductile (they have more slip systems; see sub-topic 3). The ideal c/a ratio of HCP is 1.633. |
| Allotropy (polymorphism) | The ability of one element to take different crystal structures at different temperatures. Iron is BCC (α) up to 910 °C, FCC (γ) from 910 to 1400 °C, and BCC (δ) again from 1400 °C to its melting point of about 1539 °C. (Books give 910 or 912, 1400 or 1394, and 1535 to 1539.) Tin, titanium, cobalt and carbon (graphite and diamond) are allotropic too. |
| Miller indices | Three whole numbers (h k l) that name a plane. Take the plane's intercepts on the axes in units of a, take reciprocals and clear fractions. A plane parallel to an axis meets it at infinity, so that index is 0. (100) is a cube face, (110) cuts two axes, (111) cuts all three. A direction is written \[u v w\] and a family of planes {h k l}. In a cubic crystal the direction \[h k l\] is perpendicular to the plane (h k l). |
| Density from the unit cell | Mass of the atoms in one cell divided by the cell's volume, using Avogadro's number N\_A = 6.023 × 10²³ per mole. |

### Formulas to memorise

```math
\text{APF} = \frac{n \cdot \tfrac{4}{3}\pi r^3}{a^3} \qquad \rho = \frac{n A}{a^3 N_A}
```

```math
a_{\text{SC}} = 2r \qquad a_{\text{BCC}} = \frac{4r}{\sqrt{3}} \qquad a_{\text{FCC}} = 2\sqrt{2}\,r
```

```math
\text{APF}_{\text{BCC}} = \frac{\sqrt{3}\,\pi}{8} = 0.68 \qquad \text{APF}_{\text{FCC}} = \frac{\pi}{3\sqrt{2}} = 0.74
```

Here n is the number of atoms per cell, r the atomic radius, a the cell edge and A the atomic mass.

| Cell | Atoms per cell | Coordination number | APF | Atoms touch along |
| --- | --- | --- | --- | --- |
| Simple cubic | 1 | 6 | 0.52 | Cube edge |
| BCC | 2 | 8 | 0.68 | Body diagonal |
| FCC | 4 | 12 | 0.74 | Face diagonal |
| HCP | 6 | 12 | 0.74 | Close-packed layers |

A quick way to hold it: BCC is 2, 8, 0.68; FCC is 4, 12, 0.74.

### Past exam questions with solutions

**Q1. UPPSC AE Mechanical (Mains Paper I), 29 September 2025.** Which of the following crystal system has the least symmetry? (a) Cubic (b) Tetragonal (c) Monoclinic (d) Triclinic

*Answer: (d).* A triclinic cell has three unequal edges and three unequal angles, none of them 90°, so almost no operation maps it onto itself. Cubic, with equal edges and right angles, has the most symmetry. Monoclinic keeps two right angles, which puts it one step above triclinic.

**Q2. ISRO Scientist/Engineer (Mechanical), 2015.** The effective number of lattice points in the unit cell of simple cubic, body centered cubic, and face centered cubic space lattices, respectively, are (a) 1, 2, 2 (b) 1, 2, 4 (c) 2, 3, 4 (d) 2, 4, 4

*Answer: (b).* A corner point is shared by 8 cells and a face point by 2. Simple cubic: 8 × 1/8 = 1. BCC: 1 from the corners + 1 at the centre = 2. FCC: 1 from the corners + 6 × 1/2 from the faces = 4. Option (a) forgets that six face atoms each count as half.

**Q3. APPSC Polytechnic Lecturer, March 2020.** Atomic radius of BCC structure is given by \_\_\_\_\_\_. (a) a√3/4 (b) 4a/√3 (c) a/(2√2) (d) a/2

*Answer: (a).* In BCC the atoms touch along the body diagonal, which is √3 a long and holds four radii (half a corner atom, the whole centre atom, half the far corner atom). So 4r = √3 a and r = √3 a/4. a/(2√2) is the FCC radius (atoms touch along the face diagonal, 4r = √2 a), and a/2 is simple cubic. Option (b) turns the relation upside down.

**Q4. DFCCIL Executive (Electrical), 11 November 2018 (Shift 2).** What is the atomic packing factor for BCC and FCC, respectively? (a) 0.52, 0.78 (b) 0.74, 0.68 (c) 0.52, 0.74 (d) 0.68, 0.74

*Answer: (d).* BCC packs 2 atoms in a cube of edge 4r/√3, giving √3π/8 = 0.68. FCC packs 4 atoms in a cube of edge 2√2 r, giving π/(3√2) = 0.74. Option (b) is the same pair in the wrong order, the usual trap.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Which of the following statements is true with regard to Atomic Packing Factor (APF)? (a) APF of FCC is equal to APF of HCP (b) APF of SC is greater than APF of BCC (c) APF of BCC is greater than APF of HCP (d) APF of BCC is equal to APF of FCC

*Answer: (a).* FCC and HCP are stacks of the same close-packed layer, only in a different order (ABC against AB), so both fill 0.74 of the space. The order is SC 0.52 < BCC 0.68 < FCC = HCP 0.74, which makes (b), (c) and (d) false.

**Q6. AAI JE (Technical), 2018.** If an atom is assumed to be a hard sphere, then the value of highest APF (Atomic Packing Factor) in metals will be: (a) 0.65 (b) 0.74 (c) 0.98 (d) 0.84

*Answer: (b).* Equal hard spheres cannot fill more than π/(3√2) = 0.74 of space; FCC and HCP reach that limit. Whatever the stacking, at least 26% of a metal crystal is empty space, so 0.84 and 0.98 are impossible.

**Q7. GATE Production and Industrial Engineering, 2019.** Match the crystal structure in Column A with the packing fraction in Column B. Column A: 1. Simple cubic, 2. Hexagonal close-packed, 3. Body-centred cubic, 4. Face-centred cubic. Column B: P. 0.74, Q. 0.68, R. 0.52. (a) 1-P, 2-R, 3-Q, 4-Q (b) 1-R, 2-P, 3-R, 4-Q (c) 1-R, 2-P, 3-Q, 4-P (d) 1-P, 2-R, 3-P, 4-Q

*Answer: (c).* Simple cubic 0.52 (R), HCP 0.74 (P), BCC 0.68 (Q), FCC 0.74 (P). Notice that P is used twice: HCP and FCC share the same value. An option that gives HCP and FCC different values, as (a), (b) and (d) all do, can be crossed out at once.

**Q8. Kerala PSC AE (Mechanical), 18 August 2025.** The close-packed hexagonal space lattice is found in: (a) Zinc, magnesium, cobalt, cadmium, antimony and bismuth (b) Alpha iron, tungsten, chromium and molybdenum (c) Gamma iron, aluminium, copper, lead, silver and nickel (d) None of the above

*Answer: (a).* Zinc, magnesium, cobalt and cadmium are the standard HCP metals. Option (b) is the BCC list and option (c) the FCC list. Strictly, antimony and bismuth are rhombohedral, but (a) is the list printed in the common textbooks and the only one that names HCP metals.

## 2. Crystal imperfections and diffusion

No real crystal is perfect, and its defects decide most of its behaviour. Questions here ask you to sort defects by dimension, to place the Burgers vector against the dislocation line, and to apply Fick's first law once. The sorting rule is simple: a point defect has no size in any direction, a dislocation is a line, a boundary is a surface, and a void or inclusion is a volume.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Point defects | Disturb one or two atom sites. Vacancy: an empty site. Vacancies multiply quickly as temperature rises, and they are what lets atoms diffuse. Interstitial: an extra atom squeezed between regular sites (carbon or hydrogen in iron). Substitutional: a foreign atom sitting in a regular site (nickel in copper). |
| Schottky and Frenkel defects | Point defects in ionic crystals. Schottky: a cation vacancy and an anion vacancy in a pair, so the crystal stays neutral but loses mass and its density falls. Frenkel: an ion (usually the smaller cation) leaves its site for an interstitial one, making a vacancy-interstitial pair. Nothing leaves the crystal, so its volume and density stay the same. Silver bromide shows both. |
| Line defects: dislocations | A dislocation is a line along which the crystal is out of register: the boundary between the part that has slipped and the part that has not. Edge dislocation: an extra half-plane of atoms ends inside the crystal. Screw dislocation: the atom planes spiral round the line like a ramp. Most real dislocations are a mix of the two. |
| Burgers vector b | Draw a loop of equal atom steps round the dislocation; the gap needed to close it is b. It gives the size and direction of the slip. Edge: b is perpendicular to the dislocation line. Screw: b is parallel to the line. An edge dislocation moves along b; a screw dislocation moves at right angles to b. |
| Why dislocations matter | A perfect crystal would need a shear stress near G/30 to slip. Real metals slip at a tiny fraction of that because a dislocation moves one row of atoms at a time, like a ruck pushed along a carpet. Anything that blocks dislocations (other dislocations, grain boundaries, solute atoms, precipitates) makes a metal stronger and harder. |
| Surface (planar) defects | Two-dimensional: grain boundaries (where crystals of different orientation meet), twin boundaries (a mirror plane across which the lattice is reflected), stacking faults (a slip in the ABCABC order of close-packed layers), tilt and twist boundaries, the free surface, and anti-phase boundaries in ordered alloys. |
| Volume defects | Three-dimensional: voids, pores, cracks, inclusions of slag, and precipitates of a second phase. |
| Diffusion | The movement of atoms through a solid, driven by a difference in concentration and speeded up by heat. Small atoms (C, N, H) diffuse by hopping between interstitial sites, which is far faster than the vacancy diffusion of large atoms such as Ni, Cr, Mn and W. This is why carburising and nitriding work: carbon and nitrogen enter steel quickly. |
| Fick's first law | In steady state, the flux J (mass crossing unit area in unit time) is proportional to the concentration gradient. Atoms flow from high to low concentration, hence the minus sign. |
| Fick's second law | For unsteady diffusion, where the concentration at a point changes with time. It gives the depth of a carburised case, which grows with the square root of time. |
| Diffusion coefficient D | Measured in m²/s. It rises steeply with temperature, following an Arrhenius law with an activation energy Q. Diffusion is faster along grain boundaries than through the grains, and carbon diffuses faster in BCC ferrite than in FCC austenite at the same temperature. |

### Formulas to memorise

```math
J = -D\,\frac{dC}{dx} \qquad \dot m = J A = D A \frac{\Delta C}{\Delta x}
```

```math
\frac{\partial C}{\partial t} = D\,\frac{\partial^2 C}{\partial x^2} \qquad x \propto \sqrt{D t}
```

```math
D = D_0 \exp\left(-\frac{Q}{RT}\right)
```

| Dimension | Kind of defect | Examples |
| --- | --- | --- |
| 0 | Point | Vacancy, interstitial, substitutional atom, Schottky and Frenkel defects |
| 1 | Line | Edge, screw and mixed dislocations |
| 2 | Surface | Grain boundary, twin boundary, stacking fault, free surface |
| 3 | Volume | Voids, pores, cracks, inclusions, precipitates |

### Past exam questions with solutions

**Q1. APPSC Polytechnic Lecturer, March 2020.** Which of the following is NOT a point defect? (a) Edge dislocation (b) Vacancy (c) Substitutional impurity (d) Interstitial impurity

*Answer: (a).* A vacancy, a substitutional atom and an interstitial atom each disturb a single site, so they are point defects. An edge dislocation runs along a line through the crystal; it is a line defect.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A cation vacancy and an anion vacancy in a crystal of the type AB is called (a) Schottky defect (b) Frenkel defect (c) Pair of vacancies (d) None of these

*Answer: (a).* Removing one positive and one negative ion together keeps the crystal neutral; that pair is a Schottky defect. A Frenkel defect has only one vacancy, with the missing ion sitting in an interstitial site nearby.

**Q3. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 2).** Dislocations present in materials are \_\_\_\_\_\_\_\_ defects. (a) Point (b) line (c) surface (d) planar

*Answer: (b).* A dislocation is the line separating the slipped part of a crystal from the unslipped part. Edge, screw and mixed dislocations are all line defects. "Surface" and "planar" are two names for the same class (grain and twin boundaries).

**Q4. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Which of the following is true for Burger's vector in edge dislocation? (a) Perpendicular to the dislocation line (b) Parallel to the dislocation line (c) Inclined to the dislocation line (d) None of these

*Answer: (a).* In an edge dislocation the extra half-plane ends along the dislocation line, and the slip it carries (the Burgers vector) is at right angles to that line. Parallel is the screw dislocation.

**Q5. RPSC Lecturer (Technical Education), Mechanical, 2020.** Which one of the following is correct for Burger's vector in screw dislocation? (a) Perpendicular to the dislocation line (b) Inclined to the dislocation line (c) Parallel to the dislocation line (d) Opposite to the dislocation line

*Answer: (c).* In a screw dislocation the atoms are displaced along the line itself, like the thread of a screw, so b is parallel to the line. Remember the pair: edge ⊥, screw ∥. A dislocation that is partly both, with b inclined to the line, is a mixed dislocation.

**Q6. UPPSC AE Mechanical (Paper I), 13 December 2020.** Twin boundaries are which type of crystal defect? (a) Line defect (b) Point defect (c) Surface defect (d) None of the above

*Answer: (c).* A twin boundary is a plane across which the lattice is a mirror image of itself. Like a grain boundary or a stacking fault it spreads over an area, so it is a surface (planar) defect.

**Q7. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Which of the following pairs is matched correctly? (a) Surface defect – Presence of extra partial planes (b) Point defect – Precipitates (c) Line defect – Grain boundary (d) Volume defect – Slag and porosity

*Answer: (d).* Slag inclusions and pores fill a volume. Each of the others pairs a defect with the wrong class: an extra partial plane is an edge dislocation (line), a precipitate is a volume defect, and a grain boundary is a surface defect.

**Q8. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Among the following elements, the one with the largest diffusion coefficient in steel at 1000 °C is (a) Mn (b) W (c) Ni (d) C

*Answer: (d).* Carbon is a small atom that sits in the interstitial sites of iron and hops from one to the next without waiting for a vacancy. Manganese, tungsten and nickel are substitutional and can only move into a neighbouring vacancy, which is much slower.

**Q9. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** A typical metallic sheet of 10 mm thickness and cross-sectional area of 0.25 m² is used as a steady state diffusion membrane in a hydrogen purifier. Find the mass of hydrogen purified in kg per second, if the difference in hydrogen concentration across the sheet is 1 kg/m³ and the diffusion coefficient is 1 × 10⁻⁸ m²/s. (a) 4 × 10⁻⁶ (b) 2.5 × 10⁻⁷ (c) 5 × 10⁻⁷ (d) 3 × 10⁻⁶

*Answer: (b).* Fick's first law: J = D ΔC/Δx = 10⁻⁸ × 1 / 0.010 = 10⁻⁶ kg/m²s. The mass flow is J × A = 10⁻⁶ × 0.25 = 2.5 × 10⁻⁷ kg/s. Remember to turn 10 mm into 0.010 m; leaving it in millimetres gives an answer a thousand times too small.

## 3. Plastic deformation, cold working and recrystallisation

When a metal is loaded past its elastic limit, dislocations glide and the change of shape stays. Questions here ask how metals deform (slip and twinning), why deforming them cold makes them harder, how heating undoes that, and how hot working differs from cold working. One temperature runs through all of it: the recrystallisation temperature.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Elastic and plastic deformation | Elastic: the atoms are pulled slightly apart and spring back when the load is removed. Plastic: planes of atoms slide past one another and the change of shape stays. |
| Slip | The main way metals deform. Blocks of crystal slide along a slip plane in a slip direction, carried by moving dislocations. Slip happens on the most densely packed planes along the most densely packed directions, because these need the least shear stress. One slip plane with one slip direction in it is a slip system. |
| Slip systems and ductility | FCC: 4 {111} planes × 3 directions each = 12 slip systems, all on close-packed planes, so FCC metals (Cu, Al, Ni, Au, Pb, austenite) are the most ductile. BCC: up to 48 systems but none on truly close-packed planes, so BCC metals (ferrite, W, Mo) need more stress and turn brittle when cold. HCP: only 3 slip systems, all on the basal plane, so Zn, Mg and Ti are the least ductile at room temperature. |
| Twinning | A band of the crystal shears into a mirror image of the rest. Each atom moves only a fraction of an atomic spacing, and the twinned band takes a new orientation; in slip, the slipped block keeps its orientation. Twinning is common in HCP and BCC metals, at low temperatures and under sudden (impact) loads, and it gives far less deformation than slip. |
| Critical resolved shear stress | Slip starts when the shear stress resolved on a slip system reaches a critical value (Schmid's law). The resolved stress is largest when the slip plane and slip direction are both at 45° to the load. |
| Strain (work) hardening | As a metal is cold-worked, its dislocations multiply (from about 10⁶–10⁸ to 10¹¹–10¹² per cm²) and tangle, so each blocks the others. Strength and hardness rise; ductility falls. |
| Grain size | Grain boundaries stop dislocations, so a finer grain gives a stronger metal (the Hall-Petch relation). Unusually, a finer grain also raises toughness and ductility. Coarse grains help only against creep at high temperature. |
| Annealing a cold-worked metal | Heating it brings three stages. Recovery: internal stresses relax and dislocations rearrange, but strength barely changes. Recrystallisation: new strain-free, equiaxed grains form and grow into the deformed ones; hardness falls and ductility returns. Grain growth: held longer, large grains swallow small ones and the metal coarsens. |
| Recrystallisation temperature | The lowest temperature at which a cold-worked metal fully recrystallises in about an hour: roughly 0.3 to 0.5 of the absolute melting point, often quoted as 0.4 Tm. It falls with more prior cold work, with higher purity and with a finer starting grain. Lead, tin and zinc recrystallise at or below room temperature, so working them at room temperature is hot working. |
| Hot working | Plastic working above the recrystallisation temperature. New grains form as fast as old ones are distorted, so the metal does not harden: large deformations need little force, the grain is refined, blowholes and porosity are welded shut and impurities are broken up. The price is oxide scale, a poorer surface finish and poorer dimensional accuracy. |
| Cold working | Plastic working below the recrystallisation temperature, usually at room temperature. It gives a bright finish, close tolerances and higher strength and hardness. But it needs more force, lowers ductility, leaves residual stresses, and allows only a limited amount of deformation before the metal must be annealed. |

### Formulas to memorise

```math
\tau_R = \sigma \cos\phi \cos\lambda \qquad \sigma_y = \sigma_0 + k\, d^{-1/2}
```

```math
T_R \approx 0.4\, T_m \quad (\text{both in kelvin})
```

Here φ and λ are the angles of the load to the slip-plane normal and to the slip direction, and d is the grain diameter.

| Property | Hot working | Cold working |
| --- | --- | --- |
| Temperature | Above recrystallisation | Below recrystallisation |
| Force needed | Low | High |
| Strength and hardness | Little change | Rise (strain hardening) |
| Ductility | Kept | Falls |
| Grain | Refined, equiaxed | Elongated, distorted |
| Surface finish and accuracy | Poor (oxide scale) | Good |
| Residual stress | Low | High |

### Past exam questions with solutions

**Q1. GATE ME 2018 (Shift 1).** The number of atoms per unit cell and the number of slip systems, respectively, for a face-centred cubic (FCC) crystal are (a) 3, 3 (b) 3, 12 (c) 4, 12 (d) 4, 48

*Answer: (c).* FCC holds 8 × 1/8 + 6 × 1/2 = 4 atoms per cell. It slips on the four close-packed {111} planes, each with three close-packed directions, giving 4 × 3 = 12 slip systems. 48 is the number of possible slip systems in BCC.

**Q2. SSC JE Mechanical, 5 June 2024 (Shift 2).** In a hot working process, metals are deformed \_\_\_\_\_\_\_. (a) below their recrystallisation temperature (b) above their recrystallisation temperature (c) at their recrystallisation temperature (d) at any recrystallisation temperature

*Answer: (b).* Hot working means deforming above the recrystallisation temperature, so new grains form as fast as the old ones are distorted and the metal does not strain-harden. Below it is cold working.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** Recrystallization temperature is: (a) Crystal grow bigger in size (b) The allotropic form changes (c) New spherical crystals first begin to form from the old deformed one when the strained metal is heated (d) Crystal first start forming from molten metal when cooled

*Answer: (c).* It is the temperature at which new, strain-free, roughly equiaxed grains start to form inside a cold-worked metal on heating. Option (a) is grain growth, which comes after recrystallisation. Option (b) is an allotropic change, such as α-iron to γ-iron at 910 °C. Option (d) is solidification.

**Q4. ESE Mechanical 2016 (Paper 2).** The recrystallization behaviour of a particular metal alloy is specified in terms of recrystallization temperature, which is typically 1/3rd of the absolute melting temperature of a metal or an alloy and depends on several factors including the amount of 1. cold working and purity of the metal and alloy 2. hot working and purity of the metal and alloy. Which of the above is/are correct? (a) 1 only (b) 2 only (c) Both 1 and 2 (d) Neither 1 nor 2

*Answer: (a).* Cold work stores strain energy in the metal, and the more of it there is, the lower the temperature at which recrystallisation starts. Purity matters too: alloying and impurity atoms pin the grain boundaries and raise the temperature. Hot working stores no strain energy, because the metal recrystallises while it is being worked, so it does not set the recrystallisation temperature. (Most books give 0.3 to 0.5 Tm rather than 1/3, but that does not change the answer.)

**Q5. SSC JE Mechanical, 9 October 2023 (Shift 2).** Which of the following statements is true about hot working process? (a) All hot working processes must be done above local environment temperature. (b) Hot working process of tin is also a cold working process. (c) It is a process of working above recrystallisation temperature of the materials. (d) It is a process of working above room temperature.

*Answer: (c).* Hot working is defined by the recrystallisation temperature, not by room temperature. Tin and lead recrystallise below room temperature, so rolling them at room temperature is already hot working. That makes (a) and (d) false, and (b) mixes up the two terms: a process above the recrystallisation temperature is never cold working.

**Q6. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 1).** Which of the following is NOT an advantage of hot working? (a) Surface finish is excellent. (b) Porosity is largely eliminated. (c) Grain structure is refined. (d) Deformation of metal is easy.

*Answer: (a).* At hot-working temperatures the surface oxidises and scale forms, so the finish (and the accuracy of size) is poor. Closing porosity, refining the grain and needing little force are all real advantages of hot working. A good finish belongs to cold working.

**Q7. SSC JE Mechanical, 5 December 2025 (Shift 2).** Assertion (A): Cold working increases the strength and hardness of metals. Reason (R): This is because cold working decreases the total number of dislocations per unit volume in the material. (a) Both A and R are true, and R is the correct explanation of A. (b) Both A and R are true, and R is not a correct explanation of A. (c) A is true but R is false. (d) A is false but R is true.

*Answer: (c).* Cold working does raise strength and hardness, but it does so by increasing the dislocation density, by a factor of up to about a million. The dislocations tangle and block one another. Fewer dislocations is what annealing gives, and that softens the metal.

**Q8. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** As grain size of a cast alloy decreases (a) strength decreases (b) ductility increases (c) microporosity increases (d) tendency to crack during solidification increases

*Answer: (b).* Finer grains mean more grain boundary to stop dislocations, so strength goes up (Hall-Petch), and the strain is spread over more grains, so ductility and toughness go up too. A fine-grained casting also feeds better, so porosity and hot cracking go down, not up.

## 4. Solid solutions, phase diagrams and the phase rule

A phase diagram is a map: for any composition and temperature it tells you which phases are present, what each is made of, and how much of each there is. Questions here test the vocabulary (component, phase, solid solution), the Hume-Rothery rules, the phase rule, the lever rule and the names of the four invariant reactions. Learn the reactions as a set; they come back in sub-topic 5.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Component and phase | A component is a pure substance (an element or a stable compound) the alloy is made from; Fe and Fe₃C are the two components of the iron-carbon diagram. A phase is a region that is the same throughout in structure and composition, with a clear boundary: a liquid, a solid solution or a compound. |
| Solid solution | One metal dissolved in another in the solid state, keeping the solvent's crystal structure. Substitutional: solute atoms take the place of solvent atoms (Ni in Cu; Zn in Cu, which is brass). Interstitial: small atoms (C, N, H, B) squeeze into the gaps between the solvent's atoms (C in Fe). Either way the solid solution is stronger and harder than the pure solvent. |
| Hume-Rothery rules | For extensive substitutional solubility: the atomic radii differ by less than about 15%; both metals have the same crystal structure; their electronegativities are close (a big difference makes them form a compound instead); and their valencies are equal, a metal dissolving one of higher valency more readily than one of lower. Cu and Ni meet all four and dissolve in each other at every ratio. |
| Intermetallic compound | A phase with a fixed ratio of atoms and its own crystal structure, unlike either parent. It forms when the two metals have a strong chemical affinity (they sit far apart in the periodic table): Fe₃C (cementite), CuAl₂, Mg₂Pb. Usually hard and brittle. |
| Cooling curves | A pure metal, and an alloy of eutectic composition, freezes at a single temperature: the cooling curve shows a flat step. A solid-solution alloy freezes over a range of temperature: the curve only changes slope between liquidus and solidus. |
| Liquidus, solidus, solvus | Above the liquidus the alloy is all liquid; below the solidus it is all solid. The solvus marks the limit of solid solubility, which usually falls as the temperature falls. |
| Isomorphous system | Two metals completely soluble in each other in both the liquid and the solid state, so there is one solid solution at every composition. Cu-Ni is the standard example (also Au-Ag). The diagram is a lens between the liquidus and the solidus. |
| Eutectic system | Two metals completely soluble in the liquid state but insoluble, or only partly soluble, in the solid state. The eutectic alloy melts at the lowest temperature of the system, below both pure metals, and at a single temperature like a pure metal. Pb-Sn (solder) and Al-Si are examples. |
| Invariant reactions | Points where three phases are in balance at one fixed temperature and composition. On cooling: eutectic, liquid → two solids; eutectoid, one solid → two solids; peritectic, liquid + solid → a new solid; peritectoid, two solids → a new solid. The ending -oid means every phase is solid; peri- means two phases combine into one. |
| Gibbs phase rule | P + F = C + 2, where P is the number of phases, F the degrees of freedom (how many of temperature, pressure and composition can change on their own) and C the number of components. For metals the pressure is fixed at 1 atmosphere, which gives the condensed rule P + F = C + 1. At a binary eutectic, P = 3 and C = 2, so F = 0: temperature and compositions are all fixed, which is why the point is called invariant. |
| Lever rule | In a two-phase region, draw a horizontal tie line at the temperature. The fraction of each phase is the length of the tie line on the far side of the alloy point, divided by the whole length. As on a see-saw, the phase whose composition is nearer the alloy's is the larger one. |
| What a phase diagram does not show | It is an equilibrium map: phases present, their compositions and amounts, the melting range, the solubility limits. It says nothing about time or the rate of a transformation; for that you need the TTT diagram (sub-topic 6). |

### Formulas to memorise

```math
P + F = C + 2 \qquad P + F = C + 1 \ (\text{pressure fixed})
```

```math
W_{\text{solid}} = \frac{C_L - C_0}{C_L - C_S} \qquad W_{\text{liquid}} = \frac{C_0 - C_S}{C_L - C_S}
```

Here C₀ is the alloy's overall composition, and C\_S and C\_L are the compositions of the solid and the liquid at the two ends of the tie line.

| Reaction | On cooling | Example in the iron-carbon diagram |
| --- | --- | --- |
| Eutectic | Liquid → two solids | Liquid → austenite + cementite (ledeburite), 1147 °C, 4.3% C |
| Eutectoid | One solid → two solids | Austenite → ferrite + cementite (pearlite), 727 °C, 0.8% C |
| Peritectic | Liquid + solid → new solid | Liquid + δ-ferrite → austenite, about 1493 °C, 0.16–0.18% C |
| Peritectoid | Two solids → new solid | Not in the iron-carbon diagram |

### Past exam questions with solutions

**Q1. ESE Mechanical 2015 (Paper 2).** Very small quantity of carbon in iron as in steels forms interstitial solid solution mainly because atomic size(s) of (a) carbon and iron are almost same (b) iron is very much smaller than that of carbon (c) carbon is very much smaller than that of iron (d) None of the above

*Answer: (c).* Carbon's atomic radius (about 0.07 nm) is little more than half that of iron (about 0.124 nm), so it fits into the gaps between iron atoms instead of replacing them. Atoms of nearly the same size, as in (a), form substitutional solid solutions.

**Q2. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Which of the following statements agree with the Hume-Rothery Rules for solid solubility? (a) The size difference between solvent and solute atoms must be less than 15% (b) Crystal structure of both the materials must be different (c) There should be large difference in electronegativity of the materials (d) The valency of the atoms of the materials must be different

*Answer: (a).* The rules ask for a size difference under about 15%, the same crystal structure, close electronegativity and similar valency. Options (b), (c) and (d) each state the opposite of one rule; a large electronegativity difference makes the metals form a compound, not a solid solution.

**Q3. ESE 2019 (Paper 1).** Which of the following features of atoms determine the degree to which the solute atoms dissolve in the solvent atoms? 1. Atomic size factor 2. Crystal structure 3. Electronegativity (a) 1 and 2 only (b) 1 and 3 only (c) 2 and 3 only (d) 1, 2 and 3

*Answer: (d).* All three are Hume-Rothery factors, and the fourth (valency) simply is not listed. When a question lists only true Hume-Rothery factors, pick the option that includes them all.

**Q4. UPPSC Polytechnic Lecturer (Mechanical), 23 December 2021.** In a Eutectic system, two elements are completely: (a) Insoluble in solid and liquid states (b) Soluble in liquid states (c) Soluble in solid state (d) Insoluble in liquid state

*Answer: (b).* In a eutectic system the two metals mix fully when molten but separate (wholly or partly) on freezing, which is what gives two solid phases. Complete solubility in the solid state as well, option (c), is the isomorphous system, such as Cu-Ni.

**Q5. ISRO HSFC Technical Assistant (Mechanical), 2 January 2025.** The invariant reaction involving a liquid phase decomposing into two different solids on cooling is known as \_\_\_\_\_\_\_\_ (a) Eutectic point (b) Eutectoid point (c) Peritectoid point (d) Peritectic point

*Answer: (a).* Liquid → two solids is eutectic. A solid → two solids is eutectoid, liquid + solid → solid is peritectic, and two solids → one solid is peritectoid. In the iron-carbon diagram the eutectic gives ledeburite at 1147 °C.

**Q6. Kerala PSC AE (Mechanical), 18 August 2025.** How is the Gibbs phase rule of a general system represented? (F = Number of degrees of freedom, C = Number of components, P = Number of phases) (a) P + F = C − 2 (b) P = C − 1 − F (c) P = C + 1 − F (d) P + F = C + 2

*Answer: (d).* The general rule counts temperature and pressure as variables, giving P + F = C + 2. Option (c), rearranged, is P + F = C + 1: the condensed rule used when pressure is fixed, which is not what "general system" asks for.

**Q7. GATE ME 2016 (Shift 2).** In a binary system of A and B, a liquid of 20% A (80% B) is coexisting with a solid of 70% A (30% B). For an overall composition having 40% A, the fraction of solid is (a) 0.40 (b) 0.50 (c) 0.60 (d) 0.75

*Answer: (a).* Lever rule along the tie line from 20% A (liquid) to 70% A (solid): fraction of solid = (40 − 20)/(70 − 20) = 20/50 = 0.40. The alloy point lies nearer the liquid end, so the liquid is the larger part (0.60), which is the trap in option (c).

**Q8. GATE ME 2020 (Shift 2).** Which one of the following statements about a phase diagram is INCORRECT? (a) It indicates the temperature at which different phases start to melt (b) Relative amount of different phases can be found under given equilibrium conditions (c) It gives information on transformation rates (d) Solid solubility limits are depicted by it

*Answer: (c).* A phase diagram shows equilibrium only: which phases, their compositions and amounts (lever rule), the melting temperatures and the solubility limits. It has no time axis, so it cannot tell how fast a change happens. Transformation rates come from TTT diagrams.

## 5. The iron-carbon diagram

This is the most asked chart in the subject. Questions read a number off it (a temperature or a carbon percentage), name a phase or a reaction, or use the lever rule to find how much pearlite a steel holds. Learn the three reactions with their numbers and the five constituents, and practise sketching the diagram from memory.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| What the diagram is | Strictly the iron-iron carbide (Fe-Fe₃C) diagram: carbon from 0 to 6.67% along the x-axis, temperature up the y-axis. At 6.67% C the alloy is all cementite, so the diagram stops there. It shows the phases present after slow cooling. Cementite is in fact metastable, but in steels it does not break down, so the diagram is treated as an equilibrium diagram. |
| Allotropes of pure iron | Pure iron freezes at about 1539 °C as δ-iron (BCC), changes to γ-iron (FCC) at about 1400 °C and to α-iron (BCC) at 910 °C. α-iron is magnetic below its Curie point, 768 °C. Non-magnetic α-iron between 768 and 910 °C was once called β-iron, but it is not a separate structure. |
| Ferrite (α) | Interstitial solid solution of carbon in BCC α-iron. It holds at most 0.022% C (at 727 °C) and about 0.008% at room temperature. Soft, ductile and magnetic. |
| Austenite (γ) | Interstitial solid solution of carbon in FCC γ-iron. The larger gaps of FCC let it hold up to 2.11% C (at 1147 °C). Soft, ductile and non-magnetic. In plain carbon steel it is not stable below 727 °C. |
| δ-ferrite | Solid solution of carbon in BCC δ-iron, stable only above about 1400 °C, with at most 0.09% C. |
| Cementite (Fe₃C) | Iron carbide, an intermetallic compound with 6.67% C. The hardest and most brittle constituent of steel. |
| Pearlite | Not a single phase but a mixture: thin alternate plates of ferrite and cementite (about 88% ferrite, 12% cementite) formed from austenite at the eutectoid point. Under the microscope it shines like mother-of-pearl, hence the name. |
| Ledeburite | The eutectic mixture of austenite and cementite formed from liquid at 1147 °C and 4.3% C. Below 727 °C its austenite turns to pearlite. Found in cast irons. |
| Three invariant reactions | Peritectic, about 1493 °C and 0.16–0.18% C: liquid + δ-ferrite → austenite. Eutectic, 1147 °C and 4.3% C: liquid → austenite + cementite (ledeburite). Eutectoid, 727 °C (723 °C in older books) and 0.8% C (0.77% in some): austenite → ferrite + cementite (pearlite). |
| Steels and cast irons | Up to 2.11% C (often rounded to 2%) the alloy is a steel; above that it is a cast iron. Hypoeutectoid steel, below 0.8% C: ferrite + pearlite. Eutectoid steel, 0.8% C: all pearlite. Hypereutectoid steel, 0.8 to 2% C: pearlite + cementite along the grain boundaries. Cast irons are hypoeutectic below 4.3% C, eutectic at 4.3% and hypereutectic above. |
| Critical lines | A1: the eutectoid line at 727 °C, the lower critical temperature. A3: the upper critical line of hypoeutectoid steels, where ferrite starts to form from austenite on cooling (910 °C at 0% C, falling to 727 °C at 0.8%). Acm: the upper critical line of hypereutectoid steels, where cementite starts to come out of austenite (727 °C at 0.8% C, rising to 1147 °C at 2.11%). A2 is the Curie point, 768 °C. |
| What is not on it | Slow-cooled steel at room temperature holds only ferrite and cementite. Martensite and bainite never appear on this diagram: they need fast or interrupted cooling and belong to the TTT diagram (sub-topic 6). |

### Formulas to memorise

```math
W_{\text{pearlite}} = \frac{C_0 - 0.022}{C_e - 0.022} \approx \frac{C_0}{C_e}
```

```math
\text{Cementite in pearlite} = \frac{0.8 - 0.022}{6.67 - 0.022} \approx 0.12
```

Here C₀ is the steel's carbon content and C\_e the eutectoid carbon content (use 0.8 or 0.77, whichever the question or its options suggest). The rest of a hypoeutectoid steel is free ferrite.

| Point | Temperature | Carbon |
| --- | --- | --- |
| Melting point of pure iron | About 1539 °C | 0% |
| Peritectic | About 1493 °C | 0.16–0.18% |
| Eutectic | 1147 °C | 4.3% |
| Most carbon in austenite | 1147 °C | 2.11% |
| γ → α in pure iron (A3) | 910 °C | 0% |
| Curie point (A2) | 768 °C | Any |
| Eutectoid (A1) | 727 °C | 0.8% |
| Most carbon in ferrite | 727 °C | 0.022% |
| Cementite | Any | 6.67% |

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 11 December 2020 (Morning).** When solidification starts, iron will appear in \_\_\_\_\_\_\_ form. (a) alpha (b) beta (c) delta (d) gamma

*Answer: (c).* Pure iron freezes at about 1539 °C as δ-iron (BCC). It then changes to γ-iron at about 1400 °C and to α-iron at 910 °C. Reading the diagram from the top down gives the order δ, γ, α.

**Q2. SSC JE Mechanical, 11 December 2020 (Morning).** γ-iron has \_\_\_\_\_\_ structure: (a) BCC (b) HCP (c) SC (d) FCC

*Answer: (d).* γ-iron, the iron of austenite, is FCC. Both α-iron and δ-iron are BCC. A way to remember it: the FCC form is the one that dissolves the most carbon (2.11%), because its gaps are the largest.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** The temperature range in which delta iron is formed is: (a) Between 1400 °C and 1539 °C (b) Between 910 °C and 1400 °C (c) Above the melting point (d) Room temperature

*Answer: (a).* δ-iron exists from about 1400 °C up to the melting point of about 1539 °C. Between 910 and 1400 °C, option (b), iron is γ (austenite). Above the melting point iron is liquid.

**Q4. SSC JE Mechanical, 25 January 2018 (Morning).** Austenite is a solid solution of carbon in \_\_\_\_ iron. (a) Alpha (b) Beta (c) Gamma (d) Delta

*Answer: (c).* Austenite is carbon dissolved interstitially in FCC γ-iron. Carbon in α-iron is ferrite and carbon in δ-iron is δ-ferrite.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Which of the following are true for austenite? i. It is a solid solution of iron, carbon and chromium ii. It has FCC crystal structure iii. It is stable at room temperature iv. Pure austenite is stable in the temperature range of 912 – 1394 °C (a) i and ii (b) ii and iii (c) i and iv (d) ii and iv

*Answer: (d).* Austenite is FCC (ii), and in pure iron it is stable from 912 to 1394 °C (iv; this paper uses the more exact values of 910 and 1400). It is a solution of carbon in iron; chromium is not part of its definition, so (i) is false. In plain carbon steel austenite is not stable below 727 °C, so (iii) is false. (Austenitic stainless steels keep it at room temperature only because of their nickel.)

**Q6. ISRO VSSC Technical Assistant (Mechanical), 14 July 2021.** Which of the following phase of steel is NOT present in Iron-Carbon phase diagram? (a) Ferrite (b) Cementite (c) Austenite (d) Martensite

*Answer: (d).* The iron-carbon diagram shows what forms on slow cooling. Martensite forms only when austenite is quenched too fast for carbon to diffuse out, so it appears on the TTT diagram, not here.

**Q7. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** In eutectic reaction, which of the following is true? (a) Liquid + δ-ferrite ↔ Austenite (b) Austenite ↔ α-Ferrite + Cementite (c) Liquid ↔ Austenite + Cementite (d) Ferrite ↔ Austenite + Cementite

*Answer: (c).* The eutectic turns one liquid into two solids: at 1147 °C and 4.3% C, liquid → austenite + cementite (ledeburite). Option (a) is the peritectic and (b) the eutectoid. Option (d) is not a reaction in the diagram at all.

**Q8. HPCL Junior Executive (Mechanical), 14 September 2025 (Shift 1).** The eutectoid reaction in the iron-carbon diagram occurs at: (a) 911 °C and 2.11% C (b) 1493 °C and 0.1% C (c) 723 °C and 0.8% C (d) 1147 °C and 4.3% C

*Answer: (c).* The eutectoid is at 723 °C (727 °C in newer books) and 0.8% C. The other options mix up the points: 1147 °C and 4.3% is the eutectic, about 1493 °C and 0.1–0.18% is the peritectic, and 2.11% is the most carbon austenite can hold, which is at 1147 °C, not 911 °C.

**Q9. GATE Production and Industrial Engineering, 2018.** When austenite decomposes upon cooling into two phases, ferrite and cementite, the reaction is called (a) Eutectic (b) Eutectoid (c) Peritectic (d) Peritectoid

*Answer: (b).* One solid splitting into two solids is a eutectoid reaction; its product here is pearlite. A liquid splitting into two solids would be eutectic.

**Q10. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The fraction of pearlite in a 0.55% C steel is (a) 0.55 (b) 0.31 (c) 0.71 (d) 0

*Answer: (c).* By the lever rule between ferrite (0.022% C) and the eutectoid (0.77% C): (0.55 − 0.022)/(0.77 − 0.022) = 0.528/0.748 = 0.71. Even the rough C/0.8 = 0.69 lands nearest 0.71. Option (b), 0.31, is roughly the fraction of free ferrite, and (a) simply repeats the carbon content.

## 6. TTT diagram and heat treatment

Heat treatment changes a steel's properties without changing its shape or composition: heat it, hold it, cool it at a chosen rate. Each process is defined by three things: how high it is heated (measured against A1 and A3), how it is cooled, and what structure results. Learn the processes as the table at the end, and learn the TTT curve, which explains why the cooling rate decides everything.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Why heat-treat | To soften a steel for machining, relieve internal stresses, refine the grain, make a part hard and wear-resistant, or make it tough. |
| Full annealing | Heat a hypoeutectoid steel 30–50 °C above A3 (a hypereutectoid one above A1), hold, then cool very slowly in the furnace. Gives coarse pearlite and ferrite: the softest, most ductile and most machinable state, with internal stresses removed. |
| Process annealing | Heat a cold-worked low-carbon steel to just below A1 (about 550–650 °C) so it recrystallises and can be drawn further as wire or sheet. No phase change takes place. |
| Spheroidise annealing | Hold a high-carbon steel just below A1 for a long time, or cycle it about A1, so the cementite plates gather into small globules (spheroidite, or globular pearlite). The softest state for machining high-carbon and tool steels. |
| Stress-relief annealing | Heat to about 500–650 °C, well below A1, and cool slowly to remove residual stresses left by welding, casting or machining. The structure does not change. |
| Diffusion (homogenising) annealing | Heat to 1100–1200 °C, far above A3, and hold for many hours, so diffusion evens out the segregation in heavy castings and ingots and makes the austenite grains uniform in composition. |
| Normalising | Heat 30–50 °C above A3 (above Acm for a hypereutectoid steel) and cool in still air. The faster cooling gives finer pearlite than annealing, so the steel is a little harder and stronger, with a refined, uniform grain. A eutectoid steel comes out all pearlite. |
| Hardening | Heat 30–50 °C above A3 (hypoeutectoid) or above A1 (hypereutectoid), hold, and quench faster than the critical cooling rate. The austenite turns into martensite: hard, brittle and highly stressed. Quench severity: brine > water > oil > air. |
| Martensite | A supersaturated solution of carbon in iron, formed without diffusion when austenite is cooled too fast for the carbon to escape. The trapped carbon stretches the cubic cell into body-centred tetragonal (BCT). It is metastable, the hardest structure in steel, and forms as needle-like plates. |
| Tempering | Reheat hardened steel to a temperature below A1, hold and cool. It relieves quenching stresses and gives up some hardness for toughness. Low (150–250 °C): tempered martensite, for cutting tools. Medium (350–450 °C): troostite, for springs. High (500–650 °C): sorbite, tough, for shafts and gears. |
| TTT diagram | The time-temperature-transformation diagram, also called the isothermal transformation diagram. It shows how long austenite, held at a fixed temperature below A1, takes to start and to finish turning into pearlite or bainite. Its two C-shaped curves have a nose near 550 °C, where transformation is fastest. Below are the Ms (martensite start, about 220 °C for eutectoid steel) and Mf (martensite finish) lines. |
| Critical cooling rate | The slowest cooling that just misses the nose of the TTT curve, so that all the austenite becomes martensite. Most alloying elements (cobalt is the exception) push the nose to the right and lower the critical cooling rate, which is why alloy steels harden in oil or even air. |
| Pearlite and bainite | Austenite transformed above the nose gives pearlite: coarse just below A1, fine nearer the nose. Transformed between the nose and Ms it gives bainite: ferrite with very fine carbide particles, tough and fairly hard. Like martensite, bainite is not on the iron-carbon diagram. |
| Austempering | Quench into a salt bath held above Ms and keep the part there until all the austenite has turned to bainite, then cool in air. Gives a tough, fairly hard part with little distortion and no separate tempering. |
| Martempering (marquenching) | Quench into a bath just above Ms, hold only until the temperature is even through the part (not long enough for bainite), then cool slowly through the martensite range. Gives martensite with much less distortion and cracking; it still needs tempering. Austempering and martempering are both interrupted quenches. |
| Hardenability | The ability of a steel to harden in depth, not the hardness it reaches (that depends on its carbon content). It is measured by the Jominy end-quench test: a 25 mm bar heated to austenite has one end sprayed with water, and its hardness is measured along its length. Alloying elements raise hardenability. |

### Table to memorise

| Process | Heated to | Cooled | Result |
| --- | --- | --- | --- |
| Full annealing | 30–50 °C above A3 | In the furnace, very slowly | Coarse pearlite, softest |
| Normalising | 30–50 °C above A3 or Acm | In still air | Fine pearlite, refined grain |
| Hardening | 30–50 °C above A3 (A1 if hypereutectoid) | Quenched in brine, water or oil | Martensite |
| Tempering | Below A1 | In air | Tempered martensite, troostite or sorbite |
| Austempering | Above A3, then a bath above Ms | Held in the bath | Bainite |
| Martempering | Above A3, then a bath just above Ms | In air through Ms to Mf | Martensite with low distortion |
| Spheroidising | Just below A1, long hold | Slowly | Spheroidite |
| Process annealing | Just below A1 | In air | Recrystallised ferrite |

### Past exam questions with solutions

**Q1. ISRO SAC Technical Assistant, 1 July 2018.** What is the purpose of annealing process? (a) To increase hardness (b) To decrease machinability (c) To remove internal stress (d) For surface hardening

*Answer: (c).* Annealing softens the steel, refines its grain and removes internal stresses. It lowers hardness and improves machinability, so (a) and (b) are the opposite of what it does. Surface hardening is a different process altogether (sub-topic 7).

**Q2. RRB JE CBT-2 Mechanical, 29 August 2019.** Which annealing process is carried out in a heavy casting to make austenitic grains homogeneous? (a) Full annealing (b) Spheroidise annealing (c) Diffusion annealing (d) Process annealing

*Answer: (c).* Heavy castings and ingots freeze with their alloying elements unevenly spread (segregation). Diffusion annealing holds them at 1100–1200 °C for a long time so the atoms diffuse and the austenite becomes uniform; it is also called homogenising.

**Q3. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 1).** The process of producing a structure of globular pearlite is known as \_\_\_\_\_\_\_. (a) process annealing (b) spheroidise annealing (c) diffusion annealing (d) isothermal annealing

*Answer: (b).* Holding a high-carbon steel just below A1 for a long time lets the cementite plates of pearlite gather into globules, the shape with the least surface. The result, spheroidite, is the softest form of the steel.

**Q4. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Normalizing produces a homogeneous structure consisting of only pearlite for (a) Hypoeutectoid steel (b) Eutectoid steel (c) Hypereutectoid steel (d) Alloy steel

*Answer: (b).* Only a steel of eutectoid composition (0.8% C) turns entirely into pearlite on cooling. A hypoeutectoid steel also holds free ferrite, and a hypereutectoid one free cementite, whatever the heat treatment.

**Q5. BPSC AE (Mechanical), 2019.** Which of the following is the quench media with highest heat transfer equivalent? (a) Brine (b) Air (c) Oil (d) Water

*Answer: (a).* Brine (salt water) cools fastest: the salt stops a steam blanket forming on the hot surface. The order of severity is brine > water > oil > air. The faster the quench, the more martensite, but also the more distortion and risk of cracking.

**Q6. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Martensite is a (a) Stable phase with body centred tetragonal unit cell (b) Metastable phase with body centred tetragonal unit cell (c) Metastable phase with body centred cubic unit cell (d) Stable phase with body centred cubic unit cell

*Answer: (b).* Martensite traps carbon that should have left the lattice, which stretches the cubic cell along one axis into body-centred tetragonal. It survives only because the carbon cannot move at room temperature; on heating (tempering) it breaks down into ferrite and carbide, so it is metastable.

**Q7. UPRVUNL AE (Mechanical), 5 July 2021.** The aim of the tempering heat treatment is to reduce \_\_\_\_\_ while substantially reducing \_\_\_\_\_\_. (a) fatigue strength; ductility (b) hardness; brittleness (c) hardness; ductility (d) fatigue strength; hardness

*Answer: (b).* Tempering gives up a little hardness to remove much of the brittleness of fresh martensite, so the steel becomes tougher. It raises ductility rather than reducing it, which rules out (a) and (c).

**Q8. PTCUL AE (Electrical and Mechanical), 2017.** In tempering process the steel is heated to a temperature: (a) Below the lower critical point (b) Higher than the lower critical point (c) In between the lower and upper critical point (d) Higher than the upper critical point

*Answer: (a).* Tempering is always done below A1 (727 °C). Going above A1 would turn part of the steel back into austenite and undo the hardening. Heating above the upper critical point is what annealing, normalising and hardening do.

**Q9. SSC JE Mechanical, 11 December 2020 (Morning).** TTT curves are \_\_\_\_\_\_\_\_ curves. (a) isothermal (b) adiabatic (c) isentropic (d) isochoric

*Answer: (a).* Each point on a TTT curve is found by holding austenite at one constant temperature and timing its change, so the curves are isothermal transformation curves. Adiabatic, isentropic and isochoric are thermodynamic process words that have nothing to do with it.

**Q10. Kerala PSC AE (Mechanical), 18 August 2025.** TTT diagram indicates time, temperature and transformation of: (a) Ferrite (b) Austenite (c) Pearlite (d) Cementite

*Answer: (b).* The TTT diagram follows austenite as it transforms, at a fixed temperature below A1, into pearlite, bainite or martensite. Ferrite, pearlite and cementite are among the products, not the starting phase.

**Q11. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Jominy end quench test is used to determine the (a) Hardness of a material (b) Ductility of a material (c) Hardenability of a material (d) Brittleness of a material

*Answer: (c).* The Jominy test quenches one end of a heated bar and measures hardness along it, showing how deep a steel can be hardened. That depth is hardenability. Hardness, option (a), is measured along the way, but it is not what the test is for.

## 7. Surface hardening

Gears, cams and crankshaft journals need a hard, wear-resistant surface over a tough core that will not crack under shock, and surface hardening gives both. There are two families: change the chemistry of the surface (carburising, nitriding, cyaniding, carbonitriding), or keep the chemistry and harden only the surface by quick local heating (flame and induction hardening). Most questions ask what is added, at what temperature, and whether a quench is needed.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Why case-harden | To get a hard, wear-resistant skin (the case) over a soft, tough, ductile interior (the core). Used for gears, cams, camshafts, crankshaft journals, piston pins and bearing races. |
| The two families | Thermochemical: carbon and/or nitrogen is diffused into the surface, changing its composition. This suits low-carbon steels (0.1–0.25% C), which cannot be hardened otherwise. Selective (thermal) hardening: nothing is added; only the surface is heated into austenite and quenched. This needs a steel with enough carbon to form martensite (medium-carbon, about 0.35–0.6% C). |
| Carburising | Low-carbon steel is heated at about 900–950 °C in a carbon-rich medium, so carbon diffuses in and raises the surface to about 0.8–1% C; the part is then quenched and tempered. The case, 0.5–2 mm deep, grows with time. |
| Pack carburising | Parts are packed in a steel box with charcoal (or coke) and an energiser such as barium carbonate, sodium carbonate or calcium carbonate, and heated at about 900–950 °C for several hours. Simple and cheap, but slow and hard to control. |
| Gas carburising | Parts are heated in a furnace atmosphere of carbon-rich gas (natural gas, propane, endothermic gas) at about 900–950 °C. Case depth and carbon content are easy to control, so it suits mass production and is the most used method. |
| Liquid carburising | Parts are dipped in a bath of molten salt containing sodium cyanide at about 850–950 °C. Fast and even for small parts. |
| Nitriding | An alloy steel containing Al, Cr, Mo or V (which form hard nitrides) is heated in ammonia gas at about 500–550 °C for 40 to 100 hours. Nitrogen forms hard nitrides at the surface. The work stays below A1 and the hardness comes from nitrides, not martensite, so no quench is needed and distortion is least. It gives the hardest case (about 1000–1100 HV) but the thinnest (0.1–0.6 mm), and it is the slowest process. |
| Cyaniding | Low-carbon steel is dipped in molten sodium cyanide at about 800–870 °C (950 °C in some books) for 30 to 60 minutes and then quenched. Both carbon and nitrogen enter, giving a thin case (0.1–0.3 mm). Quick, but cyanide salts are poisonous. |
| Carbonitriding | The gas form of cyaniding: carbon-rich gas plus ammonia at about 750–900 °C, then a quench. Carbon and nitrogen both enter. |
| Flame hardening | An oxy-acetylene flame heats the surface of a medium-carbon or alloy steel quickly above A3, and a water spray following just behind quenches it. Suits large or irregular parts and local areas, such as lathe beds and guideways and large gears. |
| Induction hardening | A high-frequency alternating current in a copper coil induces eddy currents that heat only the surface of the part (the skin effect); a water spray then quenches it. The higher the frequency, the thinner the heated layer. Fast, clean and easy to automate: crankshaft journals, gear teeth, axles. |
| Shot peening | Not a heat treatment: the surface is blasted with small steel shot, which cold-works it and leaves it in compressive residual stress. It raises surface hardness and, above all, fatigue strength. |

### Table to memorise

| Process | What enters | Temperature | Quench after? | Case |
| --- | --- | --- | --- | --- |
| Carburising | Carbon | 900–950 °C | Yes | 0.5–2 mm |
| Nitriding | Nitrogen | 500–550 °C | No | Thinnest and hardest |
| Cyaniding | Carbon and nitrogen | 800–870 °C (950 °C in some books) | Yes | 0.1–0.3 mm |
| Carbonitriding | Carbon and nitrogen | 750–900 °C | Yes | 0.1–0.75 mm |
| Flame or induction hardening | Nothing | Surface above A3 | Yes | Set by the heating |

### Past exam questions with solutions

**Q1. ISRO SDSC Technical Assistant (Mechanical), 12 February 2017.** Case hardening is (a) Done to get a soft ductile interior with a very hard surface (b) Done to get a hard ductile interior with a very hard surface (c) Followed by tempering (d) None of the above

*Answer: (a).* The point of case hardening is the contrast: a hard, wear-resistant case over a soft, tough core that resists shock. A hard interior, as in (b), would make the part brittle. Option (c) is not a definition: a carburised part is usually tempered at a low temperature, but a nitrided part is not.

**Q2. UPPSC AE Mechanical (Mains Paper I), 29 September 2025.** Which of the following is not a case hardening process? (a) Carburising (b) Nitriding (c) Flame hardening (d) Annealing

*Answer: (d).* Annealing softens the whole part. Carburising and nitriding harden the surface by adding carbon or nitrogen, and flame hardening hardens it by local heating and quenching.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** The process of cyaniding and nitriding are the two methods of: (a) Hardening (b) Normalising (c) Case hardening (d) Tempering

*Answer: (c).* Both diffuse elements into the surface only (carbon and nitrogen in cyaniding, nitrogen in nitriding), giving a hard case over a soft core. Option (a), plain hardening, hardens through the whole section by quenching.

**Q4. AAI JE (Technical), 2020.** The type of case hardening using 50% charcoal, BaCO₃, CaCO₃ at a temperature close to 950 degrees is \_\_\_\_\_\_\_\_ carburising. (a) pack (b) gas (c) liquid (d) liquid and gas

*Answer: (a).* Solid charcoal with carbonate energisers packed round the parts in a box is pack carburising. The carbonates release CO₂, which reacts with the hot charcoal to make the CO that carries carbon into the steel.

**Q5. RRB JE CBT-2 Mechanical, 31 August 2019.** Which carburising method has high production rate? (a) Gas carburising (b) Pack carburising (c) Liquid carburising (d) Solid powder carburising

*Answer: (a).* Gas carburising runs in continuous furnaces with the carbon content of the atmosphere controlled closely, so it suits mass production. Pack carburising, option (b), and "solid powder" carburising, option (d), are the same slow batch process.

**Q6. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1).** In which of the following process does mild steel absorb carbon and nitrogen to obtain a hard surface? (a) Carburizing (b) Nitriding (c) Cyaniding (d) Annealing

*Answer: (c).* The sodium cyanide bath supplies both carbon and nitrogen. Carburising adds only carbon and nitriding only nitrogen. Carbonitriding, the gas form of cyaniding, also adds both, but it is not among the options.

**Q7. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1).** Quenching is not necessary when hardening is done by (a) Flame hardening (b) Induction hardening (c) Case hardening (d) Nitriding

*Answer: (d).* Nitriding works at about 500–550 °C, below A1, and its hardness comes from hard nitrides formed at the surface, not from martensite. So there is nothing to quench, and the part barely distorts. Flame and induction hardening both depend on a quench right after heating.

**Q8. SAIL Operative Cum Technician Trainee (Mechanical), 2019 (Shift 1).** Shot peening is the process used for: (a) Increasing surface hardness and fatigue strength (b) Increasing surface finish and creep strength (c) Producing smooth surfaces (d) Producing forged components

*Answer: (a).* Peening cold-works the surface, which hardens it, and leaves it in compressive residual stress, which stops fatigue cracks from starting. It roughens the surface slightly rather than smoothing it, and it does nothing for creep, which is a high-temperature failure.

## 8. Steels, cast irons and alloying elements

Steel is iron with up to about 2% carbon; cast iron has more than 2%, usually 2.5–4%. Questions ask the carbon range of each kind of steel, what each alloying element does, the make-up of 18-8 stainless steel and 18-4-1 high-speed steel, and how each cast iron is made and why its graphite has the shape it has.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Pig iron | The first product of the blast furnace: iron with about 3.5–4.5% carbon plus silicon, manganese, sulphur and phosphorus. Brittle. It is the raw material for cast iron, wrought iron and steel. |
| Wrought iron | The purest commercial iron: about 0.02–0.1% carbon, with threads of slag running through it. Soft, ductile and tough, and easy to forge-weld: chains, crane hooks, rivets. |
| Plain carbon steel | Iron with up to 2% carbon (in practice under 1.5%), with small amounts of manganese (up to about 1%), silicon, sulphur and phosphorus and no other element added on purpose. It is grouped by carbon content, as in the next four rows. |
| Dead mild steel | Under 0.15% carbon. Very ductile: wire, thin sheet, rivets, tubes. |
| Mild (low-carbon) steel | 0.15–0.3% carbon. Easy to weld and machine: structural sections, bolts, boiler plates, car body panels. It does not harden much on quenching, so it is case-hardened instead. |
| Medium-carbon steel | 0.3–0.6% carbon. Stronger and less ductile: shafts, axles, crankshafts, connecting rods, gears. It can be hardened and tempered. |
| High-carbon steel | 0.6–1.5% carbon. Hard and wear-resistant but less ductile: rails (about 0.6–0.8%), springs, hammers, wire ropes; above about 0.8% (tool steel) it is used for chisels, drills, files and razors. |
| Effect of carbon | As carbon rises, hardness, yield strength and tensile strength rise, while ductility, toughness, weldability and machinability fall. Tensile strength peaks near 0.8–1% carbon; hardness keeps rising beyond that. |
| Impurities | Manganese ties up sulphur as MnS, removing hot shortness; it also deoxidises and raises strength and hardenability. Silicon deoxidises. Sulphur, as FeS at the grain boundaries, causes hot shortness (cracking during hot working) but improves machinability in free-cutting steels. Phosphorus causes cold shortness (brittleness at low temperature). |
| Limitations of plain carbon steel | Poor hardenability (only thin sections harden through, and the drastic water quench needed can crack or distort the part), a large loss of hardness on tempering, poor corrosion and oxidation resistance, and low strength at high temperature. Alloy steels are made to overcome these. |
| Alloy steel | Steel with other elements added on purpose. Low-alloy steel has under about 5% of added elements in total; high-alloy steel has more, as in stainless and high-speed steels. |
| Stainless steel | Steel with at least about 11–12% chromium. The chromium forms a thin, self-healing film of chromium oxide (Cr₂O₃) on the surface, which stops further rusting. |
| Austenitic stainless steel (18-8) | 18% chromium and 8% nickel, with low carbon (under about 0.1%). Nickel keeps FCC austenite stable at room temperature, so it is non-magnetic, very ductile and tough, has the best corrosion resistance, and cannot be hardened by heat treatment (only by cold working). Kitchenware, chemical and food plant. |
| Ferritic stainless steel | 12–27% chromium, low carbon, no nickel. BCC and magnetic, and not hardenable by heat treatment. Car trim, sinks. |
| Martensitic stainless steel | 12–18% chromium with more carbon (0.1–1.2%). Magnetic, and it can be hardened by quenching. Cutlery, surgical instruments, turbine blades. |
| High-speed steel (HSS) 18-4-1 | 18% tungsten, 4% chromium and 1% vanadium, with about 0.7% carbon. It keeps its hardness up to about 600 °C (red hardness), so cutting tools can run at high speed. Molybdenum high-speed steels replace much of the tungsten with molybdenum. |
| IS designation | Plain carbon steel is named by its carbon content: C40 is steel with 0.40% carbon (old form 40C8: 0.40% carbon and about 0.8% manganese). In alloy steel the carbon comes first in hundredths of a percent, then each main element with a number: 40Cr4Mo2 is 0.40% carbon, 1% chromium (4 divided by 4) and 0.2% molybdenum (2 divided by 10). |
| Cast iron | Iron with more than 2% carbon (usually 2.5–4%) and about 1–3% silicon. Low melting point and good fluidity, so it is easy to cast; brittle, so it cannot be forged or rolled. Its kind depends on whether the carbon is free graphite or combined as cementite, and on the shape of the graphite. |
| Grey cast iron | Carbon present as free graphite flakes, so a fracture looks grey. Slow cooling and high silicon favour graphite. Cheap, easy to machine, strong in compression and excellent at damping vibration, but weak and brittle in tension because the flakes act as cracks. Machine beds and frames, engine blocks, pipes. |
| White cast iron | All the carbon combined as cementite (Fe₃C), so a fracture looks white. Made by fast cooling and low silicon. Very hard and brittle and almost impossible to machine; used for wear parts and as the starting material for malleable iron. |
| Chilled cast iron | Grey iron cast against metal chills, so the surface cools fast and turns white and hard while the inside stays grey. Rolling-mill rolls, railway wheels, crusher jaws. |
| Malleable cast iron | Made from white cast iron by long annealing at about 850–950 °C, which breaks the cementite down into rounded clusters of graphite (temper carbon). Fairly ductile and tough: pipe fittings, brackets, small parts for vehicles. |
| Spheroidal graphite (SG) cast iron | Also called ductile or nodular cast iron. Magnesium or cerium is added to the molten iron just before casting, so the graphite forms spheres (nodules) instead of flakes. Strength and ductility approach those of steel: crankshafts, gears, pipes. |
| Alloy cast irons | Nickel, chromium or molybdenum added: Ni-hard for wear resistance, Ni-resist for corrosion and heat resistance. |

### Table to memorise

| Element | Main effect in steel | Typical use |
| --- | --- | --- |
| Chromium | Hardness, wear and corrosion resistance; raises hardenability; 11–12% or more makes steel stainless | Stainless steel, ball-bearing steel, tool steel |
| Nickel | Strength and toughness without loss of ductility; keeps austenite stable; corrosion resistance | 18-8 stainless steel, Invar, armour plate |
| Manganese | Strength and hardenability; removes the hot shortness caused by sulphur; at 11–14% (Hadfield steel) the steel work-hardens strongly | Rail crossings, crusher jaws, excavator teeth |
| Silicon | Deoxidiser; raises elasticity and magnetic permeability and lowers hysteresis loss | Spring steel, transformer and motor laminations |
| Tungsten | Red hardness (keeps hardness when hot); forms hard carbides | High-speed steel, hot-working dies |
| Molybdenum | Red hardness and creep strength; reduces temper brittleness | Molybdenum high-speed steel, boiler and turbine parts |
| Vanadium | Fine grain and toughness; hard carbides that resist wear | High-speed steel, springs, tools |
| Cobalt | Raises red hardness further; magnetic properties | Super high-speed steel, permanent magnets |
| Aluminium | Deoxidiser and grain refiner; forms hard nitrides | Nitriding steels |

### Past exam questions with solutions

**Q1. MPSC AE (Prelims), 2019.** What is carbon content (%) in mild steel? (a) 2.0 – 3.0 (b) 0.5 – 0.8 (c) 0.05 – 0.1 (d) 0.15 – 0.3

*Answer: (d).* Mild (low-carbon) steel has 0.15–0.3% carbon. 0.05–0.1% is dead mild steel, 0.5–0.8% is medium- to high-carbon steel, and 2–3% is already cast iron.

**Q2. SSC JE Civil, 16 November 2022 (Shift 1).** Which of the following alloys of iron and carbon has the highest yield strength? (a) Medium carbon steel (b) Mild steel (c) Dead mild steel (d) High carbon steel

*Answer: (d).* More carbon means more hard cementite (as pearlite) in the structure, so yield strength rises with carbon content. High-carbon steel is the strongest of the four and dead mild steel the weakest; the price is lower ductility and weldability.

**Q3. BPSC AE (Mechanical) Paper 6, 2019.** The limitations of plain carbon steels include (a) poor hardenability (b) major loss of hardness on tempering (c) low corrosion resistance (d) all of the above

*Answer: (d).* Plain carbon steel hardens only to a shallow depth and needs a drastic water quench that can crack the part; its martensite softens quickly when tempered; and it rusts. Alloying elements such as chromium, nickel and molybdenum cure all three.

**Q4. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Identify Chromium, Tungsten and Vanadium content in 18-4-1 HSS. (a) 1%, 18%, 4% (b) 1%, 4%, 18% (c) 18%, 4%, 1% (d) 4%, 18%, 1%

*Answer: (d).* 18-4-1 means 18% tungsten, 4% chromium and 1% vanadium, in that order. The question lists chromium first, so the answer reads 4%, 18%, 1%. Option (c) is the trap: it is the name of the steel, not the order the question asks for.

**Q5. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Alloying element suitable to improve corrosion resistance is (a) Chromium (b) Boron (c) Molybdenum (d) Silicon

*Answer: (a).* Chromium forms a thin, self-healing film of chromium oxide on the surface; at about 11–12% or more the steel becomes stainless. Molybdenum adds pitting resistance only to steels that already contain chromium, boron raises hardenability, and silicon is a deoxidiser.

**Q6. ISRO SDSC Technical Assistant (Mechanical), 8 April 2018.** The austenitic stainless steel contains (a) 18% chromium and 8% Nickel (b) 8% chromium and 18% Nickel (c) 18% chromium and 18 % Nickel (d) 8% chromium and 8 % Nickel

*Answer: (a).* The standard austenitic grade is 18-8: 18% chromium for corrosion resistance and 8% nickel to keep FCC austenite stable at room temperature. That is why it is non-magnetic and cannot be hardened by quenching.

**Q7. ISRO SDSC Technical Assistant (Mechanical), 4 June 2022.** Minimum percentage of carbon in cast iron is (a) 1.0% (b) 2.0% (c) 0.8% (d) 4.4%

*Answer: (b).* Steel ends and cast iron begins at about 2% carbon (2.1% on the iron–carbon diagram, the most carbon austenite can dissolve). 0.8% is the eutectoid composition, and the eutectic is at 4.3%.

**Q8. GATE ME 2021 (Shift 2).** The Cast Iron which possesses all the carbon in the combined form as cementite is known as (a) White Cast Iron (b) Spheroidal Cast Iron (c) Malleable Cast Iron (d) Grey Cast Iron

*Answer: (a).* Fast cooling and low silicon leave no free graphite: all the carbon is in cementite, so the fracture looks white and the iron is very hard and brittle. In the other three the carbon is mostly free graphite, as spheres, rounded clusters or flakes.

**Q9. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Name the type of cast iron in which carbon is present in the form of free graphite flakes. (a) White cast iron (b) Malleable cast iron (c) Grey cast iron (d) Chilled cast iron

*Answer: (c).* Grey cast iron holds its carbon as graphite flakes, which give the grey fracture, easy machining and good damping. White iron and the white surface of chilled iron hold carbon as cementite, and malleable iron has its graphite as rounded clusters, not flakes.

**Q10. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1).** Malleable cast iron is produced- (a) From white cast iron by the carburizing process (b) From white cast iron by the annealing process (c) By adding magnesium to molten cast iron (d) By quick cooling of molten cast iron

*Answer: (b).* White cast iron is annealed for a long time at about 850–950 °C, so its cementite breaks down into rounded clusters of graphite. Adding magnesium, option (c), makes SG iron, and quick cooling, option (d), makes white or chilled iron.

**Q11. SSC JE Mechanical, 22 March 2021 (Evening).** \_\_\_\_\_\_ is also called spheroidal graphite cast iron. (a) Malleable cast iron (b) Ductile cast iron (c) White cast iron (d) Gray cast iron

*Answer: (b).* Ductile, nodular and SG cast iron are three names for the same iron. Magnesium or cerium makes the graphite form spheres, which do not act as cracks the way flakes do, so the iron can bend before it breaks.

**Q12. ISRO Scientist/Engineer (Mechanical), 2017.** The variety of cast iron which has maximum hardness is (a) Gray iron (b) Malleable iron (c) Ductile iron (d) White iron

*Answer: (d).* White iron is cementite and pearlite with no soft graphite at all, so it is the hardest (about 400–600 BHN). Grey, malleable and ductile irons all contain soft graphite.

## 9. Non-ferrous alloys and other engineering materials

Non-ferrous metals (copper, aluminium, nickel, tin, zinc, lead, titanium) and their alloys are lighter or more corrosion-resistant than steel, or conduct better, but they cost more. Nearly every exam question here is "what is alloy X made of" or "where is it used", so the table at the end is the part to learn by heart. Polymers, ceramics and composites come up as one or two definition questions.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Copper | Excellent electrical and thermal conductivity, ductile and corrosion-resistant: wires, heat exchangers, radiators. The base of brass, bronze and gun metal. |
| Brass | Copper plus zinc. More zinc makes it stronger and cheaper but less ductile. Cartridge brass (70/30) is the best for deep drawing; Muntz metal (60/40) is worked hot. A little tin (Admiralty and naval brass) improves resistance to sea water. |
| Bronze | Copper plus tin. Harder and more corrosion-resistant than brass. Phosphor bronze adds a little phosphorus (a deoxidiser) and is used for springs, gears and bearings. Aluminium bronze replaces tin with 5–10% aluminium and suits marine parts. |
| Gun metal | A bronze of about 88% copper, 10% tin and 2% zinc. Strong, tough and resistant to steam and sea water: valves, pump bodies, glands and bearing bushes. |
| German silver | Also called nickel silver: copper, zinc and nickel, with no silver at all. White and corrosion-resistant: utensils, decorative ware, resistance wire. |
| Nickel alloys | Monel (about 67% nickel, 30% copper) resists sea water and acids: pump and marine parts. Nichrome (80% nickel, 20% chromium) has high resistivity and resists oxidation: heating elements. Nimonic alloys (nickel-chromium with titanium and aluminium) keep their strength and resist creep at red heat: gas turbine blades. Constantan (55% copper, 45% nickel) has a resistance that barely changes with temperature: thermocouples and resistors. |
| Invar | Iron with about 36% nickel. It hardly expands when heated, so it is used for measuring tapes, precision instruments and clock pendulums. |
| Aluminium | Light (density 2.7 g/cm³, a third of steel), a good conductor, and protected by a thin oxide film. Soft and weak when pure: cables, foil, utensils. |
| Duralumin | Aluminium with about 4% copper and 0.5% each of manganese and magnesium. After age hardening it is nearly as strong as mild steel at a third of the weight: aircraft structures, vehicle parts. |
| Y-alloy | Aluminium with about 4% copper, 2% nickel and 1.5% magnesium. Keeps its strength when hot: pistons and cylinder heads. |
| Age (precipitation) hardening | Three steps. Solution treatment: heat (about 500 °C for duralumin) until the copper dissolves into one solid solution. Quench: the copper is trapped in a supersaturated solution. Ageing: at room temperature (natural ageing) or at 100–200 °C (artificial ageing), tiny particles of CuAl₂ form and block dislocations, so the alloy grows stronger. It works only when the solubility of the added element falls as the temperature falls. Ageing too long or too hot (over-ageing) lets the particles grow and the alloy softens again. |
| Bearing metals | White metal (babbitt) is tin-based (about 88% tin, 8% antimony, 4% copper) or lead-based. Hard crystals of tin-antimony and copper-tin sit in a soft matrix: the matrix lets the bearing bed in and bury dirt, and the hard crystals carry the load with low friction. It is lined thinly on a steel or bronze shell. Phosphor bronze, gun metal and copper-lead are used where loads are heavier. |
| Solder | Soft solder is tin and lead (60/40 for electronics, 50/50 for plumbing), or lead-free tin-silver-copper; it melts below about 450 °C. Brazing uses spelter (copper-zinc) above 450 °C. |
| Titanium | Density 4.5 g/cm³, high strength-to-weight ratio, excellent corrosion resistance and biocompatibility: aircraft frames, compressor blades, bone implants. |
| Polymers | Very long chain molecules built from repeating units (monomers). Light, corrosion-resistant, good insulators, easy to mould, but weak and soft when hot. |
| Thermoplastics | Linear or branched chains held together only by weak forces, so they soften when heated and harden again on cooling, any number of times. They can be remoulded and recycled: polyethylene, polypropylene, PVC, polystyrene, nylon, acrylic (perspex), PTFE (Teflon). |
| Thermosetting plastics | On curing, the chains link into one rigid three-dimensional network by strong chemical bonds. Once set they do not soften on heating (they char instead), cannot be remoulded, and are harder and more heat-resistant: Bakelite (phenol formaldehyde), epoxy, polyester resin, melamine, urea formaldehyde. |
| Elastomers | Rubbers: lightly cross-linked chains that stretch a great deal and spring back. Vulcanising, heating with sulphur, adds the cross-links. |
| Ceramics | Compounds of metals with non-metals: oxides, carbides and nitrides such as alumina, silicon carbide and silicon nitride, plus glass and cement. Very hard, with high melting points, good corrosion resistance and good insulation, and strong in compression, but brittle and weak in tension: cutting-tool inserts, refractory bricks, insulators. |
| Composites | Two or more materials combined so that each keeps its identity. A continuous matrix (polymer, metal or ceramic) holds the pieces together, protects them and passes the load to them; the reinforcement (fibres, particles or flakes) carries most of the load. Examples: glass-fibre and carbon-fibre reinforced plastics (GFRP, CFRP), reinforced concrete, cemented carbide (tungsten carbide in cobalt) and wood, a natural composite. Fibre composites give high strength and stiffness for little weight. |
| Rule of mixtures | Along the fibres, the stiffness of a composite is the volume-weighted average of its parts: E(composite) = E(fibre) × V(fibre) + E(matrix) × V(matrix), where V is the volume fraction of each and the two fractions add up to 1. |

### Table to memorise

| Alloy | Make-up | Typical use |
| --- | --- | --- |
| Brass | Copper and zinc | Fittings, radiators, musical instruments |
| Cartridge brass | 70% copper, 30% zinc | Cartridge cases and deep-drawn parts |
| Muntz metal | 60% copper, 40% zinc | Hot-rolled sheet, condenser tube plates, bolts |
| Admiralty brass | 70% copper, 29% zinc, 1% tin | Condenser tubes |
| Bronze | Copper and tin | Bearings, statues, coins |
| Phosphor bronze | Copper, about 10% tin, up to 1% phosphorus | Springs, gears, bearings |
| Gun metal | 88% copper, 10% tin, 2% zinc | Valves, pump bodies, bearing bushes |
| German silver | About 60% copper, 20% zinc, 20% nickel | Utensils, decorative ware |
| Monel | About 67% nickel, 30% copper, with iron and manganese | Marine and chemical-plant parts |
| Nichrome | 80% nickel, 20% chromium | Heating elements |
| Constantan | 55% copper, 45% nickel | Thermocouples, resistors |
| Invar | 64% iron, 36% nickel | Measuring tapes, clock pendulums |
| Duralumin | Aluminium, 4% copper, 0.5% manganese, 0.5% magnesium | Aircraft structures |
| Y-alloy | Aluminium, 4% copper, 2% nickel, 1.5% magnesium | Pistons, cylinder heads |
| Babbitt (tin-based white metal) | 88% tin, 8% antimony, 4% copper | Bearing linings |
| Soft solder | Tin and lead | Joining electrical and sheet-metal work |

### Past exam questions with solutions

**Q1. RRB ALP CBT-2 Fitter, 21 January 2019 (Shift 2).** The alloy of copper and zinc is known as \_\_\_\_\_\_\_\_ (a) brass (b) nickle (c) bronze (d) duralumin

*Answer: (a).* Brass is copper and zinc. Bronze, the usual trap, is copper and tin, and duralumin is an aluminium alloy.

**Q2. RRB ALP CBT-2 Heat Engine, 23 January 2019 (Shift 3).** What is the composition of Gunmetal? (a) Lead and nickel (b) Copper, Tin and zinc (c) Copper, zinc and nickel (d) Lead and zinc

*Answer: (b).* Gun metal is about 88% copper, 10% tin and 2% zinc. Copper, zinc and nickel, option (c), is German silver.

**Q3. NPCIL Stipendiary Trainee (Mechanical), 8 November 2019 (Shift 1).** The major constituent of phosphor bronze is (a) Zinc (b) Copper (c) Lead (d) Aluminium

*Answer: (b).* Every bronze is mostly copper. Phosphor bronze is copper with about 10% tin and less than 1% phosphorus; the phosphorus deoxidises the melt and makes the bronze harder and springier.

**Q4. ISRO Scientist/Engineer (Mechanical), 2011.** Precipitation hardening is applicable for (a) Pure aluminium (b) Low carbon steel (c) Non-metal (d) Aluminium-copper alloy

*Answer: (d).* Precipitation hardening needs a second element whose solubility falls as the alloy cools, so that fine particles can be made to come out of solution. Copper in aluminium does this (duralumin). Pure aluminium has nothing to precipitate, and low-carbon steel is hardened by other means.

**Q5. UPPSC Lecturer (Mechanical) Paper I, 23 December 2021.** Babbit metal is an alloy of (a) Sn and Cu (b) Sn, Cu and Pb (c) Sn, Cu and Sb (d) Sn, Cu and Mg

*Answer: (c).* Tin-based babbitt is about 88% tin, 8% antimony and 4% copper. The antimony and copper form the hard crystals that carry the load; without antimony, as in (a), there is no bearing alloy. Lead appears only in the lead-based babbitts, and then along with antimony.

**Q6. UPPSC AE Mechanical (Mains Paper I), 29 September 2025.** The Iron-Nickel alloy which contains 40 - 50% of Nickel and is used for making precision instruments like measuring tapes, weights, etc. is: (a) Constantan (b) Elinvar (c) Monel (d) Invar

*Answer: (d).* Invar hardly expands with temperature, so a tape or a standard weight made of it keeps its size. Textbooks give Invar as 36% nickel, so the 40–50% in the stem is loose, but no other option fits: Constantan and Monel are copper-nickel and nickel-copper alloys, and Elinvar (iron, nickel and chromium) is used for watch hairsprings because its elasticity stays constant.

**Q7. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** NIMONICS is an alloy of (a) Zinc (b) Copper (c) Copper, Tin and Antimony (d) Nickel

*Answer: (d).* Nimonics are nickel-chromium superalloys with small additions of titanium and aluminium. They keep their strength and resist creep at red heat, so they are used for gas turbine blades. Option (c) is roughly the make-up of a bearing metal.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Due to its biocompatibility and properties very close to human bone, which of these alloys are extensively used as bone implants? (a) Copper alloys (b) Aluminium alloys (c) Micro alloy steels (d) Titanium alloys

*Answer: (d).* Titanium does not react with body fluids, its oxide film lets bone grow onto it, and its stiffness is closer to bone than that of steel. That is why hip joints, bone plates and dental implants are made of titanium alloys.

**Q9. Vizag Steel Management Trainee (Mechanical), 2013 (Re-exam).** Which among the following is an example of thermosetting plastics? (a) Bakelite (b) Polyethylene (c) Polystyrene (d) Teflon

*Answer: (a).* Bakelite (phenol formaldehyde) cures into a rigid cross-linked network that will not soften again, which is why it is used for switches and utensil handles. Polyethylene, polystyrene and Teflon (PTFE) are all thermoplastics: they soften every time they are heated.

## 10. Mechanical testing and non-destructive testing

Destructive tests (tensile, hardness, impact, fatigue and creep) measure a property on a sample, which is broken or marked in the process. Non-destructive tests (NDT) look for cracks and voids in the real part without harming it. Questions ask which property each test measures, which indenter each hardness test uses, and which NDT method finds which kind of flaw. A few ask simply for the name of a property, so the first rows define them.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Elasticity | The ability to return to the original shape when the load is removed, up to the elastic limit. |
| Plasticity | The ability to deform permanently without breaking. Forging, rolling and drawing all depend on it. |
| Ductility | The ability to be drawn out into wire under tension. Measured in the tensile test by percentage elongation and percentage reduction in area. Mild steel, copper and aluminium are ductile. |
| Malleability | The ability to be hammered or rolled into thin sheets under compression. Gold is the most malleable metal; lead is malleable but not very ductile. |
| Toughness | The energy a material absorbs before it breaks: the whole area under the stress-strain curve. Measured by impact tests. |
| Resilience | The energy stored up to the elastic limit and given back when the load is removed. Per unit volume it is (yield stress)² ÷ 2E. |
| Hardness and brittleness | Hardness is resistance to indentation, scratching and wear. Brittleness is breaking with little or no permanent deformation, as cast iron and glass do; it is the opposite of ductility. |
| Stiffness | Resistance to elastic deformation, set by Young's modulus E. |
| Tensile test | A standard specimen is pulled in a universal testing machine (UTM). The machine records only load and elongation; dividing by the original area and gauge length gives the engineering stress-strain curve, from which the yield strength, ultimate tensile strength, percentage elongation and reduction in area are found. Indian standards use a gauge length of 5.65√A₀ for round bars, where A₀ is the original cross-section area. |
| Brinell test | A hardened steel or tungsten-carbide ball, usually 10 mm across, is pressed in for 10–15 seconds with 3000 kgf for steel (500 kgf for soft metals). BHN is the load divided by the curved surface area of the dent. The large dent averages out coarse grains, so it suits castings and forgings, but not very hard or thin parts. |
| Vickers test | A square-based diamond pyramid, 136° between opposite faces; the two diagonals of the square dent are measured. Dents are geometrically similar at every load, so one scale covers soft to very hard metals and thin sections. Run at very light loads it is also a microhardness test. |
| Rockwell test | Hardness read straight off a dial from the depth of penetration. A minor load of 10 kgf seats the indenter, then the major load is added and removed. Scale B: 1/16-inch steel ball, 100 kgf in all, for soft steel, brass and aluminium. Scale C: 120° diamond cone (the Brale indenter), 150 kgf in all, for hardened steel. Quick, so it suits checks on the shop floor. |
| Knoop test | A long, narrow (rhombic) diamond pyramid under very light loads. Its shallow, long dent suits thin layers, case-hardened skins and brittle materials such as ceramics; it is the classic microhardness test. |
| Shore scleroscope | A diamond-tipped hammer is dropped on the surface, and the height it bounces back gives the hardness. Portable and leaves almost no mark, so it suits large finished parts such as rolls. |
| Mohs scale | Scratch hardness from 1 (talc) to 10 (diamond); each mineral scratches those below it. Used for minerals, not for metals. |
| Impact test | A swinging pendulum breaks a notched bar in one blow, and the energy absorbed, in joules, measures toughness under shock. Izod: a 10 × 10 × 75 mm bar is held upright as a cantilever with the notch facing the striker. Charpy: a 10 × 10 × 55 mm bar lies as a simply supported beam and is struck at the middle, on the face opposite the notch. Both use a 45° V-notch 2 mm deep. |
| Ductile-to-brittle transition | Below a certain temperature, steels (BCC) absorb much less impact energy and break in a brittle way. Charpy tests at several temperatures find this temperature. FCC metals such as copper, aluminium and austenitic stainless steel show no such transition. |
| Fatigue test | A specimen is loaded with reversing stress (for example a rotating beam) until it breaks. Plotting stress against the number of cycles gives the S-N curve. For steels the curve turns flat: the stress below which the steel never fails, however many cycles, is the endurance limit, roughly half the ultimate tensile strength. Aluminium and other non-ferrous metals have no clear limit, so a fatigue strength at a stated number of cycles is quoted instead. |
| Creep test | A constant load at a high temperature for a long time, with strain plotted against time. Primary creep: the rate falls. Secondary (steady-state) creep: a constant, minimum rate, the value used in design. Tertiary creep: the rate rises until the specimen breaks (rupture). |
| Destructive or not | Tensile, impact, fatigue, creep, bend and nick-break tests spoil the specimen. A hardness test leaves a dent, so it is usually counted as destructive too. Nick-break is a weld test: a notched weld is broken so its inside can be inspected. |
| Non-destructive testing (NDT) | Finds flaws in the actual part without harming it. The method is chosen by where the flaw lies (open to the surface, just below it, or deep inside) and by the material. Visual inspection, with a magnifier or borescope, always comes first. |
| Dye (liquid) penetrant | A coloured or fluorescent liquid seeps into cracks open to the surface. After the surface is wiped clean, a white developer draws it back out and shows the crack. Works on any non-porous material, but finds only flaws open to the surface. |
| Magnetic particle | The part is magnetised. A crack at or just below the surface disturbs the magnetic field, and fine iron powder sprinkled on the part gathers along it. Works only on ferromagnetic materials (iron and most steels), not on aluminium, copper or austenitic stainless steel. |
| Eddy current | A coil carrying alternating current induces eddy currents in the part; a crack changes them, and the coil senses the change. Works on any electrical conductor, for flaws at or near the surface; it also measures coating thickness and sorts alloys. |
| Ultrasonic | A probe sends high-frequency sound pulses (about 1–10 MHz) into the part through a couplant such as oil or gel. Echoes come back from a flaw or the far wall, and their timing gives the depth. Finds internal flaws deep inside thick parts and measures wall thickness. |
| Radiography | X-rays or gamma rays pass through the part onto film. Voids and cracks let more radiation through and show up dark. Finds internal flaws such as porosity, blowholes, inclusions and weld defects, and leaves a permanent record, but needs radiation safety. |

### Formulas to memorise

```math
\text{BHN} = \frac{2P}{\pi D\left(D-\sqrt{D^{2}-d^{2}}\right)}
```

P is the load in kgf, D the ball diameter and d the diameter of the dent, both in mm. The bottom line is the curved area of the dent.

```math
\text{VHN} = \frac{1.854\,P}{d^{2}}
```

P is the load in kgf and d the mean of the two diagonals of the dent in mm.

```math
\%\ \text{elongation} = \frac{L_f - L_0}{L_0}\times 100
```

```math
\%\ \text{reduction in area} = \frac{A_0 - A_f}{A_0}\times 100
```

L₀ and A₀ are the original gauge length and area; L\_f and A\_f are measured after fracture. Both measure ductility.

```math
\sigma_e \approx 0.5\,\sigma_u
```

The endurance limit of a polished steel specimen is about half its ultimate tensile strength.

### Table to memorise

| NDT method | Finds | Works on |
| --- | --- | --- |
| Dye penetrant | Cracks open to the surface | Any non-porous material |
| Magnetic particle | Cracks at or just below the surface | Ferromagnetic materials only |
| Eddy current | Flaws at or near the surface | Electrical conductors |
| Ultrasonic | Internal flaws deep inside; wall thickness | Most materials, with a couplant |
| Radiography | Internal flaws: porosity, blowholes, inclusions | All materials; radiation hazard |

### Past exam questions with solutions

**Q1. RRB JE CBT-2 Mechanical, 29 August 2019.** The metals can be beaten into thin sheets, the property is called \_\_\_\_\_\_\_. (a) Sonority (b) Malleability (c) Ductility (d) Lustre

*Answer: (b).* Malleability is spreading into sheets under hammering or rolling, which are compressive. Ductility, option (c), is being drawn into wire under tension. Sonority is ringing when struck, and lustre is shine.

**Q2. SSC JE Mechanical, 4 March 2017 (Evening).** The property of a material which allows it to be drawn into a smaller section is called- (a) plasticity (b) ductility (c) elasticity (d) malleability

*Answer: (b).* Drawing pulls the metal through a die, a tensile process, so the property is ductility. Malleability is the matching property under compression (sheets), and plasticity is the general ability to deform permanently under any kind of load.

**Q3. DDA JE Civil, 23 April 2018 (Shift 2).** The ability of a material to permanently deform without breaking is called as: (a) Young's modulus (b) Strain hardening (c) Plasticity (d) Brittleness

*Answer: (c).* Plasticity is permanent deformation without fracture. Brittleness is the opposite, breaking with almost no permanent deformation. Strain hardening is the rise in strength that comes with plastic deformation, not the ability to deform.

**Q4. UPPSC AE Mechanical Paper I, 13 December 2020.** Tensile test performed on Universal Testing Machine (UTM) actually measures (a) True Stress and True Strain (b) Young's Modulus and Poisson's ratio (c) Engineering Stress and Engineering Strain (d) Load and Elongation

*Answer: (d).* The machine records only the load and the stretch of the gauge length. Engineering stress and strain are then worked out by dividing by the original area and gauge length. True stress and strain need the actual area as well, and Poisson's ratio needs the sideways strain measured separately.

**Q5. RRB JE CBT-2 Mechanical, 31 August 2019.** In Rockwell hardness testing method, the hardness of a material is measured by- (a) Depth of penetration of indenter (b) Surface area of indention (c) Projected area of indention (d) Height of rebound

*Answer: (a).* Rockwell reads the extra depth the indenter goes in under the major load, so the dial shows the hardness directly. Brinell uses the curved surface area of the dent, option (b), and the Shore scleroscope uses the height of rebound, option (d).

**Q6. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 1).** Which of the following hardness scales uses a diamond cone indenter? (a) Mohs scale (b) Brinell scale (c) Vickers scale (d) Rockwell C scale

*Answer: (d).* The Rockwell C scale uses a 120° diamond cone (the Brale indenter) under 150 kgf, for hardened steel. Vickers also uses a diamond, but shaped as a square-based pyramid, not a cone. Brinell uses a ball, and Mohs is a scratch scale.

**Q7. DSSSB JE Civil, 4 November 2019 (Shift 2).** The maximum stress at which even a billion reversals of stress CANNOT cause failure of the material is called as: (a) endurance limit (b) lower limit (c) factor of safety (d) upper limit

*Answer: (a).* The endurance limit is the stress below which a steel survives any number of reversals: the S-N curve turns flat there. For steel it is about half the ultimate tensile strength. Factor of safety, option (c), is a ratio of failure stress to working stress, not a stress.

**Q8. NPCIL Stipendiary Trainee (Mechanical), 7 November 2019 (Shift 2).** Which of the following is NOT a non-destructive testing? (a) X-ray test (b) Magnetic particle test (c) Dye penetrant test (d) Nick break test

*Answer: (d).* Nick break is a weld test: a notched weld specimen is broken by bending so that its inside can be examined, which destroys the specimen. X-ray, magnetic particle and dye penetrant tests leave the part fit for use.

**Q9. ISRO VSSC Technician-B (Fitter), 2 June 2019.** Ultrasonic testing is done in materials to determine (a) Cracks below the surface (b) Yield strength (c) Ultimate tensile strength (d) Hardness

*Answer: (a).* Sound pulses reflect from any internal flaw, so ultrasonic testing finds cracks, voids and inclusions below the surface and measures thickness. Strength and hardness are found by destructive tests.

**Q10. ISRO URSC Fitter, 3 November 2022.** Which of the following is a non-destructive testing method (a) Metallographic Testing (b) Hardness Testing (c) Stress Testing (d) Radiography

*Answer: (d).* Radiography passes X-rays or gamma rays through the part and shows internal flaws on film without harming it. Metallographic testing needs a cut and polished sample, and a hardness test leaves a dent in the surface.

## Sources

Each question's exam and date come from the booklet or page it was taken from; the solutions are written fresh. The guide has 93 questions: 25 from Kerala PSC, 8 from RRB JE, 10 from SSC JE and 50 from other exams. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. Below they are listed by paper and by the question number in that paper. The other questions come from Testbook solution pages, which name the paper each question appeared in. SSC JE asks few materials questions, so where JE papers had no published question on a point, the question comes from another technical exam at the same level (ISRO, NPCIL, UPRVUNL, RRB ALP trade papers, state PSC AE and lecturer papers, GATE and ESE). A few come from civil engineering JE papers, which ask the same basics. A few slips in the source wording were corrected, as listed at the end.

- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 65/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- Sub-topic 1: [least symmetry](https://testbook.com/question-answer/which-of-the-following-crystal-system-has-the-leas--6a6b37c800bdf856f938e040), [lattice points](https://testbook.com/question-answer/the-effective-number-of-lattice-points-in-the-unit--565fe47003282114ca21dcff), [atomic radius of BCC](https://testbook.com/question-answer/atomic-radius-of-bcc-structure-is-given-by______--5f2c05fcfdeb910d0efcee7c), [packing factors of BCC and FCC](https://testbook.com/question-answer/what-is-the-atomic-packing-factor-for-bcc-and-fcc--608661f1a340fe6a240be2cc), Kerala PSC 050/2023 Q1 (packing factors of FCC and HCP), [highest packing factor](https://testbook.com/question-answer/if-atom-is-assumed-to-a-hard-sphere-then-the-valu--6055c6ca6bf8000fac61a143), [packing fractions to match](https://testbook.com/question-answer/match-the-crystal-structure-in-column-a-with-the-c--6090df0f36977da67c6286a3), Kerala PSC 104/2025 Q43 (HCP metals)
- Sub-topic 2: [not a point defect](https://testbook.com/question-answer/which-of-the-following-is-not-a-point-defect--5f2c06efedec780d1415455f), Kerala PSC 68/2026 Q40 (Schottky defect), [dislocations](https://testbook.com/question-answer/dislocations-present-in-materials-are-________nbs--62da26e35e15e8f0cf667675), Kerala PSC 050/2023 Q3 (edge dislocation), [Burgers vector in screw dislocation](https://testbook.com/question-answer/which-one-of-the-following-is-correct-for-burgerr--60e6de15add8e433b1aae0b8), [twin boundaries](https://testbook.com/question-answer/twin-boundaries-are-which-type-of-crystal-defect--5ff307ee27638931e4bf7ed9), Kerala PSC 050/2023 Q2 (volume defects), Kerala PSC 68/2026 Q43 (fastest diffusing element), Kerala PSC 050/2023 Q4 (diffusion through a sheet)
- Sub-topic 3: [atoms and slip systems in FCC](https://testbook.com/question-answer/the-number-of-atoms-per-unit-cell-and-the-number-o--5dc949ccf60d5d2e3fa0c2ea), [hot working temperature](https://testbook.com/question-answer/in-a-hot-working-process-metals-are-deformed-____--666d56d43546f84d473cbbab), Kerala PSC 104/2025 Q47 (recrystallisation temperature), [recrystallisation behaviour](https://testbook.com/question-answer/the-recrystallization-behaviour-of-a-particular-me--5ea3eb1bf60d5d53736fa023), [hot working statements](https://testbook.com/question-answer/which-of-the-following-statements-is-true-about-ho--6530a51ed06bd7c52cc336a9), [not an advantage of hot working](https://testbook.com/question-answer/which-of-the-following-is-not-an-advantage-of-hot--62dd1d78a3d7fe8972df5220), [cold working assertion](https://testbook.com/question-answer/assertion-a-cold-working-increases-the-strength--6946c9b7334f851795496f0e), Kerala PSC 68/2026 Q77 (grain size)
- Sub-topic 4: [carbon in iron](https://testbook.com/question-answer/very-small-quantity-of-carbon-in-iron-as-in-steels--5ea022d0f60d5d7ffaca2c09), Kerala PSC 050/2023 Q6 (Hume-Rothery rules), [solid solubility factors](https://testbook.com/question-answer/which-of-the-following-features-of-atoms-determine--5f086d60172ee70d09ef5ea0), [eutectic system](https://testbook.com/question-answer/in-a-eutectic-system-two-elements-are-completely--5616b206cac3ae6685c46150), [invariant reaction](https://testbook.com/question-answer/the-invariant-reaction-involving-a-liquid-phase-de--684fcbaf5ebdb32d561c92cc), Kerala PSC 104/2025 Q40 (Gibbs phase rule), [lever rule](https://testbook.com/question-answer/in-a-binary-system-of-a-and-b-a-liquid-of-20-a--5e0a12bb177ed30d039e5d0b), [phase diagram statements](https://testbook.com/question-answer/which-one-of-the-following-statements-about-a-phas--5eac1e51f60d5d0638b40aee)
- Sub-topic 5: [iron on solidification](https://testbook.com/question-answer/when-solidification-starts-iron-will-appear-in-__--5ffb0d69173922702366f6b3), [structure of gamma iron](https://testbook.com/question-answer/iron-has-______-structure--6013acbebba3bd9b434f7e7e), Kerala PSC 104/2025 Q37 (delta iron), [austenite](https://testbook.com/question-answer/austenite-is-a-solid-solution-of-carbon-in-____-ir--580f6236995a2d70d5eda914), Kerala PSC 050/2023 Q5 (austenite), [phase not in the diagram](https://testbook.com/question-answer/which-of-the-following-phase-of-steel-is-not-prese--6463370f629b7ea800747ee8), Kerala PSC 050/2023 Q7 (eutectic reaction), [eutectoid temperature](https://testbook.com/question-answer/the-eutectoid-reaction-in-the-iron-carbon-diagram--69accb9a4f9842755dcc1806), [ferrite and cementite](https://testbook.com/question-answer/when-austenite-decomposes-upon-cooling-into-two-ph--609b70f2b33cd78b55589111), Kerala PSC 68/2026 Q42 (pearlite in 0.55% C steel)
- Sub-topic 6: [purpose of annealing](https://testbook.com/question-answer/what-is-the-purpose-of-annealing-process--5fcce1a655ee08b77175d99e), [annealing of heavy castings](https://testbook.com/question-answer/which-annealing-process-is-carried-out-in-a-heavy--5f2faf297641d30d0a616c96), [globular pearlite](https://testbook.com/question-answer/the-process-of-producing-a-structure-of-globular-p--62dd01f492668083268f1ff6), Kerala PSC 65/2026 Q53 (normalising), [quench media](https://testbook.com/question-answer/which-of-the-following-is-the-quench-media-with-hi--5f8529a85d9a116c5ded2380), Kerala PSC 050/2023 Q9 (martensite), [aim of tempering](https://testbook.com/question-answer/the-aim-of-the-tempering-heat-treatment-is-to-redu--628cd4c01b1156614b477289), [tempering temperature](https://testbook.com/question-answer/in-tempering-process-the-steel-is-heated-to-a-temp--6076a43031d01222fa91c755), [TTT curves](https://testbook.com/question-answer/ttt-curves-are-________-curves--601133bbe0dc4a98114b7104), Kerala PSC 104/2025 Q39 (TTT diagram), Kerala PSC 050/2023 Q12 (Jominy test)
- Sub-topic 7: [case hardening](https://testbook.com/question-answer/case-hardening-of-steel--5fa2802f3b905d8f44f3edef), [not a case hardening process](https://testbook.com/question-answer/which-of-the-following-is-not-a-case-hardening-pro--6a6b37d26d0106083b53f498), Kerala PSC 104/2025 Q44 (cyaniding and nitriding), [pack carburising](https://testbook.com/question-answer/the-type-of-case-hardening-using-50-charcoal-bac--60745d48149d2a4d17da90fb), [gas carburising](https://testbook.com/question-answer/which-carburising-method-has-high-production-rate--5f2fed0680e56a0d095b5043), [carbon and nitrogen](https://testbook.com/question-answer/in-which-of-the-following-process-does-mild-steel--62215dfba67a21bccfea092b), [no quench needed](https://testbook.com/question-answer/quenching-is-not-necessary-when-hardening-is-done--6220a8efbbc9da307c395431), [shot peening](https://testbook.com/question-answer/shot-peening-is-the-process-used-for--65e31ab0ccac722d600c2a54)
- Sub-topic 8: [mild steel](https://testbook.com/question-answer/what-is-carbon-content-in-mild-steel--5f30ed4435b5050d10cd6090), [highest yield strength](https://testbook.com/question-answer/which-of-the-following-alloys-of-iron-and-carbon-h--637f2eb73af3242b63668082), [limits of plain carbon steel](https://testbook.com/question-answer/the-limitations-of-plain-carbon-steels-include--5f7b06850d84d9b710086777), Kerala PSC 65/2026 Q57 (18-4-1 HSS), Kerala PSC 65/2026 Q60 (corrosion resistance), [austenitic stainless steel](https://testbook.com/question-answer/the-austenitic-stainless-steel-contains--5a13fae6e9c93d0f1c1530bd), [carbon in cast iron](https://testbook.com/question-answer/minimum-percentage-of-carbon-in-cast-iron-is--63036922abb5493ce091a9f6), [white cast iron](https://testbook.com/question-answer/the-cast-iron-which-possesses-all-the-carbon-in-th--6033a72b5aa57e85d4bcda7d), Kerala PSC 050/2023 Q10 (grey cast iron), [malleable cast iron](https://testbook.com/question-answer/malleable-cast-iron-is-produced--622081e3e46fd4be6496f012), [spheroidal graphite cast iron](https://testbook.com/question-answer/______-is-also-called-spheroidal-graphite-cast-iro--609ac9235dcd1ef4ac806744), [hardest cast iron](https://testbook.com/question-answer/the-variety-of-cast-iron-which-has-maximum-hardnes--5ef9dd5213ffe00d10141fce)
- Sub-topic 9: [brass](https://testbook.com/question-answer/the-alloy-of-copper-and-zinc-is-known-as-________--5f560c0befefe18e9d2d775e), [gun metal](https://testbook.com/question-answer/what-is-the-composition-of-gunmetal--63d5025a5f2867aaf994e69c), [phosphor bronze](https://testbook.com/question-answer/the-major-constituent-of-phosphor-bronze-is--5fbe94e9cd9fcdad0da75d13), [precipitation hardening](https://testbook.com/question-answer/precipitation-hardening-is-applicable-for--5f4cb0a2fea58454670fae90), [babbitt metal](https://testbook.com/question-answer/babbit-metal-is-an-alloy-of--61cdb87a2bd7bc05b216ee94), [Invar](https://testbook.com/question-answer/the-iron-nickel-alloy-which-contains-40-50-of-n--6a6b37d340e4cb53c617a3d6), Kerala PSC 65/2026 Q55 (Nimonic), Kerala PSC 050/2023 Q11 (bone implants), [thermosetting plastic](https://testbook.com/question-answer/which-among-the-following-is-an-example-of-thermos--5f325ddeda19e10d14d632b7)
- Sub-topic 10: [malleability](https://testbook.com/question-answer/the-metals-can-be-beaten-into-thin-sheets-the-pro--5f32475fd94e610d1407b603), [ductility](https://testbook.com/question-answer/the-property-of-a-material-which-allows-it-to-be-d--5e4d1828f60d5d5ca4407e57), [plasticity](https://testbook.com/question-answer/the-ability-of-a-material-to-permanently-deform-wi--629cc1bfd2c0f7eabe6f4fdd), [what a UTM measures](https://testbook.com/question-answer/tensile-test-performed-on-universal-testing-machin--5ffbfad0f19224121bc3b820), [Rockwell test](https://testbook.com/question-answer/in-rockwell-hardness-testing-method-the-hardness--5f6432023c61d5352b1c4fea), [diamond cone indenter](https://testbook.com/question-answer/which-of-the-following-hardness-scales-uses-a-diam--6810763e371fe045eafa36a1), [endurance limit](https://testbook.com/question-answer/the-maximum-stress-at-which-even-a-billion-reversa--61dbe4d801bee7ae86e999b4), [nick break test](https://testbook.com/question-answer/which-of-the-following-is-not-a-non-destructive-te--5fbcbff00ebe665b32106745), [ultrasonic testing](https://testbook.com/question-answer/ultrasonic-testing-is-done-in-materials-to-determi--5f8729932f25706445c5a7ad), [radiography](https://testbook.com/question-answer/which-of-the-following-is-a-non-destructive-testin--639b06de55090a0370d90c4c)
- Wording changes: Kerala PSC options are lettered (a) to (d) here instead of A to D, and their typing slips are fixed. In sub-topic 3, Q3 reads "the strained metal is heated" for "the strained is heated". In sub-topic 4, Q6 reads "How is the Gibbs phase rule of a general system represented?" for "How respresented the Gibbs phase rule of general system?", with "degrees" and "phases" for "degree" and "phase" and the three brackets joined into one. In sub-topic 5, Q3 reads "The temperature range in which delta iron is formed is" for "The temperature at which the delta iron formed at range". In sub-topic 6, Q10 spells Austenite for "Austnite". Of the Testbook questions, sub-topic 1 Q6 reads "If an atom is assumed to be a hard sphere" for "If atom is assumed to a hard sphere", and sub-topic 1 Q7 reads "the packing fraction" for "the corresponding packing fractions" and spells centred for "centered". Capital letters, small punctuation and units written with superscripts (m² for m 2, 10⁻⁸ for 10–8) are not listed one by one.
