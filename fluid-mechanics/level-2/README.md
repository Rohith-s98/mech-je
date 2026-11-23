# Fluid Mechanics & Machines Level 2: Theory Deep Dive

Nov 23, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the formula lists and past questions are.

Conventions used throughout:

- Units are SI. Take g = 9.81 m/s², the density of water as 1000 kg/m³ and the specific gravity of mercury as 13.6, unless a question gives other values.
- A head is a height of the flowing liquid in metres. A pressure is a gauge pressure unless it is called absolute.
- Turbine specific speed uses N in rpm, P in kW and H in m. Pump specific speed uses N in rpm, Q in m³/s and H in m.
- Topics 1 to 3 are fluids at rest. Topics 4 to 8 are fluids in motion. Topics 9 and 10 are the machines that take energy out of a flow or put it in.

## 1. Fluid properties

A fluid's properties say how it resists being slid, squeezed and stretched. Viscosity resists sliding, the bulk modulus resists squeezing, surface tension resists stretching a surface, and vapour pressure sets the pressure at which the liquid boils without being heated. Exam setters twist the units of viscosity, the way it changes with temperature, the kinds of non-Newtonian fluid and the capillary formula.

### The picture

Put a pack of playing cards on a table and push the top card sideways with your palm. The cards slide over one another, and each card drags the one below it a little. If the cards were coated with honey, you would have to push much harder to slide them at the same speed.

A flowing fluid is that pack with infinitely thin cards. The drag between layers is the shear stress τ. How fast one layer slides past the next, per unit thickness, is the velocity gradient du/dy. Viscosity is the honey: the stickiness that links the two. For water, double the push and the layers slide twice as fast; that straight-line rule is what makes a fluid Newtonian.

Now think of ketchup. It sits in the bottle until you shake it hard, then it pours. Its stickiness falls the faster it is sheared. That is a non-Newtonian fluid, and the different ways fluids break the straight-line rule are a favourite exam topic.

### Twisted points

**A fluid at rest cannot carry a shear stress; a solid can.** Shear a block of rubber and it twists through a fixed angle, then holds. Its stress depends on how far it has deformed. Shear a fluid and it keeps deforming for as long as the stress acts; its stress depends on how fast it deforms. So a fluid at rest has no shear stress anywhere, only pressure acting at right angles to every surface. Topics 2 and 3 rest on this.

**Heat thins a liquid but thickens a gas.** In a liquid the molecules are packed close, and viscosity comes from cohesion between them. Heating loosens that grip, so engine oil runs thin when hot. In a gas the molecules are far apart, and viscosity comes from molecules carrying momentum from one layer to the next as they wander. Heating makes them move faster, so a hot gas is more viscous.

**Dynamic and kinematic viscosity are different quantities.** Dynamic viscosity μ links stress to velocity gradient. Its SI unit is N·s/m² = Pa·s = kg/(m·s), its dimensions are ML⁻¹T⁻¹, and its CGS unit is the poise (1 poise = 0.1 Pa·s). Water at 20 °C has about 1 centipoise, or 1 mPa·s. Kinematic viscosity ν = μ/ρ has units of m²/s and dimensions L²T⁻¹. Its CGS unit is the stoke, 1 cm²/s = 10⁻⁴ m²/s, and water has about 1 centistoke. The Reynolds number uses ν.

**The rheology diagram sorts fluids by the shape of the τ–du/dy curve.**

