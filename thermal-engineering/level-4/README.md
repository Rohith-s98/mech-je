# Thermal Engineering Level 4: Exam Room

Nov 4, 2026 · @Rohith

## How to use Level 4

Take these mocks only after finishing Levels 1 to 3 on all 10 topics. Each mock mixes every topic, the way the real paper does.

- **On the website:** press Start on a mock. It works like the exam's CBT screen: 25 questions, 25 minutes, one question at a time, a question palette and Mark for review. When the time runs out, the test submits itself.
- **Marking:** +1 for a right answer, −1/3 for a wrong one, 0 for a skip. That is the penalty in RRB JE, Kerala PSC and SSC JE Paper 2.
- **When to guess:** a blind guess among four options gains nothing on average (1/4 × 1 − 3/4 × 1/3 = 0). Rule out one option and a guess among the other three is worth +1/9 of a mark. Rule out two and it is worth +1/3. So guess only after you have eliminated at least one option.
- **After the test:** the review shows every question with your answer, the right one and the full solution. Read why each wrong option is wrong, not just the right one. Weak topics link back to the same section in Levels 1 to 3.
- **Reading here instead:** the solution sits right under each question, so cover it before you answer.
- **Retakes:** wait about a week. An immediate retake mostly tests your memory of the answers.

Each question names its exam, date and topic number, and Topic N is section N in Levels 1 to 3. In test mode the exam and topic are hidden, because spotting which idea a question tests is part of the skill. Each mock follows the weighting below.

| Topic | Questions per mock |
| --- | --- |
| 1. Basic concepts and laws of thermodynamics | 3 |
| 2. Entropy, Carnot cycle and availability | 3 |
| 3. Air standard cycles | 3 |
| 4. IC engines: working, parts, performance, knocking | 4 |
| 5. IC engine systems | 2 |
| 6. Steam properties, Rankine cycle and boilers | 3 |
| 7. Steam nozzles and turbines | 2 |
| 8. Air compressors | 2 |
| 9. Refrigeration and air conditioning | 2 |
| 10. Fuels and combustion | 1 |

## Speed toolkit

Most thermal numericals in RRB JE, SSC JE and Kerala PSC need one formula and one value you already know. Learn the values below by heart, and a two-minute sum takes 30 seconds.

### Ready values

| Quantity | Value to remember |
| --- | --- |
| Air: R, Cp, Cv, γ | 0.287, 1.005 and 0.718 kJ/kg K; γ = 1.4 |
| Gas constant of any gas | R = 8.314 ÷ molar mass, in kJ/kg K |
| Water at 1 atm | Boils at 100°C; latent heat about 2257 kJ/kg |
| Critical point of water | 22.06 MPa (220.6 bar) and 374°C |
| Critical pressure ratio of a nozzle | 0.528 for air, 0.546 for superheated steam, 0.577 for saturated steam |
| 1 tonne of refrigeration | About 3.5 kW (211 kJ/min) |
| Chemically correct air-fuel ratio, petrol | About 14.7 : 1 by mass |
| Kelvin | Add 273: 27°C = 300 K, 727°C = 1000 K |

Otto cycle efficiency, 1 − 1/r^0.4 with γ = 1.4. Each step up in compression ratio adds less than the one before.

| Compression ratio r | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- |
| Efficiency | 47.5% | 51.2% | 54.1% | 56.5% | 58.5% | 60.2% |

### Relations that save a step

| Relation | Use it when |
| --- | --- |
| Q₁ = W + Q₂ and η = W/Q₁ | Any heat engine sum: two of the three are given, find the third |
| Carnot η = 1 − T₂/T₁, in kelvin | The highest efficiency possible between two temperatures |
| COP of refrigerator = T₂/(T₁ − T₂); COP of heat pump = T₁/(T₁ − T₂) | Reversed Carnot machines |
| COP of heat pump = COP of refrigerator + 1 | The same machine used as a fridge and then as a heat pump |
| If W is x% of Q₂, then η = x/(100 + x) | "Work is 25% of the heat rejected" type questions |
| Two engines in series: equal efficiency gives T = √(T₁T₃); equal work gives T = (T₁ + T₃)/2 | Finding the middle temperature |
| Ideal intercooler pressure = √(p₁p₃) | Two-stage compressor with perfect intercooling |
| Degree of reaction = moving-blade heat drop ÷ stage heat drop | Impulse-reaction turbine stage |
| Over a full cycle ΔU = 0, so net heat = net work | First law applied to a cycle |
| Four-stroke power = pm × L × A × (N/120) × k | Engine power from mean effective pressure: pm in Pa, L in m, A in m², N in rpm, k cylinders. The 120 is 60 seconds × 2 revolutions per cycle; a two-stroke uses N/60. |

### Unit traps

- **Kelvin in every ratio.** Carnot efficiency, COP and pV = mRT all need absolute temperature. Between 727°C and 27°C the answer is 70%; plugging in °C gives a wrong 96%.
- **Absolute pressure in every ratio.** Absolute = gauge + atmospheric (about 1.013 bar).
- **Per minute or per second.** kW is kJ/s. If mass flow is given in kg/min, divide by 60 first.
- **Bar and pascal.** 1 bar = 100 kPa, and 1 MPa = 10 bar.
- **Power strokes.** A four-stroke engine fires once every two revolutions, so it gives N/2 power strokes per minute; a two-stroke gives N.
- **A percentage of what?** "Work is 25% of the heat rejected" gives η = 20%, not 25%.

### Eliminating options

- No engine beats a Carnot engine between the same two temperatures. Work out 1 − T₂/T₁ first and strike out every option above it.
- Efficiency is always below 100%, but COP has no such cap: a refrigerator's COP is often 3 to 6. A heat pump's COP is always above 1.
- Units must match. If the question asks for power, an option in kJ is a trap.
- One counterexample is enough to knock out a statement with "always", "never" or "all".
- For "which is NOT correct", mark every option true or false before choosing. The single false one is the answer.

## Mock 1

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 11 questions come from Kerala PSC papers (2023 and 2025), 4 from RRB JE, 8 from SSC JE and 2 from other JE papers.

**Q1. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 1.** Which one of the following gases has the highest characteristic gas constant? (a) oxygen (b) nitrogen (c) carbon dioxide (d) sulphur dioxide

*Answer: (b) nitrogen.*

The characteristic gas constant is the universal gas constant divided by the molar mass: R = 8.314/M kJ/kg K. So the lightest gas has the largest R. The molar masses are N₂ 28, O₂ 32, CO₂ 44 and SO₂ 64, so nitrogen wins with R = 8.314/28 = 0.297 kJ/kg K.

- **(a) oxygen:** M = 32 gives R = 0.260 kJ/kg K, a little below nitrogen.
- **(c) carbon dioxide:** M = 44 gives R = 0.189. A heavier molecule means a smaller R.
- **(d) sulphur dioxide:** M = 64 gives the smallest R of the four, 0.130. It is the opposite of what is asked.

**Doubt: why does a lighter gas have a bigger R?** R is per kilogram. A kilogram of a light gas holds more molecules, so it pushes harder at the same temperature and volume.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 4.** Knocking in SI engines can be reduced by: (a) increasing the compression ratio (b) increasing the air inlet temperature (c) increasing the cooling water temperature (d) retarding the spark advance

*Answer: (d) retarding the spark advance.*

Knock is the unburnt end gas igniting by itself before the flame reaches it. Anything that makes the end gas hotter or denser, or gives it more time, causes knock. Firing the spark later lowers the peak pressure and temperature, so the end gas is less likely to self-ignite.

- **(a):** a higher compression ratio raises end-gas pressure and temperature, so knock gets worse. This is why petrol engines are kept to compression ratios of about 8 to 11.
- **(b):** hotter intake air means hotter end gas, which knocks sooner.
- **(c):** hotter cooling water keeps the cylinder walls hot, and they heat the end gas. Knock increases.

**The trap:** in a CI (diesel) engine, a higher compression ratio and hotter intake air reduce knock. SI and CI knock respond in opposite ways, so check which engine the question is about.

**Q3. SSC JE Mechanical, 28 October 2020 (evening) · Topic 6.** \_\_\_\_\_\_ cannot be counted as a boiler mounting. (a) blow-off cock (b) feed water pump (c) fusible plug (d) stop valve

*Answer: (b) feed water pump.*

Mountings are the fittings on the boiler shell needed for safe, controlled working. Accessories are extras that raise efficiency or help operation. The feed water pump supplies water, but it is not fitted on the boiler for safety or control, so it is an accessory.

- **(a) blow-off cock:** a mounting. It drains water and clears sludge from the bottom of the boiler.
- **(c) fusible plug:** a mounting. Its low-melting plug melts when the water level falls too low, and the steam that rushes in puts out the fire.
- **(d) stop valve:** a mounting. It controls the flow of steam from the boiler to the steam pipe.

**Memory aid:** mountings are for safety and control: safety valve, water level indicator, pressure gauge, fusible plug, stop valve, blow-off cock, feed check valve. Accessories are for efficiency: economiser, air preheater, superheater, feed pump, injector.

**Q4. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 2.** For a heat engine operating on a Carnot cycle, the work output is 25% of the heat rejected to the sink. The thermal efficiency of the engine is: (a) 10% (b) 50% (c) 30% (d) 20%

*Answer: (d) 20%.*

1. Take the heat rejected Q₂ = 100 kJ. Then the work W = 25 kJ.
2. Heat supplied Q₁ = W + Q₂ = 125 kJ.
3. η = W/Q₁ = 25/125 = 20%. The shortcut from the speed toolkit is x/(100 + x) = 25/125.

- **(a) 10%, (b) 50% and (c) 30%:** none of them comes from the correct working.

**The trap:** 25% is W divided by the heat rejected. Efficiency always divides by the heat supplied. The examiner left 25% out of the options, but in another paper it could be there to catch you.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 9.** In aqua-ammonia and LiBr-water absorption refrigeration systems, the refrigerants are, respectively: (a) water and water (b) water and LiBr (c) ammonia and LiBr (d) ammonia and water

*Answer: (d) ammonia and water.*

An absorption system uses two fluids. The refrigerant evaporates and gives the cooling, and the absorbent soaks the vapour back up. In aqua-ammonia, ammonia is the refrigerant and water is the absorbent. In LiBr-water, water is the refrigerant and lithium bromide, a salt, is the absorbent.

- **(a) water and water:** right for the second system, but in aqua-ammonia water only absorbs.
- **(b) water and LiBr:** wrong for both. In aqua-ammonia water is the absorbent, and LiBr is a salt that never evaporates, so it cannot be a refrigerant.
- **(c) ammonia and LiBr:** right for the first system, wrong for the second.

**Doubt: how can water be a refrigerant if it freezes at 0°C?** The evaporator runs at a very low pressure, where water boils at about 4 to 5°C. That is why LiBr-water systems are used only for air conditioning and water chilling, never below 0°C.

**Q6. RRB JE CBT-2 Mechanical, 31 August 2019 · Topic 3.** In an air standard Otto cycle, the compression ratio is 7. The cycle efficiency is: (a) 54% (b) 38% (c) 71% (d) 80%

*Answer: (a) 54%.*

η = 1 − 1/r^(γ−1) = 1 − 1/7^0.4. Since 7^0.4 ≈ 2.18, η = 1 − 0.459 = 0.541, or 54%. This value is in the speed toolkit table.

- **(b) 38%:** too low. Even r = 4 gives about 43%.
- **(c) 71%:** would need a compression ratio of about 22.
- **(d) 80%:** would need a compression ratio of about 56, which no engine has.

**Doubt: why γ = 1.4?** "Air standard" means the working fluid is air with constant specific heats, and for air γ = Cp/Cv = 1.4.

**Q7. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 5.** In the battery ignition system of an SI engine, as engine speed increases, the sparking voltage: (a) remains the same (b) drops (c) increases (d) first increases and then becomes constant

*Answer: (b) drops.*

In a battery (coil) ignition system, current builds up in the coil's primary winding while the contact breaker points are closed, and the spark voltage depends on how much has built up. At high speed the points stay closed for a shorter time, so less current builds up and the spark voltage falls.

- **(a):** the voltage would stay the same only if the points stayed closed just as long, but that time shrinks with speed.
- **(c):** this is how a magneto behaves. A magneto generates its own current from the engine's rotation, so its spark gets stronger as speed rises.
- **(d):** no common ignition system behaves this way.

**The trap:** battery ignition gives a strong spark at low speed, which helps starting. A magneto gives a weak spark at low speed and a strong one at high speed, which suits racing bikes and aircraft piston engines.

