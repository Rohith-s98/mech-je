# Theory of Machines and Design Level 4: Exam Room

Nov 19, 2026 · @Rohith

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
| 1. Links, pairs, mechanisms and degrees of freedom | 3 |
| 2. Cams and followers | 2 |
| 3. Gears and gear trains | 3 |
| 4. Belts, ropes and chains | 3 |
| 5. Brakes, clutches and dynamometers | 2 |
| 6. Flywheels and governors | 3 |
| 7. Balancing and vibrations | 3 |
| 8. Theories of failure, factor of safety and fatigue | 2 |
| 9. Riveted, welded and bolted joints | 2 |
| 10. Shafts, keys and couplings | 1 |
| 11. Bearings | 1 |

About half of the Theory of Machines and Design questions test one fact, such as a type of pair, a governor or a theory of failure. The rest are short numericals: a gear ratio, a belt tension, a flywheel's energy or a natural frequency. In the mock you have one minute per question, so the aim is to recall the fact or formula at once and keep the arithmetic short. The Speed toolkit below collects the values and relations that do that.

## Speed toolkit

Most Theory of Machines and Design questions in RRB JE, SSC JE and Kerala PSC need one formula or one fact. Learn the values below by heart, and a two-minute question takes 30 seconds.

### Ready values

| Quantity | Value to remember |
| --- | --- |
| Lower and higher pairs | Lower pairs have surface contact: turning, sliding, screw, spherical. Higher pairs have point or line contact: cam and follower, gear teeth, ball and race. |
| Inversions | Four-bar chain: beam engine, coupling rod of a locomotive, Watt's indicator. Single slider crank: pendulum pump, oscillating cylinder engine, Whitworth quick return, rotary engine. Double slider crank: elliptical trammel, Scotch yoke, Oldham coupling. |
| Instantaneous centres | N(N − 1)/2 for N links. A four-bar chain has 6. |
| Exact straight line | Peaucellier, Hart and Scott Russell. Watt's and Grasshopper are approximate. |
| Steering | Davis uses sliding pairs and Ackermann uses turning pairs. The condition is cot φ − cot θ = c/b. |
| Gear tooth (module m) | Circular pitch πm, addendum 1m, dedendum 1.25m, pressure angle 20° (older 14½°) |
| Least pinion teeth against a rack, no interference | About 18 for 20° full depth; about 32 for 14½° |
| Gears for shafts | Parallel: spur, helical, herringbone. Intersecting: bevel. Skew: worm, spiral (crossed helical). |
| Watt governor height | h = 895/N² m, with N in rpm |
| Natural frequency from static deflection | f = 15.76/√δ Hz, with δ in mm |
| Vibration isolation | Transmissibility is below 1 only when ω/ωₙ is more than √2 |
| Theories of failure | Brittle: maximum principal stress (Rankine). Ductile: maximum shear stress (Tresca) and distortion energy (von Mises). |
| Yield in pure shear | Tresca 0.5 Sᵧ; von Mises 0.577 Sᵧ |
| Endurance limit of steel | About 0.5 × ultimate tensile strength (rotating beam test) |
| Fillet weld | Throat = 0.707 × leg size |
| Rivet diameter (Unwin) | d = 6√t, with d and t in mm |
| Standard key | Width d/4. A key as strong in shear as the shaft is about 1.57d long. |
| Bearing life | (C/P)³ million revolutions for ball bearings; (C/P)^(10/3) for roller bearings |

### Relations that save a step

| Relation | Use it when |
| --- | --- |
| F = 3(n − 1) − 2j − h | Grubler (Kutzbach) mobility of a planar linkage. F = 0 is a structure; F less than 0 is a superstructure. |
| l + s ≤ p + q | Grashof: shortest plus longest no more than the other two, so at least one link turns fully |
| aᶜ = 2ωv | Coriolis acceleration of a slider moving at v along a link turning at ω |
| N₁T₁ = N₂T₂ | Gear speeds go inversely as the tooth numbers. In an epicyclic train, use a table with the arm fixed first. |
| T₁/T₂ = e^(μθ) | Flat belt and band brake. A V-belt uses e^(μθ/sin β), with β the half groove angle. |
| P = (T₁ − T₂)v | Power through a belt. With centrifugal tension, maximum power is at T = 3Tᶜ, where Tᶜ = mv². |
| Crossed belt L = π(r₁ + r₂) + 2x + (r₁ + r₂)²/x | Its length depends only on r₁ + r₂. An open belt has (r₁ − r₂)²/x in place of the last term. |
| T = μW(r₁ + r₂)/2 | Clutch, uniform wear: one pair of surfaces. Multiply by the number of pairs of contact surfaces. |
| T = (2/3)μW(r₁³ − r₂³)/(r₁² − r₂²) | Clutch, uniform pressure. It gives a little more torque than uniform wear. |
| ΔE = Iω²Cₛ = 2ECₛ | Flywheel: Cₛ = (ω₁ − ω₂)/ω is the coefficient of fluctuation of speed |
| ωₙ = √(k/m) = √(g/δ) | Natural frequency of a spring and mass. It is also the critical (whirling) speed of a shaft. |
| cᶜ = 2√(km) = 2mωₙ, ζ = c/cᶜ | Critical damping and the damping ratio |
| Series 1/k = 1/k₁ + 1/k₂; parallel k = k₁ + k₂ | Combining springs. Cutting a spring in half doubles the stiffness of each half. |
| σₐ/Sₑ + σₘ/Sᵤ = 1/N | Goodman line. Soderberg puts the yield strength Sᵧ in place of Sᵤ. |
| Tₑ = √(M² + T²), Mₑ = ½\[M + √(M² + T²)\] | Shaft under bending and torsion: Tₑ with the shear theory, Mₑ with the normal stress theory |
| P = 2πNT/60 | Power in watts, with N in rpm and T in N·m |

### Unit traps

- **rpm to rad/s.** Multiply by 2π/60, about 0.1047. Every ω² formula (flywheel, centrifugal tension, governors, balancing) needs rad/s.
- **Degrees to radians in e^(μθ).** The angle of lap must be in radians: 180° is π and 270° is 1.5π.
- **Diameter or radius.** Belt length, clutch torque and flywheel energy use radii. Gear pitch diameters come from d = mT.
- **Static deflection in mm or m.** f = 15.76/√δ needs mm; ωₙ = √(g/δ) needs metres with g = 9.81.
- **N and mm give MPa.** A torque in N·m becomes N·mm when multiplied by 1000.

### Eliminating options

- **Check the scaling.** Centrifugal tension and inertia forces go as v² or ω². A flywheel's energy goes as ω². Natural frequency goes as √(k/m). Bearing life goes as (C/P)³.
- **Check the sense.** More damping lowers the peak amplitude. A stiffer spring raises the natural frequency. Uniform wear gives less torque than uniform pressure, so it is the safe assumption in design.
- **Ductile or brittle.** A theory question about a ductile material is almost always Tresca or von Mises; a brittle one is Rankine.
- **Statement questions.** Mark each statement true or false before you look at the options.
- **"NOT" questions.** Mark every option true or false. The single false one is the answer.

## Mock 1

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from a Kerala PSC paper (2025), 3 from SSC JE (December 2025) and 20 from other exams.

**Q1. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 1.** The Gruebler's criterion for determining the degrees of freedom (F) of a mechanism having 'n' links and 'p' pairs is given by: (a) F = 3(n + 1) − 2p (b) F = 3(n − 1) + 2p (c) F = 3(n − 1) − 2p (d) F = 3(n + 1) + 2p

*Answer: (c) F = 3(n − 1) − 2p.*

In a plane each link has 3 degrees of freedom. Fixing one link removes 3, which leaves 3(n − 1). Each lower pair (a pin or a slider) takes away 2 more, so F = 3(n − 1) − 2p. A four-bar chain (n = 4, p = 4) gives F = 9 − 8 = 1.

- **(a) and (d):** 3(n + 1) adds a link instead of fixing one. A four-bar chain would get F = 7 or more.
- **(b):** pairs restrict motion, so they must be subtracted. With +2p a four-bar chain would get F = 17.

**Quick check:** put in the four-bar chain. Only (c) gives 1.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** A differential gear in an automobile is a: (a) simple gear train (b) reverted gear train (c) compound gear train (d) epicyclic gear train

*Answer: (d) Epicyclic gear train.*

The bevel pinions of a differential are carried on a cage bolted to the crown wheel. They spin on their own pins and also travel round the axle axis. Gears whose axes move make an epicyclic train. It has two degrees of freedom, which lets the two driving wheels turn at different speeds on a bend.

- **(a) Simple:** one gear on each shaft, and every axis is fixed.
- **(b) Reverted:** the first and last gears are on one axis, but every axis is still fixed, as in a lathe back gear or a clock.
- **(c) Compound:** two gears on an intermediate shaft, with fixed axes.

**The trap:** the two half-shafts are on one axis, which looks like a reverted train. What decides it is that the pinion axes move.

**Q3. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 6.** Which of the following is a spring-controlled governor? (a) Porter governor (b) Watt governor (c) Hartnell governor (d) Proell governor

*Answer: (c) Hartnell governor.*

In a Hartnell governor a helical spring round the spindle presses on the sleeve, and the spring force supplies the controlling force. Watt, Porter and Proell governors are gravity controlled: the weight of the balls, and of the sleeve in Porter and Proell, does that job.

- **(a) Porter:** a Watt governor with a heavy load on the sleeve.
- **(b) Watt:** the simplest pendulum type, with no central load.
- **(d) Proell:** a Porter governor with the balls fixed on extensions of the lower links.

**Memory aid:** Hartnell, Wilson-Hartnell and Hartung are spring controlled. Every other governor in the syllabus is a dead-weight type.

**Q4. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 4.** The length of the belt in the case of a cross-belt drive is given in terms of the centre distance between pulleys (C) and pulley diameters D and d as: (a) 2C + π/2(D + d) + (D + d)²/4C (b) 2C + π/2(D − d) + (D + d)²/4C (c) 2C + π/2(D + d) + (D − d)²/4C (d) 2C + π/2(D − d) + (D − d)²/4C

*Answer: (a) 2C + π/2(D + d) + (D + d)²/4C.*

In radii, a crossed belt has L = π(r₁ + r₂) + 2x + (r₁ + r₂)²/x. With r = D/2 and x = C this becomes the expression in (a). Open and crossed belts share the first two terms; only the last term changes.

- **(c):** this is the open-belt length, with (D − d)² in the last term.
- **(b) and (d):** the arcs of contact never depend on D − d. With equal pulleys these would give no wrap at all.

**The trap:** a crossed belt's length depends only on D + d. That is why stepped cone pulleys with a constant D + d can share one crossed belt.

**Q5. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 7.** Which of the following type of viscous damping will give periodic motion to the vibrating body? (i) Critical damping (ii) Under damping (iii) Over damping. (a) only (i) (b) only (ii) (c) only (iii) (d) only (i) and (ii)

*Answer: (b) only (ii).*

Only an under-damped system (ζ < 1) oscillates. Its motion is a sine wave inside a decaying envelope, x = Ae^(−ζωₙt) sin(ωᵈt + φ). A critically damped system (ζ = 1) returns to rest in the shortest time without oscillating, and an over-damped one (ζ > 1) creeps back more slowly still.

- **(a) and (d):** critical damping is the boundary where oscillation just stops.
- **(c):** over damping gives the slowest return, again with no oscillation.

**The trap:** strictly, damped motion is not periodic because the amplitude keeps falling. Read "periodic" here as "oscillating", which only under damping does.

**Q6. SSC JE Mechanical, 6 December 2025 (Shift 2) · Topic 2.** A cam rotates at 1200 rpm. If the follower rises in 90° of cam rotation, how much time is required for the rise? (a) 0.035 seconds (b) 0.025 seconds (c) 0.0125 seconds (d) 0.0425 seconds

*Answer: (c) 0.0125 seconds.*

One revolution takes 60/1200 = 0.05 s. A 90° rise is a quarter of a turn, so it takes 0.05/4 = 0.0125 s.

- **(b) 0.025 s:** half a revolution, the time for 180°.
- **(a) and (d):** neither is a simple fraction of 0.05 s.

**Quick check:** time = angle ÷ angular speed = (π/2) ÷ (2π × 20 rev/s) = 1/80 s.

**Q7. SSC JE Mechanical, 3 December 2025 (Shift 2) · Topic 9.** What is the efficiency range for a single riveted butt joint? (a) 55% to 60% (b) 65% to 70% (c) 70% to 83% (d) 80% to 90%

*Answer: (a) 55% to 60%.*

Efficiency rises with the number of rows of rivets, because the outer row can then have fewer rivets and removes less plate. The standard values for butt joints are 55–60% single riveted, 70–83% double riveted and 80–90% triple riveted.

- **(b) 65–70%:** close to a double riveted lap joint (63–70%).
- **(c) 70–83%:** a double riveted butt joint.
- **(d) 80–90%:** a triple riveted butt joint.

**Memory aid:** butt joints 55–60, 70–83 and 80–90 for one, two and three rows. Lap joints sit lower: 45–60, 63–70 and 72–80.

**Q8. MPPSC AE Mechanical 2021 · Topic 5.** A single plate clutch has outer and inner radii 50 mm and 20 mm respectively. An axial clamping force required to engage the clutch is 2 kN and coefficient of friction between liner material is 0.4. The torque carrying capacity of the clutch using uniform wear theory is (a) 56 Nm (b) 28 Nm (c) 0.056 Nm (d) 0.028 Nm

*Answer: (b) 28 Nm.*

Uniform wear gives a mean radius of (r₁ + r₂)/2 = 35 mm. For one pair of friction surfaces, T = μWR = 0.4 × 2000 × 0.035 = 28 N·m.

- **(a) 56 Nm:** two pairs of surfaces (both sides of the plate effective). The question does not say so, so take one pair.
- **(c) and (d):** the right numbers divided by 1000 again, a unit slip between N·mm and N·m.

**The trap:** decide the number of friction surfaces before you calculate. If both sides were effective the answer would double to (a).

**Q9. RSMSSB JE Electrical/Mechanical (Degree), 26 December 2020 · Topic 8.** Resistance to fatigue of a material is measured by - (a) Young's modulus (b) Bulk modulus (c) Elastic limit (d) Endurance limit

*Answer: (d) Endurance limit.*

