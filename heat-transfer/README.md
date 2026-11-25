# Heat Transfer Study Guide

Nov 25, 2026 · @Rohith

## How to use this guide

Heat Transfer is the eighth-ranked subject in your topic map, at about 4.3% of technical questions across RRB JE, SSC JE and Kerala PSC AE. SSC JE asks it most, with 8 to 10 questions in Paper 2; RRB JE asks about 4 in every 100. Kerala PSC has no separate block for it: 3 to 5 heat transfer questions sit inside the Thermal Engineering block of each AE paper, 14 of them across the four papers since 2023, most often on radiation and on LMTD. Finish it in about 12 study days, one sub-topic at a time, in the order below.

Sub-topics 1 to 5 are conduction: the three modes and Fourier's law, then heat flow through walls, pipes and spheres, fins, and bodies that heat up or cool down over time. Sub-topics 6 and 7 are convection: the boundary layer and its dimensionless numbers, then free convection, boiling and condensation. Sub-topics 8 and 9 are radiation: the black-body laws, then exchange between surfaces. The last sub-topic, heat exchangers, uses all three.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the formulas you must memorise), and real questions from past papers (mostly 2015–2026) with worked solutions. Questions are tagged with the exam and year they appeared in. Most heat transfer questions test one formula or one definition, so learn the formulas sections well; the numerical questions are short once the formula is known.

| # | Sub-topic | Days | How often it is asked |
| --- | --- | --- | --- |
| 1 | Modes of heat transfer and thermal conductivity | 1 | Very often |
| 2 | Steady conduction through plane and composite walls | 1 | Very often (most in SSC JE) |
| 3 | Cylinders, spheres and critical radius of insulation | 1 | Often; Kerala PSC 2025 |
| 4 | Fins | 1 | Regular; Kerala PSC 2023 |
| 5 | Transient conduction | 1 | Regular |
| 6 | Convection, boundary layers and dimensionless numbers | 2 | Very often |
| 7 | Free convection, boiling and condensation | 1 | Regular |
| 8 | Radiation laws and surface properties | 1 | Very often; every Kerala PSC paper since 2025 |
| 9 | Radiation exchange, view factors and shields | 1 | Often |
| 10 | Heat exchangers: LMTD and effectiveness-NTU | 2 | Very often; 3 of 4 Kerala PSC papers |

Method per sub-topic: read the contents, write the formulas on one page, solve the past questions without looking, then check the solutions. Work in SI units throughout: thermal conductivity k in W/m·K, heat transfer coefficient h in W/m²·K, and temperatures in kelvin whenever a formula raises them to a power, as the radiation laws do.

## 1. Modes of heat transfer and thermal conductivity

Heat flows only from hot to cold, in three ways: conduction through a solid or a still fluid, convection by a moving fluid, and radiation by electromagnetic waves, which need no medium. Questions here ask which mode is at work, which law goes with it, and the unit, order and temperature trend of thermal conductivity.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Conduction | Heat passes from particle to particle while the material stays still. In metals, free electrons carry most of it, which is why good electrical conductors are also good heat conductors. In fluids it is molecules colliding. |
| Convection | Heat carried away by a fluid moving over a surface. Forced convection: a fan or pump moves the fluid. Free (natural) convection: the fluid moves on its own, because warm fluid is lighter and rises. |
| Radiation | Energy carried by electromagnetic waves. Every body above 0 K emits it. It needs no medium, travels at the speed of light, and is the only mode across a vacuum (the Sun heating the Earth). |
| Fourier's law | The rate of conduction is proportional to the area normal to the flow and to the temperature gradient, and depends on the material through k: Q = −kA dT/dx. The minus sign says heat flows down the gradient, from hot to cold. |
| Newton's law of cooling | Convection from a surface: Q = hA(Ts − T∞). The heat transfer coefficient h is not a property of the fluid alone; it depends on the fluid, its speed and the shape of the surface. |
| Stefan–Boltzmann law | A black body emits E = σT⁴ per unit area, with T in kelvin (sub-topic 8). |
| Thermal conductivity k | The heat conducted per second through 1 m² of a material 1 m thick for a 1 K difference. Unit W/m·K. It is a material property: it depends on what the material is (its composition) and its temperature, not on its length, thickness or shape. |
| Order of k | Diamond (about 2000 W/m·K) > silver (429) > copper (about 400) > gold > aluminium (about 237) > iron and steel (15 to 80) > water (0.6) > insulators (0.02 to 0.2) > air (0.026). Among liquid metals, sodium conducts best; mercury is only about 8. |
| k and temperature | Gases: k rises with temperature, because faster molecules carry energy faster. Most pure metals: k falls, because a hotter lattice scatters the free electrons more. Most liquids: k falls (water is an exception up to about 130 °C). Insulators and alloys: k usually rises. |
| Thermal diffusivity α | α = k/ρc, in m²/s. It says how fast a temperature change spreads through a body: high k and low heat capacity spread it fast. It matters in transient conduction (sub-topic 5). |
| Insulators | Materials of low k, usually porous, holding still air in small cells: glass wool, cork, asbestos, thermocole. Moisture replaces that air with water, whose k is over 20 times that of air, so a damp insulator insulates worse. |

### Formulas to memorise

```math
Q = -kA\,\frac{dT}{dx} \qquad Q = hA\,(T_s - T_\infty) \qquad E_b = \sigma T^4
```

```math
\alpha = \frac{k}{\rho c} \qquad \sigma = 5.67 \times 10^{-8}\ \mathrm{W/m^2K^4}
```

| Quantity | Symbol | SI unit |
| --- | --- | --- |
| Thermal conductivity | k | W/m·K |
| Heat transfer coefficient | h | W/m²·K |
| Heat flux | q = Q/A | W/m² |
| Thermal diffusivity | α | m²/s |
| Thermal resistance | R | K/W |

The two units to keep apart: k is per metre (W/m·K), h is per square metre (W/m²·K).

### Past exam questions with solutions

**Q1. AAI JE (Technical), 2020.** Which of the following cannot be considered as a mode of heat transfer? (a) Radiation (b) Convection (c) Advection (d) Induction

*Answer: (d).* Induction is a way of producing heat (eddy currents in a metal, as in an induction cooker), not a way heat travels. Advection is heat carried along by a fluid's bulk motion, which is the moving part of convection. Conduction, convection and radiation are the modes.

**Q2. HPCL Engineer (Mechanical), 12 August 2021 (Shift 2).** Transport of free electrons resulting in a transfer of heat from one part of a substance to another is called (a) forced convection (b) natural convection (c) conduction (d) radiation

*Answer: (c).* The substance itself does not move; free electrons and lattice vibrations pass the energy along inside it, which is conduction. Both kinds of convection need a fluid that moves as a whole, and radiation needs no material at all.

**Q3. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Newton's law of cooling is related with (a) conductive heat transfer (b) convective heat transfer (c) radiation heat transfer (d) all of the above

*Answer: (b).* Q = hA(Ts − T∞) gives the heat carried away from a surface by the fluid around it, which is convection. Conduction follows Fourier's law and radiation the Stefan–Boltzmann law, so (d) is wrong.

**Q4. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** Thermal conductivity of a conducting material depends on its (a) length (b) thickness (c) diameter (d) composition

*Answer: (d).* k is a property of the material, like density: a copper wire and a copper block have the same k. Length, thickness and diameter change the heat flow and the thermal resistance, not k. (Temperature also changes k, but it is not among the options.)

**Q5. BHEL Engineer Trainee (Mechanical), May 2019.** Fourier's law of heat conduction defines the rate of heat transfer through a body as (a) only dependent upon the material of the body (b) proportional to the area normal to the direction of the heat flow and the temperature gradient along the direction of the heat flow, and is dependent upon the material of the body (c) proportional only to the area normal to the direction of the heat flow (d) proportional only to the temperature gradient along the direction of the heat flow

*Answer: (b).* Q = −kA dT/dx has all three parts: the area A normal to the flow, the gradient dT/dx along it, and the material through k. Each of the other options keeps only one of the three.

**Q6. ISRO VSSC Technical Assistant (Mechanical), 9 June 2019.** The SI unit of thermal conductivity is (a) W m⁻² K⁻¹ (b) W m K⁻¹ (c) W m⁻¹ K⁻¹ (d) W m K

*Answer: (c).* From Fourier's law, k = Q·dx/(A·dT), so its unit is W × m/(m² × K) = W/m·K. Option (a), W/m²·K, is the unit of the heat transfer coefficient h, the usual trap.

**Q7. Coal India MT (Mechanical), 2020.** Thermal conductivity is the maximum for which substance? (a) Ice (b) Diamond (c) Aluminium (d) Silver

*Answer: (b).* Diamond conducts about 2000 W/m·K, roughly five times silver (429). Its stiff, light carbon lattice passes vibrations along very fast, even with no free electrons. Silver is the best metal, not the best substance.

**Q8. SSC JE Mechanical, 1 March 2017 (morning).** Liquid metal having highest thermal conductivity is of (a) sodium (b) potassium (c) lead (d) mercury

*Answer: (a).* Liquid sodium conducts about 85 W/m·K, against about 50 for potassium, 16 for lead and 8 for mercury. That, with its low melting point, is why liquid sodium cools fast breeder reactors.

**Q9. GATE ME 2014.** As the temperature increases, the thermal conductivity of a gas (a) increases (b) decreases (c) remains constant (d) increases up to a certain temperature and then decreases

*Answer: (a).* In a gas, heat moves by molecules colliding. Hotter molecules move faster, so they carry energy across faster, and k rises roughly as √T. Most pure metals go the other way.

**Q10. BPSC AE Paper 5 (Mechanical), 2012.** The insulating ability of an insulator with the presence of moisture would (a) increase (b) decrease (c) remain unaffected (d) none of the above

*Answer: (b).* An insulator works by trapping still air (k = 0.026 W/m·K) in its pores. Water (k = 0.6 W/m·K) takes the place of that air, so the effective k rises and the insulation gets worse. That is why pipe lagging is covered with a waterproof sheet.

**Q11. SSC JE Civil, 6 June 2024 (Shift 1, Paper 1).** Which of the following is a requirement for thermal insulation in materials? (a) Low thermal conductivity (b) Low density (c) High permeability (d) High temperature resistance

*Answer: (a).* Insulating means resisting heat flow, and that is exactly a low k. Low density often comes with it (more trapped air) but is not the requirement itself. High temperature resistance matters only for hot service, and high permeability lets moisture in, which spoils insulation.

**Q12. RRB JE CBT 2 (Mechanical), 22 April 2025 (Shift 2).** Which of the following materials is likely to have the highest thermal conductivity? (a) Rubber (b) Air (c) Aluminium (d) Wood

*Answer: (c).* Aluminium conducts about 237 W/m·K because its free electrons carry heat. Wood and rubber are around 0.1 to 0.2 and air only 0.026; all three are insulators.

**Q13. RRB JE CBT 2 (Mechanical) re-exam, 4 June 2025.** What is the primary mechanism by which thermal radiation transfers energy? (a) Direct transfer via physical contact (b) Convection due to fluid motion (c) Electromagnetic waves (d) Conduction through molecular collisions

*Answer: (c).* Thermal radiation is electromagnetic waves, mostly infrared, that a body emits because of its temperature. That is why it crosses a vacuum. Options (a) and (d) describe conduction and (b) describes convection.

## 2. Steady conduction through plane and composite walls

Steady conduction through a wall works like Ohm's law for heat: the temperature difference drives the flow, the wall's thermal resistance L/kA opposes it, and the same heat flows through every layer in series. With that one picture, every composite-wall question becomes a sum of resistances.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Steady state | The temperature at every point stays constant with time, so the heat entering each layer equals the heat leaving it. |
| Plane wall with constant k | With no heat generated inside, the temperature falls in a straight line from one face to the other, and Q = kA(T1 − T2)/L. |
| Thermal resistance | Writing Q = (T1 − T2)/R gives R = L/kA for conduction, in K/W. A fluid film on a surface adds R = 1/hA. A thicker wall or a lower k resists more. |
| Electrical analogy | Heat flow is the current, the temperature difference is the voltage, and R is the resistance. Layers one after another add like resistors in series; layers side by side, each carrying part of the heat, combine like resistors in parallel. |
| Composite wall in series | The same Q passes through every layer, and the total R = L1/k1A + L2/k2A + … The temperature drop across each layer is Q times that layer's R, so the layer with the most resistance (thick, or low k) takes the biggest drop. |
| Equivalent conductivity | The single k that would give the same resistance over the total thickness. For two layers of equal thickness, k\_eq = 2k1k2/(k1 + k2), which always lies closer to the smaller k. |
| Overall heat transfer coefficient U | Folds every resistance, films and layers, into one number per square metre: Q = UAΔT, with 1/U = 1/h1 + ΣL/k + 1/h2. Unit W/m²·K, the same as h. |
| Variable conductivity | If k changes with temperature, the profile is no longer straight. The heat flow still uses the mean k at the mean temperature. Where k is higher, the gradient is gentler, since kA dT/dx stays constant. |
| Contact resistance | Two surfaces pressed together touch only at high spots, so an extra resistance appears at the joint. More pressure, smoother faces or a conducting paste reduce it. |

### Formulas to memorise

