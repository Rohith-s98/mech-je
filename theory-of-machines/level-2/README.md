# Theory of Machines and Design Level 2: Theory Deep Dive

Nov 18, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the formula lists and past questions are.

Conventions used throughout:

- N is a speed in rpm and ω the same speed in rad/s, with ω = 2πN/60. Power P = Tω = 2πNT/60 watts, with the torque T in N m.
- Forces are in N or kN, lengths in mm and stress in MPa, where 1 MPa = 1 N/mm².
- μ is always the coefficient of friction. In belt formulas the angle of contact θ is in radians; other angles are in degrees.
- g = 9.81 m/s².
- Topics 1 to 7 are Theory of Machines (how mechanisms move and what forces they carry). Topics 8 to 11 are Machine Design (how big to make each part so it does not fail).

## 1. Links, pairs, mechanisms and degrees of freedom

A mechanism is a set of rigid links joined so that one input decides where every part is. Everything else in this topic (pairs, Grübler's count, Grashof's law, inversions, instantaneous centres) is a way of checking or using that one fact. Exam setters twist the kind of pair, the degrees-of-freedom count, which link is fixed in each inversion, and the Coriolis component.

### The picture

Watch a cyclist's leg from the side. The hip is fixed to the saddle and the crank axle is fixed to the frame, so the line between them does not move. The thigh, the shin and the crank are three more links, joined at the hip, knee, ankle-pedal and crank axle. That is a four-bar chain.

Once you know the angle of the crank, the position of the knee and the foot is decided. One input fixes everything: the leg has one degree of freedom. If the cyclist could also slide the saddle while pedalling, a second input would be needed, and the leg would have two degrees of freedom.

Every joint in a machine is chosen to allow some motions and forbid others, exactly like a knee that bends but does not twist. Kinematics is the study of what those joints allow.

### Twisted points

**A pair is lower or higher by its contact, not its importance.** A lower pair touches over a surface: a pin in a hole (turning pair), a piston in a cylinder (sliding pair), a nut on a screw (screw pair), a ball in a socket (spherical pair). A higher pair touches at a point or along a line: a cam and its follower, two gear teeth, a ball in a ball bearing, a wheel on a rail. Surface contact spreads the load, so lower pairs wear less. A belt on a pulley is usually called a wrapping pair and grouped with the higher pairs.

**Three kinds of constrained motion.** In complete constraint the motion can go only one way whatever the force: a square bar in a square hole can only slide. In incomplete constraint the motion can go more than one way: a round shaft in a round hole can both turn and slide. In successful constraint the motion could go more than one way, but something outside keeps it to one: a vertical shaft in a footstep bearing is kept down by its own weight, and a cam follower is kept on the cam by a spring.

**Grübler's equation counts freedoms and subtracts what the joints take away.** A free link in a plane has 3 freedoms: two slides and one turn. Fix one of n links and 3(n − 1) freedoms remain. Each lower pair (j) removes 2 of them and each higher pair (h) removes 1.

```math
F = 3(n - 1) - 2j - h
```

Counting j is where marks are lost. A pin where three links meet is 2 joints, not 1: in general, m links at one pin make (m − 1) joints. A slider in a guide is one lower pair. A wheel rolling without slipping is also one lower pair, because rolling ties the turning to the moving and leaves one freedom; if it can slip, it is a higher pair.

**What the answer means.** F = 1: one input drives it, the normal machine. F = 0: a structure, such as a triangle of three links. F = 2: two inputs are needed, such as a five-bar chain or a differential. F negative: a structure with extra members (statically indeterminate).

**A passive freedom does not count for the output.** A roller follower gives F = 2 by the formula, but the extra freedom is only the roller spinning on its own pin. It changes nothing at the output, so the mechanism still behaves as F = 1. Setters use this to make a correct count look wrong.

**Grashof's law decides whether any link can turn all the way round.** Call the shortest link s, the longest l and the other two p and q. If s + l ≤ p + q, the shortest link can make full turns relative to its neighbours. What you get then depends on which link is fixed:

| Link fixed | Result |
| --- | --- |
| A link next to the shortest | Crank-rocker: the shortest link turns fully, the opposite link rocks |
| The shortest link | Double crank (drag link): both links next to it turn fully |
| The link opposite the shortest | Double rocker: the shortest link (the coupler) turns, but both side links only rock |

If s + l > p + q, no link turns fully, and every inversion is a double rocker. If s + l = p + q exactly, the chain can fold flat with all four links in a line; at that point it may go either way (a change-point mechanism).

**An inversion fixes a different link of the same chain.** The links and their joints stay the same, so the relative motions between links stay the same, but what you see from the ground changes completely. Number the links of the slider-crank chain 1 = frame, 2 = crank, 3 = connecting rod, 4 = slider:

| Link fixed | Mechanisms |
| --- | --- |
| 1, the frame (cylinder) | Reciprocating engine and compressor |
| 2, the crank | Whitworth quick return; rotary (Gnome) aircraft engine |
| 3, the connecting rod | Crank and slotted lever quick return; oscillating cylinder engine |
| 4, the slider | Pendulum pump (bull engine); hand pump |

The double slider-crank chain (two sliding pairs, two turning pairs) gives the elliptical trammel (frame with the two slots fixed), the Scotch yoke (one slider fixed) and Oldham's coupling (the link joining the two sliders fixed). On an elliptical trammel every point of the bar traces an ellipse, except its midpoint, which traces a circle.

**Quick return works because the crank turns steadily but sweeps unequal angles.** In a shaper's crank and slotted lever, the crank turns at constant speed. The slotted lever swings one way while the crank sweeps the large angle β (cutting stroke) and back while it sweeps the small angle α (return stroke). Time is in proportion to angle, so the return is quicker.

```math
\frac{\text{cutting time}}{\text{return time}} = \frac{\beta}{\alpha} \qquad \cos\frac{\alpha}{2} = \frac{r}{d} \qquad \text{stroke} = 2L\,\frac{r}{d}
```

Here r is the crank radius, d the distance between the fixed centres and L the length of the slotted lever. The ratio is always more than 1: a ratio of 1 would mean no quick return at all.

**An instantaneous centre is a hinge that exists for one instant.** At any moment a moving link turns about some point, as if pinned there. A pin joint is a permanent instantaneous centre of its two links. A slider's centre lies at infinity, at right angles to its slide, because sliding is turning about a very distant point. A wheel rolling without slip turns about its point of contact. Every pair of links has one, so n links have n(n − 1)/2.

Kennedy's theorem finds the hidden ones: for any three links, their three instantaneous centres lie on one straight line. Once you have a link's centre I, every point on it moves at right angles to the line joining it to I, with speed ω × (distance from I).

**Relative velocity is always at right angles to the link.** If A and B are two points on one rigid link, B can only move around A, never towards or away from it, because the link does not stretch. So vBA = ω × AB, at right angles to AB. Relative acceleration has two parts: ω² × AB pointing from B towards A (the centripetal part) and α × AB at right angles to AB (from the change in speed of turning).

**The piston's motion is not pure simple harmonic.** With crank radius r, connecting rod length l, n = l/r and crank angle θ from inner dead centre:

```math
v_P = \omega r\left(\sin\theta + \frac{\sin 2\theta}{2n}\right) \qquad a_P = \omega^2 r\left(\cos\theta + \frac{\cos 2\theta}{n}\right)
```

The second terms come from the angle of the connecting rod. As the rod gets longer (n large), they shrink and the motion gets closer to simple harmonic. These two acceleration terms are the primary and secondary forces of Topic 7.

**The Coriolis component appears only when something slides along a turning link.** Walk outwards along a turning merry-go-round: you feel shoved sideways, because the outer parts move faster round the circle and you must be speeded up as you go. That extra acceleration is 2vω, where v is your sliding speed along the link and ω the link's angular velocity. Its direction is v turned through 90° in the direction of ω.

It appears in the crank and slotted lever and in the Whitworth mechanism, where a block slides along a swinging link. It does not appear in an ordinary engine, because the piston slides along a cylinder that is fixed, not turning.

**Straight-line mechanisms come in exact and approximate kinds.** Peaucellier's (8 links) and Hart's (6 links) trace an exact straight line using only turning pairs. Watt's, Grasshopper and Tchebicheff's trace a line that is straight only over part of the travel. A pantograph is a parallelogram linkage that copies a path to a larger or smaller scale.

### Worked numbers

**Degrees of freedom.** Watt's six-bar chain has n = 6 links and j = 7 turning pairs, no higher pairs: F = 3(6 − 1) − 2 × 7 = 15 − 14 = 1. A five-bar chain has n = 5, j = 5: F = 12 − 10 = 2, so it needs two inputs.

**Grashof.** A four-bar chain has links of 40, 70, 90 and 100 mm. s + l = 40 + 100 = 140 and p + q = 70 + 90 = 160. Since 140 < 160, it is a Grashof chain. Say the links run round the chain in the order 40, 70, 100, 90. Fix the 70 or the 90 mm link (each is next to the 40): crank-rocker. Fix the 40 mm link: double crank. Fix the 100 mm link opposite it: double rocker.

**Quick return.** A crank and slotted lever has a 120 mm crank, 240 mm between the fixed centres and a 450 mm slotted lever.

- cos(α/2) = 120/240 = 0.5, so α/2 = 60° and the return angle α = 120°.
- The cutting angle β = 360° − 120° = 240°, so the ratio is 240/120 = 2.
- Stroke = 2 × 450 × 120/240 = 450 mm.

**Piston velocity and acceleration.** Crank 100 mm, connecting rod 400 mm (n = 4), 600 rpm, crank at 30° from inner dead centre.

- ω = 2π × 600/60 = 62.83 rad/s, so ωr = 6.283 m/s and ω²r = 394.8 m/s².
- vP = 6.283 × (sin 30° + sin 60°/8) = 6.283 × (0.5 + 0.108) = 3.82 m/s.
- aP = 394.8 × (cos 30° + cos 60°/4) = 394.8 × (0.866 + 0.125) = 391 m/s².

**Coriolis.** A block slides at 2 m/s along a link turning at 10 rad/s: 2vω = 2 × 2 × 10 = 40 m/s², at right angles to the link.

**Instantaneous centres.** A six-link mechanism has 6 × 5/2 = 15 instantaneous centres; a four-bar chain has 4 × 3/2 = 6.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A ball bearing has surface contact, so it is a lower pair. | The balls touch the races at points: a higher pair. A ball-and-socket joint is the lower (spherical) pair. |
| A pin where three links meet is one joint. | It is two joints. m links at one pin count as m − 1. |
| F = 2 always means two inputs are needed. | Not if one freedom is passive, such as a roller spinning on its pin. |
| Fixing the shortest link of a Grashof chain gives a crank-rocker. | It gives a double crank. A crank-rocker comes from fixing a link next to the shortest. |
| A non-Grashof chain can be made to give a crank by fixing the right link. | If s + l > p + q, every inversion is a double rocker. |
| Whitworth comes from fixing the connecting rod. | Whitworth fixes the crank. Fixing the connecting rod gives the crank and slotted lever. |
| The quick return ratio is return time ÷ cutting time. | It is cutting time ÷ return time, always more than 1. |
| The Coriolis component is vω. | It is 2vω, and it exists only when a point slides along a link that is itself turning. |
| An engine piston has a Coriolis component. | The cylinder does not turn, so there is none. |
| A slider's instantaneous centre is at the slider. | It is at infinity, at right angles to the direction of sliding. |
| The piston moves in pure simple harmonic motion. | Only with an infinitely long connecting rod. The sin 2θ/2n term is the difference. |

## 2. Cams and followers

A cam turns steady rotation into any up-and-down motion you can draw. The shape you draw decides the follower's speed and acceleration, and at high speed the acceleration is what matters, because it sets the forces and the noise. Exam setters twist the cam circles, the pressure angle, and which follower motion gives which peak velocity and acceleration.

### The picture

Unroll the edge of a disc cam and lay it flat. It becomes a hill on a road, and the follower is a car driving over it. The shape of the hill is the displacement diagram: height of the follower against angle turned by the cam.

Drive slowly and you barely notice the hill. Drive twice as fast over the same hill and every bump throws you four times as hard, because acceleration grows with the square of speed. A hill with a sharp corner at the bottom gives a jolt at any speed. Cam design is the art of shaping the hill so that the jolts stay small at the speed the machine runs.

### Twisted points

**Each follower type trades contact against wear.** A knife-edge follower touches at a point, so it wears fast and is rarely used. A roller follower rolls instead of rubbing, so it wears least and is the most common. A flat-faced (mushroom) follower presses with a flat face at right angles to its motion; the cam pushes it straight along its line, which suits engine valves where space is small. A flat-faced follower needs a cam profile with no hollow (concave) parts, because the flat face cannot reach into a hollow. Its axis is often set slightly off the cam's centre line so that it spins and wears evenly.