The endurance limit is the largest fully reversed stress that a polished standard specimen can take for an unlimited number of cycles (10⁶ or more in practice) without failing. A higher endurance limit means better resistance to fatigue. For steel it is roughly half the ultimate tensile strength.

- **(a) and (b):** these measure stiffness under a static load, not strength under a repeated one.
- **(c) Elastic limit:** a static property. Fatigue failures happen at stresses well below it.

**The trap:** a part can fail by fatigue while every stress in it is below the yield stress, so no static property measures fatigue resistance.

**Q10. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 1.** ABCD is a four-link mechanism, AB = 100 mm, BC = 150 mm, CD = 200 mm and AD = 175 mm. Can it act as a double-crank mechanism? (a) Yes, if AB is fixed (b) Yes, if BC is fixed (c) No (d) Yes, if AD is fixed

*Answer: (a) Yes, if AB is fixed.*

Check Grashof's law first. Shortest plus longest is 100 + 200 = 300 mm; the other two add to 150 + 175 = 325 mm. Since 300 < 325, at least one link can turn fully. Fixing the shortest link, AB, makes both links next to it full cranks: a double crank (drag link).

- **(b) BC fixed and (d) AD fixed:** these links are next to the shortest link, so the chain becomes a crank-rocker.
- **(c) No:** it is a Grashof chain, so a double crank is possible.

**Memory aid:** in a Grashof chain, fix the shortest link for a double crank, a link next to it for a crank-rocker, and the link opposite it for a double rocker.

**Q11. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 6.** The ratio of the height of a Porter governor to that of Watt governor when the length of the links and the arms are same is: (Where, M = mass of the sleeve, m = mass of ball) (a) m/(M + m) (b) (M + m)/M (c) (M + m)/m (d) M/(M + m)

*Answer: (c) (M + m)/m.*

A Watt governor has h = g/ω². A Porter governor with equal arms and links has h = \[(m + M)/m\] × g/ω². At the same speed the ratio is (M + m)/m, which is always more than 1. The heavy sleeve lets a Porter governor run faster for the same height.

- **(a) and (d):** both are less than 1, so they would make the Porter governor shorter at the same speed.
- **(b):** this puts the sleeve mass in the denominator instead of the ball mass.

**Quick check:** with no sleeve load (M = 0) a Porter governor is a Watt governor, so the ratio must be 1. Only (c) gives 1.

**Q12. UPRVUNL JE Mechanical, 25 October 2021 (Shift 2) · Topic 3.** A pair of spur gears consists of a 20-tooth pinion meshing with a 120-tooth gear. The module is 4 mm. What is the center distance between the gears? (a) 320 (b) 280 (c) 240 (d) 360

*Answer: (b) 280 mm.*

The pitch diameters are mT: 4 × 20 = 80 mm and 4 × 120 = 480 mm. The centre distance is the sum of the pitch radii, 40 + 240 = 280 mm. In one step, C = m(T₁ + T₂)/2.

- **(c) 240:** the pitch radius of the gear alone. It leaves out the pinion.
- **(a) 320 and (d) 360:** neither comes from any standard step.

**Quick check:** an internal gear of 120 teeth would give C = m(T₂ − T₁)/2 = 200 mm. That is not an option, so the pair is external.

**Q13. UPRVUNL JE Mechanical 2016 (Shift 2) · Topic 10.** Oldham's coupling contains: (a) 2 turning pairs and 2 sliding pairs (b) 1 turning pair and 3 sliding pairs (c) 2 turning pairs and 1 sliding pair (d) 3 turning pairs and 1 sliding pair

*Answer: (a) 2 turning pairs and 2 sliding pairs.*

Oldham's coupling is an inversion of the double slider crank chain, which has four links, two turning pairs and two sliding pairs. The two flanges turn in fixed bearings (the turning pairs), and the tongues of the floating centre disc slide in the flange slots (the sliding pairs). It joins two parallel shafts with a small lateral offset.

- **(b), (c) and (d):** a four-link chain has exactly four pairs. (c) has only three, and (b) and (d) have the wrong split.

**Memory aid:** double slider crank = 2 turning + 2 sliding. Its inversions are the elliptical trammel, the Scotch yoke and Oldham's coupling.

**Q14. DSSSB JE Mechanical, 6 November 2019 (Shift 2) · Topic 4.** If the distance between the centers of two pulleys in a belt drive is 0.5 m and the diameter for the larger and smaller pulleys are 1 m and 0.5 m, respectively. The two pulleys in belt drive is connected by an open belt, then the angle of contact at the smaller pulley is given by: (a) 30° (b) 120° (c) 180° (d) 60°

*Answer: (b) 120°.*

For an open belt, sin α = (r₁ − r₂)/x = (0.5 − 0.25)/0.5 = 0.5, so α = 30°. The angle of contact on the smaller pulley is 180° − 2α = 120°. The larger pulley gets 180° + 2α = 240°.

- **(a) 30°:** this is α, the inclination of the belt.
- **(d) 60°:** this is 2α.
- **(c) 180°:** true only for equal pulleys.

**The trap:** use radii, or divide the difference of diameters by 2x. Using diameters over x gives sin α = 1, which would leave no contact at all.

**Q15. HPCL Engineer Mechanical, 12 August 2021 (Shift 1) · Topic 7.** A vibrating system consists of a mass of 200 kg, spring stiffness of 80 N/mm. The natural frequency of vibration of the system is (a) 5.0 rad/s (b) 2.5 rad/s (c) 20 rad/s (d) 40 rad/s

*Answer: (c) 20 rad/s.*

Change the stiffness to N/m first: 80 N/mm = 80,000 N/m. Then ωₙ = √(k/m) = √(80,000/200) = √400 = 20 rad/s, which is about 3.2 Hz.

- **(d) 40 rad/s:** this is 2ωₙ, the factor in the critical damping coefficient cᶜ = 2mωₙ.
- **(a) and (b):** neither comes from √(k/m). Leaving k in N/mm gives 0.63 rad/s, which is not an option either.

**The trap:** the options are in rad/s. In hertz the answer would be 20/(2π) = 3.2 Hz.

**Q16. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 2.** In cam and follower arrangement, which one of the following is not a follower type? (a) Knife edge follower (b) Mushroom follower (c) Dwell follower (d) Flat edge follower

*Answer: (c) Dwell follower.*

A dwell is a part of the cam's turn during which the follower stays at rest. It describes the motion, not the follower. By the surface in contact, followers are knife edge, roller, flat faced (mushroom) and spherical faced.

- **(a) Knife edge:** a point contact with heavy wear, used only at low speed.
- **(b) Mushroom and (d) flat edge:** two names for the flat-faced follower.

**The trap:** two of the options are the same follower under different names, which leaves dwell as the odd one out.

**Q17. OSSC JE (Civil) 2015 · Topic 9.** Net shear area of a 16 mm bolt at the thread (in mm²) is approximately equal to: (a) 256 (b) 201 (c) 157 (d) 100

*Answer: (c) 157.*

The shank area is π/4 × 16² = 201 mm². The threads cut into it, and the usual design value takes the net area at the threads as 0.78 times the shank area: 0.78 × 201 ≈ 157 mm².

- **(b) 201:** the full shank area. It ignores the threads.
- **(a) 256:** 16², without the π/4.
- **(d) 100:** this has no basis.

**The trap:** a bolt fails at its smallest section, the threaded core. That is why a bolt of uniform strength has its shank turned down to about the core diameter.

**Q18. VIZAG MT Mechanical 2013 (re-exam) · Topic 6.** For a certain engine having an average speed of 1200 rpm, a flywheel approximated as a solid disc is required for keeping the fluctuation of speed within 2% about the average speed. The fluctuation of kinetic energy per cycle is found to be 2 kJ. What is the least possible mass of the flywheel if its diameter is not to exceed 1 m? (a) 40 kg (b) 51 kg (c) 62 kg (d) 73 kg

*Answer: (b) 51 kg.*

Here the total fluctuation is 2%, so Cₛ = 0.02. The mean speed is ω = 2π × 1200/60 = 125.7 rad/s. From ΔE = Iω²Cₛ, I = 2000/(125.7² × 0.02) = 6.33 kg·m². A solid disc has I = mr²/2, and the least mass comes with the largest radius, 0.5 m. So m = 2 × 6.33/0.5² = 50.7 kg, about 51 kg.

- **(a), (c) and (d):** none comes from ΔE = Iω²Cₛ with these data. Treating the wheel as a rim (I = mr²) gives 25 kg, and reading the limit as ±2% does too; neither is offered.

**The trap:** "least possible mass" means using the largest radius allowed. I goes as r², so a smaller wheel needs more mass for the same I.

**Q19. SJVN ET Mechanical 2019 · Topic 1.** Ball and socket joint is an example of: (a) Turning pair (b) Spherical pair (c) Sliding pair (d) Screw pair

*Answer: (b) Spherical pair.*

The ball can turn about any axis through its centre while it stays in the socket. That makes a spherical pair: a lower pair, with surface contact and three rotational degrees of freedom. Other examples are a car's suspension ball joint and the swivel of a pen stand.

- **(a) Turning pair:** rotation about one fixed axis, like a shaft in a bearing.
- **(c) Sliding pair:** movement along one straight line.
- **(d) Screw pair:** turning and sliding tied together, like a nut on a bolt.

**Memory aid:** turning, sliding and screw pairs each allow one degree of freedom. A spherical pair allows three.

**Q20. NRL GET Mechanical, 23 September 2021 (Shift 3) · Topic 11.** In the context of ball bearings, what is meant by basic load rating? It is the load that a group of apparently identical bearings can withstand for a rating life of: (a) 100,000 revolutions (b) one revolution (c) 1000 revolutions (d) one million revolutions

*Answer: (d) one million revolutions.*

The basic dynamic load rating C is the constant radial load that 90% of a group of identical bearings can carry for one million revolutions before the first sign of fatigue. Life at any other load P then follows L₁₀ = (C/P)³ million revolutions for ball bearings.

- **(a), (b) and (c):** the rating life in the definition is always 10⁶ revolutions.

**The trap:** the static load rating C₀ is a different quantity. It is the load that leaves a permanent dent of 0.0001 times the ball diameter, and it has nothing to do with revolutions.

**Q21. NPCIL Stipendiary Trainee (Mechanical) 2018 · Topic 4.** The centrifugal tension in belts: (a) Increases the power transmitted (b) Decreases the power transmitted (c) Has no effect on the power transmitted (d) Increases power transmitted up to a certain speed and then decreases it.

*Answer: (b) Decreases the power transmitted.*

Centrifugal tension Tᶜ = mv² acts equally on both sides of the belt. A belt is designed for a fixed maximum tension T, so the tension left for driving is only T − Tᶜ. The power, (T − Tᶜ)(1 − 1/e^(μθ))v, is therefore lower than it would be without Tᶜ.

- **(a):** centrifugal tension adds to the stress in the belt but adds nothing to its grip.
- **(c):** some textbooks say this, because Tᶜ cancels in T₁ − T₂. That holds only if the belt may be stretched further, which a design with a fixed maximum tension does not allow.
- **(d):** this describes how the power varies with belt speed (it peaks at v = √(T/3m)), not the effect of centrifugal tension.

**The trap:** if you have read that centrifugal tension "has no effect on power", check what is held fixed. With the maximum tension fixed, as here, it reduces the power.

**Q22. HPCL Engineer Mechanical, 12 August 2021 (Shift 1) · Topic 8.** The expression for Notch sensitivity Factor q, in cyclic loading, using fatigue stress concentration factor Kₑ and theoretical stress concentration factor Kₜ is (a) q = (Kₑ + 1)/(Kₜ + 1) (b) q = (Kₑ − 1)/(Kₜ − 1) (c) q = (Kₑ + 1)/(Kₜ − 1) (d) q = (Kₜ − 1)/(Kₑ − 1)

*Answer: (b) q = (Kₑ − 1)/(Kₜ − 1).*

Notch sensitivity compares the actual rise in stress at a notch with the theoretical rise. It runs from 0, when the material ignores the notch (Kₑ = 1), to 1, when it feels the full theoretical value (Kₑ = Kₜ). Rearranged, Kₑ = 1 + q(Kₜ − 1).

- **(a):** this can never reach 0, because Kₑ + 1 is at least 2.
- **(c):** this gives a value even when the material ignores the notch.
- **(d):** upside down. Since Kₑ is never more than Kₜ, it would make q greater than 1.

**Quick check:** q must lie between 0 and 1. Only (b) always does. (Here Kₑ stands for K\_f, the fatigue factor.)

**Q23. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 3.** The two non-parallel, intersecting and coplanar shafts are connected by gears, then these gears are known as: (a) Bevel gear (b) Skew bevel gear (c) Spur gear (d) Spiral gear

*Answer: (a) Bevel gear.*

Bevel gears are cut on cones whose tips meet where the two shaft axes cross. Bevel gears of equal size on shafts at 90° are called mitre gears.

- **(b) Skew bevel:** for shafts that neither meet nor run parallel.
- **(c) Spur:** for parallel shafts.
- **(d) Spiral:** crossed helical gears, also for shafts that neither meet nor run parallel.

**Memory aid:** parallel shafts take spur, helical and herringbone gears. Intersecting shafts take bevel gears. Skew shafts take worm, spiral and hypoid gears.

**Q24. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 7.** Secondary unbalanced force due to inertia of reciprocating parts of mass m at radius r moving with angular velocity ω is: (n = ratio of connecting rod length to crank radius) (a) mrω² cos 2θ/2n (b) mrω² cos 2θ/4n (c) mrω² cos 2θ/n (d) mrω² cos θ/n

*Answer: (c) mrω² cos 2θ/n.*

The inertia force of the reciprocating mass is very nearly mrω²(cos θ + cos 2θ/n). The first term is the primary force and the second, mrω² cos 2θ/n, is the secondary force. It varies at twice crank speed, and its peak is 1/n of the primary peak.

- **(d) cos θ/n:** this has the frequency of the primary force. A secondary force must contain 2θ.
- **(a) and (b):** the extra 2 and 4 do not belong. The piston acceleration is rω²(cos θ + cos 2θ/n), with no other factor.

**Memory aid:** picture an imaginary crank of radius r/4n turning at 2ω. Its force is m(r/4n)(2ω)² cos 2θ = mrω² cos 2θ/n. Option (b) uses the r/4n without the (2ω)².

