# Theory of Machines and Design Level 3: Tricky Questions

Nov 18, 2026 · @Rohith

## How to use Level 3

Level 3 comes after the [Level 1 guide](../) and the [Level 2 theory](../level-2/). It has the same 11 topics in the same order, but only the parts examiners twist into traps. Finish a topic in Levels 1 and 2 first, then do it here.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Formulas worth adding | The formulas that Level 1 leaves out but harder papers use. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from GATE, ESE, ISRO, SSC JE, RRB JE and state AE and JE exams, Kerala PSC included. Each solution goes step by step and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam, the hardest objective paper here. GATE ME is the graduate entrance test for mechanical engineering. Both ask about the same mechanisms, gears, belts and design ideas as JE exams, with an extra twist. If you can solve these, JE questions on the same idea feel easy.

**Statement questions.** ESE often gives two statements and these four options. Check each statement on its own first. Only if both are true, ask whether Statement II is the reason for Statement I.

| Option | Meaning |
| --- | --- |
| (a) | Both true, and II explains I |
| (b) | Both true, but II does not explain I |
| (c) | I true, II false |
| (d) | I false, II true |

**Units used throughout.** Speeds are given as N in rpm; convert with ω = 2πN/60 before using any formula with ω. Work stresses in N and mm, so they come out in MPa (N/mm²). Wrap angles in belts and band brakes are in radians: 180° is π. Take g = 9.81 m/s² unless the question gives another value. Most wrong options in numericals are a slip between rpm and rad/s, degrees and radians, or kN and N.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam. On the website, a topic with three or more four-option questions also gets a timed Practise this topic card.

## 1. Links, pairs, mechanisms and degrees of freedom

The traps here come from three habits: thinking Grashof's law alone decides the mechanism, mixing up toggle and dead centre, and sorting inversions by name instead of by how many sliding pairs the chain has.

### Going deeper

| Idea | What it means |
| --- | --- |
| Grashof's law decides only if a link can turn fully | With s the shortest, l the longest and p, q the other two links, s + l ≤ p + q means at least one link can make full turns. Which mechanism you get then depends on which link is fixed. |
| The three Grashof inversions | Fix the shortest link: double crank. Fix a link next to the shortest: crank-rocker. Fix the link opposite the shortest: double rocker. |
| Non-Grashof chain | If s + l > p + q, no link can turn fully, whichever link is fixed. Every inversion is a double rocker (a triple rocker, or Grashof class II). |
| Change-point chain | If s + l = p + q, the links can all fall into one line. At that moment the motion can go either way, so a guide or a flywheel is needed. |
| Counting joints | A joint where k links meet counts as k − 1 joints. Three links on one pin count as two. |
| Higher pairs and redundant freedom | A cam or gear contact is a higher pair and takes away one freedom. A roller follower's free spin about its own pin adds a freedom that moves nothing else, so subtract it. |
| F = 0 and F < 0 | F = 0 is a structure: nothing can move. F < 0 is a statically indeterminate structure, often preloaded. |
| Toggle | The input link and the coupler fall in one straight line. The output link stops for an instant, so a small input torque holds a huge output load. Mechanical advantage is infinite. Stone crushers and toggle clamps use this. |
| Transmission angle | The angle between the coupler and the output link. At 90° the coupler pushes the output link at right angles, the best case. Near 0° or 180° the coupler pushes along the output link and cannot turn it, so the mechanical advantage falls to zero. Designers keep it between about 40° and 140°. |
| Inversions of the single slider crank | Chains with one sliding pair: the reciprocating engine, the Whitworth quick return, the crank and slotted lever quick return, the oscillating cylinder engine, the rotary (Gnome) engine and the hand pump. |
| Inversions of the double slider crank | Chains with two sliding pairs: the elliptical trammel, the Scotch yoke and Oldham's coupling. |
| Straight-line mechanisms | Exact: Peaucellier, Hart and Scott-Russell. Approximate: Watt, Grasshopper, Tchebicheff and Robert's. |
| Coriolis direction | Take the slider's velocity relative to the rotating link and turn it 90° in the direction the link rotates. That is the direction of 2ωv. If the slider reverses, so does the Coriolis component. |
| Kennedy's theorem | The three instantaneous centres of any three links lie on one straight line. Use it to find centres you cannot see directly. |

### Formulas worth adding

```math
F = 3(n-1) - 2j - h
```

Here n counts every link, the frame included, j counts lower pairs (a joint of k links counts as k − 1), and h counts higher pairs.

```math
s + l \le p + q \quad \text{(Grashof)}, \qquad N_{IC} = \frac{n(n-1)}{2}
```

```math
\text{MA} = \frac{T_{\text{out}}}{T_{\text{in}}} = \frac{\omega_{\text{in}}}{\omega_{\text{out}}}
```

This ignores friction. At toggle, ωout = 0, so MA is infinite.

```math
\cos\frac{\alpha}{2} = \frac{r}{c}, \qquad \frac{t_{\text{cutting}}}{t_{\text{return}}} = \frac{360^\circ - \alpha}{\alpha}
```

This is the crank and slotted lever quick return: r is the crank, c the distance between the fixed centres, and α the crank angle of the return stroke. With c = 2r, α = 120° and the ratio is 2.

```math
a_{\text{Coriolis}} = 2\omega v
```

### Doubts cleared

**Doubt: if a chain obeys Grashof's law, is it always a crank-rocker?** No. Grashof's law only says a full turn is possible somewhere. The same four links give a double crank, a crank-rocker or a double rocker depending on which one you fix.

**Doubt: are toggle and dead centre the same?** Many books use both words loosely, so read the question. In toggle, the input link and coupler are in line, the output stops and MA is infinite. When the coupler and the output link are in line (transmission angle 0°), the input cannot turn the output at all and MA is zero.

**Doubt: why is the Whitworth quick return not a double slider crank, when it has a slider?** It has one sliding pair, not two. It comes from the slider crank chain with the crank fixed. Count sliding pairs, not sliders in the picture.

**Doubt: is there a Coriolis component when a slider moves along a link that is not rotating?** No. Both are needed: the link must rotate (ω ≠ 0) and the slider must move along it (v ≠ 0). A block sliding on a fixed guide has none.

**Doubt: does a roller follower make the cam mechanism a two-freedom mechanism?** Gruebler's count gives 2, but the roller's spin moves nothing else. It is a redundant freedom, so the useful answer is 1.

### Tricky past questions with solutions

**Q1. UPPSC AE Mechanical 2022 (Paper I, 29 May 2022).** A planar closed kinematic chain is formed with four rigid links PQ = 2 m, QR = 3 m, RS = 2.5 m and SP = 2.7 m. The link to be fixed for obtaining a double rocker mechanism is: (a) PQ (b) SP (c) QR (d) RS

*Answer: (d) RS.*

1. Shortest s = PQ = 2 m and longest l = QR = 3 m, so s + l = 5 m.
2. The other two: p + q = 2.5 + 2.7 = 5.2 m. Since 5 < 5.2, the chain obeys Grashof's law.
3. For a double rocker in a Grashof chain, fix the link opposite the shortest. PQ joins QR and SP, so the opposite link is RS.

**The trap:** Fixing PQ itself gives a double crank, and fixing QR or SP (next to PQ) gives a crank-rocker. Many students remember that double rockers come from non-Grashof chains and give up, but a Grashof chain gives one too when the link opposite the shortest is fixed.

**Q2. JSSC JE Re-Exam 2022 (Paper I, 3 November 2022).** The approximate value of mechanical advantage for a 4-bar link, if placed in toggle position, is: (a) 0 (b) 1.0 (c) 0.5 (d) infinite

*Answer: (d) infinite.*

1. Without friction, MA = ωin ÷ ωout.
2. In toggle, the input link and the coupler are in one line. The output link stops for an instant, so ωout = 0.
3. MA = ωin ÷ 0, which is infinite. This is why a toggle clamp holds so hard.

**The trap:** 0 is the value when the transmission angle is 0°, with the coupler in line with the output link. That position is also called a dead centre, so students who mix the two words pick (a).

**Q3. Kerala PSC AE (Mechanical) 104/2025, Q64.** Which of the following is an inversion of the double slider crank chain? (i) Whitworth quick return mechanism (ii) Elliptical trammel (iii) Scotch yoke (iv) Rotary engine. (a) Only (i) and (ii) (b) Only (ii) and (iii) (c) Only (iii) and (iv) (d) Only (i), (ii) and (iii)

*Answer: (b) Only (ii) and (iii).*

1. The double slider crank chain has two sliding pairs. Its three inversions are the elliptical trammel, the Scotch yoke and Oldham's coupling.
2. The Whitworth quick return and the rotary engine each have one sliding pair. They are inversions of the single slider crank chain.
3. So only (ii) and (iii) belong.

**The trap:** The Whitworth quick return has a slotted link and the rotary engine has cylinders, so both look like they have two sliders. Count the sliding pairs in the chain, not the sliding parts in the picture.

**Q4. Kerala PSC AE (Mechanical) 104/2025, Q65.** The sense of the Coriolis component 2ωV is the same as that of the relative velocity vector V rotated through: (a) 90° in the direction of rotation of the link containing the path (b) 45° in the direction of rotation of the link containing the path (c) 45° in the direction opposite to the rotation of the link containing the path (d) 180° in the direction of rotation of the link containing the path

*Answer: (a).*

1. The Coriolis component is always at right angles to the slider's velocity relative to the link. That rules out 45° and 180°.
2. Its sense comes from turning the relative velocity 90° the same way the link rotates. A link turning clockwise with the slider moving outward gives a Coriolis component pointing clockwise from the outward direction.

**The trap:** 180° reverses the vector and lies along the path, which would make it a change in sliding speed, not Coriolis. If either ω or v reverses, the Coriolis component reverses too, so recheck the direction after every sign change.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical) 050/2023, Q65.** Match the following. List P: (i) worm gear drive (ii) Oldham's coupling (iii) Peaucellier mechanism. List Q: (i) shafts intersecting at an angle (ii) approximate straight-line mechanism (iii) large speed reduction (iv) co-axial shafts with a small misalignment (v) exact straight-line mechanism. (a) Pi–Qiii, Pii–Qiv, Piii–Qii (b) Pi–Qiii, Pii–Qiv, Piii–Qv (c) Pi–Qiii, Pii–Qi, Piii–Qii (d) Pi–Qiii, Pii–Qi, Piii–Qv

*Answer: (b).*

1. A worm and worm wheel give a large speed reduction in one step, often 20 to 1 or more, so Pi–Qiii.
2. Oldham's coupling joins shafts whose axes are parallel but slightly offset, so Pii–Qiv. Shafts at an angle need a Hooke's joint.
3. Peaucellier's mechanism traces an exact straight line, so Piii–Qv.

**The trap:** Every option gets the worm right, so the marks depend on two facts. Oldham's coupling is for offset parallel shafts, not intersecting ones. Peaucellier's line is exact, unlike Watt's, which is approximate.

## 2. Cams and followers

Cam traps sit in the motion laws and the cam's circles. Students mix up average and peak follower speed, forget that a flat face needs a convex cam, and treat the base circle and prime circle as one.

### Going deeper

| Idea | What it means |
| --- | --- |
| Pressure angle | The angle between the normal at the contact point and the direction the follower moves. The bigger it is, the more the cam pushes the follower sideways into its guide. A translating roller follower is usually kept under 30°. |
| Flat-faced follower | With the face at right angles to the follower's path, the contact normal always lies along the path, so the pressure angle is zero. The price: the cam profile must be convex everywhere. |
| Lowering the pressure angle | Use a bigger base circle, spread the rise over a larger cam angle, or offset the follower. An offset helps on the rise but makes the return worse. |
| Undercutting | With a roller follower, if the pitch curve bends more sharply than the roller's radius, the cam profile folds over itself and the follower cannot track it. With a flat face, the profile must keep a positive radius of curvature. |
| Uniform velocity | The follower's speed jumps from zero at the start, so the acceleration is infinite for an instant. Only usable at very low speed, or with the ends rounded off. |
| SHM | Finite acceleration, but the acceleration jumps at the start and end of the rise, so the jerk is infinite there. |
| Uniform acceleration and retardation | The smallest peak acceleration for a given rise and cam angle. The acceleration still jumps where it changes sign. |
| Cycloidal | Acceleration is zero at both ends, so nothing jumps and the jerk stays finite. This is the motion for high-speed cams. |
| Eccentric circular cam | A circle mounted off centre by e, with a flat-faced follower, gives exact SHM with a stroke of 2e. |
| The cam's circles | Base circle: the smallest circle touching the cam profile. Prime circle: the smallest circle touching the pitch curve (base circle radius plus roller radius for a roller follower). Pitch point: where the pressure angle is largest. Pitch circle: through the pitch point, concentric with the base circle. |
| Pitch curve | The path of the follower's trace point if the cam is held still and the follower is walked round it. |
| Jump | At high speed, during the slowing part of the rise the spring may not pull the follower back fast enough, and it leaves the cam. A stiffer spring or a positive-drive cam cures it. |