**The cam circles are measured to different points.** The base circle is the smallest circle touching the cam profile itself. The trace point is the knife-edge tip or the roller's centre, and the path it traces is the pitch curve. The prime circle is the smallest circle touching the pitch curve, so its radius is the base circle radius plus the roller radius. For a knife-edge follower the two circles are the same. The pitch point is the point on the pitch curve where the pressure angle is greatest, and the pitch circle passes through it.

**The pressure angle decides how much of the push is wasted.** The cam can only push along the common normal at the point of contact. If that normal leans at an angle φ to the follower's line of motion, only F cos φ lifts the follower. The rest, F sin φ, pushes the follower sideways against its guide. That side thrust causes friction, and if φ is too large the follower jams in its guide. Keep φ below about 30° for a reciprocating follower.

The cure is a larger base circle. The same lift spread round a bigger circle gives a gentler slope, so the pressure angle falls, but the cam gets bigger. That is why the base circle sets the size of the cam. Offsetting the follower to one side also lowers the pressure angle on the outstroke, though it raises it on the return.

**A cycle has four parts.** Outstroke (rise), dwell (the cam turns but the follower stays still), return stroke (fall), and another dwell. The cam angle for each part is chosen by the designer; they need not be equal.

**Four standard motions, judged by what happens at the ends of each stroke.** Let S be the lift, θo the cam angle for the outstroke in radians and ω the cam's angular speed, so the outstroke takes θo/ω seconds.

- **Uniform velocity.** The displacement is a straight line. The follower jumps from rest to full speed instantly at the start, so the acceleration there is infinite. In practice the ends are rounded off, which changes the motion.
- **Simple harmonic motion.** The follower moves like the shadow of a point going round a circle of diameter S. The acceleration is greatest at the ends of the stroke and zero at mid-stroke. It is finite, but it jumps from zero (during the dwell) to its peak at once, so there is still a jolt.
- **Uniform acceleration and retardation.** The follower speeds up at a constant rate for the first half of the stroke and slows down at the same rate for the second half. The displacement curve is two parabolas. For a given lift and time, this motion has the lowest possible peak acceleration.
- **Cycloidal.** The displacement is traced like a cycloid. The acceleration rises from zero, peaks and returns to zero at each end, so there is no jump anywhere. This makes it the best choice for high speeds, even though its peak acceleration is the highest of the three.

**Where the SHM formulas come from.** In SHM the displacement is s = (S/2)(1 − cos(πθ/θo)), so half a cosine wave fills the outstroke. Differentiating with respect to time (dθ/dt = ω) and taking the peak values:

```math
v_{max} = \frac{S}{2}\cdot\frac{\pi\omega}{\theta_o} = \frac{\pi\omega S}{2\theta_o} \qquad a_{max} = \frac{S}{2}\left(\frac{\pi\omega}{\theta_o}\right)^2 = \frac{\pi^2\omega^2 S}{2\theta_o^2}
```

**Where the uniform acceleration formulas come from.** The follower covers S/2 in half the outstroke time, t = θo/(2ω), starting from rest. From S/2 = ½ a t², a = S/t² = 4ω²S/θo². The peak velocity, at mid-stroke, is a × t = 2ωS/θo.

**The three motions side by side.** Every peak value has the form (number) × ωS/θo for velocity and (number) × ω²S/θo² for acceleration, so only the numbers differ:

| Motion | Peak velocity factor | Peak acceleration factor | At the ends of the stroke |
| --- | --- | --- | --- |
| Simple harmonic | π/2 = 1.57 | π²/2 = 4.93 | Acceleration jumps from 0 to its peak |
| Uniform acceleration and retardation | 2 | 4 (the lowest) | Acceleration jumps at the ends and reverses at mid-stroke |
| Cycloidal | 2 | 2π = 6.28 (the highest) | Acceleration is zero: no jump |

**Acceleration sets the spring.** During the second half of the rise, the follower is slowing down. The cam cannot pull it down, so the spring must supply a force of at least m × a. If the spring is too weak at that speed, the follower leaves the cam surface and hits it again later: this is called jump. Doubling the cam speed quadruples the acceleration, so a spring that was enough at low speed may fail at high speed.

### Worked numbers

A follower rises S = 40 mm while the cam turns 120°, at 300 rpm.

- θo = 120° = 2π/3 = 2.094 rad and ω = 2π × 300/60 = 31.42 rad/s, so ω² = 987 rad²/s².
- ωS/θo = 31.42 × 0.04/2.094 = 0.600 m/s and ω²S/θo² = 987 × 0.04/4.386 = 9.00 m/s².

Multiply by the factors from the table:

| Motion | Peak velocity | Peak acceleration |
| --- | --- | --- |
| Simple harmonic | 1.57 × 0.600 = 0.94 m/s | 4.93 × 9.00 = 44.4 m/s² |
| Uniform acceleration and retardation | 2 × 0.600 = 1.20 m/s | 4 × 9.00 = 36.0 m/s² |
| Cycloidal | 2 × 0.600 = 1.20 m/s | 6.28 × 9.00 = 56.5 m/s² |

**Spring force.** If the follower and its moving parts weigh 0.5 kg and move with SHM, the spring must push down with at least 0.5 × 44.4 = 22.2 N at the top of the stroke, on top of any working load. At 600 rpm the acceleration becomes 4 × 44.4 = 178 m/s² and the spring force needed rises to 89 N.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The base circle and the prime circle are the same. | Only for a knife-edge follower. With a roller, the prime circle radius = base circle radius + roller radius. |
| Throw is measured from the cam centre. | Throw is the greatest distance of the follower from the base circle. |
| A large pressure angle is fine if the spring is strong. | A large pressure angle gives large side thrust and can jam the follower. Keep it below about 30°. |
| A smaller cam is always better. | A smaller base circle raises the pressure angle. The base circle size is a trade-off between size and side thrust. |
| Offset is provided to increase the lift. | It reduces side thrust (pressure angle) on the outstroke. |
| Cycloidal motion has the lowest acceleration. | It has the highest peak acceleration of the three, but zero acceleration at the ends, so there is no jerk. |
| Uniform acceleration and retardation has no jerk. | It has the lowest peak acceleration, but the acceleration still jumps at the ends and at mid-stroke. |
| SHM gives zero acceleration at the ends. | SHM's acceleration is greatest at the ends and zero at mid-stroke. |
| Uniform velocity motion is smooth. | It has infinite acceleration at the start and end, unless the ends are rounded off. |
| A flat-faced follower works with any cam. | It cannot follow a concave (hollow) profile. |

## 3. Gears and gear trains

A pair of gears is two discs rolling on each other, with teeth added so they cannot slip. The tooth shape exists only to keep that rolling perfectly steady. Exam setters twist the tooth terms, the law of gearing, interference, and the speed of the last gear in a train, especially an epicyclic one.

### The picture

Press two coins edge to edge on a table and roll one round the other without slipping. Each time the small coin turns once, the big one turns only part of a turn, in proportion to their diameters. The edges move at the same speed where they touch.

Those rolling coins are the pitch circles. On real gears, friction alone cannot carry much torque, so teeth are cut across the pitch circles: half of each tooth sticks out beyond the circle, and half is cut in. The teeth must be shaped so that, while they push each other, the gears still turn exactly as the smooth coins would.

### Twisted points

**Speed goes inversely as size.** The pitch circles share the same edge speed, so ω1r1 = ω2r2. Teeth are spaced equally round each pitch circle, so the number of teeth is in proportion to the diameter. Hence N1/N2 = D2/D1 = T2/T1: the smaller gear turns faster.

**Module is the size of a tooth.** Module m = D/T, in mm: the pitch diameter shared out per tooth. Circular pitch pc = πD/T = πm is the actual distance from one tooth to the next round the pitch circle. Diametral pitch Pd = T/D = 1/m is the old inch-based measure. Two gears can mesh only if their teeth are the same size, so they must have the same module (and the same pressure angle).

**Standard tooth proportions.** Taking the module as 1:

| Term | Size | Meaning |
| --- | --- | --- |
| Addendum | 1m | Tooth height above the pitch circle |
| Dedendum | 1.25m | Tooth depth below the pitch circle |
| Clearance | 0.25m | Dedendum minus the mating addendum: the gap at the root |
| Working depth | 2m | Two addendums: how deep the teeth engage |
| Whole depth | 2.25m | Addendum + dedendum |
| Tooth thickness | πm/2 | Half the circular pitch, on the pitch circle |

Stub teeth are shorter (addendum about 0.8m). They are stronger and less likely to interfere, but they give a shorter contact.

**The law of gearing keeps the ratio steady.** As two teeth push each other, the push acts along their common normal at the point of contact. For the speed ratio to stay constant, that normal must always pass through one fixed point on the line of centres, the pitch point. If it wandered, the follower would speed up and slow down within each tooth, causing noise and vibration. Teeth whose shapes obey this are called conjugate.

At the pitch point the teeth roll on each other. Away from it they also slide, at a speed equal to (ω1 + ω2) × the distance of the contact point from the pitch point. That sliding is why teeth need lubrication and wear most near the tips and roots.

**An involute is traced by unwinding a string.** Wrap a string round a disc (the base circle) and unwind it, keeping it tight. The end of the string traces an involute. On involute teeth, the common normal is always the line tangent to both base circles, so it never moves: the push between the teeth keeps the same direction all through the mesh. The angle of that line to the common tangent of the pitch circles is the pressure angle φ, and the base circle radius is the pitch radius × cos φ.

Because the line of action depends only on the base circles, pulling involute gears slightly apart does not change their speed ratio; it only raises the pressure angle a little. That, and the easy cutting of their straight-sided rack, is why almost all power gears are involute.

**Cycloidal teeth suit instruments.** The tooth face is traced by a small circle rolling outside the pitch circle, the flank by one rolling inside it. A convex face meets a concave flank, so contact stress and wear are low and there is no interference. But the centre distance must be exact, and the cutters are harder to make. They are used in watches, clocks and instruments.

**Interference is a tooth tip digging below the base circle.** An involute exists only outside its base circle. If the mating tooth's tip reaches into the pinion below its base circle, it meets a part of the flank that is not an involute, and the tip digs in. This happens when the pinion has too few teeth. For a pinion meshing with a rack:

```math
T_{min} = \frac{2 a_w}{\sin^2\phi}
```

Here aw is the addendum in modules (1 for standard teeth). For φ = 20°, sin² 20° = 0.117, so Tmin = 2/0.117 = 17.1, rounded up to 18. For φ = 14½°, sin² 14.5° = 0.0627 and Tmin = 32. That is why 20° teeth replaced 14½°: they allow much smaller pinions. Meshing with another gear instead of a rack needs a few teeth fewer.

To cure interference: raise the pressure angle, use stub teeth (shorter addendum), give the pinion more teeth, or undercut its flanks (which weakens them).

**Contact ratio says how many pairs of teeth share the load.** The contact point travels along the line of action from where the teeth first meet to where they part: the path of contact. The matching arc on the pitch circle is the arc of contact = path of contact ÷ cos φ. Dividing by the circular pitch gives the contact ratio, typically 1.4 to 1.8. A ratio of 1.6 means two pairs of teeth are in mesh for 60% of the time and one pair for 40%. Below 1 there would be moments with no teeth in contact at all.

**Helical gears engage gradually.** Their teeth run at a helix angle ψ across the face, so each tooth comes into mesh a little at a time instead of all at once. They are smoother and quieter than spur gears and carry more load. The cost is an axial thrust along the shaft, which needs thrust bearings. A double helical (herringbone) gear has two opposite helices, and the two thrusts cancel. The tooth size measured at right angles to the teeth is the normal module, mn = m cos ψ.

**Bevel, hypoid and worm gears handle other shaft layouts.** Bevel gears are rolling cones for intersecting shafts; mitre gears are two equal bevel gears at 90°, so their speed ratio is 1. Spiral bevel gears have curved teeth for smoothness. Hypoid gears look like spiral bevels but their shafts are offset and do not meet; in a car's rear axle this lets the propeller shaft sit lower. A worm is a screw meshing with a worm wheel on a shaft at 90°, not meeting it.

**A worm's ratio counts starts, not diameter.** One turn of the worm advances the wheel by the worm's lead, which is the axial pitch × the number of starts. So the speed ratio = teeth on the wheel ÷ starts on the worm. A single-start worm with a 60-tooth wheel gives 60 : 1 in one step. If the lead angle is smaller than the friction angle, the wheel cannot turn the worm: the drive is self-locking, useful for hoists, but its efficiency is then below 50%.

