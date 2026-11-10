# Engineering Mechanics and SOM Level 3: Tricky Questions

Nov 10, 2026 · @Rohith

## How to use Level 3

Level 3 comes after the [Level 1 guide](../) and the [Level 2 theory](../level-2/). It has the same 11 topics in the same order, but only the parts examiners twist into traps. Finish a topic in Levels 1 and 2 first, then do it here.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Formulas worth adding | The formulas that Level 1 leaves out but harder papers use. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from GATE, ESE, ISRO, SSC JE and state AE and JE exams. Each solution goes step by step and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam, the hardest objective paper here. GATE ME is the graduate entrance test for mechanical engineering. Both ask about the same mechanics and SOM ideas as JE exams, with an extra twist. If you can solve these, JE questions on the same idea feel easy.

**Statement questions.** ESE often gives two statements and these four options. Check each statement on its own first. Only if both are true, ask whether Statement II is the reason for Statement I.

| Option | Meaning |
| --- | --- |
| (a) | Both true, and II explains I |
| (b) | Both true, but II does not explain I |
| (c) | I true, II false |
| (d) | I false, II true |

**Units used throughout.** Work in N and mm, so stress comes out in MPa (N/mm²) and E = 200 GPa is written 200,000 MPa. Convert kN·m to N·mm by multiplying by 10⁶ before dividing by I or Z. Most wrong options in numericals are a units slip of exactly 10³ or 10⁶.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam. On the website, a topic with three or more four-option questions also gets a timed Practise this topic card.

## 1. Forces, friction, centroid and moment of inertia

The traps here come from three habits: taking the normal reaction as W cos θ even when other forces press on the surface, treating a rope round a post like flat friction, and thinking a square's moment of inertia changes when you turn it.

### Going deeper

| Idea | What it means |
| --- | --- |
| Normal reaction | N is whatever the surface must push back with. On a slope it is W cos θ only when nothing else presses on the block. A force pushing into the surface adds to N, and a force pulling away takes from it. |
| Friction below the limit | μN is the most friction a surface can give. Before slipping, friction equals just what is needed for balance, and that can be anything from zero up to μN. |
| Friction direction | Friction opposes the motion that is about to happen. Pushing a block up a slope and holding it from sliding down need different forces, because friction flips direction. |
| Least pull | The smallest force that drags a block lies at the angle of friction φ to the surface, not along it. On level ground it is W sin φ. |
| Rope round a post | The tension grows by the factor e^(μθ) across the wrap, where θ is the total wrap angle in radians. Two full turns is 4π. The post's radius does not appear. |
| Smooth contact | A smooth surface pushes only at right angles to itself. A ladder with smooth ends cannot stand on its own; something must supply a horizontal push. |
| Three-force body | If three non-parallel forces hold a body in balance, their lines of action meet at one point. Lami's theorem then gives each force from the sines of the opposite angles. |
| Centroidal axes of a square | For a square, Ix = Iy and the product of inertia is zero, so every axis through the centre has the same I = a⁴/12. The diagonal is one of them. The same holds for a circle, an equilateral triangle and any regular polygon. |
| Parallel axis theorem | I = IG + Ah² works only when one of the two axes passes through the centroid. To move between two off-centre axes, go through the centroid. |
| Perpendicular axis theorem | Iz = Ix + Iy holds only for flat areas (laminas), with the z axis at right angles to the plane. |

### Formulas worth adding

```math
P_{\text{up}} = W(\sin\theta + \mu\cos\theta), \qquad P_{\text{hold}} = W(\sin\theta - \mu\cos\theta)
```

These are for a force along the slope. Up the slope, friction acts down; holding the block, friction acts up.

```math
P_{\min} = W\sin(\theta + \phi) \ \text{at angle } \phi \text{ to the slope}, \qquad \tan\phi = \mu
```

```math
a = g(\sin\theta - \mu\cos\theta) = g\cos\theta\,(\tan\theta - \mu), \qquad t = \sqrt{\frac{2s}{a}}
```

This is a block sliding down from rest. It slides only if μ < tan θ.

```math
\frac{T_1}{T_2} = e^{\mu\theta}, \qquad \theta = 2\pi n \ \text{for } n \text{ full turns}
```

```math
\frac{P}{\sin\alpha} = \frac{Q}{\sin\beta} = \frac{R}{\sin\gamma}
```

This is Lami's theorem: each force over the sine of the angle between the other two.

```math
I_{\text{any centroidal axis, square}} = \frac{a^4}{12}, \qquad I_{\text{side}} = \frac{a^4}{3}, \qquad J_{\text{centre}} = \frac{a^4}{6}
```

### Doubts cleared

**Doubt: is friction always μN?** No. μN is the limit. A 100 N block on a floor with μ = 0.3 pushed sideways by 20 N does not move, and the friction is 20 N, not 30 N. Use F = μN only when the question says the body is just about to move, or is moving.

**Doubt: why is the moment of inertia about the diagonal the same as about the middle line?** Turning an axis through the centroid changes I only if Ix and Iy differ or the product of inertia is not zero. For a square, Ix = Iy and the product of inertia is zero, so the answer is a⁴/12 at any angle. A rectangle is different: its I depends on the angle.

**Doubt: does a thicker post hold a rope better?** No. The ratio e^(μθ) has no radius in it. Only the friction coefficient and the total wrap angle matter, which is why sailors add turns instead of looking for a fatter post.

**Doubt: are the angle of repose and the angle of friction the same?** For a block on a plane, yes. The block just slides when tan α = μ, and tan φ = μ by definition, so α = φ.

**Doubt: does a bigger contact area give more friction?** No. Dry friction depends on the normal reaction, not on the area. Spreading the same load over more area lowers the pressure by the same factor, so the friction stays the same.

### Tricky past questions with solutions

**Q1. GATE ME 2021 (Shift 2).** A block of negligible mass rests on a surface inclined at 30° to the horizontal. A vertical force of 900 N (downward) and a horizontal force of 750 N (pushing towards the slope) are applied, and the block is just about to slide. The coefficient of static friction between the block and the surface, to two decimal places, is \_\_\_\_\_\_ (numerical answer).

*Answer: about 0.17 (accepted range 0.16 to 0.19).*

1. The block has no weight, so only the two forces, the normal reaction and friction act on it.
2. Along the slope, taking up as positive: 750 cos 30° − 900 sin 30° = 649.5 − 450 = 199.5 N. The net push is up the slope, so friction acts down the slope.
3. At right angles to the slope, both forces press in: N = 750 sin 30° + 900 cos 30° = 375 + 779.4 = 1154.4 N.
4. Just about to slide: μ = 199.5 ÷ 1154.4 = 0.173.

**The trap:** taking N = 900 cos 30° only. The horizontal force also presses the block into the slope. Leaving out its 375 N gives μ = 0.26.

**Q2. GATE ME 2014 (Shift 4).** A ladder AB, 5 m long and weighing 600 N, rests against a wall. The contacts at the floor (B) and the wall (A) are frictionless. The top A touches the wall 3 m above the floor, so the foot B is 4 m from the wall. A horizontal force P at the foot B holds the ladder in balance. The magnitude of P in newtons is \_\_\_\_\_\_ (numerical answer).

*Answer: 400 N.*

1. The forces are: the weight at the ladder's middle; the floor reaction at B, straight up (smooth floor); the wall reaction at A, horizontal (smooth wall); and P at B, towards the wall.
2. Horizontal balance: P equals the wall reaction RA.
3. Moments about B: the weight acts 2 m from B horizontally (half of 4 m), and RA acts 3 m above B. So 600 × 2 = RA × 3, and RA = 400 N.
4. P = 400 N.

**The trap:** swapping the arms. Taking the weight's arm as 1.5 m and RA's arm as 4 m gives 225 N. The weight's arm is horizontal, and the wall reaction's arm is vertical.

**Q3. VIZAG MT Mechanical 2013.** The area moment of inertia of a square of size 1 unit about its diagonal is: (a) 1/3 (b) 1/4 (c) 1/12 (d) 1/6

*Answer: (c) 1/12.*

1. The diagonal cuts the square into two triangles. Each has base √2 (the diagonal) and height 1/√2 (half the other diagonal).
2. One triangle about its base: bh³/12 = √2 × (1/√2)³ ÷ 12 = 1/24.
3. Two triangles: 2 × 1/24 = 1/12.
4. Quicker: the diagonal passes through the centroid, and every centroidal axis of a square gives a⁴/12.

**The trap:** 1/3 is about an edge and 1/6 is the polar moment about the centre. Students expect the longer diagonal to give a larger value, but it does not.

**Q4. UPPSC AE Mechanical 2019 (Paper I, held 13 December 2020).** A block of mass M is released from point P on a rough plane inclined at θ. The coefficient of friction is μ, with μ < tan θ. The time it takes to reach a point Q on the plane, where PQ = s, is: (a) √(2s ÷ (g cos θ (tan θ − μ))) (b) √(2s ÷ (g cos θ (tan θ + μ))) (c) √(2s ÷ (g sin θ (tan θ − μ))) (d) √(2s ÷ (g sin θ (tan θ + μ)))

*Answer: (a).*

1. The block slides down, so friction acts up the slope: μMg cos θ.
2. Net force down the slope: Mg sin θ − μMg cos θ. So a = g (sin θ − μ cos θ) = g cos θ (tan θ − μ).
3. From rest, s = ½at², so t = √(2s ÷ a), which is option (a).

**The trap:** (b) adds friction, as if the block were going up. (c) takes out sin θ instead of cos θ, but g sin θ (tan θ − μ) is not the same as g (sin θ − μ cos θ). The condition μ < tan θ only tells you the block does slide.

**Q5. ISRO VSSC Technical Assistant Mechanical, 25 February 2018.** An elephant is stopped by a rope wound twice round the rough trunk of a tree. The elephant pulls with 1000 kgf and the coefficient of friction between rope and trunk is 0.3. The pull needed at the other end of the rope is: (a) 1000 kgf (b) 300 kgf (c) 700 kgf (d) 23 kgf

*Answer: (d) 23 kgf.*

1. Two full turns: θ = 2 × 2π = 4π = 12.57 rad.
2. μθ = 0.3 × 12.57 = 3.77, and e^3.77 = 43.4.
3. The elephant's side is the tight side: T2 = 1000 ÷ 43.4 = 23 kgf.

**The trap:** (b) is μ × 1000, treating the rope like a block on a floor. (c) is 1000 − 300. One turn (2π) gives 152 kgf. The exponential is why a few turns let one person hold an elephant.

**Q6. ESE Mechanical 2022.** Statement (I): For moderate speeds, the force of friction remains nearly constant and decreases slightly with increase of speed. Statement (II): Friction depends on the extent of the area but is independent of the normal reaction. Choose the option using the ESE statement key.

*Answer: (c) Statement I is true, Statement II is false.*

1. Statement I is a law of kinetic friction: nearly constant at moderate speeds, falling a little as speed rises. True.
2. Statement II has the law backwards. Friction does not depend on the area of contact, and it is proportional to the normal reaction. False.

**The trap:** Statement II puts both key words, area and normal reaction, in the sentence, just in the wrong places. Read which one each word is attached to.

## 2. Dynamics: laws of motion, work and energy, projectiles

Dynamics traps sit in rolling bodies and impacts. A point at rest can still be accelerating, rolling stores energy in the spin as well, and the coefficient of restitution is a ratio of speeds, not heights.

### Going deeper

