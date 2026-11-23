# Fluid Mechanics & Machines Level 3: Tricky Questions

Nov 23, 2026 · @Rohith

## How to use Level 3

Level 3 comes after the Level 1 guide and the Level 2 theory. It has the same 10 topics in the same order, but only the parts examiners twist into traps. Finish a topic in Levels 1 and 2 first, then do it here.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Formulas worth adding | The formulas that Level 1 leaves out but harder papers use. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from GATE, ESE, state AE and JE exams and other technical papers, Kerala PSC included. Each solution goes step by step and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam, the hardest objective paper here. GATE ME is the graduate entrance test for mechanical engineering, and its fluid mechanics questions are mostly short calculations on Bernoulli's equation, pipe flow, boundary layers, turbines and cavitation. Both ask about the same ideas as JE exams, with an extra twist. If you can solve these, JE questions on the same idea feel easy. Kerala PSC likes definitions with a catch, such as which assumption is not part of Bernoulli's equation, and statement questions on stability and turbines.

**Statement questions.** ESE and several state papers list three or four statements and ask which are correct. Check each statement on its own first, then cross out every option that contains a false one. Usually two checks are enough to leave a single option.

**Units used throughout.** Write every head in metres of the liquid that is flowing, not of water or mercury, unless the question says so. Convert millimetres and centimetres of manometer reading to metres before you use them. Watch whether a question gives a diameter or a radius, a mean or a maximum velocity, a gauge or an absolute pressure, and the density of water or a specific weight of some other liquid. Most wrong options in numericals are one of these slips.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam. On the website, a topic with three or more four-option questions also gets a timed Practise this topic card.

## 1. Fluid properties

The traps here come from one missing word (rate of shear strain, not shear strain), from fluids that are non-Newtonian in a particular way, and from counting the surfaces in a surface tension question.

### Going deeper