**Q25. MPPGCL JE Mechanical, 1 June 2024 · Topic 5.** Which of the following dynamometers attempts to stop the engine by means of a mechanical brake on the flywheel? (a) Hydraulic dynamometer (b) Eddy current dynamometer (c) Rope brake dynamometer (d) Prony brake dynamometer

*Answer: (d) Prony brake dynamometer.*

A Prony brake clamps wooden blocks onto the rim of the engine's flywheel with a lever. The friction torque is read from the lever and a weight or spring balance, and the power is absorbed as heat. It is an absorption dynamometer.

- **(c) Rope brake:** also an absorption type on the flywheel, but it uses ropes with a dead load and a spring balance, not a clamped brake.
- **(a) Hydraulic:** absorbs power by fluid friction inside a casing.
- **(b) Eddy current:** absorbs power through eddy currents induced in a rotor.

**The trap:** the rope brake also acts on the flywheel. "Mechanical brake" points to the clamped blocks and lever of the Prony brake.

## Mock 2

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from a Kerala PSC paper (2025), 3 from SSC JE (2017 and December 2025) and 20 from other exams.

**Q1. SSC JE Mechanical, 3 December 2025 (Shift 2) · Topic 5.** Which of the following brakes applies force on the brake drum in the axial direction? (a) Block brake (b) Shoe brake (c) Band brake (d) Cone brake

*Answer: (d) Cone brake.*

A cone brake pushes a conical surface into a matching cone along the shaft axis. An axial force W gives a normal force of W/sin α on the cone face, so a small push produces a large friction torque. A disc brake works the same way, with α = 90°.

- **(a) Block brake and (b) shoe brake:** the block is pressed onto the drum along a radius.
- **(c) Band brake:** the band wraps round the drum and squeezes it radially as it is tightened.

**Memory aid:** cone and disc brakes push along the axis. Block, shoe and band brakes press on a drum from outside.

**Q2. NRL GET Mechanical, 23 September 2021 (Shift 1) · Topic 7.** When the forcing frequency on a vibrating system becomes equal to its natural frequency, the condition is known as: (a) Magnification factor (b) Random vibration (c) Forced vibration (d) Resonance

*Answer: (d) Resonance.*

At ω/ωₙ = 1 the force pushes the mass in step with its own motion, so every cycle adds energy. Without damping the amplitude grows without limit; with damping it is held to X = (F/k)/(2ζ). Machines are run at speeds well clear of their natural frequencies for this reason.

- **(a) Magnification factor:** the ratio of the dynamic amplitude to the static deflection F/k. It peaks at resonance, but it is a ratio, not a condition.
- **(b) Random vibration:** excitation with no fixed frequency, such as road roughness.
- **(c) Forced vibration:** any motion under an external force. Resonance is one special case of it.

**The trap:** (c) is true of the system, but it is true at every frequency. The question asks for the name of the condition when the two frequencies match.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** The gears used for connecting two non-intersecting and non-parallel shafts: (a) Spiral gears (b) Bevel gears (c) Helical gears (d) Mitre gears

*Answer: (a) Spiral gears.*

Shafts that neither meet nor run parallel are called skew shafts. Spiral gears, which are crossed helical gears, join them with point contact. Worm gears and hypoid gears are the other drives for skew shafts.

- **(b) Bevel gears:** the shaft axes intersect.
- **(c) Helical gears:** in the usual mounting the shafts are parallel.
- **(d) Mitre gears:** bevel gears of equal size on shafts at 90°, so the axes still intersect.

**The trap:** a spiral gear is a helical gear mounted differently. On parallel shafts helical gears have line contact; crossed on skew shafts they become spiral gears.

**Q4. MPPSC AE Mechanical, 3 July 2022 · Topic 8.** A machine component is subjected to fluctuating stress that varies from 40 to 100 MPa. The corrected endurance limit stress for the machine component is 300 MPa and the ultimate tensile strength of the material is 700 MPa. The factor of safety by the Goodman criterion is: (a) 1 (b) 2 (c) 4 (d) 5

*Answer: (d) 5.*

The mean stress is (100 + 40)/2 = 70 MPa and the stress amplitude is (100 − 40)/2 = 30 MPa. The Goodman line gives 1/n = σₐ/Sₑ + σₘ/Sᵤₜ = 30/300 + 70/700 = 0.1 + 0.1 = 0.2, so n = 5.

- **(a), (b) and (c):** none of these comes from the Goodman line with these data. They would need stresses two or more times larger.

**The trap:** use the amplitude, which is half the range. Using the whole range of 60 MPa gives 1/n = 0.2 + 0.1 and n = 3.3, which is not offered.

**Q5. RSSB JE Mechanical (Diploma), 6 February 2025 (Shift 2) · Topic 4.** The creep in a belt drive is due to the: (a) material of belt (b) unequal size of the pulleys (c) unequal tension on tight and slack sides of the belt (d) material of the pulleys

*Answer: (c) unequal tension on tight and slack sides of the belt.*

The tight side is stretched more than the slack side. As the belt passes over the driver it shortens from its tight length to its slack length, and over the follower it stretches again. This small movement of the belt relative to the pulley is creep. It lowers the follower's speed a little: N₂/N₁ = (d₁/d₂)(E + √σ₂)/(E + √σ₁).

- **(a) Material of belt:** the belt's elasticity is what lets creep happen, but the cause is the difference in tension.
- **(b) Unequal pulleys:** creep happens with equal pulleys too.
- **(d) Material of pulleys:** has no effect on how much the belt stretches.

**The trap:** creep and slip both lower the speed ratio. Slip is the whole belt sliding on the pulley because there is too little grip; creep happens even when the grip is good.

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2) · Topic 11.** Sliding contact bearings are also known as: (a) Sleeve bearings (b) Plain bearings (c) Antifriction bearings (d) Thrust bearings

*Answer: (b) Plain bearings.*

In a sliding contact bearing the shaft slides on a surface, usually on a film of oil, with no rolling elements. The whole class is called plain bearings. It includes journal bearings, which carry radial load, and thrust bearings such as pivots and collars, which carry axial load.

- **(a) Sleeve bearings:** a sleeve or bush is one kind of plain journal bearing. The name does not cover pivots and collars, so it is not a name for the whole class.
- **(c) Antifriction bearings:** the other main class, with balls or rollers.
- **(d) Thrust bearings:** this names the load direction, and both classes include thrust bearings.

**The trap:** "sleeve bearing" is a real term, but the key takes the general name. Pick the one that covers every member of the class.

**Q7. ISRO ICRB Scientist (Mechanical), 26 October 2025 · Topic 1.** A planar mechanism has 8 links and 10 rotary joints. Using Grubler's criterion, the number of degrees of freedom of the mechanism is: (a) 0 (b) 1 (c) 2 (d) 3

*Answer: (b) 1.*

F = 3(n − 1) − 2j = 3(8 − 1) − 2(10) = 21 − 20 = 1. One input moves the whole mechanism.

- **(a) 0:** a structure. With 8 links that would need 10.5 joints.
- **(c) 2:** this would need 9.5 joints.
- **(d) 3:** this would need 9 joints.

**Quick check:** with 8 links, 3(n − 1) = 21 is odd and 2j is always even, so F must be odd. That rules out (a) and (c) before you calculate anything.

**Q8. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 6.** In governor if the equilibrium speed is constant for all radii of rotation of balls, the governor is said to be: (a) Isochronous (b) Stable (c) Unstable (d) Inertia

*Answer: (a) Isochronous.*

An isochronous governor has the same equilibrium speed at every radius, so its range of speed is zero and it is infinitely sensitive. In practice it hunts: the slightest change in speed sends the sleeve from one stop to the other. A spring-loaded governor is isochronous when its controlling force is proportional to the radius, F = cr.

- **(b) Stable:** the equilibrium speed rises as the radius rises, so each speed has only one radius.
- **(c) Unstable:** the equilibrium speed falls as the radius rises.
- **(d) Inertia:** a type of governor that responds to the rate of change of speed. It is not a property like the others.

**Memory aid:** on the controlling-force diagram, a straight line through the origin is isochronous. Extended back, a stable line meets the force axis below the origin and an unstable one meets it above.

**Q9. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 9.** Ratio of the rivet hole diameter to the pitch of rivet when the tearing efficiency of the riveted joint is 40%: (a) 0.25 (b) 0.4 (c) 1 (d) 0.6

*Answer: (d) 0.6.*

Tearing efficiency compares the plate's strength across one pitch, between two holes, with that of the solid plate: η = (p − d)tσₜ/(ptσₜ) = 1 − d/p. With η = 0.4, d/p = 1 − 0.4 = 0.6.

- **(b) 0.4:** this is the efficiency itself, which is 1 − d/p, not d/p.
- **(c) 1:** the holes would touch, leaving no plate between them.
- **(a) 0.25:** this would give a tearing efficiency of 75%.

**Quick check:** high tearing efficiency needs small holes far apart. 40% is low, so the holes must take up most of the pitch, and 0.6 fits.

**Q10. ISRO LPSC Technical Assistant (Mechanical), 4 March 2018 · Topic 2.** In radial cams, the angle between the direction of motion of the follower and the normal to the pitch curve is called: (a) Cam angle (b) Critical angle (c) Pressure angle (d) None of the above

*Answer: (c) Pressure angle.*

The cam pushes the follower along the common normal at the point of contact. The pressure angle is the angle between that normal and the follower's line of motion. Only the part of the push along the follower's axis lifts it; the sideways part presses it against its guide. For a translating follower it is kept below about 30°.

- **(a) Cam angle:** the angle the cam turns through for a stage of the follower's motion, such as the angle of ascent.
- **(b) Critical angle:** not a cam term.
- **(d) None of the above:** wrong, because (c) is the defined term.

**The trap:** gears also have a pressure angle, between the line of action and the common tangent to the pitch circles. In both cases it measures how much of the push goes sideways.

**Q11. HPCL Engineer Mechanical, 4 November 2022 (Shift 2) · Topic 7.** A spring–mass system consists of a mass of 5 kg and two springs of stiffness 8 N/mm and 12 N/mm. In case (i) the springs are connected in series, and in case (ii) the mass is fixed between the two springs. The ratio of the natural frequency in case (ii) to that in case (i) is: (a) 0.5 (b) 1.0 (c) 2.0 (d) 1.5

*Answer: (c) 2.0.*

In series the springs carry the same force, so 1/k = 1/8 + 1/12 and k = 4.8 N/mm. With the mass between them, a movement of the mass stretches one spring and compresses the other, and both forces act on the mass in the same direction, so they add: k = 8 + 12 = 20 N/mm. The ratio is √(20/4.8) = √4.17 ≈ 2.04, so about 2.

- **(a) 0.5:** the ratio the wrong way round, case (i) to case (ii).
- **(b) 1.0:** this would mean the arrangement makes no difference.
- **(d) 1.5:** comes from neither stiffness. The ratio of the stiffnesses without the square root is 4.2, which is not offered either.

**The trap:** a mass held between two springs is a parallel arrangement, even though the springs lie in one line. The 5 kg cancels in the ratio.

**Q12. JSSC JE Mechanical, 3 July 2022 (Paper II) · Topic 4.** In a flat belt drive, the slip between the driver and the belt is 2% and that between the belt and the follower is 4%. If the ratio of the diameters of the driver and follower pulleys is 1 : 1, the velocity ratio is: (a) 0.87 (b) 0.77 (c) 0.94 (d) 0.98

*Answer: (c) 0.94.*

Each slip takes away part of the speed in turn: N₂/N₁ = (d₁/d₂)(1 − s₁/100)(1 − s₂/100) = 1 × 0.98 × 0.96 = 0.9408 ≈ 0.94. The usual short form adds the slips, s = 2 + 4 = 6%, and gives N₂/N₁ = (d₁/d₂)(1 − s/100) = 0.94.

- **(d) 0.98:** only the first slip.
- **(a) 0.87 and (b) 0.77:** these would need total slips of 13% and 23%.

**Quick check:** equal pulleys with no slip give a ratio of 1. Two small slips can only take it a few per cent below 1.

**Q13. SSC JE Mechanical, 4 March 2017 (Morning) · Topic 10.** A key made from a cylindrical disc having segmental cross-section is known as: (a) Woodruff key (b) feather key (c) flat saddle key (d) gib head key

*Answer: (a) Woodruff key.*

A Woodruff key is a segment cut from a disc, and it sits in a curved seat cut in the shaft. It can rock in its seat to line up with a tapered hub, so it is used on tapered shaft ends in machine tools and cars. The deep seat weakens the shaft, which limits it to light loads.

- **(b) Feather key:** a parallel key fixed to the shaft or the hub, so that the hub can slide along the shaft.
- **(c) Flat saddle key:** a taper key that sits on a flat cut on the shaft and holds by friction.
- **(d) Gib head key:** a taper sunk key with a head, so it can be driven out.

**Memory aid:** a Woodruff key is a half-moon. It is the only key with a curved seat.

**Q14. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 3.** Two spur gears of 20° full depth involute system have a gear ratio of 2. The ratio of the radii of their base circles is: (a) 0.5 (b) 0.72 (c) 0.68 (d) 1.0

*Answer: (a) 0.5.*

A base circle radius is r\_b = r cos φ. Both gears have the same pressure angle, so cos φ cancels and r\_b1/r\_b2 = r₁/r₂. A gear ratio of 2 means the pitch radii are in the ratio 1 : 2, so the base circles are too: 0.5, pinion to gear.

- **(d) 1.0:** true only for equal gears.
- **(b) 0.72 and (c) 0.68:** these bring in a factor that should cancel. Both gears share cos 20°, so it drops out of the ratio.

**The trap:** the 20° is there to tempt you into using cos 20°. It matters for each radius, but not for their ratio.

**Q15. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 6.** In a Hartnell governor, the mass of each ball is 4 kg. The centrifugal force on each ball is 1800 N at a radius of 25 cm and 100 N at a radius of 20 cm. If the ball arm and the sleeve arm of the bell crank lever are equal, the stiffness of the spring is: (a) 780 N/cm (b) 720 N/cm (c) 740 N/cm (d) 680 N/cm

*Answer: (d) 680 N/cm.*

With ball arm x and sleeve arm y, the spring force changes by 2(F₂ − F₁)(x/y) between the two positions, and the sleeve lifts by (r₂ − r₁)(y/x). So s = 2(F₂ − F₁)(x/y)²/(r₂ − r₁). With equal arms, s = 2(1800 − 100)/(25 − 20) = 3400/5 = 680 N/cm.