**Gear trains.** In a simple train each shaft carries one gear. The intermediate gears (idlers) cancel out of the ratio, so the speed ratio depends only on the first and last gears; each idler only reverses the direction. In a compound train an intermediate shaft carries two gears of different sizes, so the ratios multiply and a large reduction fits in a small space. A reverted train brings the output back onto the input axis, so with one module the teeth must satisfy T1 + T2 = T3 + T4.

**Epicyclic trains: lock the arm, then add a whole turn.** In an epicyclic train the planet gears ride on an arm (carrier) that itself turns, so the planets' axes move. The trick is to look at the gears relative to the arm, where the train becomes an ordinary one. For a sun S, planets P, ring (annulus) A and arm C:

```math
\frac{N_A - N_C}{N_S - N_C} = -\frac{T_S}{T_A} \qquad T_A = T_S + 2T_P
```

The minus sign is there because, seen from the arm, the sun and the ring turn opposite ways. The train has two degrees of freedom: fix any one member (or drive two), and the third member's speed is decided. The torques on the three members always add to zero, so the fixed member must be held with a torque equal to the output torque minus the input torque.

### Worked numbers

**A gear pair.** A 20-tooth pinion drives a 50-tooth gear, module 4 mm, pinion at 1000 rpm.

- Pitch diameters: 4 × 20 = 80 mm and 4 × 50 = 200 mm. Centre distance = (80 + 200)/2 = 140 mm.
- Gear speed = 1000 × 20/50 = 400 rpm.
- Circular pitch = π × 4 = 12.57 mm. Addendum 4 mm, dedendum 5 mm, whole depth 9 mm.

**A compound train.** Gear A (20 teeth) drives B (60 teeth). C (25 teeth) on B's shaft drives D (75 teeth). Train value = (20 × 25)/(60 × 75) = 500/4500 = 1/9, so 900 rpm in gives 100 rpm out.

**An epicyclic train.** Sun 30 teeth, planets 20 teeth, so the ring has 30 + 2 × 20 = 70 teeth. The ring is fixed and the sun is driven at 1000 rpm.

```math
\frac{0 - N_C}{1000 - N_C} = -\frac{30}{70} \;\Rightarrow\; 70N_C = 30\,000 - 30N_C \;\Rightarrow\; N_C = 300\ \text{rpm}
```

The arm turns at 300 rpm in the same direction as the sun, a reduction of 1000/300 = 3.33. That equals 1 + TA/TS = 1 + 70/30, the standard result for a fixed ring.

**A worm drive.** A double-start worm turns a 40-tooth wheel. Ratio = 40/2 = 20, so a worm at 1440 rpm drives the wheel at 72 rpm.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Module = teeth ÷ diameter. | Module = D/T in mm. T/D is the diametral pitch, the inverse. |
| Gears of different modules can mesh if the diameters suit. | Mating gears must have the same module and pressure angle. |
| An idler changes the speed ratio. | It changes only the direction. The ratio depends on the first and last gears. |
| Teeth roll on each other all the time. | They roll only at the pitch point and slide everywhere else. |
| Increasing the centre distance spoils involute gears. | The speed ratio stays exact; only the pressure angle and backlash change. It is cycloidal gears that need an exact centre distance. |
| Interference is cured by reducing the pressure angle. | Increase the pressure angle (or use stub teeth, more pinion teeth or undercutting). |
| A 20° pinion needs 32 teeth to avoid interference with a rack. | 18 teeth for 20°; 32 is for 14½°. |
| A contact ratio below 1 is acceptable. | Below 1 there are gaps with no teeth in contact. It must be above 1. |
| Helical gears have no axial thrust. | They do. Double helical gears cancel it. |
| A worm's ratio is the wheel diameter ÷ the worm diameter. | It is the wheel's teeth ÷ the worm's starts. |
| Hypoid gears join intersecting shafts. | Their shafts are offset and do not meet. Plain bevel gears join intersecting shafts. |
| An epicyclic train has one degree of freedom. | It has two: one member must be fixed (or two driven) to get a definite output. |

## 4. Belts, ropes and chains

A belt carries power only because its tight side pulls harder than its slack side, and friction round the pulley lets that difference build up. Everything in this topic follows from how big that difference can be. Exam setters twist the ratio of tensions, centrifugal tension, the maximum-power condition, creep against slip, and the belt length formulas.

### The picture

Watch a sailor tie up a ship. One or two turns of rope round a post (a bollard) let a single person hold a pull of several tonnes with one hand. Each bit of rope wrapped round the post rubs against it, and the friction on each bit adds to the tension already there, so the tension grows by a fixed percentage for every bit of wrap.

A belt on a pulley is the same thing. The tight side is the ship's pull, the slack side is the sailor's hand, and the ratio between them grows exponentially with the angle of wrap. A belt slips only when the driving tension needs a bigger ratio than the wrap can give.

### Twisted points

**The speed ratio is set by the pitch line.** Without slip, the belt surface speed is the same on both pulleys, so N1D1 = N2D2. A thick belt bends round the middle of its thickness, so use D + t for each pulley. Slip of s% on the two pulleys together cuts the driven speed by the factor (1 − s/100).

**Slip and creep are different.** Slip is the belt skidding on the pulley because friction is not enough; it can be cured by more tension or more wrap. Creep happens even with perfect grip. The tight side is stretched more than the slack side. As each piece of belt travels round the driver from the tight side to the slack side, it shortens, so it moves slightly slower than the driver's rim. Round the driven pulley it lengthens again. The result is a small, unavoidable loss of speed, about 1% or less.

**The ratio of tensions comes from adding friction bit by bit.** Over a small angle dθ of wrap, the extra tension dT equals the friction μ × (normal force), and the normal force is T dθ. So dT/T = μ dθ, and adding up over the whole angle of contact gives:

```math
\frac{T_1}{T_2} = e^{\mu\theta}
```

θ must be in radians, and it is the angle of contact on the pulley where the belt would slip first. In an open belt that is the smaller pulley, which has the smaller wrap. In a crossed belt both pulleys have the same, larger wrap.

```math
\text{open: } \theta = 180^\circ - 2\alpha,\ \sin\alpha = \frac{r_1 - r_2}{x} \qquad \text{crossed: } \theta = 180^\circ + 2\alpha,\ \sin\alpha = \frac{r_1 + r_2}{x}
```

**A V-belt grips harder because of the wedge.** In a groove of total angle 2β, the belt is wedged between two sloping sides. To press the belt radially with force Rn, each side must push with Rn/(2 sin β), which is much larger than Rn. The friction on both sides together is μRn/sin β, so the belt behaves as a flat belt with μ replaced by μ cosec β. For a 40° groove, cosec 20° = 2.92: the V-belt grips almost three times as well. Ropes in grooved pulleys use the same rule.

**Power is the difference of tensions times speed.** The tight side pulls the pulley forward with T1 and the slack side holds it back with T2, so the net driving force is T1 − T2 and the power is (T1 − T2)v. The belt's strength caps T1: Tmax = allowable stress × width × thickness.

**Centrifugal tension takes up strength but adds no grip.** Each piece of belt going round a pulley needs a force pulling it towards the centre. The belt supplies it by an extra tension Tc = mv² on both sides (m in kg per metre of belt, v in m/s). It does not depend on the pulley size. Because it pulls equally on both sides, it does not change T1 − T2, and it does not press the belt onto the pulley. It simply uses up part of the belt's strength: the tension left for driving is Tmax − Tc.

**Why maximum power comes at Tc = Tmax/3.** At low speed the power is small because v is small. At very high speed Tc eats up all the strength and nothing is left for driving. Between them there is a best speed. With T1 = Tmax − mv² and T2 = T1/e^(μθ):

```math
P = (T_{max} - mv^2)\left(1 - e^{-\mu\theta}\right) v \qquad \frac{dP}{dv} = 0 \;\Rightarrow\; T_{max} = 3mv^2 = 3T_c
```

So at the best speed v = √(Tmax/3m), one third of the belt's strength goes to centrifugal tension and two thirds to driving.

**Initial tension is the average of the two sides.** Before the drive starts, both sides carry the same tension T0. Under load the tight side stretches as much as the slack side shortens, so the belt's length stays the same and T0 = (T1 + T2)/2. Counting centrifugal tension, with T1 and T2 the driving tensions, T0 = (T1 + T2 + 2Tc)/2. A belt that is too loose slips; one that is too tight overloads the bearings and wears out early.

**Belt length: why the crossed formula uses r1 + r2.** For an open belt, L = π(r1 + r2) + 2x + (r1 − r2)²/x. For a crossed belt, the last term becomes (r1 + r2)²/x. A crossed belt's length depends only on the sum of the radii, so on a pair of stepped (cone) pulleys whose step radii always add to the same total, one crossed belt stays equally tight on every step.

**Each drive has its place.**

| Drive | Slip | Best for |
| --- | --- | --- |
| Flat belt | Yes | Long centre distances, high speed; can run crossed; most efficient of the belts |
| V-belt | Yes, less | Short centre distances and higher power in a small space; several belts can share one pulley; cannot run crossed |
| Rope | Yes | Long distances and heavy power (mills, cranes); wire ropes for hoists |
| Chain | No | An exact speed ratio, high efficiency (about 98%) and heavy loads at moderate speed |

**Chordal action makes a chain's speed ripple.** A chain wraps a sprocket as a polygon, not a circle. As each link rides over a tooth, the chain's line rises and falls, so its speed varies slightly even when the sprocket turns steadily. The speed swings by the fraction 1 − cos(180°/T) for a sprocket of T teeth. With 9 teeth that is 6%; with 25 teeth only 0.8%. Small sprockets therefore give rough, noisy drives.

### Worked numbers

**Speed.** A motor at 1440 rpm with a 200 mm pulley drives a 600 mm pulley. Without slip the driven speed is 1440 × 200/600 = 480 rpm. Allowing for a 5 mm belt and 3% total slip: 1440 × 205/605 × 0.97 = 473 rpm.

**Flat belt power.** μ = 0.3, angle of contact 165° = 2.88 rad, tight-side tension 1500 N, belt speed 15 m/s.

- e^(0.3 × 2.88) = e^0.864 = 2.37, so T2 = 1500/2.37 = 632 N.
- P = (1500 − 632) × 15 = 13.0 kW.

**The same drive as a V-belt.** Groove angle 40°, so β = 20° and μ cosec β = 0.3 × 2.92 = 0.877. Then e^(0.877 × 2.88) = e^2.53 = 12.5, T2 = 1500/12.5 = 120 N, and P = (1500 − 120) × 15 = 20.7 kW. Same tight-side tension, almost 60% more power.

**Maximum power.** A belt can carry Tmax = 2400 N and has a mass of 0.8 kg/m, with e^(μθ) = 2.37 as above.

- Best speed: v = √(2400/(3 × 0.8)) = √1000 = 31.6 m/s.
- Tc = 2400/3 = 800 N, so the driving tension T1 = 1600 N and T2 = 1600/2.37 = 674 N.
- P = (1600 − 674) × 31.6 = 29.3 kW.

**Belt length.** Pulleys of 600 mm and 300 mm diameter, 2 m apart.

```math
L_{open} = \frac{\pi}{2}(0.6 + 0.3) + 2 \times 2 + \frac{(0.6 - 0.3)^2}{4 \times 2} = 1.414 + 4 + 0.011 = 5.425\ \text{m}
```

A crossed belt on the same pulleys: the last term becomes 0.9²/8 = 0.101, so L = 5.515 m.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Creep is a kind of slip and can be cured by tightening. | Creep comes from the belt's elasticity and happens in every belt drive, even with no slip. |
| The angle of contact is taken on the bigger pulley. | On an open belt it is the smaller pulley, which has less wrap and slips first. |
| θ in e^(μθ) can be in degrees. | It must be in radians. |
| Centrifugal tension improves the grip. | It adds equal tension on both sides and does not press the belt onto the pulley. It only uses up belt strength. |
| Centrifugal tension depends on the pulley diameter. | Tc = mv² depends only on the belt's mass per metre and its speed. |
| Maximum power comes when Tc = Tmax/2. | It comes when Tc = Tmax/3, at v = √(Tmax/3m). |
| Power = T1 × v. | Power = (T1 − T2) × v. The slack side pulls back. |
| A V-belt is more efficient than a flat belt. | It grips better, but it wastes more energy wedging into and out of the groove. A flat belt is more efficient. |
| V-belts can be crossed like flat belts. | They cannot. |
| A crossed belt's length depends on r1 − r2. | It depends on r1 + r2. That is why stepped pulleys use crossed belts. |
| A chain moves at an exactly steady speed. | Chordal action makes its speed ripple. More sprocket teeth reduce it. |