| Idea | What it means |
| --- | --- |
| Rolling without slipping | The centre moves at v = rω and accelerates at a = rα, with r the radius it rolls on. The point touching the ground has zero velocity at that instant. |
| Instantaneous centre | A rolling wheel turns about its contact point at each instant. Any point's speed is ω times its distance from the contact point, so the top moves at 2v. |
| Contact point acceleration | Its velocity is zero, but its acceleration is rω², pointing up towards the centre. The forward and backward parts cancel; the centripetal part does not. |
| Rolling kinetic energy | KE = ½mv² + ½IGω². The spin's share is 1/2 for a ring, 1/3 for a disc and 2/7 for a solid sphere. |
| Rolling down a slope | a = g sin θ ÷ (1 + k²/r²). Mass and size cancel. The sphere wins, then the disc, then the ring. A body that slides on a smooth slope beats all of them. |
| Work by contact forces | A smooth surface's reaction is at right angles to the motion, so it does no work. Friction in pure rolling also does no work, because the contact point does not slide. |
| Impact | Momentum is kept along the line joining the centres. The coefficient of restitution e = speed of separation ÷ speed of approach. |
| Elastic impact on a body at rest | v1 = (m1 − m2)u ÷ (m1 + m2) and v2 = 2m1u ÷ (m1 + m2). Equal masses swap velocities. A light ball bounces back off a heavy one. |
| Bouncing ball | Each bounce multiplies the speed by e and the height by e². After n bounces the height is e^(2n) times the drop. |
| Annular disc | I = m(R1² + R2²) ÷ 2, with a plus sign. The mass sits away from the centre, so a ring of the same mass has a larger I than a solid disc. |

### Formulas worth adding

```math
v_P = \omega \times (\text{distance of P from the contact point}), \qquad v_{\text{top}} = 2v
```

```math
KE_{\text{rolling}} = \tfrac{1}{2}mv^2\left(1 + \frac{k^2}{r^2}\right), \qquad a_{\text{slope}} = \frac{g\sin\theta}{1 + k^2/r^2}
```

Here k is the radius of gyration about the centre and r the radius the body rolls on.

```math
I_{\text{annular disc}} = \frac{m(R_1^2 + R_2^2)}{2}
```

```math
v_1 = \frac{(m_1 - e\,m_2)u_1 + (1+e)m_2 u_2}{m_1 + m_2}, \qquad v_2 = \frac{(1+e)m_1 u_1 + (m_2 - e\,m_1)u_2}{m_1 + m_2}
```

```math
\Delta KE = \frac{m_1 m_2 (1 - e^2)(u_1 - u_2)^2}{2(m_1 + m_2)}
```

```math
e = \sqrt{\frac{h_1}{h_0}}, \qquad h_n = e^{2n} h_0
```

### Doubts cleared

**Doubt: if the contact point has zero velocity, how can it accelerate?** Its velocity is zero only for that instant. A moment later the point is lifting off the ground, so its velocity is changing. A ball at the top of its throw is the same: zero velocity, but still accelerating at g.

**Doubt: does friction take energy from a wheel that rolls without slipping?** No. The contact point does not slide, so friction does no work. That is why energy is conserved for a ball rolling down a rough slope, as long as it does not skid.

**Doubt: which reaches the bottom first: a ring, a disc or a sphere?** The one with the smallest k²/r²: the sphere (2/5), then the disc (1/2), then the ring (1). A heavy ring and a light ring arrive together, because mass cancels.

**Doubt: do equal masses always swap velocities?** Only in a head-on impact with e = 1. With e less than 1 the striker keeps (1 − e)u ÷ 2 and the other ball gets (1 + e)u ÷ 2.

**Doubt: is momentum conserved when a ball hits the floor?** Not for the ball alone. The floor gives it an impulse. For a fixed surface, use only the coefficient of restitution: rebound speed = e × speed of approach.

### Tricky past questions with solutions

**Q1. GATE ME 2012.** A solid disc of radius r rolls without slipping on a horizontal floor with angular velocity ω and angular acceleration α. The magnitude of the acceleration of the point of contact on the disc is: (a) zero (b) rα (c) √((rα)² + (rω²)²) (d) rω²

*Answer: (d) rω².*

1. The centre accelerates forward at rα, because the disc rolls.
2. The contact point, relative to the centre, has a tangential part rα, pointing backward at the bottom, and a centripetal part rω², pointing up to the centre.
3. Add them: forward rα and backward rα cancel, leaving rω² upward.

**The trap:** (a) mixes up velocity and acceleration. (c) is the answer for a disc turning about a fixed axle, where the centre does not accelerate. Rolling makes the centre's acceleration cancel the tangential part.

**Q2. GATE ME 2014 (Shift 3).** An annular disc has mass m, inner radius R and outer radius 2R. The disc rolls on a flat surface without slipping. If the velocity of the centre of mass is v, the kinetic energy of the disc is: (a) 9/16 mv² (b) 11/16 mv² (c) 13/16 mv² (d) 15/16 mv²

*Answer: (c) 13/16 mv².*

1. I about the centre: m(R² + 4R²) ÷ 2 = 5mR² ÷ 2.
2. It rolls on its outer edge, so ω = v ÷ 2R.
3. KE = ½mv² + ½ × (5mR² ÷ 2) × v² ÷ 4R² = ½mv² + 5mv² ÷ 16.
4. Total: 8/16 + 5/16 = 13/16 mv².

**The trap:** using I = m(4R² − R²) ÷ 2, as if the hole subtracted from the radius, gives 3mR² ÷ 2 and option (b), 11/16. The plus sign is right: for a given mass, a hole in the middle pushes the mass outward.

**Q3. GATE ME 2016 (Shift 1).** A point mass M is released from rest and slides down a smooth spherical bowl of radius R, starting from a height H above the bottom. The velocity of the mass at the bottom of the bowl is: (a) √(gH) (b) √(2gR) (c) √(2gH) (d) 0

*Answer: (c) √(2gH).*

1. The bowl is smooth, so its reaction is always at right angles to the path and does no work.
2. Only gravity does work: MgH = ½Mv².
3. v = √(2gH). The radius does not enter.

**The trap:** (b) uses the bowl's radius as the drop. That is right only if the mass starts at the rim, where H = R. For energy, only the height fallen matters, not the shape of the path.

**Q4. GATE ME 2015 (Shift 2).** A small ball of mass 1 kg moving at 12 m/s has a direct central impact with a stationary ball of mass 2 kg. The impact is perfectly elastic. The speed of the 2 kg ball after the impact, in m/s, is \_\_\_\_\_\_ (numerical answer).

*Answer: 8 m/s (accepted range 7.8 to 8.2).*

1. Momentum: 1 × 12 = 1 × v1 + 2 × v2.
2. Perfectly elastic, e = 1: v2 − v1 = 12.
3. Add the two equations: 3v2 = 24, so v2 = 8 m/s.
4. Then v1 = −4 m/s: the light ball bounces back.

**The trap:** letting the balls move on together gives 4 m/s, which is the plastic case (e = 0). Swapping velocities gives 12 m/s, which works only for equal masses.

**Q5. KPSC AE 2017 (Specific Paper).** A heavy elastic ball drops from the ceiling of a room and, after rebounding once from the floor, reaches a height of three-fourths of the ceiling height. The coefficient of restitution between the ball and the floor is: (a) √3/2 (b) √2/3 (c) 1/3 (d) 1

*Answer: (a) √3/2.*

1. Speed just before hitting the floor: u = √(2gh).
2. Speed just after: v = √(2g × 3h/4).
3. e = v ÷ u = √(3/4) = √3/2, about 0.87.

**The trap:** e is a ratio of speeds. Heights go with speed squared, so the height ratio 3/4 is e², not e.

## 3. Stress, strain, Hooke's law and elastic constants

These questions test whether you know how the elastic constants connect and what quietly cancels out, like the area in a bar stretching under its own weight.

### Going deeper

| Idea | What it means |
| --- | --- |
| Limits of Poisson's ratio | For real materials ν lies between 0 and 0.5. At ν = 0.5 the volume cannot change: the material is incompressible and K becomes infinite. Rubber is close to this. |
| E against G | E ÷ G = 2(1 + ν), which lies between 2 and 3. So G is always between a third and a half of E. |
| Volume change of a bar | A bar in tension changes volume by ε(1 − 2ν). The length grows by ε and each side shrinks by νε. |
| Volume change under three stresses | εv = (σx + σy + σz)(1 − 2ν) ÷ E. Equal pressure on all sides gives εv = p ÷ K. |
| Self-weight | At a depth x from the free end the stress is γx, the weight below divided by the area. The area cancels, so the stretch is γL²/2E whatever the diameter. |
| Half of the end load | A bar stretches under its own weight W by WL/2AE: half of what the same W would do hung at the end. |
| Cone under its own weight | A cone hung from its base stretches by γL²/6E, a third of a prism's. There is less weight lower down. |
| Strain energy | U = P²L/2AE = σ² ÷ 2E × volume. For the same peak stress, a uniform bar stores the most energy, because every part is stressed fully. |
| Sudden and impact load | A load dropped from zero height gives twice the static stress. Dropped from a height, the factor is larger. |
| Comparing two bars | Write δ = PL/AE for each and divide. Area goes with d², so doubling the diameter divides the stretch by four. |

### Formulas worth adding

```math
E = 2G(1+\nu) = 3K(1-2\nu), \qquad E = \frac{9KG}{3K+G}
```

```math
\varepsilon_v = \varepsilon(1 - 2\nu) \ \text{(bar in tension)}, \qquad \varepsilon_v = \frac{(\sigma_x + \sigma_y + \sigma_z)(1-2\nu)}{E}
```

```math
\delta_{\text{self weight}} = \frac{\gamma L^2}{2E} = \frac{WL}{2AE}, \qquad \delta_{\text{cone}} = \frac{\gamma L^2}{6E}
```

Here γ is the weight per unit volume (ρg) and W the bar's total weight.

```math
\delta_{\text{taper}} = \frac{4PL}{\pi E d_1 d_2}, \qquad U = \frac{P^2 L}{2AE} = \frac{\sigma^2}{2E} \times V
```

```math
\sigma_{\text{impact}} = \frac{P}{A}\left(1 + \sqrt{1 + \frac{2AEh}{PL}}\right)
```

This is a load P dropped from a height h onto a collar at the end of the bar. With h = 0 it gives the sudden-load value 2P/A.

### Doubts cleared

**Doubt: why can Poisson's ratio not go above 0.5?** The volume change in tension is ε(1 − 2ν). Above 0.5 it would be negative: pulling a bar would make it smaller, and the bulk modulus would be negative. A material like that would collapse on its own.

**Doubt: why does the diameter not matter when a bar stretches under its own weight?** A thicker bar is heavier in the same proportion as its area grows. Weight below a section and area both go with D², so the stress at every level is γ times the length below, and so is the stretch.

**Doubt: is E always larger than G?** Yes. E = 2G(1 + ν) with ν between 0 and 0.5, so E is two to three times G. An answer with G larger than E is wrong.

**Doubt: if ν = 0.5, is the material rigid?** No. It still stretches and shears easily. Only its volume does not change: it gets longer and thinner by just the right amounts. Incompressible and rigid are different things.

**Doubt: why are bolts for shock loads turned down to the thread's root diameter?** A thick shank with a thin threaded part stores little energy, because the stress is high only in the thread. Making the whole shank as thin as the root keeps the peak stress the same but raises the stress everywhere, so it absorbs more energy before failing.

### Tricky past questions with solutions

**Q1. GATE ME 2014 (Shift 4).** If the Poisson's ratio of an elastic material is 0.4, the ratio of modulus of rigidity to Young's modulus is \_\_\_\_\_\_ (numerical answer).

*Answer: about 0.357 (accepted range 0.35 to 0.36).*

1. E = 2G(1 + ν).
2. G ÷ E = 1 ÷ 2(1 + ν) = 1 ÷ 2.8 = 0.357.

**The trap:** the question asks for G/E, not E/G. Writing 2.8 is the same formula, inverted. A ratio of G to E must lie between 1/3 and 1/2, which is a quick check.

**Q2. GATE ME 2017 (Shift 1).** The Poisson's ratio for a perfectly incompressible linear elastic material is: (a) 1 (b) 0.5 (c) 0 (d) infinity

*Answer: (b) 0.5.*

1. Incompressible means the volume does not change: εv = 0 for any stress.
2. For a bar in tension, εv = ε(1 − 2ν). This is zero only if 1 − 2ν = 0.
3. So ν = 0.5.

**The trap:** (d) confuses ν with K. It is the bulk modulus that becomes infinite for an incompressible material. (c) is cork, which barely changes width when squeezed, the opposite case.

