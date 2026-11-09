# Thermal Engineering Level 3: Tricky Questions

Nov 3, 2026 · @Rohith

## How to use Level 3

Level 3 is the next step after the [Level 1 guide](../) and the [Level 2 theory](../level-2/). It covers the same 10 topics, in the same order, but only the parts examiners use to set traps. Do a topic in Levels 1 and 2 first, then come here for that topic.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from ESE, GATE, SSC JE, RRB JE, ISRO and state AE exams. Each solution starts from zero, goes step by step, and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam, the hardest objective paper here. GATE ME is the graduate entrance test. Both ask about the same thermal topics as JE exams, with a twist. If you can solve these, JE questions on the same idea feel easy.

**Statement questions.** ESE often gives two statements and these four options. Check each statement on its own first. Only if both are true, ask whether Statement II is the reason for Statement I.

| Option | Meaning |
| --- | --- |
| (a) | Both true, and II explains I |
| (b) | Both true, but II does not explain I |
| (c) | I true, II false |
| (d) | I false, II true |

**Sign rule used throughout.** Heat added to the system is positive and work done by the system is positive, as in Level 1. So the first law reads Q − W = ΔU.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam.

## 1. Basic concepts and laws of thermodynamics

The first law itself is easy. The traps are in units, in signs, and in processes where it looks like nothing happens, such as gas rushing into a vacuum or air filling an empty tank.

### Going deeper

| Idea | What it means |
| --- | --- |
| Quasi-static process | A process done so slowly that the gas is in balance at every instant. Only then can you draw it on a p-V diagram and use W = ∫p dV. |
| Free expansion | Gas rushes into a vacuum. Nothing pushes back, so the work is zero even though the volume grows. ∫p dV does not apply because the process is not quasi-static. |
| Flow work | The work needed to push 1 kg of fluid into or out of a device, equal to pv. Enthalpy h = u + pv bundles it with internal energy, which is why flow problems use h. |
| Ideal gas u and h | Both depend on temperature only. If T does not change, u and h do not change, whatever happens to p and V. |
| Heat in a polytropic process | For pVⁿ = constant, Q = W × (γ − n)/(γ − 1). When n is between 1 and γ, heat goes in during expansion yet the temperature falls, because the gas does more work than the heat it receives. |
| Specific heats | cp − cv = R and γ = cp/cv. Monatomic gases (argon, helium) have γ ≈ 1.67; air and other diatomic gases have 1.4. |
| Intensive and extensive | Intensive properties do not depend on the amount: p, T, density, specific volume. Extensive ones double when the mass doubles: V, U, H, S. Any extensive property divided by mass is intensive. |

### Formulas worth adding

```math
W_{\text{isothermal}} = p_1 V_1 \ln\frac{V_2}{V_1}, \qquad W_{\text{polytropic}} = \frac{p_1V_1 - p_2V_2}{n-1}
```

```math
Q_{\text{polytropic}} = \frac{\gamma - n}{\gamma - 1}\, W_{\text{polytropic}}
```

```math
R_{\text{gas}} = \frac{8.314}{M}\ \text{kJ/kg K}, \qquad c_v = \frac{R}{\gamma - 1}, \qquad c_p = \frac{\gamma R}{\gamma - 1}
```

```math
\text{Empty rigid insulated tank filled from a line:}\quad u_{\text{tank}} = h_{\text{line}} \;\Rightarrow\; T_{\text{tank}} = \gamma\, T_{\text{line}}
```

### Doubts cleared

**Doubt: In free expansion the volume grows. Why is the work zero?** Work needs a force that moves. When gas expands into a vacuum there is nothing for it to push against, so no force acts on the moving boundary. The pressure in ∫p dV is the resisting pressure at the boundary, and here it is zero.

**Doubt: Free expansion has no heat transfer. Is it isentropic, then?** No. Only a reversible adiabatic process is isentropic. Free expansion is adiabatic but irreversible, so the gas's entropy rises, by R ln(V₂/V₁) for an ideal gas.

**Doubt: If heat is added, must the temperature rise?** No. Heat can leave again as work. In isothermal expansion all the heat becomes work and T stays the same. In a polytropic expansion with n between 1 and γ, the work is more than the heat, so T falls.

**Doubt: Why do closed systems use u and flow problems use h?** In a closed system no mass crosses the boundary, so there is no flow work and the stored energy is u. When mass flows in or out, each kilogram carries u plus the push work pv done on it, which together make h.

**Doubt: Is temperature the same thing as heat?** No. Temperature is a property of a state, a point function. Heat is energy crossing a boundary because of a temperature difference, a path function. A body has temperature and internal energy, never "heat".

### Tricky past questions with solutions

**Q1. GATE ME 2009.** A frictionless piston-cylinder device contains a gas initially at 0.8 MPa and 0.015 m³. It expands quasi-statically at constant temperature to 0.030 m³. The work output in kJ is: (a) 8.32 (b) 12.00 (c) 554.67 (d) 8320.00

*Answer: (a) 8.32 kJ.*

1. "Quasi-statically at constant temperature" means reversible isothermal, so pV stays constant and W = p₁V₁ ln(V₂/V₁).
2. Fix units first. 0.8 MPa = 800 kPa, and kPa × m³ = kJ. So p₁V₁ = 800 × 0.015 = 12 kJ.
3. V₂/V₁ = 2 and ln 2 = 0.693, so W = 12 × 0.693 = 8.32 kJ. It is positive because the gas expands and does the work.

**The trap:** (b) is p₁V₁ with the ln forgotten. (d) is the right answer written in joules instead of kJ. (c) is 8.32 ÷ 0.015, which means nothing. Always convert MPa to kPa so that the answer comes out in kJ.

**Q2. GATE ME 2010.** A monatomic ideal gas (γ = 1.67, molecular weight 40) is compressed adiabatically from 0.1 MPa, 300 K to 0.2 MPa. Take the universal gas constant as 8.314 kJ/kmol K and 2^((γ−1)/γ) = 1.32. The work of compression in kJ/kg is: (a) 29.7 (b) 19.9 (c) 13.3 (d) 0

*Answer: (a) 29.7 kJ/kg.*

1. Find this gas's own gas constant: R = 8.314 ÷ 40 = 0.208 kJ/kg K. Using 0.287 (the value for air) is the first trap.
2. Temperature after adiabatic compression: T₂ = 300 × 1.32 = 396 K, a rise of 96 K.
3. Adiabatic means Q = 0, so all the work done on the gas goes into its internal energy: W = cv × ΔT = R/(γ − 1) × ΔT = (0.208 ÷ 0.67) × 96 ≈ 29.7 kJ/kg.

**The trap:** (d) 0 comes from mixing up "no heat" with "no work". Adiabatic only means no heat crosses the boundary; work still does.

**Doubt: why not the compressor formula with γ/(γ − 1)?** That formula is for steady flow, where the work also pushes gas in and out. This gas is compressed in a closed cylinder, so the closed-system work cvΔT applies. The steady-flow value would be cpΔT = 1.67 × 29.7 ≈ 49.6 kJ/kg, which is not offered.

**Q3. GATE ME 2021 (Shift 1).** A rigid, insulated tank is initially evacuated. A valve connects it to a supply line carrying air at a constant 250 kPa and 400 K. The valve is opened, air flows in until the tank pressure reaches 250 kPa, and the valve is closed. Take air as a perfect gas with cp = 1.005 and cv = 0.718 kJ/kg K. The final air temperature in the tank, in K, is \_\_\_\_\_\_ (numerical answer).

*Answer: 560 K (accepted range 555 to 565).*

1. Take the tank as the system. It is rigid, so no boundary work. It is insulated, so Q = 0. It starts empty, so its starting energy is zero.
2. Each kilogram that enters brings its enthalpy, h = u + pv: its own internal energy plus the push work done on it by the air behind it. Energy in equals energy stored, so h\_line = u\_tank.
3. For a perfect gas, cp × T\_line = cv × T\_tank, so T\_tank = (cp/cv) × T\_line = 1.4 × 400 = 560 K.

**Doubt: no heat was added, so why is the tank hotter than the line?** The air in the line pushes every kilogram into the tank. That push is work done on the entering air, and once inside the closed tank it is stored as internal energy, so the temperature rises.

**The trap:** the 250 kPa and the tank size are distractors. The answer depends only on γ and the line temperature.

**Q4. SSC JE Mechanical, 7 June 2024 (Shift 2).** The free expansion process is: (a) a reversible process (b) reversible at first, then irreversible (c) sometimes reversible and sometimes irreversible (d) an irreversible process

*Answer: (d) irreversible.*

The gas rushes through a large pressure difference, so at no instant is it in balance. To put it back you would have to compress it with outside work, which leaves a permanent change in the surroundings. That is the test for irreversibility.

For an ideal gas in free expansion: Q = 0 and W = 0, so ΔU = 0. Because u and h depend only on temperature, T and h also stay the same. Only the entropy changes: it rises. A common version asks about a balloon bursting inside an evacuated, insulated room; the answer is that internal energy and enthalpy both stay constant.

## 2. Entropy, Carnot cycle and availability

Questions here test three habits: never assume entropy must rise, check every claim with the Clausius inequality, and measure lost work as surroundings temperature × entropy created.

### Going deeper

| Idea | What it means |
| --- | --- |
| Entropy balance | Change in a system's entropy = entropy carried in or out by heat (∫δQ/T) + entropy created inside (S\_gen). S\_gen is never negative; the heat part can be either sign. |
| Entropy of the universe | System + surroundings together = S\_gen ≥ 0. Only the universe, or an isolated system, is guaranteed never to lose entropy. |
| Clausius inequality | For any cycle, ∮δQ/T ≤ 0. Equal to zero: reversible. Less than zero: irreversible but possible. More than zero: impossible. |
| Heat across a temperature gap | Heat Q flowing from T\_hot to T\_cold creates entropy Q(1/T\_cold − 1/T\_hot). The same gap does more damage at low temperatures. |
| Lost work (Gouy-Stodola) | Irreversibility I = T₀ × S\_gen, where T₀ is the surroundings temperature. |
| Available energy | From heat Q at temperature T, the most work possible is Q(1 − T₀/T). The rest, Q × T₀/T, can never become work. |
| Engines in series | Equal efficiency: middle temperature = √(T₁T₃). Equal work: middle temperature = (T₁ + T₃)/2. |
| Engine with three reservoirs | Use two equations together: energy (heat in − heat out = W) and, if reversible, ΣQ/T = 0. |

