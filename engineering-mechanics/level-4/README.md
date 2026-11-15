# Engineering Mechanics and SOM Level 4: Exam Room

Nov 13, 2026 · @Rohith

## How to use Level 4

Take these mocks only after finishing Levels 1 to 3 on all 11 topics. Each mock mixes every topic, the way the real paper does.

- **On the website:** press Start on a mock. It works like the exam's CBT screen: 25 questions, 25 minutes, one question at a time, a question palette and Mark for review. When the time runs out, the test submits itself.
- **Marking:** +1 for a right answer, −1/3 for a wrong one, 0 for a skip. That is the penalty in RRB JE, Kerala PSC and SSC JE Paper 2.
- **When to guess:** a blind guess among four options gains nothing on average (1/4 × 1 − 3/4 × 1/3 = 0). Rule out one option and a guess among the other three is worth +1/9 of a mark. Rule out two and it is worth +1/3. So guess only after you have eliminated at least one option.
- **After the test:** the review shows every question with your answer, the right one and the full solution. Read why each wrong option is wrong, not just the right one. Weak topics link back to the same section in Levels 1 to 3.
- **Reading here instead:** the solution sits right under each question, so cover it before you answer.
- **Retakes:** wait about a week. An immediate retake mostly tests your memory of the answers.

Each question names its exam, date and topic number, and Topic N is section N in Levels 1 to 3. In test mode the exam and topic are hidden, because spotting which idea a question tests is part of the skill. None of these questions appear in Levels 1 to 3. Each mock follows the weighting below.

| Topic | Questions per mock |
| --- | --- |
| 1. Forces, friction, centroid and moment of inertia | 4 |
| 2. Dynamics: laws of motion, work and energy, projectiles | 2 |
| 3. Stress, strain, Hooke's law and elastic constants | 4 |
| 4. Thermal stress and composite bars | 1 |
| 5. Shear force and bending moment diagrams | 3 |
| 6. Bending and shear stress in beams | 2 |
| 7. Deflection of beams | 2 |
| 8. Torsion of shafts | 2 |
| 9. Columns: Euler's formula and effective length | 2 |
| 10. Principal stresses and Mohr's circle | 1 |
| 11. Thin cylinders and springs | 2 |

Mechanics and SOM questions are mostly one formula and two or three lines of working. In the mock you have one minute per question, so the aim is to recall the formula at once and keep the arithmetic short. The Speed toolkit below collects the values and relations that do that.

## Speed toolkit

Most Mechanics and SOM questions in RRB JE, SSC JE and Kerala PSC need one formula or one fact. Learn the values below by heart, and a two-minute question takes 30 seconds.

### Ready values

| Quantity | Value to remember |
| --- | --- |
| Centroid | Triangle: h/3 from the base. Semicircle: 4r/(3π) from the diameter, about 0.424r. |
| I of a rectangle | bd³/12 about the centroidal axis; bd³/3 about the base |
| I of a triangle | bh³/36 about the centroidal axis; bh³/12 about the base |
| Circle | I = πd⁴/64 about a diameter; J = πd⁴/32 about the shaft axis |
| Section modulus Z | Rectangle bd²/6; circle πd³/32 |
| Steel | E about 200 GPa, G about 80 GPa, Poisson's ratio about 0.3, α about 12 × 10⁻⁶ per °C |
| Poisson's ratio | Between 0 and 0.5 for common materials; 0.5 means no change in volume |
| Effective length of a column | Both ends hinged L; both fixed L/2; one fixed and one hinged L/√2; one fixed and one free 2L |
| Euler load as a multiple of π²EI/L² | Fixed and free 1/4; both hinged 1; fixed and hinged 2; both fixed 4 |
| Maximum shear stress ÷ average shear stress in a beam | Rectangle 1.5; circle 4/3 |
| Thin cylinder | Hoop stress pd/2t; longitudinal stress pd/4t. Both are tensile under internal pressure. |
| Projectile | Greatest range at 45°, and that range is u²/g |
| Sudden load | Twice the stress of the same load applied gradually |
| Independent elastic constants | 2 for an isotropic material |

### Relations that save a step

| Relation | Use it when |
| --- | --- |
| F = μN, tan φ = μ, angle of repose = φ | Friction. A block on a slope slips when tan θ is more than μ. |
| P/sin α = Q/sin β = R/sin γ | Lami's theorem: three concurrent forces in equilibrium, each over the sine of the angle between the other two |
| R = 2P cos(θ/2) | Resultant of two equal forces P at angle θ |
| δ = PL/(AE) | Extension of a bar under an axial load |
| E = 2G(1 + ν) = 3K(1 − 2ν) = 9KG/(3K + G) | Converting between elastic constants |
| σ = EαΔT | Thermal stress in a fully restrained bar. It does not depend on length or area. |
| V = dM/dx | Shapes of the diagrams: the BMD is one degree higher than the SFD, and the moment peaks where the shear force is zero |
| Maximum moments | Cantilever: WL (end load), wL²/2 (UDL). Simply supported: WL/4 (central load), wL²/8 (UDL). |
| M/I = σ/y = E/R, so σ = M/Z | Bending stress |
| T/J = τ/r = Gθ/L, so τ = 16T/(πd³) | Torsion of a solid shaft |
| P = 2πNT/60 | Power in watts, with N in rpm and T in N·m |
| Deflections | Cantilever: WL³/(3EI), wL⁴/(8EI). Simply supported: WL³/(48EI), 5wL⁴/(384EI). |
| Slopes | Cantilever free end: WL²/(2EI), wL³/(6EI). Simply supported ends: WL²/(16EI), wL³/(24EI). |
| P = π²EI/Lₑ² | Euler's buckling load, with the effective length Lₑ |
| Radius of Mohr's circle = (σ₁ − σ₂)/2 | It is also the maximum in-plane shear stress. The centre is at (σₓ + σᵧ)/2 on the normal-stress axis. |
| δ = 8WD³n/(Gd⁴), k = Gd⁴/(8D³n), τ = 8WD/(πd³) | Close-coiled helical spring: deflection, stiffness and shear stress |

### Unit traps

- **N and mm give MPa.** Change kN to N and metres to mm before using σ = P/A, σ = M/Z or τ = 16T/(πd³). A torque in N·m becomes N·mm when multiplied by 1000.
- **Diameter or radius.** pd/2t uses the diameter. If the question gives the radius, double it first.
- **Effective length, not actual length.** Euler's load and the slenderness ratio both use Lₑ, and the least radius of gyration.
- **Which axis.** bd³/12 has the cube on the dimension perpendicular to the bending axis. A beam on edge and a beam laid flat have different values of I.
- **km/h to m/s.** Divide by 3.6.

### Eliminating options

- **Check the power of L.** A deflection must look like WL³/(EI) or wL⁴/(EI), and a slope like WL²/(EI) or wL³/(EI). An option with the wrong power cannot be right.
- **Use scaling for "doubled" and "halved" questions.** Deflection under a point load goes as L³, torque capacity as d³, Euler load as 1/L², and strain energy in bending as L³. The answer is the power, with no formula to work out in full.
- **Check the sense.** A heated bar held at both ends is in compression. Internal pressure puts a shell in tension. A stiffer end condition raises the buckling load and lowers the deflection.
- **Statement questions.** Mark each statement true or false before you look at the options.
- **"NOT" questions.** Mark every option true or false. The single false one is the answer.

## Mock 1

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 6 questions come from Kerala PSC papers (2023, 2025 and 2026), 7 from SSC JE, 6 from RRB JE and 6 from other exams.

**Q1. SSC JE Mechanical, 3 December 2025 (Shift 2) · Topic 1.** The resultant of two equal forces P making an angle Φ is given by: (a) 2P sin(Φ/2) (b) 2P cos(Φ/2) (c) 2P tan(Φ/2) (d) 2P cot(Φ/2)

*Answer: (b) 2P cos(Φ/2).*

For two forces P and Q at an angle Φ, R² = P² + Q² + 2PQ cos Φ. With Q = P this becomes R² = 2P²(1 + cos Φ) = 4P² cos²(Φ/2), so R = 2P cos(Φ/2). The resultant lies along the bisector of the angle.

- **(a) 2P sin(Φ/2):** put Φ = 0. Two forces in the same direction must add to 2P, but this gives zero.
- **(c) and (d):** tan and cot grow without limit as Φ approaches 180° or 0°. A resultant can never be more than 2P.

**Quick check:** try Φ = 0 (the answer must be 2P) and Φ = 180° (the answer must be 0). Only (b) passes both.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** A steel bar ABCD has a cross-section of 20 mm × 10 mm. It carries axial forces of 50 kN at A (pulling to the left), 15 kN at B (acting to the right), 10 kN at C (acting to the left) and 45 kN at D (pulling to the right). The stress in the section BC is (a) 25 MPa (compressive) (b) 175 MPa (compressive) (c) 25 MPa (tensile) (d) 175 MPa (tensile)

*Answer: (d) 175 MPa (tensile).*

Cut the bar between B and C and keep the left part. The forces on it are 50 kN to the left at A and 15 kN to the right at B. The cut face must supply 50 − 15 = 35 kN to the right, which pulls on the piece, so BC is in tension. Area = 20 × 10 = 200 mm². Stress = 35,000/200 = 175 MPa. Check from the right part: 45 − 10 = 35 kN, the same.

- **(a) and (c) 25 MPa:** this is 5 kN ÷ 200 mm². It comes from using only the forces at B and C (15 − 10) and ignoring the end loads.
- **(b) 175 MPa (compressive):** the size is right but the sense is wrong. The end forces pull outward, so every segment is in tension: AB carries 50 kN, BC 35 kN and CD 45 kN.

**The trap:** the force in a segment is the sum of all the forces on one side of the cut. It is not found from the two forces at the ends of that segment.

**Q3. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 5.** The shape of the bending moment diagram for a cantilever beam subjected to a uniformly distributed load (UDL) over the whole length is \_\_\_\_\_\_. (a) Rectangular (b) Triangular (c) Trapezoidal (d) Parabolic

*Answer: (d) Parabolic.*

At a distance x from the free end, the load on that length is wx and it acts at x/2. So M = wx²/2, a second-degree curve. It is zero at the free end and wL²/2 at the fixed end.

- **(a) Rectangular:** a constant moment. That is a cantilever with a couple at its free end.
- **(b) Triangular:** a cantilever with a point load at the free end, where M = Wx. The shear force diagram of this UDL beam is also a triangle, which is why the option is tempting.
- **(c) Trapezoidal:** no single standard load on a cantilever gives this.

**Memory aid:** each step from load to shear force to bending moment raises the degree by one. A UDL is constant, so the shear force is a straight line and the bending moment is a parabola.

**Q4. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 2.** Two bodies have masses of 3 kg and 5 kg, moving with velocities of 4 m/s and 6 m/s respectively, in the same direction. What is the total momentum of the system in kg·m/s? (a) 38 (b) 42 (c) 48 (d) 50

*Answer: (b) 42.*

Momentum is mass × velocity and it is a vector. The bodies move the same way, so the two values add: 3 × 4 + 5 × 6 = 12 + 30 = 42 kg·m/s.

- **(a) 38:** the velocities swapped: 3 × 6 + 5 × 4.
- **(c) 48:** the total mass times the higher speed: 8 × 6.
- **(d) 50:** 5 × (4 + 6). It has no physical meaning here.

**The trap:** read the directions. If the bodies moved in opposite directions, the answer would be 30 − 12 = 18 kg·m/s.

**Q5. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 8.** A hollow shaft is designed to transmit a torque of 40,000 N·m. Its polar moment of inertia is 0.004 m⁴, the ratio of inner to outer diameter is 0.8 and the inner diameter is 400 mm. The maximum shear stress induced at the outer fibre is: (a) 0.25 MPa (b) 2.5 MPa (c) 2500 MPa (d) 250 MPa

*Answer: (b) 2.5 MPa.*

The stress is greatest at the outer radius, so find that first. Outer diameter = 400/0.8 = 500 mm, so R = 0.25 m. Then τ = TR/J = 40,000 × 0.25/0.004 = 2,500,000 N/m² = 2.5 MPa.

- **(a) 0.25 MPa:** a slip of one decimal place.
- **(c) 2500 MPa:** 2,500,000 N/m² read as kPa. It is 2500 kPa, which is 2.5 MPa.
- **(d) 250 MPa:** a slip of two decimal places.

**The trap:** J is given, so do not work it out again. The only step is to get the outer radius from the diameter ratio. With SI units throughout (N·m, m, m⁴) the answer comes in N/m², and 10⁶ N/m² = 1 MPa.

**Q6. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** The force of friction between two surfaces in contact is directly proportional to which of the following? (a) Normal reaction (b) Angle of friction (c) Angle of repose (d) Velocity

*Answer: (a) Normal reaction.*

Limiting friction F = μN. For a given pair of surfaces μ is constant, so the friction force rises in step with the normal reaction N. It does not depend on the area of contact.