**Q3. UPRVUNL JE Mechanical 2016 (Shift 1).** A solid uniform metal bar of diameter D and length L hangs vertically from its upper end. The elongation of the bar due to its own weight is: (a) proportional to L and inversely proportional to D² (b) proportional to L² and inversely proportional to D² (c) proportional to L but independent of D (d) proportional to L² but independent of D

*Answer: (d).*

1. At a distance x from the bottom, the bar carries the weight below it: γAx. The stress is γAx ÷ A = γx.
2. The strain is γx ÷ E. Adding it over the length gives δ = γL²/2E.
3. Two L's come in, one from the weight and one from the length, and the area cancels.

**The trap:** writing δ = WL/2AE and seeing A in the bottom suggests (b). But W itself contains A, so it cancels.

**Q4. RRB JE Civil, 29 August 2019 (Shift 2, CBT 2).** Bar A has diameter d and length L. Bar B has diameter 2d and length 2L. Both are of the same material and carry the same load. The ratio of the change in length of A to that of B is: (a) 0.25 (b) 0.50 (c) 4.00 (d) 2.00

*Answer: (d) 2.00.*

1. δ = PL/AE. B has twice the length and four times the area.
2. δB = P × 2L ÷ (4A × E) = δA ÷ 2.
3. δA ÷ δB = 2.

**The trap:** treating the diameter like the length, as if doubling both cancelled. Area goes with the square of the diameter, so the area wins. (b) is the right number for the ratio the other way round.

## 4. Thermal stress and composite bars

Thermal stress appears only when expansion is stopped. Every trap here is about how much of it is stopped: all of it, part of it, by a neighbouring bar, or in all three directions at once.

### Going deeper

| Idea | What it means |
| --- | --- |
| Free expansion | A body free to expand gets thermal strain but no stress. No answer can give it a stress. |
| Fully stopped | A bar between rigid walls gets σ = EαΔT. Length and area do not appear. |
| Partly stopped | If a gap or a yielding wall allows δ of the free expansion, only the rest causes stress: σ = E(αLΔT − δ) ÷ L. If the gap is larger than the free expansion, there is no stress at all. |
| Stopped in three directions | A cube held on all six faces gets σ = EαΔT ÷ (1 − 2ν) on every face. That is larger than the bar value, because each push also tries to widen the cube sideways. |
| Stopped in two directions | A plate held on its four edges but free in thickness gets EαΔT ÷ (1 − ν). |
| Composite bar, no walls | Two bars joined together must expand by the same amount. The one with larger α is held back and goes into compression; the other is pulled along into tension. With no outside force, the two forces are equal and opposite. |
| Composite bar under load | Both parts stretch equally, so their stresses are in the ratio of their E values. The load is shared in the ratio of AE. |
| Bars in series between walls | When heated, all parts carry the same force. The stress is largest in the thinnest part. |
| Cooling | Every sign reverses. A bar fixed between walls and cooled goes into tension. |

### Formulas worth adding

```math
\sigma = E\,\alpha\,\Delta T, \qquad \sigma_{\text{gap}} = \frac{E(\alpha L\,\Delta T - \delta)}{L}
```

```math
\sigma_{\text{three directions}} = \frac{E\,\alpha\,\Delta T}{1 - 2\nu}, \qquad \sigma_{\text{two directions}} = \frac{E\,\alpha\,\Delta T}{1 - \nu}
```

```math
\sigma_1 A_1 = \sigma_2 A_2, \qquad \frac{\sigma_1}{E_1} + \frac{\sigma_2}{E_2} = (\alpha_1 - \alpha_2)\,\Delta T
```

This is a composite bar of two materials heated with no walls: material 1 has the larger α and is in compression, material 2 is in tension.

```math
P = \frac{(\alpha_1 L_1 + \alpha_2 L_2)\,\Delta T}{\dfrac{L_1}{A_1 E_1} + \dfrac{L_2}{A_2 E_2}}
```

This is the force in two bars joined end to end between rigid walls and heated.

```math
\frac{\sigma_1}{E_1} = \frac{\sigma_2}{E_2}, \qquad P = \sigma_1 A_1 + \sigma_2 A_2
```

This is a composite bar carrying a load P, with no temperature change.

### Doubts cleared

**Doubt: does a longer bar between walls get more thermal stress?** No. It would expand more, but the strain that is stopped is still αΔT. Stress depends on strain, not on the total stretch.

**Doubt: why is the stress in a held cube larger than in a held bar?** In the bar, the sides are free to bulge. In the cube, pushing on one pair of faces also makes the cube want to grow sideways, and those faces are held too. The extra stress needed to fight this is the 1 ÷ (1 − 2ν) factor.

**Doubt: in a heated copper and steel bar, are the stresses equal?** The forces are equal. The stresses are in the inverse ratio of the areas. A thin steel core inside a thick copper tube gets a much higher stress than the copper.

**Doubt: which gets more thermal stress when fully held: steel or aluminium?** Work out Eα. Aluminium's α is about twice steel's, but its E is about a third. Steel gets more stress for the same temperature change: 200,000 × 12 × 10⁻⁶ = 2.4 MPa per °C, against about 1.6 MPa per °C for aluminium.

**Doubt: if the walls give way a little, can the stress become tensile?** Not on heating. A gap or yielding wall only reduces the compression. If the allowed movement is more than the free expansion, the stress is zero, not tensile.

### Tricky past questions with solutions

**Q1. GATE ME 2012.** A solid steel cube constrained on all six faces is heated so that the temperature rises uniformly by ΔT. If the thermal coefficient of the material is α, Young's modulus is E and Poisson's ratio is ν, the thermal stress developed in the cube due to heating is: (a) −αΔTE ÷ (1 − 2ν) (b) −2αΔTE ÷ (1 − 2ν) (c) −3αΔTE ÷ (1 − 2ν) (d) −αΔTE ÷ 3(1 − 2ν)

*Answer: (a).*

1. By symmetry, the stress on every face is the same σ.
2. Strain in one direction is zero: σ ÷ E − ν(σ + σ) ÷ E + αΔT = 0.
3. So σ(1 − 2ν) ÷ E = −αΔT, and σ = −αΔTE ÷ (1 − 2ν). The minus sign means compression.

**The trap:** working with volume and putting the 3 on only one side. The thermal volume strain is 3αΔT and the elastic volume strain is 3σ(1 − 2ν) ÷ E, so the 3s cancel. Keeping one of them gives (c) or (d).

**Q2. GATE ME 2014 (Shift 2).** A steel cube, with all faces free to deform, has Young's modulus E, Poisson's ratio ν and coefficient of thermal expansion α. The pressure (hydrostatic stress) developed within the cube, when it is subjected to a uniform increase in temperature ΔT, is given by: (a) 0 (b) αΔTE ÷ (1 − 2ν) (c) −αΔTE ÷ (1 − 2ν) (d) αΔTE ÷ 3(1 − 2ν)

*Answer: (a) 0.*

1. All faces are free, so the cube simply grows.
2. Uniform heating of a free body gives strain but no stress.

**The trap:** this came two years after Q1, with the same options. Students who learned the formula from Q1 without the reason picked (c). The word that matters is free.

**Q3. ESE Mechanical 2014 (Paper 2).** A steel rod, 2 m long, is held between two walls and heated from 20°C to 60°C. Young's modulus is 200 × 10³ MPa and the coefficient of linear expansion is 10 × 10⁻⁶ per °C. If the walls yield by 0.2 mm, the stress induced in the rod is: (a) 60 MPa tensile (b) 80 MPa tensile (c) 80 MPa compressive (d) 60 MPa compressive

*Answer: (d) 60 MPa compressive.*

1. Free expansion: αLΔT = 10 × 10⁻⁶ × 2000 × 40 = 0.8 mm.
2. The walls allow 0.2 mm, so 0.6 mm is stopped.
3. Strain = 0.6 ÷ 2000 = 3 × 10⁻⁴. Stress = 200,000 × 3 × 10⁻⁴ = 60 MPa.
4. Heating with expansion stopped: compression.

**The trap:** (c) is the fully stopped value, EαΔT = 80 MPa, which ignores the yielding walls. (a) and (b) have the wrong sign: a heated bar that is held back is squeezed, not stretched.

**Q4. CIL Management Trainee Mechanical 2020.** A composite bar made of copper and steel is heated to 120°C from room temperature. If αc > αs, the stress induced in the copper bar is: (a) shear stress (b) compressive stress (c) no stress (d) tensile stress

*Answer: (b) compressive stress.*

1. Joined together, the two bars must expand by the same amount.
2. Copper wants to expand more, so the steel holds it back: copper is compressed.
3. Steel is pulled along further than it wants to go: steel is in tension. The two forces are equal and opposite.

**The trap:** (c) would be right if the bars were separate. (d) comes from thinking the copper pulls on the steel, so the copper must be in tension too. Ask which bar is being stopped from doing what it wants: that one is in compression.

## 5. Shear force and bending moment diagrams

Tricky diagram questions rarely need long working. They test the chain from load to shear force to bending moment, and what a pin, a couple or a point load does to each diagram.

### Going deeper

| Idea | What it means |
| --- | --- |
| The chain | The load is the slope of the shear force diagram, and the shear force is the slope of the bending moment diagram. Going the other way, the shear force is the area under the load, and the moment is the area under the shear force. |
| Degree rule | Each step up the chain raises the curve by one degree. A UDL gives a straight SFD and a parabolic BMD. A triangular load gives a parabolic SFD and a cubic BMD. |
| Point load | The SFD jumps by the load. The BMD does not jump, but its slope changes suddenly, making a corner. |
| Couple | The BMD jumps by the size of the couple. The SFD does not change, because a couple has no net force. |
| Largest moment | The BMD peaks where the shear force is zero or changes sign. Also check the supports, the free end of an overhang and both sides of any couple. |
| Internal pin | A pin passes force but not moment, so the bending moment there is zero. Split the beam at the pin and solve the simple part first. |
| Symmetric load | On a simply supported span, a load that is symmetric about the middle is shared equally by the two supports, whatever its shape. |
| Load given as a formula | The total load is the integral of w(x) over the span, and it acts at the centroid of the load diagram. Positive and negative parts of a load can cancel. |
| Overhang | The moment over the support is hogging. Between the supports the moment changes sign, so a point of contraflexure appears. |

### Formulas worth adding

```math
\frac{dV}{dx} = -w, \qquad \frac{dM}{dx} = V, \qquad \frac{d^2M}{dx^2} = -w
```

The minus sign depends on the sign convention, and books differ. The sizes are what exams test.

```math
V_B - V_A = -\int_A^B w\,dx, \qquad M_B - M_A = \int_A^B V\,dx
```

```math
W = \int_0^L w(x)\,dx, \qquad \bar{x} = \frac{\int_0^L x\,w(x)\,dx}{\int_0^L w(x)\,dx}
```

```math
R_A = \frac{M_0}{L} \ \text{up}, \qquad R_B = \frac{M_0}{L} \ \text{down}
```

This is a couple M₀ anywhere on a simply supported span. The reactions form an equal and opposite couple, and the shear force is M₀/L along the whole span.

### Doubts cleared

**Doubt: where the shear force is zero, is the bending moment always the largest?** It is a peak or a dip of the curve, but not always the largest value. On an overhanging beam the largest moment is often over a support, and beside a couple the moment jumps. Check those points too.

**Doubt: why does a couple not change the shear force?** A couple is two equal and opposite forces. Its net vertical force is zero, so the running total of vertical forces, which is the shear force, does not change.

**Doubt: how does a pin help?** It gives one extra equation: the moment at the pin is zero. In a beam joined by a pin, take moments about the pin for one part alone, and that part's reactions come out directly.

**Doubt: does the shape of a load change the reactions?** Only through its total and its centroid. A UDL, a triangle and a sine curve with the same total and the same centroid give the same reactions.

**Doubt: if M(x) is given, how do I find the load?** Differentiate twice. The first derivative is the shear force, the second is the load intensity. A constant second derivative means a UDL. A first derivative that is not zero at the free end means a point load there.