### Formulas worth adding

```math
S_{\text{gen}} = Q\left(\frac{1}{T_{\text{cold}}} - \frac{1}{T_{\text{hot}}}\right), \qquad I = T_0\, S_{\text{gen}}
```

```math
\oint \frac{\delta Q}{T} \le 0 \qquad (=0\ \text{reversible},\ <0\ \text{irreversible},\ >0\ \text{impossible})
```

```math
T_{\text{equal efficiency}} = \sqrt{T_1 T_3}, \qquad T_{\text{equal work}} = \frac{T_1 + T_3}{2}
```

```math
\mathrm{COP}_{\text{heat pump}} = \mathrm{COP}_{\text{refrigerator}} + 1 \quad \text{(same two temperatures)}
```

### Doubts cleared

**Doubt: if entropy always increases, how does a refrigerator lower the entropy of food?** The rule is for the universe, not one object. The food loses entropy, but the refrigerator pushes more entropy into the kitchen through its condenser. The total still rises.

**Doubt: can a system's entropy fall during an irreversible process?** Yes, if enough heat leaves it. Hot tea cooling on a table is irreversible, yet the tea's entropy falls. The room's entropy rises by more.

**Doubt: which temperatures go into the Carnot formula?** Always absolute temperatures in kelvin: 727°C is 1000 K. The Carnot efficiency depends only on these two temperatures, not on the working fluid.

**Doubt: does reversible mean 100% efficient?** No. A reversible engine still has to reject heat to the sink. Its efficiency, 1 − T\_cold/T\_hot, is the highest possible between those temperatures, but it is always below 100%.

**Doubt: why is no real engine built on the Carnot cycle?** Isothermal heat transfer needs very slow processes, while isentropic ones need fast processes with no friction. For a gas, the compression work is also almost as large as the expansion work, so the net work is tiny.

### Tricky past questions with solutions

**Q1. GATE ME 2009.** If a closed system is undergoing an irreversible process, the entropy of the system: (a) must increase (b) always remains constant (c) must decrease (d) can increase, decrease or remain constant

*Answer: (d).*

1. Write the entropy balance: ΔS = (entropy carried by heat) + S\_gen.
2. Irreversible means S\_gen is positive. The heat part is positive when heat comes in and negative when heat goes out.
3. Heat in, or no heat: ΔS is positive. Heat out: ΔS can be negative, zero or positive, depending on whether the entropy carried out is more than, equal to or less than S\_gen.

**The trap:** "must increase" is true only when no heat crosses the boundary (isolated or adiabatic). A closed system can still exchange heat.

**Q2. ESE Mechanical 2013 (Paper 1).** Statement (I): The inequality of Clausius provides the criterion of the reversibility of a cycle. Statement (II): If ∮δQ/T > 0, the cycle is irreversible and possible. Choose the option using the ESE statement key.

*Answer: (c) Statement I is true, Statement II is false.*

1. Statement I: the Clausius test tells you whether a cycle is reversible (= 0) or not. True.
2. Statement II: a cycle with ∮δQ/T > 0 would destroy entropy, which nothing can do. It is impossible, not "irreversible and possible". False.

**Memory hook:** after one full cycle the working fluid is back where it started, so its entropy change is zero. Any entropy created inside has to be thrown out with the rejected heat, which makes the sum of δQ/T negative for a real cycle.

**Q3. ISRO Refrigeration and Air Conditioning 2013.** Process I: a heat source at 1200 K loses 2500 kJ of heat to a sink at 800 K. Process II: a heat source at 800 K loses 2000 kJ of heat to a sink at 500 K. Which is true? (a) Process I is more irreversible (b) Process II is more irreversible (c) Both are equally irreversible (d) Both are reversible

*Answer: (b) Process II.*

1. Irreversibility is measured by the entropy created: S\_gen = Q/T\_cold − Q/T\_hot.
2. Process I: 2500/800 − 2500/1200 = 3.125 − 2.083 = 1.04 kJ/K.
3. Process II: 2000/500 − 2000/800 = 4.0 − 2.5 = 1.5 kJ/K. Process II creates more entropy.

**The trap:** Process I moves more heat across a bigger gap (400 K against 300 K), so it looks worse. But entropy is heat divided by temperature, so a gap at lower temperatures does more damage.

**Q4. ESE Mechanical 2016 (Paper 1).** 1000 kJ/s of heat is transferred from a constant-temperature reservoir at 1000 K to a system at a constant 500 K. The surroundings are at 300 K. The net loss of available energy is: (a) 450 kJ/s (b) 400 kJ/s (c) 350 kJ/s (d) 300 kJ/s

*Answer: (d) 300 kJ/s.*

1. Available part of the heat at 1000 K: 1000 × (1 − 300/1000) = 700 kJ/s.
2. Available part of the same heat after it arrives at 500 K: 1000 × (1 − 300/500) = 400 kJ/s.
3. Loss: 700 − 400 = 300 kJ/s. Check with Gouy-Stodola: S\_gen = 1000/500 − 1000/1000 = 1 kW/K, and 300 × 1 = 300 kJ/s.

**Doubt: is any energy destroyed?** No. All 1000 kJ/s arrives at 500 K. What falls is its quality, meaning how much of it could still be turned into work.

**Q5. SSC JE Mechanical, 29 January 2018 (morning).** Two reversible heat engines operate in series, one between 2000 K and T, the other between T and 500 K. If both have the same efficiency, T is: (a) 900 K (b) 1000 K (c) 1500 K (d) 1600 K

*Answer: (b) 1000 K.*

1. Equal efficiency: 1 − T/2000 = 1 − 500/T.
2. So T/2000 = 500/T, giving T² = 2000 × 500 = 1,000,000 and T = 1000 K, the geometric mean.

**The twist examiners use next:** if the question says equal work instead, the answer is the arithmetic mean, (2000 + 500)/2 = 1250 K. Read which one is equal before you calculate.

**Q6. GATE PI 2017.** A reversible heat engine works in a cycle with three reservoirs at T₁ = 500 K, T₂ = 400 K and T₃ = 300 K. It receives 10 kJ from reservoir 1 and rejects 3 kJ to reservoir 3. The net work output in kJ is \_\_\_\_\_\_ (numerical answer).

*Answer: 3 kJ.*

1. The heat with reservoir 2 is unknown, including its direction. Call it Q₂, positive if the engine receives it.
2. Reversible, so ΣQ/T = 0: 10/500 + Q₂/400 − 3/300 = 0, so 0.02 + Q₂/400 − 0.01 = 0 and Q₂ = −4 kJ. The minus sign means the engine rejects 4 kJ to reservoir 2.
3. Energy: W = 10 − 4 − 3 = 3 kJ.

**The trap:** most students assume the engine takes heat from the 400 K reservoir. That gives W = 11 kJ from 14 kJ in, an efficiency of 79%, far above the Carnot limit of 1 − 300/500 = 40%. Always check your answer against the Carnot limit between the hottest and coldest reservoirs.

## 3. Air standard cycles (Otto, Diesel, Dual, Brayton)

The traps here come from comparing cycles under different conditions, and from mixing up efficiency (what fraction of heat becomes work) with work output (how much work you get).

### Going deeper

Which cycle is "most efficient" depends on what is held the same. This table is asked almost every year in some form.

| Held the same | Efficiency order | Why |
| --- | --- | --- |
| Compression ratio and heat input | Otto > Dual > Diesel | For the same heat added, Otto rejects the least heat. |
| Maximum pressure and maximum temperature | Diesel > Dual > Otto | Under the same pressure limit, Diesel can use a much higher compression ratio. |
| Maximum pressure and heat input | Diesel > Dual > Otto | Same reason: the higher compression ratio wins. |

| Idea | What it means |
| --- | --- |
| Mean effective pressure (mep) | Net work ÷ swept volume: how much work each litre of engine gives. It can rise while efficiency falls. |
| Otto efficiency | Depends only on compression ratio r and γ. Adding more heat gives more work at the same efficiency. |
| Diesel cut-off ratio | ρ = volume at end of heat addition ÷ volume at start. A bigger ρ (more fuel, more load) lowers efficiency but raises mep. At ρ = 1 Diesel equals Otto. |
| Brayton efficiency | Depends only on the pressure ratio r\_p. |
| Brayton maximum work | Work per kg first rises with r\_p, then falls. It peaks when compressor exit and turbine exit temperatures are equal: T₂ = T₄ = √(T₁T₃). |
| Regeneration | Turbine exhaust preheats the compressed air. It only helps if the exhaust is hotter than the compressor delivery (T₄ > T₂). With it, efficiency falls as r\_p rises, the opposite of the simple cycle. |
| Work ratio | Net work ÷ turbine work. The gas turbine's compressor eats a large share of turbine work, so its work ratio is low and small losses hurt a lot. |
| Stirling and Ericsson | Two isothermal processes plus two constant-volume (Stirling) or constant-pressure (Ericsson) ones. With perfect regeneration, both reach Carnot efficiency. |

### Formulas worth adding

```math
\eta_{\text{Diesel}} = 1 - \frac{1}{r^{\gamma-1}} \cdot \frac{\rho^{\gamma}-1}{\gamma(\rho-1)}
```

```math
\eta_{\text{Brayton}} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}, \qquad \eta_{\text{ideal regeneration}} = 1 - \frac{T_1}{T_3}\, r_p^{(\gamma-1)/\gamma}
```

