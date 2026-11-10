# Engineering Mechanics and SOM Level 2: Theory Deep Dive

Nov 10, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the formula lists and past questions are.

Conventions used throughout:

- Forces are in N or kN, lengths in mm and stress in MPa, where 1 MPa = 1 N/mm². So a force in newtons divided by an area in mm² gives MPa directly. Steel has E ≈ 200 GPa = 200,000 MPa.
- Tension and tensile stress are positive; compression is negative.
- A sagging bending moment (the beam bends like a smile, concave upward) is positive; hogging is negative.
- g = 9.81 m/s². Angles are in degrees unless marked as radians.
- μ is the coefficient of friction in Topic 1 and Poisson's ratio from Topic 3 on.

## 1. Forces, friction, centroid and moment of inertia

Statics studies bodies that stay still, so every push must cancel and every turning effect must cancel. Friction, centroids and moment of inertia all grow out of that one demand. Exam setters twist the resultant of two forces, Lami's theorem, when friction reaches its limit, and the centroid and I of standard shapes.

### The picture

Think of a see-saw in a playground. For it to stay level, two things must hold. The pivot must push up exactly as hard as the children push down, and the turning effect on one side must equal that on the other. A child twice as heavy sits half as far out.

That is all of statics: ΣFx = 0, ΣFy = 0 and ΣM = 0. Three equations, so a flat (planar) problem can find at most three unknown forces.

Now make the plank itself heavy. The point where it balances on one finger is its centre of gravity; for a flat shape of even thickness it is the centroid, the average position of the area. Moment of inertia (I) measures how far the area sits from an axis, with distance counted squared. A plank laid flat bends easily, but the same plank on its edge hardly bends, because more of its material is far from the bending axis.

### Twisted points

**Two forces combine by the parallelogram law.** Draw the two forces from one point as two sides of a parallelogram; the diagonal is the resultant.

```math
R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}, \qquad \tan\alpha = \frac{Q\sin\theta}{P + Q\cos\theta}
```

Here θ is the angle between the forces and α the angle R makes with P. R is largest (P + Q) when they act together, smallest (P − Q) when opposed, and √(P² + Q²) at 90°. Two equal forces P at angle θ give R = 2P cos(θ/2). At 120° that is exactly P, which is why three equal forces 120° apart balance.

**Lami's theorem works for exactly three forces.** If three forces meet at a point and hold it still, each force is in proportion to the sine of the angle between the other two. It fails for two or four forces, for forces that do not meet at one point, and for a body that is moving.

```math
\frac{P}{\sin\alpha} = \frac{Q}{\sin\beta} = \frac{R}{\sin\gamma}
```

A lamp hanging from two strings is the classic case: its weight and the two string tensions.

**Moments and couples.** A moment is force × perpendicular distance from the point to the force's line. A couple is two equal, opposite, parallel forces, like your two hands on a steering wheel. Its moment is the same about every point, so a couple can be slid anywhere in its plane without changing its effect. It produces pure turning, so it can never be balanced by a single force, only by an equal and opposite couple.

**Varignon's theorem tells you where the resultant acts.** The moment of the resultant about any point equals the sum of the moments of its parts. So once you have R, its line of action is at distance x = ΣM / R from the point you took moments about.

**Supports supply only certain reactions.** A roller pushes back only at right angles to its surface: one unknown. A hinge (pin) stops movement in any direction but lets the end rotate: two unknowns, Rx and Ry. A fixed end stops movement and rotation: three unknowns, Rx, Ry and a moment. With three equations available, a beam with three unknown reactions in total is statically determinate. Topic 5 builds on this.

**Friction is a reaction that grows to a limit.** Push gently on a heavy cupboard and it does not move: friction pushes back exactly as hard as you push. Push harder and friction keeps matching you, up to its limit F = μs × N. Only then does the cupboard slide.

So below the limit, friction equals the applied force, not μN. A 600 N body with μs = 0.25 can take up to 150 N of friction; push it with 80 N and the friction is 80 N. Once it slides, kinetic friction μk × N takes over. μk is a little smaller than μs, which is why a heavy box is hardest to get moving and easier to keep moving.

