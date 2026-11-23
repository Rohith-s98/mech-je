# Fluid Mechanics & Machines Study Guide

Nov 23, 2026 · @Rohith

## How to use this guide

Fluid Mechanics & Machines is the sixth-ranked subject in your topic map, at about 9.3% of technical questions across RRB JE, SSC JE and Kerala PSC AE: about 10 of every 100 in RRB JE, 6 or 7 in SSC JE and 12 in Kerala PSC AE. All three exams ask it every time, and RRB JE gives more of its share to the machines (turbines and pumps) than to pure fluid mechanics. Finish it in about 15 study days, one sub-topic at a time, in the order below.

Sub-topics 1 to 3 are fluids at rest: their properties, pressure, and the force pressure puts on walls and floating bodies. Sub-topics 4 to 7 are fluids in motion: how flow is described, Bernoulli's equation and the meters built on it, orifices and notches, and the losses in pipes. Sub-topic 8 gathers the dimensionless numbers and the boundary layer. The last two are the machines, which carry the most marks in RRB JE.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the formulas you must memorise), and real questions from past papers (mostly 2017–2026) with worked solutions. Questions are tagged with the exam and year they appeared in. A few come from civil engineering papers, because the fluid mechanics in them is the same. Take g = 9.81 m/s² and the density of water as 1000 kg/m³ unless a question says otherwise.

| # | Sub-topic | Days | How often it is asked |
| --- | --- | --- | --- |
| 1 | Fluid properties | 1 | Every paper |
| 2 | Pressure and its measurement | 1 | Every paper |
| 3 | Hydrostatic forces, buoyancy and floatation | 2 | Every paper |
| 4 | Fluid kinematics | 1 | Regular |
| 5 | Fluid dynamics: Bernoulli and flow measurement | 2 | Every paper |
| 6 | Orifices, mouthpieces and notches | 1 | Regular |
| 7 | Viscous flow and flow through pipes | 2 | Every paper |
| 8 | Dimensional analysis, boundary layer and drag | 1 | Occasional |
| 9 | Impact of jets and hydraulic turbines | 2 | Every paper (most in RRB JE) |
| 10 | Pumps | 2 | Every paper (most in RRB JE) |

Method per sub-topic: read the contents, write the formulas on one page, solve the past questions without looking, then check the solutions.

## 1. Fluid properties

Fluid properties are asked as definitions: which law, which unit, which kind of fluid. Newton's law of viscosity, the units of viscosity, the types of fluid and the capillary-rise formula answer most of them.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Fluid | A substance that keeps deforming under a shear stress, however small. A solid takes a fixed deformation and stops; a fluid keeps flowing. Liquids and gases are both fluids. |
| Density, specific weight, specific gravity | Density ρ is mass per unit volume (water 1000 kg/m³). Specific weight w = ρg is weight per unit volume (water 9810 N/m³). Specific gravity (relative density) is the fluid's density divided by that of water (mercury 13.6). Specific volume is 1/ρ. |
| Viscosity | The resistance of a fluid to one layer sliding over another. In liquids it falls as temperature rises, because cohesion weakens. In gases it rises with temperature, because the molecules exchange more momentum. |
| Newton's law of viscosity | Shear stress is proportional to the rate of shear strain, which is the velocity gradient: τ = μ du/dy. The constant μ is the dynamic viscosity. |
| Units of viscosity | Dynamic viscosity μ is in N·s/m² = Pa·s in SI, a unit also called the poiseuille. Its CGS unit is the poise: 1 poise = 0.1 N·s/m², so 1 Pa·s = 10 poise. Kinematic viscosity ν = μ/ρ is in m²/s, or stokes in CGS (1 stoke = 1 cm²/s = 10⁻⁴ m²/s). |
| Ideal and real fluids | An ideal fluid has no viscosity and cannot be compressed; it exists only in theory. Every real fluid has viscosity. |
| Newtonian and non-Newtonian fluids | A Newtonian fluid obeys τ = μ du/dy with a constant μ: water, air, petrol. A non-Newtonian fluid does not. An ideal plastic (Bingham) fluid needs a yield stress before it flows, then behaves linearly: toothpaste, sewage sludge. |
| Kinds of non-Newtonian fluid | Pseudo-plastic (shear-thinning): the apparent viscosity falls as the shear rate rises (blood, milk, paint, clay slurry, paper pulp). Dilatant (shear-thickening): it rises (starch in water, quicksand). Thixotropic fluids thin with time of shearing (printer's ink); rheopectic fluids thicken with time. |
| Compressibility and bulk modulus | Bulk modulus K is the pressure rise per unit fractional fall in volume. Compressibility is 1/K. For a gas, K = p in an isothermal process and K = γp in an adiabatic one. For water K is about 2.1 GPa, so liquids are treated as incompressible. |
| Cohesion and adhesion | Cohesion is the attraction between molecules of the same liquid. It causes surface tension and lets a liquid hold together and bear a small tension. Adhesion is the attraction between the liquid and another surface; it makes water wet glass. |
| Surface tension | The tensile force per unit length on a liquid surface, in N/m, caused by cohesion. It pulls drops into spheres, the shape with the least surface for a given volume. For water in air it is about 0.073 N/m at 20 °C, and it falls as temperature rises. |
| Capillarity | The rise or fall of a liquid in a thin tube. Water wets glass (adhesion beats cohesion, contact angle about 0°) and rises. Mercury does not (cohesion wins, contact angle about 130°) and falls. The rise varies inversely with the tube diameter. |
| Vapour pressure and cavitation | Vapour pressure is the pressure at which a liquid boils at a given temperature. Where the local pressure falls below it, vapour bubbles form; they collapse violently on reaching higher pressure. This is cavitation, and it pits turbine and pump blades. |

### Formulas to memorise

```math
\tau = \mu \frac{du}{dy} \qquad \nu = \frac{\mu}{\rho}
```

```math
1\ \text{N s/m}^2 = 1\ \text{Pa s} = 10\ \text{poise} \qquad 1\ \text{stoke} = 1\ \text{cm}^2/\text{s} = 10^{-4}\ \text{m}^2/\text{s}
```

```math
K = -\frac{dp}{dV/V} \qquad K_{\text{isothermal}} = p \qquad K_{\text{adiabatic}} = \gamma p
```

```math
h = \frac{4\sigma\cos\theta}{\rho g d}
```

```math
\Delta p_{\text{drop}} = \frac{4\sigma}{d} \qquad \Delta p_{\text{bubble}} = \frac{8\sigma}{d} \qquad \Delta p_{\text{jet}} = \frac{2\sigma}{d}
```

### Past exam questions with solutions

**Q1. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Newton's law of viscosity relates: (a) the shear stress and rate of shear strain (b) the stress and strain in a fluid (c) the viscosity and density of a fluid (d) the shear stress, gravity and viscosity

*Answer: (a).* τ = μ du/dy: the shear stress is proportional to the rate of shear strain, which is the velocity gradient du/dy. Option (b) describes Hooke's law for solids, where stress follows strain itself.

**Q2. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1).** One poiseuille is equivalent to \_\_\_\_\_\_\_\_ poise. (a) 10 (b) 1 (c) 1000 (d) 100

*Answer: (a).* The poiseuille is the SI unit, 1 N·s/m². One poise is 1 dyne·s/cm² = 10⁻⁵ N·s ÷ 10⁻⁴ m² = 0.1 N·s/m². So 1 poiseuille = 10 poise.

**Q3. SSC JE Mechanical, 28 October 2020 (Evening).** Milk, blood and clay are examples of \_\_\_\_\_ fluid. (a) ideal (b) pseudo-plastic (c) perfect (d) Newtonian

*Answer: (b).* These fluids get thinner the faster they are sheared, so their apparent viscosity falls as du/dy rises. That is pseudo-plastic (shear-thinning) behaviour. Water and air are Newtonian, and an ideal or perfect fluid has no viscosity at all.

**Q4. SSC JE Mechanical, 27 October 2020 (Morning).** A fluid in which shear is more than the yield and shear stress is proportional to the rate of shear strain, is: (a) ideal plastic fluid (b) real fluid (c) ideal fluid (d) Newtonian fluid

*Answer: (a).* An ideal plastic (Bingham) fluid does not flow until the shear stress passes a yield value. Beyond it, τ = τᵧ + μ du/dy, a straight line that starts above the origin. A Newtonian fluid's line starts at the origin, with no yield stress.

**Q5. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Which of the following statements is correct about cohesion? 1) Cohesion means intermolecular attraction between molecules of the same liquid 2) Cohesion enables a liquid to resist small amount of tensile stresses 3) Cohesion is a tendency of the liquid to remain as one assemblage of particles (a) 1 and 2 (b) 1 and 3 (c) 2 and 3 (d) 1, 2 and 3

*Answer: (d).* All three are true. Cohesion is the attraction between like molecules (1). Because of it, a liquid can bear a small tension (2), and it holds together as one mass (3). Surface tension is a result of cohesion.

**Q6. SSC JE Mechanical, 24 January 2018 (Evening).** Raindrops are spherical because of: (a) viscosity (b) air resistance (c) surface tension forces (d) atmospheric pressure

*Answer: (c).* Surface tension pulls the surface of a drop to the least area that can hold its volume, and the shape with the least area is a sphere. Air resistance only flattens large drops as they fall.

**Q7. MPPSC AE Civil, 2021.** What is the height of the fluid rise (h), when the capillary with the diameter (d) is dipped in the fluid having a density (ρ) and surface tension (σ)? (a) h = 4σcosθ/(ρgd) (b) h = 4σcosθ/(ρgd²) (c) h = 4σcosθ/(2ρgd) (d) h = 4σ²cosθ/(ρgd)

*Answer: (a).* The surface tension pull round the rim, σ × πd × cosθ, holds up the weight of the raised column, ρg × (πd²/4) × h. Solving gives h = 4σcosθ/(ρgd), so the rise varies inversely with d. Only (a) has the right units.

**Q8. SSC JE Civil, 9 October 2023 (Shift 1).** A capillary tube of diameter 4 mm is dipped into a liquid of specific gravity 0.6. The liquid rises in the tube by 20 mm, making an angle of contact of 0° with the tube. Determine the surface tension of the liquid in contact with air and the glass tube. (a) 0.12 N/m (b) 0.5 N/m (c) 1 N/m (d) 0.08 N/m

*Answer: (a).* Turn the capillary formula round: σ = ρghd/(4cosθ) = 600 × 9.81 × 0.020 × 0.004 ÷ 4 = 0.118 N/m, which is about 0.12 N/m. Keep every length in metres.

**Q9. SSC JE Civil, 25 January 2018 (Morning).** In the isothermal condition, the isothermal bulk modulus of an ideal gas is equal to \_\_\_\_\_\_. (a) constant (b) pressure (c) temperature (d) viscosity

*Answer: (b).* At constant temperature pV = constant, so p dV + V dp = 0 and dp/(−dV/V) = p. The isothermal bulk modulus therefore equals the pressure. In an adiabatic process, pVᵞ = constant gives K = γp.

## 2. Pressure and its measurement