**Q8. RRB JE CBT-2 Mechanical re-exam, 4 June 2025 · Topic 4.** How does indicated power differ from brake power in an IC engine? (a) Indicated power is measured at the output shaft, while brake power is measured in the cylinders (b) Both are the same value under ideal conditions (c) Indicated power comes from the cylinder pressures, whereas brake power is the net output at the crankshaft after mechanical losses (d) Indicated power accounts for frictional losses, whereas brake power does not

*Answer: (c).*

Indicated power is the power the gas develops on the piston, worked out from the cylinder pressure on an indicator diagram. Brake power is what is left at the crankshaft after friction in the bearings, pistons and valve gear, and it is measured with a brake (dynamometer). So IP = BP + FP, and mechanical efficiency = BP/IP.

- **(a):** this swaps the two. "Indicated" comes from the indicator on the cylinder, and "brake" comes from the brake on the shaft.
- **(b):** with zero friction they would be equal, but that does not say how they differ, which is what the question asks. In every real engine BP is less than IP.
- **(d):** backwards. Brake power is the one with the friction losses already taken out.

**Q9. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 7.** In a steam nozzle, for the same pressure ratio, the effect of friction is: (a) an increase in dryness fraction of the exit steam and an increase in exit velocity (b) a decrease in dryness fraction and a decrease in exit velocity (c) an increase in dryness fraction and a decrease in exit velocity (d) a decrease in dryness fraction and an increase in exit velocity

*Answer: (c).*

Friction turns some of the steam's kinetic energy back into heat inside the steam. Less of the enthalpy drop becomes velocity, so exit velocity falls. The reheated steam ends up drier, so the dryness fraction rises. On the h-s chart, the real end point sits to the right of the isentropic one, at higher enthalpy, where the steam is drier.

- **(a):** friction is a loss, so it can never increase velocity.
- **(b):** velocity does fall, but the steam gets drier, not wetter.
- **(d):** wrong on both counts.

**Doubt: how can a loss make the steam drier, which sounds better?** The drier steam is not a gain. Energy that should have become velocity stayed in the steam as heat. The nozzle's job is velocity, and it delivers less.

**Q10. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 1) · Topic 1.** For a closed system undergoing a thermodynamic cycle, the first law states that: (a) net work done equals net heat transfer (b) entropy always increases (c) pressure and temperature are inversely related (d) internal energy remains constant

*Answer: (a).*

A cycle ends where it started, so every property, including internal energy, returns to its starting value: ΔU = 0 over the cycle. The first law, ΔU = Q − W, then gives Q = W. The net heat in equals the net work out.

- **(b):** this is a second-law idea, and wrong anyway. The system's entropy also returns to its starting value after a cycle.
- **(c):** not a law at all. For a gas at fixed volume, pressure rises with temperature.
- **(d):** the trap. Internal energy changes during the cycle and only comes back to its starting value at the end. "Zero net change over the cycle" is not the same as "constant".

**Q11. SSC JE Mechanical, 7 June 2024 (Shift 2, Paper I) · Topic 8.** Which of the following is an advantage of a multistage reciprocating air compressor? (a) mechanical efficiency increases (b) the system is less complicated (c) high work input (d) volumetric efficiency increases for the same pressure ratio

*Answer: (d).*

Volumetric efficiency falls as the pressure ratio per stage rises, because the air left in the clearance space expands further before fresh air can enter. Splitting the job over several stages keeps each stage's pressure ratio low, so volumetric efficiency is higher. Intercooling between the stages also cuts the work input and the delivery temperature.

- **(a):** more stages mean more pistons, bearings and valves, so friction does not fall. Mechanical efficiency is not the gain.
- **(b):** the opposite. Extra cylinders, an intercooler and piping make the system more complicated and costly.
- **(c):** multistaging with intercooling reduces the work input, and a high work input would never be an advantage.

**Q12. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 2.** Which statements about entropy are correct? 1. It increases when heat is supplied, whether or not the temperature changes. 2. It decreases when heat is removed, whether or not the temperature changes. 3. It remains unchanged in all adiabatic frictionless processes. 4. It increases when temperature falls without work being done, as in a throttling process. (a) 1, 3 and 4 only (b) 1, 2 and 3 only (c) 1, 2, 3 and 4 (d) 2, 3 and 4 only

*Answer: (c) all four.*

Two rules settle this: dS = δQ/T for reversible heat transfer, and irreversibility always creates entropy.

1. Heat in means dS is positive, even while water boils at constant temperature. True.
2. Heat out means dS is negative, even while steam condenses. True.
3. Adiabatic means no heat, and frictionless means reversible, so dS = 0. True.
4. Throttling has no heat and no work, but it is highly irreversible, so entropy rises. True.

- **(a):** leaves out statement 2. Students drop it because "entropy always increases", but that rule is for an isolated system. A system that loses heat loses entropy, while its surroundings gain more.
- **(b):** leaves out statement 4. Throttling looks harmless because enthalpy stays constant, but it is irreversible.
- **(d):** leaves out statement 1, which is just dS = δQ/T with δQ positive.

**Doubt: is it the temperature drop that raises entropy in throttling?** No. The rise comes from the irreversibility. An ideal gas throttled shows no temperature drop at all, yet its entropy still rises.

**Q13. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 6.** A separating calorimeter is suitable for measuring the dryness fraction of steam: (a) when the dryness fraction is greater than 0.95 (b) for any condition of steam (c) when the dryness fraction is greater than 1 (d) when the dryness fraction is less than 0.95

*Answer: (d).*

A separating calorimeter catches the water droplets mechanically and weighs them, so it works well when there is plenty of water to catch. For very dry steam, above about 0.95, a throttling calorimeter is used instead. Throttling a nearly dry sample to low pressure superheats it, and its temperature then gives the dryness.

- **(a):** this is the throttling calorimeter's range.
- **(b):** neither calorimeter suits every condition. That is why the two are combined into a separating-and-throttling calorimeter.
- **(c):** dryness fraction cannot exceed 1. At x = 1 the steam is dry saturated, and beyond that it is superheated, where dryness fraction no longer applies.

**Q14. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1) · Topic 4.** Ignition quality of diesel fuel is expressed by an index called: (a) cetane number (b) heptane number (c) octane number (d) carbon content

*Answer: (a) cetane number.*

The cetane number compares a diesel with two reference fuels: normal cetane, which lights very easily and is rated 100, and alpha-methylnaphthalene, which is rated 0. A higher cetane number means a shorter ignition delay, so less fuel piles up before it lights, and diesel knock is less. Road diesel is usually about 40 to 55.

- **(b) heptane number:** no such index exists. Normal heptane is the zero point of the octane scale, which is probably why it is offered.
- **(c) octane number:** this rates petrol's resistance to knock. Petrol must resist lighting by itself, while diesel must light by itself quickly, so the two ratings measure opposite qualities.
- **(d) carbon content:** affects smoke and calorific value. It is not a rating of ignition quality.

**Memory aid:** cetane for CI, octane for SI. A good diesel fuel is a poor petrol: fuels with a high cetane number have a low octane number.

**Q15. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** In a two-stage gas turbine plant with intercooling and reheating: (a) both work ratio and thermal efficiency increase (b) both work ratio and thermal efficiency decrease (c) work ratio increases and thermal efficiency decreases (d) work ratio decreases and thermal efficiency increases

*Answer: (c).*

Intercooling cuts the compressor work, and reheating raises the turbine work, so the net work and the work ratio (net work ÷ turbine work) both go up. Efficiency falls, though. The intercooled air leaves the compressor colder, so the combustion chamber must add more heat, the reheater adds more heat again, and the exhaust leaves hotter and carries that heat away.

- **(a):** true only when a regenerator is added, which lets the hot exhaust preheat the compressed air. The question does not mention one.
- **(b):** the work ratio definitely rises, because there is less compressor work and more turbine work.
- **(d):** wrong on both counts.

**The trap:** many guidebooks say "both increase" for intercooling, reheating and regeneration together. Check whether the question mentions a regenerator. Without one, the answer is (c), and that is the Kerala PSC key.

**Q16. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 1.** The Joule–Thomson coefficient μ is defined as: (a) μ = ∂T/∂P at constant H (b) μ = ∂V/∂P at constant H (c) μ = ∂T/∂P at constant S (d) μ = ∂P/∂T at constant H

*Answer: (a).*

The Joule–Thomson coefficient says how much the temperature changes for each unit of pressure drop in throttling. Throttling keeps enthalpy constant, so it is ∂T/∂P at constant H. When μ is positive the gas cools on throttling, which is how gases are liquefied. For an ideal gas μ = 0.

- **(b):** a change in volume. The coefficient is about temperature, because throttling is used for cooling.
- **(c):** constant entropy describes reversible adiabatic expansion, as in an ideal turbine or nozzle. Throttling is irreversible, and entropy rises.
- **(d):** the right letters turned upside down.

**Memory aid:** temperature over pressure, holding enthalpy.

**Q17. SSC JE Mechanical, 25 September 2019 (evening) · Topic 10.** The air–fuel ratios used in the normal operation of SI and CI engines are: (a) around stoichiometric for both SI and CI (b) excess air for both CI and SI (c) excess air for CI and around stoichiometric for SI (d) a very rich mixture for SI and a lean mixture for CI

*Answer: (c).*

An SI engine burns a ready-made mixture that the spark flame must spread through, so it stays near the stoichiometric 14.7:1, roughly 12:1 to 18:1. Its power is controlled by throttling the amount of mixture. A CI engine never throttles its air. Its power is controlled by how much fuel is injected, so it always has excess air, from about 18:1 at full load to 80:1 or more at idle. The extra air is also needed because fuel sprayed into the cylinder never mixes perfectly.

- **(a):** a CI engine at stoichiometric would give heavy black smoke, because the fuel cannot reach all the oxygen in time.
- **(b):** an SI engine cannot run very lean. Beyond about 18:1 the spark fails to light the mixture reliably and the engine misfires.
- **(d):** an SI engine runs rich only briefly, for a cold start or full power. The CI half is right, the SI half is wrong.

**Q18. SSC JE Mechanical, 27 October 2020 (morning) · Topic 6.** In a fire tube boiler, the operating pressure range is: (a) 30 to 35 bar (b) 26 to 29 bar (c) 21 to 25 bar (d) 16 to 20 bar

*Answer: (d) 16 to 20 bar.*

In a fire tube boiler the hot gases pass through tubes, and the water fills a large shell around them. That large shell has to hold the pressure, and hoop stress = pD/2t, so a big diameter D needs very thick plates. This keeps fire tube boilers at low pressures: the Lancashire boiler works at about 16 bar and the locomotive boiler at about 20 bar. In a water tube boiler the pressure is inside small tubes, which can hold well over 100 bar.

- **(a), (b) and (c):** above the usual fire tube range. Pressures like these need a water tube boiler.

**Doubt: some books say fire tube boilers go up to 25 bar.** That is the ceiling a few books quote. The usual working range, and the answer in the key, is 16 to 20 bar.

**Q19. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 8.** If an axial flow compressor is designed for a constant velocity through all stages, then the area of annulus of the succeeding stage will: (a) remain the same (b) progressively decrease (c) progressively increase (d) depend upon the number of stages

*Answer: (b) progressively decrease.*

The same mass of air passes every stage, and mass flow = ρAV. Each stage raises the pressure, so the density ρ rises. If the velocity V is kept constant, the area A = ṁ/(ρV) must fall. That is why an axial compressor tapers, with shorter blades towards the delivery end.

- **(a):** the area would stay the same only if the density stayed the same, which would mean no compression.
- **(c):** this is a turbine. The gas expands, density falls, so the annulus grows and the blades get longer towards the exhaust.
- **(d):** the number of stages decides how much the area shrinks overall, but each stage is still smaller than the one before.

**Q20. RSMSSB JE (Electrical and Mechanical) Diploma, 20 May 2022 (Shift 2) · Topic 4.** A four-stroke, four-cylinder diesel engine runs at 1200 rpm and develops 70 kW brake power. Brake thermal efficiency is 30%, fuel calorific value 42,000 kJ/kg, bore 150 mm, stroke 120 mm, air–fuel ratio 15:1, mechanical efficiency 0.85 and air density 1.15 kg/m³. The brake mean effective pressure is: (a) 7.19 bar (b) 8.25 bar (c) 7.74 bar (d) 8.93 bar

*Answer: (b) 8.25 bar.*

1. For a four-stroke engine, BP = pb × L × A × (N/120) × k, where k is the number of cylinders. N/120 is the number of power strokes per second in each cylinder.
2. Piston area A = π/4 × 0.15² = 0.01767 m², so L × A = 0.12 × 0.01767 = 0.002121 m³.
3. N/120 = 1200/120 = 10 per second. With 4 cylinders: 0.002121 × 10 × 4 = 0.08482 m³/s.
4. pb = 70,000 W ÷ 0.08482 m³/s = 825,300 Pa = 8.25 bar.