- **(b) Angle of friction:** tan φ = μ. It is a property of the two surfaces, not something the force is proportional to.
- **(c) Angle of repose:** the slope at which a block just starts to slide. It equals the angle of friction.
- **(d) Velocity:** dry friction is almost independent of sliding speed.

**Q7. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** The ratio of the moment of inertia about the neutral axis to the distance to the extreme point of the section from the neutral axis is called (a) Polar moment of inertia (b) Section modulus (c) Modulus of rigidity (d) Centroid

*Answer: (b) Section modulus.*

Z = I/y, with y measured to the farthest fibre. From σ = My/I, the greatest bending stress is σ = M/Z. A larger Z means a lower stress for the same moment, so Z measures the bending strength of a section. For a rectangle Z = bd²/6, and for a circle Z = πd³/32.

- **(a) Polar moment of inertia:** J = Iₓₓ + Iᵧᵧ, taken about the axis of the shaft. It is used in torsion.
- **(c) Modulus of rigidity:** G = shear stress ÷ shear strain. It is a property of the material, not of the section.
- **(d) Centroid:** a point, not a ratio.

**Q8. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 3.** If a material has a Poisson's ratio of 0.25 and a Young's modulus of 70 GPa, what is its shear modulus? (a) 38 GPa (b) 48 GPa (c) 28 GPa (d) 18 GPa

*Answer: (c) 28 GPa.*

E = 2G(1 + ν), so G = E/\[2(1 + ν)\] = 70/(2 × 1.25) = 28 GPa.

- **(a) 38 GPa and (b) 48 GPa:** G is always less than E/2 = 35 GPa, because ν is positive. Both are out without any working.
- **(d) 18 GPa:** ν cannot be more than 0.5, so G cannot be less than E/3 = 23.3 GPa.

**The trap:** the other formula, E = 3K(1 − 2ν), gives K = 70/1.5 = 46.7 GPa. That is the bulk modulus, and it is close to option (b).

**Q9. SSC JE Mechanical, 22 January 2018 (Evening) · Topic 9.** For which type of column the buckling load will be maximum? (a) One end clamped and other free (b) Both ends clamped (c) Both ends hinged (d) One end hinged other is free

*Answer: (b) Both ends clamped.*

Euler's load is P = π²EI/Lₑ², so the shortest effective length gives the largest load. With both ends clamped (fixed), Lₑ = L/2 and P = 4π²EI/L².

- **(a) One end clamped and other free:** Lₑ = 2L, so P = π²EI/(4L²). This is the weakest case.
- **(c) Both ends hinged:** Lₑ = L, so P = π²EI/L², one quarter of the clamped value.
- **(d) One end hinged other is free:** this is not a stable column at all. It would simply swing about the hinge.

**Memory aid:** as a multiple of π²EI/L², the load is 1/4 (fixed and free), 1 (both hinged), 2 (fixed and hinged), 4 (both fixed).

**Q10. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2) · Topic 11.** What will be the nature of longitudinal stress in a thin closed cylinder containing hydrostatic fluid pressure? (a) Bending (b) Shear (c) Compressive (d) Tensile

*Answer: (d) Tensile.*

The fluid presses on both end plates and tries to pull the cylinder apart along its length. The wall resists with a tensile stress, σ = pd/4t. The hoop stress, pd/2t, is tensile too.

- **(a) Bending:** thin-shell theory takes the stress as uniform through the thin wall, so there is no bending.
- **(b) Shear:** the hoop and longitudinal directions are the principal directions, and no shear stress acts on them.
- **(c) Compressive:** this would need the pressure to act from outside.

**Memory aid:** internal pressure stretches the shell in every direction. Hoop stress is twice the longitudinal stress, and both are tensile.

**Q11. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 5.** Maximum bending moment of a simply supported beam of uniform cross section and span L with central point load W is given by the formula: (a) WL/2 (b) WL/3 (c) WL/4 (d) WL²/2

*Answer: (c) WL/4.*

By symmetry each support carries W/2. The moment is greatest under the load, at the centre: (W/2) × (L/2) = WL/4.

- **(a) WL/2:** the full load W times L/2. The reaction is only half the load.
- **(b) WL/3:** not a standard value for any common beam.
- **(d) WL²/2:** the units are wrong. W is a force, so W × L² is not a moment. With w per metre, wL²/2 is the cantilever value under a UDL.

**Memory aid:** simply supported: WL/4 for a central load and wL²/8 for a UDL. Cantilever: WL and wL²/2.

**Q12. SSC JE Civil, 3 March 2017 (Evening) · Topic 7.** The expression of the maximum slope at the free end of a cantilever beam of span 'L', flexural rigidity 'EI' and subjected to uniformly distributed load intensity 'w' is (a) wL²/(2EI) (b) wL³/(3EI) (c) wL⁴/(8EI) (d) wL³/(6EI)

*Answer: (d) wL³/(6EI).*

For a cantilever with a UDL, the slope at the free end is wL³/(6EI) and the deflection there is wL⁴/(8EI).

- **(a) wL²/(2EI):** this has the form of the end-load slope, WL²/(2EI), where W is a force. With w per metre the units do not give an angle.
- **(b) wL³/(3EI):** this copies the 3 from the end-load deflection, WL³/(3EI).
- **(c) wL⁴/(8EI):** the deflection of the same beam. It is a length, not a slope.

**Memory aid:** the four cantilever denominators are 2, 3, 6, 8. End load: slope WL²/(2EI), deflection WL³/(3EI). UDL: slope wL³/(6EI), deflection wL⁴/(8EI).

**Q13. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 1.** A force of 10 N acts along a line OB, which makes an angle of 60° with the horizontal line OA. What is the component of the force along the direction of the acute angle bisector of angle AOB? (a) 10 sin 30° N (b) 10 cos 60° N (c) 10 N (d) 10 cos 30° N

*Answer: (d) 10 cos 30° N.*

The bisector splits the 60° angle, so it lies 30° from OB. The component of a force along a direction at angle θ to it is F cos θ, which gives 10 cos 30° = 8.66 N.

- **(a) 10 sin 30° N:** 5 N, the component perpendicular to the bisector.
- **(b) 10 cos 60° N:** 5 N, the component along the horizontal OA.
- **(c) 10 N:** the whole force. That is its component only along OB itself.

**The trap:** the angle that matters is the one between the force and the direction asked for. Here it is 30°, not the 60° printed in the question.

**Q14. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 4.** A metallic rod of uniform diameter and length L with coefficient of thermal expansion α and Young's modulus E is constrained between two rigid walls. If the temperature rise is ΔT, the thermal stress developed in the rod is (a) EαΔT (b) Eα/ΔT (c) αΔT (d) EαΔT²

*Answer: (a) EαΔT.*

If the rod were free it would grow by αΔT × L. The walls stop all of that, so the strain prevented is αΔT and the stress is E × strain = EαΔT. It is compressive, and it does not depend on the length or the diameter.

- **(b) Eα/ΔT:** the stress would fall as the rod gets hotter, which is absurd.
- **(c) αΔT:** this is the strain, not the stress.
- **(d) EαΔT²:** the units are not those of stress, because αΔT is already a pure number.

**Q15. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 3.** The ratio of lateral strain to longitudinal strain is termed as (a) Poisson's ratio (b) Bulk modulus (c) Modulus of rigidity (d) Modulus of elasticity

*Answer: (a) Poisson's ratio.*

A bar pulled along its length gets longer and thinner. Poisson's ratio ν = lateral strain ÷ longitudinal strain. It is a pure number: about 0.3 for steel and close to 0.5 for rubber.

- **(b) Bulk modulus:** K = equal all-round stress ÷ volumetric strain.
- **(c) Modulus of rigidity:** G = shear stress ÷ shear strain.
- **(d) Modulus of elasticity:** E = normal stress ÷ longitudinal strain.

**Quick check:** the three moduli are a stress divided by a strain, so they have units of stress. Only Poisson's ratio is strain divided by strain.

**Q16. UPSSSC JE Mechanical 2016 (Paper 2) · Topic 10.** The centre of the 'Mohr's circle' for a two-dimensional stress system lies (a) On X-axis (b) On Y-axis (c) On Z-axis (d) On 45° of X-axis

*Answer: (a) On X-axis.*

Mohr's circle is drawn with normal stress on the horizontal (X) axis and shear stress on the vertical (Y) axis. Its centre is at ((σₓ + σᵧ)/2, 0). The shear coordinate is zero, so the centre is always on the X-axis.

- **(b) On Y-axis:** the centre is at the origin only when σₓ + σᵧ = 0, as in pure shear. That is a special case, not the rule.
- **(c) On Z-axis:** the diagram has only two axes.
- **(d) On 45° of X-axis:** 45° is the angle between the principal planes and the planes of maximum shear in the body. It has nothing to do with where the centre is.

**Q17. RSMSSB JE Civil, 7 February 2025 · Topic 8.** A solid circular shaft is subjected to a bending moment M and a torque T. If the maximum bending stress is equal to the maximum shear stress developed, then M is equal to: (a) T/2 (b) 2T (c) T/4 (d) T

*Answer: (a) T/2.*

Maximum bending stress σ = 32M/(πd³). Maximum shear stress from the torque τ = 16T/(πd³). Setting them equal gives 32M = 16T, so M = T/2.

- **(b) 2T:** the ratio turned upside down.
- **(c) T/4:** a factor of 2 used twice.
- **(d) T:** this assumes the same modulus for bending and for torsion.

**Memory aid:** for a solid circle the polar modulus (πd³/16) is twice the section modulus (πd³/32). So a moment produces twice the stress that an equal torque does.

**Q18. UPPSC AE Civil 2024, Paper I (28 September 2025) · Topic 5.** A cantilever beam 6 m long carries a point load of 100 kN at its free end and a point load 'W' at its middle. If the maximum bending moment in the cantilever beam is 900 kNm, the value of load 'W' will be \_\_\_\_\_\_ kN. (a) 100 (b) 150 (c) 250 (d) None of the above

*Answer: (a) 100.*

The moment in a cantilever is greatest at the fixed end. There, the end load has an arm of 6 m and the middle load an arm of 3 m. So 100 × 6 + W × 3 = 900, which gives 3W = 300 and W = 100 kN.

- **(b) 150:** this is 900/6, the single load at the free end that would give 900 kNm on its own.
- **(c) 250:** this would give 600 + 750 = 1350 kNm.
- **(d) None of the above:** not needed, because (a) fits exactly.

**The trap:** each load has its own arm, measured from the fixed end. The middle load acts at 3 m, not 6 m.

**Q19. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 2.** If a block slides down a rough plane inclined at 30° with a coefficient of friction of 0.2, the net acceleration is: (a) 0.326 g (b) Zero (c) 0.676 g (d) 0.5 g

*Answer: (a) 0.326 g.*

Down the slope, gravity gives mg sin θ and friction μmg cos θ opposes it. So a = g(sin θ − μ cos θ) = g(0.5 − 0.2 × 0.866) = 0.327 g. The paper prints 0.326 g.

- **(b) Zero:** the block would stay still only if μ were at least tan 30° = 0.577.
- **(c) 0.676 g:** friction added in place of subtracted, g(0.5 + 0.173). That is the retardation of a block sliding up the plane.
- **(d) 0.5 g:** g sin 30°, the value on a smooth plane.

**Quick check:** friction can only reduce the acceleration, so the answer must lie between zero and 0.5 g. That leaves (a) alone.

**Q20. RSSB JE Mechanical (Degree), 6 February 2025 (Shift 1) · Topic 6.** The nature of shear stress distribution in a rectangular beam is: (a) Linear (b) Uniform (c) Elliptic (d) Parabolic

*Answer: (d) Parabolic.*

From τ = VAȳ/(Ib), a rectangle of depth d gives τ = (V/2I)(d²/4 − y²). This is a parabola in y. It is zero at the top and bottom faces and greatest at the neutral axis, where it is 1.5 times the average value V/(bd).

- **(a) Linear:** that is the bending stress, which varies in a straight line from zero at the neutral axis.
- **(b) Uniform:** V/(bd) is only the average.
- **(c) Elliptic:** not a result for any beam section.

**Memory aid:** bending stress is linear and peaks at the outer fibres. Shear stress is parabolic and peaks at the neutral axis.

**Q21. RSMSSB JE Civil (Diploma), October 2016 · Topic 9.** A column of length 1.5 m is pinned at both ends has radius of gyration 150 mm. The slenderness ratio will be: (a) 150 (b) 100 (c) 10 (d) 5

*Answer: (c) 10.*

Slenderness ratio = effective length ÷ least radius of gyration. With both ends pinned, Lₑ = L = 1500 mm. So the ratio is 1500/150 = 10.

- **(a) 150:** the radius of gyration itself.
- **(b) 100:** 1.5 m changed to 15,000 mm, a slip of ten.
- **(d) 5:** uses Lₑ = L/2, which is for both ends fixed.

**The trap:** two things must be right before dividing: the same units top and bottom, and the effective length for the end conditions given.