### Formulas worth adding

For a rise h over a cam angle θo (in radians), with the cam turning at ω:

```math
\text{SHM:}\quad v_{\max} = \frac{\pi h \omega}{2\theta_o}, \qquad a_{\max} = \frac{\pi^2 h \omega^2}{2\theta_o^2}
```

```math
\text{Uniform acceleration:}\quad v_{\max} = \frac{2h\omega}{\theta_o}, \qquad a = \frac{4h\omega^2}{\theta_o^2}
```

```math
\text{Cycloidal:}\quad v_{\max} = \frac{2h\omega}{\theta_o}, \qquad a_{\max} = \frac{2\pi h\omega^2}{\theta_o^2}
```

```math
\rho = r_b + y + \frac{d^2 y}{d\theta^2} \quad \text{(flat-faced follower)}
```

This is the radius of curvature of the cam profile at the contact point. It must stay positive, and above any minimum set by contact stress.

```math
y = e(1 - \cos\theta) \quad \text{(eccentric circular cam, flat face)}
```

### Doubts cleared

**Doubt: why is cycloidal motion preferred at high speed when its peak acceleration is higher than uniform acceleration's?** Because its acceleration starts and ends at zero. A sudden jump in acceleration is a sudden jump in force, which hammers the parts and starts vibration. A slightly higher but smooth peak is the better deal.

**Doubt: are the base circle and the prime circle the same?** Only for a knife-edge follower. With a roller, the prime circle is larger by the roller's radius, because it is drawn round the roller's centre, not its rim.

**Doubt: if a flat-faced follower has zero pressure angle, why not use it everywhere?** The cam must be convex everywhere and the face must be wide enough to reach every contact point. It also rubs instead of rolling, so friction and wear are higher than with a roller.

**Doubt: is the average speed of the follower the same as its maximum speed?** No. With uniform acceleration and retardation, the follower starts and ends at rest, so the peak speed is twice the average.

### Tricky past questions with solutions

**Q1. VIZAG MT Mechanical 2013 (re-exam).** In a cam-follower mechanism, the follower needs to rise through 20 mm during 60° of cam rotation, the first 30° with a constant acceleration and then with a deceleration of the same magnitude. The initial and final speeds of the follower are zero. The cam rotates at a uniform speed of 300 rpm. The maximum speed of the follower is: (a) 0.60 m/s (b) 1.20 m/s (c) 1.68 m/s (d) 2.40 m/s

*Answer: (b) 1.20 m/s.*

1. ω = 2π × 300 ÷ 60 = 31.42 rad/s, and θo = 60° = π/3 rad.
2. Time for the rise: (π/3) ÷ 31.42 = 0.0333 s.
3. With uniform acceleration from rest and back to rest, the peak speed is twice the average: v\_max = 2hω ÷ θo = 2 × 0.020 × 31.42 ÷ 1.047 = 1.20 m/s.

**The trap:** 0.60 m/s is the average speed, 20 mm ÷ 0.0333 s. It is the most common wrong answer, because the follower is moving at that speed only twice during the rise. 2.40 m/s doubles once too often.

**Q2. GATE ME 2019 (Shift 1).** A flat-faced follower is driven by a circular eccentric cam rotating at a constant angular velocity ω. The cam's eccentricity is e. At time t = 0 the cam's centre lies directly below the axis of rotation, so the follower is at its lowest point, and y is measured upward from there: y(0) = 0. The vertical position of the follower face, y(t), is: (a) e sin ωt (b) e(1 + cos 2ωt) (c) e(1 − cos ωt) (d) e sin 2ωt

*Answer: (c) e(1 − cos ωt).*

1. The follower face always touches the circle at its top. So the face is at the height of the circle's centre plus its radius.
2. After the cam turns through θ = ωt, the centre has risen from −e to −e cos θ, relative to the axis.
3. Measured from the lowest position: y = e − e cos ωt = e(1 − cos ωt). It rises to 2e at ωt = π.

**The trap:** (a) also gives y(0) = 0, but it would make the follower go below its lowest point. (b) and (d) use 2ωt, which would give two strokes for every turn of the cam. Check the stroke too: an eccentric cam's stroke is 2e.

**Q3. GATE ME 2020 (Shift 1).** A cam with a translating flat-face follower is to give the follower motion y(θ) = 4(2πθ − θ²) mm, for 0 ≤ θ ≤ 2π. Contact stress considerations require the radius of curvature of the cam profile to be at least 40 mm everywhere. The minimum permissible base circle radius is \_\_\_\_\_\_ mm (numerical answer, one decimal place).

*Answer: 48.0 mm (accepted range 47.9 to 48.1).*

1. For a flat-faced follower, ρ = rb + y + y″.
2. y″ = d²y/dθ² = −8 mm, the same everywhere.
3. ρ is smallest where y is smallest, which is y = 0 at θ = 0 and θ = 2π. There ρ = rb − 8.
4. rb − 8 ≥ 40, so rb ≥ 48 mm.

**The trap:** Leaving out y″ gives 40 mm. Checking at the peak of the rise, where y = 4π² = 39.5 mm, gives only 8.5 mm, because the worst point is where the follower is lowest, not highest.

**Q4. ESE Mechanical 2022.** Consider the following statements regarding cams: 1. Base circle is the smallest circle tangent to the cam profile drawn from the centre of rotation of a radial cam. 2. Pitch curve is the curve drawn by the trace point assuming that the cam is fixed and the trace point of the follower rotates around the cam. 3. Pitch circle is the circle passing through the pitch point and concentric with the base circle. 4. The smallest circle drawn tangent to the pitch curve is known as the prime circle. Which of the above statements are correct? (a) 1 and 3 only (b) 2 and 4 only (c) 2 and 3 only (d) 1, 2, 3 and 4

*Answer: (d) 1, 2, 3 and 4.*

1. Statement 1 is the definition of the base circle. True.
2. Statement 2 is how the pitch curve is drawn: hold the cam still and walk the follower round it. True.
3. Statement 3 is the definition of the pitch circle. True.
4. Statement 4: the prime circle touches the pitch curve, while the base circle touches the cam profile. True.

**The trap:** Statement 4 sounds like the base circle, so many cross it out and pick (a). The two circles differ by exactly the roller's radius: the base circle touches the cam, and the prime circle touches the path of the roller's centre.

## 3. Gears and gear trains

Gear traps come from three slips: dividing the path of contact by the circular pitch, using simple-train ratios in an epicyclic train, and thinking interference is a cycloidal problem. Involute gears are the ones that suffer it.

### Going deeper

| Idea | What it means |
| --- | --- |
| Law of gearing | For a constant speed ratio, the common normal at every point of contact must pass through the pitch point. Involute and cycloidal profiles both obey it. |
| Involute and centre distance | The speed ratio of involute gears is set by their base circles, which do not change. Pull the gears slightly apart and only the pressure angle and backlash change. Cycloidal gears need the exact centre distance. |
| Why involutes are easy to make | The involute rack has straight-sided teeth, so one simple cutter makes every gear of that module and pressure angle. |
| Interference | Inside the base circle there is no involute. If the tip of one tooth reaches inside the other gear's base circle, it digs into the flank. This is a problem of involute gears with few teeth on the pinion. |
| Curing interference | A bigger pressure angle, more teeth on the pinion, stub teeth (shorter addendum), undercutting the flank, or a profile shift on the pinion. |
| Minimum teeth against a rack | 32 for 14.5° full depth, 18 for 20° full depth (17.1 rounded up), 14 for 20° stub and 12 for 25°. Meshing with a gear instead of a rack allows a few fewer. |
| Contact ratio | How many pairs of teeth share the load on average: arc of contact ÷ circular pitch, or path of contact ÷ base pitch. It must be above 1 or the drive loses contact between teeth; 1.4 to 1.8 is usual. |
| Path and arc | The path of contact is measured along the line of action. The arc of contact is measured on the pitch circle and equals the path ÷ cos φ. Never divide the path by the circular pitch. |
| Epicyclic method | Fix the arm and turn one gear by x; find every other gear's turns from the tooth ratios; then add the arm's turns y to everything. Two conditions (a fixed gear, a known input) give x and y. |
| Epicyclic geometry | With sun, planets and an internal ring all on one axis: ring teeth = sun teeth + 2 × planet teeth. Questions often hide one tooth count behind this. |
| Helical gears | Teeth at a helix angle ψ engage gradually, so they run quietly but push the shaft sideways (axial thrust). Double helical (herringbone) gears cancel the thrust. |
| Crossed shafts | Spiral (crossed helical) gears and worms join shafts that neither meet nor run parallel. Hypoid gears are bevel gears whose axes are offset. |
| Worm self-locking | If the worm's lead angle is less than the friction angle, the wheel cannot drive the worm. Such a drive is less than 50% efficient. |

### Formulas worth adding

```math
t_{\min} = \frac{2a_w}{\sin^2\phi} \quad \text{(pinion against a rack, addendum } a_w \text{ modules)}
```

```math
\text{Contact ratio} = \frac{\text{path of contact}}{p_c \cos\phi} = \frac{\text{arc of contact}}{p_c}, \qquad p_c = \pi m
```

```math
\text{Path of contact} = \sqrt{R_A^2 - R^2\cos^2\phi} + \sqrt{r_A^2 - r^2\cos^2\phi} - (R + r)\sin\phi
```

R and r are the pitch circle radii of the gear and pinion, and RA and rA their addendum circle radii.

```math
\frac{N_S - N_A}{N_R - N_A} = -\frac{T_R}{T_S}, \qquad T_R = T_S + 2T_P
```

With the ring fixed (NR = 0), this gives the arm speed NA = NS × TS ÷ (TS + TR).

```math
T_v = \frac{T}{\cos^3\psi} \quad \text{(virtual number of teeth of a helical gear)}
```

### Doubts cleared

**Doubt: if involute gears are better, why does interference only come up with them?** Cycloidal teeth have a curved flank all the way down, so a tip always meets a working profile. An involute starts at the base circle, so a long tip on a small pinion can reach the part with no involute. Cycloidal gears avoid interference but need an exact centre distance.

**Doubt: why not just use a large pressure angle to stop interference?** It works, but it tilts the tooth force. More of the force pushes the gears apart, which loads the bearings, and the contact ratio drops.

**Doubt: why can't I use the tooth ratio directly in an epicyclic train?** Because the planet's axle is carried round by the arm. Tooth ratios hold only for motion relative to the arm. That is why the method first fixes the arm, then adds its turns back to every gear.

**Doubt: what does a contact ratio of 2 mean?** On average two pairs of teeth are in mesh. Some of the time it is exactly two, and the load is shared.

### Tricky past questions with solutions

**Q1. VIZAG MT Mechanical 2013.** The minimum number of teeth on the pinion to operate without interference in a standard full-height involute teeth gear mechanism with 20° pressure angle is: (a) 14 (b) 12 (c) 18 (d) 32

*Answer: (c) 18.*

1. Against a rack with an addendum of 1 module: t\_min = 2 ÷ sin² 20° = 2 ÷ 0.117 = 17.1.
2. Teeth come in whole numbers, and 17 would interfere, so the answer is 18.

**The trap:** Every wrong option is a real minimum for a different system. 14 is for 20° stub teeth, 32 for 14.5° full depth and 12 for 25°. Read both the pressure angle and the tooth form.

**Q2. Kerala PSC Deputy Engineer / AE (Mechanical) 050/2023, Q64.** Which of the following statements are true? (i) Interference occurs in involute gears. (ii) Involute profile gears are easy to manufacture. (iii) With involute tooth form, centre distance errors do not affect the velocity ratio. (a) i and ii only (b) ii and iii only (c) i and iii only (d) i, ii and iii

*Answer: (d) i, ii and iii.*

1. (i) True. The involute stops at the base circle, so interference is an involute problem.
2. (ii) True. One straight-sided rack cutter makes every involute gear of that module and pressure angle.
3. (iii) True. The speed ratio depends on the base circles, which a small change in centre distance does not touch.

**The trap:** Students who learn interference as a fault drop (i), thinking a good profile cannot have a fault. Interference is the main drawback of involute gears and is listed alongside their advantages.