```math
\text{Maximum work: } T_2 = T_4 = \sqrt{T_1T_3}, \qquad W_{\max} = c_p\left(\sqrt{T_3}-\sqrt{T_1}\right)^2, \qquad r_p = \left(\frac{T_3}{T_1}\right)^{\frac{\gamma}{2(\gamma-1)}}
```

```math
\text{mep} = \frac{W_{\text{net}}}{V_{\text{swept}}}
```

### Doubts cleared

**Doubt: Otto beats Diesel in the table, so why are real diesel engines more efficient?** The table compares them at the same compression ratio, which is unfair. Petrol engines must stay around 8 to 11 because of knocking, while diesel engines run at 15 to 22. At their own compression ratios, diesel wins.

**Doubt: why does more cut-off lower Diesel efficiency?** Heat added late, while the piston is already moving down, gets less expansion afterwards, so less of it turns into work.

**Doubt: Brayton efficiency keeps rising with pressure ratio, so why not use a huge one?** The work per kg then falls. At very high pressure ratios the compressed air is already almost as hot as the turbine limit, so there is little room to add heat, and the net work heads to zero.

**Doubt: why does regeneration work better at low pressure ratios?** At a low pressure ratio, the turbine exhaust is much hotter than the compressed air, so there is plenty of heat to recover. As the ratio rises, compressor delivery gets hotter and the exhaust gets cooler until they cross.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2018.** Consider these statements on the air-standard efficiency of the Diesel cycle. 1. For the same compression ratio, efficiency decreases with increasing cut-off ratio. 2. For the same compression ratio and heat input, Diesel is more efficient than Otto. 3. For constant maximum pressure and heat input, Diesel is more efficient than Otto. Which are correct? (a) 1, 2 and 3 (b) 1 and 2 only (c) 1 and 3 only (d) 2 and 3 only

*Answer: (c) 1 and 3 only.*

1. Statement 1 is true: the factor (ρ^γ − 1)/(γ(ρ − 1)) grows with ρ, so efficiency falls.
2. Statement 2 is false: at the same compression ratio, Otto is the most efficient.
3. Statement 3 is true: with the same pressure limit, Diesel can compress more, and higher compression wins.

**The trap:** statements 2 and 3 look almost the same. The only difference is what is held equal, and that flips the answer. Underline the condition before you judge.

**Q2. ESE Mechanical 2015 (Paper 1).** The maximum net specific work obtainable in an ideal Brayton cycle with T\_max = 900 K and T\_min = 400 K is: (a) 100 cp (b) 500 cp (c) 700 cp (d) 800 cp

*Answer: (a) 100 cp.*

1. Maximum work happens when compressor exit and turbine exit temperatures are equal: T₂ = T₄ = √(900 × 400) = 600 K.
2. Turbine work = cp(900 − 600) = 300 cp. Compressor work = cp(600 − 400) = 200 cp.
3. Net work = 300 cp − 200 cp = 100 cp. Quick check: cp(√900 − √400)² = cp(30 − 20)² = 100 cp.

**The trap:** (b) 500 cp is T\_max − T\_min, as if the whole temperature range became work. The compressor takes back a large share of what the turbine produces.

**Q3. ESE Mechanical 2015 (Paper 1).** Statement (I): With the heat exchanger gas turbine cycle, the cycle efficiency reduces as the pressure ratio increases. Statement (II): As the pressure ratio increases, the delivery temperature from the compressor increases and ultimately will exceed that of the exhaust gas from the turbine.

*Answer: (a) Both true, and II explains I.*

1. "Heat exchanger cycle" means a regenerative gas turbine. Its ideal efficiency is 1 − (T₁/T₃) r\_p^((γ−1)/γ), which falls as r\_p rises. Statement I is true.
2. A higher pressure ratio makes the compressed air hotter and the turbine exhaust cooler. Statement II is true.
3. Less temperature difference means less heat recovered, which is exactly why efficiency falls. So II explains I.

**The trap:** students remember "Brayton efficiency rises with pressure ratio" and mark Statement I false. That rule is for the simple cycle only.

**Q4. TSPSC AEE Mechanical 2015 (Paper II).** In a Diesel cycle, increasing the cut-off ratio will increase: (a) efficiency (b) mean effective pressure (c) the maximum pressure (d) the engine weight

*Answer: (b) mean effective pressure.*

1. Efficiency falls with cut-off ratio, so (a) is wrong.
2. In a Diesel cycle, the peak pressure is reached at the end of compression and set by the compression ratio. Heat is then added at constant pressure, so a longer cut-off does not raise the peak. (c) is wrong.
3. A longer cut-off means more heat added to the same cylinder, so the net work grows while the swept volume stays the same. Net work ÷ swept volume, the mep, rises.

**The trap:** efficiency and mep move in opposite directions here. More fuel gives more work per litre, but a smaller fraction of each kJ of heat becomes work.

## 4. IC engines: working, parts, performance, knocking

The most-asked twist in this topic is that what reduces knock in a petrol engine increases it in a diesel engine, and the other way round. The second is where the factor of 2 for four-stroke engines belongs.

### Going deeper

Knocking means different things in the two engines, so the cures are opposite.

| Factor | To reduce SI (petrol) knock | To reduce CI (diesel) knock |
| --- | --- | --- |
| Compression ratio | Lower | Higher |
| Inlet air temperature | Lower | Higher |
| Inlet pressure (supercharging) | Lower | Higher |
| Wall and coolant temperature | Lower | Higher |
| Engine speed | Higher | Lower |
| Fuel self-ignition temperature | High | Low |
| Ignition delay of the fuel | Long | Short |
| Fuel rating | High octane number | High cetane number |
| Cylinder size | Small | Large |

| Idea | What it means |
| --- | --- |
| SI knock (detonation) | After the spark, the unburnt mixture ahead of the flame (the end gas) is squeezed and heated until it self-ignites before the flame reaches it. It happens near the end of combustion. |
| CI knock | Fuel keeps being injected during the ignition delay. If the delay is long, a lot of fuel piles up and then burns all at once. It happens at the start of combustion. |
| Pre-ignition | The mixture is lit by a hot spot (glowing deposit, overheated plug or valve) before the spark. It is a different event from detonation. |
| Morse test | For multi-cylinder engines. Cut one cylinder at a time at constant speed. The drop in brake power is that cylinder's indicated power. |
| Willan's line | Plot fuel used against brake power at constant speed and extend the line back to zero fuel. The negative power where it meets the axis is the friction power. Used for diesel engines, whose fuel use is close to a straight line with load. |
| imep and bmep | Indicated and brake mean effective pressure: work per cycle ÷ swept volume. bmep = mechanical efficiency × imep. |

### Formulas worth adding

```math
P = \frac{p_m\, L\, A\, n\, k}{60}, \qquad n = \frac{N}{2}\ \text{(four-stroke)}, \quad n = N\ \text{(two-stroke)}, \quad k = \text{cylinders}
```

```math
\text{Morse test: } IP_{\text{total}} = k\,B - \left(B_1 + B_2 + \dots + B_k\right)
```

```math
\text{imep} = \eta_{\text{ith}} \times \eta_v \times \rho_{\text{air}} \times \frac{F}{A} \times CV
```

### Doubts cleared

**Doubt: why does a higher compression ratio cause knock in a petrol engine but cure it in a diesel?** In a petrol engine you want the end gas not to self-ignite, and heat and pressure make self-ignition easier. In a diesel you want the fuel to self-ignite quickly, and heat and pressure shorten the delay, so less fuel piles up before burning starts.

**Doubt: why does higher speed reduce petrol-engine knock?** More speed means more turbulence, so the flame crosses the chamber faster. The end gas gets less time to self-ignite.

**Doubt: where does the factor N/2 go?** Only in power calculations. A four-stroke cylinder fires once every two revolutions, so power strokes per minute = N/2. Mean effective pressure is worked out per cycle, so it never needs the 2.

**Doubt: why is Willan's line not used for petrol engines?** Petrol engines control load with a throttle, so fuel use is not a straight line with load at constant speed. Diesel engines change only the fuel quantity, which keeps the line straight enough to extend.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2016 (Paper 1).** Statement (I): To prevent knocking in SI engines, the end gas should have a low density. Statement (II): Pre-ignition is caused due to detonation.

*Answer: (c) Statement I is true, Statement II is false.*

1. Low end-gas density means less mass squeezed into the same space, so its temperature and pressure rise less and self-ignition is less likely. Statement I is true.
2. Pre-ignition is ignition by a hot spot before the spark. Detonation is self-ignition of the end gas after the spark. One is not the cause of the other as stated, so Statement II is false.

**The trap:** both words describe "abnormal combustion", so students treat them as the same thing. Ask when it happens: before the spark (pre-ignition) or after it (detonation).

**Q2. UPPSC AE Mechanical 2019 (Paper II, held 13 December 2020).** Knocking tendency in an SI engine reduces with increasing: (a) compression ratio (b) wall temperature (c) supercharging (d) engine speed

*Answer: (d) engine speed.*

1. Compression ratio, wall temperature and supercharging all make the end gas hotter or denser, so they increase knock.
2. Higher speed raises turbulence, the flame finishes sooner, and the end gas has less time to self-ignite.

**The trap:** in a diesel engine the answer flips. Higher speed increases CI knock, because the delay in crank degrees grows.

**Q3. MPPSC AE Mechanical (held 3 July 2022).** Which fuel properties are needed in an SI engine to avoid detonation? i. High self-ignition temperature ii. A long ignition lag iii. A short ignition lag. (a) i and iii (b) i and ii (c) ii and iii (d) i, ii and iii

*Answer: (b) i and ii.*

1. A petrol engine wants its fuel to resist self-ignition. A high self-ignition temperature and a long ignition lag both do that.
2. A short lag is what a diesel fuel needs, so iii is wrong here.

**The trap:** students memorise "short delay is good" from the diesel topic and carry it across. Ask first: in this engine, should the fuel ignite by itself or not?

