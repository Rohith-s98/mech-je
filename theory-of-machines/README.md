# Theory of Machines and Design Study Guide

Nov 18, 2026 · @Rohith

## How to use this guide

Theory of Machines and Machine Design is the fourth-ranked subject in your topic map, at about 12% of technical questions across RRB JE, SSC JE and Kerala PSC AE. It is one of the biggest subjects in SSC JE, at about 22 of every 100 technical questions (Theory of Machines 12 to 15, Machine Design 8 to 10), and Kerala PSC AE papers give it about 14. RRB JE's 2024–25 shifts skipped it, but older RRB papers asked about 12, so do not drop it. Finish it in about 17 study days, one sub-topic at a time, in the order below.

Theory of Machines comes first (sub-topics 1 to 7): how mechanisms move, and how power passes through cams, gears, belts and friction devices. Machine Design (8 to 11) then sizes the parts. Failure theories and fatigue come first there, because every joint, shaft and key is checked against them. Shaft torsion and springs are taught in Engineering Mechanics & SOM, so here shafts are seen from the design side.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the formulas you must memorise), and real questions from past papers (mostly 2019–2026) with worked solutions. Questions are tagged with the exam and year they appeared in.

| # | Sub-topic | Days | How often it is asked |
| --- | --- | --- | --- |
| 1 | Links, pairs, mechanisms and degrees of freedom | 2 | Every paper |
| 2 | Cams and followers | 1 | Regular |
| 3 | Gears and gear trains | 2 | Every paper |
| 4 | Belts, ropes and chains | 2 | Every paper |
| 5 | Brakes, clutches and dynamometers | 1 | Regular |
| 6 | Flywheels and governors | 2 | Regular |
| 7 | Balancing and vibrations | 2 | Regular |
| 8 | Theories of failure, factor of safety and fatigue | 2 | Every paper |
| 9 | Riveted, welded and bolted joints | 1 | Regular |
| 10 | Shafts, keys and couplings | 1 | Regular |
| 11 | Bearings | 1 | Occasional |

Method per sub-topic: read the contents, write the formulas on one page, solve the past questions without looking, then check the solutions.

## 1. Links, pairs, mechanisms and degrees of freedom

This is the vocabulary of the whole subject, and most of its questions are one-line recalls: which pair is lower, which mechanism is an inversion of which chain, and Grübler's count of degrees of freedom. Learn the inversion lists by heart; they are asked in almost every paper.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Link | A rigid part of a machine that moves relative to the other parts. A binary link has 2 joints, a ternary link 3, a quaternary link 4. A belt or chain counts as a flexible link. |
| Kinematic pair | Two links in contact that allow a definite relative motion. Lower pair: surface contact (turning, sliding, screw and spherical pairs). Higher pair: point or line contact (cam and follower, gear teeth, ball bearing, belt and pulley). |
| Closed and unclosed pairs | A closed (self-closed) pair is held together by its shape, such as a pin in a hole. An unclosed (force-closed) pair needs gravity or a spring to stay in contact, such as a cam and follower. |
| Chain, mechanism, machine, structure | A kinematic chain is links joined so that their relative motion is definite. Fix one link and it becomes a mechanism. A machine is a mechanism that transmits force or does work. A structure has no relative motion at all. |
| Degrees of freedom (Grübler) | For a plane mechanism, F = 3(n − 1) − 2j − h. F = 0 is a structure, F = 1 a constrained mechanism (one input drives it), F > 1 unconstrained, and F < 0 a statically indeterminate structure. |
| Grashof's law (four-bar chain) | If s + l ≤ p + q (shortest plus longest no more than the other two), at least one link can turn fully. Fix the shortest link: double crank. Fix a link next to it: crank-rocker. Fix the link opposite it: double rocker. If s + l > p + q, every inversion is a double rocker. |
| Inversions | Fixing a different link of the same chain gives a different mechanism, so a chain of n links has n inversions. Four-bar chain: beam engine (crank-rocker), coupling rod of a locomotive (double crank), Watt's indicator (double rocker). |
| Single slider-crank chain | Cylinder fixed: reciprocating engine. Crank fixed: Whitworth quick return and the rotary (Gnome) engine. Connecting rod fixed: crank and slotted lever quick return and the oscillating cylinder engine. Slider fixed: pendulum pump (bull engine) and hand pump. |
| Double slider-crank chain | Its three inversions are the elliptical trammel, the Scotch yoke and Oldham's coupling. Oldham's coupling joins two parallel shafts that are slightly out of line. |
| Quick return ratio | Time of the cutting stroke ÷ time of the return stroke = β/α, the crank angles swept in the two strokes. It is always more than 1, so the idle stroke is faster. |
| Instantaneous centre | The point about which a link is turning at that instant. A mechanism of n links has n(n − 1)/2 of them. Kennedy's theorem: the three instantaneous centres of any three links lie on one straight line. |
| Velocity and acceleration | The velocity of B relative to A is ω × AB, perpendicular to AB. Relative acceleration has a radial part ω² × AB towards A and a tangential part α × AB. |
| Coriolis component | When a slider moves along a link that is itself turning, its acceleration gains an extra 2vω (v = sliding velocity, ω = angular velocity of the link). Its direction is the sliding velocity turned 90° in the sense of ω. It appears in the crank and slotted lever. |
| Other mechanisms | Exact straight-line motion: Peaucellier and Hart mechanisms. Approximate: Watt, Grasshopper and Tchebicheff. A pantograph copies a drawing to scale, and Hooke's joint connects two intersecting shafts. |

### Formulas to memorise

```math
F = 3(n - 1) - 2j - h
```

```math
s + l \le p + q \quad \text{(Grashof: at least one link makes a full turn)}
```

```math
\text{Quick return ratio} = \frac{\beta}{\alpha} = \frac{360^\circ - \alpha}{\alpha} \qquad \cos\frac{\alpha}{2} = \frac{\text{crank length}}{\text{distance between fixed centres}}
```

```math
N = \frac{n(n-1)}{2} \qquad v_{BA} = \omega \cdot AB \qquad a_c = 2v\omega
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 14 November 2022 (Shift 2).** A cam and follower combination belongs to the category of: (a) lower pair (b) rotating pair (c) screw pair (d) higher pair

*Answer: (d).* The cam touches the follower at a point (or along a line for a flat follower), and point or line contact makes a higher pair. A spring or gravity keeps the follower pressed on the cam.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025.** The degree of freedom, when the mechanism forms a structure, is: (a) 1 (b) Zero (c) −1 (d) 2

*Answer: (b).* A structure has no relative motion between its links, so F = 0. F = −1 would be a statically indeterminate structure, which has more links than it needs.

**Q3. TSPSC AEE Mechanical 2015 (Paper II).** A planar mechanism has 6 links with 6 lower pairs and 2 higher pairs. By Gruebler's criterion, its degree of freedom is: (a) 1 (b) 2 (c) 3 (d) 0

*Answer: (a).* F = 3(n − 1) − 2j − h = 3(6 − 1) − 2 × 6 − 2 = 15 − 12 − 2 = 1. Each lower pair removes 2 freedoms and each higher pair removes 1.

**Q4. HPCL Engineer Mechanical, 18 August 2024.** In a four-bar chain, the shortest link measures 250 mm and the other three links are 300 mm, 350 mm and 450 mm. If the shortest link is fixed, the mechanism is: (a) crank-crank (b) rocker-rocker (c) crank-rocker (Class I) (d) rocker-rocker (Class II)

*Answer: (d).* s + l = 250 + 450 = 700 mm, more than p + q = 300 + 350 = 650 mm. Grashof's condition fails, so no link can turn fully, whichever link is fixed. That is a Class II (non-Grashof) double rocker. Option (a) is the trap: fixing the shortest link gives a double crank only when Grashof's condition holds.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Oldham's coupling is an inversion of: (a) four bar chain (b) slider-crank chain (c) double slider crank chain (d) five link chain

*Answer: (c).* The double slider-crank chain has three inversions: elliptical trammel, Scotch yoke and Oldham's coupling. Oldham's coupling links two parallel shafts with a small lateral offset.

**Q6. DSSSB JE Mechanical, 6 November 2019 (Shift 1).** For a quick return mechanism, the advance-to-return time ratio should be: (a) equal to 1 (b) less than 1 (c) greater than 1 (d) no relation

*Answer: (c).* The return stroke does no cutting, so the mechanism makes it faster. The crank sweeps a larger angle during the advance stroke, so advance time ÷ return time is more than 1.

**Q7. BDL MT Mechanical, 13 April 2025 (Shift 2).** The number of instantaneous centres for an eight-link mechanism is: (a) 8 (b) 15 (c) 30 (d) 28

*Answer: (d).* Every pair of links has one instantaneous centre, so N = n(n − 1)/2 = 8 × 7 / 2 = 28. A four-bar chain has 6.

**Q8. HPCL Mechanical Engineer, 16 August 2025 (Shift 2).** The Coriolis component of acceleration arises when a slider moves along a rotating link. Its magnitude is: (a) 2ωv (b) ωv (c) ω²r (d) αr

*Answer: (a).* The Coriolis component is 2ωv, where v is the slider's velocity along the link. Option (c) is the centripetal part and option (d) the tangential part of the acceleration; both exist even without sliding.

## 2. Cams and followers

Cam questions are almost all definitions: base circle, pressure angle, lift, offset, and which follower motion suits which speed. Learn the circles and the four standard follower motions, with the maximum velocity and acceleration of each.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Cam and follower | A cam is a rotating (or sliding) piece that drives a follower through a set motion by direct contact. Their contact is a higher pair, kept closed by a spring or gravity. |
| Types of cam | Radial (disc) cam: the follower moves at right angles to the cam axis. Cylindrical cam: the follower moves parallel to the axis. A wedge (translating) cam slides instead of turning. |
| Types of follower | Knife-edge: point contact, most wear, rarely used. Roller: least wear, the most common. Flat-faced (mushroom): takes large side thrust, used for engine valves. Followers also differ by motion (reciprocating or oscillating) and by path (radial or offset). |
| Base circle | The smallest circle from the cam centre to the cam profile. It sets the size of the cam, and lift and throw are measured from it. |
| Trace point, pitch curve, prime circle | The trace point is the knife-edge tip or the roller centre, and its path is the pitch curve. The prime circle is the smallest circle to the pitch curve: base circle radius plus roller radius. |
| Pressure angle | The angle between the direction of follower motion and the normal to the pitch curve. A large pressure angle gives large side thrust and can jam the follower, so keep it below about 30° by using a larger base circle. |
| Lift (stroke) and throw | Lift is the greatest travel of the follower from its lowest position. Throw is its greatest distance from the base circle. |
| Offset follower | A follower whose line of motion is moved sideways from the cam centre. The offset reduces side thrust on the follower guide. |
| Dwell | A period when the cam turns but the follower stays still. One cycle is outstroke, dwell, return stroke, dwell. |
| Uniform velocity | The simplest motion, but acceleration is infinite at the start and end of each stroke. That jerk is why it is used only with rounded ends. |
| Simple harmonic motion (SHM) | Smooth motion. Acceleration is greatest at the ends of the stroke and zero at mid-stroke, so there is still a sudden change at each end. |
| Uniform acceleration and retardation | The displacement curve is parabolic and the acceleration is constant. It gives the lowest peak acceleration for a given lift. |
| Cycloidal motion | Acceleration is zero at both ends of the stroke, so there is no jerk. It is the best choice for high-speed engines. |

### Formulas to memorise

S is the lift, θo the cam angle of the outstroke (in radians) and ω the angular speed of the cam.

```math
\text{SHM:} \quad v_{max} = \frac{\pi \omega S}{2\theta_o} \qquad a_{max} = \frac{\pi^2 \omega^2 S}{2\theta_o^2}
```

```math
\text{Uniform acceleration:} \quad v_{max} = \frac{2\omega S}{\theta_o} \qquad a_{max} = \frac{4\omega^2 S}{\theta_o^2}
```

```math
\text{Cycloidal:} \quad v_{max} = \frac{2\omega S}{\theta_o} \qquad a_{max} = \frac{2\pi \omega^2 S}{\theta_o^2}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** The size of a cam depends on: (a) pitch curve (b) prime circle (c) pitch circle (d) base circle