**Q3. APPSC Lecturer (Polytechnic Colleges) March 2020.** A spur gear has a module of 3.5 mm, a length of path of contact of 11√3 mm and a pressure angle of 30°. The contact ratio of the gear will be: (a) 1.7 (b) 3.0 (c) 2.0 (d) 1.0

*Answer: (c) 2.0.*

1. Path of contact: 11√3 = 19.05 mm.
2. Arc of contact = path ÷ cos φ = 19.05 ÷ 0.866 = 22 mm.
3. Circular pitch = πm = π × 3.5 = 11 mm.
4. Contact ratio = 22 ÷ 11 = 2.0.

**The trap:** Dividing the path of contact straight by the circular pitch gives 19.05 ÷ 11 = 1.73, option (a). The path must be divided by the base pitch (pc cos φ), or turned into the arc first.

**Q4. GATE ME 2009.** An epicyclic gear train has a sun gear (gear 2) with 20 teeth on the input shaft, planet gears (gear 3) with 40 teeth, and an internal ring gear (gear 5) with 100 teeth. The ring gear is fixed. The arm (link 4) is attached to the output shaft. If the sun gear turns at 60 rpm counter-clockwise, the speed and direction of the arm are: (a) 10 rpm counter-clockwise (b) 10 rpm clockwise (c) 12 rpm clockwise (d) 12 rpm counter-clockwise

*Answer: (a) 10 rpm counter-clockwise.*

1. Fix the arm and turn the sun by +x. The ring then turns −x × 20/100 = −x/5.
2. Add the arm's turns y to every gear: sun = x + y = 60, and ring = −x/5 + y = 0.
3. From the ring: y = x/5. Then x + x/5 = 60, so x = 50 and y = 10 rpm.
4. y is positive, so the arm turns the same way as the sun: counter-clockwise.

**The trap:** 12 rpm is 60 ÷ 5, the simple-train ratio of ring to sun. It ignores that the sun's turns are partly the arm's own turns. With the ring fixed, the arm turns in the same direction as the sun, so both clockwise options are wrong.

**Q5. GATE ME 2020 (Shift 2).** In an epicyclic gear train, the sun S and planet P have the same number of teeth. The planet's axle is on the arm AB, and the planet also meshes with an internal ring R. If S and R rotate in the same direction at speeds ωS and ωR, the angular speed of the arm AB is: (a) (3/4)ωR + (1/4)ωS (b) (1/4)ωR + (3/4)ωS (c) (1/2)ωR − (1/2)ωS (d) (3/4)ωR − (1/4)ωS

*Answer: (a) (3/4)ωR + (1/4)ωS.*

1. Ring teeth = sun + 2 × planet = 3 × planet teeth, since the sun and planet are equal.
2. Fix the arm and turn the sun by x: the planet turns −x and the ring turns −x/3.
3. Add the arm speed y: x + y = ωS and −x/3 + y = ωR.
4. Subtract: (4/3)x = ωS − ωR, so x = (3/4)(ωS − ωR).
5. y = ωS − x = (1/4)ωS + (3/4)ωR.

**The trap:** (b) swaps the weights. A quick check catches it: if the ring is held still (ωR = 0), the arm turns at TS ÷ (TS + TR) = 1/4 of the sun's speed, as in Q4, and only (a) gives (1/4)ωS. The other check: if ωS = ωR, the whole train turns as one block, and the arm must have that same speed. Only (a) and (b) pass it.

## 4. Belts, ropes and chains

Belt traps sit in the units of the belt's mass, in what a V-belt does better and worse than a flat belt, and in names like creep, slip and pull factor that sound alike.

### Going deeper

| Idea | What it means |
| --- | --- |
| Slip | The whole belt slides on the pulley because friction is not enough. It can be cured with more tension or more wrap. |
| Creep | The belt stretches more on the tight side than on the slack side. As it passes round a pulley it shrinks or stretches, so it creeps relative to the rim. It always exists, costs about 1 to 2% of the speed, and cannot be cured. |
| Which pulley decides | The belt slips first on the pulley with the smaller μθ. In an open drive this is usually the smaller pulley, with the smaller wrap. In a crossed drive both wraps are equal. |
| Crossed belt length | The length depends only on the sum of the radii. Stepped cone pulleys for a crossed belt keep that sum the same on every step, and one belt fits them all. |
| Centrifugal tension | Tc = mv² adds equally to both sides of the belt. It does not change T1 − T2, but the belt can bear only a fixed maximum T, so at high speed less is left for driving. |
| Maximum power | Power peaks when Tc = T/3, that is at v = √(T/3m). Faster than that, centrifugal tension eats the gain from speed. |
| Mass per metre | m = density × width × thickness, all in metres. A belt 100 mm by 5 mm of density 1000 kg/m³ has m = 0.5 kg/m. Most wrong answers here are a units slip. |
| V-belt wedge action | The belt wedges into the groove, so the normal force on the sides is larger than the belt's pull. The effective friction coefficient becomes μ ÷ sin(β/2). |
| Groove angle | The groove (32° to 38°) is narrower than the belt section (40°), so the belt wedges in and does not touch the bottom. |
| V-belt drawbacks | They are less efficient than flat belts (wedging in and out, bending a thick section), come only in standard endless lengths, and suit short centre distances. |
| Where V-belts sit | At the high-speed end of a drive, next to the motor. There the torque, and so the belt pull, is smaller for the same power. Chains or gears take the slow, high-torque end. |
| Pull factor | (T1 − T2) ÷ (T1 + T2), the driving force over twice the initial tension. It shows how hard the belt is working. |
| Chordal action | A chain wraps a sprocket as a polygon, not a circle, so its speed rises and falls once per tooth. More teeth on the small sprocket reduce it. |

### Formulas worth adding

```math
\frac{T_1 - T_c}{T_2 - T_c} = e^{\mu\theta} \ \text{(flat)}, \qquad \frac{T_1 - T_c}{T_2 - T_c} = e^{\mu\theta\,\csc(\beta/2)} \ \text{(V-belt, groove angle } \beta)
```

Here T1 and T2 include the centrifugal tension. Without centrifugal tension, drop the Tc terms.

```math
T_c = mv^2, \qquad P = (T_1 - T_2)\,v, \qquad v_{P\max} = \sqrt{\frac{T}{3m}}
```

```math
L_{\text{open}} = \pi(r_1 + r_2) + 2x + \frac{(r_1 - r_2)^2}{x}, \qquad L_{\text{crossed}} = \pi(r_1 + r_2) + 2x + \frac{(r_1 + r_2)^2}{x}
```

```math
\theta_{\text{open, small}} = \pi - 2\sin^{-1}\frac{r_1 - r_2}{x}, \qquad \theta_{\text{crossed}} = \pi + 2\sin^{-1}\frac{r_1 + r_2}{x}
```

```math
\frac{N_2}{N_1} = \frac{d_1 + t}{d_2 + t}\left(1 - \frac{s}{100}\right)
```

This is the speed ratio with belt thickness t and a total slip of s percent.

### Doubts cleared

**Doubt: if a V-belt grips better, why is it less efficient?** Grip and efficiency are different things. Each part of the belt wedges into the groove and is pulled out again, and the thick section bends round the pulley. Both waste energy as heat.

**Doubt: does centrifugal tension reduce the power for given tensions?** For given T1 and T2, no: it adds to both. It matters because the belt has a maximum safe tension. The faster the belt runs, the more of that maximum goes on Tc and the less is left for T1 − T2.

**Doubt: can creep be removed with a tighter belt?** No. Creep comes from the difference in stretch between the tight and slack sides, and any belt that transmits power has that difference. Slip is what a tighter belt cures.

**Doubt: why are the stepped pulleys for a crossed belt easy to design?** Because a crossed belt's length depends only on r1 + r2. Keep that sum the same on each step and the same belt fits every step.

### Tricky past questions with solutions

**Q1. SSC JE Mechanical, 22 January 2018 (Morning).** A pulley is driven by a flat belt, and the maximum tension produced in the belt is 1400 N. The belt has a density of 1000 kg/m³, and is 100 mm wide and 5 mm thick. What is the speed (m/s) of the belt for maximum power? (a) 32 (b) 31 (c) 30.55 (d) 3.05

*Answer: (c) 30.55.*

1. Mass per metre: m = 1000 × 0.1 × 0.005 = 0.5 kg/m.
2. Maximum power needs Tc = T/3, so mv² = T/3.
3. v = √(1400 ÷ (3 × 0.5)) = √933.3 = 30.55 m/s.

**The trap:** 3.05 m/s comes from a mass 100 times too large, a slip in converting mm² to m². Using v = √(T/m) without the 3 gives 52.9 m/s. The close options 31 and 32 are there to catch rounding guesses.

**Q2. ESE Mechanical 2014 (Paper II).** Which of the following statements are correct regarding power transmission through V-belts? 1. V-belts are used at the high-speed end. 2. V-belts are used at the low-speed end. 3. V-belts are of standard lengths. 4. V-angles of pulleys and belts are standardized. (a) 1 and 3 only (b) 2 and 4 only (c) 2, 3 and 4 (d) 1, 3 and 4

*Answer: (d) 1, 3 and 4.*

1. Statement 1 is true and 2 is false. For the same power, torque and belt pull are smaller at high speed, so V-belts sit next to the motor. Chains or gears take the slow, high-torque end.
2. Statement 3 is true. V-belts are made endless in standard lengths and cannot be cut and joined like a flat belt.
3. Statement 4 is true. The belt section angle and groove angles are fixed by standards.

**The trap:** V-belts are known for carrying more power, so students put them where the load is biggest, the slow end. Power is torque times speed, and a belt prefers low torque.

**Q3. ESE Mechanical 2017 (Paper I).** Consider the following statements regarding V-belt drives: 1. The groove angle of the sheave is less than the belt section angle. 2. The efficiency of a V-belt drive is higher than that of a flat belt drive. 3. The groove angle is so made that the belt gets wedged in the groove. Which of the above statements are correct? (a) 1, 2 and 3 (b) 1 and 2 only (c) 1 and 3 only (d) 2 and 3 only

*Answer: (c) 1 and 3 only.*

1. Statement 1 is true: grooves are 32° to 38°, the belt section is 40°.
2. Statement 3 is true, and it is the reason for statement 1: a narrower groove makes the belt wedge in.
3. Statement 2 is false. Wedging in and out and bending the thick section waste energy, so a V-belt is less efficient than a flat belt.

**The trap:** Better grip feels like better efficiency, so (a) is the popular wrong answer. The wedging that gives the grip is also what wastes energy.

**Q4. Kerala PSC AE (Mechanical, Ports) 065/2026, Q78.** In a belt drive, the ratio of the tangential force to twice the initial tension is called the: (a) slip factor (b) transmission efficiency (c) pull factor (d) service factor

*Answer: (c) pull factor.*

1. The tangential force is T1 − T2, and twice the initial tension is T1 + T2 (ignoring centrifugal tension).
2. (T1 − T2) ÷ (T1 + T2) is called the pull factor or capacity factor. It shows how much of the belt's tension goes into driving.

**The trap:** A service factor also appears in belt design, but it multiplies the rated power to allow for shocks and long running hours. Slip is a percentage loss of speed, not a ratio of forces.

## 5. Brakes, clutches and dynamometers

These traps come from picking the wrong clutch theory, reading diameters as radii, giving the slack-side tension as the answer, and confusing a brake that helps itself with one that locks itself.

### Going deeper

| Idea | What it means |
| --- | --- |
| Uniform pressure | A new clutch whose plates touch evenly. Pressure is the same everywhere, so the outer part, which wears faster, carries more of the torque. |
| Uniform wear | A worn-in clutch. Wear is proportional to pressure × rubbing speed, so p × r is constant and the pressure is highest at the inner radius. |
| Which theory to design with | Uniform wear gives less torque for the same axial force, so it is the safe choice for design. Use uniform pressure only when the question says so. |
| Mean friction radius | Uniform wear: the plain average (ro + ri) ÷ 2. Uniform pressure: a little larger, (2/3)(ro³ − ri³) ÷ (ro² − ri²). |
| Pairs of surfaces | A single plate gripped on both faces has 2 pairs. A multi-plate clutch with n1 plates on one shaft and n2 on the other has n1 + n2 − 1 pairs. |
| Where the clutch goes | On the high-speed side. For the same power, torque is smaller there, so the clutch can be smaller. |
| Cone clutch | The cone wedges the surfaces together: the normal force is the axial force ÷ sin α. Too small a semi-cone angle α makes it jam. About 12.5° is usual. |
| Self-energizing brake | The friction force's moment about the pivot helps the applied force, so less effort is needed. Good in vehicles. |
| Self-locking brake | The friction moment alone is enough to apply the brake: the effort needed is zero or negative. Fine as a backstop, bad on a vehicle, which could not be released. |
| Band brake direction | Which end of the band becomes the tight side depends on the drum's direction. Joining the lever to the slack side gives the smaller effort. |
| Band width | The band's width and thickness are for checking stress, σ = T1 ÷ (w × t). They do not enter the tension calculation. |
| Absorption dynamometers | The Prony brake, rope brake and hydraulic dynamometer turn the measured power into heat. |
| Transmission dynamometers | The epicyclic train, belt transmission (Froude–Thornycroft) and torsion dynamometers pass the power on and measure it on the way. |