**Q22. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** If a number of forces act simultaneously on a particle, it is possible: (a) Not to replace them with a single force (b) To replace them with a single force (c) Not to replace them with two forces acting through the centre of gravity (d) To replace them with a couple

*Answer: (b) To replace them with a single force.*

A particle is a point, so every force on it passes through the same point. Concurrent forces add as vectors into one resultant force, which has the same effect as all of them together.

- **(a):** the opposite of the rule.
- **(c):** any force can be split into two components through the same point, so two forces can also replace the system.
- **(d) a couple:** a couple needs two equal and opposite parallel forces with a distance between them. A particle has no size to give that distance.

**Q23. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 7.** The strain energy stored in a cantilever beam of length 'l' with an end load 'P' is given as 150 N-m. If the length of the cantilever is doubled, the strain energy stored will be (a) 600 N-m (b) 1200 N-m (c) 75 N-m (d) 300 N-m

*Answer: (b) 1200 N-m.*

Strain energy = work done by the load = ½ × P × deflection. The end deflection is Pl³/(3EI), so U = P²l³/(6EI). U goes as l³. Doubling the length multiplies it by 2³ = 8, and 8 × 150 = 1200 N-m.

- **(a) 600 N-m:** a factor of 4, as if U went as l².
- **(c) 75 N-m:** halved. A longer cantilever bends more and stores more energy, not less.
- **(d) 300 N-m:** a factor of 2. That is right for a bar under axial load, where U = P²L/(2AE).

**The trap:** in bending, the energy follows the deflection, and the deflection goes as the cube of the length.

**Q24. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 3.** When a mild steel bar is loaded in tension within the elastic limit, the relation between stress and strain is: (a) Stress ∝ Strain (b) Stress independent of strain (c) Stress ∝ √(Strain) (d) Stress ∝ (Strain)²

*Answer: (a) Stress ∝ Strain.*

This is Hooke's law: σ = Eε. The constant E is Young's modulus, about 200 GPa for steel. On the stress-strain diagram it is the straight line from the origin.

- **(b) Stress independent of strain:** this describes yielding, where the strain grows with almost no rise in stress. Yielding comes after the elastic limit.
- **(c) and (d):** these are curves. The elastic part of the diagram for mild steel is a straight line.

**Q25. JKPSC AE Civil 2009 · Topic 11.** When a close coiled helical spring of mean diameter D is subjected to an axial load W, the deflection of the spring is (n is the number of coils and d is the diameter of the wire): (a) 4WD³n/(Gd⁴) (b) 8WD³n/(Gd⁴) (c) 16WD³n/(Gd⁴) (d) 32WD³n/(Gd⁴)

*Answer: (b) 8WD³n/(Gd⁴).*

The load twists the wire with a torque T = WD/2 over a wire length of πDn. The twist is θ = TL/(GJ) = (WD/2)(πDn)/(Gπd⁴/32) = 16WD²n/(Gd⁴). The load moves down by θ × D/2, so δ = 8WD³n/(Gd⁴).

- **(a) and (d):** the wrong constant. Only 8 comes out of the working.
- **(c) 16:** the 16 belongs to the angle of twist, before multiplying by D/2.

**Memory aid:** stiffness is load ÷ deflection, so k = Gd⁴/(8D³n). With the mean radius R in place of D, the deflection reads 64WR³n/(Gd⁴).

## Mock 2

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 5 questions come from Kerala PSC papers (2023, 2025 and 2026), 6 from SSC JE, 3 from RRB JE and 11 from other exams.

**Q1. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** Ultimate strength and breaking strength in tensile loading is almost same for: (a) Ductile materials (b) Brittle materials (c) Crystalline materials (d) Amorphous materials

*Answer: (b) Brittle materials.*

A brittle material such as cast iron or glass breaks with almost no plastic stretch and no neck. The load keeps rising until the piece snaps, so the highest stress it reaches is also the stress at which it breaks.

- **(a) Ductile materials:** after the ultimate point a neck forms and the load falls before fracture. The breaking stress, worked on the original area, is lower than the ultimate stress.
- **(c) Crystalline materials:** this describes how the atoms are arranged. Metals are crystalline whether they are ductile or brittle.
- **(d) Amorphous materials:** again a statement about structure. Glass is amorphous and brittle, but many amorphous polymers stretch a lot.

**Q2. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** According to Lami's Theorem, each force in a system of three concurrent, coplanar forces is proportional to which of the following? (a) The cosine of the angle between the other two forces (b) The sine of the angle between the other two forces (c) The tangent of the angle between the other two forces (d) The cotangent of the angle between the other two forces

*Answer: (b) The sine of the angle between the other two forces.*

Three forces in equilibrium form a closed triangle when drawn head to tail. Applying the sine rule to that triangle gives P/sin α = Q/sin β = R/sin γ, where α is the angle between Q and R, and so on.

- **(a) cosine:** cosines appear when resolving a force into components and in the parallelogram law, not in Lami's theorem.
- **(c) and (d):** tangent and cotangent do not appear in the sine rule.

**The trap:** the angle is the one between the other two forces, not an angle next to the force itself. The theorem also needs the three forces to be in equilibrium.

**Q3. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 5.** The maximum bending moment for a simply supported beam of span L with uniformly distributed load (UDL) w per unit length is \_\_\_\_\_\_. (a) wL²/12 (b) wL²/2 (c) wL²/16 (d) wL²/8

*Answer: (d) wL²/8.*

Each reaction is wL/2. The shear force is zero at mid-span, so the moment peaks there: (wL/2)(L/2) − (wL/2)(L/4) = wL²/4 − wL²/8 = wL²/8.

- **(a) wL²/12:** the moment at the ends of a beam fixed at both ends under a UDL.
- **(b) wL²/2:** the moment at the fixed end of a cantilever under a UDL.
- **(c) wL²/16:** not a standard value.

**Q4. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 8.** For a circular shaft of diameter 'd' subjected to torque 'T', the maximum value of the shear stress is: (a) 16T/(πd³) (b) 128T/(πd³) (c) 32T/(πd³) (d) 64T/(πd³)

*Answer: (a) 16T/(πd³).*

τ = Tr/J. At the surface r = d/2, and J = πd⁴/32. So τ = T(d/2)(32)/(πd⁴) = 16T/(πd³).

- **(c) 32T/(πd³):** 32 belongs to bending, σ = 32M/(πd³). You also get it by forgetting to halve the diameter.
- **(d) 64T/(πd³):** 64 comes from I = πd⁴/64, which is for bending about a diameter.
- **(b) 128T/(πd³):** not from any formula.

**Memory aid:** 16 for torque, 32 for moment. Both sit over πd³.

**Q5. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 2.** If a constant force is applied to a body, which of the following must be true? (a) The body must move with constant velocity (b) The acceleration of the body must be constant (c) The velocity of the body remains constant (d) The body remains at rest

*Answer: (b) The acceleration of the body must be constant.*

Newton's second law: F = ma. A constant net force on a body of fixed mass gives a constant acceleration. The velocity then changes at a steady rate.

- **(a) and (c):** a constant velocity needs zero net force. That is the first law.
- **(d):** a body stays at rest only when the forces on it balance.

**The trap:** force is tied to acceleration, not to velocity. A constant force does not mean a constant speed.

**Q6. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 6.** Select correct expression for bending equation of beam: (a) M/I = σ/R = E/y (b) M/I² = σ/y² = E/R² (c) M/I = y/σ = R/E (d) M/I = σ/y = E/R

*Answer: (d) M/I = σ/y = E/R.*

The three ratios pair up as: moment over moment of inertia, stress over distance from the neutral axis, and Young's modulus over radius of curvature.

- **(a):** y and R have changed places.
- **(b):** nothing in the equation is squared.
- **(c):** the last two ratios are upside down.

**Quick check:** use units. M/I is N·mm ÷ mm⁴ = N/mm³. Stress ÷ length and modulus ÷ length are also N/mm³. Only (d) balances. The torsion equation has the same pattern: T/J = τ/r = Gθ/L.

**Q7. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 1.** Under which scenario is a body on an inclined plane most likely to slip when subjected to a parallel force? (a) Normal reaction is greater than weight (b) Parallel force is opposite to frictional force (c) Coefficient of friction is less than tangent of inclination (d) Frictional force equals weight of the body

*Answer: (c) Coefficient of friction is less than tangent of inclination.*

The weight pulls the body down the slope with mg sin θ. The most that friction can supply is μmg cos θ. If mg sin θ is more than μmg cos θ, that is μ is less than tan θ, friction cannot hold the body even with no other force.

- **(a):** on a slope the normal reaction is mg cos θ, which is less than the weight.
- **(b):** an applied force along the plane always opposes or is opposed by friction. That says nothing about slipping.
- **(d):** friction is at most μmg cos θ, and comparing it with the whole weight is not a slipping condition.

**Memory aid:** the slope at which a body just slips is the angle of repose, and tan(angle of repose) = μ.

**Q8. SSC JE Mechanical, 23 January 2018 (Morning) · Topic 9.** The formula for the Euler's buckling load is given as π²EI/(4L²). This is TRUE for which of the following columns? (a) Column with one end fixed and other end free (b) Column with one end fixed and other end hinged (c) Column with both ends fixed (d) Column with both hinged ends

*Answer: (a) Column with one end fixed and other end free.*

Compare with P = π²EI/Lₑ². Here Lₑ² = 4L², so Lₑ = 2L. That is the flagpole case, fixed at the base and free at the top.

- **(b) fixed and hinged:** Lₑ = L/√2, so P = 2π²EI/L².
- **(c) both fixed:** Lₑ = L/2, so P = 4π²EI/L².
- **(d) both hinged:** Lₑ = L, so P = π²EI/L².

**The trap:** a 4 in the denominator is the weakest column (fixed and free). A 4 in the numerator is the strongest (both fixed).

**Q9. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 3.** Which of the following relationships hold good among modulus of elasticity E, modulus of rigidity G and bulk modulus K? (a) K = 9EG/(3E + G) (b) E = 9KG/(3K + G) (c) E = 6KG/(3K + G) (d) G = 9KE/(2K + G)

*Answer: (b) E = 9KG/(3K + G).*

Start from E = 2G(1 + ν) and E = 3K(1 − 2ν) and remove ν. The result is E = 9KG/(3K + G).

- **(a):** the same pattern with E and K changed over.
- **(c):** 6 in place of 9.
- **(d):** G appears on both sides, so it is not a usable formula.

**Quick check:** take ν = 0.25. Then G = E/2.5 = 0.4E and K = E/1.5 = 0.667E. Option (b) gives 9 × 0.667 × 0.4 ÷ (2 + 0.4) = 1.0, so E = E. Option (c) gives only 0.667E.

**Q10. RSMSSB JE Civil (Diploma) 2021 · Topic 7.** The deflection at centre of simply supported beam of span L, subjected to concentrated load W at mid span is: (a) WL³/(48EI) (b) WL²/(48EI) (c) WL²/(16EI) (d) WL³/(16EI)

*Answer: (a) WL³/(48EI).*

This is the standard result for a central point load on a simply supported beam. The slope at each support is WL²/(16EI).

- **(b) WL²/(48EI):** the wrong power of L. A force times L² over EI is an angle, not a deflection.
- **(c) WL²/(16EI):** the slope at the supports of this same beam.
- **(d) WL³/(16EI):** the 16 of the slope put with the L³ of the deflection.

**Memory aid:** central load: 48 for deflection, 16 for slope. UDL: 5/384 for deflection, 1/24 for slope.

**Q11. SSC JE Civil, 23 March 2021 (Morning) · Topic 11.** If p is internal pressure, d is diameter and t is thickness of wall for a thin cylindrical shell, then the value of hoop stress will be: (a) td/4p (b) pd/4t (c) pd/2t (d) pt/4d

*Answer: (c) pd/2t.*

Cut the cylinder along its length. The pressure tries to split the two halves apart with a force p × d × L. Two strips of wall, each of area t × L, resist it. So σ × 2tL = pdL and σ = pd/2t.

- **(b) pd/4t:** the longitudinal stress, which is half the hoop stress.
- **(a) and (d):** the thickness is on top. A thicker wall must give a lower stress, so t belongs in the denominator.

**Q12. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** What is the maximum value of static friction, just before a body begins to move? (a) Static friction (b) Dynamic friction (c) Limiting friction (d) Rolling friction

*Answer: (c) Limiting friction.*

Static friction adjusts itself to match the applied force, but only up to a ceiling of μN. That ceiling is the limiting friction. Push any harder and the body slides.

- **(a) Static friction:** the general name for friction on a body at rest. It can be anything from zero up to the limiting value.
- **(b) Dynamic friction:** acts once the body is sliding. It is a little less than limiting friction.
- **(d) Rolling friction:** acts on a wheel or a ball. It is much smaller.

**Q13. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 5.** For the shear force S and bending moment M of a beam, which of the following is correct? (a) M = dS/dx (b) S = dM/dx (c) M = d²S/dx² (d) S = d²M/dx²