```math
Q = \frac{kA\,(T_1 - T_2)}{L} = \frac{T_1 - T_2}{R} \qquad R_{cond} = \frac{L}{kA} \qquad R_{conv} = \frac{1}{hA}
```

```math
\frac{1}{U} = \frac{1}{h_1} + \frac{L_1}{k_1} + \frac{L_2}{k_2} + \frac{1}{h_2} \qquad Q = UA\,\Delta T
```

```math
k_{eq} = \frac{L_1 + L_2}{L_1/k_1 + L_2/k_2}
```

In series, add the resistances; in parallel, add the conductances (1/R).

### Past exam questions with solutions

**Q1. ISRO Refrigeration and Air Conditioning, 2017.** The rate of heat flow through a body is Q = kA(T1 − T2)/x. The term x/kA is known as (a) thermal coefficient (b) thermal resistance (c) thermal conductivity (d) thermal gradient

*Answer: (b).* Rewrite the equation as Q = (T1 − T2)/(x/kA) and compare it with Ohm's law, I = V/R. The temperature difference is the driving force, so x/kA is the resistance to heat flow, in K/W.

**Q2. BHEL Engineer Trainee (Mechanical), May 2019.** For steady state one-dimensional heat conduction through a plane wall with constant thermal conductivity and no internal heat generation, the temperature distribution within the wall will be (a) hyperbolic (b) elliptic (c) linear (d) non-linear

*Answer: (c).* With no heat generated and k constant, the conduction equation reduces to d²T/dx² = 0, whose solution is T = ax + b, a straight line. The profile curves only when k varies or heat is generated inside the wall.

**Q3. RSMSSB JE Mechanical (Degree), 13 December 2020.** The unit of overall heat transfer coefficient is (a) W/m³K (b) W/m²K (c) W/m² (d) W/mK

*Answer: (b).* From Q = UAΔT, U = Q/(AΔT), which is W/(m²·K), the same unit as h. W/m·K is thermal conductivity and W/m² is heat flux.

**Q4. ISRO Refrigeration and Air Conditioning, 2019.** The overall heat transfer coefficient U for a composite wall of thicknesses x1, x2, x3 and corresponding thermal conductivities k1, k2, k3 is given by (a) 1/U = k1/x1 + k2/x2 + k3/x3 (b) U = k1x1 + k2x2 + k3x3 (c) 1/U = x1/k1 + x2/k2 + x3/k3 (d) 1/U = x1/k1 + x2/k2 + k3/x3

*Answer: (c).* The layers are in series, so their resistances per square metre, x/k, add, and 1/U is that total. Option (a) adds conductances, which applies only to layers in parallel, and (d) turns the last term upside down. (No fluid films are given here; if they were, 1/h1 and 1/h2 would join the sum.)

**Q5. ISRO Refrigeration and Air Conditioning, 2014.** A composite slab has two layers of different materials having thermal conductivities k and 2k. If each layer has the same thickness, the equivalent thermal conductivity of the slab would be (a) 3k (b) k/2 (c) 3/(2k) (d) 4k/3

*Answer: (d).* k\_eq = 2L/(L/k + L/2k) = 2/(3/2k) = 4k/3. The answer must lie between k and 2k, which rules out (a), (b) and (c) at once, and it sits nearer the poorer conductor, k.

**Q6. BPSC AE Paper 5 (Mechanical), 14 October 2022.** A composite wall of a furnace has two layers of equal thickness having thermal conductivities in the ratio 3 : 2. What is the ratio of the temperature drop across the two layers? (a) 2 : 3 (b) 3 : 2 (c) 1 : 2 (d) ln 2 : ln 3

*Answer: (a).* The same Q flows through both layers, and each drop is ΔT = QL/kA. With L and A equal, ΔT is proportional to 1/k, so the drops are in the ratio 1/3 : 1/2 = 2 : 3. The better conductor needs the smaller drop.

**Q7. RPSC Lecturer Technical Education (Mechanical Paper 2), 2020.** The dimensions of a wall are 5 m long, 10 m wide and 0.25 m thick, made of a material of thermal conductivity 1 W/m·K. The inner and outer surfaces are at 25 °C and 15 °C. If electricity costs Rs 10 per kWh, the cost of the heat lost through the wall in 10 hours, in rupees, is (a) 20 (b) 200 (c) 10 (d) 100

*Answer: (b).* Q = kAΔT/L = 1 × (5 × 10) × 10/0.25 = 2000 W = 2 kW. In 10 hours that is 20 kWh, which at Rs 10 per kWh costs Rs 200. Option (a) is the energy in kWh, not its cost.

**Q8. ISRO Refrigeration and Air Conditioning, 2020.** A furnace wall is made of steel plate 10 mm thick (k = 15 kcal/m·hr·°C), lined inside with silica brick 150 mm thick (k = 1.75 kcal/m·hr·°C) and outside with magnesia brick 200 mm thick (k = 4.5 kcal/m·hr·°C). The total thermal resistance of the composite wall per square metre is (a) 0.13 °C·hr/kcal (b) 0.23 °C·hr/kcal (c) 0.03 °C·hr/kcal (d) 0.33 °C·hr/kcal

*Answer: (a).* Add L/k for the three layers in series: 0.15/1.75 + 0.01/15 + 0.2/4.5 = 0.0857 + 0.0007 + 0.0444 = 0.131. The thin steel plate adds almost nothing; nearly all the resistance is in the bricks. The old kcal units change nothing in the method.

## 3. Cylinders, spheres and critical radius of insulation

In a pipe or a sphere the area grows with radius, so the resistance uses a log mean area (cylinder) or a geometric mean area (sphere) instead of L/kA. Adding insulation to a thin pipe or wire can even raise its heat loss, up to the critical radius k/h; that one result gives most of the questions here.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Radial conduction in a cylinder | Heat flows outwards through ever larger areas, so the temperature falls along a log curve, not a straight line. Q = 2πkL(T1 − T2)/ln(r2/r1), and R = ln(r2/r1)/(2πkL). |
| Log mean radius | A pipe wall behaves like a plane wall of thickness r2 − r1 whose area is taken at the log mean radius, rm = (r2 − r1)/ln(r2/r1). |
| Hollow sphere | Q = 4πk r1 r2 (T1 − T2)/(r2 − r1). It behaves like a plane wall whose area is the geometric mean √(A1A2), at the radius √(r1 r2). |
| Lagged pipe | The pipe wall, each insulation layer and the two fluid films are resistances in series: add ln(r\_out/r\_in)/(2πkL) for each layer and 1/hA for each film. |
| Two effects of insulation | Insulation adds conduction resistance, but it also enlarges the outer surface, which lowers the convection resistance 1/(h · 2πrL). On a thin pipe or wire the second effect wins at first, so the heat loss rises. |
| Critical radius | The outer radius at which the total resistance is least and the heat loss greatest: rc = k/h for a cylinder or wire and 2k/h for a sphere. Here k is the insulation's conductivity and h the outside coefficient. Critical thickness = rc minus the bare radius. |
| Below and above rc | If the bare radius is below rc, insulation first increases the heat loss, which peaks at rc and falls after it. If the bare radius is already above rc, every layer of insulation reduces the loss. |
| Uses | Electric cables: insulation kept near rc helps the cable shed its heat while staying insulated. Steam pipes are far larger than rc (a few mm for most insulators in still air), so lagging always saves heat. |

### Formulas to memorise

```math
Q_{cyl} = \frac{2\pi k L\,(T_1 - T_2)}{\ln(r_2/r_1)} \qquad Q_{sph} = \frac{4\pi k\, r_1 r_2\,(T_1 - T_2)}{r_2 - r_1}
```

```math
r_{c,\,cyl} = \frac{k}{h} \qquad r_{c,\,sph} = \frac{2k}{h} \qquad t_c = r_c - r_1
```

```math
r_{m,\,cyl} = \frac{r_2 - r_1}{\ln(r_2/r_1)} \qquad r_{m,\,sph} = \sqrt{r_1 r_2}
```

The usual slip: rc is a radius measured from the centre, but questions often ask for the thickness, which is rc minus the bare radius.

### Past exam questions with solutions

**Q1. ISRO Refrigeration and Air Conditioning, 2013.** For a hollow sphere with inner and outer surface areas A1 and A2, inner and outer radii r1 and r2, and surface temperatures t1 and t2, the rate of heat flow will be (a) k(t1 − t2)/\[√(A1A2)(r2 − r1)\] (b) k√(A1A2)(t1 − t2)/(r2 − r1) (c) 4πk(t1 − t2)/√(A1A2) (d) 4πk r1 r2 (t1 − t2)/√(A1A2)

*Answer: (b).* The sphere formula is Q = 4πk r1 r2 (t1 − t2)/(r2 − r1). Since √(A1A2) = √(4πr1² × 4πr2²) = 4πr1r2, this is Q = k√(A1A2)(t1 − t2)/(r2 − r1): a plane wall with the geometric mean area.

**Q2. UPPSC AE Mains Paper II (Mechanical), 29 September 2025.** The mean radius for heat conduction through a thick sphere of inner and outer radii r1 and r2 is equal to (a) √(r1 r2) (b) r2 − r1 (c) r2 × r1 (d) r2/r1

*Answer: (a).* A sphere's area goes as r², and the mean area that makes the plane-wall formula exact is the geometric mean, 4πr1r2. That is the area of a sphere of radius √(r1 r2). For a cylinder the mean radius is the log mean instead.

**Q3. TSPSC AEE Mechanical Paper II, 2015.** The critical radius of insulation of a cylindrical rod or wire is given by (where k = thermal conductivity, h0 = heat transfer coefficient) (a) h0/k (b) k/h0 (c) 2h0/k (d) 2k/h0

*Answer: (b).* Setting d(total resistance)/dr = 0 for ln(r/r1)/(2πkL) + 1/(2πrLh0) gives r = k/h0. Option (d), 2k/h0, is the sphere's value. Check the units: (W/m·K)/(W/m²·K) = m, a length.

**Q4. TANGEDCO AE (Mechanical), 2015.** The critical radius of insulation signifies (a) the insulation thickness above which the heat transfer is increased (b) the insulation thickness above which the heat transfer remains unaltered (c) the insulation thickness below which the electric cable gets overheated and fails (d) the insulation thickness above which the heat transfer is reduced

*Answer: (d).* Below rc, extra insulation raises the heat loss; above rc, it lowers it. So rc is the point beyond which insulation does its usual job of reducing heat transfer. (Strictly rc is a radius, though the options call it a thickness.)

**Q5. ISRO Scientist (Mechanical), 2016.** Critical thickness of insulation yields (a) no heat transfer rate from a pipe (b) minimum heat transfer rate from a pipe (c) maximum heat transfer rate from a pipe (d) none of the above

*Answer: (c).* At the critical radius the total resistance is least, so the heat flow is greatest. The word "insulation" tempts you to (b), but that is the trap.

**Q6. UPRVUNL AE (Mechanical), 5 July 2021.** For pipes, the radius of the pipe is taken higher than the critical radius, so that any insulation added will (a) keep the loss unaltered (b) decrease the heat loss (c) enable heat gain (d) increase the heat loss

*Answer: (b).* Beyond rc, the gain in conduction resistance from more insulation outweighs the drop in surface resistance, so each added layer cuts the loss. Steam and hot-water pipes are well above rc.

**Q7. HPCL Engineer (Mechanical), 12 August 2021 (Shift 1).** The critical radius of insulation for asbestos with k = 0.125 W/m·K surrounding a pipe exposed to room air with h = 2.5 W/m²·K is (a) 20 mm (b) 312.5 mm (c) 50 mm (d) 5 mm

*Answer: (c).* rc = k/h = 0.125/2.5 = 0.05 m = 50 mm. Option (a) comes from h/k = 20, and (b) from multiplying k × h instead of dividing.

**Q8. Kerala PSC AE (Mechanical), 18 August 2025.** A 10 mm diameter electric cable (k = 200 W/m·K) has to be provided with rubber insulation (k = 0.16 W/m·K) for safety. The cable is exposed to the atmosphere with heat transfer coefficient 8 W/m²·K. What should be the thickness of insulation so as to ensure maximum heat dissipation from the cable? (a) 15 mm (b) 20 mm (c) 40 mm (d) 100 mm

*Answer: (a).* Maximum heat dissipation happens at the critical radius, rc = k/h = 0.16/8 = 0.02 m = 20 mm. The cable's radius is 5 mm, so the insulation must be 20 − 5 = 15 mm thick. The cable's own k (200) is not needed, and option (b) is rc itself, not the thickness.

**Q9. ISRO Scientist (Mechanical), 2015.** It is proposed to coat a 1 mm diameter wire with enamel paint (k = 0.1 W/m·K) to increase the heat transfer with air. If the air-side heat transfer coefficient is 100 W/m²·K, the optimum thickness of enamel paint should be (a) 0.25 mm (b) 0.5 mm (c) 1 mm (d) 2 mm

*Answer: (b).* rc = 0.1/100 = 0.001 m = 1 mm. The wire's radius is 0.5 mm, so the coating should be 1 − 0.5 = 0.5 mm thick. Option (c) is the critical radius, not the thickness.