Pressure questions are short sums and names: convert a pressure into a head of some liquid, read a manometer, or name the law behind a hydraulic lift. One rule does almost all the work: pressure rises by ρgh going down and stays the same along a level line in one continuous liquid.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Pressure | Normal force per unit area, p = F/A, in N/m² (pascal). 1 bar = 10⁵ Pa = 100 kPa. Standard atmospheric pressure is 101.325 kPa = 760 mm of mercury = 10.33 m of water. |
| Pressure head | A pressure given as the height of a liquid column that would produce it: h = p/(ρg). A head in one liquid converts to another by h₁S₁ = h₂S₂, so 1 m of mercury equals 13.6 m of water. |
| Pascal's law | At a point in a fluid at rest, the pressure is the same in every direction. A pressure applied to a confined fluid is passed on undiminished to every part of it. This is the principle of the hydraulic press, lift and jack. |
| Hydrostatic law | In a fluid at rest, pressure rises with depth at a rate equal to the weight density: dp/dz = −ρg (z measured upward), so p = ρgh at depth h below a free surface. Along a horizontal line in one continuous fluid at rest, the pressure does not change. |
| Absolute, gauge and vacuum pressure | Absolute pressure is measured from a perfect vacuum. Gauge pressure is measured from the local atmosphere, so absolute = atmospheric + gauge. A pressure below atmospheric is a vacuum, and then absolute = atmospheric − vacuum. Gauges and manometers open to air read gauge pressure. |
| Barometer | Measures atmospheric pressure. A mercury barometer stands about 760 mm high at sea level. A water barometer would need about 10.3 m, which is why mercury is used. |
| Piezometer | A plain vertical tube tapped into a pipe; the liquid rises to the pressure head. It cannot measure a gas pressure or a vacuum, and it gets too tall for high pressures. |
| Simple U-tube manometer | A U-tube holding a heavier liquid (often mercury), one limb on the pipe and the other open to the air. It measures gauge or vacuum pressure, including fairly high pressures. |
| Differential manometer | A U-tube joined to two points, which measures the difference in pressure between them. An inverted U-tube, with a lighter liquid or air at the top, is used for small differences. |
| Choice of manometer liquid | It must not mix with the fluid being measured. Mercury suits large pressures. For a small difference in a water pipe, a liquid only a little denser than water gives a large, readable deflection, so carbon tetrachloride (specific gravity 1.6) is used. An inclined-tube manometer also magnifies small readings. |
| Mechanical gauges | The Bourdon tube gauge (a curved tube of oval section that straightens under pressure), the diaphragm gauge and the bellows gauge. They read gauge pressure and suit high pressures. |

### Formulas to memorise

```math
p = \rho g h \qquad h_1 S_1 = h_2 S_2
```

```math
p_{\text{abs}} = p_{\text{atm}} + p_{\text{gauge}} \qquad p_{\text{abs}} = p_{\text{atm}} - p_{\text{vac}}
```

```math
1\ \text{atm} = 101.325\ \text{kPa} = 760\ \text{mm of Hg} = 10.33\ \text{m of water}
```

```math
\text{U-tube on a pipe:}\quad p_A + \rho_1 g h_1 = \rho_m g h_2
```

```math
\text{Differential manometer, A and B level:}\quad p_A - p_B = (\rho_m - \rho)\, g\, h
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** The law which states "The rate of increase of pressure in a vertical direction is equal to weight density of the fluid at that point" is: (a) hydrostatic law (b) Pascal's law (c) Newton's law of viscosity (d) Kirchhoff's law

*Answer: (a).* The hydrostatic law is dp/dz = ρg = w, the weight density. Pascal's law is a different statement: at a point, the pressure is the same in every direction.

**Q2. ISRO URSC Technical Assistant (Mechanical), 13 November 2016.** Which one of the following laws is applicable to a hydraulic lift? (a) Kirchhoff's law (b) Pascal's law (c) Archimedes' principle (d) Archimedes' law

*Answer: (b).* A small force on a small piston sets up a pressure, and the confined liquid passes it undiminished to a large piston. So F₂ = F₁ × A₂/A₁, and a small effort lifts a large load.

**Q3. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The pressure intensity at a point in a fluid is 4.905 N/cm². What will be the corresponding height of an oil column of specific gravity 0.8? (a) 6.25 m (b) 4.905 m (c) 5 m (d) 3.924 m

*Answer: (a).* First change units: 4.905 N/cm² = 49 050 N/m². Then h = p/(ρg) = 49 050 ÷ (800 × 9.81) = 6.25 m. Option (c), 5 m, is the head of water; oil is lighter, so its column is taller.

**Q4. UPRVUNL JE Mechanical, 2016 (Shift 2).** Let the atmospheric pressure at sea level be 70 cm of mercury. Convert this pressure in terms of the height of water (in metres). (a) 8 (b) 9 (c) 8.5 (d) 9.5

*Answer: (d).* Use h₁S₁ = h₂S₂: h of water = 0.70 × 13.6 = 9.52 m, about 9.5 m.

**Q5. SSC JE Civil, 11 October 2023 (Shift 1).** A simple U-tube manometer connected to a pipe in which liquid is flowing with a uniform speed will give \_\_\_\_\_. (a) vacuum pressure (b) absolute pressure (c) gauge pressure (d) atmospheric pressure

*Answer: (c).* The open limb feels the atmosphere, so the reading is the pressure above atmospheric: gauge pressure. Add the atmospheric pressure to get the absolute pressure.

**Q6. SSC JE Mechanical, 25 September 2019 (Evening).** A small pressure difference between two points along a pipeline carrying water is to be measured using a U-tube manometer. The manometric fluid to be used is: (a) mercury (b) carbon tetrachloride (c) water (d) kerosene

*Answer: (b).* Under water, the manometer reading is h = Δp/((ρₘ − ρ)g). The closer the manometer liquid's density is to water's, the larger the reading. Carbon tetrachloride (1.6) reads about (13.6 − 1)/(1.6 − 1) = 21 times more than mercury. Water would mix with the water in the pipe, and kerosene is lighter than water, so it would need an inverted U-tube.

**Q7. DRDO CEPTAM Tier-II STA-B Mechanical, 15 June 2026.** A U-tube manometer contains mercury (ρ = 13,600 kg/m³) and is connected to a pipe carrying water (ρ = 1000 kg/m³). The mercury column in the limb open to atmosphere is 200 mm higher than that in the limb connected to the pipe. The mercury surface in the limb connected to the pipe is 200 mm below the pipe centerline. The gauge pressure in the pipe is: (a) 19.6 kPa (b) 24.7 kPa (c) 22.5 kPa (d) 27.2 kPa

*Answer: (b).* Equate pressures at the level of the lower mercury surface. Pipe side: p + 1000 × 9.81 × 0.2. Open side: 0 + 13 600 × 9.81 × 0.2. So p = 26 683 − 1962 = 24 721 Pa, about 24.7 kPa. Leaving out the water column gives 26.7 kPa, which matches no option.

**Q8. RRB JE CBT-2 Mechanical, 19 September 2019 (Shift 2).** In a differential manometer, a head of 0.5 m of fluid A in limb 1 is found to balance a head of 0.3 m of fluid B in limb 2. The atmospheric pressure is 760 mm of mercury. The ratio of specific gravities of A to B is: (a) 0.25 (b) 2 (c) 0.6 (d) 4

*Answer: (c).* Balanced columns give equal pressures: ρ\_A g × 0.5 = ρ\_B g × 0.3, so S\_A/S\_B = 0.3/0.5 = 0.6. The atmospheric pressure acts on both limbs and cancels; it is there to distract you.

## 3. Hydrostatic forces, buoyancy and floatation

This sub-topic has two halves: the force a liquid puts on a submerged surface and where it acts, and the upthrust on a floating or submerged body and whether that body is stable. The centre-of-pressure formula and the two stability rules (M above G for a floating body, B above G for a submerged one) are asked in every paper.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Total pressure | The resultant force a liquid at rest exerts on a surface, acting normal to it. For a plane surface F = ρgAh̄, where h̄ is the depth of the centroid. The force is the same for a vertical, inclined or horizontal surface with the same A and h̄. |
| Centre of pressure | The point where the total pressure acts. Pressure grows with depth, so it lies below the centroid. For a vertical surface its depth is h\* = h̄ + I\_G/(Ah̄). The deeper the surface, the closer it comes to the centroid; on a horizontal surface the two coincide. |
| Standard cases | A vertical rectangle of depth d with its top edge in the free surface: centre of pressure at 2d/3 depth. A vertical triangle with its base in the surface: d/2. With its apex in the surface: 3d/4. |
| Curved surfaces | The horizontal component of the force equals the force on the vertical projection of the surface. The vertical component equals the weight of liquid (real or imaginary) standing vertically above the surface. |
| Buoyancy (Archimedes' principle) | A body immersed in a fluid is pushed up by a force equal to the weight of the fluid it displaces. A floating body displaces exactly its own weight. |
| Centre of buoyancy (B) | The point through which the buoyant force acts: the centroid of the displaced volume, that is, of the immersed part of the body. It is not the centre of gravity G of the body. |
| Metacentre (M) and metacentric height | When a floating body tilts slightly, the line of the new buoyant force cuts the body's axis at the metacentre M. The metacentric height is GM = BM − BG, with BM = I/V. Here I is the second moment of the waterline area about the tilt axis and V is the displaced volume. |
| Stability of a floating body | Stable if M is above G (GM positive), unstable if M is below G, neutral if M and G coincide. A ship can be stable with G above B, because B shifts sideways as it heels. A large GM gives a quick, jerky roll, so passenger ships keep it small but positive. |
| Stability of a submerged body | A fully submerged body (a submarine, a balloon) has no waterline area, so BM = 0 and M coincides with B. It is stable only if B is above G, unstable if B is below G, and neutral if they coincide. |
| Fraction immersed | A body of specific gravity S\_b floating in a liquid of specific gravity S\_l has the fraction S\_b/S\_l of its volume under the surface. Ice (0.92) in sea water (1.025) floats about 90% under. |

### Formulas to memorise

```math
F = \rho g A \bar{h} \qquad h^* = \bar{h} + \frac{I_G}{A\bar{h}} \quad \text{(vertical)} \qquad h^* = \bar{h} + \frac{I_G \sin^2\theta}{A\bar{h}} \quad \text{(inclined)}
```

```math
I_G:\quad \text{rectangle } \frac{bd^3}{12} \qquad \text{triangle } \frac{bh^3}{36} \qquad \text{circle } \frac{\pi d^4}{64}
```

```math
F_B = \rho g V_{\text{displaced}} \qquad \text{fraction immersed} = \frac{S_b}{S_l}
```

```math
GM = BM - BG \qquad BM = \frac{I}{V}
```

### Past exam questions with solutions

**Q1. SSC JE Civil, 16 November 2022 (Shift 1).** Total pressure is a force exerted by a fluid when static mass of the fluid comes in contact with a plane or curved surface. The point of application of total pressure on the surface is known as \_\_\_\_\_\_\_\_\_. (a) centre of pressure (b) centroid (c) centre of point (d) centre of gravity

*Answer: (a).* The total pressure acts at the centre of pressure. Because pressure grows with depth, this point lies below the centroid of the surface (except on a horizontal surface, where they coincide).

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A rectangular plane surface is 2 m wide and 3 m deep. It lies in a vertical plane in water. Determine the position of centre of pressure on the plane surface when its upper edge is horizontal and coincides with the water surface. (a) 0.5 m (b) 1.0 m (c) 1.5 m (d) 2 m

*Answer: (d).* h̄ = 1.5 m, A = 6 m² and I\_G = 2 × 3³/12 = 4.5 m⁴. So h\* = 1.5 + 4.5/(6 × 1.5) = 1.5 + 0.5 = 2.0 m below the surface. The shortcut is two-thirds of the depth. Option (c) is the centroid, the usual trap.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** The horizontal force on a curved surface immersed in a liquid equals: (a) the weight of the column of liquid above the surface (b) the pressure at the centroid multiplied by the area (c) the force on the vertical projection on the surface (d) the pressure multiplied by the average height of area

*Answer: (c).* Only the vertical projection matters for the horizontal component. Option (a) is the vertical component. Option (b) is the plane-surface formula, which does not give the horizontal force on a curved surface.

**Q4. SSC JE Mechanical, 3 March 2017 (Morning).** Force of buoyancy on a floating body equals \_\_\_\_\_\_\_\_. (a) total pressure on the vertical projection of the body (b) total pressure on the horizontal projection of the body (c) weight of the liquid equal to the volume of the body (d) weight of the liquid equal to the immersed volume of the body

*Answer: (d).* Only the immersed part displaces liquid, so the upthrust is the weight of liquid of that volume. Option (c) is true only for a body that is fully submerged.

**Q5. RSSB JE Mechanical (Degree), 10 February 2025.** The buoyant force acting on a floating body passes through the: (a) centroid of the displaced volume (b) metacenter of the body (c) centre of gravity of the body (d) centroid of volume of the body

*Answer: (a).* That point is the centre of buoyancy B. For a floating body it differs from the centroid of the whole body, because only part of the body is under the liquid.

**Q6. SSC JE Mechanical, 29 January 2018 (Evening).** A piece of metal of specific gravity 7 floats in mercury of specific gravity 13.6. What fraction of its volume is under mercury? (a) 0.5 (b) 0.4 (c) 0.515 (d) 0.2

*Answer: (c).* Weight equals buoyancy: 7 × V = 13.6 × V\_immersed. So the fraction under mercury is 7/13.6 = 0.515.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** Which is the condition for stable equilibrium of a floating body? (a) The centre of buoyancy should be above centre of gravity (b) The centre of buoyancy should be below centre of gravity (c) The metacentre should be above centre of gravity (d) The metacentre should be below centre of gravity

*Answer: (c).* A floating body is stable when GM is positive, that is, M lies above G. Option (a) is the rule for a submerged body. Most ships float with B below G and are still stable, because M is above G.

**Q8. JSSC JE Re-Exam, 31 October 2022 (Paper I).** A submerged body will be stable when its: (a) centre of buoyancy is above its centre of gravity (b) centre of gravity is above its centre of buoyancy (c) meta centre is above its centre of gravity (d) meta centre is above its centre of buoyancy

*Answer: (a).* A fully submerged body has no waterline area, so M coincides with B, and "M above G" becomes "B above G". Then any tilt sets up a couple that turns the body back upright.

## 4. Fluid kinematics

Kinematics describes how a fluid moves without asking what force moves it. Questions test the continuity equation (as a law and as a sum), the kinds of flow, the two parts of acceleration, and the meaning of velocity potential, stream function and vortex flow.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Steady and unsteady flow | Steady: velocity, pressure and density at a point do not change with time (∂V/∂t = 0). Unsteady: they do. |
| Uniform and non-uniform flow | Uniform: at a given instant the velocity is the same at every point along the flow (∂V/∂s = 0). Non-uniform: it changes from point to point, as in a tapering pipe. |
| Laminar and turbulent flow | Laminar: particles move in smooth layers. Turbulent: they move irregularly and mix. In a pipe, Re below about 2000 is laminar and above about 4000 turbulent (sub-topic 7). |
| Compressible and incompressible flow | Incompressible: the density stays constant (liquids, and gases at low speed). Compressible: the density changes (gases at high speed). |
| Rotational and irrotational flow | Irrotational: the fluid particles do not spin about their own centres, so ω = ½(∂v/∂x − ∂u/∂y) = 0. Rotational: they do spin. |
| Streamline, pathline, streakline | A streamline is everywhere tangent to the velocity at one instant, so no flow crosses it. A pathline is the track of one particle over time. A streakline joins all the particles that have passed through one point, like dye from a nozzle. In steady flow all three coincide. |
| Continuity equation | Conservation of mass. In steady flow through a pipe, ρ₁A₁V₁ = ρ₂A₂V₂; for a liquid this becomes Q = A₁V₁ = A₂V₂. In differential form, ∂(ρu)/∂x + ∂(ρv)/∂y + ∂(ρw)/∂z = 0 for steady flow, and ∂u/∂x + ∂v/∂y + ∂w/∂z = 0 for incompressible flow. |
| Local and convective acceleration | Total acceleration = local + convective. Local acceleration (∂V/∂t) comes from change with time; convective acceleration (V ∂V/∂s) comes from change with position. Steady flow has no local part, and uniform flow has no convective part. |
| Velocity potential (φ) | A function whose slopes give the velocity: u = −∂φ/∂x, v = −∂φ/∂y. It exists only when the flow is irrotational. If φ also satisfies Laplace's equation, the flow satisfies continuity. |
| Stream function (ψ) | A function whose difference between two streamlines equals the flow between them: u = −∂ψ/∂y, v = ∂ψ/∂x (sign conventions vary between books). It exists for any two-dimensional incompressible flow. Lines of constant ψ (streamlines) cross lines of constant φ at right angles; the grid they make is the flow net. |
| Forced vortex | The fluid turns like a solid body because an outside torque drives it, as in a stirred cup or a pump impeller. Its velocity is v = ωr, and the flow is rotational. Its free surface is a paraboloid. |
| Free vortex | The fluid turns with no outside torque, so its angular momentum is kept: v × r = constant, v = C/r. Examples are a whirlpool and the flow round a bend. The flow is irrotational everywhere except at the centre. |

### Formulas to memorise

```math
Q = A_1 V_1 = A_2 V_2 \qquad \rho_1 A_1 V_1 = \rho_2 A_2 V_2
```

```math
\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 \quad \text{(incompressible)} \qquad \frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} + \frac{\partial (\rho w)}{\partial z} = 0 \quad \text{(steady, compressible)}
```

```math
a_s = \underbrace{\frac{\partial V}{\partial t}}_{\text{local}} + \underbrace{V \frac{\partial V}{\partial s}}_{\text{convective}}
```

```math
\omega_z = \frac{1}{2}\left(\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right) \qquad u = -\frac{\partial \phi}{\partial x} \qquad v = -\frac{\partial \phi}{\partial y}
```

```math
\text{Forced vortex: } v = \omega r, \quad z = \frac{\omega^2 r^2}{2g} \qquad \text{Free vortex: } v r = C
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Which of the following equations is derived based on the law of conservation of mass? (a) continuity equation (b) Bernoulli's equation (c) Reynolds equation (d) Darcy-Weisbach equation