*Answer: (b) S = dM/dx.*

The slope of the bending moment diagram at any section equals the shear force there. This is why the bending moment is greatest or least where the shear force is zero.

- **(a) M = dS/dx:** the relation turned round. The rate of change of shear force is the load intensity, not the moment.
- **(c) M = d²S/dx²:** not a beam relation.
- **(d) S = d²M/dx²:** the second derivative of M is the load intensity w (with a sign), not the shear force.

**Memory aid:** load, shear force, bending moment. Each one is the slope of the next.

**Q14. UKPSC AE Civil 2013 (Paper I) · Topic 4.** If a composite bar of steel and copper is heated, the copper bar will be under (a) Shear (b) Tension (c) Compression (d) Torsion

*Answer: (c) Compression.*

Copper expands more than steel: α is about 17 × 10⁻⁶ per °C for copper and 12 × 10⁻⁶ for steel. Joined together they must end at the same length. The copper is held back, so it is squeezed. The steel is dragged along, so it is stretched. The two forces are equal and opposite.

- **(b) Tension:** that is the steel. On cooling the two change places.
- **(a) Shear and (d) Torsion:** uniform heating of bars side by side produces only direct stress along their length.

**Memory aid:** on heating, the metal with the higher α goes into compression.

**Q15. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 10.** Maximum principal stress theory is better applicable to: (a) Brittle materials (b) Ductile materials (c) Both (d) Impact loading

*Answer: (a) Brittle materials.*

Rankine's theory says failure occurs when the largest principal stress reaches the strength found in a simple tension test. Brittle materials such as cast iron break by fracture across the plane of greatest normal stress, so the theory fits them.

- **(b) Ductile materials:** they fail by yielding in shear. The maximum shear stress theory (Tresca) and the distortion energy theory (von Mises) are used for them.
- **(c) Both:** the theory is unsafe for ductile materials in some stress states, such as pure shear.
- **(d) Impact loading:** a kind of loading, not a class of material.

**Q16. SSC JE Mechanical, 3 December 2025 (Shift 2) · Topic 3.** The modulus of elasticity is the slope of the stress-strain curve in which region? (a) Necking region (b) Fracture (c) Elastic region (d) Plastic region

*Answer: (c) Elastic region.*

E = stress ÷ strain on the first straight part of the curve, where Hooke's law holds. A steeper line means a stiffer material.

- **(a) Necking region:** this comes after the ultimate point, where the curve falls.
- **(b) Fracture:** a single point at the end of the curve.
- **(d) Plastic region:** the curve is no longer straight, and the strain there is permanent.

**Q17. MPPGCL JE Mechanical, 1 June 2024 · Topic 6.** Which of the following is NOT true about neutral axis (NA) in a beam subjected to bending? (a) Moment of the area about NA is not equal to zero (b) It makes neutral axis plane (c) NA passes through centroid of the section (d) Fibers in NA is not subjected to any stress

*Answer: (a) Moment of the area about NA is not equal to zero.*

The neutral axis passes through the centroid of the section. The first moment of the whole area about any centroidal axis is zero, and that is in fact how the neutral axis is located. So statement (a) is false.

- **(b) true:** the neutral axes of all the cross-sections together form the neutral plane along the beam.
- **(c) true:** for a beam of one material bent within the elastic limit.
- **(d) true:** bending stress is σ = My/I, and y = 0 on the neutral axis.

**The trap:** the question asks for the statement that is NOT true. Mark each one true or false before choosing.

**Q18. UPPSC AE Mechanical 2024, Mains Paper I (29 September 2025) · Topic 2.** A bus starts from rest with an acceleration of 1 m/s². Aman, who is 48 m behind the bus, starts running towards it with a uniform velocity of 10 m/s. He will be able to catch the bus in: (a) 9 seconds (b) 7 seconds (c) 8 seconds (d) 6 seconds

*Answer: (c) 8 seconds.*

Aman covers 10t. The bus covers ½ × 1 × t² and started 48 m ahead. He catches it when 10t = 48 + t²/2, that is t² − 20t + 96 = 0, so (t − 8)(t − 12) = 0. The first meeting is at t = 8 s.

- **(d) 6 seconds:** Aman has run 60 m, and the bus is at 48 + 18 = 66 m. Not yet.
- **(b) 7 seconds:** 70 m against 48 + 24.5 = 72.5 m. Not yet.
- **(a) 9 seconds:** 90 m against 48 + 40.5 = 88.5 m. He has already passed it.

**Quick check:** with numbers like these, testing the options is faster than solving the quadratic. At t = 8, both are at 80 m.

**Q19. RSMSSB JE Civil (Diploma), 11 February 2025 · Topic 8.** A shaft turns at 150 rpm under a torque of 1500 Nm. Power transmitted is: (a) 7.5π kW (b) 15π kW (c) 10π kW (d) 5π kW

*Answer: (a) 7.5π kW.*

Angular speed ω = 2πN/60 = 2π × 150/60 = 5π rad/s. Power = Tω = 1500 × 5π = 7500π W = 7.5π kW, about 23.6 kW.

- **(b) 15π kW:** divides by 30 where it should be 60, so it is double.
- **(d) 5π kW:** 5π is the angular speed in rad/s, not the power.
- **(c) 10π kW:** an arithmetic slip.

**The trap:** the options keep π as a symbol. Do not multiply it out.

**Q20. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 1.** Moment of inertia is always least about: (a) Centroidal axis (b) Bottom most axis (c) Radius of gyration (d) Central axis

*Answer: (a) Centroidal axis.*

The parallel axis theorem says I = Iɢ + Ah², where h is the distance of the axis from the centroid. Ah² is never negative. So among all parallel axes, the one through the centroid (h = 0) gives the least moment of inertia.

- **(b) Bottom most axis:** this adds Ah². For a rectangle, bd³/3 about the base is four times bd³/12 about the centroid.
- **(c) Radius of gyration:** a length, k = √(I/A). It is not an axis.
- **(d) Central axis:** a loose term. The axis through the geometric middle passes through the centroid only for a symmetric section.

**Q21. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1) · Topic 9.** Euler's formula holds good only for: (a) Weak columns (b) Short columns (c) Both short and long columns (d) Long columns

*Answer: (d) Long columns.*

Euler's formula assumes the column fails by elastic buckling. That is true only when the column is slender enough for the buckling stress to be below the crushing stress. For mild steel with hinged ends this needs a slenderness ratio above about 80 to 90.

- **(b) Short columns:** they fail by crushing at σ = P/A. Euler's formula would give a load far too high.
- **(c) Both short and long columns:** Rankine's formula is the one that covers both.
- **(a) Weak columns:** not a class of column.

**Q22. RSMSSB JE Civil (Diploma), 11 February 2025 · Topic 5.** The number of points of contraflexure in a simply supported beam (no overhang) subjected to uniformly distributed load is: (a) 0 (b) 1 (c) 2 (d) 3

*Answer: (a) 0.*

A point of contraflexure is where the bending moment changes sign. Here M = wx(L − x)/2, which is positive (sagging) all along the span. It is zero only at the two supports, and it does not change sign there.

- **(b) 1:** a beam overhanging one support, or a propped cantilever under a UDL.
- **(c) 2:** a beam fixed at both ends under a UDL, or a beam with two overhangs.
- **(d) 3:** not for any single-span beam under a UDL.

**The trap:** zero bending moment is not enough. The moment must pass through zero and change sign.

**Q23. DSSSB JE Mechanical, 6 November 2019 (Shift 1) · Topic 11.** The relationship for helical spring between mean shear stress (Sₘ), mean force (Fₘ), mean diameter (D) and wire diameter (d) is: (a) Sₘ ∝ 16FₘD/(πd⁴) (b) Sₘ ∝ 8FₘD/(πd⁴) (c) Sₘ ∝ 8FₘD/(πd³) (d) Sₘ ∝ 16FₘD/(πd³)

*Answer: (c) Sₘ ∝ 8FₘD/(πd³).*

The axial force twists the wire with a torque T = F × D/2. For a round wire τ = 16T/(πd³) = 16(FD/2)/(πd³) = 8FD/(πd³). In design this is multiplied by the Wahl factor, which is why the question says "proportional to".

- **(d) 16FₘD/(πd³):** the torque taken as F × D. The arm is the mean radius, D/2.
- **(a) and (b):** d⁴ belongs to the deflection formula, 8FD³n/(Gd⁴). Stress has d³.

**Q24. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** The area under the stress strain curve of a mild steel plotted during the tensile test upto rupture gives (a) The toughness of the material (b) The stiffness of the material (c) The resilience of the material (d) All of the above

*Answer: (a) The toughness of the material.*

Stress × strain is energy per unit volume. The whole area up to rupture is the energy the material absorbs before it breaks. That is its toughness (the modulus of toughness).

- **(b) Stiffness:** the slope of the elastic line, which is E.
- **(c) Resilience:** the area only up to the elastic limit, σ²/(2E) per unit volume.
- **(d) All of the above:** only (a) matches the full area.

**Memory aid:** resilience is the small triangle at the start. Toughness is the whole area.

**Q25. MP Sub Engineer Civil, 4 September 2018 (Shift 1) · Topic 7.** If the deflection at the free end of a uniformly loaded cantilever beam of length 1 m is equal to 7.5 mm, then the slope at the free end is: (a) 0.01 radians (b) 0.015 radians (c) 0.02 radians (d) 0.03 radians

*Answer: (a) 0.01 radians.*

Deflection δ = wL⁴/(8EI) and slope θ = wL³/(6EI). Dividing, θ/δ = 8/(6L) = 4/(3L). So θ = 4 × 7.5/(3 × 1000) = 0.01 rad.

- **(b) 0.015 radians:** this is 2δ/L, not a ratio from the formulas.
- **(c) and (d):** neither comes from the two formulas.

**The trap:** you do not need w or EI. Take the ratio of the two formulas and they cancel. Keep the length in mm, the same unit as the deflection.

## Mock 3

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 6 questions come from Kerala PSC papers (2023, 2025 and 2026), 7 from SSC JE, 1 from RRB JE and 11 from other exams.

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 5.** If a simply supported beam carries a point load at the centre of the beam, then the bending moment diagram will be a (a) Parabola with maximum ordinate at the centre of the beam (b) Parabola with maximum ordinate at one end of the beam (c) Triangle with maximum ordinate at the centre of the beam (d) None of the above

*Answer: (c) Triangle with maximum ordinate at the centre of the beam.*

Between a support and the load there is no load on the beam, so the shear force is constant at W/2 and the moment rises in a straight line, M = (W/2)x. It reaches WL/4 at the centre and falls in a straight line on the other side. Two straight lines make a triangle.

- **(a) Parabola with maximum at the centre:** a simply supported beam with a UDL.
- **(b) Parabola with maximum at one end:** a cantilever with a UDL, where the peak is at the fixed end.
- **(d) None of the above:** not needed.

**Memory aid:** point loads give straight-line moment diagrams. Distributed loads give curves.

**Q2. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** A force of 50 N acts at a perpendicular distance of 0.4 m from a pivot. What is the moment about the pivot? (a) 10 Nm (b) 20 Nm (c) 15 Nm (d) 13 Nm

*Answer: (b) 20 Nm.*

Moment = force × perpendicular distance = 50 × 0.4 = 20 N·m.

- **(a), (c) and (d):** none of these comes from 50 × 0.4.

**The trap:** the distance must be perpendicular to the line of the force. If a question gives a distance along a sloping arm, multiply by the sine of the angle first.

**Q3. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 3.** The stress induced in a body due to suddenly applied load compared to, when it is applied gradually is: (a) Four times (b) Same (c) Half (d) Two times

*Answer: (d) Two times.*

A gradual load grows from zero to P, so the work done is ½Pδ and the stress is P/A. A sudden load acts at its full value from the start, so the work done is Pδ. Setting this equal to the strain energy stored gives σ = 2P/A.

- **(a) Four times:** that is the strain energy, which goes as the square of the stress.
- **(b) Same:** true only after the bar stops vibrating and settles.
- **(c) Half:** the ratio upside down.

**Q4. KPSC JE 2017 (Karnataka) · Topic 9.** Euler's buckling load for a column with one end fixed and other end hinged condition is (a) π²EI/L² (b) 2π²EI/L² (c) 4π²EI/L² (d) π²EI/(4L²)

*Answer: (b) 2π²EI/L².*

For one end fixed and the other hinged, Lₑ = L/√2. So Lₑ² = L²/2 and P = π²EI/Lₑ² = 2π²EI/L².

- **(a) π²EI/L²:** both ends hinged.
- **(c) 4π²EI/L²:** both ends fixed.
- **(d) π²EI/(4L²):** one end fixed and the other free.

**Memory aid:** the multiples are 1/4, 1, 2, 4 as the ends go from fixed and free, to both hinged, to fixed and hinged, to both fixed.

**Q5. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 2.** What is the ratio of the new acceleration to the original if the applied force is doubled and the mass is reduced to half? (a) 1:2 (b) 2:1 (c) 1:4 (d) 4:1

