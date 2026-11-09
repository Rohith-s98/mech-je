# Engineering Mechanics and SOM Study Guide

Nov 9, 2026 · @Rohith

## How to use this guide

Engineering Mechanics and Strength of Materials (SOM) is the third-ranked subject in your topic map, at about 15% of technical questions across RRB JE, SSC JE and Kerala PSC AE. In RRB JE it is about 21 of every 100 technical questions (SOM about 13, mechanics about 8). Finish it in about 18 study days, one sub-topic at a time, in the order below.

Most questions are short numericals: one formula and two or three lines of working. So the formulas block in each section is the part to drill until you can write it from memory. Mechanics comes first because centroid and moment of inertia are needed again for bending, deflection, torsion and columns.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the formulas you must memorise), and real questions from past papers (mostly 2019–2026) with worked solutions. Questions are tagged with the exam and year they appeared in.

| # | Sub-topic | Days | How often it is asked |
| --- | --- | --- | --- |
| 1 | Forces, friction, centroid and moment of inertia | 2 | Every paper; part of about 8 mechanics Qs in RRB JE |
| 2 | Dynamics: laws of motion, work and energy, projectiles | 1 | Regular |
| 3 | Stress, strain, Hooke's law and elastic constants | 2 | Every paper |
| 4 | Thermal stress and composite bars | 1 | Regular |
| 5 | Shear force and bending moment diagrams | 3 | Every paper |
| 6 | Bending and shear stress in beams | 2 | Every paper |
| 7 | Deflection of beams | 2 | Regular |
| 8 | Torsion of shafts | 2 | Every paper |
| 9 | Columns: Euler's formula and effective length | 1 | Regular |
| 10 | Principal stresses and Mohr's circle | 1 | Regular |
| 11 | Thin cylinders and springs | 1 | Regular |

Method per sub-topic: read the contents, write the formulas on one page, solve the past questions without looking, then check the solutions.

## 1. Forces, friction, centroid and moment of inertia

This is the statics half of mechanics, and its questions are one-step: resolve forces, apply one friction law, or recall one standard centroid or moment of inertia. Learn the standard values in the tables as a list; they come back in bending, deflection and torsion.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Resultant of two forces | Two forces P and Q at angle θ combine by the parallelogram law. Equal forces F at angle θ give R = 2F cos(θ/2). |
| Resolution of forces | Split each force into F cos θ and F sin θ. Add all x parts and all y parts; the resultant is the square root of their squares added, and its direction comes from the signs. |
| Conditions of equilibrium | A body is in equilibrium when ΣFx = 0, ΣFy = 0 and ΣM = 0. Stable equilibrium returns after a small push, unstable moves further away, neutral stays in the new position. |
| Lami's theorem | Three coplanar, concurrent forces in equilibrium: each force is proportional to the sine of the angle between the other two. |
| Moment and Varignon's theorem | Moment = force × perpendicular distance. Varignon: the moment of the resultant about a point equals the algebraic sum of the moments of the components about that point. |
| Couple | Two equal, opposite, parallel forces not on one line. It only rotates the body. Its moment (force × arm) is the same about every point, and no single force can balance it. |
| Laws of dry (Coulomb) friction | Limiting friction F = μN. It does not depend on the contact area. Below the limit, friction equals the applied force, not μN. Static μ is greater than kinetic μ, and rolling friction is far smaller than both. |
| Angle of friction and angle of repose | Angle of friction φ is between the normal reaction and the resultant of N and F, so tan φ = μ. Angle of repose is the steepest slope a body rests on without sliding; it equals φ. |
| Ladder problems | Friction opposes the slip that would happen. A ladder's foot tends to slide away from the wall, so floor friction points towards the wall; at a rough wall, friction acts upward at the top. |
| Centroid and centre of gravity | Centroid is the geometric centre of an area and depends only on shape. Centre of gravity is where the weight acts; for a uniform body the two coincide. |
| Standard centroids | Rectangle: where the diagonals cross. Triangle: h/3 from the base. Semicircle: 4r/3π from the diameter. Solid hemisphere: 3r/8 from the flat face. Solid cone: h/4 from the base. Hollow cone: h/3 from the base. |
| Moment of inertia of an area | I = Σ y² dA, in mm⁴. It measures how far the area is spread from an axis, and it is least about the centroidal axis. |
| Parallel and perpendicular axis theorems | Parallel axis: I about any axis = I about the parallel centroidal axis + A h². Perpendicular axis (plane areas): Izz = Ixx + Iyy, which gives the polar moment J. |
| Radius of gyration | k = √(I/A): the distance at which the whole area could sit and give the same I. |
| Standard area moments of inertia | Rectangle: bd³/12 about its centroid, bd³/3 about its base. Triangle: bh³/36 about its centroid, bh³/12 about its base, bh³/4 about an axis through the apex. Circle: πd⁴/64. Semicircle: πr⁴/8 about the diameter, 0.11r⁴ about its own centroid. |
| Standard mass moments of inertia | Thin rod: ml²/12 about its middle, ml²/3 about one end. Disc: mr²/2. Ring: mr². Solid sphere: 2mr²/5. Thin spherical shell: 2mr²/3. |

### Formulas to memorise

```math
R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta} \qquad \tan\alpha = \frac{Q\sin\theta}{P + Q\cos\theta}
```

```math
\frac{P}{\sin\alpha} = \frac{Q}{\sin\beta} = \frac{R}{\sin\gamma} \quad \text{(Lami's theorem)}
```

```math
F_{lim} = \mu N \qquad \mu = \tan\phi \qquad \text{angle of repose} = \phi
```

```math
\bar{x} = \frac{\sum A_i x_i}{\sum A_i} \qquad \bar{y} = \frac{\sum A_i y_i}{\sum A_i}
```

```math
I_{AB} = I_G + A h^2 \qquad I_{zz} = I_{xx} + I_{yy} \qquad k = \sqrt{I / A}
```