*Answer: (a).* Continuity says that what flows in must flow out when nothing is stored. Bernoulli's equation comes from energy (or momentum along a streamline), and Darcy–Weisbach gives the friction loss in a pipe.

**Q2. SSC JE Civil, 30 October 2020 (Morning).** When 0.1 m³/s water flows through a pipe of area 0.25 m², which later reduces to 0.1 m², what is the velocity of flow in the reduced pipe? (a) 2.0 m/s (b) 0.5 m/s (c) 1.0 m/s (d) 1.5 m/s

*Answer: (c).* The discharge is the same everywhere along the pipe, so V = Q/A = 0.1/0.1 = 1.0 m/s. In the larger section it was 0.1/0.25 = 0.4 m/s.

**Q3. JSSC JE Re-Exam, 4 November 2022 (Paper I).** A pipe of cross-sectional area of 100 mm² carries water at a velocity of 25 m/sec. Then this pipe branches into two pipes of cross-sectional area 50 mm². The velocity of water in the first branch is 10 m/sec. What is the velocity of the second pipe? (a) 40 m/sec (b) 10 m/sec (c) 12.5 m/sec (d) 25 m/sec

*Answer: (a).* Flow in equals the sum of flows out: 100 × 25 = 50 × 10 + 50 × V₂. So 2500 = 500 + 50V₂, and V₂ = 40 m/s.

**Q4. SSC JE Mechanical, 22 March 2021 (Evening).** A continuity equation for two-dimensional compressible flow is given by: (a) ∂u/∂x + (∂v/∂x)(ρuv) = 0 (b) u(∂u/∂x) + v(∂v/∂x) = 0 (c) ∂(ρu)/∂x + ∂(ρv)/∂y = 0 (d) ∂u/∂x + ∂v/∂x = 0

*Answer: (c).* In compressible flow the density changes, so it must stay inside the derivatives. Take ρ out as a constant and you get the incompressible form, ∂u/∂x + ∂v/∂y = 0. Option (d) even differentiates v with respect to x.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** A flow field which has only convective acceleration is: (a) a steady uniform flow (b) an unsteady uniform flow (c) a steady non-uniform flow (d) all of the above

*Answer: (c).* No local acceleration means nothing changes with time, so the flow is steady. Some convective acceleration means the velocity changes from point to point, so it is non-uniform. Steady flow through a tapering pipe is the usual example.

**Q6. ESE Mechanical 2015 (Paper 1).** In a stream line steady flow, two points A and B on a stream line are 1 m apart and the flow velocity varies uniformly from 2 m/s to 5 m/s. What is the acceleration of fluid at B? (a) 3 m/s² (b) 6 m/s² (c) 9 m/s² (d) 15 m/s²

*Answer: (d).* The flow is steady, so only the convective part remains: a = V dV/ds. The velocity gradient is (5 − 2)/1 = 3 s⁻¹, and at B the velocity is 5 m/s, so a = 5 × 3 = 15 m/s². At A it would be 2 × 3 = 6 m/s², which is option (b).

**Q7. SSC JE Civil, 23 March 2021 (Evening).** If velocity potential (ϕ) exists in a fluid flow, then the flow is said to be: (a) turbulent (b) irrotational (c) rotational (d) laminar

*Answer: (b).* With u = −∂φ/∂x and v = −∂φ/∂y, the rotation ∂v/∂x − ∂u/∂y = −∂²φ/∂x∂y + ∂²φ/∂y∂x = 0. So a velocity potential can exist only in irrotational flow.

**Q8. MP Vyapam Sub Engineer Civil, 6 November 2022 (Shift 1).** The tangential velocity of the water element having a free vortex is: (a) directly proportional to its distance from the centre (b) inversely proportional to its distance from the centre (c) directly proportional to its (distance)² from the centre (d) inversely proportional to its (distance)² from the centre

*Answer: (b).* In a free vortex no torque acts, so the angular momentum per unit mass, v × r, stays constant and v = C/r. Option (a) describes the forced vortex, v = ωr.

## 5. Fluid dynamics: Bernoulli and flow measurement

Bernoulli's equation sits at the centre of the subject: its assumptions, its three heads, and the meters built on it. Learn which meter measures what (a venturimeter gives the flow rate, a Pitot-static tube the velocity at a point), the order of their discharge coefficients, and the one-line Bernoulli sum.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Euler's equation of motion | Newton's second law along a streamline for a fluid without viscosity, counting only pressure and gravity forces: dp/ρ + g dz + V dV = 0. Integrating it for an incompressible fluid gives Bernoulli's equation. |
| Equations named by the forces they count | Euler's equation: pressure and gravity. Navier–Stokes equations: viscous forces as well. Reynolds equations: the extra turbulent stresses in turbulent flow. |
| Bernoulli's equation | Along a streamline in steady, ideal, incompressible flow, the total head stays constant: p/(ρg) + V²/(2g) + z = constant. Each term is energy per unit weight, in metres: the pressure head, the velocity (kinetic) head and the datum (potential) head. |
| Assumptions of Bernoulli's equation | Ideal (non-viscous) fluid, steady flow, incompressible flow, along one streamline, and no pump, turbine or heat transfer in between. For a real fluid, add the head loss h\_L between the two sections. Uniform flow is not needed. |
| Piezometric head, HGL and TEL | The piezometric head is p/(ρg) + z. The hydraulic gradient line (HGL) joins the piezometric heads, and the total energy line (TEL) runs above it by V²/(2g). In a pipe of constant diameter the two lines are parallel. |
| Venturimeter | A short converging cone, a throat, and a long diverging cone (5–7° to limit losses). The pressure fall from inlet to throat gives the discharge. Its Cd is high, about 0.95–0.98, and its head loss small. |
| Orifice meter | A thin plate with a sharp-edged hole, clamped in the pipe. It is cheap and compact but loses much more head. Its Cd is about 0.6 (0.60–0.62 for d/D = 0.5). |
| Flow nozzle and rotameter | A flow nozzle lies between the venturimeter and the orifice meter in cost and Cd. A rotameter is a float in a tapered vertical tube; the float's height shows the flow rate directly. |
| Pitot tube | A bent tube with its mouth facing the flow. The flow stops at the mouth (the stagnation point), so the tube reads the stagnation pressure: static plus dynamic. The rise h above the static head gives V = √(2gh). |
| Pitot-static tube | A Pitot tube with static holes in its side (the Prandtl tube). The difference between its two readings is the dynamic pressure ½ρV², which gives the velocity at that point. |
| Momentum equation | The net force on the fluid in a region equals the rate of change of its momentum: F = ρQ(V₂ − V₁). It gives the forces on pipe bends, nozzles and vanes (sub-topic 9). |