- **(a), (c) and (d):** none of them comes from the brake power relation. If you got 4.13 bar, you used N/60, which is the two-stroke count. If you got 9.71 bar, you divided by the mechanical efficiency and found the indicated mean effective pressure, which is not what was asked.

**The trap:** the thermal efficiency, calorific value, air–fuel ratio, mechanical efficiency and air density are all extra data. Brake mean effective pressure needs only the brake power, the cylinder size and the speed. Spotting unused data quickly saves a minute.

**Q21. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** A frictionless heat engine can be 100% efficient only if its exhaust temperature is: (a) 0 K (b) equal to its input temperature (c) 0°C (d) 100°C

*Answer: (a) 0 K.*

The best possible efficiency is the Carnot value, η = 1 − T₂/T₁, with temperatures in kelvin. It equals 1 only when T₂ = 0 K, absolute zero, which can never be reached. So no engine can be 100% efficient, which is the Kelvin–Planck statement in numbers.

- **(b):** if T₂ = T₁, η = 1 − 1 = 0. With no temperature difference, the engine gives no work at all.
- **(c):** 0°C is 273 K, not zero. The efficiency would be 1 − 273/T₁, well below 100%.
- **(d):** 100°C is 373 K, which is worse still.

**The trap:** the Carnot formula always uses kelvin. 0°C looks like zero, but in the formula it is 273.

**Q22. JSSC JE Mechanical Re-Exam, 23 October 2022 (Paper II) · Topic 7.** Compounding of a steam turbine is done in order to: (a) reduce the turbine speed (b) balance the rotor of the turbine (c) connect the two turbine shafts together (d) reduce the blade friction

*Answer: (a) reduce the turbine speed.*

If the whole pressure drop happens in one set of nozzles, as in the De Laval turbine, the steam leaves at over 1000 m/s and the rotor has to spin at up to about 30,000 rpm to use it. That is too fast for the blades and for a generator. Compounding splits the drop over several stages, by pressure compounding, velocity compounding or both, so each stage takes a share and the rotor speed stays practical.

- **(b):** balancing a rotor, or the end thrust in a reaction turbine, is a separate design problem.
- **(c):** joining two shafts is the job of a coupling. The word "compound" makes this sound right.
- **(d):** more stages mean more blade rows, so friction losses rise slightly rather than fall.

**Q23. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 9.** If unsaturated air is passed through a spray of continuously recirculated water: (a) both dry bulb temperature and specific humidity increase (b) both dry bulb temperature and specific humidity decrease (c) dry bulb temperature increases and specific humidity decreases (d) dry bulb temperature decreases and specific humidity increases

*Answer: (d).*

Recirculated water settles at the air's wet bulb temperature. Some of it evaporates into the air, so the specific humidity rises. The latent heat for that evaporation comes from the air itself, so the dry bulb temperature falls. No heat comes from outside, so this is adiabatic saturation, or evaporative cooling, and it follows a constant wet bulb temperature line on the psychrometric chart.

- **(a):** needs a water spray hotter than the air, which is heating with humidification.
- **(b):** needs a spray or coil colder than the air's dew point, which is cooling with dehumidification.
- **(c):** this is chemical dehumidification with silica gel or another desiccant. The desiccant takes moisture out and releases heat.

**Q24. SSC JE Mechanical, 3 March 2017 (morning) · Topic 5.** The lowest temperature at which the oil ceases to flow when cooled is known as: (a) flash point (b) fire point (c) cloud point (d) pour point

*Answer: (d) pour point.*

As oil cools, wax crystals start to form and it turns hazy: that is the cloud point. A few degrees lower it stops pouring: that is the pour point. For engines in cold weather, a low pour point means the oil still reaches the bearings at a cold start.

- **(a) flash point:** a heating test. It is the lowest temperature at which the vapour flashes briefly when a flame is brought near.
- **(b) fire point:** also a heating test, a few degrees above the flash point, where the vapour keeps burning for at least 5 seconds.
- **(c) cloud point:** a cooling test, which makes it the tempting wrong answer. It comes before the pour point, when the oil turns hazy but still flows.

**Memory aid:** on heating, flash then fire. On cooling, cloud then pour.

**Q25. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 3.** For the same compression ratio and heat supplied, the air standard efficiency of an Otto cycle compared to that of a Diesel cycle is: (a) less (b) equal (c) more (d) unpredictable

*Answer: (c) more.*

The Diesel efficiency is the Otto efficiency multiplied by a correction: η = 1 − (1/r^(γ−1)) × (ρ^γ − 1)/(γ(ρ − 1)), where ρ is the cut-off ratio. That correction is always greater than 1 when ρ > 1, so at the same compression ratio the Diesel cycle is less efficient. In words: the Otto cycle adds all its heat at the smallest volume, so all of it gets the full expansion. The Diesel cycle adds heat while the piston is already moving out, so part of it gets less expansion.

- **(a):** this is the answer for a different condition, the same maximum pressure and temperature. Then the Diesel cycle wins, because it can use a much higher compression ratio.
- **(b):** equal only when the cut-off ratio is 1, which means no heat is added at all.
- **(d):** the formula gives a definite answer.

**The trap:** the condition decides the order. Same compression ratio and heat: Otto > Dual > Diesel. Same maximum pressure and temperature: Diesel > Dual > Otto.

## Mock 2

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 15 questions come from Kerala PSC papers (2023 and 2025), 3 from RRB JE and 7 from SSC JE. Leave at least a day after Mock 1, so you are answering from memory of the ideas and not of the questions.

**Q1. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 1.** Change in enthalpy in a closed system is equal to the heat transferred if the reversible process takes place at constant: (a) temperature (b) internal energy (c) entropy (d) pressure

*Answer: (d) pressure.*

The first law for a reversible process is δQ = dU + p dV. When p is constant, p dV = d(pV), so δQ = d(U + pV) = dH. At constant pressure, the heat transferred is the enthalpy change. The partner fact: at constant volume p dV = 0, so the heat transferred is the internal energy change.

- **(a) temperature:** for an ideal gas ΔH = 0 at constant temperature, yet heat does flow (Q = W). So they are not equal.
- **(b) internal energy:** then Q = W, and ΔH = Δ(pV), which is not the heat.
- **(c) entropy:** a reversible process at constant entropy is adiabatic, so Q = 0, while ΔH = V dp is not zero.

**Memory aid:** constant volume, Q = ΔU. Constant pressure, Q = ΔH.

**Q2. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 4.** The standard firing order in a 4-cylinder petrol engine is: (a) 1-4-3-2 (b) 1-3-4-2 (c) 1-2-4-3 (d) 1-4-2-3

*Answer: (b) 1-3-4-2.*

In an inline four, pistons 1 and 4 move together, and so do 2 and 3, half a turn behind. When piston 1 fires, piston 4 is also at the top but on its exhaust stroke. The next cylinder to fire must come from the other pair (2 or 3), then 4, then the last one. That allows only 1-3-4-2 or 1-2-4-3, and 1-3-4-2 is the one most engines use.

- **(a) 1-4-3-2 and (d) 1-4-2-3:** cylinder 4 cannot fire straight after 1, because half a turn later piston 4 is at the bottom, not at the top of its compression stroke.
- **(c) 1-2-4-3:** a workable order that some engines use, but it is not the standard one, which the question asks for.

**Q3. SSC JE Mechanical, 11 December 2020 (morning) · Topic 6.** The rate of steam generation in a water tube boiler in comparison to a fire tube boiler is: (a) less (b) more or less the same (c) more (d) equal

*Answer: (c) more.*

A water tube boiler splits the water into many small tubes with hot gases outside them. That gives a large heating surface for a small amount of water, and the water circulates quickly, so steam is raised fast. A fire tube boiler holds a large body of water in its shell, which takes longer to heat.

- **(a) less:** describes the fire tube boiler.
- **(b) and (d):** the two designs work differently, so they do not produce steam at the same rate.

**Doubt: is the fire tube boiler's large water volume a disadvantage?** Not always. That stored hot water lets it meet a sudden demand for steam without the pressure dropping much.

**Q4. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 2.** Which of the following is a correct statement? (a) a reversible adiabatic process is an isentropic process (b) an isentropic process is an adiabatic process (c) an irreversible adiabatic process is a constant entropy process (d) entropy decreases during an irreversible adiabatic process

*Answer: (a).*

Entropy changes in two ways: heat transfer carries it in or out, and irreversibility creates it. A reversible adiabatic process has neither, so its entropy stays constant: it is isentropic.

- **(b):** the reverse does not always hold. A process with friction can still have constant entropy if just enough heat leaves to carry away the entropy that friction creates. That process is isentropic but not adiabatic.
- **(c):** an irreversible adiabatic process creates entropy and has no heat flow to remove it, so entropy rises.
- **(d):** entropy can never fall in an adiabatic process. That would break the second law.

**The trap:** "every reversible adiabatic process is isentropic" does not mean "every isentropic process is adiabatic". Watch for statements turned around.

**Q5. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 9.** A Carnot refrigerator is working between 250 K and 300 K. Its COP is: (a) 6/5 (b) 5/6 (c) 6 (d) 5

*Answer: (d) 5.*

COP of a refrigerator = T\_L/(T\_H − T\_L) = 250/(300 − 250) = 250/50 = 5.

- **(c) 6:** this is the heat pump COP between the same temperatures, T\_H/(T\_H − T\_L) = 300/50. It is always the refrigerator COP + 1.
- **(a) 6/5:** T\_H/T\_L, just the ratio of the two temperatures.
- **(b) 5/6:** T\_L/T\_H, the same ratio upside down.

**The trap:** 5 and 6 are both offered because each is the right COP for one machine. Check whether the question says refrigerator or heat pump.

**Q6. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 3.** Increasing the number of reheating stages in a gas turbine to infinity makes the expansion tend to: (a) isothermal (b) isobaric (c) adiabatic (d) reversible adiabatic

*Answer: (a) isothermal.*

Each reheat brings the gas back up to the maximum temperature before it expands again. With an infinite number of tiny expansions and reheats, the temperature never gets a chance to fall, so the expansion happens at constant temperature. Isothermal expansion gives the most turbine work. In the same way, infinite intercooling makes the compression isothermal.

- **(b) isobaric:** the pressure falls all through the expansion, which is the whole point of a turbine.
- **(c) and (d):** a single expansion with no reheat is adiabatic. Reheating adds heat, so the expansion cannot be adiabatic.

**Q7. RRB JE CBT-2 Mechanical re-exam, 4 June 2025 · Topic 5.** IC engines are classified into carburettor engines and air injection engines based on the: (a) speed of the engine (b) number of cylinders (c) method of fuel injection (d) cooling system used

*Answer: (c) method of fuel injection.*

The classification is about how the fuel gets into the cylinder. In a carburettor engine, petrol is mixed with air before it enters. In an air injection engine, an old type of diesel, fuel was blown into the cylinder by a blast of compressed air. Modern diesels use solid (airless) injection, where a pump forces the fuel through the nozzle.

- **(a) speed:** gives low, medium and high speed engines.
- **(b) number of cylinders:** gives single-cylinder and multi-cylinder engines.
- **(d) cooling system:** gives air-cooled and water-cooled engines.

**Q8. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 7.** The De Laval turbine is an example of a: (a) simple impulse turbine (b) reaction turbine (c) pressure compounded impulse turbine (d) velocity compounded impulse turbine

*Answer: (a) simple impulse turbine.*

In the De Laval turbine the steam expands fully in one set of nozzles and then strikes a single row of moving blades. With one stage and no compounding, the rotor runs very fast and needs reduction gearing.

- **(b):** the classic reaction turbine is the Parsons turbine.
- **(c):** the pressure compounded impulse turbine is the Rateau turbine.
- **(d):** the velocity compounded impulse turbine is the Curtis turbine.

**Memory aid:** De Laval simple, Curtis velocity, Rateau pressure, Parsons reaction.

**Q9. RRB JE CBT-2 Mechanical, 31 August 2019 · Topic 1.** Control volume in a thermodynamic system refers to: (a) a specified mass in fluid flow (b) mass that moves across the boundary (c) transfer of energy across the boundary (d) a fixed region in space for thermodynamic study

*Answer: (d).*

A control volume is an open system: a fixed region drawn around a device such as a turbine, pump or nozzle. Mass and energy both cross its boundary, which is called the control surface. The steady flow energy equation is written for a control volume.

- **(a):** a fixed amount of mass is a control mass, which is a closed system.
- **(b):** mass does cross the boundary of a control volume, but the control volume is the region, not the mass.
- **(c):** energy crosses the boundary of any system as heat and work. That does not define a control volume.