```math
I_{rect} = \frac{bd^3}{12} \qquad I_{tri} = \frac{bh^3}{36} \qquad I_{circle} = \frac{\pi d^4}{64} \qquad J_{circle} = \frac{\pi d^4}{32}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** What does the location of a centroid primarily depend on? (a) Mass only (b) Shape (c) Weight only (d) Volume only

*Answer: (b).* The centroid is a geometric point fixed by how the area is laid out. Mass and weight decide the centre of gravity, which matches the centroid only for a uniform body.

**Q2. SSC JE Mechanical, 7 June 2024 (Shift 2).** The correct relationship between the coefficient of friction (µ) and the angle of friction (ɸ) is: (a) µ = cot ɸ (b) µ = tan ɸ (c) µ = sin ɸ (d) µ = cos ɸ

*Answer: (b).* The angle of friction lies between N and the resultant of N and F. So tan ɸ = F/N = µ.

**Q3. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** A block is resting on an inclined plane. The block starts slipping when the angle of plane is increased to 30° from the horizontal. The coefficient of friction is: (a) √3 (b) 0.5 (c) 1/√3 (d) 0.3

*Answer: (c).* 30° is the angle of repose, which equals the angle of friction. So µ = tan 30° = 1/√3 ≈ 0.577.

**Q4. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** A body of weight 600 N placed on a horizontal surface is subjected to a horizontal force of 80 N. If the coefficient of static friction is 0.25 and the coefficient of dynamic friction is 0.20, then the friction force is: (a) 80 N (b) 150 N (c) 120 N (d) None of the above

*Answer: (a).* Limiting friction is 0.25 × 600 = 150 N. The push of 80 N is below that, so the body does not move and friction only matches the push: 80 N. Use µN only when the body is about to slide or is sliding.

**Q5. RRB JE CBT-2 Mechanical, 2 July 2026.** Given are four concurrent forces: 10 N east, 20 N north, 15 N west, 25 N south. What is the direction of the resultant force? (a) North-east (b) North-west (c) South-east (d) South-west

*Answer: (d).* East–west: 10 − 15 = −5 N, so 5 N west. North–south: 20 − 25 = −5 N, so 5 N south. Equal west and south parts give a resultant of 5√2 N towards the south-west.

**Q6. SSC JE CBT-II Mechanical, 7 April 2026.** Varignon's principle of moments states that the moment of the resultant force about any point equals: (a) the moment of the largest force about that point (b) the sum of moments of only the parallel forces about that point (c) the algebraic sum of the moments of all the component forces about the same point (d) the product of the resultant force and the distance of its point of application

*Answer: (c).* That is the statement of Varignon's theorem. It lets you find where the resultant acts: divide the total moment by the resultant.

**Q7. Oil India Senior Officer (Mechanical), 4 March 2024.** Find the moment of inertia of a triangular section about an axis through its vertex and parallel to the base (b = base, h = height). (a) bh³/12 (b) bh³/4 (c) bh³/36 (d) bh³/8

*Answer: (b).* The centroid is 2h/3 from the vertex. Parallel axis: I = bh³/36 + (bh/2)(2h/3)² = bh³/36 + 8bh³/36 = bh³/4.

**Q8. DRDO CEPTAM Tier-II STA-B Mechanical, 15 June 2026.** A semi-circular lamina of radius 11 cm has its diameter along the x-axis. The distance of its centroid from the curved edge, along the radial line perpendicular to the diameter, is: (a) 2.33 cm (b) 4.66 cm (c) 6.34 cm (d) 3.17 cm

*Answer: (c).* The centroid is 4r/3π = 44/9.42 ≈ 4.67 cm from the diameter. The curved edge is r = 11 cm from the diameter, so the gap is 11 − 4.67 ≈ 6.33 cm; the nearest option is 6.34 cm. Option (b) is the trap: it is the distance from the diameter.

## 2. Dynamics: laws of motion, work and energy, projectiles

Dynamics questions come in three kinds: a definition (D'Alembert, impulse), one equation of motion, or one projectile formula. JE papers ask fewer of these than statics questions, but each is quick marks once the formulas below are fixed.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Newton's laws | First law: a body keeps its state of rest or uniform motion unless a force acts (inertia). Second law: force = rate of change of momentum = ma. Third law: action and reaction are equal and opposite, and act on different bodies. |
| Equations of motion | For constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as. A retardation is a negative a. Free fall uses a = g. |
| Momentum and impulse | Momentum p = mv. Impulse = force × time = change in momentum, in N·s. A large force for a short time (a hammer blow) is handled as an impulse. |
| Conservation of momentum | With no external force, total momentum stays the same. This solves collisions, explosions and gun recoil. |
| Collisions | Coefficient of restitution e = speed of separation / speed of approach. e = 1: perfectly elastic, kinetic energy kept. 0 < e < 1: inelastic. e = 0: perfectly plastic, the bodies move on together and the kinetic energy loss is the largest. |
| D'Alembert's principle | Add an inertia force −ma (and an inertia couple −Iα) to the real forces. The moving body can then be solved like a static one, because F + (−ma) = 0. |
| Work, energy and power | Work = F s cos θ, in J. Kinetic energy ½mv², potential energy mgh. Work–energy principle: net work done = change in kinetic energy. Power = work per second = F × v, in W. |
| Momentum against kinetic energy | p = √(2m × KE). With equal kinetic energy, the heavier body has more momentum; with equal momentum, the lighter body has more kinetic energy. |
| Projectile motion | The horizontal velocity u cos θ stays constant; the vertical velocity u sin θ is slowed by g. The path is a parabola, and at the highest point only u cos θ is left. |
| Projectile results | Range is largest at 45°. Angles θ and (90° − θ) give the same range. Height is largest when fired straight up (90°). |
| Circular motion | v = ωr. Centripetal acceleration v²/r = ω²r points to the centre; centripetal force = mv²/r. |

### Formulas to memorise

```math
v = u + at \qquad s = ut + \tfrac{1}{2}at^2 \qquad v^2 = u^2 + 2as
```

```math
p = mv \qquad F\,\Delta t = m(v - u) \qquad m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2
```

```math
e = \frac{v_2 - v_1}{u_1 - u_2} \quad \text{(separation / approach)}
```

```math
W = Fs\cos\theta \qquad KE = \tfrac{1}{2}mv^2 \qquad PE = mgh \qquad P = Fv \qquad p = \sqrt{2m\,KE}
```

```math
T = \frac{2u\sin\theta}{g} \qquad H = \frac{u^2\sin^2\theta}{2g} \qquad R = \frac{u^2\sin 2\theta}{g} \qquad R_{max} = \frac{u^2}{g}
```

```math
a_c = \frac{v^2}{r} = \omega^2 r \qquad v = \omega r
```

### Past exam questions with solutions

**Q1. RRB JE CBT-2 Mechanical, 2 July 2026.** Which of the following is a necessary modification in Newton's second law to derive D'Alembert's principle for a dynamic system? (a) Include only gravitational forces in the analysis (b) Incorporate a fictitious force equal to "minus mass times acceleration" (c) Replace all forces with their average values (d) Omit all resistive forces acting on the system

*Answer: (b).* F = ma is rewritten as F + (−ma) = 0. The added term −ma is the inertia force, and with it the body is in dynamic equilibrium, so statics methods work.

**Q2. SSC JE Mechanical, 3 March 2017 (Morning).** If a light and a heavy body have an equal kinetic energy of translation, then: (a) the lighter body will have smaller momentum (b) the heavy body will have smaller momentum (c) both will have the same momentum (d) unpredictable

*Answer: (a).* p = √(2m × KE). With the same kinetic energy, momentum grows with √m, so the lighter body has less.

**Q3. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** The brakes of a train reduce its speed from 60 km/hr to 20 km/hr while it travels 200 m. Assuming a constant retarding force, how much more time will it take to come to rest? (a) 11 seconds (b) 9 seconds (c) 8 seconds (d) 10 seconds

*Answer: (b).* 60 km/hr = 16.67 m/s and 20 km/hr = 5.56 m/s. From v² = u² − 2as: a = (277.8 − 30.9)/400 = 0.617 m/s². Time from 5.56 m/s to rest = 5.56/0.617 = 9 s.

**Q4. JKSSB JE Civil, 6 December 2022 (Shift 1).** What is the power required to move an object with a velocity of 18 m/s and a force of 24 kN? (a) 432 kW (b) 43.2 kW (c) 368 kW (d) 36.8 kW

*Answer: (a).* P = F × v = 24,000 × 18 = 432,000 W = 432 kW.

**Q5. WBMSC Sub-Assistant Engineer Civil, 5 June 2022.** For a maximum horizontal range of a projectile, the angle of projection should be: (a) 30° (b) 45° (c) 60° (d) 75°

*Answer: (b).* R = u² sin 2θ / g is largest when sin 2θ = 1, that is 2θ = 90° and θ = 45°.

**Q6. UPPSC AE Mechanical 2022 (Paper I, held 29 May 2022).** A projectile is fired at an angle of 30° from the horizontal with a speed of V₀ m/s. The maximum height attained by the projectile is: (a) V₀²/2g (b) V₀²/8g (c) V₀²/4g (d) V₀²/6g

*Answer: (b).* H = V₀² sin²θ / 2g. sin 30° = 1/2, so sin² 30° = 1/4 and H = V₀²/8g.

**Q7. PGCIL Diploma Trainee Electrical, 12 March 2022.** The range of a projectile is double the maximum height attained. Find the angle of projection. (a) cot⁻¹(2) (b) sin⁻¹(2) (c) cos⁻¹(2) (d) tan⁻¹(2)

*Answer: (d).* R = 2u² sinθ cosθ / g and 2H = u² sin²θ / g. Setting them equal gives 2 cosθ = sinθ, so tanθ = 2. Note that (b) and (c) are impossible, since sine and cosine never exceed 1.

## 3. Stress, strain, Hooke's law and elastic constants

This is the base of every SOM topic and the most-asked sub-topic in SSC JE 2025: the 3 December paper alone asked five questions from it. Expect one PL/AE numerical, one elastic-constant relation, and one stress–strain curve definition.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Stress | Internal resisting force per unit area, σ = P/A, in N/mm² (= MPa). Normal stress is tensile or compressive and acts at right angles to the face; shear stress acts along the face. |
| Strain | Change in length divided by original length, with no unit. Shear strain is the angle of distortion in radians: sideways shift divided by height. |
| Hooke's law and E | Within the elastic limit, stress is proportional to strain: σ = Eε. Young's modulus E is the slope of the straight part of the stress–strain curve; for steel it is about 200 GPa. |
| Stress–strain curve of mild steel | Limit of proportionality, elastic limit, upper and lower yield points, ultimate stress (the highest point), necking, then fracture. Brittle materials such as cast iron show no yield point and break close to the ultimate stress. |
| Elongation of bars | Uniform bar: δ = PL/AE. Stepped bar: add PL/AE for each part. Tapered round bar: 4PL/(πE d₁d₂). Bar hanging under its own weight: γL²/2E, half of what the same weight would cause if hung at the end. |
| Poisson's ratio μ | Lateral strain divided by longitudinal strain, within the elastic limit. It lies between 0 and 0.5: steel about 0.3, rubber close to 0.5, cork close to 0. |
| Elastic constants E, G, K | E: direct stress / direct strain. G (modulus of rigidity): shear stress / shear strain. K (bulk modulus): all-round stress / volumetric strain. An isotropic material has only two independent elastic constants; the other two follow from them. |
| Volumetric strain | Change in volume / original volume. Under three stresses it is (σx + σy + σz)(1 − 2μ)/E. For a bar under axial load it is ε(1 − 2μ). |
| Complementary shear stress | A shear stress on one pair of faces always comes with an equal shear stress on the perpendicular pair of faces. |
| Gradual, sudden and impact loads | A gradually applied load gives σ = P/A. A suddenly applied load gives twice that, 2P/A. A falling load gives more still, from the impact formula below. |
| Strain energy and resilience | Strain energy U = σ²/2E × volume. Proof resilience is the strain energy stored at the elastic limit; modulus of resilience is that value per unit volume. |
| Material properties | Toughness: energy absorbed up to fracture, the whole area under the curve; it lets a material take shock loads. Ductility: can be drawn into wire. Malleability: can be beaten into sheets. Brittleness: breaks with little deformation. |
| Factor of safety | Failure stress (yield for ductile, ultimate for brittle materials) divided by the working stress. |

### Formulas to memorise

```math
\sigma = \frac{P}{A} \qquad \varepsilon = \frac{\delta L}{L} \qquad \sigma = E\varepsilon \qquad \delta L = \frac{PL}{AE}
```

```math
\delta_{taper} = \frac{4PL}{\pi E d_1 d_2} \qquad \delta_{self\ weight} = \frac{\gamma L^2}{2E} = \frac{WL}{2AE}
```

```math
\mu = \frac{\text{lateral strain}}{\text{longitudinal strain}} \qquad E = 2G(1 + \mu) = 3K(1 - 2\mu) \qquad E = \frac{9KG}{3K + G}
```

```math
\varepsilon_v = \frac{(\sigma_x + \sigma_y + \sigma_z)(1 - 2\mu)}{E}
```

```math
\sigma_{sudden} = \frac{2P}{A} \qquad \sigma_{impact} = \frac{P}{A}\left[1 + \sqrt{1 + \frac{2AEh}{PL}}\right] \qquad U = \frac{\sigma^2}{2E} \times V
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 3 December 2025 (Shift 2).** What does Hooke's Law state? (a) Stress is directly proportional to strain within the plastic limit (b) Stress is directly proportional to strain within the elastic limit (c) Stress is directly proportional to strain at the upper yield point (d) Stress is directly proportional to strain at the fracture point

*Answer: (b).* Hooke's law holds only on the straight, elastic part of the curve, where σ = Eε. Past the elastic limit, strain grows faster than stress and part of it stays after unloading.

**Q2. SSC JE Mechanical, 3 December 2025 (Shift 2).** A bar 2 m long stretches by 1 mm under an axial tensile load. What is the strain in the bar? (a) 0.001 (b) 0.0005 (c) 0.0001 (d) 0.005

*Answer: (b).* Put both lengths in the same unit first: strain = 1 mm / 2000 mm = 0.0005.

**Q3. SSC JE Mechanical, 5 December 2025 (Shift 2).** A mild steel wire is 5 mm in diameter and 1 m long. If it is subjected to an axial tensile load of 10 kN, what is the extension of the wire? (E = 200 GPa) (a) 6.55 mm (b) 4.55 mm (c) 2.55 mm (d) 3.55 mm

*Answer: (c).* A = π × 5²/4 = 19.63 mm². δ = PL/AE = (10,000 × 1000) / (19.63 × 200,000) = 2.55 mm. Work in N, mm and N/mm² (200 GPa = 200,000 N/mm²) and the answer comes out in mm.

**Q4. SSC JE Mechanical, 3 December 2025 (Shift 2).** What is the formula for elongation (Δ) of a tapered circular rod subjected to an axial load? (a) 6PL/(πE d₁d₂) (b) 4QL/(πE d₁d₂) (c) 5PL/(πE d₁d₃) (d) 4PL/(πE d₁d₂)

*Answer: (d).* It is PL/AE with the area taken as πd₁d₂/4, so Δ = 4PL/(πE d₁d₂). If d₁ = d₂ it becomes the ordinary 4PL/(πEd²), a quick check.

**Q5. SSC JE Mechanical, 3 December 2025 (Shift 2).** What is the relation among the three elastic constants, where E is the elastic modulus, G is the rigidity modulus and K is the bulk modulus? (a) E = 2G(1 + μ) (b) E = 9KG/(G + 3K) (c) E = 2G(1 − μ) (d) E = 3K(1 − 2μ)

*Answer: (b).* Only (b) uses E, G and K together with no μ. It comes from eliminating μ between E = 2G(1 + μ) and E = 3K(1 − 2μ).

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2).** If the modulus of elasticity E = 206 GPa and the shear modulus G = 78 GPa, determine the Poisson's ratio μ and the corresponding bulk modulus K. (a) 0.15, 170.74 GPa (b) 0.15, 160.74 GPa (c) 0.32, 180.74 GPa (d) 0.32, 190.74 GPa