### Tricky past questions with solutions

**Q1. GATE ME 2013.** A simply supported beam of length L carries a varying distributed load of sin(3πx/L) N/m, where x is measured from the left support. The magnitude of the vertical reaction at the left support, in N, is: (a) zero (b) L/3π (c) L/π (d) 2L/π

*Answer: (b) L/3π.*

1. Total load: the integral of sin(3πx/L) from 0 to L is (L/3π)(1 − cos 3π) = 2L/3π.
2. The load is symmetric about the middle: sin(3π(L − x)/L) = sin(3πx/L).
3. Each support carries half: L/3π.

**The trap:** the load has three humps: up, down, up. Thinking they all cancel gives (a). Only the middle hump cancels one outer hump, leaving one. (c) and (d) are the reaction and the total for the single-hump load sin(πx/L).

**Q2. GATE ME 2015 (Shift 2).** A cantilever OP, 2 m long and fixed at O, is joined by a pin at P to a second beam PQ, 1 m long, which rests on a simple support at Q. A load of 10 kN acts at the middle of PQ. The magnitude of the bending moment at the fixed end O, in kN·m, is: (a) 2.5 (b) 5 (c) 10 (d) 25

*Answer: (c) 10.*

1. The pin at P carries no moment, so PQ acts as a simply supported beam between P and Q.
2. The load is at its middle, so P and Q each take 5 kN.
3. The pin pushes 5 kN down on the tip of the cantilever, and no moment.
4. Moment at O = 5 × 2 = 10 kN·m.

**The trap:** (d) treats the joint as rigid and takes the whole 10 kN at 2.5 m from O. With a pin, only half the load reaches the cantilever, and it arrives at P, not at the load's own position.

**Q3. GATE ME 2017 (Shift 2).** For a loaded cantilever beam of uniform cross-section, the bending moment in N·mm along the length is M(x) = 5x² + 10x, where x is the distance in mm from the free end. The magnitude of the shear force in N at x = 10 mm is \_\_\_\_\_\_ (numerical answer).

*Answer: 110 N.*

1. Shear force = dM/dx = 10x + 10.
2. At x = 10 mm: 100 + 10 = 110 N.
3. Check: M = wx²/2 + Px matches a UDL of 10 N/mm with an end load of 10 N. At 10 mm the shear is 10 + 10 × 10 = 110 N.

**The trap:** putting x = 10 into M gives 600, which is the moment in N·mm, not the shear in N.

**Q4. ESE Civil 2023 (Prelims, 19 February 2023).** Which one of the following statements is correct? (a) The rate of change of shear force along the length of the beam is equal to bending moment. (b) The bending moment is zero at the point where shear force changes sign. (c) Shear force changes abruptly at the point of application of a couple. (d) Rate of change of bending moment changes abruptly at the location of a point load.

*Answer: (d).*

1. (a) is false: the rate of change of shear force is the load intensity.
2. (b) is false: where the shear force changes sign, the bending moment is at a peak, not zero.
3. (c) is false: a couple makes the bending moment jump, not the shear force.
4. (d) is true: the rate of change of bending moment is the shear force, and the shear force jumps at a point load. That is the corner in the BMD.

**The trap:** each wrong option moves one link of the chain by one place. Write load → shear force → bending moment and check each option against it.

**Q5. ESE Civil 2021.** Consider the following statements regarding shearing force and bending moment: 1. Point of contraflexure is the point where bending moment changes its sign. 2. Shear force is the rate of change of bending moment. 3. For bending moment to be maximum or minimum, shear force should change its sign. 4. Rate of change of loading is equal to shear force. Which of the above statements are correct? (a) 2 and 3 only (b) 1 and 4 only (c) 1, 2 and 4 only (d) 1, 2 and 3 only

*Answer: (d) 1, 2 and 3 only.*

1. Statement 1 is the definition of contraflexure. True.
2. Statement 2 is dM/dx = V. True.
3. Statement 3: a peak or dip in the moment needs dM/dx = 0, so the shear force must pass through zero or change sign. True.
4. Statement 4 is one step off. The rate of change of shear force equals the loading, not the other way round. False.

**The trap:** statement 4 sounds like statement 2. Both are about rates of change, but they sit at different links of the chain.

## 6. Bending and shear stress in beams

Beam stress traps are about which moment, which axis and which width. The largest moment is not always where the shear force is zero, and shear stress jumps wherever the section's width changes.

### Going deeper

| Idea | What it means |
| --- | --- |
| Neutral axis | In elastic bending the stress grows in a straight line from zero at the neutral axis, which passes through the centroid of the section. |
| Two section moduli | For a section that is not symmetric top to bottom, like a T, Z is different for the top and the bottom. The largest stress is at the fibre farther from the neutral axis. |
| Square or circle | With the same area, a square's Z is about 1.18 times a circle's, so the square is stronger. With the same strength, the square weighs about 1/1.12 of the circle. |
| Square turned on its corner | With a diagonal vertical, Z falls to 1/√2 of the side-down value. The tips are tall but have almost no area. |
| Beam from a round log | The strongest beam has b = D/√3 and depth √2 times its width. The stiffest has b = D/2 and depth √3 times its width. Neither is the square of largest area. |
| Shear stress formula | τ = VAȳ ÷ (Ib). Aȳ is the first moment of the area beyond the level being checked, and b is the width at that level. |
| Peak shear stress | Rectangle: 1.5 times the average, at the neutral axis. Circle: 4/3 times. Triangle: 1.5 times, but at half the height, not at the neutral axis. |
| I-section | The web carries most of the shear force and the flanges carry most of the bending moment. At the flange-to-web joint the shear stress jumps by the ratio of the two widths. |
| Largest moment on an overhang | The hogging moment over the support can be larger than the sagging peak inside the span. Check both. |

### Formulas worth adding

```math
\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R}, \qquad \sigma_{\max} = \frac{M}{Z}, \qquad Z = \frac{I}{y_{\max}}
```

```math
Z_{\text{rectangle}} = \frac{bd^2}{6}, \qquad Z_{\text{circle}} = \frac{\pi d^3}{32}, \qquad Z_{\text{square on its corner}} = \frac{\sqrt{2}\,a^3}{12}
```

```math
\tau = \frac{V\,A\bar{y}}{I\,b}, \qquad \tau_{\max,\text{rectangle}} = 1.5\,\tau_{\text{avg}}, \qquad \tau_{\max,\text{circle}} = \tfrac{4}{3}\,\tau_{\text{avg}}
```

```math
\text{strongest from a log: } b = \frac{D}{\sqrt{3}},\ \frac{d}{b} = \sqrt{2}; \qquad \text{stiffest: } b = \frac{D}{2},\ \frac{d}{b} = \sqrt{3}
```

Strongest means the largest Z = bd²/6. Stiffest means the largest I = bd³/12. In both, b² + d² = D².

### Doubts cleared

**Doubt: why is a square stronger than a circle of the same area?** Bending is resisted best by material far from the neutral axis. A square's corners put more of its area at the top and bottom, while a circle has most of its area near the middle.

**Doubt: a square standing on its corner is taller. Is it stronger?** No. The tips are tall but thin, and the extra height raises y\_max more than it raises I. Its Z is only 1/√2 of the side-down value.

**Doubt: why does shear stress jump at the joint of flange and web?** Just above and just below the joint, the area beyond the level is almost the same, so VAȳ/I is the same. But the width b drops suddenly from the flange's to the web's, so τ rises by the same ratio.

**Doubt: is shear stress always largest at the neutral axis?** For rectangles, circles and I-sections, yes. For a triangle, no: it peaks at half the height, because the width keeps shrinking towards the tip.

**Doubt: on an overhanging beam, is the largest bending stress where the shear force is zero?** Not always. The moment over the support can be bigger. Work out both and use the larger one.

### Tricky past questions with solutions

**Q1. GATE ME 2018 (Shift 1).** A simply supported beam of width 100 mm, height 200 mm and length 4 m carries a uniformly distributed load of intensity 10 kN/m. The maximum bending stress in the beam, in MPa to one decimal place, is \_\_\_\_\_\_ (numerical answer).

*Answer: 30.0 MPa (accepted range 29.8 to 30.1).*

1. In N and mm: w = 10 N/mm and L = 4000 mm.
2. M = wL²/8 = 10 × 4000² ÷ 8 = 20 × 10⁶ N·mm.
3. Z = bd²/6 = 100 × 200² ÷ 6 = 6.667 × 10⁵ mm³.
4. σ = 20 × 10⁶ ÷ 6.667 × 10⁵ = 30 MPa.

**The trap:** swapping width and height gives Z = 200 × 100² ÷ 6 and a stress of 60 MPa. The height is the depth in the direction of the load, so it is the dimension that gets squared.

**Q2. GATE ME 2021 (Shift 1).** An overhanging beam PQR rests on supports at P and Q, 2 m apart, and overhangs 1 m beyond Q to the free end R. It carries a uniformly distributed load of 20 kN/m over its full 3 m length. The beam's cross-section has a section modulus of 4 × 10⁴ mm³. The maximum bending stress in the beam, in MPa to one decimal place, is \_\_\_\_\_\_ (numerical answer).

*Answer: 250.0 MPa (accepted range 249 to 251).*

1. Total load 60 kN, acting 1.5 m from P. Moments about P: RQ × 2 = 60 × 1.5, so RQ = 45 kN and RP = 15 kN.
2. Inside the span, the shear force is zero where 15 − 20x = 0, at x = 0.75 m. The sagging moment there is 15 × 0.75 − 20 × 0.75² ÷ 2 = 5.63 kN·m.
3. Over Q, the overhang gives a hogging moment of 20 × 1² ÷ 2 = 10 kN·m.
4. The largest is 10 kN·m: σ = 10 × 10⁶ ÷ 4 × 10⁴ = 250 MPa.

**The trap:** stopping at the point of zero shear gives 5.63 kN·m and 141 MPa. The overhang's moment over the support is larger.

**Q3. ISRO Refrigeration and Air Conditioning 2020.** A square beam and a circular beam of the same material have the same length, the same allowable stress and the same bending moment. The ratio of the weight of the square beam to that of the circular beam is: (a) 1/2 (b) 1 (c) 1/1.12 (d) 1/3

*Answer: (c) 1/1.12.*

1. Same moment and same allowable stress mean the same Z: a³/6 = πd³/32.
2. So a³ = 0.589 d³ and a = 0.838 d.
3. Weight goes with area: a² ÷ (πd²/4) = 0.702 d² ÷ 0.785 d² = 0.894, which is 1/1.12.

**The trap:** same moment and same stress make (b) look natural. They fix Z, not the area, and the square reaches the same Z with less material.

**Q4. MPSC AE Civil Mains 2015 (Paper 1).** A rectangular timber beam (b × d) is cut out of a cylindrical log of diameter D. The width b of the strongest timber beam will be: (a) √3 D (b) D/√3 (c) √2 D (d) D/√2

*Answer: (b) D/√3.*

1. The corners touch the log: b² + d² = D².
2. Strength goes with Z = bd²/6 = b(D² − b²)/6.
3. dZ/db = (D² − 3b²)/6 = 0, so b = D/√3, and the depth d = √(2/3) D.

**The trap:** (d) gives the square, which has the largest area. The strongest beam is narrower and deeper. (a) and (c) are larger than the log itself.

**Q5. BHEL ET Mechanical, May 2019.** An I-section beam has flanges 100 mm wide and a web 20 mm thick. The shear stress at a point P in the flange, just at its bottom edge, is 12 MPa. The shear stress at a point Q in the web, just below the flange, is: (a) 40 MPa (b) 12 MPa (c) indeterminate (d) 60 MPa

*Answer: (d) 60 MPa.*

1. τ = VAȳ ÷ (Ib). At P and Q, V, I and Aȳ are the same, because the two points are at almost the same level.
2. Only b changes: 100 mm at P and 20 mm at Q.
3. τQ = 12 × 100 ÷ 20 = 60 MPa.

**The trap:** (b) assumes shear stress is smooth across the joint. It is the shear flow, τ × b, that is continuous. When the width shrinks five times, the stress grows five times.