*Answer: (d).* The base circle is the smallest circle that touches the cam profile, and the rest of the profile is built out from it. A larger base circle means a larger cam.

**Q2. SSC JE Mechanical, 2 March 2017 (Morning).** The throw of a cam is the maximum distance of the follower from the: (a) base circle (b) pitch circle (c) prime circle (d) pitch curve

*Answer: (a).* Throw is measured from the base circle. Do not confuse it with lift, which is the follower's travel from its lowest position.

**Q3. MPSC AMVI 2013 (Paper 2).** The pressure angle and the base circle in a cam should be: (a) both as big as possible (b) respectively as low as possible and as big as possible (c) respectively as big as possible and as low as possible (d) both as low as possible

*Answer: (b).* A low pressure angle means less side thrust on the follower. Making the base circle bigger flattens the cam profile, which lowers the pressure angle.

**Q4. SSC JE Mechanical, 5 December 2025 (Shift 2).** Offset is provided in a cam follower mechanism to: (a) achieve high efficiency (b) avoid jerk (c) increase acceleration (d) minimize side thrust

*Answer: (d).* Moving the follower's line of motion off the cam centre reduces the sideways push on the follower and its guide, so they wear less. Jerk is controlled by the choice of follower motion, not by offset.

**Q5. BHEL Engineer Trainee Mechanical, 24 August 2023.** When a follower moves with simple harmonic motion, its maximum acceleration during the outstroke is (S = stroke, θo = angle of outstroke, ω = angular velocity of the cam): (a) π²ω²S/(2θo²) (b) π²ω²S²/(2θo²) (c) πω²S/(2θo²) (d) πω²S²/(2θo²)

*Answer: (a).* In SHM the follower moves like a point on a circle of radius S/2 that turns through π while the cam turns through θo. That circle's angular speed is πω/θo, so a\_max = (S/2)(πω/θo)². Options with S² have the wrong units.

**Q6. JKSSB JE Mechanical, 2 November 2021 (Shift 1).** For high speed engines, the cam follower should move with: (a) cycloidal motion (b) simple harmonic motion (c) uniform velocity (d) uniform acceleration and retardation

*Answer: (a).* Cycloidal motion has zero acceleration at both ends of the stroke, so there is no sudden change of force. That means the least vibration, noise and wear at high speed.

## 3. Gears and gear trains

Gears are asked in every paper. Most questions are about tooth terms (module, pitch, pressure angle), which gear suits which shaft layout, and interference. The numericals are short: module, centre distance or the speed of the last gear in a train.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Gears by shaft layout | Parallel shafts: spur (straight teeth) and helical (inclined teeth, smoother and quieter, but with axial thrust; double helical cancels it). Intersecting shafts: bevel gears; mitre gears are two equal bevel gears at 90°. Non-parallel, non-intersecting shafts: spiral (crossed helical), worm and worm wheel, and hypoid gears. |
| Worm and worm wheel | Joins two perpendicular shafts that do not meet, with a large speed reduction in one step. With a small lead angle it is self-locking: the wheel cannot drive the worm. |
| Pitch circle | The imaginary circle that rolls without slipping on the pitch circle of the mating gear. A gear's size is given by its pitch circle diameter D. |
| Module, circular pitch, diametral pitch | Module m = D/T in mm. Circular pitch pc = πD/T = πm, the arc between the same points on two neighbouring teeth. Diametral pitch Pd = T/D = 1/m. Two gears mesh only if their module is the same. |
| Addendum, dedendum, clearance | Addendum is the tooth height above the pitch circle (1m for standard teeth). Dedendum is the depth below it (1.25m). Clearance is the gap left at the root: dedendum minus the mating gear's addendum. |
| Pressure angle | The angle between the common normal at the point of contact (the line of action) and the common tangent to the pitch circles. Standard values are 14½° and 20°; 20° full depth is the most used. |
| Law of gearing | The common normal at the point of contact must always pass through the pitch point. Then the velocity ratio stays constant. Involute and cycloidal teeth both obey it. |
| Involute teeth | The profile is traced by the end of a string unwound from the base circle. They are easy to cut, and a small error in centre distance does not change the velocity ratio. Their weakness is interference. |
| Cycloidal teeth | The face is traced by a circle rolling outside the pitch circle (epicycloid) and the flank by a circle rolling inside it (hypocycloid). No interference and less wear, but harder to make; used in watches and instruments. |
| Interference | The tip of one tooth digs into the flank of its mate below the base circle. Cure it with a larger pressure angle, more teeth on the pinion, shorter (stub) teeth or undercutting. A 20° full-depth pinion needs about 18 teeth to mesh with a rack without interference. |
| Contact ratio | Arc of contact ÷ circular pitch. It must be more than 1, so that the next pair of teeth engages before the last pair lets go. |
| Gear trains | Simple: one gear on each shaft; an idler only changes the direction. Compound: two gears on an intermediate shaft give a large ratio in a small space. Reverted: the first and last gears share one axis (lathe back gear, clock). Epicyclic: the axis of a planet gear moves, which gives two degrees of freedom; used in differentials and automatic gearboxes. |

### Formulas to memorise

```math
m = \frac{D}{T} \qquad p_c = \frac{\pi D}{T} = \pi m \qquad P_d = \frac{T}{D} = \frac{1}{m}
```

```math
\frac{N_1}{N_2} = \frac{T_2}{T_1} = \frac{D_2}{D_1} \qquad \text{centre distance} = \frac{m(T_1 + T_2)}{2}
```

```math
\text{Train value} = \frac{N_{last}}{N_{first}} = \frac{\text{product of teeth on the driving gears}}{\text{product of teeth on the driven gears}}
```