*Answer: (d).* μ = E/2G − 1 = 206/156 − 1 = 0.32. Then K = E / 3(1 − 2μ) = 206 / (3 × 0.36) = 190.74 GPa.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A tensile test specimen of radius 2 cm recorded an extension of 0.45 mm under an axial pull of 200 kN on a gauge length of 150 mm, and a decrease of 0.024 mm in diameter. The Poisson's ratio of the material will be: (a) 0.2 (b) 0.3 (c) 0.4 (d) None of these

*Answer: (a).* Lateral strain = 0.024 / 40 = 0.0006 (the diameter is 40 mm, not the 20 mm radius). Longitudinal strain = 0.45 / 150 = 0.003. μ = 0.0006 / 0.003 = 0.2. The 200 kN load is not needed.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** A square bar of 40 mm size is subjected to a sudden tensile load of 80 kN. The instantaneous stress induced in the bar, in MPa, will be: (a) 50 (b) 100 (c) 200 (d) 150

*Answer: (b).* A = 40 × 40 = 1600 mm². A gradual load would give 80,000/1600 = 50 MPa; a sudden load gives twice that, 100 MPa.

**Q9. SSC JE Mechanical, 5 December 2025 (Shift 2).** What is toughness in materials? (a) The property that prevents a material from regaining its original shape and size after the loads are removed (b) The property that allows a material to be extended in two directions or drawn into thin sheets (c) The property that allows no deformation before failure (d) The property of a material to resist sudden or shock loads without fracturing

*Answer: (d).* Toughness is the energy a material absorbs before it breaks, the whole area under its stress–strain curve. Option (a) describes plasticity, (b) malleability and (c) brittleness.

## 4. Thermal stress and composite bars

Thermal stress needs one formula, σ = EαΔT, plus the rule that a free bar has no stress at all. Composite bars need one more idea: the bars are joined, so they stretch by the same amount. Most questions test the sign (tension or compression) rather than a long calculation.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Free thermal expansion | A bar heated by ΔT grows by αLΔT. If nothing stops it, no stress develops at all. |
| Fully restrained bar | If rigid supports stop the expansion, the stress is EαΔT. Heating gives compression (the bar may buckle); cooling gives tension. The stress does not depend on length or area, but the force on the supports, EαΔT × A, does. |
| Partly restrained bar | If a gap Δ lets the bar expand part of the way, only the blocked part makes stress: σ = E(αLΔT − Δ)/L. If αLΔT is smaller than the gap, there is no stress. |
| Typical values of α | Steel about 12 × 10⁻⁶ /°C, copper about 17 × 10⁻⁶ /°C, aluminium about 23 × 10⁻⁶ /°C. Copper and brass expand more than steel. |
| Composite bar under load | Two materials joined side by side share a load. They stretch equally, so σ₁/E₁ = σ₂/E₂, and the stiffer material carries the higher stress. The ratio E₁/E₂ is the modular ratio. |
| Composite bar heated | The metal with the larger α wants to grow more, so the other holds it back. The larger-α metal (copper) goes into compression and the smaller-α metal (steel) into tension. The two forces are equal and opposite. |
| Bars in series | Bars end to end carry the same force; their extensions add up. |
| Statically indeterminate problems | Equilibrium alone is not enough. Add a compatibility condition (equal extension, or total extension = gap) to solve them. |

### Formulas to memorise

```math
\delta_{free} = \alpha L \Delta T \qquad \sigma_{th} = E\alpha\Delta T
```

```math
\sigma_{partial} = \frac{E(\alpha L \Delta T - \Delta)}{L}
```

```math
\frac{\sigma_1}{E_1} = \frac{\sigma_2}{E_2} \qquad P = \sigma_1 A_1 + \sigma_2 A_2 \quad \text{(composite bar under load)}
```

```math
\sigma_s A_s = \sigma_c A_c \qquad \frac{\sigma_s}{E_s} + \frac{\sigma_c}{E_c} = (\alpha_c - \alpha_s)\Delta T \quad \text{(composite bar heated)}
```

### Past exam questions with solutions

**Q1. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2).** A steel bar (E = 200 GPa, α = 12 × 10⁻⁶ /°C) expands by 0.3 mm due to a temperature increase. If its original length is 15 cm, what is the temperature rise? (a) 166.6°C (b) 100°C (c) 180°C (d) 120.6°C

*Answer: (a).* ΔT = δ / (αL) = 0.3 / (12 × 10⁻⁶ × 150) = 0.3 / 0.0018 = 166.7°C. E is not needed, because the bar is free to expand.

**Q2. RRB JE CBT-2 (CMA), 2 July 2026.** A metal rod is tightly fitted between two rigid walls at room temperature. If the temperature increases, which outcome is most likely? (a) The rod will remain unaffected by the temperature change (b) The rod will be under tensile stress and stretch (c) The rod will experience compressive stress and may buckle (d) The rod will freely increase in length without stress

*Answer: (c).* The walls push back on the rod as it tries to grow, so it carries a compressive stress EαΔT. A long, slender rod under that compression can buckle.

**Q3. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** If a material expands freely due to uniform heating, it will develop: (a) tensile stress (b) no stress (c) compressive stress (d) shear stress

*Answer: (b).* Thermal stress comes only from blocked expansion. A free bar just grows by αLΔT with zero stress.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A metal bar of uniform cross-section with its ends fixed between two rigid concrete blocks is cooled to ice temperature. Which statement is correct about the stress developed in the bar? (a) The stress depends on the length and area of cross-section of the bar (b) The stress developed is compressive (c) The stress depends on the Young's modulus of the bar (d) The stress is halved if the area of cross-section is doubled

*Answer: (c).* σ = EαΔT contains E, α and ΔT only, so length and area do not matter. Cooling makes the bar try to shrink, so the stress is tensile, not compressive.

**Q5. ESE Civil 2019 (Preliminary).** A steel rod 15 m long is at a temperature of 15°C, with α = 12 × 10⁻⁶ /°C and E = 200 GN/m². When the temperature is raised to 65°C, what is the free expansion of the length, and if this expansion is fully prevented, what is the temperature stress produced? (a) 5 mm and 120 MN/m² (b) 9 mm and 120 MN/m² (c) 5 mm and 150 MN/m² (d) 9 mm and 150 MN/m²

*Answer: (b).* Free expansion = αLΔT = 12 × 10⁻⁶ × 15,000 × 50 = 9 mm. Fully prevented: σ = EαΔT = 200,000 × 12 × 10⁻⁶ × 50 = 120 MN/m².

**Q6. ESE Mechanical 2016 (Paper 2).** A steel rod 10 m long is at a temperature of 20°C. The rod is heated to 60°C. What is the stress induced if the rod is allowed to expand by 4 mm? (α = 12 × 10⁻⁶ /°C, E = 200 GPa) (a) 64 MPa (b) 48 MPa (c) 32 MPa (d) 16 MPa

*Answer: (d).* Free expansion = 12 × 10⁻⁶ × 10,000 × 40 = 4.8 mm. Only 4.8 − 4 = 0.8 mm is blocked, so σ = 200,000 × 0.8 / 10,000 = 16 MPa.

**Q7. DSSSB JE Mechanical, 6 November 2019 (Shift 1).** A steel bar is sandwiched between two copper bars of the same cross-section, and the bars are fixed together at both ends. For a temperature rise, the stress in the steel bar is: (a) compressive, twice that in the copper bar (b) tensile, twice that in the copper bar (c) tensile, half that in the copper bar (d) compressive, half that in the copper bar

*Answer: (b).* Copper has the larger α, so the copper bars are held back (compression) and the steel bar is pulled along (tension). The one steel bar balances two copper bars: σs A = 2σc A, so σs = 2σc.

**Q8. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** In a composite section subjected to a tensile load: (a) the load carried by each individual section is the same as the external load (b) the extensions of the individual sections are different (c) the deformations of the individual sections are equal (d) none of the above

*Answer: (c).* The parts are joined, so they must stretch equally; that is the compatibility condition. The loads they carry add up to the external load, which rules out (a).

## 5. Shear force and bending moment diagrams

Nearly every SFD and BMD question is one of eight standard beams, so learn the standard-cases table by heart. The rest is one rule: each step from load to shear force to bending moment raises the curve's degree by one.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Types of beams | Cantilever (one end fixed), simply supported (pin at one end, roller at the other) and overhanging (runs past a support) are statically determinate: three equations find their reactions. Propped cantilever, fixed and continuous beams are indeterminate. |
| Types of loads | Point load. UDL of w per metre: replace it by wL acting at its middle. Uniformly varying load (triangle): total wL/2, acting at L/3 from the larger end. Applied couple. |
| Shear force (SF) | The algebraic sum of the vertical (transverse) forces on one side of the section. |
| Bending moment (BM) | The algebraic sum of the moments of the forces on one side, taken about the section. Sagging (beam bends concave upward, like a smile) is positive; hogging (concave downward) is negative. A cantilever hogs. |
| Load, SF and BM relations | dM/dx = SF and d(SF)/dx = −w. So the BM is a maximum where the SF is zero or changes sign. A point load makes the SFD jump; a couple makes the BMD jump. |
| Shape rule | No load on a stretch: SF constant, BM straight line. UDL: SF straight sloping line, BM parabola. Uniformly varying load: SF parabola, BM cubic. Only a couple: SF zero, BM constant (rectangle). |
| Point of contraflexure | Where the BM is zero and changes sign; the beam's curvature reverses there, so it is also called the point of inflection. It appears in overhanging, propped and fixed beams, never in a simply supported or cantilever beam with only downward loads. |

**Standard cases**

| Beam and load | Largest SF | Largest BM and where | BMD shape |
| --- | --- | --- | --- |
| Cantilever, point load W at the free end | W | WL, at the fixed end | Triangle |
| Cantilever, UDL w over the whole length | wL | wL²/2, at the fixed end | Parabola |
| Cantilever, load rising from 0 at the free end to w at the fixed end | wL/2 | wL²/6, at the fixed end | Cubic |
| Cantilever, couple M at the free end | 0 | M, the same everywhere | Rectangle |
| Simply supported, central point load W | W/2 | WL/4, at the centre | Triangle |
| Simply supported, point load W at a from A and b from B | Wb/L (at A, if a < b) | Wab/L, under the load | Triangle |
| Simply supported, UDL w over the whole span | wL/2 | wL²/8, at the centre | Parabola |
| Simply supported, load rising from 0 to w | wL/3 (at the heavy end) | wL²/(9√3), at L/√3 from the light end | Cubic |

### Formulas to memorise

```math
\frac{dM}{dx} = V \qquad \frac{dV}{dx} = -w \qquad M_{max} \text{ where } V = 0
```

```math
M_{cantilever} = WL \ \text{(end load)} \qquad M_{cantilever} = \frac{wL^2}{2} \ \text{(UDL)}
```

```math
M_{SS} = \frac{WL}{4} \ \text{(central load)} \qquad M_{SS} = \frac{Wab}{L} \qquad M_{SS} = \frac{wL^2}{8} \ \text{(UDL)}
```