**Q10. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 8.** In reciprocating air compressors, the clearance ratio is the ratio of: (a) total volume of cylinder to clearance volume (b) clearance volume to total volume of cylinder (c) clearance volume to swept volume of cylinder (d) swept volume of cylinder to clearance volume

*Answer: (c) clearance volume to swept volume.*

Clearance ratio C = Vc/Vs, usually about 4 to 10%. It appears in the volumetric efficiency formula: ηv = 1 + C − C(p₂/p₁)^(1/n). A bigger clearance ratio means more trapped air re-expanding, and lower volumetric efficiency.

- **(a):** (Vc + Vs)/Vc is the compression ratio of an IC engine.
- **(b):** Vc/(Vc + Vs) is the reciprocal of the compression ratio. It has no standard name.
- **(d):** Vs/Vc is the clearance ratio upside down.

**Q11. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 4.** The volumetric efficiency of a well-designed SI engine lies in the range: (a) 40–50% (b) 51–60% (c) 61–70% (d) 71–90%

*Answer: (d) 71–90%.*

Volumetric efficiency compares the air actually drawn in with the swept volume at intake conditions. The throttle, the valves, hot cylinder walls and leftover exhaust gas all reduce it, but a well-designed naturally aspirated engine at full throttle reaches about 75 to 90%. A supercharged engine can go above 100%.

- **(a), (b) and (c):** too low for a well-designed engine at full throttle. Values like these occur only at part throttle.

**Q12. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** The main cause of irreversibility is: (a) unrestricted expansion (b) mechanical and fluid friction (c) heat transfer with a finite temperature difference (d) all of the above

*Answer: (d) all of the above.*

All three are standard causes of irreversibility. Unrestricted (free) expansion wastes the chance to get work. Friction turns work into heat that cannot fully be turned back. Heat flowing across a finite temperature difference cannot flow back by itself. Mixing, chemical reactions and electrical resistance are other causes.

- **(a), (b) and (c):** each one is a cause, so choosing any one alone loses the mark.

**Q13. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 6.** The Rankine cycle comprises: (a) two isentropic processes and two isothermal processes (b) two isentropic processes and two constant pressure processes (c) two isentropic processes and two constant volume processes (d) two isothermal processes and two constant pressure processes

*Answer: (b).*

The four processes are: the pump compresses water isentropically, the boiler heats it at constant pressure, the turbine expands the steam isentropically, and the condenser cools it at constant pressure.

- **(a):** this is the Carnot cycle. Boiling in the wet region is also isothermal, but superheating in the boiler is not, so the general statement is constant pressure.
- **(c):** this is the Otto cycle.
- **(d):** two isothermal and two constant pressure processes make the Ericsson cycle.

**Q14. RRB JE CBT-2 Mechanical re-exam, 4 June 2025 · Topic 3.** What is the effect of compression ratio (CR) on the air standard efficiency of Otto and Diesel cycles? (a) a higher CR always leads to higher efficiency (b) a lower CR always leads to higher efficiency (c) CR has no effect on efficiency (d) efficiency increases with CR in SI engines and decreases in CI engines

*Answer: (a).*

Both efficiency formulas contain the term 1/r^(γ−1). As r rises, that term shrinks and the efficiency goes up. For the Diesel cycle the cut-off ratio also matters, but at any fixed cut-off ratio a higher r still means a higher efficiency.

- **(b):** the opposite of what both formulas show.
- **(c):** compression ratio is the main thing the air standard efficiency depends on.
- **(d):** CI engines use high compression ratios, about 14 to 22, precisely because efficiency rises with r.

**Doubt: why "always", when real petrol engines stop at about 11?** In a real SI engine, a higher compression ratio causes knock, and very high ratios add friction and stress. The question asks about the air standard cycle, where none of that exists.

**Q15. SSC JE Mechanical, 23 January 2018 (morning) · Topic 10.** The bomb calorimeter is an apparatus to measure the: (a) calorific value of a gaseous fuel (b) calorific value of solid and gaseous fuels (c) calorimetric composition of any solid bomb material (d) calorific value of a solid or liquid fuel

*Answer: (d).*

A weighed sample of solid or liquid fuel is burned in pure oxygen at about 25 atm inside a sealed steel vessel, the "bomb", which sits in a known mass of water. The temperature rise of the water gives the heat released. The steam formed condenses inside the bomb, so the result is the higher calorific value.

- **(a):** gaseous fuels are tested in a Junkers gas calorimeter, where the gas burns steadily and heats flowing water.
- **(b):** the solid half is right, but the gaseous half is wrong.
- **(c):** the "bomb" is only the name of the strong vessel. Nothing about bomb material is measured.

**Q16. SSC JE Mechanical, 27 September 2019 (morning) · Topic 4.** In an IC engine, combustion was found to proceed during the expansion stroke also. The reason could be: (a) rich mixture with ignition advance (b) high calorific value of the fuel (c) weak mixture with ignition advance (d) weak mixture without ignition advance

*Answer: (d).*

A weak (lean) mixture burns slowly, because its flame speed is low. To finish burning near the top of the stroke, it needs the spark to fire earlier. Without that advance, burning carries on well into the expansion stroke. This is called after-burning: the exhaust gets hot and power is lost.

- **(a):** a slightly rich mixture burns fastest, and with advance it finishes early. If anything, that causes knock.
- **(b):** calorific value is how much energy the fuel holds, not how fast it burns.
- **(c):** advancing the spark is the cure for slow burning, so combustion would finish on time.

**Q17. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 7.** For subsonic flow through a nozzle, the following changes occur in velocity and pressure along the flow direction: (a) pressure decreases, velocity increases (b) pressure increases, velocity decreases (c) both pressure and velocity increase (d) velocity increases and pressure remains constant

*Answer: (a).*

A nozzle turns pressure energy into kinetic energy. Along it, pressure falls and velocity rises. For subsonic flow, this needs a converging passage.

- **(b):** this is a diffuser, which slows the flow down to raise its pressure.
- **(c):** with no work put in, the flow cannot gain both pressure and velocity.
- **(d):** the pressure drop is what pushes the fluid faster, so pressure cannot stay constant.

**Doubt: what changes in supersonic flow?** In the diverging part of a nozzle, flow is supersonic, and pressure still falls while velocity still rises. Only the shape that does it is reversed: supersonic flow speeds up in a widening passage.

**Q18. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 1.** As differentials, heat and work would be described mathematically as: (a) exact (b) discontinuity (c) inexact (d) point function

*Answer: (c) inexact.*

How much heat or work a process involves depends on the path it takes, not only on where it starts and ends. So heat and work are path functions, written δQ and δW, and their differentials are inexact. Properties such as pressure, temperature, internal energy and entropy depend only on the state. They are point functions, written dU, dS, with exact differentials.

- **(a) exact:** belongs to properties.
- **(b) discontinuity:** not a term used for differentials here.
- **(d) point function:** the opposite. Heat and work are path functions.

**Doubt:** δQ − δW = dU is exact even though δQ and δW on their own are not. Their difference is a property, internal energy.

**Q19. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 9.** During chemical dehumidification of air: (a) dry bulb temperature and specific humidity decrease (b) dry bulb temperature decreases and specific humidity increases (c) dry bulb temperature increases and specific humidity decreases (d) dry bulb temperature and specific humidity increase

*Answer: (c).*

A desiccant such as silica gel or activated alumina takes water vapour out of the air, so the specific humidity falls. As the vapour is taken up, its latent heat is released into the air, so the dry bulb temperature rises.

- **(a):** cooling and dehumidification, done by a cooling coil colder than the dew point.
- **(b):** evaporative cooling, done by a water spray.
- **(d):** heating and humidification, done with steam or a hot water spray.

**Q20. SSC JE Mechanical, 7 June 2024 (Shift 2, Paper I) · Topic 5.** A continuous injection system usually has a: (a) vane pump (b) plunger pump (c) rotary pump (d) gear pump

*Answer: (c) rotary pump.*

A continuous injection system sprays fuel all the time, as in some petrol injection systems and in gas turbines. It needs a steady, non-pulsating supply at constant pressure, which a rotary pump gives. A timed (jerk) injection system, as in a diesel, uses a plunger pump that delivers one slug of fuel per stroke.

- **(b) plunger pump:** belongs to timed injection, where the pulses are needed.
- **(a) vane pump and (d) gear pump:** strictly, these are kinds of rotary pump too, so this question is loosely set. The examiner wanted the general category, rotary, as opposed to the plunger pump.

**The trap:** when the options include a broad term and some of its own sub-types, the examiner usually wants the broad term.

**Q21. SSC JE Mechanical, 4 December 2023 (Paper II) · Topic 8.** A single-stage reciprocating air compressor takes in 1.4 kg of air per minute at 1 bar and 17°C and delivers it at 6 bar. Compression follows pV^1.35 = constant. The indicated power input is: (a) 3.42 kW (b) 1.57 kW (c) 0.26 kW (d) 4.43 kW

*Answer: (d) 4.43 kW.*

1. Mass flow ṁ = 1.4/60 = 0.02333 kg/s, and T₁ = 17 + 273 = 290 K.
2. Delivery temperature T₂ = T₁ × (p₂/p₁)^((n−1)/n) = 290 × 6^0.2593 = 290 × 1.591 = 461.5 K.
3. Power = n/(n−1) × ṁ × R × (T₂ − T₁) = 3.857 × 0.02333 × 0.287 × 171.5 = 4.43 kW.

- **(a) 3.42 kW:** close to the isothermal work, ṁRT₁ ln 6, which is about 3.4 kW. That is the least work any compressor could need, but this compression follows pV^1.35, not pV = constant.
- **(b) 1.57 kW:** does not come from the formula and is far too low.
- **(c) 0.26 kW:** what you get if you use 17 instead of 290 K. Always convert to kelvin.

**Q22. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** The second law of thermodynamics defines: (a) heat (b) work (c) Gibbs function (d) entropy

*Answer: (d) entropy.*

Each law brings in a property. The zeroth law gives temperature, the first law gives internal energy, and the second law gives entropy, through the Clausius inequality ∮δQ/T ≤ 0.

- **(a) heat and (b) work:** these are energy crossing a boundary. They are used in the first law, but no law defines them as properties.
- **(c) Gibbs function:** G = H − TS is built from enthalpy, temperature and entropy after entropy has been defined.

**Memory aid:** zeroth law, T. First law, U. Second law, S.

**Q23. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 6.** For a given set of operating pressure limits of a Rankine cycle, the highest efficiency occurs for the: (a) superheated cycle (b) saturated cycle (c) reheat cycle (d) regenerative cycle

*Answer: (d) regenerative cycle.*

Regeneration bleeds some steam from the turbine to preheat the feed water. The water enters the boiler already hot, so the average temperature at which heat is added goes up and the cycle comes closer to Carnot. With enough feed heaters, an ideal regenerative cycle on saturated steam reaches the Carnot efficiency between the same temperatures.

- **(a) superheated:** raises efficiency a little and makes the turbine exhaust drier, but at the same pressure limits regeneration gains more.
- **(b) saturated:** the basic cycle, the lowest of the four.
- **(c) reheat:** its main job is to keep the steam dry in the last turbine stages. The efficiency gain is small.

**Q24. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 4.** Which of the following statements is true about hit and miss governing? (a) This method of governing requires a heavier flywheel (b) In this method of governing, none of the cycles should be idle throughout the running of the engine (c) It increases the efficiency of the engine (d) It is a suitable governing method for heavy IC engines

*Answer: (a).*

When the speed rises above the set value, the governor cuts the fuel and the engine skips whole power strokes (a "miss"). When the speed falls, it fires normally again (a "hit"). The torque is very uneven, so a heavier flywheel is needed to keep the speed steady.

- **(b):** skipping cycles is the whole method, so idle cycles are certain.
- **(c):** the tricky one. The cycles that do fire run on a full charge, so part-load fuel economy holds up better than with throttling. But the method only stops efficiency from falling. It does not raise it.
- **(d):** it suits small engines. In a heavy engine, skipped strokes would cause large speed swings and vibration.

**Q25. SSC JE Mechanical, 6 December 2025 (Shift 2) · Topic 3.** In the Otto cycle, if the compression ratio is increased from 6 to 8, what will happen to the theoretical efficiency? (a) decrease by 10% (b) remain unchanged (c) increase (d) double

*Answer: (c) increase.*

From the speed toolkit table: r = 6 gives 51.2% and r = 8 gives 56.5%, a rise of about 5 percentage points.

- **(a):** goes the wrong way. Efficiency rises with compression ratio.
- **(b):** Otto efficiency depends only on r and γ, and r has changed.
- **(d):** doubling 51% would be over 100%, which is impossible.

**Doubt: why only 5 points for such a big change in r?** The efficiency curve flattens as r rises, so each extra unit of compression ratio gains less than the one before.