## 5. Brakes, clutches and dynamometers

Clutches, brakes and absorption dynamometers all make torque the same way: a pressing force, times μ, times the radius at which the friction acts. They differ only in what happens to the torque: passed on, absorbed, or measured. Exam setters twist uniform pressure against uniform wear, the number of friction surfaces, the cone clutch's wedge, and when a brake locks itself.

### The picture

Spin a bicycle wheel and stop it with your hand. Press harder and it stops sooner: more normal force, more friction. Press on the tyre instead of near the hub and it also stops sooner, because the same friction force now acts at a larger radius and gives more torque. Use both hands on opposite sides and the friction doubles.

A clutch is your hand on a wheel that you want to turn, not stop. While your hand slips, it drags the wheel faster and faster, and the rubbing turns some of the energy into heat. When the wheel has caught up with your hand, the slipping stops and the two move as one.

### Twisted points

**Torque from a ring of friction.** A thin ring of radius r and width dr carries a normal force p × 2πr dr. Its friction μ times that acts at radius r, so its torque is μp × 2πr² dr. The whole clutch face adds up these rings from the inner radius r2 to the outer radius r1. What you get depends on how the pressure p is spread.

**Uniform pressure suits a new clutch; uniform wear suits a run-in one.** On a new, flat lining, the pressure is the same everywhere. But the outer part of the face moves faster, so it rubs farther and wears faster. It wears down until it presses less. After running in, the wear is the same everywhere, which needs p × r to be constant: the pressure is highest at the inner radius.

```math
\text{Uniform pressure: } T = \frac{2}{3}\,\mu W\,\frac{r_1^3 - r_2^3}{r_1^2 - r_2^2} \qquad \text{Uniform wear: } T = \mu W\,\frac{r_1 + r_2}{2}
```

Uniform wear gives slightly less torque, because more of the pressure sits near the inside, at a smaller radius. A clutch designed on uniform wear is therefore on the safe side, and that is the usual assumption.

**Count the pairs of rubbing surfaces.** The same axial force W presses every pair of surfaces in a stack, so each pair adds the full μWR: T = nμWR. A single plate gripped between the flywheel and the pressure plate, lined on both sides, has n = 2. A multi-plate clutch with n1 plates on the driving shaft and n2 on the driven shaft has n = n1 + n2 − 1 pairs. Many small plates give a large torque in a small diameter, which is why motorcycles use them.

**The cone clutch is a wedge.** Pushing a cone into a cup with axial force W squeezes the surfaces together with a much bigger normal force, W/sin α, where α is the semi-cone angle. The torque is therefore μWR cosec α. A smaller α gives a stronger wedge and more torque. But if α is smaller than the angle of friction (tan α < μ), the cone jams and cannot be pulled out. That is why α is kept around 12½°, a little above the friction angle of the linings used.

**Engaging a clutch always wastes energy.** Suppose the driving side keeps a steady speed and the driven side starts from rest. While the clutch slips, the friction torque on the driving side does work at the full driving speed, but the driven side gains energy only at its own, lower speed. The difference becomes heat. For a load brought up to speed from rest, the heat produced equals the kinetic energy the load gains. Frequent starting therefore heats a clutch more than steady running.

**A centrifugal clutch engages by itself.** Its shoes are held in by springs. As the speed rises, the outward force on each shoe, mω²r, overcomes the spring force S and presses the shoe on the drum with a net force mω²r − S. The torque is nμ(mω²r − S)R for n shoes, so it rises rapidly with speed. Mopeds and chain saws use it.

**A block brake can help itself.** In a block (shoe) brake, a lever presses a block on the drum with a normal force Rn, and the friction μRn acts along the drum surface. If the lever's pivot is not on the line of that friction force, the friction makes a moment about the pivot. Depending on the drum's direction of rotation, that moment either adds to the operator's push or fights it.

- If the friction moment helps, the brake is self-energising: less effort is needed.
- If the friction moment alone is enough to hold the block on, the brake is self-locking: once touched, it applies itself with no effort at all. That is wanted in a hoist that must not run back, but dangerous in a vehicle.

**A band brake is a belt that does not move.** A lined steel band is pulled round the drum, and the tensions at its two ends obey the belt rule T1/T2 = e^(μθ). The braking torque is (T1 − T2) × the drum radius. Which end is tight depends on the direction of rotation: the tight end is the one the drum surface is moving away from. In a differential band brake both ends are fixed to the lever, on either side of its pivot, so the two tensions make opposite moments; with the wrong proportions it becomes self-locking.

**All the energy ends up as heat.** A brake turns kinetic energy (and, going downhill, potential energy) into heat in the lining and drum. Hard, repeated stops heat them faster than they can cool, μ falls, and the brake fades. Disc brakes fade less than drum brakes because the disc is open to the air on both faces.

**Dynamometers either absorb the power or pass it on.** An absorption dynamometer is a brake with a way to measure its torque. In a Prony brake, blocks clamp the rotating pulley and an arm of length L stops the clamp from turning, so the torque is the weight W on the arm × L. In a rope brake, a rope wrapped round the drum carries a dead weight W on one end and a spring balance reading S on the other, so the torque is (W − S) × (drum radius + rope radius). A transmission dynamometer measures the torque as it passes through, without wasting it: a belt-transmission dynamometer weighs the difference of belt tensions, and a torsion dynamometer measures the twist of the shaft.

### Worked numbers

**Single-plate clutch.** Lined on both sides (n = 2), outer radius 150 mm, inner radius 100 mm, μ = 0.3, axial force 4 kN, running at 1500 rpm.

- Uniform wear: R = (0.15 + 0.10)/2 = 0.125 m, T = 2 × 0.3 × 4000 × 0.125 = 300 N m.
- Uniform pressure: R = (2/3)(0.003375 − 0.001)/(0.0225 − 0.01) = (2/3)(0.19) = 0.1267 m, T = 304 N m.
- Power it can transmit (on uniform wear): 2π × 1500 × 300/60 = 47.1 kW.

**Cone clutch.** Semi-cone angle 12.5°, mean radius 100 mm, μ = 0.2, axial force 1 kN. cosec 12.5° = 4.62, so T = 0.2 × 1000 × 0.1 × 4.62 = 92.4 N m. A flat plate of the same radius would need 4.62 kN for that torque. The friction angle is tan⁻¹ 0.2 = 11.3°, below 12.5°, so the cone will still release.

**Band brake.** Drum 500 mm diameter, band wrapped over 270° (4.71 rad), μ = 0.25, tight-side tension 2000 N.

- e^(0.25 × 4.71) = e^1.18 = 3.25, so T2 = 2000/3.25 = 616 N.
- Braking torque = (2000 − 616) × 0.25 = 346 N m.

**Prony brake.** An arm 1 m long carries 200 N at 1200 rpm. Torque = 200 N m, so the engine power = 2π × 1200 × 200/60 = 25.1 kW.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Uniform pressure is the safe design basis. | Uniform wear gives slightly less torque, so it is the safer and usual basis. |
| Under uniform wear the pressure is highest at the outer edge. | p × r is constant, so the pressure is highest at the inner radius. |
| A single plate clutch always has n = 1. | Lined on both sides, it has two pairs of friction surfaces: n = 2. |
| A multi-plate clutch has n1 + n2 pairs. | It has n1 + n2 − 1 pairs. |
| A smaller cone angle is always better. | Below the friction angle the cone jams and will not disengage. About 12½° is used. |
| A cone clutch's torque is μWR. | It is μWR cosec α: the wedge multiplies the normal force. |
| Clutch slipping wastes no energy if the speeds end up equal. | Bringing a load up to speed through slip turns as much energy into heat as the load gains. |
| Self-energising and self-locking mean the same. | Self-energising: friction helps the effort. Self-locking: friction alone holds the brake on. |
| A band brake's tight side is fixed whatever the rotation. | The tight side depends on the drum's direction of rotation. |
| A Prony brake passes the power on to a load. | It absorbs the power as heat. Transmission dynamometers pass it on. |
| Brake fade means the lining has worn out. | Fade is a temporary drop in μ when the lining gets hot. |

## 6. Flywheels and governors

A flywheel and a governor both fight speed changes, but on different time scales. The flywheel evens out the speed within each cycle by storing and returning energy; the governor resets the mean speed over many cycles by changing the fuel supply. Exam setters twist which does which, the fluctuation-of-energy formula, the Watt governor height, and the meanings of stability, isochronism and hunting.

### The picture

Think of a town's overhead water tank. The pump below pushes water up in pulses, and the town draws water steadily. The tank absorbs the difference: its level rises a little with each pulse and falls a little between them, but the taps downstream flow steadily. That tank is the flywheel, storing energy when the engine's torque is high and returning it when the torque is low.

Now suppose the town starts using much more water. The tank alone cannot help for long; its level will keep falling. A float valve that senses the falling level and opens the pump's supply is needed. That valve is the governor: it does not smooth the pulses, it matches the supply to the demand.

### Twisted points

**The turning moment diagram shows where the energy goes.** Plot the engine's crankshaft torque against crank angle. The load takes a steady mean torque, drawn as a horizontal line. Where the engine's torque is above the line, the surplus energy (the area above the line) speeds the flywheel up; where it is below, the deficit slows it down. A single-cylinder four-stroke engine gets one power stroke every two revolutions, so its diagram has one tall peak and long low stretches. It needs the biggest flywheel; multi-cylinder engines overlap their power strokes and need much smaller ones.

**The fluctuation of energy is found from running totals.** Start at any point and add up the areas above (+) and below (−) the mean line, one after another. The flywheel is fastest where the running total is greatest and slowest where it is least. The maximum fluctuation of energy ΔE is the greatest total minus the least, not the largest single area.

**Where ΔE = Iω²Cs comes from.** The flywheel's energy changes from ½Iω2² to ½Iω1², so:

```math
\Delta E = \tfrac{1}{2} I(\omega_1^2 - \omega_2^2) = \tfrac{1}{2} I(\omega_1 + \omega_2)(\omega_1 - \omega_2) = I\omega(\omega_1 - \omega_2) = I\omega^2 C_s
```

Here ω is the mean speed and Cs = (ω1 − ω2)/ω the coefficient of fluctuation of speed. Since the stored energy E = ½Iω², the same result reads ΔE = 2ECs. For a given ΔE, halving the allowed speed band needs twice the moment of inertia, and running the engine twice as fast needs only a quarter of it.

**Put the mass at the rim, but not too fast.** I = mk² counts the radius squared, so a flywheel puts most of its metal in a heavy rim. But the rim is pulled outwards as it spins, and the stress in a thin rim is ρv², where ρ is the density and v the rim speed. It does not depend on the rim's thickness. For cast iron this limits the rim speed to roughly 30 m/s, so a flywheel cannot simply be made larger and faster without limit.

**A punching press is the extreme case.** Punching a hole takes a large force over a short stroke, perhaps a tenth of the cycle. A motor big enough to punch directly would idle most of the time. Instead, a small motor runs continuously and stores energy in a flywheel, which slows down a little during each punch and is speeded up again between punches.

**A centrifugal governor balances an outward pull against a controlling force.** The governor's balls are driven round by the engine. The faster they spin, the more they want to fly outwards (mω²r). Gravity, a dead weight on the sleeve, or a spring pulls them back. At each speed the balls settle where the two balance, and the sleeve's height moves the throttle.

**Watt's height depends only on speed.** In the simple Watt governor, taking moments for one ball shows that the height h of the cone (from the balls' plane up to where the arms meet the axis) satisfies h = g/ω². With N in rpm and g = 9.81 m/s², h = 895/N² metres. The mass of the balls cancels out. At 60 rpm h = 249 mm, but at 300 rpm only 10 mm, too small to move a throttle usefully. So the Watt governor suits only slow engines.

**Porter adds a sleeve weight to work at higher speed.** A dead weight M on the sleeve must be lifted as the balls rise, so the balls must spin faster to hold the same height. For equal arms and links:

```math
h = \frac{m + M}{m}\cdot\frac{895}{N^2}\ \text{m}
```

The heavier the sleeve compared with the balls, the larger h at a given speed. The Proell governor fixes the balls to extensions of the lower links, which makes it more sensitive still. Spring-loaded governors (Hartnell, Hartung, Wilson-Hartnell, Pickering) replace gravity with a spring, so they can run fast and work in any position.