### Formulas worth adding

```math
\text{Uniform pressure: } W = p\pi(r_o^2 - r_i^2), \quad T = \frac{2}{3}\mu W \frac{r_o^3 - r_i^3}{r_o^2 - r_i^2} = \frac{2}{3}\pi\mu p\,(r_o^3 - r_i^3)
```

```math
\text{Uniform wear: } W = 2\pi p_{\max} r_i (r_o - r_i), \quad T = \mu W \frac{r_o + r_i}{2}
```

Both are for one pair of surfaces. Multiply by the number of pairs.

```math
T_{\text{cone}} = \frac{\mu W R_m}{\sin\alpha}
```

```math
\frac{T_1}{T_2} = e^{\mu\theta}, \qquad T_B = (T_1 - T_2)\,r
```

```math
P_{\text{rope brake}} = \frac{(W - S)\,\pi(D + d)\,N}{60}
```

W is the dead load, S the spring balance reading, D the drum diameter and d the rope diameter.

### Doubts cleared

**Doubt: a new clutch has uniform pressure, so why design with uniform wear?** A clutch is new for only a short time. After running in, it settles to uniform wear for the rest of its life. Uniform wear also gives the smaller torque, so a clutch designed with it will not slip later.

**Doubt: why doesn't the band width appear in the band brake's tension?** The tension depends only on the friction torque, the drum radius, μ and the wrap. The width and thickness decide whether the band can carry that tension without breaking.

**Doubt: what is the difference between self-energizing and self-locking?** Both use the friction's moment to help. Self-energizing means it helps, so less effort is needed. Self-locking means it helps so much that no effort is needed, and the brake grabs on its own.

**Doubt: why does a cone clutch need less axial force than a plate clutch?** The cone acts as a wedge. A small axial push gives a normal force larger by 1 ÷ sin α, about 4.6 times at 12.5°.

### Tricky past questions with solutions

**Q1. GATE ME 2010.** A band brake having a band width of 80 mm, a drum diameter of 250 mm, a coefficient of friction of 0.25 and an angle of wrap of 270° is required to exert a friction torque of 1000 N·m. The maximum tension (in kN) developed in the band is: (a) 1.88 (b) 3.56 (c) 6.76 (d) 11.56

*Answer: (d) 11.56.*

1. Wrap in radians: 270° = 4.712 rad, so T1/T2 = e^(0.25 × 4.712) = e^1.178 = 3.248.
2. Torque: (T1 − T2) × 0.125 m = 1000 N·m, so T1 − T2 = 8000 N.
3. T2 = 8000 ÷ (3.248 − 1) = 3558 N, and T1 = 3558 + 8000 = 11,558 N = 11.56 kN.

**The trap:** 3.56 kN is the slack-side tension, worked out on the way. The question asks for the maximum, which is the tight side. The 80 mm width is there only to distract.

**Q2. Kerala PSC Deputy Engineer / AE (Mechanical) 050/2023, Q67.** A single plate clutch with friction on one side has outer and inner diameters of 100 mm and 40 mm. Assuming a uniform pressure of 2 MPa and a coefficient of friction of 0.4, the torque carrying capacity of the clutch is: (a) 150 N·m (b) 372 N·m (c) 196 N·m (d) 490 N·m

*Answer: (c) 196 N·m.*

1. Radii: ro = 50 mm and ri = 20 mm.
2. Uniform pressure, one pair of surfaces: T = (2/3)πμp(ro³ − ri³) = (2/3) × π × 0.4 × 2 × (125,000 − 8,000).
3. T = 196,000 N·mm = 196 N·m.

**The trap:** The question gives diameters, and putting 100 and 40 in as radii makes the answer eight times too big. Using the uniform-wear mean radius of 35 mm gives 185 N·m, which is not among the options: the question says uniform pressure, so use it.

**Q3. GATE ME 2006.** A disk clutch is required to transmit 5 kW at 2000 rpm. The disk has a friction lining with a coefficient of friction of 0.25. The bore radius of the friction lining is 25 mm. Assume a uniform contact pressure of 1 MPa. The outside radius of the friction lining is: (a) 39.4 mm (b) 49.5 mm (c) 97.9 mm (d) 142.9 mm

*Answer: (a) 39.4 mm.*

1. Torque: T = 5000 × 60 ÷ (2π × 2000) = 23.87 N·m = 23,873 N·mm.
2. Uniform pressure, one pair of surfaces: 23,873 = (2/3) × π × 0.25 × 1 × (ro³ − 25³).
3. ro³ − 15,625 = 45,594, so ro³ = 61,219 and ro = 39.4 mm.

**The trap:** With the pressure in MPa (N/mm²), the torque must be in N·mm. Leaving it in N·m makes the cube term 1000 times too small. Check the answer by putting 39.4 mm back into the formula: the torque comes out at 23.9 N·m.

**Q4. ESE Mechanical 2017.** Statement (I): Regarding the power transmitted by a clutch, the greater the speed, the lower the torque to be transmitted for a fixed power rating. Statement (II): The clutch is placed on the low-speed side to transmit larger torque. (a) Both true, and II explains I (b) Both true, but II does not explain I (c) I true, II false (d) I false, II true

*Answer: (c) Statement I is true, Statement II is false.*

1. Statement I: P = Tω, so for a fixed power the torque falls as speed rises. True.
2. Statement II: because of Statement I, the clutch goes on the high-speed side, where the torque is small and a smaller clutch will do. False.

**The trap:** "Transmit larger torque" sounds like a strength, so Statement II feels right. The designer's aim is the opposite: put the clutch where the torque is smallest.

**Q5. NPCIL Stipendiary Trainee (Mechanical) 2018.** In a self-locking brake, the force required to apply the brake is: (a) zero (b) minimum (c) maximum (d) average

*Answer: (a) zero.*

1. For a block brake whose friction moment helps the effort, F = RN(a − μb) ÷ l, where a is the arm of the normal force and b the arm of the friction force about the pivot.
2. If μb ≥ a, the effort F is zero or negative: once the shoe touches, friction drags it on by itself.

**The trap:** "Minimum" describes a self-energizing brake, which still needs some effort. Self-locking is the limit where the effort needed reaches zero.

## 6. Flywheels and governors

The biggest flywheel trap is the ± sign: ±x% is a total spread of 2x%. For governors, the trap is thinking the most sensitive governor is the best one. An isochronous governor is infinitely sensitive, and that is exactly why it hunts.

### Going deeper

| Idea | What it means |
| --- | --- |
| Flywheel and governor | A flywheel smooths the speed within one cycle at a steady load. A governor adjusts the fuel over many cycles when the load changes, to hold the mean speed. |
| Maximum fluctuation of energy | From the turning moment diagram, the largest swing of energy between the highest and lowest points, often across several loops, not the area of a single loop. |
| Coefficient of fluctuation of speed | Cs = (ωmax − ωmin) ÷ ωmean. A speed held within ±x% has Cs = 2x%. |
| Coefficient of steadiness | The reciprocal, 1 ÷ Cs. |
| Flywheel size | I = ΔE ÷ (ω²Cs). Halving the allowed fluctuation doubles the flywheel. Doubling the speed cuts it to a quarter, which is why flywheels sit on fast shafts. |
| Rim stress | A rotating rim's hoop stress is σ = ρv², whatever its size. The material sets a maximum rim speed. |
| Punching press | The motor works through the whole cycle, but the punch needs its energy in a small part of it. The flywheel stores energy between punches and gives it up during the punch. |
| Dead-weight and spring governors | Watt, Porter and Proell use gravity; Hartnell, Hartung, Wilson-Hartnell and Pickering use springs. Spring governors can run in any position and at high speed. |
| Stable governor | The ball radius increases as speed increases. Each speed has its own radius. |
| Isochronous governor | The same speed for every radius. The slightest change in speed sends the sleeve to one end of its travel. It is infinitely sensitive. |
| Hunting | The speed keeps swinging above and below the mean because the governor overcorrects. It is caused by too much sensitivity, so an isochronous governor is the worst case. |
| Controlling force | The inward force on each ball, Fc = mω²r at equilibrium. For a spring governor, Fc = ar − b (stable), ar (isochronous) or ar + b (unstable). |
| Effort and power | Effort is the mean force on the sleeve for a given change in speed; power is effort × sleeve lift. |
| Insensitiveness | Friction at the sleeve means the speed must change by some amount before the sleeve moves. |

### Formulas worth adding

```math
\Delta E = I\omega^2 C_s = 2E\,C_s, \qquad C_s = \frac{\omega_{\max} - \omega_{\min}}{\omega}, \qquad E = \tfrac{1}{2}I\omega^2
```

```math
\sigma_{\text{rim}} = \rho v^2
```

```math
h_{\text{Watt}} = \frac{g}{\omega^2} = \frac{895}{N^2}\ \text{m}, \qquad h_{\text{Porter}} = \frac{m + M}{m}\cdot\frac{895}{N^2}\ \text{m}
```

m is each ball's mass and M the central load. The Porter form assumes equal arms and links and no friction.

```math
F_c = ar - b \ \text{(stable)}, \qquad F_c = ar \ \text{(isochronous)}, \qquad F_c = ar + b \ \text{(unstable)}
```

```math
s = 2\left(\frac{a}{b}\right)^2 \frac{F_2 - F_1}{r_2 - r_1} \quad \text{(Hartnell spring stiffness)}
```

Here a is the ball arm and b the sleeve arm of the bell crank.

### Doubts cleared

**Doubt: does ±0.5% mean Cs = 0.005?** No. The speed may go 0.5% above and 0.5% below the mean, so the total spread is 1%: Cs = 0.01. Using 0.005 doubles the flywheel.

**Doubt: isn't an isochronous governor the ideal, since it holds one speed?** In theory, yes. In practice, the slightest change in speed throws the sleeve to one end, the fuel supply overshoots, and the speed swings back and forth. That is hunting. Real governors are made stable, a little less sensitive.

**Doubt: does a heavier flywheel slow the engine down?** No. It changes how much the speed varies within a cycle, not the mean speed. A heavier flywheel only takes longer to bring up to speed.

**Doubt: how do I tell from the controlling force line whether a spring governor is stable?** Extend the line to the force axis. Below the origin: stable. Through the origin: isochronous. Above the origin: unstable. Stability needs Fc ÷ r, which is mω², to rise with r.

### Tricky past questions with solutions

**Q1. GATE ME 2014 (Shift 2).** The maximum fluctuation of kinetic energy in an engine has been calculated to be 2600 J. Assuming that the engine runs at an average speed of 200 rpm, the polar mass moment of inertia (in kg·m²) of a flywheel to keep the speed fluctuation within ±0.5% of the average speed is \_\_\_\_\_\_ (numerical answer).

*Answer: about 593 kg·m² (accepted range 590 to 595).*

1. ω = 2π × 200 ÷ 60 = 20.94 rad/s, so ω² = 438.6.
2. ±0.5% is a total spread of 1%, so Cs = 0.01.
3. I = ΔE ÷ (ω²Cs) = 2600 ÷ (438.6 × 0.01) = 592.8 kg·m².

**The trap:** Taking Cs = 0.005 gives 1186 kg·m², outside the accepted range. Putting the speed in rpm instead of rad/s gives an answer about 90 times too small.

**Q2. Kerala PSC Deputy Engineer / AE (Mechanical) 050/2023, Q73.** A flywheel connected to a punching machine has to supply energy of 320 N·m while running at a mean angular speed of 20 rad/s. If the total fluctuation of speed is not to exceed ±2%, the mass moment of inertia of the flywheel in kg·m² is: (a) 25 (b) 20 (c) 30 (d) 40

*Answer: (b) 20.*

1. ±2% is a total spread of 4%, so Cs = 0.04.
2. I = ΔE ÷ (ω²Cs) = 320 ÷ (400 × 0.04) = 20 kg·m².

**The trap:** Cs = 0.02 gives 40 kg·m², option (d). The word "total" in the question does not change the rule: the ± sign still means the speed swings 2% each way.