- **Newtonian:** a straight line through the origin, whose slope is μ. Water, air, petrol, thin oils.
- **Pseudo-plastic (shear-thinning):** a curve that bends towards the du/dy axis. Blood, milk, paint, polymer solutions, paper pulp, clay slurry.
- **Dilatant (shear-thickening):** a curve that bends towards the τ axis. Starch in water, quicksand, some sugar solutions.
- **Bingham (ideal) plastic:** a straight line that starts at a yield stress on the τ axis. Toothpaste, drilling mud, sewage sludge.
- **Ideal fluid:** the du/dy axis itself, since τ is always zero.
- **Elastic solid:** the τ axis, since it carries stress without flowing.
- **Time-dependent fluids:** thixotropic fluids thin the longer they are sheared (printer's ink); rheopectic fluids thicken (gypsum paste).

**An ideal fluid is not a Newtonian fluid.** An ideal fluid has no viscosity at all and cannot be compressed; it is imagined, to make the theory simple, and Bernoulli's equation is exact only for it. A Newtonian fluid is real and has viscosity, but a constant one. A perfect gas, which obeys pv = RT, is another idea again.

**The bulk modulus measures how hard a fluid is to squeeze.** K = −dp/(dV/V). For water K is about 2.1 GPa, so cutting its volume by just 1% takes about 21 MPa (210 bar). That is why liquids are treated as incompressible, except in water hammer (Topic 7). For a gas, K = p in an isothermal process and K = γp in an adiabatic one. The speed of sound is √(K/ρ): about 1450 m/s in water and 340 m/s in air. Compressibility is 1/K.

**Surface tension comes from cohesion at a surface.** A molecule deep inside a liquid is pulled equally on all sides. A molecule at the surface is pulled only inward and sideways, so the surface acts like a stretched skin. Surface tension is in N/m (force per unit length), which is the same as J/m² (energy per unit area). It falls as temperature rises and vanishes at the critical point. Soap and detergent lower it, which is how they wet and clean.

**Count the surfaces before you write the excess pressure.** Cut a drop in half: the excess pressure on the cut face, Δp × πd²/4, balances the surface pull round the rim, σ × πd. So Δp = 4σ/d. An air bubble inside water also has one surface, so 4σ/d. A soap bubble in air has two surfaces, inner and outer, so 8σ/d. A cylindrical jet balances Δp × dL against σ × 2L, so Δp = 2σ/d. In every case, the smaller the drop, the larger the pressure inside.

**Capillarity depends on whether the liquid wets the wall.** If adhesion beats cohesion, the contact angle θ is below 90°, the meniscus is concave and the liquid rises: water on clean glass, θ ≈ 0°. If cohesion wins, θ is above 90°, the meniscus is convex and the liquid is pushed down: mercury on glass, θ about 130°. In h = 4σcosθ/(ρgd), cosθ is negative for mercury, so h comes out negative. Halve the diameter and the rise doubles. If the tube is shorter than h, the liquid does not spill over; its meniscus simply flattens.

**A liquid boils whenever the pressure falls to its vapour pressure.** Water's vapour pressure is 101.3 kPa at 100 °C, which is why it boils there at sea level. At 20 °C it is only about 2.3 kPa absolute, so cold water boils if the pressure drops that low. That happens at pump inlets, turbine runner exits and propeller tips, and the collapsing bubbles cause cavitation (Topic 10). Mercury's very low vapour pressure, along with its high density, is why barometers use it.

### Worked numbers

**Viscosity from a sliding plate.** A plate 0.025 mm above a fixed plate moves at 60 cm/s, and a shear stress of 2 N/m² keeps it moving. The velocity gradient is 0.6 ÷ 0.025 × 10⁻³ = 24 000 s⁻¹.

```math
\mu = \frac{\tau}{du/dy} = \frac{2}{24\,000} = 8.33 \times 10^{-5}\ \text{N s/m}^2
```

In poise that is 8.33 × 10⁻⁴ poise, since 1 N·s/m² = 10 poise.

**From poise to stokes.** An oil has μ = 0.9 poise and specific gravity 0.9. First μ = 0.09 Pa·s and ρ = 900 kg/m³.

```math
\nu = \frac{\mu}{\rho} = \frac{0.09}{900} = 10^{-4}\ \text{m}^2/\text{s} = 1\ \text{stoke}
```

**Rise and fall in a 2 mm tube.** For water, σ = 0.0735 N/m and θ = 0°:

```math
h = \frac{4 \times 0.0735 \times 1}{1000 \times 9.81 \times 0.002} = 0.0150\ \text{m} = 15\ \text{mm (rise)}
```

For mercury in the same tube, σ = 0.48 N/m and θ = 130° (cosθ = −0.643):

```math
h = \frac{4 \times 0.48 \times (-0.643)}{13\,600 \times 9.81 \times 0.002} = -0.0046\ \text{m} = 4.6\ \text{mm (fall)}
```

**Pressure inside a droplet.** A water droplet 40 μm across with σ = 0.0725 N/m has Δp = 4 × 0.0725 ÷ (40 × 10⁻⁶) = 7250 Pa. A soap bubble 40 mm across with σ = 0.04 N/m has only 8 × 0.04 ÷ 0.04 = 8 Pa, despite its two surfaces, because it is a thousand times larger.

**Squeezing water.** Raising the pressure on water by 10 MPa, with K = 2.1 GPa, cuts its volume by dV/V = 10 × 10⁶ ÷ 2.1 × 10⁹ = 0.48%.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Every fluid gets thinner when heated. | Liquids do. Gases become more viscous. |
| One poise is 1 N·s/m². | 1 poise = 0.1 N·s/m². 1 N·s/m² (one poiseuille) = 10 poise. |
| The stoke measures dynamic viscosity. | The stoke (cm²/s) measures kinematic viscosity. The poise measures dynamic viscosity. |
| An ideal fluid is a Newtonian fluid. | An ideal fluid has no viscosity. A Newtonian fluid has a constant viscosity. |
| Blood and paint are dilatant. | They are shear-thinning (pseudo-plastic). Starch in water and quicksand are dilatant. |
| A Bingham plastic starts flowing under any stress. | It flows only after the stress passes its yield value. |
| The isothermal bulk modulus of a gas is γp. | Isothermal K = p. Adiabatic K = γp. |
| Surface tension is a force. | It is a force per unit length (N/m), or an energy per unit area. |
| A soap bubble and a drop of the same size have the same excess pressure. | The bubble has two surfaces, so 8σ/d against 4σ/d. |
| Mercury rises in a glass tube. | It falls, because it does not wet glass (θ about 130°). |
| A wider tube gives a higher capillary rise. | The rise varies inversely with diameter. |
| Surface tension rises with temperature. | It falls, and vanishes at the critical point. |
| Water boils only at 100 °C. | It boils whenever the pressure falls to its vapour pressure: about 2.3 kPa absolute at 20 °C. |

## 2. Pressure and its measurement

Pressure is the only stress a fluid at rest can carry, and nearly every question here comes from one rule: going down a height h in a liquid adds ρgh, and moving sideways within the same connected liquid adds nothing. Exam setters twist absolute and gauge pressure, the change from a head of one liquid to another, and manometer readings.

### The picture

Dive into a swimming pool. At the surface your ears feel nothing; three metres down they ache. Now dive into a narrow well that is also three metres deep. The ache is exactly the same, though the well holds a fraction of the water. Swim sideways at three metres in the pool and the ache does not change.

That is the hydrostatic law: the pressure in a liquid at rest depends only on the depth below its free surface, not on the shape or size of the container. A tall, thin tube and a wide tank filled to the same height press equally on their bases (the hydrostatic paradox). Every manometer is this idea put to work: a column of liquid whose height you can read.

### Twisted points

**At a point, pressure is the same in every direction.** Take a tiny wedge of fluid at rest. With no shear stress, only pressure acts on its faces, and balancing forces on it shows that the pressure on every face is equal. That is Pascal's law. Its other half says a pressure added to a confined liquid reaches every part of it undiminished. In a hydraulic press the same pressure acts on both pistons, so F₂/F₁ = A₂/A₁. The large piston moves as much less as its force is more, so the work done is the same: nothing is gained for free.

**Pressure grows with depth at the rate of the weight density.** With z measured upward, dp/dz = −ρg, so a depth h below a free surface has p = ρgh (gauge). In two layered liquids, add the layers: p = ρ₁gh₁ + ρ₂gh₂. The rule "same level, same pressure" holds only inside one continuous liquid at rest. Across a mercury–water interface in a manometer it does not, unless both points are in the same liquid.

**Absolute, gauge and vacuum pressure are three ways of reading the same pressure.** Absolute pressure counts from a perfect vacuum, so it can never be negative. Gauge pressure counts from the local atmosphere: absolute = atmospheric + gauge. A pressure below atmospheric is a vacuum, and absolute = atmospheric − vacuum. The largest possible vacuum is therefore one atmosphere, 760 mm of mercury. A gauge reading of zero means atmospheric pressure, not no pressure.

**A pressure can be written as a head of any liquid.** Since p = ρgh, the height needed is h = p/(ρg), and for the same pressure h₁S₁ = h₂S₂. One standard atmosphere is 760 mm of mercury, 10.33 m of water or 12.9 m of oil of specific gravity 0.8. The lighter the liquid, the taller the column.

**A barometer uses mercury because water would need a 10.3 m tube.** The mercury barometer is a tube closed at the top, filled, and turned upside down in a dish. The column falls until its weight balances the atmosphere, leaving a near vacuum above it. Mercury is dense and has almost no vapour pressure, so the space above stays empty. A water barometer would be over 10 m tall, and water vapour would fill the top.

**A piezometer is simple, but it has three limits.** It is an open vertical tube on the pipe, and the liquid rises to the pressure head. It cannot measure a gas (the gas escapes), a vacuum (air is sucked in), or a high pressure (the tube would be too tall). A U-tube manometer with a heavy liquid removes all three limits.

**Read any manometer by walking through it.** Start at one end, at a point whose pressure you know or want. Move through the tube: add ρgh each time you go down through a liquid, subtract it each time you go up, and skip any horizontal run. When you reach the other end, set the total equal to the pressure there. Never jump across from one liquid to another at the same level.

**A differential manometer gives a difference, written as a head of the flowing liquid.** With A and B at the same level, the same liquid in both connecting tubes and a reading x of a heavier liquid, p\_A − p\_B = (ρₘ − ρ)gx. As a head of the flowing liquid, h = x(Sₘ/S − 1). For an inverted U-tube with a lighter liquid on top, h = x(1 − Sₗ/S). The same formula comes back in the venturimeter (Topic 5).

**To read a small difference, lose some sensitivity in the liquid and gain it in the geometry.** A manometer liquid only a little denser than the flowing liquid gives a large reading for a small difference. An inclined tube spreads a small height h along a length L = h/sinθ: at 30° the reading doubles. Micromanometers combine both ideas.

**A liquid that accelerates with its container is still at rest relative to it.** In a tank accelerating horizontally at a, the free surface tilts so that tanθ = a/g. In a cylinder rotating at ω, the surface becomes a paraboloid whose height above its lowest point is ω²r²/(2g); the rise at the wall equals the fall at the centre. Pressure still grows by ρg per metre of depth below the local surface.

**Mechanical gauges read gauge pressure.** A Bourdon gauge has a curved tube of oval section. Pressure inside tries to make the section round, which straightens the tube, and a linkage turns the movement into a pointer reading. Diaphragm and bellows gauges work by the bending of a thin plate or a folded tube. They suit pressures too high for a manometer.

### Worked numbers

**One pressure, four heads.** A pressure of 4.905 N/cm² is 49 050 Pa. As a head of water, 49 050 ÷ (1000 × 9.81) = 5 m. As oil of specific gravity 0.8, 5 ÷ 0.8 = 6.25 m. As mercury, 5 ÷ 13.6 = 0.368 m.

**Vacuum to absolute.** A vacuum gauge reads 300 mm of mercury, and the barometer reads 760 mm. The absolute pressure is 760 − 300 = 460 mm of mercury:

```math
p_{\text{abs}} = 0.46 \times 13\,600 \times 9.81 = 61.4\ \text{kPa}
```

**A U-tube on an oil pipe.** Oil of specific gravity 0.9 flows in a pipe. The centre of the pipe is 0.2 m above the mercury surface in the left limb, and the mercury in the open right limb stands 0.4 m higher. Walk from the pipe down to the left mercury surface, and equate with the right limb at that level:

```math
p_A + 900 \times 9.81 \times 0.2 = 13\,600 \times 9.81 \times 0.4
```

So p\_A = 53 366 − 1766 = 51 600 Pa, about 51.6 kPa gauge.

**A differential manometer on a water pipe.** Points A and B are at the same level, and the mercury reading is 0.1 m. The difference is (13 600 − 1000) × 9.81 × 0.1 = 12 361 Pa. As a head of water, h = 0.1 × (13.6 − 1) = 1.26 m.

**A hydraulic press.** The small piston is 30 mm across and is pushed with 100 N; the ram is 300 mm across. The area ratio is (300/30)² = 100, so the ram lifts 10 000 N. If the small piston moves 100 mm, the ram rises only 1 mm.

**A tank on a lorry.** A lorry carrying an open tank of water accelerates at 4.905 m/s². The water surface tilts so that tanθ = 4.905/9.81 = 0.5, an angle of 26.6°, higher at the back.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A wider tank presses harder on its base at the same depth. | Pressure depends only on depth. A wider base carries a bigger force, not a bigger pressure. |
| Points at the same level always have the same pressure. | Only within one continuous liquid at rest. |
| Gauge pressure zero means no pressure. | It means atmospheric pressure. |
| A vacuum can be as large as you like. | At most one atmosphere, 760 mm of mercury. Absolute pressure never goes negative. |
| Absolute = atmospheric − gauge. | Absolute = atmospheric + gauge, or atmospheric − vacuum. |
| A head of 1 m of mercury equals 1 m of water. | It equals 13.6 m of water. |
| A hydraulic press multiplies energy. | It multiplies force. The ram moves less in the same ratio, so the work is the same. |
| A piezometer can measure a gas pressure. | It cannot measure gases, vacuums or high pressures. |
| Mercury is always the best manometer liquid. | For small differences use a liquid only a little denser than the flowing one, or an inclined tube. |
| p\_A − p\_B = ρₘgx in a differential manometer. | It is (ρₘ − ρ)gx, because the flowing liquid also fills the tubes. |
| A manometer reads absolute pressure. | One with an open limb reads gauge pressure. |
| A Bourdon tube curls up more under pressure. | It straightens. |

## 3. Hydrostatic forces, buoyancy and floatation

This topic adds up the pressures of Topic 2 over a whole surface. The force is easy; the exam twists sit in where it acts (the centre of pressure), in curved surfaces, and in whether a floating body comes back upright after a tilt.

### The picture

Think of the glass wall of a large aquarium. Near the top the water barely leans on it; near the bottom it pushes hard. If you drew an arrow at every depth, the arrows would grow steadily longer as you go down, like a triangle lying on its side. The single force that replaces all those arrows has to act low on the wall, where the arrows are long. That is why the centre of pressure always sits below the centroid.

Now drop a log and a stone into the aquarium. Both are pushed up by the weight of the water they push aside. The log floats because that push equals its weight before it is fully under; the stone sinks because even fully under, the push is less than its weight.

### Twisted points

**The total force on a plane surface depends only on the depth of its centroid.** F = ρgAh\_c, where h\_c is the vertical depth of the centroid below the free surface. This holds whether the surface is vertical, sloping or horizontal. Tilting a plate about its centroid does not change the force; it only moves the centre of pressure.

**The centre of pressure is always below the centroid, except on a horizontal surface.** For a vertical surface the depth of the centre of pressure is h\_c + I\_G/(Ah\_c); for a sloping one the extra term is multiplied by sin²θ. On a horizontal surface every point is at the same depth, so the two coincide. The gap I\_G/(Ah\_c) shrinks as the surface goes deeper, so a deeply sunk plate has its centre of pressure almost at its centroid.

**Learn the standard positions for a surface touching the free surface.** A vertical rectangle with its top edge at the surface: 2/3 of the depth. A triangle with its base at the surface and apex down: 1/2 of the depth. A triangle with its apex at the surface and base down: 3/4 of the depth. A circle touching the surface: 5/8 of the diameter below the surface.

**Atmospheric pressure is left out because it acts on both sides.** The water side of a gate feels the atmosphere plus ρgh; the dry side feels the atmosphere. Only the gauge part makes the net force. If the space above the liquid is closed and pressurised, convert that pressure to an extra height of liquid and move the free surface up.

**A curved surface is solved as two components.** The horizontal component equals the force on the vertical projection of the surface, acting through the centre of pressure of that projection. The vertical component equals the weight of liquid standing above the curved surface up to the free surface. If the liquid is below the surface, it is the weight of the imaginary liquid that would fill that space, and it acts upward. For a circular arc the resultant passes through the centre of the circle.

**Buoyancy equals the weight of fluid displaced, and it acts at the centroid of the displaced volume.** That point is the centre of buoyancy, B. It depends only on the shape of the immersed part, not on how the body's mass is spread. A floating body displaces its own weight; a body fully under displaces its own volume.

**Submerged bodies and floating bodies have different stability rules.** A fully submerged body, such as a submarine or a balloon, is stable only if its centre of gravity G is below B. A floating body can be stable with G above B, because when it tilts the immersed shape changes and B moves sideways. The point where the new line of buoyancy cuts the centre line is the metacentre, M. The body is stable if M is above G, neutral if they coincide, and unstable if M is below G.

**Metacentric height is found from the waterplane, not the whole body.** BM = I/V, where I is the second moment of the waterline area about the axis of tilt and V is the displaced volume. Then GM = BM − BG. A ship rolls about its long axis, where I is smallest, so that is the critical direction.

**A large metacentric height is not always better.** A bigger GM makes a ship stiffer and harder to capsize, but it rolls back quickly with a short, jerky period, T = 2πk/√(gGM). Passenger ships keep GM small, roughly 0.3 to 1 m, for comfort; warships and racing yachts accept a larger GM for stability.

**Metacentric height is measured by moving a known weight across the deck.** A weight w moved a distance x tilts the ship by θ, read from a plumb line. Then GM = wx/(W tanθ), where W is the total weight including w.

### Worked numbers

**A vertical gate with its top at the surface.** A gate 2 m wide holds water 3 m deep. The centroid is 1.5 m down, so F = 1000 × 9.81 × 6 × 1.5 = 88.3 kN. The centre of pressure is at 2/3 × 3 = 2 m below the surface.

**The same gate sunk 1 m deeper.** Now h\_c = 2.5 m, so F = 9810 × 6 × 2.5 = 147.2 kN. With I\_G = 2 × 3³/12 = 4.5 m⁴:

```math
h_p = 2.5 + \frac{4.5}{6 \times 2.5} = 2.8\ \text{m}
```

The gap between centroid and centre of pressure fell from 0.5 m to 0.3 m as the gate went deeper.

**A quarter-circle gate.** A gate is a quarter of a circle of radius 2 m and 1 m wide, with water filling the quarter circle above it up to its top. The horizontal component acts on a vertical projection 2 m deep: 9810 × 2 × 1 = 19.6 kN. The vertical component is the weight of the water in the quarter circle:

```math
F_V = 9810 \times \frac{\pi \times 2^2}{4} \times 1 = 30.8\ \text{kN}
```

The resultant is √(19.6² + 30.8²) = 36.5 kN at tan⁻¹(30.8/19.6) = 57.5° to the horizontal, passing through the centre of the arc.

**How much of an iceberg shows.** Ice of density 917 kg/m³ floats in sea water of 1025 kg/m³. The fraction under water is 917/1025 = 0.895, so about 10.5% shows above.

**Is a floating block stable?** A wooden block 1.2 m wide, 4 m long and 0.8 m tall, of specific gravity 0.6, floats with its long side horizontal. It sinks to 0.6 × 0.8 = 0.48 m. B is 0.24 m above the bottom and G is 0.4 m, so BG = 0.16 m. For a rectangular section rolling about its long axis, BM = b²/(12d):

```math
BM = \frac{1.2^2}{12 \times 0.48} = 0.25\ \text{m}
```

GM = 0.25 − 0.16 = 0.09 m. It is positive, so the block floats stably.

**Measuring GM on a ship.** A ship weighs 6000 kN. Moving 30 kN across the deck by 8 m makes a 4 m plumb line swing 0.1 m, so tanθ = 0.025. Then GM = 30 × 8 ÷ (6000 × 0.025) = 1.6 m.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The total force acts at the centroid. | It acts at the centre of pressure, below the centroid, except on a horizontal surface. |
| Tilting a plate about its centroid changes the force on it. | The force depends only on the centroid depth. Tilting moves only the centre of pressure. |
| The centre of pressure moves further below the centroid as the plate goes deeper. | The gap I\_G/(Ah\_c) gets smaller with depth. |
| A vertical rectangle from the surface has its centre of pressure at half depth. | At two-thirds of the depth. |
| The vertical force on a curved surface is the force on its horizontal projection. | It is the weight of liquid, real or imaginary, above the surface up to the free surface. |
| The centre of buoyancy is the centre of gravity of the body. | It is the centroid of the displaced volume. |
| A floating body is stable only if G is below B. | That rule is for fully submerged bodies. A floating body needs M above G. |
| BM uses the second moment of the whole body. | It uses the waterline area, I/V. |
| The bigger the metacentric height, the better the ship. | A big GM gives fast, uncomfortable rolling. Passenger ships keep it small. |
| A heavier body always sinks deeper in the same liquid. | Depth depends on the body's density relative to the liquid, not its weight alone. |
| A ship floats higher in fresh water than in sea water. | It floats lower in fresh water, which is less dense. |

## 4. Fluid kinematics

Kinematics describes how a fluid moves without asking what force moves it. The exam questions are mostly definitions with a twist: which flow is steady but non-uniform, which lines coincide when, and what it takes for a stream function or a velocity potential to exist.

### The picture

Stand on a bridge over a river and watch the water pass one fixed spot under you. That is the Eulerian view: you describe the flow at fixed points in space, and it is the view almost every fluids book uses. Now picture yourself in a small boat drifting with the current, writing down where you are every minute. That is the Lagrangian view: you follow one particle.

Drop a little ink into the river at the bridge and keep it dripping. The coloured line you see is a streakline. The track your boat left is a pathline. An arrow drawn at every point along the current at one instant, joined end to end, is a streamline. If the river never changes with time, all three lines are the same.

### Twisted points

**Steady and uniform are two separate questions.** Steady asks whether the flow at a fixed point changes with time. Uniform asks whether the flow changes from point to point at one instant. Constant flow through a long straight pipe is steady and uniform. Constant flow through a tapering pipe is steady but non-uniform. A straight pipe whose valve is being closed is unsteady but uniform. A tapering pipe with a closing valve, or a wave, is unsteady and non-uniform.

**Steady flow can still have acceleration.** Total acceleration has two parts: local (change with time at a point, ∂V/∂t) and convective (change because the particle moves to a place where the velocity is different, such as u ∂u/∂x). Steady flow has no local part, but water speeding up through a nozzle has convective acceleration. Uniform flow has no convective part.

**Streamlines cannot cross.** At any point the velocity has only one direction, so two streamlines can never cut each other. The only exception is a stagnation point, where the velocity is zero. A bundle of streamlines forms a stream tube, and no fluid crosses its wall.

**In steady flow, streamlines, pathlines and streaklines coincide.** In unsteady flow they generally differ. A timeline, a row of particles marked at one instant and watched as it moves, is the fourth kind of flow line.

**Continuity is conservation of mass.** For flow through a stream tube, ρAV is the same at every section. For an incompressible fluid this becomes AV = Q. In differential form, an incompressible flow must satisfy ∂u/∂x + ∂v/∂y + ∂w/∂z = 0, whether it is steady or not. A velocity field that fails this test is not a possible flow.

**Rotation is about the spin of each particle, not the path it follows.** In two dimensions, the rotation is ω\_z = ½(∂v/∂x − ∂u/∂y). Vorticity is twice the rotation. A flow with zero rotation everywhere is irrotational, even if the particles travel round in circles, as in a free vortex.

**The velocity potential needs irrotational flow; the stream function needs two-dimensional incompressible flow.** The velocity potential φ has velocity components that are its slopes, and it exists only when the flow is irrotational. If φ satisfies the Laplace equation, the flow also obeys continuity. The stream function ψ exists for any two-dimensional incompressible flow, rotational or not; it satisfies continuity automatically, and if it satisfies the Laplace equation the flow is irrotational.

**Books use different signs for φ and ψ.** Bansal writes u = −∂φ/∂x and u = −∂ψ/∂y, v = ∂ψ/∂x. White and Çengel write u = ∂ψ/∂y and v = −∂ψ/∂x. Check the sign in the options before choosing, and remember that results such as the flow between two streamlines do not depend on the sign.

**The difference in stream function between two streamlines is the flow between them.** For two-dimensional flow, q = ψ₂ − ψ₁ per unit width. Where streamlines crowd together the flow is fast; where they spread, it is slow.

**Streamlines and equipotential lines cross at right angles.** Together they form a flow net of near-square cells. A flow net can be drawn only for steady, irrotational flow of an ideal fluid, and it is used for seepage under dams and flow past bodies.

**A free vortex and a forced vortex are opposites.** In a forced vortex, the whole mass turns like a solid body, v = ωr, and the flow is rotational; the liquid in a rotating bucket or inside a pump impeller is the example. In a free vortex, no torque acts, vr = constant, and the flow is irrotational except at the centre; a whirlpool or water draining from a basin is the example. Bernoulli's equation holds across streamlines in a free vortex.

### Worked numbers

**Continuity in a tapering pipe.** Water flows at 2 m/s in a 200 mm pipe that narrows to 100 mm. The area falls to a quarter, so the velocity rises four times, to 8 m/s. The flow is:

```math
Q = \frac{\pi}{4} \times 0.2^2 \times 2 = 0.0628\ \text{m}^3/\text{s}
```

**Is the flow possible?** Take u = 2x and v = −2y. Then ∂u/∂x + ∂v/∂y = 2 − 2 = 0, so it obeys continuity. And ∂v/∂x − ∂u/∂y = 0 − 0 = 0, so it is also irrotational, and a velocity potential exists.

**Acceleration in a steady flow.** Take u = x²y and v = −xy². Continuity holds, since 2xy − 2xy = 0. At the point (1, 2), the convective accelerations are:

```math
a_x = u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = x^3y^2 = 4
```

```math
a_y = u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} = x^2y^3 = 8
```

The total is √(4² + 8²) = 8.94 m/s², even though the flow is steady.

**Flow between two streamlines.** For ψ = 3xy, the streamline through (1, 1) has ψ = 3 and the one through (2, 2) has ψ = 12. The flow between them is 12 − 3 = 9 m³/s per metre width, whatever sign convention the book uses.

**A free vortex.** Water spins at 6 m/s at a radius of 0.1 m. Since vr is constant, at 0.3 m it spins at 6 × 0.1 ÷ 0.3 = 2 m/s. In a forced vortex turning at the same 6 m/s at 0.1 m, the speed at 0.3 m would be three times as large, 18 m/s.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Steady flow means the velocity is the same everywhere. | Steady means no change with time at a point. Same everywhere is uniform. |
| Steady flow has no acceleration. | It can have convective acceleration, as in a nozzle. |
| Streamlines may cross where the flow is complicated. | They never cross, except at a stagnation point. |
| Streamlines, pathlines and streaklines are always the same. | Only in steady flow. |
| Irrotational means the particles move in straight lines. | It means the particles do not spin. A free vortex moves in circles yet is irrotational. |
| A stream function exists only for irrotational flow. | It exists for any 2-D incompressible flow. The velocity potential needs irrotational flow. |
| Any velocity field you can write down is a possible flow. | Only one that satisfies continuity. |
| Vorticity equals rotation. | Vorticity is twice the rotation. |
| A flow net can be drawn for any flow. | Only for steady, irrotational flow. |
| A whirlpool is a forced vortex. | It is a free vortex. A rotating bucket is a forced vortex. |
| In a free vortex the speed grows with radius. | It falls as 1/r. It grows with radius in a forced vortex. |
| Continuity for any fluid is AV = constant. | AV = constant holds only for incompressible flow. In general ρAV is constant. |

## 5. Fluid dynamics: Bernoulli and flow measurement

Dynamics brings in the forces. Two equations carry this topic: Bernoulli's equation, which trades pressure, speed and height along a streamline, and the momentum equation, which gives the force a flow puts on a bend or a nozzle. Flow meters are Bernoulli's equation put to work.

### The picture

Put your thumb over the end of a garden hose. The same water now leaves through a smaller gap, so it must move faster, and it shoots much further. Where did the extra speed come from? From pressure. Just behind your thumb the pressure in the hose rises, and as the water squeezes through the gap that pressure turns into speed.

Bernoulli's equation is that trade written down. Along a streamline, a fluid can spend pressure to buy speed or height, and spend speed to buy back pressure, but the total stays the same unless friction takes some away.

### Twisted points

**Bernoulli's equation has five conditions.** It comes from Euler's equation of motion along a streamline, and it needs the fluid to be ideal (no viscosity), the flow steady and incompressible, and the points on one streamline, with no pump or turbine between them. If the flow is irrotational, it holds between any two points, not just along one streamline. Leaving out any one of these is a common wrong option.

**Each term in Bernoulli's equation is energy per unit weight, in metres.** p/ρg is the pressure head, V²/2g the velocity head and z the datum head. Their sum is the total head. Multiply by ρg and each term becomes energy per unit volume, in pascals.

**For a real fluid, add a loss term.** Between sections 1 and 2, total head at 1 = total head at 2 + h\_L. Add a pump head on the left side or a turbine head on the right if one is fitted.

**The energy line always falls; the hydraulic gradient line can rise.** The energy grade line (EGL) is the total head. The hydraulic grade line (HGL) is the piezometric head, p/ρg + z, and lies V²/2g below the EGL. In a real flow the EGL falls steadily in the direction of flow, jumping up only at a pump. The HGL rises wherever the pipe widens and the velocity falls. Where the HGL drops below the pipe itself, the pressure there is below atmospheric.

**The velocity is not the same across a pipe, so correction factors appear.** The kinetic energy correction factor α is 2 for laminar pipe flow and about 1.03 to 1.1 for turbulent flow. The momentum correction factor β is 4/3 for laminar flow and about 1.01 to 1.04 for turbulent flow. Exams ask the laminar values.

**A venturimeter narrows gently and widens slowly.** The convergent cone is short, about 20° to 22° included angle. The divergent cone is long, only about 5° to 7°, because a fluid slowing down too quickly separates from the wall and loses energy. The throat is about 1/3 to 3/4 of the pipe diameter, often half. Its discharge coefficient is high, about 0.95 to 0.99.

**The venturi reading does not depend on how the meter is tilted.** A differential manometer measures the change in piezometric head, so the same flow gives the same reading whether the venturimeter is horizontal, sloping or vertical. The pressure difference itself does change with slope.

**An orifice meter is cheaper but wastes more energy.** It is a thin plate with a hole about half the pipe diameter. The jet contracts to a vena contracta just after the plate and then expands suddenly, so the head loss is large and Cd is only about 0.6 to 0.65. A flow nozzle sits between the two, with Cd about 0.93 to 0.98.

**A Pitot tube measures the velocity at a point, not the flow rate.** It faces the flow, so the fluid stops at its mouth and the pressure there rises to the stagnation pressure. The rise above the static pressure is the dynamic pressure, ρV²/2, so V = Cv√(2gh). A Pitot-static tube (Prandtl tube) has the static holes built into the same probe.

**A rotameter is a variable-area meter.** A float rides in a tapered vertical glass tube. As the flow grows, the float rises until the gap round it lets the flow pass at a fixed pressure drop, and the flow is read from the float height. It must stand vertical.

**The momentum equation gives forces; Bernoulli's equation does not.** The net force on the fluid in a control volume equals the momentum flow out minus the momentum flow in, F = ρQ(V₂ − V₁), worked separately in x and y. Pressure forces at the inlet and outlet count as forces on the fluid. The force the fluid puts on the bend is equal and opposite.

**A free jet follows a projectile path.** Once it leaves the nozzle, the only force is gravity. A jet at speed V and angle θ rises V²sin²θ/2g and reaches furthest, V²/g, at 45°.

### Worked numbers

**Bernoulli in a rising pipe.** Water at 200 kPa and 2 m/s in a 200 mm pipe rises 5 m to a point where the pipe is 100 mm. The velocity there is 8 m/s. Ignoring losses, in metres of water:

```math
20.39 + 0.20 + 0 = \frac{p_2}{\rho g} + 3.26 + 5
```

So p₂/ρg = 12.33 m, which is 121 kPa.

**A venturimeter.** A 200 mm pipe has a 100 mm throat, and a mercury manometer reads 0.1 m. The head difference in water is 0.1 × 12.6 = 1.26 m. With the throat area a₂ = 0.007854 m² and Cd = 0.98:

```math
Q = \frac{C_d\, a_2 \sqrt{2gh}}{\sqrt{1 - (d_2/d_1)^4}} = 0.0395\ \text{m}^3/\text{s}
```

That is about 39.5 litres a second.

**A Pitot tube.** A Pitot tube in a water pipe is connected to a mercury manometer that reads 50 mm. The head difference is 0.05 × 12.6 = 0.63 m. With Cv = 0.98:

```math
V = 0.98\sqrt{2 \times 9.81 \times 0.63} = 3.45\ \text{m/s}
```

**A 90° bend.** Water flows at 0.1 m³/s through a 200 mm horizontal bend, at 3.18 m/s and 100 kPa throughout. In each direction the bend must supply ρQV + pA = 318 + 3142 = 3460 N. The resultant is 3460 × √2 = 4.89 kN at 45°. Notice the pressure force is ten times the momentum term.

**A fire hose jet.** A nozzle throws water at 20 m/s at 45°. It reaches 400 ÷ 9.81 = 40.8 m along the ground and rises 400 × 0.5 ÷ 19.62 = 10.2 m.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Bernoulli's equation works for any real flow. | Only for steady, ideal, incompressible flow along a streamline. Real flows need a loss term. |
| The terms of Bernoulli's equation are energy per unit mass. | In the usual head form they are energy per unit weight, in metres. |
| The hydraulic grade line always falls. | The energy line always falls. The HGL rises where the pipe widens. |
| α = 4/3 for laminar flow. | α = 2 and β = 4/3 for laminar pipe flow. |
| The divergent cone of a venturimeter is the short one. | The convergent cone is short (about 21°). The divergent cone is long (about 5° to 7°). |
| An orifice meter is more accurate because Cd is lower. | Cd is lower because the orifice loses more energy. A venturimeter has Cd about 0.98. |
| Tilting a venturimeter changes the manometer reading. | The reading stays the same for the same flow. |
| A Pitot tube measures the flow rate. | It measures velocity at one point. |
| The Pitot tube reads the static pressure. | It reads the stagnation pressure. The difference from static is the dynamic pressure. |
| A rotameter can be fitted at any angle. | It must be vertical, since the float balances against gravity. |
| Bernoulli's equation gives the force on a bend. | The momentum equation does. |
| A jet thrown at 60° goes furthest. | 45° gives the longest range, V²/g. |

## 6. Orifices, mouthpieces and notches

These are the simplest flow meters: a hole in a tank, a short tube fitted to the hole, and a cut in the top of a wall. Exam questions ask for the three hydraulic coefficients, the discharge coefficients of the standard mouthpieces, the notch formulas and how an error in the head reading grows in the flow.

### The picture

Punch a small hole near the bottom of a full water bottle. The water does not leave as a stream the size of the hole. It narrows just outside, to about two-thirds of the hole's area, because the water was rushing in from all sides and cannot turn sharply at the edge. That narrowest neck is the vena contracta.

Now screw a short tube into the hole. The jet still narrows inside the tube, but then it fills the tube again and leaves full-bore. More water comes out, though the hole is the same, because the narrow neck now sits at a pressure below the atmosphere and sucks harder.

### Twisted points

**Three coefficients, and Cd is the product of the other two.** The coefficient of contraction Cc is the jet area at the vena contracta over the orifice area, about 0.61 to 0.69. The coefficient of velocity Cv is the actual over the ideal velocity √(2gH), about 0.95 to 0.99. The coefficient of discharge Cd = Cc × Cv, about 0.61 to 0.65 for a sharp-edged orifice. The coefficient of resistance, the head lost over the actual velocity head, is 1/Cv² − 1.

**The vena contracta forms about half a diameter downstream.** At that section the streamlines are parallel and the pressure across the jet is atmospheric, which is why the jet velocity is measured there.

**Cv can be found from the shape of the jet.** A jet leaving a side orifice falls like a projectile. If it travels x horizontally while dropping y, then Cv = x/√(4yH), with H the head over the orifice.

**The head on a drowned orifice is the difference between the two water levels.** The depth of the orifice below either surface no longer matters. A partly drowned orifice is split into a free part above the downstream level and a drowned part below it.

**A large orifice is treated as a stack of thin strips.** When the head varies noticeably across the opening, the velocity at each strip is √(2gh), and adding them up gives Q = (2/3)Cd b√(2g)(H₂^1.5 − H₁^1.5).

**A tank empties more slowly as it goes.** The flow falls with √H, so the time to fall from H₁ to H₂ through an orifice of area a in a tank of constant area A is T = 2A(√H₁ − √H₂)/(Cd a√(2g)). The last part of the emptying takes the longest. For a hemispherical or conical tank, A changes with height and the integral changes.

**A mouthpiece raises Cd because the vena contracta is at low pressure.** In an external cylindrical mouthpiece, two to three diameters long, the jet contracts inside and then fills the tube. The pressure at the vena contracta is below atmospheric, about 0.89H below, so the flow rises and Cd is about 0.855. If H is too large, that pressure falls to the vapour pressure and the flow breaks away.

**Learn the standard mouthpiece coefficients.** External cylindrical: 0.855. Convergent-divergent: about 1, because there is no sudden expansion and Cd is based on the throat area. Borda's (re-entrant) mouthpiece running free: 0.5, where the jet does not touch the tube and Cc = 0.5. Borda's running full: 0.707.

**A notch is in a tank wall; a weir is across a river.** Both are openings with a free surface over them. The sheet of water over the crest is the nappe. Air must reach the underside of the nappe; if it does not, the pressure there falls, the nappe clings to the weir and the flow rises.

**A rectangular notch goes as H to the power 1.5; a triangular notch as H to the power 2.5.** Rectangular: Q = (2/3)Cd L√(2g)H^1.5. Triangular: Q = (8/15)Cd tan(θ/2)√(2g)H^2.5. A trapezoidal notch is the sum of the two.

**A V-notch is better for small flows.** For a small flow it gives a larger, easier-to-read head than a rectangular notch, and its Cd stays nearly constant because the nappe keeps the same shape at every head. But a 1% error in reading H gives a 2.5% error in Q, against 1.5% for a rectangular notch.

**The Cipolletti weir cancels its own end contractions.** It is trapezoidal with sides sloping 1 horizontal to 4 vertical, about 14° from the vertical. The extra flow through the sloping sides makes up for the flow lost by contraction at the ends, so it acts like a rectangular weir without contraction.

**Francis's formula allows for end contractions.** Each end contraction shortens the effective crest by 0.1H, so L becomes L − 0.1nH, where n is the number of contractions, two for a notch narrower than its channel.

**A broad-crested weir passes the most when the depth over it is 2/3 of the head.** The maximum flow is about 1.705 Cd L H^1.5 in SI units. An ogee weir has a crest shaped to match the underside of a free nappe, so the pressure on it stays near atmospheric.

### Worked numbers

**All three coefficients from one test.** A 50 mm orifice under 4 m of head passes 10.8 L/s. The ideal flow is 0.001963 × √(2 × 9.81 × 4) = 17.4 L/s, so Cd = 0.621. The jet travels 2 m while falling 0.26 m:

```math
C_v = \frac{x}{\sqrt{4yH}} = \frac{2}{\sqrt{4 \times 0.26 \times 4}} = 0.981
```

Then Cc = 0.621 ÷ 0.981 = 0.633.

**A rectangular notch.** A notch 1 m long has 0.3 m of water over it, with Cd = 0.62:

```math
Q = \tfrac{2}{3} \times 0.62 \times 1 \times 4.429 \times 0.3^{1.5} = 0.301\ \text{m}^3/\text{s}
```

**A right-angled V-notch.** With θ = 90°, tan 45° = 1, and with Cd = 0.6 the formula becomes Q = 1.417H^2.5. At H = 0.2 m:

```math
Q = 1.417 \times 0.2^{2.5} = 0.0254\ \text{m}^3/\text{s}
```

**The same head error, two notches.** A 1% error in reading the head gives a 1.5% error in the flow over a rectangular notch and a 2.5% error over a V-notch.

**Emptying a tank.** A tank of area 2 m² drains through the same 50 mm orifice, Cd = 0.62, from 4 m to 1 m. Here Cd a√(2g) = 0.62 × 0.001963 × 4.429 = 0.00539:

```math
T = \frac{2 \times 2 \times (\sqrt{4} - \sqrt{1})}{0.00539} = 742\ \text{s}
```

That is about 12.4 minutes.

**Adding a mouthpiece.** Fitting an external cylindrical mouthpiece to the same hole raises Cd from 0.62 to 0.855, so the flow rises by 0.855 ÷ 0.62 = 1.38 times, about 38%.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Cd = Cc + Cv. | Cd = Cc × Cv. |
| Cv for an orifice is about 0.6. | Cv is about 0.97 to 0.98. Cc and Cd are about 0.6 to 0.65. |
| The vena contracta is at the orifice plane. | About half a diameter downstream. |
| The head on a drowned orifice is measured from the upstream surface to the orifice. | It is the difference between the two water levels. |
| A tank empties at a steady rate. | The flow falls with √H, so it slows down as it empties. |
| Fitting a tube to an orifice reduces the flow by friction. | An external cylindrical mouthpiece raises Cd to about 0.855. |
| Borda's mouthpiece running free has Cd = 0.707. | Running free it is 0.5. Running full it is 0.707. |
| A convergent-divergent mouthpiece has Cd of about 0.6. | About 1, based on the throat area. |
| The flow over a triangular notch goes as H^1.5. | As H^2.5. The rectangular notch goes as H^1.5. |
| A head error causes the same error in flow. | 1.5 times for a rectangular notch, 2.5 times for a V-notch. |
| The Cipolletti weir slopes 1 vertical to 4 horizontal. | 1 horizontal to 4 vertical, about 14° from the vertical. |
| A notch and a weir are different devices. | Same principle. A weir is a large notch across a river. |

## 7. Viscous flow and flow through pipes

This is where viscosity stops being a footnote. Whether a pipe flow is laminar or turbulent decides its velocity profile, its friction factor and how its head loss grows with speed. The rest of the topic is book-keeping: friction loss, minor losses, pipes in series and parallel, power through a pipe and water hammer.

### The picture

Watch smoke rise from a stick of incense in a still room. For the first few centimetres it climbs in a smooth, single thread. Then, quite suddenly, it breaks into swirls and spreads. The smooth thread is laminar flow, layers sliding over one another; the swirls are turbulent flow, with lumps of fluid tumbling across the layers.

Reynolds saw the same thing with a thread of dye in water flowing through a glass pipe. At low speed the dye stayed a sharp line; at higher speed it wavered; faster still it mixed through the whole pipe. Which one you get depends on one number, the ratio of the inertia that churns the flow to the viscosity that calms it.

### Twisted points

**The Reynolds number decides the regime.** Re = ρVD/μ = VD/ν. In a pipe, flow is laminar below about 2000, turbulent above about 4000, and in transition between. The limits differ by geometry: about 5 × 10⁵ along a flat plate (based on distance from the leading edge) and about 500 for an open channel (based on hydraulic depth).

**Laminar pipe flow has a parabolic velocity profile.** The velocity is zero at the wall and largest at the centre, where it is twice the mean. The shear stress varies linearly, zero at the centre and largest at the wall. Between two fixed parallel plates the profile is also parabolic, but the maximum is 1.5 times the mean.

**The Hagen–Poiseuille equation gives the laminar pressure drop.** Δp = 32μVL/D². The loss grows directly with velocity, and for a fixed pressure drop the flow grows with D⁴. Between parallel plates a distance t apart, Δp = 12μVL/t².

**For laminar flow the friction factor is 64/Re.** This is the Darcy friction factor f. Many Indian books instead use the coefficient of friction f′, a quarter of it, and write the Darcy–Weisbach equation as h\_f = 4f′LV²/(2gD); then f′ = 16/Re for laminar flow. When options show 16/Re and 64/Re, check which f the question means.

**The Darcy–Weisbach equation is the general friction loss.** h\_f = fLV²/(2gD) works for laminar and turbulent flow alike; only f changes. For a fixed flow Q, it becomes h\_f = fLQ²/(12.1D⁵), so the loss is very sensitive to diameter.

**Turbulent flow has a flatter profile and a steeper loss.** Mixing evens out the velocity, so the profile is nearly flat in the core, roughly a one-seventh power law, and the maximum is only about 1.2 times the mean. The head loss rises with V to a power between 1.75 and 2, against 1 for laminar flow.

**Whether a pipe is smooth or rough depends on the flow too.** Next to the wall, even turbulent flow keeps a thin laminar sublayer. If the wall roughness is buried in it, the pipe behaves as hydraulically smooth and f depends only on Re (Blasius: f = 0.316/Re^0.25 up to about 10⁵). If the roughness pokes through, f depends only on the relative roughness ε/D. The Moody chart covers both.

**Minor losses are written as a multiple of a velocity head.** A sudden enlargement loses (V₁ − V₂)²/2g. A sudden contraction loses about 0.5V₂²/2g. A pipe entrance loses 0.5V²/2g, and the exit into a tank loses the whole V²/2g. Bends and valves lose kV²/2g. In a long pipe the minor losses are small next to friction.

**In series the flow is shared; in parallel the head loss is shared.** Pipes in series carry the same flow, and their losses add. An equivalent single pipe of diameter D satisfies L/D⁵ = ΣLᵢ/Dᵢ⁵ (Dupuit). Pipes in parallel between the same two junctions have the same head loss, and their flows add.

**Power through a pipe is largest when friction takes one-third of the head.** The power delivered is ρgQ(H − h\_f). Setting its derivative to zero gives h\_f = H/3, so the maximum efficiency at maximum power is 2/3, or 66.7%.

**Closing a valve quickly causes water hammer.** The moving water is stopped and its momentum turns into a pressure wave that travels at the speed of sound in the water, about 1440 m/s in a rigid pipe. If the valve shuts faster than 2L/C, the rise is Δp = ρVC, whatever the closing time. Slower closure gives a smaller rise, about ρLV/t. A surge tank absorbs it.

**A siphon works only while its summit stays above vapour pressure.** The pressure at the top of a siphon is below atmospheric. If the summit is too high, roughly more than about 7 to 8 m above the upper water level for water, the pressure there falls to the vapour pressure, dissolved air comes out and the flow stops.

### Worked numbers

**Laminar oil flow.** Oil of density 900 kg/m³ and viscosity 0.1 Pa s flows at 1 m/s in a 100 mm pipe. Re = 900 × 1 × 0.1 ÷ 0.1 = 900, so the flow is laminar. Over 100 m:

```math
\Delta p = \frac{32 \times 0.1 \times 1 \times 100}{0.1^2} = 32\ \text{kPa}
```

That is 32 000 ÷ (900 × 9.81) = 3.62 m of oil. The same answer comes from f = 64/900 = 0.071 in the Darcy–Weisbach equation.

**Turbulent water flow.** Water at 2 m/s in a 200 mm pipe has Re = 2 × 0.2 ÷ 10⁻⁶ = 4 × 10⁵, well into turbulence. With f = 0.02 over 500 m:

```math
h_f = \frac{0.02 \times 500 \times 2^2}{2 \times 9.81 \times 0.2} = 10.2\ \text{m}
```

**Halving the diameter.** For the same flow and friction factor, h\_f goes as 1/D⁵. Halving the diameter multiplies the friction loss by 2⁵ = 32.

**A sudden enlargement.** A pipe doubles in diameter, so the velocity falls from 4 m/s to 1 m/s. The loss is (4 − 1)² ÷ 19.62 = 0.46 m.

**Power through a pipe.** A pipe is fed by a head of 300 m. It delivers the most power when friction uses 100 m, leaving 200 m at the outlet, an efficiency of 2/3.

**Water hammer.** Water at 2 m/s is stopped suddenly in a rigid pipe:

```math
\Delta p = \rho V C = 1000 \times 2 \times 1440 = 2.88\ \text{MPa}
```

That is about 294 m of water, enough to burst a pipe meant for a few bars.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Re = ρVD/ν. | Re = ρVD/μ = VD/ν. |
| Pipe flow is turbulent above Re = 2000. | Laminar below about 2000, turbulent above about 4000, transition between. |
| In laminar pipe flow, u\_max = 1.5 × mean. | 2 × mean in a pipe. 1.5 × mean between parallel plates. |
| Shear stress is largest at the pipe centre. | It is zero at the centre and largest at the wall. |
| f = 16/Re is wrong. | It is right for the coefficient of friction f′. The Darcy factor is 64/Re. |
| Laminar head loss goes as V². | Laminar goes as V. Turbulent goes as about V^1.75 to V². |
| The friction factor always depends on Re. | In fully rough flow it depends only on ε/D. |
| Halving the diameter doubles the head loss. | For the same flow it multiplies the loss by 32. |
| Pipes in parallel carry the same flow. | They have the same head loss. Their flows add. |
| The exit loss into a tank is 0.5V²/2g. | The exit loss is the full V²/2g. 0.5V²/2g is the entrance loss. |
| Maximum power through a pipe needs zero friction. | Maximum power is when h\_f = H/3, at 66.7% efficiency. |
| A slower valve closure always lowers water hammer. | Only once the closure time exceeds 2L/C. Faster than that, the rise is ρVC regardless. |

## 8. Dimensional analysis, boundary layer and drag

Three linked ideas. Dimensional analysis groups the variables of a problem into a few dimensionless numbers, which is what lets a small model stand in for a full-size dam or ship. The boundary layer is the thin region near a surface where viscosity acts. And drag is what the boundary layer, and its separation, cost a moving body.

### The picture

Hold your hand flat out of a moving car window, palm down. It slices through the air easily. Now turn your palm to face the wind. The push is suddenly many times bigger, though your hand is the same size and the car the same speed. Flat, the air slides along your skin and the drag is mostly friction. Facing the wind, the air cannot follow round the edges of your hand; it breaks away, leaving a wide, low-pressure wake behind, and that pressure difference is the drag.

That breaking away is boundary layer separation, and most of the drag on cars, balls and buildings comes from it.

### Twisted points

**Buckingham's π theorem counts the groups.** If a problem has n variables involving m fundamental dimensions (usually M, L and T, so m = 3), it can be written with n − m dimensionless π terms. Rayleigh's method does the same job but becomes clumsy beyond about four variables.

**Choose the repeating variables with care.** You need m of them. Together they must contain all the fundamental dimensions, they must not form a dimensionless group among themselves, and none should be the dependent variable. The usual choice is one length (D), one velocity (V) and one fluid property (ρ).

**Each dimensionless number is a force ratio, and each has its home.** Reynolds number, inertia over viscous force, governs pipe flow, submarines and low-speed aircraft. Froude number, V/√(gL), inertia over gravity, governs open channels, spillways and the waves made by ships. Weber number, inertia over surface tension, governs droplets and capillary flow. Mach number, V/C, inertia over elastic force, governs high-speed compressible flow. Euler number, involving pressure, governs cavitation and pressure-driven flows.

**Similarity has three levels.** Geometric similarity means every length is in the same ratio. Kinematic similarity means velocities and accelerations are in the same ratio. Dynamic similarity means forces are in the same ratio, which is achieved by matching the right dimensionless number.

**A Froude model has ratios that are powers of the scale.** With length ratio Lᵣ, velocity and time go as √Lᵣ, discharge as Lᵣ^2.5, force as Lᵣ³ and power as Lᵣ^3.5. Rivers and harbours often use distorted models, with a bigger vertical scale so the depths are not too shallow to measure.

**A Reynolds model with the same fluid runs faster than the real thing.** Equal Re with the same ν means Vᵣ = 1/Lᵣ, so a 1:10 model needs ten times the velocity. That is why wind-tunnel models are often tested in pressurised air or in water.

**The boundary layer grows along the surface.** Its thickness δ is usually taken where the velocity reaches 99% of the free stream. A laminar layer grows as x^0.5 (Blasius: δ = 5x/√Reₓ). A turbulent layer is thicker and grows as x^0.8. On a flat plate it turns turbulent at about Reₓ = 5 × 10⁵.

**Displacement and momentum thickness are bookkeeping distances.** Displacement thickness δ\* is how far the wall would have to move out to give the same flow loss as the slow layer. Momentum thickness θ does the same for the momentum loss. Always δ > δ\* > θ. For a linear profile, δ\* = δ/2 and θ = δ/6. The shape factor H = δ\*/θ is about 2.6 for the laminar Blasius layer and about 1.3 for a turbulent one.

**Separation needs a rising pressure.** Where the pressure increases along the flow (an adverse pressure gradient), the slow fluid near the wall is pushed backward until it stops. At the separation point the velocity gradient at the wall, du/dy, is zero, and beyond it the flow near the wall reverses. In a falling pressure the boundary layer stays attached. Streamlining, suction, slots and blowing all delay separation.

**Drag has two parts, and the body shape decides which wins.** Skin-friction drag comes from shear at the surface. Pressure drag, or form drag, comes from the low pressure in the wake after separation. A streamlined body has mostly friction drag; a bluff body such as a flat plate facing the flow has mostly pressure drag. Both are written as F = C\_D ½ρAV², and lift as F = C\_L ½ρAV².

**Stokes' law covers creeping flow past a sphere.** For Re below about 1, F\_D = 3πμDV and C\_D = 24/Re. A particle falling at its terminal velocity has drag plus buoyancy equal to its weight, which gives V = (ρₛ − ρ)gD²/(18μ).

**A rough ball can have less drag than a smooth one.** Near Re of about 2 to 5 × 10⁵, the boundary layer on a sphere turns turbulent before it separates. The turbulent layer holds on longer, the wake narrows and C\_D falls sharply. Dimples make a golf ball reach this drag crisis at a lower speed.

**A spinning cylinder or ball gets lift.** Spin adds circulation, which speeds up the flow on one side and slows it on the other, and the pressure difference gives a sideways force. This is the Magnus effect; by the Kutta–Joukowski law, the lift per unit length is ρVΓ.

### Worked numbers

**Counting π terms.** The drag F on a sphere depends on D, V, ρ and μ: five variables and three dimensions, so two π terms. With D, V and ρ repeating:

```math
\frac{F}{\rho V^2 D^2} = \phi\left(\frac{\rho V D}{\mu}\right)
```

**A spillway model.** A 1:25 Froude model of a spillway carries 2500 m³/s at full size. The discharge ratio is 25^2.5 = 3125, so the model carries 0.8 m³/s. A full-size velocity of 10 m/s becomes 10 ÷ 5 = 2 m/s, and every time is 5 times shorter.

**A Reynolds model of a pipe.** Water flows at 1.5 m/s in a large pipe. A 1:10 model using water must run at 15 m/s to keep the same Reynolds number.

**Boundary layer thickness.** Air with ν = 1.5 × 10⁻⁵ m²/s flows at 3 m/s over a flat plate. At 0.5 m from the leading edge, Reₓ = 3 × 0.5 ÷ 1.5 × 10⁻⁵ = 10⁵, so the layer is laminar:

```math
\delta = \frac{5 \times 0.5}{\sqrt{10^5}} = 7.9\ \text{mm}
```

**Sand settling in water.** A grain of sand 0.1 mm across, density 2650 kg/m³, settles in water of viscosity 0.001 Pa s:

```math
V = \frac{1650 \times 9.81 \times (10^{-4})^2}{18 \times 0.001} = 9.0\ \text{mm/s}
```

Check: Re = 1000 × 0.009 × 10⁻⁴ ÷ 0.001 = 0.9, below 1, so Stokes' law applies.

**Drag on a car.** A car with C\_D = 0.3 and frontal area 2 m² travels at 30 m/s in air of density 1.2 kg/m³. The drag is 0.3 × 0.5 × 1.2 × 2 × 900 = 324 N, and the power to overcome it is 324 × 30 = 9.7 kW. Doubling the speed makes the drag four times and the power eight times.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The number of π terms equals the number of dimensions. | It is the number of variables minus the number of dimensions. |
| The dependent variable can be a repeating variable. | It must not be. It should appear in only one π term. |
| Froude number is inertia over viscous force. | That is Reynolds number. Froude is inertia over gravity. |
| Ship models are made to Reynolds law. | Ship wave resistance follows Froude law. Reynolds law is for fully enclosed flows. |
| In a Froude model, discharge scales as Lᵣ². | As Lᵣ^2.5. Velocity and time go as √Lᵣ. |
| A Reynolds model with the same fluid runs slower. | It runs faster, Vᵣ = 1/Lᵣ. |
| A laminar boundary layer grows as x^0.8. | Laminar grows as x^0.5, turbulent as x^0.8. |
| Displacement thickness is bigger than boundary layer thickness. | δ > δ\* > θ always. |
| Separation happens in a falling pressure. | It needs a rising pressure, an adverse gradient. |
| At separation the wall shear is largest. | The wall shear, and du/dy at the wall, is zero. |
| A streamlined body has mostly pressure drag. | Mostly friction drag. Bluff bodies have mostly pressure drag. |
| Dimples on a golf ball add drag. | They bring on a turbulent boundary layer that separates later and cuts the drag. |
| Stokes' law holds for any falling sphere. | Only for Re below about 1. |

## 9. Impact of jets and hydraulic turbines

A turbine is a wheel that keeps changing the momentum of water. So this topic starts with the force of a jet on a plate, moves to the efficiency of a jet driving a row of vanes, and ends with the three main turbines: Pelton, Francis and Kaplan. Specific speed ties them together, and it is the most-asked number in the whole subject.

### The picture

Hold a plate in front of a garden hose. The water hits it, turns sideways and spreads out; you feel a steady push. Now hold a bowl with its hollow facing the hose. The water hits the bottom, turns right round and comes back at you. The push doubles, because the water's momentum has been reversed, not just stopped.

A Pelton wheel is a ring of such bowls. As the wheel turns, the bowls run away from the jet, which lowers the push but lets the wheel take work. Run them too slowly and they do little work; run them as fast as the jet and the water never catches them. Half the jet speed is the sweet spot.

### Twisted points

**The force of a jet is its change of momentum per second.** For a jet of area a and speed V on a fixed flat plate square to it, F = ρaV². On an inclined fixed plate, the force normal to the plate is ρaV²sinθ. On a fixed symmetrical curved vane that turns the jet back through an angle, F = ρaV²(1 + cosφ), where φ is the angle of the outgoing jet to the reverse direction. A full U-turn (φ = 0) doubles it to 2ρaV².

**One moving plate and a whole row of plates give different answers.** A single plate moving away at u receives water at the rate ρa(V − u), so F = ρa(V − u)². Its efficiency peaks at u = V/3, at 8/27, about 29.6%. For a series of plates on a wheel, every drop of the jet is used, so F = ρaV(V − u); with flat plates the peak is at u = V/2, efficiency 50%. With cup-shaped vanes that reverse the jet, the peak is also at u = V/2, and the ideal efficiency approaches 100%.

**Euler's equation is the work per unit weight of any turbine.** It is (V\_w1u₁ ± V\_w2u₂)/g, using the whirl components at inlet and outlet. For the best efficiency, the water should leave with no whirl, so the second term vanishes and the work is V\_w1u₁/g.

**Impulse and reaction turbines differ in where the pressure drops.** In an impulse turbine (Pelton), the whole head is turned into velocity in the nozzle, and the runner works at atmospheric pressure. In a reaction turbine (Francis, Kaplan), only part of the head becomes velocity before the runner; the rest drops inside the runner, which must run full of water inside a closed casing.

**Each turbine has its own head, flow and direction.** Pelton: high head (above about 250 m), small flow, tangential flow. Francis: medium head (about 60 to 250 m), medium flow, radial inward or mixed flow. Kaplan: low head (below about 60 m), large flow, axial flow. A propeller turbine is a Kaplan with fixed blades.

**Specific speed picks the turbine.** For a turbine, Nₛ = N√P/H^(5/4), with P in kW and N in rpm. It is the speed of a geometrically similar turbine making 1 kW under 1 m of head. Typical ranges: Pelton with one jet 8.5 to 30 (up to about 50 with several jets), Francis 50 to 255, Kaplan 255 to 860. Low specific speed means high head.

**A Pelton wheel has its own standard proportions.** The jet ratio m = D/d (wheel to jet diameter) is about 12, between 11 and 14. The number of buckets is about 15 + m/2. The bucket speed is about 0.43 to 0.47 of √(2gH), and the nozzle Cv is about 0.97 to 0.99. A splitter divides the jet into two halves, which are turned back through about 165°, not 180°, so that the water clears the next bucket.

**Pelton and Francis turbines are governed differently.** A Pelton is governed by a spear (needle) in the nozzle that changes the jet area; a deflector swings into the jet at once on a sudden load drop so that the spear can close slowly without water hammer. A Francis is governed by guide vanes, called wicket gates, that turn to change the flow and its angle. A Kaplan adjusts both guide vanes and runner blades, which is why it keeps good efficiency at part load.

**Only reaction turbines need a draft tube.** It is a diverging pipe from the runner exit to the tailrace, and it does two things. It lets the turbine sit above the tailrace without losing that height, because the water column below the runner is at low pressure. And it slows the water down, recovering much of its kinetic energy as pressure. Its cone angle is kept small, under about 8°, to avoid separation.

**Cavitation limits how high a reaction turbine can be set.** If the pressure at the runner exit falls to the vapour pressure, bubbles form and collapse against the blades, pitting them. Thoma's cavitation factor is σ = (H\_atm − H\_v − H\_s)/H, where H\_s is the height of the runner above the tailrace. The turbine is safe only if σ stays above a critical value, which grows with specific speed, so Kaplan turbines are set low.

**Unit quantities move a turbine to another head.** For the same turbine, N/√H, Q/√H and P/H^1.5 stay constant. So if the head rises, speed and flow rise with √H and power with H^1.5.

**Overall efficiency is the product of the others.** Overall = hydraulic × mechanical (× volumetric, if leakage is counted). Hydraulic efficiency is the power given to the runner over the water power, ρgQH.

**Three sets of characteristic curves.** Main characteristics are at constant head, operating characteristics at constant speed, and the muschel (iso-efficiency) curves join points of equal efficiency.

### Worked numbers

**A jet on fixed plates.** A 50 mm jet at 20 m/s has area 0.001963 m². On a fixed flat plate, F = 1000 × 0.001963 × 400 = 785 N. On a hemispherical cup that turns it right round, the force doubles to 1571 N.

**The same jet on a wheel of flat plates.** With the plates moving at 10 m/s, F = ρaV(V − u) = 1000 × 0.001963 × 20 × 10 = 393 N. The power is 393 × 10 = 3.93 kW. The efficiency is:

```math
\eta = \frac{2u(V - u)}{V^2} = \frac{2 \times 10 \times 10}{400} = 0.5
```

**Sizing a Pelton wheel.** The head is 400 m and the wheel runs at 600 rpm. √(2gH) = 88.6 m/s, so with Cv = 0.98 the jet speed is 86.8 m/s. With a speed ratio of 0.46, the bucket speed is 40.8 m/s:

```math
D = \frac{60u}{\pi N} = \frac{60 \times 40.8}{\pi \times 600} = 1.30\ \text{m}
```

With a jet ratio of 12, the jet is 108 mm across and the wheel needs about 15 + 6 = 21 buckets.

**Choosing a turbine.** A site gives 5000 kW under 100 m at 600 rpm:

```math
N_s = \frac{600\sqrt{5000}}{100^{5/4}} = 134
```

That is in the Francis range.

**A turbine at a new head.** A turbine makes 1000 kW at 400 rpm under 25 m. At 16 m, its speed for the same conditions is 400 × √(16/25) = 320 rpm, and its power is 1000 × (16/25)^1.5 = 512 kW.

**How high can the runner be set?** Atmospheric head is 10.3 m, vapour head 0.3 m, net head 25 m and critical σ = 0.2. The runner can be at most 10.3 − 0.3 − 0.2 × 25 = 5.0 m above the tailrace.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A jet on a fixed flat plate gives F = ρaV. | F = ρaV², that is ρQ × V. |
| A single moving plate peaks at u = V/2. | A single plate peaks at u = V/3, at 29.6%. A series of plates peaks at u = V/2. |
| A series of flat plates can reach 100% efficiency. | Flat plates reach 50%. Curved buckets that reverse the jet approach 100%. |
| A Pelton runner runs full of water. | It runs in air at atmospheric pressure. Reaction runners run full. |
| Kaplan turbines suit high heads. | Kaplan suits low heads and large flows. Pelton suits high heads. |
| High specific speed means high head. | High specific speed means low head (Kaplan). |
| Pelton buckets turn the jet through 180°. | About 165°, so the water clears the next bucket. |
| A Pelton wheel needs a draft tube. | Only reaction turbines use a draft tube. |
| A draft tube just carries water away. | It recovers kinetic energy and lets the runner sit above the tailrace. |
| A Pelton is governed by guide vanes. | By a spear valve and deflector. Francis uses guide vanes (wicket gates). |
| A propeller turbine and a Kaplan are the same. | A Kaplan has adjustable runner blades; a propeller turbine's blades are fixed. |
| Power at a new head goes as H. | Power goes as H^1.5. Speed and flow go as √H. |
| Overall efficiency = hydraulic + mechanical. | It is their product. |

## 10. Pumps

A pump is a turbine run backwards: it takes shaft work and gives the liquid head. Centrifugal pumps carry most of the questions, on priming, blade shapes, heads and efficiencies, the affinity laws and cavitation. Reciprocating pumps bring slip, the indicator diagram and air vessels.

### The picture

Swing a bucket of water round in a circle over your head. The water presses hard into the bottom of the bucket; it is being flung outward. Now cut a hole in the bottom. Water would spray out at speed. A centrifugal pump is that bucket made continuous: the impeller whirls the water, flinging it outward into a casing that slows it down and turns its speed into pressure, while fresh water is drawn into the eye at the centre.

A bicycle pump works the other way. A piston pushes a fixed volume each stroke, whatever the pressure ahead of it. That is a positive-displacement pump, and the reciprocating pump is its big brother.

### Twisted points

**A centrifugal pump must be primed.** The head an impeller makes depends on its speed, not on the fluid, but the pressure that head gives is ρgH. Filled with air, which is about 800 times lighter than water, the pump makes the same head in metres of air, far too little pressure to lift water up the suction pipe. Priming fills the pump and suction pipe with liquid first. A reciprocating pump is self-priming.

**The casing turns speed into pressure.** A volute casing is a spiral whose area grows steadily round the impeller, so the water slows down. A vortex casing adds a circular chamber between the impeller and the volute. A diffuser casing uses fixed guide blades round the impeller; such a pump is called a turbine pump.

**Backward-curved blades are the usual choice.** For the same speed, forward-curved blades give the most head, but their power keeps rising with flow and the motor can overload; their running is also less stable. Backward-curved blades give a falling head curve and a power curve that levels off, so the motor cannot be overloaded. Radial blades lie between.

**Euler's head is the most an impeller can give.** With water entering radially (no whirl at inlet), the head given to the water is V\_w2u₂/g. The manometric head is the head the pump actually delivers, measured by gauges at inlet and outlet. Manometric efficiency is the manometric head over the Euler head. Overall efficiency is the water power ρgQHₘ over the shaft power.

**A pump will not deliver until it reaches a minimum speed.** It must spin fast enough that the centrifugal head, (u₂² − u₁²)/2g, at least equals the manometric head. Below that speed the water just churns.

**Pump specific speed uses flow, not power.** Nₛ = N√Q/H^(3/4), with Q in m³/s. It is the speed of a similar pump delivering 1 m³/s against 1 m. Low specific speed means a narrow radial impeller for high head; high specific speed means a mixed or axial (propeller) pump for large flow at low head.

**The affinity laws scale a pump.** For one pump at a new speed: Q goes as N, H as N² and power as N³. For similar pumps of different size: Q goes as ND³, H as N²D² and power as N³D⁵.

**Series adds head; parallel adds flow.** Impellers or pumps in series pass the same flow and their heads add, for a high lift. In parallel they share the same head and their flows add, for a large flow. A multistage pump has several impellers in series on one shaft.

**The operating point is where the pump curve meets the system curve.** The pump's head falls as flow rises; the head the pipework needs (static lift plus losses that grow with Q²) rises. They cross at one flow. The head at zero flow is the shut-off head.

**Cavitation is checked with NPSH.** The net positive suction head available is the head at the pump inlet above the vapour pressure: H\_atm − H\_v − suction lift − suction friction loss. It must exceed the NPSH the pump requires. Cavitation starts at the eye of the impeller, where pressure is lowest. The theoretical suction lift for water is about 10.3 m, but in practice it is limited to about 6 to 7 m.

**A reciprocating pump's theoretical flow is its swept volume per second.** For a single-acting pump Q = ALN/60; for double-acting, about twice that (less the rod area on one side). Slip is (Q\_theoretical − Q\_actual)/Q\_theoretical, usually small and positive. Negative slip, more delivered than swept, happens with a long suction pipe, a short delivery pipe and high speed: the inertia of the moving water opens the delivery valve before the suction stroke ends.

**The indicator diagram shows where the pump works hardest.** Its area is proportional to the work done per cycle. Acceleration head is largest at the start and end of each stroke, while friction head is largest at mid-stroke. If the pressure at the start of the suction stroke falls to the vapour pressure, the water separates from the piston, which limits the speed.

**Air vessels smooth the flow.** Fitted close to the pump on the suction and delivery pipes, they let the water in the long pipes move at a nearly steady rate. They cut the acceleration head, allow a higher speed and a longer suction pipe, and save work against friction: about 84.8% of it for a single-acting pump and 39.2% for a double-acting one.

**Learn which pump suits which job.** Reciprocating pumps suit high head and small flow and are self-priming. Centrifugal pumps suit large flow at moderate head, run smoothly and cost less. Gear, vane and screw pumps are rotary positive-displacement pumps for oil and other viscous fluids. A hydraulic ram uses water hammer from a large flow at low head to lift a small part of it to a greater height, with no other power.

### Worked numbers

**Euler head and manometric efficiency.** An impeller 0.4 m across turns at 1450 rpm. Its tip speed is:

```math
u_2 = \frac{\pi \times 0.4 \times 1450}{60} = 30.4\ \text{m/s}
```

The blades are bent back at 30° and the flow velocity at exit is 3 m/s, so V\_w2 = 30.4 − 3 ÷ tan 30° = 25.2 m/s. The Euler head is 25.2 × 30.4 ÷ 9.81 = 78.1 m. If the pump delivers 60 m, its manometric efficiency is 60 ÷ 78.1 = 0.77.

**Pump power.** The pump delivers 0.05 m³/s against 30 m at an overall efficiency of 75%:

```math
P = \frac{1000 \times 9.81 \times 0.05 \times 30}{0.75} = 19.6\ \text{kW}
```

**Doubling the speed.** Run the same pump at 2900 rpm instead of 1450. The flow doubles to 0.1 m³/s, the head goes up four times to 120 m, and the power eight times to 157 kW.

**Pump specific speed.** For the pump at 1450 rpm, 0.05 m³/s and 30 m:

```math
N_s = \frac{1450\sqrt{0.05}}{30^{3/4}} = 25.3
```

A low value, so it is a radial-flow centrifugal pump.

**Slip of a reciprocating pump.** A single-acting pump has a 150 mm bore and a 300 mm stroke and runs at 60 rpm. Its swept volume is 0.01767 × 0.3 = 0.0053 m³ per stroke, so in theory it delivers 5.30 L/s. It actually delivers 5.0 L/s, so the slip is 0.30 ÷ 5.30 = 5.7% and Cd = 0.943.

**Checking for cavitation.** A pump lifts water 4 m from a sump. Atmospheric head is 10.3 m, vapour head 0.24 m and suction friction 0.8 m. NPSH available is 10.3 − 0.24 − 4 − 0.8 = 5.26 m. If the pump needs 3 m, it is safe.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Priming removes dirt from the pump. | It fills the pump with liquid, because an impeller running in air makes too little pressure. |
| A reciprocating pump must be primed. | It is self-priming. Centrifugal pumps need priming. |
| Forward-curved blades are most common. | Backward-curved blades are most common, because their power cannot overload the motor. |
| The volute casing raises the velocity. | It slows the water and turns velocity into pressure. |
| Manometric head equals Euler head. | Manometric head is smaller. Their ratio is the manometric efficiency. |
| Pump specific speed uses power, like a turbine's. | It uses flow: Nₛ = N√Q/H^(3/4). |
| At double speed a pump needs double the power. | Power goes as N³, so eight times. Head goes as N². |
| Pumps in parallel give more head. | Parallel adds flow. Series adds head. |
| Cavitation starts at the impeller outlet. | It starts at the eye of the impeller, where pressure is lowest. |
| A pump can lift water 10.3 m by suction. | That is the theoretical limit. In practice about 6 to 7 m. |
| Slip of a reciprocating pump is always positive. | It can be negative with a long suction pipe, short delivery pipe and high speed. |
| Air vessels raise the delivery pressure. | They smooth the flow, cut acceleration head and save friction work. |
| Acceleration head is largest at mid-stroke. | It is largest at the ends of the stroke. Friction head is largest at mid-stroke. |

## Further reading

Level 2 follows the standard textbook treatment of each topic. Figures such as the Reynolds number limits, the hydraulic coefficients, the venturimeter cone angles, the Pelton jet ratio and the specific speed ranges are rules of thumb, so another book may quote slightly different values. Books also differ in the sign used for the stream function and in whether f means the Darcy factor or a quarter of it. The reasoning behind them does not change.

- R. K. Bansal, *Fluid Mechanics and Hydraulic Machines*: every topic, at the level of JE and AE papers, with many solved problems.
- Modi and Seth, *Hydraulics and Fluid Mechanics including Hydraulic Machines*: every topic in more depth, especially Topics 6, 9 and 10.
- R. K. Rajput, *Fluid Mechanics and Hydraulic Machines*: every topic, with objective questions at the end of each chapter.
- Frank M. White, *Fluid Mechanics*: Topics 4, 5, 7 and 8 from first principles.
- Yunus Çengel and John Cimbala, *Fluid Mechanics: Fundamentals and Applications*: Topics 1 to 8, with clear pictures of flow behaviour.
- Jagdish Lal, *Hydraulic Machines*: Topics 9 and 10 in depth.