## Mock 3

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 19 questions come from Kerala PSC papers, most of them from the two 2026 AE papers and a few from 2023 and 2025. One each comes from RRB JE, SSC JE and RSMSSB JE, and 3 from other technical papers (RRB ALP, ESE and ISRO). The 2026 papers carry more short numericals than the earlier ones, so this mock has five.

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 1.** The Zeroth law of thermodynamics provides the operational basis for the measurement of: (a) volume (b) enthalpy (c) temperature (d) pressure

*Answer: (c) temperature.*

The Zeroth law says: if bodies A and C are each in thermal equilibrium with a third body B, then A and C are in equilibrium with each other. Make B a thermometer. Touch it to A, then to C. If it reads the same both times, A and C are at the same temperature, even though they never touched. That is what makes a thermometer reading mean something.

- **(a) volume:** measured with lengths. No equilibrium law is needed.
- **(b) enthalpy:** worked out as h = u + pv. No instrument reads it directly.
- **(d) pressure:** measured as force per unit area with a gauge or manometer. That is mechanical equilibrium, not thermal.

**Memory aid:** Zeroth law gives temperature, the first law gives internal energy, and the second law gives entropy.

**Q2. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 4.** Ignition lag in SI engines is reduced if: (a) initial temperature is decreased (b) initial pressure is decreased (c) initial temperature is increased (d) initial temperature and pressure are decreased

*Answer: (c) initial temperature is increased.*

Ignition lag is the short wait between the spark and a clear rise in pressure, while a small flame kernel grows into a flame. It is a chemical preparation time, and chemical reactions speed up sharply as the temperature rises. A hotter charge, and a denser one at higher pressure, catches faster.

- **(a):** a colder charge reacts more slowly, so the lag gets longer.
- **(b):** lower pressure means fewer molecules in each cubic centimetre, so the reactions slow down.
- **(d):** both changes lengthen the lag.

**Doubt: doesn't a long lag help stop knock?** That is a different lag. Knock is avoided when the unburnt end gas takes longer to self-ignite than the flame takes to reach it. Heat shortens both lags, which is why a hot charge helps the spark but also invites knock.

**Q3. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** Identify the high pressure water tube steam boiler working on forced circulation: (a) La Mont boiler (b) Cochran boiler (c) Babcock and Wilcox boiler (d) Scotch marine boiler

*Answer: (a) La Mont boiler.*

In a La Mont boiler, a pump pushes water through the tubes, about 8 to 10 times as much water as the steam produced. Circulation no longer depends on hot water rising and cold water sinking, which gets weak at high pressure because water and steam densities come close. So the boiler can work at high pressure.

- **(b) Cochran:** a vertical fire tube boiler with natural circulation and low pressure.
- **(c) Babcock and Wilcox:** a water tube boiler, but its circulation is natural.
- **(d) Scotch marine:** a fire tube boiler.

**Memory aid:** the forced-circulation, high-pressure boilers are La Mont, Benson, Loeffler and Velox. Benson has no drum at all.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 2.** Heat flows at a rate of 100 kW through a wall in steady state. If the boundary temperatures of the wall are 400 K and 300 K, the rate of entropy generation in W/K is: (a) 44.33 (b) 23.33 (c) 66.66 (d) 83.33

*Answer: (d) 83.33.*

The wall stores nothing in steady state. Heat enters the hot face carrying entropy Q/400 and leaves the cold face carrying Q/300. The same heat leaves at a lower temperature, so it carries out more entropy than it brought in. The difference was created inside the wall:

S\_gen = Q (1/300 − 1/400) = 100,000 × 1/1200 = 83.33 W/K.

- **(a), (b) and (c):** no correct route gives these. If you worked in kW you got 0.0833 kW/K, which is the same 83.33 W/K.

**The trap:** Q/ΔT = 100,000/100 = 1000 is not entropy. Entropy is heat divided by the temperature at which it crosses, taken at each face.

**Q5. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 9.** Wet bulb temperature at 100% relative humidity is: (a) more than dew point temperature (b) same as dew point temperature (c) less than ambient temperature (d) more than ambient temperature

*Answer: (b) same as dew point temperature.*

A wet bulb reads low because water evaporates from its wick and cools it. Saturated air cannot take any more vapour, so nothing evaporates and the wet bulb reads the same as the dry bulb. Saturated air is also already at the point where vapour starts to condense, so its dew point is its own temperature. All three readings are equal.

- **(a):** in unsaturated air the wet bulb does read above the dew point, but at 100% RH the gap is zero.
- **(c):** the wet bulb reads below ambient only when water is evaporating, which needs unsaturated air.
- **(d):** evaporation only cools, so a wet bulb can never read above the dry bulb.

**Memory aid:** dry bulb ≥ wet bulb ≥ dew point, and all three are equal at saturation.

**Q6. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** An engine operates on an ideal air-standard Otto cycle with a compression ratio of 8.5. Taking γ = 1.4, the thermal efficiency of the cycle is: (a) 95% (b) 52.7% (c) 57.5% (d) 48.3%

*Answer: (c) 57.5%.*

η = 1 − 1/8.5^0.4 = 1 − 1/2.355 = 0.575. The quick way uses the speed toolkit table: r = 8 gives 56.5% and r = 9 gives 58.5%, so r = 8.5 must sit near 57.5%. Only (c) is in that gap.

- **(a) 95%:** far too high. An Otto cycle at this compression ratio cannot come near it.
- **(b) 52.7%:** this is the efficiency at r = 6.5.
- **(d) 48.3%:** this is the efficiency at about r = 5.

**Q7. RRB ALP (Mechanic Motor Vehicle), 23 January 2019 (Shift 1) · Topic 5.** The choke in the carburettor is generally used when the engine is: (a) running at high speed (b) to be suddenly accelerated (c) to be cold started (d) idling

*Answer: (c) to be cold started.*

In a cold engine, much of the petrol stays liquid on the cold manifold walls, so the mixture that reaches the cylinder is too lean to fire. The choke is a flap valve above the venturi. Closing it raises the suction at the fuel jet, which draws far more petrol and makes a very rich mixture, so enough of it vaporises to start the engine.

- **(a) high speed:** needs a normal mixture. A closed choke would flood the engine.
- **(b) sudden acceleration:** the accelerating pump handles that by squirting in extra fuel.
- **(d) idling:** the idling jet handles that, below the nearly closed throttle.

**Memory aid:** choke for a cold start, idling jet for idling, accelerating pump for sudden acceleration, and economiser or power jet for full load.

**Q8. RSMSSB JE (Electrical and Mechanical) Diploma, 26 December 2020 · Topic 4.** Friction power of an engine is the: (a) difference between indicated and brake power of an engine (b) difference between indicated and fuel power of an engine (c) difference between indirect and brake power of an engine (d) none of these

*Answer: (a).*

Indicated power is what the gas does on the pistons, worked out from the indicator diagram. Brake power is what reaches the crankshaft, measured with a dynamometer. The difference is lost to piston ring and bearing friction, the valve gear, pumping the gases in and out, and driving the oil pump, water pump and fan. So FP = IP − BP, and mechanical efficiency is BP/IP.

- **(b):** the gap between fuel power and indicated power is heat lost to the exhaust and coolant, not friction.
- **(c):** "indirect power" is not a term. It is there to catch a quick reader.
- **(d):** (a) is correct.

**Doubt: how is friction power found?** By the Willans line for a diesel engine, the Morse test for a multi-cylinder engine, or by motoring the engine with an electric motor. Level 1 covers all three.

**Q9. ESE Mechanical 2016 (Paper 1) · Topic 7.** Supersaturated flow occurs in a steam nozzle due to delay in: (a) throttling (b) condensation (c) evaporation (d) entropy drop

*Answer: (b) condensation.*

Steam crosses the saturation line inside a nozzle in a tiny fraction of a second. Droplets need time and tiny particles to form on, so the steam carries on as dry vapour below its saturation temperature. It is then supersaturated, or supercooled. Condensation finally starts all at once near the Wilson line, at about 97% dryness. The results: the heat drop is a little smaller, the steam leaves slightly drier, and more mass flows, because the vapour is denser than it would be in equilibrium.

- **(a) throttling:** the constant-enthalpy drop through a valve. It has nothing to do with this.
- **(c) evaporation:** expanding steam cools and should condense. Evaporation would need heat added.
- **(d) entropy drop:** an ideal nozzle has no entropy drop. Supersaturation in fact raises entropy slightly.

**Memory aid:** supersaturated means condensation is late.

**Q10. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 1.** A gas mixture expands from 0.03 m³ to 0.06 m³ at a constant pressure of 1 MPa and absorbs 84 kJ of heat during the expansion. The change in its internal energy is: (a) 84 kJ (b) 114 kJ (c) 54 kJ (d) 30 kJ

*Answer: (c) 54 kJ.*

Work done by the gas: W = pΔV = 1000 kPa × 0.03 m³ = 30 kJ. Then ΔU = Q − W = 84 − 30 = 54 kJ. Part of the heat raised the internal energy and the rest pushed the boundary out.

- **(a) 84 kJ:** ignores the work. That holds only at constant volume.
- **(b) 114 kJ:** adds the work instead of taking it away, a sign slip.
- **(d) 30 kJ:** that is the work, not the change in internal energy.

**Unit tip:** kPa × m³ = kJ, and 1 MPa = 1000 kPa.

**Q11. SSC JE Mechanical, 28 October 2020 (evening) · Topic 8.** An after-cooler provided in reciprocating compressors performs the function of: (a) reducing the temperature of compressed air (b) removal of moisture from compressed air (c) removal of impurities from compressed air (d) reducing the volume of compressed air

*Answer: (a) reducing the temperature of compressed air.*

An after-cooler is a heat exchanger after the last stage. An intercooler sits between stages. Air leaves a compressor hot, often well above 100°C. The after-cooler brings it down near room temperature, which protects the pipes and tools downstream.

- **(b):** as the air cools, water vapour condenses and is drained off. That is a result of the cooling, so it is not the device's function.
- **(c):** filters remove dust and oil.
- **(d):** cooling at constant pressure does shrink the volume, but that is a side effect, not the purpose.

**Doubt: what is the intercooler for, then?** It cools the air between stages so the next stage has less work to do. The after-cooler saves no compressor work, because compression is already over.

**Q12. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 2.** In a Carnot cycle, the process carried out at extremely high speed is: (a) isothermal expansion (b) adiabatic expansion (c) isothermal compression (d) all of the above

*Answer: (b) adiabatic expansion.*

The two isothermal processes need heat to flow through the cylinder wall across an almost zero temperature difference, so they must run very slowly. The two adiabatic processes must allow no heat flow at all, so in a real cylinder they must run very fast, before heat has time to leak. Of the options, only adiabatic expansion is a fast one. Adiabatic compression is the other, but it is not listed.

- **(a) and (c):** the isothermal processes are the slow ones.
- **(d):** the cycle needs both slow and fast processes, so they cannot all be fast.

**Doubt: is this why no one builds a Carnot engine?** Partly. One cylinder would need very slow and very fast strokes in the same cycle. The p-v diagram is also very thin, so a long piston travel gives little net work.

**Q13. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 6.** A certain mass of wet steam consists of m\_s kg of dry steam and m\_w kg of water. The quality of the steam is: (a) m\_s/(m\_s + m\_w) (b) m\_w/(m\_s + m\_w) (c) m\_s/m\_w (d) m\_w/m\_s

*Answer: (a) m\_s/(m\_s + m\_w).*

Quality, or dryness fraction, is the mass of dry steam divided by the total mass of the mixture. It runs from 0 for saturated water to 1 for dry saturated steam. For example, 0.9 kg of steam mixed with 0.1 kg of water has a quality of 0.9. (The paper says "water vapour" for m\_w; it means the liquid water in the mixture.)

- **(b):** this is the wetness fraction, 1 − x.
- **(c) and (d):** these compare the two parts with each other, not with the whole, and can come out above 1.

**Q14. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 4.** The Highest Useful Compression Ratio (HUCR) of an engine is: (a) the critical compression ratio at which the engine gives maximum output (b) the compression ratio at which the engine can be run (c) the critical compression ratio at which a fuel can be used without detonation in a test engine (d) the highest compression ratio at which maximum heat of combustion occurs

*Answer: (c).*

HUCR rates a fuel, not an engine. The fuel runs in a test engine whose compression ratio can be changed, such as the Ricardo variable compression engine. The ratio is raised step by step under fixed conditions until knock just starts. The highest ratio that runs without knock is that fuel's HUCR. A fuel with a higher HUCR resists knock better, so an engine built for it can use a higher compression ratio and get more efficiency.