## 7. Deflection of beams

Most deflection traps are scaling questions. Know what deflection depends on: the load, the length cubed and 1/EI, with I set by the section's shape. Then most of them take one line.

### Going deeper

| Idea | What it means |
| --- | --- |
| Scaling | For a point load, δ goes with WL³/EI. For a UDL it goes with wL⁴/EI, which is still WL³/EI if W is the total load. |
| Size of the section | I goes with bd³ for a rectangle, a⁴ for a square and d⁴ for a circle. A 10% larger square or round bar is 46% stiffer. |
| Depth beats width | Doubling the depth cuts the deflection to 1/8. Doubling the width only halves it. |
| End moment on a cantilever | A moment at the free end bends the whole beam equally, into a circular arc. Tip deflection = ML²/2EI and tip slope = ML/EI. |
| Fixed ends | Fixing both ends cuts the central-load deflection to a quarter of the simply supported value, and the UDL deflection to a fifth. |
| Propped cantilever with a UDL | The prop takes 3wL/8. Shear is zero 3L/8 from the prop, where the sagging moment peaks at 9wL²/128. The moment is zero 3L/4 from the prop, which is L/4 from the fixed end. |
| Superposition | The deflection under several loads is the sum of the deflections under each load alone, as long as the beam stays elastic. |
| Moment-area | The change in slope between two points is the area of the M/EI diagram between them. The deflection is the moment of that area. |
| Stiffness | k = W/δ. For a central or end load: cantilever 3EI/L³, simply supported 48EI/L³, fixed at both ends 192EI/L³. |

### Formulas worth adding

```math
\delta_{\text{cantilever, end moment}} = \frac{ML^2}{2EI}, \qquad \theta = \frac{ML}{EI}
```

```math
\delta_{\text{fixed, central } W} = \frac{WL^3}{192EI}, \qquad \delta_{\text{fixed, UDL}} = \frac{wL^4}{384EI}
```

```math
R_{\text{prop}} = \frac{3wL}{8}, \qquad M_{\text{fixed end}} = \frac{wL^2}{8}, \qquad M_{\max,\text{sagging}} = \frac{9wL^2}{128}
```

```math
\theta_{\text{cantilever}} = \frac{WL^2}{2EI} \ \text{(end load)}, \quad \frac{wL^3}{6EI} \ \text{(UDL)}
```

```math
\theta_{\text{simply supported, ends}} = \frac{WL^2}{16EI} \ \text{(central load)}, \quad \frac{wL^3}{24EI} \ \text{(UDL)}
```

```math
k_{\text{cantilever}} = \frac{3EI}{L^3}, \qquad k_{\text{simply supported}} = \frac{48EI}{L^3}, \qquad k_{\text{fixed}} = \frac{192EI}{L^3}
```

### Doubts cleared

**Doubt: why is the end-moment deflection ML²/2EI and not ML²/3EI?** An end moment gives the same bending moment along the whole beam, so every part curves equally. An end load gives a moment that grows from zero at the tip, so the part near the tip hardly bends. The constant moment bends more, hence 1/2 instead of 1/3.

**Doubt: why does doubling the depth help eight times, but doubling the width only twice?** I = bd³/12. Width enters once and depth enters cubed. This is why beams are made deep and narrow.

**Doubt: is the largest deflection of a simply supported beam always at the middle?** Only for symmetric loads. With one load off-centre, the largest deflection lies between the load and the middle, but always within about 0.08L of the middle. So the mid-span value is a close estimate.

**Doubt: in a propped cantilever, where is the shear zero and where is the moment zero?** Shear is zero 3L/8 from the prop, where the sagging moment is largest. The moment is zero 3L/4 from the prop, the point of contraflexure. Exams put one in the options of the other.

**Doubt: a simply supported beam with a central load is like two cantilevers. Does that help?** Yes. Each half is a cantilever of length L/2, fixed at the middle, with W/2 at its tip. Its tip deflection, (W/2)(L/2)³ ÷ 3EI, is exactly WL³/48EI.

### Tricky past questions with solutions

**Q1. GATE ME 2016 (Shift 1).** A cantilever beam having a square cross-section of side a is subjected to an end load. If a is increased by 19%, the tip deflection decreases approximately by: (a) 19% (b) 29% (c) 41% (d) 50%

*Answer: (d) 50%.*

1. δ goes with 1/I, and I = a⁴/12 for a square.
2. 1.19⁴: 1.19² = 1.416, and 1.416² = 2.005.
3. The new deflection is 1 ÷ 2.005 = 0.499 of the old, a fall of about 50%.

**The trap:** each wrong option uses the wrong power of a. (b) uses a², the area. (c) uses a³, the section modulus, which is right for bending stress but not for deflection. Remember: stress goes with Z, deflection with I.

**Q2. GATE ME 2019 (Shift 2).** A horizontal cantilever beam of circular cross-section, length 1.0 m and flexural rigidity EI = 200 N·m², is subjected to an applied moment of 1.0 N·m at the free end. The magnitude of the vertical deflection of the free end, in mm to one decimal place, is \_\_\_\_\_\_ (numerical answer).

*Answer: 2.5 mm (accepted range 2.4 to 2.6).*

1. An end moment gives a constant moment along the beam.
2. δ = ML²/2EI = 1.0 × 1.0² ÷ (2 × 200) = 0.0025 m.
3. That is 2.5 mm.

**The trap:** using the end-load formula, ML²/3EI, gives 1.7 mm. Using ML/EI, the slope, gives 0.005, which is in radians. With EI in N·m² the answer comes out in metres, so convert at the end.

**Q3. GPSC AE Civil 2020 (Part B).** A propped cantilever beam of span L carries a uniformly distributed load of w kN/m over the whole span. The distance of the point of contraflexure from the fixed end is: (a) 0.175L (b) 0.25L (c) 0.33L (d) 0.375L

*Answer: (b) 0.25L.*

1. The prop stops the tip from moving down: wL⁴/8EI = RL³/3EI, so R = 3wL/8.
2. At a distance x from the prop, M = Rx − wx²/2. This is zero at x = 2R/w = 3L/4.
3. From the fixed end: L − 3L/4 = L/4.

**The trap:** (d), 0.375L = 3L/8, is where the shear force is zero, and it is measured from the prop, not from the fixed end. Zero shear gives the largest moment, not zero moment.

**Q4. SSC JE Civil, 27 January 2018 (Morning).** The ratio of the maximum deflection of a simply supported beam with a central load W to that of a cantilever of the same length with a load W at its free end is: (a) 1/8 (b) 1/10 (c) 1/12 (d) 1/16

*Answer: (d) 1/16.*

1. Simply supported, central load: WL³/48EI.
2. Cantilever, end load: WL³/3EI.
3. Ratio: 3/48 = 1/16.

**The trap:** (a) comes from treating each half as a cantilever of length L/2 but leaving the full W on it. Each half carries only W/2, which brings in a second factor of 2.

**Q5. TSPSC AEE Mechanical 2015 (Paper II).** A simply supported beam A of length L carries a central point load W. Another beam B carries a uniformly distributed load such that the total load on it is W. The ratio of the maximum deflections of beams A and B is: (a) 5/8 (b) 8/5 (c) 5/4 (d) 4/5

*Answer: (b) 8/5.*

1. Beam A: WL³/48EI.
2. Beam B: 5wL⁴/384EI with wL = W, so 5WL³/384EI.
3. Ratio A to B: (1/48) ÷ (5/384) = 384/240 = 8/5.

**The trap:** (a) is the ratio of B to A. Check the order the question asks for. Spreading a load cuts the moment to a half but the deflection only to 5/8, so the two ratios are not the same.

## 8. Torsion of shafts

Torsion traps turn on what two shafts share. Shafts joined end to end share the torque. A shaft fixed at both ends, or a tube shrunk on a core, shares the angle of twist.

### Going deeper

| Idea | What it means |
| --- | --- |
| Strength and stiffness | At the same allowed stress, the torque a solid shaft can carry goes with d³. For the same angle of twist, it goes with d⁴. Read which one the question fixes. |
| Shafts in series | Joined end to end, both carry the same torque. Their angles of twist add up. |
| Shared angle | A shaft fixed at both ends with a torque applied in between, or a tube fitted over a core, twists through one common angle. The torque splits in proportion to each part's stiffness GJ/L. |
| Short side takes more | With a torque between two fixed ends, the shorter part is stiffer, so it carries the larger share. |
| Stress across the section | Shear stress grows from zero at the centre to its maximum at the surface. Material near the centre does little work, which is why hollow shafts are efficient. |
| Hollow against solid | With the same outside diameter, a hollow shaft carries 1 − k⁴ of the torque, where k = di/do. With k = 0.5 it loses 6% of the strength and 25% of the weight. |
| Same weight | A hollow shaft of the same weight and length has the same area but a larger diameter, so it is both stronger and stiffer than the solid one. |
| Power and speed | P = 2πNT/60. At the same power, a faster shaft carries less torque, so it can be thinner. |
| Bending with torsion | Design for the equivalent twisting moment √(M² + T²) for shear, and the equivalent bending moment ½(M + √(M² + T²)) for normal stress. |

### Formulas worth adding

```math
\frac{T}{J} = \frac{\tau}{r} = \frac{G\theta}{L}, \qquad \tau_{\max} = \frac{16T}{\pi d^3}, \qquad \theta = \frac{TL}{GJ}
```

```math
T_A = T_0\,\frac{L_B}{L_A + L_B}, \qquad T_B = T_0\,\frac{L_A}{L_A + L_B}
```

This is a shaft of one size fixed at both ends, with T₀ applied where the part of length LA meets the part of length LB.

```math
\frac{T_{\text{hollow}}}{T_{\text{solid}}} = 1 - k^4 \ \text{(same outside diameter)}, \qquad \frac{T_{\text{hollow}}}{T_{\text{solid}}} = \frac{1 + k^2}{\sqrt{1 - k^2}} \ \text{(same weight)}
```

```math
P = \frac{2\pi N T}{60}, \qquad U_{\text{solid}} = \frac{\tau_{\max}^2}{4G} \times V
```

P comes out in watts with T in N·m and N in rpm.

```math
T_e = \sqrt{M^2 + T^2}, \qquad M_e = \tfrac{1}{2}\left(M + \sqrt{M^2 + T^2}\right)
```

### Doubts cleared

**Doubt: why does the shorter part of a shaft fixed at both ends carry more torque?** Both parts twist through the same angle, the angle at the point where the torque is applied. A shorter shaft needs more torque to twist through a given angle, because θ = TL/GJ. So the shorter part takes the larger share.

**Doubt: when does the torque go with d³, and when with d⁴?** d³ when the stress is the limit (strength). d⁴ when the angle of twist is the limit (stiffness). Power questions with an allowed stress use d³.

**Doubt: is a hollow shaft weaker than a solid one?** With the same outside diameter, slightly. With the same weight, no: it is stronger. The material from the centre, which hardly carried any stress, has moved to the outside, where the stress is highest.

**Doubt: in a tube shrunk onto a solid core, which part takes more torque?** They twist together, so the torque splits in the ratio of their GJ values. If they are of different materials, the stiffer material takes more even when the sizes are equal.

**Doubt: if the speed doubles at the same power, how much smaller can the shaft be?** The torque halves. Since torque goes with d³ at the same stress, d can shrink by the cube root of 2, about 1.26 times.

### Tricky past questions with solutions

**Q1. GATE ME 2009.** A solid shaft of diameter d and length L is fixed at both ends. A torque T₀ is applied at a distance L/4 from the left end. The maximum shear stress in the shaft is: (a) 16T₀/πd³ (b) 12T₀/πd³ (c) 8T₀/πd³ (d) 4T₀/πd³

*Answer: (b) 12T₀/πd³.*

1. Both parts twist through the same angle: TA × (L/4) = TB × (3L/4), so TA = 3TB.
2. Together they hold the applied torque: TA + TB = T₀. So TA = 3T₀/4 on the short part and TB = T₀/4 on the long part.
3. The larger torque gives the largest stress: 16 × (3T₀/4) ÷ πd³ = 12T₀/πd³.