```math
T_{min} \text{ (pinion meshing with a rack)} = \frac{2 a_w}{\sin^2 \phi} \approx 18 \text{ for } \phi = 20^\circ \text{ and addendum } a_w = 1 \text{ module}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 5 December 2025 (Shift 2).** The ratio of the diameter of a gear to its number of teeth is known as: (a) circular pitch (b) diametral pitch (c) module (d) addendum

*Answer: (c).* Module m = D/T, in mm. Diametral pitch is the inverse, T/D, and circular pitch is π times the module.

**Q2. RSSB JE Mechanical (Degree), 6 February 2025 (Shift 1).** What is the value of pressure angle generally used for involute gears? (a) 35° (b) 30° (c) 20° (d) 15°

*Answer: (c).* 20° full depth is the standard. It gives a stronger tooth base and less interference than the older 14½°, without the high bearing load of larger angles.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** The circle on which the involute is generated in a spur gear is called: (a) clearance circle (b) pitch circle (c) addendum circle (d) base circle

*Answer: (d).* An involute is traced by the end of a taut string unwound from the base circle. No involute exists inside the base circle, which is why teeth that reach below it interfere.

**Q4. SSC JE Mechanical, 6 December 2025 (Shift 2).** In a cycloidal gear tooth profile, the flanks and faces of the teeth are generated by: (a) a point on a circle rolling inside and outside a base circle (b) an involute curve only (c) a circular arc centred on the gear axis (d) a parabolic curve

*Answer: (a).* A small circle rolls outside the gear's circle to trace the face (epicycloid) and inside it to trace the flank (hypocycloid). In cycloidal gears the circle it rolls on is the pitch circle; the option calls it the base circle.

**Q5. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Gear tooth interference can be reduced by: (a) increasing pressure angle (b) reducing the number of teeth on the pinion (c) increasing addendum (d) decreasing the centre distance

*Answer: (a).* A larger pressure angle makes the base circle smaller, so more of the tooth lies outside it and the mating tip no longer digs in. Options (b) and (c) make interference worse.

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2).** When two equal gears (having equal teeth) connect two shafts whose axes are mutually perpendicular, the gears are known as: (a) spur gears (b) mitre gears (c) helical gears (d) spiral gears

*Answer: (b).* Mitre gears are bevel gears with a 1:1 ratio at 90°. Spur and helical gears join parallel shafts.

**Q7. RSSB JE Mechanical (Degree), 6 February 2025 (Shift 1).** Which type of gears are used for shaft axes having an offset? (a) mitre gears (b) spiral bevel gears (c) hypoid gears (d) zerol gears

*Answer: (c).* Hypoid gears are spiral bevel gears whose shaft axes do not meet; the gap between the axes is the offset. They drive the rear axle of a car, which lets the propeller shaft sit lower.

**Q8. SSC JE Mechanical, 5 December 2025 (Shift 2).** Which type of gear train has two degrees of freedom? (a) simple gear train (b) compound gear train (c) epicyclic gear train (d) reverted gear train

*Answer: (c).* In an epicyclic train the arm carrying the planet gears can also turn, so two inputs are needed to fix all the speeds (for example the sun gear and the arm). Simple, compound and reverted trains have fixed axes and one degree of freedom.

## 4. Belts, ropes and chains

Belt questions come in every SSC JE paper, and three results cover most of them: the ratio of tensions, power = (T1 − T2)v, and the maximum-power condition Tc = Tmax/3. Slip, creep and the belt length formulas fill the rest.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Which drive where | Belts and ropes drive by friction, so they can slip. Flat belts suit long centre distances, V-belts short ones and more power, ropes long distances and heavy power. Chains are positive drives with no slip, used where the speed ratio must be exact. |
| Open and crossed belts | In an open belt both pulleys turn the same way; in a crossed belt they turn opposite ways. A crossed belt wraps more of each pulley, so it grips better, but it rubs where it crosses and wears faster. |
| Velocity ratio | Without slip, N1/N2 = D2/D1. Belt thickness t is allowed for by using D + t. A slip of s% lowers the driven speed by the factor (1 − s/100). |
| Slip | The belt moves relative to the pulley because friction is not enough. The total slip is the slip on the driver plus the slip on the follower. |
| Creep | A small relative motion caused by the belt stretching on the tight side and shrinking on the slack side. It happens in every belt drive, even with no slip, and lowers the speed slightly. |
| Ratio of tensions | Flat belt: T1/T2 = e^(μθ), with θ the angle of contact on the smaller pulley in radians. V-belt or rope in a groove of angle 2β: T1/T2 = e^(μθ cosec β), which is larger, so a V-belt grips better. |
| Power | P = (T1 − T2) × v. T1 − T2 is the effective (driving) tension. |
| Centrifugal tension | Tc = m v², where m is the belt's mass per metre. It adds equally to both sides, so it does not change T1 − T2, but it uses up part of the tension the belt can carry. |
| Maximum power | For a given maximum tension, power is greatest when Tc = Tmax/3, that is at v = √(Tmax/3m). Then the tight-side tension available for driving is 2Tmax/3. |
| Initial tension | The tension in the belt before it carries load: T0 = (T1 + T2)/2, or (T1 + T2 + 2Tc)/2 when centrifugal tension is counted. |
| Belt length | Open belt: L = π(r1 + r2) + 2x + (r1 − r2)²/x. Crossed belt: the last term becomes (r1 + r2)²/x, so its length depends only on r1 + r2. |
| Flat belt vs V-belt | A V-belt grips by wedge action, so it suits short centre distances and is compact and quiet. It loses more energy flexing in the groove, so a flat belt is more efficient. V-belts cannot run crossed. The groove angle is usually 34° to 40°. |
| Chain drives | No slip and about 98% efficiency. The chain wraps the sprocket as a polygon, so its speed varies slightly (chordal action); more sprocket teeth reduce this. |

### Formulas to memorise

```math
\frac{N_2}{N_1} = \frac{D_1 + t}{D_2 + t}\left(1 - \frac{s}{100}\right)
```

```math
\frac{T_1}{T_2} = e^{\mu\theta} \;\text{(flat belt)} \qquad \frac{T_1}{T_2} = e^{\mu\theta\,\mathrm{cosec}\,\beta} \;\text{(V-belt, groove angle } 2\beta)
```

```math
P = (T_1 - T_2)\,v \qquad T_c = m v^2 \qquad T_0 = \frac{T_1 + T_2 + 2T_c}{2}
```

```math
\text{Maximum power:} \quad T_c = \frac{T_{max}}{3} \qquad v = \sqrt{\frac{T_{max}}{3m}}
```

```math
L_{open} = \frac{\pi}{2}(d_1 + d_2) + 2x + \frac{(d_1 - d_2)^2}{4x} \qquad L_{crossed} = \frac{\pi}{2}(d_1 + d_2) + 2x + \frac{(d_1 + d_2)^2}{4x}
```

### Past exam questions with solutions

**Q1. HPCL Engineer Mechanical, 27 March 2025 (Shift 2).** Slip and creep are related to the operation of: (a) gear drive systems (b) all types of belt drive systems (c) V-belt drive systems only (d) flat belt drive systems only

*Answer: (b).* Every belt drive grips by friction (so it can slip) and every belt is elastic (so it creeps). Gears are positive drives and have neither.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** For the same speed, load and centre distance, the efficiency of a flat belt is: (a) higher than a V-belt (b) lower than a V-belt (c) the same as a V-belt (d) none of the above

*Answer: (a).* A V-belt bends and rubs as it wedges into the groove, which wastes some energy, so its efficiency is a few per cent lower. Its advantage is grip, not efficiency.

**Q3. SSC JE CBT-II Mechanical, 7 April 2026.** What is the total length L of a belt in an open belt drive connecting two pulleys of diameters d1 and d2 with a centre distance x? (a) (π/2)(d1 − d2) + 2x + (d1 + d2)²/4x (b) (π/2)(d1 + d2) + 2x + (d1 − d2)²/4x (c) (π/2)(d1 − d2) + 2x + (d1 − d2)²/4x (d) (π/2)(d1 + d2) + 2x + (d1 + d2)²/4x

*Answer: (b).* The belt wraps about half of each pulley, (π/2)(d1 + d2), and has two straight runs of about x each. The small extra term uses the difference of the diameters in an open belt. Option (d) is the crossed belt.

**Q4. SSC JE CBT-II Mechanical, 7 April 2026.** Calculate the power delivered by a belt drive running at 10 m/s, with a tight-side tension of 2500 N and a slack-side tension of 800 N. (a) 17 kW (b) 19 kW (c) 20 kW (d) 21 kW

*Answer: (a).* P = (T1 − T2)v = (2500 − 800) × 10 = 17,000 W = 17 kW.

**Q5. SSC JE Mechanical, 5 December 2025 (Shift 2).** A V-belt has a mass per unit length of 0.10 kg/m and runs at a speed of 25 m/s. What is the centrifugal tension in the belt? (a) 100.5 N (b) 72.5 N (c) 80 N (d) 62.5 N

*Answer: (d).* Tc = m v² = 0.10 × 25² = 62.5 N.

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2).** In a flat belt drive, the belt is subjected to a maximum tension T and a centrifugal tension Tc. The condition for transmission of maximum power is: (a) T = Tc (b) T = 2Tc (c) T = 3Tc (d) T = √3 Tc

*Answer: (c).* Power is greatest when one third of the maximum tension is taken up by centrifugal tension, so T = 3Tc.

**Q7. SSC JE Mechanical, 6 December 2025 (Shift 2).** For maximum power transmission in a belt drive, the velocity of the belt should be (T = maximum tension, m = mass per unit length): (a) √(T/m) (b) √(T/2m) (c) √(T/3m) (d) √(T/4m)

*Answer: (c).* Set Tc = m v² equal to T/3 and solve: v = √(T/3m). This and Q6 are the same result written two ways.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** T1 and T2 are the tensions on the tight and slack sides of a belt. Taking the centrifugal tension Tc into account, the initial tension of the belt is: (a) (T1 + T2 + Tc)/2 (b) (T1 + T2 + 2Tc)/2 (c) (T1 + T2 + Tc)/3 (d) (T1 + T2 + 2Tc)/3

*Answer: (b).* Without centrifugal tension, T0 is the average of the two side tensions, (T1 + T2)/2. Centrifugal tension adds Tc to each side, so T0 = (T1 + T2 + 2Tc)/2.

## 5. Brakes, clutches and dynamometers

All three are friction devices: a clutch uses friction to pass torque on, a brake to absorb it, and an absorption dynamometer to measure it. The one formula behind most numericals is torque = number of friction surfaces × μ × axial force × mean radius.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Friction clutch | Connects a running driving shaft to a driven shaft, or disconnects it. At the start the driver turns and the driven member is at rest; friction then brings both to the same speed. |
| Uniform pressure and uniform wear | A new clutch has uniform pressure on its lining. After running in, the wear becomes uniform (pressure × radius is constant), and this gives slightly less torque. Designs use uniform wear because it is the safer figure. |
| Plate clutches | Torque T = nμWR, where n is the number of pairs of friction surfaces, W the axial force and R the mean radius. A single plate clutch lined on both sides has n = 2. A multi-plate clutch has n = n1 + n2 − 1 and fits in a small space (motorcycles). |
| Mean radius | Uniform wear: R = (r1 + r2)/2. Uniform pressure: R = (2/3)(r1³ − r2³)/(r1² − r2²). |
| Cone clutch | The friction surfaces are cones, and T = μWR cosec α, where α is the semi-cone angle. A smaller α gives more torque, but if α falls below the angle of friction the clutch locks and will not disengage. About 12.5° is usual. |
| Centrifugal clutch | Its shoes fly outwards and engage by themselves once the speed passes a set value; used in mopeds. |
| Block (shoe) brake | A block is pressed against a drum or wheel. Railway trains use shoe brakes on the wheel tread, worked by air or vacuum. |
| Band brake | A steel band, lined with friction material, is pulled tight around a drum. Braking torque = (T1 − T2) × drum radius, and T1/T2 = e^(μθ) as for a belt. A differential band brake can be made self-locking. |
| Internal expanding shoe and disc brakes | Shoes expand against the inside of a drum (cars, motorcycles). Disc brakes cool better, so they fade less. |
| Self-energising and self-locking | A brake is self-energising when the friction force helps to press the block on. It is self-locking when no outside force is needed at all. |
| Brake fade | Repeated hard braking heats the lining, its coefficient of friction drops and the brake weakens. Heat also wears the lining faster and can warp the drum or disc. |
| Dynamometers | Instruments that measure engine power. Absorption dynamometers turn the power into heat: Prony brake, rope brake, hydraulic and eddy current types. Transmission dynamometers pass the power on and measure the torque: epicyclic-train, belt transmission and torsion dynamometers. |

### Formulas to memorise

```math
T = n\mu W R \qquad R_{wear} = \frac{r_1 + r_2}{2} \qquad R_{pressure} = \frac{2}{3}\cdot\frac{r_1^3 - r_2^3}{r_1^2 - r_2^2}
```

```math
T_{cone} = \mu W R\,\mathrm{cosec}\,\alpha \qquad n = n_1 + n_2 - 1 \;\text{(multi-plate clutch)}
```

```math
T_{band} = (T_1 - T_2)\,r \qquad \frac{T_1}{T_2} = e^{\mu\theta} \qquad P = \frac{2\pi N T}{60}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 6 December 2025 (Shift 2).** What is the initial condition in clutches? (a) Both members rotate at the same speed with no relative motion (b) Driving member is at rest and driven member is rotating (c) Both members rotate at the same speed with relative motion (d) Driving member is rotating and driven member is at rest

*Answer: (d).* Before engagement the engine side (driver) is already turning and the load side (driven) is still. As the plates press together, slipping friction speeds the driven member up until both turn together; option (a) is the condition after full engagement.

**Q2. SSC JE Mechanical, 6 December 2025 (Shift 2).** A single-plate clutch transmits 20 kW at 3000 rpm. Taking the coefficient of friction as 0.35 and the mean radius as 0.15 m, the required axial force is: (a) 150 N (b) 303 N (c) 403 N (d) 1212.4 N

*Answer: (d).* T = 60P/(2πN) = 60 × 20,000 / (2π × 3000) = 63.66 N·m. With one pair of friction surfaces, as the options assume, W = T/(μR) = 63.66 / (0.35 × 0.15) = 1212 N. If both sides of the plate were lined (n = 2), the force would halve to 606 N, which is not offered.

**Q3. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** If the semi-cone angle of a cone clutch falls below the angle of static friction, the: (a) clutch will slip (b) clutch will self-lock (c) clutch will disengage (d) none of the above

*Answer: (b).* A cone with a very small semi-cone angle wedges in, like a nail. Once that angle is below the friction angle, the cone will not come out when the spring force is released, so the clutch cannot be disengaged.

**Q4. RSSB JE Mechanical (Diploma), 10 February 2025.** Which of the following brakes is commonly used in trains? (a) shoe (b) band and block (c) internal expanding shoe (d) band