**Q10. GATE ME 2015.** A 10 mm diameter electrical conductor is covered by an insulation of 2 mm thickness. The conductivity of the insulation is 0.08 W/m·K and the convection coefficient at the insulation surface is 10 W/m²·K. Addition of further insulation of the same material will (a) increase heat loss continuously (b) decrease heat loss continuously (c) increase heat loss to a maximum and then decrease heat loss (d) decrease heat loss to a minimum and then increase heat loss

*Answer: (c).* rc = 0.08/10 = 0.008 m = 8 mm. The present outer radius is 5 + 2 = 7 mm, still below rc, so more insulation first raises the loss until the radius reaches 8 mm, and lowers it after that.

## 4. Fins

A fin is extra surface that lets a hot wall shed more heat into a fluid whose h is low. Heat runs along the fin by conduction and leaves its sides by convection, so one parameter, m = √(hP/kA), decides almost everything: a small m (high k, low h, thin fin) keeps the whole fin hot and working.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Purpose | Fins add heat transfer area where h is low: air, other gases, free convection. Examples are motorcycle engine cylinders, radiator tubes and electronics heat sinks. On a liquid or condensing-steam side h is already high, so fins add little there. |
| How a fin works | Heat is conducted from the base along the fin and lost by convection from its sides. The temperature falls from base to tip, so the outer parts of a long fin do little work. |
| Fin parameter m | m = √(hP/kA), where P is the fin's perimeter and A its cross-section area. A larger m means a steeper temperature drop along the fin. |
| Very long fin | The tip reaches the fluid temperature. The excess temperature falls as θ/θ0 = e^(−mx), and Q = √(hPkA) θ0. |
| Fin with insulated tip | The model most questions use. θ/θ0 = cosh m(L − x)/cosh mL, so the tip is at θ0/cosh mL, and Q = √(hPkA) θ0 tanh mL. A tip that loses heat by convection is handled by a corrected length: L + t/2 for a rectangular fin, L + d/4 for a pin fin. |
| Fin efficiency η | Actual heat from the fin ÷ the heat it would lose if all of it were at the base temperature. For an insulated tip, η = tanh(mL)/(mL), always below 1 and falling as the fin gets longer. |
| Fin effectiveness ε | Heat lost with the fin ÷ heat the covered base area would lose without it. For a long fin ε = √(kP/hA), so a fin helps only when √(hA/kP) < 1; in practice designers want ε of at least 2. Also ε = η × (fin surface area ÷ base area). |
| What makes fins effective | High k of the fin material (copper, aluminium), low h on the fin side, a high perimeter-to-area ratio (thin fins), and many fins set close together, though not so close that air cannot flow between them. Beyond mL of about 2 to 3, extra length adds almost no heat. |

### Formulas to memorise

```math
m = \sqrt{\frac{hP}{kA}} \qquad \theta = T - T_\infty \qquad \theta_0 = T_0 - T_\infty
```

```math
\text{Long fin:}\;\; \frac{\theta}{\theta_0} = e^{-mx} \qquad Q = \sqrt{hPkA}\;\theta_0
```

```math
\text{Insulated tip:}\;\; Q = \sqrt{hPkA}\;\theta_0 \tanh mL \qquad \theta_{tip} = \frac{\theta_0}{\cosh mL}
```

```math
\eta_{fin} = \frac{\tanh mL}{mL} \qquad \varepsilon_{long} = \sqrt{\frac{kP}{hA}} \qquad \varepsilon = \eta\,\frac{A_{fin}}{A_{base}}
```

Keep the two ratios apart: efficiency compares the fin with an ideal fin held at the base temperature (always below 1); effectiveness compares it with no fin at all (it should be well above 1).

### Past exam questions with solutions

**Q1. BPSC Assistant Professor (Mechanical), 2022.** On a heat transfer surface, fins are provided (a) to increase the temperature gradient so as to enhance heat transfer (b) to increase turbulence in the flow for enhancing heat transfer (c) to increase surface area to promote the rate of heat transfer (d) to decrease the pressure drop of the fluid

*Answer: (c).* In Q = hAΔT, a fin raises A. It does not raise h much (any extra turbulence is a side effect), and it adds to the pressure drop rather than cutting it.

**Q2. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** An increase in fin effectiveness is caused by high values of 1. convective coefficient 2. thermal conductivity 3. cross-sectional area 4. circumference. Identify the correct statement. (a) 1 and 3 (b) 2 and 3 (c) 3 and 4 (d) 2 and 4

*Answer: (d).* ε = √(kP/hA): it grows with k and with the perimeter P (the circumference of a pin fin), and falls with h and with the cross-section area A. So high k and a large circumference help.

**Q3. UPRVUNL AE (Mechanical), 2014.** If √(hA/kP) is \_\_\_\_\_, then addition of a fin to the surface increases the heat transfer. (h: convective heat transfer coefficient, A: area, P: perimeter, k: thermal conductivity) (a) equal to one (b) greater than one (c) less than one (d) greater than one but less than two

*Answer: (c).* This ratio is 1/ε for a long fin. A fin helps only if ε > 1, which means √(hA/kP) < 1. When the ratio equals one, the fin changes nothing; when it is above one, the fin acts as insulation.

**Q4. BPSC AE Paper V (Mechanical), 2024.** Consider the following statements pertaining to large heat transfer rate using fins: 1. Fins should be used on the side where the heat transfer coefficient is small. 2. Long and thick fins should be used. 3. Short and thin fins should be used. 4. Thermal conductivity of the fin material should be large. Which of the above statements are correct? (a) 2, 3 and 4 (b) 1, 2 and 4 (c) 1, 3 and 4 (d) 1, 2 and 3

*Answer: (c).* Fins pay off on the low-h side, and a high k keeps the fin hot. Thin fins have a high perimeter for their area, and short fins avoid the cold outer length that does no work. Long, thick fins (statement 2) waste material.

**Q5. UPPSC AE Mechanical Paper II, 2013.** Which one of the following configurations has the highest fin effectiveness? (a) Thin, closely spaced fins (b) Thin, widely spaced fins (c) Thick, widely spaced fins (d) Thick, closely spaced fins

*Answer: (a).* Thin fins have a high P/A, which raises each fin's effectiveness, and close spacing fits more fins, and so more area, on the same base.

**Q6. UPRVUNL AE (Mechanical), 2016.** The temperature distribution (T − T∞)/(T0 − T∞) = e^(−mx) is valid for (a) a fin of finite length with insulated end (b) a fin of finite length with heat loss by convection at the end (c) very long fins (d) a fin of finite length with specified temperature at the end

*Answer: (c).* In a very long fin, the tip reaches the fluid temperature, so θ → 0 as x → ∞, and only e^(−mx) meets that. The finite-length cases all use cosh and sinh terms.

**Q7. HPCL Engineer (Mechanical), 4 November 2022 (Shift 2).** In an infinitely long fin, if the parameter m = √(hP/kA) increases, the other parameters being kept constant, then (a) the temperature drop along the length will be steeper (b) the temperature profile will remain the same (c) the temperature drop along the length will be at a lower rate (d) only the heat flow rate will increase, without any effect on the temperature drop

*Answer: (a).* θ = θ0 e^(−mx), so a larger m makes the temperature decay faster along the fin. A large m comes from a high h or a low k: the fin loses heat from its sides faster than it can conduct it along.

**Q8. ISRO Refrigeration and Air Conditioning, 2014.** The insulated tip temperature of a rectangular longitudinal fin having an excess (over ambient) root temperature θ0 is (a) θ0 tanh mL (b) θ0 sinh mL (c) θ0 tanh(mL)/(mL) (d) θ0/cosh mL

*Answer: (d).* Put x = L in θ = θ0 cosh m(L − x)/cosh mL; since cosh 0 = 1, the tip is at θ0/cosh mL. The tanh terms belong to the heat flow and the efficiency, not the temperature.

**Q9. TN TRB (Mechanical), 2017.** The efficiency of a pin fin with insulated tip is (a) tanh(mL)/√(hA/kP) (b) tanh(mL)/(mL) (c) mL/tanh(mL) (d) √(hA/kP)/tanh(mL)

*Answer: (b).* Actual heat = √(hPkA) θ0 tanh mL; ideal heat, with the whole fin at the base temperature, = hPLθ0. Their ratio is tanh(mL)/(mL). Option (c) is the inverse, which would exceed 1, an impossible efficiency.

**Q10. TN TRB (Mechanical), 2017.** A 3 cm long aluminium fin of 2 mm × 2 mm rectangular cross-section (k = 237 W/m·°C) is attached to a surface. If the fin efficiency is 65%, the effectiveness of this single fin is (a) 30 (b) 24 (c) 8 (d) 39

*Answer: (d).* ε = η × A\_fin/A\_base. The four sides give A\_fin = 4 × 2 × 30 = 240 mm² (tip neglected), and the base is 2 × 2 = 4 mm². So ε = 0.65 × 240/4 = 39. Once η is given, k is not needed.

**Q11. TN TRB (Mechanical), 2012.** Air can be best heated by steam in a heat exchanger of (a) plate type (b) double pipe type with fins on the steam side (c) double pipe type with fins on the air side (d) shell and tube type

*Answer: (c).* Condensing steam has a very high h, while air's is low, so the air side holds most of the resistance. Fins belong on the side with the low h.

## 5. Transient conduction

When a body is suddenly heated or cooled, its temperature changes with time until it settles. Two numbers settle almost every question: the Biot number says whether the inside stays at one temperature (Bi < 0.1, the lumped case), and the Fourier number measures elapsed time. In the lumped case the excess temperature falls exponentially.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Unsteady (transient) conduction | The temperature at a point changes with time: quenching a part, starting an engine, a room warming in the morning, a ball dropped into oil. |
| General conduction equation | In one dimension with no heat generation, ∂T/∂t = α ∂²T/∂x²: the rate of temperature change at a point is α times the curvature of the temperature profile there. Its named forms: steady with no generation, ∇²T = 0 (Laplace); steady with generation (Poisson); unsteady with no generation (Fourier, or diffusion). |
| Biot number | Bi = hLc/k = resistance to conduction inside the body (Lc/k) ÷ resistance to convection at its surface (1/h). It uses k of the solid, not of the fluid. The characteristic length Lc = V/As is half the thickness for a plate cooled on both faces, r/2 for a long cylinder and r/3 for a sphere. |
| Lumped system | If Bi < 0.1, the inside conducts so well compared with the surface that the whole body is at one temperature at any instant. Then θ/θi = e^(−hAs t/ρVc). |
| Time constant | τ = ρVc/hAs. After one τ the excess temperature has fallen to 1/e, about 37%, of its starting value. A thermocouple with a small bead (small V/As) responds faster. |
| Fourier number | Fo = αt/Lc², a dimensionless time: the rate of heat conduction through the body compared with the rate of heat storage in it. The lumped exponent hAs t/ρVc equals Bi × Fo. |
| Heisler charts | When Bi > 0.1 the temperature varies inside the body, and the centre temperature of a plate, cylinder or sphere is read from charts drawn against Bi and Fo. |
| Cooling in practice | The cooling rate is proportional to the excess temperature over the surroundings, so a hot body cools fast at first and ever more slowly: equal temperature drops take longer each time. For the same volume and material, the body with less surface area cools more slowly, and a sphere has the least. |

### Formulas to memorise

```math
Bi = \frac{h L_c}{k_{solid}} \qquad L_c = \frac{V}{A_s} \qquad Fo = \frac{\alpha t}{L_c^2}
```

```math
\frac{T - T_\infty}{T_i - T_\infty} = e^{-\frac{h A_s}{\rho V c}\,t} = e^{-Bi \cdot Fo} \qquad \tau = \frac{\rho V c}{h A_s}
```

```math
\frac{\partial T}{\partial t} = \alpha\,\frac{\partial^2 T}{\partial x^2}
```

For a sphere Lc = r/3 = D/6, not r: using r gives a Biot number three times too large.

### Past exam questions with solutions

**Q1. TSPSC AEE Mechanical Paper II, 22 January 2023.** The ratio (conduction resistance within the body)/(convective resistance at the surface of the body) is known as (a) Nusselt number (b) Stanton number (c) Biot number (d) Grashof number

*Answer: (c).* Bi = (Lc/k)/(1/h) = hLc/k. The Nusselt number has the same form but uses the fluid's k and describes the fluid layer, not the solid.

**Q2. HPCL Engineer (Mechanical), 4 November 2022 (Shift 2).** Lumped heat capacity analysis is valid for bodies for which the value of (a) Bi > 0.1 (b) Bi < 0.1 (c) Fo < 0.1 (d) Bi > 1

*Answer: (b).* Below Bi = 0.1, the temperature difference inside the body is under about 5% of the difference between surface and fluid, so one temperature can stand for the whole body.

**Q3. ISRO Refrigeration and Air Conditioning, 2014.** A hot steel sphere of diameter 40 mm is immersed in oil. If the heat transfer coefficient between the sphere and oil is 300 W/m²·K, the Biot number is (k of steel = 50 W/m·K, k of oil = 0.2 W/m·K) (a) 0.04 (b) 0.12 (c) 10 (d) 0.24

*Answer: (a).* Lc = r/3 = 0.02/3 = 0.00667 m, so Bi = 300 × 0.00667/50 = 0.04. Option (b) uses r instead of r/3, and (c) uses the oil's k. Since 0.04 < 0.1, the ball can be treated as lumped.