**Q4. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 2.** In a Morse test on a 4-cylinder engine at constant speed, brake power with all cylinders firing is 3000 kW. With cylinder 1, 2, 3 or 4 cut off in turn, it is 2062.5, 2062.5, 2061.5 and 2063.5 kW. The mechanical efficiency is: (a) 91.53% (b) 85.00% (c) 80.00% (d) 78.00%

*Answer: (c) 80%.*

1. When one cylinder is cut, brake power drops by that cylinder's indicated power. Friction stays the same, because the engine keeps turning at the same speed.
2. Indicated power of all four = 4 × 3000 − (2062.5 + 2062.5 + 2061.5 + 2063.5) = 12000 − 8250 = 3750 kW.
3. Mechanical efficiency = BP ÷ IP = 3000 ÷ 3750 = 80%.

**Doubt: why does friction stay the same when a cylinder stops firing?** The dead cylinder's piston is still dragged up and down by the others, so its friction is still there. Only its push is lost.

**Q5. BPSC AE Mechanical 2024 (Paper V).** A four-stroke engine runs at a fuel-air ratio of 0.05, volumetric efficiency 90% and indicated thermal efficiency 30%. Fuel calorific value is 45 MJ/kg and intake air density is 1 kg/m³. The imep is: (a) 60.75 bar (b) 6.075 bar (c) 4.35 bar (d) 12.15 bar

*Answer: (b) 6.075 bar, by the working below. The Testbook key marks (d), which needs a factor of 2 that does not belong in imep.*

1. Take 1 m³ of swept volume. Air drawn in per cycle = 0.9 × 1 × 1 = 0.9 kg.
2. Fuel per cycle = 0.05 × 0.9 = 0.045 kg, carrying 0.045 × 45,000 = 2025 kJ.
3. Indicated work per cycle = 0.30 × 2025 = 607.5 kJ. imep = 607.5 kJ ÷ 1 m³ = 607.5 kPa = 6.075 bar.

**The trap:** "four-stroke" tempts you to double or halve something. Every quantity here is per cycle, so the 2 cancels. It only appears when you turn work per cycle into power per minute.

## 5. IC engine systems: fuel, ignition, cooling, lubrication, supercharging

Questions on engine systems look like pure memory, but the twists come from names that mislead (an "economiser" that adds fuel) and from asking why a part exists rather than what it is.

### Going deeper

| Idea | What it means |
| --- | --- |
| Mixture a petrol engine needs | Cold start: very rich, so enough fuel evaporates. Idling: rich. Cruising: slightly lean, for economy (about 16:1). Full power: rich (about 12 to 13:1). Sudden acceleration: an extra squirt from the accelerating pump. |
| Choke | A flap that cuts the air at cold start, so the mixture gets richer. |
| Economiser (power enrichment) | Despite the name, it adds extra fuel when the throttle is wide open, for full power. |
| Supercharger and turbocharger | Both push more air into the cylinder. A supercharger is driven by the crankshaft and takes some engine power. A turbocharger is driven by a turbine in the exhaust and uses energy that would otherwise be wasted, but responds with a lag. |
| Intercooler | Cools the air after the supercharger or turbocharger, so the charge is denser and less prone to knock. |
| Spark advance | The flame needs roughly a fixed time to burn. At higher speed the crank turns more degrees in that time, so the spark must fire earlier (centrifugal advance). At part load the lean, thin mixture burns slowly, so it also fires earlier (vacuum advance). Retarding the spark reduces knock. |
| Pressure cap | Keeps the cooling system under pressure, which raises the coolant's boiling point, so the engine can run hotter without the coolant boiling. |
| Thermostat | Keeps coolant from going to the radiator until the engine is warm, so the engine reaches its working temperature quickly. |
| Viscosity index | How little an oil's viscosity changes with temperature. A high index is better. A multigrade oil such as SAE 10W-30 flows like a thin oil when cold and holds up like a thicker one when hot. |

### Doubts cleared

**Doubt: why is supercharging common in diesel engines but limited in petrol engines?** It makes the air hotter and denser. That shortens the diesel's ignition delay, which reduces knock, but it makes a petrol engine's end gas self-ignite more easily, which increases knock.

**Doubt: why not keep the engine as cold as possible?** Cold walls waste heat, stop fuel from evaporating well, and let water and acids condense into the oil. Engines are meant to run at about 80 to 90°C, which is why the thermostat and pressure cap exist.

**Doubt: if the turbocharger uses "free" exhaust energy, does it cost nothing?** Almost. The turbine slightly raises the exhaust back pressure, so the piston works a little harder to push gas out, but the gain in power is much larger.

### Tricky past questions with solutions

**Q1. UPPSC AE Mechanical 2013 (Paper II).** Knock in an SI engine can be reduced by: 1. supercharging 2. retarding the spark 3. using a fuel of long straight-chain structure 4. increasing the engine speed. Which are correct? (a) 1 and 2 (b) 2 and 3 (c) 1, 3 and 4 (d) 2 and 4

*Answer: (d) 2 and 4.*

1. Supercharging makes the charge hotter and denser, so knock increases. 1 is wrong.
2. Retarding the spark lowers the peak pressure and temperature of the end gas. 2 is right.
3. Long straight-chain molecules (like normal heptane, octane number 0) self-ignite easily. Branched chains (like iso-octane, octane number 100) resist knock. 3 is wrong.
4. Higher speed means more turbulence and faster burning. 4 is right.

**The trap:** statement 1 is the right answer for a diesel engine. Check which engine the question is about before you mark it.

**Q2. ESE Mechanical 2016 (Paper 1).** The objective of supercharging an engine is: 1. to reduce the space occupied by the engine 2. to increase the power output when greater power is required. Which are correct? (a) 1 only (b) 2 only (c) both 1 and 2 (d) neither

*Answer: (c) both.*

1. Forcing in more air lets more fuel burn in the same cylinder, so power rises. 2 is right.
2. Turn it round: for the same power, a smaller engine will do. That saves space and weight, which matters in aircraft and vehicles. 1 is right too.

**The trap:** students know "more power" from Level 1 and reject 1 as a separate claim. It is the same effect seen from the other side.

**Q3. UPRVUNL JE Mechanical 2016 (Shift 2).** In some carburettors, an economiser device is used for: (a) power enrichment (b) idling (c) cold starting (d) acceleration

*Answer: (a) power enrichment.*

At full throttle the engine needs a richer mixture for maximum power. The economiser, also called a power compensator, opens an extra fuel passage only then. During part-load cruising it stays shut, which keeps the mixture lean and saves fuel, which is where the name comes from.

**The trap:** the name suggests saving fuel, so students pick idling. Cold starting is the choke's job and acceleration is the accelerating pump's.

**Q4. JKSSB JE Mechanical 2015.** As the rating of the pressure cap on the radiator increases, the boiling point of the coolant: (a) decreases (b) stays the same (c) increases (d) first increases, then decreases

*Answer: (c) increases.*

A liquid boils when its vapour pressure reaches the pressure around it. Water boils at 100°C at 1 atm, but at about 120°C at 2 bar, like in a pressure cooker. A cap rated higher holds more pressure, so the coolant must get hotter before it boils.

**The link to steam tables:** this is the same saturation idea as in section 6. Higher pressure means a higher saturation temperature.

## 6. Steam properties, Rankine cycle and boilers

One idea explains almost every Rankine question: efficiency rises when heat is added at a higher average temperature or rejected at a lower one. The twist is knowing what each change does besides that, especially to the wetness of the exhaust steam.

### Going deeper

| Change | Efficiency | What else happens |
| --- | --- | --- |
| Raise boiler pressure | Up | Exhaust steam gets wetter, which erodes the last turbine blades. |
| Lower condenser pressure | Up | Exhaust gets wetter, and keeping a deep vacuum is harder. |
| Superheat the steam | Up | Exhaust gets drier. |
| Reheat | Small change; up only if the reheat is at a suitable pressure | Exhaust gets much drier and work per kg rises. Dryness is the main reason for reheat. |
| Regeneration (feed heating with bled steam) | Up | Work per kg of steam falls, so more steam is needed per kWh. |

| Idea | What it means |
| --- | --- |
| Mean temperature of heat addition | The boiler adds heat over a range of temperatures. Its average, Tm, works like the hot temperature in the Carnot formula: η = 1 − T\_condenser/Tm. |
| Critical point of water | 22.06 MPa and 373.95°C. Saturated liquid and vapour become identical and the latent heat is zero, so there is no boiling as a separate stage. Boilers above this pressure (Benson) need no steam drum. |
| Throttling calorimeter | Throttling keeps enthalpy constant. The steam must come out superheated, because only then do pressure and temperature fix its enthalpy. Very wet steam is first passed through a separating calorimeter. |
| Steam rate and heat rate | Steam rate = steam needed per kWh. Heat rate = heat supplied per kWh. A lower value is better for both. |
| Pump work | Water's specific volume is about 0.001 m³/kg, so pump work is tiny compared with turbine work, and the Rankine cycle's work ratio is close to 1. |

### Formulas worth adding

```math
\eta_{\text{Rankine}} = 1 - \frac{T_{\text{condenser}}}{T_m}, \qquad T_m = \frac{h_1 - h_4}{s_1 - s_4}
```

```math
\text{Steam rate} = \frac{3600}{W_{\text{net}}}\ \text{kg/kWh}, \qquad \text{Heat rate} = \frac{3600}{\eta}\ \text{kJ/kWh}
```

```math
W_{\text{pump}} \approx v_f\,(p_{\text{boiler}} - p_{\text{condenser}}), \qquad x = x_{\text{separating}} \times x_{\text{throttling}}
```

### Doubts cleared

**Doubt: why keep the condenser under vacuum?** Lower pressure means a lower boiling temperature. At 0.1 bar, steam condenses at about 46°C instead of 100°C, so heat is rejected at a lower temperature and efficiency rises.

**Doubt: why can't a throttling calorimeter handle very wet steam?** In the wet region, pressure and temperature are tied together, so measuring both still does not tell you the dryness. The steam must be superheated after throttling, where p and T are independent and fix the enthalpy. Very wet steam stays wet even after throttling.