**Q3. GATE ME 2021 (Shift 2).** The controlling force curves F, D and B of a spring-controlled governor are straight lines on a graph of controlling force (vertical) against radius of rotation (horizontal). Line F, extended, meets the force axis above the origin. Line D passes through the origin. Line B, extended, meets the force axis below the origin. The characteristics of the curves are: (a) F stable, D isochronous, B unstable (b) F stable, D unstable, B isochronous (c) F unstable, D stable, B isochronous (d) F unstable, D isochronous, B stable

*Answer: (d) F unstable, D isochronous, B stable.*

1. At equilibrium Fc = mω²r, so ω² = Fc ÷ (mr). A governor is stable if ω rises with r.
2. Line B: Fc = ar − b, so Fc ÷ r = a − b/r rises with r. Stable.
3. Line D: Fc = ar, so Fc ÷ r = a, the same speed at every radius. Isochronous.
4. Line F: Fc = ar + b, so Fc ÷ r = a + b/r falls with r. Unstable.

**The trap:** A line that starts higher looks stronger, so students call F stable, as in (a) and (b). What matters is how the slope from the origin, Fc ÷ r, changes along the line, not how high the line starts.

**Q4. ESE Mechanical 2017.** Consider the following statements: 1. In stationary constant-speed engines, the spring-loaded governor mechanism is fitted on the camshaft of the engine. 2. Hunting occurs when the governor is not sensitive. 3. Isochronous governors have the same speed over a wide range of governor action. 4. A governor is said to be unstable if the radius of rotation falls as the speed increases. Which of the above statements are correct? (a) 1, 2, 3 and 4 (b) 1, 2 and 4 only (c) 1, 3 and 4 only (d) 2 and 3 only

*Answer: (c) 1, 3 and 4 only.*

1. Statement 1 is true: the governor on stationary engines is driven from the camshaft.
2. Statement 2 is false. Hunting comes from too much sensitivity: the governor overcorrects and the speed swings.
3. Statement 3 is true: that is the definition of isochronous.
4. Statement 4 is true: a stable governor's radius grows with speed, so one whose radius falls is unstable.

**The trap:** "Not sensitive" sounds like a fault that would cause trouble, so Statement 2 feels right. Hunting is the opposite fault. A governor that reacts too strongly to small changes keeps overshooting.

## 7. Balancing and vibrations

The main trap in vibrations is believing damping always helps. Above a frequency ratio of √2 it makes isolation worse. In balancing, the trap is thinking a counterweight can cancel a reciprocating force; it can only move the unbalance to another direction.

### Going deeper

| Idea | What it means |
| --- | --- |
| Static balance | The centre of mass lies on the axis: Σmr = 0. The rotor stays put in any position on knife edges. |
| Dynamic balance | Also no couple: Σmr = 0 and Σmrl = 0. A rotor can be statically balanced and still rock its bearings. Masses in two planes are needed to balance a rotor in general. |
| Primary and secondary forces | A slider crank's reciprocating mass gives a primary force mrω² cos θ, at crank speed, and a secondary force mrω² cos 2θ ÷ n, at twice crank speed (n = connecting rod length ÷ crank). |
| Partial balancing | A rotating counterweight equal to a fraction c of the reciprocating mass cuts the force along the stroke to (1 − c) of it, but adds a force c × mrω² sin θ across the stroke. Usually c is 2/3 to 3/4. |
| Locomotive effects | Variation of tractive force acts along the line of stroke. The swaying couple twists the engine about a vertical axis. Hammer blow is the balance mass's vertical force on the rails. |
| Inline four-cylinder engine | Cranks at 0°, 180°, 180°, 0° balance the primary forces and couples, but the secondary forces add up. |
| Damping ratio | ζ = c ÷ cc, with cc = 2√(km). ζ < 1 oscillates (underdamped), ζ = 1 returns fastest without oscillating, ζ > 1 creeps back slowly (overdamped). ζ can be any positive number. |
| Logarithmic decrement | The log of the ratio of two successive peaks on the same side. It measures the damping of a real system from a recorded decay. |
| Coulomb (dry friction) damping | A force of constant size against the motion. The amplitude falls by the same amount each cycle, in a straight line, not as an exponential. |
| Transmissibility | The force reaching the foundation ÷ the force applied. It is above 1 when the frequency ratio r is below √2, exactly 1 at √2 whatever the damping, and below 1 only above √2. |
| Damping and isolation | Below √2, damping lowers transmissibility. Above √2, damping raises it. Isolators use little damping, just enough to pass through resonance safely at start-up. |
| Resonance | With r = 1, the amplitude is limited only by damping: the magnification factor is 1 ÷ (2ζ). |
| Whirling speed | The speed at which a shaft bows out, equal to its natural frequency of transverse vibration. |

### Formulas worth adding

```math
\zeta = \frac{c}{2\sqrt{km}}, \qquad \omega_d = \omega_n\sqrt{1 - \zeta^2}, \qquad f_n = \frac{1}{2\pi}\sqrt{\frac{g}{\delta_{st}}}
```

```math
\delta = \ln\frac{x_n}{x_{n+1}} = \frac{1}{n}\ln\frac{x_0}{x_n} = \frac{2\pi\zeta}{\sqrt{1 - \zeta^2}}
```

```math
TR = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}, \qquad TR_{\zeta = 0} = \frac{1}{|1 - r^2|}, \qquad r = \frac{\omega}{\omega_n}
```

```math
\text{Swaying couple} = (1 - c)\,m r \omega^2 \frac{a}{2}(\cos\theta + \sin\theta), \qquad \text{Tractive force variation} = (1 - c)\,m r \omega^2(\cos\theta - \sin\theta)
```

These are for a two-cylinder locomotive with cranks at 90° and cylinder centre lines a apart.

### Doubts cleared

**Doubt: can a damping ratio be more than 1?** Yes. It only means the system is overdamped and creeps back without oscillating. A door closer is an example.

**Doubt: why not fully balance a reciprocating mass with a bigger counterweight?** A counterweight's force turns with the crank. It cancels the force along the stroke only by adding an equal force across it. You can choose where the unbalance goes, but you cannot remove it.

**Doubt: if damping reduces vibration, why is too much damping bad for an isolator?** Above r = √2, the spring is what isolates. A damper is stiff at high speed and passes force straight through to the foundation. So the more damping, the more force gets through.

**Doubt: is critical damping the same as "no damping"?** No. It is the smallest damping that stops oscillation completely. The system returns to rest fastest without overshooting.

### Tricky past questions with solutions

**Q1. GATE ME 2014 (Shift 3).** The damping ratio of a single degree of freedom spring-mass-damper system with a mass of 1 kg, stiffness 100 N/m and viscous damping coefficient of 25 N·s/m is \_\_\_\_\_\_ (numerical answer).

*Answer: 1.25.*

1. Critical damping: cc = 2√(km) = 2√(100 × 1) = 20 N·s/m.
2. ζ = c ÷ cc = 25 ÷ 20 = 1.25.

**The trap:** Students who believe ζ must lie between 0 and 1 doubt the answer and recheck their way to a wrong one. 1.25 is fine: the system is overdamped. Leaving out the 2 in cc gives 2.5.

**Q2. GATE ME 2015 (Shift 3).** Which of the following statements are TRUE for damped vibrations? P. For a system having critical damping, the value of the damping ratio is unity and the system does not undergo a vibratory motion. Q. The logarithmic decrement method is used to determine the amount of damping in a physical system. R. In case of damping due to dry friction between moving surfaces, a resisting force of constant magnitude acts opposite to the relative motion. S. For the case of viscous damping, the drag force is directly proportional to the square of the relative velocity. (a) P and Q only (b) P and S only (c) P, Q and R only (d) Q and S only

*Answer: (c) P, Q and R only.*

1. P is true: ζ = 1 at critical damping, and the system returns without oscillating.
2. Q is true: measuring the decay of a recorded vibration is the standard way to find damping.
3. R is true: Coulomb friction has a constant size and always opposes the motion.
4. S is false. Viscous damping force is c × velocity, proportional to the velocity itself. Force proportional to the square of velocity is fluid drag at high speed, not viscous damping.

**The trap:** S borrows the drag law from fluid mechanics (drag ∝ v²), which students have also learned. In vibrations, "viscous" always means linear in velocity.

**Q3. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q71.** Assertion (A): A highly damped system may not be suitable for vibration isolation at high frequencies. Reason (R): Excess damping decreases force transmissibility in the isolation region. (a) Both A and R are true, and R is the correct explanation of A (b) Both A and R are true, but R is not the correct explanation of A (c) A is true but R is false (d) A is false but R is true

*Answer: (c) A is true but R is false.*

1. The isolation region is r > √2, the high-frequency side.
2. There, more damping raises the transmissibility, so a highly damped mount passes more force. A is true.
3. R says damping decreases transmissibility in that region, which is the opposite of what happens. R is false.

**The trap:** R is true below √2, and students remember "damping reduces transmissibility" without the condition. The words "in the isolation region" make it false.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q69.** Assertion (A): Complete balancing of reciprocating masses is not possible. Reason (R): The inertia force due to reciprocating motion acts along a straight line and changes direction periodically. (a) Both A and R are true, and R is the correct explanation of A (b) Both A and R are true, but R is not the correct explanation of A (c) A is true but R is false (d) A is false but R is true

*Answer: (a) Both are true, and R explains A.*

1. The reciprocating inertia force acts only along the line of stroke and reverses twice each turn. R is true.
2. A balance mass on the crank produces a force that turns with the crank, in every direction in turn. It can cancel the force along the stroke only by creating one across it. So complete balancing is impossible. A is true.
3. R is the reason: it is the straight-line nature of the force that a rotating mass cannot copy.

**The trap:** Students often pick (b), because R reads like a plain description of the force rather than a reason. But it is exactly the reason: a force fixed to one line cannot be cancelled by a force that rotates.

**Q5. Kerala PSC AE (Mechanical) 104/2025, Q69.** The angle of inclination of the crank to the line of stroke at which the swaying couple attains its maximum or minimum is: (a) 90° and 135° (b) 45° and 225° (c) 135° and 225° (d) 0° and 180°

*Answer: (b) 45° and 225°.*

1. In a two-cylinder locomotive with cranks at 90°, the swaying couple is proportional to cos θ + sin θ.
2. It is largest where its slope is zero: −sin θ + cos θ = 0, so tan θ = 1, θ = 45° or 225°.
3. At 45° it is +√2 times the basic value, the maximum; at 225° it is −√2 times, the minimum.

**The trap:** The variation of tractive force goes as cos θ − sin θ, which peaks at 135° and 315°. Mixing the two effects leads to options with 135° in them.

## 8. Theories of failure, factor of safety and fatigue

Traps here come from forgetting the third principal stress (zero, but still there), treating a rotating shaft's steady load as a static one, and using the cylinder's hoop stress for a sphere.

### Going deeper

| Idea | What it means |
| --- | --- |
| Which theory for which material | Brittle materials: maximum principal stress (Rankine). Ductile materials: maximum shear stress (Tresca, Guest) or distortion energy (von Mises), which fits test data best. |
| The third principal stress | In plane stress, σ3 = 0 is still a principal stress. If σ1 and σ2 have the same sign, Tresca's largest shear is σ1/2, from σ1 and σ3, not (σ1 − σ2)/2. |
| Tresca and von Mises agree | For simple tension and for equal biaxial stress of the same sign, both theories give the same factor of safety. |
| Tresca and von Mises differ | Most in pure shear: Tresca says shear yield is 0.5 Sy, von Mises 0.577 Sy, about 15% apart. Tresca is always the more cautious. |
| Factor of safety basis | Ductile parts under steady load: yield strength. Brittle parts: ultimate strength. Parts under varying load: a fatigue line built from the endurance limit. |
| Kinds of varying stress | Completely reversed (mean zero), repeated (minimum zero) and fluctuating (any other). Each is split into a mean σm and an amplitude σa. |
| A rotating shaft under a steady load | The load stays still while the shaft turns, so each point on the surface goes from tension to compression every turn. The bending stress is completely reversed, a fatigue case. |
| Fatigue lines | Each joins the endurance limit (on the amplitude axis) to a strength on the mean stress axis. Soderberg goes to the yield strength, Goodman to the ultimate strength, and Gerber is a parabola to the ultimate strength. |
| Most and least cautious | Soderberg lies lowest, so it is the most conservative. Gerber lies highest and is closest to test results for ductile metals. Goodman is in between and widely used. |
| Endurance limit | About 0.5 Sut for steel test pieces. Real parts get a lower value after factors for surface finish, size, reliability and so on. Aluminium has no true endurance limit. |
| Stress concentration | Kt depends only on geometry. Kf is the factor seen in fatigue tests and is never larger than Kt. Notch sensitivity q links them and lies between 0 and 1. |
| Static loads and notches | A ductile part yields at the notch and spreads the load, so stress concentration hardly matters. A brittle part cannot do this, so Kt is applied in full. |
| Miner's rule | Under several stress levels, each takes a share of the life: failure when Σ ni/Ni reaches 1. |