```math
R_A = \frac{Wb}{L} \qquad R_B = \frac{Wa}{L} \quad \text{(take moments about the other support)}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** Shear force at a section of a beam is: (a) the algebraic sum of horizontal forces (axial loads) (b) the algebraic sum of vertical forces (transverse loads) (c) the algebraic sum of moments (d) the sum of all forces

*Answer: (b).* Shear force takes only the transverse forces on one side of the section. The sum of their moments, option (c), is the bending moment.

**Q2. SSC JE Mechanical, 5 December 2025 (Shift 2).** A cantilever beam of length 4 m carries a point load of 5 kN at its free end. What is the bending moment at the fixed end? (a) 30 kNm (b) 20 kNm (c) 40 kNm (d) 50 kNm

*Answer: (b).* M = W × L = 5 × 4 = 20 kNm, the largest value on the beam.

**Q3. SSC JE Mechanical, 3 December 2025 (Shift 2).** A simply supported beam with a span of 6 m carries a uniformly distributed load of 8 kN/m. What is the maximum bending moment? (a) 66 kNm (b) 56 kNm (c) 36 kNm (d) 46 kNm

*Answer: (c).* M = wL²/8 = 8 × 36 / 8 = 36 kNm, at mid-span.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A simply supported beam of span 3 m carries a uniformly distributed load of 4 kN/m over its whole length. The maximum shear force and bending moment will be: (a) 12 kN and 13.5 kN-m (b) 6 kN and 4.5 kN-m (c) 6 kN and 9 kN-m (d) 12 kN and 18 kN-m

*Answer: (b).* Total load = 4 × 3 = 12 kN, so each reaction, and the largest SF, is 6 kN. M = wL²/8 = 4 × 9 / 8 = 4.5 kN-m. Option (a) is the trap: it uses the total load as the shear force.

**Q5. SSC JE Mechanical, 3 December 2025 (Shift 2).** In the bending moment diagram, a sagging moment corresponds to which type of beam deformation? (a) The beam bends into a convex shape (b) The beam bends into a concave shape (c) Bell shape (d) Square shape

*Answer: (b).* Sagging bends the beam concave upward, like a simply supported beam under load. Hogging is the opposite, convex shape, as in a cantilever.

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2).** What is the point of inflection? (a) The section at which the bending moment is zero or changes its sign (b) The section at which the bending moment is non-zero (c) The section where the bending moment is maximum (d) The section where the bending moment is minimum

*Answer: (a).* At this section the BM passes through zero and changes from sagging to hogging, so the curvature reverses. It is the same as the point of contraflexure.

**Q7. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2).** Which of the following beams is classified as a statically determinate beam? (a) Propped cantilever beam (b) Continuous beam (c) Overhanging beam (d) Fixed beam

*Answer: (c).* An overhanging beam has a pin and a roller, so three reactions that the three equilibrium equations can find. The other three beams have more reactions than equations.

**Q8. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** The shape of the bending moment diagram for a uniform cantilever beam carrying a uniformly varying load over its length is: (a) a hyperbola (b) an ellipse (c) a parabola (d) a cubic curve

*Answer: (d).* The load is linear in x; the SF is one degree higher (parabola) and the BM one more (cubic).

**Q9. RSSB JE Mechanical (Degree), 10 February 2025.** The bending moment diagram for a cantilever beam subjected to a bending moment at its free end will be: (a) elliptical (b) a parabola (c) a rectangle (d) a triangle

*Answer: (c).* With only a couple there is no transverse load, so the SF is zero everywhere and the BM stays constant along the beam. A constant BM plots as a rectangle.

## 6. Bending and shear stress in beams

Two formulas carry this whole topic: the bending equation M/I = σ/y = E/R, and the shear stress ratio of 1.5 for a rectangle. Numericals are usually a section modulus followed by σ = M/Z; keep units in N and mm and the stress comes out in MPa.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Pure bending and its assumptions | A length of beam with constant BM and zero SF. Plane sections stay plane, the material is uniform and obeys Hooke's law, E is the same in tension and compression, and the radius of curvature is large. |
| Neutral axis | The layer that is neither stretched nor shortened, so its bending stress is zero. It passes through the centroid of the section. In sagging, fibres above it are in compression and below it in tension; a cantilever (hogging) is the reverse. |
| Bending equation | M/I = σ/y = E/R. Bending stress grows in a straight line with the distance y from the neutral axis and is largest at the outermost fibres. |
| Section modulus Z | Z = I / yₘₐₓ, so σₘₐₓ = M/Z. A larger Z means a stronger beam. Rectangle bd²/6, solid circle πd³/32, hollow circle π(D⁴ − d⁴)/32D. |
| Moment of resistance | The largest moment a section can carry at the allowed stress: M = σ × Z. For a rectangle it grows with bd², so a plank set on its edge (deeper) is much stronger than one laid flat. |
| Shear stress in beams | τ = VAȳ/(Ib), where Aȳ is the first moment of the area beyond the level being checked and b is the width at that level. It is zero at the top and bottom fibres. |
| Shear stress ratios | Rectangle: parabolic, τₘₐₓ = 1.5 × average, at the neutral axis. Solid circle: τₘₐₓ = 4/3 × average, at the neutral axis. Triangle: largest at mid-height, 1.5 × average. I-section: the web carries most of the shear, the largest value is at the neutral axis, and the stress jumps at the flange–web junction. |
| Beam of uniform strength | The section is changed along the length (width or depth) so that σ = M/Z is the same everywhere, as in leaf springs. |

### Formulas to memorise

```math
\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R}
```

```math
Z = \frac{I}{y_{max}} \qquad \sigma_{max} = \frac{M}{Z}
```

```math
Z_{rect} = \frac{bd^2}{6} \qquad Z_{circle} = \frac{\pi d^3}{32} \qquad Z_{hollow} = \frac{\pi (D^4 - d^4)}{32D}
```

```math
\tau = \frac{V A \bar{y}}{I b} \qquad \tau_{max,rect} = 1.5\,\frac{V}{A} \qquad \tau_{max,circle} = \frac{4}{3}\,\frac{V}{A}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 29 January 2018 (Evening).** Bending stress on the neutral axis of the cross-section of a beam is: (a) maximum (b) minimum (c) zero (d) infinity

*Answer: (c).* σ = My/I and y = 0 on the neutral axis. Shear stress, by contrast, is at its largest there for most sections.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025.** If a simply supported beam of uniform cross-section is centrally loaded in the downward direction, according to the theory of simple bending, which portion will be in compression? (a) The portion above the neutral axis (b) The portion below the neutral axis (c) The neutral axis (d) None of these

*Answer: (a).* The beam sags, so the top fibres get shorter (compression) and the bottom fibres longer (tension).

**Q3. RSSB JE Mechanical (Degree), 10 February 2025.** The section modulus of a circular section about an axis through its centre of gravity is: (a) πd³/64 (b) πd²/32 (c) πd³/32 (d) πd³/16

*Answer: (c).* Z = I / yₘₐₓ = (πd⁴/64) / (d/2) = πd³/32. Option (d), πd³/16, is the polar section modulus used in torsion.

**Q4. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** What will be the section modulus of a rectangular beam with a breadth of 6 cm and a depth of 2 cm? (a) 4 cm³ (b) 12 cm³ (c) 8 cm³ (d) 1 cm³

*Answer: (a).* Z = bd²/6 = 6 × 2² / 6 = 4 cm³. Depth is the side that gets squared.

**Q5. Kerala PSC AE (Mechanical), 18 August 2025.** A rectangular beam 12 cm wide and 10 cm deep is subjected to bending. If the maximum bending moment is 90 kN-m, the maximum bending stress is: (a) 450 MN/m² (b) 900 MN/m² (c) 45 MN/m² (d) 90 MN/m²

*Answer: (a).* Z = 120 × 100² / 6 = 200,000 mm³. σ = M/Z = 90 × 10⁶ N·mm / 200,000 mm³ = 450 N/mm² = 450 MN/m².

**Q6. ISRO Scientist Civil 2018.** The maximum shear stress in a rectangular beam is: (a) 1.25 times the average (b) 1.50 times the average (c) 1.75 times the average (d) 2.00 times the average

*Answer: (b).* The shear stress is parabolic across the depth, with its peak 3V/2bd at the neutral axis, and the average is V/bd.

**Q7. SSC JE CBT-II Civil, 7 April 2026.** A rectangular beam carries a shear force of 30 kN and has a cross-sectional area of 6000 mm². What is the maximum shear stress in the section? (a) 5 MPa (b) 7.5 MPa (c) 10 MPa (d) 15 MPa

*Answer: (b).* Average = 30,000 / 6000 = 5 MPa. Maximum = 1.5 × 5 = 7.5 MPa. Option (a) is the average, the usual trap.

**Q8. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Choose the correct statement for a simply supported I-section beam with a transverse point load at the centre: (a) the shearing stress is zero at the neutral axis (b) the shearing stress distribution is parabolic and continuous across the entire cross-section (c) the shearing stress is maximum at the top of the cross-section (d) the shearing stress is maximum at the neutral axis

*Answer: (d).* Shear stress is zero at the top and bottom and largest at the neutral axis, in the web. It is not continuous: it jumps where the narrow web meets the wide flange, which rules out (b).

## 7. Deflection of beams