**Stability is read from the controlling force.** Plot the controlling force F needed to hold the balls at radius r against r. A governor is stable when a higher speed always means a larger radius, so every speed has one radius. For a straight line F = ar − b this needs the line, extended back, to cut the force axis below the origin (b positive). If the line passes through the origin (F proportional to r), the governor is isochronous: one speed balances it at every radius. If the line cuts the axis above the origin, it is unstable.

**Isochronous, sensitive and hunting are linked.** Sensitiveness is (N2 − N1)/N: the narrower the speed band between the lowest and highest positions, the more sensitive the governor. An isochronous governor has a band of zero, so it is infinitely sensitive. But then the smallest speed change sends the sleeve right to one end, the fuel overshoots, the speed swings back past the mean, and the sleeve flies to the other end. That endless over-correction is hunting. Too much sensitivity causes hunting, so a practical governor is made slightly less than isochronous. Friction in the joints adds a small dead band (insensitiveness) that also helps.

**Effort and power measure how strongly a governor acts.** Effort is the mean force the sleeve can exert for a 1% change of speed; power is that effort × the sleeve's lift. A governor with more effort can move a stiff throttle linkage. Porter has much more effort than Watt, because of its sleeve weight.

**Flywheel and governor side by side.**

|  | Flywheel | Governor |
| --- | --- | --- |
| Controls | Speed change within one cycle | Mean speed over many cycles |
| Responds to | The engine's uneven torque | A change of load |
| How | Stores and returns kinetic energy | Changes the fuel or steam supply |
| Used on | Every reciprocating engine, presses, shears | Engines whose load varies |

### Worked numbers

**Flywheel size.** An engine runs at a mean speed of 300 rpm with ΔE = 6 kJ, and the speed must stay within ±1% (Cs = 0.02).

- ω = 2π × 300/60 = 31.42 rad/s, so ω² = 987.
- I = ΔE/(ω²Cs) = 6000/(987 × 0.02) = 304 kg m².
- With most of the mass in a rim of radius 1 m, the rim needs about 304 kg. Its rim speed is 31.4 m/s, close to the cast iron limit.

**Watt governor.** h = 895/N²: at 60 rpm h = 0.249 m; at 120 rpm 0.062 m; at 300 rpm 0.010 m. Doubling the speed cuts the height to a quarter.

**Porter governor.** Balls of 5 kg each, sleeve 30 kg, 200 rpm: h = (5 + 30)/5 × 895/200² = 7 × 0.0224 = 0.157 m. A Watt governor at the same speed would stand only 22 mm high.

**Sensitiveness.** A governor works between 290 and 310 rpm: (310 − 290)/300 = 0.067, or 6.7%. A band of 295 to 305 rpm would give 3.3%: more sensitive, and closer to hunting.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A flywheel keeps the mean speed constant when the load changes. | It only smooths the speed within a cycle. The governor controls the mean speed. |
| ΔE is the largest single loop in the turning moment diagram. | It is the greatest running total minus the least running total. |
| ΔE = ½Iω²Cs. | ΔE = Iω²Cs, which equals 2ECs. |
| The coefficient of steadiness equals Cs. | It is the inverse of Cs: ω/(ω1 − ω2). |
| A bigger flywheel can always spin faster. | Rim stress ρv² limits the rim speed, about 30 m/s for cast iron. |
| The Watt governor height depends on the ball mass. | h = g/ω²; the mass cancels out. |
| As speed rises, a Watt governor's height increases. | It falls: h is proportional to 1/N². The balls move out and up. |
| A Porter governor is spring-controlled. | It is gravity-controlled with a dead weight on the sleeve. Hartnell, Hartung and Pickering use springs. |
| An isochronous governor is the most stable. | It is infinitely sensitive but unstable, and it hunts. |
| More sensitivity is always better. | Too much sensitivity causes hunting. |
| A larger sensitiveness ratio means a more sensitive governor. | The smaller (N2 − N1)/N, the more sensitive the governor. |

## 7. Balancing and vibrations

Balancing removes the shaking forces that a machine makes by itself; vibration theory says how a machine on springs answers any force that remains. Both grow fast with speed, which is why they matter in fast machines. Exam setters twist static against dynamic balance, why a piston can only be partly balanced, the natural frequency formula, the kinds of damping, and the √2 rule for isolation.

### The picture

Put a washing machine on spin with all the wet clothes bunched on one side. The drum's mass centre is off its axis, so as it spins it flings the whole machine round in a circle, and the machine walks across the floor. Spread the clothes evenly and it spins quietly. That is balancing.

Now think of a car crossing a speed bump. The body bounces on its springs at its own natural rate, about once a second, whatever the bump's shape. The shock absorbers make it settle after one or two bounces instead of ten. That is free vibration with damping. A car driven over evenly spaced ridges at just the wrong speed bounces worse and worse: that is resonance.

### Twisted points

**Unbalance is m × r, and its force grows with speed squared.** A mass m whose centre is at radius r from the axis needs a force mω²r to keep it on its circle, and the bearings feel that force swinging round once per turn. Doubling the speed quadruples it. What matters is the product m × r: a 1 kg mass at 100 mm is cancelled by 2 kg at 50 mm placed exactly opposite.

**Static balance is not enough when the masses are in different planes.** Fix two equal masses on a shaft, on opposite sides, but one near each end. The centre of gravity is on the axis, so the shaft stays put at any angle when you turn it by hand: it is statically balanced (Σmr = 0). But when it spins, the two equal and opposite forces are a distance apart, so they form a couple that tries to wobble the shaft end over end. To be dynamically balanced, the couples must cancel too (Σmrl = 0). That needs balancing masses in at least two planes along the shaft. Every dynamically balanced rotor is statically balanced, but not the other way round.

**A piston can never be fully balanced by a rotating mass.** The piston's inertia force acts only along the line of stroke and changes size and sign through each turn: the primary part is mω²r cos θ. A balance mass on the crank, opposite the crank pin, makes a force of the same size mω²r, but it rotates. Its component along the line of stroke cancels the primary force, but its component across the line, mω²r sin θ, is a new unbalanced force that was not there before. Full balance along the stroke just moves the shaking to the other direction.

So engines and locomotives balance only a fraction c of the reciprocating mass, usually 2/3 to 3/4. The unbalanced force along the stroke is then (1 − c)mω²r cos θ, and the force across it is cmω²r sin θ.

**Secondary forces run at twice the speed.** The secondary force, mω²r cos 2θ/n, comes from the angle of the connecting rod. It acts as if it came from an imaginary crank of radius r/4n turning at 2ω. In multi-cylinder engines the cranks are arranged so that the forces from different cylinders cancel. An in-line four-cylinder engine cancels its primary forces and couples, but its secondary forces all add up, which is why such engines buzz at twice the engine speed.

**Partial balance in a locomotive has three side effects.** The leftover force along the stroke makes the pull on the train vary through each turn (variation of tractive effort). The two cylinders are on opposite sides of the engine and out of phase, so their leftover forces make a swaying couple. The balance mass's vertical component presses the wheel down on the rail and lifts it once every turn: the hammer blow, which can damage the track at high speed.

**A spring and mass have one natural frequency.** Pull a mass on a spring down and let go. The spring pulls back with kx, so mx′′ + kx = 0, and the mass oscillates at:

```math
\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{g}{\delta}} \qquad f_n = \frac{1}{2\pi}\sqrt{\frac{g}{\delta}} \approx \frac{0.4985}{\sqrt{\delta}}\ \text{Hz}\ (\delta \text{ in m})
```

Here δ = mg/k is the static deflection, how far the mass sags the spring at rest. The second form is handy: measure the sag and you know the frequency. Gravity does not change the frequency, because on the moon δ is smaller in exactly the same proportion as g; √(k/m) shows this directly.

**Springs in series are softer, in parallel stiffer.** Two springs side by side both carry the load, so their stiffnesses add: k = k1 + k2. Two springs end to end each carry the full load and each stretches, so the stretches add and 1/k = 1/k1 + 1/k2. Two equal springs in series have half the stiffness of one. A beam acts as a spring too, with stiffness = load ÷ deflection at the load:

| Beam | Stiffness at the load |
| --- | --- |
| Cantilever, load at the free end | 3EI/l³ |
| Simply supported, load at the centre | 48EI/l³ |
| Fixed at both ends, load at the centre | 192EI/l³ |

For twisting (torsional) vibration of a disc on a shaft, the same idea gives ωn = √(q/I), where q = GJ/l is the shaft's torsional stiffness and I the disc's moment of inertia.

**Damping decides whether it swings or just settles.** A damper (dashpot) resists with a force c × velocity. The critical damping cc = 2√(km) = 2mωn is the least damping that stops all oscillation. The damping ratio is ζ = c/cc.

- ζ < 1, under-damped: it oscillates at ωd = ωn√(1 − ζ²), slightly slower than ωn, and each swing is smaller than the last.
- ζ = 1, critically damped: it returns to rest in the shortest possible time without overshooting. Gun recoil mechanisms and door closers are designed for this.
- ζ > 1, over-damped: it creeps back slowly without overshooting.

The logarithmic decrement, ln(x1/x2) = 2πζ/√(1 − ζ²), measures damping from a test: record the decaying swings and take the log of the ratio of two successive peaks.

**Resonance: forcing at the natural frequency.** A repeating force at frequency ω makes the system vibrate at ω, not at ωn. The amplitude depends on the frequency ratio r = ω/ωn. When r = 1, each push arrives in step with the motion, and the amplitude is limited only by damping. Well above resonance, the mass cannot keep up and barely moves.

**Isolation works only above √2.** Transmissibility is the force reaching the foundation ÷ the force applied by the machine. For every amount of damping it equals 1 at r = √2. Below √2 the mounts pass on more force than the machine makes. Above √2 they pass on less, and the higher r, the better.

So isolation needs a low natural frequency: soft springs. Above √2, extra damping actually passes on more force, so isolators have little damping. A little is still needed, because the machine passes through resonance every time it starts and stops.

**Whirling is resonance of a spinning shaft.** A shaft carrying a disc is a spring (the shaft bending) and a mass (the disc). If it spins at the speed equal to its natural frequency of bending, any small unbalance builds up into a violent bow: that speed is the critical or whirling speed, Nc = (60/2π)√(g/δ), with δ the static sag at the disc. Well above the critical speed the shaft runs steadily again, with the disc's mass centre turning towards the axis, so large turbines are run up quickly through the critical speed and operate above it.

### Worked numbers

**Rotating unbalance.** 0.2 kg at 100 mm radius on a rotor at 1500 rpm (ω = 157.1 rad/s): F = 0.2 × 0.1 × 157.1² = 493 N. At 3000 rpm it is four times larger, 1974 N. A 0.4 kg mass at 50 mm, directly opposite, balances it.

**Spring and mass.** A 20 kg mass on a spring of stiffness 40 kN/m.

- ωn = √(40 000/20) = √2000 = 44.7 rad/s, so fn = 44.7/2π = 7.12 Hz.
- Check by sag: δ = 20 × 9.81/40 000 = 4.9 mm, and 0.4985/√0.0049 = 7.12 Hz.

**Adding a damper.** c = 400 N s/m on the same system.

- cc = 2√(40 000 × 20) = 1789 N s/m, so ζ = 400/1789 = 0.224: under-damped.
- ωd = 44.7 × √(1 − 0.05) = 43.6 rad/s.
- Log decrement = 2π × 0.224/0.975 = 1.44, so each peak is e^1.44 = 4.2 times smaller than the one before.

**Choosing isolator springs.** A machine runs at 1500 rpm (157 rad/s). For any isolation, ωn must be below 157/√2 = 111 rad/s. Aim for r = 3: ωn = 52.4 rad/s, so the mounts must sag δ = g/ωn² = 9.81/2742 = 3.6 mm under the machine's weight. With little damping the transmissibility is about 1/(r² − 1) = 1/8, so only 12.5% of the shaking force reaches the floor.

**Whirling speed.** A shaft sags 0.5 mm under its central disc. Nc = (60/2π) × √(9.81/0.0005) = 9.55 × 140 = 1338 rpm. It must run well below or well above this.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A statically balanced rotor is fully balanced. | It can still have an unbalanced couple. Dynamic balance needs both Σmr = 0 and Σmrl = 0. |
| A dynamically unbalanced rotor can be fixed in one plane. | Masses in different planes need balancing masses in at least two planes. |
| Primary forces of a single-cylinder engine can be fully balanced. | A rotating balance mass only moves the unbalance across the stroke, so only a part (2/3 to 3/4) is balanced. |
| Secondary forces act at engine speed. | They act at twice the engine speed. |
| An in-line four-cylinder engine is perfectly balanced. | Its primary forces and couples cancel, but its secondary forces do not. |
| Natural frequency depends on gravity. | ωn = √(k/m). It is the same on the moon. |
| Springs in series are stiffer. | Series springs are softer: 1/k = 1/k1 + 1/k2. Parallel springs add. |
| Critical damping makes the system oscillate the most. | It returns to rest fastest without any oscillation. |
| More damping always reduces the force sent to the foundation. | Above r = √2, more damping increases it. |
| Isolation needs stiff mounts. | It needs soft mounts, so that ω/ωn is above √2, ideally 2.5 to 4. |
| A shaft cannot run above its critical speed. | It can, steadily, once it has passed through quickly. Large turbines do. |