**The laws of dry friction (Coulomb's laws).**

- Limiting friction is proportional to the normal reaction N.
- It does not depend on the area in contact: a brick needs the same push lying flat or standing on its end. More area means less pressure per mm², and the two cancel.
- It depends on the two surfaces (their roughness and materials).
- Kinetic friction is roughly independent of sliding speed at ordinary speeds.

**The angle of friction equals the angle of repose.** At the point of slipping, the surface pushes back with N and F = μN. Their resultant leans away from the normal by the angle of friction φ, where tan φ = μ. Tilt a plank with a book on it: the book slides when the plank angle θ makes W sin θ = μ W cos θ, that is tan θ = μ.

The weight cancels out of that equation. A heavy book and a light book of the same cover slide at the same angle, so the angle of repose depends only on μ.

**Pulling at an angle beats pushing.** Pull a body along the floor with a rope at angle θ above the horizontal: the upward part of the pull lifts some weight off the floor, N = W − P sin θ, so friction falls. Push down at the same angle and N = W + P sin θ, so friction rises. The least pull is needed when the rope is at θ = φ, the angle of friction, giving Pmin = W sin φ.

**Centroids of standard shapes.** The centroid sits on every axis of symmetry, so a rectangle's and a circle's are at the centre. Other shapes lean toward where the area is concentrated:

| Shape | Centroid position |
| --- | --- |
| Triangle | h/3 from the base (2h/3 from the vertex) |
| Semicircle (area) | 4r/3π ≈ 0.424r from the diameter |
| Quarter circle (area) | 4r/3π from each straight edge |
| Solid hemisphere | 3r/8 from the flat face |
| Hollow hemisphere (thin shell) | r/2 from the flat face |
| Solid cone | h/4 from the base |
| Semicircular wire (arc) | 2r/π from the diameter |

The triangle is wide at the base and pointed at the top, so most of its area is low down: the centroid sits a third of the way up, not half.

**Composite shapes and holes.** Split the shape into simple parts and average their centroids, weighted by area: x̄ = ΣAx / ΣA. A hole is a part with negative area.

**Centroid, centre of gravity and centre of mass.** The centroid is pure geometry, so it depends only on shape. The centre of gravity is where the weight acts, and the centre of mass is the average position of the mass. All three coincide for a body of uniform material in uniform gravity, which covers every exam case.

**Moment of inertia counts distance squared.** I = Σ y² dA, in mm⁴. Area twice as far from the axis counts four times as much. That is why I-beams put most of their metal in flanges far from the centre.

For a rectangle of width b and depth d about its centroidal axis parallel to b, I = bd³/12. The side at right angles to the axis is the one cubed. A 50 × 100 plank on edge (d = 100) has I four times larger than the same plank laid flat (d = 50).

| Shape | About its centroidal axis | About the base or edge |
| --- | --- | --- |
| Rectangle b × d | bd³/12 | bd³/3 |
| Triangle, base b, height h | bh³/36 | bh³/12 (about the base); bh³/4 (about the vertex, parallel to the base) |
| Circle, diameter d | πd⁴/64 | Polar (about the centre, at right angles to the face): πd⁴/32 |
| Semicircle, radius r | 0.11r⁴ | πr⁴/8 (about the diameter) |

**The parallel axis theorem needs the centroid.** I about any axis = I about a parallel axis through the centroid + A h², where h is the distance between the axes. It only works when one of the two axes passes through the centroid. To go from a triangle's base to its vertex, go through the centroid: never add A h² between two non-centroidal axes.

```math
I_{AB} = I_G + A h^2
```

Check it on the triangle: about the base, bh³/36 + (bh/2)(h/3)² = bh³/36 + 2bh³/36 = bh³/12. About the vertex, bh³/36 + (bh/2)(2h/3)² = bh³/36 + 8bh³/36 = bh³/4.

**The perpendicular axis theorem is for flat shapes.** For a lamina in the x–y plane, the I about the z axis (through the face) is Ixx + Iyy. A circle has Ixx = Iyy = πd⁴/64, so its polar moment J = πd⁴/32, the value torsion uses in Topic 8.

**Radius of gyration.** k = √(I/A): the distance at which the whole area, squeezed into a thin strip, would give the same I. For a solid circle k = d/4; for a rectangle about its centroidal axis k = d/√12. Columns use the least k (Topic 9).

### Worked numbers

**Resultant of two forces.** 30 N and 40 N at 90° give R = √(900 + 1600) = 50 N, at tan⁻¹(40/30) = 53.1° from the 30 N force. At 60° apart:

```math
R = \sqrt{30^2 + 40^2 + 2 \times 30 \times 40 \times \cos 60^\circ} = \sqrt{3700} = 60.8\ \text{N}
```

**Block on an incline.** A 100 N block rests on a 30° slope with μ = 0.3.

- Along the slope: W sin 30° = 50 N pulls it down.
- Normal reaction: N = W cos 30° = 86.6 N, so the friction limit is 0.3 × 86.6 = 26 N.
- 50 N is more than 26 N, so the block slides (tan 30° = 0.577 is above μ = 0.3).
- To hold it still: 50 − 26 = 24 N up the slope. To push it up at steady speed: 50 + 26 = 76 N, since friction now acts down the slope.

**Centroid and I of a T-section.** A flange 100 × 20 mm sits on top of a web 20 × 80 mm. Measure y from the bottom of the web.

```math
\bar{y} = \frac{1600 \times 40 + 2000 \times 90}{1600 + 2000} = \frac{244\,000}{3600} = 67.8\ \text{mm}
```

Now I about the horizontal axis through the centroid, part by part with the parallel axis theorem:

- Web: 20 × 80³/12 + 1600 × (67.8 − 40)² = 853,333 + 1,234,700 = 2,088,000 mm⁴.
- Flange: 100 × 20³/12 + 2000 × (90 − 67.8)² = 66,667 + 987,400 = 1,054,100 mm⁴.
- Total: I ≈ 3.14 × 10⁶ mm⁴.

Notice that the A h² terms are far bigger than the parts' own I. Area far from the axis dominates.

**Semicircle.** A semicircular plate of radius 60 mm has its centroid 4 × 60 / 3π = 25.5 mm from the diameter.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Friction depends on the area in contact. | Limiting friction depends only on the normal reaction and the two surfaces, not on area. |
| Friction always equals μN. | Only at the point of slipping. Below that it equals the applied force. |
| Kinetic friction is larger than static. | It is a little smaller, so starting a slide takes more force than keeping it going. |
| A heavier block slides at a steeper angle. | The angle of repose depends only on μ: tan θ = μ. Weight cancels. |
| Lami's theorem works for any set of forces in equilibrium. | Only for exactly three forces meeting at one point. |
| A single force can balance a couple. | Only an equal and opposite couple can. |
| The parallel axis theorem links any two parallel axes. | One of the two axes must pass through the centroid. |
| A rectangle's I is db³/12 whichever way it lies. | The side at right angles to the axis is cubed. A plank on edge is far stiffer than the same plank flat. |
| A triangle's centroid is halfway up. | It is h/3 from the base. |
| A semicircle's centroid is r/2 from the diameter. | It is 4r/3π ≈ 0.424r. A semicircular wire's is 2r/π. |
| The centroid depends on the material. | It is pure geometry and depends only on shape. |

## 2. Dynamics: laws of motion, work and energy, projectiles

Dynamics is statics with motion added: a net force does not vanish, it accelerates the body. Every question here uses one of three tools: Newton's second law, the work–energy balance, or momentum. The twists are in which tool fits, momentum versus kinetic energy, collisions, and the projectile angles.

### The picture

Ride a bicycle. Pedal hard and you speed up: a net force gives acceleration (F = ma). Stop pedalling and you coast on, because a moving body keeps moving until something stops it (inertia). Squeeze the brakes and your kinetic energy becomes heat in the brake pads. Roll down a hill and height turns into speed; climb the next one and speed turns back into height.

Throw a ball across a field and two motions run side by side. Sideways it keeps a steady speed, since nothing pushes it sideways. Up and down it slows, stops and falls back under gravity. A projectile is just those two motions added.

### Twisted points

**Newton's three laws.**

- First: a body stays at rest or in steady straight motion unless a net force acts. This is inertia.
- Second: force equals the rate of change of momentum. For a constant mass that is F = ma.
- Third: every action has an equal and opposite reaction. The two act on different bodies, so they never cancel each other. A horse pulls a cart and the cart pulls the horse back equally; the horse moves because the ground pushes it forward harder than the cart holds it back.

**D'Alembert's principle turns motion into statics.** Move ma to the other side of F = ma and you get F + (−ma) = 0. The term −ma is an imaginary inertia force, acting opposite to the acceleration. Add it to the free body diagram and the body is in dynamic equilibrium, so all the statics tools of Topic 1 work again.

A lift shows it best. A person of mass m stands on a scale in a lift accelerating upward at a. The floor pushes up with R, gravity pulls down with mg, and the inertia force ma acts downward: R = m(g + a), so they feel heavier. Accelerating downward, R = m(g − a), lighter. In free fall a = g and R = 0: weightless.

**The equations of motion need constant acceleration.**

```math
v = u + at, \qquad s = ut + \tfrac{1}{2}at^2, \qquad v^2 = u^2 + 2as
```

If the acceleration changes (a car whose engine power is fixed, a spring pushing a block), these give wrong answers. Use calculus or the energy balance instead.

**Momentum and kinetic energy answer different questions.** Momentum p = mv says how hard a body is to stop in a given time. Kinetic energy KE = ½mv² says how much work it can do while being stopped. They are linked by KE = p²/2m.

- Equal kinetic energy: p = √(2m × KE), so the heavier body has more momentum.
- Equal momentum: KE = p²/2m, so the lighter body has more kinetic energy. When a gun fires, bullet and gun get equal and opposite momentum, but the light bullet carries almost all the energy.

**Impulse explains why you pull your hands back when catching.** Impulse = force × time = change in momentum. The ball's momentum must go to zero either way. Pull your hands back and the stop takes longer, so the force on your palms is smaller. Airbags, crumple zones and sand pits for long jumpers work the same way.

**Momentum is always conserved in a collision; kinetic energy is not.** With no outside force, the total momentum before equals the total after. Kinetic energy is kept only in a perfectly elastic collision. The coefficient of restitution measures the bounce:

```math
e = \frac{\text{velocity of separation}}{\text{velocity of approach}} = \frac{v_2 - v_1}{u_1 - u_2}
```

e = 1 is perfectly elastic (no energy lost). e = 0 is perfectly plastic: the bodies stick together and the most kinetic energy is lost. Real collisions lie between. A ball dropped from height h onto a floor rebounds to e²h.

**Work needs movement along the force.** Work = F × s × cos θ, where θ is the angle between force and movement. Carry a bag along a level corridor and your upward lifting force does no work on it, because the bag moves sideways (θ = 90°). For the same reason the string of a whirling stone does no work: its pull is always at right angles to the motion.

**The work–energy theorem.** The net work done on a body equals its change in kinetic energy. When only gravity does work, kinetic plus potential energy stays constant: ½mv² + mgh = constant. That is the quickest way to find a speed after a fall or a slide on a smooth slope.

**Power is work per second, or force × speed.** P = W/t = F × v. A car cruising at 25 m/s against 2,000 N of drag needs 2,000 × 25 = 50 kW at the wheels. 1 hp = 746 W (the metric horsepower is 735.5 W).

**A projectile is two independent motions.** Ignore air resistance. Horizontally there is no force, so u cos θ stays constant all the way. Vertically, gravity slows the rise at g per second, stops it at the top and speeds the fall.

```math
T = \frac{2u\sin\theta}{g}, \qquad H = \frac{u^2\sin^2\theta}{2g}, \qquad R = \frac{u^2\sin 2\theta}{g}
```

- At the top the vertical velocity is zero, but the body still moves sideways at u cos θ. Its speed is never zero.
- sin 2θ is largest at 2θ = 90°, so the maximum range is at 45°: Rmax = u²/g. At that angle R = 4H.
- Angles θ and 90° − θ give the same range (sin 2θ is the same), but the steeper shot goes higher and stays up longer. 30° and 60° land in the same place.
- Dividing the formulas gives R/H = 4/tan θ. So R = 2H when tan θ = 2 (θ = 63.4°), and R = H when tan θ = 4 (θ = 76°).

**A horizontal throw falls as fast as a dropped stone.** Fire a bullet horizontally from height h and drop another bullet at the same moment: both hit the ground together, after √(2h/g). The horizontal speed only decides how far away the first one lands.

**Circular motion needs an inward force.** A body going round a circle at steady speed is still accelerating, because its direction keeps changing. The acceleration is v²/r = ω²r toward the centre, so the centripetal force is mv²/r. The outward centrifugal force you feel in a turning bus is the D'Alembert inertia force, seen from inside the turning frame. A road banked at angle θ lets a car turn with no side friction when tan θ = v²/rg.

**Rotation mirrors straight-line motion.** Torque T = Iα matches F = ma; rotational kinetic energy is ½Iω²; and ω = ω₀ + αt matches v = u + at. Here I is the mass moment of inertia, m k² in kg·m². It is not the area moment of inertia of Topic 1 (mm⁴), even though both are called I.

### Worked numbers

**Braking a car.** A 1,000 kg car at 72 km/h stops in 40 m. First convert: 72 km/h = 72 × 1000/3600 = 20 m/s.

```math
a = \frac{v^2 - u^2}{2s} = \frac{0 - 20^2}{2 \times 40} = -5\ \text{m/s}^2, \qquad t = \frac{v - u}{a} = \frac{0 - 20}{-5} = 4\ \text{s}
```

The braking force is 1000 × 5 = 5,000 N. Check with energy: ½ × 1000 × 20² = 200 kJ, and the brakes do 5000 × 40 = 200 kJ of work. The two agree.

**A person in a lift.** A 70 kg person stands on a scale in a lift accelerating at 2 m/s².

- Going up: R = 70 × (9.81 + 2) = 827 N, so the scale reads about 84 kg.
- Going down: R = 70 × (9.81 − 2) = 547 N, about 56 kg.
- Moving at steady speed either way: R = 70 × 9.81 = 687 N, the true weight.

**A projectile.** A ball is thrown at 20 m/s, 30° above the horizontal.

```math
T = \frac{2 \times 20 \times 0.5}{9.81} = 2.04\ \text{s}, \quad H = \frac{20^2 \times 0.5^2}{2 \times 9.81} = 5.1\ \text{m}, \quad R = \frac{20^2 \times \sin 60^\circ}{9.81} = 35.3\ \text{m}
```

At 60° the range is the same 35.3 m, but H = 400 × 0.75 / 19.62 = 15.3 m, three times higher.

**A plastic collision.** A 2 kg trolley at 6 m/s hits a 1 kg trolley at rest and they couple together.

- Momentum: 2 × 6 = 3 × v, so v = 4 m/s.
- Kinetic energy before: ½ × 2 × 36 = 36 J. After: ½ × 3 × 16 = 24 J.
- 12 J, a third of the energy, became heat, sound and dents. Momentum survived; energy did not.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Action and reaction cancel, so nothing can move. | They act on different bodies, so they never cancel each other. |
| The inertia force in D'Alembert's principle is a real force. | It is an imaginary force, −ma, added so the problem can be solved as statics. |
| v² = u² + 2as works for any motion. | The equations of motion need constant acceleration. |
| For equal momentum, the heavier body has more kinetic energy. | The lighter one has more: KE = p²/2m. For equal kinetic energy, the heavier has more momentum. |
| Kinetic energy is conserved in every collision. | Momentum is. Kinetic energy is conserved only when e = 1. |
| In a perfectly plastic collision the bodies bounce apart. | e = 0: they move off together, losing the most energy. |
| Holding or carrying a load level is work. | No movement along the force means no work: W = Fs cos 90° = 0. |
| Maximum range is at 60° or 90°. | At 45°. Angles θ and 90° − θ give equal ranges. |
| A projectile's speed is zero at the top. | Only the vertical part is zero. It still moves sideways at u cos θ. |
| A faster horizontal throw stays up longer. | Time in the air depends only on height: √(2h/g). |
| Centrifugal force pushes a turning car outward. | The real force is the inward centripetal force, mv²/r; centrifugal is the inertia force felt in the turning frame. |
| Mass and area moments of inertia are the same quantity. | Mass MI is m k² in kg·m² (rotation); area MI is in mm⁴ (bending). |

## 3. Stress, strain, Hooke's law and elastic constants

Stress is how hard the material is being pulled or squeezed per square millimetre, and strain is how much it stretches per millimetre of length. Their ratio is the stiffness of the material itself, E, which does not care about the size of the part. The twists are on the stress–strain curve, the limits of Hooke's law, the elastic constants and suddenly applied loads.

### The picture

Hang a full bucket from a wire. A thicker wire shares the same weight among more metal, so each square millimetre carries less: lower stress. A longer wire stretches more in total, but each metre of it stretches by the same amount: the same strain. So stress and strain describe the material's experience, whatever the size of the wire.

Now keep adding water. At first the wire stretches in step with the load and springs back when you empty the bucket, like a spring. Past a certain load it stretches a lot for little extra weight and stays longer when unloaded. Finally it thins at one spot and snaps. Those three stages are the stress–strain curve.

### Twisted points

**Stress is internal resistance per unit area.** Direct (normal) stress σ = P/A acts at right angles to the section: tensile when it pulls, compressive when it pushes. Shear stress τ = P/A acts along the section, as on a bolt that two plates try to slide across. With P in N and A in mm², the answer is in MPa.

**Strain has no unit.** Longitudinal strain ε = δL/L, a ratio of lengths. Lateral strain is the change in width divided by the width. Shear strain γ is the change in a right angle, measured in radians. Volumetric strain is δV/V.

**The mild steel stress–strain curve has named points.** In order of rising strain:

| Point | What happens there |
| --- | --- |
| Limit of proportionality | Up to here, stress is exactly proportional to strain. Hooke's law ends here. |
| Elastic limit | Up to here the bar springs fully back when unloaded. It is just above the proportional limit and often taken as equal. |
| Upper and lower yield points | The steel suddenly stretches with no rise, or even a drop, in load. Design usually uses the lower yield stress. |
| Strain hardening | After yield the metal gets stronger as it is stretched, so the load rises again. |
| Ultimate stress | The highest point of the engineering curve. A neck starts to form here. |
| Fracture (breaking) point | The bar breaks. On the engineering curve this stress is below the ultimate. |

Why does the curve fall after the ultimate point if the metal is not getting weaker? Engineering stress divides the load by the original area. After necking starts, the real area in the neck shrinks fast, so the load the bar can carry falls. The true stress (load ÷ actual area) keeps rising right to fracture.

**Ductile and brittle materials fail differently.** A ductile material such as mild steel stretches a lot before breaking (more than about 5% elongation) and breaks in a cup-and-cone shape. A brittle material such as cast iron or glass breaks with almost no stretching, across a flat face, and shows no yield point.

Some ductile metals, such as aluminium and high-tensile steel, also have no clear yield point. For them the proof stress is used: the stress that leaves a permanent strain of 0.2% (the 0.2% offset method).

**Factor of safety.** Working (allowable) stress = failure stress ÷ factor of safety. Failure stress is the yield stress for ductile materials and the ultimate stress for brittle ones. The factor is always more than 1.

**Hooke's law and E.** Within the proportional limit, σ = Eε. E is the slope of the straight part of the curve. Steel has E ≈ 200 GPa, aluminium about 70 GPa and copper about 110 GPa. Heat treatment changes steel's strength a great deal but its E hardly at all.

**Poisson's ratio: stretch it and it gets thinner.** Pull a rubber band and it narrows. Poisson's ratio μ = −(lateral strain)/(longitudinal strain). It lies between 0 and 0.5:

- μ = 0.5 means the volume never changes: the material is incompressible. Rubber is close, at about 0.49.
- Cork is close to 0, which is why a cork slides into a bottle neck without bulging sideways.
- Steel is about 0.25 to 0.3, concrete about 0.1 to 0.2.

**Four elastic constants, but only two are independent.** E (tension), G (shear, also called the modulus of rigidity) and K (bulk, for all-round pressure) are tied together through μ. For an isotropic material (same in every direction) know any two and you can get the rest.

```math
E = 2G(1 + \mu) = 3K(1 - 2\mu), \qquad E = \frac{9KG}{3K + G}
```

Since μ lies between 0 and 0.5, E/G lies between 2 and 3. An orthotropic material such as wood needs 9 constants and a fully anisotropic one 21.

**Volume change.** A bar stretched along its length gets longer but thinner in two directions, so its volume rises by much less than its length. Volumetric strain is the sum of the three strains:

```math
\varepsilon_v = \varepsilon_x + \varepsilon_y + \varepsilon_z, \qquad \text{bar in tension: } \varepsilon_v = \varepsilon(1 - 2\mu), \qquad \text{equal all-round stress } \sigma: \ \varepsilon_v = \frac{3\sigma(1 - 2\mu)}{E} = \frac{\sigma}{K}
```

At μ = 0.5 the bracket is zero: no volume change, so K is infinite.

**Elongation of bars.** For a uniform bar δ = PL/AE. For bars of different sections in a row (series), add the elongations of each piece. For a bar tapering from diameter d₁ to d₂, δ = 4PL/(πE d₁ d₂).

A bar hanging under its own weight W stretches by WL/2AE, half the stretch of the same weight hung at the end. The top section carries all the weight but the bottom carries none, so on average each section carries half.

**Strain energy is the work stored by stretching.** A gradually applied load does work ½Pδ, stored as strain energy U = (σ²/2E) × volume.

- Resilience is the strain energy stored. Proof resilience is the most a bar can store without permanent set, at the elastic limit.
- Modulus of resilience is the proof resilience per unit volume, σₑ²/2E: the area under the elastic part of the curve.
- Toughness is the energy a material absorbs up to fracture: the area under the whole curve. Modulus of toughness is that per unit volume.

**A suddenly applied load doubles the stress.** Hang a load gently and it stretches the bar to δ, the load doing work ½Pδ. Let the same load drop onto the bar from zero height and it does work Pδ on the way down, all stored in the bar. Setting σ²AL/2E = Pδ gives σ = 2P/A, twice the gradual value. A load falling from height h gives even more:

```math
\sigma_{gradual} = \frac{P}{A}, \qquad \sigma_{sudden} = \frac{2P}{A}, \qquad \sigma_{impact} = \frac{P}{A}\left(1 + \sqrt{1 + \frac{2AEh}{PL}}\right)
```

**Material properties that sound alike.** Elasticity: springing back after unloading. Plasticity: keeping a permanent shape. Ductility: being drawn into wire. Malleability: being hammered or rolled into sheet. Toughness: absorbing energy and shock before breaking. Hardness: resisting scratching and indentation. Brittleness: breaking with little deformation.

### Worked numbers

**A steel bar in tension.** A steel bar 20 mm in diameter and 2 m long carries 50 kN. E = 200 GPa and μ = 0.3.

```math
A = \frac{\pi \times 20^2}{4} = 314.2\ \text{mm}^2, \qquad \sigma = \frac{50\,000}{314.2} = 159.2\ \text{MPa}, \qquad \varepsilon = \frac{159.2}{200\,000} = 7.96 \times 10^{-4}
```

- Elongation: δ = εL = 7.96 × 10⁻⁴ × 2000 = 1.59 mm.
- Lateral strain: 0.3 × 7.96 × 10⁻⁴ = 2.39 × 10⁻⁴, so the diameter shrinks by 20 × 2.39 × 10⁻⁴ = 0.0048 mm.
- Volumetric strain: ε(1 − 2μ) = 7.96 × 10⁻⁴ × 0.4 = 3.18 × 10⁻⁴. The volume is 314.2 × 2000 = 628,300 mm³, so it grows by about 200 mm³.
- Strain energy: U = ½Pδ = ½ × 50,000 × 1.59 = 39,800 N·mm ≈ 40 J.

**From E and G to μ and K.** A material has E = 200 GPa and G = 80 GPa.

```math
\mu = \frac{E}{2G} - 1 = \frac{200}{160} - 1 = 0.25, \qquad K = \frac{E}{3(1 - 2\mu)} = \frac{200}{3 \times 0.5} = 133.3\ \text{GPa}
```

**A sudden load.** A 20 kN load acts on a bar of 500 mm² section. Applied gradually it causes 20,000/500 = 40 MPa. Dropped on suddenly (from zero height) it causes 80 MPa. A designer who forgot this would use half the bar the job needs.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Hooke's law holds up to the yield point. | Only up to the limit of proportionality, a little before yield. |
| The breaking stress is the highest stress on the curve. | On the engineering curve the ultimate stress is highest; the breaking stress is lower because of necking. True stress is highest at fracture. |
| Strain is in mm. | Strain is a ratio with no unit. Shear strain is an angle in radians. |
| Poisson's ratio can be up to 1. | It lies between 0 and 0.5. At 0.5 the material is incompressible. |
| E = 2G(1 − μ). | E = 2G(1 + μ) = 3K(1 − 2μ). |
| An isotropic material has four independent elastic constants. | Only two. The other two follow from the relations. |
| A bar under its own weight stretches by WL/AE. | By WL/2AE, half as much as the same weight hung at the end. |
| A suddenly applied load causes the same stress as a gradual one. | Twice as much: 2P/A. |
| Toughness and hardness mean the same. | Toughness is energy absorbed before breaking; hardness is resistance to scratching and indentation. |
| Every metal has a clear yield point. | Aluminium and high-tensile steel do not; use the 0.2% proof stress. |
| Factor of safety = working stress ÷ ultimate stress. | It is failure stress ÷ working stress, always more than 1. |
| Heat-treated steel has a much higher E. | Heat treatment changes strength, not stiffness: E stays about 200 GPa. |

## 4. Thermal stress and composite bars

Heat alone never stresses a bar; stopping it from expanding does. And when two materials are joined, they are forced to stretch by the same amount, so the stiffer one takes more of the load. Those two sentences answer almost every question here.

### The picture

Old railway lines left small gaps between the rails. On a hot afternoon each rail grows by a few millimetres. With room to grow, it simply gets longer and feels nothing. Butt the rails tight together and they push on each other with huge force, enough to buckle the track sideways.

Now think of reinforced concrete: steel rods cast inside a concrete beam. The two cannot slide past each other, so whatever one stretches, the other stretches too. Steel is about ten times stiffer, so for the same stretch it carries far more stress. It also expands with heat at almost the same rate as concrete, which is why the pairing survives hot summers and cold nights.

### Twisted points

**Free expansion makes no stress.** A bar heated by ΔT with nothing in its way grows by δ = αLΔT, where α is the coefficient of linear expansion. Nothing resists it, so the stress is zero. Typical α values, per °C: steel 12 × 10⁻⁶, concrete about the same, copper 17 × 10⁻⁶, brass 19 × 10⁻⁶ and aluminium 23 × 10⁻⁶.

**Fully prevented expansion: σ = EαΔT.** Put the bar between two rigid walls and heat it. Think of it in two steps: let the bar grow freely by αLΔT, then imagine the walls squeezing it back to its old length. The squeeze needs a strain of αLΔT ÷ L = αΔT, so the stress is EαΔT.

- The length cancels. A 1 m bar and a 10 m bar get the same thermal stress.
- The area cancels too. Only the force P = σA depends on area.
- Heating a restrained bar makes it compressive; cooling it makes it tensile, because the walls then hold it stretched.

**Partly prevented expansion: subtract the gap.** If there is a gap Δ before the bar touches the wall, the first Δ of growth is free. Only the rest is squeezed back:

```math
\sigma = \frac{E(\alpha L \Delta T - \Delta)}{L}
```

If the gap is at least as big as the free expansion, the bar never touches and the stress stays zero.

**A restrained stepped bar.** Two bars of different sections joined end to end between walls carry the same force, since each pushes on the other. The thinner part, with less area, has the higher stress. Find the force from the condition that the total free expansion is squeezed out of the two parts together.

**Load plus temperature.** Total strain = σ/E + αΔT. The two parts simply add.

**Composite bars side by side share a single strain.** When two materials are joined so they must deform together (a steel rod inside a copper tube, both clamped to the same end plates), they have equal strain. Then σ = Eε makes the stresses proportional to E:

```math
\frac{\sigma_1}{\sigma_2} = \frac{E_1}{E_2} = m, \qquad P_1 = P\,\frac{A_1E_1}{A_1E_1 + A_2E_2}, \qquad P_2 = P\,\frac{A_2E_2}{A_1E_1 + A_2E_2}
```

The stiffer material carries the higher stress. The load splits in the ratio of A × E, not of the areas alone. The ratio E₁/E₂ is called the modular ratio m, and a composite section can be treated as one material of equivalent area A₁ + mA₂.

**Bars in series share the force, not the strain.** Bars joined end to end each carry the full load. Their stresses differ with area, and their elongations add up. Do not mix this up with the side-by-side case.

**Heating a composite bar.** A steel rod inside a copper tube, joined at both ends, is heated. Copper (higher α) wants to grow more than steel. Joined, they settle at a common length in between: copper is held back, so it ends up in compression, and steel is dragged along, so it ends up in tension. Two conditions fix the stresses:

- Equilibrium: no outside load, so the pull in the steel equals the push in the copper: σs As = σc Ac.
- Compatibility: the steel's stretch plus the copper's squeeze must make up the difference in free expansion.

```math
\frac{\sigma_s}{E_s} + \frac{\sigma_c}{E_c} = (\alpha_c - \alpha_s)\,\Delta T
```

**A bimetallic strip bends away from the metal that expands more.** Brass and steel strips bonded together and heated: the brass side grows more, so the strip curls with brass on the outside (convex) face and steel on the inside. Thermostats and old electric irons use this bending to open a contact.

### Worked numbers

**A rail on a hot day.** A steel rail 12 m long warms by 40 °C. α = 12 × 10⁻⁶ /°C and E = 200 GPa.

- Free expansion: 12,000 × 12 × 10⁻⁶ × 40 = 5.76 mm, with no stress.
- Fully prevented: σ = 200,000 × 12 × 10⁻⁶ × 40 = 96 MPa, compressive.
- With a 3 mm gap: σ = 200,000 × (5.76 − 3) / 12,000 = 46 MPa, compressive.
- With a 6 mm gap: the rail never closes it, so no stress.

**A composite column under load.** A steel rod (As = 500 mm², Es = 200 GPa) sits inside a copper tube (Ac = 1000 mm², Ec = 100 GPa). Both are 500 mm long and carry 120 kN of compression through rigid end plates.

```math
A_sE_s = 500 \times 200\,000 = 10^8, \qquad A_cE_c = 1000 \times 100\,000 = 10^8
```

The AE values are equal, so each carries 60 kN. Then σs = 60,000/500 = 120 MPa and σc = 60,000/1000 = 60 MPa. Steel has twice the stress because it has twice the E, even though copper has twice the area. The shortening is 120/200,000 × 500 = 0.3 mm, the same for both.

**The same bar heated by 50 °C, no load.** Take αs = 12 × 10⁻⁶ and αc = 18 × 10⁻⁶ per °C.

- Equilibrium: σs × 500 = σc × 1000, so σs = 2σc.
- Compatibility: σs/200,000 + σc/100,000 = (18 − 12) × 10⁻⁶ × 50 = 3 × 10⁻⁴.
- Substituting: 2σc/200,000 + σc/100,000 = 2σc/100,000 = 3 × 10⁻⁴, so σc = 15 MPa (compression) and σs = 30 MPa (tension).

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A heated bar always develops stress. | Only if its expansion is prevented. Free expansion causes no stress. |
| A longer restrained bar gets more thermal stress. | σ = EαΔT does not depend on length or area. Only the force depends on area. |
| Heating a bar between walls puts it in tension. | Heating gives compression; cooling gives tension. |
| Any gap removes thermal stress. | Only a gap at least as big as the free expansion. Otherwise subtract the gap. |
| Joined materials carry equal stress. | Side by side they carry equal strain, so their stresses are in the ratio of their E values. |
| The load splits in the ratio of the areas. | It splits in the ratio of A × E. |
| Bars in series share the load between them. | Each carries the full load; their elongations add. |
| Heating a steel–copper composite puts both in compression. | Copper (higher α) goes into compression and steel into tension, with equal and opposite forces. |
| A bimetallic strip bends toward the metal that expands more. | It bends away from it: the higher-α metal ends up on the outside of the curve. |

## 5. Shear force and bending moment diagrams

Cut a loaded beam anywhere and each piece must still balance: a vertical force and a turning moment pass across the cut to hold it. Those are the shear force and the bending moment, and the diagrams plot them along the beam. Two rules, dM/dx = SF and d(SF)/dx = −w, decide every shape the examiner can ask about.

### The picture

A plank lies across a stream with a friend standing in the middle. Saw an imaginary cut anywhere in the plank. The left piece is pushed up by the bank and down by its share of the load; whatever is left over must be supplied by the right piece through the cut. That leftover vertical force is the shear force (SF) at the cut. The leftover turning effect is the bending moment (BM).

So at any section: SF = the sum of vertical forces on one side of the cut, and BM = the sum of moments of those forces about the cut. Take either side; the answer is the same, which is a handy check.

The plank sags in the middle, curving like a smile: the top fibres are squeezed, the bottom ones stretched. That is a sagging moment, positive by the usual convention. A diving board curves the other way, like a frown, with its top in tension: hogging, negative.

### Twisted points

**Sign conventions.** Shear force is positive when the part to the left of the cut tends to move up relative to the right ("left up, right down"). Bending moment is positive when it sags the beam. Some books flip the SF sign; the shape of the diagram is what exams test.

**Two rules decide every shape.** Take a tiny length dx of beam with load w per metre on it. Balancing forces gives d(SF)/dx = −w. Balancing moments gives dM/dx = SF.

```math
\frac{dV}{dx} = -w, \qquad \frac{dM}{dx} = V
```

Read each rule as "the slope of one diagram is the height of the one above". Everything below follows from that:

| Load on that length of beam | SF diagram | BM diagram |
| --- | --- | --- |
| No load | Constant (flat) | Straight sloping line |
| UDL | Straight sloping line | Parabola (second degree) |
| Uniformly varying load (triangle) | Parabola | Cubic curve (third degree) |
| Point load | Sudden jump equal to the load | A kink: the slope changes, but no jump |
| Couple (applied moment) | No change at all | Sudden jump equal to the couple |

Each step up in load type raises the degree by one: no load, UDL, UVL give BM curves of degree 1, 2, 3.

**The bending moment peaks where the shear force is zero.** Because dM/dx = SF, the BM curve is flat (at its maximum or minimum) exactly where SF = 0 or changes sign. To find the largest BM, find where the SF diagram crosses zero and take moments there. Also, the area of the SF diagram between two sections equals the change in BM between them.

**Point of contraflexure.** Where the BM is zero and changes sign, the beam's curvature flips from smile to frown. That point is the point of contraflexure (or inflection). It never appears in a cantilever or a simply supported beam with downward loads, because their BM never changes sign. It does appear in overhanging, fixed and continuous beams. It is where BM = 0 and changes sign, not where SF = 0.

**Statically determinate beams.** With three equations of statics, a beam is determinate when it has three unknown reactions: a cantilever (one fixed end), a simply supported beam (a pin and a roller), or an overhanging beam (the same supports with the beam running past one). A fixed–fixed beam, a propped cantilever and a continuous beam over three or more supports have more unknowns: they are indeterminate, and need deflection conditions too.

**Cantilevers: everything peaks at the wall.** Take sections from the free end. The SF at a section is the total load beyond it, and the BM is the moment of that load, so both grow toward the fixed end and are largest there. The free end has zero BM. The whole beam hogs.

- A couple M at the free end is a special case: there is no vertical force, so the SF is zero everywhere and the BM is M along the whole length.
- A triangular load (zero at the free end, w at the wall) has total wL/2 acting at L/3 from the wall, so the BM at the wall is wL/2 × L/3 = wL²/6.

**Simply supported beams: the reactions first.** Take moments about one support to find the other reaction. For a single point load W at distance a from the left and b from the right, the left reaction is Wb/L: the nearer support carries more. The largest BM is under the load, Wab/L, which becomes WL/4 at mid-span.

For a UDL over the whole span, each reaction is wL/2. The SF falls in a straight line from +wL/2 to −wL/2, crossing zero at the centre, where the BM peaks at wL²/8.

**Spreading a load halves the moment.** Put the same total load W on a simply supported beam two ways. As one point load at the centre, Mmax = WL/4. Spread as a UDL (w = W/L), Mmax = WL/8, half as much. On a cantilever the same: WL with the load at the tip, WL/2 when it is spread.

**A couple on a simply supported beam.** A couple M applied at some point makes the two reactions an equal and opposite pair, M/L each. So the SF is M/L everywhere (constant), and the BM climbs in a straight line, jumps by M at the couple, then falls back to zero at the far support.

**Overhangs create hogging over the support.** The load on an overhang tries to tip the beam up between the supports, so the BM over the support is hogging while mid-span still sags. Between them the BM passes through zero: a point of contraflexure.

**Standard cases.** Learn this table; most numericals are one row of it.

| Beam and load | Largest SF | Largest BM | Where the BM peaks | BMD shape |
| --- | --- | --- | --- | --- |
| Cantilever, point load W at the free end | W | WL | Fixed end | Straight line |
| Cantilever, UDL w over the length | wL | wL²/2 | Fixed end | Parabola |
| Cantilever, triangular load, zero at the free end, w at the wall | wL/2 | wL²/6 | Fixed end | Cubic |
| Cantilever, couple M at the free end | 0 | M | Everywhere | Rectangle |
| Simply supported, W at the centre | W/2 | WL/4 | Centre | Triangle |
| Simply supported, W at a from one end, b from the other | Wb/L (larger reaction, a < b) | Wab/L | Under the load | Triangle |
| Simply supported, UDL w over the span | wL/2 | wL²/8 | Centre | Parabola |
| Simply supported, triangular load, zero at one end, w at the other | wL/3 | wL²/9√3 ≈ 0.064wL² | L/√3 from the zero end | Cubic |

### Worked numbers

**An off-centre point load.** A simply supported beam of 6 m span carries 30 kN at 2 m from the left support A.

- Moments about B: RA × 6 = 30 × 4, so RA = 20 kN and RB = 10 kN. The nearer support takes more.
- SF: +20 kN from A to the load, then a jump of 30 kN down to −10 kN, staying there to B.
- SF changes sign under the load, so the BM peaks there: 20 × 2 = 40 kN·m. Check: Wab/L = 30 × 2 × 4 / 6 = 40 kN·m.

**An overhanging beam.** Beam AC is 8 m long, on a pin at A and a roller at B, 6 m from A, so BC is a 2 m overhang. A UDL of 10 kN/m covers the whole 8 m.

- Total load 80 kN acts at 4 m from A. Moments about A: RB × 6 = 80 × 4, so RB = 53.3 kN and RA = 26.7 kN.
- Between A and B, at distance x from A: SF = 26.7 − 10x and M = 26.7x − 5x².
- SF = 0 at x = 2.67 m, where the sagging BM peaks: M = 26.7 × 2.67 − 5 × 2.67² = 35.6 kN·m.
- Over B, taking the overhang from the right: M = −10 × 2 × 1 = −20 kN·m, hogging.
- Contraflexure where M = 0 between the supports: 26.7x = 5x², so x = 5.33 m from A, 0.67 m before B.

**A cantilever with two loads.** A 3 m cantilever carries a UDL of 2 kN/m and a point load of 5 kN at its tip.

```math
V_{wall} = 2 \times 3 + 5 = 11\ \text{kN}, \qquad M_{wall} = \frac{2 \times 3^2}{2} + 5 \times 3 = 9 + 15 = 24\ \text{kN·m (hogging)}
```

Each load's effect adds on its own: this is superposition, and it works for every beam in the elastic range.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The BM is largest where the load is largest. | It is largest where the SF is zero or changes sign. |
| A point load makes the BM jump. | A point load makes the SF jump; the BM only changes slope. A couple makes the BM jump. |
| Under a UDL the BM diagram is a straight line. | The SF is a straight line and the BM a parabola. |
| A cantilever's BM is largest at the free end. | It is zero at the free end and largest at the fixed end. |
| A simply supported beam has a point of contraflexure. | Not under downward loads. Overhanging, fixed and continuous beams do. |
| The point of contraflexure is where SF = 0. | It is where the BM is zero and changes sign. SF = 0 marks the BM peak. |
| A spread load and a point load of the same total give the same BM. | Spread over the span, it gives half: WL/8 against WL/4. |
| A fixed–fixed beam is statically determinate. | It has more than three unknown reactions, so it is indeterminate. |
| A couple at a cantilever's tip causes shear force. | SF is zero everywhere and the BM is constant, equal to the couple. |
| Under a triangular load the BM is a parabola. | It is a cubic; the SF is the parabola. |

## 6. Bending and shear stress in beams

A bent beam is stretched on one face and squeezed on the other, with a layer in between that does neither. Bending stress grows in a straight line from that layer, so the outer fibres work hardest. Shear stress does the opposite, peaking at the middle. Exam questions test where each is zero and largest, the section modulus, and the shear stress ratios.

### The picture

Bend a rubber eraser with a grid drawn on its side. The lines on the outer (convex) face spread apart, the lines on the inner face crowd together, and one line in the middle keeps its length. That line marks the neutral axis. The farther a layer sits from it, the more it stretches or squeezes.

Now bend a thick paperback book. The pages slide over one another at the free edge, and the book bends easily. Glue the pages into one block and it becomes far stiffer, because the glue stops the sliding. That glue is carrying shear stress between layers. A solid beam has to do the same, and the sliding is worst in the middle layers.

### Twisted points

**The theory of simple bending rests on assumptions.** The beam is in pure bending (constant BM and no shear force), plane cross-sections stay plane after bending, the material is uniform and elastic with the same E in tension and compression, and the radius of curvature is large compared with the depth. Real beams also carry shear, but for long beams the result is still very close.

**Strain grows in proportion to distance from the neutral axis.** After bending, a layer at distance y from the neutral axis has length (R + y)dθ, against Rdθ for the neutral layer. So its strain is y/R, and its stress is Ey/R. Rearranging with the moment it produces gives the bending equation:

```math
\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R}
```

Stress varies in a straight line: zero at the neutral axis, largest at the outer fibres, tension on one side and compression on the other.

**The neutral axis passes through the centroid.** In pure bending there is no net push or pull on the section, so the tension and compression forces cancel: ∫σ dA = (E/R)∫y dA = 0. A zero first moment of area means y is measured from the centroid. For symmetric sections that is mid-depth; for a T-section it is nearer the flange.

**Strength depends on Z, the section modulus.** The largest stress is at the fibre farthest from the neutral axis, ymax. So σmax = M/Z, where Z = I/ymax. Z decides how much moment a section can resist; the moment of resistance is σallowable × Z.

```math
Z_{rect} = \frac{bd^2}{6}, \qquad Z_{circle} = \frac{\pi d^3}{32}, \qquad Z_{hollow\ circle} = \frac{\pi (D^4 - d^4)}{32D}
```

**Depth beats width.** Z of a rectangle is bd²/6. Double the width and the strength doubles; double the depth and it goes up four times. Stiffness (I = bd³/12) goes up eight times. That is why floor joists stand on edge.

The strongest rectangular beam that can be cut from a round log of diameter D has b = D/√3 and d = √(2/3) D, so d/b = √2. The stiffest one has d/b = √3.

**Put the material far from the neutral axis.** Metal near the neutral axis is barely stressed, so it adds weight but little strength. An I-section moves most of its area into two flanges far from the axis, giving the largest Z for a given weight. For equal area: I-section, then rectangle on edge, then square, then circle.

**Unsymmetric sections have two extreme stresses.** In a T-beam the neutral axis is close to the flange, so the tip of the web is much farther away and carries the larger stress. Cast iron is weak in tension and strong in compression, so a cast iron T-beam is placed with its flange on the tension side, keeping the tension face close to the neutral axis.

**A beam of uniform strength.** If the section changes along the beam so that M/Z is the same everywhere, every section reaches the allowable stress at once and no material is wasted. Leaf springs, tapered cantilevers and deeper-in-the-middle bridge girders follow this idea.

**Shear stress across the section.** The shear force V at a section is not spread evenly. At a layer at distance y from the neutral axis:

```math
\tau = \frac{V\,A\bar{y}}{I\,b}
```

Here Aȳ is the first moment, about the neutral axis, of the area beyond that layer, and b is the width at the layer. At the top and bottom faces there is no area beyond, so τ = 0. At the neutral axis Aȳ is largest, so for most shapes τ peaks there.

| Section | Shape of the τ distribution | τmax / τaverage | Where τmax occurs |
| --- | --- | --- | --- |
| Rectangle | Parabola | 3/2 | Neutral axis |
| Solid circle | Parabola | 4/3 | Neutral axis |
| Triangle | Parabola | 3/2 | Mid-height (τ at the neutral axis is 4/3 of the average) |
| Square on its diagonal (diamond) | Curve | 9/8 | d/8 from the neutral axis |
| I-section | Small in the flanges, a sudden jump at the web, nearly uniform in the web | About V / web area | Neutral axis, in the web |

**In an I-beam the flanges bend and the web shears.** Where the flange meets the web, b drops suddenly from the flange width to the web thickness, so τ jumps up. The web carries about 90 to 95% of the shear force. Bending stress is largest in the flanges, shear stress in the web: each part does the job it is shaped for.

**Bending and shear peak at different places.** Along the beam: bending stress is largest where M is largest (mid-span of a simply supported beam), shear stress where V is largest (near the supports). Across the section: bending stress at the outer fibres, shear stress at the neutral axis.

### Worked numbers

**A timber beam.** A rectangular timber beam 100 mm wide and 200 mm deep spans 4 m, simply supported, with a UDL of 10 kN/m. Timber E = 10 GPa.

```math
M = \frac{wL^2}{8} = \frac{10 \times 4^2}{8} = 20\ \text{kN·m} = 20 \times 10^6\ \text{N·mm}, \qquad Z = \frac{100 \times 200^2}{6} = 666\,667\ \text{mm}^3
```

- Largest bending stress: σ = 20 × 10⁶ / 666,667 = 30 MPa, tension at the bottom and compression at the top.
- At 50 mm from the neutral axis, half-way to the edge, the stress is half: 15 MPa.
- Shear at the supports: V = wL/2 = 20 kN. τavg = 20,000 / (100 × 200) = 1 MPa, so τmax = 1.5 MPa at the neutral axis.
- Radius of curvature at mid-span: I = 100 × 200³/12 = 66.7 × 10⁶ mm⁴, so R = EI/M = 10,000 × 66.7 × 10⁶ / 20 × 10⁶ = 33,300 mm, about 33 m.

**The same beam laid flat.** Now b = 200 and d = 100, so Z = 200 × 100²/6 = 333,333 mm³. The bending stress doubles to 60 MPa, for the same wood.

**A round bar as a beam.** A 100 mm diameter bar carries a bending moment of 5 kN·m.

```math
Z = \frac{\pi \times 100^3}{32} = 98\,175\ \text{mm}^3, \qquad \sigma_{max} = \frac{5 \times 10^6}{98\,175} = 50.9\ \text{MPa}
```

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Bending stress is largest at the neutral axis. | It is zero there and largest at the outer fibres. |
| Shear stress is largest at the outer fibres. | It is zero at the top and bottom faces and largest at the neutral axis for rectangles and circles. |
| Bending stress varies like a parabola. | It varies in a straight line. Shear stress in a rectangle is the parabola. |
| The neutral axis is always at mid-depth. | It passes through the centroid, which is at mid-depth only for symmetric sections. |
| A beam's strength depends on I alone. | It depends on Z = I/ymax. |
| τmax is 4/3 of τavg in a rectangular beam. | 3/2 for a rectangle; 4/3 for a circle. |
| Doubling the depth doubles the strength. | Strength goes up four times (Z ∝ bd²) and stiffness eight times (I ∝ bd³). |
| An I-beam's flanges carry the shear force. | The web carries 90 to 95% of it. The flanges carry the bending. |
| A cast iron T-beam has its flange in compression. | The flange goes on the tension side, because cast iron is weak in tension. |
| The bending equation needs no assumptions. | It assumes pure bending, plane sections staying plane, and one E in tension and compression. |

## 7. Deflection of beams

A beam that is strong enough can still sag too much, cracking a ceiling or making a floor bounce. Deflection depends on the load, the cube or fourth power of the span, and the flexural rigidity EI. Almost every question is one row of the standard-cases table, a ratio between two rows, or a question about where the deflection and slope are largest.

### The picture

Load a bookshelf with books. A short shelf barely sags; a long one bows visibly. Make the shelf twice as long and spread twice as many books along it, and it sags 16 times as much. Deflection grows very fast with span.

Now swap the wooden shelf for a steel one of the same size. Steel is about twenty times stiffer, so it sags about twenty times less. Turn the wooden shelf on its edge and it sags far less again, because depth counts cubed in I. Stiffness against bending is E (the material) times I (the shape): EI, the flexural rigidity.

### Twisted points

**Curvature comes from the bending moment.** From Topic 6, 1/R = M/EI. For small slopes the curvature of the bent shape y(x) is d²y/dx², so:

```math
EI\frac{d^2y}{dx^2} = M
```

Integrate once for the slope dy/dx, twice for the deflection y. The two constants come from the supports: at a fixed end y = 0 and dy/dx = 0; at a simple support y = 0.

**One chain links all five quantities.** Each is the derivative of the one before:

| Quantity | Expression |
| --- | --- |
| Deflection | y |
| Slope | dy/dx |
| Bending moment | M = EI d²y/dx² |
| Shear force | V = EI d³y/dx³ |
| Load intensity | w = −EI d⁴y/dx⁴ |

**The methods, and what each is for.**

- Double integration: write M(x), integrate twice. Best for one load over the whole beam.
- Macaulay's method: one M equation for the whole beam, with terms like W⟨x − a⟩ that count only when x > a. A bracket that comes out negative is taken as zero, not as a negative number.
- Moment-area method (Mohr's theorems): the change in slope between two points equals the area of the M/EI diagram between them. The deflection of one point from the tangent at the other equals the moment of that area about the first point.
- Conjugate beam method: load an imaginary beam with M/EI; its shear force gives the real slope and its bending moment the real deflection.
- Strain energy (Castigliano's theorem): the deflection under a load is ∂U/∂P.
- Superposition: deflections from separate loads simply add, while the beam stays elastic.

**Where the deflection and slope are largest.** The deflection is largest where the slope is zero.

- Cantilever: zero deflection and zero slope at the fixed end; both are largest at the free end.
- Simply supported beam with a symmetric load: deflection is largest at the centre, where the slope is zero. The slope is largest at the supports.
- Simply supported beam with an off-centre point load: the largest deflection is not under the load. It is between the load and the centre, and never more than about 0.08L from the centre.

**Standard cases.** Learn the numbers 3, 8, 48 and 5/384.

| Beam and load | Largest deflection | Largest slope |
| --- | --- | --- |
| Cantilever, W at the free end | WL³/3EI | WL²/2EI |
| Cantilever, UDL w | wL⁴/8EI | wL³/6EI |
| Cantilever, couple M at the free end | ML²/2EI | ML/EI |
| Simply supported, W at the centre | WL³/48EI | WL²/16EI (at the supports) |
| Simply supported, UDL w | 5wL⁴/384EI | wL³/24EI (at the supports) |
| Simply supported, W at a and b from the ends | Wa²b²/3EIL under the load (the largest is slightly toward the centre) | — |
| Fixed at both ends, W at the centre | WL³/192EI | — |
| Fixed at both ends, UDL w | wL⁴/384EI | — |

**The ratios examiners like.**

- The same total load W, spread as a UDL instead of one central point load, on a simply supported beam: 5/384 against 8/384, a ratio of 5 : 8.
- On a cantilever, spread against at the tip: 1/8 against 1/3, a ratio of 3 : 8.
- Fixing both ends instead of simply supporting cuts the deflection to 1/4 (central point load) or 1/5 (UDL).
- Doubling the span multiplies the deflection by 8 for point loads (L³) and by 16 for a UDL with the same w (L⁴).
- Doubling the depth of a rectangle divides the deflection by 8, since I ∝ d³.

**Stiffness is E, not strength.** All steels, mild or high-tensile, have E ≈ 200 GPa, so the same beam deflects the same under the same load whatever its grade. A stronger steel can carry more load before yielding, but it does not sag less. Aluminium (E ≈ 70 GPa) sags about three times as much as steel of the same shape.

**Beam stiffness.** The load per unit deflection of the whole beam: k = 3EI/L³ for a cantilever with a tip load and 48EI/L³ for a simply supported beam with a central load. These are what vibration questions in Theory of Machines use.

**A propped cantilever.** A cantilever with a prop at its free end and a UDL is indeterminate. Set the tip deflection from the UDL (wL⁴/8EI) equal to the upward deflection the prop force P causes (PL³/3EI): P = 3wL/8.

### Worked numbers

**A steel cantilever.** Span 2 m, tip load 5 kN, E = 200 GPa, I = 8 × 10⁶ mm⁴. Work in N and mm.

```math
\delta = \frac{WL^3}{3EI} = \frac{5000 \times 2000^3}{3 \times 200\,000 \times 8 \times 10^6} = \frac{4 \times 10^{13}}{4.8 \times 10^{12}} = 8.33\ \text{mm}
```

```math
\theta = \frac{WL^2}{2EI} = \frac{5000 \times 2000^2}{2 \times 200\,000 \times 8 \times 10^6} = 0.00625\ \text{rad} \approx 0.36^\circ
```

A quick check: δ = θ × 2L/3 for this case, and 0.00625 × 1333 = 8.33 mm.

**A simply supported steel beam.** Span 6 m, UDL 10 kN/m (which is 10 N/mm), E = 200 GPa, I = 1 × 10⁸ mm⁴.

```math
\delta = \frac{5wL^4}{384EI} = \frac{5 \times 10 \times 6000^4}{384 \times 200\,000 \times 10^8} = \frac{6.48 \times 10^{16}}{7.68 \times 10^{15}} = 8.44\ \text{mm}
```

- With both ends fixed instead: 8.44 / 5 = 1.69 mm.
- Over an 8 m span with the same w: 8.44 × (8/6)⁴ = 26.7 mm, more than three times as much for a span only a third longer.
- In aluminium of the same section: about 8.44 × 200/70 = 24 mm.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| An off-centre load causes the largest deflection right under it. | The largest deflection lies between the load and the centre, close to the centre. |
| High-strength steel deflects less than mild steel. | Both have E ≈ 200 GPa, so they deflect the same. Strength is not stiffness. |
| A simply supported beam has its largest slope at the centre. | The slope is zero at the centre and largest at the supports. |
| Doubling the span doubles the deflection. | It goes up 8 times for point loads and 16 times for a UDL. |
| A cantilever deflects most at the fixed end. | Deflection and slope are zero there and largest at the free end. |
| Fixing both ends halves the deflection. | It cuts it to 1/4 for a central load and 1/5 for a UDL. |
| A spread load deflects a beam as much as the same load at one point. | Less: 5/8 as much for a simply supported beam, 3/8 for a cantilever. |
| In Macaulay's method a negative bracket is kept as negative. | It is taken as zero: that term does not act yet. |
| By the moment-area method, deflection equals the area of the M/EI diagram. | The area gives the change in slope; its moment gives the deflection. |
| The largest deflection is where the bending moment is largest. | It is where the slope is zero. |

## 8. Torsion of shafts

A twisted shaft is in pure shear, with the stress growing from zero at the centre to its largest at the surface. That one fact explains the torsion equation, why hollow shafts are lighter for the same job, and why chalk snaps along a spiral. Questions test the diameter effects, the power formula, hollow against solid, and combined bending and torsion.

### The picture

Wring out a wet towel. Your hands turn in opposite directions, and the towel's outer threads are dragged far round while the threads at the core barely move. The outer layer does most of the work.

A car's drive shaft works the same way. The engine twists one end, the wheels resist at the other, and every slice of the shaft is twisted a little relative to the next. The metal near the axis is lightly stressed, which is why many drive shafts are hollow tubes.

### Twisted points

**The assumptions behind the torsion equation.** Circular cross-sections stay plane and circular, radii stay straight, the material is uniform and elastic, and the twist is spread evenly along the length. These hold only for circular shafts, solid or hollow. A square or rectangular bar warps out of plane when twisted, so the formula does not apply to it.

**The torsion equation.** A line drawn along the surface of the shaft becomes a gentle helix when twisted. At radius r the shear strain is rθ/L, so the shear stress is G rθ/L. Summing the torque from every ring gives:

```math
\frac{T}{J} = \frac{\tau}{r} = \frac{G\theta}{L}
```

τ is proportional to r: zero at the centre, largest at the outer surface. θ is in radians.

**J is the polar moment of inertia.** For a solid shaft J = πd⁴/32, twice the I of the same circle (perpendicular axis theorem, Topic 1). For a hollow shaft J = π(D⁴ − d⁴)/32. Dividing by the outer radius gives the polar section modulus Zp = J/R, which sets the strength: τmax = T/Zp.

```math
T = \frac{\pi}{16}\,\tau\,d^3 \ \ \text{(solid)}, \qquad T = \frac{\pi}{16}\,\tau\,\frac{D^4 - d^4}{D} \ \ \text{(hollow)}
```

**Diameter is powerful.** Strength goes with d³ and stiffness with d⁴.

- Double the diameter and the same torque causes one-eighth of the stress, or the shaft can carry eight times the torque.
- Double the diameter and the angle of twist falls to one-sixteenth.

**Torsional rigidity and stiffness.** GJ is the torsional rigidity, the torque needed per radian of twist per unit length. The torsional stiffness of a whole shaft is T/θ = GJ/L: a longer shaft twists more under the same torque.

**Hollow shafts give more for less.** The metal near the axis carries little stress (τ ∝ r) and adds little to J (r is counted to the fourth power). Remove it and you lose weight fast but strength slowly. A hollow shaft with its bore half the outside diameter (d = D/2) keeps 15/16 of the solid shaft's strength (it loses only 1/16, about 6%) and loses 25% of its weight.

Compared at equal weight, the hollow shaft is both stronger and stiffer than the solid one, because the same metal sits farther out. That is why propeller shafts, bicycle frames and machine spindles are tubes.

**Power from torque and speed.** Power = torque × angular speed. With N in rpm and T in N·m, power in watts is:

```math
P = \frac{2\pi N T}{60}
```

For the same power, a faster shaft needs less torque, so it can be thinner. That is why a gearbox output shaft (slow, high torque) is much thicker than the input shaft (fast, low torque). If the torque varies through each turn, design on the maximum torque, not the mean.

**Shafts in series and in parallel.** Two shafts joined end to end (a stepped shaft) carry the same torque, and their twists add, like springs in series. Two shafts that must twist by the same angle (a solid shaft inside a tube, both fixed to the same end plates, or a shaft fixed at both ends with the torque applied in between) share the torque in the ratio of their stiffness GJ/L, like springs in parallel.

**Combined bending and torsion.** A shaft carrying a pulley is bent by the belt pull and twisted by the torque at once. Equivalent moments turn this into a single torsion or bending problem:

```math
T_e = \sqrt{M^2 + T^2}, \qquad M_e = \tfrac{1}{2}\left[M + \sqrt{M^2 + T^2}\right]
```

The equivalent twisting moment Te gives the largest shear stress, τmax = 16Te/πd³, used for ductile materials (maximum shear stress theory). The equivalent bending moment Me gives the largest normal stress, σmax = 32Me/πd³, used for brittle materials (maximum principal stress theory). Topic 10 explains both theories.

**Twisting chalk shows the stress state.** Every point on the surface of a twisted shaft is in pure shear. Turn that element by 45° and the same state becomes a tension of τ in one direction and a compression of τ at right angles (Topic 10).

- A brittle material such as chalk or cast iron is weakest in tension, so it breaks along a 45° helix, at right angles to the tension.
- A ductile material such as mild steel is weakest in shear, so it breaks straight across, on a plane at right angles to the axis, where the shear stress acts.

**Strain energy in torsion.** U = T²L/2GJ. For a solid shaft with surface stress τ, this is (τ²/4G) × volume. A hollow shaft stores more per unit volume, (τ²/4G) × (D² + d²)/D² × volume, because more of its metal works near the full stress.

### Worked numbers

**Sizing a shaft.** A shaft transmits 20 kW at 300 rpm. The allowable shear stress is 60 MPa and G = 80 GPa.

```math
T = \frac{60P}{2\pi N} = \frac{60 \times 20\,000}{2\pi \times 300} = 636.6\ \text{N·m} = 636\,600\ \text{N·mm}
```

```math
d^3 = \frac{16T}{\pi\tau} = \frac{16 \times 636\,600}{\pi \times 60} = 54\,040\ \text{mm}^3, \qquad d = 37.8\ \text{mm} \rightarrow \text{use } 40\ \text{mm}
```

Now the twist over 1.5 m for the 40 mm shaft: J = π × 40⁴/32 = 251,300 mm⁴.

```math
\theta = \frac{TL}{GJ} = \frac{636\,600 \times 1500}{80\,000 \times 251\,300} = 0.0475\ \text{rad} = 2.7^\circ
```

**Hollow against solid, same weight.** A solid shaft of 40 mm diameter and a hollow one of 50 mm outside and 30 mm inside diameter have the same area, 1,257 mm², so the same weight per metre.

- Solid: J = 251,300 mm⁴ and Zp = π × 40³/16 = 12,570 mm³.
- Hollow: J = π × (50⁴ − 30⁴)/32 = 534,100 mm⁴ and Zp = 534,100/25 = 21,360 mm³.
- For the same metal, the hollow shaft is 1.7 times as strong and 2.1 times as stiff.

**Bending plus torsion.** A shaft carries M = 3 kN·m and T = 4 kN·m. Then Te = √(3² + 4²) = 5 kN·m and Me = ½(3 + 5) = 4 kN·m.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Shear stress in a shaft is uniform, or largest at the centre. | It is zero at the centre and grows in a straight line to its largest at the surface. |
| Doubling the diameter doubles the strength. | Strength goes up 8 times (d³) and stiffness 16 times (d⁴). |
| A hollow shaft is weaker than a solid one. | For the same weight it is stronger and stiffer. For the same outside diameter it loses only a little strength. |
| J = πd⁴/64. | That is I. J = πd⁴/32 = 2I. |
| TL/GJ gives the twist in degrees. | It gives radians. Multiply by 180/π for degrees. |
| Power = T × N. | P = 2πNT/60 with N in rpm and T in N·m, giving watts. |
| Te = M + T. | Te = √(M² + T²) and Me = ½\[M + √(M² + T²)\]. |
| Shafts in series share the torque. | Each carries the full torque and the twists add. Shafts that twist together share the torque. |
| A cast iron shaft breaks straight across in torsion. | Brittle shafts break along a 45° helix, in tension. Ductile shafts break straight across, in shear. |
| The torsion formula works for any cross-section. | Only for circular sections, solid or hollow. Others warp. |

## 9. Columns: Euler's formula and effective length

A long column fails not because its material gives way but because it suddenly bows sideways: buckling. The load that does it depends on stiffness (E and I) and length, not on strength. Questions test effective lengths and load ratios, the slenderness ratio, when Euler's formula is valid, Rankine's formula and the middle-third rule.

### The picture

Stand a plastic ruler on end on the table and press down on its top. A short stub of ruler just squashes; it would take a huge force to crush it. A full-length ruler suddenly bows out sideways at a gentle push, long before the plastic is anywhere near crushing. Let go and it springs straight again: nothing broke, it just lost its stability.

Hold the bottom firmly in a clamp and it takes more push to bow it; let the top wobble free and it bows at less. The end grips change how long the column "feels". That is effective length.

### Twisted points

**Short columns crush, long columns buckle.** A short column fails when the stress P/A reaches the crushing (or yield) stress. A long column buckles sideways at a much lower stress. Columns in between fail by a mix of the two. Which kind a column is depends on its slenderness ratio, not on its length alone.

**Buckling is a loss of stability, not of strength.** Below the critical load, a column nudged sideways springs straight again. At the critical load, a slightly bent shape is just as balanced as the straight one, so the smallest nudge or imperfection makes it bow, and the bow grows. The material may still be well below its yield stress.

**Where Euler's formula comes from.** Bend a pin-ended column slightly by y at height x. The load P, acting at that offset, causes a bending moment −Py, so EI y″ = −Py. The solution is a sine wave, y = A sin(x√(P/EI)). For the column to be bent yet still pass through both pins (y = 0 at x = L), the sine must complete half a wave over L: L√(P/EI) = π.

```math
P_E = \frac{\pi^2 EI}{L_e^2}, \qquad \sigma_{cr} = \frac{P_E}{A} = \frac{\pi^2 E}{\lambda^2}
```

The yield stress does not appear. A long column of high-tensile steel buckles at the same load as one of mild steel, because both have E ≈ 200 GPa.

**Effective length is the length of one half-wave.** In the buckled shape, the effective length Le is the distance between two points of zero bending moment, where the curve changes direction. Every end condition is compared with the pin-ended column, which buckles in exactly one half-wave over its length.

| End conditions | Effective length Le | Buckling load compared with pin–pin |
| --- | --- | --- |
| One end fixed, other free (flagpole) | 2L | 1/4 |
| Both ends pinned (hinged) | L | 1 |
| One end fixed, other pinned | L/√2 ≈ 0.7L | 2 |
| Both ends fixed | L/2 | 4 |

The flagpole is half of a pinned column: its bent shape is a quarter-wave, so it behaves like a pin-ended column twice as long. Fixing both ends makes the middle half bend like a pinned column, with the outer quarters curving back the other way.

**The load goes with 1/Le².** Halve the length and the buckling load goes up four times; double it and the load drops to a quarter. Double the diameter of a round column and I, so the load, goes up sixteen times (d⁴).

**A column buckles about its weakest axis.** Use the least I in Euler's formula. A flat strip 10 × 50 mm bends easily about its thin direction, whichever way the load tries to bend it. Columns are made strong in every direction by using sections with equal I both ways and material far from the centre: hollow tubes and square boxes are the best.

**Slenderness ratio.** λ = Le / k\_min, where k = √(I/A) is the least radius of gyration. It combines length, end fixing and section shape into one number. A higher λ means a weaker column; the strongest columns have the smallest slenderness ratio.

**Euler's formula is valid only for long columns.** It assumes the column buckles while still elastic. For a short column, π²E/λ² comes out larger than the crushing stress, which is impossible: the column would crush first. So Euler applies only when σcr ≤ σc:

```math
\lambda \ge \pi\sqrt{\frac{E}{\sigma_c}}
```

For mild steel this limit is about 80 to 90, depending on the crushing stress used. Below it, use Rankine's formula.

**Euler's assumptions.** The column is straight and uniform, the load is exactly axial, the material is elastic and uniform, the column is long compared with its section, and self-weight is ignored. Real columns are slightly crooked and loaded slightly off-centre, so they fail a little below the Euler load. That is why designers use a factor of safety on it.

**Rankine's formula works for every length.** It is an empirical blend of crushing and buckling:

```math
\frac{1}{P} = \frac{1}{P_c} + \frac{1}{P_E}, \qquad P = \frac{\sigma_c A}{1 + a\lambda^2}, \qquad a = \frac{\sigma_c}{\pi^2 E}
```

For a short column PE is huge, so P tends to the crushing load Pc. For a long column PE is small, so P tends to Euler's load. The Rankine constant a is about 1/7500 for mild steel, 1/9000 for wrought iron and 1/1600 for cast iron.

**An off-centre load adds bending.** A load P at eccentricity e from the centroid adds a moment Pe, so the stress varies across the section:

```math
\sigma = \frac{P}{A} \pm \frac{Pe}{Z}, \qquad \text{rectangle: } \sigma = \frac{P}{A}\left(1 \pm \frac{6e}{b}\right)
```

One face gets more compression and the other less. If e is large enough, the far face goes into tension, which masonry and concrete cannot take.

**The middle-third rule.** A rectangular section has no tension anywhere while e ≤ b/6 along each axis, so the load must fall within the middle third of each side. The safe zone (the core or kern) is a rhombus with diagonals b/3 and d/3. For a solid circle the limit is e ≤ d/8, a central circle of diameter d/4. For a hollow circle it is (D² + d²)/8D.

### Worked numbers

**A long steel column.** A solid round mild steel column, 50 mm in diameter and 2.5 m long, is pinned at both ends. E = 200 GPa and the crushing stress is 320 MPa.

```math
I = \frac{\pi \times 50^4}{64} = 306\,800\ \text{mm}^4, \quad A = 1963\ \text{mm}^2, \quad k = \frac{d}{4} = 12.5\ \text{mm}, \quad \lambda = \frac{2500}{12.5} = 200
```

The Euler limit is π√(200,000/320) = 78.5. λ = 200 is well above it, so Euler applies.

```math
P_E = \frac{\pi^2 \times 200\,000 \times 306\,800}{2500^2} = 96\,900\ \text{N} \approx 96.9\ \text{kN}
```

The crushing load would be 320 × 1963 = 628 kN. The column buckles at less than a sixth of that.

**The same column with other ends.**

- Fixed at the base, free at the top (Le = 5 m): 96.9 / 4 = 24.2 kN.
- Fixed at both ends (Le = 1.25 m): 96.9 × 4 = 388 kN. Now λ = 100, still above 78.5, so Euler still holds.

**Rankine against Euler.** For the pinned 2.5 m column, with a = 1/7500:

```math
P = \frac{628\,300}{1 + 200^2/7500} = \frac{628\,300}{6.33} = 99.2\ \text{kN}
```

That is close to Euler's 96.9 kN, as expected for a long column. Now shorten the column to 0.5 m (λ = 40). Rankine gives 628,300 / (1 + 1600/7500) = 518 kN. Euler would give 2,420 kN, nearly four times the crushing load: proof that Euler must not be used for short columns.

**An eccentric load on a short column.** A column 200 × 300 mm carries 600 kN at 40 mm from the centre, along the 300 mm side.

```math
\sigma = \frac{600\,000}{60\,000}\left(1 \pm \frac{6 \times 40}{300}\right) = 10 \times (1 \pm 0.8) = 18\ \text{MPa or}\ 2\ \text{MPa}
```

Both stresses are compressive, so there is no tension: e = 40 mm is inside the limit of 300/6 = 50 mm. At e = 60 mm the far face would go into tension.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A stronger steel raises the Euler buckling load. | Euler's load depends only on E, I and Le. All steels have about the same E. |
| A column buckles about its stronger axis. | About its weakest axis: use the least I and the least k. |
| A flagpole (fixed–free) has Le = L/2. | Le = 2L. Fixed at both ends gives L/2. |
| Fixing both ends doubles the buckling load. | It multiplies it by 4. Fixed–pinned doubles it. |
| Euler's formula works for any column. | Only for long columns, with λ at least π√(E/σc). |
| The slenderness ratio is length ÷ diameter. | It is effective length ÷ least radius of gyration. |
| A higher slenderness ratio means a stronger column. | It means a weaker one. |
| Rankine's formula is only for long columns. | It is an empirical formula for every length. |
| Doubling the length halves the buckling load. | It quarters it. |
| The middle-third rule applies to circles too. | For a solid circle the limit is e ≤ d/8. The middle third is for rectangles. |

## 10. Principal stresses and Mohr's circle

The stress at a point depends on which way you cut. Turn the cutting plane and some of the pull becomes sliding, or the other way round. At two special angles the sliding vanishes, leaving the largest and smallest pulls: the principal stresses. Mohr's circle draws every angle at once, and the theories of failure use the principal stresses to predict when a part will break.

### The picture

Pull a rope straight in a tug of war and imagine cutting it. A cut straight across feels a pure pull. Now imagine a slanting cut, like the end of a cut carrot. The pull across that slanted face is partly a pull and partly a slide, trying to make one piece slip along the other.

At 45° the sliding is at its largest, half the pull. That is why a mild steel bar in a tensile test shows faint lines at 45° as it yields (Lüders bands), and why its fracture ends in a cone: ductile metal fails by sliding, and the sliding is worst at 45°.

### Twisted points

**One pull, many planes.** A bar under a simple pull σ has, on a plane whose normal makes angle θ with the pull:

```math
\sigma_n = \sigma\cos^2\theta, \qquad \tau = \frac{\sigma}{2}\sin 2\theta
```

At θ = 0 there is the full pull and no shear. At θ = 45° there is σ/2 of normal stress and the largest shear, σ/2. At θ = 90° (a cut along the bar) there is nothing.

**Two pulls.** With principal stresses σ1 and σ2 on perpendicular faces, the stresses on a plane at θ to the σ1 direction are:

```math
\sigma_n = \frac{\sigma_1 + \sigma_2}{2} + \frac{\sigma_1 - \sigma_2}{2}\cos 2\theta, \qquad \tau = \frac{\sigma_1 - \sigma_2}{2}\sin 2\theta
```

If σ1 = σ2 (equal pulls of the same sign, like the skin of a balloon), the shear is zero on every plane and the normal stress is the same in every direction.

**The general case: σx, σy and τxy.** An element with shear on its faces can always be turned to a position where the shear disappears. Those faces are the principal planes, found from tan 2θp = 2τxy / (σx − σy). That equation gives two answers 90° apart: one plane carries σ1, the other σ2.

```math
\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}
```

**Facts about the planes.**

- Principal planes carry no shear, and they are at 90° to each other.
- The planes of maximum shear are at 45° to the principal planes. They carry τmax = (σ1 − σ2)/2.
- The planes of maximum shear are not free of normal stress: each carries the average, (σ1 + σ2)/2.
- The sum of the normal stresses on any two perpendicular planes never changes: σx + σy = σ1 + σ2. Use it to check answers or find a missing stress.

**How to draw Mohr's circle.** Take normal stress σ along the horizontal axis (tension to the right) and shear τ vertically.

1. Plot point X at (σx, τxy) for the x face and point Y at (σy, −τxy) for the y face.
2. Join X and Y. The line crosses the σ axis at the centre C, at (σx + σy)/2.
3. Draw the circle through X and Y about C. Its radius is R = √\[((σx − σy)/2)² + τxy²\].
4. The circle cuts the σ axis at σ1 = C + R and σ2 = C − R. Its highest and lowest points give ±τmax = ±R.

Each point on the circle is one plane through the element. Turning the element by θ moves you round the circle by 2θ. So planes 90° apart on the element are opposite ends of a diameter, and the 45° from a principal plane to the maximum shear plane is 90° on the circle.

**The special circles.**

| Stress state | Mohr's circle | Result |
| --- | --- | --- |
| Simple tension σ | Passes through the origin and through σ | τmax = σ/2, on 45° planes |
| Pure shear τ | Centred at the origin, radius τ | σ1 = +τ and σ2 = −τ, on 45° planes |
| Equal and opposite stresses, +σ and −σ | Centred at the origin, radius σ | Exactly the same as pure shear σ, turned by 45° |
| Equal like stresses, σ and σ, no shear | A single point | No shear on any plane in that plane |

The second and third rows are the same circle. That is why a twisted shaft (pure shear) feels tension at 45°, and why a brittle shaft breaks along a 45° spiral (Topic 8).

**The third stress that hides in plane stress.** A thin plate has a third principal stress, normal to its face, equal to zero. When σ1 and σ2 have opposite signs, the in-plane τmax = (σ1 − σ2)/2 is the largest shear. When they have the same sign, a bigger circle runs from σ1 to zero, so the true largest shear is σ1/2 (taking σ1 as the bigger). A balloon skin with equal stresses σ has no in-plane shear at all, yet its absolute maximum shear is σ/2.

**Why there are theories of failure.** A tensile test tells you one number: the stress at which a bar fails under a single pull. A real part feels σ1 and σ2 together. Each theory picks one quantity it believes causes failure and says failure happens when that quantity reaches the value it had in the tensile test.

| Theory | What it says causes failure | Condition (plane stress) | Best for |
| --- | --- | --- | --- |
| Maximum principal stress (Rankine) | The largest normal stress | σ1 = σut | Brittle materials: cast iron, concrete |
| Maximum shear stress (Tresca, Guest) | The largest shear stress | τmax = σy/2 | Ductile materials; safe and simple |
| Maximum principal strain (St Venant) | The largest strain | σ1 − μσ2 = σy | Rarely used now |
| Total strain energy (Haigh) | All stored strain energy | σ1² + σ2² − 2μσ1σ2 = σy² | Rarely used now |
| Distortion energy (von Mises, Hencky) | The energy that changes shape, not volume | σ1² − σ1σ2 + σ2² = σy² | Ductile materials; closest to tests |

**How the theories compare.**

- Drawn on a graph of σ1 against σ2, the safe zones are a square (Rankine), a hexagon (Tresca) and an ellipse (von Mises). The Tresca hexagon fits just inside the von Mises ellipse, so Tresca is the more conservative of the two.
- In pure shear they disagree most. Tresca says a ductile metal yields at τ = 0.5σy; von Mises says at τ = σy/√3 = 0.577σy, which matches tests better.
- Under equal all-round pressure (hydrostatic stress), the shape does not change, so the distortion energy theory predicts no yielding, as tests confirm.
- Brittle materials do not yield; they crack where the tension is greatest. So the largest principal stress is the right quantity for them.

### Worked numbers

**Principal stresses of an element.** σx = 80 MPa (tension), σy = 20 MPa (tension), τxy = 40 MPa.

```math
C = \frac{80 + 20}{2} = 50\ \text{MPa}, \qquad R = \sqrt{30^2 + 40^2} = 50\ \text{MPa}
```

- σ1 = 50 + 50 = 100 MPa and σ2 = 50 − 50 = 0. Check: 100 + 0 = 80 + 20.
- τmax = R = 50 MPa, on planes that also carry 50 MPa of normal stress.
- tan 2θp = 2 × 40 / (80 − 20) = 1.333, so 2θp = 53.1° and θp = 26.6° from the x face.

**A slanted plane in a bar.** A bar carries a pull of 100 MPa. On a plane whose normal is 30° from the bar's axis:

```math
\sigma_n = 100\cos^2 30^\circ = 75\ \text{MPa}, \qquad \tau = \frac{100}{2}\sin 60^\circ = 43.3\ \text{MPa}
```

**Three theories on one shaft.** A ductile steel shaft (σy = 250 MPa) has bending stress σ = 80 MPa and torsional shear τ = 60 MPa at its surface.

```math
\sigma_{1,2} = 40 \pm \sqrt{40^2 + 60^2} = 40 \pm 72.1 = 112.1\ \text{MPa and}\ -32.1\ \text{MPa}
```

- Tresca: σ1 − σ2 = 144.2 MPa, so the factor of safety is 250/144.2 = 1.73.
- von Mises: √(σ² + 3τ²) = √(6400 + 10,800) = 131.1 MPa, so the factor is 250/131.1 = 1.91.
- Rankine: σ1 = 112.1 MPa, giving 2.23. It overrates a ductile shaft because it ignores shear, which is what makes steel yield.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Principal planes carry the largest shear. | They carry no shear at all. |
| Planes of maximum shear are at 90° to the principal planes. | They are at 45°. The two principal planes are at 90° to each other. |
| Planes of maximum shear carry no normal stress. | They carry the average normal stress, (σ1 + σ2)/2. |
| An angle on the element is the same angle on Mohr's circle. | It is doubled on the circle. |
| The radius of Mohr's circle is σ1 − σ2. | It is (σ1 − σ2)/2, which equals τmax. |
| Equal tensions σ and σ cause in-plane shear of σ/2. | In-plane shear is zero: the circle is a point. The absolute maximum shear, using the zero third stress, is σ/2. |
| With both principal stresses tensile, τmax = (σ1 − σ2)/2. | The true maximum is σ1/2, from the larger stress and the zero stress normal to the plate. |
| The maximum shear stress theory suits brittle materials. | Rankine's maximum principal stress theory suits brittle materials; Tresca and von Mises suit ductile ones. |
| von Mises is more conservative than Tresca. | Tresca is more conservative: its hexagon lies inside the von Mises ellipse. |
| A material in pure shear feels no tension. | Pure shear τ is the same as a tension τ and a compression τ at 45°. |

## 11. Thin cylinders and springs

A pressurised cylinder pulls twice as hard around its circumference as along its length, so it splits lengthwise. A close-coiled spring is a twisted shaft wound into a helix, so its formulas are torsion formulas. Questions test the factor of 2 between hoop and longitudinal stress, the sphere, joint efficiencies, volume change, and how wire size, coil size and coil count change a spring's stiffness.

### The picture

Fry a sausage until it bursts. The skin almost always splits along its length, never around it. The pressure inside pulls the skin apart around the circumference twice as hard as it pulls along the length. A boiler, a gas cylinder or a water pipe is the same sausage in steel.

Now take the spring out of a ballpoint pen and straighten it in your mind. Pressing the spring twists the wire, a little in every coil. Thicker wire twists less; bigger coils give the load more leverage, so they twist more; more coils add more twist. That is all of spring stiffness.

### Twisted points

**What makes a cylinder thin.** A wall thinner than about one-twentieth of the diameter (d/t > 20) has nearly the same stress on its inner and outer faces, so the stress can be taken as uniform. The radial stress, which runs from −p at the inner face to zero at the outer, is ignored: with d/t > 20 the hoop stress is more than ten times p.

**Hoop stress from half a cylinder.** Cut the cylinder lengthwise through its axis. The pressure pushing the two halves apart acts on the curved inside, but its sideways components cancel and its net push equals p times the projected area, d × L. Two strips of wall, each t × L, hold it:

```math
p \times d \times L = 2\,\sigma_h\, t\, L \quad \Rightarrow \quad \sigma_h = \frac{pd}{2t}
```

**Longitudinal stress from the end cap.** Cut the cylinder across. The pressure on the end, p × πd²/4, is held by a ring of wall of area πd × t:

```math
p \times \frac{\pi d^2}{4} = \sigma_L \times \pi d\, t \quad \Rightarrow \quad \sigma_L = \frac{pd}{4t}
```

Hoop stress is twice the longitudinal stress, so the crack runs along the length, like the sausage.

**Joint efficiency pairs the opposite way.** In a riveted or welded shell, a longitudinal seam runs along the length, so it is the seam that the hoop stress pulls apart. A circumferential seam runs around, and the longitudinal stress pulls it. With joint efficiencies ηl and ηc:

```math
\sigma_h = \frac{pd}{2t\,\eta_l}, \qquad \sigma_L = \frac{pd}{4t\,\eta_c}
```

The longitudinal joint's efficiency goes with the hoop stress. That pairing is a favourite trap.

**A sphere needs half the wall.** Cut a sphere through any diameter: the push p × πd²/4 is held by a ring πd × t, so σ = pd/4t in every direction. For the same pressure and diameter, a sphere needs only half the thickness of a cylinder. That is why large gas and LPG stores are spheres.

**Shear stress in a thin cylinder.** In the plane of the wall, τmax = (σh − σL)/2 = pd/8t. Counting the near-zero radial stress as the third principal stress, the absolute maximum is σh/2 = pd/4t (Topic 10).

**Strains and volume change.** Each stress stretches its own direction and narrows the other by Poisson's ratio:

```math
\varepsilon_h = \frac{\sigma_h - \mu\sigma_L}{E} = \frac{pd}{4tE}(2 - \mu), \qquad \varepsilon_L = \frac{\sigma_L - \mu\sigma_h}{E} = \frac{pd}{4tE}(1 - 2\mu)
```

The diameter grows by d × εh and the length by L × εL. The volume V = (π/4)d²L grows by two hoop strains (the diameter counts twice) plus one longitudinal strain:

```math
\frac{\delta V}{V} = 2\varepsilon_h + \varepsilon_L = \frac{pd}{4tE}(5 - 4\mu), \qquad \text{sphere: } \frac{\delta V}{V} = 3\varepsilon = \frac{3pd}{4tE}(1 - \mu)
```

**Thick cylinders: Lamé's equations.** When the wall is thick, the inner layers stretch more than the outer ones, so the stress is not uniform. Lamé's equations give the radial and hoop stresses at radius r, with A and B found from the pressures at the two faces:

```math
\sigma_r = A - \frac{B}{r^2}, \qquad \sigma_\theta = A + \frac{B}{r^2}, \qquad \sigma_{\theta,max} = p\,\frac{r_o^2 + r_i^2}{r_o^2 - r_i^2} \ \text{(at the bore, internal pressure only)}
```

The hoop stress is largest at the inner surface and always larger than p there. Adding thickness helps less and less: even an infinitely thick wall leaves a hoop stress of p at the bore. So very high-pressure cylinders are built as compound cylinders, one shrunk onto another, or by autofrettage (overpressurising once so the inner layer yields and is left in compression).

**A close-coiled spring is a twisted wire.** When the coils are nearly flat (helix angle below about 10°), an axial load W on a coil of mean radius R twists every part of the wire with torque T = WR. So the wire shear stress is the torsion formula with T = WR:

```math
\tau = \frac{16WR}{\pi d^3} = \frac{8WD}{\pi d^3}
```

In a real spring the inner side of each coil is stressed more, because the wire is curved and the direct shear W/(πd²/4) adds there. The Wahl factor K = (4C − 1)/(4C − 4) + 0.615/C multiplies τ to allow for both, and springs crack from the inside of the coil.

**Where the spring deflection formula comes from.** The wire is a shaft of length 2πRn twisted by WR. Its twist is θ = TL/GJ, and the load end moves through Rθ:

```math
\delta = R \cdot \frac{WR \times 2\pi R n}{G \times \pi d^4/32} = \frac{64WR^3 n}{Gd^4}, \qquad k = \frac{W}{\delta} = \frac{Gd^4}{64R^3 n} = \frac{Gd^4}{8D^3 n}
```

- Stiffness goes with d⁴: wire 20% thicker makes the spring about twice as stiff.
- Stiffness goes with 1/D³: coils twice as wide make it eight times softer.
- Stiffness goes with 1/n: cut a spring in half and each half is twice as stiff.

**Spring index.** C = D/d, the mean coil diameter over the wire diameter, usually 4 to 12. Below that the wire is hard to coil and badly stressed at the inside of the coil; above it the spring is floppy and tends to buckle or tangle.

**Springs in series and in parallel.** In series (one under the other) each spring carries the full load and the deflections add, so 1/k = 1/k₁ + 1/k₂: softer than either. In parallel (side by side, or one nested inside another) they share one deflection and the loads add, so k = k₁ + k₂: stiffer than either. Car valve springs often nest two springs, a parallel pair.

**Strain energy in a spring.** U = ½Wδ = W²/2k. For the same peak shear stress, a close-coiled spring stores (τ²/4G) per unit volume of wire, the same figure as a solid shaft in torsion.

**Other springs.** An open-coiled spring has a large helix angle, so the wire is bent as well as twisted and both E and G enter its deflection. A leaf (laminated) spring is a stack of strips acting as a beam of uniform strength. For a semi-elliptic leaf spring of span L with n leaves of width b and thickness t, under a central load W:

```math
\sigma = \frac{3WL}{2nbt^2}, \qquad \delta = \frac{3WL^3}{8Enbt^3}
```

### Worked numbers

**Sizing a boiler shell.** A boiler shell of 1.5 m diameter works at 1.2 MPa. The allowable stress is 100 MPa, the longitudinal joint efficiency 80% and the circumferential joint efficiency 50%.

```math
t_{hoop} = \frac{pd}{2\sigma\eta_l} = \frac{1.2 \times 1500}{2 \times 100 \times 0.8} = 11.25\ \text{mm}, \qquad t_{long} = \frac{pd}{4\sigma\eta_c} = \frac{1.2 \times 1500}{4 \times 100 \times 0.5} = 9\ \text{mm}
```

The larger answer governs: use 12 mm plate. Even with a much weaker circumferential joint, the hoop direction still decides.

**Volume change of a cylinder.** A cylinder 1000 mm in diameter, 10 mm thick and 3 m long holds gas at 2 MPa. E = 200 GPa and μ = 0.3.

- σh = 2 × 1000 / 20 = 100 MPa and σL = 50 MPa.
- εh = (100 − 0.3 × 50) / 200,000 = 4.25 × 10⁻⁴, so the diameter grows by 0.425 mm.
- εL = (50 − 0.3 × 100) / 200,000 = 1.0 × 10⁻⁴, so the length grows by 0.3 mm.
- δV/V = 2 × 4.25 × 10⁻⁴ + 1.0 × 10⁻⁴ = 9.5 × 10⁻⁴. The volume, 2.356 × 10⁹ mm³, grows by about 2.24 × 10⁶ mm³, or 2.24 litres.

**A thick cylinder.** Inner radius 100 mm, outer 150 mm, internal pressure 50 MPa.

```math
\sigma_{\theta,max} = 50 \times \frac{150^2 + 100^2}{150^2 - 100^2} = 50 \times \frac{32\,500}{12\,500} = 130\ \text{MPa}
```

The thin-shell formula with the bore diameter, pd/2t = 50 × 200 / 100 = 100 MPa, would underestimate it by 23%.

**A helical spring.** Wire diameter 8 mm, mean coil diameter 64 mm (R = 32 mm, C = 8), 10 active coils, G = 80 GPa, load 400 N.

```math
\tau = \frac{16 \times 400 \times 32}{\pi \times 8^3} = 127\ \text{MPa}, \qquad \delta = \frac{64 \times 400 \times 32^3 \times 10}{80\,000 \times 8^4} = 25.6\ \text{mm}
```

- Stiffness k = 400 / 25.6 = 15.6 N/mm.
- Wahl factor: K = 31/28 + 0.615/8 = 1.18, so the real peak stress at the inside of the coil is about 151 MPa.
- Cut the spring in half (5 coils): 31.3 N/mm. Two of the original springs in series: 7.8 N/mm; in parallel: 31.3 N/mm.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Hoop stress is pd/4t. | Hoop stress is pd/2t; longitudinal stress is pd/4t. |
| A thin cylinder bursts around its circumference. | It splits along its length, because the hoop stress is twice the longitudinal stress. |
| The bursting force is p × the curved inner area. | It is p × the projected area, d × L. |
| A thin sphere has stress pd/2t. | It has pd/4t in every direction, half the cylinder's hoop stress. |
| The longitudinal joint efficiency goes in the longitudinal stress formula. | It goes in the hoop stress formula, because the hoop stress pulls the longitudinal seam apart. |
| The volumetric strain of a cylinder is 3εh. | It is 2εh + εL. Only a sphere has 3ε. |
| Radial stress matters in a thin cylinder. | It is ignored: it is small next to the hoop stress when d/t > 20. |
| A thick enough wall can make the bore stress as small as you like. | The hoop stress at the bore never falls below p. Compound cylinders and autofrettage are used instead. |
| The wire of a close-coiled spring is in bending. | It is in torsion, with T = WR. |
| A spring is most stressed on the outside of its coils. | On the inside, where curvature and direct shear add (Wahl factor). |
| Cutting a spring in half halves its stiffness. | It doubles it, since k ∝ 1/n. |
| Springs in series are stiffer than either spring. | Softer: 1/k = 1/k₁ + 1/k₂. Parallel springs are stiffer. |
| Spring stiffness goes with d³. | It goes with d⁴ and with 1/D³. |

## Further reading

Level 2 follows the standard textbook treatment of each topic. Typical values (E, α, Rankine constants, the Euler limit for mild steel) are rounded textbook figures, so another book may quote a slightly different value. Books also differ on the sign conventions for shear force and for Mohr's circle; the shapes and sizes of the answers do not change.

- R. K. Bansal, *A Textbook of Strength of Materials*: Topics 3 to 11 at exam level, with many solved problems.
- S. S. Rattan, *Strength of Materials*: Topics 3 to 11, with clear derivations.
- S. Timoshenko and J. M. Gere, *Mechanics of Materials*: the reasons behind every SOM formula, including columns and failure theories.
- F. P. Beer, E. R. Johnston and others, *Vector Mechanics for Engineers: Statics and Dynamics*: Topics 1 and 2.
- R. C. Hibbeler, *Engineering Mechanics: Statics and Dynamics* and *Mechanics of Materials*: every topic, with good diagrams.
- R. S. Khurmi, *A Textbook of Engineering Mechanics* and *Strength of Materials*: every topic, at the level of JE papers.