### Formulas to memorise

```math
\frac{p}{\rho g} + \frac{V^2}{2g} + z = \text{constant}
```

```math
\frac{p_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{p_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_L
```

```math
Q = C_d \, \frac{a_1 a_2 \sqrt{2gh}}{\sqrt{a_1^2 - a_2^2}} \qquad h = x\left(\frac{S_m}{S} - 1\right)
```

```math
V = C_v \sqrt{2gh} \quad \text{(Pitot tube)} \qquad F = \rho Q (V_2 - V_1)
```

In the venturimeter formula, a₁ and a₂ are the inlet and throat areas, and h is the difference of piezometric heads. A differential manometer reading x of a liquid with specific gravity Sₘ under a fluid of specific gravity S converts to h by the second formula.

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical), 18 August 2025.** The Euler's equation of motion is a statement of: (a) energy balance (b) conservation of momentum for an inviscid fluid (c) conservation of momentum for an incompressible flow (d) conservation of momentum for a real fluid

*Answer: (b).* Euler's equation is Newton's second law for a fluid with no viscosity. Adding viscous forces gives the Navier–Stokes equations, option (d). Bernoulli's equation, its integral, is the one read as an energy balance.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The following are the assumptions of Bernoulli's equation: i. The fluid is ideal ii. The flow is uniform iii. The flow is incompressible. Which of the above points is/are correct? (a) only i and ii (b) only ii and iii (c) only i and iii (d) all of the above i, ii and iii

*Answer: (c).* Bernoulli's equation needs an ideal fluid in steady, incompressible flow. It does not need uniform flow: in a venturimeter the velocity changes along the flow, and that is exactly what the equation is used for. Do not confuse uniform with steady.

**Q3. DRDO CEPTAM Tier-II STA-B Mechanical, 15 June 2026.** Water flows steadily through a horizontal pipe. At section 1, the pressure is 150 kPa and velocity is 2 m/s. At section 2, the velocity increases to 6 m/s. Neglecting friction, the pressure at section 2 is: (a) 134 kPa (b) 120 kPa (c) 100 kPa (d) 150 kPa

*Answer: (a).* The pipe is horizontal, so z cancels. p₂ = p₁ + ½ρ(V₁² − V₂²) = 150 000 + 500 × (4 − 36) = 150 000 − 16 000 = 134 000 Pa. Where the flow speeds up, the pressure falls.

**Q4. UPPCL JE Civil, 2015.** In fluid flow, the line of constant piezometric head passes through two points which have the same: (a) elevation (b) pressure (c) velocity (d) velocity potential

*Answer: (c).* Total head = piezometric head + V²/(2g), and Bernoulli keeps the total head constant. If two points also share the same piezometric head, their velocity heads must be equal, so their velocities are the same.

**Q5. ISRO Scientist (Mechanical), 2015.** Bernoulli's equation is applied to: (a) venturimeter (b) orifice meter (c) Pitot tube meter (d) all of the above

*Answer: (d).* All three turn a change of velocity into a pressure difference and use Bernoulli's equation to get back the velocity. The venturimeter and orifice meter also use continuity to turn it into a discharge.

**Q6. RSSB JE Mechanical (Degree), 10 February 2025.** A venturi meter is used for measuring: (a) flow rate (b) velocity (c) pressure drop (d) total head

*Answer: (a).* A venturimeter measures the discharge through a pipe. The pressure drop is only the reading it uses to work out the flow rate.

**Q7. SSC JE Civil, 11 October 2023 (Shift 1).** The Cd value of an orifice of d/D = 0.5 (d = diameter of orifice and D = diameter of the pipe) lies in the range \_\_\_\_\_\_. (a) 0.95 to 0.98 (b) 0.60 to 0.62 (c) 0.81 to 0.94 (d) 0.70 to 0.80

*Answer: (b).* The jet through an orifice plate contracts to a vena contracta and loses much energy in eddies, so its Cd is only about 0.6. Option (a) is the venturimeter's range.

**Q8. SSC JE Civil, 3 March 2017 (Evening).** The Pitot tube is used to measure: (a) velocity at stagnation point (b) stagnation pressure (c) static pressure (d) dynamic pressure

*Answer: (b).* A plain Pitot tube brings the flow to rest at its mouth, so it reads the stagnation (total) pressure. The velocity at a stagnation point is zero, which rules out (a). Some keys mark dynamic pressure, meaning the Pitot-static tube; this key and most books say stagnation pressure.

**Q9. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** For finding the fluid velocity at any point in a pipe, the following instrument is used: (a) Pitot tube (b) Pitot static tube (c) orificemeter (d) venturimeter

*Answer: (b).* The Pitot-static tube reads the stagnation and static pressures together; their difference, ½ρV², gives the velocity at that point. A venturimeter or orifice meter gives the discharge, which is the mean velocity over the whole section, not the velocity at a point.

## 6. Orifices, mouthpieces and notches

These questions ask the three orifice coefficients and their usual values, the mouthpiece types, and the discharge laws of notches. Two facts carry most of them: Cd = Cc × Cv ≈ 0.64 × 0.98 ≈ 0.62 for a sharp-edged orifice, and a rectangular notch passes Q ∝ H^(3/2) while a V-notch passes Q ∝ H^(5/2).

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Orifice | An opening in the wall or base of a tank through which liquid flows out. A small orifice has a head large compared with its size, so the velocity across it is taken as uniform. A large orifice has a head less than about five times its depth, so the velocity varies over it. |
| Vena contracta | Just beyond a sharp-edged orifice the streamlines keep converging, and the jet narrows to its smallest section about half a diameter downstream. There the streamlines are parallel and the pressure is atmospheric. |
| Coefficient of contraction (Cc) | Area of the jet at the vena contracta divided by the area of the orifice. About 0.61–0.69 (0.64 typical) for a sharp-edged orifice. |
| Coefficient of velocity (Cv) | Actual velocity at the vena contracta divided by the theoretical velocity √(2gH). Friction keeps it just below 1: about 0.97–0.99 (0.98 typical). |
| Coefficient of discharge (Cd) | Actual discharge divided by theoretical discharge, equal to Cc × Cv. About 0.61–0.65 (0.62 typical) for a sharp-edged orifice. |
| Mouthpiece | A short tube, 2 to 3 diameters long, fitted to an orifice. The jet contracts inside it and then expands to fill it, so the outlet runs full and the discharge rises. External cylindrical mouthpiece: Cd about 0.855. Convergent–divergent: about 1. Internal (Borda) mouthpiece: 0.5 running free, 0.707 running full. |
| Time to empty a tank | Draining from head H₁ to H₂ through an orifice of area a in a tank of plan area A takes T = 2A(√H₁ − √H₂)/(Cd a √(2g)). |
| Notch and weir | A notch is an opening in the side of a measuring tank whose top is above the liquid surface. A weir is the same idea built across a river or channel. The bottom edge is the sill or crest, and the sheet of water passing over it is the nappe. |
| Rectangular notch | Q = (2/3) Cd L √(2g) H^(3/2), where L is the crest length and H the head over the crest. |
| Triangular (V) notch | Q = (8/15) Cd tan(θ/2) √(2g) H^(5/2). It is the most accurate notch for small discharges, because a small flow still gives a readable head. For a right-angled notch with Cd = 0.6, Q ≈ 1.417 H^(5/2). |
| Trapezoidal and Cipolletti weirs | A trapezoidal notch acts as a rectangular notch plus a V-notch. The Cipolletti weir is trapezoidal with side slopes of 1 horizontal to 4 vertical. The extra flow through its sloping sides makes up for the end contractions, so no correction is needed. |
| End contractions and suppressed weir | End contractions narrow the nappe; Francis's formula cuts the effective length by 0.1nH for n contractions. A suppressed weir has a crest as wide as the channel, so it has no end contractions. Its nappe needs ventilating, to keep the air under it at atmospheric pressure. |

### Formulas to memorise

```math
C_d = C_c \times C_v \qquad V_{th} = \sqrt{2gH} \qquad Q = C_d \, a \sqrt{2gH}
```

```math
Q_{\text{rect}} = \frac{2}{3} C_d L \sqrt{2g}\, H^{3/2} \qquad Q_{V} = \frac{8}{15} C_d \tan\frac{\theta}{2} \sqrt{2g}\, H^{5/2}
```

```math
\text{Francis: } Q = 1.84\,(L - 0.1\,n H)\, H^{3/2} \qquad \text{Cipolletti: } Q = 1.86\, L H^{3/2}
```