## 8. Theories of failure, factor of safety and fatigue

A tensile test tells you when a bar fails under one stress; a failure theory tells you when a part fails under several stresses at once, and fatigue theory tells you when it fails under a stress that keeps changing. Most machine parts that break in service break by fatigue. Exam setters twist which theory suits which material, the shear yield strength each theory predicts, the stress cycles, and the Goodman and Soderberg lines.

### The picture

Twist a stick of chalk until it breaks: the break runs round it in a 45° spiral. Twist a soft steel wire until it breaks: the break goes straight across. Both carried the same kind of load, pure torsion, but chalk failed where the tension was greatest (on the 45° planes), and steel failed where the shear was greatest (across the section). Brittle and ductile materials fail by different stresses, so they need different failure theories.

Now bend a paper clip back and forth. One bend does not break it, but twenty do. No single bend reached its breaking strength, yet a crack grew a little each time until the clip snapped. That is fatigue.

### Twisted points

**The factor of safety covers what you do not know.** Loads may be higher than expected, the material weaker, the analysis approximate, and failure costly. FoS = failure stress ÷ working stress, where the failure stress is the yield strength for a ductile material (yielding already makes the part useless) and the ultimate strength for a brittle one (it has no yield point). Typical values run from 1.5 for steady loads on ductile parts with well-known loads to 5 or more for brittle parts under shock.

**Each failure theory picks one quantity and compares it with the tensile test.** In a tensile test at failure, σ1 = Syt (the yield strength) and the other two principal stresses are zero. Each theory says failure happens when its chosen quantity reaches the value it has in that test:

| Theory | Quantity compared | Suits |
| --- | --- | --- |
| Maximum principal stress (Rankine) | Largest principal stress | Brittle materials |
| Maximum shear stress (Guest–Tresca) | Largest shear stress, (σ1 − σ3)/2 | Ductile materials; simple and safe |
| Maximum principal strain (St Venant) | Largest strain | Rarely used now |
| Total strain energy (Haigh) | Energy stored per unit volume | Ductile, but less accurate |
| Distortion energy (von Mises–Hencky) | Energy that changes shape, not volume | Ductile materials; agrees best with tests |

**Use all three principal stresses for Tresca.** In plane stress the third principal stress is zero, and it counts. If σ1 = 120 MPa and σ2 = 60 MPa, both tensile, the largest shear stress is (120 − 0)/2 = 60 MPa, not (120 − 60)/2 = 30 MPa. Forgetting the zero stress halves the true shear here and gives an unsafe design. When σ1 and σ2 have opposite signs, the largest shear is (σ1 − σ2)/2.

**What each theory predicts in pure shear.** In pure shear σ1 = τ, σ2 = −τ. Setting each theory's quantity equal to its tensile-test value gives the shear yield strength:

```math
\text{Tresca: } S_{sy} = 0.5\,S_{yt} \qquad \text{von Mises: } S_{sy} = \frac{S_{yt}}{\sqrt{3}} = 0.577\,S_{yt} \qquad \text{Rankine: } S_{sy} = S_{yt}
```

Tests on ductile steels give about 0.55 to 0.6, close to von Mises. Tresca's 0.5 is lower, so a Tresca design is a little heavier but safe: in pure shear it is 15.5% more cautious than von Mises, the largest gap between them.

**Picture the theories as boundaries.** Plot σ1 against σ2 for plane stress. Any stress state inside the boundary is safe. Rankine's boundary is a square, Tresca's a hexagon, and von Mises' an ellipse that passes through all six corners of the hexagon. The hexagon fits inside the ellipse, which is the picture of Tresca being the more cautious.

**Pure hydrostatic stress causes no yielding.** If a part is squeezed equally from all sides, its shape does not change, only its volume. The distortion energy is zero and the shear stresses are zero, so neither von Mises nor Tresca predicts yielding, however large the pressure. Rocks deep underground and materials tested under great pressure show this.

**Stress concentration is a crowding of the lines of force.** Imagine the load flowing along a plate like water in a channel. A hole forces the flow to squeeze round it, and the stress at the edge of the hole rises. A small round hole in a wide plate under tension has Kt = 3: the stress at its edge is three times the nominal stress. An elliptical hole across the load has Kt = 1 + 2a/b, so a sharp crack (b very small) gives a huge Kt.

Under steady loads, a ductile part can often ignore it: the overstressed spot yields a little and passes load to its neighbours. A brittle part cannot yield, and under fatigue loading even a ductile part cannot, because the crack starts at the hot spot. So Kt matters most for brittle materials and for fatigue.

**Fatigue starts small and ends suddenly.** Under repeated stress a tiny crack starts at a surface scratch, a sharp corner, or an inclusion. It grows a little with each cycle, leaving beach marks on the fracture surface like ripples on sand. When the remaining section is too small, it snaps at once, leaving a rough final zone. There is no warning stretching, even in ductile steel.

**Three ways a stress can cycle.** Let σm = (σmax + σmin)/2 be the mean stress and σa = (σmax − σmin)/2 the amplitude.

| Cycle | Stresses | Example |
| --- | --- | --- |
| Fully reversed | σmin = −σmax, so σm = 0 | A rotating shaft under a steady bending load |
| Repeated | σmin = 0, so σm = σa = σmax/2 | A gear tooth, loaded once a turn |
| Fluctuating | Two unequal values, σm not zero | A spring that is pre-loaded and then worked |

**The S-N curve and the endurance limit.** Test many samples, each at a different fully reversed stress, and count the cycles each survives. Plotted on log scales, the stress falls as the life grows, then for steel levels off at around 10⁶ cycles. That level is the endurance limit: below it, steel lasts indefinitely. For steel it is about 0.5 Sut in rotating bending. Aluminium and copper alloys have no flat part, so designers use their fatigue strength at a stated life, such as 10⁸ cycles.

The laboratory figure Se′ comes from small, polished specimens. A real part has a rougher surface, a larger size and needs more reliability, so Se′ is multiplied by factors less than 1 for each. The endurance limit in shear is about 0.55 to 0.58 times that in bending.

**Notch sensitivity: how much of Kt shows up in fatigue.** In fatigue tests a notch weakens a part by Kf, usually less than Kt, because some materials are less sensitive to notches. The notch sensitivity q = (Kf − 1)/(Kt − 1) runs from 0 (the notch makes no difference) to 1 (its full theoretical effect). Hard, high-strength steels have q close to 1; cast iron, already full of graphite flakes, has q close to 0.

**A mean stress eats into the allowed amplitude.** A part with a large steady tension can take less alternating stress on top. Plot σm along the bottom and σa up the side. The endurance limit Se marks the amplitude allowed with no mean stress. Each line joins Se to a mean-stress limit: Goodman to the ultimate strength Sut, Soderberg to the yield strength Syt, Gerber by a parabola to Sut. Points below a line are safe. Soderberg's line is the lowest, so it is the most conservative; Gerber's is closest to test results.

```math
\text{Soderberg: } \frac{\sigma_m}{S_{yt}} + \frac{\sigma_a}{S_e} = \frac{1}{N} \qquad \text{Goodman: } \frac{\sigma_m}{S_{ut}} + \frac{\sigma_a}{S_e} = \frac{1}{N}
```

**Making parts last longer.** Generous fillets and gradual changes of section reduce Kt. A smooth, polished surface removes the scratches where cracks start. Shot peening and rolling the threads leave the surface in compression, which keeps cracks closed. Avoid sharp keyways, stamped marks and surface decarburisation at highly stressed spots.

### Worked numbers

**A shaft under bending and torsion.** At the surface σ = 80 MPa (bending) and τ = 60 MPa (torsion), steel with Syt = 300 MPa.

- Principal stresses: 40 ± √(40² + 60²) = 40 ± 72.1, so σ1 = 112.1 MPa and σ2 = −32.1 MPa.
- Tresca: σ1 − σ2 = 144.2 MPa, so FoS = 300/144.2 = 2.08.
- Von Mises: √(σ² + 3τ²) = √(6400 + 10 800) = 131.1 MPa, so FoS = 300/131.1 = 2.29.

Tresca gives the lower, safer factor, as expected.

**The third principal stress.** σ1 = 120 MPa, σ2 = 60 MPa, Syt = 240 MPa. By Tresca, τmax = 120/2 = 60 MPa against an allowable 120 MPa: FoS = 2. Using (σ1 − σ2)/2 = 30 MPa by mistake would give FoS = 4, twice the true value.

**Fatigue with a mean stress.** Steel with Sut = 600 MPa and Syt = 400 MPa. Se′ = 0.5 × 600 = 300 MPa; with a surface factor of 0.8 and a size factor of 0.85, Se = 300 × 0.8 × 0.85 = 204 MPa. The stress varies from 20 to 180 MPa.

- σm = (180 + 20)/2 = 100 MPa and σa = (180 − 20)/2 = 80 MPa.
- Soderberg: 100/400 + 80/204 = 0.25 + 0.392 = 0.642, so N = 1/0.642 = 1.56.
- Goodman: 100/600 + 80/204 = 0.167 + 0.392 = 0.559, so N = 1.79.

**Notch.** Kt = 2.2 and q = 0.8: Kf = 1 + 0.8 × (2.2 − 1) = 1.96. The notch cuts the fatigue strength almost in half.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| FoS for a ductile part is based on the ultimate strength. | On the yield strength. Brittle parts use the ultimate strength. |
| The maximum shear stress theory suits cast iron. | It suits ductile materials. Cast iron (brittle) uses the maximum principal stress theory. |
| Tresca is the most accurate theory for ductile steel. | Von Mises (distortion energy) agrees best with tests. Tresca is simpler and safer. |
| Shear yield strength is 0.5 Syt by every theory. | 0.5 by Tresca, 0.577 by von Mises. |
| In plane stress, τmax is always (σ1 − σ2)/2. | When σ1 and σ2 have the same sign, it is σ1/2, using the zero third stress. |
| A large hydrostatic pressure makes a ductile part yield. | Equal pressure on all sides causes no distortion and no yielding. |
| Stress concentration always matters equally. | It matters most for brittle materials and for fatigue; ductile parts under steady load can yield locally and redistribute. |
| Every metal has an endurance limit. | Steels do; aluminium and copper alloys do not. |
| Kf is always equal to Kt. | Kf = 1 + q(Kt − 1), usually less than Kt. |
| In repeated stress the mean stress is zero. | That is fully reversed stress. In repeated stress σm = σa = σmax/2. |
| Goodman is the most conservative line. | Soderberg is, because it runs to the yield strength. |
| Fatigue failure in ductile steel shows necking first. | It gives no warning: a crack grows quietly and the part snaps. |

## 9. Riveted, welded and bolted joints

Every joint is weaker than the solid plate, and design means finding its weakest way of failing and making the other ways no weaker. A riveted joint can tear, shear or crush; a weld fails across its throat; a bolt breaks at its core. Exam setters twist the three failure modes, the efficiency, double shear, the fillet throat, and the bolt's core diameter.

### The picture

Tear a stamp off a sheet of postage stamps. It comes away easily along the row of perforations, because the holes have removed most of the paper there. A riveted joint is the same: the row of rivet holes is a line of perforations across the plate, and the plate is weakest along it.

The rivets themselves can also fail, by shearing off like pins snipped with scissors, or by crushing the edge of their holes. A weld avoids the holes altogether by melting the two plates into one piece, so a welded joint can be nearly as strong as the plate.

### Twisted points

**Three ways a riveted joint fails, worked per pitch.** Take one strip of the joint, one pitch p wide, with n rivets of hole diameter d in that strip and plate thickness t.

| Failure | Area resisting | Strength |
| --- | --- | --- |
| Plate tears across the row of holes | (p − d)t | Pt = (p − d)tσt |
| Rivets shear | n × (π/4)d² per shear plane | Ps = n(π/4)d²τ, doubled in double shear |
| Rivets or plate crush (bearing) | n × dt, the projected area of each rivet | Pc = ndtσc |