- **(a), (b) and (c):** none of these comes from the formula. Leaving out the 2, which is there because two balls act on the sleeve, gives 340 N/cm, which is not offered.

**The trap:** once the centrifugal forces are given, the ball mass is not needed. The forces look odd, falling from 1800 N to 100 N over 5 cm, but the formula uses only their difference.

**Q16. JSSC JE Re-Exam, 23 October 2022 (Paper I) · Topic 1.** The transmission angle in a linkage is defined as the angle between: (a) input link and coupler (b) fixed link and input link (c) fixed link and output link (d) output link and coupler

*Answer: (d) output link and coupler.*

The coupler pushes on the output link along its own length. The transmission angle μ is the angle between the coupler and the output link. Only the part of the coupler force at right angles to the output link turns it, and that part is proportional to sin μ. The best value is 90°, and designers keep μ between about 40° and 140°.

- **(b) Fixed link and input link:** this is the crank angle θ, which gives the input position.
- **(c) Fixed link and output link:** this gives the output position.
- **(a) Input link and coupler:** when this angle reaches 0° or 180°, the linkage is at a toggle position. That matters for mechanical advantage, but it is not the transmission angle.

**The trap:** the transmission angle is at the output end of the coupler. The angle at the input end, in (a), decides the toggle positions.

**Q17. UPSSSC JE Mechanical 2016 (Paper 2) · Topic 8.** Von Mises and Tresca criteria give different yield stress for: (a) Uni-axial stress (b) Balanced bi-axial stress (c) Pure shear stress (d) All of these

*Answer: (c) Pure shear stress.*

Both theories are fitted to the tension test, so they agree for uniaxial stress. For σ₁ = σ₂ = σ with σ₃ = 0, Tresca's largest shear stress is σ/2 and von Mises gives √(σ² − σ² + σ²) = σ, so both predict yield at σ = Sy. In pure shear they differ: Tresca predicts yield at τ = 0.5Sy and von Mises at τ = Sy/√3 = 0.577Sy.

- **(a) Uniaxial:** both theories are matched to this case.
- **(b) Balanced biaxial:** both predict yield at σ = Sy, as shown above.
- **(d) All of these:** they agree in (a) and (b).

**Memory aid:** the Tresca hexagon sits inside the von Mises ellipse and touches it at six points: tension and compression on each axis, and the two balanced biaxial corners. The gap is widest in pure shear, about 15%.

**Q18. RPSC Lecturer Technical Education 2020 (Mechanical Paper 1) · Topic 5.** In case of single plate new clutches and brakes, the friction radius for a lining of outer diameter D and inner diameter d is: (a) (1/3)(D³ − d³)/(D² − d²) (b) (1/2)(D³ − d³)/(D² − d²) (c) (1/4)(D³ − d³)/(D² − d²) (d) (1/4)(D + d)

*Answer: (a) (1/3)(D³ − d³)/(D² − d²).*

A new clutch is assumed to have uniform pressure. Its friction radius is R = (2/3)(r₁³ − r₂³)/(r₁² − r₂²). Putting r = D/2 gives (2/3)(1/2)(D³ − d³)/(D² − d²) = (1/3)(D³ − d³)/(D² − d²).

- **(d) (D + d)/4:** the mean radius under uniform wear, used for a worn clutch.
- **(b) and (c):** the wrong factor in front.

**Quick check:** make the ring very thin, d → D. Then (D³ − d³)/(D² − d²) → 3D/2, and the friction radius must come out as D/2. Only the factor 1/3 does that; (b) gives 3D/4, which is bigger than the plate, and (c) gives 3D/8.

**Q19. RSSB JE Mechanical (Diploma), 6 February 2025 (Shift 2) · Topic 2.** The cam follower generally used in automobile engines: (a) Flat face (b) Spherical face (c) Roller (d) Knife edge

*Answer: (b) Spherical face.*

Valve tappets in car engines need little space, which suits a flat face. A flat face, however, gives high surface stress at its edge when it tilts slightly, so the face is machined to a large sphere. The key takes this spherical-faced follower as the one used in car engines.

- **(a) Flat face:** textbooks also link it with car engine valves. The spherical face is the refinement of it that lowers the surface stress, which is why the key prefers (b).
- **(c) Roller:** used where there is more space, as in stationary gas and oil engines and aircraft engines.
- **(d) Knife edge:** wears quickly, so it is rarely used anywhere.

**The trap:** if (a) and (b) both look right, choose spherical. It is the flat face as it is actually made for engines.

**Q20. HPCL Junior Executive (Mechanical), 16 August 2025 (Shift 1) · Topic 9.** While designing a typical bolt having uniform strength, the stress concentration in the thread of a bolted joint in simple loading is: (a) High (b) Low (c) Medium (d) Zero

*Answer: (a) High.*

The roots of the threads are sharp notches, and the first thread engaged in the nut carries far more than its share of the load. The fatigue stress concentration factor at a thread is roughly 2 to 4. A bolt of uniform strength has its shank turned down to the core diameter, or bored, so the shank stretches more and absorbs some of a shock that would otherwise reach the threads.

- **(b), (c) and (d):** a thread is a notch, so the concentration cannot be low or zero. Uniform-strength design does not remove it; it spreads the strain energy along the shank.

**The trap:** "uniform strength" sounds as if the stress is even everywhere. It means the shank is made no stronger than the threaded part. The threads remain the weak point.

**Q21. UPRVUNL AE Mechanical 2016 · Topic 7.** Hammer blow in reciprocating engine varies with: (a) rotational speed (b) (rotational speed)² (c) (rotational speed)^(1/2) (d) (rotational speed)³

*Answer: (b) (rotational speed)².*

In a locomotive, part of the reciprocating mass is balanced by extra masses on the wheels. That balance mass B at radius b produces an unbalanced vertical force of Bω²b on the rail, which is the hammer blow. Like any centrifugal force it varies as ω². If it becomes larger than the static load on the wheel, the wheel lifts off the rail once a turn.

- **(a), (c) and (d):** the force from a rotating mass is mω²r, which always goes as the square of the speed.

**Quick check:** doubling the speed makes the hammer blow four times larger.

**Q22. ESE Mechanical 2013 (Paper 2) · Topic 4.** Considering the effect of centrifugal tension in a belt drive, the velocity of the belt for maximum power transmission is (T₁ = tension on the tight side, Tc = centrifugal tension, m = mass per unit length of belt): (a) V = √(T₁/3m) (b) V = √(Tc/3m) (c) V = √((T₁ − Tc)/3m) (d) V = √((T₁ + Tc)/3m)

*Answer: (d) V = √((T₁ + Tc)/3m).*

Power is greatest when the centrifugal tension is one third of the largest tension in the belt: Tc = mv² = T/3. Here T₁ is the tight-side tension that does the driving, so the total tension is T = T₁ + Tc. Then v = √(T/3m) = √((T₁ + Tc)/3m).

- **(a) √(T₁/3m):** correct only if T₁ already includes the centrifugal tension. Here Tc is listed separately, so it does not.
- **(b) √(Tc/3m):** this would mean mv² = mv²/3, which is impossible.
- **(c) √((T₁ − Tc)/3m):** subtracts the centrifugal tension instead of adding it.

**The trap:** check how the question defines T₁. If it is the total tension, (a) is right; if Tc is listed beside it, add the two.

**Q23. JKSSB JE Mechanical 2015 · Topic 6.** Maximum fluctuation of energy is the: (a) sum of maximum and minimum energies (b) difference between the maximum and minimum energies (c) ratio of maximum and minimum energies (d) ratio of the mean resisting torque to the work done per cycle

*Answer: (b) difference between the maximum and minimum energies.*

During a cycle the turning moment is sometimes above the mean and sometimes below it, so the flywheel's energy rises and falls. The maximum fluctuation of energy is ΔE = E\_max − E\_min, read from the turning-moment diagram. The flywheel is sized from it, using ΔE = Iω²Cₛ.

- **(a) Sum:** has no meaning here.
- **(c) Ratio of the energies:** not used anywhere.
- **(d):** not a defined quantity. The ratio that is used, the coefficient of fluctuation of energy, is ΔE divided by the work done per cycle.

**Memory aid:** a fluctuation is always a difference: ω₁ − ω₂ for speed and E\_max − E\_min for energy. The coefficients divide those by a mean value.

**Q24. UKPSC JE Mechanical 2013 (Paper I) · Topic 3.** In a compound gear train there is: (a) only one gear on each shaft (b) more than one gear on a shaft (c) no gear on driving shaft (d) None of these

*Answer: (b) more than one gear on a shaft.*

A compound train has two gears keyed to at least one intermediate shaft, so they turn together. This gives a large speed ratio in a small space, because the ratio is the product of the ratios of each pair: the product of the driven teeth divided by the product of the driving teeth.

- **(a):** this is a simple gear train. Its intermediate gears are idlers, which change only the direction of rotation.
- **(c):** every gear train has a gear on the driving shaft.
- **(d):** wrong, because (b) is correct.

**Memory aid:** in a simple train each shaft has one gear and the idlers do not change the ratio. In a compound train one shaft carries a pair, and the ratios multiply.

**Q25. RSSB JE Mechanical (Diploma), 6 February 2025 (Shift 2) · Topic 1.** Which of the following is an inversion of single slider crank chain? (a) Hand pump (b) Scotch yoke (c) Oldham's coupling (d) Elliptical trammel

*Answer: (a) Hand pump.*

A hand pump is the single slider crank chain with the slider fixed: the pump cylinder is the fixed slider, and the handle, the link and the piston rod make up the rest. The other inversions of this chain are the engine (frame fixed), the Whitworth quick return (crank fixed), and the oscillating cylinder engine and crank-and-slotted-lever quick return (connecting rod fixed).

- **(b), (c) and (d):** these are the three inversions of the double slider crank chain.

**The trap:** both chains have "slider" in their names. A single slider crank chain has one sliding pair and three turning pairs; a double slider crank chain has two of each.

## Mock 3

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from Kerala PSC papers (2025 and 2026), 3 from SSC JE (2017, 2020 and December 2025) and 20 from other exams.

**Q1. DRDO CEPTAM Tier-II STA B (Mechanical), 15 June 2026 · Topic 10.** When a shaft is subjected to a bending moment M and a twisting moment T, the equivalent twisting moment is: (a) √(M² − T²) (b) M + T (c) M² + T² (d) √(M² + T²)

*Answer: (d) √(M² + T²).*

The equivalent twisting moment is the twisting moment that, acting alone, would give the same largest shear stress as M and T together. From the maximum shear stress theory, τmax = (16/πd³)√(M² + T²), so Tₑ = √(M² + T²). The equivalent bending moment, from the maximum normal stress theory, is Mₑ = ½\[M + √(M² + T²)\].

- **(a) √(M² − T²):** smaller than M alone, and impossible when T is larger than M.
- **(b) M + T:** adds two moments that act in different ways. It overstates the load.
- **(c) M² + T²:** the right terms without the square root, so the units are wrong (N²m²).

**Memory aid:** Tₑ = √(M² + T²) goes with shear stress (Guest and Tresca), and Mₑ = (M + Tₑ)/2 goes with normal stress (Rankine). With shock factors, Tₑ = √((K\_m M)² + (K\_t T)²).

**Q2. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 4.** The correct formula for the angle of contact θ (in radians) in a cross belt drive is (α is the angle given by sin α = (r₁ + r₂)/x): (a) (180° − 2α) × π/180 (b) (180° + 2α) × π/180 (c) (90° − 2α) × π/180 (d) (360° − 2α) × π/180

*Answer: (b) (180° + 2α) × π/180.*

A crossed belt wraps more than half of each pulley. The angle of contact is θ = 180° + 2α on both pulleys, with sin α = (r₁ + r₂)/x. Multiplying by π/180 turns it into radians.

- **(a) 180° − 2α:** the smaller pulley of an open belt.
- **(c) 90° − 2α:** less than a quarter turn. No belt drive gives this.
- **(d) 360° − 2α:** close to a full turn when α is small, which two pulleys cannot give.

**The trap:** in a crossed belt both pulleys have the same angle of contact, so there is no smaller pulley to check. In an open belt the smaller pulley decides the design.

**Q3. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 7.** The primary unbalanced force in reciprocating masses is: (a) Independent of crank radius (b) Directly proportional to crank radius (c) Directly proportional to square of crank radius (d) Inversely proportional to crank radius

*Answer: (b) Directly proportional to crank radius.*

The primary unbalanced force is F\_P = mω²r cos θ. It is proportional to the crank radius r and to the square of the speed ω.

- **(c) Square of crank radius:** the square belongs to the speed, not the radius.
- **(a) and (d):** r appears to the first power, on top.

**Quick check:** mω²r has units of kg × 1/s² × m = N, a force. With r² it would not be a force.

**Q4. DRDO CEPTAM Tier-II STA B (Mechanical), 15 June 2026 · Topic 2.** For a cam designed with SHM for rise, maximum acceleration occurs at: (a) Start and end of rise (b) Mid of rise (c) When jerk = 0 (d) At follower rise

*Answer: (a) Start and end of rise.*

With simple harmonic motion the follower's displacement is s = (h/2)(1 − cos(πθ/θ₀)). The velocity goes as sin(πθ/θ₀), greatest at mid-rise, and the acceleration goes as cos(πθ/θ₀), greatest at the start and end of the rise (an acceleration at the start, a deceleration at the end).

- **(b) Mid of rise:** the velocity is greatest here and the acceleration is zero.
- **(c) When jerk = 0:** at the start and end of the rise the acceleration jumps from zero (in the dwell) to its peak. In theory the jerk there is infinite, which is the main weakness of SHM.
- **(d) At follower rise:** not a position at all.

**Memory aid:** uniform velocity gives infinite acceleration at the ends. SHM gives finite acceleration, but it jumps at the ends. Cycloidal motion starts and ends with zero acceleration, which makes it the smoothest.

**Q5. NRL GET Mechanical, 23 September 2021 (Shift 2) · Topic 9.** Tensile strength of a single transverse fillet weld of leg h, length l and permissible tensile stress σ is: (a) h × l × σ (b) 1.414 h l σ (c) 2.828 h l σ (d) 0.707 h l σ

*Answer: (d) 0.707 h l σ.*

A fillet weld fails across its throat, the smallest section. The throat is t = h sin 45° = 0.707h, so the strength of one weld is (0.707h × l)σ. A double transverse fillet weld has twice that, 1.414 h l σ.