Deflection questions are almost all standard cases: pick the right formula from the table and substitute. The ratio questions are fastest done by seeing that deflection grows with L³ (point load) or L⁴ (UDL) and falls with E and I.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Elastic curve | The bent shape of the neutral axis. Its equation is EI d²y/dx² = M; EI is the flexural rigidity. |
| Slope and deflection | Slope θ = dy/dx; deflection y is the sideways movement. The largest deflection is where the slope is zero (centre of a symmetric simply supported beam) or at the free end of a cantilever. |
| Double integration | Integrate M/EI once for slope and again for deflection. Find the constants from the supports: at a fixed end y = 0 and θ = 0; at a simple support y = 0. |
| Macaulay's method | One bending-moment equation for the whole beam, with bracket terms such as (x − a) that are dropped wherever they are negative. It handles several point loads in one go. |
| Moment area method (Mohr's theorems) | The change in slope between two points equals the area of the M/EI diagram between them. The deflection of B from the tangent at A equals the moment of that area about B. |
| Conjugate beam method | Load an imaginary beam with the M/EI diagram: its shear force gives the real slope and its bending moment gives the real deflection. |
| Strain energy and Castigliano | Deflection under a load = ∂U/∂P, the rate of change of strain energy with that load. Castigliano's theorem also finds the reactions of indeterminate beams. |
| Stiffness of a beam | Load per unit deflection. It grows with E and I and falls fast with span: a beam twice as long deflects 8 times as much under the same point load. |

**Standard cases**

| Beam and load | Largest slope | Largest deflection |
| --- | --- | --- |
| Cantilever, point load W at the free end | WL²/2EI | WL³/3EI |
| Cantilever, UDL w over the whole length | wL³/6EI | wL⁴/8EI |
| Cantilever, couple M at the free end | ML/EI | ML²/2EI |
| Simply supported, central point load W | WL²/16EI (at the supports) | WL³/48EI (at the centre) |
| Simply supported, UDL w over the whole span | wL³/24EI (at the supports) | 5wL⁴/384EI (at the centre) |
| Fixed at both ends, central point load W | 0 at the ends | WL³/192EI |
| Fixed at both ends, UDL w | 0 at the ends | wL⁴/384EI |

### Formulas to memorise

```math
EI\,\frac{d^2y}{dx^2} = M \qquad \theta = \frac{dy}{dx}
```

```math
y_{cantilever} = \frac{WL^3}{3EI} \ \text{(end load)} \qquad y_{cantilever} = \frac{wL^4}{8EI} \ \text{(UDL)}
```

```math
y_{SS} = \frac{WL^3}{48EI} \ \text{(central load)} \qquad y_{SS} = \frac{5wL^4}{384EI} \ \text{(UDL)}
```

```math
\theta_B - \theta_A = \int_A^B \frac{M}{EI}\,dx \qquad \delta = \frac{\partial U}{\partial P}
```

### Past exam questions with solutions

**Q1. DSSSB JE Mechanical, 6 November 2019 (Shift 1).** Deflection due to a point load P at the free end of a cantilever is (usual notation): (a) PL³/3EI (b) PL⁴/3EI (c) PL²/2EI (d) PL²/3EI

*Answer: (a).* A point load gives deflection with L³; L⁴ belongs to a UDL. Option (c), PL²/2EI, is the slope at the free end.

**Q2. CIL Management Trainee Mechanical 2020.** A cantilever beam of length 100 mm is subjected to an end load of 150 N. If Young's modulus is 200 GPa and the moment of inertia is 5000 mm⁴, the maximum deflection of the beam is: (a) 5 mm (b) 0.5 mm (c) 0.05 mm (d) 0.01 mm

*Answer: (c).* δ = WL³/3EI = 150 × 100³ / (3 × 200,000 × 5000) = 1.5 × 10⁸ / 3 × 10⁹ = 0.05 mm.

**Q3. MPSC AE Civil Mains 2019 (Paper 1).** The maximum deflection of a simply supported beam carrying a UDL w over its whole span l is: (a) wl³/48EI (b) wl⁴/48EI (c) 5wl³/384EI (d) 5wl⁴/384EI

*Answer: (d).* A UDL gives deflection with l⁴, at mid-span. Options with l³ are dimensionally wrong for w in N/m.

**Q4. RSMSSB JE Civil (Degree), October 2016.** What is the ratio of the peak deflection of a simply supported beam carrying a UDL to that of a cantilever of the same span carrying the same UDL? (a) 1/10 (b) 5/48 (c) 1/16 (d) 5/128

*Answer: (b).* (5wL⁴/384EI) ÷ (wL⁴/8EI) = 5 × 8 / 384 = 40/384 = 5/48.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** What will be the deflection, in m, at the centre of a simply supported beam of span 2 m when a point load of 36 kN is applied at the centre (E in kPa, I in m⁴)? (a) 6EI (b) 12EI (c) 6/EI (d) 12/EI

*Answer: (c).* δ = WL³/48EI = 36 × 2³ / 48EI = 288/48EI = 6/EI. Deflection must fall as EI rises, which rules out (a) and (b) at once.

**Q6. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The maximum deflection of a steel cantilever (E = 210 GPa) with a point load at its free end is 12 mm. If the beam were made of aluminium (E = 70 GPa) with half the length of the steel one, what would the deflection be? (a) 4 mm (b) 4.5 mm (c) 8 mm (d) 9 mm

*Answer: (b).* δ grows with L³/E. Half the length gives (1/2)³ = 1/8; one-third the E gives ×3. So δ = 12 × 3/8 = 4.5 mm.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** For a simply supported beam with a central point load, which statements are correct? I. The stiffness of the beam depends on the Young's modulus of the material. II. The stiffness increases as the moment of inertia of the cross-section increases. III. The stiffness depends on the strength of the beam. IV. The stiffness is proportional to the area of the cross-section. (a) Both I and II (b) Only II (c) III and IV (d) II and III

*Answer: (a).* Stiffness = W/δ = 48EI/L³, so it depends on E and I. Strength and area do not appear in it.

**Q8. DSSSB JE Civil, 23 October 2019 (Shift 2).** Which method uses the theorem that the change in slope between two points on a straight member equals the area of the M/EI diagram between those points? (a) Conjugate beam method (b) Macaulay's method (c) Strain energy method (d) Moment area method

*Answer: (d).* This is Mohr's first moment area theorem. The second theorem gives deflection as the moment of the same M/EI area.

## 8. Torsion of shafts

Torsion is the beam topic turned sideways: one equation, T/J = τ/r = Gθ/L, and the power formula P = 2πNT/60. Ratio questions (double the diameter, hollow against solid) are fastest with the rule that torque capacity grows with d³.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Pure torsion | A shaft twisted by equal and opposite torques at its two ends, with no bending. |
| Assumptions | The material is uniform and obeys Hooke's law; plane cross-sections stay plane; radii stay straight; the twist is uniform along the length. |
| Torsion equation | T/J = τ/r = Gθ/L. T is the torque, J the polar moment of inertia, τ the shear stress at radius r, G the modulus of rigidity and θ the twist in radians over length L. |
| Shear stress distribution | Zero at the centre and growing in a straight line to its largest value at the outer surface. For a solid shaft τₘₐₓ = 16T/πd³. |
| Polar moment of inertia and polar modulus | Solid J = πd⁴/32, hollow J = π(D⁴ − d⁴)/32. Polar section modulus Zp = J/R: πd³/16 for a solid shaft. Torque capacity T = τ × Zp, so it grows with d³. |
| Hollow against solid | The centre of a solid shaft is lightly stressed, so removing it costs little strength. For the same weight a hollow shaft is stronger and stiffer. With the same outside diameter, a hollow shaft carries (1 − k⁴) of the solid shaft's torque, where k = d/D. |
| Torsional rigidity | GJ, the torque needed for a twist of one radian per unit length. Torsional stiffness of a shaft is GJ/L. |
| Power transmitted | P = 2πNT/60 watts, with T in N·m and N in rpm. At the same power, a slower shaft carries more torque and needs a bigger diameter. |
| Shafts in series and in parallel | In series (end to end) they carry the same torque and their twists add. In parallel (fixed together) they twist by the same angle and their torques add. |
| Combined bending and torsion | Equivalent twisting moment Te = √(M² + T²), used with the maximum shear stress theory. Equivalent bending moment Me = ½\[M + √(M² + T²)\], used with the maximum normal stress theory. |
| Stress state in pure torsion | Pure shear: the principal stresses are +τ and −τ at 45°, so the largest normal stress equals the largest shear stress. Brittle shafts such as cast iron break along a 45° helix. |

### Formulas to memorise

```math
\frac{T}{J} = \frac{\tau}{r} = \frac{G\theta}{L}
```

```math
J_{solid} = \frac{\pi d^4}{32} \qquad J_{hollow} = \frac{\pi (D^4 - d^4)}{32}
```

```math
\tau_{max} = \frac{16T}{\pi d^3} \qquad \tau_{max,hollow} = \frac{16TD}{\pi (D^4 - d^4)}
```

```math
P = \frac{2\pi N T}{60} \qquad T_e = \sqrt{M^2 + T^2} \qquad M_e = \tfrac{1}{2}\left[M + \sqrt{M^2 + T^2}\right]
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 3 December 2025 (Shift 2).** What is the polar moment of inertia of a solid circular shaft of diameter d? (a) πd⁴/32 (b) πd⁴/64 (c) πd⁴/16 (d) πd⁴/2

*Answer: (a).* J = Ixx + Iyy = πd⁴/64 + πd⁴/64 = πd⁴/32, by the perpendicular axis theorem. Option (b) is the moment of inertia about one diameter.

**Q2. SSC JE Mechanical, 3 December 2025 (Shift 2).** What is the variation of shear stress in a circular shaft subjected to pure torsion? (a) Uniform (b) Linear (c) Parabolic (d) Hyperbola

*Answer: (b).* τ = Tr/J, so the stress is in direct proportion to r: zero at the centre and largest at the surface. Do not confuse it with the parabolic shear stress in a beam.

**Q3. SSC JE Mechanical, 3 December 2025 (Shift 2).** The diameter of a circular shaft is increased from 30 mm to 60 mm, all other conditions remaining the same. By how many times does its torque-carrying capacity increase? (a) 7 times (b) 9 times (c) 8 times (d) 20 times

*Answer: (c).* T = (π/16)τd³, so T grows with d³: (60/30)³ = 2³ = 8.

**Q4. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** A uniform solid circular shaft of diameter 2 cm is subjected to a torque of 40 N·m. The shear stress at the periphery, in N/mm², is: (a) 80π (b) 400π (c) 80/π (d) 160/π

*Answer: (c).* τ = 16T/πd³ = 16 × 40,000 N·mm / (π × 20³) = 640,000 / 8000π = 80/π N/mm² (about 25.5 MPa).

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** The outside diameter of a hollow shaft is twice its inside diameter. The ratio of its torque-carrying capacity to that of a solid shaft of the same material and the same outside diameter is: (a) 1/16 (b) 1/2 (c) 15/16 (d) 3/4

*Answer: (c).* With the same D, the ratio is 1 − k⁴ = 1 − (1/2)⁴ = 15/16. Removing half the diameter removes only 1/16 of the strength.

**Q6. OSSC JE Civil Mains, 16 July 2023.** If a shaft rotates at 120 rpm under a torque of 1200 N·m, the power transmitted is: (a) 15π kW (b) 10π kW (c) 4.8π kW (d) 6.6π kW

*Answer: (c).* P = 2πNT/60 = 2π × 120 × 1200 / 60 = 4800π W = 4.8π kW.

**Q7. ISRO Refrigeration and Air Conditioning 2018.** The power transmitted by a shaft of 60 mm diameter at 180 rpm, if the permissible shear stress is 85 N/mm², is: (a) 68 kW (b) 650 kW (c) 1200 kW (d) 7 kW

*Answer: (a).* T = (π/16) × 85 × 60³ = 3.6 × 10⁶ N·mm = 3605 N·m. P = 2π × 180 × 3605 / 60 = 67,950 W, about 68 kW.

**Q8. SSC JE Mechanical, 5 December 2025 (Shift 2).** A solid circular shaft is subjected to a bending moment M and a twisting moment T. What is the equivalent twisting moment Te that would produce the same maximum shear stress? (a) M + T (b) M² + T² (c) M − T (d) √(M² + T²)

*Answer: (d).* Te = √(M² + T²). Its partner, the equivalent bending moment, is ½\[M + √(M² + T²)\].

**Q9. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Torsional rigidity of a shaft is defined as the torque required to produce: (a) maximum twist in the shaft (b) maximum shear stress in the shaft (c) minimum twist in the shaft (d) a twist of one radian per unit length of the shaft

*Answer: (d).* From T/J = Gθ/L, putting θ/L = 1 gives T = GJ, the torsional rigidity.

## 9. Columns: Euler's formula and effective length

Column questions test one formula, P = π²EI/Le², and one table of effective lengths. Because the load falls with Le², a change of end condition or length gives a squared ratio: halve Le and the load becomes four times.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Column and strut | A column is a vertical member in compression; a strut is any compression member, often inclined or horizontal. |
| Short, medium and long columns | Short columns fail by crushing when the stress reaches the crushing (or yield) stress. Long columns fail by buckling sideways at a stress far below that. Medium columns fail by a mix, which Rankine's formula covers. |
| Euler's assumptions | The column is straight and uniform, the load is exactly axial, the material stays elastic, the column is long compared with its section, self-weight is ignored, and failure is by buckling alone. |
| Euler's crippling load | P = π²EI/Le². Use the least I, because the column buckles about its weaker axis. |
| Effective length Le | The length of the equivalent pinned column, set by the end conditions. Both ends hinged: L. One end fixed, other free: 2L. One end fixed, other hinged: L/√2. Both ends fixed: L/2. |
| Load ratios for the same column | Fixed–free : hinged–hinged : fixed–hinged : fixed–fixed = 1/4 : 1 : 2 : 4. |
| Slenderness ratio | λ = Le / kₘᵢₙ, where k = √(I/A) is the least radius of gyration. A higher ratio means a weaker column; the strongest columns have the smallest slenderness ratio. |
| Limit of Euler's formula | Euler's formula holds only for long columns, where the buckling stress π²E/λ² is below the crushing stress. That needs λ ≥ π√(E/σc), about 80 or more for mild steel. |
| Rankine's formula | An empirical formula for all lengths: 1/P = 1/Pc + 1/Pe, which tends to the crushing load for short columns and to Euler's load for long ones. |
| Eccentric loading | A load off the axis adds bending: σ = P/A ± M/Z with M = Pe. A rectangle stays free of tension when e ≤ b/6 (the middle-third rule); a solid circle when e ≤ d/8. |

### Formulas to memorise

```math
P_E = \frac{\pi^2 E I}{L_e^2} \qquad \sigma_E = \frac{\pi^2 E}{\lambda^2} \qquad \lambda = \frac{L_e}{k} \qquad k = \sqrt{\frac{I}{A}}
```

```math
L_e = L \ (\text{hinged--hinged}) \quad 2L \ (\text{fixed--free}) \quad \frac{L}{\sqrt{2}} \ (\text{fixed--hinged}) \quad \frac{L}{2} \ (\text{fixed--fixed})
```

```math
\frac{1}{P_R} = \frac{1}{P_c} + \frac{1}{P_E} \qquad P_R = \frac{\sigma_c A}{1 + a\lambda^2}
```

```math
\sigma = \frac{P}{A}\left(1 \pm \frac{6e}{b}\right) \quad \text{(rectangle, eccentricity } e\text{)}
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** The crippling load according to Euler's theory for a long column with both ends hinged is: (a) 4π²EI/l² (b) π²EI/l² (c) π²EI/2l² (d) π²EI/4l²

*Answer: (b).* Both ends hinged is the basic case, Le = l. The other options belong to other end conditions: 4π²EI/l² is fixed–fixed and π²EI/4l² is fixed–free.

**Q2. DDA JE Civil, 26 December 2025 (Shift 1).** For a column with one end fixed and the other end free, the effective length is: (a) half the actual length (b) twice the actual length (c) four times the actual length (d) equal to the actual length

*Answer: (b).* A flagpole-type column bends into a quarter of a sine wave, which is half of the pinned column's half-wave. So it acts like a pinned column twice as long: Le = 2L.

**Q3. HPCL Engineer Civil, 18 August 2024.** When both ends of a column are fixed, the relationship between the effective length (Le) and the actual length (L) is: (a) Le = L/2 (b) Le = L (c) Le = L/√2 (d) Le = 2L

*Answer: (a).* Fixed ends stop the ends from rotating, so only the middle half bends like a pinned column: Le = L/2. That makes it four times as strong as the pinned column.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The crippling load for a very long column fixed at both ends is 1000 N. If the length of the column is halved, the critical load will be: (a) 250 N (b) 2000 N (c) 4000 N (d) 500 N

*Answer: (c).* P grows with 1/L². Halving L multiplies P by 2² = 4, so P = 4000 N. The end conditions are unchanged, so they do not enter the ratio.

**Q5. VIZAG Steel Management Trainee Mechanical 2017.** The slenderness ratio is the ratio of: (a) area of column to least radius of gyration (b) length of column to least radius of gyration (c) least radius of gyration to area of column (d) least radius of gyration to length of column

*Answer: (b).* λ = Le / kₘᵢₙ. Both are lengths, so the ratio has no unit.

**Q6. Kerala PSC AE (Mechanical), 18 August 2025.** The strongest columns are those with a \_\_\_\_\_\_ slenderness ratio. (a) highest (b) medium (c) extra large (d) smallest

*Answer: (d).* The buckling stress π²E/λ² rises as λ falls, so short, thick columns are the strongest.

**Q7. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** What is the mode of failure of a short mild-steel column (slenderness ratio less than 10) under an axial compressive load? (a) Buckling (b) Yielding (c) Both buckling and yielding (d) Fracture

*Answer: (b).* A column that short is too stiff to buckle. Mild steel is ductile, so it fails by yielding (crushing) when the stress reaches the yield stress.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Euler's theory of columns is valid when: (i) the slenderness ratio is greater than or equal to π√(E/σc) (ii) the crushing stress is greater than or equal to the buckling stress (iii) the column is short (iv) the crushing stress is less than the buckling stress. (a) i and ii (b) i and iv (c) i, ii and iii (d) iii and iv

*Answer: (a).* Euler's formula is for long columns, which buckle before they crush, so the buckling stress must not exceed the crushing stress. Setting π²E/λ² ≤ σc gives λ ≥ π√(E/σc).

## 10. Principal stresses and Mohr's circle

A small square element at a loaded point usually carries normal stress on two faces and shear on all four. Rotate the element and these values change. At one angle the shear disappears and the normal stress reaches its largest and smallest values: these are the principal stresses. Mohr's circle shows every orientation on one drawing. Exam questions here are short. They ask about the shear on a principal plane, the angle between planes, maximum shear as half the difference, the circle's centre and radius, and which failure theory suits which material.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Plane stress | Normal stresses σx and σy and shear τxy act in one plane; the stress normal to the plate is zero. |
| Complementary shear | A shear stress on one face always comes with an equal shear on the perpendicular face, so the element does not spin. |
| Principal planes | Planes that carry no shear stress. There are two at any point, at 90° to each other. |
| Principal stresses | The normal stresses on the principal planes. σ1 is the largest normal stress at the point and σ2 the smallest. |
| Planes of maximum shear | At 45° to the principal planes. They carry τmax = (σ1 − σ2)/2 and also a normal stress equal to the average (σ1 + σ2)/2. |
| Mohr's circle | Plot normal stress σ along the horizontal axis and shear τ upward. The centre is at ((σx + σy)/2, 0). The circle cuts the σ axis at σ1 and σ2. Its top and bottom points give ±τmax, so τmax equals the radius. An angle θ on the element is 2θ on the circle. |
| Special cases | Simple tension σ: the circle runs from 0 to σ, and τmax = σ/2 on 45° planes. Pure shear τ: the centre is at the origin, so σ1 = +τ and σ2 = −τ on 45° planes. Equal like stresses with no shear: the circle shrinks to a point, and every plane carries the same normal stress and no shear. |
| Absolute maximum shear | The third principal stress (normal to the plate) is zero. If σ1 and σ2 have opposite signs, τmax = (σ1 − σ2)/2. If both have the same sign, the largest shear comes from the bigger one and zero: τmax = σ1/2. |
| Theories of failure | Maximum principal stress (Rankine): failure when σ1 reaches the ultimate tensile strength; suits brittle materials such as cast iron. Maximum shear stress (Tresca, Guest): failure when τmax reaches σy/2; suits ductile materials and errs on the safe side. Distortion energy (von Mises): ductile materials, closest to test results. Others: maximum principal strain (St Venant), total strain energy (Haigh). |

### Formulas to memorise

```math
\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}
```

```math
\tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}
```

```math
\tau_{max} = \frac{\sigma_1 - \sigma_2}{2} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}
```

```math
\text{Mohr's circle: } C = \frac{\sigma_x + \sigma_y}{2}, \quad R = \tau_{max}, \quad \sigma_{1,2} = C \pm R
```

```math
\sigma_n = \frac{\sigma_1 + \sigma_2}{2} + \frac{\sigma_1 - \sigma_2}{2}\cos 2\theta, \qquad \tau = \frac{\sigma_1 - \sigma_2}{2}\sin 2\theta
```

```math
\sigma_x + \sigma_y = \sigma_1 + \sigma_2
```

```math
\text{Rankine: } \sigma_1 = \sigma_{ut} \qquad \text{Tresca: } \sigma_1 - \sigma_2 = \sigma_y \qquad \text{von Mises: } \sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2 = \sigma_y^2
```

In the oblique-plane formula, θ is the angle between the plane's normal and the direction of σ1. The Tresca form shown is for σ1 and σ2 of opposite signs; for the same sign it becomes σ1 = σy.

### Past exam questions with solutions

**Q1. IOCL Junior Engineering Assistant (Mechanical), 29 September 2024.** On principal planes, shear stresses are: (a) unity (b) minimum (c) maximum (d) zero

*Answer: (d).* A principal plane is defined as a plane with no shear stress. Only the normal (principal) stress acts on it.

**Q2. SSC JE Civil, 29 January 2018 (Morning).** The angle between the principal plane and the plane of maximum shear is: (a) 90° (b) 125° (c) 60° (d) None of these

*Answer: (d).* On Mohr's circle the principal stresses lie on the horizontal axis and τmax at the top, 90° apart around the circle. Angles on the element are half the angles on the circle, so the planes are 45° apart. That is not among the first three options.

**Q3. SSC JE Mechanical, 29 January 2018 (Evening).** A point carries normal stresses σx = σ and σy = σ, with shear stress τxy = σ. The maximum principal stress is: (a) σ (b) −σ (c) 2σ (d) −2σ

*Answer: (c).* Centre C = (σ + σ)/2 = σ. Radius R = √(0² + σ²) = σ. So σ1 = C + R = 2σ, and σ2 = C − R = 0.

**Q4. ISRO VSSC Technical Assistant (Mechanical), 11 February 2024.** If the major and minor principal stresses acting on a body are 100 MPa and −60 MPa, the maximum shear stress is: (a) 20 MPa (b) 40 MPa (c) 80 MPa (d) 160 MPa

*Answer: (c).* τmax = (σ1 − σ2)/2 = (100 − (−60))/2 = 160/2 = 80 MPa. Keep the minus sign: a tension and a compression together give a much bigger circle than two tensions of the same sizes.

**Q5. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Mohr's circle is drawn to a scale of 1 cm = 10 MPa for a plane stress system with normal stresses of 50 MPa (compressive) in the x direction and 50 MPa (tensile) in the y direction. The radius of the circle is: (a) zero (b) 10 cm (c) 2.5 cm (d) 5 cm

*Answer: (d).* There is no shear, so the two given stresses are the principal stresses: σ1 = +50 and σ2 = −50 MPa. The centre is at (50 − 50)/2 = 0, and the radius is (50 − (−50))/2 = 50 MPa. At 1 cm = 10 MPa that is 5 cm.

**Q6. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Which of the following are true for Mohr's circle in plane stress? (i) maximum shear is at the top and bottom of the circle (ii) the maximum shear stress is equal to the radius of the circle (iii) the principal stresses lie on the horizontal axis, where shear is zero (iv) the maximum shear stress is equal to twice the radius. (a) i and iv (b) i, ii and iii (c) iii and iv (d) All the above

*Answer: (b).* The top and bottom points sit one radius above and below the σ axis, so τmax = R, not 2R. Statement iv is false and the other three are true.

**Q7. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** A solid circular shaft is subjected to pure torsion. The ratio of maximum shear stress to maximum normal stress at any point is: (a) 2:1 (b) 1:1 (c) 2:3 (d) 1:2

*Answer: (b).* Pure torsion puts each point in pure shear τ. Mohr's circle is centred at the origin with radius τ, so σ1 = +τ and σ2 = −τ on planes at 45°. Then τmax = τ and σmax = τ, a ratio of 1:1. This is why a twisted stick of chalk breaks along a 45° spiral: being brittle, it fails in tension.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** The principal stresses of a two-dimensional state of stress are σ1 and σ2, with σ1 greater than σ2 and both tensile. By the maximum shear stress theory, the correct failure criterion is: (a) σ1/2 = ±σy/2 (b) σ1 = 2σy (c) σ2/2 = ±σy/2 (d) (σ1 − σ2)/2 = ±σy/2

*Answer: (a).* The third principal stress, normal to the plate, is zero. With σ1 > σ2 > 0, the largest shear comes from σ1 and zero: τmax = σ1/2. In a simple tension test, yield happens when τ = σy/2. Equating the two gives σ1/2 = σy/2. Option (d) would be right only if σ1 and σ2 had opposite signs.

**Q9. Kerala PSC AE (Mechanical), 18 August 2025.** Which of the following theories is suitable for the design of a cast iron component? (a) Maximum principal stress theory (b) Maximum shear stress theory (c) Distortion energy theory (d) Strain energy theory

*Answer: (a).* Cast iron is brittle: it breaks in tension with almost no yielding. The maximum principal stress (Rankine) theory compares the largest normal stress with the ultimate strength, which matches that behaviour. The shear and energy theories model yielding, so they suit ductile steels.

## 11. Thin cylinders and springs

This last sub-topic covers two short chapters, each worth about one question a paper. A thin cylinder is a pressure vessel whose wall is thin next to its diameter, so the stress can be taken as even across the wall. A close-coiled helical spring is a wire wound into coils. Under an axial load the wire is mostly twisted, so the spring formulas come straight from torsion (topic 8).

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Thin cylinder | Wall thickness t less than about one-twentieth of the diameter (d/t > 20). The stress is taken as uniform through the wall, and the radial stress is ignored. |
| Hoop (circumferential) stress | The stress that tries to split the cylinder along its length: σh = pd/2t = pr/t. It is the larger stress, so a thin cylinder bursts along a lengthwise seam. |
| Longitudinal stress | The stress that tries to split the cylinder around its circumference: σL = pd/4t, half the hoop stress. |
| Thin sphere | The stress is the same in every direction: σ = pd/4t. A sphere needs only half the wall thickness of a cylinder of the same diameter and pressure. |
| Strains and change of volume | Hoop strain εh = (σh − μσL)/E and longitudinal strain εL = (σL − μσh)/E. Volumetric strain εv = 2εh + εL. |
| Thick cylinder (Lamé) | When the wall is thick, the stresses vary through it as a + b/r². Under internal pressure the hoop stress is largest at the inner surface and falls toward the outside. The radial stress is −p at the inner surface and zero at the outer. |
| Close-coiled helical spring | The coils are nearly flat (small helix angle). An axial load W twists the wire with torque T = WR, where R is the mean coil radius, so the wire is in torsion. |
| Deflection and stiffness | δ = 64WR³n/Gd⁴ for n coils of wire diameter d, so the stiffness k = W/δ = Gd⁴/64R³n. Thicker wire makes the spring much stiffer; bigger coils or more coils make it softer. |
| Spring index | C = D/d, the mean coil diameter divided by the wire diameter. Usual values are about 4 to 12. |
| Springs in series and parallel | Series: each spring carries the full load and the deflections add, so 1/k = 1/k₁ + 1/k₂. Parallel: the springs share one deflection and the loads add, so k = k₁ + k₂. |
| Other springs | An open-coiled spring has a larger helix angle, so the wire carries bending as well as torsion. A leaf (laminated) spring is a stack of strips acting as a beam, used in vehicle suspensions. |

### Formulas to memorise

```math
\sigma_h = \frac{pd}{2t}, \qquad \sigma_L = \frac{pd}{4t}, \qquad \text{thin sphere: } \sigma = \frac{pd}{4t}
```

```math
\varepsilon_h = \frac{\sigma_h - \mu\sigma_L}{E} = \frac{pd}{4tE}(2 - \mu), \qquad \varepsilon_L = \frac{\sigma_L - \mu\sigma_h}{E} = \frac{pd}{4tE}(1 - 2\mu)
```

```math
\frac{\delta V}{V} = 2\varepsilon_h + \varepsilon_L = \frac{pd}{4tE}(5 - 4\mu)
```

```math
\tau = \frac{16WR}{\pi d^3}, \qquad \delta = \frac{64WR^3 n}{Gd^4}, \qquad k = \frac{W}{\delta} = \frac{Gd^4}{64R^3 n}
```

```math
\text{Series: } \frac{1}{k} = \frac{1}{k_1} + \frac{1}{k_2} \qquad \text{Parallel: } k = k_1 + k_2
```

```math
C = \frac{D}{d}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 3 December 2025 (Shift 2).** A thin cylindrical shell has an internal radius of 300 mm and a wall thickness of 15 mm, and carries an internal pressure of 3.5 MPa. The hoop stress is: (a) 70 MPa (b) 75 MPa (c) 80 MPa (d) 85 MPa

*Answer: (a).* σh = pd/2t = pr/t = 3.5 × 300 / 15 = 70 MPa. Check first that the shell is thin: d/t = 600/15 = 40, well above 20.

**Q2. SSC JE Mechanical, 5 December 2025 (Shift 2).** For a thin cylinder, if the internal pressure is doubled, the hoop stress: (a) doubles (b) halves (c) becomes 4 times (d) becomes 6 times

*Answer: (a).* σh = pd/2t is directly proportional to p, so twice the pressure gives twice the stress.

**Q3. RSSB JE Mechanical (Diploma), 10 February 2025.** A thin cylindrical pressure vessel with closed ends is subjected to internal pressure. The ratio of the circumferential (hoop) stress to the longitudinal stress is: (a) 3:2 (b) 1:1 (c) 2:1 (d) 4:1

*Answer: (c).* Cut the cylinder lengthwise: the pressure force p × d × L is held by two wall strips of area t × L, giving pd/2t. Cut it across: the force p × πd²/4 on the end is held by a ring of area πd × t, giving pd/4t. The ratio is 2:1.

**Q4. SSC JE Mechanical, 5 December 2025 (Shift 2).** What is the correct formula for hoop strain εH in a thin-walled cylindrical pressure vessel, where σh is the hoop stress, σL the longitudinal stress, μ Poisson's ratio and E the elastic modulus? (a) εH = (1/3E)\[σh − μσL\] (b) εH = (1/5E)\[σh − μσL\] (c) εH = (1/E)\[σh − μσL\] (d) εH = (1/2E)\[σh − μσL\]

*Answer: (c).* Hooke's law in two directions: the hoop stress stretches the wall by σh/E, and the longitudinal stress shrinks it sideways by μσL/E (the Poisson effect). So εH = (σh − μσL)/E.

**Q5. UPPSC AE Mechanical 2024 (Paper I, held 29 September 2025).** In a thick cylinder pressurised from inside, the hoop stress is maximum at: (a) the inner radius (b) both the inner and outer radius (c) the centre of the wall thickness (d) the outer radius

*Answer: (a).* Lamé's equations give the hoop stress as a + b/r², which is largest where r is smallest. The inner surface is the most stressed. That is why high-pressure thick cylinders are sometimes built from layers shrunk onto each other.

**Q6. RSSB JE Mechanical (Degree), 10 February 2025.** The stiffness of a close-coiled helical spring under an axial load W is (d = wire diameter, R = mean coil radius, n = number of coils, G = modulus of rigidity): (a) Gd⁴/(64R²n) (b) Gd⁴/(64R³n) (c) Gd³/(64R⁴n) (d) Gd⁴/(32R³n)

*Answer: (b).* The deflection is δ = 64WR³n/(Gd⁴). Stiffness is load per unit deflection, so k = W/δ = Gd⁴/(64R³n). Units check: (N/m² × m⁴)/m³ = N/m.

**Q7. RSMSSB JE Civil (Degree), December 2020.** Two close-coiled springs of stiffness s and 2s are connected in series in one case and in parallel in the other. The ratio of the stiffness in series to the stiffness in parallel is: (a) 1/6 (b) 2/9 (c) 2/3 (d) 1/3

*Answer: (b).* Series: 1/k = 1/s + 1/2s = 3/2s, so k = 2s/3. Parallel: k = s + 2s = 3s. Ratio = (2s/3)/(3s) = 2/9.

**Q8. BPSC AE (Mechanical) Paper 6, 2019.** When a helical compression spring is cut into halves, the stiffness of each half will be: (a) the same (b) one-half (c) double (d) one-fourth

*Answer: (c).* k = Gd⁴/(64R³n) is inversely proportional to the number of coils. Each half has n/2 coils, so its stiffness is 2k. Another way to see it: the whole spring is the two halves in series, so 1/k = 1/k′ + 1/k′, which gives k′ = 2k.

## Sources

Each question's exam and date come from the booklet or page it was taken from; the solutions are written fresh. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. Below they are listed by paper and by the question number in that paper. The other questions come from Testbook solution pages, which name the paper each question appeared in. Where JE papers had no published question on a point, the question comes from another technical exam at the same level (UPPSC, RSSB, ISRO, IOCL, BPSC and others). Questions that relied on a figure are written out in words. Few RRB JE 2025–26 questions are published one by one, so also solve the full official papers.

- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 065/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- Sub-topic 1: [centroid depends on shape](https://testbook.com/question-answer/what-does-the-location-of-a-centroid-primarily-dep--6946c9bfabeefcb52160626c), [angle of friction](https://testbook.com/question-answer/the-correct-relationship-between-the-coefficient-o--666d8a7616cb848817b6a48c), [block slips at 30°](https://testbook.com/question-answer/a-block-is-resting-on-an-inclined-plane-the-block--6a6b37a01a2b877eb64b12a6), [friction below the limit](https://testbook.com/question-answer/a-body-of-weight-600-n-placed-on-a-horizontal-surf--6a6b37c900bdf856f938e042), [four concurrent forces](https://testbook.com/question-answer/given-are-four-concurrent-forces-10-n-east-20-n--6a523e121b4d81429487c918), [Varignon's theorem](https://testbook.com/question-answer/varignons-principle-of-moments-states-that-th--6a19795a05115e7a249de3d5), [triangle about its vertex](https://testbook.com/question-answer/find-the-moment-of-inertia-of-a-triangular-section--68b78e7e58db07b4e2abe646), [semicircle centroid](https://testbook.com/question-answer/a-semi-circular-lamina-of-radius-11-cm-has-its-dia--6a38cb11ff597e373fba51fc)
- Sub-topic 2: [D'Alembert's principle](https://testbook.com/question-answer/which-of-the-following-is-a-necessary-modification--6a523e224af466b3ec1bfdd6), [equal kinetic energy](https://testbook.com/question-answer/if-light-and-a-heavy-body-have-an-equal-kinetic-en--5a44d69ed0b323295a6c309f), [train brakes](https://testbook.com/question-answer/the-brakes-of-a-train-reduce-its-speed-from-60-km--6a6b37d9e1b1e0f9a0d92ed2), [power](https://testbook.com/question-answer/what-is-the-power-required-to-move-an-object-with--63987b1d942d0c7fef586eef), [maximum range](https://testbook.com/question-answer/for-a-maximum-horizontal-range-of-a-projectile-th--645cb226b73d1e8c9087cf6a), [maximum height](https://testbook.com/question-answer/a-projectile-is-fired-at-an-angle-of-30-from--6298ba948388db5aa3fa545b), [range equal to twice the height](https://testbook.com/question-answer/the-range-of-a-projectile-is-double-the-maximum-he--6395dbb23437d01838495730)
- Sub-topic 3: [Hooke's law](https://testbook.com/question-answer/what-does-hookes-law-state--6946c77ab57af4bb273ef07f), [strain in a bar](https://testbook.com/question-answer/a-bar-2-m-long-stretches-by-1-mm-under-an-axial-te--6946c77ce082b83edf285cd8), [extension of a wire](https://testbook.com/question-answer/a-mild-steel-wire-is-5text-mm-in-diameter-a--6946c9c361f4c949ac8e286c), [tapered rod](https://testbook.com/question-answer/what-is-the-formula-for-elongation-delta-of--6946c77dd9d9f54673873b63), [E, G and K](https://testbook.com/question-answer/what-is-the-relation-among-the-three-elastic-const--6946c77ce082b83edf285cd9), [Poisson's ratio and bulk modulus](https://testbook.com/question-answer/if-the-modulus-of-elasticity-e206-text-gpa--6946c9c36acde68c6196af38), Kerala PSC 68/2026 Q2 (Poisson's ratio), Kerala PSC 050/2023 Q20 (sudden load), [toughness](https://testbook.com/question-answer/what-is-toughness-in-materials--6946c9c0287f0b3732599b06)
- Sub-topic 4: [temperature rise from expansion](https://testbook.com/question-answer/a-steel-bar-e-200e-200-12--68120000c2593cae0f29bbcf), [rod between rigid walls](https://testbook.com/question-answer/a-metal-rod-is-tightly-fitted-between-two-rigid-wa--6a523b46baf14b961c7c8c5c), [free expansion](https://testbook.com/question-answer/if-a-material-expands-freely-due-to-uniform-heatin--6a6b37dd9ec7decc64078454), Kerala PSC 68/2026 Q7 (cooled bar), [fully prevented expansion](https://testbook.com/question-answer/a-steel-rod-15-m-long-is-at-a-temperature-of-15de--5ead7ed2f60d5d2459766cd9), [partly prevented expansion](https://testbook.com/question-answer/a-steel-rod-10-m-long-is-at-a-temperature-of-20de--5eba2549f60d5d2fd8c9bcdd), [steel between copper bars](https://testbook.com/question-answer/a-steel-bar-is-sandwiched-between-two-copper-bar-a--60afa8d8abb688c7a10f803b), Kerala PSC 65/2026 Q44 (composite section)
- Sub-topic 5: [shear force](https://testbook.com/question-answer/shear-force-at-a-section-of-a-beam-is--6946c9c16d4a860c1806290e), [cantilever with an end load](https://testbook.com/question-answer/a-cantilever-beam-of-length-4-m-carries-a-point-lo--6946c9c40fc585af3b1e6e11), [simply supported beam with a UDL](https://testbook.com/question-answer/a-beam-with-a-span-of-6-m-carries-a-uniformly-dist--6946c77cb4bedd969c3c19fa), Kerala PSC 68/2026 Q5 (simply supported beam with a UDL), [sagging moment](https://testbook.com/question-answer/in-the-bending-moment-diagram-a-sagging-moment-co--6946c77b9440611c5835e278), [point of inflection](https://testbook.com/question-answer/what-is-the-point-of-inflection--6946c9c2d9d9f5467387672b), [statically determinate beam](https://testbook.com/question-answer/which-of-the-following-beams-is-classified-as-a-st--6811e05add905747ade4e730), [cantilever with a varying load](https://testbook.com/question-answer/the-shape-of-the-bending-moment-diagram-for-a-unif--6a6b37c4acc6b227467d0e5d), [cantilever with an end couple](https://testbook.com/question-answer/the-bending-moment-diagram-bmd-for-a-cantilever--6a757f303c6bb40ec2d7fe0c)
- Sub-topic 6: [bending stress on the neutral axis](https://testbook.com/question-answer/bending-stress-on-the-neutral-axis-of-the-cross-se--5d94a87af60d5d4166671be7), Kerala PSC 104/2025 Q4 (compression side), [section modulus of a circle](https://testbook.com/question-answer/the-section-modulus-of-a-circular-section-about-an--6a757f26f54e185d82e1a3d8), Kerala PSC 050/2023 Q21 (section modulus), Kerala PSC 104/2025 Q8 (bending stress), [shear stress ratio](https://testbook.com/question-answer/the-maximum-shear-stress-in-a-rectangular-beam-is--5ef173a4d83ee20d0609f9c5), [maximum shear stress](https://testbook.com/question-answer/a-rectangular-beam-carries-a-shear-force-of-30-kn--6a2bdf2748822a483e9ce0cb), Kerala PSC 68/2026 Q9 (I-section shear stress)
- Sub-topic 7: [cantilever end load formula](https://testbook.com/question-answer/deflection-due-to-point-load-at-the-free-end-of-th--5fd1c7f54b454031ed51c3c2), [cantilever deflection](https://testbook.com/question-answer/a-cantilever-beam-of-length-100-mm-is-subjected-an--5e6c95fdf60d5d1968dc4b2a), [simply supported beam with a UDL](https://testbook.com/question-answer/maximum-deflection-for-a-simply-supported-beam-sub--607d9361fb2915314d5f91ee), [deflection ratio](https://testbook.com/question-answer/what-is-the-ratio-of-peak-deflection-of-simply-sup--5e59336af60d5d78c48750d4), Kerala PSC 050/2023 Q23 (central load), Kerala PSC 68/2026 Q11 (steel and aluminium), Kerala PSC 68/2026 Q6 (stiffness), [moment area method](https://testbook.com/question-answer/which-method-uses-the-theorem-which-states-that-th--61d54c79c5ee2d2556107d42)
- Sub-topic 8: [polar moment of inertia](https://testbook.com/question-answer/what-is-the-polar-moment-of-inertia-for-a-solid-ci--6946c77ad23147c2e27ea753), [shear stress variation](https://testbook.com/question-answer/what-is-the-variation-of-shear-stress-in-a-circula--6946c77bb4bedd969c3c19f7), [doubling the diameter](https://testbook.com/question-answer/the-diameter-of-a-circular-shaft-is-increased-from--6946c77d9440611c5835e290), Kerala PSC 050/2023 Q17 (shear stress), Kerala PSC 050/2023 Q69 (hollow shaft), [power at 120 rpm](https://testbook.com/question-answer/if-a-shaft-rotates-at-120-rpm-under-a-torque-of-12--66c43bb6a1b42ec81ebca9cf), [power from permissible stress](https://testbook.com/question-answer/the-power-transmitted-by-a-shaft-60-mm-diameter-at--604a4e60300765adb10ffdae), [equivalent twisting moment](https://testbook.com/question-answer/a-solid-circular-shaft-is-subjected-to-a-bending-m--6946c9c2477fa6aef88e53b3), Kerala PSC 65/2026 Q47 (torsional rigidity)
- Sub-topic 9: Kerala PSC 65/2026 Q49 (Euler load), [fixed-free effective length](https://testbook.com/question-answer/the-effective-length-of-a-column-depends-on-its-en--6a69afee68d4f4957cea3297), [fixed-fixed effective length](https://testbook.com/question-answer/when-both-ends-of-a-column-are-fixed-the-relation--66e824022b1d7a2486047e6e), Kerala PSC 68/2026 Q10 (length halved), [slenderness ratio](https://testbook.com/question-answer/the-slenderness-ratio-is-the-ratio-of--59cb7e9776a2cf2698f848a4), Kerala PSC 104/2025 Q12 (strongest columns), [short column failure](https://testbook.com/question-answer/what-mode-of-failure-of-a-short-column-of-mild-ste--6a6b37b5c24a437562f6d40b), Kerala PSC 050/2023 Q24 (validity of Euler's theory)
- Sub-topic 10: [shear on principal planes](https://testbook.com/question-answer/on-principal-planes-shear-stresses-are-________--694fa81621ec649ea328aea2), [principal and maximum shear planes](https://testbook.com/question-answer/the-angle-between-the-principle-plane-and-the-plan--5d8073aefdb8bb3e4d554101), [maximum principal stress](https://testbook.com/question-answer/calculate-the-maximum-value-of-the-principal-stres--5d94abb4f60d5d4166671c51), [maximum shear stress](https://testbook.com/question-answer/if-the-major-and-minor-principal-stresses-acting-o--67af26c75dce01c65fdb3fad), Kerala PSC 68/2026 Q1 (Mohr's circle radius), Kerala PSC 050/2023 Q13 (Mohr's circle statements), [pure torsion](https://testbook.com/question-answer/a-solid-circular-shaft-is-subjected-to-pure-torsio--6a6b37c47ee1bf58323d4a1b), Kerala PSC 050/2023 Q71 (maximum shear stress theory), Kerala PSC 104/2025 Q71 (cast iron)
- Sub-topic 11: [hoop stress](https://testbook.com/question-answer/a-thin-cylindrical-shell-is-subjected-to-an-intern--6946c77d8eb768a3314c80d0), [pressure doubled](https://testbook.com/question-answer/for-a-thin-cylinder-if-the-internal-pressure-is-d--6946c9c16acde68c6196af27), [hoop to longitudinal ratio](https://testbook.com/question-answer/a-thin-cylindrical-pressure-vessel-with-closed-end--6a757ee9549cf29b1b1149fb), [hoop strain](https://testbook.com/question-answer/what-is-the-correct-formula-for-hoop-strain-ep--6946c9c2d9d9f54673876744), [thick cylinder](https://testbook.com/question-answer/in-a-thick-cylinder-pressurised-from-inside-the-h--6a6b37dfacc6b227467d100a), [spring stiffness](https://testbook.com/question-answer/the-stiffness-of-close-coiled-helical-spring-subje--6a757f2fa17386b410c9408f), [series and parallel springs](https://testbook.com/question-answer/two-closed-coil-springs-of-stiffness-s-and-2s-are--606ec156f26e283ba422f823), [spring cut in half](https://testbook.com/question-answer/when-helical-compression-spring-is-cut-into-halves--5d3c5c0cfdb8bb0c5094d883)