The joint's strength is the least of the three. Calculations use the hole diameter, because a hot rivet swells to fill the hole when it is hammered. Two more failures, tearing the plate edge in front of a rivet and shearing it out, are prevented simply by keeping the margin at least 1.5d.

**Efficiency compares the joint with the plate it replaced.** η = least strength ÷ (p t σt), the strength of one pitch of unpierced plate. A single riveted lap joint reaches only about 50 to 60%; a double riveted butt joint about 75 to 85%; a triple riveted butt joint up to about 90%.

**Design for equal strength.** The best pitch makes the plate as strong as the rivets: set Pt = Ps and solve for p. A larger pitch would leave the rivets as the weak link; a smaller one would weaken the plate for no gain. Unwin's formula d = 6√t (t in mm, for plates over about 8 mm) gives a starting rivet size.

**Lap or butt, single or double shear.** In a lap joint the plates overlap, so the two pulls are not in line; the offset bends the joint and each rivet is cut across one plane (single shear). In a butt joint the plates meet edge to edge under cover plates (straps). With straps on both sides the load is symmetrical, and each rivet is cut across two planes (double shear), so it carries twice the load. Indian boiler practice credits double shear with 1.875 times single shear rather than 2, as a margin.

**More rows let you thin the outer row.** In diamond riveting the outermost row has a single rivet, so the plate there loses only one hole. Rows further in have more rivets, but the plate there carries less load, because the outer rivets have already taken their share. This gives the highest efficiency for butt joints with wide plates.

**In a boiler the long seam needs the better joint.** A cylinder's hoop stress, pD/2t, is twice its longitudinal stress, pD/4t (Engineering Mechanics & SOM, Topic 11). The longitudinal seam runs along the shell and carries the hoop stress, so it needs a high-efficiency butt joint. The circumferential seam carries only half as much stress, so a simpler lap joint is enough. With a joint efficiency ηl on the long seam, the shell thickness is t = pD/(2σtηl).

**Caulking and fullering make the seam steam-tight.** After riveting, the plate edge is bevelled at about 75° and hammered down with a blunt tool so that it presses hard on the plate below (caulking). Fullering uses a tool as wide as the plate edge, which makes a better seal and marks the plate less.

**A fillet weld fails across its throat.** In a 45° fillet of leg (size) s, the narrowest section through the weld runs from the root to the face at 45°: the throat, t = s cos 45° = 0.707s. The weld's strength is the throat area × the allowed stress.

```math
\text{one parallel fillet: } P = 0.707\,s\,l\,\tau \qquad \text{one transverse fillet: } P = 0.707\,s\,l\,\sigma_t \qquad \text{butt weld: } P = t\,l\,\sigma_t
```

A parallel (longitudinal) fillet runs along the load, so it is sheared along its length. A transverse fillet runs across the load; it carries a mix of stresses, but design codes treat it as tension on the throat. A lap joint welded on both sides doubles each figure. Each weld is made about 12.5 mm longer than calculated, because the start and end of a run are poor.

**Welded or riveted?** A weld needs no holes, cover plates or rivet heads, so the joint is lighter, cheaper in material, leak-proof, and up to 100% efficient. But welding needs skilled workers, heats the metal so that it distorts and keeps residual stresses, can hide cracks inside the weld, and cannot be taken apart. Riveted joints are easier to inspect, behave better under vibration and are used for some aluminium aircraft structures that cannot be welded.

**A bolt is named by its outside, but breaks at its core.** An M20 bolt has a major (nominal) diameter of 20 mm. The threads are cut into it, so the solid metal that carries the tension is the core, about 0.84 × 20 = 16.8 mm. A bolt in tension therefore fails through the threads. In a bolt of uniform strength, the plain shank is turned down to the core diameter or drilled hollow, so that the whole bolt stretches evenly and absorbs more shock energy before breaking.

**Bolts in shear should carry it on the plain shank.** A fitted bolt in a joint loaded sideways is sheared across the plane between the plates. If threads lie in that plane, the area is smaller and the threads act as notches. A bolt that will be tightened for a leak-proof joint also carries an initial tension, often taken as 2840d N (d in mm) in Indian practice, on top of the working load.

### Worked numbers

**A single riveted lap joint.** Plates 12 mm thick, rivet holes 20 mm, pitch 60 mm, one rivet per pitch. Allowable stresses: σt = 100 MPa, τ = 80 MPa, σc = 160 MPa.

- Tearing: (60 − 20) × 12 × 100 = 48.0 kN.
- Shearing: (π/4) × 20² × 80 = 25.1 kN.
- Crushing: 20 × 12 × 160 = 38.4 kN.
- The joint fails by shearing at 25.1 kN. The solid plate carries 60 × 12 × 100 = 72 kN per pitch, so η = 25.1/72 = 35%.

The pitch is too wide: the plate between holes is much stronger than the rivet. For equal strength, (p − 20) × 12 × 100 = 25 133, so p = 40.9 mm. The efficiency then rises to 25.1/(40.9 × 12 × 100) = 51%.

**Unwin's formula.** For a 16 mm plate, d = 6√16 = 24 mm.

**Boiler shell thickness.** Diameter 1.5 m, steam pressure 1.2 MPa, allowable tension 80 MPa, longitudinal joint efficiency 80%: t = 1.2 × 1500/(2 × 80 × 0.8) = 14.1 mm, so use 15 mm. The circumferential joint then needs an efficiency of only 1.2 × 1500/(4 × 15 × 80) = 37.5%.

**Parallel fillet welds.** A plate is lapped and welded with two parallel fillets of 10 mm size to carry 150 kN, with τ = 56 MPa. Each millimetre of weld length carries 2 × 0.707 × 10 × 56 = 792 N, so l = 150 000/792 = 189 mm. Adding 12.5 mm for the ends, make each weld about 202 mm long.

**A bolt in tension.** An M20 bolt with core diameter about 16.8 mm has a core area of (π/4) × 16.8² = 222 mm². At an allowable 80 MPa it carries 222 × 80 = 17.7 kN. Using the nominal 20 mm would overstate this by 42%.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Calculations use the rivet's own diameter. | They use the hole diameter, which the driven rivet fills. |
| A joint fails at the average of its three strengths. | It fails at the least of tearing, shearing and crushing. |
| Crushing area is the rivet's cross-section, (π/4)d². | It is the projected area d × t. (π/4)d² is the shearing area. |
| A lap joint puts its rivets in double shear. | Lap joints and single-strap butt joints give single shear; double-strap butt joints give double shear. |
| Efficiency = strength of joint ÷ strength of rivets. | Efficiency = strength of joint ÷ strength of the unpierced plate over one pitch. |
| The circumferential seam of a boiler needs the strongest joint. | The longitudinal seam does: it carries the hoop stress, twice the longitudinal stress. |
| Caulking strengthens the joint. | It only makes it leak-proof. |
| Weld throat = leg size. | Throat = 0.707 × leg size; size : throat = 1.414 : 1. |
| A parallel fillet weld fails in tension. | It fails in shear along its throat. |
| Welded joints have no drawbacks. | Distortion, residual stress, hidden defects and skilled labour; they cannot be dismantled. |
| An M20 bolt's strength uses a 20 mm diameter. | It breaks at the core, about 0.84 × 20 = 16.8 mm. |
| A bolt of uniform strength has a thicker shank. | Its shank is reduced to the core diameter (or drilled hollow), so it stretches evenly. |

## 10. Shafts, keys and couplings

A shaft must be strong enough not to break and stiff enough not to twist or bend too much; for long shafts, stiffness often decides the size. Keys and couplings pass the torque on, and the key is made the deliberate weak link. Exam setters twist the equivalent moments, the key proportions and its two ways of failing, and which coupling suits which misalignment.

### The picture

Hold a long screwdriver and turn a stiff screw. Your twist runs down the blade as torsion. Lean on the handle sideways at the same time and the blade also bends, so the steel feels both at once. A thin blade that is strong enough may still twist visibly before the screw moves: stiffness, not strength, is the problem.

The handle grips the blade through a flattened or splined end, so the blade cannot spin inside it. That grip is the key's job. If someone forces the screwdriver far too hard, it is better for that small grip to give way than for the blade to snap.

### Twisted points

**Torque comes from power and speed.** A shaft carrying P watts at N rpm has T = 60P/(2πN) N m. Halve the speed at the same power and the torque doubles, so slow shafts must be thicker. That is why a gearbox's output shaft is thicker than its input shaft.

**Strength under combined loads.** Gears, pulleys and the shaft's own weight bend it while it carries torque. At the surface the bending stress σ = 32M/πd³ and the shear stress τ = 16T/πd³ act together. Putting these into a failure theory (Topic 8) gives two equivalent moments:

```math
T_e = \sqrt{M^2 + T^2} \;\Rightarrow\; \tau_{max} = \frac{16T_e}{\pi d^3} \qquad M_e = \tfrac{1}{2}\left(M + \sqrt{M^2 + T^2}\right) \;\Rightarrow\; \sigma_{max} = \frac{32M_e}{\pi d^3}
```

Te (with the maximum shear stress theory) is used for ductile steel shafts, Me (with the maximum normal stress theory) for brittle ones. When the loads are sudden or cyclic, design codes multiply M and T by shock factors (around 1.5 to 3) before combining them.

**Stiffness can decide the size.** The twist of a shaft is θ = TL/(GJ) radians. Too much twist upsets the timing of cams and the meshing of gears, and makes long line shafts wind up and spring back. A common limit is 0.25° per metre of length. Because J grows as d⁴ while the strength grows as d³, a long, lightly stressed shaft is often sized by twist, not by stress. Bending stiffness matters too: a shaft that sags too much makes gears mesh badly and bearings run on their edges.

**Hollow shafts save weight.** The stress in a twisted shaft is zero at the centre and largest at the surface, so the core does little work. Removing it costs little strength but saves a lot of weight. A hollow shaft with its bore half its outside diameter, made 2% larger outside to keep the same strength, weighs about 22% less than the solid shaft it replaces. It is also stiffer for its weight. The cost is a larger outside diameter and the work of boring it.

**A keyway weakens the shaft.** Cutting a keyway removes metal at the surface, where the stress is highest, and adds sharp corners. A standard keyway reduces the shaft's torque capacity to about 75% of the plain shaft (Moore's formula gives the exact factor from the keyway's width and depth). That is one reason the shaft is made a size larger than strength alone would need.

**Sunk key proportions and their logic.** A rectangular sunk key has width w = d/4 and thickness t = 2w/3; a square key has w = t = d/4. Half its thickness sits in the shaft and half in the hub. A taper key (1 in 100) is driven in tight to hold the hub firmly; a gib-head key has a head so that it can be pulled out.

**A key fails by shearing or by crushing.** The torque pushes the key's sides sideways. Shearing happens across the key's width at the shaft surface: area w × l, force acting at radius d/2. Crushing happens on the half-thickness pressed against the keyway side: area (t/2) × l.

```math
T = l\,w\,\tau\,\frac{d}{2} \;\text{(shear)} \qquad T = l\,\frac{t}{2}\,\sigma_c\,\frac{d}{2} \;\text{(crushing)}
```

The key is equally strong in both when w/t = σc/(2τ). With σc = 2τ, which is common, that means w = t: a square key. For a key as strong in shear as the shaft itself, with w = d/4 and the same τ, equate πd³τ/16 to l(d/4)τ(d/2): the length must be l = πd/2 = 1.571d.

**Other keys and why they exist.** A saddle key sits on the shaft without a keyway and holds by friction only, so it is for light torque. A tangent key is a pair of taper keys set at 90° for heavy torque that reverses. A Woodruff key is a semicircular disc; it rocks in its curved seat and aligns itself, which suits tapered shaft ends, but its deep seat weakens the shaft, so it carries light torque. A feather key is fixed to one part and lets the hub slide along the shaft. Splines are many keys cut on the shaft itself; they carry more torque and let a gear slide, as in vehicle gearboxes.

**Rigid couplings need exact alignment.** A muff (sleeve) coupling is a hollow cylinder keyed over both shaft ends; its usual proportions are outside diameter 2d + 13 mm and length 3.5d. A clamp (split muff) coupling is the same muff in two halves bolted together, so it can be fitted without moving the shafts. A flange coupling has a flange keyed on each shaft and the flanges bolted together; the torque passes through the bolts in shear at the bolt circle. Rigid couplings cannot take any misalignment: a small error bends the shafts and wrecks the bearings.