- **(a):** maximum output depends on many things. HUCR is only about knock.
- **(b):** an engine can run at many compression ratios. This says nothing about knock or fuel.
- **(d):** the heat of combustion is fixed by the fuel. The compression ratio does not change it.

**Link:** the octane number is the other way to rate an SI fuel against knock. It compares the fuel with a blend of iso-octane and normal heptane.

**Q15. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 3.** A closed-cycle gas turbine works on the: (a) Joule cycle (b) Ericsson cycle (c) Carnot cycle (d) Rankine cycle

*Answer: (a) Joule cycle.*

The Joule cycle, also called the Brayton cycle, has isentropic compression, heat addition at constant pressure, isentropic expansion and heat rejection at constant pressure. In a closed cycle the same air, or helium, goes round and round. It takes in heat through a heat exchanger from an outside source and gives up heat in a cooler before it returns to the compressor.

- **(b) Ericsson:** two isothermal and two constant-pressure processes. A gas turbine only tends towards it with endless stages of intercooling and reheating plus a regenerator.
- **(c) Carnot:** the ideal limit, but no gas turbine runs on it.
- **(d) Rankine:** the vapour cycle of a steam plant, where the water boils and condenses.

**Q16. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 1.** The maximum possible number of specific heats that a perfect gas could have is: (a) 2 (b) 3 (c) 4 (d) infinity

*Answer: (d) infinity.*

Specific heat is the heat needed per kg for each degree of temperature rise, and that depends on the process. For a polytropic process pvⁿ = constant, the specific heat is c\_n = c\_v (n − γ)/(n − 1). Every value of n gives a different specific heat:

- n = 0 (constant pressure) gives c\_p.
- n = ∞ (constant volume) gives c\_v.
- n = γ (adiabatic) gives 0, because no heat flows.
- n = 1 (isothermal) gives infinity, because heat flows with no temperature change.

Since n can take any value, so can the specific heat.

- **(a) 2:** c\_p and c\_v are just the two that tables list.
- **(b) 3 and (c) 4:** no special meaning.

**Doubt: can a specific heat be negative?** Yes, for n between 1 and γ. Heat goes in, yet the temperature falls, because the gas does more work than the heat it receives.

**Q17. RRB JE CBT-1, 28 May 2019 (Shift 2) · Topic 10.** What is the unit of calorific value of a fuel? (a) kJ/kg (b) J/kg K (c) MJ/mg K (d) kW/mg

*Answer: (a) kJ/kg.*

Calorific value is the heat released when a unit amount of fuel burns completely. For solid and liquid fuels that amount is 1 kg, so the unit is kJ/kg. Petrol gives about 44,000 kJ/kg. Gaseous fuels are often quoted per cubic metre instead, in kJ/m³.

- **(b) J/kg K:** the unit of specific heat, gas constant and specific entropy.
- **(c) MJ/mg K:** again per kelvin, a specific-heat type of unit at an odd scale.
- **(d) kW/mg:** power per mass, a rate rather than an amount of energy.

**The trap:** any unit with K in it is wrong. Calorific value is not per degree of temperature change.

**Q18. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 6.** The steam engine part which guides the motion of the piston rod and prevents it from bending is called the: (a) crankshaft (b) cross head (c) valve rod (d) eccentric

*Answer: (b) cross head.*

In a steam engine, the piston rod comes out through a gland and joins the connecting rod at the cross head, which slides in straight guides. The connecting rod swings at an angle and pushes sideways. The cross head takes that side push on its guides, so the piston rod moves in a straight line and does not bend.

- **(a) crankshaft:** turns the to-and-fro motion into rotation.
- **(c) valve rod:** moves the slide valve.
- **(d) eccentric:** a disc on the crankshaft, set off-centre, that drives the slide valve.

**Doubt: why do car engines have no cross head?** Their pistons are joined straight to the connecting rod, so the cylinder wall takes the side push through the piston skirt. Large marine two-stroke diesels do use cross heads.

**Q19. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 8.** The most efficient process of compression is: (a) adiabatic (b) isothermal (c) isentropic (d) none of the above

*Answer: (b) isothermal.*

On a p-v diagram, the work to compress and deliver air is the area to the left of the compression curve. The isothermal curve encloses the least area. If heat is removed as the air is squeezed, it stays cool and takes up less volume, so each stroke needs less work. That is why isothermal efficiency, isothermal work divided by actual work, is the yardstick for reciprocating compressors.

- **(a) adiabatic and (c) isentropic:** for an ideal compressor these are the same curve. The air gets hot, its volume stays larger, and the work is the most. Two options naming one process is a hint that both are wrong.
- **(d):** isothermal is the best.

**Doubt: can a compressor really be isothermal?** Not fully. Slow running, water jackets, water spray and intercooling between stages all bring it closer.

**Q20. ISRO IPRC Technical Assistant (Mechanical), 21 April 2016 · Topic 4.** An IC engine develops an indicated power of 150 kW. If the mechanical efficiency of the engine is 80%, the brake power delivered is: (a) 187.5 kW (b) 120 kW (c) 200 kW (d) 180 kW

*Answer: (b) 120 kW.*

BP = η\_m × IP = 0.8 × 150 = 120 kW. The other 30 kW is friction power.

- **(a) 187.5 kW:** comes from dividing, 150/0.8. That would make brake power bigger than indicated power.
- **(c) 200 kW and (d) 180 kW:** also bigger than the indicated power.

**Elimination:** brake power can never be more than indicated power. Three options are above 150 kW, so (b) is the only one left before you calculate anything.

**Q21. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** The area under the temperature–entropy curve for any thermodynamic process represents: (a) heat absorbed or rejected (b) efficiency (c) work done (d) none of the above

*Answer: (a) heat absorbed or rejected.*

For a reversible process dQ = T dS, so the heat is ∫T dS, the area under the T-s curve. Moving to the right (entropy rising) means heat is absorbed. Moving to the left means heat is rejected. It is the partner of the p-v diagram, where the area under the curve is the work.

- **(b) efficiency:** a ratio, not an area.
- **(c) work done:** that is the area under a p-v curve. On a T-s diagram, only the area enclosed by a complete cycle equals the net work, because over a cycle net heat equals net work.
- **(d):** (a) is correct.

**Doubt: is it really true for any process?** Strictly, only for a reversible one. With friction, T dS is larger than the heat that actually flows, so the area overstates it.

**Q22. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 7.** An adiabatic nozzle receives air at 300 kPa, 227°C and 10 m/s through an inlet area of 80 cm². The air leaves the nozzle at a pressure of 100 kPa and a speed of 180 m/s. If cp = 1008 J/kg K, the exit temperature of the air is: (a) 211°C (b) 243°C (c) 195°C (d) 259°C

*Answer: (a) 211°C.*

The steady-flow energy equation for a nozzle with no heat or work is h₁ + V₁²/2 = h₂ + V₂²/2. So cp (T₁ − T₂) = (V₂² − V₁²)/2 = (32,400 − 100)/2 = 16,150 J/kg. The temperature drop is 16,150/1008 = 16 K, so T₂ = 227 − 16 = 211°C.

- **(b) 243°C:** adds the 16 K instead of subtracting it. Air that speeds up must cool.
- **(c) 195°C:** a 32 K drop, from forgetting the ½ in V²/2.
- **(d) 259°C:** both slips together.

**The trap:** the inlet area and the two pressures are not needed for this part. Pick out only what the energy equation uses.

**Q23. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 9.** The refrigerant R717 stands for: (a) SO₂ (b) NH₃ (c) methyl chloride (d) CO₂

*Answer: (b) NH₃.*

Inorganic refrigerants are numbered 700 plus their molar mass. Ammonia, NH₃, has a molar mass of 14 + 3 = 17, so it is R717. In the same way water is R718, air is R729 and carbon dioxide is R744.

- **(a) SO₂:** molar mass 64, so R764.
- **(c) methyl chloride:** an organic refrigerant, R40, numbered by a different rule.
- **(d) CO₂:** molar mass 44, so R744.

**Memory aid:** a 7 in front means inorganic. The rest of the number is the molar mass.

**Q24. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 5.** Too high pressure in diesel injectors is due to: (a) spring rate too low (b) scoring or pitting on needle seat (c) needle valve seized in almost closed position (d) spring broken

*Answer: (c) needle valve seized in almost closed position.*

A spring holds the injector needle on its seat, and fuel pressure lifts it at the set opening pressure. If the needle sticks almost shut, fuel cannot get out freely, the pump keeps pushing, and the pressure climbs far above normal.

- **(a) spring too weak:** the needle lifts early, so the opening pressure is too low.
- **(b) pitted needle seat:** fuel leaks and dribbles, so pressure cannot build and the spray is poor.
- **(d) broken spring:** nothing holds the needle down, so the pressure is very low.

**Memory aid:** spring faults and seat damage lower the pressure. A stuck needle raises it.

**Q25. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 3.** The efficiency of the Diesel cycle approaches the Otto cycle efficiency with: (a) increase in cut-off (b) decrease in cut-off (c) zero cut-off (d) constant cut-off

*Answer: (b) decrease in cut-off.*

For the same compression ratio, the Diesel formula is the Otto one with its loss term, 1/r^(γ−1), multiplied by a factor (ρ^γ − 1)/(γ(ρ − 1)), where ρ is the cut-off ratio. That factor is above 1 whenever ρ is above 1, so Diesel loses more, and it falls to 1 as ρ falls to 1. So the earlier the cut-off, the closer Diesel gets to Otto.

- **(a) increase in cut-off:** a longer cut-off lowers Diesel efficiency, moving it further from Otto.
- **(c) zero cut-off:** the tempting one. At zero cut-off no heat is added at all, so there is no cycle left to compare. It is only the limit. The commission's final key gives (b), because "approaches" describes the trend.
- **(d) constant cut-off:** keeps a fixed gap between the two.

**Memory aid:** a Diesel cycle with a very short cut-off behaves like an Otto cycle. Level 1 shows the same idea for the dual cycle.

## Mock 4

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 20 questions come from Kerala PSC papers (2025 and 2026), 2 from SSC JE and 3 from other technical papers (MPSC, ISRO and RPSC). Like Mock 3, it has more short numericals than Mocks 1 and 2: six. Take it at least a day after Mock 3.

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 1.** Which of the following is considered an extensive property? (a) pressure (b) density (c) volume (d) temperature

*Answer: (c) volume.*

An extensive property depends on how much matter there is. An intensive one does not. The quick test: cut the system in half. The volume of each half is half the original, so volume is extensive. Pressure, temperature and density stay the same in each half, so they are intensive.

- **(a) pressure:** the same in both halves.
- **(b) density:** mass and volume both halve, so their ratio stays the same.
- **(d) temperature:** the same in both halves.

**The trap:** one extensive property divided by another is intensive. Density, specific volume and specific enthalpy are all intensive, even though each is built from extensive ones.

**Q2. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 4.** Lower delay period is obtained by: (a) use of higher cetane number fuel (b) using lower cetane fuel (c) higher self-ignition temperature fuel (d) decrease in injection pressure

*Answer: (a) use of higher cetane number fuel.*

The delay period in a CI engine is the time from the start of injection to the start of burning. The cetane number measures how readily a diesel fuel lights by itself in hot air. A high-cetane fuel lights quickly, so less fuel piles up before burning starts, and the engine runs more smoothly with less diesel knock.

- **(b) lower cetane fuel:** lights more slowly, so the delay is longer.
- **(c) higher self-ignition temperature:** the fuel needs hotter air before it lights, so it waits longer. A good CI fuel has a low self-ignition temperature.
- **(d) lower injection pressure:** gives bigger droplets, which take longer to evaporate and mix, so the delay is longer.

**Memory aid:** SI and CI fuels want opposite things. SI fuel needs a high octane number and a high self-ignition temperature, so it resists lighting by itself. CI fuel needs a high cetane number and a low self-ignition temperature, so it lights by itself readily.

**Q3. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** Name the device used for preheating the feed water by utilizing the heat of waste flue gases: (a) economiser (b) superheater (c) feed pipe (d) anti-priming pipe

*Answer: (a) economiser.*

An economiser is a bank of tubes in the flue gas path after the boiler. Feed water passes through it and picks up heat that would otherwise go up the chimney. That saves fuel, and the warmer feed water also puts less thermal stress on the boiler.

- **(b) superheater:** heats the steam, not the water, above its saturation temperature.
- **(c) feed pipe:** only carries the water into the boiler.
- **(d) anti-priming pipe:** sits inside the drum and separates water droplets from the steam before it leaves.

**Memory aid:** the economiser heats the feed water and the air preheater heats the combustion air. Both use flue gas after the boiler.

**Q4. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 2.** A reversible power cycle operates between temperature limits of 800 K and 300 K. If the cycle receives 400 kJ of heat, the amount of unavailable work in kJ is: (a) 150 (b) 280 (c) 120 (d) 220