### Formulas worth adding

```math
\text{Tresca: } \max\left(|\sigma_1 - \sigma_2|,\ |\sigma_2 - \sigma_3|,\ |\sigma_3 - \sigma_1|\right) = \frac{S_y}{n}
```

```math
\text{von Mises: } \sqrt{\tfrac{1}{2}\left[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2\right]} = \frac{S_y}{n}, \qquad \text{plane stress: } \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2}
```

```math
\sigma_m = \frac{\sigma_{\max} + \sigma_{\min}}{2}, \qquad \sigma_a = \frac{\sigma_{\max} - \sigma_{\min}}{2}
```

```math
\text{Goodman: } \frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{ut}} = \frac{1}{n}, \qquad \text{Soderberg: } \frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{yt}} = \frac{1}{n}, \qquad \text{Gerber: } \frac{n\sigma_a}{S_e} + \left(\frac{n\sigma_m}{S_{ut}}\right)^2 = 1
```

```math
K_f = 1 + q(K_t - 1), \qquad \sum\frac{n_i}{N_i} = 1
```

```math
\sigma_{\text{sphere}} = \frac{pd}{4t}, \qquad \sigma_{\text{hoop, cylinder}} = \frac{pd}{2t}
```

### Doubts cleared

**Doubt: why is a shaft carrying a steady load treated as a fatigue problem?** Because the shaft turns under the load. A point on the surface is at the bottom (in tension) half a turn later than it was at the top (in compression). The stress at every point swings fully every turn.

**Doubt: if the third principal stress is zero, why does it matter?** For Tresca, the largest shear stress is half the largest difference between any two principal stresses. With σ1 = σ2 = 100 MPa, the difference σ1 − σ2 is zero, but σ1 − σ3 is 100 MPa. Leaving out σ3 makes the part look infinitely safe.

**Doubt: can Kf be bigger than Kt?** No. Kt is the full theoretical rise in stress at the notch. A real material feels only part of it in fatigue, the part given by q, so Kf lies between 1 and Kt.

**Doubt: Soderberg is the most cautious, so why isn't it always used?** It wastes material. Goodman is cautious enough for most designs, provided the peak stress is also checked against yield.

### Tricky past questions with solutions

**Q1. GATE ME 2016 (Shift 1).** The principal stresses at a point inside a solid object are σ1 = 100 MPa, σ2 = 100 MPa and σ3 = 0 MPa. The yield strength of the material is 200 MPa. The factor of safety calculated using the Tresca (maximum shear stress) theory is nT, and that calculated using the von Mises (maximum distortion energy) theory is nV. Which one of the following relations is TRUE? (a) nT = (√3/2)nV (b) nT = √3 nV (c) nT = nV (d) nV = √3 nT

*Answer: (c) nT = nV.*

1. Tresca: the largest difference is σ1 − σ3 = 100 MPa. So 100 = 200/nT, and nT = 2.
2. von Mises: √(100² − 100 × 100 + 100²) = 100 MPa. So 100 = 200/nV, and nV = 2.
3. Both are 2, so nT = nV.

**The trap:** Students who know that von Mises allows about 15% more than Tresca pick (a) or (d). That gap is for pure shear. For equal biaxial stress the two theories meet. Forgetting σ3 and using σ1 − σ2 = 0 makes Tresca give an infinite factor of safety.

**Q2. GATE ME 2014 (Shift 3).** A rotating steel shaft is supported at the ends. It is subjected to a point load at the centre. The maximum bending stress developed is 100 MPa. If the yield, ultimate and corrected endurance strengths of the shaft material are 300 MPa, 500 MPa and 200 MPa, the factor of safety for the shaft is \_\_\_\_\_\_ (numerical answer).

*Answer: 2.*

1. The shaft rotates under a fixed load, so the bending stress is completely reversed: σa = 100 MPa and σm = 0.
2. With σm = 0, Goodman and Soderberg both reduce to σa ÷ Se = 1/n.
3. n = 200 ÷ 100 = 2.

**The trap:** Treating the load as static gives 300 ÷ 100 = 3 (yield) or 500 ÷ 100 = 5 (ultimate). The word "rotating" turns it into a fatigue problem, and the corrected endurance strength is the one to use.

**Q3. GATE ME 2007.** A thin spherical pressure vessel of 200 mm diameter and 1 mm thickness is subjected to an internal pressure varying from 4 to 8 MPa. The yield, ultimate and endurance strengths of the material are 600, 800 and 400 MPa. The factor of safety as per Goodman's relation is: (a) 2.0 (b) 1.6 (c) 1.4 (d) 1.2

*Answer: (b) 1.6.*

1. Wall stress in a thin sphere: σ = pd ÷ (4t) = p × 200 ÷ 4 = 50p MPa. So σmin = 200 MPa and σmax = 400 MPa.
2. σm = (400 + 200) ÷ 2 = 300 MPa, and σa = (400 − 200) ÷ 2 = 100 MPa.
3. Goodman: 1/n = 100/400 + 300/800 = 0.25 + 0.375 = 0.625, so n = 1.6.

**The trap:** Using the cylinder's hoop stress pd/(2t) doubles every stress and gives n = 0.8, which is not offered, a hint that the formula is wrong. Using the yield strength (Soderberg) gives 1.33, near option (c). Option (a) is the static check, ultimate strength ÷ peak stress, 800 ÷ 400.

**Q4. GATE ME 2015 (Shift 1).** Which one of the following is the most conservative fatigue failure criterion? (a) Soderberg (b) Modified Goodman (c) ASME Elliptic (d) Gerber

*Answer: (a) Soderberg.*

1. On a graph of stress amplitude against mean stress, every line starts at the endurance limit on the amplitude axis.
2. Soderberg ends at the yield strength, the smallest strength on the mean axis, so it encloses the smallest safe region.
3. Goodman ends at the ultimate strength. Gerber and ASME Elliptic are curves that bulge outward, past the Goodman line.

**The trap:** Gerber fits test data best, and students sometimes read "best" as "safest". It is the least conservative of the four. A line that encloses less area is the more cautious one.

## 9. Riveted, welded and bolted joints

Joint traps come from the 0.707 of a fillet weld (left out, or used twice), from the simplifying assumptions behind riveted joint formulas, and from what a bolt's preload really does.

### Going deeper

| Idea | What it means |
| --- | --- |
| How a riveted joint fails | Tearing of the plate between rivets, shearing of the rivets, crushing between rivet and plate, and tearing or shearing of the plate's edge margin. A margin of at least 1.5d prevents the last two. |
| Joint efficiency | The weakest of the tearing, shearing and crushing strengths ÷ the strength of the solid plate, p × t × σt. |
| Assumptions of the analysis | Rivets fill their holes, carry no bending or direct stress, share the load equally, and the holes do not weaken the plate in compression (the rivet carries the load across). The formulas are only as good as these. |
| Single and double shear | In a lap joint and a single-strap butt joint each rivet is cut in one plane. With two straps it is cut in two planes. The boiler code (IBR) credits double shear with 1.875 times, not 2 times, single shear. |
| Unwin's formula | Rivet diameter d = 6√t, with t in mm. |
| Caulking and fullering | Hammering the plate edge (caulking) or a strip next to it (fullering) to make a boiler joint leak-tight. |
| Eccentric loading | Each fastener carries the direct load shared equally, plus a load from the twisting moment that grows with its distance from the group's centroid and acts at right angles to that radius. The critical fastener is far from the centroid where the two loads point the same way. |
| Fillet weld throat | The weld fails across its smallest section, the throat, at 45° to the legs. Throat = 0.707 × leg size. |
| Parallel and transverse fillets | Parallel fillets are loaded along their length, in shear. Transverse fillets are loaded across the weld, but standard practice still designs them for shear on the throat, which is on the safe side. Some textbooks write the transverse formula with tensile stress; the area is the same. |
| Butt weld | Full penetration: the throat is the plate thickness, so strength = t × L × σt, with no 0.707. |
| Bolt preload | Tightening stretches the bolt and squeezes the parts. An external load must first undo that squeeze, so it mostly reduces the squeeze in the parts and only partly adds to the bolt's tension. |
| Stiff parts, flexible bolt | The share of the external load that reaches the bolt is kb ÷ (kb + kc). Joints are designed with the parts stiffer than the bolt, so the bolt sees little of the load change. That is good for fatigue. |
| Rolled threads | Rolling forms the thread by cold working. The grain follows the thread and the root is left in compression, so rolled threads last longer than cut ones. |

### Formulas worth adding

```math
P_t = (p - d)\,t\,\sigma_t, \qquad P_s = n\,\frac{\pi}{4}d^2\,\tau, \qquad P_c = n\,d\,t\,\sigma_c, \qquad \eta = \frac{\min(P_t, P_s, P_c)}{p\,t\,\sigma_t}
```

n is the number of rivets per pitch length; double the shearing area for double shear (1.875 by IBR).

```math
d = 6\sqrt{t} \quad \text{(Unwin, mm)}
```

```math
P_{\text{fillet}} = 0.707\,s\,L\,\tau, \qquad P_{\text{butt}} = t\,L\,\sigma_t
```

```math
P_{\text{primary}} = \frac{P}{n}, \qquad P_{\text{secondary},\,i} = \frac{P e\, r_i}{\sum r^2}, \qquad R = \sqrt{P_p^2 + P_s^2 + 2P_pP_s\cos\theta}
```

```math
F_{\text{bolt}} = P_i + \frac{k_b}{k_b + k_c}\,P
```

Pi is the preload, P the external load, kb the bolt stiffness and kc the stiffness of the clamped parts.

### Doubts cleared

**Doubt: where does 0.707 come from?** A fillet weld's cross-section is a right-angled triangle with legs s. Its narrowest width, from the root to the face, is s × sin 45° = 0.707s. The weld breaks across that width.

**Doubt: if a transverse fillet is pulled across the weld, why design it for shear?** The stress on the throat is a mix of shear and normal stress, and tests show the weld fails mainly in shear. Designing for shear on the throat is simple and safe; a transverse fillet is actually about 30% stronger than this predicts.

**Doubt: doesn't preload just add to the bolt's stress?** It does at first. But once the joint is tight, an external load is shared: most of it goes into unloading the squeezed parts. So the bolt's tension changes little as the load comes and goes, which is why preload protects bolts from fatigue.

**Doubt: why would the analysis assume rivet holes don't weaken the plate in compression?** In compression the rivet is pressed between the sides of the hole and carries the load across it, so the plate acts as if solid. In tension the hole is a real gap, which is why tearing is checked on (p − d).

### Tricky past questions with solutions

**Q1. VIZAG MT Mechanical 2013 (re-exam).** A 60 mm long and 6 mm thick fillet weld carries a steady load of 15 kN along the weld. The shear strength of the weld material is 200 MPa. The factor of safety is: (a) 2.4 (b) 3.4 (c) 4.8 (d) 6.8

*Answer: (b) 3.4.*

1. Throat = 0.707 × 6 = 4.24 mm, so the throat area is 4.24 × 60 = 254.5 mm².
2. Shear stress: 15,000 ÷ 254.5 = 58.9 MPa.
3. Factor of safety: 200 ÷ 58.9 = 3.4.

**The trap:** Using the leg (6 mm) as the throat gives 4.8. Applying 0.707 twice gives 2.4, and assuming two welds gives 6.8. The question says "a fillet weld": one weld, one 0.707.

**Q2. Kerala PSC AE (Mechanical) 104/2025, Q73.** The design of a transverse fillet welded joint is based on: (a) shear strength (b) tensile strength (c) bending strength (d) compressive strength

*Answer: (a) shear strength.*

1. Both parallel and transverse fillet welds are taken to fail across the throat.
2. Standard design practice checks the throat in shear for both, which is on the safe side for transverse welds.

**The trap:** The load on a transverse weld pulls across it, so tensile strength feels right, and some textbooks even write the formula with σt. The answer key follows the usual design basis: shear on the throat.

**Q3. Kerala PSC AE (Mechanical, Ports) 065/2026, Q76.** In general, which of the following assumptions is/are correct about the analysis of a riveted joint? (i) There are no bending or direct stresses in rivets. (ii) Rivet holes in the plate do not weaken the plate in compression. (iii) Rivets after assembly completely fill the holes. (a) Only (ii) and (iii) (b) Only (i) and (ii) (c) All of the above (i, ii and iii) (d) Only (i) and (iii)