**Flexible couplings forgive.** A bushed-pin coupling has rubber bushes round its pins, which absorb shock and a little angular or sideways misalignment. An Oldham coupling has a centre disc with two tongues at right angles sliding in the slots of the two flanges, so it carries torque between parallel shafts offset sideways. A universal (Hooke's) joint connects shafts meeting at an angle.

**A double Hooke's joint gives steady output.** A single Hooke's joint makes the output speed swing between ω cos α and ω/cos α twice each turn. Two joints, one at each end of an intermediate shaft, cancel the swing if the intermediate shaft makes equal angles at both ends and its two yokes lie in the same plane. A vehicle's propeller shaft is arranged exactly this way.

### Worked numbers

**Shaft for strength.** 20 kW at 300 rpm, allowable shear stress 40 MPa.

- T = 60 × 20 000/(2π × 300) = 637 N m = 637 000 N mm.
- d³ = 16T/(πτ) = 16 × 637 000/(π × 40) = 81 060 mm³, so d = 43.3 mm. Use 45 mm.

**The same shaft for stiffness.** Length 2 m, G = 80 GPa, limit 0.25° per metre = 0.004363 rad/m.

- A 45 mm shaft: J = π × 45⁴/32 = 402 600 mm⁴, so the twist is 637 000/(80 000 × 402 600) = 1.98 × 10⁻⁵ rad/mm = 1.13° per metre. Far too much.
- Needed J = T/(G × θ per mm) = 637 000/(80 000 × 4.363 × 10⁻⁶) = 1.82 × 10⁶ mm⁴, so d⁴ = 32J/π = 1.86 × 10⁷ and d = 65.7 mm. Use 70 mm.

Stiffness, not strength, decides this shaft.

**Key length.** A 50 mm shaft carries 1 kN m through a 14 mm wide, 9 mm thick key. Allowable τ = 60 MPa and σc = 120 MPa.

- Shear: l = 2T/(w d τ) = 2 × 1 000 000/(14 × 50 × 60) = 47.6 mm.
- Crushing: l = 4T/(t d σc) = 4 × 1 000 000/(9 × 50 × 120) = 74.1 mm.
- Crushing governs: make the key 75 mm long. For a thin rectangular key, crushing often decides.

**Flange coupling bolts.** 3 kN m through 6 bolts on a 150 mm bolt circle, bolt shear stress 40 MPa. Force per bolt = 2T/(nD) = 2 × 3 000 000/(6 × 150) = 6667 N. Bolt area = 6667/40 = 167 mm², so d = 14.6 mm: use M16 bolts.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Ductile shafts are designed with Me. | With Te = √(M² + T²) and the maximum shear stress theory. Me is for brittle shafts. |
| A shaft strong enough is always good enough. | Long shafts are often sized by twist (about 0.25° per metre), which can need a much bigger shaft. |
| A hollow shaft is weaker for its weight. | It is stronger and stiffer for its weight, because the core carries little stress. |
| A keyway does not affect the shaft. | It cuts the torque capacity to about 75% of the plain shaft. |
| A key fails only by shear. | It can also crush on its sides. A rectangular key often fails by crushing first. |
| A square key is chosen for looks. | With σc = 2τ, only a square key is equally strong in shear and crushing. |
| The key should be stronger than the shaft. | It is made the weakest part, so that it fails first and protects the shaft and hub. |
| A Woodruff key is for heavy torque. | Its deep seat weakens the shaft; it is for light torque and tapered shaft ends. |
| A muff coupling can join misaligned shafts. | All rigid couplings need exact alignment. Use a flexible coupling for misalignment. |
| An Oldham coupling joins shafts at an angle. | It joins parallel shafts offset sideways. Hooke's joint joins shafts at an angle. |
| A single Hooke's joint gives a steady output speed. | Its output speed varies twice per turn. Two joints arranged correctly cancel it. |

## 11. Bearings

A bearing lets a shaft turn while carrying its load, by either floating it on oil or rolling it on balls or rollers. A plain bearing works only while its oil film holds; a rolling bearing works until its races wear out by fatigue. Exam setters twist the kinds of lubrication, the bearing characteristic number, the cube law for ball bearing life, and the choice between sliding and rolling bearings.

### The picture

Drive a car fast through a deep puddle. The tyre pushes a wedge of water ahead of itself, the water's pressure lifts the tyre clear of the road, and the steering goes light: aquaplaning. On a road it is dangerous. In a journal bearing it is exactly what is wanted. The turning shaft drags oil into the narrowing gap beneath it, the oil's pressure lifts the shaft, and metal never touches metal.

The other way to move a heavy load is to roll it on logs, as builders once moved great stones. Rolling needs far less force to start than sliding. That is the ball or roller bearing: hard steel balls rolling between two rings.

### Twisted points

**How the oil wedge forms.** Under load, the journal sits slightly off-centre in its bearing, so the gap between them narrows on one side. As the journal turns, it drags oil round with it, into the narrowing part of the gap. Oil does not compress, so pressure builds up there, high enough to carry the load. The faster the journal and the thicker the oil, the greater the pressure and the thicker the film. This is hydrodynamic or thick-film lubrication.

**Hydrodynamic bearings wear at start and stop.** The wedge needs speed. At rest the journal sits on the bearing; as it starts, the film is too thin and the high spots of the surfaces rub (boundary lubrication), until the speed builds the full film. Most wear in a plain bearing happens in those moments. A hydrostatic bearing avoids this by pumping oil in under pressure from outside, so the film exists even at zero speed. It suits heavy, slow or often-stopped loads, such as large telescopes and machine tool slides.

**The bearing characteristic number tells you which regime you are in.** ZN/p groups the three things that make a thick film: Z, the oil's viscosity; N, the speed; and p, the bearing pressure, which squeezes the film. Plot the friction coefficient against ZN/p and the curve falls steeply, reaches a minimum, then rises slowly.

| Region on the curve | Lubrication | What happens |
| --- | --- | --- |
| Low ZN/p, left of the minimum | Boundary (thin film) | Surfaces touch at high spots; friction is high and unstable |
| At the minimum (the bearing modulus K) | Mixed | Film just thick enough; any drop in speed or rise in load breaks it |
| High ZN/p, right of the minimum | Thick film (hydrodynamic) | Surfaces fully separated; friction comes only from shearing the oil |

Bearings are designed to run at about 3K, so that a fall in speed or a rise in load leaves them still in the thick-film region. With heavy shocks, designers go up to 15K.

**In the thick-film region, friction rises with speed.** Once the surfaces are apart, the only friction is shearing the oil, and that grows with viscosity and speed. Petroff's equation for a lightly loaded journal shows it: μ = 2π²(ZN/p)(r/c), where c is the radial clearance. So a thick film is not frictionless; it is low-friction and wear-free.

**The Sommerfeld number combines it all.** S = (ZN/p)(r/c)² is dimensionless. Two bearings with the same S and the same l/d behave alike, whatever their size. The clearance ratio c/r is usually about 0.001.

**Heat sets the limit.** The friction power, μ × W × the journal's surface speed, becomes heat in the oil. As the oil warms, its viscosity falls, ZN/p falls, and the film thins. If the oil or the surroundings cannot carry the heat away, the bearing overheats and seizes. Long bearings carry more load but run hotter and are sensitive to misalignment; short bearings cool better. The length-to-diameter ratio l/d is usually 0.5 to 2.

**Rolling bearings are rated by life, not by a stress.** Each time a ball passes a point on a race, that point is squeezed hard. After many millions of squeezes the steel fails by fatigue: tiny flakes break off the surface (pitting). So a rolling bearing's life is a number of revolutions, and it depends on the load:

```math
L_{10} = \left(\frac{C}{P}\right)^{k} \text{ million revolutions}, \quad k = 3 \text{ (ball)},\ k = \tfrac{10}{3} \text{ (roller)} \qquad L_h = \frac{L_{10} \times 10^6}{60\,N}
```

C, the dynamic load rating from the maker's catalogue, is the load that gives a life of one million revolutions. L10 is the life that 90% of a batch of identical bearings reach; a few fail sooner, and the average life is several times longer. Life varies as 1/P³ for balls: double the load and the life falls to one eighth.

**Mixed loads are turned into one equivalent load.** A bearing usually carries a radial load Fr and an axial load Fa at once. The catalogue gives factors X and Y so that P = XFr + YFa, the pure radial load that would do the same damage. A separate static rating C0 limits the load a bearing can carry while standing still without denting its races.

**Sliding or rolling?**

| Plain (sliding) bearing | Rolling bearing |
| --- | --- |
| High friction at starting; low once the film forms | Low friction from rest |
| Quiet; damps vibration and shock | Noisier; dislikes shock |
| Small outer diameter; can be split, as on a crankshaft | Larger outer diameter; must slide on from the shaft end |
| Life unlimited if the film holds | Limited life: fails by fatigue |
| Needs a steady oil supply and care | Standard sizes, easy to replace, little lubricant |

**Pivots and collars rub like clutches.** A footstep or pivot bearing carries a vertical shaft's thrust on its end; a collar bearing carries thrust on rings along the shaft. Their friction torque uses the same uniform pressure and uniform wear formulas as plate and cone clutches (Topic 5), and the lost power is 2πNT/60.

### Worked numbers

**Ball bearing life.** C = 30 kN, equivalent load P = 5 kN, 1000 rpm.

- L10 = (30/5)³ = 216 million revolutions.
- Lh = 216 × 10⁶/(60 × 1000) = 3600 hours.
- A roller bearing with the same rating: (30/5)^(10/3) = 392 million revolutions, or 6540 hours.

**Choosing a bearing for a target life.** For 20 000 hours at 1000 rpm, L10 = 20 000 × 60 × 1000 = 1200 million revolutions. With P = 5 kN, a ball bearing needs C = 5 × 1200^(1/3) = 5 × 10.6 = 53 kN.

**Journal bearing.** A 100 mm journal, 100 mm long (l/d = 1), carries 20 kN at 900 rpm.

- Bearing pressure p = 20 000/(100 × 100) = 2 N/mm².
- Surface speed = π × 0.1 × 900/60 = 4.71 m/s.
- With μ = 0.005 in the thick-film region, the heat produced is 0.005 × 20 000 × 4.71 = 471 W, which the oil must carry away.

**Pivot bearing.** A flat pivot of radius 100 mm carries 10 kN at 300 rpm with μ = 0.05. On uniform wear, T = ½ × 0.05 × 10 000 × 0.1 = 25 N m, and the power lost is 2π × 300 × 25/60 = 785 W.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A hydrodynamic bearing works at any speed. | It needs speed to form the oil wedge. At rest and at starting it runs in boundary lubrication. |
| A hydrostatic bearing is the same as a hydrodynamic one. | A hydrostatic bearing gets its pressure from a pump, so it works even at zero speed. |
| Boundary lubrication means a thick oil film. | It is a thin film, a few molecules thick, with the surfaces partly touching. |
| A bearing should run at its bearing modulus K. | At K the film is just about to fail. Bearings run at about 3K for safety. |
| A higher ZN/p always means more friction. | Below K, friction falls as ZN/p rises; above K, it rises slowly. |
| The bearing characteristic number is μN/p with μ the friction coefficient. | The μ (or Z) in ZN/p is the oil's viscosity. |
| A thick-film bearing has zero friction. | It still shears the oil, and that friction grows with speed and viscosity. |
| Ball bearing life falls in proportion to the load. | It falls as the cube of the load: double the load, one eighth the life. |
| L10 is the average life. | It is the life 90% of bearings reach; the average is several times longer. |
| Roller bearings run faster than ball bearings. | Ball bearings suit higher speeds; roller bearings carry more radial load. |
| Rolling bearings never wear out if lubricated. | They fail by surface fatigue after a finite number of revolutions. |

## Further reading

Level 2 follows the standard textbook treatment of each topic. Design figures such as key proportions, the 0.25° per metre twist limit, the shock factors and the typical joint efficiencies are rounded handbook values, so another book or a design data book may quote slightly different numbers. The reasoning behind them does not change.

- S. S. Rattan, *Theory of Machines*: Topics 1 to 7, with clear diagrams and many solved problems.
- R. S. Khurmi and J. K. Gupta, *Theory of Machines* and *A Textbook of Machine Design*: every topic, at the level of JE papers.
- Thomas Bevan, *The Theory of Machines*: the classic treatment of mechanisms, governors, balancing and vibrations.
- J. E. Shigley, J. J. Uicker and G. R. Pennock, *Theory of Machines and Mechanisms*: Topics 1 to 3 and 7 in depth.
- V. B. Bhandari, *Design of Machine Elements*: Topics 8 to 11, with Indian standards and design data.
- R. G. Budynas and J. K. Nisbett, *Shigley's Mechanical Engineering Design*: the reasons behind failure theories, fatigue, shafts and bearings.