*Answer: (d) 4:1.*

a = F/m. The new acceleration is 2F ÷ (m/2) = 4F/m, four times the original.

- **(b) 2:1:** counts only one of the two changes.
- **(a) and (c):** the ratio turned upside down. The question asks for new to original.

**Q6. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** In mechanics, what does the term Coulomb friction refer to? (a) Friction between electrically charged bodies (b) Friction between bodies having relative motion (c) Friction between solids and liquids (d) Friction between dry surfaces

*Answer: (d) Friction between dry surfaces.*

Coulomb friction is another name for dry friction, the friction between unlubricated solid surfaces. Its laws are the familiar ones: the limiting friction is μN and it does not depend on the area of contact.

- **(a):** a trap set by the name. Coulomb's law of electric charges is a different piece of his work.
- **(b):** dry friction also acts when there is no motion (static friction), so this is too narrow.
- **(c):** that is fluid (viscous) friction.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 7.** The reactions at the supports of a statically indeterminate linear elastic structure can be determined by (a) Cauchy's formula (b) Maxwell's reciprocal theorem (c) Castigliano's theorem (d) Lagrange's method

*Answer: (c) Castigliano's theorem.*

Castigliano's theorem: the partial derivative of the strain energy with respect to a load gives the deflection at that load, in its direction. At a support that does not move, the deflection is zero. So ∂U/∂R = 0 for the extra reaction R, and this gives the equation that statics alone cannot.

- **(a) Cauchy's formula:** gives the stress on an inclined plane from the stress components at a point.
- **(b) Maxwell's reciprocal theorem:** the deflection at A due to a load at B equals the deflection at B due to the same load at A. It is a property of elastic structures and does not by itself find reactions.
- **(d) Lagrange's method:** used for equations of motion in dynamics and for optimisation with constraints.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 3.** A rectangular block of height H, length L and depth D is rigidly fixed at the bottom (length L × depth D face). When a tangential force P acts at the top face of the block parallel to the length L, the linear deformation at the top is ΔL. What will be the shear strain of the block? (a) ΔL/H (b) ΔL/L (c) ΔL/D (d) None of these

*Answer: (a) ΔL/H.*

Shear strain is the angle through which the block tilts. For a small angle it equals the sideways movement divided by the height over which it happens: ΔL/H.

- **(b) ΔL/L:** this looks like a direct strain. But L is parallel to the force, and the block does not get longer.
- **(c) ΔL/D:** the depth D only enters the sheared area, L × D, which gives the shear stress P/(LD).

**The trap:** the letter L appears twice. Divide the movement by the dimension perpendicular to the force, which is H.

**Q9. RSSB JE Mechanical (Diploma), 6 February 2025 (Shift 2) · Topic 6.** The strength of the beam mainly depends upon: (a) centre of gravity (b) section modulus (c) bending moment (d) weight

*Answer: (b) section modulus.*

The moment a beam can resist is M = σ × Z, where σ is the allowable stress of the material and Z is the section modulus. For a given material, a larger Z carries a larger moment.

- **(c) bending moment:** this is what the loads demand of the beam, not what the beam can supply.
- **(a) centre of gravity:** it fixes where the neutral axis is, not how strong the section is.
- **(d) weight:** the same weight of steel is strong as a deep I-section and weak as a flat plate.

**Q10. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 8.** Two solid circular shafts of radii R₁ and R₂ are subjected to the same torque. The maximum shear stresses developed in the two shafts are τ₁ and τ₂. If R₁/R₂ = 2, then τ₁/τ₂ is: (a) 16 (b) 8 (c) 1/16 (d) 1/8

*Answer: (d) 1/8.*

For a solid shaft τ = 2T/(πR³), so for the same torque the stress goes as 1/R³. Then τ₁/τ₂ = (R₂/R₁)³ = (1/2)³ = 1/8.

- **(b) 8:** the ratio upside down. The bigger shaft has the lower stress.
- **(a) 16 and (c) 1/16:** the fourth power belongs to J and to the angle of twist, not to the stress.

**Memory aid:** stress goes as 1/d³, twist goes as 1/d⁴.

**Q11. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 1.** If a man pulls a 20 kg square box with a force of 100 N and it accelerates at 2 m/s² in the direction of the force, what are the coefficient of friction and the type of friction acting on the box? (a) 0.31, Static friction (b) 0.26, Static friction (c) 0.26, Kinetic friction (d) 0.31, Kinetic friction

*Answer: (d) 0.31, Kinetic friction.*

Net force = ma = 20 × 2 = 40 N. So friction = 100 − 40 = 60 N. The normal reaction is mg = 20 × 9.81 = 196.2 N. Then μ = 60/196.2 = 0.306, which rounds to 0.31. The box is sliding, so the friction is kinetic.

- **(a) 0.31, Static friction:** static friction acts only while there is no sliding.
- **(b) and (c) 0.26:** this value does not follow from the data.

**Quick check:** settle the type first. The box accelerates, so it is kinetic friction, and that removes (a) and (b) at once. With g = 10 m/s² the value is 0.30.

**Q12. AFCAT EKT Mechanical, 02/2016 · Topic 11.** The hoop stress in a thin cylindrical shell is (a) Longitudinal stress (b) Compressive stress (c) Radial stress (d) Circumferential tensile stress

*Answer: (d) Circumferential tensile stress.*

Hoop stress acts around the circumference, along the tangent to the wall. Under internal pressure it is tensile and it tries to split the shell along a line parallel to its axis. Its value is pd/2t.

- **(a) Longitudinal stress:** acts along the axis and is half the hoop stress.
- **(b) Compressive stress:** this would need pressure from outside.
- **(c) Radial stress:** acts through the wall thickness. It is small and is neglected in a thin shell.

**Q13. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 5.** For a cantilever beam of length l with uniformly distributed load w per unit length and a point load of W at the free end, the bending moment at a distance x from the free end is given by (a) wx²/8 + Wx² (b) wx²/2 − Wx (c) wx²/4 + Wx (d) wx²/2 + Wx

*Answer: (d) wx²/2 + Wx.*

Take the piece of length x from the free end. The point load W has an arm x, giving Wx. The UDL on the piece is wx, acting at x/2, giving wx²/2. Both bend the beam the same way, so they add.

- **(a) wx²/8 + Wx²:** W is a force, so Wx² is not a moment.
- **(b) wx²/2 − Wx:** the minus sign would be right only if W acted upward.
- **(c) wx²/4 + Wx:** the UDL acts at x/2, not x/4.

**Quick check:** put x = l. The fixed-end moment must be wl²/2 + Wl, the two standard values added.

**Q14. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 3.** A cylindrical steel rod with a diameter of 20 mm is subjected to an axial tensile load of 40 kN. The yield strength of the steel is 450 MPa and E = 200 GPa. Assuming the rod stays within the elastic limit, what are the factor of safety based on yield strength and the elongation over a length of 500 mm? (a) Factor of safety 2.25, elongation 0.318 mm (b) Factor of safety 3.58, elongation 0.318 mm (c) Factor of safety 3.58, elongation 0.8 mm (d) Factor of safety 2.25, elongation 0.5 mm

*Answer: (b) Factor of safety 3.58, elongation 0.318 mm.*

Area = π × 20²/4 = 314.2 mm². Stress = 40,000/314.2 = 127.3 MPa. Factor of safety = 450/127.3 = 3.53. Elongation = σL/E = 127.3 × 500/200,000 = 0.318 mm. The paper prints 3.58 for the factor of safety, and it is the only option near 3.53.

- **(a) and (d) 2.25:** this factor would need a working stress of 200 MPa.
- **(c) 0.8 mm:** this elongation would need a stress of 320 MPa.

**Quick check:** work out the elongation first. 0.318 mm leaves (a) and (b), and a factor of about 3.5 then picks (b).

**Q15. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 4.** A bimetal strip of equal length for both metal is packed lengthwise in between two walls and the specimen is heated. Which material will be subjected to tension? (a) Both specimen in equal amount (b) The metal with higher thermal expansion coefficient (c) The metal with lower thermal expansion coefficient (d) There will be compression, instead of tension for both metals

*Answer: (d) There will be compression, instead of tension for both metals.*

The walls stop both metals from growing. Each one is squeezed, with a stress of EαΔT for its own E and α. Neither is in tension.

- **(c) The metal with lower α:** this is the answer for a composite bar that is free at its ends. There the low-α metal is stretched by the other. The walls change the problem.
- **(b) The metal with higher α:** in a free composite bar this metal is in compression, and between walls it is in compression too.
- **(a) Both in equal amount:** neither is in tension, and the two compressive stresses are not equal either.

**The trap:** look for the restraint. Free ends: one metal in tension, one in compression. Between rigid walls: everything in compression.

**Q16. UPPSC AE Civil 2024, Paper I (28 September 2025) · Topic 2.** The value of coefficient of restitution (e) for neither perfectly inelastic nor perfectly elastic body is \_\_\_\_\_\_. (a) 1 (b) Between 0 and 1 (c) 0 (d) None of the above

*Answer: (b) Between 0 and 1.*

e = relative velocity of separation ÷ relative velocity of approach. It is 1 for a perfectly elastic impact, where no kinetic energy is lost. It is 0 for a perfectly plastic impact, where the bodies stay together. Every real impact lies between the two.

- **(a) 1:** perfectly elastic.
- **(c) 0:** perfectly inelastic (plastic).
- **(d) None of the above:** not needed.

**Q17. SSC JE Mechanical, 3 March 2017 (Morning) · Topic 10.** Mohr's circle can be used to determine the following stress on an inclined surface: A. Principal stress B. Normal stress C. Tangential stress D. Maximum shear stress (a) Only A (b) Only B (c) Only C (d) A, B, C and D

*Answer: (d) A, B, C and D.*

Every point on Mohr's circle gives the normal stress and the tangential (shear) stress on one plane through the point. The two ends of the horizontal diameter are the principal stresses. The radius is the maximum shear stress.

- **(a), (b) and (c):** each names one thing the circle gives. It gives all four.

**Memory aid:** an angle θ between planes in the body is 2θ on the circle.

**Q18. RSMSSB JE Civil (Diploma), 11 February 2025 · Topic 6.** For a beam of uniform rectangular section, used as a simply supported beam, the following statements are made: 1. Bending stress at the neutral axis is maximum. 2. Bending stress at the top and bottom edges is maximum. 3. Shear stress is maximum at the top and bottom edges. 4. Shear stress is maximum at the neutral axis. Which of the above statements are correct? (a) 1 and 3 (b) 2 and 4 (c) 1 and 4 (d) 2 and 3

*Answer: (b) 2 and 4.*

Bending stress is σ = My/I. It is zero at the neutral axis (y = 0) and greatest at the top and bottom edges, so 2 is true and 1 is false. Shear stress in a rectangle is parabolic. It is zero at the top and bottom edges and greatest at the neutral axis, so 4 is true and 3 is false.

- **(a) 1 and 3:** both false. This is the correct picture turned upside down.
- **(c) 1 and 4:** 4 is true but 1 is false.
- **(d) 2 and 3:** 2 is true but 3 is false.

**Memory aid:** the two stresses are opposites. Where one is greatest, the other is zero.

**Q19. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** Where is the centre of gravity of a scalene triangle located? (a) The midpoint of the base (b) The intersection of its medians (c) The intersection of its altitudes (d) The midpoint of one of the sides

*Answer: (b) The intersection of its medians.*

A median joins a corner to the middle of the opposite side. The three medians of any triangle meet at one point, the centroid, which is one third of the height above each side.

- **(c) The intersection of its altitudes:** that point is the orthocentre.
- **(a) and (d):** both lie on an edge. The centre of gravity of a triangle is always inside it.

**The trap:** "scalene" is there to unsettle you. The rule is the same for every triangle.

**Q20. UPPSC AE Mechanical 2024, Mains Paper I (29 September 2025) · Topic 8.** For torsional loading applications, the preferred cross-section is: (a) Closed square (b) Closed circular (c) Open circular (d) Flat plate

*Answer: (b) Closed circular.*

A closed circular section keeps its material far from the axis and carries the shear evenly all the way round. Its cross-sections stay plane when it twists. This makes it the most efficient shape for torque.

- **(a) Closed square:** it works, but the corners carry little stress and the section warps.
- **(c) Open circular:** a tube slit along its length. The slit breaks the path of the shear, and the tube becomes very weak and flexible in torsion.
- **(d) Flat plate:** a thin open section, also very weak in torsion.

**Q21. UPPSC AE Civil 2024, Paper I (28 September 2025) · Topic 5.** A beam 10 m long, hinged at both ends, is subjected to a clockwise moment of 40 kNm at a distance of 3 m from one end. Shear force at centre of beam is: (a) 4 kN (b) 6 kN (c) 3 kN (d) 2 kN

*Answer: (a) 4 kN.*

There is no vertical load, so the two reactions must be equal and opposite. Together they form a couple that balances the applied moment: R × 10 = 40, so R = 4 kN. With no load between the supports, the shear force is 4 kN all along the beam, including the centre.

