# Thermal Engineering Study Guide

Oct 27, 2026 · @Rohith

**Next level:** [Level 2, the theory of the same 10 topics in depth](level-2/)

## How to use this guide

Thermal Engineering is the top-ranked subject in your topic map: about 19% of technical questions across RRB JE, SSC JE and Kerala PSC AE. Finish it in about 18 study days, one sub-topic at a time, in the order below.

For each sub-topic you get three things: the main contents to learn, what each one means in plain words (with the formulas you must memorise), and real questions from 2021–2026 papers with worked solutions. Questions are tagged with the exam and year they appeared in.

| # | Sub-topic | Days | Asked most in |
| --- | --- | --- | --- |
| 1 | Basic concepts and laws of thermodynamics | 2 | All three |
| 2 | Entropy, Carnot cycle, availability | 2 | SSC JE, KPSC |
| 3 | Air standard cycles | 2 | All three |
| 4 | IC engines: working, parts, performance, knocking | 3 | RRB JE (about 11 Qs) |
| 5 | IC engine systems | 1 | RRB JE |
| 6 | Steam, Rankine cycle, boilers | 2 | SSC JE, KPSC |
| 7 | Steam nozzles and turbines | 2 | SSC JE, KPSC |
| 8 | Air compressors | 1 | SSC JE |
| 9 | Refrigeration and air conditioning | 2 | SSC JE (4–6 Qs in Paper 1) |
| 10 | Fuels and combustion | 1 | KPSC, RRB JE |

Method per sub-topic: read the contents, write the formulas on one page, solve the past questions without looking, then check the solutions.

## 1. Basic concepts and laws of thermodynamics