```math
T = \frac{2A\left(\sqrt{H_1} - \sqrt{H_2}\right)}{C_d \, a \sqrt{2g}}
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** The cross-sectional area of the jet at the vena contracta is: (a) more than that at the orifice (b) less than that of the orifice (c) equal to that of the orifice (d) none of the above

*Answer: (b).* The streamlines approaching a sharp edge cannot turn the corner at once, so they keep converging after the orifice. The jet is narrowest at the vena contracta, and Cc is less than 1.

**Q2. SSC JE Mechanical, 27 October 2020 (Morning).** The value of the coefficient of velocity for sharp-edged orifices is: (a) 0.41 (b) 0.98 (c) 0.85 (d) 0.66

*Answer: (b).* Only a little friction acts on the short path through the orifice, so the jet keeps about 98% of its ideal speed. Do not mix it up with Cc (about 0.64) or Cd (about 0.62).

**Q3. DDA JE Civil, 28 March 2023 (Shift 3).** Calculate the theoretical velocity of the jet at vena contracta of an orifice if the head of water over the orifice is 20 m. Consider the acceleration due to gravity to be 10 m/s². (a) 10 m/s (b) 25 m/s (c) 12.5 m/s (d) 20 m/s

*Answer: (d).* By Torricelli's theorem, V = √(2gH) = √(2 × 10 × 20) = √400 = 20 m/s. The actual velocity would be Cv times this.

**Q4. SSC JE Mechanical, 24 January 2018 (Morning).** The length of the mouthpiece as compared to the diameter is: (a) 5 to 6 times (b) 6 to 8 times (c) 2 to 3 times (d) 1 to 1.5 times

*Answer: (c).* The tube must be long enough for the contracted jet to expand and fill it again. Much longer, and pipe friction eats up the gain in discharge.

**Q5. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** For a suppressed weir: (a) the crest length is equal to the width of channel (b) the crest length is more than the width of channel (c) the crest length is less than the width of channel (d) none of the above

*Answer: (a).* The crest spans the full width of the channel, so the end contractions are suppressed. A weir with a shorter crest than the channel is a contracted weir.

**Q6. DSSSB JE Civil, 20 November 2019 (Shift 3).** What is the discharge of water flowing over a rectangular notch of 2 m length, where the constant head over the notch is 300 mm, taking coefficient of discharge as 0.6? (a) 0.77 m³/s (b) 0.88 m³/s (c) 0.582 m³/s (d) 0.682 m³/s

*Answer: (c).* Q = (2/3) × 0.6 × 2 × √(2 × 9.81) × 0.3^1.5 = 0.8 × 4.429 × 0.1643 = 0.582 m³/s. Change the head to metres first.

**Q7. RSMSSB JE Civil (Degree), 22 February 2025.** The discharge through a V-notch varies as (where H is the head): (a) H (b) H^(5/2) (c) H^(1/2) (d) H^(3/2)

*Answer: (b).* In a V-notch the width of the flow grows with H as well as the velocity, which gives one more power of H than a rectangular notch: H^(3/2) × H = H^(5/2). Option (d) is the rectangular notch.

**Q8. NPCIL SA/ST Mechanical, 8 November 2019 (Shift 1).** The horizontal to vertical side slope in case of Cipolletti weir is: (a) 1 : 1 (b) 1 : 3 (c) 1 : 2 (d) 1 : 4

*Answer: (d).* One horizontal to four vertical. With this slope, the extra flow through the two sloping sides just makes up for the end contractions.

## 7. Viscous flow and flow through pipes

Pipe flow gives the subject's surest calculation marks: the Reynolds number, the Darcy–Weisbach head loss, laminar (Hagen–Poiseuille) flow and the minor losses. Memorise f = 64/Re, the laminar parabola with its maximum velocity twice the mean, and the sudden-expansion loss (V₁ − V₂)²/(2g).

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Reynolds number | Re = ρVD/μ = VD/ν, the ratio of inertia force to viscous force. In a pipe the flow is laminar below about 2000, transitional from 2000 to 4000, and turbulent above about 4000. Many books take 2300 as the critical value. |
| Laminar flow in a pipe (Hagen–Poiseuille) | The velocity profile is a parabola, u = u\_max(1 − r²/R²), with the maximum at the centre equal to twice the mean velocity. The shear stress grows linearly from zero at the centre to its maximum at the wall. The pressure drop is Δp = 32μVL/D², so Q ∝ ΔpD⁴/(μL). |
| Laminar flow between parallel plates | Also a parabola, but the maximum velocity is 1.5 times the mean. The pressure drop is Δp = 12μVL/t², where t is the gap. |
| Darcy–Weisbach equation | The head lost to friction in a pipe: h\_f = fLV²/(2gD), where f is the Darcy friction factor. Some books use the Fanning factor f' = f/4 and write h\_f = 4f'LV²/(2gD); check which one the options use. |
| Friction factor | Laminar flow: f = 64/Re, whatever the roughness. Turbulent flow in smooth pipes: Blasius's f = 0.316/Re^0.25, for Re up to 10⁵. In rough pipes f depends on Re and on the relative roughness ε/D; the Moody chart plots it. In fully rough flow it depends on ε/D alone. |
| Minor losses | Losses at fittings and changes of section. Sudden expansion: (V₁ − V₂)²/(2g). Sudden contraction: (1/Cc − 1)²V₂²/(2g), about 0.375V₂²/(2g) when Cc = 0.62. Entry to a pipe: 0.5V²/(2g). Exit into a tank: V²/(2g). Bends and valves: kV²/(2g). |
| Pipes in series and in parallel | In series, the same discharge flows through every pipe and the head losses add. In parallel, every branch has the same head loss and the discharges add. An equivalent pipe has the same loss as the series: L/D⁵ = ΣLᵢ/Dᵢ⁵ (Dupuit's equation). |
| Power transmission through a pipe | The power delivered at the outlet is ρgQ(H − h\_f). It is greatest when h\_f = H/3, and the efficiency of transmission is then 2/3 (66.7%). |
| Water hammer | The pressure rise when a valve in a long pipe is closed suddenly. For instant closure in a rigid pipe, Δp = ρCV, where C is the speed of sound in water (about 1400 m/s). |

### Formulas to memorise

```math
Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu} \qquad h_f = \frac{f L V^2}{2 g D}
```

```math
f = \frac{64}{Re} \quad \text{(laminar)} \qquad f = \frac{0.316}{Re^{1/4}} \quad \text{(Blasius, smooth turbulent)}
```

```math
u = u_{\max}\left(1 - \frac{r^2}{R^2}\right) \qquad u_{\max} = 2\bar{V} \qquad \Delta p = \frac{32 \mu \bar{V} L}{D^2} \qquad Q = \frac{\pi \, \Delta p \, D^4}{128 \mu L}
```

```math
h_{\text{exp}} = \frac{(V_1 - V_2)^2}{2g} \qquad h_{\text{entry}} = 0.5\,\frac{V^2}{2g} \qquad h_{\text{exit}} = \frac{V^2}{2g}
```

```math
P_{\max} \text{ when } h_f = \frac{H}{3} \qquad \eta_{\max} = \frac{2}{3} \qquad \Delta p_{\text{hammer}} = \rho C V
```

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The friction factor for laminar flow in pipes is given by (where Re is the Reynolds number): (a) 16/Re (b) 64/Re (c) 0.079/Re^0.25 (d) 0.316/Re^0.25

*Answer: (b).* Hagen–Poiseuille's Δp put into h\_f = fLV²/(2gD) gives f = 64/Re. 16/Re is the same thing as a Fanning factor. 0.316/Re^0.25 is Blasius's turbulent formula, and 0.079/Re^0.25 is its Fanning form.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025.** The Reynolds number for flow of a fluid in a circular tube is specified at 2500. What will be the Reynolds number when the tube diameter is increased by 20% and the fluid velocity is decreased by 40% keeping the fluid same: (a) 200 (b) 1200 (c) 1800 (d) 3600

*Answer: (c).* For the same fluid, Re ∝ VD. So the new value is 2500 × 1.2 × 0.6 = 1800, and the flow becomes laminar.

**Q3. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** Moody's chart is used to determine the: (a) Reynolds number (b) Nusselt number (c) friction factor (d) surface tension

*Answer: (c).* The Moody chart plots the friction factor f against Re, with one curve for each relative roughness ε/D. You enter it with Re and ε/D and read off f.

**Q4. BSPHCL JE Civil, 8 February 2019 (Batch 1).** For flow through a circular pipe, according to Hagen-Poiseuille's law, the flow rate is directly proportional to the: (a) pipe length (b) density of fluid (c) pressure drop (d) viscosity of fluid

*Answer: (c).* Q = πΔpD⁴/(128μL): the flow rises with the pressure drop and with D⁴, and falls with viscosity and length. Density does not appear at all.

**Q5. SSC JE Mechanical, 16 November 2022 (Shift 2).** For a laminar flow through a circular pipe of diameter 400 mm, the maximum velocity is 2 m/s. What will be the velocity at 8 cm from the wall of the pipe? (a) 1.1 m/s (b) 2.2 m/s (c) 1.28 m/s (d) 1.2 m/s

*Answer: (c).* R = 0.2 m, and 8 cm from the wall is r = 0.2 − 0.08 = 0.12 m from the centre. u = 2 × \[1 − (0.12/0.2)²\] = 2 × 0.64 = 1.28 m/s. Measure r from the centre, not from the wall.

**Q6. ISRO VSSC Technical Assistant (Mechanical), 9 June 2019.** The head loss due to friction in a pipe of 1 m diameter and 1.5 km long when water is flowing with a velocity of 1 m/s is (Darcy's friction factor f = 0.02 and acceleration due to gravity g = 10 m/s²): (a) 1.5 m (b) 0.5 m (c) 1 m (d) 2 m

*Answer: (a).* h\_f = fLV²/(2gD) = 0.02 × 1500 × 1² ÷ (2 × 10 × 1) = 30/20 = 1.5 m. Turn the 1.5 km into 1500 m first.

**Q7. SSC JE Mechanical, 27 January 2018 (Evening).** A head loss in a sudden expansion from 6 cm diameter pipe to 12 cm diameter pipe in terms of velocity v₁ in the smaller diameter pipe is: (a) 3/16 (v₁²/2g) (b) 5/16 (v₁²/2g) (c) 7/16 (v₁²/2g) (d) 9/16 (v₁²/2g)

*Answer: (d).* Doubling the diameter makes the area four times larger, so v₂ = v₁/4. The loss is (v₁ − v₁/4)²/(2g) = (3/4)² v₁²/(2g) = 9/16 (v₁²/2g).

**Q8. VIZAG MT Mechanical, 2015.** The power transmitted through a pipe is maximum when the loss of head due to friction is given by (H = head supplied): (a) H/4 (b) H/3 (c) H/2 (d) 2H/3

*Answer: (b).* The power is ρgQ(H − h\_f), and h\_f grows as Q². Setting dP/dQ = 0 gives H − 3h\_f = 0, so h\_f = H/3. The efficiency is then (H − H/3)/H = 2/3.

## 8. Dimensional analysis, boundary layer and drag

This is the lightest sub-topic. Most questions ask which dimensionless number is which ratio of forces, a few ask boundary-layer facts, and the rest ask where drag comes from. Learn the table of numbers, the 99% definition of boundary-layer thickness, and that a bluff body's drag is mostly pressure (form) drag.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Dimensional analysis | Writing a physical relation in terms of dimensionless groups, using the dimensions (M, L, T) of its quantities. It checks equations and plans model tests. |
| Buckingham's π theorem | A problem with n variables containing m fundamental dimensions can be written with (n − m) dimensionless π terms. Rayleigh's method is the simpler choice when there are only a few variables. |
| Reynolds number | Inertia force ÷ viscous force = ρVL/μ. It governs pipe flow and bodies moving fully submerged (submarines, low-speed aircraft). |
| Froude number | √(inertia force ÷ gravity force) = V/√(gL). It governs flow with a free surface: open channels, spillways, ships' waves. |
| Euler number | Relates the pressure force to the inertia force. Indian textbooks write it as √(inertia force ÷ pressure force) = V/√(p/ρ); others use Δp/(ρV²). It matters where pressure dominates, as in cavitation. |
| Weber number | √(inertia force ÷ surface tension force) = V/√(σ/(ρL)). It matters where surface tension does: drops, sprays, capillary flow, thin films. |
| Mach number | √(inertia force ÷ elastic force) = V/C, the flow speed over the speed of sound. Below 0.3 a gas flow can be treated as incompressible. Subsonic is below about 0.8, transonic about 0.8–1.2, supersonic 1.2–5, and hypersonic above 5. |
| Model laws (similitude) | A model behaves like its prototype when it is geometrically, kinematically and dynamically similar. In practice the governing number is kept equal: the Reynolds model law for pipes and submerged bodies, the Froude model law for ships, spillways and channels. |
| Boundary layer | The thin layer next to a solid surface in which the velocity rises from zero at the wall (no slip) to the free-stream value U. Outside it the fluid behaves as if it had no viscosity. Prandtl introduced the idea in 1904. |
| Boundary layer thicknesses | The nominal thickness δ is the distance from the wall to where u = 0.99U. The displacement thickness δ\* is how far the wall would have to move to pass the same flow of ideal fluid; the momentum thickness θ is the same idea for momentum. Always δ > δ\* > θ. |
| Growth along a flat plate | The layer starts laminar at the leading edge and thickens downstream: δ ∝ √x while laminar, δ ∝ x^(4/5) once turbulent. It turns turbulent at about Reₓ = 5 × 10⁵. A turbulent layer still has a thin laminar sub-layer next to the wall. |
| Separation | Where the pressure rises along the flow (an adverse pressure gradient), the slow fluid near the wall is stopped and pushed back, and the boundary layer leaves the surface. Separation starts where ∂u/∂y = 0 at the wall and leaves a wake of eddies. |
| Drag and lift | Drag is the force on a body along the flow, and lift is the force across it. Both come from the pressure and shear (viscous) forces on the surface. Drag = C\_D × ½ρV²A, and lift = C\_L × ½ρV²A. |
| Friction drag and pressure drag | Friction (skin) drag comes from the shear stress on the surface and dominates for a streamlined body or a plate lying along the flow. Pressure (form) drag comes from the low pressure in the wake after separation and dominates for a bluff body or a plate across the flow. |
| Stokes' law | For a sphere moving very slowly (Re below 1), the drag is F = 3πμDV and C\_D = 24/Re. It gives the settling speed of fine particles and is the basis of the falling-sphere viscometer. |

### Formulas to memorise

```math
Re = \frac{\rho V L}{\mu} \qquad Fr = \frac{V}{\sqrt{gL}} \qquad Eu = \frac{V}{\sqrt{p/\rho}} \qquad We = \frac{V}{\sqrt{\sigma/(\rho L)}} \qquad Ma = \frac{V}{C}
```

```math
\text{Number of } \pi \text{ terms} = n - m
```

```math
\delta_{\text{laminar}} = \frac{5x}{\sqrt{Re_x}} \qquad \delta_{\text{turbulent}} = \frac{0.37x}{Re_x^{1/5}} \qquad Re_x = \frac{U x}{\nu}
```

```math
F_D = C_D \cdot \tfrac{1}{2}\rho V^2 A \qquad F_L = C_L \cdot \tfrac{1}{2}\rho V^2 A \qquad F_{\text{Stokes}} = 3\pi\mu D V \qquad C_D = \frac{24}{Re}
```

### Past exam questions with solutions

**Q1. CIL MT Mechanical, 2020.** Euler's dimensionless number relates the following: (a) viscous force and buoyancy force (b) viscous force and inertial force (c) inertial force and gravity force (d) pressure force and inertial force

*Answer: (d).* The Euler number compares the pressure force with the inertia force. Option (b) is the Reynolds number (inverted) and option (c) the Froude number.

**Q2. JKSSB JE Civil, 27 October 2021 (Shift 1).** The ratio of the square root of inertia force to surface tension force is known as: (a) Froude number (b) Euler number (c) Weber number (d) Reynolds number

*Answer: (c).* We = √(inertia force ÷ surface tension force). The partner pairs to learn: Froude with gravity, Euler with pressure, Reynolds with viscosity, Mach with elasticity.

**Q3. UPRVUNL JE Mechanical, 24 October 2021 (Shift 2).** A flow having Mach number (Ma) between 1.2 and 3.0 is classified as: (a) transonic flow (b) hypersonic flow (c) supersonic flow (d) subsonic flow

*Answer: (c).* Supersonic flow runs from about Ma 1.2 to 5. Transonic flow lies around Ma 1 (about 0.8 to 1.2), and hypersonic flow begins above Ma 5.

**Q4. HPCL Engineer (Mechanical), 12 August 2021 (Shift 1).** The nominal thickness of the boundary layer is defined when the velocity reaches the velocity of the free stream by: (a) 90% (b) 99% (c) 95% (d) 97%

*Answer: (b).* The velocity approaches the free-stream value only gradually, so the edge is defined where u = 0.99U.

**Q5. UPRVUNL AE Mechanical, 2016.** Thickness of laminar boundary layer on flat plate: (a) increases with increase in distance from leading edge (b) decreases with increase in distance from leading edge (c) constant with increase in distance from leading edge (d) increases with increase in Reynolds number at given location

*Answer: (a).* δ = 5x/√Reₓ = 5√(νx/U), so δ grows as √x downstream. At a fixed place, a higher Reynolds number (faster flow) makes the layer thinner, so (d) is wrong.

**Q6. Kerala PSC AE (Mechanical), 18 August 2025.** The drag force exerted by a fluid on a body immersed in the fluid is due to: (a) pressure and viscous forces (b) pressure and gravity forces (c) pressure and surface tension forces (d) pressure and inertia forces

*Answer: (a).* The pressure distribution gives the pressure (form) drag, and the viscous shear gives the friction drag. Together they make the total drag.

**Q7. GPSC AE Civil, 2020 (Part B).** When compared to a streamlined body, a bluff body will have: (a) more pressure drag and more friction drag (b) more pressure drag and less friction drag (c) less pressure drag and more friction drag (d) less pressure drag and less friction drag

*Answer: (b).* The flow separates early from a bluff body and leaves a wide, low-pressure wake, so its pressure drag is large. Less of its surface carries an attached boundary layer along the flow, so its friction drag is smaller. A streamlined body is the reverse.

**Q8. BHEL Engineer Trainee (Civil), 26 May 2019.** A plate of negligible thickness is held perpendicular to the flow direction. The drag force experienced on the plate is mainly due to: (a) either friction drag or form drag, depends on the Froude number of flow (b) friction drag (c) combination of friction drag and form drag (d) form drag

*Answer: (d).* The shear stress acts along the faces of the plate, which now lie across the flow, so it adds nothing to the drag. The drag comes from the high pressure in front and the low-pressure wake behind: form drag. Turned parallel to the flow, the same plate would have only friction drag.

## 9. Impact of jets and hydraulic turbines

Turbines carry more of this subject's marks in RRB JE than anything else. The questions are about classification (impulse or reaction, head, direction of flow, specific speed), the Pelton wheel's numbers, the draft tube and the efficiencies. The force of a jet on a plate is the idea underneath them all.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Jet on a fixed plate | A jet of area a and velocity V hitting a flat plate held normal to it is turned through 90°, and the force along the jet is F = ρaV². On a fixed plate inclined at θ to the jet, the force normal to the plate is ρaV² sinθ. A curved vane that turns the jet right back (180°) gets twice the force, 2ρaV². |
| Jet on moving plates | A single plate moving away from the jet at speed u feels only the relative velocity: F = ρa(V − u)². A series of plates on a wheel uses the jet's full flow, so F = ρaV(V − u). Its efficiency is greatest at u = V/2: 50% for flat plates, and up to 100% for ideal hemispherical cups. |
| Impulse and reaction turbines | In an impulse turbine the whole available head is turned into velocity in a nozzle, and the jet strikes the buckets at atmospheric pressure (the Pelton wheel). In a reaction turbine only part is turned into velocity first; the water enters the enclosed runner under pressure and fills it (Francis, Kaplan, propeller). |
| Classification by head and flow | High head (above about 250 m) and small flow: Pelton. Medium head (about 60–250 m): Francis. Low head (below about 60 m) and large flow: Kaplan and propeller turbines. |
| Classification by flow direction | Tangential flow: Pelton. Radial inward flow (mixed flow in modern machines): Francis. Axial flow: Kaplan and propeller. |
| Pelton wheel | A tangential-flow impulse turbine with double-cup buckets round a disc, fed by one or more nozzles. A spear (needle) valve controls the flow, and a deflector turns the jet aside when load falls suddenly. The buckets run at about half the jet speed. The jet ratio m = D/d (pitch circle diameter over jet diameter) is usually 11–14, and the number of buckets is about 15 + m/2. |
| Francis turbine | A radial or mixed-flow reaction turbine for medium heads. Water passes through the spiral casing, the guide vanes (wicket gates) and the runner, and leaves through the draft tube. Speed ratio 0.6–0.9; flow ratio 0.15–0.30. |
| Kaplan turbine | An axial-flow reaction turbine for low heads and large flows. Its few runner blades can be turned, which keeps its efficiency high at part load; a propeller turbine is the same with fixed blades. Flow ratio about 0.7 (some questions use 0.6). Runaway speed is 2.5–3 times normal speed. |
| Draft tube | A pipe of gradually widening section from the exit of a reaction turbine's runner down to the tail race. It lets the runner sit above the tail race without losing that height, and it recovers kinetic energy by slowing the water. Its taper is kept below about 8° to stop separation. Its inlet has the lowest pressure, so cavitation is most likely there. A Pelton wheel needs none. |
| Efficiencies | Hydraulic efficiency = power developed by the runner ÷ power supplied by the water at inlet. Mechanical efficiency = shaft power ÷ runner power. Volumetric efficiency = water acting on the runner ÷ water supplied. Overall efficiency = shaft power ÷ water power, about η\_h × η\_m. |
| Specific speed | The speed of a geometrically similar turbine that would develop 1 kW under 1 m head: Ns = N√P/H^(5/4). It fixes the type: Pelton about 8.5–30 with one jet (up to about 50 with several), Francis about 50–255, Kaplan about 255–860. |
| Unit quantities | Unit speed N/√H, unit discharge Q/√H and unit power P/H^(3/2) are the values under a 1 m head. They predict how a turbine behaves when the head changes. |
| Governing | Holding the speed steady as the load changes by adjusting the flow: the spear valve and deflector on a Pelton wheel, the guide vanes on a Francis turbine, and the guide vanes and runner blades on a Kaplan turbine. |

### Formulas to memorise

```math
F_{\text{fixed plate}} = \rho a V^2 \qquad F_{\text{single moving plate}} = \rho a (V - u)^2 \qquad F_{\text{series of plates}} = \rho a V (V - u)
```

```math
\text{Water power} = \rho g Q H \qquad \eta_o = \frac{\text{shaft power}}{\rho g Q H} = \eta_h \times \eta_m
```

```math
\text{Pelton: } V_1 = C_v\sqrt{2gH} \qquad u \approx \frac{V_1}{2} \qquad m = \frac{D}{d} \qquad z = 15 + \frac{m}{2}
```

```math
N_s = \frac{N\sqrt{P}}{H^{5/4}} \qquad N_u = \frac{N}{\sqrt{H}} \qquad Q_u = \frac{Q}{\sqrt{H}} \qquad P_u = \frac{P}{H^{3/2}}
```

```math
\text{Speed ratio} = \frac{u}{\sqrt{2gH}} \qquad \text{Flow ratio} = \frac{V_f}{\sqrt{2gH}}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 27 September 2019 (Evening).** The force exerted by a jet of water on a stationary vertical plate in the direction of the jet is \_\_\_\_\_\_\_\_, where ρ = mass density of the liquid, a = cross-sectional area of the jet, V = velocity of the jet. (a) ρaV² (b) ρaV (c) ρa²V (d) ρaV³