- **(b), (c) and (d):** none comes from 40 ÷ 10.

**The trap:** the 3 m is not needed. Where the couple acts changes the bending moment diagram, but not the reactions or the shear force.

**Q22. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** Work done on a material in simple tension up to fracture is known as: (a) Proof resilience (b) Modulus of resilience (c) Modulus of toughness (d) All the above

*Answer: (c) Modulus of toughness.*

The work done per unit volume up to fracture is the whole area under the stress-strain curve. That is the modulus of toughness.

- **(a) Proof resilience:** the greatest energy a body can store without permanent set, that is up to the elastic limit.
- **(b) Modulus of resilience:** proof resilience per unit volume, σ²/(2E).
- **(d) All the above:** resilience stops at the elastic limit, so it cannot be the same thing.

**Q23. SSC JE Civil, 25 January 2018 (Morning) · Topic 9.** The ratio of crippling loads of a column having both the ends fixed to the column having both the ends hinged, is (a) 4 (b) 2 (c) 1 (d) 3

*Answer: (a) 4.*

P = π²EI/Lₑ². Both ends fixed: Lₑ = L/2, so P = 4π²EI/L². Both ends hinged: Lₑ = L, so P = π²EI/L². The ratio is 4.

- **(b) 2:** the ratio of the effective lengths, not of the loads. It is also the ratio for fixed and hinged against both hinged.
- **(c) 1:** would mean the end fixing makes no difference.
- **(d) 3:** not a ratio between any two standard cases.

**The trap:** the load goes as 1/Lₑ². Halving the effective length makes the column four times as strong, not twice.

**Q24. DDA JE Civil, 1 April 2023 (Shift 2) · Topic 7.** A cantilever beam of span l carries a uniformly distributed load w per unit length over the entire span. The deflection at the free end of the cantilever is (EI is the flexural rigidity): (a) wl²/(8EI) (b) wl²/(4EI) (c) wl⁴/(8EI) (d) wl³/(6EI)

*Answer: (c) wl⁴/(8EI).*

This is the standard result. The slope at the free end of the same beam is wl³/(6EI).

- **(d) wl³/(6EI):** the slope, not the deflection.
- **(a) and (b):** with w per unit length, wl²/(EI) has the units of 1/length. It cannot be a deflection.

**Quick check:** use the power of l. With a load per unit length, the deflection needs l⁴ and the slope needs l³.

**Q25. RPSC Lecturer (Technical Education) Mechanical 2020, Paper 1 · Topic 11.** A thin cylinder of internal diameter D is subjected to an internal pressure of P. If the permissible tensile stress is σₜ, the cylinder wall thickness should be (a) 2σₜ/(PD) (b) PD/σₜ (c) PD/(4σₜ) (d) PD/(2σₜ)

*Answer: (d) PD/(2σₜ).*

The hoop stress is the larger of the two stresses, so it decides the thickness. Setting PD/2t equal to σₜ gives t = PD/(2σₜ).

- **(c) PD/(4σₜ):** this comes from the longitudinal stress. The wall would be half as thick as needed, and the hoop stress would be twice the permissible value.
- **(b) PD/σₜ:** twice the thickness needed.
- **(a) 2σₜ/(PD):** upside down. A higher pressure would give a thinner wall.

**The trap:** always design a thin cylinder on the hoop stress.

## Mock 4

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 5 questions come from Kerala PSC papers (2025 and 2026), 5 from SSC JE, 3 from RRB JE and 12 from other exams.

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 1.** If a body, when given a small angular displacement, occupies a new position and remains at rest in this new position, it is said to possess (a) Stable Equilibrium (b) Unstable Equilibrium (c) Neutral Equilibrium (d) Mechanical Equilibrium

*Answer: (c) Neutral Equilibrium.*

Disturb a body slightly and watch what it does. If it stays wherever you leave it, the equilibrium is neutral. A cylinder lying on its side on a level floor is the usual example: its centre of gravity stays at the same height.

- **(a) Stable Equilibrium:** the body returns to where it was. A cone standing on its base does this, because the disturbance raises its centre of gravity.
- **(b) Unstable Equilibrium:** the body moves further away. A cone balanced on its tip does this.
- **(d) Mechanical Equilibrium:** the general name for forces and moments in balance. It covers all three kinds.

**Q2. UPPSC AE Mechanical 2024, Mains Paper I (29 September 2025) · Topic 5.** If the loading on a beam is a polynomial of degree n, the bending moment diagram will be a polynomial of degree: (a) n + 2 (b) n + 1 (c) n − 1 (d) n

*Answer: (a) n + 2.*

The shear force is the integral of the load, and the bending moment is the integral of the shear force. Each integration raises the degree by one. So the load is of degree n, the shear force n + 1 and the bending moment n + 2.

- **(b) n + 1:** the degree of the shear force diagram.
- **(c) n − 1 and (d) n:** integration never lowers the degree or leaves it the same.

**Quick check:** a UDL is a constant, degree 0. Its shear force diagram is a straight line (degree 1) and its bending moment diagram a parabola (degree 2).

**Q3. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 3.** What is the nature of strain as a physical quantity? (a) It is dimensionless (b) It has units of length (c) It has units of volume (d) It has units of force per area

*Answer: (a) It is dimensionless.*

Strain = change in length ÷ original length. A length divided by a length has no units. It is often quoted as a percentage or in microstrain.

- **(b) units of length:** that is the deformation, such as an elongation in mm.
- **(c) units of volume:** even volumetric strain is a ratio of two volumes, so it too has no units.
- **(d) units of force per area:** that is stress, and also the moduli E, G and K.

**Q4. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 8.** A torsionally equivalent shaft will have: (a) Same angle of twist (b) Same rigidity modulus (c) Same torsional shear stress (d) All the above

*Answer: (a) Same angle of twist.*

A stepped shaft is often replaced, for calculation, by a uniform shaft of one diameter. The uniform shaft is "torsionally equivalent" when it twists through the same angle under the same torque. Its length comes from L/d⁴ = L₁/d₁⁴ + L₂/d₂⁴ + ...

- **(b) Same rigidity modulus:** the material is usually the same, but that is not what defines equivalence.
- **(c) Same torsional shear stress:** stress depends on the diameter at each step, and the equivalent shaft does not reproduce it.
- **(d) All the above:** only the twist is matched.

**Q5. NBCC JE Civil, 10 June 2018 · Topic 11.** A thin walled cylindrical pressure vessel having a radius of 0.5 m and wall thickness of 25 mm is subjected to an internal pressure of 700 kPa. The hoop stress developed is (a) 14 MPa (b) 1.4 MPa (c) 0.14 MPa (d) None of these

*Answer: (a) 14 MPa.*

Hoop stress = pd/2t = pr/t = 700 × 0.5/0.025 = 14,000 kPa = 14 MPa.

- **(b) 1.4 MPa and (c) 0.14 MPa:** slips of a power of ten, usually from mixing mm and m.
- **(d) None of these:** you land here if you put 0.5 m in as the diameter, which gives 7 MPa.

**The trap:** the question gives the radius. Use pr/t, or double the radius before using pd/2t.

**Q6. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 1.** Which of the following is true about the direction of tension in a string? (a) It always acts away from the body it's attached to (b) It always acts toward the pulley (c) It acts opposite to the direction of motion (d) Tension has no direction

*Answer: (a) It always acts away from the body it's attached to.*

A string can only pull. On a free-body diagram, draw the tension starting at the body and pointing along the string, away from the body.

- **(b) toward the pulley:** many strings have no pulley at all, and on the pulley itself the tension pulls away from the pulley.
- **(c) opposite to the direction of motion:** that describes friction. Tension is along the motion when a string lifts a load.
- **(d) no direction:** tension is a force, so it has a direction, along the string.

**Q7. RRB JE CBT-2 Civil, 19 September 2019 (Shift 1) · Topic 9.** A column with highest equivalent length has: (a) One end fixed, the other entirely free (b) Both ends hinged or pin-joined (c) One end fixed, the other end hinged (d) Both ends fixed

*Answer: (a) One end fixed, the other entirely free.*

The equivalent (effective) lengths are 2L for fixed and free, L for both hinged, L/√2 for fixed and hinged, and L/2 for both fixed. The fixed and free column has the longest, so it is also the weakest in buckling.

- **(b) Both ends hinged:** L. This is the standard case the others are compared with.
- **(c) One end fixed, the other hinged:** L/√2, about 0.7L.
- **(d) Both ends fixed:** L/2, the shortest.

**Q8. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** A simple shear stress acting on a body is accompanied by a complementary shear stress of equal magnitude acting in the \_\_\_\_\_\_ direction. (a) Same direction (b) Axial direction (c) Perpendicular direction (d) Longitudinal direction

*Answer: (c) Perpendicular direction.*

Take a small square block with shear stress on its top and bottom faces. These two form a couple that would spin the block. To stop that, an equal and opposite couple must act on the two side faces. So a shear stress of the same size always appears on planes at right angles to the first.

- **(a) Same direction:** that would add to the turning effect, not balance it.
- **(b) Axial and (d) Longitudinal:** these words describe direct stress along a bar, not the plane of a shear stress.

**Q9. SSC JE Civil, 1 March 2017 (Evening) · Topic 6.** The maximum bending stress in an I-beam occurs at the \_\_\_\_\_\_. (a) Neutral axis (b) Outermost fibre (c) Joint of web and flange (d) Section where shear stress is maximum

*Answer: (b) Outermost fibre.*

σ = My/I. For a given section and moment, the stress is greatest where y is greatest, at the fibre farthest from the neutral axis. This holds for every section shape.

- **(a) Neutral axis:** y = 0 there, so the bending stress is zero.
- **(c) Joint of web and flange:** close to the maximum, but still inside the outer face of the flange.
- **(d) Section where shear stress is maximum:** shear stress peaks at the neutral axis, where bending stress is zero.

**Q10. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 2.** Which of the following is not a scalar quantity? (a) Mass (b) Volume / Mass (c) Force × Distance (d) Rate of change of velocity

*Answer: (d) Rate of change of velocity.*

The rate of change of velocity is acceleration. Velocity has a direction, so its rate of change has one too. Acceleration is a vector.

- **(a) Mass:** a scalar. It has size only.
- **(b) Volume / Mass:** specific volume, a scalar divided by a scalar.
- **(c) Force × Distance:** work, which is a scalar even though force is a vector.

**The trap:** a product of vectors is not always a vector. Work is force times the distance moved along the force, and it has no direction.

**Q11. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 5.** The point of contraflexure of a beam means: (i) The point at which bending moment changes sign (ii) The point at which shear force changes sign (iii) This is also known as point of inflection (iv) The point of zero shear force. (a) (i) and (ii) are true (b) (i) and (iii) are true (c) (i) and (iv) are true (d) (i), (iii) and (iv) are true

*Answer: (b) (i) and (iii) are true.*

At a point of contraflexure the bending moment passes through zero and changes sign, so the beam changes from sagging to hogging. The curve of the bent beam changes its sense there, which is why it is also called a point of inflection. So (i) and (iii) are true.

- **(ii) and (iv) are false:** where the shear force is zero or changes sign, the bending moment is at a maximum or minimum. That is a different point.
- **(a) and (c):** each pairs (i) with a false statement about shear force.
- **(d):** includes (iv), which is false.

**Memory aid:** zero shear force means peak bending moment. Zero bending moment with a change of sign means contraflexure.

**Q12. SSC JE Mechanical, 27 October 2020 (Evening) · Topic 7.** The deflection at the center of a fixed-fixed beam carrying a point load at the center is related to the deflection of the simply supported beam by a factor of: (a) 1 (b) 0.25 (c) 0.50 (d) 0.75

*Answer: (b) 0.25.*

Fixed at both ends: WL³/(192EI). Simply supported: WL³/(48EI). The ratio is 48/192 = 0.25.

- **(a) 1:** fixing the ends must reduce the deflection, so the factor is below 1.
- **(c) 0.50 and (d) 0.75:** neither follows from the two formulas.

**Memory aid:** fixing both ends cuts the central deflection to one quarter for a central load, and to one fifth for a UDL (wL⁴/384EI against 5wL⁴/384EI).

**Q13. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 1.** Which of the following statements is true about a couple moment and a force moment? (a) Both depend on the point of reference (b) Only a couple moment depends on the point of reference (c) Both are independent of the reference point (d) A couple moment is independent, but a force moment depends on the point

*Answer: (d) A couple moment is independent, but a force moment depends on the point.*

A couple is two equal and opposite parallel forces F, a distance d apart. Take moments about any point at a distance x beyond one force: F(x + d) − Fx = Fd. The x cancels, so the moment is Fd about every point. The moment of a single force is F times the perpendicular distance from the chosen point, so it changes with the point.

- **(a):** wrong for the couple.
- **(b):** the two are the wrong way round.
- **(c):** wrong for the single force.