**Doubt: regeneration takes steam out of the turbine before it finishes working. How can efficiency go up?** The bled steam does less work, but its heat is not thrown away in the condenser; it goes back into the feed water. The fuel saved is a larger fraction than the work lost.

**Doubt: why is the pump's work so small?** Work to pump a liquid is roughly volume × pressure rise. Raising 1 kg of water from 0.1 bar to 100 bar takes about 0.001 × 9990 ≈ 10 kJ, while the turbine gives around 1000 kJ per kg.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2017.** Statement (I): Providing reheat in a Rankine cycle would increase the efficiency of the cycle. Statement (II): Reheat in the Rankine cycle reduces specific steam consumption.

*Answer: (d) Statement I is false, Statement II is true.*

1. Reheat adds heat again after part of the expansion. If that heat is added at an average temperature lower than the main boiler's, it pulls the overall average down and efficiency falls. So reheat does not always raise efficiency, and "would increase" is too strong. Statement I is false.
2. Reheat makes each kilogram of steam do more work, so fewer kilograms are needed per kWh. Steam rate = 3600 ÷ W\_net falls. Statement II is true.

**The trap:** most books say reheat "slightly improves" efficiency, so students mark (a). ESE marks the efficiency gain as not guaranteed. Remember the purpose of reheat: drier exhaust steam and more work per kg.

**Q2. TNTRB 2017 (Mechanical).** With a reheat Rankine cycle: (a) quality of exhaust steam is improved (b) net work output increases (c) specific steam consumption decreases (d) all of the above

*Answer: (d) all of the above.*

This one does not claim an efficiency rise, so every option is safe. Reheat dries the exhaust, adds work per kg, and so lowers the steam rate. Put it beside Q1: the same topic, but one word, "efficiency", changes the answer.

**Q3. JSSC JE Mechanical Re-Exam, 31 October 2022 (Paper I).** Regeneration increases the thermal efficiency of a Rankine cycle because: (a) average temperature of heat addition in the boiler increases (b) total work delivered by the turbine increases (c) pressure inside the boiler increases (d) heat is added before the steam enters the low-pressure turbine

*Answer: (a).*

1. Without regeneration, the boiler first heats cold feed water from about 46°C. That low-temperature heating drags the average down.
2. Bled steam does that early heating instead, so the boiler only adds heat at higher temperatures. The average rises and efficiency follows.

**The trap:** (b) is the opposite of the truth: turbine work per kg falls because some steam leaves early. (d) describes reheat, not regeneration.

**Q4. SSC JE Mechanical, 25 September 2019 (evening).** The critical point of water is NOT characterised by: (a) a distinct phase change process (b) identical saturated liquid and saturated vapour states (c) p\_cr = 22.06 MPa and T\_cr = 373.95°C (d) no latent heat of vaporisation

*Answer: (a).*

At the critical point the liquid and vapour lines meet, so there is no two-phase stage where water and bubbles exist together. Water changes into vapour smoothly, with no separate boiling and no latent heat. (b), (c) and (d) are all true, which leaves (a).

**The trap:** "NOT" questions. Mark each option true or false first, then pick the false one.

**Q5. NHPC JE Mechanical (held 29 October 2025, Shift 2).** In a separating and throttling calorimeter, the steam is at its minimum pressure: (a) before the throttling unit (b) before the separating unit (c) after the separating unit (d) after the throttling unit

*Answer: (d) after the throttling unit.*

1. The separator only removes water droplets, so the pressure stays almost the same through it.
2. The throttle is a small hole where the pressure drops sharply, so the steam leaves superheated at close to atmospheric pressure. That is the lowest pressure in the device.

## 7. Steam nozzles and turbines

The deepest trap in this topic is the word "choked": students think a choked nozzle can never pass more flow. The others come from mixing up the impulse and reaction formulas and the two kinds of compounding.

### Going deeper

| Idea | What it means |
| --- | --- |
| Choking | When the throat reaches the speed of sound, pressure changes downstream can no longer travel upstream. Lowering the back pressure further does not raise the flow. Raising the inlet pressure still does, because the gas at the throat gets denser. |
| Convergent nozzle limit | A converging passage can speed the flow up to Mach 1 at most, at its smallest section. Going supersonic needs a diverging part after the throat. |
| Supersaturated (metastable) flow | Steam races through a nozzle in about a thousandth of a second, so condensation starts late. The steam stays vapour below the saturation line, is denser than expected, and the mass flow rises a few percent. The heat drop is a little smaller, and the process is irreversible. |
| Blade speed ratio | ρ = blade speed u ÷ steam velocity at nozzle exit V₁. Each turbine type has an optimum value. |
| Impulse stage | All the pressure drop happens in the nozzle; moving blades only turn the jet. Best at u/V₁ = cos α/2, with maximum blade efficiency cos²α. |
| 50% reaction (Parsons) | Fixed and moving blades have the same shape, so half the enthalpy drop happens in each and the velocity triangles are mirror images. Best at u/V₁ = cos α. |
| Why compound | A single impulse stage that takes the whole drop would spin far too fast. Compounding shares the drop over several rows. |
| Velocity compounding (Curtis) | One set of nozzles drops all the pressure; the fast jet then passes through two or three rows of moving blades with guide blades between them. Low speed, compact, but less efficient. |
| Pressure compounding (Rateau) | Several stages of nozzles plus moving blades; the enthalpy drop is shared equally among the stages. More efficient, but longer. |

### Formulas worth adding

```math
\frac{p_{\text{throat}}}{p_1} = \left(\frac{2}{n+1}\right)^{\frac{n}{n-1}} \qquad (0.528\ \text{air},\ 0.546\ \text{superheated steam},\ 0.577\ \text{saturated steam})
```

```math
V_2 = \sqrt{2\,(h_1 - h_2)} \approx 44.72\sqrt{\Delta h\ \text{in kJ/kg}}\ \text{m/s}, \qquad \dot m_{\max} \propto \frac{A_{\text{throat}}\, p_0}{\sqrt{T_0}}
```

```math
\text{Impulse: } \left(\frac{u}{V_1}\right)_{\text{opt}} = \frac{\cos\alpha}{2},\ \eta_{\max} = \cos^2\alpha \qquad \text{Parsons: } \left(\frac{u}{V_1}\right)_{\text{opt}} = \cos\alpha,\ \eta_{\max} = \frac{2\cos^2\alpha}{1+\cos^2\alpha}
```

### Doubts cleared

**Doubt: if the nozzle is choked, how can the flow ever increase?** Choking fixes the speed at the throat (Mach 1), not the mass flow. Mass flow = density × area × speed. Raise the inlet pressure and the throat gas gets denser, so more kilograms pass each second at the same speed.

**Doubt: why can't a converging nozzle make supersonic flow?** Below Mach 1, a narrowing passage speeds the gas up. Above Mach 1, the gas behaves the other way and needs a widening passage to speed up. So a converging nozzle tops out at Mach 1 at its narrowest point.

**Doubt: why is velocity compounding less efficient?** The steam keeps its very high speed through several rows, and each row and guide blade loses some energy to friction. The last row also does only a small share of the work.

**Doubt: what does 44.72 in the velocity formula come from?** V = √(2 × Δh) with Δh in J/kg. Writing Δh in kJ/kg multiplies inside the root by 1000, and √2000 = 44.72.

### Tricky past questions with solutions

**Q1. GATE ME 2022 (Shift 1), more than one answer.** A purely convergent nozzle carries steady, inviscid flow of an ideal gas and is operating choked. If the inlet pressure p₀ is increased while the back pressure stays the same, which are true? (a) mass flow rate stays the same (b) Mach number at the exit plane stays at 1 (c) mass flow rate increases (d) Mach number at the exit plane becomes more than 1

*Answer: (b) and (c).*

1. The nozzle is already choked, and a higher p₀ only makes it more so. A converging nozzle can never exceed Mach 1, so the exit stays at Mach 1. (b) true, (d) false.
2. Choked mass flow is proportional to p₀/√T₀. A higher inlet pressure means denser gas at the throat at the same sonic speed, so more mass passes. (c) true, (a) false.

**The trap:** "choked means the flow can't change" is only true for changes in back pressure. Changes upstream still change the flow.

**Q2. ESE Mechanical 2015 (Paper 1).** Statement (I): Supersaturated expansion in a nozzle is a process in which the steam expands beyond the saturated vapour line in a superheated condition. Statement (II): Steam cannot exist in a superheated state when the expansion in the nozzle reaches the saturated vapour line.

*Answer: (c) Statement I is true, Statement II is false.*

1. Statement I describes supersaturation correctly: condensation is delayed, so the steam carries on as vapour past the saturation line. True.
2. Statement II says that can't happen. It is exactly what supersaturation is, so II is false.

**The trap:** students reason "on steam tables, below the saturation line it must be wet", which is true for slow, balanced processes. A nozzle is too fast for the steam to reach balance.

**Q3. ESE Mechanical 2015 (Paper 1).** Consider these statements about steam turbines. 1. A single-stage impulse turbine has nozzle angle α; its maximum blade efficiency is cos²α. 2. For a reaction turbine with identical stator and rotor blades, the blade velocity for maximum blade efficiency equals the inlet steam velocity. 3. A velocity-compounded impulse turbine gives less speed and less efficiency. Which are correct? (a) 1 and 2 only (b) 1 and 3 only (c) 2 and 3 only (d) 1, 2 and 3

*Answer: (b) 1 and 3 only.*

1. Statement 1 is the standard result for an impulse stage with no blade friction. True.
2. Statement 2 describes a Parsons (50% reaction) stage. Its best blade speed is u = V₁ cos α, not V₁. The missing cos α makes it false.
3. Statement 3: compounding lowers the speed, and the extra rows add friction, so efficiency is lower. True.

**The trap:** statement 2 is almost right. Check every formula for the angle term.