- **(b) 1.414 h l σ:** a double transverse fillet weld, two welds.
- **(a) h l σ:** uses the leg instead of the throat.
- **(c) 2.828 h l σ:** four times one weld. No standard joint gives this.

**The trap:** the throat, not the leg, carries the load. For parallel fillet welds the stress is shear instead, but the throat area is the same: 1.414 h l τ for a double parallel weld.

**Q6. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 6.** The expression of sensitiveness of a governor is (N₁ = maximum equilibrium speed, N₂ = minimum equilibrium speed): (a) (N₁ + N₂)/(N₁ − N₂) (b) 2(N₁ − N₂)/(N₁ + N₂) (c) (N₁ + N₂)/(2(N₁ − N₂)) (d) 2(N₁ + N₂)/(N₁ − N₂)

*Answer: (b) 2(N₁ − N₂)/(N₁ + N₂).*

Sensitiveness is the range of speed divided by the mean speed: (N₁ − N₂)/\[(N₁ + N₂)/2\] = 2(N₁ − N₂)/(N₁ + N₂). With this definition, the smaller the value, the more sensitive the governor.

- **(c):** the same ratio upside down, mean speed over range. Some books define sensitiveness that way, but this key uses range over mean.
- **(a) and (d):** the sum on top with the wrong factor.

**Quick check:** an isochronous governor has N₁ = N₂ and is as sensitive as a governor can be. In (b) it gives 0; the other three give infinity.

**Q7. ISRO ICRB Scientist (Mechanical), 26 October 2025 · Topic 1.** Inversion of a mechanism is: (a) Changing of a higher pair to lower pair (b) Obtained by fixing different links in a kinematic chain (c) Turning it upside down (d) Obtained by reversing the input and output motion

*Answer: (b) Obtained by fixing different links in a kinematic chain.*

A kinematic chain becomes a mechanism when one link is fixed. Fixing a different link gives a different mechanism, called an inversion. The relative motion between any two links stays the same; only the absolute motions change. A four-link chain has four inversions.

- **(a):** replacing a higher pair by lower pairs gives an equivalent linkage, not an inversion.
- **(c):** turning a mechanism over changes nothing about its motion.
- **(d):** the same mechanism driven backwards.

**Memory aid:** inversion means the same chain with a different fixed link.

**Q8. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 11.** A shaft rotating in a bush bearing is an example of: (a) Sliding fit (b) Running fit (c) Rotation fit (d) Driving fit

*Answer: (b) Running fit.*

A running fit is a clearance fit with enough clearance for an oil film, so the shaft turns freely in its bush. A typical choice in the hole-basis system is H8/f7.

- **(a) Sliding fit:** a smaller clearance, for parts that slide or locate with little play. It is too tight for a running shaft.
- **(c) Rotation fit:** not a standard name.
- **(d) Driving fit:** an interference fit, driven in with a hammer, so the parts do not move relative to each other.

**The trap:** the bearing is a sliding contact bearing, which makes "sliding fit" tempting. The fit for a shaft that turns on an oil film is a running fit.

**Q9. Gujarat Metro STCO (Mechanical), 27 March 2022 · Topic 4.** V-belts are usually used for: (a) Long drives (b) Short drives (c) Long and short drives (d) None of these

*Answer: (b) Short drives.*

A V-belt grips by wedging into its groove, so it carries a lot of power with a small angle of contact. That suits pulleys close together. V-belts are made endless in standard lengths, and a long span would let them whip.

- **(a) Long drives:** ropes are used beyond about 8 m, and flat belts up to that.
- **(c) Long and short drives:** V-belts do not suit long centre distances.
- **(d) None of these:** wrong, because (b) is correct.

**Memory aid:** V-belt when the pulleys are very close, flat belt up to about 8 m apart, and rope beyond 8 m.

**Q10. SSC JE Mechanical, 1 March 2017 (Morning) · Topic 8.** For ductile materials the most appropriate failure theory is: (a) Maximum shear stress theory (b) Maximum principal stress theory (c) Maximum principal strain theory (d) Shear strain energy theory

*Answer: (d) Shear strain energy theory.*

Ductile metals yield by shear, with planes of atoms sliding over each other. The shear strain energy (distortion energy, von Mises) theory fits test results for them most closely.

- **(a) Maximum shear stress:** also used for ductile materials. It gives a safe design that is up to about 15% conservative, so it is the second-best fit, not the most appropriate.
- **(b) Maximum principal stress:** suits brittle materials.
- **(c) Maximum principal strain:** Saint-Venant's theory. It fits neither kind of material well.

**The trap:** (a) and (d) are both theories for ductile materials. "Most appropriate" or "most accurate" points to (d); "simplest and safe" points to (a).

**Q11. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** Pressure angle in gear is: (a) angle between the common tangent at the point of tooth contact and the common tangent to the pitch circles (b) the angle between the common normal at the point of tooth contact and the common tangent to the pitch circles (c) angle between the line of action and the common normal to the pitch circles (d) Either (a) or (c)

*Answer: (b) the angle between the common normal at the point of tooth contact and the common tangent to the pitch circles.*

The force between teeth acts along the common normal at the point of contact. For involute teeth this is the line of action, a fixed line that touches both base circles. The pressure angle φ is its angle to the common tangent at the pitch point. Standard values are 14½° and 20°.

- **(a):** the tangent at the point of contact is at right angles to the line of action, so this angle is 90° − φ.
- **(c):** the common normal to the pitch circles is the line of centres. Its angle to the line of action is also 90° − φ.
- **(d):** both (a) and (c) are wrong.

**Quick check:** the pressure angle is small, measured from the tangent to the pitch circles. An option that measures from the line of centres or from the tooth tangent gives 70° for 20° teeth.

**Q12. TSPSC AEE Mechanical 2015 (Paper II) · Topic 7.** In a spring–mass system, if the mass of the system is doubled and the spring stiffness is halved, the natural frequency: (a) remains unchanged (b) is doubled (c) is halved (d) is quadrupled

*Answer: (c) is halved.*

ωₙ = √(k/m). The new value is √((k/2)/(2m)) = √(k/4m) = ½√(k/m), half the old one.

- **(a) Unchanged:** true only if k and m changed by the same factor.
- **(b) Doubled:** what you get by halving the mass and doubling the stiffness.
- **(d) Quadrupled:** would need k/m to rise 16 times.

**The trap:** k/m falls to a quarter, but the frequency goes as its square root, so it halves.

**Q13. JSSC JE Mechanical Re-Exam, 23 October 2022 (Paper II) · Topic 5.** A single plate clutch, with both sides effective, has outer and inner diameters of 300 mm and 200 mm. The maximum intensity of pressure at any point in the contact surface is not to exceed 0.1 N/mm². If the coefficient of friction is 0.2, the power transmitted by the clutch at a speed of 300 rad/s is (assume uniform wear and π = 3.14): (a) 471 kW (b) 47.1 W (c) 31.4 kW (d) 47.1 kW

*Answer: (d) 47.1 kW.*

Under uniform wear p·r is constant, and the greatest pressure is at the inner radius, so C = 0.1 × 100 = 10 N/mm. The axial load is W = 2πC(r₁ − r₂) = 2 × 3.14 × 10 × 50 = 3140 N. The mean radius is 125 mm, and with two surfaces T = 2 × 0.2 × 3140 × 125 = 157,000 N·mm = 157 N·m. Power is Tω = 157 × 300 = 47,100 W = 47.1 kW.

- **(a) 471 kW and (b) 47.1 W:** the right digits with a slip of units, ten times too large and a thousand times too small.
- **(c) 31.4 kW:** does not follow from the uniform-wear steps.

**The trap:** take the greatest pressure at the inner radius. Using the outer radius gives C = 15 N/mm and overstates the load by half.

**Q14. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 1.** In a slider crank mechanism, the connecting rod has zero angular velocity when the crank angle is: (a) 45° (b) 0° (c) 90° (d) 190°

*Answer: (c) 90°.*

The connecting rod's angular velocity is ω\_c = ω cos θ/√(n² − sin² θ). It is zero when cos θ = 0, at θ = 90° (and 270°). At that moment the crank pin moves parallel to the line of stroke at ωr, the same as the piston, so the rod is moving without turning.

- **(b) 0°:** inner dead centre, where the rod turns fastest, at ω/n.
- **(a) 45°:** the rod is still turning.
- **(d) 190°:** just past outer dead centre, close to the fastest turning again.

**Quick check:** at 90° both ends of the rod move with the same velocity. A link whose two ends move alike cannot be turning.

**Q15. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 3.** In a reverted gear train, two gears P and Q are meshing, Q–R is a compound gear, and R and S are meshing. The modules of P and R are 4 mm and 5 mm respectively, and the numbers of teeth of P, Q and R are 20, 40 and 25. The number of teeth of S is: (a) 50 (b) 35 (c) 53 (d) 23

*Answer: (d) 23.*

In a reverted train the first and last shafts are on one axis, so the two centre distances are equal: m\_P(T\_P + T\_Q)/2 = m\_R(T\_R + T\_S)/2. So 4(20 + 40) = 5(25 + T\_S), giving 240 = 125 + 5T\_S and T\_S = 23.

- **(b) 35:** what you get by equating the tooth totals, 20 + 40 = 25 + T\_S. That holds only when the modules are equal.
- **(a) 50 and (c) 53:** neither satisfies the centre-distance equation.

**The trap:** match the centre distances, not the numbers of teeth.

**Q16. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 6.** The effort of a governor is the force exerted by the governor on the \_\_\_\_\_\_. (a) Lower links (b) Balls (c) Sleeve (d) Upper links

*Answer: (c) Sleeve.*

When a governor runs at a steady speed, the forces on the sleeve balance. When the speed changes, a force builds up at the sleeve that moves it and works the throttle. The effort is the mean value of this force for a given percentage change in speed.

- **(a), (b) and (d):** the balls and links pass the force on, but the effort is measured at the sleeve.

**Memory aid:** effort and power are both measured at the sleeve: the power of a governor is the mean effort times the lift of the sleeve.

**Q17. Oil India Senior Officer (Mechanical), 4 March 2024 · Topic 4.** Which of the pulley with the belt drives is used when an open belt drive cannot be used due to small angle of contact on the smaller pulley? (a) Jockey pulley (b) V-pulley (c) Rope pulley (d) Timer pulley

*Answer: (a) Jockey pulley.*

A jockey pulley is an idler pressed onto the slack side of the belt, close to the smaller pulley. It increases the angle of contact on the smaller pulley and the belt tension, so more power can be carried.

- **(b) V-pulley and (c) rope pulley:** these change the kind of drive instead of improving the open belt.
- **(d) Timer pulley:** a timing pulley drives a toothed belt, again a different kind of drive.

**The trap:** a jockey pulley does not change the speed ratio. It only increases the wrap.

**Q18. ISRO Scientist (Refrigeration and Air Conditioning) 2013 · Topic 7.** In a vibrating system, if the actual damping coefficient is 50 N/m/s and the critical damping coefficient is 500 N/m/s, the logarithmic decrement is: (a) 0.21 (b) 0.45 (c) 0.63 (d) 0.87

*Answer: (c) 0.63.*

The damping ratio is ζ = c/c\_c = 50/500 = 0.1. The logarithmic decrement is δ = 2πζ/√(1 − ζ²) = 0.628/0.995 = 0.63.

- **(a) 0.21:** about 2ζ, leaving out the π.
- **(b) 0.45 and (d) 0.87:** neither comes from the formula.

**Quick check:** for small damping, δ ≈ 2πζ = 2π × 0.1 = 0.63.

**Q19. JSSC JE Mechanical Re-Exam, 23 October 2022 (Paper II) · Topic 2.** In radial cams, the maximum travel of the follower from its lowest position to the topmost position is known as: (a) diameter of base circle (b) pressure angle (c) lift (d) diameter of pitch circle

*Answer: (c) lift.*

The lift, or stroke, is the greatest distance the follower moves from its lowest position to its highest.

- **(a) Base circle:** the smallest circle, centred on the cam axis, that touches the cam profile.
- **(d) Pitch circle:** the circle through the pitch point, where the pressure angle is greatest.
- **(b) Pressure angle:** an angle, not a distance.

**Memory aid:** the base circle touches the cam profile, the prime circle touches the pitch curve (base circle radius plus roller radius), and the pitch circle passes through the point of greatest pressure angle.

**Q20. ISRO SAC Technical Assistant (Mechanical), 1 July 2018 · Topic 9.** Which riveted joint is having minimum efficiency? (a) Single riveted butt joint (b) Single riveted lap joint (c) Double riveted butt joint (d) Double riveted lap joint

*Answer: (b) Single riveted lap joint.*

A single riveted lap joint has the lowest efficiency, about 45 to 60%. Its rivets are in single shear, and the plates are offset, so the load is eccentric and bends the joint.

- **(a) Single riveted butt:** two cover plates put the rivets in double shear and remove the offset, so it does better.
- **(c) and (d):** a second row lets the outer row have fewer rivets, so less plate is cut away and the efficiency rises.

**Quick check:** two rules settle it. More rows give higher efficiency, and a butt joint beats a lap joint with the same number of rows. The lap joint with the fewest rows comes last.

**Q21. SSC JE Mechanical, 27 October 2020 (Morning) · Topic 5.** A transmission dynamometer measures: (a) brake power (b) alternate power (c) indicated power (d) specific power

*Answer: (a) brake power.*

A transmission dynamometer, such as a belt transmission, epicyclic train or torsion dynamometer, measures the torque passing through it without absorbing it. With the speed, this gives the power at the shaft, which is the brake power.

- **(c) Indicated power:** found from the pressure inside the cylinder with an indicator, not at the shaft.
- **(b) Alternate power and (d) specific power:** not quantities a dynamometer measures.

**The trap:** absorption dynamometers, like the Prony brake and the rope brake, also measure brake power. The difference is that they turn the power into heat, while a transmission dynamometer passes it on to the machine.

**Q22. Gujarat Engineering Service 2019 (Civil Paper 2) · Topic 8.** According to the maximum shear stress failure criterion, yielding in a material occurs when: (a) maximum shear stress = yield stress (b) maximum shear stress = half of yield stress (c) maximum shear stress = 2 × yield stress (d) maximum shear stress just exceeds the yield stress

*Answer: (b) maximum shear stress = half of yield stress.*