*Answer: (a).* Trains press cast-iron or composite shoes (blocks) against the wheel treads, worked by air or vacuum. Internal expanding shoes are the usual car and motorcycle drum brake.

**Q5. MPPSC AE Mechanical, 3 July 2022.** In a simple band brake, the tension on the tight side is 336 N and on the slack side 125.8 N. If the radius of the brake drum is 100 mm, the braking torque is: (a) 33 N·m (b) 27 N·m (c) 35 N·m (d) 21 N·m

*Answer: (d).* Braking torque = (T1 − T2) × r = (336 − 125.8) × 0.1 = 21.0 N·m. Change the radius to metres first.

**Q6. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Repeated braking at short intervals may lead to: (a) brake fade (b) premature wear and tear (c) warping of brake pads (d) all of the above

*Answer: (d).* Each stop turns kinetic energy into heat. With no time to cool, the lining's friction drops (fade), it wears faster, and the heat can warp the pads, drum or disc.

**Q7. ISRO Scientist Mechanical, 2020.** Which of the following is an absorption type dynamometer? (a) Prony brake dynamometer (b) epicyclic-train dynamometer (c) torsion dynamometer (d) belt transmission dynamometer

*Answer: (a).* A Prony brake grips the engine pulley with friction blocks and turns all the engine's power into heat. The other three are transmission dynamometers: the power passes through them while the torque is measured.

## 6. Flywheels and governors

Both control engine speed, on different time scales. A flywheel smooths the speed within one cycle; a governor holds the mean speed steady over many cycles as the load changes. Expect one flywheel numerical (energy or moment of inertia) and one or two governor definitions.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Turning moment diagram | A graph of crankshaft torque against crank angle. Its mean line is the resisting torque, and the areas above and below the line are energy gained and lost. A single-cylinder four-stroke engine has the most uneven diagram, so it needs the largest flywheel. |
| Flywheel | A heavy wheel that stores energy while the torque is above the mean and gives it back while it is below. It limits the speed change within a cycle but cannot hold the mean speed when the load changes. |
| Fluctuation of energy | ΔE = Emax − Emin, the difference between the greatest and least kinetic energy of the flywheel in one cycle. |
| Coefficient of fluctuation of speed | Cs = (ω1 − ω2)/ω, where ω is the mean speed. A speed band of ±2% means Cs = 0.04. Its inverse, ω/(ω1 − ω2), is the coefficient of steadiness. |
| Energy stored | E = ½Iω², so stored energy goes up with the square of the speed. The energy a flywheel can give out is ΔE = Iω²Cs. |
| Punching press flywheel | The motor runs steadily, and the flywheel supplies the large burst of energy needed during the short punching stroke. |
| Governor | Keeps the mean speed nearly constant by changing the fuel or steam supply as the load changes. |
| Types of centrifugal governor | Balls fly outwards as the speed rises and move the sleeve. Gravity controlled: Watt (no load on the sleeve), Porter (a central dead load) and Proell (balls on extended links). Spring controlled: Hartnell, Hartung, Wilson-Hartnell and Pickering. |
| Watt governor height | h = g/ω² = 895/N² metres, with N in rpm. As speed rises the height falls and the balls move out. At high speed h becomes too small to work with, so the Watt governor suits only slow engines. |
| Sensitiveness | Range of speed ÷ mean speed, (N2 − N1)/N. The smaller this ratio, the more sensitive the governor. |
| Stability | A governor is stable if there is only one ball radius for each speed, and the radius grows as the speed grows. |
| Isochronism | The governor has the same equilibrium speed at every radius. Its speed range is zero, so it is infinitely sensitive, but it is unstable. |
| Hunting | The engine speed keeps swinging above and below the mean because the governor over-corrects. Too much sensitivity causes it. |
| Effort and power | Effort is the mean force on the sleeve for a 1% change of speed. Power is the work done on the sleeve for that change: effort × sleeve lift. |

### Formulas to memorise

```math
\Delta E = I\omega^2 C_s \qquad C_s = \frac{\omega_1 - \omega_2}{\omega} \qquad \omega = \frac{\omega_1 + \omega_2}{2}
```

```math
E = \frac{1}{2} I \omega^2 \qquad I = m k^2 \qquad \text{coefficient of steadiness} = \frac{1}{C_s}
```

```math
h_{Watt} = \frac{g}{\omega^2} = \frac{895}{N^2}\ \text{m} \qquad h_{Porter} = \frac{m + M}{m}\cdot\frac{895}{N^2}\ \text{m}
```

```math
\text{Sensitiveness} = \frac{N_2 - N_1}{N} \qquad N = \frac{N_1 + N_2}{2}
```

### Past exam questions with solutions

**Q1. DDA JE (Electrical/Mechanical), 3 April 2023.** The coefficient of steadiness of a flywheel is defined as: (a) the ratio of the mean speed to the maximum fluctuation of speed (b) the ratio of the mean speed to the minimum speed (c) the ratio of the minimum speed to the maximum speed (d) the ratio of the mean speed to the maximum speed

*Answer: (a).* Coefficient of steadiness = ω/(ω1 − ω2), the inverse of the coefficient of fluctuation of speed. A large value means a steady engine.

**Q2. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025).** If K is the coefficient of fluctuation of speed of a flywheel, the ratio ωmin/ωmax is: (a) (1 − 2K)/(1 + 2K) (b) (1 + 2K)/(2 − 2K) (c) (2 − K)/(2 + K) (d) (2 + K)/(2 − K)

*Answer: (c).* K = 2(ωmax − ωmin)/(ωmax + ωmin). Put x = ωmin/ωmax: K(1 + x) = 2(1 − x), so x = (2 − K)/(2 + K). Check: K = 0 gives x = 1, no fluctuation. Option (d) is more than 1, which cannot be a minimum over a maximum.

**Q3. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A flywheel stores 10 kJ of energy at 100 rpm. If the speed increases to 200 rpm, the stored energy becomes: (a) 20 kJ (b) 40 kJ (c) 60 kJ (d) 80 kJ

*Answer: (b).* E = ½Iω², so doubling the speed multiplies the energy by 4: 10 × 4 = 40 kJ.

**Q4. SSC JE Mechanical, 6 December 2025 (Shift 2).** The height of a Watt governor is given by (N = speed of the arm and ball about the spindle axis, in rpm): (a) 895/N² m (b) 895/N m (c) 8.95/N m (d) 89.5/N² m

*Answer: (a).* Balancing the ball's weight against its centrifugal force gives h = g/ω². With ω = 2πN/60, h = 9.81 × 3600/(4π²N²) = 895/N² m.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** With a decrease of governor speed: (a) radius of rotation decreases but the height increases (b) radius of rotation and height both decrease (c) radius of rotation and height both increase (d) radius of rotation increases but the height increases

*Answer: (a).* h = 895/N², so a lower speed means a greater height. The balls drop inwards, so the radius of rotation falls.

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2).** Which one of the following governors is NOT controlled by a spring? (a) Hartnell governor (b) Pickering governor (c) Hartung governor (d) Watt governor

*Answer: (d).* The Watt governor is controlled only by the weight of its balls. Hartnell, Hartung and Pickering governors all use springs.

**Q7. MP Vyapam Sub Engineer Mechanical, 10 November 2022 (Shift 1).** The sensitivity of an isochronous governor is: (a) infinity (b) four (c) zero (d) one

*Answer: (a).* An isochronous governor has a range of speed of zero. Sensitiveness is measured by range ÷ mean speed, and the smaller that ratio, the more sensitive the governor; a zero range makes it infinitely sensitive.

**Q8. ESE Mechanical 2016 (Paper 2).** A governor is said to be hunting if the speed of the engine: (a) remains constant at the mean speed (b) is above the mean speed (c) is below the mean speed (d) fluctuates continuously above and below the mean speed

*Answer: (d).* A governor that is too sensitive over-corrects: it cuts the fuel too much, the speed falls, it opens the supply too much, and so on. The speed keeps swinging about the mean.

## 7. Balancing and vibrations

Balancing questions test two ideas: static versus dynamic balance, and why reciprocating masses can only be partly balanced. Vibration questions centre on ωn = √(k/m), the three kinds of damping, and the √2 rule for isolation.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Why balance | Unbalanced masses create shaking forces that vibrate the frame, load the bearings and make noise, and these grow with the square of the speed. |
| Static balance | The centre of gravity of all the masses lies on the axis of rotation: the vector sum of m × r is zero, so the force polygon closes. A single rotating mass is balanced by one mass in the same plane, opposite to it. |
| Dynamic balance | There is no resultant force and no resultant couple, so both the force polygon and the couple polygon close. Masses in different planes need balancing masses in at least two planes. A dynamically balanced rotor is also statically balanced; the reverse is not true. |
| Reciprocating masses | The inertia force of the piston has a primary part mω²r cos θ and a secondary part mω²r cos 2θ/n, where n = l/r. It acts only along the line of stroke and keeps changing direction, so a rotating balance mass can cancel only part of it: primary forces are partially balanced, usually 2/3 to 3/4. |
| Locomotives | Partial balancing leaves a variation of tractive effort, a swaying couple and a hammer blow (an up-and-down force on the rails). |
| Kinds of vibration | Longitudinal, transverse and torsional, by direction. Free (after a disturbance), forced (by a repeating force) or self-excited, such as chatter in machine tools. |
| Natural frequency | For a spring and mass, ωn = √(k/m) = √(g/δ), where δ is the static deflection. It depends on stiffness and mass, not on gravity. A cantilever with a load at its free end acts as a spring of stiffness k = 3EI/l³. |
| Springs in parallel and series | Parallel springs add: k = k1 + k2. In series: 1/k = 1/k1 + 1/k2, so the system is softer than either spring. |
| Damping | Damping ratio ζ = c/cc, where cc = 2√(km). Under-damped (ζ < 1): it oscillates with shrinking amplitude. Critically damped (ζ = 1): returns to rest in the shortest time without oscillating, as in gun recoil and door closers. Over-damped (ζ > 1): returns slowly without oscillating. |
| Logarithmic decrement | The natural log of the ratio of two successive amplitudes, used to measure damping from a test. |
| Resonance | When the forcing frequency equals the natural frequency, the amplitude is greatest and is limited only by damping. |
| Transmissibility and isolation | Transmissibility = force passed to the foundation ÷ force applied. It falls below 1 only when ω/ωn > √2. In that range more damping passes more force on, so isolators use soft springs and light damping. |
| Critical (whirling) speed | The shaft speed equal to the natural frequency of its transverse vibration. At that speed the shaft bows out violently, so it must run well away from it. |

### Formulas to memorise

```math
\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{g}{\delta}} \qquad f_n = \frac{\omega_n}{2\pi} \approx \frac{0.4985}{\sqrt{\delta}}\ \text{Hz} \;(\delta \text{ in m})
```