**The trap:** (a) puts the whole T₀ in one part, as if one end were free. (d) uses the long part's share, the smaller one. The short part is the stiffer one, and it takes three quarters.

**Q2. GATE ME 2014 (Shift 3).** Two solid circular shafts of radii R1 and R2 are subjected to the same torque. The maximum shear stresses developed in the two shafts are τ1 and τ2. If R1/R2 = 2, then τ2/τ1 is \_\_\_\_\_\_ (numerical answer).

*Answer: 8.*

1. For a solid shaft, τ = 2T ÷ πR³, so at the same torque τ goes with 1/R³.
2. τ2/τ1 = (R1/R2)³ = 2³ = 8.

**The trap:** writing 1/8 by putting the ratio the wrong way up. The thinner shaft, R2, has the higher stress, so τ2/τ1 must be more than 1. Using J alone gives 16, but stress needs J divided by R.

**Q3. TNTRB 2012 (Mechanical).** Two shafts A and B are made of the same material. The diameter of shaft B is twice that of shaft A. The ratio of the power which can be transmitted by shaft A to that of shaft B is: (a) 1/2 (b) 1/4 (c) 1/8 (d) 1/16

*Answer: (c) 1/8.*

1. Same material means the same allowed shear stress. Take the same speed.
2. T = τπd³/16, so T goes with d³, and P = 2πNT/60 goes with T.
3. PA/PB = (1/2)³ = 1/8.

**The trap:** (d) uses d⁴, which is right only if the angle of twist per metre is the limit. When the limit is the material's stress, power goes with d³.

**Q4. BHEL Supervisor Trainee Mechanical, 21 January 2024.** If a hollow shaft and a solid shaft are made of the same material and have the same weight and length, which statement is correct? (a) The solid shaft can transmit more power. (b) The power transmission depends on the shaft's length. (c) The hollow shaft can transmit more power. (d) Both shafts can transmit the same amount of power.

*Answer: (c).*

1. Same weight, material and length means the same cross-sectional area.
2. So the hollow shaft's outside diameter is larger: do²(1 − k²) = d².
3. Torque ratio: (1 + k²) ÷ √(1 − k²). For k = 0.5 this is 1.25 ÷ 0.866 = 1.44. The hollow shaft carries 44% more torque, and so 44% more power at the same speed.

**The trap:** (a) remembers that a hole weakens a shaft. That is true at the same outside diameter. Here no material is removed; it is moved outward, where it carries more stress.

## 9. Columns: Euler's formula and effective length

Column questions are effective-length questions. Pick the right Le, square it, and use the smaller I. Nearly every trap breaks one of these three steps.

### Going deeper

| Idea | What it means |
| --- | --- |
| Weaker axis | A column buckles about the axis with the smaller I, bending towards its thinner side, unless its ends are held differently in the two directions. |
| Effective lengths in theory | Pinned at both ends: L. Fixed at both ends: L/2. Fixed and pinned: L/√2, about 0.7L. Fixed and free: 2L. |
| Load ratios | Taking pinned-pinned as 1, the loads are 4 for fixed-fixed, 2 for fixed-pinned and 1/4 for fixed-free. Fixed-free to fixed-pinned is a factor of 8. |
| Code values | Design codes use larger effective lengths, because real joints are never fully fixed: about 0.65L for fixed-fixed and 0.8L for fixed-pinned. Unless the question says otherwise, exams use the theory values. |
| Radius of gyration | k = √(I/A). For a rectangle about its weaker axis, k = b/√12 with b the thinner side. For a circle, k = d/4. |
| Slenderness ratio | λ = Le/kmin. Long columns fail by buckling, short ones by crushing. |
| Where Euler stops | Euler's formula holds only while the buckling stress π²E/λ² is below the yield stress. For mild steel this means λ above about 90. |
| Rankine's formula | 1/P = 1/Pc + 1/Pe. It joins the crushing load Pc and the Euler load Pe, so it works for short and long columns alike. |
| Strength does not help | The Euler load contains E and I, not the yield strength. A slender column of high-strength steel buckles at the same load as one of mild steel. |
| Scaling | Doubling the length quarters the load. Doubling a round column's diameter multiplies it by 16, because I goes with d⁴. |

### Formulas worth adding

```math
P_e = \frac{\pi^2 E I_{\min}}{L_e^2}, \qquad \sigma_e = \frac{\pi^2 E}{\lambda^2}, \qquad \lambda = \frac{L_e}{k_{\min}}, \ k = \sqrt{\frac{I}{A}}
```

```math
L_e = L \ \text{(pinned, pinned)}, \quad \frac{L}{2} \ \text{(fixed, fixed)}, \quad \frac{L}{\sqrt{2}} \ \text{(fixed, pinned)}, \quad 2L \ \text{(fixed, free)}
```

```math
k_{\text{rectangle}} = \frac{b}{\sqrt{12}}, \qquad k_{\text{circle}} = \frac{d}{4}, \qquad k_{\text{hollow circle}} = \frac{\sqrt{D^2 + d^2}}{4}
```

```math
\lambda_{\text{limit}} = \pi\sqrt{\frac{E}{\sigma_y}}
```

For mild steel with E = 200,000 MPa and σy = 250 MPa, this is π√800 = 89.

```math
\frac{1}{P_R} = \frac{1}{P_c} + \frac{1}{P_e}, \qquad P_R = \frac{\sigma_c A}{1 + a\lambda^2}, \ a = \frac{\sigma_c}{\pi^2 E}
```

### Doubts cleared

**Doubt: why does the yield strength not appear in Euler's formula?** Buckling is a loss of stability, not a failure of the material. It depends on how stiff the column is, which is E and I. The material's strength matters only for short columns that crush before they buckle.

**Doubt: which way does a rectangular column buckle?** About the axis with the smaller I, so it bows out across its thinner side. A 10 mm × 20 mm column bends across the 10 mm side.

**Doubt: L/√2 or 0.8L for fixed and pinned?** L/√2, about 0.707L, comes from the theory with a perfectly fixed end. 0.8L is the design-code value, which allows for joints that turn a little. Use the theory value unless the question names a code.

**Doubt: when is Euler's formula wrong?** When the column is short. Then π²E/λ² comes out above the yield stress, which is impossible: the column would crush first. Use Rankine's formula or simple crushing there.

**Doubt: is a hollow column better than a solid one of the same area?** Yes. For the same area, a tube has a larger radius of gyration, so a smaller slenderness ratio and a higher buckling load.

### Tricky past questions with solutions

**Q1. GATE ME 2011.** A column has a rectangular cross-section of 10 mm × 20 mm and a length of 1 m. The slenderness ratio of the column is close to: (a) 200 (b) 346 (c) 477 (d) 1000

*Answer: (b) 346.*

1. It buckles about the weaker axis: I = 20 × 10³ ÷ 12 = 1666.7 mm⁴, and A = 200 mm².
2. k = √(1666.7 ÷ 200) = 2.887 mm, which is 10/√12.
3. No end conditions are given, so take Le = L = 1000 mm. λ = 1000 ÷ 2.887 = 346.

**The trap:** using the 20 mm side gives 173, which is not in the options but catches students in similar questions. (a) divides L by 5 mm, the distance from the axis to the edge, which is not the radius of gyration.

**Q2. GATE ME 2012.** For a long slender column of uniform cross-section, the ratio of the critical buckling load for the case with both ends clamped to the case with both ends hinged is: (a) 1 (b) 2 (c) 4 (d) 8

*Answer: (c) 4.*

1. Clamped at both ends: Le = L/2. Hinged at both ends: Le = L.
2. The load goes with 1/Le², so the ratio is (L ÷ L/2)² = 4.

**The trap:** (b) halves the length but forgets to square it. Also read the order: the same question asked the other way, hinged to clamped, has the answer 0.25.

**Q3. ISRO Scientist ME 2017 (Paper II).** Four columns of equal length and cross-section have different end conditions. Column 1 is pinned at both ends, column 2 fixed at both ends, column 3 fixed at one end and free at the other, and column 4 fixed at one end and pinned at the other. Their buckling loads are P1 to P4. Which is true? (a) P1 < P2 < P3 < P4 (b) P3 < P1 < P4 < P2 (c) P1 < P4 < P2 < P3 (d) P3 < P4 < P1 < P2

*Answer: (b) P3 < P1 < P4 < P2.*

1. Effective lengths: column 3, 2L; column 1, L; column 4, L/√2; column 2, L/2.
2. Loads go with 1/Le²: 1/4, 1, 2 and 4 times the pinned value.
3. So P3 < P1 < P4 < P2.

**The trap:** reading "fixed" as strong and putting column 3 high. One fixed end with the other free is the weakest case of all: it buckles like half of a pinned column twice as long.

**Q4. GATE ME 2021 (Shift 2).** A column with one end fixed and one end free has a critical buckling load of 100 N. For the same column, if the free end is replaced with a pinned end, the critical buckling load, to the nearest integer, will be \_\_\_\_\_\_ N (numerical answer).

*Answer: 800 N.*

1. Fixed and free: Le = 2L. Fixed and pinned: Le = L/√2.
2. Ratio of loads: (2L ÷ L/√2)² = (2√2)² = 8.
3. New load: 8 × 100 = 800 N.

**The trap:** rounding L/√2 to 0.7L gives 816 N, and the code value 0.8L gives 625 N. "Nearest integer" means the exact theory value is wanted.

## 10. Principal stresses and Mohr's circle

Most principal stress traps ask which maximum shear stress: the one in the plane or the absolute one. The rest are about signs on Mohr's circle and which failure theory the question wants.

### Going deeper

| Idea | What it means |
| --- | --- |
| Invariant | On any pair of perpendicular planes, σx + σy is the same, and equals σ1 + σ2. It is a quick check on any answer. |
| Complementary shear | Shear stresses on two perpendicular planes are equal in size but opposite in sense. Otherwise the element would spin. |
| Angles | Principal planes are 90° apart. Planes of maximum shear are at 45° to them, and they carry the average normal stress (σ1 + σ2)/2. |
| Mohr's circle | Centre at the average stress, radius equal to the in-plane maximum shear. An angle θ on the element is 2θ on the circle. |
| Special circles | Pure shear: centre at the origin, σ1 = τ and σ2 = −τ. Equal stresses in both directions with no shear: the circle shrinks to a point, every direction is principal and there is no shear. Uniaxial σ: the circle passes through the origin and τmax = σ/2. |
| Absolute maximum shear | In plane stress the third principal stress is zero. If σ1 and σ2 have the same sign, the absolute maximum is σmax/2, larger than the in-plane value. If they have opposite signs, the in-plane value is the absolute one. |
| Failure theories | Maximum normal stress (Rankine) for brittle materials. Maximum shear stress (Tresca) for ductile ones, on the safe side. Distortion energy (von Mises) for ductile ones, closest to tests. |
| Shear yield | Tresca predicts yield in shear at 0.5 σy, von Mises at 0.577 σy. Pure shear is where the two differ most. |
| Shaft under axial load and torque | The surface has σ from the axial load and τ from the torque. The principal stresses are σ/2 ± √((σ/2)² + τ²). |

### Formulas worth adding

```math
\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}, \qquad \tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}
```

```math
\tau_{\text{in-plane}} = \frac{\sigma_1 - \sigma_2}{2}, \qquad \tau_{\text{absolute}} = \frac{\sigma_{\max} - \sigma_{\min}}{2} \ \text{with } \sigma_3 = 0 \text{ included}
```

```math
\text{Tresca: } \sigma_{\max} - \sigma_{\min} = \frac{\sigma_y}{N}, \qquad \text{von Mises: } \sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2 = \left(\frac{\sigma_y}{N}\right)^2
```

N is the factor of safety. For Tresca, σmax and σmin are taken over all three principal stresses, with σ3 = 0 in plane stress.

```math
\tau_{y,\text{Tresca}} = 0.5\,\sigma_y, \qquad \tau_{y,\text{von Mises}} = \frac{\sigma_y}{\sqrt{3}} = 0.577\,\sigma_y
```