**Q4. AAI JE (Technical), 2020.** Heat flow in unsteady-state heat conduction may be expressed in terms of which two dimensionless numbers? (a) Nusselt and Fourier numbers (b) Prandtl and Schmidt numbers (c) Grashof and Graetz numbers (d) Biot and Fourier numbers

*Answer: (d).* Bi compares the inside resistance with the surface resistance, and Fo measures time. The other pairs belong to convection and mass transfer.

**Q5. GATE ME 2021.** A hot steel spherical ball is suddenly dipped into a low-temperature oil bath. Which of the following dimensionless parameters are required to determine the instantaneous centre temperature of the ball using a Heisler chart? (a) Nusselt number and Grashof number (b) Reynolds number and Prandtl number (c) Biot number and Froude number (d) Biot number and Fourier number

*Answer: (d).* A Heisler chart plots the centre temperature ratio against Fo, with one curve for each value of Bi (usually labelled 1/Bi).

**Q6. RPSC Lecturer Technical Education (Mechanical Paper 2), 2020.** The measure of heat conducted through a body relative to the rate of heat storage is called (a) thermal diffusivity (b) Biot number (c) Fourier number (d) Nusselt number

*Answer: (c).* Fo = αt/L² compares the heat conducted through the body with the heat stored in it over time t. Thermal diffusivity α is the material property inside Fo, not a dimensionless ratio.

**Q7. UPPSC AE Mechanical Paper II, 29 May 2022.** Choose the correct statement. The curve for unsteady-state heating and cooling of bodies with Bi < 0.1 is (a) a hyperbolic curve, asymptotic to both the time and temperature axes (b) an exponential curve, asymptotic to both the time and temperature axes (c) an exponential curve, asymptotic to the time axis (d) a parabolic curve, asymptotic to the time axis

*Answer: (c).* θ = θi e^(−t/τ) starts at a finite θi when t = 0 and approaches zero excess as time passes without ever reaching it. So the curve is exponential and runs closer and closer to the time axis only.

**Q8. UPPSC AE Mechanical Paper II, 13 December 2020.** A solid copper ball of mass 500 g, when quenched in a water bath at 30 °C, cools from 530 °C to 430 °C in 10 seconds. What will be its temperature after another 10 seconds? (a) 300 °C (b) 320 °C (c) 350 °C (d) cannot be determined

*Answer: (c).* Copper conducts well, so the ball is lumped and its excess temperature falls by the same ratio in equal times. The excess went from 500 to 400, a ratio of 0.8; after another 10 s it is 400 × 0.8 = 320, so the ball is at 320 + 30 = 350 °C. Option (b) is the excess, not the temperature.

**Q9. ISRO Scientist (Mechanical), 2016.** A beaker filled with hot water in a room cools from 70 °C to 65 °C in t1 minutes, from 65 °C to 60 °C in t2 minutes and from 60 °C to 55 °C in t3 minutes. Then (a) t1 > t2 > t3 (b) t1 = t2 = t3 (c) t1 < t2 < t3 (d) cannot be concluded

*Answer: (c).* By Newton's law of cooling, the rate of cooling is proportional to the excess over the room temperature. Each later 5 °C drop happens at a smaller excess, so it takes longer. (The room is taken to be below 55 °C, as it must be for the water to cool to 55 °C.)

**Q10. ISRO Scientist (Mechanical), 2010.** A sphere, a cube and a disc, all of the same material and volume, are heated to 900 K and left in air. Which of them has the lowest rate of cooling? (a) Cube (b) Disc (c) Sphere (d) All will have the same rate of cooling

*Answer: (c).* With the same volume, they store the same heat, but the sphere has the least surface area to lose it through, so it cools slowest. The thin disc has the most area and cools fastest.

**Q11. ISRO MCF Technical Assistant (Mechanical), 23 June 2019.** A large concrete slab 1 m thick has a one-dimensional temperature distribution T = 4 − 10x + 20x² + 10x³, with x in metres from one face. If the thermal diffusivity is 2 × 10⁻³ m²/h, the rate of change of temperature at the other face is (a) 0.1 °C/h (b) 0.2 °C/h (c) 0.3 °C/h (d) 0.4 °C/h

*Answer: (b).* ∂T/∂t = α ∂²T/∂x². Here ∂²T/∂x² = 40 + 60x, which is 100 at the other face (x = 1 m). So ∂T/∂t = 2 × 10⁻³ × 100 = 0.2 °C/h, and since it is positive that face is warming.

## 6. Convection, boundary layers and dimensionless numbers

Convection is heat carried away by a moving fluid. Every question here comes back to Newton's law of cooling, the two boundary layers that form on a surface, and four numbers: Reynolds, Prandtl, Nusselt and Stanton. Learn what each number compares, and the two fixed Nusselt values for laminar pipe flow.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Newton's law of cooling | Q = hA(Ts − T∞). The heat transfer coefficient h is not a property of the fluid: it depends on the fluid, its speed, the surface shape and whether the flow is laminar or turbulent. Rough values in W/m²·K: free convection in gases 2–25, forced convection in gases 25–250, in liquids 50–20,000, boiling and condensation 2,500–100,000. |
| Forced and free convection | In forced convection a fan or pump moves the fluid. In free (natural) convection the fluid moves by itself because heated fluid becomes lighter and rises. |
| Velocity (hydrodynamic) boundary layer | The thin layer next to the surface where the speed rises from zero at the wall to 99% of the free stream. Its thickness δ grows along the plate. Flow over a flat plate turns turbulent at about Re = 5 × 10⁵; flow in a pipe at about Re = 2,300. |
| Thermal boundary layer | The layer where the temperature changes from the wall value to the free-stream value. Its thickness is δT. It forms only when the wall and fluid temperatures differ. |
| Reynolds number | Re = ρVL/μ = inertia force ÷ viscous force. It decides laminar or turbulent flow and sets the size of h in forced convection. |
| Prandtl number | Pr = ν/α = μcp/k = momentum diffusivity ÷ thermal diffusivity. It depends on the fluid alone, not on the flow. For a laminar flat plate δ/δT ≈ Pr^(1/3). Liquid metals 0.004–0.03 (δT much thicker than δ), gases about 0.7–1 (nearly equal), water 1.7–13.7, oils 50 to 100,000 (δT much thinner). |
| Nusselt number | Nu = hL/k with k of the fluid. It is the dimensionless temperature gradient at the surface, and also the conduction resistance of the fluid layer (L/k) ÷ the convection resistance (1/h). Nu = 1 means the fluid only conducts. |
| Stanton number | St = Nu/(Re Pr) = h/(ρVcp): heat actually transferred ÷ heat the flowing fluid can carry. The Reynolds analogy links it to friction: St = Cf/2 when Pr = 1, and St Pr^(2/3) = Cf/2 (Colburn) for other fluids. |
| Correlations to know | Laminar flat plate: local Nu = 0.332 Re^(1/2) Pr^(1/3), and the average over the plate is twice that (0.664). Turbulent pipe flow (Dittus–Boelter): Nu = 0.023 Re^0.8 Pr^n, with n = 0.4 when the fluid is heated and 0.3 when it is cooled. |
| Fully developed laminar pipe flow | Nu is a constant that does not depend on Re or Pr: 3.66 for constant wall temperature and 4.36 = 48/11 for constant wall heat flux. |

### Formulas to memorise

```math
Q = hA\,(T_s - T_\infty)
```

```math
Re = \frac{\rho V L}{\mu} \qquad Pr = \frac{\mu c_p}{k} = \frac{\nu}{\alpha} \qquad Nu = \frac{hL}{k_{fluid}} \qquad St = \frac{Nu}{Re\,Pr} = \frac{h}{\rho V c_p}
```

```math
\frac{\delta}{\delta_T} \approx Pr^{1/3} \qquad Nu_x = 0.332\,Re_x^{1/2}\,Pr^{1/3} \qquad Nu = 0.023\,Re^{0.8}\,Pr^{n}
```

```math
Nu_{T} = 3.66 \qquad Nu_{q} = \frac{48}{11} = 4.36
```

Nu and Bi look alike (hL/k), but Nu uses k of the fluid and describes the fluid layer, while Bi uses k of the solid.

### Past exam questions with solutions

**Q1. ISRO Scientist (Mechanical), 2012.** Nusselt number is the ratio of (a) convective and conductive resistances (b) conductive and convective resistances (c) wall heat transfer rate and mass heat flow rate (d) kinematic viscosity and thermal diffusivity

*Answer: (b).* Nu = hL/k = (L/k)/(1/h): the conduction resistance of the fluid layer over the convection resistance. Option (d) is the Prandtl number.

**Q2. APPSC Lecturer (Polytechnic Colleges), March 2020.** Nusselt number may be characterised as (a) the temperature (dimensional) gradient at the surface (b) the dimensionless temperature gradient at the surface (c) the ratio of the convective to the conductive resistance (d) the ratio of the rate of heat transfer due to convection to the rate of storage of energy

*Answer: (b).* At the wall the fluid is still, so the heat passes by conduction: h(Ts − T∞) = −k ∂T/∂y. Rearranged, Nu is the temperature gradient at the wall written without dimensions. Option (c) has the resistances upside down.

**Q3. GATE ME 2015 (Shift 3).** The ratio of momentum diffusivity (ν) to thermal diffusivity (α) is called (a) Prandtl number (b) Nusselt number (c) Biot number (d) Lewis number

*Answer: (a).* Pr = ν/α = μcp/k. The Lewis number compares thermal diffusivity with mass diffusivity.

**Q4. ISRO Scientist (Mechanical), 2020.** The typical range of Prandtl number for water is (a) 0.004–0.300 (b) 1.7–13.7 (c) 50–500 (d) 1000–2000

*Answer: (b).* Water's Pr is about 13.7 near 0 °C and falls to about 1.75 at 100 °C, because its viscosity drops as it warms. Very low values belong to liquid metals and very high ones to oils.

**Q5. GATE ME 2015 (Shift 2).** In the laminar flow of air (Pr = 0.7) over a heated plate, if δ and δT denote the hydrodynamic and thermal boundary layer thicknesses respectively, then (a) δ = δT (b) δ > δT (c) δ < δT (d) δ = 0 but δT ≠ 0

*Answer: (c).* δ/δT ≈ Pr^(1/3) = 0.7^(1/3) ≈ 0.89, which is less than 1. With Pr below 1, heat spreads faster than momentum, so the thermal layer is a little thicker.

**Q6. RPSC Lecturer (Mechanical), 2014.** For materials where the Prandtl number Pr ≫ 1 (a) heat diffuses faster than momentum (b) heat and momentum diffuse at almost the same rate (c) the thermal boundary layer is much thicker than the hydrodynamic boundary layer (d) the thermal boundary layer is much thinner than the hydrodynamic boundary layer

*Answer: (d).* Pr ≫ 1 means ν ≫ α: momentum spreads far faster than heat, so the thermal layer stays thin. Oils are the usual example.

**Q7. GATE ME 2015 (Shift 1).** For flow of a viscous fluid over a flat plate, if the fluid temperature is the same as the plate temperature, the thermal boundary layer is (a) thinner than the velocity boundary layer (b) thicker than the velocity boundary layer (c) of the same thickness as the velocity boundary layer (d) not formed at all

*Answer: (d).* A thermal boundary layer is the region where the temperature changes. With no temperature difference there is nothing to change, so it does not form, though the velocity layer still does.

**Q8. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** The ratio of the hydrodynamic boundary layer thickness to the thermal boundary layer thickness varies as (a) the square root of the Prandtl number (b) the one-third power of the Prandtl number (c) the two-third power of the Stanton number (d) the four-fifth power of the Nusselt number

*Answer: (b).* For laminar flow over a flat plate, δ/δT ≈ Pr^(1/3). That is also why Pr appears with the power 1/3 in the laminar Nusselt correlation.

**Q9. AAI JE (Technical), 2018.** Air is flowing over a hot plate at 120 °C. If at a point the Reynolds number is increased 4 times and the Nusselt number 2 times, the Prandtl number (for laminar flow) will be (a) 2 times (b) 4/9 times (c) 1/2 times (d) the same

*Answer: (d).* For laminar flow Nu ∝ Re^(1/2) Pr^(1/3). Making Re 4 times larger already doubles Nu (√4 = 2), so Pr must be unchanged. Pr is a property of air at that temperature anyway.

**Q10. Kerala PSC AE (Mechanical), 18 August 2025.** The relation NuD = 48/11 holds good for (a) laminar forced convection over a flat plate at constant temperature (b) laminar forced convection over a flat plate with constant heat flux (c) laminar forced convection in internal tube flow at constant temperature (d) laminar forced convection in internal tube flow with constant heat flux

*Answer: (d).* 48/11 = 4.36 is the Nusselt number for fully developed laminar flow in a round tube with uniform wall heat flux. With constant wall temperature it is 3.66. Flat-plate values change along the plate, so they cannot be a single constant.

**Q11. GATE ME 2019 (Shift 1).** For fully developed laminar flow through a circular pipe, compare the Nusselt number at constant wall heat flux (Nuq) with that at constant wall temperature (NuT). (a) Nuq > NuT (b) Nuq = NuT (c) Nuq < NuT (d) Nuq = (NuT)²