```math
\zeta = \frac{c}{c_c} \qquad c_c = 2\sqrt{km} = 2m\omega_n \qquad \delta_{log} = \ln\frac{x_1}{x_2} = \frac{2\pi\zeta}{\sqrt{1 - \zeta^2}}
```

```math
k_{parallel} = k_1 + k_2 \qquad \frac{1}{k_{series}} = \frac{1}{k_1} + \frac{1}{k_2} \qquad k_{cantilever} = \frac{3EI}{l^3}
```

```math
\text{Isolation:} \; \frac{\omega}{\omega_n} > \sqrt{2} \qquad N_c = \frac{60}{2\pi}\sqrt{\frac{g}{\delta}}\ \text{rpm}
```

```math
F_{primary} = m\omega^2 r\cos\theta \qquad F_{secondary} = m\omega^2 r\,\frac{\cos 2\theta}{n}, \quad n = \frac{l}{r}
```

### Past exam questions with solutions

**Q1. TANGEDCO AE Mechanical 2015.** What is the condition for dynamic balancing of revolving masses? (a) force polygon is closed (b) couple polygon is closed (c) neither force polygon nor couple polygon is closed (d) both force and couple polygons are closed

*Answer: (d).* Static balance needs only the force polygon to close. Dynamic balance also needs the couple polygon to close, because masses in different planes produce a couple even when their forces cancel.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025.** Primary forces in reciprocating engines: (a) are partially balanced (b) are completely balanced (c) cannot be balanced (d) are balanced by secondary forces

*Answer: (a).* A rotating balance mass on the crank cancels part of the primary force along the stroke but adds an unbalanced force across it. So only a fraction (usually 2/3 to 3/4) is balanced, as a compromise.

**Q3. GATE ME 2010.** The natural frequency of a spring-mass system on earth is ωn. The natural frequency of this system on the moon (g on the moon = g on earth ÷ 6) is: (a) ωn (b) 0.408ωn (c) 0.204ωn (d) 1.167ωn

*Answer: (a).* ωn = √(k/m) contains no g. On the moon the static deflection is smaller, but √(g/δ) stays the same because δ = mg/k falls with g.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A spring-mass system with mass m1 and stiffness k1 has double the frequency of another system with mass m2 and stiffness k2. If m2 is one half of m1, the stiffness ratio k1/k2 is: (a) 1 (b) 2 (c) 4 (d) 8

*Answer: (d).* Frequency goes as √(k/m), so k1/m1 = 4 × k2/m2. With m2 = m1/2, k1/m1 = 8k2/m1, so k1/k2 = 8.

**Q5. Kerala PSC AE (Mechanical), 18 August 2025.** A large field gun, which comes back to its initial position after firing in the least possible time, is: (a) critically damped (b) under damped (c) over damped (d) undamped

*Answer: (a).* Critical damping returns the barrel in the shortest time without overshooting. An under-damped barrel would oscillate; an over-damped one would creep back too slowly.

**Q6. AAI JE (Technical) 2020.** For effective vibration isolation, the frequency ratio ωn/ω must be: (a) equal to 1/√2 (b) more than 1/√2 (c) less than 1/√2 (d) less than 5/√2

*Answer: (c).* Isolation needs ω/ωn > √2. The question uses the inverse ratio, so the condition becomes ωn/ω < 1/√2. Watch which way up the ratio is written.

**Q7. BPSC AE Mechanical 2024 (Paper VI).** The whirling speed of a shaft coincides with the natural frequency of its: (a) transverse vibration (b) coupled bending vibration (c) longitudinal vibration (d) torsional vibration

*Answer: (a).* Whirling is the shaft bowing sideways, which is transverse vibration. It happens when the speed of rotation matches the transverse natural frequency.

## 8. Theories of failure, factor of safety and fatigue

This is the start of Machine Design and the most asked part of it. Learn which failure theory suits which material, the meaning of the three stress cycles, and the Soderberg and Goodman lines. Principal stresses and Mohr's circle are in Engineering Mechanics & SOM; here they are used to judge failure.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Factor of safety | FoS = failure stress ÷ working (allowable) stress. Ductile materials fail by yielding, so their FoS uses the yield stress; brittle materials fracture, so theirs uses the ultimate stress. Typical values are 1.5 to 2 for ductile parts under steady load and 3 to 5 for brittle ones, more for shock loads. |
| Why failure theories | A tensile test gives the strength under one stress, but real parts carry combined stresses. A failure theory turns the combined stresses into one value that can be compared with the tensile test. |
| Maximum principal stress (Rankine) | Failure when the largest principal stress reaches the tensile strength. It suits brittle materials such as cast iron. |
| Maximum shear stress (Guest–Tresca) | Failure when the maximum shear stress (σ1 − σ3)/2 reaches half the yield strength. It suits ductile materials, errs on the safe side, and is used for shafts. |
| Maximum principal strain (St Venant) | Failure when the largest strain reaches the strain at yield. It is rarely used now. |
| Total strain energy (Haigh) | Failure when the strain energy per unit volume reaches the value at yield in a tensile test. |
| Distortion energy (von Mises–Hencky) | Failure when the energy of distortion (change of shape) reaches its value at yield in a tensile test. It agrees best with tests on ductile materials. |
| Stress concentration | A sudden change of section (hole, notch, keyway, shoulder) raises the stress locally. The theoretical or form factor Kt = maximum stress ÷ nominal stress, and it depends only on the shape. |
| Reducing stress concentration | Generous fillet radii, gradual changes of section, relief grooves, small extra holes beside a large one, and a good surface finish. |
| Fatigue | Failure under repeated stress below the static strength. A tiny crack starts at a surface flaw or stress raiser, grows a little each cycle, and the part finally snaps without warning. |
| Stress cycles | Fully reversed: the mean stress is zero. Repeated: from zero to a maximum, so the mean equals the amplitude. Fluctuating: between two unequal values. |
| Endurance limit | The stress amplitude a material can carry for an unlimited number of cycles, read from the flat part of the S-N curve (about 10⁶ cycles for steel). For steel it is about half the ultimate strength in bending, and the endurance limit in shear is about 0.55 times that in bending. Surface finish, size and reliability factors reduce it. |
| Notch sensitivity | q = (Kf − 1)/(Kt − 1), where Kf is the fatigue stress concentration factor. q = 0 means the notch has no effect in fatigue; q = 1 means its full theoretical effect. |
| Fluctuating load lines | On a graph of mean stress against stress amplitude: Gerber is a parabola to the ultimate strength, Goodman a straight line from the endurance limit to the ultimate strength, Soderberg a straight line from the endurance limit to the yield strength. Soderberg is the most conservative. |

### Formulas to memorise

```math
FoS = \frac{S_{yt}}{\sigma_{working}} \;\text{(ductile)} \qquad FoS = \frac{S_{ut}}{\sigma_{working}} \;\text{(brittle)}
```

```math
\text{Tresca: } \sigma_1 - \sigma_3 \le \frac{S_{yt}}{N} \qquad \text{von Mises: } \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2} \le \frac{S_{yt}}{N}
```

```math
S_{sy} = 0.5\,S_{yt} \;\text{(Tresca)} \qquad S_{sy} = 0.577\,S_{yt} \;\text{(von Mises)}
```

```math
\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2} \qquad \sigma_a = \frac{\sigma_{max} - \sigma_{min}}{2} \qquad S_e' \approx 0.5\,S_{ut}
```

```math
K_t = \frac{\sigma_{max}}{\sigma_{nominal}} \qquad q = \frac{K_f - 1}{K_t - 1}
```

```math
\text{Soderberg: } \frac{\sigma_m}{S_{yt}} + \frac{\sigma_a}{S_e} = \frac{1}{N} \qquad \text{Goodman: } \frac{\sigma_m}{S_{ut}} + \frac{\sigma_a}{S_e} = \frac{1}{N}
```

### Past exam questions with solutions

**Q1. DFCCIL Junior Manager Mechanical, 29 September 2021.** Which of the following defines the factor of safety for ductile materials? (a) ratio of ultimate stress to allowable stress (b) ratio of yield stress to working stress (c) ratio of safe working stress to ultimate stress (d) ratio of allowable stress to permissible stress

*Answer: (b).* A ductile part is no longer usable once it yields, so its factor of safety is based on the yield stress. Option (a) is the definition for brittle materials.

**Q2. NPCIL SA/ST Mechanical, 8 November 2019 (Shift 1).** The theory of failure applicable to brittle materials is: (a) maximum principal stress theory (b) maximum shear stress theory (c) maximum strain energy theory (d) maximum shear strain energy theory

*Answer: (a).* Brittle materials break in tension along the plane of the largest normal stress, so Rankine's theory predicts their failure well. The other three suit ductile materials.

**Q3. ISRO VSSC Technical Assistant Mechanical, 14 July 2021.** The maximum distortion energy theory of failure is suitable for predicting the failure of: (a) brittle materials (b) composite materials (c) plastics (d) ductile materials

*Answer: (d).* Ductile metals yield by shear, which is a change of shape. The distortion energy theory measures exactly that, so it matches tests on ductile materials best.

**Q4. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025).** A stress that varies sinusoidally with time from zero to a maximum value, and has the same values for its mean and its amplitude, is called: (a) fully reversed stress (b) fluctuating stress (c) repeated stress (d) both fluctuating stress and fully reversed stress

*Answer: (c).* From 0 to σmax, the mean is σmax/2 and the amplitude is also σmax/2. That is a repeated stress. A fully reversed stress has zero mean.

**Q5. SSC JE Mechanical, 4 December 2025 (Shift 2).** What is the ratio of the endurance limit in shear to the endurance limit in flexure for most ductile materials? (a) 0.25 (b) 0.55 (c) 0.40 (d) 0.70

*Answer: (b).* Tests give about 0.55. It is close to the 0.577 shear-to-tension ratio of the distortion energy theory, which is a good way to remember it.

**Q6. HPCL Engineer Mechanical, 12 August 2021 (Shift 2).** In the Soderberg method, a failure stress line connects the endurance limit for reversed loading with the: (a) variable stress (b) yield stress (c) shear stress (d) ultimate stress

*Answer: (b).* The Soderberg line runs from the endurance limit to the yield strength. Option (d) gives the Goodman line, which is less conservative.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The ratio of the maximum stress in a member at a geometrical discontinuity to the nominal stress at the same section, based on the net area, is called the: (a) notch sensitivity factor (b) theoretical or form stress concentration factor (c) surface finish factor (d) none of the above

*Answer: (b).* That ratio is Kt. It depends only on the shape of the discontinuity. Notch sensitivity tells how much of Kt actually shows up in fatigue.

**Q8. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Which shaft design change most effectively improves fatigue life without much increase in weight? (a) increasing shaft length (b) introducing sharp shoulders (c) providing generous fillet radii and a good surface finish (d) increasing keyway depth

*Answer: (c).* Fatigue cracks start at stress raisers and surface marks. Large fillet radii lower the stress concentration and a smooth finish removes crack starters, without adding material. Options (b) and (d) make things worse.