**Q14. UPPSC AE Mechanical 2024, Mains Paper I (29 September 2025) · Topic 3.** The number of independent elastic constants required to define an isotropic material are: (a) 9 (b) 21 (c) 5 (d) 2

*Answer: (d) 2.*

An isotropic material has the same properties in every direction. Its four constants E, G, K and ν are tied together by two equations, so any two of them fix the other two.

- **(a) 9:** an orthotropic material, such as wood, with three planes of symmetry at right angles.
- **(b) 21:** a fully anisotropic material.
- **(c) 5:** a transversely isotropic material.

**Q15. TSPSC AEE Civil 2018 (Paper II) · Topic 10.** When the Mohr's circle drawn for a certain stress state on a plane in a body is tangential to the Y-axis, which of the following may be true? (a) Both the bi-axial normal stresses are of equal magnitude but of same nature (b) Shear stress on that plane is zero (c) Both the bi-axial normal stresses are of equal magnitude but of opposite nature (d) One of the bi-axial normal stresses is zero

*Answer: (d) One of the bi-axial normal stresses is zero.*

The Y-axis of the diagram is the shear axis, where the normal stress is zero. A circle that just touches it has one end of its horizontal diameter at the origin. So one principal stress is zero, as in a bar under simple tension: the circle runs from 0 to σ, with centre σ/2 and radius σ/2.

- **(a) Equal and of the same nature:** the circle shrinks to a single point on the X-axis.
- **(c) Equal and of opposite nature:** the centre is at the origin, so the circle cuts the Y-axis at two points.
- **(b) Shear stress on that plane is zero:** true of any principal plane. It does not make the circle touch the Y-axis.

**Q16. UPPSC AE Mechanical 2024, Mains Paper I (29 September 2025) · Topic 8.** A solid circular shaft AB of diameter d and length L is fixed at both ends. A torque T is applied at a section X, such that AX = L/4 and BX = 3L/4. What is the maximum shear stress developed in the shaft? (a) 12T/(πd³) (b) 16T/(πd³) (c) 8T/(πd³) (d) 4T/(πd³)

*Answer: (a) 12T/(πd³).*

Both parts twist through the same angle at X, so the torques are shared in inverse proportion to the lengths: (torque in AX) × L/4 = (torque in BX) × 3L/4. So AX carries three times the torque of BX. The two add up to T, so the short part AX carries 3T/4 and the long part BX carries T/4. The greatest stress is 16(3T/4)/(πd³) = 12T/(πd³).

- **(b) 16T/(πd³):** the whole torque taken by one part, as if the other end were free.
- **(c) 8T/(πd³):** an equal split, T/2 each. That is right only when X is at mid-length.
- **(d) 4T/(πd³):** the stress in the long part, which carries T/4.

**The trap:** the shorter part is stiffer, so it takes the larger share of the torque.

**Q17. UPPSC AE Mechanical 2022, Paper I (29 May 2022) · Topic 4.** A copper bar is fixed at both the ends. Heating of the bar will develop (a) Tensile stress (b) Zero stress (c) Shear stress (d) Compressive stress

*Answer: (d) Compressive stress.*

The bar tries to grow longer and the fixed ends push back on it. A bar that is pushed at both ends is in compression. The stress is EαΔT.

- **(a) Tensile stress:** this happens on cooling, when the bar tries to shrink and the ends hold it.
- **(b) Zero stress:** true only if the bar is free to expand.
- **(c) Shear stress:** the restraint acts along the axis, so the stress is direct.

**Memory aid:** heat and hold gives compression. Cool and hold gives tension.

**Q18. PGCIL Diploma Trainee Civil 2020 · Topic 6.** The section modulus of a rectangle with breadth b and depth d will be: (a) bd³/6 (b) bd³/12 (c) bd²/6 (d) bd²/12

*Answer: (c) bd²/6.*

Z = I/y. For a rectangle I = bd³/12 and the farthest fibre is at y = d/2. So Z = (bd³/12) ÷ (d/2) = bd²/6.

- **(b) bd³/12:** the moment of inertia itself.
- **(a) bd³/6:** this has units of mm⁴. A section modulus is in mm³.
- **(d) bd²/12:** I divided by the full depth d, where it should be d/2.

**Memory aid:** depth counts twice as much as breadth. Doubling the depth makes a beam four times as strong in bending. Doubling the breadth only doubles it.

**Q19. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 1.** Which of the following is not a type of friction? (a) Rolling friction (b) Kinetic friction (c) Gravitational friction (d) Static friction

*Answer: (c) Gravitational friction.*

There is no such thing. Friction is a contact force between surfaces. Gravity acts at a distance and needs no contact.

- **(d) Static friction:** acts while there is no sliding, up to the limiting value.
- **(b) Kinetic friction:** acts during sliding.
- **(a) Rolling friction:** acts on a wheel or ball that rolls. It is the smallest of the three.

**Q20. RSSB JE Mechanical (Degree), 6 February 2025 (Shift 1) · Topic 5.** A simply supported beam has a distributed load of linearly varying intensity with zero at one end to w per unit run at the other end. The value of maximum bending moment is: (a) wl²/8 (b) wl²/(9√3) (c) wl²/4 (d) wl³/4

*Answer: (b) wl²/(9√3).*

The total load is wl/2, acting at 2l/3 from the zero end. So the reaction at the zero end is wl/6. At a distance x from that end the shear force is wl/6 − wx²/(2l). It is zero at x = l/√3. The moment there is (wl/6)(l/√3) − w(l/√3)³/(6l) = wl²/(6√3) − wl²/(18√3) = wl²/(9√3), about 0.064wl².

- **(a) wl²/8:** the value for a full UDL of w. This beam carries only half that load, so its moment must be smaller.
- **(c) wl²/4:** larger still.
- **(d) wl³/4:** the units are wrong for a moment.

**Quick check:** you can answer this without the working. The moment must be a moment (so not d) and must be less than wl²/8 (so not a or c).

**Q21. RSMSSB JE Civil (Degree), May 2022 · Topic 9.** Assumptions made in Euler's theory is/are: (i) The column is initially straight (ii) The cross-section is uniform throughout (iii) The line of thrust coincides exactly with the axis of the column (iv) The material is homogeneous but not isotropic (v) The shortening of the column due to axial compression is negligible. (a) (i), (ii), (iii) and (iv) (b) (i), (ii), (iii) and (v) (c) (ii) and (iii) only (d) All of the above

*Answer: (b) (i), (ii), (iii) and (v).*

Euler's theory assumes a perfectly straight column of uniform section, loaded exactly along its axis, made of a material that is homogeneous and isotropic and obeys Hooke's law. Direct shortening is neglected, and failure is by buckling alone. Statement (iv) says "not isotropic", so it is the one false statement.

- **(a):** includes (iv).
- **(c):** leaves out (i) and (v), which are true.
- **(d):** includes (iv).

**The trap:** one word, "not", is hidden in the middle of statement (iv). Read every statement to the end.

**Q22. SSC Scientific Assistant (Physics), 24 November 2017 (Shift 1) · Topic 2.** If a projectile is thrown with velocity v and making an angle θ with the x-axis, then the maximum horizontal range is given by which of the following formula? (a) R = 2v²/g (b) R = v²/g (c) R = v²/(2g) (d) R = √(v/g)

*Answer: (b) R = v²/g.*

Range R = v² sin 2θ/g. The largest value of sin 2θ is 1, at θ = 45°. So the maximum range is v²/g.

- **(c) v²/(2g):** the greatest height, reached when the body is thrown straight up.
- **(a) 2v²/g:** twice the true value.
- **(d) √(v/g):** the units are not those of a length.

**Q23. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 3.** In the stress-strain curve of a ductile material, the Hooke's law is valid at (a) Necking region (b) Elastic region (c) Rupture point (d) None of the above

*Answer: (b) Elastic region.*

Hooke's law says stress is proportional to strain. That holds on the first straight part of the curve, up to the limit of proportionality, which lies inside the elastic region.

- **(a) Necking region:** this comes after the ultimate stress, when the bar thins at one place.
- **(c) Rupture point:** the end of the curve, where the bar breaks.
- **(d) None of the above:** not needed.

**Q24. HPPSC AE Civil 2016 (HPPTCL) · Topic 7.** A cantilever is subjected to a uniformly distributed load W (= wL) over its whole length L, and a concentrated upward load W at its free end. The deflection at the free end is (a) zero (b) WL³/(384EI) (c) 0.5WL³/(EI) (d) 5WL³/(24EI)

*Answer: (d) 5WL³/(24EI).*

Add the two effects. The upward end load lifts the tip by WL³/(3EI). The UDL, whose total is W, lowers it by wL⁴/(8EI) = WL³/(8EI). Net = WL³/EI × (1/3 − 1/8) = 5WL³/(24EI), upward.

- **(a) zero:** the two loads are equal, but their effects are not. The end load acts at the tip, where it bends the beam most.
- **(b) WL³/(384EI):** 384 belongs to beams supported at both ends.
- **(c) 0.5WL³/(EI):** more than the end load gives on its own (0.333). The UDL can only reduce that.

**Q25. ESE Civil 2014 (Paper 1) · Topic 11.** A close helical spring of 100 mm mean diameter is made of 10 mm diameter rod, and has 20 turns. The spring carries an axial load of 200 N with G = 8.4 × 10⁴ N/mm². The stiffness of the spring is nearly (a) 5.25 N/mm (b) 6.50 N/mm (c) 7.25 N/mm (d) 8.50 N/mm

*Answer: (a) 5.25 N/mm.*

k = Gd⁴/(8D³n) = (8.4 × 10⁴ × 10⁴) ÷ (8 × 100³ × 20) = 8.4 × 10⁸ ÷ 1.6 × 10⁸ = 5.25 N/mm.

- **(b), (c) and (d):** none comes from the formula with these numbers.

**The trap:** the load is not needed. Stiffness is a property of the spring, whatever it carries. The load only matters if the deflection is asked for: 200/5.25 = 38 mm.

## Sources

Every question comes from a real paper. Of the 100 questions, 22 are from Kerala PSC, 25 from SSC JE, 13 from RRB JE and 40 from other JE and AE level exams. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. All the other questions come from Testbook solution pages, which name the paper each question appeared in. Every answer was checked by working the question out. Question numbers below are the numbers in this guide.

A few questions were adjusted so they read cleanly here, without changing the data or the answer:

- **Mock 1 Q2** relied on a figure. The forces and their directions are written in words. The directions are the only ones that keep the bar in equilibrium and match the answer key.
- **Mock 1 Q5 and Q17, Mock 3 Q10 and Q14** are long questions written more briefly.
- **Mock 3 Q14:** the paper prints a factor of safety of 3.58. The exact value is 3.53.
- **Mock 3 Q18:** the statements were lettered (a) to (d) in the paper. They are numbered 1 to 4 here so they are not confused with the options.
- **Mock 4 Q9:** the paper prints "wedge" for "web".
- **Mock 4 Q25:** the load is written as 200 N. The Testbook page prints 200 kN, which a 10 mm wire could not carry. The load does not affect the answer.

**Kerala PSC papers**

- Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- AE (Mechanical, Ports), 065/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)

Question numbers in those papers:

- Mock 1: Q2 is 68/2026 Q4, Q7 is 065/2026 Q46, Q11 is 104/2025 Q6, Q14 is 050/2023 Q16, Q15 is 065/2026 Q50, Q23 is 68/2026 Q8.
- Mock 2: Q1 is 104/2025 Q2, Q9 is 050/2023 Q18, Q13 is 050/2023 Q22, Q15 is 104/2025 Q11, Q24 is 68/2026 Q3.
- Mock 3: Q1 is 065/2026 Q45, Q7 is 68/2026 Q12, Q8 is 050/2023 Q19, Q13 is 050/2023 Q15, Q15 is 104/2025 Q3, Q22 is 104/2025 Q10.
- Mock 4: Q1 is 065/2026 Q3, Q4 is 104/2025 Q5, Q8 is 104/2025 Q9, Q11 is 104/2025 Q7, Q23 is 065/2026 Q42.

**Mock 1, other papers**