*Answer: (a).* Nuq = 4.36 and NuT = 3.66, so Nuq is larger. Both values hold whatever Re and Pr are, as long as the flow stays laminar and fully developed.

## 7. Free convection, boiling and condensation

In free convection nothing pushes the fluid: heated fluid becomes lighter and rises because its density changes. The Grashof number takes the place of the Reynolds number. Boiling and condensation add the latent heat, which is why their heat transfer coefficients are the largest of all. The exam favourites are the boiling curve and dropwise against film condensation.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Cause of free convection | A temperature difference changes the fluid's density, and gravity makes the lighter (warmer) fluid rise and the heavier fluid sink. No density change, or no gravity, means no free convection. |
| Grashof number | Gr = gβΔT L³/ν² = buoyancy force ÷ viscous force. It plays the role that Re plays in forced convection. β is the volume expansion coefficient; for an ideal gas β = 1/T in kelvin. |
| Rayleigh number | Ra = Gr × Pr. In free convection Nu = f(Gr, Pr), usually written Nu = C Ra^n: n = 1/4 for laminar flow, and the flow on a vertical plate turns turbulent near Ra = 10⁹. |
| Mixed convection | Gr/Re² compares free with forced convection: much less than 1, forced convection dominates; much more than 1, free convection dominates; near 1, both count. |
| Boiling curve (Nukiyama) | Heat flux against excess temperature ΔTe = Ts − Tsat, for a heater in a pool of liquid. Its regimes in order: free convection boiling, nucleate boiling (bubbles; highest h), the peak at the critical heat flux, transition boiling (an unstable vapour film), the minimum (Leidenfrost) point, then film boiling, where a vapour blanket covers the surface. |
| Critical heat flux | The top of the nucleate region. With a set heat flux (an electric heater), a little more flux jumps the surface into film boiling at a far higher temperature, and the heater can melt: the burnout point. For water at 1 atm it occurs near ΔTe = 30 °C. |
| Film boiling and condensation | In film boiling heat passes from the wall through a vapour film into the liquid; in film condensation it passes from the vapour through a liquid film into the wall. One is the reverse of the other. |
| Film and dropwise condensation | On a clean, wettable surface the condensate spreads into a continuous film, which insulates the wall. On a non-wettable surface (oily, or coated with a promoter such as oleic acid or Teflon) it forms drops that roll off and expose bare metal, giving an h about 5 to 10 times higher. Dropwise condensation is hard to keep up, so designers use film-condensation values. |
| Nusselt's film condensation theory | For laminar film condensation on a vertical plate, h falls along the plate as the film thickens. Non-condensable gases such as air in the steam sharply reduce h, so condensers are vented. |

### Formulas to memorise

```math
Gr = \frac{g\,\beta\,\Delta T\,L^3}{\nu^2} \qquad Ra = Gr\cdot Pr \qquad \beta_{ideal\ gas} = \frac{1}{T}
```

```math
Nu = f(Gr,\,Pr) = C\,Ra^{n} \qquad \Delta T_e = T_s - T_{sat}
```

Re and Gr do the same job: Re in forced convection, Gr in free convection. In mixed convection compare Gr with Re².

### Past exam questions with solutions

**Q1. NRL GET (Mechanical), 23 September 2021 (Shift 3).** One of the reasons for the occurrence of natural convection is (a) the density change of the fluid (b) the velocity change of the fluid (c) changes in the molecular structure of the fluid (d) the velocity and density change of the fluid

*Answer: (a).* Heating changes the fluid's density, and buoyancy then sets it moving. The velocity is a result of the density change, not its cause.

**Q2. GATE ME 2016 (Shift 3).** The Grashof number signifies the ratio of (a) inertia force to viscous force (b) buoyancy force to viscous force (c) buoyancy force to inertia force (d) inertia force to surface tension force

*Answer: (b).* Gr = gβΔTL³/ν² compares the buoyancy that drives the flow with the viscosity that resists it. Option (a) is the Reynolds number and (d) the Weber number.

**Q3. MPPSC AE (Mechanical), 2021.** The role of the \_\_\_ number is the same in free convection as that of the Reynolds number in forced convection. (a) Prandtl (b) Grashof (c) Fourier (d) Biot

*Answer: (b).* In forced convection Nu = f(Re, Pr); in free convection Nu = f(Gr, Pr). Gr replaces Re, and Pr stays.

**Q4. RPSC Lecturer Technical Education (Mechanical Paper 2), 2020.** The Nusselt number in the case of natural convection is a function of (a) Grashof number and Prandtl number (b) Reynolds number (c) Reynolds number and Prandtl number (d) Weber number and Mach number

*Answer: (a).* With no forced flow there is no Reynolds number to use. Buoyancy is measured by Gr and the fluid by Pr; together they give Ra = Gr Pr.

**Q5. ISRO Scientist (Mechanical), 2014.** The Rayleigh number Ra is defined as (Gr = Grashof number, Pr = Prandtl number, Re = Reynolds number) (a) Re Pr (b) Gr Re (c) Gr Pr/4 (d) Gr Pr

*Answer: (d).* Ra = Gr × Pr = gβΔTL³/(να). Option (a), Re Pr, is the Peclet number.

**Q6. RPSC Lecturer (Mechanical), 2014.** Nukiyama's boiling curve is plotted between (a) boiling temperature and excess temperature (b) boiling heat flux and boiling temperature (c) boiling temperature and boiling pressure (d) boiling heat flux and excess temperature

*Answer: (d).* The curve plots heat flux q against ΔTe = Ts − Tsat, both usually on log scales. Nukiyama drew it in 1934 from a heated wire in water.

**Q7. ESE Mechanical, 2018.** Which one of the following regimes of the boiling curve can be considered the reverse of condensation? (a) Free convection boiling (b) Nucleate boiling (c) Transition boiling (d) Film boiling

*Answer: (d).* In film boiling a continuous vapour film separates the hot wall from the liquid; in film condensation a continuous liquid film separates the vapour from the cold wall. The heat flows the opposite way through a film of the other phase.

**Q8. ESE Mechanical, 2020.** Large heat transfer coefficients for vapour condensation can be achieved by promoting (a) film condensation (b) dropwise condensation (c) cloud condensation (d) dew condensation

*Answer: (b).* Drops roll off and leave bare metal in direct contact with the vapour, so there is no insulating liquid film. Dropwise condensation gives an h several times higher than film condensation.

**Q9. RPSC Lecturer Technical Education (Mechanical Paper 2), 2020.** Which of the following statements are correct? (a) Film condensation usually occurs on an oily surface. (b) The temperature of the condensate gradually increases towards the liquid–vapour interface. (c) A suitable coating is used to promote dropwise condensation. (d) Dropwise condensation gives a lower heat transfer rate than film condensation. Options: (1) (a) and (d) (2) (c) and (d) (3) (a) and (b) (4) (b) and (c)

*Answer: (4).* (b) is true: the condensate is coldest at the wall and reaches the saturation temperature at the vapour side. (c) is true: promoters such as oleic acid or Teflon stop the liquid wetting the wall. (a) is false, since an oily surface gives dropwise condensation, and (d) is false, since dropwise gives the higher rate.

## 8. Radiation laws and surface properties

Every body above absolute zero sends out energy as electromagnetic waves, and no medium is needed to carry it. This sub-topic is mostly laws with names: Planck, Wien, Stefan–Boltzmann, Kirchhoff and Lambert. Match each law to what it relates, keep temperatures in kelvin, and remember α + ρ + τ = 1.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Thermal radiation | Energy given off because of a body's temperature, carried by electromagnetic waves at the speed of light. It crosses a vacuum, as sunlight does. Its wavelengths run from about 0.1 to 100 µm: part of the ultraviolet, all the visible band (0.4–0.76 µm) and the infrared. |
| Absorptivity, reflectivity, transmissivity | Of the radiation falling on a surface, a fraction α is absorbed, ρ reflected and τ passed through, and α + ρ + τ = 1. Most solids are opaque (τ = 0), so α + ρ = 1. A white body has ρ = 1 and a transparent body τ = 1. Glass and gases let much of the radiation through. |
| Black body | An ideal surface that absorbs all radiation falling on it, at every wavelength and from every direction (α = 1, ρ = 0, τ = 0). At any temperature it also emits the most any body can, equally in all directions. A small hole in a large hollow cavity behaves almost exactly like one. |
| Emissivity and gray body | Emissivity ε = E/Eb: what a surface emits compared with a black body at the same temperature. A gray body has the same ε at every wavelength, so its spectrum has the black-body shape, scaled down by ε. Real surfaces are only roughly gray. |
| Kirchhoff's law | A body in thermal equilibrium with its surroundings has emissivity equal to absorptivity (ε = α) at the same temperature and wavelength. A good absorber is a good emitter. |
| Planck's law | Gives the black-body emissive power at each wavelength and temperature. As wavelength increases, Ebλ first rises to a peak and then falls. At a higher temperature the whole curve is higher, and its peak moves to shorter wavelengths. |
| Wien's displacement law | λmax T = 2898 µm·K: the wavelength of peak emission is inversely proportional to the absolute temperature. The sun (about 5800 K) peaks near 0.5 µm, in visible light; a room-temperature body (about 300 K) peaks near 10 µm, in the infrared. |
| Stefan–Boltzmann law | Eb = σT⁴, with σ = 5.67 × 10⁻⁸ W/m²·K⁴. It is the area under Planck's curve, found by integrating Planck's law over all wavelengths. A real surface emits E = εσT⁴. Doubling the absolute temperature multiplies emission by 16. |
| Lambert's cosine law and intensity | A diffuse surface has the same intensity in every direction, and the energy it sends in a direction falls as the cosine of the angle from the normal. For such a surface E = πI. From a small source, the radiation reaching a surface falls as the inverse square of the distance, because the same energy spreads over a sphere of area 4πr². |

### Formulas to memorise

```math
\alpha + \rho + \tau = 1 \qquad \text{opaque: } \alpha + \rho = 1 \qquad \text{Kirchhoff: } \varepsilon = \alpha
```

```math
E_b = \sigma T^4 \qquad E = \varepsilon\,\sigma T^4 \qquad \sigma = 5.67\times10^{-8}\ \text{W/m}^2\text{K}^4
```

```math
\lambda_{max}\,T = 2898\ \mu\text{m}\cdot\text{K} \qquad E_b = \pi I_b
```

```math
E_{b\lambda} = \frac{C_1\,\lambda^{-5}}{e^{C_2/\lambda T} - 1}
```

Always use kelvin: a body at 17 °C is at 290 K, so it peaks near 2898/290 ≈ 10 µm.

### Past exam questions with solutions

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** In the electromagnetic spectrum, the wavelength of thermal radiation extends over a range of (a) 0.1–100 µm (b) 0.01–0.1 µm (c) 10–30 µm (d) 100–1000 µm

*Answer: (a).* Thermal radiation covers part of the ultraviolet, all visible light and the infrared, about 0.1 to 100 µm. Shorter waves are X-rays and gamma rays; longer ones are microwaves and radio waves.

**Q2. RRB JE CBT 2 (Mechanical), 22 April 2025 (Shift 1).** Intensity of radiation varies with the (a) inverse square of the distance (b) cube of the distance (c) fourth power of the distance (d) square of the distance

*Answer: (a).* Energy from a small source spreads over a sphere whose area is 4πr², so the energy per unit area falls as 1/r². Twice as far away, a surface receives a quarter as much.

**Q3. Kerala PSC AE (Mechanical, Ports), 15 July 2026.** For a perfect black body (a) absorptivity = 1, reflectivity = 0, transmissivity = 1 (b) absorptivity = 0, reflectivity = 1, transmissivity = 0 (c) absorptivity = 1, reflectivity = 0, transmissivity = 0 (d) absorptivity = 1, reflectivity = 1, transmissivity = 1

*Answer: (c).* A black body absorbs everything, so α = 1 and nothing is left to reflect or pass through. Options (a) and (d) break α + ρ + τ = 1, and (b) describes a white body.

**Q4. GATE ME 2012.** For an opaque surface, the absorptivity (α), transmissivity (τ) and reflectivity (ρ) are related by the equation (a) α + ρ = τ (b) ρ + α + τ = 0 (c) α + ρ = 1 (d) α + ρ = 0

*Answer: (c).* Always α + ρ + τ = 1, and an opaque surface lets nothing through (τ = 0), leaving α + ρ = 1.

**Q5. ISRO Refrigeration and Air Conditioning, 2018.** For a glass plate, the transmissivity and reflectivity are 0.86 and 0.08 respectively. Its absorptivity is (a) 0.86 (b) 0.08 (c) 1.00 (d) 0.06

*Answer: (d).* α = 1 − τ − ρ = 1 − 0.86 − 0.08 = 0.06.

**Q6. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** A body whose radiation output has the same distribution as a black body but is reduced by a constant fraction is called a (a) coloured body (b) white body (c) gray body (d) dark body

*Answer: (c).* A gray body's emissivity is the same at every wavelength, so its curve is the black-body curve multiplied by one constant ε. A white body reflects everything and emits nothing.

**Q7. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 1).** \_\_\_ states that the emissivity of a body is equal to its absorptivity when the body remains in thermal equilibrium with its surroundings. (a) Kirchhoff's law (b) Planck's law (c) Lambert's cosine law (d) Wien's displacement law