| Idea | What it means |
| --- | --- |
| Newton's law of viscosity | Shear stress is proportional to the rate of shear strain, du/dy. Stress proportional to the strain itself is Hooke's law for a solid. |
| Units of viscosity | Dynamic viscosity μ is in Pa s (N s/m²); 1 poise = 0.1 Pa s and water at 20 °C is about 1 centipoise. Kinematic viscosity ν = μ/ρ is in m²/s; 1 stoke = 1 cm²/s = 10⁻⁴ m²/s. |
| Viscosity and temperature | Liquids get thinner when heated, because the cohesion between molecules weakens. Gases get thicker, because faster molecules carry more momentum between layers. |
| Power-law fluids | τ = K(du/dy)ⁿ. With n < 1 the fluid is shear-thinning (pseudoplastic, such as blood or paint); with n > 1 it is shear-thickening (dilatant, such as wet sand or cornflour paste); n = 1 is Newtonian. |
| Bingham (ideal) plastic | Does not flow until the stress passes a yield stress τ\_y, then flows like a Newtonian fluid: τ = τ\_y + μ(du/dy). Toothpaste and sewage sludge are examples. On a graph it is a straight line that does not pass through the origin. |
| Time-dependent fluids | A thixotropic fluid (ketchup, printer's ink) gets thinner the longer it is sheared; a rheopectic fluid (gypsum paste) gets thicker. You cannot tell them apart from a single set of readings at one moment. |
| Ideal fluid | Has no viscosity and cannot be compressed. It is not the same as a Newtonian fluid, which has a constant viscosity that is not zero. |
| Excess pressure from surface tension | A drop has one surface, so Δp = 4σ/d. A soap bubble has two surfaces, so Δp = 8σ/d. A cylindrical jet has one curved surface, so Δp = 2σ/d. |
| Capillary rise | h = 4σ cosθ/(ρgd). Water wets glass (θ near 0°) and rises; mercury does not (θ about 130° to 140°) and falls. A tube shorter than h does not overflow; the meniscus just flattens at the top. |
| A column in a tube open at both ends | Lift a capillary out of the water and it keeps a column. Now the menisci at both ends can each hold up a pressure of 2σ/r, so the column can be twice the usual capillary rise. |
| Bulk modulus | K = −dp/(dV/V). For a gas compressed slowly at constant temperature K = p; compressed quickly without heat transfer K = γp. Compressibility is 1/K. |
| Vapour pressure | The pressure at which a liquid boils at the given temperature. Where the local pressure in a flow falls to it, bubbles form: this is cavitation (Topics 9 and 10). |

### Formulas worth adding

```math
\tau = \tau_y + \mu \frac{du}{dy}
```

This is the Bingham plastic. With τ\_y = 0 it becomes Newton's law.

```math
\tau = K\left(\frac{du}{dy}\right)^n
```

This is the power law: n < 1 shear-thinning, n > 1 shear-thickening.

```math
T = \frac{\mu \pi^2 N D^3 L}{120\, t}
```

This is the viscous torque on a shaft of diameter D and length L turning at N rpm in a bearing with an oil film t thick. The power lost is 2πNT/60.

```math
h_{\text{open tube}} = \frac{4\sigma}{\rho g r}
```

This is the longest column a vertical capillary open at both ends can hold, for a wetting liquid (θ = 0). It is twice the rise in a tube dipped in a dish.

### Doubts cleared

**Doubt: Is an ideal fluid the same as a Newtonian fluid?** No. An ideal fluid has zero viscosity and is a model used to derive equations such as Bernoulli's. A Newtonian fluid has a real, constant viscosity: water, air and most oils.

**Doubt: A straight line on the τ against du/dy graph means Newtonian, doesn't it?** Only if the line passes through the origin. A straight line that cuts the τ axis above zero is a Bingham plastic.

**Doubt: Which is more viscous, air or water?** Water's dynamic viscosity is about 55 times that of air. But air is so light that its kinematic viscosity, about 1.5 × 10⁻⁵ m²/s, is about 15 times that of water.

**Doubt: Why is the pressure inside a soap bubble twice that in a drop of the same size?** A soap film has a surface on the outside and another on the inside, and each pulls inward. A drop has only its outer surface.

**Doubt: Does a capillary tube shorter than the capillary rise make a fountain?** No. The water reaches the top and stops; the meniscus becomes flatter until the smaller pull of surface tension balances the shorter column.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 68/2026, Q25.** The shear stress on a fluid layer is directly proportional to shear strain. (a) The above statement is known as Hydrostatic law (b) The above statement is known as Pascal's law (c) The above statement is known as Newton's law of viscosity (d) The above statement is incorrect

*Answer: (d) The above statement is incorrect.*

1. Newton's law of viscosity is τ = μ(du/dy). The velocity gradient du/dy is the rate of angular deformation, that is, the rate of shear strain.
2. Shear stress proportional to the shear strain itself is Hooke's law in shear, τ = Gγ, which describes a solid.
3. The statement leaves out the word rate, so it describes neither a fluid nor any of the laws named. It is incorrect.

**The trap:** Every word except one points to Newton's law, so (c) jumps out. The missing word rate is the whole question.

**Q2. MPSC AE (Civil) Mains 2020, Paper 2.** At constant temperature, the following results were obtained for a fluid. Velocity gradient du/dy (rad/s): 0, 1, 2, 3. Shear stress τ (kPa): 10, 20, 30, 40. The fluid is: (a) Newtonian (b) Non-Newtonian (c) Ideal plastic (d) Thixotropic

*Answer: (c) Ideal plastic.*

1. Each rise of 1 rad/s in du/dy adds 10 kPa to the shear stress, so τ rises in a straight line.
2. At du/dy = 0 the shear stress is already 10 kPa. The fluid needs 10 kPa before it moves at all: a yield stress.
3. A straight line with a yield stress is the Bingham or ideal plastic: τ = 10 + 10(du/dy) kPa.

**The trap:** The straight line tempts you to (a), but a Newtonian line passes through the origin. (b) is not wrong, since an ideal plastic is one kind of non-Newtonian fluid, but when one option is a special case of another, the examiner wants the more exact name. (d) needs readings taken at different times, which the data do not give.

**Q3. TS EAMCET (Engineering) 2025, 4 May, Shift 1.** What is the maximum length of a water column that can stay in a vertical capillary tube of diameter 1 mm, open at both ends? Take g = 10 m/s² and the surface tension of water as 0.07 N/m. (a) 1.4 cm (b) 2.8 cm (c) 5.6 cm (d) 0 cm

*Answer: (c) 5.6 cm.*

1. The tube is not dipped in a dish; it holds a loose column of water. There is a curved meniscus at the top and another at the bottom, and each can hold up a pressure of 2σ/r.
2. The weight of the column per unit area is balanced by both: ρgh = 4σ/r.
3. With r = 0.5 mm, h = 4 × 0.07 ÷ (1000 × 10 × 0.0005) = 0.056 m = 5.6 cm.

**The trap:** The usual capillary formula, h = 4σ/(ρgd), gives 2.8 cm, option (b). That is the rise in a tube dipped in water, where only the top meniscus holds the column. (d) comes from thinking a tube open at both ends cannot hold water at all.

## 2. Pressure and its measurement

The traps here are about which liquid goes where in a manometer, which areas and units actually enter the answer, and whether air can be treated like a liquid over a short height.

### Going deeper

| Idea | What it means |
| --- | --- |
| Pressure in air | Air also obeys dp = −ρg dz. Over a few hundred metres its density hardly changes, so the fall in pressure is about ρ\_air g h. That is how a barometer reading gives the height of a hill. |
| Base pressure in different vessels | Pressure depends on depth only. But if equal masses of different liquids stand in identical cylinders, each base carries the same weight on the same area, so the base pressures are equal too. |
| Piezometer | A plain tube on the pipe. It reads the pressure head of the liquid itself, so it suits only small positive pressures of liquids. |
| Single-column (well-type) manometer | One limb is a wide reservoir of area A, the other a narrow tube of area a. The level in the reservoir hardly moves (it falls by a/A of the rise in the tube), so only one limb needs reading. |
| Inclined manometer | The narrow limb is tilted at θ, so a small vertical height h is spread over a length h/sinθ. It is the usual choice for small pressures such as air ducts. |
| Inverted U-tube | The bend is at the top and holds a liquid lighter than the flowing one (oil or air). It measures small differences in liquid pipes. A heavy liquid such as mercury cannot sit at the top. |
| Choosing the manometer liquid | It must not mix with the flowing liquid. For a large difference choose a much denser one (mercury); for a small one choose a liquid close in density to the flowing one, which gives a large reading. |
| Two liquids on either side of a wall | Each side pushes with its own ρgh. Only the difference of the two pressures acts on a door in the wall, over the door's own area. |
| Vertical acceleration | In a tank moving up with acceleration a, p = ρ(g + a)h. Moving down, p = ρ(g − a)h. In free fall the gauge pressure is zero everywhere. |
| Rotating container | The surface becomes a paraboloid of height ω²r²/2g. The volume of a paraboloid is half that of its enclosing cylinder, so the rise at the wall equals the fall at the centre. |

### Formulas worth adding

```math
h_{\text{air}} = \frac{\rho_{Hg}\,\Delta h_{Hg}}{\rho_{\text{air}}}
```

This gives the height climbed from the fall in barometer reading, taking the air density as constant.

```math
h = L \sin\theta
```

This gives the vertical head from the length L read along an inclined manometer tube.

```math
h = x\left(1 - \frac{S_l}{S}\right)
```

This is the head difference, in metres of the flowing liquid of specific gravity S, for an inverted U-tube reading x with a lighter liquid of specific gravity S\_l at the top.

```math
p = \rho (g + a) h
```

This is the pressure at depth h in a tank accelerating upward at a.

### Doubts cleared

**Doubt: Why can't mercury go in an inverted U-tube?** In an inverted U-tube the measuring liquid sits in the bend at the top, above the flowing liquid in both limbs. A liquid heavier than the flowing one would simply sink down the limbs into the pipes.

**Doubt: Is a barometer reading a gauge pressure?** No. The space above the mercury is almost a perfect vacuum, so a barometer reads the absolute pressure of the atmosphere.

**Doubt: Can I treat air as having constant density?** Over a few hundred metres, yes: the error is a few percent. Over kilometres the density falls noticeably, and the exact answer needs the gas law.

**Doubt: Does a bigger tank wall need a bigger force on a small door?** No. The force on the door is the pressure at the door times the door's area. The size of the tank only matters through the depth.

### Tricky past questions with solutions

**Q1. TN TRB 2017, Mechanical.** The pressure difference between two horizontal pipes carrying water is to be found with an inverted U-tube manometer. Two manometric fluids are available, of specific gravities 13.6 and 0.8. Which one should be used? (a) The fluid of specific gravity 13.6 (b) The fluid of specific gravity 0.8 (c) Both fluids can be used (d) Neither fluid can be used

*Answer: (b) The fluid of specific gravity 0.8.*

1. In an inverted U-tube the bend is at the top, and the manometric fluid fills the bend above the water in both limbs.
2. To stay at the top, it must be lighter than water and must not mix with it. The oil of specific gravity 0.8 meets both conditions.
3. The head difference is then x(1 − 0.8) = 0.2x metres of water, so even a small difference gives a readable x.

**The trap:** Mercury is the textbook manometer liquid, so (a) feels safe. In an inverted U-tube it would sink through the water and into the pipes.

**Q2. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2.** A barometer reads 760 mm of mercury at sea level and 724 mm of mercury at the top of a mountain. Taking the density of air as 1.2 kg/m³, the approximate height of the mountain is (a) 36 m (b) 41 m (c) 360 m (d) 410 m

*Answer: (d) 410 m.*

1. The fall in pressure is a column of 760 − 724 = 36 mm of mercury: 13 600 × g × 0.036.
2. The same fall is caused by a column of air of height h: 1.2 × g × h.
3. Setting them equal, h = 13 600 × 0.036 ÷ 1.2 = 408 m, about 410 m.

**The trap:** (a) takes the 36 mm difference as if it were the answer in metres. (b) is a slip of a factor of ten in the air density. The question works only because the air density can be taken as constant over 400 m.

**Q3. AAI Junior Executive (ATC) 2021, 25 March, Shift 2.** A tank with a square base of area 1.0 m² is divided by a vertical partition in the middle. The bottom of the partition has a small hinged door of area 10 cm². One compartment holds water and the other an acid of relative density 1.7, both to a depth of 3.0 m. The force needed to keep the door closed is (a) 2.05 × 10⁴ (b) 20.5 N (c) 55 N (d) 2.05 N

*Answer: (b) 20.5 N.*

1. At the door, the water side has a pressure of 1000 × 9.8 × 3 = 29 400 Pa, and the acid side 1.7 times that, 49 980 Pa.
2. The door feels only the difference, 20 580 Pa, pushing from the acid side.
3. The door's area is 10 cm² = 10 × 10⁻⁴ = 10⁻³ m², so the force is 20 580 × 10⁻³ = 20.6 N, about 20.5 N.

**The trap:** (a) is the pressure difference in pascals, with the area forgotten. (d) converts 10 cm² as 10⁻⁴ m². Using the acid pressure alone gives about 50 N, near (c), and forgets that the water pushes back. The 1 m² base area is not needed at all.

## 3. Hydrostatic forces, buoyancy and floatation

The traps here come from the position of the centre of pressure for shapes other than a rectangle, from curved surfaces where the liquid is on an awkward side, and from mixing up the stability rules for floating and submerged bodies.

### Going deeper

| Idea | What it means |
| --- | --- |
| Total force on a plane | F = ρgAh\_c, where h\_c is the depth of the centroid. It does not depend on the slope of the surface. |
| Centre of pressure on a slope | h\_p = h\_c + I\_G sin²θ/(Ah\_c), with θ the angle of the plane to the free surface. For a vertical plane sinθ = 1; for a horizontal one the extra term vanishes. |
| Standard positions, top at the surface | Rectangle: 2h/3. Triangle with base at the surface and vertex down: h/2. Triangle with vertex at the surface and base down: 3h/4. Circle touching the surface: 5d/8. |
| Depth and the centre of pressure | As the plane sinks deeper, I\_G/(Ah\_c) shrinks, so the centre of pressure moves closer to the centroid. It never reaches it for a vertical plane at a finite depth. |
| Dam or vertical wall | Per metre of length, F = ρgH²/2, acting H/3 above the base, where the pressure triangle has its centroid. |
| Vertical force on a curved surface | Equals the weight of liquid, real or imaginary, between the surface and the free surface. Work out which side the liquid is on to find the direction. |
| Buoyancy needs liquid underneath | Buoyancy is the net upward push of the pressure on the lower faces. A plug or a block sealed flat against the bottom, with no liquid under it, gets no upward push at all; the liquid only presses it down. |
| Stability of a submerged body | B stays fixed when a submerged body tilts, because the displaced shape does not change. It is stable only if G is below B. |
| Stability of a floating body | When it tilts, B moves sideways and the metacentre M appears. It is stable if M is above G, neutral if they coincide, unstable if M is below G. G may be above B. |
| Neutral equilibrium | A body given a small tilt stays in its new position, neither coming back nor going further. |
| Rolling period | T = 2πk/√(g × GM). A large GM gives a quick, jerky roll; a small GM a slow, comfortable one. |

### Formulas worth adding

```math
h_p = h_c + \frac{I_G \sin^2\theta}{A h_c}
```

This is the depth of the centre of pressure on a plane sloping at θ to the free surface.

```math
I_G = \frac{bh^3}{36}
```

This is the second moment of a triangle of base b and height h about its centroid. Its centroid is h/3 from the base.

```math
F = \frac{\rho g H^2}{2}
```

This is the force per metre length on a vertical wall holding liquid H deep. It acts H/3 above the base.

```math
GM = \frac{I}{V} - BG
```

This is the metacentric height, with I the second moment of the waterline area about the tilt axis and V the displaced volume.

### Doubts cleared

**Doubt: Why is the centre of pressure always below the centroid?** Pressure grows with depth, so the lower part of the plane pushes harder than the upper part. The single equivalent force must sit lower than the middle of the area.

**Doubt: Does buoyancy act on everything under water?** Only where the liquid can press from below. A suction cup on the floor of a tank, or a plug sealing a hole, has no liquid under it, so the liquid only pushes it down.

**Doubt: Can a floating body be stable with G above B?** Yes. Ships nearly always have G above B. What matters is that the metacentre M is above G.

**Doubt: Why does a submerged body need G below B?** Fully submerged, the shape of the displaced liquid does not change when the body tilts, so B does not move and there is no metacentre to help. The only restoring couple comes from G hanging below B.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q26.** One of the following statements is true with regard to bodies that float or are submerged in liquids: (a) For a body floating in a liquid, stability is ensured if the centre of buoyancy is below the centre of gravity (b) For a body wholly submerged in a liquid, stability is ensured if the centre of buoyancy is above the centre of gravity of the body (c) For a body floating in a liquid, stability is ensured if the centre of buoyancy is above the metacentre, regardless of the relative positions of the centres of buoyancy and gravity (d) For a body floating in a liquid, stability is ensured if the centre of buoyancy is below the centre of gravity and the metacentre is below both the centres of gravity and buoyancy

*Answer: (b).*

1. For a wholly submerged body, B does not move when it tilts. With B above G, the weight and the buoyancy form a couple that turns the body back. (b) is true.
2. For a floating body, the test is the metacentre: M must be above G. B below G alone, as in (a), proves nothing.
3. The metacentre always lies above B for a floating body, so (c) is impossible. (d) puts M below G, which is the unstable case.

**The trap:** (a) is often true of real ships, which float with G above B, but it is not the condition that ensures stability. (c) and (d) mix the three points in ways that sound technical but cannot happen or are unstable.

**Q2. GATE ME 2016 (Set 2).** A frictionless, massless and leak-proof plug blocks a rectangular hole of size 2R × L at the bottom of an open tank. The head of the plug is a half-cylinder of radius R, sitting on the hole with its flat face down. The tank is filled with a liquid of density ρ up to the tip of the plug. Neglect atmospheric pressure. The force F needed to hold the plug in position is (a) 2ρR²gL(1 − π/4) (b) 2ρR²gL(1 + π/4) (c) πR²ρgL (d) (π/2)ρR²gL

*Answer: (a) 2ρR²gL(1 − π/4).*

1. There is no liquid under the plug: its flat face covers the hole. So the liquid can only press down on the curved surface, and there is no buoyancy.
2. The downward force on a curved surface equals the weight of liquid above it up to the free surface. The free surface is at the tip, R above the hole.
3. That liquid fills a box 2R wide, R high and L long, minus the half-cylinder: (2R² − πR²/2)L = 2R²L(1 − π/4).
4. So F = 2ρgR²L(1 − π/4), pushing up from below to hold the plug in.

**The trap:** (d) is the weight of liquid the half-cylinder displaces, the answer you get by wrongly applying Archimedes' principle. With no liquid underneath there is no buoyancy. (b) adds the half-cylinder to the box instead of taking it away.

**Q3. SSC JE (Civil) 2019, 25 September, Morning.** A vertical triangular plane area is submerged in water with one side at the free surface and its vertex pointing downward. Its height is h. The centre of pressure is below the free surface by (a) h/4 (b) h/3 (c) 2h/3 (d) h/2

*Answer: (d) h/2.*

1. The centroid of a triangle is one-third of its height from the base. With the base at the surface, h\_c = h/3.
2. With A = bh/2 and I\_G = bh³/36, the extra term is I\_G/(Ah\_c) = (bh³/36) ÷ (bh/2 × h/3) = h/6.
3. h\_p = h/3 + h/6 = h/2.

**The trap:** (c) is the answer for a rectangle with its top at the surface, learnt so well that it gets used for every shape. (b) is the centroid, not the centre of pressure. Flip the triangle, vertex up, and the answer becomes 3h/4.

**Q4. SSC JE (Civil) 2017, 3 March, Evening.** As the depth of immersion of a vertical plane surface increases, the location of the centre of pressure (a) falls closer to the centre of gravity of the area (b) moves away from the centre of gravity of the area (c) ultimately coincides with the centre of gravity of the area (d) None of these

*Answer: (a) falls closer to the centre of gravity of the area.*

1. The gap between the centre of pressure and the centroid is I\_G/(Ah\_c).
2. I\_G and A belong to the plate and do not change, but h\_c grows as the plate goes deeper, so the gap shrinks.
3. It approaches zero only as the depth becomes infinite, so the centre of pressure gets closer to the centroid but never reaches it.

**The trap:** (c) sounds like the natural end point, but it would need an infinite depth. The force grows with depth, which tempts some to think the centre of pressure moves away, option (b).

## 4. Fluid kinematics

The traps here come from words that sound linked but are not (incompressible and laminar, rotational and shear), from the two kinds of vortex, and from finding the constant in a streamline equation.

### Going deeper

| Idea | What it means |
| --- | --- |
| Total acceleration | Local part ∂V/∂t plus convective part such as u∂u/∂x + v∂u/∂y. Steady flow has no local part; uniform flow has no convective part. |
| Equation of a streamline | Along a streamline the velocity is tangent to it, so dx/u = dy/v (= dz/w). Integrate, then use the given point to find the constant. |
| General continuity | ∂ρ/∂t + ∇·(ρV) = 0. For incompressible flow ρ is constant, and this reduces to ∇·V = 0 whether the flow is steady or not. |
| Incompressible is about density only | It says nothing about laminar or turbulent, steady or unsteady, internal or external. Liquids, and gases below a Mach number of about 0.3, are treated as incompressible. |
| Rotation and vorticity | ω\_z = ½(∂v/∂x − ∂u/∂y). Vorticity is twice the rotation. Circulation round a small loop equals vorticity times the enclosed area. |
| Rotation is not shear | A body of fluid turning like a solid spins every particle but deforms none of them. It is rotational, yet has no shear stress. |
| Forced vortex | v = ωr, rotational, vorticity 2ω everywhere, no shear stress. The total head grows with radius, so Bernoulli's equation holds along a streamline but not across streamlines. |
| Free vortex | vr = constant, irrotational everywhere except at the centre. The total head is the same everywhere, so Bernoulli's equation holds across streamlines too. |
| Rankine vortex | A forced-vortex core surrounded by a free vortex, as in a tornado or a stirred cup. So a vortex in general can be rotational or irrotational. |
| Stream function and velocity potential | ψ exists for any two-dimensional incompressible flow; φ exists only for irrotational flow. When both exist, both satisfy the Laplace equation and their lines cross at right angles. |

### Formulas worth adding

```math
\frac{dx}{u} = \frac{dy}{v}
```

This is the differential equation of a streamline in two dimensions.

```math
a_x = \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}
```

This is the x-acceleration of a fluid particle in two-dimensional flow: local plus convective.

```math
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec V) = 0
```

This is continuity for any flow. With constant density it becomes ∇·V = 0.

```math
\Gamma = \zeta \times A
```

This is circulation round a small area A in a flow of vorticity ζ.

### Doubts cleared

**Doubt: Does ∇·V = 0 need the flow to be steady?** No. Constant density alone is enough. Steadiness matters only for a compressible flow, where it removes ∂ρ/∂t but leaves ∇·(ρV) = 0, not ∇·V = 0.

**Doubt: Is incompressible flow always laminar?** No. Water in a city main is incompressible and fully turbulent.

**Doubt: How can a forced vortex be rotational but have no shear stress?** Rotational means each particle spins; shear stress comes from particles sliding past each other. In solid-body rotation every particle spins, but the distances between them never change, so nothing slides.

**Doubt: Why does Bernoulli's equation hold across streamlines in a free vortex but not in a forced vortex?** Bernoulli's constant is the same on every streamline only when the flow is irrotational. A free vortex is; a forced vortex is not, and its total head rises with radius.

### Tricky past questions with solutions

**Q1. GATE ME 2007.** Which combination of the following statements about steady, incompressible forced vortex flow is correct? P: Shear stress is zero at all points in the flow. Q: Vorticity is zero at all points in the flow. R: Velocity is directly proportional to the radius from the centre of the vortex. S: Total mechanical energy per unit mass is constant in the entire flow field. (a) P and Q (b) R and S (c) P and R (d) P and S

*Answer: (c) P and R.*

1. In a forced vortex the fluid turns like a solid body. The particles do not move relative to each other, so there is no shear stress anywhere. P is true.
2. Every particle spins at ω, so the vorticity is 2ω everywhere, not zero. Q is false.
3. Solid-body rotation gives v = ωr. R is true.
4. The total head grows with radius, so the energy is constant only along each circular streamline, not across the whole field. S is false.

**The trap:** Students who link no shear with irrotational pick (a). S is true of a free vortex, which is why (b) and (d) look right to someone who has mixed up the two vortices.

**Q2. AAI JE (Technical) 2018.** The equation of the streamline passing through the point (1, 1) for the velocity field V = −y² i − 6x j is (a) 10x² − 2y³ = 8 (b) 9x³ − y³ = 8 (c) 9x² − y³ = 8 (d) 9x² − y² = 8

*Answer: (c) 9x² − y³ = 8.*

1. Here u = −y² and v = −6x. Along a streamline dx/u = dy/v, so dx/(−y²) = dy/(−6x), which gives 6x dx = y² dy.
2. Integrating, 3x² = y³/3 + C, or 9x² − y³ = C′.
3. At (1, 1), C′ = 9 − 1 = 8. So the streamline is 9x² − y³ = 8.

**The trap:** The minus signs cancel, which tempts a sign slip. (d) comes from integrating y² dy as y². Every option is set equal to 8, so the constant cannot tell you which is right; you have to integrate.

**Q3. DFCCIL Executive (Mechanical) 2021, 28 September, Shift 1.** Which of the following statements are correct for an incompressible flow? I. In incompressible flows, the variation in density is negligible. II. Incompressible flows are always laminar. III. Incompressible flows can be internal as well as external. (a) Only I and II (b) I, II and III (c) Only II and III (d) Only I and III

*Answer: (d) Only I and III.*

1. Incompressible means the density stays practically constant. I is true.
2. Whether a flow is laminar depends on its Reynolds number, not on its density. Water in pipes is incompressible and usually turbulent. II is false.
3. Flow inside a pipe (internal) and flow round a ship's hull (external) can both be incompressible. III is true.

**The trap:** The textbook examples of incompressible flow (Hagen–Poiseuille, potential flow) are often laminar or ideal, so II sounds familiar. Any option with II is wrong.

**Q4. SSC JE (Mechanical) 2017, 2 March, Morning.** For the continuity equation ∇·V = 0 to be valid, where V is the velocity vector, which one of the following is a necessary condition? (a) Steady flow (b) Irrotational flow (c) Inviscid flow (d) Steady and incompressible flow

*Answer: (d) Steady and incompressible flow.*

1. The general continuity equation is ∂ρ/∂t + ∇·(ρV) = 0.
2. If the density is constant, ρ comes out of the derivatives and the equation becomes ∇·V = 0. So the condition that matters is incompressibility.
3. Only (d) contains incompressibility. Steady flow alone, as in (a), still leaves ∇·(ρV) = 0, which is not the same thing.

**The trap:** Strictly, incompressibility is enough on its own, since ∇·V = 0 holds in unsteady incompressible flow too. But no option says incompressible alone, so (d) is the only one that guarantees the equation. Irrotational and inviscid, (b) and (c), describe the motion, not the mass balance.

## 5. Fluid dynamics: Bernoulli and flow measurement

The traps here come from Bernoulli's assumptions, from free jets where the pressure never changes, from a fluid that is not water, and from converting a manometer reading into a head of the right liquid.

### Going deeper

| Idea | What it means |
| --- | --- |
| Equations of motion | Euler's equation keeps only pressure and gravity forces. Navier–Stokes adds viscous forces; Reynolds' equations add the extra stresses of turbulence. Bernoulli's equation is Euler's equation integrated along a streamline. |
| Bernoulli's assumptions | Ideal (inviscid) fluid, steady flow, incompressible flow, along a streamline, no pump or turbine between the points. A real fluid breaks the first one. |
| Inside a boundary layer | Viscous forces are as large as inertia there, so Bernoulli's equation does not hold. It holds outside the boundary layer, in the free stream. |
| Compressible Bernoulli | For a gas expanding adiabatically, the pressure term becomes \[k/(k − 1)\] p/ρg. For a slow gas flow (Mach below about 0.3) the ordinary equation is close enough. |
| Free jet | Once water leaves a nozzle or tap, the pressure in it is atmospheric everywhere. So Bernoulli's equation trades only height for speed, and continuity makes a falling jet narrower. |
| Cavitation limit in a contraction | Where the area is smallest the speed is highest and the pressure lowest. The largest flow possible is the one that drops that pressure to the vapour pressure. |
| Manometer reading to head | A differential manometer reading x of a liquid of specific gravity S\_m, on a pipe carrying a liquid of specific gravity S, gives h = x(S\_m/S − 1) metres of the flowing liquid. |
| Pitot-static (Prandtl) tube | Its two openings feel the stagnation pressure and the static pressure. Their difference is the dynamic pressure ρV²/2, so V = Cv√(2gh). |
| Venturimeter when tilted | The manometer reads the change in piezometric head, so the same flow gives the same reading at any slope. The actual pressure difference does change. |
| Correction factors | For laminar pipe flow, the kinetic energy factor α = 2 and the momentum factor β = 4/3. For turbulent flow both are close to 1. |

### Formulas worth adding

```math
\frac{dp}{\rho} + V\,dV + g\,dz = 0
```

This is Euler's equation along a streamline. Integrate it with constant ρ to get Bernoulli's equation.

```math
\frac{k}{k-1}\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant}
```

This is Bernoulli's equation for adiabatic compressible flow.

```math
V_2 = \sqrt{V_1^2 + 2gh}
```

This is the speed of a free jet after falling h, with the pressure atmospheric throughout. Its diameter then follows from d₂ = d₁√(V₁/V₂).

```math
h = x\left(\frac{S_m}{S} - 1\right)
```

This is the head, in metres of the flowing liquid, from a differential manometer reading x.

### Doubts cleared

**Doubt: Bernoulli's equation needs a real fluid, doesn't it, since all fluids are real?** No. It is derived for an ideal fluid with no viscosity. For a real fluid you must add a head loss term.

**Doubt: Why does a falling stream of water get thinner?** Gravity speeds it up while the pressure stays atmospheric. The same flow at a higher speed needs a smaller area.

**Doubt: Why does the density of the flowing fluid matter in a cavitation question?** The pressure drop needed to speed the fluid up is ρV²/2. A lighter fluid can go faster before its pressure falls to the vapour pressure.

**Doubt: If the manometer liquid's relative density is 11, why not use 13.6?** Use the figure the question gives. The formula works for any manometer liquid; mercury is just the common case.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports) 65/2026, Q4.** Which among the following conditions is not an assumption for deriving Bernoulli's equation? (a) Ideal fluid and incompressible flow (b) Real fluid and incompressible flow (c) Steady and incompressible flow (d) Ideal fluid and steady flow

*Answer: (b) Real fluid and incompressible flow.*

1. Bernoulli's equation is derived for an ideal fluid, in steady, incompressible flow along a streamline.
2. Options (a), (c) and (d) each pair two of those assumptions.
3. (b) pairs incompressible flow with a real fluid. A real fluid has viscosity, which Bernoulli's equation leaves out, so (b) is not an assumption.

**The trap:** Every option contains a correct assumption, and (b)'s second half, incompressible flow, is genuinely one. Read each option as a pair; one wrong half makes the whole pair wrong.

**Q2. GATE ME 2013.** Water is coming out of a tap and falls vertically downward. At the tap opening, the stream diameter is 20 mm with a uniform velocity of 2 m/s. Take g = 9.81 m/s². Assuming steady, inviscid flow, constant atmospheric pressure everywhere and neglecting curvature and surface tension effects, the diameter of the stream 0.5 m below the tap is approximately (a) 10 mm (b) 15 mm (c) 20 mm (d) 25 mm

*Answer: (b) 15 mm.*

1. The pressure is atmospheric at both points, so Bernoulli's equation gives V₂² = 2² + 2 × 9.81 × 0.5 = 13.81, and V₂ = 3.72 m/s.
2. Continuity: d₂² × 3.72 = 20² × 2, so d₂ = 20 × √(2/3.72) = 14.7 mm.
3. That is about 15 mm.

**The trap:** (c) assumes the stream keeps its size because nothing seems to squeeze it. (a) halves the diameter in step with nearly doubling the speed, but the area, not the diameter, goes inversely with speed.

**Q3. ISRO Scientist (Mechanical) 2013.** Consider steady, incompressible and irrotational flow through a reducer in a horizontal pipe, where the diameter is reduced from 20 cm to 10 cm. The pressure in the 20 cm pipe just upstream of the reducer is 150 kPa. The fluid has a vapour pressure of 50 kPa and a specific weight of 5 kN/m³. Neglecting friction, the maximum discharge (in m³/s) that can pass through the reducer without causing cavitation is (a) 0.05 (b) 0.16 (c) 0.27 (d) 0.38

*Answer: (b) 0.16.*

1. The area falls to a quarter, so V₂ = 4V₁.
2. Cavitation starts when the pressure in the 10 cm pipe falls to 50 kPa. The available pressure head is (150 − 50) ÷ 5 = 20 m of this fluid.
3. Bernoulli: 20 = (V₂² − V₁²)/2g = 15V₁²/19.62, so V₁ = 5.11 m/s.
4. Q = (π/4) × 0.2² × 5.11 = 0.16 m³/s.

**The trap:** The fluid is not water. Using 9.81 kN/m³ gives about 0.115, which matches no option. Taking the velocity ratio as 2, the diameter ratio, instead of 4 gives about 0.36, close to (d).

**Q4. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2.** A Prandtl tube (a Pitot-static tube with Cv = 1) is used to measure the velocity of water. The differential manometer reading is 10 mm of a liquid of relative density 11. Taking g = 9.8 m/s², the velocity of the water (in m/s) is (a) 1.32 (b) 1.4 (c) 1.6 (d) 1.5

*Answer: (b) 1.4.*

1. Convert the reading to metres of water: h = 0.01 × (11 − 1) = 0.1 m.
2. V = √(2 × 9.8 × 0.1) = √1.96 = 1.4 m/s.

**The trap:** Forgetting the −1, and using 0.01 × 11 = 0.11 m, gives 1.47, close to (d). The −1 is there because the water standing in the manometer limbs balances part of the manometer liquid.

**Q5. DSSSB JE (Mechanical) 2019, 6 November, Shift 2.** A liquid of specific gravity 0.68 flows through a venturimeter with an inlet diameter of 50 cm and a throat diameter of 30 cm. The liquid–mercury differential manometer reads 20 cm. The specific gravity of mercury is 13.6. The difference of pressure head is (a) 3.8 m of liquid (b) 2 m of liquid (c) 5 m of liquid (d) 5.8 m of liquid

*Answer: (a) 3.8 m of liquid.*

1. h = x(S\_m/S − 1), with x = 0.2 m, S\_m = 13.6 and S = 0.68.
2. 13.6 ÷ 0.68 = 20, so h = 0.2 × (20 − 1) = 3.8 m of the flowing liquid.

**The trap:** Using water's specific gravity gives 0.2 × 12.6 = 2.52 m, and forgetting the −1 gives 4 m; neither is an option, which is a hint to recheck. The two diameters are not needed for the head; they would be needed only for the flow.

## 6. Orifices, mouthpieces and notches

The traps here come from how strongly the flow depends on the head, which differs for an orifice, a rectangular notch and a V-notch, and from when a weir needs air under its nappe.

### Going deeper

| Idea | What it means |
| --- | --- |
| How flow depends on head | Through a small orifice Q goes as √H; over a rectangular notch as H^1.5; over a V-notch as H^2.5. The power tells you how an error in H spreads to Q. |
| Same flow, different depths | Q = Cd a√(2gH). An orifice lower down, under more head, needs a smaller area for the same flow: a ∝ 1/√H, so d ∝ 1/H^0.25. |
| Cv from the jet path | A jet leaving a side orifice falls like a projectile. If it travels x while falling y, Cv = x/√(4yH). |
| Coefficient of resistance | The head lost over the actual velocity head: 1/Cv² − 1. For Cv = 0.98 it is about 0.04. |
| Suppressed and contracted weirs | A suppressed weir spans the full channel width, so the nappe has no end contractions. A contracted weir is narrower than the channel; Francis's formula shortens its crest by 0.1H for each end contraction. |
| Ventilation | A suppressed rectangular weir traps air under the nappe between the channel walls. The falling water carries the air away, the pressure under the nappe drops, the nappe clings to the weir and the flow formula fails. Vent pipes keep that space at atmospheric pressure. A V-notch or a contracted weir draws air in from its open sides and needs no ventilation. |
| Why the V-notch suits small flows | Its Cd is nearly the same at every head, because the nappe keeps the same shape. For a small flow it gives a taller, more readable head than a rectangular notch. |
| Velocity of approach | If the channel water arrives with speed V\_a, its velocity head h\_a = V\_a²/2g adds to the head on the weir. |
| Mouthpieces | External cylindrical: Cd about 0.855. Convergent-divergent: about 1. Borda's running free: 0.5; running full: 0.707. |
| Broad-crested weir | Passes the most water when the depth over the crest is 2/3 of the upstream head: Q\_max = 1.705 Cd L H^1.5 in SI units. |

### Formulas worth adding

```math
\frac{dQ}{Q} = n\,\frac{dH}{H}
```

This is the error in flow from an error in head, with n = 1/2 for an orifice, 3/2 for a rectangular notch and 5/2 for a V-notch.

```math
C_v = \frac{x}{\sqrt{4yH}}
```

This gives the coefficient of velocity from the jet's horizontal travel x and fall y.

```math
Q = \tfrac{2}{3} C_d L \sqrt{2g}\left[(H + h_a)^{3/2} - h_a^{3/2}\right]
```

This is the flow over a rectangular weir with the velocity of approach counted.

```math
T = \frac{2A(\sqrt{H_1} - \sqrt{H_2})}{C_d\, a \sqrt{2g}}
```

This is the time for a tank of constant area A to fall from H₁ to H₂ through an orifice of area a.

### Doubts cleared

**Doubt: Two orifices give the same flow. Which is bigger, the higher one or the lower one?** The higher one. It has less head, so its water comes out more slowly, and it needs more area to pass the same flow.

**Doubt: Why does a V-notch not need ventilation?** Its nappe is narrow at the bottom and open at both sides, so air reaches the underside freely. The problem arises only when the nappe spans a channel wall to wall.

**Doubt: Does the answer change with g = 10 instead of 9.81?** Slightly, by about 1%. When the options are close, use the value the question gives.

**Doubt: Is Cd of a weir about 0.6 like an orifice?** Yes, for a sharp-crested weir it is about 0.6 to 0.65. Values above 0.9 belong to venturimeters and nozzles, which lose little energy.

### Tricky past questions with solutions

**Q1. SSC JE (Civil) 2020, 30 October, Morning.** Which of the following is FALSE regarding a triangular weir? (a) The flow through the weir depends on the vertex angle (b) The coefficient of discharge is fairly constant for all heads (c) A triangular weir is more effective under small discharges than a rectangular weir (d) Ventilation of a triangular weir is necessary

*Answer: (d) Ventilation of a triangular weir is necessary.*

1. Q = (8/15)Cd tan(θ/2)√(2g)H^2.5, so the flow depends on the vertex angle θ. (a) is true.
2. The nappe keeps the same shape at every head, so Cd hardly changes. (b) is true.
3. For a small flow the V-notch gives a larger, more readable head. (c) is true.
4. Air reaches the underside of a V-notch nappe from its open sides, so no ventilation is needed. (d) is false.

**The trap:** Ventilation is a real requirement for one kind of weir, the suppressed rectangular weir, so (d) sounds like a fact you have read. It does not apply to a V-notch.

**Q2. SSC JE (Civil) 2024, 5 June, Shift 1.** During the calibration of a rectangular suppressed weir in a laboratory channel with a crest width of 40 cm, the discharge over the weir was measured volumetrically. What is the coefficient of discharge of the weir if it passes 0.025 m³/s under a head of 0.1 m? (a) 0.92 (b) 0.89 (c) 0.66 (d) 0.75

*Answer: (c) 0.66.*

1. For a suppressed weir there are no end contractions, so L = 0.4 m.
2. The flow formula without Cd gives (2/3) × 0.4 × √(2 × 10) × 0.1^1.5 = 0.0377 m³/s (with g = 10).
3. Cd = 0.025 ÷ 0.0377 = 0.66. With g = 9.81 it is 0.67, still nearest (c).

**The trap:** (a) and (b) are typical of a venturimeter or a nozzle, and someone who mixes up H^1.5 with H or √H can land near any option. A quick sense check rules them out: sharp-crested weirs have Cd near 0.6 to 0.65.

**Q3. UKPSC JE (Civil) 2013, Paper II.** Two small circular orifices of diameters d₁ and d₂ are placed on the side of a tank at depths of 25 cm and 1 m below a constant water surface. If the discharges through the orifices are the same, the ratio d₁/d₂ is (a) 1/2 (b) 1/√2 (c) 2 (d) √2

*Answer: (d) √2.*

1. Equal flows: Cd (πd₁²/4)√(2g × 0.25) = Cd (πd₂²/4)√(2g × 1).
2. So d₁²/d₂² = √(1/0.25) = √4 = 2.
3. d₁/d₂ = √2. The upper orifice, under less head, is the bigger one.

**The trap:** (c) stops at d₁²/d₂² = 2 and forgets the square root. (b) and (a) put the bigger orifice at the bottom, where the faster jet actually needs less area.

## 7. Viscous flow and flow through pipes

The traps here come from not checking whether the flow is laminar or turbulent. That decides how the pressure drop depends on speed, diameter and roughness.

### Going deeper

| Idea | What it means |
| --- | --- |
| Check Re first | In a pipe, Re below about 2000 is laminar and above about 4000 is turbulent. A Reynolds number in the question is there to tell you which formulas apply. |
| Laminar pipe profile | Parabolic: u = U\_max(1 − r²/R²). The average velocity is half the centre velocity. |
| Between parallel plates | Also parabolic, but the average is 2/3 of the centre velocity. |
| Turbulent profile | Much flatter. The average is about 0.8 to 0.85 of the centre velocity (0.817 for the 1/7 power law). |
| Hagen–Poiseuille | Δp = 32μLV/D² = 128μLQ/(πD⁴). At a fixed velocity Δp goes as 1/D²; at a fixed flow rate it goes as 1/D⁴, because the velocity also falls. |
| Friction factor | Laminar: f = 64/Re, whatever the roughness. Turbulent: f depends on Re and the relative roughness; in fully rough flow, on roughness alone. |
| Wall shear from a force balance | τw = ΔpD/(4L) for any steady, fully developed pipe flow, laminar or turbulent. The shear grows linearly from zero at the centre to τw at the wall. |
| Darcy–Weisbach in terms of Q | h\_f = fLQ²/(12.1D⁵). At a fixed flow and friction factor the loss goes as 1/D⁵. |
| Minor losses | Sudden expansion (V₁ − V₂)²/2g; exit V²/2g; sharp entrance 0.5V²/2g; sudden contraction about 0.5V₂²/2g. |
| Loss at a free outlet | The water leaves with its velocity head V²/2g, which is never turned back into pressure. It counts as the head lost at the outlet. |
| Series and parallel | In series the flow is the same and the losses add. In parallel the head loss is the same and the flows add. |
| Maximum power through a pipe | Reached when the friction loss is one third of the supply head; the efficiency is then 2/3. |

### Formulas worth adding

```math
\Delta p = \frac{128\,\mu L Q}{\pi D^4}
```

This is Hagen–Poiseuille at a fixed flow rate; a pipe 50% wider cuts the drop to 1/1.5⁴, about 0.2 of the old value.

```math
\tau_w = \frac{\Delta p\, D}{4L}
```

This is the wall shear from the force balance on the water in the pipe; it holds for laminar and turbulent flow.

```math
h_f = \frac{f L Q^2}{12.1\, D^5}
```

This is Darcy–Weisbach with the velocity replaced by the flow rate, using 8/(π²g) = 1/12.1.

```math
H = \frac{V^2}{2g} + h_{entry} + h_f
```

This is the energy balance for a tank emptying through a pipe into a free jet: the supply head H ends up as the jet's velocity head plus the pipe losses.

### Doubts cleared

**Doubt: Does a rough pipe have more friction in laminar flow?** No. In laminar flow f = 64/Re, and the roughness has no effect. It starts to matter only once the flow is turbulent.

**Doubt: My book writes h\_f = 4fLV²/(2gD). Is that a different f?** Yes. That f is the Fanning coefficient, a quarter of the Darcy f, so it is 16/Re in laminar flow. Check which form the options use.

**Doubt: Does τw = ΔpD/(4L) need laminar flow?** No. It comes from balancing pressure against wall shear on the water in a straight pipe. What changes with the flow type is how τw depends on the velocity.

**Doubt: Is the pressure drop proportional to V or V²?** In laminar flow to V, because f = 64/Re falls as V rises. In fully rough turbulent flow to V². In smooth turbulent flow to about V^1.75.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q29.** Velocity of flow through a circular pipe, measured at the centre, is found to be 2 m/s. If the Reynolds number is 1200, what is the average flow velocity in the pipe? (a) 2 m/s (b) 1.5 m/s (c) 1 m/s (d) 0.5 m/s

*Answer: (c) 1 m/s.*

1. Re = 1200 is below 2000, so the flow is laminar.
2. Laminar pipe flow has a parabolic profile, and its average is half the centre velocity.
3. Average velocity = 2 ÷ 2 = 1 m/s.

**The trap:** The Reynolds number looks like extra data, but it is the whole question. (a) treats the velocity as uniform across the pipe. (b) is nearer what a turbulent profile would give, about 0.8 × 2 = 1.6 m/s.

**Q2. Kerala PSC AE (Mechanical) 68/2026, Q33.** Water flows as a free jet from one end of a smooth horizontal pipe at a velocity of 9.81 m/s, while the other end of the pipe is connected to a tank. The height of water in the tank is 5 m above the centreline of the pipe. Calculate the loss of head at the free end of the pipe. (a) 19.62 m of water (b) 9.81 m of water (c) 4.905 m of water (d) 2.453 m of water

*Answer: (c) 4.905 m of water.*

1. At the free end the water leaves with its velocity head, which is never recovered. That is the loss at the free end.
2. V²/2g = 9.81² ÷ (2 × 9.81) = 9.81 ÷ 2 = 4.905 m.
3. Check: of the 5 m the tank supplies, only 5 − 4.905 = 0.095 m goes on entry and friction in the pipe.

**The trap:** The 5 m tank head is there to tempt you into subtracting something from it. The loss at the outlet depends only on the exit velocity. (b) forgets the 2 in 2g, and (a) is just the value of 2g.

**Q3. ESE Mechanical 2016, Paper 1.** Consider fully developed laminar flow in a circular pipe of a given length. 1. The friction factor is inversely proportional to the Reynolds number. 2. The pressure drop is proportional to the average velocity. 3. The friction factor is higher for a rough pipe. 4. The pressure drop is proportional to the square of the average velocity. Which of these statements are correct? (a) 1 and 4 (b) 3 and 4 (c) 2 and 3 (d) 1 and 2

*Answer: (d) 1 and 2.*

1. f = 64/Re, so the friction factor is inversely proportional to Re. Statement 1 is true.
2. Δp = 32μLV/D², so the drop is proportional to V. Statement 2 is true and statement 4 is false.
3. In laminar flow the roughness does not change f. Statement 3 is false.

**The trap:** (a) pairs the laminar f with the V² you see in Darcy–Weisbach. Put the two together: h\_f = fLV²/(2gD) with f = 64/Re, which falls as 1/V, leaves Δp proportional to V. The V² is cancelled down by the f.

**Q4. GATE ME 2013.** For steady, fully developed flow inside a straight pipe of diameter D, neglecting gravity effects, the pressure drop Δp over a length L and the wall shear stress τw are related by (a) τw = ΔpD/(4L) (b) τw = ΔpD²/(4L²) (c) τw = ΔpD/(2L) (d) τw = 4ΔpL/D

*Answer: (a) τw = ΔpD/(4L).*

1. Take the water in the pipe over the length L. The pressure force on it is Δp × πD²/4.
2. The wall shear on it is τw × πDL.
3. In steady, fully developed flow they balance, so τw = ΔpD/(4L).

**The trap:** The question does not say laminar or turbulent, which sends you looking for a Reynolds-number formula. None is needed: the balance holds for both. (c) mixes up the radius and the diameter, since τw = ΔpR/(2L) is the same answer written with R.

**Q5. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2.** Water flows through a horizontal pipe of constant diameter and the flow is laminar. If the diameter of the pipe is increased by 50% while the flow rate is kept the same, the frictional pressure drop decreases by (a) 33% (b) 50% (c) 70% (d) 80%

*Answer: (d) 80%.*

1. At a fixed flow rate, Δp = 128μLQ/(πD⁴), so Δp goes as 1/D⁴.
2. New drop = old drop ÷ 1.5⁴ = old drop ÷ 5.06 = 0.198 × old drop.
3. The decrease is 1 − 0.198 = 0.80, or 80%.

**The trap:** The 1/D² in Δp = 32μLV/D² holds only at a fixed velocity. Here the velocity also falls, by 1.5², which makes it 1/D⁴. (a) and (c) are what 1/D and 1/D³ would give.

## 8. Dimensional analysis, boundary layer and drag

The traps here are the boundary-layer numbers that look alike: local or average, thickness or momentum thickness, and powers of x hidden inside the Reynolds number.

### Going deeper

| Idea | What it means |
| --- | --- |
| Buckingham π | With n variables and m fundamental dimensions there are n − m dimensionless groups. |
| Repeating variables | Together they must contain every fundamental dimension without forming a group of their own. Usually a length, a velocity and a density. |
| Which model law | Froude for free-surface flow (ships, spillways, open channels). Reynolds for pipes and fully submerged bodies. Mach for compressible flow. Weber where surface tension matters. |
| Froude scale ratios | Velocity and time go as √L\_r, flow rate as L\_r^2.5, force as L\_r³, power as L\_r^3.5. |
| Blasius laminar layer | δ = 5x/√Re\_x; τw = 0.332ρU²/√Re\_x; local Cf = 0.664/√Re\_x; average drag coefficient 1.328/√Re\_L. |
| Powers of x | Re\_x contains x. So laminar δ goes as x^(1/2) and turbulent δ = 0.37x/Re\_x^(1/5) goes as x^(4/5). |
| Drag along a plate | In a laminar layer τw goes as 1/√x, so the drag from the leading edge up to x goes as √x. The front of the plate, where the layer is thin, carries the most drag per metre. |
| The thicknesses | Displacement δ\* = ∫(1 − u/U)dy; momentum θ = ∫(u/U)(1 − u/U)dy. Always δ > δ\* > θ. The shape factor δ\*/θ is 2.59 for Blasius and about 1.3 for turbulent layers. |
| Separation | Needs an adverse pressure gradient. It begins where the velocity gradient at the wall falls to zero. |
| Friction and pressure drag | A streamlined body has mostly skin friction drag; a bluff body mostly pressure (form) drag from its wake. |
| Drag crisis | Near Re ≈ 3 × 10⁵ the layer on a sphere turns turbulent, separates later, the wake narrows and the drag drops sharply. |
| Stokes' law | For Re below about 1, drag on a sphere is 3πμDV and C\_D = 24/Re. |

### Formulas worth adding

```math
\frac{\delta}{x} = \frac{5}{\sqrt{Re_x}}
```

This is the laminar thickness; since Re\_x contains x, δ grows as √x.

```math
C_f = \frac{0.664}{\sqrt{Re_x}}
```

This is the local skin friction coefficient at a distance x from the leading edge.

```math
\bar{C}_D = \frac{1.328}{\sqrt{Re_L}}
```

This is the average over a plate of length L, twice the local value at its trailing edge.

```math
\theta = \int_0^\delta \frac{u}{U}\left(1 - \frac{u}{U}\right) dy
```

This is the momentum thickness; with η = y/δ it becomes δ times an integral from 0 to 1.

```math
P_r = L_r^{3.5}
```

This is the power scale ratio between model and prototype under Froude similarity.

### Doubts cleared

**Doubt: Is the Blasius number 0.332, 0.664 or 1.328?** All three, for different things. 0.332 is in τw = 0.332ρU²/√Re\_x. Dividing by ½ρU² gives the local Cf, 0.664/√Re\_x. Averaging over the plate doubles it to 1.328/√Re\_L.

**Doubt: Is the turbulent thickness proportional to x^(1/5)?** No, to x^(4/5). The 1/5 power is on Re\_x, and Re\_x = Ux/ν contains x, so δ goes as x × x^(−1/5).

**Doubt: Why is the drag per metre highest at the leading edge?** The boundary layer is thinnest there, so the velocity rises from zero to U over a very short distance and the wall shear is largest.

**Doubt: Which model law for a ship?** Froude, because wave resistance controls it. Froude and Reynolds numbers cannot both be matched with water in the model, so the friction drag is corrected separately.

### Tricky past questions with solutions

**Q1. GATE ME 2007.** Consider an incompressible laminar boundary layer flow over a flat plate of length L, aligned with the direction of an incoming uniform free stream. If F is the ratio of the drag force on the front half of the plate to the drag force on the rear half, then (a) F < 1/2 (b) F = 1/2 (c) F = 1 (d) F > 1

*Answer: (d) F > 1.*

1. In a laminar layer τw goes as 1/√x, so the drag from the leading edge up to x goes as √x.
2. Front half: √(L/2) = 0.707√L. Whole plate: √L. Rear half: √L − 0.707√L = 0.293√L.
3. F = 0.707 ÷ 0.293 = 2.41, which is more than 1.

**The trap:** (c) assumes the shear is the same all along the plate. The thicker layer over the rear half has a gentler velocity gradient at the wall, so the rear half carries less drag.

**Q2. ESE Mechanical 2015, Paper 1.** Consider the following statements about the boundary layer on a flat plate. 1. The thickness of a laminar boundary layer varies as x^(1/2). 2. The thickness of a turbulent boundary layer varies as x^(4/5). 3. The boundary layer is laminar where the Reynolds number Re\_x is below 5 × 10⁵. Which of these statements are correct? (a) 1, 2 and 3 (b) 1 and 2 only (c) 1 and 3 only (d) 2 and 3 only

*Answer: (a) 1, 2 and 3.*

1. Laminar: δ = 5x(Ux/ν)^(−1/2), which goes as x^(1/2). Statement 1 is true.
2. Turbulent: δ = 0.37x(Ux/ν)^(−1/5), which goes as x^(4/5). Statement 2 is true.
3. On a flat plate, transition is taken at Re\_x of about 5 × 10⁵. Statement 3 is true.

**The trap:** Statement 2 looks wrong if you remember the 1/5 in the turbulent formula and forget that Re\_x contains x. (c) is the choice of someone who reads δ as going with x^(1/5).

**Q3. ESE Mechanical 2015, Paper 1.** What is the ratio of the momentum thickness to the boundary layer thickness for the velocity profile u/U = (y/δ)^(1/2)? (a) 0.133 (b) 0.333 (c) 0.166 (d) 0.136

*Answer: (c) 0.166.*

1. Put η = y/δ, so u/U = η^(1/2).
2. θ/δ = ∫ from 0 to 1 of η^(1/2)(1 − η^(1/2)) dη = ∫ from 0 to 1 of (η^(1/2) − η) dη.
3. That is 2/3 − 1/2 = 1/6 = 0.166.

**The trap:** (b) is the displacement thickness for this profile, ∫(1 − η^(1/2))dη = 1/3. (a) is the momentum thickness of the parabolic profile 2η − η², a common textbook example.

**Q4. UPPSC AE Mechanical 2022, Paper II.** According to the Blasius solution, the local skin friction coefficient for laminar flow over a flat plate is (a) 1.328/√Re\_x (b) 0.664/Re\_x^(4/5) (c) 0.664/√Re\_x (d) 0.332/√Re\_x

*Answer: (c) 0.664/√Re\_x.*

1. Blasius gives the wall shear as τw = 0.332ρU²/√Re\_x.
2. The skin friction coefficient is τw ÷ ½ρU² = 0.664/√Re\_x.

**The trap:** (a) is the average coefficient for a whole plate, twice the local value at its end. (d) is τw ÷ ρU², without the ½. (b) borrows an exponent from turbulent flow.

## 9. Impact of jets and hydraulic turbines

The traps here are force mistaken for power, the angle measured from the wrong line, and scaling laws applied with the wrong power.

### Going deeper

| Idea | What it means |
| --- | --- |
| Jet on a fixed plate normal to it | F = ρaV². The plate does not move, so the jet does no work on it. |
| Fixed inclined plate | Normal force ρaV² sin θ, where θ is the angle between the jet and the plate. The flow splits into Q(1 + cos θ)/2 and Q(1 − cos θ)/2. |
| One moving plate or a wheel of them | A single plate moving away only receives a(V − u) of water per second, so F = ρa(V − u)². On a wheel a fresh bucket always meets the jet, so F = ρaV(V − u). |
| Best efficiencies | Single flat plate: 8/27 at u = V/3. Wheel of flat plates: 1/2 at u = V/2. Wheel of cups turning the water through 180°: ideally 1 at u = V/2. |
| Pelton force | ρQ(V − u)(1 + k cos φ), where φ is the outlet blade angle, 180° minus the deflection, and k the friction factor on the bucket. |
| Net head | For an impulse turbine, the gross head minus the penstock losses. For a reaction turbine, the total head at the entrance minus the tail water level and the velocity head at the draft-tube exit. |
| Efficiencies | Hydraulic: runner power ÷ ρgQH. Mechanical: shaft power ÷ runner power. Overall: their product, times the volumetric efficiency where it is counted. |
| Unit quantities | For one turbine at different heads: N goes as √H, Q as √H and P as H^1.5. |
| Specific speed | N\_s = N√P/H^(5/4) with P in kW. Low for Pelton wheels, medium for Francis, high for Kaplan and propeller turbines. |
| Speed ratio of a Pelton wheel | u/√(2gH) is about 0.43 to 0.47, close to the ideal 0.5. |
| Why a draft tube | It lets a reaction turbine sit above the tail water without losing that height, and it turns part of the exit kinetic energy back into pressure. |

### Formulas worth adding

```math
P = \rho Q (V - u)(1 + \cos\phi)\, u
```

This is the ideal Pelton power, with φ the outlet angle, 180° minus the deflection.

```math
Q_1 = \frac{Q(1 + \cos\theta)}{2}
```

This is the larger part of the flow after a jet hits a fixed inclined plate, with θ the angle between the jet and the plate.

```math
\frac{P_1}{P_2} = \left(\frac{N_1}{N_2}\right)^3
```

This is for one turbine at different heads: N goes as √H and P as H^1.5, so P goes as N³.

```math
N_s = \frac{N\sqrt{P}}{H^{5/4}}
```

This is the specific speed, used to pick the type of turbine for a site.

### Doubts cleared

**Doubt: How much work does a jet do on a fixed plate?** None. It pushes with a force, but the plate does not move, and work needs movement.

**Doubt: Angle with the plate or with the normal?** The split formula Q(1 ± cos θ)/2 uses the angle between the jet and the plate. If the question gives the angle to the normal, use 90° minus it.

**Doubt: Deflection angle or outlet angle?** A deflection of 165° means an outlet angle of 15°. The factor 1 + cos φ is the same as 1 − cos of the deflection.

**Doubt: Does a larger head always need a different turbine?** Not in a scaling question. When the question says the same turbine, D is fixed and the unit-quantity rules apply.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 68/2026, Q34.** Water flowing through a pipe moves out through a nozzle at a velocity of 40 m/s. The cross-sectional area of the nozzle is 0.005 m². The work done per second by the jet on a fixed flat plate is (a) 8 kW (b) 160 kW (c) 320 kW (d) None of the above

*Answer: (d) None of the above.*

1. The force on the plate is ρaV² = 1000 × 0.005 × 40² = 8000 N.
2. The plate is fixed, so it does not move. Work done per second = force × velocity of the plate = 8000 × 0 = 0.
3. Zero is not among (a) to (c), so the answer is (d).

**The trap:** Every other option is a real number from the same jet. (a) is the 8 kN force written as kW. (b) is the kinetic energy the jet carries per second, ½ρaV³ = 160 kW. (c) is ρaV³ = 320 kW, the force times the jet velocity.

**Q2. Kerala PSC AE (Mechanical, Ports) 65/2026, Q12.** In a hydraulic power plant with a reaction turbine, the net head is the difference between (a) (i) the sum of the pressure head, velocity head and elevation of the centre of the penstock above the datum at the entrance of the turbine and (ii) the velocity head in the draft tube at its exit (b) (i) the sum of the pressure head, velocity head and elevation of the centre of the penstock above the datum at the entrance of the turbine and (ii) the elevation of the tail water plus the velocity head in the draft tube at its exit (c) (i) the sum of the pressure head and elevation of the centre of the penstock above the datum at the entrance of the turbine and (ii) the velocity head in the draft tube at its exit (d) (i) the sum of the pressure head and elevation of the centre of the penstock above the datum at the entrance of the turbine and (ii) the elevation of the tail water plus the velocity head in the draft tube at its exit

*Answer: (b).*

1. Net head is the energy the water brings into the turbine minus the energy it still has when it leaves.
2. At the entrance that energy is the full total head: pressure head + velocity head + elevation. This rules out (c) and (d), which drop the velocity head.
3. At the draft-tube exit the water is at the tail water level and still moving, so it keeps the tail water elevation plus the exit velocity head. That is (b); (a) leaves out the tail water elevation.

**The trap:** The four options differ by one term each, so read them side by side rather than one at a time. Each wrong option drops one real piece of energy.

**Q3. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2.** A hydraulic turbine works at two different heads, and its speeds are in the ratio N₁ : N₂ = 3 : 1. The ratio of the powers P₁ : P₂ is (a) 9 : 1 (b) 243 : 1 (c) 3 : 1 (d) 27 : 1

*Answer: (d) 27 : 1.*

1. For the same turbine, N goes as √H, so H₁/H₂ = 3² = 9.
2. P goes as H^1.5, so P₁/P₂ = 9^1.5 = 27.
3. In one step: P goes as N³, and 3³ = 27.

**The trap:** (a) is the head ratio, the first step, not the answer. (b) is 3⁵, which comes from wrongly putting the speed ratio into the D⁵ of the full affinity law P ∝ N³D⁵. The turbine is the same, so D does not change.

**Q4. ESE Civil 2014, Paper 2.** A two-dimensional water jet strikes a fixed two-dimensional plate at 30° to the normal of the plate. The ratio of the larger to the smaller discharge after impact is (a) 14.0 (b) 3.0 (c) 2.0 (d) 1.0

*Answer: (b) 3.0.*

1. The jet is 30° from the normal, so the angle between the jet and the plate is θ = 60°.
2. The flows split as (1 + cos θ)/2 and (1 − cos θ)/2 of the jet.
3. Ratio = (1 + 0.5)/(1 − 0.5) = 3.0.

**The trap:** (a) puts 30° straight into the formula: (1 + 0.866)/(1 − 0.866) = 13.9. The question deliberately gives the angle to the normal, not to the plate.

**Q5. VIZAG MT Mechanical 2013.** In a Pelton wheel the bucket peripheral speed is 10 m/s, the water jet velocity is 25 m/s and the volume flow rate of the jet is 0.1 m³/s. If the jet deflection angle is 120° and the flow is ideal, the power developed is (a) 7.5 kW (b) 15.0 kW (c) 22.5 kW (d) 37.5 kW

*Answer: (c) 22.5 kW.*

1. A deflection of 120° means the outlet angle is φ = 180° − 120° = 60°, so 1 + cos φ = 1.5.
2. The velocity of the jet relative to the bucket is 25 − 10 = 15 m/s.
3. P = ρQ(V − u)(1 + cos φ)u = 1000 × 0.1 × 15 × 1.5 × 10 = 22 500 W = 22.5 kW.

**The trap:** (a) puts the 120° deflection straight in as φ, giving 1 + cos 120° = 0.5. (d) uses the jet velocity 25 m/s instead of the relative velocity 15 m/s. (b) is what a flat bucket turning the water through 90° would give.

## 10. Pumps

The traps here are averages taken over the wrong thing, gauge and absolute pressure, and efficiencies that are multiplied together rather than added.

### Going deeper

| Idea | What it means |
| --- | --- |
| Manometric head | The head a centrifugal pump must produce: the static lift plus the friction losses in the suction and delivery pipes plus the delivery velocity head. |
| Efficiencies | Manometric (hydraulic), mechanical and volumetric. The overall efficiency is their product, never their sum. |
| Minimum starting speed | A centrifugal pump delivers only once its centrifugal head (u₂² − u₁²)/2g reaches the manometric head. |
| Affinity laws | Q goes as ND³, H as N²D² and P as N³D⁵. For one pump D is fixed. |
| Series and parallel | Pumps in series add head at the same flow. Pumps in parallel add flow at the same head. |
| Priming | Air is about 800 times lighter than water, so an impeller full of air makes far too little pressure to lift water. The casing must be filled first. |
| Cavitation | Starts where the local pressure falls to the vapour pressure. The available NPSH must stay above the NPSH the pump requires. |
| Reciprocating pump discharge | Q = ALN/60 for single acting and about 2ALN/60 for double acting. Slip is the shortfall from that; it can go negative with a long suction pipe, a short delivery pipe and high speed. |
| Acceleration head | Goes as cos θ: largest at the ends of the stroke, zero at mid-stroke. Separation is most likely at the start of the suction stroke. |
| Friction head | Goes as sin²θ: zero at the ends of the stroke, largest at mid-stroke. |
| What an air vessel does | Placed close to the cylinder, it lets the pipe beyond it carry a nearly steady flow, which cuts the acceleration head and the friction loss in that pipe. |

### Formulas worth adding

```math
h_a = \frac{l}{g}\,\frac{A}{a}\,\omega^2 r \cos\theta
```

This is the acceleration head in a pipe of length l and area a, for a piston of area A and crank radius r.

```math
h_f = \frac{f\, l}{2 g d}\left(\frac{A}{a}\,\omega r \sin\theta\right)^2
```

This is the friction head in the same pipe, with the Darcy f; the bracket is the water's velocity in the pipe.

```math
\sigma = \frac{H_{atm} - H_v - H_s - h_{fs}}{H}
```

This is Thoma's cavitation number, with H\_s the suction lift and h\_fs the suction pipe loss.

```math
\eta_o = \eta_v\, \eta_m
```

This is the usual split of the overall efficiency of a positive displacement pump.

```math
N_s = \frac{N\sqrt{Q}}{H^{3/4}}
```

This is the specific speed of a pump, which uses the flow rate where a turbine's uses the power.

### Doubts cleared

**Doubt: Is the average friction head half the maximum or two thirds?** Averaged over time, sin²θ gives one half. Averaged over the piston's stroke, as on the indicator diagram, it gives two thirds. Pump questions use the indicator diagram, so the answer is 2/3.

**Doubt: How can a liquid boil without being heated?** A liquid boils when its pressure falls to its vapour pressure at that temperature. Cavitation is that boiling, followed by the bubbles collapsing where the pressure rises again.

**Doubt: Gauge or absolute?** A pressure gauge reads above the atmosphere. When the question asks for absolute pressure, add about 10.3 m of water, or 1.013 bar.

**Doubt: Do you add efficiencies?** No. Each one is a fraction of what the previous stage passed on, so they multiply.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q36.** In a single-acting reciprocating pump without an air vessel, the ratio of the average friction head to the maximum friction head in the suction or delivery pipe is (a) 1/3 (b) 1/2 (c) 1/4 (d) 2/3

*Answer: (d) 2/3.*

1. The water in the pipe moves at (A/a)ωr sin θ, so the friction head goes as sin²θ: zero at the ends of the stroke and largest at mid-stroke.
2. The piston position is x = r(1 − cos θ). In terms of x, sin²θ = 1 − (1 − x/r)², a parabola over the stroke with its peak at mid-stroke.
3. The average height of a parabola over its base is 2/3 of its peak. That is how the friction work is read from the indicator diagram.

**The trap:** (b) is the average of sin²θ over time, which is also a real average. Pump textbooks average over the piston's stroke, as the indicator diagram does, and the answer key follows them.

**Q2. GATE ME 2015 (Shift 3).** Which of the following statements are true when the cavitation parameter σ = 0? (i) The local pressure is reduced to the vapour pressure. (ii) Cavitation starts. (iii) Boiling of the liquid starts. (iv) Cavitation stops. (a) (i), (ii) and (iv) (b) only (ii) and (iii) (c) only (i) and (iii) (d) (i), (ii) and (iii)

*Answer: (d) (i), (ii) and (iii).*

1. σ = (p − p\_v)/(½ρV²). It is zero when the local pressure p equals the vapour pressure p\_v. (i) is true.
2. At vapour pressure the liquid starts turning into vapour, which is boiling at that temperature. (iii) is true.
3. Those vapour bubbles are the start of cavitation. (ii) is true and (iv) is false.

**The trap:** "Boiling" sounds wrong because nothing is heated, so many people drop (iii). Boiling depends on pressure as much as on temperature.

**Q3. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2.** Which of the following is not a correct statement for a reciprocating pump? (a) The flow from a reciprocating pump may be evened out by employing properly phased multicylinder units or by fitting air vessels close to the cylinder (b) The percentage of power saved by fitting an air vessel is more in a double-acting pump than in a single-acting pump (c) The reciprocating pump is essentially a low-speed machine, and its speed is limited by considerations of flow separation (d) Reciprocating pumps can handle only low-viscosity liquids free from impurities

*Answer: (b).*

1. An air vessel saves the friction work that the uneven flow wastes in the pipe.
2. A single-acting pump delivers on one stroke only, so its flow is very uneven, and an air vessel saves about 84.8% of the friction work.
3. A double-acting pump delivers on both strokes, so its flow is already steadier and the saving is only about 39.2%. The saving is more for the single-acting pump, so (b) is wrong.

**The trap:** "Double acting" sounds like the better machine, so a bigger saving for it sounds right. The saving is bigger where there is more unevenness to remove. (a), (c) and (d) are all lines from the textbook account of reciprocating pumps.

**Q4. UPRVUNL AE Mechanical 2014.** A centrifugal pump forces water through a pipe of 0.2 m diameter and 4 km length into an open tank. The velocity in the pipe is 2 m/s and the friction factor is 0.01. The water level in the tank is kept 5 m above the pump outlet. Neglecting minor losses, the absolute pressure at the pump discharge is (a) 0.449 bar (b) 5.503 bar (c) 44.911 bar (d) 55.203 bar

*Answer: (b) 5.503 bar.*

1. Friction loss: h\_f = fLV²/(2gD) = 0.01 × 4000 × 2² ÷ (2 × 9.81 × 0.2) = 40.77 m.
2. The velocity head at the pump outlet is the same one the water loses when it enters the tank, so the two cancel.
3. Absolute pressure head at the pump = 10.33 (atmosphere) + 5 + 40.77 = 56.10 m of water.
4. Pressure = 56.10 × 9810 = 550 300 Pa = 5.503 bar.

**The trap:** The question asks for absolute pressure, so the atmosphere must be added. Without it the answer is the gauge pressure, 45.77 m or about 4.49 bar, and (a) and (c) are that value with the decimal point in the wrong place.

**Q5. RRB JE CBT-2 (Mechanical) 2019, 30 August, Shift 1.** A positive displacement pump has an overall efficiency of 88% and a volumetric efficiency of 92%. What is its mechanical efficiency? (a) 95.65% (b) 4.34% (c) 88% (d) 40%

*Answer: (a) 95.65%.*

1. For a positive displacement pump, overall efficiency = volumetric efficiency × mechanical efficiency.
2. Mechanical efficiency = 0.88 ÷ 0.92 = 0.9565, or 95.65%.

**The trap:** (b) is the 4.35% that is lost, not the efficiency. (c) takes the overall efficiency as the mechanical one. A mechanical efficiency higher than the overall one is expected, since the overall efficiency includes every loss.

## Sources

Of the 41 past questions, 6 are from GATE ME, 4 from ESE (3 Mechanical and 1 Civil), 8 from Kerala PSC AE papers and 23 from other AE, JE, lecturer, PSU and entrance exams. None of them appears in Level 1. The Kerala PSC questions come from the official question booklets (version A), with answers from the commission's final keys. They are listed by paper and question number. The rest were checked on their Testbook question pages, which name the paper each was asked in. Where Testbook does not name the year, it comes from ExamSIDE's GATE archive. Every answer was worked out again for this guide.

- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 65/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- **1. Fluid properties:** Q1 Kerala PSC 68/2026 Q25, [Q2 MPSC AE 2020](https://testbook.com/question-answer/the-following-results-are-obtained-on-shear-stress--62dcc4994984aaec55ae6013), [Q3 TS EAMCET 2025](https://testbook.com/question-answer/the-maximum-length-of-water-column-that-can-stay-w--697341dc89351cf66224a1cc)
- **2. Pressure and its measurement:** [Q1 TN TRB 2017](https://testbook.com/question-answer/it-is-required-to-find-the-pressure-difference-bet--5f330772d94e610d141304c1), [Q2 RPSC Lecturer 2020](https://testbook.com/question-answer/what-is-the-approximate-height-of-a-mountain-if-ba--62836e1092ce00b5f58d2e26), [Q3 AAI Junior Executive 2021](https://testbook.com/question-answer/a-tank-with-a-square-base-of-area-1-0-m2-is-divide--628e50c65e8b9a81571925d1)
- **3. Hydrostatic forces, buoyancy and floatation:** Q1 Kerala PSC 104/2025 Q26, [Q2 GATE 2016](https://testbook.com/question-answer/consider-a-frictionless-massless-and-leak-proof-p--5e0b527fcaaf4e71c8050af8), [Q3 SSC JE 2019](https://testbook.com/question-answer/a-vertical-triangular-plane-area-submerged-in-wat--59018454995a2d5e543b15e6), [Q4 SSC JE 2017](https://testbook.com/question-answer/as-the-depth-of-immersion-of-a-vertical-plane-surf--5e73b5edf60d5d1ae1047428)
- **4. Fluid kinematics:** [Q1 GATE 2007](https://questions.examside.com/past-years/gate/question/which-combination-of-the-following-statements-about-steady-i-gate-me-2007-marks-2-pbt8dmjj5qyjkoam.htm) ([Testbook](https://testbook.com/question-answer/which-combination-of-the-following-statements-abou--565429ff0328213d4a8bd913)), [Q2 AAI JE 2018](https://testbook.com/question-answer/the-equation-of-streamline-passing-through-1-1--6055e85b139b8ac5ab689a40), [Q3 DFCCIL Executive 2021](https://testbook.com/question-answer/which-of-the-following-statements-are-correct-for--616683bffdb77cebe3691333), [Q4 SSC JE 2017](https://testbook.com/question-answer/for-the-continuity-equation-given-by-vec-nabla--5655740a995a2d521ff00259)
- **5. Fluid dynamics: Bernoulli and flow measurement:** Q1 Kerala PSC 65/2026 Q4, [Q2 GATE 2013](https://testbook.com/question-answer/water-is-coming-out-from-a-tap-and-falls-verticall--565bfcf503282114ca1d1d65), [Q3 ISRO Scientist 2013](https://testbook.com/question-answer/consider-steady-incompressible-and-irrotational-f--565fed8e995a2d0c5d5062ed), [Q4 RPSC Lecturer 2020](https://testbook.com/question-answer/a-prandtl-tube-pitot-static-tube-with-cv-1-is--6282064da602a124b421542d), [Q5 DSSSB JE 2019](https://testbook.com/question-answer/a-liquid-of-specific-gravity-0-68-is-flowing-throu--60af34220d4b395c03ba91ab)
- **6. Orifices, mouthpieces and notches:** [Q1 SSC JE 2020](https://testbook.com/question-answer/which-of-the-following-is-false-regarding-triangul--601b9bc7ec3c92a54d465625), [Q2 SSC JE 2024](https://testbook.com/question-answer/during-the-calibration-of-a-rectangular-suppressed--666d7d411dcfeb42c306f0ae), [Q3 UKPSC JE 2013](https://testbook.com/question-answer/two-small-circular-orifice-of-diameters-d1-and-d2--602e072eeae1e9f32eeb6494)
- **7. Viscous flow and flow through pipes:** Q1 Kerala PSC 104/2025 Q29, Q2 Kerala PSC 68/2026 Q33, [Q3 ESE 2016](https://testbook.com/question-answer/consider-fully-developed-laminar-flow-in-a-circula--5eb05128f60d5d76bf3a4e46), [Q4 GATE 2013](https://testbook.com/question-answer/for-steady-fully-developed-flow-inside-a-straight--5659b94e995a2d13ea420fa7), [Q5 RPSC Lecturer 2020](https://testbook.com/question-answer/water-is-flowing-through-a-horizontal-pipe-of-cons--624fca35f26f7b817581e432)
- **8. Dimensional analysis, boundary layer and drag:** [Q1 GATE 2007](https://questions.examside.com/past-years/gate/question/consider-an-incompressible-laminar-boundary-layer-flow-over-gate-me-2007-marks-1-snwiunxao0l3tnls.htm) ([Testbook](https://testbook.com/question-answer/consider-an-incompressible-laminar-boundary-layer--56540d65995a2d1b8a9882a8)), [Q2 ESE 2015](https://testbook.com/question-answer/consider-the-following-statements-pertaining-to-bo--5e8f378ad965cb0d28cf4cdd), [Q3 ESE 2015](https://testbook.com/question-answer/what-is-the-ratio-of-momentum-thickness-to-the-bou--5e8ca2bba193560d2947d155), [Q4 UPPSC AE 2022](https://testbook.com/question-answer/according-to-blasius-solution-the-local-skin-frict--629a08105200fa279ab95127)
- **9. Impact of jets and hydraulic turbines:** Q1 Kerala PSC 68/2026 Q34, Q2 Kerala PSC 65/2026 Q12, [Q3 RPSC Lecturer 2020](https://testbook.com/question-answer/for-a-hydraulic-turbine-operating-at-two-different--62836d0892ce00b5f58d145d), [Q4 ESE Civil 2014](https://testbook.com/question-answer/a-two-dimensional-water-jet-strikes-a-fixed-two-di--5f324d1a4751fe0d190f859b), [Q5 VIZAG MT 2013](https://testbook.com/question-answer/in-a-pelton-wheel-the-bucket-peripheral-speed-is--56570140995a2d13ea3d8b1e)
- **10. Pumps:** Q1 Kerala PSC 104/2025 Q36, [Q2 GATE 2015](https://testbook.com/question-answer/which-of-the-following-statements-are-true-when-t--56599c88995a2d13ea41be4b), [Q3 RPSC Lecturer 2020](https://testbook.com/question-answer/which-of-the-following-is-not-a-correct-statement--62591390f61203a6404e4de5), [Q4 UPRVUNL AE 2014](https://testbook.com/question-answer/a-centrifugal-hydraulic-pump-is-used-to-force-wate--5e818cc1f60d5d3e0603fccc), [Q5 RRB JE 2019](https://testbook.com/question-answer/a-positive-displacement-pump-has-an-overall-effici--62201cb5861758e6998befc9)
- Wording changes: all options are lettered (a) to (d) here, instead of A to D in the Kerala PSC papers and 1 to 4 on Testbook. Where a question came with a figure, the figure is described in words. Questions are lightly edited for grammar; their data, options and answers are unchanged. The keys of 4 Q4 and 10 Q1 are discussed in their solutions.