*Answer: (a) 150.*

A reversible cycle has the Carnot efficiency, 1 − 300/800 = 0.625. So 0.625 × 400 = 250 kJ becomes work. The rest, 400 × 300/800 = 150 kJ, must be rejected to the sink at 300 K even in a perfect engine. That is the unavailable part.

- **(b), (c) and (d):** none of these comes from the Carnot split. The available part, 250 kJ, is not offered either, so the answer has to be the rejected part.

**Cross-check:** unavailable energy = T₀ × ΔS. Here ΔS = 400/800 = 0.5 kJ/K, and 300 × 0.5 = 150 kJ.

**Q5. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 9.** A refrigeration system's condenser rejects heat at a rate of 120 kW, and its compressor uses 30 kW of power. The system's coefficient of performance (COP) is: (a) 4 (b) 0.25 (c) 3 (d) 2

*Answer: (c) 3.*

The condenser throws out the heat taken from the cold space plus the compressor work. So the refrigerating effect is 120 − 30 = 90 kW, and COP = 90/30 = 3.

- **(a) 4:** 120/30 is the COP of the same machine used as a heat pump. It is always 1 more than the refrigerator COP.
- **(b) 0.25:** 30/120, upside down.
- **(d) 2:** no correct route gives this.

**The trap:** the condenser heat is not the refrigerating effect. Take away the work first.

**Q6. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** For the same compression ratio, the Otto cycle efficiency η for working fluids having compression index n = 1.3, 1.4 and 1.67 can be related as: (a) η at 1.67 > η at 1.4 > η at 1.3 (b) η at 1.67 < η at 1.4 < η at 1.3 (c) η at 1.67 = η at 1.4 = η at 1.3 (d) no change in the efficiency

*Answer: (a).*

η = 1 − 1/r^(n−1). A bigger index makes r^(n−1) bigger, so the part taken away from 1 gets smaller and the efficiency rises. At r = 8: n = 1.3 gives about 46%, n = 1.4 gives 56.5%, and n = 1.67 (a gas like helium or argon) gives about 75%.

- **(b):** the order turned around.
- **(c) and (d):** these say the same thing. It would hold only if the efficiency did not depend on the index, but it does.

**The trap:** when two options mean the same thing in a one-answer question, both are wrong.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 5.** The relative density of a lead-acid battery, tested with a hydrometer, reads 1.110. This means the battery is: (a) fully charged (b) partially discharged (c) fully discharged (d) three-fourth charged

*Answer: (c) fully discharged.*

The liquid in a lead-acid battery is dilute sulphuric acid. As the battery discharges, the acid joins the plates to form lead sulphate and leaves water behind, so the liquid gets thinner. A fully charged cell reads about 1.26 to 1.28. A fully discharged one reads about 1.11 to 1.12, so 1.110 is at the bottom.

- **(a) fully charged:** about 1.28.
- **(b) partially discharged:** somewhere in between, around 1.15 to 1.25.
- **(d) three-fourth charged:** about 1.23.

**Memory aid:** the denser the acid, the more charge is left.

**Q8. MPSC Assistant Motor Vehicle Inspector 2017 (Paper 1) · Topic 4.** The ratio of brake power output to the fuel energy input per unit time is called: (a) volumetric efficiency (b) thermal efficiency (c) mechanical efficiency (d) relative efficiency

*Answer: (b) thermal efficiency.*

Brake thermal efficiency = BP/(m\_f × CV), where m\_f is the fuel used in kg/s and CV is its calorific value in kJ/kg. It tells you what share of the fuel's energy reaches the shaft: roughly 25 to 30% for a petrol engine and 30 to 40% for a diesel. Indicated thermal efficiency uses IP in place of BP.

- **(a) volumetric efficiency:** air actually drawn in divided by the swept volume. It is about breathing, not energy.
- **(c) mechanical efficiency:** BP/IP.
- **(d) relative efficiency:** the actual thermal efficiency divided by the air standard efficiency.

**Link:** brake thermal efficiency = mechanical efficiency × indicated thermal efficiency.

**Q9. SSC JE Mechanical, 9 October 2023 (Shift 2, Paper I) · Topic 7.** Which of the following turbines has a 50% degree of reaction? (a) Curtis turbine (b) Hero's turbine (c) Rateau turbine (d) Parsons turbine

*Answer: (d) Parsons turbine.*

Degree of reaction is the heat drop in the moving blades divided by the heat drop in the whole stage. A Parsons turbine uses fixed and moving blades of the same shape, mirror images of each other, so the drop splits equally between them: 50%. Its velocity triangles are symmetrical.

- **(a) Curtis:** a velocity-compounded impulse turbine. All the drop is in the nozzles, so its reaction is about zero.
- **(b) Hero's:** a pure reaction turbine, where steam jets out of the spinning sphere itself. Its reaction is 100%.
- **(c) Rateau:** a pressure-compounded impulse turbine, again with zero reaction.

**Memory aid:** De Laval is simple impulse, Curtis is velocity compounded, Rateau is pressure compounded, and Parsons is 50% reaction.

**Q10. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 1.** The Clausius–Clapeyron equation is used to determine the slope of a curve on which type of thermodynamic diagram? (a) P-V diagram (b) P-h diagram (c) T-S diagram (d) P-T diagram

*Answer: (d) P-T diagram.*

The equation is dp/dT = h\_fg/(T v\_fg). It gives the slope of the boiling curve on a pressure–temperature diagram, linking how the boiling pressure changes with temperature to the latent heat. A pressure cooker uses this curve: at about 2 bar, water boils near 120°C.

- **(a) P-V:** boiling at constant pressure shows as a flat line under a dome.
- **(b) P-h:** the refrigeration chart, where evaporation and condensation are flat lines.
- **(c) T-S:** boiling is a flat line at the saturation temperature.

**Doubt: why only P-T?** On a p-T diagram the whole wet region shrinks to a single line, because each pressure has only one boiling temperature. The equation gives the slope of that line.

**Q11. ISRO VSSC Technical Assistant (Mechanical), 8 February 2015 · Topic 8.** For maximum efficiency in a multi-stage compressor: (a) air should be cooled to initial temperature between the stages (b) pressure ratio for each stage should be the same (c) work done for each stage should be the same (d) all of the above

*Answer: (d) all of the above.*

These three go together for the least total work. Cooling the air back to its starting temperature between stages is called perfect intercooling. With perfect intercooling, the total work is least when every stage has the same pressure ratio. With the same inlet temperature and the same ratio, every stage then does the same work. For two stages from 1 bar to 9 bar, the intercooler works at √(1 × 9) = 3 bar, a ratio of 3 in each stage.

- **(a), (b) and (c) on their own:** each is true, but each is only part of the answer.

**Q12. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 2.** Which one of the following pairs best expresses a relationship similar to that expressed in the pair 'pressure–volume' for a thermodynamic system undergoing a process? (a) enthalpy–entropy (b) pressure–entropy (c) pressure–temperature (d) temperature–entropy

*Answer: (d) temperature–entropy.*

In a reversible process, work = ∫p dV and heat = ∫T dS. Pressure drives work as volume changes, and temperature drives heat as entropy changes. So temperature–entropy plays the same part for heat that pressure–volume plays for work, and the area under each diagram is an amount of energy.

- **(a) enthalpy–entropy:** the Mollier chart, very useful for steam, but the area under it means nothing as heat or work.
- **(b) pressure–entropy:** not a pair that goes together in this way.
- **(c) pressure–temperature:** both are intensive. Together they make the phase diagram from Q10.

**Memory aid:** work is p dV and heat is T dS.

**Q13. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** In a tandem type compound steam engine, the high pressure and low pressure cylinders: (a) are set at 90° (b) have separate piston rods (c) have a common piston rod (d) are set in a V arrangement

*Answer: (c) have a common piston rod.*

A compound engine expands the steam in two steps, first in a small high pressure cylinder and then in a larger low pressure one. In the tandem type the two cylinders sit in a line, one behind the other, and both pistons are on one piston rod driving one crank.

- **(a) set at 90°:** the receiver type, whose two cranks are 90° apart with a steam receiver between the cylinders.
- **(b) separate piston rods:** the Woolf and receiver types, which have two rods and two cranks.
- **(d) V arrangement:** a layout for IC engine cylinders, not a type of compound steam engine.

**Memory aid:** tandem means one behind the other, like a tandem bicycle: one rod, one crank.

**Q14. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 4.** A crank angle of 18° is required for the injection of fuel in a four-stroke diesel engine running at 2000 rpm. The injection duration in milliseconds is: (a) 0.75 ms (b) 1.5 ms (c) 3 ms (d) 1.25 ms

*Answer: (b) 1.5 ms.*

At 2000 rpm the crank turns 2000 × 360 = 720,000° a minute, or 12,000° a second. So 18° takes 18/12,000 = 0.0015 s = 1.5 ms. That is how little time the fuel has to spray, mix and light.

- **(a) 0.75 ms:** half the right value.
- **(c) 3 ms:** double, as if the 18° were measured on the camshaft, which turns at half the crank speed.
- **(d) 1.25 ms:** no correct route gives this.

**The trap:** "four-stroke" tempts you to halve or double something. A crank angle is measured on the crankshaft, which turns at the full 2000 rpm.

**Q15. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 3.** The work output of the theoretical Otto cycle: (a) increases with increase in compression ratio (b) increases with increase in pressure ratio (c) increases with increase in adiabatic index (d) all of the above

*Answer: (d) all of the above.*

Work output = efficiency × heat supplied. A higher compression ratio raises the efficiency, so the same heat gives more work. A higher pressure ratio (peak pressure divided by the pressure after compression) means more heat is added at constant volume, so there is more to convert. A higher adiabatic index also raises the efficiency, as Q6 showed.

- **(a), (b) and (c) on their own:** each is true, so the answer is all of them.

**Doubt: does a higher pressure ratio raise Otto efficiency too?** No. Otto efficiency depends only on the compression ratio and γ. The pressure ratio raises the work because more heat goes in, not because the heat is used better.

**Q16. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 1.** The change in Gibbs energy for vaporization of a pure substance is: (a) positive (b) negative (c) may be positive or negative (d) zero

*Answer: (d) zero.*

Gibbs energy is G = H − TS. Boiling happens at a fixed temperature and pressure, and the entropy gained is the latent heat divided by that temperature: s\_fg = h\_fg/T. So Δg = h\_fg − T × (h\_fg/T) = 0. Liquid and vapour can sit together in equilibrium only because their Gibbs energies are equal.

- **(a) positive:** the change from liquid to vapour would then go uphill, so the liquid would be the stable phase. That happens below the boiling point, not during boiling.
- **(b) negative:** the vapour would be the stable phase, which happens above the boiling point.
- **(c):** only away from the boiling curve. During vaporisation the change is exactly zero.

**Memory aid:** at a phase change, Δh and TΔs are equal, so Δg = 0. The Clausius–Clapeyron equation from Q10 is built on this.

**Q17. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 10.** A fuel consists of 85% carbon, 12.5% hydrogen and 2.5% residual matter by mass. What is the higher calorific value of the fuel? (a) 4,673 kJ/kg (b) 46,730 kJ/kg (c) 28,730 kJ/kg (d) 4,673,000 J/g

*Answer: (b) 46,730 kJ/kg.*

Dulong's formula, with mass fractions, is HCV = 33,800 C + 144,000 (H − O/8) + 9,270 S kJ/kg. This fuel has no oxygen or sulphur, so HCV = 33,800 × 0.85 + 144,000 × 0.125 = 28,730 + 18,000 = 46,730 kJ/kg. That fits a petroleum fuel, which gives about 44,000 to 47,000 kJ/kg.

- **(a) 4,673 kJ/kg:** ten times too small.
- **(c) 28,730 kJ/kg:** carbon alone, forgetting the hydrogen. The paper printed option (c) the same as (a), so it is replaced here with this common slip.
- **(d) 4,673,000 J/g:** 1 J/g is 1 kJ/kg, so this is 100 times too big.

**Doubt: why is hydrogen's number so much bigger?** Each kilogram of hydrogen gives about four times the heat of a kilogram of carbon. Books round the constants a little differently (33,800 or 33,820, 144,000 or 144,200), but the answer comes out near 46,700 either way.

**Q18. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** The device used to control the flow of steam from the boiler to the main steam pipe is the: (a) blow off cock (b) steam stop valve (c) feed check valve (d) spring loaded safety valve

*Answer: (b) steam stop valve.*

The stop valve sits at the highest part of the boiler. It opens, shuts or throttles the steam going to the main pipe, and it lets one boiler be cut off from others sharing the same main.