*Answer: (a).* Kirchhoff's law: ε = α in thermal equilibrium. Planck gives the spectrum, Lambert the variation with direction, and Wien the peak wavelength.

**Q8. RSMSSB JE Mechanical (Degree), 13 December 2020.** The heat transfer equation Q = σAT⁴ is called (a) Newton's law (b) Stefan–Boltzmann law (c) Poisson's law (d) Fourier's law

*Answer: (b).* Emission proportional to the fourth power of absolute temperature is the Stefan–Boltzmann law. Newton's law of cooling is for convection and Fourier's law for conduction.

**Q9. RRB JE CBT 2 (Mechanical) re-exam, 4 June 2025.** The Stefan–Boltzmann law is derived from (a) Planck's law (b) Wien's displacement law (c) Fourier's law (d) Kirchhoff's law

*Answer: (a).* Adding up Planck's spectrum over all wavelengths (the area under the curve) gives Eb = σT⁴. Wien's law also comes from Planck's law, by finding where the curve peaks.

**Q10. HPCL Mechanical Engineer, 16 August 2025 (Shift 2).** A black body at 500 K emits radiation. If its temperature increases to 1000 K, the emitted energy increases by a factor of (a) 16 (b) 4 (c) 8 (d) 2

*Answer: (a).* E ∝ T⁴, so the factor is (1000/500)⁴ = 2⁴ = 16.

**Q11. Kerala PSC AE (Mechanical), 18 August 2025.** Which law of thermal radiation gives the relationship between the temperature of a black body and the wavelength at which the maximum monochromatic emissive power occurs? (a) Wien's displacement law (b) Stefan–Boltzmann law (c) Kirchhoff's law (d) Planck's law

*Answer: (a).* Wien's displacement law: λmax T = 2898 µm·K. Planck's law gives the whole curve; Wien's law picks out where its peak is.

**Q12. GATE ME 2018 (Shift 2).** The peak wavelength of radiation emitted by a black body at a temperature of 2000 K is 1.45 µm. If the peak wavelength of emitted radiation changes to 2.90 µm, then the temperature (in K) of the black body is (a) 500 (b) 1000 (c) 4000 (d) 8000

*Answer: (b).* λmax T is constant, so doubling the peak wavelength halves the temperature: 2000 × 1.45/2.90 = 1000 K.

**Q13. UPPSC AE Mains Paper II (Mechanical), 29 September 2025.** With increasing wavelength of radiation, the monochromatic emissive power of a black body (a) first decreases, reaches a minimum and then increases (b) decreases (c) increases (d) first increases, and after reaching a maximum it decreases

*Answer: (d).* Planck's curve starts near zero at very short wavelengths, rises to a peak at λmax and then falls away slowly at long wavelengths.

## 9. Radiation exchange, view factors and shields

How much radiation two surfaces trade depends on how well they see each other (the view factor) and on their emissivities. Two rules, reciprocity and summation, solve nearly every view factor question. For shields, remember that each shield adds resistance, so any shield cuts the heat flow.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| View factor F12 | Also called the shape or configuration factor: the fraction of radiation leaving surface 1 that reaches surface 2 directly. It depends only on the sizes, shapes, distance and angle between the surfaces, not on their temperatures or emissivities. Its value lies between 0 and 1. |
| Self view factor | A flat or convex surface cannot see itself, so F11 = 0. Only a concave surface, such as the inside of a hemisphere, has F11 > 0. |
| Reciprocity rule | A1F12 = A2F21. Use it to get the view factor of the larger surface once the smaller one's is known. |
| Summation rule | In a closed enclosure, the view factors from any one surface add to 1: F11 + F12 + F13 + … = 1. |
| Standard cases | Two infinite parallel plates: F12 = F21 = 1. A small body inside a closed surface: F12 = 1 and F21 = A1/A2. Concentric spheres: F21 = (r1/r2)²; long concentric cylinders: F21 = r1/r2. Hemispherical dome over its flat base: base to dome 1, dome to base 0.5, dome to itself 0.5. |
| Exchange between black surfaces | Q12 = A1F12σ(T1⁴ − T2⁴). |
| Gray surfaces | Each surface adds a surface resistance (1 − ε)/(εA), and the gap between them a space resistance 1/(A1F12). For two infinite parallel plates this gives q = σ(T1⁴ − T2⁴)/(1/ε1 + 1/ε2 − 1). For a small body in large surroundings, Q = ε1A1σ(T1⁴ − T2⁴). |
| Radiosity and irradiation | Irradiation G is all the radiation falling on a surface. Radiosity J is all the radiation leaving it, emitted plus reflected: J = εEb + ρG. |
| Radiation shield | A thin sheet placed between two surfaces. It adds two surface resistances and one space resistance in series, so the heat flow always falls, whatever the shield's emissivity. A shield of low emissivity, such as polished aluminium foil, cuts it most. With n shields of the same emissivity as the plates, the heat flow becomes 1/(n + 1) of the value without them. |

### Formulas to memorise

```math
A_1F_{12} = A_2F_{21} \qquad \sum_j F_{ij} = 1 \qquad F_{11} = 0 \text{ (flat or convex)}
```

```math
Q_{12} = A_1F_{12}\,\sigma\,(T_1^4 - T_2^4) \qquad \text{black surfaces}
```

```math
q = \frac{\sigma\,(T_1^4 - T_2^4)}{\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_2} - 1} \qquad \text{infinite parallel plates}
```

```math
\frac{Q_{n\ shields}}{Q_{no\ shield}} = \frac{1}{n+1} \qquad \text{all emissivities equal}
```

For a shield of a different emissivity, add the resistances: each gap gives 1/εa + 1/εb − 1, and the heat flow is inversely proportional to the total.

### Past exam questions with solutions

**Q1. HPCL Engineer (Mechanical), 12 August 2021 (Shift 2).** For a flat surface, the shape factor with respect to itself is (a) half (b) one (c) two (d) zero

*Answer: (d).* Radiation leaving a flat surface goes away from it and can never strike another part of the same surface, so F11 = 0. The same is true for a convex surface.

**Q2. TSPSC AEE Mechanical Paper II, 22 January 2023.** What will be the value of the shape factor for two infinite parallel surfaces separated by a distance d? (a) 0 (b) infinity (c) 1 (d) d

*Answer: (c).* Being infinite, each surface catches everything the other sends out, whatever the gap d. A view factor can never exceed 1.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** Two circular plates 1 and 2, with areas A1 = 2 m² and A2 = 5 m², exchange thermal radiation with each other. The shape factor of plate 1 to plate 2, F1−2, is 0.4. What is the shape factor of plate 2 to plate 1, F2−1? Assume the plates are black bodies. (a) 0.4 (b) 1 (c) 0.16 (d) 0.8

*Answer: (c).* Reciprocity: A1F12 = A2F21, so F21 = 2 × 0.4/5 = 0.16. The larger plate has the smaller view factor.

**Q4. GATE ME 2019 (Shift 2).** Sphere 1 with a diameter of 0.1 m is completely enclosed by another sphere 2 of diameter 0.4 m. The view factor F12 is (a) 0.0625 (b) 0.25 (c) 0.5 (d) 1.0

*Answer: (d).* All the radiation leaving the inner sphere must land on the outer one, so F12 = 1. Option (a) is F21 = (0.1/0.4)².

**Q5. GATE ME 2014 (Shift 3).** A solid sphere of radius r1 = 20 mm is placed concentrically inside a hollow sphere of radius r2 = 30 mm. The view factor F21 for radiation heat transfer is (a) 2/3 (b) 4/9 (c) 8/27 (d) 9/4

*Answer: (b).* F12 = 1, so F21 = A1/A2 = (r1/r2)² = (20/30)² = 4/9. Option (a) is the ratio for long cylinders.

**Q6. UPPSC AE Mechanical Paper II, 29 May 2022.** The shape factors F12 and F21 for a sphere of diameter d inside a cubical box of side d are (a) π/6 and 1 (b) 1 and π/6 (c) π/3 and 1 (d) 1 and π/3

*Answer: (b).* The sphere (1) sees only the box, so F12 = 1. Then F21 = A1/A2 = πd²/6d² = π/6.

**Q7. ESE Mechanical 2014 (Paper 1).** For a hemispherical furnace with a flat circular base of diameter D, the view factor from the dome to its base is (a) 0.5 (b) 1 (c) 0 (d) 0.32

*Answer: (a).* The flat base sees only the dome, so F(base→dome) = 1. By reciprocity F(dome→base) = A(base)/A(dome) = πR²/2πR² = 0.5. The other half of the dome's radiation falls back on the dome itself.

**Q8. GATE ME 2015 (Shift 3).** A solid sphere 1 of radius r is placed inside a hollow, closed hemispherical surface 2 of radius 4r. The shape factor F2−1 is (a) 1/12 (b) 1/2 (c) 2 (d) 12

*Answer: (a).* F12 = 1. The closed hemisphere's area is its curved dome plus its flat base: A2 = 2π(4r)² + π(4r)² = 48πr². So F21 = A1/A2 = 4πr²/48πr² = 1/12.

**Q9. GATE ME 2014 (Shift 4).** Two infinite parallel plates exchange heat by radiation. An infinite radiation shield is inserted between them, and the emissivities of the plates and the shield are all equal. The ratio of the net heat exchange between the plates with and without the shield is (a) 1/2 (b) 1/3 (c) 1/4 (d) 1/8

*Answer: (a).* The shield turns one gap into two equal gaps, doubling the resistance. With n shields the ratio is 1/(n + 1) = 1/2.

**Q10. UPPSC AE Mechanical Paper II, 29 May 2022.** Two infinite parallel planes of emissivity 0.5 each exchange heat by radiation. A radiation shield of emissivity 0.25 is placed between them. The heat transfer is reduced by (a) 70% (b) 60% (c) 25% (d) 50%

*Answer: (a).* Without the shield the resistance term is 1/0.5 + 1/0.5 − 1 = 3. With it there are two gaps, each 1/0.5 + 1/0.25 − 1 = 5, total 10. The heat flow falls to 3/10 = 30% of its old value, a reduction of 70%.

**Q11. MP Vyapam Sub Engineer, 2 September 2018 (Shift 1).** In radiation heat transfer between infinitely long parallel plates, if a radiation shield of higher emissivity than the plates is used, the heat transfer between the plates will (a) decrease and then increase (b) decrease (c) increase (d) remain the same irrespective of the emissivity of the shield

*Answer: (b).* The shield adds two surface resistances in series. Even a black shield (ε = 1) adds resistance, so the heat flow falls; a higher-emissivity shield simply cuts it by less than a polished one would.

## 10. Heat exchangers, LMTD and effectiveness-NTU

A heat exchanger passes heat from a hot fluid to a cold one through a wall. Two methods size it: LMTD, when all four end temperatures are known, and effectiveness-NTU, when the outlets are not. Exams test the flow types, the LMTD formula and its special cases, and which fluid is Cmin.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Flow arrangements | Parallel flow: both fluids enter at the same end and move the same way. Counter flow: they move in opposite directions. Cross flow: they move at right angles, as air across the tubes of a car radiator. |
| Types by construction | Double pipe (one tube inside another), shell and tube (a bundle of tubes in a shell; the common industrial type), plate, and compact finned types. Recuperators keep the fluids apart by a wall; regenerators let the hot and cold fluids flow in turn through the same matrix, which stores the heat; direct-contact types, such as cooling towers, mix them. |
| Baffles | Plates across the shell of a shell-and-tube exchanger. They make the shell-side fluid cross the tubes again and again, which raises turbulence and h, prevents dead zones where fluid stagnates, and supports the tubes against sagging and vibration. |
| Overall heat transfer coefficient | Q = UAΔTm, with 1/U = 1/hi + x/k + 1/ho plus fouling resistances. Scale and dirt (fouling) lower U over time. Fins go on the side with the lower h, usually the gas side. |
| LMTD | ΔTm = (ΔT1 − ΔT2)/ln(ΔT1/ΔT2), using the temperature differences at the two ends. In parallel flow the ends pair inlet with inlet and outlet with outlet; in counter flow the hot inlet faces the cold outlet. |
| LMTD assumptions | Steady flow; constant U; constant specific heats and mass flow rates; no heat lost to the surroundings; axial conduction along the tubes negligible; changes in kinetic and potential energy negligible. |
| Counter flow against parallel flow | For the same end temperatures, counter flow has the higher LMTD, so it needs less area. Only in counter flow can the cold fluid leave hotter than the hot fluid leaves. In parallel flow the outlets can at most become equal, which would need infinite area: LMTD then tends to zero. |
| Special LMTD cases | When ΔT is the same at both ends (counter flow with equal capacity rates), the formula gives 0/0 and LMTD = ΔT. When one fluid changes phase at constant temperature (condenser, evaporator), its temperature does not change, so parallel, counter and cross flow all give the same LMTD. |
| Effectiveness | ε = actual heat transfer ÷ maximum possible. Qmax = Cmin(Th,in − Tc,in), where C = ṁc is a capacity rate and Cmin is the smaller one. The fluid with Cmin has the larger temperature change, so ε = (temperature change of the Cmin fluid) ÷ (Th,in − Tc,in). |
| NTU and capacity ratio | NTU = UA/Cmin measures the size of the exchanger; C = Cmin/Cmax is the capacity ratio. Effectiveness depends on NTU, C and the flow arrangement. With a phase change, Cmax is infinite, so C = 0 and ε = 1 − e^(−NTU) for every arrangement. |