## 9. Riveted, welded and bolted joints

Joint questions are either definitions (caulking, throat, uniform-strength bolt) or one short numerical: the strength of a riveted joint per pitch, or its efficiency. A riveted joint can fail in three ways, and its strength is the weakest of them.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Permanent and temporary joints | Riveted and welded joints are permanent: they must be broken to take them apart. Bolted, screwed, keyed and cotter joints are temporary. |
| Rivet terms | Pitch p is the distance between rivet centres in a row; back pitch is between rows. Margin is from a hole centre to the plate edge, about 1.5d. The hole is slightly larger than the rivet (a 24 mm rivet goes in a 25 mm hole). Unwin's formula gives the rivet diameter d = 6√t, with t the plate thickness in mm. |
| Lap and butt joints | In a lap joint the plates overlap. In a butt joint they meet edge to edge under one or two cover plates (straps); with two straps each rivet is in double shear. Single, double and triple riveted means the number of rows. |
| Caulking and fullering | Hammering down the edge of the plate (caulking) or using a broad tool (fullering) to make a boiler or tank joint leak-proof. |
| Ways a riveted joint fails | The plate tears between the rivets: Pt = (p − d)tσt. The rivets shear: Ps = n(π/4)d²τ, doubled in double shear. The rivets or plate crush: Pc = n d t σc. The joint's strength is the least of these. |
| Efficiency | Strength of the joint ÷ strength of the solid plate over one pitch, p t σt. The tearing efficiency is (p − d)/p. |
| Welded joints | Lighter than riveted joints, leak-proof, and nearly as strong as the plate, so their efficiency is high. But they need skilled welders, leave residual stress and distortion, and are hard to inspect. |
| Fillet welds | The leg length (weld size) is s and the throat, the weakest section, is t = s cos 45° = 0.707s. A parallel (longitudinal) fillet weld fails in shear across the throat: P = 0.707 s l τ. A transverse fillet weld is designed for tension on the throat: P = 0.707 s l σt. |
| Butt welds | P = t l σt, where t is the plate thickness and l the weld length. |
| Bolted joints | A bolt is named by its nominal (major) diameter, but it breaks at its core (minor) diameter, about 0.84 times the nominal. A bolt of uniform strength has its shank turned down to the core diameter (or drilled hollow), so it stretches evenly and takes shock better. |

### Formulas to memorise

```math
P_t = (p - d)\,t\,\sigma_t \qquad P_s = n\,\frac{\pi}{4} d^2\,\tau \;(\times 2 \text{ in double shear}) \qquad P_c = n\,d\,t\,\sigma_c
```

```math
\eta = \frac{\text{least of } P_t,\ P_s,\ P_c}{p\,t\,\sigma_t} \qquad \eta_{tearing} = \frac{p - d}{p} \qquad d = 6\sqrt{t}
```