The Tresca theory says yielding starts when the largest shear stress reaches the largest shear stress at yield in a tension test. In that test, Mohr's circle has radius σ/2, so at yield τmax = Sy/2. In three dimensions the condition is (σ₁ − σ₃)/2 = Sy/2.

- **(a) and (d):** compare a shear stress directly with the tensile yield stress, ignoring the factor of 2.
- **(c):** the factor the wrong way round.

**Memory aid:** the yield strength in shear is 0.5Sy by Tresca and 0.577Sy by von Mises.

**Q23. NCL Assistant Foreman Mechanical (Trainee), 27 December 2020 · Topic 1.** When two elements of a pair are in line contact, the pair is known as: (a) Lower pair (b) Higher pair (c) Medium pair (d) Linear pair

*Answer: (b) Higher pair.*

A higher pair has point or line contact, like a cam and follower, a pair of gear teeth, a ball in its race, or a wheel on a rail. A lower pair has surface contact, like a shaft in a bearing, a piston in a cylinder or a nut on a screw.

- **(a) Lower pair:** surface contact.
- **(c) Medium pair and (d) Linear pair:** not standard terms.

**Memory aid:** lower means surface; higher means point or line. Higher pairs carry high contact stress and wear faster.

**Q24. ESE Mechanical 2015 (Paper 2) · Topic 6.** The flywheel of a machine has a weight of 4500 N and a radius of gyration of 2 m. It has a cyclic fluctuation of speed from 125 rpm to 120 rpm. Assuming g = 10 m/s², the maximum fluctuation of energy is: (a) 12822 N·m (b) 24200 N·m (c) 14822 N·m (d) 12100 N·m

*Answer: (d) 12100 N·m.*

The mass is 4500/10 = 450 kg, so I = mk² = 450 × 2² = 1800 kg·m². Then ΔE = ½I(ω₁² − ω₂²) = 900 × (2π/60)² × (125² − 120²) = 900 × 0.01097 × 1225 ≈ 12,090 N·m, about 12,100 N·m.

- **(b) 24200:** twice the answer, leaving out the ½.
- **(a) 12822 and (c) 14822:** close in size, but they do not come from these data.

**The trap:** the flywheel is given as a weight in newtons. Divide by g to get the mass before you use I = mk².

**Q25. JKSSB JE Mechanical, 2 November 2021 (Shift 1) · Topic 3.** Axial thrust is not there in which of the following gears? (a) double helical gear (b) bevel gear (c) spiral gear (d) single helical gear

*Answer: (a) double helical gear.*

A double helical (herringbone) gear has two helices of opposite hand side by side. Each makes an axial thrust, and the two cancel, so the shaft bearings carry no thrust.

- **(b) Bevel gear:** the cone angle gives a thrust along each shaft.
- **(c) Spiral gear:** crossed helical gears push along their shafts.
- **(d) Single helical gear:** the thrust is F\_a = F\_t tan ψ.

**Memory aid:** a helix makes thrust, F\_a = F\_t tan ψ. Two opposite helices cancel it. Spur gears have no thrust either, but they are not among the options.

## Mock 4

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from a Kerala PSC paper (2025), 4 from SSC JE (December 2023 and December 2025) and 19 from other exams.

**Q1. BPSC AE Paper VI Mechanical 2024 · Topic 10.** A transmission shaft subjected to bending and torsional moments should be designed on the basis of: (a) Maximum principal stress theory (b) Permissible bearing pressure (c) Maximum shear stress theory (d) None of the mentioned above

*Answer: (c) Maximum shear stress theory.*

Transmission shafts are made of ductile steel, so they are designed by the maximum shear stress (Guest's) theory: τ = (16/πd³)√(M² + T²) must not exceed the allowable shear stress. This is the basis of the equivalent twisting moment.

- **(a) Maximum principal stress theory:** Rankine's theory, used for brittle materials such as cast iron. It gives the equivalent bending moment.
- **(b) Permissible bearing pressure:** this sizes journals and keys, not the shaft's strength.
- **(d) None of these:** wrong, because (c) is correct.

**The trap:** many textbook examples work out the diameter from both Tₑ and Mₑ and take the larger. When one theory is asked for a steel shaft, it is maximum shear stress.

**Q2. RSSB JE Mechanical (Degree), 10 February 2025 · Topic 3.** If the axes of the first and last wheels of a compound gear train coincide, it is called: (a) Epicyclic gear train (b) Simple gear train (c) Compound gear train (d) Reverted gear train

*Answer: (d) Reverted gear train.*

A reverted train is a compound train that brings the drive back to the axis it started on. The two centre distances must be equal, r₁ + r₂ = r₃ + r₄. It is used in lathe back gears, clocks (the hour and minute hands share an axis) and layshaft gearboxes.

- **(a) Epicyclic:** some gear axes move round others. Here every axis is fixed.
- **(b) Simple:** one gear on each shaft.
- **(c) Compound:** true, but not specific. The shared axis of the first and last wheels is what makes it reverted.

**The trap:** (c) describes the train correctly but leaves out the feature the question gives. Pick the most specific name.

**Q3. SSC JE Mechanical, 6 December 2025 (Shift 2) · Topic 6.** A governor is considered stable when: (a) The sleeve moves upward with an increase in speed (b) The sleeve moves downward with an increase in speed (c) The height increases with speed (d) The height remains constant

*Answer: (a) The sleeve moves upward with an increase in speed.*

A stable governor has one radius for each speed, and the radius grows as the speed grows. As the balls swing outward, the sleeve rises. So in a stable governor, a higher speed means a higher sleeve.

- **(b):** the radius would shrink as the speed rose, which is unstable.
- **(c):** the height falls as the speed rises (h = g/ω² for a Watt governor), so this cannot happen.
- **(d):** if the height did not change, the sleeve would not move and the governor would do nothing.

**The trap:** the sleeve rises while the height falls. Height is measured from the plane of the balls up to where the arms meet the axis, and it shrinks as the balls swing out.

**Q4. RSSB JE Mechanical (Diploma), 6 February 2025 (Shift 2) · Topic 1.** The transmission angle is maximum when the crank angle with the fixed link is: (a) 90° (b) 180° (c) 270° (d) 0°

*Answer: (b) 180°.*

Take crank a, coupler b, output link c and fixed link d. The diagonal from the crank pin to the output pivot has s² = a² + d² − 2ad cos θ, and the same diagonal gives s² = b² + c² − 2bc cos μ. The diagonal is longest at θ = 180°, so cos μ is smallest and μ is largest there.

- **(d) 0°:** the diagonal is shortest here, so the transmission angle is smallest.
- **(a) 90° and (c) 270°:** in-between values.

**Memory aid:** the two extreme transmission angles occur when the crank lines up with the fixed link: smallest at 0° and largest at 180°.

**Q5. UPPSC AE Mechanical 2019 (Paper I, held 13 December 2020) · Topic 8.** If the size of a standard specimen for a fatigue testing machine is increased, the endurance limit for the material will: (a) have the same value as that of the standard specimen (b) increase (c) decrease (d) none of these

*Answer: (c) decrease.*

Fatigue cracks start at flaws. A larger part has more material under high stress, so it is more likely to contain a flaw where it matters, and in bending its stress falls off more slowly from the surface. Design takes this into account with the size factor, which is about 1 for the standard 7.5 mm specimen and less than 1 for larger parts.

- **(a):** would hold only if fatigue did not depend on flaws.
- **(b):** the effect works the other way.
- **(d):** wrong, because (c) is correct.

**Memory aid:** Sₑ = kₐk\_bk\_ck\_dkₑ × Sₑ′. Surface, size, type of load, temperature and reliability each scale the specimen value, and for a real part they bring it down.

**Q6. MPPGCL JE Mechanical, 1 June 2024 · Topic 5.** For a single plate clutch, considering the uniform wear theory (p·r = C), the value of C is: (a) W/(r₁ − r₂) (b) W/\[2π(r₁ − r₂)\] (c) W/\[π(r₁ − r₂)\] (d) W(r₁ − r₂)

*Answer: (b) W/\[2π(r₁ − r₂)\].*

The axial load is the pressure added up over the ring: W = ∫ p × 2πr dr = ∫ (C/r) × 2πr dr = 2πC(r₁ − r₂). So C = W/\[2π(r₁ − r₂)\].

- **(a):** leaves out the 2π.
- **(c):** leaves out the 2.
- **(d):** has the wrong units.

**Quick check:** p·r has units of (N/m²)(m) = N/m. W(r₁ − r₂) is in N·m, so (d) is out at once. The 2π comes from the area of a thin ring, 2πr dr.

**Q7. SSC JE Mechanical, 6 December 2025 (Shift 2) · Topic 2.** In a cam mechanism, when the follower rises with simple harmonic motion (SHM), the maximum velocity of the follower occurs at: (a) End of stroke (b) Start of stroke (c) Throughout the stroke (d) Mid-stroke

*Answer: (d) Mid-stroke.*

SHM is the motion of a point on a circle projected onto a diameter. The projected point moves fastest as it passes the centre, which is the middle of the stroke. There v\_max = πhω/(2θ₀), where h is the lift and θ₀ the angle of ascent.

- **(a) and (b):** the velocity is zero at the ends of the stroke, where the acceleration is greatest.
- **(c) Throughout the stroke:** that is uniform velocity motion, not SHM.

**Memory aid:** in SHM the velocity peaks at the middle and the acceleration peaks at the ends.

**Q8. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 9.** The distance from the joint root to the toe of the weld is called: (a) Leg (b) Face (c) Effective throat (d) Actual throat

*Answer: (a) Leg.*

In a fillet weld the leg, also called the size, runs along a plate from the root to the toe. The throat runs across the weld from the root to its face, and for a 45° weld the throat is 0.707 times the leg.

- **(b) Face:** the exposed surface of the weld.
- **(c) Effective throat:** from the root to the straight line joining the two toes, 0.707h. Design uses this.
- **(d) Actual throat:** from the root to the face, including any extra metal on a convex weld.

**Memory aid:** the leg runs along a plate; the throat cuts across the weld.

**Q9. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 7.** In machine tools, chatter is due to: (a) Free vibrations (b) Forced vibrations (c) Self-excited vibrations (d) Cutting vibrations

*Answer: (c) Self-excited vibrations.*

In chatter the vibration itself changes the chip thickness, and so the cutting force, which feeds energy back into the vibration. A common form is regenerative chatter, where the tool cuts the wavy surface left by the last pass. It grows near a natural frequency of the tool or the workpiece without any outside periodic force.

- **(a) Free vibrations:** these die out because of damping. Chatter keeps going.
- **(b) Forced vibrations:** need an outside periodic force, such as an unbalanced spindle or gear mesh, and happen at its frequency.
- **(d) Cutting vibrations:** not a standard class of vibration.

**The trap:** chatter happens while cutting, which makes (d) tempting. Its class is self-excited, like a violin string under a bow.

**Q10. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 4.** What is the typical groove angle of a pulley used in V-belt drives? (a) 20°–25° (b) 32°–38° (c) 25°–32° (d) 38°–45°

*Answer: (b) 32°–38°.*

The belt wedges into the groove, and the effective coefficient of friction becomes μ/sin β, where β is half the groove angle. Grooves of about 32° to 38° give strong grip while still letting the belt leave the groove freely. Small pulleys get the smaller angles, because a V-belt's section changes shape as it bends round them.

- **(a) and (c):** too narrow. The belt would jam in the groove.
- **(d) 38°–45°:** too wide, giving less wedging and less grip.

**Quick check:** at a 36° groove, μ/sin 18° ≈ 3.2μ, about three times the grip of a flat belt.

**Q11. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 6.** The resultant force acting on the sleeve for a governor running at constant speed is: (a) Maximum (b) Minimum (c) Zero (d) None of the above

*Answer: (c) Zero.*

At constant speed the governor is in equilibrium and the sleeve does not move, so the forces on it balance and their resultant is zero. A net force on the sleeve appears only when the speed changes; its mean value is the effort.

- **(a) Maximum:** the force on the sleeve is largest just after a change in speed, not at a steady speed.
- **(b) Minimum:** "minimum" suggests a value above zero, which a balanced sleeve does not have.
- **(d) None of these:** wrong, because (c) is correct.

**Memory aid:** equilibrium means no net force. Effort appears only when the speed changes.

**Q12. UPRVUNL JE Mechanical 2016 (Shift 2) · Topic 3.** A spur gear has the following specification: number of teeth = 22, pitch circle diameter = 14 mm. Its circular pitch is: (a) 2 mm (b) 16 mm (c) 4 mm (d) 8 mm

*Answer: (a) 2 mm.*

Circular pitch is the pitch circle's circumference shared among the teeth: p = πD/T = (22/7 × 14)/22 = 44/22 = 2 mm. The numbers were chosen so that π = 22/7 works out exactly.

- **(b), (c) and (d):** none of these comes from πD/T. The module, D/T = 0.64 mm, and the diametral pitch, T/D = 1.57 per mm, are not offered either.

**Memory aid:** circular pitch p = πm = πD/T; module m = D/T; diametral pitch P = T/D = 1/m; and p × P = π.

**Q13. RSSB JE Mechanical (Diploma), 6 February 2025 (Shift 2) · Topic 1.** The link which does not undergo any deformation while transmitting the motion is known as: (a) Flexible link (b) Fluid link (c) Non-rigid link (d) Rigid link

*Answer: (d) Rigid link.*

In a rigid link the distance between any two points stays the same. Kinematics treats cranks, connecting rods and frames as rigid, which makes their motion easy to work out.

- **(a) Flexible link:** deforms, but in a way that does not spoil the motion. Belts, ropes and chains carry only tension.
- **(b) Fluid link:** passes motion on through fluid pressure, as in a hydraulic press, jack or brake.
- **(c) Non-rigid link:** not a standard class of link.

**Memory aid:** three kinds of link: rigid (crank, connecting rod), flexible (belt, chain, tension only) and fluid (hydraulic press, compression only).

**Q14. SSC JE Mechanical, 4 December 2023 (Paper II) · Topic 5.** What will be the brake power (BP) of the engine if a rope brake dynamometer is used (W = dead load, S = spring balance reading, D = diameter of brake wheel, d = diameter of rope, N = speed in rpm)? (a) (W − S)π(D − d)N/60 (b) (W + S)π(D + d)N/60 (c) (W − S)π(D + d)N/60 (d) (W + S)π(D − d)N/60

*Answer: (c) (W − S)π(D + d)N/60.*

The dead load and the spring balance pull on the rope in opposite directions, so the net load is W − S. The rope lies on the outside of the wheel, so its centre line is at radius (D + d)/2. The torque is (W − S)(D + d)/2, and the power is T × 2πN/60 = (W − S)π(D + d)N/60 watts.

- **(a) and (d), with D − d:** these put the rope inside the wheel.
- **(b) and (d), with W + S:** these add two forces that act in opposite directions.

**The trap:** the effective radius is measured to the centre of the rope, D/2 + d/2. When the rope is thin, D/2 alone is often used as an approximation.

**Q15. NRL GET Mechanical, 23 September 2021 (Shift 1) · Topic 7.** Due to partial balancing of the reciprocating parts in locomotives, the unbalanced primary force perpendicular to the line of stroke is known as: (a) Tractive force (b) Swaying blow force (c) Swaying couple (d) Hammer blow

*Answer: (d) Hammer blow.*

Balance masses on the driving wheels balance part of the reciprocating mass along the line of stroke. Their centrifugal force also has a vertical part, at right angles to the line of stroke, which nothing balances. Its peak value is the hammer blow, which comes down on the rail once a turn.

- **(a) Tractive force:** the unbalanced force along the line of stroke changes the pull of the engine. Its variation is the variation of tractive force.
- **(c) Swaying couple:** the unbalanced forces along the line of stroke of the two cylinders, which are some distance apart, make the engine sway about a vertical axis.
- **(b) Swaying blow force:** not a standard term.

**Memory aid:** along the stroke you get tractive force variation and the swaying couple; across the stroke you get the hammer blow.

**Q16. BHEL Supervisor Trainee (Mechanical), 21 January 2024 · Topic 3.** For two meshing spur gears on parallel shafts, what happens if the module of both gears is increased while keeping the numbers of teeth constant? (a) Centre distance increases (b) Speed ratio changes (c) Load capacity decreases (d) Gear train becomes quieter

*Answer: (a) Centre distance increases.*

The pitch diameters are D = mT, so they grow with the module, and so does the centre distance C = m(T₁ + T₂)/2. The teeth also become larger and stronger.

- **(b) Speed ratio changes:** the speed ratio is T₂/T₁, which stays the same.
- **(c) Load capacity decreases:** larger teeth are stronger. The Lewis equation gives a load capacity proportional to the module.
- **(d) Quieter:** noise depends mainly on accuracy and contact ratio, and with the same numbers of teeth the contact ratio does not change with the module.

**Memory aid:** the module scales the whole gear (D = mT, addendum = m, C = m(T₁ + T₂)/2). The speed ratio depends only on the teeth.

**Q17. GATE ME 2016 (Shift 2) · Topic 8.** In a structural member under fatigue loading, the minimum and maximum stresses developed at the critical point are 50 MPa and 150 MPa respectively. The endurance, yield and ultimate strengths of the material are 200 MPa, 300 MPa and 400 MPa respectively. The factor of safety using the modified Goodman criterion is: (a) 3/2 (b) 8/5 (c) 12/7 (d) 2

*Answer: (d) 2.*

The mean stress is 100 MPa and the amplitude 50 MPa. The modified Goodman line gives 1/n = σₐ/Sₑ + σₘ/Sᵤ = 50/200 + 100/400 = 0.25 + 0.25 = 0.5, so n = 2.

- **(c) 12/7:** the Soderberg line, which uses the yield strength: 50/200 + 100/300 = 7/12.
- **(b) 8/5:** uses the maximum stress, 150 MPa, in place of the mean: 50/200 + 150/400 = 5/8.
- **(a) 3/2:** does not come from either line.

**The trap:** all three strengths are given so that you can pick the wrong one. Goodman uses Sᵤ, Soderberg uses Sᵧ, and both use Sₑ for the amplitude.

**Q18. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 4.** If T₁ and T₂ are the tensions on the tight and slack sides of the belt in newtons, and v is the belt speed in m/s, the power transmitted in watts is: (a) (T₁ − T₂)v/4500 (b) (T₁ − T₂)v/60 (c) (T₁ − T₂)v/75 (d) (T₁ − T₂)v

*Answer: (d) (T₁ − T₂)v.*

Power is the net driving force times the speed: P = (T₁ − T₂)v. With newtons and m/s it comes out directly in watts.

- **(a) ÷ 4500:** metric horsepower with tensions in kgf and speed in m/min.
- **(c) ÷ 75:** metric horsepower with tensions in kgf and speed in m/s.
- **(b) ÷ 60:** would be right only with the speed in m/min.

**The trap:** these divisors belong to older units. With N and m/s nothing needs dividing.

**Q19. NCL Assistant Foreman (Mechanical), 26 April 2026 (Shift 3) · Topic 11.** When do the surfaces in touch with collar bearings or pivots experience Coulomb friction? (a) When there is no adhesive fluid (b) When there is no lubricating fluid (c) When there is no cohesive fluid (d) When there is no friction fluid

*Answer: (b) When there is no lubricating fluid.*

Coulomb friction is dry friction, F = μN, which does not depend on speed or contact area. Without a lubricant, the surfaces of a pivot or collar rub directly and follow this law. With a full oil film the friction becomes viscous instead and depends on the speed and the viscosity.

- **(a), (c) and (d):** not standard terms. Only a lubricating fluid separates the surfaces.

**The trap:** the formulae for friction in pivots and collars, under uniform pressure or uniform wear, assume dry Coulomb friction. That is why they look the same as the formulae for a plate clutch.

**Q20. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025) · Topic 1.** Which of the following statements is correct regarding velocity and acceleration in machines? (a) Only velocity can be determined graphically (b) Both velocity as well as acceleration can be determined graphically as well as analytically (c) Only acceleration can be determined graphically (d) Velocity and acceleration can be determined analytically only