### Formulas to memorise

```math
Q = UA\,\Delta T_m \qquad \frac{1}{U} = \frac{1}{h_i} + \frac{x}{k} + \frac{1}{h_o}
```

```math
\text{LMTD} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)}
```

```math
\varepsilon = \frac{Q}{Q_{max}} \qquad Q_{max} = C_{min}\,(T_{h,in} - T_{c,in}) \qquad NTU = \frac{UA}{C_{min}} \qquad C = \frac{C_{min}}{C_{max}}
```

```math
C = 0:\ \varepsilon = 1 - e^{-NTU} \qquad \text{parallel: } \varepsilon = \frac{1 - e^{-NTU(1+C)}}{1 + C} \qquad \text{counter},\ C = 1:\ \varepsilon = \frac{NTU}{1 + NTU}
```

To find Cmin quickly, look for the fluid whose temperature changes more: ChΔTh = CcΔTc, so the larger change goes with the smaller capacity rate.

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 1 March 2017 (morning).** Which type of heat exchanger is an automobile radiator? (a) Parallel flow (b) Counter flow (c) Regenerator (d) Cross flow

*Answer: (d).* Coolant flows down the radiator tubes while air is driven across them by the fan and the car's motion, at right angles to the water. It is a compact cross-flow exchanger.

**Q2. SSC JE Mechanical, 1 March 2017 (morning).** In a shell and tube heat exchanger, baffles are provided on the shell side to (a) prevent stagnation of the shell-side fluid (b) improve heat transfer (c) provide support for the tubes (d) all options are correct

*Answer: (d).* Baffles make the shell fluid zig-zag across the tubes (more turbulence and a higher h), leave no dead pockets, and hold the tubes in place.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025.** Which of the following statements is not an assumption used in the LMTD analysis of heat exchangers? (a) The overall heat transfer coefficient is constant (b) Axial conduction is constant (c) The specific heats and mass flow rates of the fluids are constant (d) The flow conditions are steady

*Answer: (b).* The assumption is that axial conduction along the tubes is negligible, not that it is constant. The other three are standard LMTD assumptions.

**Q4. RSMSSB JE (Electrical/Mechanical, Degree), 26 December 2020.** Compared with a parallel flow heat exchanger, the LMTD of a counter flow heat exchanger is (a) lower (b) higher (c) the same (d) unpredictable

*Answer: (b).* In counter flow the temperature difference stays more even along the length, so its log mean is larger for the same end temperatures, and less area is needed.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023.** In a counter flow heat exchanger, the cold fluid enters at 30 °C and leaves at 50 °C, whereas the hot fluid enters at 150 °C and leaves at 130 °C. The mean temperature difference for this case is (a) 20 °C (b) 80 °C (c) 100 °C (d) indeterminate

*Answer: (c).* In counter flow, ΔT1 = 150 − 50 = 100 °C and ΔT2 = 130 − 30 = 100 °C. With equal differences at both ends, the mean is simply 100 °C. The formula's 0/0 is not "indeterminate"; its limit is ΔT.

**Q6. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026.** For a counter flow heat exchanger, the temperatures of the hot fluid at inlet and outlet are 100 °C and 50 °C, and those of the cold fluid are 30 °C and 80 °C respectively. The LMTD of the heat exchanger is (a) 0 °C (b) 20 °C (c) infinity (d) undetermined

*Answer: (b).* ΔT1 = 100 − 80 = 20 °C and ΔT2 = 50 − 30 = 20 °C. Both ends are equal, so LMTD = 20 °C. Both fluids change by 50 °C, so their capacity rates are equal.

**Q7. HPCL Engineer (Mechanical), 18 August 2024.** If the exit temperatures of the hot and cold fluids are equal in a parallel flow heat exchanger, the LMTD will be (a) zero (b) cannot be determined (c) highest (d) lowest

*Answer: (a).* At the exit ΔT2 = 0, so ln(ΔT1/ΔT2) becomes infinite and LMTD tends to 0. That is why reaching equal outlets in parallel flow would need an infinitely long exchanger.

**Q8. UPPSC AE Mechanical 2013 (Paper II).** In the condenser of a power plant, the steam condenses at a temperature of 60 °C. The cooling water enters at 30 °C and leaves at 45 °C. The logarithmic mean temperature difference (LMTD) of the condenser is (a) 16.2 °C (b) 21.6 °C (c) 30 °C (d) 37.5 °C

*Answer: (b).* ΔT1 = 60 − 30 = 30 °C and ΔT2 = 60 − 45 = 15 °C. LMTD = (30 − 15)/ln 2 = 15/0.693 = 21.6 °C. Option (c) is the larger end difference, not a mean.

**Q9. ESE Mechanical 2014 (Paper 1).** In a concentric double-pipe heat exchanger where one of the fluids undergoes a phase change (a) the two fluids should flow opposite to each other (b) the two fluids should flow parallel to each other (c) the two fluids should flow normal to each other (d) the directions of flow of the two fluids are of no consequence

*Answer: (d).* The fluid changing phase stays at one temperature throughout, so the end temperature differences, and hence the LMTD, are the same for any arrangement.

**Q10. GATE ME 2016 (Shift 3).** Consider a heat exchanger with ΔTmax and ΔTmin the maximum and minimum temperature differences, LMTD the log mean temperature difference, and Cmin and Cmax the minimum and maximum heat capacity rates. The maximum possible heat transfer Qmax between the two fluids is (a) Cmin LMTD (b) Cmin ΔTmax (c) Cmax ΔTmax (d) Cmax ΔTmin

*Answer: (b).* The largest temperature change any fluid could have is ΔTmax = Th,in − Tc,in, and only the fluid with Cmin could reach it, so Qmax = CminΔTmax. Using Cmax would break the energy balance for the other fluid.

**Q11. SSC JE Mechanical, 2 March 2017 (morning).** Engine oil at 150 °C is cooled to 80 °C in a parallel flow heat exchanger by water entering at 25 °C and leaving at 60 °C. The effectiveness of the heat exchanger is (a) 0.36 (b) 0.46 (c) 0.56 (d) 0.66

*Answer: (c).* The oil changes by 70 °C and the water by 35 °C, so the oil is the Cmin fluid. ε = (150 − 80)/(150 − 25) = 70/125 = 0.56. Using the water's 35 °C rise would give 0.28, which is wrong because water is the Cmax fluid, so always find Cmin first.

**Q12. ESE Mechanical 2016 (Paper 1).** In a heat exchanger, hot gases enter at 200 °C and leave at 150 °C, while cold air enters at 40 °C and leaves at 140 °C. The capacity ratio of the heat exchanger is (a) 0.40 (b) 0.45 (c) 0.50 (d) 0.52

*Answer: (c).* Ch × 50 = Cc × 100, so Ch = 2Cc. The air is Cmin, and C = Cmin/Cmax = Cc/2Cc = 0.5. Equivalently, C = (smaller temperature change)/(larger) = 50/100.

**Q13. UPRVUNL AE (Mechanical), 2016.** The effectiveness of a heat exchanger is a function of (a) NTU and the heat capacity ratio (b) NTU only (c) the heat capacity ratio only (d) the surface area only

*Answer: (a).* ε = f(NTU, C) for a given flow arrangement. Only when C = 0 (phase change) does it depend on NTU alone.

**Q14. VIZAG Steel MT (Mechanical), 2015.** If one of the two fluids flowing through a heat exchanger with NTU = 2 remains at constant temperature throughout, the effectiveness will be (a) 1 − e⁻⁴ (b) 1 − e⁻² (c) (1 − e⁻²)/2 (d) (1 − e²)/2

*Answer: (b).* A fluid at constant temperature has an infinite capacity rate, so C = 0 and ε = 1 − e^(−NTU) = 1 − e⁻² ≈ 0.86. Option (c) is the parallel flow result for C = 1, which does not apply here.

## Sources

Each question's exam and date come from the booklet or page it was taken from; the solutions are written fresh. The guide has 111 questions: 14 from Kerala PSC, 4 from RRB JE, 5 from SSC JE and 88 from other exams. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys: the provisional key for the 2023 paper and the final keys for the others. Below they are listed by paper and by the question number in that paper. The other questions come from Testbook solution pages, which name the paper each question appeared in. Few published SSC JE and RRB JE heat transfer questions carry their paper's name, so where JE papers had no tagged question on a point, the question comes from another technical exam at the same level (ISRO, HPCL, BHEL, UPRVUNL, state PSC AE and lecturer papers, GATE and ESE). One comes from a civil engineering JE paper, which asks the same basics. A few slips in the source wording were corrected, as listed at the end.

- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical, Ports), 65/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- Sub-topic 1: [modes of heat transfer](https://testbook.com/question-answer/which-of-the-following-can-not-be-considered-as-mo--607075945ab0f456757384e9), [free electrons](https://testbook.com/question-answer/transport-of-free-electrons-resulting-in-a-transfe--6121010c892d1e490082ecb8), Kerala PSC 65/2026 Q94 (Newton's law of cooling), Kerala PSC 65/2026 Q96 (what thermal conductivity depends on), [Fourier's law](https://testbook.com/question-answer/fouriers-law-of-heat-conduction-defines-the-r--5f4cecd46cd7533ad461ab35), [SI unit of thermal conductivity](https://testbook.com/question-answer/the-si-unit-of-thermal-conductivity-is--5e88a624f60d5d02db165211), [highest thermal conductivity](https://testbook.com/question-answer/thermal-conductivity-is-the-maximum-for-which-subs--5f2a6031e709710d13417389), [liquid metal](https://testbook.com/question-answer/liquid-metal-having-highest-thermal-conductivity-i--59b2734de07ce01c9a802013), [conductivity of a gas](https://testbook.com/question-answer/as-the-temperature-increases-the-thermal-conducti--565feea8995a2d0c5d506437), [moisture in insulation](https://testbook.com/question-answer/the-insulating-ability-of-an-insulator-with-the-pr--5f7c15779ba0389e4aabb98b), [thermal insulation](https://testbook.com/question-answer/which-of-the-following-is-a-requirement-for-therma--666c399e111a11ef561abfef), [rubber, air, aluminium or wood](https://testbook.com/question-answer/which-of-the-following-materials-is-likely-to-have--6811d66c575241b3b6ad7885), [how radiation travels](https://testbook.com/question-answer/what-is-the-primary-mechanism-by-which-thermal-rad--68470a93f8afcd2f2136cb6c)
- Sub-topic 2: [thermal resistance](https://testbook.com/question-answer/the-rate-of-heat-flow-through-a-body-isq--6038fd07e38ac6df2c0ff554), [temperature profile in a wall](https://testbook.com/question-answer/for-steady-state-one-dimensional-heat-conduction-t--5f4dc4bdb65c0216c9c2db76), [unit of U](https://testbook.com/question-answer/the-unit-of-overall-heat-transfer-coefficient-is--5d1474c6fdb8bb32e8ccb9ba), [U of a composite wall](https://testbook.com/question-answer/the-overall-heat-transfer-coefficient-u-for-a-co--600ff7746528a4db6914f73c), [equivalent conductivity](https://testbook.com/question-answer/a-composite-slab-has-two-layers-of-different-mater--603f6ecb5fc7c05c5bae0675), [temperature drop ratio](https://testbook.com/question-answer/a-composite-wall-of-a-furnace-has-two-layers-of-eq--6363b0e2a7a1266663c7a69a), [cost of heat lost](https://testbook.com/question-answer/the-dimensions-of-a-wall-are-5-m-long-10-m-wide--6244105edda12c735cbbdff0), [furnace wall resistance](https://testbook.com/question-answer/a-furnace-wall-made-of-steel-plate-10-mm-thick-and--60074b65e88174b554c5d19e)
- Sub-topic 3: [hollow sphere](https://testbook.com/question-answer/if-the-inner-and-outer-walls-of-a-sphere-having-su--60b5e2d5616528bfa9085fe9), [mean radius of a sphere](https://testbook.com/question-answer/the-mean-radius-for-heat-conduction-through-thick--6a6b374bc24a437562f6cc4e), [critical radius formula](https://testbook.com/question-answer/the-critical-radius-of-insulation-of-cylindrical-r--632361bf0e80eeacc8bd873d), [meaning of critical radius](https://testbook.com/question-answer/the-critical-radius-of-insulation-signifies--5f54a9b70f128f3157da3971), [critical thickness](https://testbook.com/question-answer/critical-thickness-of-insulation-yields--591c22db04b9af08dd059849), [pipe radius above critical](https://testbook.com/question-answer/for-pipes-the-radius-of-the-pipe-is-taken-higher--628ca05bc6cc936fd085b850), [critical radius for asbestos](https://testbook.com/question-answer/the-critical-radius-of-insulation-for-asbestors-wi--61234a0f6ada613899187eee), Kerala PSC 104/2025 Q58 (cable insulation), [enamel on a wire](https://testbook.com/question-answer/it-is-proposed-to-coat-a-1-mm-diameter-wire-with-e--5f3a6a9d2ce3c50d0d0b2426), [insulated conductor](https://testbook.com/question-answer/a-10-mm-diameter-electrical-conductor-is-covered-b--565c1acf03282114ca1d42e3)
- Sub-topic 4: [why fins are used](https://testbook.com/question-answer/on-heat-transfer-surface-fins-are-provided--625ffb271f5410c9d65a4d83), Kerala PSC 050/2023 Q48 (fin effectiveness), [when a fin helps](https://testbook.com/question-answer/if-sqrtfrachakpis-_____-then-a--5e819719f60d5d3e0603fdc4), [fin statements](https://testbook.com/question-answer/consider-the-following-statements-pertaining-to-la--6809d7c30f78a8fa8b1e47b1), [fin spacing](https://testbook.com/question-answer/which-one-of-the-following-configurations-has-the--565c2b31995a2d0c5d4bc5fc), [very long fin](https://testbook.com/question-answer/temperature-distribution-fract-t_infty--5e85f58af60d5d5b2ed35243), [parameter m](https://testbook.com/question-answer/in-an-infinitely-long-fin-if-the-parameter-m-nb--637239e1f241280db66cdd45), [insulated tip temperature](https://testbook.com/question-answer/the-insulated-tip-temperature-of-a-rectangular-lon--6040f757e7300bf1dafb43cc), [pin fin efficiency](https://testbook.com/question-answer/the-efficiency-of-a-pin-fin-with-insulated-tip-is--59e5cd50c882bc098b205707), [effectiveness of one fin](https://testbook.com/question-answer/a-3-cm-long-2-mm-2-mm-rectangular-cross-s--5f34bd845dda480d0c519cc8), [air heated by steam](https://testbook.com/question-answer/air-can-be-best-heated-by-steam-in-a-heat-exchange--5f2fee3034afa30d149c9298)
- Sub-topic 5: [Biot number](https://testbook.com/question-answer/the-ratiorm-fracconduction-res--6425915316cf1ed812c9481f), [lumped analysis](https://testbook.com/question-answer/lumped-heat-capacity-analysis-is-valid-for-bodies--63722f05779dfe62d0f05988), [Biot number of a sphere](https://testbook.com/question-answer/a-hot-steel-sphere-of-diameter-40mm-is-immersed-in--603f8896cbb80eb9ad820f35), [numbers for unsteady conduction](https://testbook.com/question-answer/heat-flow-in-unsteady-state-heat-conduction--60707eebe7d8f80a10a1d364), [Heisler chart](https://testbook.com/question-answer/a-hot-steel-spherical-ball-is-suddenly-dipped-into--6033ba935f6b70b6aa112388), [Fourier number](https://testbook.com/question-answer/the-measure-of-heat-conducted-through-a-body-relat--60f96a27f538cea01b8c5685), [lumped cooling curve](https://testbook.com/question-answer/choose-the-correct-statement-the-curve-for-unste--6299f39be96f6fdd5d6e2314), [copper ball](https://testbook.com/question-answer/a-solid-copper-ball-of-mass-500-gm-when-quenched-i--5feb233dc605c99d67ec6ede), [cooling beaker](https://testbook.com/question-answer/a-beaker-filled-with-hot-water-in-a-room-cools-fro--591c208fc1baab08c721a0f7), [sphere, cube and disc](https://testbook.com/question-answer/a-sphere-a-cube-and-a-disc-all-of-the-same-materi--5916bdd293140a08d4d2ce36), [concrete slab](https://testbook.com/question-answer/a-large-concrete-slab-1-m-thick-has-one-dimensiona--5f9be0702ab24569d785b3ca)
- Sub-topic 6: [Nusselt number as resistances](https://testbook.com/question-answer/nusselt-number-is-the-ratio-of--5916c51a33426508e3ca3f7b), [Nusselt number as a gradient](https://testbook.com/question-answer/nusselt-number-may-be-characterised-as--5f2a8dba7972ac0d147a766f), [momentum and thermal diffusivity](https://testbook.com/question-answer/the-ratio-of-momentum-diffusivity-v-to-thermal-d--56599047995a2d13ea41a4eb), [Prandtl number of water](https://testbook.com/question-answer/the-typical-range-of-prandtl-number-for-water-is--5e849aadf60d5d3f31801c8e), [boundary layers in air](https://testbook.com/question-answer/in-the-laminar-flow-of-air-pr-0-7-over-a-heate--56597f18995a2d13ea417c01), [Prandtl number much above 1](https://testbook.com/question-answer/for-materials-where-prandtl-number-pr-%e2%89%ab-1--60227441f802c917e1ea08d4), [no thermal boundary layer](https://testbook.com/question-answer/for-flow-of-viscous-fluid-over-a-flat-plate-if-th--565c151a03282114ca1d3bfd), Kerala PSC 050/2023 Q49 (boundary layer ratio), [Reynolds and Nusselt change](https://testbook.com/question-answer/air-is-flowing-over-a-hot-plate-at-a-temperature-o--60566fc7c2ec908a21d38984), Kerala PSC 104/2025 Q59 (Nu = 48/11), [pipe Nusselt numbers](https://testbook.com/question-answer/for-a-hydrodynamically-and-thermally-fully-develop--5d7bb574fdb8bb3a441e6700)
- Sub-topic 7: [cause of natural convection](https://testbook.com/question-answer/one-of-the-reasons-for-the-occurrence-of-natural-c--6166d6f126db1f7f1d0c8a96), [Grashof number](https://testbook.com/question-answer/grashof-number-signifies-the-ratio-of--5e19fcdaf60d5d2d6cf18a42), [role of the Grashof number](https://testbook.com/question-answer/the-role-of-nbsp--62516d815130b73be3f119e8), [Nusselt number in free convection](https://testbook.com/question-answer/the-nusselt-number-in-the-case-of-natural-convect--625d38551a0e5b8bef4ebeb8), [Rayleigh number](https://testbook.com/question-answer/the-rayleigh-number-ra-is-defined-as-where-gr-i--591c1f0604b9af08dd0586de), [Nukiyama curve](https://testbook.com/question-answer/nukiyamas-boiling-curve-is-plotted-between--60227463157fa3a8b09083e4), [reverse of condensation](https://testbook.com/question-answer/which-one-of-the-following-regimes-of-bowling-curv--5ec7bb51f60d5d024b97e3ae), [higher condensation coefficient](https://testbook.com/question-answer/large-heat-transfer-coefficients-for-vapour-conden--5ed49de6f60d5d3f33e683b6), [condensation statements](https://testbook.com/question-answer/which-are-the-correct-statementsa-film-conden--62690e4b2a7ef09fb529ce27)
- Sub-topic 8: Kerala PSC 68/2026 Q54 (wavelength range), [inverse square](https://testbook.com/question-answer/intensity-of-radiation-varies-with-the--681086e65e5a66c6ff2d2f70), Kerala PSC 65/2026 Q97 (black body), [opaque surface](https://testbook.com/question-answer/for-an-opaque-surface-the-absorptivity--565c3765995a2d0c5d4bd9e3), [glass plate](https://testbook.com/question-answer/for-a-glass-plate-transmissivity-and-reflectivity--5ff6105e84465a600ad7b2ab), Kerala PSC 68/2026 Q56 (gray body), [Kirchhoff's law](https://testbook.com/question-answer/_______-states-that-the-emissivity-of-a-body-is-eq--62dd5292b3c57b87b1ca5d84), [Q = σAT⁴](https://testbook.com/question-answer/the-heat-transfer-equation-q-at4-is-calle--6013eadbfb7deaba330a5524), [Stefan–Boltzmann from Planck](https://testbook.com/question-answer/the-stefan-boltzmann-law-is-derived-from--68470aa3ad4d90213078f9f4), [500 K to 1000 K](https://testbook.com/question-answer/a-black-body-at-500-k-emits-radiation-if-the-temp--69aedeb7392a1d157017f08f), Kerala PSC 104/2025 Q60 (Wien's law), [peak wavelength](https://testbook.com/question-answer/the-peak-wavelength-of-radiation-emitted-by-a-blac--5b75786eee25ec0c3a26bee5), [shape of the Planck curve](https://testbook.com/question-answer/with-increasing-wavelength-of-radiation-the-monoch--6a6b375b88b56342b7398112)
- Sub-topic 9: [self view factor](https://testbook.com/question-answer/for-a-flat-surface-the-shape-factor-with-respect--6120ef3d7ec886b5166b42d3), [infinite parallel surfaces](https://testbook.com/question-answer/what-will-be-the-value-of-the-shape-factor-for-two--642592467e111aa575273650), Kerala PSC 104/2025 Q61 (reciprocity), [sphere inside a sphere](https://testbook.com/question-answer/sphere-1-with-a-diameter-of-0-1-m-is-completely-en--5dde863bf60d5d44b47ddd93), [concentric spheres](https://testbook.com/question-answer/a-solid-sphere-of-radius-r1-20-mm-is-placed-conc--565edd9003282114ca209aa7), [sphere in a cube](https://testbook.com/question-answer/the-shape-factors-f12and-f21-for-the-sphere--6299f1c9e8b52ff0c0aba977), [hemispherical furnace](https://testbook.com/question-answer/for-a-hemispherical-furnace-with-a-flat-circular-b--5f47926346f5d20d108245d8), [sphere in a hemisphere](https://testbook.com/question-answer/a-solid-sphere-1-of-radius-r-is-plac--5659a411995a2d13ea41d13b), [one shield](https://testbook.com/question-answer/two-infinite-parallel-plates-are-placed-at-a-certa--56602a82995a2d0c5d50d329), [shield of emissivity 0.25](https://testbook.com/question-answer/two-infinity-parallel-planes-of-same-emissivity-0--629c56d787514404c69060c6), [higher-emissivity shield](https://testbook.com/question-answer/in-radiation-heat-transfers-between-infinitely-lon--5faa7c41234bb6ed058ae30e)
- Sub-topic 10: [car radiator](https://testbook.com/question-answer/which-type-of-heat-exchanger-an-automobile-radiato--5916b3ae93140a08d4d29f02), [baffles](https://testbook.com/question-answer/in-a-shell-and-tube-heat-exchanger-baffles-are-pr--558daf582a396511d048a1f8), Kerala PSC 104/2025 Q62 (LMTD assumptions), [counter and parallel flow LMTD](https://testbook.com/question-answer/compared-to-parallel-flow-heat-exchanger-lmtd-in--6204be6a56597cbe5e5fdb4d), Kerala PSC 050/2023 Q50 (equal end differences), Kerala PSC 68/2026 Q60 (LMTD with equal ends), [equal exit temperatures](https://testbook.com/question-answer/if-the-exit-temperatures-of-hot-and-cold-fluids-ar--684a2fcb43c782d760c91291), [condenser LMTD](https://testbook.com/question-answer/in-a-condenser-of-a-power-plant-the-steam-condens--56584457995a2d13ea3f7310), [phase change](https://testbook.com/question-answer/in-a-concentric-double-pipe-heat-exchanger-where-o--5f323a506e9c6f0d0d764bfc), [maximum heat transfer](https://testbook.com/question-answer/for-a-heat-exchanger-tmax-is-the-maximum-t--5e15e3e9f60d5d46be5ffbea), [oil cooler effectiveness](https://testbook.com/question-answer/the-engine-oil-at-150c-is-cooled-to-80c--5d7fad6ffdb8bb0c8e8d1d99), [capacity ratio](https://testbook.com/question-answer/hot-gas-enters-a-heat-exchanger-at-200c-and-l--5e9dad1af60d5d2e9f7d803c), [what effectiveness depends on](https://testbook.com/question-answer/effectiveness-of-heat-exchanger-is-function-ofnb--5e7b31ecf60d5d29f99c6a47), [NTU of 2](https://testbook.com/question-answer/if-one-of-the-two-fluids-flowing-through-a-heat-ex--5f853640732120b7b30949b2)
- Wording changes: Kerala PSC options are lettered (a) to (d) here instead of A to D, and their typing slips are fixed. In sub-topic 6, Q8 reads "the one-third power of the Prandtl number" for "one-third of Prandtl number" (the key's answer is the power), and "the square root of" for "root of". In sub-topic 9, Q3 writes the areas and shape factors as A1 = 2 m², A2 = 5 m², F1−2 and F2−1, which are scrambled in the text copy of the booklet. In sub-topic 10, Q3 option (a) reads "overall heat transfer coefficient" for "overall heat transfer", and Q6 writes LMTD for "lmTd". Of the Testbook questions, sub-topic 2 Q5 reads "k and 2k" for "k ad 2k"; sub-topic 3 Q4 reads "electric cable" for "elastic cable" and Q7 spells asbestos for "asbestors"; sub-topic 5 Q10 drops "quality" from "the same material, quality and volume"; sub-topic 6 Q4 gives options (c) and (d) as 50–500 and 1000–2000, fixing typing slips in the source; sub-topic 7 Q7 reads "boiling curve" for "bowling curve" and Q9 option (2) reads "(c) and (d)" for "(e),(d)"; and sub-topic 8 Q4 reads "transmissivity" for "transitivity". Several longer Testbook stems are lightly reworded or reordered, with the data and options unchanged. Capital letters, small punctuation and units written with superscripts (m² for m2, 10⁻⁸ for 10-8) are not listed one by one.