*Answer: (c) All of (i), (ii) and (iii).*

1. (i) The analysis treats rivets as loaded only in shear and bearing, ignoring bending. Assumed.
2. (ii) In compression the rivet carries the load across its hole, so the plate is treated as solid. Assumed.
3. (iii) Hot rivets swell to fill the hole, so the hole diameter is used as the rivet diameter. Assumed.

**The trap:** The question asks what the analysis assumes, not what is exactly true. Rivets do bend a little and holes do remove metal, so students cross out (i) or (ii). All three are standard assumptions.

**Q4. GATE ME 2018 (Shift 2).** Pre-tensioning of a bolted joint is used to: (a) strain harden the bolt head (b) decrease stiffness of the bolted joint (c) increase stiffness of the bolted joint (d) prevent yielding of the thread root

*Answer: (c) increase stiffness of the bolted joint.*

1. Without preload, only the bolt resists separation, so the joint's stiffness is the bolt's, kb.
2. With preload, the bolt and the squeezed parts act together, so the stiffness becomes kb + kc, much larger.
3. The joint then deflects less under load and the bolt's stress varies less, which helps fatigue and stops the joint opening.

**The trap:** (d) sounds protective, but preload does the opposite: bolts are often tightened to 75 to 90% of their proof load, close to yield. Preload is about the joint, not the bolt's own safety.

**Q5. ISRO Scientist (Mechanical) 2017.** Which of the following is FALSE for bolted joints? (a) Bolted joints are preloaded to avoid vibration loosening (b) Threads made by thread rolling are preferred over machined threads in bolts (c) When an external load is applied to a preloaded bolt joint, a bigger percentage of that load relieves compression of the flanges and the remaining percentage increases tension in the bolts (d) Bolted joints are designed such that bolt stiffness is higher than flange stiffness

*Answer: (d).*

1. (a) is true: a tight joint keeps friction high, so vibration cannot loosen the nut easily.
2. (b) is true: rolled threads have unbroken grain and compressive stress at the root.
3. (c) is true, provided the flanges are stiffer than the bolt, which they are by design.
4. (d) is false. The flanges are made stiffer than the bolt, so the bolt takes only a small share, kb ÷ (kb + kc), of each load change.

**The trap:** (c) sounds odd, since the load is applied to pull on the bolt, so students mark it false. It is the key benefit of preload. A stiff bolt would sound stronger, which is why (d) slips past.

## 10. Shafts, keys and couplings

Shaft traps come from judging a section by its bending moment or its torque alone, when only the two combined decide. Key and coupling traps come from naming the load the part transmits instead of the stress it fails in.

### Going deeper

| Idea | What it means |
| --- | --- |
| Combined bending and torsion | Bending gives a normal stress, torsion a shear stress, at the same surface point. Neither alone decides the size. |
| Equivalent twisting moment | Te = √(M² + T²): the torque that alone would give the same maximum shear stress. Used with Tresca, so it suits ductile shafts. |
| Equivalent bending moment | Me = ½(M + √(M² + T²)): the moment that alone would give the same maximum normal stress. Used with Rankine, so it suits brittle shafts. Codes often check both and take the larger diameter. |
| Design section | The section with the largest Te (for a ductile shaft), which need not be where M or T is largest. |
| Shock and fatigue factors | Real shafts multiply M and T by factors Km and Kt (about 1.5 to 3) for sudden loads before combining them. |
| Hollow shafts | The stress in torsion and bending grows with radius, so the middle of a solid shaft does little work. Moving that metal outward makes a shaft of the same weight both stronger and stiffer. |
| Designing for rigidity | Some shafts are sized so they do not twist too much, often 0.25° per metre for line shafts, rather than for strength. |
| Kinds of keys | Sunk keys (square or flat) fit in grooves in both parts. A saddle key grips by friction only and suits light loads. A feather key lets the hub slide along the shaft. A Woodruff key is a half-disc that tilts to fit a taper but cuts deep into the shaft. Splines are many keys made with the shaft. |
| How a key fails | In shear, across its width at the shaft surface, or by crushing, on the half of its height that sits in the hub. It transmits torque but is not twisted itself. |
| Square key | Equally strong in shear and crushing when the allowed crushing stress is twice the allowed shear stress, which is normal for key steels. |
| Keyways weaken shafts | Moore's factor e = 1 − 0.2(w/d) − 1.1(h/d) gives the strength left after cutting a keyway of width w and depth h. |
| Rigid and flexible couplings | Muff, split-muff and flange couplings are rigid and need the shafts in line. Bushed-pin, Oldham and universal couplings allow some misalignment. |
| Flange coupling bolts | Fitted bolts carry the torque as a shear force at the bolt circle. The force acts at the joint face, away from where each bolt is gripped, so the bolts also bend a little. |
| Hooke's joint | With shafts at angle α, the driven shaft's speed swings between ω cos α and ω ÷ cos α twice a turn. Two joints cancel this if the input and output shafts make equal angles with the middle shaft and its forks lie in one plane. |

### Formulas worth adding

```math
T_e = \sqrt{M^2 + T^2} = \frac{\pi}{16}\tau d^3, \qquad M_e = \tfrac{1}{2}\left(M + \sqrt{M^2 + T^2}\right) = \frac{\pi}{32}\sigma d^3
```

```math
T_{\text{hollow}} = \frac{\pi}{16}\tau D^3(1 - k^4), \qquad k = \frac{d_i}{D}
```

```math
T = \tau\,w\,l\,\frac{d}{2} \ \text{(key in shear)}, \qquad T = \sigma_c\,\frac{t}{2}\,l\,\frac{d}{2} \ \text{(key crushing)}
```

With w = d/4 and the key as strong as the shaft in shear, the key length comes out to l = 1.571d.

```math
T = n\,\frac{\pi}{4}d_b^2\,\tau_b\,\frac{D_p}{2} \quad \text{(n fitted bolts on pitch circle } D_p)
```

```math
\frac{\omega_{\max}}{\omega} = \frac{1}{\cos\alpha}, \qquad \frac{\omega_{\min}}{\omega} = \cos\alpha \quad \text{(single Hooke's joint)}
```

### Doubts cleared

**Doubt: why not just design at the section with the biggest bending moment?** A section with a smaller bending moment but a much bigger torque can have the larger combined stress. Work out Te at every candidate section and compare those.

**Doubt: if Te and Me give different answers, which one do I use?** For a ductile shaft, Te (Tresca). For a brittle one, Me (Rankine). Where a question doesn't say, ductile steel and Te are the default, while many design books size the shaft from both and take the larger diameter.

**Doubt: why are solid shafts so common if hollow ones are better?** A hollow shaft costs more to make, and a small shaft would end up with very thin walls. Hollow shafts pay off on large shafts and where weight matters, such as ship propeller shafts and aircraft.

**Doubt: a key carries torque, so why doesn't it fail in torsion?** The key itself isn't twisted. The shaft pushes one side of it and the hub pushes the other, which tries to slide its top half over its bottom half. That is shear, plus crushing where it presses on the hub.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2014 (Paper II).** The bending moment M and twisting moment T at four sections P, Q, R and S along a shaft are: P: M = 10 N·m, T = 45 N·m; Q: M = 40 N·m, T = 30 N·m; R: M = 20 N·m, T = 50 N·m; S: M = 15 N·m, T = 40 N·m. Which section is to be considered for designing the shaft? (a) P (b) Q (c) R (d) S

*Answer: (c) R.*

1. Te = √(M² + T²) at each section: P 46.1, Q 50.0, R 53.9 and S 42.7 N·m.
2. R has the largest equivalent twisting moment, so the shaft is sized there.