**Q4. GATE ME 2018 (Shift 2).** Select the correct statement for a 50% reaction stage in a steam turbine. (a) The rotor blade is symmetric (b) The stator blade is symmetric (c) The absolute inlet flow angle equals the absolute exit flow angle (d) The absolute exit flow angle equals the inlet angle of the rotor blade

*Answer: (d).*

1. In a 50% reaction stage, the fixed and moving blades have the same shape, so the inlet and outlet velocity triangles are mirror images.
2. Mirror triangles give α₁ = β₂ and α₂ = β₁. The second one says the absolute exit angle equals the rotor blade inlet angle, which is (d).

**The trap:** "symmetric blades" belongs to the impulse turbine, where each moving blade has equal inlet and outlet angles. In Parsons, the two rows are identical to each other, but each blade is not symmetric on its own.

**Q5. MPPSC AE Mechanical (held 3 July 2022).** In a 4-stage pressure-compounded steam turbine, the total isentropic enthalpy drop: (a) stays the same in each of the 4 stages (b) is largest in the last stage (c) is divided equally among the 4 stages (d) is largest in the first stage

*Answer: (c) divided equally.*

Pressure compounding (Rateau) gives each stage its own nozzles and splits the total drop so each stage handles an equal share. That keeps the steam speed, and so the blade speed, the same and moderate in every stage.

**The trap:** (a) sounds the same but says each stage has the whole drop. The pressure drops are not equal either; it is the enthalpy drop that is shared equally.

## 8. Air compressors

The favourite twist here is clearance volume: it lowers volumetric efficiency but, in the ideal case, does not change the work per kilogram of air delivered. The second is counting stages and intercoolers correctly in multistage problems.

### Going deeper

| Idea | What it means |
| --- | --- |
| Why clearance exists | Room for the valves in the head, and a gap so the piston never hits the cylinder head. It is not there to improve anything. |
| What clearance does | Air trapped in it is not pushed out. On the return stroke it re-expands first, so fresh air enters only after that. Less air per stroke, so volumetric efficiency falls. |
| What clearance does not do | The trapped air gives back its compression work as it re-expands, so the ideal work per kg delivered stays the same. You simply need a bigger cylinder for the same delivery. |
| Volumetric efficiency | Depends on clearance ratio C, pressure ratio, and the index of re-expansion n. It falls as the pressure ratio rises and reaches zero at a limiting ratio. |
| Isothermal efficiency | Isothermal work ÷ actual work. Isothermal compression needs the least work, so it is the ideal for reciprocating compressors. |
| Perfect intercooling | Air is cooled back to the suction temperature between stages. Then minimum total work comes from equal pressure ratios in every stage, which also gives equal work per stage. |
| Free air delivered (FAD) | The volume of air delivered, measured back at the atmospheric conditions it was drawn from. |
| Surging (rotary compressors) | At too low a flow, the delivery pressure pushes air back through the compressor, flow reverses and recovers again and again, with violent vibration. |
| Choking (rotary compressors) | At too high a flow, the air reaches the speed of sound somewhere inside, and flow cannot rise further. |
| Slip factor | Air leaves a centrifugal impeller with less swirl than the blade tips would suggest. Slip factor = actual swirl ÷ ideal swirl, always below 1. |

### Formulas worth adding

```math
\eta_v = 1 + C - C\left(\frac{p_2}{p_1}\right)^{1/n}, \qquad \left(\frac{p_2}{p_1}\right)_{\text{limit}} = \left(\frac{1+C}{C}\right)^{n}
```

```math
W = \frac{n}{n-1} R T_1\left[\left(\frac{p_2}{p_1}\right)^{\frac{n-1}{n}} - 1\right]\ \text{per kg}, \qquad W_{\text{isothermal}} = R T_1 \ln\frac{p_2}{p_1}
```

```math
z \text{ stages, perfect intercooling: } \frac{p_{i+1}}{p_i} = \left(\frac{p_{\text{delivery}}}{p_{\text{suction}}}\right)^{1/z}, \qquad \text{two stages: } p_{\text{intercooler}} = \sqrt{p_1 p_3}
```

### Doubts cleared

**Doubt: compressing the trapped clearance air every cycle must waste work, surely?** It is compressed, but on the way back it expands and pushes the piston, like a spring giving back its energy. In the ideal case the two cancel, so the net work per kg delivered is unchanged.

**Doubt: why cool the air between stages?** Compression heats the air, and hot air needs more work to compress further, since work per kg is proportional to the inlet temperature T₁. Cooling it back down before the next stage saves that extra work.

**Doubt: turbines use isentropic efficiency. Why do reciprocating compressors use isothermal?** For a compressor, less work is better, and isothermal compression needs the least work of all. So it is the target to compare against. Fast rotary compressors cannot shed heat, so they are compared with isentropic compression instead.

**Doubt: which index goes in the volumetric efficiency formula?** The index of re-expansion of the clearance air, because that process decides how soon fresh air starts entering. The index of compression is not in it.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2017.** For single-stage reciprocating compressors: 1. Isothermal compression is the most desirable process. 2. The size of the clearance volume has no effect on work done per kg of air delivered. 3. Volumetric efficiency decreases with increasing delivery pressure. Which are correct? (a) 1 and 2 only (b) 1 and 3 only (c) 2 and 3 only (d) 1, 2 and 3

*Answer: (d) all three.*

1. Isothermal compression takes the least work. True.
2. The clearance air gives its work back on re-expansion. True (ideal case).
3. A higher delivery pressure means the trapped air expands over more of the stroke before fresh air can enter. True.

**The trap:** statement 2 sounds wrong, because clearance is "bad". It is bad for volumetric efficiency, not for work per kg.

**Q2. MPSC AMVI 2005 (Paper 4).** The clearance volume in a reciprocating air compressor is provided: (a) to reduce the work done per kg of air delivered (b) to increase volumetric efficiency (c) to accommodate the valves in the head (d) to create turbulence in the air delivered

*Answer: (c) to accommodate the valves.*

Clearance is a mechanical necessity: the valves need room, and the piston must not strike the head. (a) is wrong because clearance does not change ideal work per kg. (b) is the reverse of the truth: clearance lowers volumetric efficiency.

**Q3. BPSC AE Mechanical (Paper 5, 25 March 2022).** A four-stage compressor with perfect intercooling compresses air from 1 bar to 16 bar. The optimum pressure in the last intercooler is: (a) 6 bar (b) 8 bar (c) 10 bar (d) 12 bar

*Answer: (b) 8 bar.*

1. Equal pressure ratio per stage: r = 16^(1/4) = 2.
2. Pressures after each stage: 2, 4, 8 and 16 bar.
3. Four stages have three intercoolers, at 2, 4 and 8 bar. The last one is at 8 bar.

**The trap:** √(1 × 16) = 4 bar is the two-stage answer. Also, the last intercooler sits before the last stage, not after it, so 16 bar is not an option for it.

**Q4. TSPSC AEE Mechanical 2015 (Paper II).** The volumetric efficiency of a reciprocating compressor depends on: (a) clearance factor (b) pressure ratio (c) index of expansion (d) index of compression. Which are correct? (1) a and b (2) a and c (3) a, b and c (4) a, b and d

*Answer: (3) a, b and c.*

1. Write the formula: ηv = 1 + C − C(p₂/p₁)^(1/n).
2. It contains C (clearance factor), p₂/p₁ (pressure ratio) and n, which is the index of the re-expansion of clearance air.
3. The compression index does not appear, so (d) is out.

**The trap:** both indices are often taken as the same number, so students tick both. The question is testing which process the formula actually describes.

## 9. Refrigeration and air conditioning

Two tables answer most tricky questions in this topic: what each change does to a vapour compression cycle, and what each air-conditioning process does to the properties of moist air. The trap is usually one property that students assume stays the same but does not.

### Going deeper

| Change in a vapour compression cycle | Refrigerating effect | Compressor work | COP |
| --- | --- | --- | --- |
| Lower evaporator pressure | Down | Up | Down |
| Higher condenser pressure | Down | Up | Down |
| Subcool the liquid after the condenser | Up | Same | Up |
| Superheat inside the evaporator (useful) | Up | Up | Up or down, depending on refrigerant |
| Superheat in the suction pipe (outside the cold space) | Same | Up | Down |

| Air process | Dry bulb | Specific humidity | Relative humidity | Wet bulb | Dew point |
| --- | --- | --- | --- | --- | --- |
| Sensible heating | Up | Same | Down | Up | Same |
| Sensible cooling (above dew point) | Down | Same | Up | Down | Same |
| Evaporative cooling (adiabatic saturation) | Down | Up | Up | Same | Up |
| Cooling with dehumidification | Down | Down | Usually up | Down | Down |

| Idea | What it means |
| --- | --- |
| Three temperatures | For unsaturated air, dry bulb > wet bulb > dew point. At 100% relative humidity all three are equal. |
| Specific humidity | kg of water vapour per kg of dry air. It changes only when water is added or removed. |
| Relative humidity | The vapour present ÷ the most the air could hold at that temperature. It changes with temperature even if no water is added. |
| Dehumidifying by cooling | Water condenses only once the air is cooled below its dew point, so the coil must be colder than the dew point. |
| Absorption pairs | Ammonia-water: ammonia is the refrigerant, so it can cool below 0°C. Lithium bromide-water: water is the refrigerant, so it cannot go below 0°C and is used for air conditioning. |

### Formulas worth adding

```math
\omega = 0.622\,\frac{p_v}{p - p_v}, \qquad \phi = \frac{p_v}{p_{\text{sat}}(T_{\text{dry bulb}})}
```

```math
\mathrm{COP}_{\text{heat pump}} = \mathrm{COP}_{\text{refrigerator}} + 1, \qquad 1\ \text{TR} = 3.5167\ \text{kW} = 211\ \text{kJ/min}
```

### Doubts cleared

**Doubt: if no water is removed, why does relative humidity fall when air is heated?** Relative humidity compares the vapour present with the most the air could hold at its temperature. Warm air can hold much more vapour, so the same amount becomes a smaller fraction.