```math
\sigma_x + \sigma_y = \sigma_1 + \sigma_2, \qquad \sigma_{\text{on maximum shear planes}} = \frac{\sigma_1 + \sigma_2}{2}
```

### Doubts cleared

**Doubt: if both principal stresses are tensile, is (σ1 − σ2)/2 the largest shear stress?** Only within the plane. A free surface also has a third principal stress, zero, at right angles to it. Taking that into account, the largest shear is σ1/2, on a plane tilted out of the surface. Read whether the question says in-plane or absolute.

**Doubt: are the shear stresses on perpendicular planes the same in every way?** Equal in size, opposite in sense. On an element they either both point towards a corner or both point away from it, so their turning effects cancel.

**Doubt: do the planes of maximum shear carry no normal stress?** Usually they do carry some: the average (σ1 + σ2)/2. Only in pure shear is that zero.

**Doubt: when does Mohr's circle become a point?** When σx = σy and there is no shear. Every direction is then principal and no plane in the surface carries shear. The wall of a thin sphere under pressure is like this.

**Doubt: which failure theory should I use?** For ductile metals, von Mises agrees best with tests, and Tresca is a little on the safe side, by up to 15% in pure shear. For brittle materials such as cast iron, use the maximum normal stress theory. If the question names a theory, use that one.

### Tricky past questions with solutions

**Q1. GATE ME 2009.** If the principal stresses in a plane stress problem are σ1 = 100 MPa and σ2 = 40 MPa, the magnitude of the maximum shear stress, in MPa, will be: (a) 60 (b) 50 (c) 30 (d) 20

*Answer: (c) 30, the in-plane value used in the answer key.*

1. In-plane maximum shear: (σ1 − σ2)/2 = (100 − 40)/2 = 30 MPa.
2. The third principal stress, at right angles to the plane, is zero. Counting it, the absolute maximum is (100 − 0)/2 = 50 MPa.
3. The key took the in-plane value, which is what "plane stress problem" points to.

**The trap:** both 30 and 50 are correct answers to different questions, and both are in the options. In later papers GATE says "in-plane" or "absolute" clearly. When it does not, look for which one the wording points to, and know both.

**Q2. ESE Civil 2016 (Paper 1).** Which of the following statements are correct for stresses acting on mutually perpendicular faces of a plane element? 1. The sum of the normal stresses on mutually perpendicular planes is equal to the sum of the principal stresses. 2. The shearing stresses on two mutually perpendicular planes are equal in magnitude and direction. 3. The maximum shear stress is half of the difference between the principal stresses. (a) 1, 2 and 3 (b) 1 and 2 only (c) 2 and 3 only (d) 1 and 3 only

*Answer: (d) 1 and 3 only.*

1. Statement 1 is the stress invariant: σx + σy = σ1 + σ2. True.
2. Statement 2 is wrong in one word. The two shear stresses are equal in magnitude but opposite in sense, so their couples cancel. False.
3. Statement 3 is the radius of Mohr's circle. True for the in-plane maximum, which is what an element in a plane means.

**The trap:** "equal in magnitude" makes statement 2 look true, and the error is hidden in "and direction". In statement questions, read every word of a statement that starts out right.

**Q3. GATE ME 2008.** A solid circular shaft of diameter 100 mm is subjected to an axial stress of 50 MPa. It is further subjected to a torque of 10 kN·m. The maximum principal stress experienced on the shaft is closest to: (a) 41 MPa (b) 82 MPa (c) 164 MPa (d) 204 MPa

*Answer: (b) 82 MPa.*

1. Shear stress at the surface: τ = 16T/πd³ = 16 × 10⁷ ÷ (π × 10⁶) = 50.9 MPa.
2. σx = 50 MPa, σy = 0.
3. σ1 = 25 + √(25² + 50.9²) = 25 + 56.7 = 81.7 MPa.

**The trap:** (c) leaves out the halving: σ + √(σ² + 4τ²) = 164, which is twice the right value. (a) is half of it. Also keep the torque in N·mm: 10 kN·m = 10⁷ N·mm.

**Q4. GATE ME 2015 (Shift 2).** The uniaxial yield stress of a material is 300 MPa. According to the von Mises criterion, the shear yield stress of the material, in MPa, is \_\_\_\_\_\_ (numerical answer).

*Answer: about 173.2 MPa (accepted range 171 to 175).*

1. In pure shear τ, the principal stresses are +τ and −τ.
2. von Mises: τ² + τ² + τ² = σy², so 3τ² = σy².
3. τ = 300 ÷ √3 = 173.2 MPa.

**The trap:** 150 MPa is the Tresca value, σy/2. The question names von Mises, so the factor is 1/√3, not 1/2.

**Q5. GATE ME 2014 (Shift 4).** A shaft is subjected to a pure torsional moment. The maximum shear stress developed in the shaft is 100 MPa. The yield and ultimate strengths of the shaft material in tension are 300 MPa and 450 MPa. The factor of safety using the maximum distortion energy (von Mises) theory is \_\_\_\_\_\_ (numerical answer).

*Answer: about 1.73 (accepted range 1.7 to 1.9).*

1. Pure torsion: the principal stresses are +100 and −100 MPa.
2. von Mises: σ1² − σ1σ2 + σ2² = 10,000 + 10,000 + 10,000 = 30,000. The equivalent stress is √30,000 = 173.2 MPa.
3. Factor of safety = 300 ÷ 173.2 = 1.73.

**The trap:** the ultimate strength is there to tempt you. Yield theories use the yield strength. Using 450 gives 2.6. Tresca would give 300 ÷ 200 = 1.5.

## 11. Thin cylinders and springs

Thin-shell traps are about radius against diameter, and about which stress the question asks for. Spring traps are about the fourth power of the wire diameter.

### Going deeper

| Idea | What it means |
| --- | --- |
| Hoop and longitudinal | Hoop stress pd/2t = pr/t is twice the longitudinal stress pd/4t. Check whether a question gives the radius or the diameter. |
| Which joint is stronger | The hoop stress pulls across the seam that runs along the length. So the longitudinal joint carries the larger stress and must be the stronger one. |
| Sphere | A sphere has pd/4t in every direction. For the same pressure, diameter and allowed stress, it needs half the wall of a cylinder. |
| Radial stress | It is −p at the inside and zero at the outside. Thin-shell theory leaves it out, because it is small next to the hoop stress when the wall is thinner than d/20. |
| Shear in a cylinder wall | In the plane of the wall it is (σh − σl)/2 = pd/8t. Counting the near-zero radial stress, the absolute maximum is σh/2 = pd/4t. |
| Strains | Hoop strain is pd(2 − ν)/4tE and longitudinal strain is pd(1 − 2ν)/4tE. The volume strain is twice the hoop strain plus the longitudinal strain. |
| Thick cylinders | Lamé's equations: the hoop stress is largest at the inner surface and falls towards the outer one, while σh + σr stays constant through the wall. |
| Spring stiffness | k = Gd⁴/8D³n. It depends on the shear modulus and the sizes, but not on the strength of the wire. |
| Spring stress | τ = K × 8WD/πd³, with Wahl's factor K correcting for the wire's curvature and direct shear. Stiffness goes with d⁴, stress with 1/d³. |
| Small changes | (1 + x)ⁿ is close to 1 + nx for small x, but GATE asks for two decimal places, so raise to the power exactly. |

### Formulas worth adding

```math
\sigma_h = \frac{pd}{2t}, \qquad \sigma_l = \frac{pd}{4t}, \qquad \sigma_{\text{sphere}} = \frac{pd}{4t}
```

```math
\tau_{\text{in-plane}} = \frac{pd}{8t}, \qquad \tau_{\text{absolute}} = \frac{pd}{4t} \ \text{(radial stress neglected)}
```

```math
\varepsilon_h = \frac{pd}{4tE}(2 - \nu), \qquad \varepsilon_l = \frac{pd}{4tE}(1 - 2\nu), \qquad \varepsilon_v = \frac{pd}{4tE}(5 - 4\nu)
```

```math
\varepsilon_{v,\text{sphere}} = \frac{3pd}{4tE}(1 - \nu)
```

```math
\sigma_h = \frac{pd}{2t\,\eta_l}, \qquad \sigma_l = \frac{pd}{4t\,\eta_c}
```

Here ηl is the efficiency of the longitudinal joint and ηc that of the circumferential joint.

```math
\sigma_r = A - \frac{B}{r^2}, \qquad \sigma_h = A + \frac{B}{r^2}
```

```math
k = \frac{G d^4}{8 D^3 n}, \qquad \tau = K\,\frac{8WD}{\pi d^3}, \qquad K = \frac{4C - 1}{4C - 4} + \frac{0.615}{C}, \ C = \frac{D}{d}
```

### Doubts cleared

**Doubt: why do cylinders split along their length?** The hoop stress is twice the longitudinal stress, and it acts across sections that run along the length. A boiled sausage splits the same way.

**Doubt: is a sphere better than a cylinder?** For the same pressure and diameter, a sphere's wall stress is half a cylinder's hoop stress, so it needs half the thickness. Spheres are harder to make and fit, so tanks are usually cylinders with rounded ends.

**Doubt: for a thin cylinder, is the largest shear stress pd/8t or pd/4t?** pd/8t is the largest shear in the plane of the wall. pd/4t is the absolute largest, counting the radial direction. GATE now says which one it wants; give that one.

**Doubt: why does a spring's stiffness go with d⁴ but its stress with 1/d³?** The wire is a shaft in torsion. Stiffness depends on its torsional rigidity GJ, and J goes with d⁴. Stress is torque divided by the polar section modulus, which goes with d³.

**Doubt: when is a cylinder thin?** When the wall is less than about a twentieth of the diameter. Then the hoop stress is nearly uniform across the wall. Thicker walls need Lamé's equations.

### Tricky past questions with solutions

**Q1. GATE ME 2011.** A thin cylinder of inner radius 500 mm and thickness 10 mm is subjected to an internal pressure of 5 MPa. The average circumferential (hoop) stress in MPa is: (a) 100 (b) 250 (c) 500 (d) 1000

*Answer: (b) 250.*

1. The diameter is 2 × 500 = 1000 mm.
2. σh = pd/2t = 5 × 1000 ÷ (2 × 10) = 250 MPa.
3. The same, faster: pr/t = 5 × 500 ÷ 10 = 250 MPa.

**The trap:** the question gives the radius. Putting 500 into pd/2t gives 125, and putting 1000 into pr/t gives 500, which is option (c).

**Q2. GATE ME 2015 (Shift 3).** A cylindrical tank with closed ends is filled with compressed air at a pressure of 500 kPa. The inner radius of the tank is 2 m and it has a wall thickness of 10 mm. The magnitude of the maximum in-plane shear stress, in MPa, is \_\_\_\_\_\_ (numerical answer).

*Answer: 25 MPa.*

1. In N and mm: p = 0.5 MPa, r = 2000 mm, t = 10 mm.
2. σh = pr/t = 0.5 × 2000 ÷ 10 = 100 MPa. σl = 50 MPa.
3. In-plane maximum shear: (100 − 50)/2 = 25 MPa.

**The trap:** 50 MPa is the absolute maximum, σh/2. The word in-plane rules it out. Also watch the units: 500 kPa is 0.5 MPa, not 500.

**Q3. ESE Mechanical 2017.** A thin cylindrical pressure vessel and a thin spherical pressure vessel have the same mean radius and the same wall thickness, and are subjected to the same internal pressure. The hoop stresses set up in these vessels (cylinder in relation to sphere) will be in the ratio: (a) 1 : 2 (b) 1 : 1 (c) 2 : 1 (d) 4 : 1

*Answer: (c) 2 : 1.*

1. Cylinder: σh = pr/t.
2. Sphere: σ = pr/2t, because the whole circle of the sphere resists the pressure, not just two lines along a cylinder.
3. Ratio: 2 : 1.

**The trap:** (a) is the ratio upside down. The cylinder is the one with the higher stress.