*Answer: (b) Both velocity as well as acceleration can be determined graphically as well as analytically.*

Graphical methods include velocity polygons, the instantaneous centre method and acceleration polygons, with a Coriolis component where a link slides on a turning link. Analytical methods write equations for the mechanism, such as the slider crank's v = ωr(sin θ + sin 2θ/2n).

- **(a), (c) and (d):** each leaves out a method that exists.

**Memory aid:** Klein's construction draws both the velocity and the acceleration diagram of a slider crank on the mechanism itself.

**Q21. RSSB JE Mechanical (Diploma), 10 February 2025 · Topic 6.** When the sleeve of a Porter governor moves upward, the governor speed: (a) Decreases (b) Remains unaffected (c) First increases then decreases (d) Increases

*Answer: (d) Increases.*

The sleeve rises when the balls swing outward, and they do that when the speed rises. A Porter governor is stable, so each higher sleeve position belongs to a higher speed.

- **(a) Decreases:** the sleeve falls when the speed falls.
- **(b) Remains unaffected:** the sleeve moves only because the speed has changed.
- **(c) First increases then decreases:** the speed of a Porter governor rises steadily with sleeve lift.

**Quick check:** with equal arms and links, h = \[(m + M)/m\] × 895/N² metres, with N in rpm. A higher sleeve means a smaller height, which needs a larger N.

**Q22. BEL Probationary Engineer (Mechanical), 17 December 2023 · Topic 9.** For dynamic loads, which of the following welded joint types is preferable due to its superior fatigue resistance? (a) Spot weld (b) Fillet weld (c) Butt weld (d) Seam weld

*Answer: (c) Butt weld.*

A full-penetration butt weld carries the load straight through, in line with the plates, so the stress flows smoothly and the stress concentration is low. Its fatigue stress concentration factor is about 1.2, against 1.5 at the toe of a transverse fillet weld and 2.7 at the end of a parallel fillet weld.

- **(b) Fillet weld:** the load has to turn a corner through the weld, which raises the stress at the toe and root.
- **(a) Spot weld and (d) seam weld:** resistance welds on lapped thin sheet. The edge of each nugget is a sharp notch.

**Memory aid:** fatigue stress concentration factors for welds: reinforced butt 1.2, toe of transverse fillet 1.5, T-butt with sharp corners 2.0, end of parallel fillet 2.7.

**Q23. UPPSC AE Mechanical 2013 (Paper I) · Topic 2.** The pressure angle in a cam depends on: (a) the angle of ascent (b) the lift of the follower (c) offset between centre lines of cam and follower (d) All of the above

*Answer: (d) All of the above.*

For a translating roller follower, tan φ = (ds/dθ − e)/(s + √(Rₚ² − e²)), where e is the offset and Rₚ the prime circle radius. The slope ds/dθ grows with the lift and shrinks with the angle of ascent, so the pressure angle depends on all three, and on the size of the cam.

- **(a), (b) and (c):** each is true, but only part of the answer.

**Memory aid:** to lower the pressure angle, use a bigger base circle, spread the lift over a larger angle of ascent, reduce the lift, or offset the follower suitably.

**Q24. BPSC AE Paper VI Mechanical 2024 · Topic 7.** The rate of decay of oscillations is known as: (a) Transmissibility (b) Damping coefficient (c) Logarithmic decrement (d) Critical damping

*Answer: (c) Logarithmic decrement.*

The logarithmic decrement is δ = ln(xₙ/xₙ₊₁), the natural log of the ratio of two successive amplitudes. It measures how fast free oscillations die out, and δ = 2πζ/√(1 − ζ²).

- **(a) Transmissibility:** the ratio of the force passed to the foundation to the applied force, in forced vibration.
- **(b) Damping coefficient:** the damping force per unit velocity (N·s/m). It is a property of the damper, not a rate of decay.
- **(d) Critical damping:** the damping at which oscillation just stops, c\_c = 2√(km).

**Quick check:** over n cycles, δ = (1/n) ln(x₀/xₙ). Counting cycles until the amplitude halves is a quick way to measure it.

**Q25. MPSC AMVI 2011 (Paper 3) · Topic 4.** When two pulleys of different diameters are connected by an open belt, the angle of contact taken into consideration is that of the: (a) larger pulley (b) smaller pulley (c) average of the two pulleys (d) None of the above

*Answer: (b) smaller pulley.*

The belt slips first where its grip is weakest. The tension ratio is T₁/T₂ = e^(μθ), and in an open belt the smaller pulley has the smaller angle of contact, 180° − 2α, so it decides the design.

- **(a) Larger pulley:** its angle of contact is 180° + 2α, so it grips better and does not slip first.
- **(c) Average:** the belt slips where the grip is weakest, not on average.
- **(d) None of these:** wrong, because (b) is correct.

**The trap:** strictly, the pulley with the smaller μθ decides. With both pulleys of the same material, that is the smaller pulley.

## Sources

Every question comes from a real paper. Of the 100 questions, 8 are from Kerala PSC, 13 from SSC JE and 79 from other exams: state JE and AE papers, PSU engineer and trainee papers, ESE, GATE, ISRO and DRDO. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's final answer keys. All the other questions come from Testbook solution pages, which name the paper each question appeared in. Every answer was checked by working the question out. None of the 100 questions appears in Levels 1 to 3. Question numbers below are the numbers in this guide.

A few questions were adjusted so they read cleanly here, without changing the data or the answer:

- **Kerala PSC questions:** the options are lettered (a) to (d) here. The booklets use (A) to (D).
- **Mock 1 Q11 and Mock 3 Q6:** the options are fractions printed on two lines. They are written on one line here, with brackets.
- **Mock 2 Q2** is worded a little more fully, so that it names the forcing frequency.
- **Mock 2 Q15:** the centrifugal forces of 1800 N and 100 N are as printed. They are far apart for a 5 cm change in radius, but the answer uses only their difference.
- **Mock 3 Q2:** the paper does not say what α is. The definition sin α = (r₁ + r₂)/x has been added.

Four answers follow the official key on a point where some textbooks differ: Mock 1 Q21, Mock 2 Q6, Mock 2 Q19 and Mock 3 Q6. Each explanation says what the other view is and why the key's answer is the one to mark.

**Kerala PSC papers**

- AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)

Question numbers in those papers:

- Mock 1: Q2 is 104/2025 Q66, Q5 is 104/2025 Q67.
- Mock 2: Q3 is 104/2025 Q75, Q9 is 104/2025 Q72.
- Mock 3: Q8 is 104/2025 Q85, Q11 is 68/2026 Q64.
- Mock 4: Q8 is 104/2025 Q87, Q9 is 104/2025 Q79.

**Mock 1, other papers**