- Q1 resultant of equal forces: [Testbook](https://testbook.com/question-answer/the-resultant-of-two-equal-forces-p-making-an-angl--6946c77a86ed7ecb99da3116)
- Q3 cantilever with a UDL: [Testbook](https://testbook.com/question-answer/the-shape-of-the-bending-moment-diagram-for-a-cant--6a523df6663d5a64e3c31005)
- Q4 total momentum: [Testbook](https://testbook.com/question-answer/two-bodies-have-masses-of-3-text-kg-and-5--6946c9bf24dd1216cfdb328e)
- Q5 hollow shaft: [Testbook](https://testbook.com/question-answer/a-hollow-shaft-is-designed-to-transmit-a-torque-of--6a523e0942129b6ecc96df0e)
- Q6 friction and normal reaction: [Testbook](https://testbook.com/question-answer/the-force-of-friction-between-two-surfaces-in-cont--6946c89e477fa6aef88e432a)
- Q8 shear modulus: [Testbook](https://testbook.com/question-answer/if-a-material-has-a-poisson%e2%80%99s-ratio-of-0-25-and--6946c9c386ed7ecb99da5853)
- Q9 strongest column: [Testbook](https://testbook.com/question-answer/for-which-type-of-column-the-buckling-load-will-be--5aa543ae249fec39f10c53e6)
- Q10 longitudinal stress: [Testbook](https://testbook.com/question-answer/what-will-be-the-nature-of-longitudinal-stress-in--681200907bd632a4ee19ea04)
- Q12 cantilever slope: [Testbook](https://testbook.com/question-answer/the-expression-of-the-maximum-slope-at-the-free-en--5e70e548f60d5d6bc4c8fe0e)
- Q13 component of a force: [Testbook](https://testbook.com/question-answer/a-force-of-10-n-acts-along-a-line-ob-which-makes--6a523e262180e6b6359cf259)
- Q16 centre of Mohr's circle: [Testbook](https://testbook.com/question-answer/the-centre-of-the-mohrs-circlersquo--617f846b76a0145f44c1f3e1)
- Q17 moment and torque: [Testbook](https://testbook.com/question-answer/bending-moment-m-and-torque-t-are-applied-on-a--6a757a7b348eaee5d68ed7ad)
- Q18 cantilever with two loads: [Testbook](https://testbook.com/question-answer/a-cantilever-beam-6-m-long-carries-a-point-load-of--6a6b32d67ee1bf58323ce7f8)
- Q19 block on a rough slope: [Testbook](https://testbook.com/question-answer/if-a-block-slides-down-a-rough-plane-inclined-at-3--6a523e2442129b6ecc96e135)
- Q20 shear stress distribution: [Testbook](https://testbook.com/question-answer/the-nature-of-shear-stress-distribution-in-a-recta--6a757c554cbbb82406f8cab4)
- Q21 slenderness ratio: [Testbook](https://testbook.com/question-answer/a-column-of-length-1-5-m-is-pinned-at-both-ends-ha--5e986a01f60d5d0d1b5fecb5)
- Q22 forces on a particle: [Testbook](https://testbook.com/question-answer/if-a-number-of-forces-act-simultaneously-on-a-part--6946c89e8839b00f5ac2be88)
- Q24 stress and strain: [Testbook](https://testbook.com/question-answer/when-a-mild-steel-bar-is-loaded-in-tension-within--6a523e1042129b6ecc96df7c)
- Q25 spring deflection: [Testbook](https://testbook.com/question-answer/when-a-close-coiled-helical-spring-of-mean-diamete--63c971b501d474e0a6bdd54d)

**Mock 2, other papers**

- Q2 Lami's theorem: [Testbook](https://testbook.com/question-answer/according-to-lami%e2%80%99s-theorem-each-force-in-a-sys--6946c8a0477fa6aef88e4331)
- Q3 simply supported beam with a UDL: [Testbook](https://testbook.com/question-answer/the-maximum-bending-moment-for-a-simply-supported--6a523de47c5973aefc65c9a9)
- Q4 shaft shear stress: [Testbook](https://testbook.com/question-answer/for-a-circular-shaft-of-diameter-d-subjected-to--6a757e93c59875d439ecec0b)
- Q5 constant force: [Testbook](https://testbook.com/question-answer/if-a-constant-force-is-applied-to-a-body-which-of--6946c9c0334f851795496fe7)
- Q6 bending equation: [Testbook](https://testbook.com/question-answer/select-correct-expression-for-bending-equation-of--6a757e9adec9c146dc2c25cc)
- Q7 slipping on a slope: [Testbook](https://testbook.com/question-answer/under-which-scenario-is-a-body-on-an-inclined-plan--6a523e2537e618459ee150b5)
- Q8 fixed and free column: [Testbook](https://testbook.com/question-answer/the-formula-for-the-eulers-buckling-load-is--5b2a50e411e46d0c1ff99517)
- Q10 central deflection: [Testbook](https://testbook.com/question-answer/the-deflection-at-centre-of-simply-supported-beam--623bfd7aa387abe34112d352)
- Q11 hoop stress: [Testbook](https://testbook.com/question-answer/if-p-is-internal-pressure-d-is-diameter-and-t-is--6193ac39e73f0c736a86c77c)
- Q12 limiting friction: [Testbook](https://testbook.com/question-answer/what-is-the-maximum-value-of-static-friction-just--6946c89dce58db12afb0471c)
- Q14 copper and steel: [Testbook](https://testbook.com/question-answer/if-a-composite-bar-of-steel-and-copper-is-heated--6178068a260754c65e978a15)
- Q16 modulus of elasticity: [Testbook](https://testbook.com/question-answer/the-modulus-of-elasticity-is-the-slope-of-the-stre--6946c77b24dd1216cfdb0915)
- Q17 neutral axis: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-not-true-about-neutral-a--67836cd4bc9d9f0c41126152)
- Q18 catching the bus: [Testbook](https://testbook.com/question-answer/a-bus-starts-from-rest-with-an-acceleration-of-1-m--6a6b37c80f26f719c86499d2)
- Q19 shaft power: [Testbook](https://testbook.com/question-answer/a-shaft-turns-at-150-rpm-under-a-torque-of-1500-nm--6a757b21eed90c77893e5fd0)
- Q20 least moment of inertia: [Testbook](https://testbook.com/question-answer/moment-of-inertia-is-always-least-about--6a757f169e1d80d563cbb425)
- Q21 Euler's formula and long columns: [Testbook](https://testbook.com/question-answer/eulers-formula-holds-good-only-for--622091e1bf600871b812458e)
- Q22 points of contraflexure: [Testbook](https://testbook.com/question-answer/the-number-of-points-of-contraflexure-in-a-simply--6a757be48f402a7f4fa39655)
- Q23 spring shear stress: [Testbook](https://testbook.com/question-answer/the-relationship-for-helical-spring-between-mean-s--60af8e350d4b395c03be114c)
- Q25 slope from deflection: [Testbook](https://testbook.com/question-answer/if-the-deflection-at-the-free-end-of-a-uniformly-l--5f818e56bc0e06dfd052cb8f)

**Mock 3, other papers**

- Q2 moment of a force: [Testbook](https://testbook.com/question-answer/a-force-of-50-n-acts-at-a-perpendicular-distance-o--6946c8a024dd1216cfdb1e30)
- Q3 sudden load: [Testbook](https://testbook.com/question-answer/the-stress-induced-in-a-body-due-to-suddenly-appli--6a757f15f8f44f0eab953a94)
- Q4 fixed and hinged column: [Testbook](https://testbook.com/question-answer/eulers-buckling-load-for-a-column-with-one--5f573ef18421b2e9e72f1e3b)
- Q5 acceleration ratio: [Testbook](https://testbook.com/question-answer/what-is-the-ratio-of-the-new-acceleration-to-the-o--6946c8a1f51c313e1dda95c4)
- Q6 Coulomb friction: [Testbook](https://testbook.com/question-answer/in-mechanics-what-does-the-term-coulomb-friction--6946c89e22a02aafa1a84d79)
- Q9 strength of a beam: [Testbook](https://testbook.com/question-answer/the-strength-of-the-beam-mainly-depends-upon--6a757bd79e1d80d563cb7591)
- Q10 two shafts: [Testbook](https://testbook.com/question-answer/two-solid-circular-shafts-of-radii-r1-and-r2-a--6a757e903503eb11308c00db)
- Q11 pulled box: [Testbook](https://testbook.com/question-answer/if-a-man-pulls-a-20-kg-square-box-with-a-force--6946c9c08839b00f5ac2d279)
- Q12 hoop stress: [Testbook](https://testbook.com/question-answer/the-hoop-stress-in-a-thin-cylindrical-shell-is--5a5f32c0d62b840f89b859bb)
- Q14 steel rod: [Testbook](https://testbook.com/question-answer/a-cylindrical-steel-rod-with-a-diameter-of-20-mm-i--6a523df5baf14b961c7cbdf7)
- Q16 coefficient of restitution: [Testbook](https://testbook.com/question-answer/the-value-of-coefficient-of-restitution-e-for-ne--6a6b330eb30bbc0137cabc61)
- Q17 uses of Mohr's circle: [Testbook](https://testbook.com/question-answer/mohrs-circle-can-be-used-to-determine-the-fol--5a44d9dfca0c2f0f8b029cd8)
- Q18 stresses in a rectangular beam: [Testbook](https://testbook.com/question-answer/for-a-beam-of-uniform-rectangular-section-used-as--6a757a65f54e185d82e141ea)
- Q19 scalene triangle: [Testbook](https://testbook.com/question-answer/where-is-the-centre-of-gravity-of-a-scalene-triang--6946c89f9440611c5835f6e8)
- Q20 section for torsion: [Testbook](https://testbook.com/question-answer/for-torsional-loading-applications-the-preferred--6a6b37da3e60cd3b2e585424)
- Q21 beam with a couple: [Testbook](https://testbook.com/question-answer/a-beam-10-m-long-hinged-at-both-ends-is-subjected--6a6b32ac7085e60e40f7f217)
- Q23 ratio of crippling loads: [Testbook](https://testbook.com/question-answer/the-ratio-of-crippling-loads-of-a-column-having-bo--5b44b9b52baf8c0c3e3b7520)
- Q24 cantilever deflection: [Testbook](https://testbook.com/question-answer/a-cantilever-beam-of-span-carries-a-uniformly-di--64ad6e235a7bdb2ea8c48ff3)
- Q25 wall thickness: [Testbook](https://testbook.com/question-answer/a-thin-cylinder-of-d-internal--6102e5a70bec93a20c5b7655)

**Mock 4, other papers**

- Q2 degree of the bending moment diagram: [Testbook](https://testbook.com/question-answer/if-the-loading-on-a-beam-is-a-polynomial-of-degree--6a6b37ab70cf7160d11f68b5)
- Q3 strain: [Testbook](https://testbook.com/question-answer/what-is-the-nature-of-strain-as-a-physical-quantit--6a523e1db57cbec906463420)
- Q5 pressure vessel: [Testbook](https://testbook.com/question-answer/a-thin-walled-cylindrical-pressure-vessel-having-a--6238ab3f92df3ba661001a69)
- Q6 tension in a string: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-true-about-the-direction--6946c8a1ab8e823ebfa7d43b)
- Q7 highest equivalent length: [Testbook](https://testbook.com/question-answer/a-column-with-highest-equivalent-length-has--656ae43bcda47e09c3fb53d8)
- Q9 I-beam: [Testbook](https://testbook.com/question-answer/the-maximum-bending-stress-in-an-i-beam-occurs-at--59857d0a36330c2244c99035)
- Q10 scalar quantities: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-not-a-scalar-quantity--6946c89f2a3eb28cbd28ec3b)
- Q12 fixed beam deflection: [Testbook](https://testbook.com/question-answer/the-deflection-at-the-center-of-a-fixed-fi--600793157f8c470f11465b50)
- Q13 couple: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-is-true-about-a--6946c9bf6d4a860c180628f7)
- Q14 elastic constants: [Testbook](https://testbook.com/question-answer/the-number-of-independent-elastic-constants-requir--6a6b37de7085e60e40f851a9)
- Q15 Mohr's circle touching the Y-axis: [Testbook](https://testbook.com/question-answer/when-the-mohrs-circle-drawn-for-a-certain-s--632ef5970377b6c7f0dd47ef)
- Q16 shaft fixed at both ends: [Testbook](https://testbook.com/question-answer/a-solid-circular-shaft-ab-of-diameter-d-and-leng--6a6b37de70cf7160d11f6b6b)
- Q17 heated copper bar: [Testbook](https://testbook.com/question-answer/a-copper-bar-is-fixed-at-both-the-ends-heating-of--62985d3b996fed057351edf7)
- Q18 section modulus: [Testbook](https://testbook.com/question-answer/the-section-modulus-of-a-rectangle-with-breadth-b--60cb603087d69f9ae9f08f01)
- Q19 types of friction: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-not-a-type-of-friction--6a523de64639216d9658e6d2)
- Q20 varying load: [Testbook](https://testbook.com/question-answer/a-simply-supported-beam-has-a-distributed-load-of--6a757abfa17386b410c8ea3a)
- Q21 Euler's assumptions: [Testbook](https://testbook.com/question-answer/assumptions-made-in-eulers-theory-isare--6287522a38368c4fcabf69c9)
- Q22 maximum range: [Testbook](https://testbook.com/question-answer/if-a-projectile-is-thrown-with-velocity-v39--5f3bc271e10867049de6271e)
- Q24 cantilever with two loads: [Testbook](https://testbook.com/question-answer/a-cantilever-is-subjected-to-a-uniformly-distribut--6103a1dfa81956d8cab6a1ea)
- Q25 spring stiffness: [Testbook](https://testbook.com/question-answer/a-close-helical-spring-of-100-mm-mean-diameter-is--5f2575c2aa23d40d1032d1fe)