**Q4. ESE Mechanical 2018.** Consider the following statements: 1. In a thin spherical shell of diameter d and thickness t under internal pressure p, the principal stresses at any point equal pd/4t. 2. In thin cylinders, the hoop stress is determined assuming it to be uniform across the thickness of the cylinder. 3. In thick cylinders, the hoop stress is not uniform across the thickness, but varies from a maximum at the inner circumference to a minimum at the outer circumference. Which of the above statements are correct? (a) 1 and 2 only (b) 1 and 3 only (c) 2 and 3 only (d) 1, 2 and 3

*Answer: (d) 1, 2 and 3.*

1. Statement 1: the sphere's two stresses in its wall are both pd/4t. True.
2. Statement 2 is the basic assumption of thin-shell theory. True.
3. Statement 3 is Lamé's result: σh = A + B/r² falls as r grows. True.

**The trap:** statement 1 seems to ignore the radial stress, so students drop it. In thin-shell theory the radial stress is neglected, and the two principal stresses in the wall are what is meant.

**Q5. GATE ME 2016 (Shift 1).** The spring constant of a helical compression spring does NOT depend on: (a) coil diameter (b) material strength (c) number of active turns (d) wire diameter

*Answer: (b) material strength.*

1. k = Gd⁴/8D³n.
2. Coil diameter D, active turns n and wire diameter d all appear.
3. The material enters only through its shear modulus G. Its strength sets how much load the spring can take, not how stiff it is.

**The trap:** "material" is in the formula through G, so (b) looks wrong. But modulus and strength are different properties: two steels of different strength have almost the same G.

**Q6. GATE ME 2018 (Shift 1).** If the wire diameter of a compressive helical spring is increased by 2%, the change in spring stiffness, in % to two decimal places, is \_\_\_\_\_\_ (numerical answer).

*Answer: about 8.24% (accepted range 8.00 to 8.50).*

1. With everything else the same, k goes with d⁴.
2. 1.02⁴ = 1.0404² = 1.0824.
3. The stiffness rises by 8.24%.

**The trap:** 2% assumes stiffness goes with d, and 6% uses d³, which is the rule for stress. The quick estimate 4 × 2% = 8% is close, but the question asks for two decimal places.

## Sources

Of the 53 past questions, 30 are from GATE ME, 7 from ESE (4 Mechanical, 3 Civil) and 16 from ISRO, JE, AE and other technical exams. Each was checked on its Testbook question page, which names the paper it was asked in. Where Testbook does not name the paper, the year comes from ExamSIDE's GATE archive (section 10 Q3). Questions that needed a figure have the figure's lengths and directions written into the question. Every answer was worked out again for this guide.

- **1. Forces and friction:** [Q1 GATE 2021](https://testbook.com/question-answer/a-block-of-negligible-mass-rests-on-a-surface-that--6033a1cc5560b6fd8635cb83), [Q2 GATE 2014](https://testbook.com/question-answer/a-ladder-ab-of-length-5-m-and-weight-w-600-n-is--56602225995a2d0c5d50bd56), [Q3 VIZAG MT 2013](https://testbook.com/question-answer/the-area-moment-of-inertia-of-a-square-of-size-1-u--5a02b76937ac600d6ca76a18), [Q4 UPPSC AE 2019](https://testbook.com/question-answer/a-block-of-mass-m-is-released-from-point-p-on-a-ro--56543be90328213d4a8bf04d), [Q5 ISRO VSSC 2018](https://testbook.com/question-answer/an-elephant-is-stopped-by-a-rope-wound-twice-aroun--5f9a68be0f4a324e6c1fdee1), [Q6 ESE 2022](https://testbook.com/question-answer/directionseach-of-thenextsix-0--627b30f5198c1ee0cc0e66d5)
- **2. Dynamics:** [Q1 GATE 2012](https://testbook.com/question-answer/a-solid-disc-of-radius-r-rolls-without-slipping-on--565c38c5995a2d0c5d4bdba5), [Q2 GATE 2014](https://testbook.com/question-answer/an-annular-disc-has-a-mass-m-inner-radius-r-and-o--565eba3c03282114ca205dd8), [Q3 GATE 2016](https://testbook.com/question-answer/a-point-mass-m-is-released-from-rest-and-slides-do--5e01e2223a58450d00d622d0), [Q4 GATE 2015](https://testbook.com/question-answer/a-small-ball-of-mass-1-kg-moving-with-a-velocity-o--56596a47995a2d13ea414d0c), [Q5 KPSC AE 2017](https://testbook.com/question-answer/a-heavy-elastic-ball-drops-from-the-ceiling-of-a-r--5f59c7375fb64488bfe23ecf)
- **3. Stress and strain:** [Q1 GATE 2014](https://testbook.com/question-answer/if-the-poissons-ratio-of-an-elastic-material--565feb6e03282114ca21e985), [Q2 GATE 2017](https://testbook.com/question-answer/the-poissons-ratio-for-a-perfectly-incompre--58e49f3c0328210149d76916), [Q3 UPRVUNL JE 2016](https://testbook.com/question-answer/a-solid-uniform-metal-bar-of-diameter-d-and-length--606ab40477b906c8273f0a25), [Q4 RRB JE 2019](https://testbook.com/question-answer/bar-a-has-diameter-d-and-length-l--655e19e960562abf43dd451b)
- **4. Thermal stress and composite bars:** [Q1 GATE 2012](https://testbook.com/question-answer/a-solid-steel-cube-constrained-on-all-six-faces-is--565c475103282114ca1d7ffe), [Q2 GATE 2014](https://testbook.com/question-answer/a-steel-cube-with-all-faces-free-to-deform-has-y--565c52c8995a2d0c5d4c00d8), [Q3 ESE 2014](https://testbook.com/question-answer/a-steel-rod-2-m-long-is-held-between-two-walls-a--5ed4bcfff60d5d1d24ca98c4), [Q4 CIL MT 2020](https://testbook.com/question-answer/a-composite-bar-made-of-copper-and-steel-is-heated--5e6ba5ccf60d5d671bd1fee9)
- **5. Shear force and bending moment:** [Q1 GATE 2013](https://testbook.com/question-answer/a-simply-supported-beam-of-length-l-is-subjected-t--565c085f995a2d64c3c42548), [Q2 GATE 2015](https://testbook.com/question-answer/a-cantilever-beam-op-is-connected-to-another-beam--56598fd6995a2d13ea41a3d5), [Q3 GATE 2017](https://testbook.com/question-answer/for-a-loaded-cantilever-beam-of-uniform-cross-sect--58f5c077e9f1310a6f0bed74), [Q4 ESE Civil 2023](https://testbook.com/question-answer/which-one-of-the-following-statements-is-correct--651b0cac1089fb16fccbc9e1), [Q5 ESE Civil 2021](https://testbook.com/question-answer/consider-the-following-statements-regarding-sheari--616d1d2188a889fec1bb1d1a)
- **6. Bending and shear stress:** [Q1 GATE 2018](https://testbook.com/question-answer/a-simply-supported-beam-of-width-100-mm-height-20--5dc928cdf60d5d2e3fa0bfe5), [Q2 GATE 2021](https://testbook.com/question-answer/an-overhanging-beam-pqr-is-subjected-to-uniformly--60338b5edaccc46b67280f6e), [Q3 ISRO RAC 2020](https://testbook.com/question-answer/a-square-beam-and-a-circular-beam-of-same-material--600813a27f8c470f114ce53e), [Q4 MPSC AE 2015](https://testbook.com/question-answer/a-rectangular-timber-beam-b-d-is-cu--62c8252a56c7a88929c0a6fa), [Q5 BHEL ET 2019](https://testbook.com/question-answer/an-i-section-of-a-beam-is-shown-in-the-figure-belo--5f4870483ca0d60d156515dd)
- **7. Deflection:** [Q1 GATE 2016](https://testbook.com/question-answer/a-cantilever-beam-having-square-cross-section-of-s--5e01e3b23a58450d00d633cf), [Q2 GATE 2019](https://testbook.com/question-answer/a-horizontal-cantilever-beam-of-circular-cross-sec--5de28a20f60d5d5a988e7fcf), [Q3 GPSC AE 2020](https://testbook.com/question-answer/a-propped-cantilever-beam-of-span-l-is-subjected-t--602cd9660e9f4b01b9a66c7d), [Q4 SSC JE 2018](https://testbook.com/question-answer/the-ratio-of-the-maximum-deflections-of-a-simply-s--5dcad4f1f60d5d528b2354d6), [Q5 TSPSC AEE 2015](https://testbook.com/question-answer/the-simply-supported-beam-a-of-length--6323535c1e267593062d6bc6)
- **8. Torsion:** [Q1 GATE 2009](https://testbook.com/question-answer/a-solid-shaft-of-diameterd-and-length-l-is-f--565ffaca995a2d0c5d5079c0), [Q2 GATE 2014](https://testbook.com/question-answer/two-solid-circular-shafts-of-radii-r1-r2-are--565e9aa303282114ca202783), [Q3 TNTRB 2012](https://testbook.com/question-answer/two-shafts-a-and-b-are-made-of-the-same-material--5f3527b2d042f30d12f76dd8), [Q4 BHEL ST 2024](https://testbook.com/question-answer/if-a-hollow-shaft-and-a-solid-shaft-are-made-of-th--679a4cc88e99141ba63c002f)
- **9. Columns:** [Q1 GATE 2011](https://testbook.com/question-answer/a-column-has-a-rectangular-cross-section-of-10-mm--56584819995a2d13ea3f7b9a), [Q2 GATE 2012](https://testbook.com/question-answer/for-a-long-slender-column-of-uniform-cross-section--565c31bd995a2d0c5d4bd091), [Q3 ISRO 2017](https://testbook.com/question-answer/buckling-loads-pi-of-4-columns-of-equal-length-a--649c16712c71bc2b4609a40d), [Q4 GATE 2021](https://testbook.com/question-answer/a-column-with-one-end-fixed-and-one-end-free-has-a--6033a79a10e0d5666a83fddd)
- **10. Principal stresses:** [Q1 GATE 2009](https://testbook.com/question-answer/if-the-principal-stresses-in-a-plane-stress-proble--565fdd9103282114ca21cd74), [Q2 ESE Civil 2016](https://testbook.com/question-answer/which-of-the-following-statements-are-correct-for--5ed4eb1af60d5d1d24cae748), [Q3 GATE 2008](https://questions.examside.com/past-years/gate/question/a-solid-circular-shaft-of-diameter-100-mm-is-subjected-to-an-gate-me-2008-marks-2-hvjtlchp3uesu1mp.htm) ([Testbook](https://testbook.com/question-answer/a-solid-circular-shaft-of-diameter-100-mm-is-subje--565594130328213d4a8cf716)), [Q4 GATE 2015](https://testbook.com/question-answer/the-uniaxial-yield-stress-of-a-material-is-300-mpa--5659685f995a2d13ea4149dd), [Q5 GATE 2014](https://testbook.com/question-answer/a-shaft-is-subjected-to-pure-torsional-moment-the--56601853995a2d0c5d50a9cf)
- **11. Thin cylinders and springs:** [Q1 GATE 2011](https://testbook.com/question-answer/a-thin-cylinder-of-inner-radius-500-mm-and-thickne--5658512b995a2d13ea3f91bd), [Q2 GATE 2015](https://testbook.com/question-answer/a-cylindrical-tank-with-closed-ends-is-filled-with--56599419995a2d13ea41ae31), [Q3 ESE 2017](https://testbook.com/question-answer/a-thin-cylindrical-pressure-vessel-and-a-thin-sphe--5ec4d3cff60d5d7bd0c07f0a), [Q4 ESE 2018](https://testbook.com/question-answer/consider-the-following-statements1-in-case-of--5e8b4e4b3572620d2dc4a6dc), [Q5 GATE 2016](https://testbook.com/question-answer/the-spring-constant-of-a-helical-compression-sprin--5e01e4a0bb46d70d06bedc7e), [Q6 GATE 2018](https://testbook.com/question-answer/if-the-wire-diameter-of-a-compressive-helical-spri--5dc94b73f60d5d2e3fa0c327)