**The trap:** Q has the largest bending moment, and with the equivalent bending moment Me it would win (45.0 N·m against R's 36.9). For a ductile steel shaft, the maximum shear stress theory and Te decide, which points to R.

**Q2. ESE Mechanical 2019.** Hollow shafts are stronger than solid shafts having the same weight because: (a) the stiffness of a hollow shaft is less than that of a solid shaft (b) the strength of a hollow shaft is more than that of a solid shaft (c) the natural frequency of a hollow shaft is less than that of a solid shaft (d) in hollow shafts, material is not spread at a large radius

*Answer: (b).*

1. For the same weight, a hollow shaft has a larger outside diameter, so its metal sits farther out.
2. Torsional and bending stresses grow with radius, so metal far out carries more load. Its polar section modulus is larger, so it is stronger (and stiffer).
3. Of the options, only (b) states this correctly.

**The trap:** (d) has the idea backwards: it is precisely because the material is spread at a large radius that a hollow shaft is stronger. (a) is also backwards, since the hollow shaft of equal weight is stiffer, not less stiff.

**Q3. TNTRB Mechanical 2012.** The bolts in a rigid flanged coupling connecting two shafts transmitting power are subjected to: (a) force and bending moment (b) pure shear (c) tension only (d) torsion and bending moment

*Answer: (a) force and bending moment.*

1. The torque passes from one flange to the other as a shear force on each bolt at the bolt circle: F = 2T ÷ (n Dp).
2. That force acts at the joint face, away from where the bolt is gripped in each flange, so the bolt also carries a bending moment.

**The trap:** Design formulas check only shear and crushing, so (b) pure shear is the popular answer. The question asks what the bolts are subjected to, and a force acting off the bolt's supports always brings a bending moment. No bolt is twisted, so torsion is wrong.

**Q4. ISRO LPSC Technical Assistant (Mechanical), 23 February 2020.** A key connecting a flange coupling to the shaft is likely to fail in: (a) torsion (b) tension (c) shear (d) bending

*Answer: (c) shear.*

1. The shaft presses on one face of the key and the hub on the other, at slightly different radii.
2. These forces try to slide the hub half of the key over the shaft half, across the plane at the shaft surface. That is shear over the area w × l.

**The trap:** The key transmits torque, so torsion sounds right. But the key is not twisted about its own axis; it is sheared across its width. Its other failure mode is crushing, not bending.

## 11. Bearings

Bearing traps come from mixing rolling and sliding bearing terms, from forgetting that Petroff's equation assumes a centred journal, and from bearing-life questions that change two things at once.

### Going deeper

| Idea | What it means |
| --- | --- |
| Sliding or rolling | Sliding (journal) bearings are quiet, take shock well, run at very high speed and are thin in the radial direction. Rolling bearings start with little friction, come in standard sizes and are easy to replace, but have a definite fatigue life and are noisier. |
| Hydrodynamic film | A loaded journal runs off centre. Its rotation drags oil into the narrowing gap, the converging wedge builds pressure, and that pressure lifts the journal. No rotation, no film. |
| Hydrostatic bearing | A pump supplies oil under pressure, so the film exists even at zero speed. Used for very heavy, slow machines and for starting large turbines. |
| The μN/p curve | Friction against the bearing characteristic number μN/p. To the left of the lowest point is thin-film (boundary) lubrication; to the right, thick-film. The lowest point is the bearing modulus K. |
| Operating point | Designers run at about 3K or more. On the thick-film side, if the bearing heats up, the oil thins, friction falls and less heat is made: it corrects itself. Near K it can slip into metal contact. |
| Sommerfeld number | S = (r/c)² μN/p, a pure number that gathers every design variable. Bearings with the same S behave alike. A large S (light load, high speed) means a thick film and a nearly centred journal. |
| Petroff's equation | Assumes the journal is centred in the bearing, so the oil film has the same thickness c all round. It fits lightly loaded, fast bearings, but cannot explain how a film carries load. |
| Clearance and length | Radial clearance is about 0.001 of the radius. Length about 0.8 to 1.5 times the diameter; longer bearings get loaded at the edges when the shaft bends. |
| Rating life L10 | The life that 90% of a group of identical bearings reach or exceed. The basic dynamic load rating C is the load that gives an L10 of one million revolutions. |
| Life and load | L10 = (C/P)ᵏ million revolutions, with k = 3 for ball bearings and 10/3 for roller bearings. Doubling the load cuts a ball bearing's life to one-eighth. |
| Life in hours | The same number of revolutions at double the speed takes half the hours. Change load and speed together and both effects apply. |
| Equivalent load | P = XVFr + YFa combines radial and thrust loads. The rotation factor V is 1 when the inner race turns and 1.2 when the outer race turns. |
| Static capacity C0 | The load that leaves a dent of 0.0001 of the ball diameter. Used for bearings that turn slowly or only swing. |

### Formulas worth adding

```math
S = \left(\frac{r}{c}\right)^2 \frac{\mu N}{p}, \qquad f_{\text{Petroff}} = 2\pi^2\,\frac{\mu N}{p}\,\frac{r}{c}
```

N is in rev/s and p is the load ÷ projected area (l × d).

```math
L_{10} = \left(\frac{C}{P}\right)^k \ \text{million rev}, \qquad L_{10h} = \frac{L_{10}\times 10^6}{60N}, \qquad k = 3 \ \text{(ball)},\ \tfrac{10}{3} \ \text{(roller)}
```

```math
L_h \, N \, P^k = \text{constant} \quad \text{(same bearing)}
```

```math
P = XVF_r + YF_a
```

### Doubts cleared

**Doubt: is the bearing characteristic number the same as the Sommerfeld number?** They are related but not equal. μN/p has units unless N and p are chosen to cancel; multiplying by (r/c)² makes the Sommerfeld number a pure number that also brings in the clearance.

**Doubt: why would a journal bearing wear most at start-up?** At rest there is no wedge and no film, so metal touches metal. The film forms only once the journal turns fast enough, which is why big machines use jacking oil (a hydrostatic lift) to start.

**Doubt: why is life so sensitive to load?** Rolling fatigue depends on contact stress, and life falls with the cube of the load for balls. A 26% increase in load halves the life of a ball bearing.

**Doubt: does a faster shaft shorten a rolling bearing's life?** In revolutions, no: the same load gives the same number of revolutions. In hours, yes, because those revolutions are used up faster.

### Tricky past questions with solutions

**Q1. VIZAG MT Mechanical 2013.** Which one of the following is a criterion in the design of hydrodynamic bearings? (a) Sommerfeld number (b) rating life (c) specific dynamic capacity (d) rotation factor

*Answer: (a) Sommerfeld number.*

1. A hydrodynamic bearing is a sliding bearing with an oil film. Its design is about the film, which the Sommerfeld number describes.
2. Rating life, dynamic capacity and the rotation factor all belong to rolling bearings.

**The trap:** All four are real bearing terms, so the question tests whether you can sort them by bearing type. Three of them come from rolling bearing catalogues.

**Q2. UPRVUNL AE (Mechanical) 2014.** What assumption regarding the lubricant film is made in Petroff's equation? (a) It is converging (b) It is diverging (c) It is uniform (d) It is converging or diverging

*Answer: (c) It is uniform.*

1. Petroff took the journal as centred in the bearing, with no load pushing it to one side.
2. The gap is then the radial clearance c all round, so the film is uniform and the oil is simply sheared.

**The trap:** A converging film is how a real loaded bearing makes pressure, and students who know that pick (a). Petroff's equation ignores the wedge entirely, which is why it can find friction but not load capacity.

**Q3. ISRO Refrigeration and Air Conditioning 2018.** The expected life of a ball bearing subjected to a load of 9800 N and working at 1000 rpm is 3000 hours. What is the expected life of the same bearing for a load of 4900 N and a speed of 2000 rpm? (a) 12,000 hours (b) 6,000 hours (c) 1,500 hours (d) unchanged

*Answer: (a) 12,000 hours.*

1. In revolutions, life ∝ 1/P³. Halving the load multiplies it by 2³ = 8.
2. In hours, the same revolutions at double the speed take half as long: ÷ 2.
3. New life = 3000 × 8 ÷ 2 = 12,000 hours.

**The trap:** "Unchanged" assumes halving the load and doubling the speed cancel out. They don't, because load enters as a cube and speed only to the first power. 1500 hours takes only the speed into account.

**Q4. TNTRB Mechanical 2012.** For a radial bearing, the desired rated life is 10,000 hours at a speed of 600 rpm and a radial load of 4 kN. The basic load rating (in kN) for the bearing will be: (a) 28.45 (b) 38.6 (c) 35.6 (d) 38

*Answer: (a) 28.45.*

1. Life in revolutions: 10,000 h × 60 min/h × 600 rev/min = 360 × 10⁶, so L10 = 360 million revolutions.
2. For a ball bearing, L10 = (C/P)³, so C = 4 × 360^(1/3) = 4 × 7.11 = 28.45 kN.

**The trap:** The 60 is easy to lose. Without it L10 is only 6 million revolutions and C comes out at 7.3 kN, not even close to an option. The question doesn't say ball or roller; a "radial bearing" with no other detail is taken as a ball bearing, k = 3.

## Sources

Of the 49 past questions, 15 are from GATE ME, 7 from ESE Mechanical, 12 from Kerala PSC AE papers and 15 from other JE, AE and technical exams. None of them appears in Level 1. The Kerala PSC questions come from the official question booklets (version A), with answers from the commission's keys; they are listed by paper and question number. The rest were checked on their Testbook question pages, which name the paper each was asked in. Where Testbook does not name the paper, the year comes from ExamSIDE's GATE archive. Every answer was worked out again for this guide.

- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 065/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- **1. Mechanisms:** [Q1 UPPSC AE 2022](https://testbook.com/question-answer/a-planar-closed-kinematic-chain-is-formed-with-fou--6298de76f76382448ca07b12), [Q2 JSSC JE 2022](https://testbook.com/question-answer/the-approximate-value-of-mechanical-advantage-for--64afd79319caa755c83ce5ea), Q3 Kerala PSC 104/2025 Q64, Q4 Kerala PSC 104/2025 Q65, Q5 Kerala PSC 050/2023 Q65
- **2. Cams:** [Q1 VIZAG MT 2013](https://testbook.com/question-answer/in-a-cam-follower-mechanism-the-follower--57ecdce4995a2d55f17fd7a9), [Q2 GATE 2019](https://testbook.com/question-answer/a-flat-faced-follower-is-driven-using-a-circular-e--5d8a158ff60d5d31898653df), [Q3 GATE 2020](https://testbook.com/question-answer/a-cam-with-a-translating-flat-face-follower-is-des--5eaa8ec9f60d5d099bebfffa), [Q4 ESE 2022](https://testbook.com/question-answer/consider-the-following-statements-regarding-cams--627937f6c3b755c50b565eaa)
- **3. Gears:** [Q1 VIZAG MT 2013](https://testbook.com/question-answer/the-minimum-number-of-teeth-on-the-pinion-to-opera--5fc0ef27d3b7263fde288a36), Q2 Kerala PSC 050/2023 Q64, [Q3 APPSC Lecturer 2020](https://testbook.com/question-answer/a-spur-gear-has-a-module-of-3-5-mm-length-o--5f317dec5969e90d0c253def), [Q4 GATE 2009](https://testbook.com/question-answer/an-epicyclic-gear-train-is-shown-schematically-in--565ffcd1995a2d0c5d507b85), [Q5 GATE 2020](https://testbook.com/question-answer/the-sun-s-and-the-planet-p-of-an-epicyclic-gea--5ead5424f60d5d77912dae70)
- **4. Belts:** [Q1 SSC JE 2018](https://testbook.com/question-answer/a-pulley-is-driven-by-a-flat-belt-and-the-maximum--5a8acdcefef5b74d532b8d04), [Q2 ESE 2014](https://testbook.com/question-answer/which-of-the-following-statements-are-correct-rega--5ef9d9dc13ffe00d1013fa9c), [Q3 ESE 2017](https://testbook.com/question-answer/consider-the-following-statements-regarding-v-belt--5f2033bacc7ab50d0fc32eb1), Q4 Kerala PSC 065/2026 Q78
- **5. Brakes and clutches:** [Q1 GATE 2010](https://testbook.com/question-answer/a-band-brake-having-band-width-of-80-mm-drum-diam--56581761995a2d13ea3f1e01), Q2 Kerala PSC 050/2023 Q67, [Q3 GATE 2006](https://questions.examside.com/past-years/gate/question/a-disk-clutch-is-required-to-transmit-5-kw-at-2000-rpm-the-d-gate-me-2006-marks-1-jxdodwv5piwmxgp9.htm) ([Testbook](https://testbook.com/question-answer/a-disk-clutch-is-required-to-transmit-5-kw-at-2000--56570986995a2d13ea3d9e3a)), [Q4 ESE 2017](https://testbook.com/question-answer/statement-i-regarding-the-power-transmitted-by--5eb94563f60d5d3458cd4989), [Q5 NPCIL 2018](https://testbook.com/question-answer/in-a-self-locking-brake-the-force-required-to-app--5a603eebee09c50fa13d9701)
- **6. Flywheels and governors:** [Q1 GATE 2014](https://testbook.com/question-answer/maximum-fluctuation-of-kinetic-energy-in-an-engine--565d48b903282114ca1e7f92), Q2 Kerala PSC 050/2023 Q73, [Q3 GATE 2021](https://testbook.com/question-answer/the-controlling-force-curves-f-d-and-b-for-a-spr--6033a4de5560b6fd8635f6b7), [Q4 ESE 2017](https://testbook.com/question-answer/consider-the-following-statements1-in-stationa--5ea9c55cf60d5d62fd1fe16e)
- **7. Balancing and vibrations:** [Q1 GATE 2014](https://testbook.com/question-answer/the-damping-ratio-of-a-single-degree-of-freedom-sp--565eb93f03282114ca205cfa), [Q2 GATE 2015](https://testbook.com/question-answer/which-of-the-following-statements-are-true-for-dam--56598f8e995a2d13ea41a283), Q3 Kerala PSC 68/2026 Q71, Q4 Kerala PSC 68/2026 Q69, Q5 Kerala PSC 104/2025 Q69
- **8. Failure theories and fatigue:** [Q1 GATE 2016](https://testbook.com/question-answer/the-principal-stresses-at-a-point-inside-a-solid-o--5e021d7dc8ab150d014b9c99), [Q2 GATE 2014](https://testbook.com/question-answer/a-rotating-steel-shaft-is-supported-at-the-ends-i--565e99e703282114ca20255e), [Q3 GATE 2007](https://questions.examside.com/past-years/gate/question/a-thin-spherical-pressure-vessel-of-200mm-diameter-and-1mm-t-gate-me-2007-marks-2-g9rxb0mqpvfg067q.htm) ([Testbook](https://testbook.com/question-answer/a-thin-spherical-pressure-vessel-of-200-mm-diamete--565441250328213d4a8bf592)), [Q4 GATE 2015](https://testbook.com/question-answer/which-one-of-the-following-is-the-most-conservativ--565c155003282114ca1d3c2f)
- **9. Joints:** [Q1 VIZAG MT 2013](https://testbook.com/question-answer/a-60-mm-long-and-6-mm-thick-fillet-weld-carries-a--56570fb6995a2d13ea3daf5d), Q2 Kerala PSC 104/2025 Q73, Q3 Kerala PSC 065/2026 Q76, [Q4 GATE 2018](https://testbook.com/question-answer/pre-tensioning-of-a-bolted-joint-is-used-to--5b756426e2004a0c3a309148), [Q5 ISRO Scientist 2017](https://testbook.com/question-answer/which-of-the-following-is-false-for-bolted-joints--649c25351ffdedeae371eada)
- **10. Shafts, keys and couplings:** [Q1 ESE 2014](https://testbook.com/question-answer/the-bending-moment-m-and-twisting-moment-t-at--5ed4b739f60d5d1d24ca8c5e), [Q2 ESE 2019](https://testbook.com/question-answer/hollow-shafts-are-stronger-than-solid-shafts-havin--5e7c7e33f60d5d178e39342f), [Q3 TNTRB 2012](https://testbook.com/question-answer/the-bolts-in-a-rigid-flanged-coupling-connecting-2--5f2fefeb80e56a0d095b7d87), [Q4 ISRO LPSC 2020](https://testbook.com/question-answer/a-key-connecting-a-flange-coupling-to-the-shaft-is--5fa955b58abd5f7dc741338e)
- **11. Bearings:** [Q1 VIZAG MT 2013](https://testbook.com/question-answer/which-one-of-the-following-is-a-criterion-in-the-d--5fc0e1b73e52d777f32f2a3a), [Q2 UPRVUNL AE 2014](https://testbook.com/question-answer/what-assumption-regarding-the-lubricant-film-is-ma--5e8184fdf60d5d3e0603fc25), [Q3 ISRO RAC 2018](https://testbook.com/question-answer/the-expected-life-of-a-ball-bearing-subjected-to-a--5a32682adf2a2b33c4f73ddd), [Q4 TNTRB 2012](https://testbook.com/question-answer/for-a-radial-bearing-the-desired-rated-life--5f2fcdffdd89060d0bf34b85)
- Wording changes: questions that needed a figure have the figure written into the question (2 Q2, 3 Q4 and Q5, 6 Q3). In 1 Q4 the booklet's "Vω2" is written 2ωV, and "rotated through" is added. In 1 Q5, "Paucellier" is spelled Peaucellier. In 4 Q3 the page's "sleeve" is read as "sheave". In 10 Q1 the page's table is written into the question. Other Kerala PSC questions are lightly edited for grammar; their options and answers are unchanged.