*Answer: (a).* The mass flow ρaV loses all of its velocity V along the jet, so F = ρaV × V = ρaV². Only (a) comes out in newtons.

**Q2. RSSB JE Mechanical (Degree), 10 February 2025.** Pelton turbine is \_\_\_\_\_\_\_\_ turbine. (a) high head and high mass flow rate (b) high head and low mass flow rate (c) low head and high mass flow rate (d) medium head and medium mass flow rate

*Answer: (b).* A Pelton wheel uses a high head through a small jet. Option (c) describes the Kaplan turbine and option (d) the Francis turbine.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** In order to have maximum power from a Pelton turbine, the bucket speed must be: (a) equal to the jet speed (b) half of the jet speed (c) twice the jet speed (d) independent of the jet speed

*Answer: (b).* The power is proportional to u(V − u), which is greatest when u = V/2. Real wheels run a little slower, at about 0.46 times the jet speed, because of friction.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The ratio of the pitch diameter of the Pelton wheel to the diameter of the jet is known as: (a) jet ratio (b) speed ratio (c) speed coefficient (d) pitch ratio

*Answer: (a).* The jet ratio m = D/d is usually 11–14. The speed ratio is something else: the bucket speed divided by √(2gH).

**Q5. SSC JE Mechanical, 27 October 2020 (Evening).** What is the number of buckets on the runner of a Pelton turbine if the jet ratio is 12? (a) 13 (b) 21 (c) 20 (d) 6

*Answer: (b).* Taygun's rule gives z = 15 + m/2 = 15 + 12/2 = 21 buckets.

**Q6. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** A draft tube is not required for a: (a) Francis turbine (b) Kaplan turbine (c) Pelton wheel turbine (d) none of the above

*Answer: (c).* A Pelton wheel works in air at atmospheric pressure, set above the tail race, and the water simply falls from its buckets. Reaction turbines run full of water and need a draft tube.

**Q7. SSC JE Mechanical, 27 September 2019 (Morning).** In a draft tube at the exit of a turbine: (a) the kinetic energy increases (b) the flow is generally laminar (c) sand particles are prevented from entering the turbine (d) the cross-sectional area increases in flow direction

*Answer: (d).* A draft tube is a diffuser. Its area grows, so the water slows and its kinetic energy turns back into pressure; option (a) has it backwards. The flow in it is turbulent.

**Q8. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** In a hydraulic turbine, the ratio of power developed by the runner to the net power supplied by the water at the entrance to the turbine is: (a) hydraulic efficiency (b) mechanical efficiency (c) volumetric efficiency (d) overall efficiency

*Answer: (a).* Runner power over water power is the hydraulic efficiency. Mechanical efficiency is shaft power over runner power, and overall efficiency is shaft power over water power.

**Q9. SSC JE Mechanical, 11 December 2020 (Morning).** Pick the correct order of various turbines with respect to specific speed. (a) Pelton > Kaplan > Francis (b) Francis > Pelton > Kaplan (c) Kaplan > Francis > Pelton (d) Kaplan > Pelton > Francis