```math
t_{throat} = 0.707\,s \qquad P_{parallel} = 0.707\,s\,l\,\tau \qquad P_{transverse} = 0.707\,s\,l\,\sigma_t \qquad P_{butt} = t\,l\,\sigma_t
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 6 December 2025 (Shift 2).** What is the primary function of caulking in a riveted joint? (a) to make the joint leak-proof (b) to increase the tensile strength of the plate (c) to enhance the appearance of the joint (d) to reduce the weight of the joint

*Answer: (a).* The plate edge is hammered down with a caulking tool so that it presses tightly on the plate below. Boilers and pressure vessels need this to stop steam or water leaking.

**Q2. SSC JE Mechanical, 6 December 2025 (Shift 2).** According to Indian standards, the diameter of the rivet hole for a rivet of 24 mm diameter should be: (a) 24 mm (b) 25 mm (c) 26 mm (d) 27 mm

*Answer: (b).* The hole is made slightly larger so the hot rivet can be driven in; up to 24 mm the hole is about 1 mm bigger. The rivet then swells to fill the hole when it is hammered.

**Q3. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** The tearing efficiency of a riveted joint is 80 percent. The ratio of the rivet hole diameter to the pitch is: (a) 0.25 (b) 0.2 (c) 0.3 (d) 0.4

*Answer: (b).* Tearing efficiency = (p − d)/p = 1 − d/p = 0.8, so d/p = 0.2.

**Q4. SSC JE Mechanical, 5 December 2025 (Shift 2).** A double-riveted lap joint joins 15 mm plates with 25 mm rivets at a pitch of 75 mm. The ultimate stresses are 400 MPa in tension, 320 MPa in shear and 640 MPa in crushing. The minimum force per pitch that will rupture the joint is: (a) 400 kN (b) 300 kN (c) 500 kN (d) 600 kN

*Answer: (b).* Per pitch there are 2 rivets, each in single shear. Tearing: (75 − 25) × 15 × 400 = 300 kN. Shearing: 2 × (π/4) × 25² × 320 = 314 kN. Crushing: 2 × 25 × 15 × 640 = 480 kN. The least, 300 kN, breaks the joint.

**Q5. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** If a joint is required to be both lightweight and highly efficient, the preferred choice is a: (a) riveted joint (b) bolted joint (c) welded joint (d) screwed joint

*Answer: (c).* A weld adds no cover plates or rivet heads and drills no holes in the plate, so the joint is light and nearly as strong as the plate itself.

**Q6. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** In a longitudinal fillet-welded joint, the mode of failure is due to: (a) shear (b) tensile force (c) compressive force (d) eccentric load

*Answer: (a).* The load runs along the length of a parallel fillet weld, so the weld shears across its throat. That is why P = 0.707 s l τ.

**Q7. RPSC AEn Civil 2013 (Preliminary).** For a standard 45° fillet, the ratio of the size of fillet to the throat thickness is: (a) 1 : 1 (b) 1 : 1.414 (c) 1.414 : 1 (d) 2 : 1

*Answer: (c).* Throat = size × cos 45° = 0.707 × size, so size : throat = 1 : 0.707 = 1.414 : 1. Option (b) is the same ratio written backwards.

**Q8. RSSB JE Mechanical (Degree), 10 February 2025.** For bolts of uniform strength, the shank diameter is made equal to the: (a) nominal diameter of threads (b) major diameter of threads (c) pitch diameter of threads (d) minor diameter of threads

*Answer: (d).* The threaded part can only carry load on its core (minor) diameter. Turning the shank down to that diameter gives the same stress all along the bolt, so the whole bolt stretches and absorbs shock energy.

## 10. Shafts, keys and couplings

This sub-topic is mostly naming: which key or coupling suits which job. The one common numerical is a shaft diameter under bending and torsion together. The torsion formulas themselves are in the Engineering Mechanics & SOM guide.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Kinds of shaft | A transmission shaft carries power between a source and a machine. An axle carries load but transmits no torque. A spindle is a short rotating shaft, such as a lathe spindle. |
| Design for strength | Under pure torsion, τ = 16T/πd³. Under bending and torsion together, use the equivalent twisting moment Te = √(M² + T²) with the maximum shear stress theory (ductile shafts), or the equivalent bending moment Me = ½\[M + √(M² + T²)\] with the maximum normal stress theory (brittle shafts). |
| Design for rigidity | The twist θ = TL/GJ must stay small, often within 0.25° per metre of length for line shafts. |
| Hollow shafts | For the same weight a hollow shaft is stronger and stiffer than a solid one, because the material far from the centre carries most of the stress. |
| Sunk keys | Half in the shaft keyway and half in the hub. A rectangular sunk key has width w = d/4 and thickness t = 2w/3; a square key has t = w. A key fails by shearing across its width or by crushing on its side, so both are checked. |
| Other keys | A saddle key sits on the shaft with no keyway and holds by friction, so it carries only light torque. A Woodruff key is a semicircular disc in a curved keyway; it aligns itself and suits tapered shafts and small torque. A feather key is fixed to one part and lets the hub slide along the shaft, as in gearboxes and clutches. Splines are many keys cut into the shaft itself. |
| Key as the weak link | The key is made the weakest part of the shaft, hub and key assembly. It is cheap and easy to replace, so an overload breaks the key and saves the shaft and pulley. |
| Rigid couplings | For shafts that are exactly in line. A muff (sleeve, box) coupling is a hollow cylinder keyed over both shaft ends. A clamp coupling (split muff) is a muff in two halves bolted together. A flange coupling has a flange keyed on each shaft and the flanges bolted together; the protected type has a rim that covers the bolt heads. |
| Flexible couplings | They allow some misalignment and absorb shock. The bushed-pin type has rubber bushes on its pins. The Oldham coupling joins parallel shafts that are slightly offset sideways. The universal (Hooke's) coupling joins shafts whose axes meet at an angle. |
| Hooke's joint speed | Even if the driving shaft turns steadily, the driven shaft speeds up and slows down twice every turn. Its speed swings between ω cos α and ω/cos α, where α is the angle between the shafts. Using two joints, one at each end (as on a vehicle's propeller shaft), cancels the swing. |

### Formulas to memorise

```math
T_e = \sqrt{M^2 + T^2} = \frac{\pi}{16}\,d^3\,\tau_{max} \qquad M_e = \frac{1}{2}\left[M + \sqrt{M^2 + T^2}\right] = \frac{\pi}{32}\,d^3\,\sigma_{max}
```

```math
\text{Key: } T_{shear} = l\,w\,\tau\,\frac{d}{2} \qquad T_{crushing} = l\,\frac{t}{2}\,\sigma_c\,\frac{d}{2} \qquad \text{equally strong when } \frac{w}{t} = \frac{\sigma_c}{2\tau}
```

```math
w = \frac{d}{4} \qquad l = \frac{\pi d}{2} = 1.571\,d \text{ for a key as strong as the shaft}
```

```math
\text{Hooke's joint: } \frac{\omega_{driven}}{\omega_{driver}} = \frac{\cos\alpha}{1 - \cos^2\theta\,\sin^2\alpha} \qquad \text{equal speeds when } \tan\theta = \pm\sqrt{\cos\alpha}
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** The Woodruff key is used to transmit: (a) high values of torque (b) heavy duty load (c) tangential force (d) small values of torque

*Answer: (d).* The deep curved keyway weakens the shaft, so a Woodruff key is kept for light work such as machine tools and car parts, often on tapered shaft ends.

**Q2. ESE Mechanical 2013 (Paper 2).** In the assembly of a pulley, key and shaft: (a) the pulley is made the weakest (b) the key is made the weakest (c) the key is made the strongest (d) all three are designed for equal strength

*Answer: (b).* The key is cheap and easy to replace. If the pulley is overloaded, the key shears first and the costly shaft and pulley are saved.

**Q3. ESE Mechanical 2015, Paper 2.** If the permissible crushing stress for the material of a key is double the permissible shear stress, the sunk key will be equally strong in shearing and crushing if it is a: (a) rectangular key with width equal to half the thickness (b) rectangular key with width equal to twice the thickness (c) square key (d) rectangular key with width equal to one-fourth the thickness

*Answer: (c).* Shearing area = w l, crushing area = (t/2) l. Equal strength needs w l τ = (t/2) l σc = (t/2) l (2τ) = t l τ, so w = t: a square key.

**Q4. BHEL Engineer Trainee Mechanical, 24 August 2023.** A shaft carries a maximum torque of 12 kN m and a maximum bending moment of 16 kN m at a section. The elastic limit in simple tension is 160 MPa. By the maximum shear stress theory, the shaft diameter is (take (4/π)^(1/3) = 1.08): (a) 216 mm (b) 10.8 mm (c) 54 mm (d) 108 mm

*Answer: (d).* Te = √(16² + 12²) = 20 kN m. The theory allows τmax = 160/2 = 80 MPa, so 16Te/πd³ = 80 × 10⁶ and d³ = 32Te/(π × 160 × 10⁶) = (4/π) × 10⁻³ m³. Then d = 1.08 × 0.1 = 0.108 m = 108 mm.

**Q5. RRB ALP CBT 2 Fitter, 21 January 2019 (Shift 3).** Which of the following is another name for a clamp coupling? (a) slip type coupling (b) split muff coupling (c) fluid coupling (d) flange coupling

*Answer: (b).* A clamp coupling is a muff cut lengthwise into two halves, which are bolted together over the shaft ends. It can be fitted without moving the shafts apart.

**Q6. JKSSB JE Mechanical 2015.** Which one of the following is a flexible coupling? (a) sleeve coupling (b) flange coupling (c) bushed pin type coupling (d) split muff coupling

*Answer: (c).* Its pins run in rubber or leather bushes, which give a little and so absorb shock and small misalignment. The sleeve, flange and split muff couplings are all rigid.

**Q7. WBMSC Sub Assistant Engineer Mechanical, 5 June 2022.** Shafts having their axes parallel but not in alignment are coupled together using a: (a) flanged coupling (b) muff coupling (c) universal coupling (d) Oldham coupling

*Answer: (d).* The Oldham coupling's middle disc slides in the slots of both flanges, so it can carry torque between parallel shafts that are offset sideways. It is an inversion of the double slider-crank chain.

**Q8. UPSSSC JE Mechanical 2015 (Paper 2).** The type of coupling used to join two shafts whose axes are neither in the same straight line nor parallel, but intersect, is a: (a) flexible coupling (b) universal coupling (c) chain coupling (d) Oldham's coupling

*Answer: (b).* The universal (Hooke's) coupling joins shafts meeting at a small angle, as between a vehicle's gearbox and its rear axle.

**Q9. ESE Mechanical 2013 (Paper 2).** The driving and driven shafts of a Hooke's joint are inclined at an angle α. The driving shaft has turned through an angle θ. The two shafts have equal speeds when: (a) cos θ = sin α (b) sin θ = ±√(tan α) (c) tan θ = ±√(cos α) (d) cot θ = cos α

*Answer: (c).* The speed ratio is cos α/(1 − cos²θ sin²α). Setting it to 1 gives cos²θ = 1/(1 + cos α), which is the same as tan²θ = cos α. This happens four times in each turn.

## 11. Bearings

Bearing questions ask about bearing life (the cube law), the bearing characteristic number, the kinds of lubrication, and two short numericals: the length of a journal bearing and the friction torque on a pivot.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Sliding and rolling bearings | In a sliding-contact (plain) bearing the shaft slides on a film of oil. In a rolling-contact (anti-friction) bearing, balls or rollers roll between two races, so starting friction is low. |
| Journal and thrust bearings | A journal bearing carries a radial load; the journal is the part of the shaft inside it. A thrust bearing carries an axial load. A footstep (pivot) bearing holds the lower end of a vertical shaft; a collar bearing takes thrust on collars along the shaft. |
| Kinds of lubrication | Thick film (hydrodynamic): the turning journal drags oil into a wedge-shaped gap, building pressure that lifts the shaft clear of the bearing. Hydrostatic: oil is pumped in under pressure, so the film exists even at zero speed. Boundary (thin film): at starting, stopping or overload the film is too thin and the high spots of the surfaces touch. |
| Bearing characteristic number | ZN/p, where Z is the oil's absolute viscosity, N the speed and p the bearing pressure. As ZN/p rises from zero, friction first falls (thin film) to a minimum and then rises slowly (thick film). The value at the minimum is the bearing modulus K; bearings are run at about 3K so that a small drop in speed or rise in load does not break the film. |
| Sommerfeld number | S = (ZN/p)(r/c)², where c is the radial clearance. It is dimensionless and fixes how a hydrodynamic bearing behaves. |
| Bearing pressure | p = W/(l d), the load over the projected area. The length-to-diameter ratio l/d is usually 0.5 to 2. |
| Pivot and collar friction | Two assumptions are used. Uniform pressure suits a new bearing; uniform wear suits a worn-in one and gives less torque. Pivots and collars use the same formulas as single-plate clutches in sub-topic 5. |
| Kinds of rolling bearing | Deep-groove ball bearings have point contact: light loads, high speed. Cylindrical roller bearings have line contact, so they carry a larger radial load. Taper roller bearings take radial and thrust load together (car wheel hubs). Needle bearings fit a small space. Thrust ball bearings take axial load only. |
| Rating life | The dynamic load capacity C is the load a bearing can carry for one million revolutions with 90% of bearings surviving. At a load P, life L = (C/P)³ million revolutions for ball bearings and (C/P)^(10/3) for roller bearings. So halving the load on a ball bearing makes it last 8 times longer. |

### Formulas to memorise

```math
L_{10} = \left(\frac{C}{P}\right)^{3} \times 10^6 \text{ rev (ball)} \qquad L_{10} = \left(\frac{C}{P}\right)^{10/3} \times 10^6 \text{ rev (roller)} \qquad L_h = \frac{L_{10}}{60\,N}
```

```math
p = \frac{W}{l\,d} \qquad \text{characteristic number} = \frac{Z N}{p} \qquad S = \frac{Z N}{p}\left(\frac{r}{c}\right)^2
```

```math
\text{Flat pivot: } T = \frac{2}{3}\,\mu W R \text{ (uniform pressure)} \qquad T = \frac{1}{2}\,\mu W R \text{ (uniform wear)} \qquad \text{conical pivot: multiply by } \operatorname{cosec}\alpha
```

```math
\text{Collar: } T = \frac{2}{3}\,\mu W\,\frac{R_1^3 - R_2^3}{R_1^2 - R_2^2} \text{ (uniform pressure)} \qquad T = \frac{1}{2}\,\mu W (R_1 + R_2) \text{ (uniform wear)} \qquad P = \frac{2\pi N T}{60}
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A designer replaces a ball bearing with a roller bearing of similar size. The most likely reason is: (a) to increase the operating speed (b) to increase the radial load carrying capacity (c) to increase the axial load carrying capacity (d) none of the above

*Answer: (b).* A roller touches the races along a line instead of at a point, so it spreads the load and carries more radial load. Ball bearings are the better choice for higher speed.

**Q2. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** The life of a ball bearing at a load of 10 kN is 8000 hours. If the load is increased to 20 kN with all other conditions the same, its life in hours is: (a) 1000 (b) 2000 (c) 500 (d) 4000

*Answer: (a).* Life varies as 1/P³. Doubling the load divides the life by 2³ = 8, so 8000/8 = 1000 hours.

**Q3. SSC JE Mechanical, 5 December 2025 (Shift 2).** With μ the viscosity of the lubricant, N the speed in rpm and P the bearing pressure, the bearing characteristic number is given by: (a) 0.5μN/P (b) μN/P (c) 2μN/P (d) μ²N/P

*Answer: (b).* The bearing characteristic number is simply viscosity × speed ÷ pressure. A higher value means a thicker oil film.

**Q4. UPPSC AE Mechanical 2024 (Mains Paper I, held 29 September 2025).** A boundary lubricated bearing is a: (a) hydrostatic bearing (b) thin film bearing (c) thick film bearing (d) hydrodynamic bearing

*Answer: (b).* In boundary lubrication the oil film is only a few molecules thick, so the high spots of the surfaces touch. Hydrodynamic and hydrostatic bearings both run on a thick film.

**Q5. SSC JE Mechanical, 6 December 2025 (Shift 2).** A journal bearing supports a load of 150 kN. The journal diameter is 300 mm, it runs at 1800 rpm, and the allowable bearing pressure is 1.6 N/mm². The length of the bearing is: (a) 112.5 mm (b) 212.5 mm (c) 312.5 mm (d) 412.5 mm

*Answer: (c).* p = W/(l d), so l = W/(p d) = 150 000/(1.6 × 300) = 312.5 mm. The speed is not needed.

**Q6. SSC JE Mechanical, 5 December 2025 (Shift 2).** A footstep bearing of radius 0.3 m supports a vertical shaft rotating at 1200 rpm under an axial load of 3000 N. Assuming uniform pressure and μ = 0.2, the power lost in friction is: (a) 14.072 kW (b) 15.072 kW (c) 16.072 kW (d) 17.072 kW

*Answer: (b).* T = (2/3) μ W R = (2/3) × 0.2 × 3000 × 0.3 = 120 N m. P = 2πNT/60 = 2 × 3.14 × 1200 × 120/60 = 15 072 W = 15.072 kW (using π = 3.14).

**Q7. SSC JE Mechanical, 5 December 2025 (Shift 2).** The frictional torque transmitted by a conical pivot bearing, assuming uniform wear, is (μ = coefficient of friction, W = axial load, R = bearing radius, α = semi-angle of the cone): (a) μWR cosec α (b) (3/2) μWR cosec α (c) (1/2) μWR cosec α (d) (1/4) μWR cosec α

*Answer: (c).* It is the flat-pivot result ½ μWR multiplied by cosec α, because the normal force on a cone face is larger than the axial load. Under uniform pressure it would be (2/3) μWR cosec α.

## Sources

Each question's exam and date come from the booklet or page it was taken from; the solutions are written fresh. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. Below they are listed by paper and by the question number in that paper. The other questions come from Testbook solution pages, which name the paper each question appeared in. Where JE papers had no published question on a point, the question comes from another technical exam at the same level (ESE, UPPSC, RSSB, HPCL, BHEL and others). A few slips in the source wording were corrected, as listed at the end. Few RRB JE 2025–26 questions are published one by one, so also solve the full official papers.

- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 065/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- Sub-topic 1: [cam and follower pair](https://testbook.com/question-answer/a-cam-and-follower-combination-belongs-to-the-cate--637e7993cda399914d3d53b2), Kerala PSC 104/2025 Q63 (structure), [Gruebler's equation](https://testbook.com/question-answer/a-planar-mechanism-has-6-links-with-6-lower-pairs--6323556ca6506d6c4771a4b6), [Grashof's law](https://testbook.com/question-answer/in-a-four-bar-chain-the-shortest-link-measures-25--684a37f8ad58684325cba5ed), Kerala PSC 050/2023 Q63 (Oldham's coupling), [quick return ratio](https://testbook.com/question-answer/for-quick-return-mechanism-advance-to-return-time--60afd169fb60fe238fbf193e), [number of instantaneous centres](https://testbook.com/question-answer/the-instantaneous-centre-for-an-eight-link-mechani--693c7bd885159237f11540cb), [Coriolis component](https://testbook.com/question-answer/the-coriolis-component-of-acceleration-arises-when--69aee71e0c88b267e7dbeb66)
- Sub-topic 2: [size of a cam](https://testbook.com/question-answer/the-size-of-a-cam-depends-on--6946c9c58839b00f5ac2d2af), [throw of a cam](https://testbook.com/question-answer/the-throw-of-a-cam-is-the-maximum-distance-of-the--58cfb7d3995a2d1ac99d420d), [pressure angle and base circle](https://testbook.com/question-answer/the-pressure-angle-and-the-base-circle-in-a-cam-sh--5f6b3d0895997d6e424e3790), [follower offset](https://testbook.com/question-answer/offset-is-provided-in-a-cam-follower-mechanism-to--6946c9c7e082b83edf288973), [SHM acceleration](https://testbook.com/question-answer/when-a-follower-moves-with-simple-harmonic-motion--679e0b08bd1cd7fdafc48128), [cycloidal motion](https://testbook.com/question-answer/for-high-speed-engines-the-cam-follower-should-mo--63c9840ed8dd4c014d5958f0)
- Sub-topic 3: [module](https://testbook.com/question-answer/the-ratio-of-diameter-of-gear-to-number-of-teeth-i--6946c9c49eb6f5b685a94ab8), [pressure angle](https://testbook.com/question-answer/what-is-the-value-of-pressure-angle-generally-used--6a757a9ec10dfd3c9a9d8678), Kerala PSC 104/2025 Q76 (base circle), [cycloidal teeth](https://testbook.com/question-answer/in-a-cycloidal-gear-tooth-profile-the-flanks-and--6946cb5a8fab3f1eae9d395f), Kerala PSC 68/2026 Q63 (interference), [mitre gears](https://testbook.com/question-answer/when-two-equal-gears-having-equal-teeth-connect--6946c9c424399bda213495c0), [hypoid gears](https://testbook.com/question-answer/which-type-of-gears-are-used-for-shaft-axes-having--6a757bed3117434b3282a1d9), [epicyclic train](https://testbook.com/question-answer/which-type-of-gear-train-has-two-degrees-of-freedo--6946c9c78839b00f5ac2d354)
- Sub-topic 4: [slip and creep](https://testbook.com/question-answer/slip-and-creep-are-related-to-the-operation-ofnb--69acba12ebcbe59b62d0ec0b), Kerala PSC 68/2026 Q65 (flat and V-belts), [open belt length](https://testbook.com/question-answer/what-is-the-total-length-l-of-a-belt-in-an-open-be--6a19792dc5279bb7a061dbbd), [belt power](https://testbook.com/question-answer/calculate-the-power-delivered-by-a-belt-drive-oper--6a19792d4bb3943deef60d66), [centrifugal tension](https://testbook.com/question-answer/a-v-belt-has-a-mass-per-unit-length-of-0-10-kgm--6946c9a71eabdba50a2ef4ab), [maximum power tension](https://testbook.com/question-answer/in-a-flat-belt-drive-the-belt-is-subjected-to-a-m--6946c9a7b57af4bb273f1b47), [maximum power speed](https://testbook.com/question-answer/for-maximum-power-transmission-in-a-belt-drive-wh--6946cb3c477fa6aef88e72ed), Kerala PSC 050/2023 Q76 (initial tension)
- Sub-topic 5: [initial condition in a clutch](https://testbook.com/question-answer/what-is-the-initial-condition-in-clutches--6946cb3d3bd13684a5aadb2f), [single plate clutch force](https://testbook.com/question-answer/a-single-plate-clutch-is-transmitting-20-kw-of-pow--6946cb3c43d82270c0cf48d7), Kerala PSC 68/2026 Q66 (cone clutch), [brakes in trains](https://testbook.com/question-answer/which-of-the-following-brakes-is-commonly-used-in--6a757efcda61c091af41770d), [band brake torque](https://testbook.com/question-answer/in-a-simple-band-brake-tension-on-tight-side-is-3--62c5623ea11f89e39a28750e), Kerala PSC 68/2026 Q75 (repeated braking), [Prony brake](https://testbook.com/question-answer/which-of-the-following-is-an-absorption-type-dynam--5e412330f60d5d7ef64b841d)
- Sub-topic 6: [coefficient of steadiness](https://testbook.com/question-answer/the-coefficient-of-steadiness-of-a-flywheel-is-def--68d44b5d44179aece4afa035), [flywheel speed fluctuation](https://testbook.com/question-answer/if-k-is-the-coefficient-of-fluctuation-of-speed-of--6a6b37d50c329145583e659e), Kerala PSC 68/2026 Q67 (flywheel energy), [Watt governor height](https://testbook.com/question-answer/the-height-of-a-watt-governor-is-given-by-where-n--6946cb5a896dfb75f9cd6ae0), Kerala PSC 050/2023 Q75 (governor speed), [governor without a spring](https://testbook.com/question-answer/which-one-of-the-following-governors-is-not-contro--6946c9c51eabdba50a2ef6e5), [isochronous governor](https://testbook.com/question-answer/the-sensitivity-of-an-isochronous-governor-is--638881665a4b0f905ba300ae), [hunting](https://testbook.com/question-answer/a-governor-is-said-to-be-hunting-if-the-speed-of-t--5eb4f11df60d5d187fa6382b)
- Sub-topic 7: [dynamic balancing](https://testbook.com/question-answer/what-is-the-condition-for-dynamic-balancing-of-rev--5f4fafe58882b30d15e531cd), Kerala PSC 104/2025 Q68 (primary forces), [natural frequency on the moon](https://testbook.com/question-answer/the-natural-frequency-of-a-spring-mass-system-on-e--56580d11995a2d13ea3f090f), Kerala PSC 68/2026 Q70 (stiffness ratio), Kerala PSC 104/2025 Q70 (field gun), [vibration isolation](https://testbook.com/question-answer/for-effective-vibration-isolation-the-frequency-r--607ef906cc970fcb71e54cf1), [whirling speed](https://testbook.com/question-answer/whirling-speed-of-a-shaft-coincides-with-the-natur--680b68a2bcf7db06a1c6cebf)
- Sub-topic 8: [factor of safety](https://testbook.com/question-answer/which-of-the-following-defines-the-factor-of-safet--6165498a269498d91c3714ff), [theory for brittle materials](https://testbook.com/question-answer/the-theory-of-failure-applicable-to-brittle-materi--5fbe984c6e7e11ed74e06f68), [distortion energy theory](https://testbook.com/question-answer/the-maximum-distortion-energy-theory-of-failure-is--64627a4a4ad8796c7fbc4463), [repeated stress](https://testbook.com/question-answer/a-stress-that-varies-in-sinusoidal-manner-with-res--6a6b37dce6254628cc5a08c6), [endurance limit in shear](https://testbook.com/question-answer/what-is-the-ratio-of-the-endurance-limit-in-shear--6946c8a1d13e58c3a7017576), [Soderberg line](https://testbook.com/question-answer/in-the-soderberg-method-a-failure-stress-line-con--6120f8990494accb097241f1), Kerala PSC 68/2026 Q76 (stress concentration factor), Kerala PSC 68/2026 Q73 (shaft fatigue life)
- Sub-topic 9: [caulking](https://testbook.com/question-answer/what-is-the-primary-function-of-caulking-in-a-rive--6946cb3bd8ebbaaf77ccf409), [rivet hole](https://testbook.com/question-answer/according-to-indian-standards-what-should-be-the--6946cb3d2a3eb28cbd2921ab), Kerala PSC 050/2023 Q70 (tearing efficiency), [riveted lap joint](https://testbook.com/question-answer/a-double-riveted-lap-joint-is-made-between-15-t--6946c9a818622d1249f029ac), Kerala PSC 68/2026 Q72 (welded joint), Kerala PSC 65/2026 Q77 (fillet weld), [fillet size and throat](https://testbook.com/question-answer/for-a-standard-45-fillet-the-ratio-of-size-o--66b9e641d440e9f3fa4de850), [bolt of uniform strength](https://testbook.com/question-answer/for-bolts-of-uniform-strength-the-shank-diameter--6a757eedde58a9ca97556c23)
- Sub-topic 10: Kerala PSC 65/2026 Q80 (Woodruff key), [weakest member](https://testbook.com/question-answer/in-the-assembly-of-pulley-key-and-shaft--60d25cfd1c076ebfb396efb1), [square key](https://testbook.com/question-answer/if-the-permissible-crushing-stress-for-the-materia--5ea02262f60d5d7ffaca2bee), [shaft diameter](https://testbook.com/question-answer/a-shaft-is-subjected-to-a-maximum-torque-of-12-kn--679e2e09bd1cd7fdafc58198), [clamp coupling](https://testbook.com/question-answer/which-of-the-following-is-another-name-for--5f584d05b3b3b2b918eed3c6), [flexible coupling](https://testbook.com/question-answer/which-one-of-the-following-is-a-flexible-coupling--60255c1eb41f5c0b001fc6a6), [Oldham coupling](https://testbook.com/question-answer/shafts-having-their-axes-parallel-but-not-in-align--68c03eb5049d49af69e9f762), [universal coupling](https://testbook.com/question-answer/the-type-of-coupling-used-to-join-two-shafts-whose--61386107227853594a36357b), [Hooke's joint speeds](https://testbook.com/question-answer/the-driving-and-driven-shafts-connected-by-a-hooke--60751d8a41d8c4aa57c2ca1f)
- Sub-topic 11: Kerala PSC 68/2026 Q74 (roller bearing), Kerala PSC 050/2023 Q68 (bearing life), [bearing characteristic number](https://testbook.com/question-answer/the-bearing-characteristic-number-is-given-by--6946c9a9dad5df3d6f0ac293), [boundary lubrication](https://testbook.com/question-answer/boundary-lubricated-bearing-is--6a6b37d9affe6f092253b700), [journal bearing length](https://testbook.com/question-answer/a-journal-bearing-supports-a-load-of-150-kn-fr--6946cb3ca059c3d3933660b3), [footstep bearing](https://testbook.com/question-answer/a-footstep-bearing-with-a-radius-of-0-3-m-supp--6946c9a9d23147c2e27ecf52), [conical pivot](https://testbook.com/question-answer/what-is-the-expression-for-the-frictional-torque-t--6946c9a86acde68c6196acd9)
- Wording changes: in sub-topic 3, Q1 says "diametral pitch" where the page says "diametric pitch". In sub-topic 6, Q5's option (d) is kept as printed in the booklet. In sub-topic 10, Q8 reads the page's "interest" as "intersect". In sub-topic 11, Q3's option (d), printed "μaN/P" on the page, is written μ²N/P, and Q7 takes α as the semi-angle of the cone, which the page does not define.