**Doubt: why does a higher condenser pressure reduce cooling?** The liquid leaves the condenser hotter. When it is throttled, more of it flashes into vapour straight away, so less liquid reaches the evaporator to absorb heat. The compressor also has to push against a higher pressure.

**Doubt: why does subcooling raise COP without extra work?** The subcooled liquid is colder before throttling, so less of it flashes. More liquid is left to evaporate in the cold space, while the compressor does exactly the same job as before.

**Doubt: can a refrigerator's COP be less than 1?** Yes, some air-cycle systems have that. A heat pump's ideal COP is always above 1, because it delivers the heat taken from outside plus the work put in.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2022.** In a vapour compression refrigeration system, an increase in condenser pressure results in: 1. a decrease in refrigerating capacity 2. an increase in power consumption 3. an increase in volumetric efficiency. Which are correct? (a) 1 and 3 only (b) 2 and 3 only (c) 1 and 2 only (d) 1, 2 and 3

*Answer: (c) 1 and 2 only.*

1. Hotter liquid flashes more on throttling, so the refrigerating effect per kg falls. 1 is true.
2. The compressor must deliver against a higher pressure, so work per kg rises. 2 is true.
3. A higher pressure ratio means the clearance gas re-expands over more of the stroke, so volumetric efficiency falls, not rises. 3 is false.

**The link:** statement 3 is section 8's volumetric efficiency formula in disguise. Refrigeration compressors follow the same rule as air compressors.

**Q2. ESE Mechanical 2016 (Paper 1).** 1. The relative humidity of air stays constant during sensible heating or cooling. 2. The dew point stays constant during sensible heating or cooling. 3. The total enthalpy of air stays constant during adiabatic cooling. 4. Air must be cooled below its dew point for dehumidifying. Which are correct? (a) 1, 2 and 3 (b) 1, 2 and 4 (c) 3 and 4 only (d) 2, 3 and 4

*Answer: (d) 2, 3 and 4.*

1. Statement 1 is false: heating lowers relative humidity and cooling raises it.
2. Statement 2 is true: the dew point depends only on how much vapour the air holds, and sensible processes add or remove none.
3. Statement 3 is true: in adiabatic (evaporative) cooling, the heat to evaporate the water comes from the air itself, so the air's total enthalpy stays the same while its temperature drops.
4. Statement 4 is true: no water condenses until the air reaches its dew point.

**The trap:** statements 1 and 2 look like twins. "Sensible" means specific humidity and dew point stay fixed; relative humidity does not.

**Q3. GATE ME 2017 (Shift 2).** If a mass of moist air in a closed metallic vessel is heated, its: (a) relative humidity decreases (b) relative humidity increases (c) specific humidity increases (d) specific humidity decreases

*Answer: (a) relative humidity decreases.*

1. The vessel is closed, so the mass of vapour and of dry air cannot change. Specific humidity stays the same, which rules out (c) and (d).
2. Heating raises the temperature, so the air could now hold more vapour. The same vapour is a smaller fraction of that, so relative humidity falls.

**Doubt: the pressure in the closed vessel rises when heated. Doesn't that matter?** The vapour's partial pressure rises in proportion to absolute temperature, but its saturation pressure rises much faster with temperature. So relative humidity still falls.

**Q4. UKPSC JE Mechanical 2013 (Paper II).** A heat pump working on a reversed Carnot cycle has a COP of 4. It is made to work as a refrigerator with 1 kW of work input. The refrigerating effect is: (a) 1 kW (b) 2 kW (c) 3 kW (d) 4 kW

*Answer: (c) 3 kW.*

1. Between the same two temperatures, COP of heat pump = COP of refrigerator + 1. So COP of refrigerator = 4 − 1 = 3.
2. Refrigerating effect = COP × work = 3 × 1 = 3 kW.

**Why the +1:** a heat pump counts the heat delivered to the hot side, which is the heat taken from the cold side plus the work. A refrigerator counts only the heat taken from the cold side. Divide both by the work and they differ by work ÷ work = 1.

**The trap:** (d) 4 kW uses the heat pump COP for a refrigerator. Level 1 asked the reverse (refrigerator COP 5, heating effect 6 kW); the examiner simply flipped it.

## 10. Fuels and combustion

Combustion questions twist two things: whether a ratio is by mass or by moles, and what the Orsat apparatus can and cannot see. Learn both and most "surprising" answers become obvious.

### Going deeper

| Idea | What it means |
| --- | --- |
| Air by volume and by mass | By volume (moles): 21% O₂, 79% N₂, so 4.76 mol of air carry 1 mol of O₂. By mass: 23.2% O₂, so 4.31 kg of air carry 1 kg of O₂. |
| Mass and molar air-fuel ratio | The same mixture gives different numbers. For methane: 9.52 mol of air per mol of fuel, but 17.2 kg of air per kg of fuel, because air is heavier than methane (29 against 16 g/mol). |
| Stoichiometric air-fuel ratio by mass | Carbon 11.5, methane 17.2, petrol about 14.7 to 15, hydrogen 34.5. |
| Too little oxygen | Exam rule: hydrogen burns fully to water first, the carbon then shares the remaining oxygen between CO₂ and CO, and no free O₂ is left. |
| Too much air | No CO, and free O₂ appears in the products. The extra air also lowers the flame temperature and carries heat out of the chimney. |
| Orsat apparatus | Measures CO₂, O₂ and CO in flue gas, by volume, on a dry basis. The sample is cooled, so the water condenses and is never measured. Whatever is left is taken as N₂. |
| Orsat absorbents | CO₂ by potassium hydroxide, O₂ by alkaline pyrogallol, CO by cuprous chloride. |
| Calorimeters | Bomb calorimeter: HCV of solid and liquid fuels, at constant volume. Junkers gas calorimeter: gaseous fuels. Orsat measures no calorific value at all. |
| HCV and LCV | HCV counts the heat released when the water formed condenses. LCV leaves it out, since in an engine or boiler the water leaves as vapour. |

### Formulas worth adding

```math
\text{Theoretical air (kg/kg fuel)} = 11.5\,C + 34.5\left(H - \frac{O}{8}\right) + 4.3\,S \qquad (C, H, O, S \text{ as mass fractions})
```

```math
\left(\frac{A}{F}\right)_{\text{mass}} = \left(\frac{A}{F}\right)_{\text{molar}} \times \frac{M_{\text{air}}}{M_{\text{fuel}}}, \qquad \text{methane: } 9.52 \times \frac{28.97}{16} = 17.2
```

```math
\text{LCV} = \text{HCV} - 9H \times h_{fg}, \qquad h_{fg} \approx 2442\ \text{kJ/kg (some books use 2466)}
```

### Doubts cleared

**Doubt: why is methane's molar air-fuel ratio so much smaller than its mass ratio?** Moles count molecules; mass weighs them. Each methane molecule is light (16 g/mol), while air averages 29 g/mol. So 9.52 molecules of air per molecule of fuel weigh 17.2 times as much as the fuel.

**Doubt: why does the Orsat apparatus never show water?** The gas sample is cooled to room temperature before analysis, so nearly all the water vapour condenses and drains away. That is why the result is called a dry analysis.

**Doubt: with too little oxygen, why does CO form instead of some fuel staying unburnt?** In exam problems the fuel is assumed to break up fully. Hydrogen takes its oxygen first, and the carbon gets whatever is left, so some carbon can only reach CO. Unburnt fuel in the products is ruled out unless the question says otherwise.

**Doubt: where does the 9H in the LCV formula come from?** Each kg of hydrogen burns to 9 kg of water (2 kg H₂ + 16 kg O₂ = 18 kg H₂O). So a fuel with mass fraction H makes 9H kg of water per kg of fuel.

### Tricky past questions with solutions

**Q1. GATE ME 2016 (Shift 1).** Propane (C₃H₈) is burned in an oxygen atmosphere with 10% less oxygen than the stoichiometric amount. Assuming no hydrocarbons in the products, the volume percentage of CO in the products is \_\_\_\_\_\_ (numerical answer).

*Answer: about 14.3% (accepted range 13.7 to 14.9).*

1. Full burning: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. So 5 mol of O₂ is the stoichiometric amount.
2. 10% less: 0.9 × 5 = 4.5 mol of O₂. Products are a CO₂ + b CO + c H₂O.
3. Hydrogen: 2c = 8, so c = 4. Carbon: a + b = 3. Oxygen atoms: 2a + b + c = 9, so 2a + b = 5. Subtracting, a = 2 and b = 1.
4. Products: 2 CO₂ + 1 CO + 4 H₂O = 7 mol. CO = 1/7 = 14.3%.

**The traps:** it says oxygen atmosphere, so there is no nitrogen to add. And the percentage includes the water, because the question asks about all products, not a dry Orsat analysis. On a dry basis it would be 1/3 = 33%.

**Q2. ESE Mechanical 2013 (Paper 1).** When a hydrocarbon fuel burns in deficit air, an Orsat analyser will show which gases in the exhaust? (a) CO₂, N₂ and O₂ (b) CO, CO₂, N₂ and O₂ (c) CO, CO₂ and N₂ (d) CO₂, CO, N₂, O₂ and H₂O

*Answer: (c) CO, CO₂ and N₂.*

1. Deficit air: all the oxygen gets used, so there is no free O₂. That removes (a), (b) and (d).
2. Some carbon only reaches CO because oxygen runs short, and nitrogen from the air passes through.
3. Orsat cannot show H₂O in any case, which removes (d) a second time.

**The trap:** (d) lists everything that is really in the exhaust. The question asks what the Orsat shows, not what is there.

**Q3. ESE Mechanical 2016 (Paper 1).** The Orsat apparatus gives: 1. volumetric analysis of dry products of combustion 2. gravimetric analysis of dry products of combustion. Which is correct? (a) 1 only (b) 2 only (c) both (d) neither

*Answer: (a) 1 only.*