- **(a) blow off cock:** at the lowest point. It drains water and the sludge that settles out.
- **(c) feed check valve:** lets feed water into the boiler but stops it flowing back when the pump stops.
- **(d) safety valve:** lets steam out by itself when the pressure goes above the set limit. It does not control the normal supply.

**Memory aid:** all four are mountings, needed for safe working. Accessories such as the economiser from Q3 are there to raise efficiency.

**Q19. SSC JE Mechanical, 4 December 2023 (Paper II) · Topic 8.** A single-stage reciprocating air compressor compresses 1 kg of air from 1 bar to 4 bar, starting at 27°C. W is the isothermal work, W\_poly the polytropic work with pv^1.2 = constant, and W\_isen the isentropic work. Select the correct option: (a) W > W\_poly > W\_isen (b) W < W\_isen < W\_poly (c) W < W\_poly < W\_isen (d) W > W\_isen > W\_poly

*Answer: (c) W < W\_poly < W\_isen.*

Compressor work grows with the index n, because a higher index means the air gets hotter and takes up more room as it is squeezed. Isothermal has n = 1, the polytropic process has n = 1.2 and isentropic has n = 1.4. Worked out, the three are about 119 kJ, 134 kJ and 146 kJ. You need no calculation: just put them in order of n.

- **(a) and (d):** put isothermal at the top, which is the reverse of the truth.
- **(b):** puts isentropic below polytropic, the wrong order of n.

**Q20. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 4.** A 40 kW engine running at rated rpm has a mechanical efficiency of 80%. What is its approximate mechanical efficiency at half rated load? (a) 40% (b) 32% (c) 66% (d) 50%

*Answer: (c) 66%.*

At rated load, BP = 40 kW, so IP = 40/0.8 = 50 kW and friction power = 10 kW. Friction power depends mainly on speed, so at the same rpm it stays 10 kW. At half load, BP = 20 kW, IP = 20 + 10 = 30 kW, and mechanical efficiency = 20/30 = 66.7%.

- **(a) 40%:** halves the efficiency along with the load.
- **(b) 32% and (d) 50%:** no correct route gives these.

**Key idea:** mechanical efficiency falls at part load because friction stays the same while the useful output shrinks. At no load it is zero.

**Q21. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 2.** The law which indicates the limit of converting heat into work is the: (a) first law of thermodynamics (b) second law of thermodynamics (c) third law of thermodynamics (d) zeroth law of thermodynamics

*Answer: (b) second law of thermodynamics.*

The first law only says energy is conserved: work out cannot be more than heat in. It would allow 100% conversion. The second law, in the Kelvin–Planck form, says no engine working in a cycle can turn all the heat it takes in into work. Some must be rejected to a colder sink, and the Carnot efficiency 1 − T₂/T₁ is the best possible.

- **(a) first law:** keeps the energy accounts but sets no limit below 100%.
- **(c) third law:** about entropy at absolute zero.
- **(d) zeroth law:** the basis of temperature measurement.

**Q22. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2 · Topic 7.** A single stage impulse turbine of 1.2 m diameter runs at 1000 rpm and has a blade speed ratio of 0.32. The approximate inlet steam velocity is: (a) 20 m/s (b) 65 m/s (c) 200 m/s (d) 375 m/s

*Answer: (c) 200 m/s.*

Blade speed u = πDN/60 = π × 1.2 × 1000/60 = 62.8 m/s. Blade speed ratio = u/V₁, so V₁ = 62.8/0.32 = 196 m/s, about 200 m/s.

- **(a) 20 m/s:** multiplies 62.8 by 0.32 instead of dividing.
- **(b) 65 m/s:** about the blade speed itself, not the steam speed.
- **(d) 375 m/s:** no correct route gives this.

**Memory aid:** the steam must move faster than the blades. The best blade speed ratio for a single-stage impulse turbine is cos α/2, about 0.45 to 0.47 for usual nozzle angles.

**Q23. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 9.** When the temperature of water in a spray washing system is much higher than the dry bulb temperature of the air entering the system, the process that takes place is: (a) heating and humidification (b) sensible heating (c) humidification (d) heating and dehumidification

*Answer: (a) heating and humidification.*

The water is hotter than the air, so heat flows into the air and its dry bulb temperature rises. The warm water also evaporates into the air, so its moisture content rises. Both happen together.

- **(b) sensible heating:** a change of temperature only, with no change of moisture. That needs a dry heating coil.
- **(c) humidification:** only half the story. The air gains moisture, but its temperature rises too.
- **(d) heating and dehumidification:** taking moisture out needs a surface colder than the air's dew point, or a chemical that absorbs water. Hot water does neither.

**Memory aid:** compare the spray water temperature with the air's dry bulb temperature to tell heating from cooling, and with its dew point to tell humidifying from drying.

**Q24. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 5.** The best economy fuel-air ratio: (a) increases with engine speed (b) decreases with engine speed (c) is proportional to engine speed (d) is independent of engine speed

*Answer: (d) is independent of engine speed.*

Test an SI engine at a fixed throttle and plot fuel used per kWh against the fuel-air ratio at several speeds. The lowest point of each curve, the best economy mixture, falls at about the same slightly lean ratio every time. The curves move up or down with speed, but their lowest points hardly move sideways. The best power mixture behaves the same way.

- **(a), (b) and (c):** each says the best economy mixture moves with speed, which the tests do not show.

**Memory aid:** best power is rich, about 12.5 : 1 air to fuel. Chemically correct is about 14.7 : 1. Best economy is lean, about 16 : 1.

**Q25. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** The expression 1 − 1/r^(γ−1), where r is the compression ratio and γ is the ratio of the two specific heats, denotes which efficiency of an IC engine? (a) mechanical efficiency (b) air standard efficiency (c) volumetric efficiency (d) relative efficiency

*Answer: (b) air standard efficiency.*

This is the Otto cycle efficiency, worked out with air as a perfect gas with constant specific heats and with no friction or heat loss. It depends only on r and γ, and it is the ceiling a real SI engine is measured against. At r = 8 it is 56.5%.

- **(a) mechanical efficiency:** BP/IP.
- **(c) volumetric efficiency:** air actually drawn in divided by the swept volume.
- **(d) relative efficiency:** the engine's actual thermal efficiency divided by this air standard efficiency.

## Sources

Every question comes from a real paper. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys. All the other questions come from Testbook solution pages, which name the paper each question appeared in. Their answers were checked against standard textbook reasoning. Question numbers below are the numbers in this guide, not in the original papers. Where a booklet misprinted something, the solution says what was changed.

**Kerala PSC papers**

- Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- AE (Mechanical, Ports), 065/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)

**Mock 1, other papers**

- Q3 boiler mountings: [Testbook](https://testbook.com/question-answer/______-cannot-be-counted-as-boiler-mounting--6018fc18094f11bfd55d2437)
- Q6 Otto cycle at r = 7: [Testbook](https://testbook.com/question-answer/in-an-air-standard-otto-cycle-the-compression-rat--5f2eb58c672f700d108c61d6)
- Q7 battery ignition: [Testbook](https://testbook.com/question-answer/in-the-battery-ignition-system-for-si-engine--666d5c1ae8c6e13291974302)
- Q8 indicated and brake power: [Testbook](https://testbook.com/question-answer/how-does-indicated-power-differ-from-brake-power-i--68470923839b08eb83d901b8)
- Q10 first law for a cycle: [Testbook](https://testbook.com/question-answer/for-a-closed-system-undergoing-a-thermodynamic-cyc--6810843729f8283688b9bd0f)
- Q11 multistage compressor: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-an-advantage-of-multista--666d92b5269eca80e6ab7f7b)
- Q12 entropy statements: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-are-correct-rega--666d5f643e696d0812b43349)
- Q13 separating calorimeter: [Testbook](https://testbook.com/question-answer/for-measurement-of-dryness-fraction-of-steam-use--666d59246280a34e562f72c2)
- Q14 cetane number: [Testbook](https://testbook.com/question-answer/ignition-quality-of-diesel-fuel-is-expressed-by-an--62209f25829f7faf7c9c78b2)
- Q17 air–fuel ratios: [Testbook](https://testbook.com/question-answer/the-air-fuel-ratios-used-in-the-normal-operation-o--5e181cf5f60d5d2d6cf16362)
- Q18 fire tube boiler pressure: [Testbook](https://testbook.com/question-answer/in-a-fire-tube-boiler-the-operating-pressure-rang--6006cb1d89a251c2e8ee3015)
- Q20 brake mean effective pressure: [Testbook](https://testbook.com/question-answer/a-4-stroke-4-cylinder-diesel-engine-running-at-1--6783bf37d040c0eb7a70bf73)
- Q22 compounding: [Testbook](https://testbook.com/question-answer/compounding-of-steam-turbine-is-done-in-order-to--63c79c66082f6fac90ecbbff)
- Q24 pour point: [Testbook](https://testbook.com/question-answer/the-lowest-temperature-at-which-the-oil-ceases-to--59b272d2e07ce01c9a801933)

**Mock 2, other papers**

- Q3 water tube steam rate: [Testbook](https://testbook.com/question-answer/the-rate-of-steam-generation-in-a-water-tube-boile--600eb9cb835f404d3d6e2b50)
- Q7 carburettor and air injection engines: [Testbook](https://testbook.com/question-answer/ic-engines-are-classified-into-carburetor-engine-a--68470f1a9f1f259b6214452e)
- Q9 control volume: [Testbook](https://testbook.com/question-answer/control-volume-in-a-thermodynamic-system-refers-to--5f642a660a5b11fe75ecf767)
- Q14 effect of compression ratio: [Testbook](https://testbook.com/question-answer/what-is-the-effect-of-compression-ratio-cr-on-th--68470b90bccb9ce86165c67e)
- Q15 bomb calorimeter: [Testbook](https://testbook.com/question-answer/the-bomb-calorimeter-is-an-apparatus-to-measure-th--5b5ff632ed9c890c52485d86)
- Q16 combustion in the expansion stroke: [Testbook](https://testbook.com/question-answer/in-an-ic-engine-combustion-was-found-to-proceed-d--5e1f2ab3f60d5d0917f97df1)
- Q20 continuous injection pump: [Testbook](https://testbook.com/question-answer/the-continuous-injection-system-usually-has-a-____--666d902871114110c81ce12e)
- Q21 compressor power: [Testbook](https://testbook.com/question-answer/a-single-stage-reciprocating-air-compressor-tak--657adbfd0e9eff90d0a000fa)
- Q24 hit and miss governing: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-is-true-about-hi--666d5db51506f65198dc0eb9)
- Q25 Otto cycle from r = 6 to 8: [Testbook](https://testbook.com/question-answer/in-the-otto-cycle-if-the-compression-ratio-is-inc--6946cb3fd6047e5aab217d4f)

**Mock 3, other papers**

- Q7 choke: [Testbook](https://testbook.com/question-answer/the-choke-in-the-carburettor-is-generally-used-whe--63a353d58563925863d16cf2)
- Q8 friction power: [Testbook](https://testbook.com/question-answer/friction-power-of-a-engine-is--620e18dd1d7d0bc8a11dbc3d)
- Q9 supersaturated flow: [Testbook](https://testbook.com/question-answer/supersaturated-flow-occurs-in-a-steam-nozzle-due-t--5ea6ff5ef60d5d537370879d)
- Q11 after-cooler: [Testbook](https://testbook.com/question-answer/an-after-cooler-provided-in-reciprocating-compress--601905fd6c1fdd1198b80d6b)
- Q17 unit of calorific value: [Testbook](https://testbook.com/question-answer/what-is-the-unit-of-calorific-value-of-a-fuelnbs--65e859800d0ed2ad8690019f)
- Q20 brake power from mechanical efficiency: [Testbook](https://testbook.com/question-answer/an-i-c-engine-develops-an-indicated-power-of-150--5fc48786454200ceb8335d4c)

**Mock 4, other papers**

- Q8 brake thermal efficiency: [Testbook](https://testbook.com/question-answer/the-ratio-of-brake-power-output-to-the-fuel-energy--5f608dec00260cf93c0748cc)
- Q9 50% reaction turbine: [Testbook](https://testbook.com/question-answer/which-of-the-following-turbine-has-50-degree-of-r--6530a3137085c844e4234a01)
- Q11 multi-stage compressor: [Testbook](https://testbook.com/question-answer/for-maximum-efficiency-in-multi-stage-compressor--5f22af35ee51d90d0ffce6b4)
- Q19 order of compression work: [Testbook](https://testbook.com/question-answer/a-single-stage-reciprocating-air-compressor-is-re--657af083314ef3e64278efe4)
- Q22 inlet steam velocity: [Testbook](https://testbook.com/question-answer/a-single-stage-impulse-turbine-of-1-2-m-diameter-r--625666ac510c21fa1e544f9b)