*Answer: (c).* Ns = N√P/H^(5/4) is high for low-head, large-flow machines. Kaplan (about 255–860) beats Francis (50–255), which beats Pelton (8.5–30 with one jet).

**Q10. JKSSB JE Mechanical, 2015.** Flow ratio for a Kaplan turbine is given as 0.6 and the head available is 20 meter. Which of the following will be the approximate velocity of flow at the inlet of the runner? (a) 9 m/sec (b) 12 m/sec (c) 15 m/sec (d) 18 m/sec

*Answer: (b).* Flow ratio = V\_f/√(2gH). Here √(2 × 9.81 × 20) = 19.8 m/s, so V\_f = 0.6 × 19.8 = 11.9 m/s, about 12 m/s.

## 10. Pumps

Pump questions mirror the turbine ones: the kinds of pump, the heads and efficiencies, the affinity laws, specific speed and cavitation. Remember that a centrifugal pump works on the forced vortex and is rated by the flow it delivers, and that a reciprocating pump is a positive displacement pump whose slip can turn negative.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Kinds of pump | Rotodynamic pumps (centrifugal, mixed-flow, axial-flow) give the liquid energy through a spinning impeller. Positive displacement pumps (reciprocating, gear, screw, vane) push out a fixed volume each stroke or turn; screw and gear pumps suit viscous oils. |
| Centrifugal pump | An impeller spins in a casing. Liquid enters at the eye and is flung outward, gaining pressure and velocity, and a volute (spiral) casing or a diffuser ring turns the velocity into pressure. A foot valve and strainer keep the suction pipe full. The pump must be primed (filled with liquid) before starting, because an impeller spinning in air makes almost no pressure. |
| Working principle | Forced vortex: the impeller makes the liquid rotate like a solid body, so its pressure head rises with the square of the radius. |
| Impellers and vanes | Closed impellers (shrouded on both sides) suit clean water; semi-open and open impellers suit sewage, slurries and liquids with solids. Vanes are usually curved backward (outlet angle about 20–25°), which gives a stable characteristic that does not overload the motor. |
| Heads | Static head = suction height + delivery height. The manometric head is the head the pump must actually produce: the static head plus all the pipe losses plus the exit velocity head. It equals the rise in head across the pump measured by gauges. |
| Efficiencies | Manometric efficiency = ρgQHₘ ÷ power given to the liquid by the impeller = gHₘ/(V\_w2 u₂). Mechanical efficiency = power given by the impeller ÷ shaft power. Overall efficiency = ρgQHₘ ÷ shaft power = manometric × mechanical (× volumetric). |
| Minimum starting speed | The pump starts to deliver only when the centrifugal head (u₂² − u₁²)/(2g) reaches the manometric head. |
| Affinity laws | For one pump run at different speeds: Q ∝ N, H ∝ N² and P ∝ N³. For similar pumps of different sizes: Q ∝ ND³, H ∝ N²D² and P ∝ N³D⁵. |
| Specific speed of a pump | The speed of a similar pump that delivers 1 m³/s against a 1 m head: Ns = N√Q/Hₘ^(3/4). It is lowest for radial-flow (centrifugal) pumps, higher for mixed-flow pumps and highest for axial-flow pumps. In an axial-flow pump the liquid moves parallel to the shaft, giving a large flow at a low head. |
| Pumps in series and in parallel | In series (multistage), the same flow passes through each pump and the heads add: used for high heads. In parallel, the heads are the same and the flows add: used for large flows. |
| Cavitation and NPSH | If the pressure at the impeller eye falls below the vapour pressure, vapour bubbles form and collapse, pitting the vanes, making noise and vibration and cutting the head and efficiency. Prevent it by keeping the suction pressure high: a small suction lift, a short, wide suction pipe with few bends, and cool liquid. The net positive suction head (NPSH) available must exceed the NPSH the pump needs. Thoma's cavitation factor is σ = NPSH/H. |
| Reciprocating pump | A piston or plunger moving in a cylinder, with suction and delivery valves. A single-acting pump delivers once per revolution, Q = ALN/60; a double-acting pump twice, Q = 2ALN/60. It suits small flows at high heads. |
| Slip | Slip = theoretical discharge − actual discharge, usually quoted as a percentage of the theoretical discharge. Cd = actual ÷ theoretical, normally 0.97–0.99. Negative slip (actual more than theoretical, so Cd above 1) happens with a long suction pipe, a low delivery head and high speed: the water's momentum opens the delivery valve before the suction stroke ends. |
| Air vessels | Closed chambers of air on the suction and delivery pipes close to the cylinder. They smooth the flow, cut the acceleration head and the friction losses, and let the pump run faster without separation. Without an air vessel the average friction head is 2/3 of the maximum. |
| Indicator diagram | The plot of the pressure head in the cylinder against the piston's stroke. Its area is proportional to the work done per stroke. |

### Formulas to memorise

```math
\eta_o = \frac{\rho g Q H_m}{P_{\text{shaft}}} = \eta_{\text{mano}} \times \eta_{\text{mech}} \qquad \eta_{\text{mano}} = \frac{g H_m}{V_{w2}\, u_2}
```

```math
Q \propto N \qquad H \propto N^2 \qquad P \propto N^3 \qquad \text{(similar pumps: } Q \propto N D^3,\ H \propto N^2 D^2,\ P \propto N^3 D^5)
```

```math
N_s = \frac{N\sqrt{Q}}{H_m^{3/4}} \quad \text{(pump)} \qquad N_s = \frac{N\sqrt{P}}{H^{5/4}} \quad \text{(turbine)}
```

```math
\frac{u_2^2 - u_1^2}{2g} = H_m \quad \text{(minimum starting speed)}
```

```math
Q_{th} = \frac{ALN}{60} \ \text{(single-acting)} \qquad Q_{th} = \frac{2ALN}{60} \ \text{(double-acting)} \qquad C_d = \frac{Q_{act}}{Q_{th}} \qquad \text{slip} = \frac{Q_{th} - Q_{act}}{Q_{th}} \times 100
```

### Past exam questions with solutions

**Q1. UPPSC AE Civil, 28 September 2025 (Paper II).** Centrifugal pump works on the principle of: (a) Bernoulli's principle (b) forced vortex flow (c) Newton's second law (d) Pascal's law

*Answer: (b).* The impeller forces the liquid to turn with it, and in a forced vortex the pressure head rises with r². That rise in head is what the pump delivers.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** The head against which a centrifugal pump has to work is known as: (a) manometric head (b) piezometric head (c) static head (d) dynamic head

*Answer: (a).* The manometric head is the static head plus the pipe losses and the exit velocity head. The static head, option (c), is only the vertical height the liquid is lifted.

**Q3. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** In a centrifugal pump, the ratio of output of the pump to the power imparted by the impeller is called: (a) manometric efficiency (b) volumetric efficiency (c) mechanical efficiency (d) overall efficiency

*Answer: (a).* The pump's output, ρgQHₘ, divided by the power the impeller gives the liquid is the manometric efficiency. Mechanical efficiency compares the impeller's power with the shaft power, and overall efficiency compares the output with the shaft power.

**Q4. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 1).** The overall efficiency of a pump is calculated by comparing: (a) the hydraulic power output to the mechanical power input (b) the volumetric flow rate to the pump casing size (c) the manometric head to the fluid velocity (d) the pump speed to the impeller diameter

*Answer: (a).* Overall efficiency = ρgQHₘ ÷ shaft power. The other options are not ratios of power at all.

**Q5. DSSSB JE Mechanical, 6 November 2019 (Shift 2).** If the manometric efficiency and mechanical efficiency of a centrifugal pump are 70% and 80% respectively, determine the overall efficiency of the pump. (a) 0.1 (b) 0.56 (c) 0.53 (d) 0.6

*Answer: (b).* Overall efficiency = manometric × mechanical = 0.7 × 0.8 = 0.56, taking the volumetric efficiency as 1.

**Q6. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1).** Discharge of a centrifugal pump is: (a) inversely proportional to the square of speed of its impeller (b) directly proportional to the speed of its impeller (c) inversely proportional to the speed of its impeller (d) directly proportional to the square of speed of its impeller

*Answer: (b).* For a given pump, Q ∝ N. The head goes as N², which is what option (d) would describe, and the power as N³.

**Q7. SSC JE Civil, 10 October 2023 (Shift 3).** A centrifugal pump, driven by a directly coupled 2 kW motor of speed 1400 rpm, is proposed to be connected to a motor of speed 2800 rpm. The power of the motor should be: (a) 24 kW (b) 4 kW (c) 8 kW (d) 16 kW

*Answer: (d).* Power goes as N³: 2 × (2800/1400)³ = 2 × 8 = 16 kW. Doubling the speed doubles the flow and quadruples the head.

**Q8. MPSC AE Civil Mains, 2017 (Paper 2).** The specific speed (Ns) of the pump is given by the expression: (a) Ns = N√Q/Hm^(5/4) (b) Ns = N√P/Hm^(3/4) (c) Ns = N√Q/Hm^(3/4) (d) Ns = N√P/Hm^(5/4)

*Answer: (c).* A pump is rated by the flow it delivers and a turbine by the power it develops. So the pump's formula has √Q and H^(3/4), while option (d) is the turbine's.

**Q9. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2).** Which characteristic best describes an axial flow pump? (a) The fluid flows parallel to the pump shaft. (b) The fluid flows radially outward from the shaft. (c) The fluid flows perpendicular to the pump shaft. (d) The fluid flow is converted to heat energy.

*Answer: (a).* In an axial-flow (propeller) pump the liquid moves along the shaft. Option (b) describes a centrifugal pump. Axial-flow pumps give large flows at low heads and have the highest specific speed.

**Q10. RSMSSB JE Electrical/Mechanical (Degree), 26 December 2020.** In order to avoid cavitation in centrifugal pumps, which one of the following helps? (a) low suction pressure (b) high delivery pressure (c) low delivery pressure (d) high suction pressure

*Answer: (d).* Cavitation starts where the pressure at the impeller eye falls below the vapour pressure. Keeping the suction pressure high, with a small suction lift and a short, wide suction pipe, prevents it.

**Q11. Kerala PSC AE (Mechanical), 18 August 2025.** For negative value of slip, the coefficient of discharge in a reciprocating pump will be: (a) less than unity (b) more than unity (c) equal to unity (d) infinite

*Answer: (b).* Slip = Q\_th − Q\_act. Negative slip means the actual discharge is more than the theoretical, so Cd = Q\_act/Q\_th is more than 1.

## Sources

Each question's exam and date come from the booklet or page it was taken from; the solutions are written fresh. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. Below they are listed by paper and by the question number in that paper. The other questions come from Testbook solution pages, which name the paper each question appeared in. Where JE papers had no published question on a point, the question comes from another technical exam at the same level (ISRO, DRDO, BHEL, HPCL, state PSC AE papers and ESE). Several come from civil engineering JE and AE papers, which ask the same fluid mechanics. One answer follows the key where books differ, and its solution says so: sub-topic 5 Q8. A few slips in the source wording were corrected, as listed at the end.

- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 65/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- Sub-topic 1: Kerala PSC 050/2023 Q59 (Newton's law of viscosity), [poiseuille and poise](https://testbook.com/question-answer/one-poiseuille-is-equivalent-to-________-poise--621f5a34453a7d58fb65658e), [milk, blood and clay](https://testbook.com/question-answer/milk-blood-and-clay-are-examples-of-_____-fluid--601906a1bcac23a5bece4eee), [ideal plastic fluid](https://testbook.com/question-answer/a-fluid-in-which-shear-is-more-than-the-yield-and--5ff4892a595f2955a3df6171), Kerala PSC 65/2026 Q1 (cohesion), [raindrops](https://testbook.com/question-answer/raindrops-are-spherical-because-of--5e4e89d7f60d5d5b05900982), [capillary rise formula](https://testbook.com/question-answer/what-is-the-height-of-the-fluid-raise-h-when-th--625169e93be905914be2862f), [capillary tube 4 mm](https://testbook.com/question-answer/a-capillary-tube-of-diameter-4-mm-is-dipped-into-a--65316b781c570db5903cd69b), [isothermal bulk modulus](https://testbook.com/question-answer/in-the-isothermal-condition-the-isothermal-bulk-m--5e7225ae5884230d274cf04b)
- Sub-topic 2: Kerala PSC 65/2026 Q2 (hydrostatic law), [hydraulic lift](https://testbook.com/question-answer/which-one-of-the-following-laws-is-applicable-to-a--5cd15f82fdb8bb54038be78c), Kerala PSC 68/2026 Q26 (oil column), [70 cm of mercury](https://testbook.com/question-answer/let-the-atmospheric-pressure-at-sea-level-is-70-cm--60a2a803f4e1e836a6019c60), [simple U-tube reading](https://testbook.com/question-answer/a-simple-u-tube-manometer-connected-to-a-pipe-in-w--6531644ebe922c8340310dca), [small pressure difference](https://testbook.com/question-answer/a-small-pressure-difference-between-two-points-alo--5e0dc169d0b6b10d0622f74c), [U-tube gauge pressure](https://testbook.com/question-answer/a-u-tube-manometer-contains-mercury-13600--6a38cb8fae70a388546d8dcc), [differential manometer](https://testbook.com/question-answer/in-a-differential-manometer-a-head-of-0-5-m-of-fl--621e533aaf15e30f60fc7e91)
- Sub-topic 3: [centre of pressure](https://testbook.com/question-answer/total-pressure-is-a-force-exerted-by-a-fluid-when--637f36b3c289b0d7b9f9ac49), Kerala PSC 68/2026 Q27 (depth of centre of pressure), Kerala PSC 104/2025 Q25 (curved surface), [buoyant force](https://testbook.com/question-answer/force-of-buoyancy-on-a-floating-body-equals-______--5a4dfd5339c6be0e41fd46b3), [line of the buoyant force](https://testbook.com/question-answer/the-buoyant-force-acting-on-a-floating-body-passes--6a757f18895df6a94b778024), [metal in mercury](https://testbook.com/question-answer/a-piece-of-metal-of-specific-gravity-7-floats-in-m--5ddf949cf60d5d14717ff83b), Kerala PSC 68/2026 Q28 (floating body), [submerged body](https://testbook.com/question-answer/a-submerged-body-will-be-stable-when-its--64b256aacd7fafb5b08d6d09)
- Sub-topic 4: Kerala PSC 65/2026 Q5 (continuity), [reducing pipe](https://testbook.com/question-answer/when-0-1-m3s-water-flows-through-a-pipe-of-area-0--601ba5ddb5294f381a870eab), [branching pipe](https://testbook.com/question-answer/a-pipe-of-cross-sectional-area-of-100-mm2-carries--64b13ceccd7fafb5b0708b7f), [compressible continuity](https://testbook.com/question-answer/a-continuity-equation-for-two-dimensional-compress--60880749decbe88cdf39cde8), Kerala PSC 050/2023 Q53 (convective acceleration), [acceleration along a streamline](https://testbook.com/question-answer/in-a-stream-line-steady-flow-two-points-a-and-b-o--5e8ca00ff1b5d40d27cfa017), [velocity potential](https://testbook.com/question-answer/if-velocity-potential-%cf%95-exists-in-a-fluid-flow--6194b9cb8afdbaabbb7b3626), [free vortex](https://testbook.com/question-answer/the-tangential-velocity-of-the-water-element-havin--66936f5f24e2fdc2ef64761a)
- Sub-topic 5: Kerala PSC 104/2025 Q27 (Euler's equation), Kerala PSC 68/2026 Q29 (Bernoulli's assumptions), [horizontal pipe](https://testbook.com/question-answer/water-flows-steadily-through-a-horizontal-pipe-at--6a38cb5ffc8e876e578e2520), [constant piezometric head](https://testbook.com/question-answer/in-fluid-flow-the-line-of-constant-piezometric-he--5ff2f62d8308c9ee0c78af35), [where Bernoulli is applied](https://testbook.com/question-answer/bernoullis-equation-is-applied-to--5847ea65995a2d7c544344d7), [venturi meter](https://testbook.com/question-answer/a-venturi-meter-is-used-for-measuring--6a757ee7a24fc8ee421c5234), [orifice meter Cd](https://testbook.com/question-answer/the-cd-value-of-an-orifice-of-dd-0-5-d-diame--6531640bac6e086c1a27133c), [Pitot tube](https://testbook.com/question-answer/the-pitot-tube-is-used-to-measure--5cda865ffdb8bb05bf0d39b7), Kerala PSC 68/2026 Q31 (Pitot-static tube)
- Sub-topic 6: Kerala PSC 65/2026 Q8 (vena contracta), [Cv of a sharp-edged orifice](https://testbook.com/question-answer/the-value-of-the-coefficient-of-velocity-for-sharp--5ff4632cce9289888f379086), [theoretical jet velocity](https://testbook.com/question-answer/calculate-the-theoretical-velocity-of-the-jet-at-v--644cd63233929264182d3e4f), [mouthpiece length](https://testbook.com/question-answer/the-length-of-the-mouthpiece-as-compared-to-the-di--580df43903282104df3e610f), Kerala PSC 65/2026 Q9 (suppressed weir), [rectangular notch](https://testbook.com/question-answer/what-is-the-discharge-of-water-flowing-over-a-rect--61e01a38e95e4e4a9dcfab0d), [V-notch](https://testbook.com/question-answer/the-discharge-through-a-v-notch-varies-aswhere--6a757a7c3c6bb40ec2d79e34), [Cipolletti weir](https://testbook.com/question-answer/the-horizontal-to-vertical-side-slope-in-case-of-c--5fbe9b01d81adf80f1d92541)
- Sub-topic 7: Kerala PSC 68/2026 Q32 (laminar friction factor), Kerala PSC 104/2025 Q28 (Reynolds number), Kerala PSC 050/2023 Q61 (Moody chart), [Hagen-Poiseuille](https://testbook.com/question-answer/for-flow-through-a-circular-pipe-according-to-hag--63a80186e30db8a9394974a3), [laminar velocity profile](https://testbook.com/question-answer/for-a-laminar-flow-through-a-circular-pipe-of-diam--637efe14006d9329298ed387), [Darcy head loss](https://testbook.com/question-answer/the-head-loss-due-to-friction-in-a-pipe-of-1-m-dia--5f9a873e982a933982c68ea3), [sudden expansion](https://testbook.com/question-answer/a-head-loss-in-a-sudden-expansion-from-6-cm-diamet--562491e2d0249b5404338be7), [maximum power](https://testbook.com/question-answer/the-power-transmitted-through-a-pipe-is-maximum-wh--5f85992505d538f3e2d7e737)
- Sub-topic 8: [Euler number](https://testbook.com/question-answer/eulers-dimensionless-number-relates-the-follo--5e6cc84bf60d5d4a3b0c38f1), [Weber number](https://testbook.com/question-answer/the-ratio-of-the-square-root-of-inertia-force-to-s--61f3d4a58f477986f7a9db8b), [Mach number](https://testbook.com/question-answer/a-flow-having-mach-number-ma-between-1-2-and-3-0--617f731abce01955fbcdce2f), [boundary layer thickness](https://testbook.com/question-answer/the-nominal-thickness-of-the-boundary-layer-is-def--612347e3a336d20e7783abee), [growth of a laminar layer](https://testbook.com/question-answer/thickness-of-laminar-boundary-layer-on-flat-plate--5e7b2953f60d5d29f99c67b1), Kerala PSC 104/2025 Q30 (drag), [bluff body](https://testbook.com/question-answer/when-compared-to-a-streamlined-body-a-bluff-body--602ce96d0e9f4b01b9a779ee), [plate across the flow](https://testbook.com/question-answer/a-plate-of-negligible-thickness-is-held-perpendicu--632421ad40111afd9d3924c7)
- Sub-topic 9: [jet on a fixed plate](https://testbook.com/question-answer/the-force-exerted-by-a-jet-of-water-on-a-stationar--5e2aad79f60d5d515a606e0b), [Pelton head and flow](https://testbook.com/question-answer/pelton-turbine-is-________-turbine--6a757f23b271527165f8f066), Kerala PSC 104/2025 Q32 (bucket speed), Kerala PSC 68/2026 Q35 (jet ratio), [number of buckets](https://testbook.com/question-answer/what-is-the-number-of-buckets-on-the-runner-of-a-p--6010c0c4c0660c821d4d81bc), Kerala PSC 050/2023 Q55 (draft tube), [draft tube shape](https://testbook.com/question-answer/in-a-draft-tube-at-the-exit-of-a-turbine--5dfe14c650c4b70cfc1f0457), Kerala PSC 65/2026 Q13 (hydraulic efficiency), [order of specific speeds](https://testbook.com/question-answer/pick-the-correct-order-of-various-turbines-with-re--60097c34e820e65e8bdca1af), [Kaplan flow velocity](https://testbook.com/question-answer/flow-ratio-for-a-kaplan-turbine-is-given-as-0-6-an--60218e07718455794a2044ee)
- Sub-topic 10: [working principle](https://testbook.com/question-answer/centrifugal-pump-works-on-the-principle-of--6a6b331d46d2d9fdd37102fe), Kerala PSC 68/2026 Q36 (manometric head), Kerala PSC 65/2026 Q20 (manometric efficiency), [overall efficiency](https://testbook.com/question-answer/the-overall-efficiency-of-a-pump-is-calculated-by--68107eb3386adcde6d8e5715), [overall efficiency 0.56](https://testbook.com/question-answer/if-the-manometric-efficiency-and-mechanical-effici--6059e3d9b80764a5f9c0dc09), [discharge and speed](https://testbook.com/question-answer/discharge-of-a-centrifugal-pump-is--622088bfb5b968a525215938), [speed doubled](https://testbook.com/question-answer/a-centrifugal-pump-driven-by-a-directly-coupled-2--6531e6078d96d350444d75bd), [specific speed](https://testbook.com/question-answer/the-specific-speed-ns-of-the-pump-is-given-by-th--60b5ecf36825eda99320e8e6), [axial flow pump](https://testbook.com/question-answer/which-characteristic-best-describes-an-axial-flow--6811d6b5504868b3b4d06c4a), [cavitation](https://testbook.com/question-answer/in-order-to-avoid-cavitation-in-centrifugal-pumps--6204f7ee854bcf2392f5a178), Kerala PSC 104/2025 Q33 (negative slip)
- Wording changes: Kerala PSC options are lettered (a) to (d) here instead of A to D. Their typing slips are fixed ("moody's chart" reads Moody's chart, "4.905 N/cm 2" reads 4.905 N/cm²), the opening "The" of "The Newton's law of viscosity" is dropped, and in sub-topic 3, Q3 "equal" reads "equals". In sub-topic 5, Q2 "Which of the above point" reads "Which of the above points". In sub-topic 1, Q7 reads the page's "fluid raise" as "fluid rise". In sub-topic 2, Q4 reads "Let the atmospheric pressure at sea level be" for "is" and "metres" for "meter", and Q7 reads "is 200 mm below" for "in 200 mm below". In sub-topic 6, Q3 reads "head of water" for "head water", Q6 reads "coefficient" for "co-efficient", Q7 puts "(where H is the head)" before the options, and Q8 spells Cipolletti for "Cipoletti". In sub-topic 7, Q6 writes the page's "fD" as f. In sub-topic 8, Q2 reads "Reynolds number" for "Reyonld's number", and Q5 reads "from" for "form" and "Reynolds" for "Reynold". In sub-topic 10, Q5 joins the page's two sentences ("are 70% and 80%, respectively. Determine") into one. Capital letters, small punctuation and units written with superscripts (m³/s for m^3/s) are not listed one by one.