- Q1 Gruebler's criterion: [Testbook](https://testbook.com/question-answer/the-grueblers-criterion-for-determining-the-degre--6a757ea0588d8f62924cc75e)
- Q3 spring-controlled governor: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-a-spring-controlled-gove--6946c9c61b57a5bf25377c91)
- Q4 crossed belt length: [Testbook](https://testbook.com/question-answer/the-length-of-the-belt-in-the-case-of-a-cross-belt--6a757ec466cfd695f52181d5)
- Q6 time for the rise: [Testbook](https://testbook.com/question-answer/a-cam-rotates-at-1200-rpm-if-the-follower-rises-i--6969e871e90ba5613bee5a43)
- Q7 single riveted butt joint: [Testbook](https://testbook.com/question-answer/what-is-the-efficiency-range-for-a-single-riveted--6946c767b4bedd969c3c192f)
- Q8 clutch torque: [Testbook](https://testbook.com/question-answer/a-single-plate-clutch-has-outer-and-inner-radii-50--6253d2e4ddc4af33745c8032)
- Q9 resistance to fatigue: [Testbook](https://testbook.com/question-answer/resistance-to-fatigue-of-a-material-is-measured-by--6204e181854bcf2392f3b3df)
- Q10 double crank: [Testbook](https://testbook.com/question-answer/abcd-is-a-four-link-mechanism-ab-100-mm-bc-1--6a6b37ada7a928fb8d894f29)
- Q11 Porter and Watt heights: [Testbook](https://testbook.com/question-answer/the-ratio-of-the-height-of-a-porter-governor-to-th--6a757f0e19ed657fe4dbc124)
- Q12 centre distance: [Testbook](https://testbook.com/question-answer/a-pair-of-spur-gear-consists-of-a-20-teeth-pinion--618cce624e64688d3ca541c1)
- Q13 Oldham's coupling: [Testbook](https://testbook.com/question-answer/oldhams-coupling-contains--6095258ad2b5b266eac46ec8)
- Q14 angle of contact: [Testbook](https://testbook.com/question-answer/if-the-distance-between-the-centers-of-two-pulleys--6055175d6b4e9f2ca78b8a17)
- Q15 natural frequency: [Testbook](https://testbook.com/question-answer/a-vibrating-system-consists-of-a-mass-of-200-kg-s--612332d0fbf864c4544eb3f5)
- Q16 follower types: [Testbook](https://testbook.com/question-answer/in-cam-and-follower-arrangement-which-one-of-the--6a757f1e348eaee5d68f2d72)
- Q17 bolt shear area: [Testbook](https://testbook.com/question-answer/net-shear-area-of-a-16-mm-bolt-at-the-thread-in-m--63d97aab92291dc5ef58a200)
- Q18 flywheel mass: [Testbook](https://testbook.com/question-answer/for-a-certain-engine-having-an-average-speed-of-12--5fcf2f1095768d4313f9877c)
- Q19 ball and socket joint: [Testbook](https://testbook.com/question-answer/ball-and-socket-joint-is-an-example-of--680ddb900c0ca2cc55c6b0bc)
- Q20 basic load rating: [Testbook](https://testbook.com/question-answer/in-the-context-of-ball-bearings-what-is-meant-by--6166d7f7164a82529bf42f0d)
- Q21 centrifugal tension: [Testbook](https://testbook.com/question-answer/the-centrifugal-tension-in-belts--5fad18f19a4952953ff33d69)
- Q22 notch sensitivity: [Testbook](https://testbook.com/question-answer/the-expression-for-notch-sensitivity-factor-q-in--612348d9b81b73e2ed5783c2)
- Q23 intersecting shafts: [Testbook](https://testbook.com/question-answer/the-two-non-parallel-intersecting-and-coplanar-sh--6a757f1966cfd695f5218aa2)
- Q24 secondary force: [Testbook](https://testbook.com/question-answer/secondary-unbalanced-force-due-to-inertia-of-recip--6a6b37d64f28f32f9a8a6588)
- Q25 Prony brake: [Testbook](https://testbook.com/question-answer/which-of-the-following-dynamometers-attempts-to-st--678370854a232281caef304e)

**Mock 2, other papers**

- Q1 axial brake: [Testbook](https://testbook.com/question-answer/which-of-the-following-brakes-applies-force-on-the--6946c781b4bedd969c3c1a08)
- Q2 resonance: [Testbook](https://testbook.com/question-answer/when-the-frequency-of-the-vibrating-system-becomes--6166c2d1af8a1ea59a036884)
- Q4 Goodman factor of safety: [Testbook](https://testbook.com/question-answer/a-machine-component-is-subjected-to-fluctuating-st--62c56aae94ab3ea8b421377d)
- Q5 creep: [Testbook](https://testbook.com/question-answer/the-creep-in-a-belt-drive-is-due-to-the--6a757bb81b8b76cb55963480)
- Q6 sliding contact bearings: [Testbook](https://testbook.com/question-answer/sliding-contact-bearings-are-also-known-as--6946c9a9f51c313e1ddaa8c2)
- Q7 8 links, 10 joints: [Testbook](https://testbook.com/question-answer/a-planar-mechanism-has-8-links-and-10-rotary-joint--6a72d93eadb1befb1872f727)
- Q8 isochronous governor: [Testbook](https://testbook.com/question-answer/in-governor-if-the-equilibrium-speed-is-constant-f--6a757ef9de58a9ca97556d92)
- Q10 cam pressure angle: [Testbook](https://testbook.com/question-answer/in-radial-cams-the-angle-between-the-direction-of--5fb6c9c1b08bc16b676fbe2d)
- Q11 two springs: [Testbook](https://testbook.com/question-answer/a-spring-mass-system-consists-of-a-mass-of-5-kg-an--63723391168517738f8a9bb5)
- Q12 slip and velocity ratio: [Testbook](https://testbook.com/question-answer/in-a-flat-belt-drive-the-slip-between-the-driver-a--6476e93a6d72c088dee2f53d)
- Q13 Woodruff key: [Testbook](https://testbook.com/question-answer/a-key-made-from-a-cylindrical-disc-having-segmenta--5a06892412e5d60daa01523c)
- Q14 base circles: [Testbook](https://testbook.com/question-answer/two-spur-gears-of-20%c2%b0-full-depth-involute-system--6a6b37af1b92f1cb0f182242)
- Q15 Hartnell spring stiffness: [Testbook](https://testbook.com/question-answer/in-a-hartnell-governor-the-mass-of-each-ball-is-4--6a6b37af566eb208a4d80f46)
- Q16 transmission angle: [Testbook](https://testbook.com/question-answer/the-transmission-angle-in-a-linkage-is-defined-as--63760eb064ca9244a27cf9b2)
- Q17 von Mises and Tresca: [Testbook](https://testbook.com/question-answer/von-mises-and-tresca-criteria-give-different-yield--615eb850e8cce32cc492ac96)
- Q18 friction radius: [Testbook](https://testbook.com/question-answer/in-case-of-single-plate-new-clutches-and-brakes-t--60eec78c2b573915fdb7a71a)
- Q19 automobile cam follower: [Testbook](https://testbook.com/question-answer/the-cam-follower-generally-used-in-automobile-engi--6a757b74cf4f6fcb56f093a6)
- Q20 bolt threads: [Testbook](https://testbook.com/question-answer/while-designing-a-typical-bolt-having-uniform-stre--69bd3850e668c144088d2e80)
- Q21 hammer blow and speed: [Testbook](https://testbook.com/question-answer/hammer-blow-in-reciprocating-engine-varies-with--5e7b1e87f60d5d29f99c657a)
- Q22 speed for maximum power: [Testbook](https://testbook.com/question-answer/considering-the-effect-of-centrifugal-tension-in-a--60d2d72280ef3e84c740cdc7)
- Q23 fluctuation of energy: [Testbook](https://testbook.com/question-answer/maximum-fluctuation-of-energy-is-the--6022971e7f58a1d5c10dc3fd)
- Q24 compound gear train: [Testbook](https://testbook.com/question-answer/in-a-compound-gear-train-there-is--61b7141426a8529a385a5430)
- Q25 hand pump: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-an-inversion-of-single-s--6a757c6aaf603ecb8416095f)

**Mock 3, other papers**

- Q1 equivalent twisting moment: [Testbook](https://testbook.com/question-answer/when-a-shaft-subjected-to-a-bending-moment-m-and--6a38cb48c85b1f7c6dfedeb9)
- Q2 crossed belt angle of contact: [Testbook](https://testbook.com/question-answer/the-correct-formula-for-the-angle-of-contact-t--6946c88ab57af4bb273f02e8)
- Q3 primary unbalanced force: [Testbook](https://testbook.com/question-answer/the-primary-unbalanced-force-in-reciprocating-mass--6a757f21f8f44f0eab953ae2)
- Q4 SHM acceleration: [Testbook](https://testbook.com/question-answer/for-a-cam-designed-with-shm-for-rise-maximum-acce--6a38cb33f4cfd9912b5aa2f6)
- Q5 transverse fillet weld: [Testbook](https://testbook.com/question-answer/tensile-strength-of-a-single-transverse-fillet-wel--617a2cdeb183ef3c31ae8c1c)
- Q6 sensitiveness: [Testbook](https://testbook.com/question-answer/the-expression-of-sensitiveness-of-a-governor-is--6a757efaa36047570bc8cbe6)
- Q7 inversion: [Testbook](https://testbook.com/question-answer/inversion-of-a-mechanism-is--6a72d92b8492a29266c3e5d0)
- Q9 V-belts: [Testbook](https://testbook.com/question-answer/v-belts-are-usually-used-for--645f4f89927ca84aca804efc)
- Q10 theory for ductile materials: [Testbook](https://testbook.com/question-answer/for-ductile-materials-the-most-appropriate-failure--5e54bfe2f60d5d11b34acf67)
- Q12 mass doubled, stiffness halved: [Testbook](https://testbook.com/question-answer/in-the-spring-mass-system-if-the-mass-of-the-syst--63235bac5d016155809d4b9f)
- Q13 clutch power: [Testbook](https://testbook.com/question-answer/a-single-plate-clutch-both-sides-effective-has-o--63c7bea35ce66ae05cfa93c9)
- Q14 connecting rod angular velocity: [Testbook](https://testbook.com/question-answer/in-a-slider-crank-mechanism-the-connecting-rod-ha--6a6b37d570cf7160d11f6a83)
- Q15 reverted gear train: [Testbook](https://testbook.com/question-answer/in-a-reverted-gear-train-two-gears-p-and-q-are-me--6a6b37a8c8539dbdb16d0594)
- Q16 effort of a governor: [Testbook](https://testbook.com/question-answer/the-effort-of-a-governor-is-the-force-exerted-by-t--6a757f288f402a7f4fa3db85)
- Q17 jockey pulley: [Testbook](https://testbook.com/question-answer/which-of-the-pulley-with-the-belt-drives-is-used-w--68b790c1cbe03a43192cbe40)
- Q18 logarithmic decrement: [Testbook](https://testbook.com/question-answer/in-a-vibrating-system-if-the-actual-damping-coeff--602a5f496b079183db5f25da)
- Q19 lift: [Testbook](https://testbook.com/question-answer/in-radial-cams-the-maximum-travel-of-the-follower--63c7b80d780d5cb6a0804663)
- Q20 least efficient riveted joint: [Testbook](https://testbook.com/question-answer/which-riveted-joint-is-having-minimum-efficiency--5fd74f94426b02279859bbe8)
- Q21 transmission dynamometer: [Testbook](https://testbook.com/question-answer/a-transmission-dynamometer-measures--5ff458b941350a6208de1e6e)
- Q22 maximum shear stress criterion: [Testbook](https://testbook.com/question-answer/according-to-the-maximum-shear-stress-failur--603f2a4aa60f56197aa07ca0)
- Q23 line contact: [Testbook](https://testbook.com/question-answer/when-two-elements-of-a-pair-are-in-line-contact-t--65a4f6f23e5874af820b8fa0)
- Q24 flywheel energy: [Testbook](https://testbook.com/question-answer/the-flywheel-of-machine-having-weight-of-4500-n-an--5ea01e02f60d5d7ffaca2a42)
- Q25 no axial thrust: [Testbook](https://testbook.com/question-answer/axial-thrust-is-not-there-in-which-of-the-followin--63c983f754120a44e7b812f2)

**Mock 4, other papers**

- Q1 shaft design theory: [Testbook](https://testbook.com/question-answer/a-transmission-shaft-subjected-to-bending-and-tors--680b68a64b798564a3cb993b)
- Q2 coaxial first and last wheels: [Testbook](https://testbook.com/question-answer/if-the-axes-of-the-first-and-last-wheels-of-a-comp--6a757f11a57291a4863c72e1)
- Q3 stable governor: [Testbook](https://testbook.com/question-answer/a-governor-is-considered-stable-when--6946cb5d84146734c4940759)
- Q4 largest transmission angle: [Testbook](https://testbook.com/question-answer/the-transmission-angle-is-maximum-when-the-crank-a--6a757d10e63c1a9d39b9b17e)
- Q5 specimen size: [Testbook](https://testbook.com/question-answer/if-the-size-of-a-standard-specimen-for-fatigue-tes--5820227be9f13104d67ea359)
- Q6 uniform wear constant: [Testbook](https://testbook.com/question-answer/for-a-single-plate-clutch-considering-uniform-wea--67836f2dbca6ba821223b381)
- Q7 SHM velocity: [Testbook](https://testbook.com/question-answer/in-a-cam-mechanism-when-the-follower-rises-with-s--6946cb5cfa9a38248aca797a)
- Q10 V-belt groove angle: [Testbook](https://testbook.com/question-answer/what-is-the-typical-groove-angle-of-a-pulley-used--6946c88bd23147c2e27eb927)
- Q11 force on the sleeve: [Testbook](https://testbook.com/question-answer/the-resultant-force-acting-on-the-sleeve-for-a-gov--6a6b37d76d0106083b53f4cb)
- Q12 circular pitch: [Testbook](https://testbook.com/question-answer/a-spur-gear-has-the-following-specificationno-o--606da51fd6940dfe45c1e18f)
- Q13 rigid link: [Testbook](https://testbook.com/question-answer/the-link-which-does-not-undergo-any-deformation-wh--6a757a88eed90c77893e53b9)
- Q14 rope brake power: [Testbook](https://testbook.com/question-answer/what-will-be-the-brake-power-bp-of-the-engine-if--657af143d5a544f39a967daa)
- Q15 hammer blow: [Testbook](https://testbook.com/question-answer/due-to-partial-balancing-of-the-reciprocating-part--6166c9e3371593afcd2d535e)
- Q16 larger module: [Testbook](https://testbook.com/question-answer/for-two-meshing-spur-gears-on-parallel-shafts-wha--679a51aa8b3c2f64ccef4c54)
- Q17 modified Goodman: [Testbook](https://testbook.com/question-answer/in-a-structural-member-under-fatigue-loading-the--5e0b50b8caaf4e71c804f3cc)
- Q18 belt power: [Testbook](https://testbook.com/question-answer/if-t1-and-t2-are-the-tensions-on-tight-and-slack-s--6a757ef8da61c091af4176f5)
- Q19 Coulomb friction in collars: [Testbook](https://testbook.com/question-answer/when-do-the-surfaces-in-touch-with-collar-bearings--6a194c7467d4adfe328ae6ad)
- Q20 velocity and acceleration methods: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-is-correct-regar--6a6b37ace1b1e0f9a0d92c7c)
- Q21 Porter sleeve rising: [Testbook](https://testbook.com/question-answer/when-the-sleeve-of-a-porter-governor-moves-upward--6a757e9c63df17526fbb1b47)
- Q22 welds under dynamic load: [Testbook](https://testbook.com/question-answer/for-dynamic-loads-which-of-the-following-welded-j--673d7d38480e53978c615081)
- Q23 what the cam pressure angle depends on: [Testbook](https://testbook.com/question-answer/the-pressure-angle-in-a-cam-depends-on--5e830e43f60d5d7277ffa810)
- Q24 rate of decay: [Testbook](https://testbook.com/question-answer/the-rate-of-decay-of-oscillations-is-known-as--680b689b0dd8105c9f43679c)
- Q25 which angle of contact: [Testbook](https://testbook.com/question-answer/when-the-two-pulleys-of-different-diameters-are-co--5f6d130cef58afb0d9537f61)