This sub-topic is mostly definitions and sign rules, so it is quick marks once memorised. Expect 2–3 questions per paper.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| System, surroundings, boundary | The system is the fixed quantity or region you study; everything outside is the surroundings. |
| Closed system | Energy crosses the boundary, mass does not (gas in a sealed piston-cylinder). |
| Open system (control volume) | Both mass and energy cross the boundary (turbine, nozzle, pump). |
| Isolated system | Neither mass nor energy crosses (the universe, an ideal thermos). |
| Intensive vs extensive property | Intensive does not depend on mass (P, T, density). Extensive does (V, U, H, S). Extensive divided by mass gives a specific property, which is intensive. |
| Point vs path function | A property depends only on the state (P, V, T, U, H, S) and is an exact differential. Heat and work depend on the path, so they are not properties. |
| Quasi-static process | A process slow enough that the system is in equilibrium at every instant. Only these can be drawn as a line on a P-V diagram. |
| Zeroth law | If A and C are each in thermal equilibrium with B, then A and C are in equilibrium. It is the basis of temperature measurement. |
| First law | Energy is conserved. For a cycle the net heat equals the net work; for a process the heat supplied equals the rise in internal energy plus the work done. |
| Sign convention | Heat into the system is positive. Work done by the system is positive. |
| Internal energy of an ideal gas | Depends on temperature only (Joule's law), so it does not change in an isothermal process. |
| Specific heats | Cv relates internal energy change to temperature change; Cp relates enthalpy change to temperature change. For air, γ = Cp/Cv = 1.4. |
| Polytropic process (PV^n = C) | One formula covers all ideal processes: n = 0 constant pressure, n = 1 isothermal, n = γ reversible adiabatic, n = ∞ constant volume. |
| Steady flow energy equation (SFEE) | The first law for open systems. Throttling: enthalpy stays constant. Nozzle: enthalpy drop becomes kinetic energy. |

### Formulas to memorise

```math
\oint \delta Q = \oint \delta W \qquad Q = \Delta U + W \qquad H = U + PV
```

```math
C_p - C_v = R \qquad \gamma = \frac{C_p}{C_v} \qquad \Delta U = m C_v \Delta T \qquad \Delta H = m C_p \Delta T
```

```math
W_{isothermal} = P_1 V_1 \ln\frac{V_2}{V_1} \qquad W_{polytropic} = \frac{P_1 V_1 - P_2 V_2}{n-1} \qquad W_{isobaric} = P(V_2 - V_1)
```

```math
h_1 + \frac{c_1^2}{2} + g z_1 + q = h_2 + \frac{c_2^2}{2} + g z_2 + w \quad \text{(SFEE, per kg)}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 22 March 2021 (evening).** With respect to the first law of thermodynamics, which statement is most relevant? (a) Any system tends to become disordered (b) Energy can be created or destroyed depending on the input (c) A process with heat transfer is irreversible (d) Energy is always conserved

*Answer: (d).* The first law is the law of conservation of energy: energy only changes form. Option (a) describes entropy, which is the second law.

**Q2. SSC JE Mechanical, 6 November 2024 (Paper II).** Statement A: work done by a system on its surroundings is negative. Statement B: heat transferred to a system from its surroundings is positive. (a) Both true (b) A true, B false (c) A false, B true (d) Both false

*Answer: (c).* In the engineering convention, work done BY the system is positive and heat supplied TO the system is positive. So A is false and B is true.

**Q3. UPSSSC JE Mechanical, 16 April 2022.** The polytropic index of an isochoric (constant volume) process is: (a) 1.4 (b) 1 (c) infinity (d) zero

*Answer: (c).* Write PV^n = C as P^(1/n)V = C. Volume stays constant only when 1/n = 0, which means n = ∞. On a P-V diagram this is a vertical line.

**Q4. SSC JE question bank (Testbook).** For a non-flow process, the first law states: (a) dU = Q − W (b) dU = Q + W (c) dH = Q − W (d) dH = Q + W

*Answer: (a).* Heat in raises internal energy, and work done by the system takes energy out, so dU = Q − W. Enthalpy appears only in the flow (SFEE) form.

## 2. Entropy, Carnot cycle and availability

SSC JE asks a Carnot efficiency numerical in almost every shift. All of them use one formula with temperatures in kelvin.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Kelvin-Planck statement | No engine working in a cycle can turn all the heat it receives into work; some heat must go to a colder sink. So 100% efficiency is impossible. |
| Clausius statement | Heat cannot flow from a cold body to a hot body on its own; a refrigerator needs work input. |
| PMM-1 and PMM-2 | A perpetual motion machine of the first kind creates energy (breaks the first law). One of the second kind turns all heat into work (breaks Kelvin-Planck). |
| Heat engine, refrigerator, heat pump | An engine turns heat into work. A refrigerator uses work to remove heat from a cold space. A heat pump uses work to deliver heat to a warm space. |
| Carnot cycle | The ideal reversible cycle: isothermal heat addition, reversible adiabatic expansion, isothermal heat rejection, reversible adiabatic compression. |
| Carnot theorem | No engine between two given temperatures beats a reversible engine, and all reversible engines between them have the same efficiency. Efficiency depends only on the two temperatures, not on the working fluid. |
| Raising Carnot efficiency | Lowering the sink temperature by a given amount helps more than raising the source temperature by the same amount. |
| Clausius inequality | For any cycle, the cyclic integral of dQ/T is zero if reversible and negative if irreversible. A positive value means the cycle is impossible. |
| Entropy | A property defined by dS = dQ/T for a reversible process. It measures disorder. The area under a T-s curve is heat. |
| Principle of increase of entropy | The entropy of an isolated system (or the universe) never decreases. It stays constant only for reversible processes. |
| Isentropic process | A reversible adiabatic process has constant entropy. |
| Availability (exergy) | The maximum useful work you can get from a system as it comes to equilibrium with the surroundings. Unavailable energy = T0 × ΔS. |
| Irreversibility | Lost work: the difference between the reversible (maximum) work and the actual work. |
| Third law | The entropy of a perfect crystal is zero at absolute zero. |

### Formulas to memorise

```math
\eta_{Carnot} = 1 - \frac{T_L}{T_H} = \frac{W}{Q_H} \qquad Q_L = Q_H - W \qquad \frac{Q_H}{T_H} = \frac{Q_L}{T_L}
```

```math
COP_R = \frac{T_L}{T_H - T_L} \qquad COP_{HP} = \frac{T_H}{T_H - T_L} \qquad COP_{HP} = COP_R + 1
```

```math
\oint \frac{\delta Q}{T} \le 0 \qquad dS = \frac{\delta Q_{rev}}{T} \qquad \Delta S = m C_v \ln\frac{T_2}{T_1} + m R \ln\frac{V_2}{V_1}
```

Always convert to kelvin first: T(K) = T(°C) + 273.

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 14 November 2022 (shift 2).** A cyclic heat engine works between a source at 727°C and a sink at 27°C. Its maximum efficiency is: (a) 70% (b) 42.85% (c) 30% (d) 23.33%

*Answer: (a).* T\_H = 727 + 273 = 1000 K and T\_L = 27 + 273 = 300 K. Maximum efficiency is the Carnot value: 1 − 300/1000 = 0.70 = 70%.

**Q2. SSC JE Mechanical, 11 October 2023 (shift 2).** A cyclic heat engine of thermal efficiency 80% does 60 kJ of work per cycle. Heat rejected per cycle is: (a) 15 kJ (b) 48 kJ (c) 75 kJ (d) 20 kJ

*Answer: (a).* Heat supplied = W/η = 60/0.8 = 75 kJ. Heat rejected = 75 − 60 = 15 kJ.

**Q3. SSC JE Mechanical, 11 October 2023 (shift 2).** A heat engine works between a 600 K source and a 300 K sink. Its maximum possible efficiency is: (a) 50% (b) 67% (c) 33.3% (d) 25%

*Answer: (a).* 1 − 300/600 = 0.5 = 50%.

**Q4. SSC JE Mechanical, 16 November 2022 (shift 2).** If the thermal efficiency of a Carnot engine is 0.5, the COP of a Carnot refrigerator working between the same temperatures is: (a) 2 (b) 0.5 (c) 0 (d) 1

*Answer: (d).* η = 0.5 means T\_L/T\_H = 0.5. COP\_R = T\_L/(T\_H − T\_L) = 0.5/(1 − 0.5) = 1. Shortcut: COP\_R = (1 − η)/η.

**Q5. SSC JE question bank (Testbook).** A heat engine receives 450 kJ/s at 227°C and rejects heat at 27°C. If the cycle is reversible, heat rejected is: (a) 300 kW (b) 270 kW (c) 330 kW (d) 320 kW

*Answer: (b).* For a reversible cycle Q\_L/T\_L = Q\_H/T\_H, so Q\_L = 450 × 300/500 = 270 kW.

**Q6. SSC JE question bank (Testbook).** Which represents an impossible cycle? (a) ∮dQ/T = 0 (b) ∮dQ/T > 0 (c) ∮dQ/T < 0 (d) None

*Answer: (b).* Zero is reversible, negative is irreversible but possible, and positive breaks the Clausius inequality.

## 3. Air standard cycles (Otto, Diesel, Dual, Brayton)

SSC JE has asked about air standard cycles in every year from 2021 to 2025. Learn the four process sets, the efficiency formulas and the two comparison orders.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Air standard assumptions | Air is the working fluid, behaves as an ideal gas with constant specific heats, heat comes from an external source (no combustion), heat goes to a low-temperature sink, all processes are reversible, and there are no intake or exhaust strokes. |
| Otto cycle (petrol / SI engine) | Two reversible adiabatic processes and two constant-volume processes: compression, heat added at constant volume, expansion, heat rejected at constant volume. |
| Diesel cycle (CI engine) | Like Otto, but heat is added at constant pressure. Heat is still rejected at constant volume. |
| Dual (limited pressure) cycle | Heat is added partly at constant volume and partly at constant pressure. Remove the constant-pressure part (cut-off ratio = 1) and it becomes Otto. Remove the constant-volume part and it becomes Diesel. |
| Brayton (Joule) cycle (gas turbine) | Two isentropic processes and two constant-pressure processes. Efficiency depends only on the pressure ratio. |
| Compression ratio r | Total cylinder volume divided by clearance volume (V1/V2). Higher r gives higher efficiency. |
| Cut-off ratio ρ | Volume when heat addition stops divided by volume when it starts (Diesel). A larger cut-off ratio lowers Diesel efficiency. |
| Mean effective pressure (MEP) | The constant pressure that would give the same net work over one stroke: net work divided by swept volume. |
| Comparison at the same compression ratio | Otto > Dual > Diesel. |
| Comparison at the same maximum pressure and temperature | Diesel > Dual > Otto. |
| Stirling and Ericsson cycles | Regenerative cycles whose efficiency equals Carnot's. Stirling: two isothermal + two constant volume. Ericsson: two isothermal + two constant pressure. |

### Formulas to memorise

```math
\eta_{Otto} = 1 - \frac{1}{r^{\gamma - 1}} \qquad \eta_{Brayton} = 1 - \frac{1}{r_p^{(\gamma - 1)/\gamma}}
```

```math
\eta_{Diesel} = 1 - \frac{1}{r^{\gamma - 1}} \cdot \frac{\rho^{\gamma} - 1}{\gamma(\rho - 1)} \qquad MEP = \frac{W_{net}}{V_s}
```

Useful values for γ = 1.4: r = 8 gives 56.5%, r = 9 gives 58.5%, r = 10 gives 60.2%.

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 6 December 2025 (shift 2).** Ideal air standard cycles assume: (a) variable specific heats (b) real gas behaviour (c) constant specific heats (d) moist air as working fluid

*Answer: (c).* The working fluid is dry air treated as an ideal gas with constant Cp and Cv.

**Q2. SSC JE Mechanical, 5 June 2024 (shift 2).** Which is an assumption of air standard cycles? (a) Heat comes from chemical reactions during the cycle (b) Some heat is rejected to a constant low-temperature sink (c) Specific heat varies with temperature (d) The working medium is a real gas

*Answer: (b).* Heat is added from an external source and rejected to a sink. Options (a), (c) and (d) are exactly what the model ignores.

**Q3. SSC JE Mechanical, 14 November 2022 (shift 2).** An Otto cycle is obtained from which cycle if constant-pressure heat addition is removed? (a) Brayton (b) Rankine (c) Diesel (d) Dual

*Answer: (d).* The dual cycle adds heat at constant volume and then at constant pressure. Drop the constant-pressure part and only the Otto cycle is left.

**Q4. SSC JE Mechanical, 16 November 2022 (shift 2).** If the cut-off ratio of a dual cycle approaches unity, it becomes: (a) Diesel (b) Brayton (c) Rankine (d) Otto

*Answer: (d).* Cut-off ratio 1 means no constant-pressure heat addition, so the dual cycle becomes Otto. This is the same idea as Q3, asked two days later.

**Q5. SSC JE Mechanical, 22 March 2021 (evening).** In air standard analysis of IC engines, which is correct? (a) Cp and Cv change with temperature (b) Chemical equilibrium shifts suddenly (c) There are no intake or exhaust processes (d) Compression and expansion are irreversible

*Answer: (c).* The same mass of air is treated as a closed system going round the cycle, so intake and exhaust are left out.

**Q6. JSSC JE Mechanical, 3 July 2022.** An Otto cycle has 50% efficiency with γ = 1.25. The compression ratio is: (a) 16 (b) 8 (c) 4 (d) none

*Answer: (a).* 0.5 = 1 − 1/r^0.25, so r^0.25 = 2 and r = 2^4 = 16.

**Q7. DRDO CEPTAM STA-B (Mechanical), 15 June 2026.** An Otto cycle has a compression ratio of 9. Its efficiency is closest to: (a) 44% (b) 60% (c) 67% (d) 56%

*Answer: (b).* 1 − 1/9^0.4 = 1 − 1/2.41 = 0.585, about 58.5%, so the closest option is 60%.

## 4. IC engines: working, parts, performance, knocking

RRB JE gave IC engines about 11 questions in each 2024–25 CBT-2 shift, so this sub-topic gets three days. Most questions are one-line theory; the numericals are power and efficiency.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| SI vs CI engine | SI (petrol, Otto cycle) ignites the mixture with a spark plug. CI (diesel) compresses air until it is hot enough to ignite injected fuel. CI engines run higher compression ratios: about 14–22 against 6–10 for SI. |
| Four-stroke cycle | Suction, compression, power, exhaust: one power stroke every two crank revolutions. Valves open and close the passages. |
| Two-stroke cycle | One power stroke every revolution. Ports in the cylinder wall replace valves: inlet, transfer and exhaust (three ports). |
| Scavenging | In a two-stroke engine, fresh charge pushes out burnt gas while the transfer and exhaust ports are open together. |
| Valve overlap | In a four-stroke engine, inlet and exhaust valves are both open for a few degrees near TDC to improve breathing. |
| Bore, stroke, TDC, BDC | Bore is the cylinder diameter, stroke is piston travel, TDC and BDC are the top and bottom end positions. |
| Swept and clearance volume | Swept volume = (π/4) × bore² × stroke. Clearance volume is the space left at TDC. Compression ratio = (swept + clearance)/clearance. |
| Indicated power (IP) | Power developed inside the cylinder by the gas, from the indicator diagram. |
| Brake power (BP) | Useful power at the crankshaft, measured with a dynamometer. |
| Friction power (FP) | IP − BP: the power lost to friction. Found with Willan's line (CI engines) or the Morse test (multi-cylinder SI engines). |
| Mechanical efficiency | BP/IP. |
| Thermal efficiencies | Indicated thermal efficiency = IP/fuel energy rate. Brake thermal efficiency = BP/fuel energy rate. |
| Volumetric efficiency | Actual air taken in divided by the swept volume at intake conditions. Supercharging raises it above 100%. |
| BSFC | Brake specific fuel consumption: kg of fuel per kWh of brake output. Lower is better. |
| SI knock (detonation) | The unburnt end gas auto-ignites before the flame reaches it, causing a pressure spike. Reduced by higher octane fuel, retarding the spark, lower compression ratio and cooling. |
| CI knock | Too long an ignition delay lets fuel pile up and burn at once. Reduced by higher cetane fuel and higher compression ratio, the opposite of SI. |
| Octane number | Anti-knock rating of petrol: iso-octane = 100, n-heptane = 0. |
| Cetane number | Ignition quality of diesel: n-cetane = 100, alpha-methyl naphthalene = 0. A high cetane number means it auto-ignites easily. |
| SI combustion | Turbulent flame spreading through a pre-mixed, homogeneous fuel-air mixture. |

### Formulas to memorise

```math
IP = \frac{p_m L A n k}{60\,000}\ \text{kW} \quad (n = N/2 \text{ for four-stroke}, \ n = N \text{ for two-stroke})
```

```math
BP = \frac{2 \pi N T}{60\,000}\ \text{kW} \qquad \eta_m = \frac{BP}{IP} \qquad FP = IP - BP
```

```math
\eta_{ith} = \frac{IP}{\dot m_f \times CV} \qquad \eta_{bth} = \frac{BP}{\dot m_f \times CV} \qquad r = \frac{V_s + V_c}{V_c}
```

(p\_m in Pa, L in m, A in m², N in rpm, T in N·m, k = number of cylinders.)

### Past exam questions with solutions

**Q1. RRB JE Mechanical CBT-2, 22 April 2025 (shift 2).** In an ideal four-stroke petrol engine, combustion after compression is assumed to: (a) happen instantly with the piston at TDC (b) start at BDC and continue as the piston rises (c) start gradually before TDC (d) take a long time

*Answer: (a).* The ideal Otto cycle treats combustion as instant heat addition at TDC, which makes it a constant-volume process. In a real engine the spark fires before TDC, but the question asks about the ideal case.

**Q2. SSC JE Mechanical, 9 October 2023 (shift 2).** Scavenging in a two-stroke engine happens when: (a) the transfer and exhaust ports are open together for a while (b) both ports are fully closed (c) inlet and outlet valves are open together (d) both valves are closed

*Answer: (a).* Two-stroke engines have ports, not valves, which rules out (c) and (d). Fresh charge enters through the transfer port and pushes burnt gas out through the open exhaust port.

**Q3. UPPSC AE Mechanical (Mains), 29 September 2025.** The ratio of brake power to indicated power is: (a) volumetric efficiency (b) mechanical efficiency (c) overall efficiency (d) none

*Answer: (b).* BP/IP is mechanical efficiency, and the gap between them is friction power. RRB JE asked the same question in 2019.

**Q4. SSC JE question bank (Testbook).** A single-cylinder four-stroke oil engine has IP = 15 kW, fuel calorific value 40,000 kJ/kg and fuel consumption 0.001 kg/s. Its indicated thermal efficiency is: (a) 40% (b) 37.5% (c) 62.5% (d) 75%

*Answer: (b).* Fuel energy = 0.001 × 40,000 = 40 kW. Indicated thermal efficiency = 15/40 = 0.375 = 37.5%.

**Q5. SSC JE question bank (Testbook).** Willan's line method gives which power? (a) brake (b) indicated (c) frictional (d) theoretical indicated

*Answer: (c).* Fuel consumption is plotted against brake power and the line is extended back to zero fuel. The negative intercept is the friction power. It is used for CI engines.

**Q6. SSC JE question bank (Testbook).** A dynamometer measures: (a) friction power (b) brake power (c) indicated power (d) fuel power

*Answer: (b).* It measures shaft torque, and BP = 2πNT. Indicated power needs an indicator diagram instead.

**Q7. SSC JE question bank (Testbook).** Combustion in an SI engine is best described as: (a) laminar flame propagation (b) reaching adiabatic flame temperature (c) turbulent flame propagation through a homogeneous mixture (d) simultaneous combustion at many points

*Answer: (c).* The spark starts one flame front that spreads through the pre-mixed charge, sped up by turbulence. Option (d) describes CI engines and knock.

## 5. IC engine systems: fuel, ignition, cooling, lubrication, supercharging

These are pure theory questions about what each part does. One day of reading plus the questions below is enough.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Carburettor | Mixes air and petrol in the right ratio for an SI engine. Air speeds up through a venturi, its pressure drops, and fuel is drawn from the jet. |
| Choke | Closes the air intake to give a rich mixture for cold starting. |
| Carburettor types | Constant choke (Zenith, Solex), constant vacuum (SU), multiple venturi. |
| Air-fuel ratio | About 14.7:1 by mass for petrol (stoichiometric). Rich for starting and full load, lean for economy. |
| MPFI | Multi-point fuel injection: petrol is injected near each inlet valve, replacing the carburettor in modern cars. |
| Diesel fuel injection | A fuel injection pump raises pressure and the injector sprays fuel into hot compressed air. Common rail (CRDI) keeps fuel at very high pressure in a shared rail. Solid injection uses no compressed air. |
| Ignition systems | Battery (coil) ignition for cars; magneto ignition for bikes and small engines, with no battery needed. |
| Firing order | The sequence cylinders fire in to balance the engine, commonly 1-3-4-2 for four cylinders. |
| Why cool an engine | To keep parts within safe temperatures and prevent pre-ignition, knocking and loss of oil film. |
| Air cooling | Fins on the cylinder give a large surface for air to carry heat away (bikes). |
| Water cooling | Coolant circulates through jackets by a pump (or by thermosiphon) to the radiator. |
| Radiator | A heat exchanger that spreads hot water over a large area so passing air can cool it. |
| Thermostat | A valve that holds coolant temperature: it stays closed until the engine reaches operating temperature, then opens to the radiator. |
| Antifreeze | Ethylene glycol added to stop coolant freezing. |
| Lubrication systems | Mist (two-stroke petrol engines, oil mixed with fuel), splash, and pressure feed (multi-cylinder and heavy-duty engines). Wet sump stores oil in the crankcase; dry sump uses a separate tank. |
| Oil pump | A positive displacement (gear) pump circulates lubricating oil. |
| Supercharging | Pushes more air into the cylinder above atmospheric pressure to get more power from the same engine size. A turbocharger drives its compressor with an exhaust gas turbine. |
| Governing | SI engines use quantity governing (throttle controls mixture quantity); CI engines use quality governing (fuel quantity changes the air-fuel ratio). |

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 7 June 2024 (shift 2).** The Zenith carburettor is a: (a) constant-vacuum carburettor (b) multiple-venturi carburettor (c) constant-choke carburettor (d) multijet carburettor

*Answer: (c).* Zenith and Solex keep a fixed choke (venturi) size and vary the fuel flow. The SU type is the constant-vacuum design.

**Q2. SSC JE Mechanical, 14 November 2022 (shift 2).** A thermostat in a water-cooled engine maintains the cooling water's: (a) mass (b) volume (c) pressure (d) temperature

*Answer: (d).* It blocks flow to the radiator until the engine warms up, then opens to hold the coolant at operating temperature.

**Q3. SSC JE Mechanical, 4 December 2023 (Paper II).** In an engine cooling system, the \_\_\_\_ spreads the hot water over a large area: (a) piston rings (b) air valves (c) coolant chamber (d) radiator

*Answer: (d).* The radiator's tubes and fins give a large surface, so air flowing past removes heat quickly. RRB ALP has asked the same idea.

**Q4. SSC JE question bank (Testbook).** Engines need cooling to: (a) regulate mass transfer (b) reduce ignition temperature (c) avoid pre-ignition and knocking (d) improve compression volume

*Answer: (c).* Overheated parts such as valves and plugs can ignite the charge early, which causes knock and damage.

**Q5. SSC JE question bank (Testbook).** The lubrication system mainly used in multi-cylinder heavy-duty engines is: (a) pressure feed (b) splash and wet sump (c) splash (d) scoop feed

*Answer: (a).* A pump forces oil through drilled passages to every bearing, which splash systems cannot do reliably at high loads.

**Q6. SSC JE question bank (Testbook).** The main reason for supercharging is to: (a) increase efficiency (b) increase power (c) reduce weight and bulk for a given output (d) improve fuel economy

*Answer: (b).* More air in the cylinder lets more fuel burn per cycle, so power rises. Option (c) is a side benefit, but the main aim is power.

## 6. Steam properties, Rankine cycle and boilers

Boiler classification and mountings versus accessories come up in nearly every SSC JE shift. Make two lists and learn them by heart.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Wet, dry saturated, superheated steam | Wet steam still holds water droplets. Dry saturated steam has just finished evaporating. Superheated steam is heated above its saturation temperature. |
| Dryness fraction (x) | Mass of dry steam divided by total mass of wet steam. x = 1 for dry saturated steam, x = 0 for saturated water. |
| Degree of superheat | Actual temperature minus saturation temperature at that pressure. |
| Critical point | 221.2 bar and 374.15°C for water. Above it, water turns to steam with no latent heat (hfg = 0). |
| Steam tables and Mollier chart | Tables give hf, hfg, hg at each pressure. The Mollier (h-s) chart reads turbine and nozzle enthalpy drops directly. |
| Rankine cycle | The steam power plant cycle: pump raises water pressure, boiler makes steam, turbine expands it, condenser turns it back to water. |
| Raising Rankine efficiency | Raise boiler pressure, superheat the steam, lower the condenser pressure, use reheat or regeneration. |
| Reheat | Steam returns to the boiler between turbine stages. Mainly raises the dryness at turbine exit, protecting blades. |
| Regeneration (bleeding) | Some steam is bled from the turbine to preheat feed water. This raises the average temperature at which heat is added, so efficiency rises. |
| Fire tube boiler | Hot gases pass through tubes surrounded by water. Low pressure (up to about 25 bar). Examples: Cochran, Lancashire, Cornish, locomotive, Scotch marine. |
| Water tube boiler | Water flows inside tubes surrounded by hot gases. High pressure and quick steaming. Examples: Babcock and Wilcox, Stirling. |
| High-pressure (forced circulation) boilers | A pump drives the water: La Mont, Benson, Loeffler, Velox. Benson works above the critical pressure and has no drum. |
| Mountings | Fitted for safe operation; the boiler cannot run without them: safety valve, water level indicator, pressure gauge, fusible plug, steam stop valve, feed check valve, blow-off cock, manhole. |
| Accessories | Fitted to raise efficiency: economiser (heats feed water), superheater, air preheater, feed pump, injector. |
| Fusible plug | Melts and lets steam put out the fire if the water level falls too low. |
| Feed check valve | A non-return valve that lets feed water into the boiler but stops it flowing back. |
| Equivalent evaporation | Water a boiler would evaporate "from and at 100°C", using 2257 kJ/kg, so different boilers can be compared. |

### Formulas to memorise

```math
x = \frac{m_{dry}}{m_{dry} + m_{water}} \qquad h = h_f + x\,h_{fg} \qquad h_{sup} = h_g + c_{ps}(T_{sup} - T_{sat})
```

```math
\eta_{Rankine} = \frac{(h_1 - h_2) - W_{pump}}{h_1 - h_4} \qquad W_{pump} \approx v_f (P_{boiler} - P_{cond})
```

```math
\eta_{boiler} = \frac{m_s (h - h_{feed})}{m_f \times CV} \qquad m_e = \frac{m_s (h - h_{feed})}{2257}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 7 June 2024 (shift 2).** Which is a fire tube boiler? (a) Scotch marine (b) Loeffler (c) Stirling (d) Benson

*Answer: (a).* Loeffler and Benson are high-pressure forced-circulation boilers, and Stirling is a water tube boiler.

**Q2. SSC JE Mechanical, 16 November 2022 (shift 2).** Which boiler needs forced circulation of water? (a) Lancashire (b) Benson (c) Locomotive (d) Babcock and Wilcox

*Answer: (b).* Benson runs above the critical pressure, where natural circulation cannot work, so a pump drives the water. The other three rely on natural circulation.

**Q3. SSC JE Mechanical, 16 November 2022 (shift 2).** Which statement about raising Rankine efficiency is incorrect? (a) Decrease condenser pressure (b) Superheat the steam (c) Increase boiler pressure (d) Increase condenser pressure

*Answer: (d).* A higher condenser pressure raises the heat-rejection temperature, which lowers efficiency. The other three all help.

**Q4. JSSC JE Mechanical, 23 October 2022.** The Rankine cycle modified for bleeding is called: (a) regenerative (b) reheat (c) saturated (d) superheat

*Answer: (a).* Bled steam preheats the feed water, which is regeneration.

**Q5. RSSB JE Mechanical (Diploma), 10 February 2025.** The dryness fraction of 2 kg of steam containing 1.6 kg of dry steam is: (a) 0.8 (b) 0.6 (c) 0.4 (d) 1.0

*Answer: (a).* x = 1.6/2 = 0.8.

**Q6. SSC JE Mechanical, 27 October 2020 (evening).** Which mounting protects the boiler from overheating at low water level? (a) Stop valve (b) Feed check valve (c) Blow-off cock (d) Fusible plug

*Answer: (d).* Its low-melting core melts when exposed above the water, and the escaping steam puts out the fire. This one is from late 2020, just outside five years, but the same fact keeps being asked.

## 7. Steam nozzles and turbines

Three facts carry most questions here: the critical pressure ratio values, where pressure drops in each turbine type, and the degree of reaction formula.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Steam nozzle | A passage that turns the enthalpy (heat energy) of steam into kinetic energy, producing a high-speed jet. |
| Convergent nozzle | Area shrinks along the flow. Gives subsonic flow, reaching at most Mach 1 at the exit. |
| Convergent-divergent nozzle | Area shrinks to a throat, then grows. Low inlet velocity can be accelerated to supersonic exit velocity. |
| Critical pressure ratio | The throat-to-inlet pressure ratio at which mass flow is maximum and the throat velocity equals sonic velocity. It depends only on the index n (or γ). |
| Values to memorise | Superheated steam (n = 1.3): 0.546. Dry saturated steam (n = 1.135): 0.577. Air (γ = 1.4): 0.528. |
| Choked flow | Once the throat reaches the critical pressure, lowering the back pressure further does not raise the mass flow. |
| Supersaturated (metastable) flow | Steam expands so fast that it stays dry longer than equilibrium predicts, which raises the discharge slightly. |
| Impulse turbine | All pressure drop happens in the nozzles. Steam pressure stays constant across the moving blades, which turn only by change of momentum. Example: De Laval. |
| Reaction turbine | Pressure drops in both fixed and moving blades. Parsons turbine has 50% degree of reaction (symmetrical blades). |
| Degree of reaction (R) | Enthalpy drop in the moving blades divided by the enthalpy drop in the whole stage. R = 0 for pure impulse, 0.5 for Parsons. |
| Velocity compounding (Curtis) | One set of nozzles takes the whole pressure drop. The high velocity is used up over several rows of moving blades with fixed guide blades between them. |
| Pressure compounding (Rateau) | The pressure drop is split across several nozzle-and-blade stages, keeping blade speed lower. |
| Pressure-velocity compounding | A mix of both: several pressure stages, each with velocity compounding. |
| Why compound | A single-stage impulse turbine (De Laval) runs at very high rpm. Compounding lowers the rotor speed. |
| Optimum blade speed ratio | Impulse: blade speed/jet speed = cos α / 2. Parsons: blade speed/jet speed = cos α. Maximum impulse blade efficiency = cos² α. |

### Formulas to memorise

```math
\frac{p_{throat}}{p_1} = \left( \frac{2}{n+1} \right)^{\frac{n}{n-1}} \qquad c_2 = 44.72 \sqrt{\Delta h}\ \text{m/s} \ (\Delta h \text{ in kJ/kg})
```

```math
R = \frac{\Delta h_{moving}}{\Delta h_{fixed} + \Delta h_{moving}} \qquad \eta_{blade,max} = \cos^2 \alpha \ \text{(single-stage impulse)}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 3 December 2025 (shift 2).** The critical pressure ratio of a nozzle depends on: (a) inlet pressure (b) specific heat ratio (c) nozzle length (d) friction factor

*Answer: (b).* The formula contains only n (or γ), the expansion index, which comes from the specific heat ratio.

**Q2. SSC JE Mechanical, 7 June 2024 (shift 2).** Steam enters at very low velocity and must leave at supersonic velocity. Which nozzle suits this? (a) divergent (b) convergent-divergent (c) convergent (d) divergent-convergent

*Answer: (b).* A convergent section accelerates the flow up to Mach 1 at the throat. Only a divergent section after the throat can take it beyond sonic speed.

**Q3. SSC JE Mechanical, 16 November 2022 (shift 2).** In a velocity-compounded impulse turbine: (a) pressure drops only in moving blades (b) pressure drops in nozzle and moving blades (c) pressure drops in neither (d) pressure drops only in the nozzle

*Answer: (d).* The Curtis turbine takes the whole pressure drop in one set of nozzles, then uses the velocity over several blade rows.

**Q4. JSSC JE Mechanical, 23 October 2022.** In an impulse-reaction stage, heat drops in fixed and moving blades are 28.32 kJ/kg and 18.61 kJ/kg. The degree of reaction is: (a) 0.396 (b) 0.603 (c) 0.657 (d) 1.522

*Answer: (a).* R = 18.61/(18.61 + 28.32) = 18.61/46.93 = 0.396. Use the moving-blade drop on top, the stage total below.

**Q5. JSSC JE Mechanical, 23 October 2022.** The critical pressure ratio for initially superheated steam is: (a) 0.578 (b) 0.555 (c) 0.600 (d) 0.546

*Answer: (d).* With n = 1.3: (2/2.3)^(1.3/0.3) = 0.8696^4.333 = 0.546.

**Q6. SSC JE question bank (Testbook).** Nozzles in steam turbines convert: (a) pressure energy into work (b) enthalpy into pressure energy (c) enthalpy into kinetic energy (d) enthalpy into work

*Answer: (c).* The nozzle makes a jet; the blades then turn that kinetic energy into work.

## 8. Air compressors

SSC JE asks about one compressor question per shift, nearly always on volumetric efficiency or the intercooler pressure. One day covers it.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Reciprocating compressor | A piston compresses air in a cylinder. Suits high pressure and small flow. |
| Rotary compressors | Centrifugal, axial, screw, vane and roots blower. Suit large flow at lower pressure ratios. |
| Best compression process | Isothermal compression needs the least work. Real compressors are polytropic (n about 1.2–1.3), so cooling is used to get closer to isothermal. |
| Isothermal efficiency | Isothermal work divided by the actual work input. |
| Clearance volume | Space left between the piston and the cylinder head at the end of the stroke. Air trapped there re-expands and delays the next suction. |
| Clearance ratio (C) | Clearance volume divided by swept volume, usually 4–10%. |
| Free air delivered (FAD) | The actual delivered air volume, corrected back to suction (atmospheric) conditions. |
| Volumetric efficiency | FAD divided by the swept volume (displacement). It falls as clearance ratio or pressure ratio rises, typically 65–85%. |
| Multistage compression | Splitting compression into stages with cooling between them reduces work, delivery temperature and leakage, and improves volumetric efficiency. |
| Intercooler | A heat exchanger between stages. Perfect intercooling cools the air back to the original suction temperature. |
| Optimum intermediate pressure | For minimum work in two stages with perfect intercooling, each stage has the same pressure ratio and does equal work. |
| Surging and choking | In centrifugal compressors: surging is unstable reverse flow at low flow rates; choking is the flow limit at high flow rates. Stalling is the axial compressor equivalent of surging. |

### Formulas to memorise

```math
\eta_v = 1 + C - C \left( \frac{p_2}{p_1} \right)^{1/n} \qquad C = \frac{V_c}{V_s}
```

```math
W_{isothermal} = p_1 V_1 \ln\frac{p_2}{p_1} \qquad W_{poly} = \frac{n}{n-1}\, p_1 V_1 \left[ \left(\frac{p_2}{p_1}\right)^{\frac{n-1}{n}} - 1 \right]
```

```math
p_2 = \sqrt{p_1 \, p_3} \quad \text{(two stages)} \qquad \text{pressure ratio per stage} = \left( \frac{p_{final}}{p_1} \right)^{1/z}
```

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 11 October 2023 (shift 2).** A two-stage reciprocating air compressor has suction pressure 1.6 bar and delivery pressure 40 bar. The ideal intercooler pressure is: (a) 9 bar (b) 8 bar (c) 4.56 bar (d) 20.8 bar

*Answer: (b).* p2 = √(1.6 × 40) = √64 = 8 bar. Check: each stage has ratio 5 (1.6 to 8, then 8 to 40).

**Q2. SSC JE Mechanical, 5 June 2024 (shift 2).** Volumetric efficiency of a single-stage reciprocating compressor is the ratio of: (a) swept volume to effective swept volume (b) displacement to free air delivered (c) free air delivered to displacement (d) swept volume to clearance volume

*Answer: (c).* It compares the air actually delivered (at suction conditions) with what the piston sweeps.

**Q3. SSC JE Mechanical, 16 November 2022 (shift 2).** Clearance volume directly affects: (a) piston speed (b) volumetric efficiency (c) thermal efficiency (d) noise level

*Answer: (b).* Trapped clearance air re-expands before fresh air can enter, so less fresh air is drawn in per stroke.

**Q4. JSSC JE Mechanical, 3 July 2022.** The volumetric efficiency of a compressor: (a) rises with clearance ratio (b) falls as compression ratio falls (c) rises with compression ratio (d) falls as compression ratio rises

*Answer: (d).* In the formula, a larger p2/p1 makes the subtracted term bigger, so ηv drops. A higher clearance ratio also lowers it, which rules out (a).

## 9. Refrigeration and air conditioning

SSC JE gives refrigeration 4–6 marks in Paper 1, and the vapour compression cycle alone produced four of the questions below. Learn the four components and what happens to the refrigerant in each.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Tonne of refrigeration (TR) | Cooling rate that freezes 1 tonne of water at 0°C in 24 hours: about 211 kJ/min, or 3.5 kW. |
| Refrigerator capacity | Expressed as the rate of heat removed from the cooled space, in TR or kW. |
| COP | Refrigeration effect divided by work input. It can be greater than 1. |
| Vapour compression cycle (VCR) | Four steps: isentropic compression (compressor), constant-pressure condensation (condenser), throttling at constant enthalpy (expansion valve), evaporation that absorbs heat (evaporator). |
| Compressor | Raises the pressure and temperature of refrigerant vapour leaving the evaporator. Entropy stays constant in the ideal cycle. |
| Condenser | Rejects heat to the surroundings so the vapour becomes high-pressure liquid. |
| Expansion valve | Throttles the high-pressure liquid down to evaporator pressure. Enthalpy stays constant; pressure and temperature fall. |
| Evaporator | Low-pressure refrigerant boils by absorbing heat from the cooled space. This is the refrigeration effect. |
| Subcooling and superheating | Subcooling the liquid after the condenser raises the refrigeration effect and COP. Superheating the vapour protects the compressor from liquid. |
| Vapour absorption system | Replaces the compressor with an absorber, pump and generator driven by heat. Pairs: ammonia-water, lithium bromide-water. |
| Air refrigeration (Bell-Coleman) | Uses air as refrigerant on a reversed Brayton cycle. Used in aircraft cabins. Low COP. |
| Cryogenic cooling | Very low temperatures, typically using liquid nitrogen (−196°C). |
| Common refrigerants | R-12 (CFC, banned for ozone damage), R-22 (HCFC), R-134a (HFC, car AC and fridges), R-717 ammonia (cold storage, ice plants), R-600a isobutane. |
| Psychrometric terms | DBT is ordinary air temperature. WBT is read with a wet wick. DPT is where moisture starts condensing. At saturation (RH 100%) all three are equal. |
| Relative and specific humidity | RH = vapour pressure / saturation vapour pressure at the same temperature. Specific humidity = kg of water vapour per kg of dry air. |
| Air conditioning processes | Sensible heating or cooling changes only temperature. Summer AC is cooling with dehumidification. Winter AC is heating with humidification. Evaporative (desert) cooling happens at constant WBT. |
| Bypass factor | The fraction of air that passes a coil without touching it. A lower bypass factor means a more effective coil. |
| Comfort conditions | About 24–25°C DBT and 50–60% RH. |

### Formulas to memorise

```math
1\ TR = 211\ \text{kJ/min} \approx 3.5\ \text{kW} \qquad COP_{VCR} = \frac{h_1 - h_4}{h_2 - h_1} \qquad h_3 = h_4 \ \text{(throttling)}
```

```math
Q_H = Q_L + W \qquad COP_{HP} = COP_R + 1 \qquad \omega = 0.622\,\frac{p_v}{p - p_v} \qquad \phi = \frac{p_v}{p_s}
```

(1 = evaporator exit, 2 = compressor exit, 3 = condenser exit, 4 = expansion valve exit.)

### Past exam questions with solutions

**Q1. SSC JE Mechanical, 6 December 2025 (shift 2).** The role of the expansion valve is to: (a) raise refrigerant pressure (b) reduce refrigerant pressure and temperature (c) control flow into the condenser (d) remove heat from the refrigerant

*Answer: (b).* Throttling drops the liquid from condenser pressure to evaporator pressure, and its temperature falls with it.

**Q2. SSC JE Mechanical, 5 June 2024 (shift 2).** In a VCR cycle with dry saturated vapour after compression, the entropy at the end of compression equals the entropy at: (a) end of expansion (b) end of condensation (c) start of expansion (d) end of evaporation

*Answer: (d).* Ideal compression is isentropic. It starts where evaporation ends, so the entropy is the same at both points.

**Q3. SSC JE Mechanical, 4 December 2023 (Paper II).** An expansion valve \_\_\_\_ the \_\_\_\_ refrigerant from the \_\_\_\_ pressure to the \_\_\_\_ pressure. (a) expand; liquid; evaporator; condenser (b) condense; gaseous; evaporator; condenser (c) condense; gaseous; condenser; evaporator (d) expand; liquid; condenser; evaporator

*Answer: (d).* Liquid leaves the condenser at high pressure and is expanded down to the low evaporator pressure.

**Q4. SSC JE Mechanical, 11 October 2023 (shift 2).** The expansion process in a VCR cycle is: (a) constant volume (b) reversible isothermal (c) isenthalpic (d) isentropic

*Answer: (c).* Throttling does no work and transfers no heat, so enthalpy stays constant. It is irreversible, so it is not isentropic.

**Q5. SSC JE Mechanical, 14 November 2022 (shift 2).** Which system is used for cryogenic cooling? (a) vapour compression (b) liquid nitrogen (c) vapour absorption (d) ice refrigeration

*Answer: (b).* Liquid nitrogen boils at −196°C, far below what normal refrigerants reach.

**Q6. SSC JE Mechanical, 22 March 2021 (evening).** One tonne of refrigeration equals: (a) 5 kW (b) 2.5 kW (c) 3.5 kW (d) 1 kW

*Answer: (c).* 1 TR = 210–211 kJ/min; divide by 60 to get 3.5 kJ/s = 3.5 kW.

**Q7. WBMSC Sub Assistant Engineer (Mechanical), 5 June 2022.** A reversed Carnot refrigerator has COP 5 with 1 kW work input. Its heating effect is: (a) 1 kW (b) 4 kW (c) 5 kW (d) 6 kW

*Answer: (d).* Heat removed = 5 × 1 = 5 kW. Heat rejected = 5 + 1 = 6 kW.

## 10. Fuels and combustion

This is the smallest sub-topic. Kerala PSC lists it under Thermal Engineering, and AE and ISRO papers ask calorific value and air-fuel ratio questions.

### Main contents and what they mean

| Content | What it means |
| --- | --- |
| Types of fuel | Solid (coal, wood), liquid (petrol, diesel, kerosene), gaseous (natural gas, LPG, producer gas). |
| Ranks of coal | Peat, lignite, bituminous, anthracite, in order of rising carbon content and calorific value. Anthracite is the highest grade. |
| Proximate analysis | Coal by weight percent of moisture, volatile matter, fixed carbon and ash. Quick and practical. |
| Ultimate analysis | Coal by element: carbon, hydrogen, oxygen, nitrogen, sulphur. Needed for combustion calculations. |
| Higher calorific value (HCV) | Heat released when the water formed by burning hydrogen condenses, so its latent heat is counted. |
| Lower calorific value (LCV) | HCV minus the latent heat of that water, which leaves as vapour in real engines and boilers. |
| Bomb calorimeter | Measures the HCV of solid and liquid fuels at constant volume. A few drops of water inside make sure the steam formed condenses. |
| Junker's (gas) calorimeter | Measures the calorific value of gaseous fuels. |
| Stoichiometric air | The exact air for complete combustion with no oxygen left over. Air is 23% oxygen by mass and 21% by volume. |
| Excess air | Air supplied beyond stoichiometric to make sure all fuel burns. Too much carries heat away in the flue gas. |
| Air-fuel ratio | About 15:1 by mass (14.7:1 exactly) for petrol in SI engines. CI engines run lean, roughly 18:1 to 80:1. |
| Equivalence ratio | Actual fuel-air ratio divided by stoichiometric fuel-air ratio. Greater than 1 is rich, less than 1 is lean. |
| Orsat apparatus | Analyses flue gas by volume (CO2, O2, CO) on a dry basis. |
| Flash and fire point | Flash point: lowest temperature at which oil vapour flashes briefly when a flame is brought near. Fire point: a few degrees higher, where it keeps burning. |

### Formulas to memorise

```math
HCV = 33\,800\,C + 144\,000 \left( H - \frac{O}{8} \right) + 9270\,S \ \text{kJ/kg} \quad \text{(Dulong, mass fractions)}
```

```math
LCV = HCV - 9H \times h_{fg} \qquad A_{min} = \frac{100}{23} \left[ \frac{8}{3}C + 8\left(H - \frac{O}{8}\right) + S \right] \ \text{kg air per kg fuel}
```

```math
\phi = \frac{(F/A)_{actual}}{(F/A)_{stoich}} \qquad C + O_2 \rightarrow CO_2 \qquad 2H_2 + O_2 \rightarrow 2H_2O
```

### Past exam questions with solutions

**Q1. UPPSC AE Mechanical (Mains), 29 September 2025.** A fuel-air mixture is rich when the equivalence ratio is: (a) equal to one (b) less than one (c) greater than one (d) cannot be predicted

*Answer: (c).* Equivalence ratio compares actual fuel with stoichiometric fuel. More fuel than needed gives a value above 1, which is rich.

**Q2. ISRO SDSC Technical Assistant (Mechanical), 4 June 2022.** Coal contains 70% carbon, 6% hydrogen, 8% oxygen, 5% sulphur and the rest ash. Its HCV and LCV are: (a) 31,323 and 29,992 kJ/kg (b) 33,319 and 25,789 kJ/kg (c) 32,689 and 25,687 kJ/kg (d) 32,896 and 25,876 kJ/kg

*Answer: (a).* HCV = 33,800(0.70) + 144,000(0.06 − 0.08/8) + 9,270(0.05) = 23,660 + 7,200 + 463.5 = 31,323.5 kJ/kg. Water formed = 9 × 0.06 = 0.54 kg. LCV = 31,323.5 − 0.54 × 2,466 = 29,992 kJ/kg.

**Q3. MPPSC AE Mechanical, 2021.** The chemically correct air-fuel ratio for an SI engine is: (a) 6:1 (b) 15:1 (c) 5:1 (d) 4:1

*Answer: (b).* Petrol needs about 14.7 kg of air per kg of fuel for complete combustion, which rounds to 15:1.

## Sources

Each question's exam and date come from the page it was taken from; the solutions are written fresh. Questions marked "SSC JE question bank" come from Testbook's SSC JE topic pages, which do not show the year. Few RRB JE 2024–25 questions are published question by question, so solve the full official RRB JE CBT-2 papers as well.

- Topic question banks: [SSC JE thermodynamics questions](https://testbook.com/questions/ssc-je-thermodynamics-questions--64c74f9fad17f3cbfac34458), [SSC JE IC engine questions](https://testbook.com/questions/ssc-je-ic-engine-questions--64c74fc63b199b26973dec4a)
- Full papers to practise: [RRB JE Mechanical previous papers](https://testbook.com/rrb-je-mechanical-engineering/previous-year-papers), [SSC JE Mechanical previous papers](https://testbook.com/ssc-je-me/previous-year-papers)
- Sub-topic 1: [first law statement](https://testbook.com/question-answer/with-respect-to-the-first-law-of-thermodynamics-w--60bfa77bfe7e732770115da1), [sign convention](https://testbook.com/question-answer/statementsa-work-done-by-a-system-on-its-surrou--6735e4ebd11fb14de6ddfbdc), [isochoric index](https://testbook.com/question-answer/which-one-of-the-following-represents-the-polytrop--626de8281dc0fd579baf99d3)
- Sub-topic 2: [727°C/27°C engine](https://testbook.com/question-answer/a-cyclic-heat-engine-operates-between-a-source-tem--637e6de3978444e919dd27f3), [80% engine heat rejected](https://testbook.com/question-answer/a-cyclic-heat-engine-of-thermal-efficiency-80-doe--653027a193e1a09b0a0f8fa3), [600 K/300 K engine](https://testbook.com/question-answer/a-heat-engine-operates-between-a-source-at-600-k-a--653022c97157c4c8dbf6d974), [Carnot COP](https://testbook.com/question-answer/if-the-thermal-efficiency-of-a-carnot-engine-is-0--637efe1f94df190fa871f1b6)
- Sub-topic 3: [constant specific heats](https://testbook.com/question-answer/the-ideal-air-standard-cycles-assume-which-of-the--6946cb3f43d82270c0cf48ff), [air standard assumption](https://testbook.com/question-answer/which-of-the-following-is-the-assumption-of-air-st--666d57ae06c152b34fc8ca79), [Otto from dual](https://testbook.com/question-answer/from-which-of-the-following-air-standard-cycles-an--637e745771e7cee6f0c431c3), [cut-off ratio unity](https://testbook.com/question-answer/if-the-cut-off-ratio-in-the-air-standard-dual-cycl--637efc6d79406e170d0a3890), [no intake/exhaust](https://testbook.com/question-answer/in-air-standard-cycle-analysis-of-ic-engines-whic--60880a6662b1d351d73ac94a), [Otto r = 16](https://testbook.com/question-answer/the-efficiency-of-an-otto-cycle-is-50-and--62d188eb5aac4d09750f76d2), [Otto r = 9](https://testbook.com/question-answer/auto-cycle-has-a-compression-ratio-of-9-its-effic--6a38cbd9531d8812625075d7)
- Sub-topic 4: [ideal combustion at TDC](https://testbook.com/question-answer/in-an-ideal-four-stroke-petrol-engine-the-assumpt--6811ff432c83e9e6cce5dd11), [scavenging](https://testbook.com/question-answer/scavenging-phenomenon-occurred-in-two-stroke-ic-en--6530a4ccad9c3d477fb3b6a3), [mechanical efficiency](https://testbook.com/question-answer/the-ratio-of-the-brake-power-to-the-indicated-powe--6a6b37617ee1bf58323d4278)
- Sub-topic 5: [Zenith carburettor](https://testbook.com/question-answer/the-zenith-carburettor-is-a-type-of-_________-nbs--666d871bf86b17e089fa0880), [thermostat](https://testbook.com/question-answer/thermostat-is-used-in-a-water-cooled-engine-to-mai--637e6f7ada5aeb377ef64c8d), [radiator](https://testbook.com/question-answer/in-an-engine-cooling-system-the-_______spre--657aef5984bdfac16e8e6d98)
- Sub-topic 6: [Scotch marine](https://testbook.com/question-answer/which-of-the-following-are-fire-tube-boilersnbsp--666d8da8392f29b279b1279a), [Benson](https://testbook.com/question-answer/in-which-boiler-is-forced-circulation-of-water-req--637efec0a5673520bd7208fb), [Rankine efficiency](https://testbook.com/question-answer/in-order-to-increase-the-efficiency-of-rankine-cyc--637f03bc2fa7b21ce15fe6f1), [bleeding](https://testbook.com/question-answer/the-ideal-rankine-cycle-modified-to-take-into-acc--63c7c2d5ba0c113cb4358138), [dryness fraction](https://testbook.com/question-answer/the-dryness-fraction-of-a-2-kg-steam-containing-1--6a757f0da17386b410c93f05), [fusible plug](https://testbook.com/question-answer/which-of-the-following-boiler-mountings-protect-th--600e28b88b8435b67090022e)
- Sub-topic 7: [critical ratio depends on](https://testbook.com/question-answer/what-does-the-critical-pressure-ratio-in-a-nozzle--6946c7657a49bd8107dc39e2), [C-D nozzle](https://testbook.com/question-answer/which-of-the-following-types-of-steam-nozzle-is-su--666d92d0052b77821b0c4d56), [Curtis turbine](https://testbook.com/question-answer/for-a-velocity-compounded-impulse-turbine-which-o--637efdb98a5f60b46238841c), [degree of reaction](https://testbook.com/question-answer/in-an-impulse-reaction-turbine-stage-the-heat-dro--63c7ce2a858cfd0089ddfe4a), [superheated critical ratio](https://testbook.com/question-answer/the-critical-pressure-ratio-for-maximum-discharge--63c7c9e825805bacb8ce046a)
- Sub-topic 8: [intercooler pressure](https://testbook.com/question-answer/for-a-two-stage-reciprocating-air-compressor-the--65302b1793e1a09b0a0ffffb), [volumetric efficiency definition](https://testbook.com/question-answer/the-volumetric-efficiency-of-a-single-stage-recipr--666d5f91a20d383a3f856144), [clearance volume](https://testbook.com/question-answer/in-a-reciprocating-compressor-the-value-of-cleara--637f0326fefcacac2d58b2a0), [compression ratio effect](https://testbook.com/question-answer/the-volumetric-efficiency-of-a-compressor--62d551484f9a59bcd7e42b60)
- Sub-topic 9: [expansion valve role](https://testbook.com/question-answer/what-is-the-role-of-the-expansion-valve-in-refrige--6946cb3e24dd1216cfdb4ba1), [entropy after compression](https://testbook.com/question-answer/in-the-vapour-compression-refrigeration-cycle-with--666d458ea20d383a3f832b70), [expansion valve blanks](https://testbook.com/question-answer/the-basic-function-of-an-expansion-valve-in-a-refr--657ae2162af74ec73dff4a3e), [isenthalpic expansion](https://testbook.com/question-answer/the-expansion-process-in-a-vapour-compression-refr--653027c2f0ef79e14816a268), [cryogenic](https://testbook.com/question-answer/which-of-the-following-refrigeration-systems-is-us--637e73f28f32cb1d577851ce), [1 TR](https://testbook.com/question-answer/one-ton-of-refrigeration-is-equal-to-_________-kw--60bfa80afe7e732770115db5), [heating effect](https://testbook.com/question-answer/a-refrigerator-working-on-a-reversed-carnot-cycle--68c0353f049d49af69e94c37)
- Sub-topic 10: [equivalence ratio](https://testbook.com/question-answer/fuel-air-mixture-is-called-rich-when-the-equivalen--6a6b379dc8539dbdb16d03be), [coal HCV and LCV](https://testbook.com/question-answer/calculate-the-hcv-lcv-of-a-coal-specimen-fro--630378fc481ec0faf1e801de), [air-fuel ratio](https://testbook.com/question-answer/chemically-correct-air-fuel-ratio-for-si-engine-is--6253cec574916cc704f2b9f9)