The Orsat absorbs one gas at a time from a measured volume of sample and reads how much the volume shrinks. Shrinking volume gives a volume (molar) analysis. Gravimetric means by mass, which it never measures.

**Q4. ESE Mechanical 2022.** Which statement is NOT correct? (a) The Orsat apparatus is a simple, convenient apparatus for volumetric analysis of dry flue gases (b) The calorific values of liquid fuels are generally found using an Orsat apparatus (c) The calorific values of solid and liquid fuels are generally found using a bomb calorimeter (d) In the Orsat apparatus, potassium hydroxide absorbs CO₂

*Answer: (b).*

The Orsat apparatus analyses flue gas composition; it burns nothing and measures no heat. Calorific values of solid and liquid fuels come from a bomb calorimeter, as (c) says.

**The trap:** two instruments from the same chapter are swapped in one option. Keep a one-line job for each: Orsat for flue gas, bomb calorimeter for solid and liquid fuels, Junkers for gas.

**Q5. UPPSC AE Mechanical 2019 (Paper II, held 13 December 2020).** If methane burns with the stoichiometric quantity of air, the air-fuel ratio on a molar basis is: (a) 15.22 : 1 (b) 12.30 : 1 (c) 14.56 : 1 (d) 9.52 : 1

*Answer: (d) 9.52 : 1.*

1. CH₄ + 2 O₂ → CO₂ + 2 H₂O, so 1 mol of methane needs 2 mol of O₂.
2. Air is 21% O₂ by volume, so air needed = 2 ÷ 0.21 = 9.52 mol.

**The trap:** students remember 17.2 for methane and look for something close. That number is by mass. Read whether the question says molar (volume) or mass basis before choosing.

## Sources

Of the 46 past questions, 16 are from ESE, 9 from GATE (8 ME, 1 PI) and 21 from JE, AE and other technical exams. Each was checked on its Testbook question page, which names the paper it was asked in. Every answer was worked out again for this guide; where the Testbook key disagrees with the working (section 4, Q5), the guide says so.

- **1. Basic concepts:** [Q1 GATE 2009](https://testbook.com/question-answer/a-frictionless-piston-cylinder-device-contains-a-g--565ef8b4995a2d0c5d4f427a), [Q2 GATE 2010](https://testbook.com/question-answer/a-monoatomic-ideal-gas-y-1-67-molecular-weight--565828bf995a2d13ea3f3b4f), [Q3 GATE 2021](https://testbook.com/question-answer/a-rigid-insulated-tank-is-initially-evacuated-it--603398e58b5a6b637aed2612), [Q4 SSC JE 2024](https://testbook.com/question-answer/free-expansion-process-is-_________--666d8c797c1073bf7da33577)
- **2. Entropy and availability:** [Q1 GATE 2009](https://testbook.com/question-answer/if-a-closed-system-is-undergoing-an-irreversible-p--565ef6a0995a2d0c5d4f4045), [Q2 ESE 2013](https://testbook.com/question-answer/statement-i-the-inequality-of-clausius-provides--6064cc68334d966b8f0dcbe5), [Q3 ISRO 2013](https://testbook.com/question-answer/consider-the-following-two-processesa-a-heat-s--56582941995a2d13ea3f3bb3), [Q4 ESE 2016](https://testbook.com/question-answer/1000-kjs-of-heat-is-transferred-from-a-constant-t--5ea30315f60d5d53736f53dc), [Q5 SSC JE 2018](https://testbook.com/question-answer/two-reversible-heat-engines-operating-between-temp--5b30e854164dc90c23c530b5), [Q6 GATE PI 2017](https://testbook.com/question-answer/a-reversible-heat-engine-e-operating-in-a-cycle--609abc8f9d5fbe9e43fd5e86)
- **3. Air standard cycles:** [Q1 ESE 2018](https://testbook.com/question-answer/consider-the-following-statements-for-the-air-stan--5ec7c21bf60d5d024b97f054), [Q2 ESE 2015](https://testbook.com/question-answer/the-maximum-net-specific-work-obtainable-in-an-ide--5e91abb1f60d5d01f5033620), [Q3 ESE 2015](https://testbook.com/question-answer/statement-1-with-the-heat-exchanger-gas-turbine--5e91b3cdf60d5d01f5033869), [Q4 TSPSC AEE 2015](https://testbook.com/question-answer/in-case-of-diesel-cycle-increasing-the-cutoff-rat--6323881d36108b7388b3661b)
- **4. IC engines and knocking:** [Q1 ESE 2016](https://testbook.com/question-answer/statement-i-to-prevent-knocking-in-si-engines-t--5ea70c5bf60d5d041a4b7faf), [Q2 UPPSC AE 2019](https://testbook.com/question-answer/knocking-tendency-in-a-si-engine-reduces-with-incr--558daf5a2a396511d048a247), [Q3 MPPSC AE 2022](https://testbook.com/question-answer/which-of-the-following-statements-are-correct-for--62c5618a372e28f0a54c68ec), [Q4 RPSC Lecturer 2020](https://testbook.com/question-answer/during-a-morse-test-on-a-4-cylinder-engine-the-fo--60f983b9e262ef9463d5dbda), [Q5 BPSC AE 2024](https://testbook.com/question-answer/a-four-stroke-automobile-engine-operates-at-a-fuel--6809dff3bc1094a231db99d5)
- **5. Engine systems:** [Q1 UPPSC AE 2013](https://testbook.com/question-answer/consider-the-following-statementsknock-in-the-s--5e8ab92cf60d5d2836488929), [Q2 ESE 2016](https://testbook.com/question-answer/the-objective-of-supercharging-an-engine-is1-t--5e9db25cf60d5d2e9f7d824e), [Q3 UPRVUNL JE 2016](https://testbook.com/question-answer/in-some-carburettors-an-economizer-device-is-used--60a6ad2ae9531a2e12092c79), [Q4 JKSSB JE 2015](https://testbook.com/question-answer/as-the-rating-of-the-pressure-cap-increases-in-the--60250537e05fa56a7ad67fc6)
- **6. Steam, Rankine and boilers:** [Q1 ESE 2017](https://testbook.com/question-answer/statement-i-providing-reheat-in-a-rankine-cycle--5ec71f0bf60d5d024b9710cf), [Q2 TNTRB 2017](https://testbook.com/question-answer/with-reheat-rankine-cycle--5f2fb665a7bbbc0d15c575b7), [Q3 JSSC JE 2022](https://testbook.com/question-answer/regeneration-increases-thermal-efficiency-in-a-ran--64b256cc1b6dbf5460c49495), [Q4 SSC JE 2019](https://testbook.com/question-answer/the-critical-point-of-water-is-not-characterized-b--5e181f36f60d5d2d6cf163b5), [Q5 NHPC JE 2025](https://testbook.com/question-answer/in-a-separating-and-throttling-calorimeter-the-st--690a80cbac7e94ea17446f99)
- **7. Nozzles and turbines:** [Q1 GATE 2022](https://testbook.com/question-answer/the-figure-shows-a-purely-convergent-nozzle-with-a--620f50fcac7f563642663fb7), [Q2 ESE 2015](https://testbook.com/question-answer/statement-i-the-supersaturated-expansion-in-noz--5ece0f3af60d5d107e91ad59), [Q3 ESE 2015](https://testbook.com/question-answer/consider-the-following-statements-about-steam-turb--5ecd2296f60d5d024b9cb31b), [Q4 GATE 2018](https://testbook.com/question-answer/select-the-correct-statement-for-50-reaction-stag--5b7579ab86d5270c3a00dcef), [Q5 MPPSC AE 2022](https://testbook.com/question-answer/in-the-4-stage-steam-turbines-with-pressure-compou--62c51db931b41cb62fec8f3f)
- **8. Air compressors:** [Q1 ESE 2017](https://testbook.com/question-answer/consider-the-following-statements-for-single-stage--5eb5234af60d5d187fa64b54), [Q2 MPSC AMVI 2005](https://testbook.com/question-answer/the-clearance-volume-in-reciprocating-air-compress--5e8b4229faead60d2b861433), [Q3 BPSC AE 2022](https://testbook.com/question-answer/a-four-stage-compressor-with-perfect-intercooling--5835450e995a2d7a0c55ddd5), [Q4 TSPSC AEE 2015](https://testbook.com/question-answer/consider-the-following-statements-the-volumetric--6323840c36108b7388b3151b)
- **9. Refrigeration and air conditioning:** [Q1 ESE 2022](https://testbook.com/question-answer/consider-the-following-statements-in-a-vapor-compr--627a982d69bba1f257dc8509), [Q2 ESE 2016](https://testbook.com/question-answer/consider-the-following-statements-for-the-appropri--5e9db425f60d5d2e9f7d8329), [Q3 GATE 2017](https://testbook.com/question-answer/if-a-mass-of-moist-air-contained-in-a-closed-metal--58f5cde0e9f1310a6f0c171b), [Q4 UKPSC JE 2013](https://testbook.com/question-answer/a-heat-pump-working-on-a-reversed-carnot-cycle-has--61bb029d2e6164996b7cfeb1)
- **10. Fuels and combustion:** [Q1 GATE 2016](https://testbook.com/question-answer/propane-c3h8-is-burned-in-an-oxygen-atmosphere-w--5e01e68596d4c00d01f3361a), [Q2 ESE 2013](https://testbook.com/question-answer/when-a-hydrocarbon-fuel-burns-in-deficit-air-orsa--605461a4fafbf80de30d2b1d), [Q3 ESE 2016](https://testbook.com/question-answer/the-orsat-apparatus-gives1-volumetric-analysis--5eb3aa03f60d5d3027dcdbd5), [Q4 ESE 2022](https://testbook.com/question-answer/which-one-of-the-following-statements-is-not-corre--627b218603510c1b8d675793), [Q5 UPPSC AE 2019](https://testbook.com/question-answer/if-methane-undergoes-combustion-with-the-stoichiom--582d5c9c995a2d612098490a)
