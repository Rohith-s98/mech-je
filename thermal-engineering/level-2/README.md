# Thermal Engineering Level 2: Theory Deep Dive

Nov 8, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words, so the tricky questions in Level 3 and the mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the links under each topic heading open the same topic in Level 1 (short notes) and Level 3 (tricky questions). After a mock in Level 4, each weak topic links back here.

Conventions used throughout:

- Heat added to the system is positive and work done by the system is positive, so the first law reads Q = ΔU + W. Chemistry books often use ΔU = Q + W, with W as work done on the system. It is the same law with a different sign rule.
- Temperatures go into formulas in kelvin (K = °C + 273). Pressure is in bar or kPa (1 bar = 100 kPa), energy in kJ.
- Air: R = 0.287 kJ/kg K, cp = 1.005 kJ/kg K, cv = 0.718 kJ/kg K, γ = cp/cv = 1.4.

## 1. Basic concepts and laws of thermodynamics

Thermodynamics is energy bookkeeping: draw a line around something, then count every bit of energy that crosses the line. Most trick questions in this topic test where you drew the line, or which way you counted a sign.

### The picture

Think of a bank account. Internal energy U is the balance, heat Q is a deposit and work W is a withdrawal. The first law, Q = ΔU + W, just says deposits minus withdrawals equal the change in balance.

The same account explains path functions. Today's balance does not depend on how you got there, so U is a property. The deposits and withdrawals do depend on the route: two months can end at the same balance with very different traffic. That is why heat and work are not properties.

### Twisted points

**Closed is not sealed.** A closed system keeps its mass fixed, but energy can cross. A pressure cooker on the stove is closed until the whistle lifts; once steam escapes, it is open. An open system lets mass cross: turbines, nozzles, compressors, pumps. An isolated system lets nothing cross; a good flask comes close for a while, but strictly only the universe qualifies.

**Adiabatic is not isolated.** Adiabatic stops heat only. Stir the water in an insulated tank with a paddle and work crosses the boundary, so the water warms up with Q = 0.

**Intensive or extensive: cut it in half.** Cut a 2 kg lump of steam into two halves. Each half keeps the same pressure, temperature and density, so those are intensive. Volume, energy and entropy halve, so those are extensive. Divide any extensive property by mass and you get an intensive one: specific volume v = V/m, specific enthalpy h = H/m.

**Heat, temperature and internal energy are three different things.** A body holds internal energy; it never holds heat. Heat is the name for energy only while it crosses a boundary because of a temperature difference. A bucket of water at 40 °C has far more internal energy than a cup of tea at 90 °C, yet if you stand the cup in the bucket, heat flows from the tea to the bucket. Heat follows temperature, not the amount of energy. Energy that crosses for any other reason (a turning shaft, a moving piston, an electric current) is work.

**Path functions: same trip, different fuel bill.** Driving from Kochi to Munnar, you gain about 1,500 m of height whichever road you take; that is like a property. The fuel you burn depends on the road; that is like heat and work. On a P-V diagram, work is the area under the path, so two paths between the same two states give different work. Over a full cycle every property comes back to its start (∮dU = 0), but the work is the enclosed area, which is not zero. That is why books write δQ and δW for heat and work but dU for internal energy.

**Quasi-static: one grain of sand at a time.** Picture a piston held down by a pile of sand. Remove grains one by one and the gas rises slowly, in equilibrium at every instant, so each state has one pressure and can be plotted. The process is a line on the P-V diagram and work = ∫p dV. Pull out a pin and let the piston jump instead: the gas swirls, has no single pressure, and the process can only be drawn dashed.

**Free expansion: the gas does no work.** A rigid, insulated tank has gas on one side of a partition and vacuum on the other. Break the partition. The gas pushes against nothing, so W = 0; the tank is insulated, so Q = 0; so ΔU = 0, and for an ideal gas the temperature does not change. The volume did change, but ∫p dV only gives work for quasi-static processes, and this one is not. It is irreversible, so entropy rises (Topic 2).

**Zeroth law: why a thermometer works.** If body A matches the thermometer C and body B also matches C, then A matches B without ever touching it. It is called zeroth because it was stated after the first and second laws, though logically it comes first: you need temperature before you can talk about heat.

**ΔU = m cv ΔT holds for every ideal-gas process, not just constant volume.** The "v" in cv makes people think it only works at constant volume. For an ideal gas, internal energy depends on temperature alone (Joule's law), so any two states at the same two temperatures have the same ΔU, whatever the path. Constant volume is just how cv is measured. The same goes for ΔH = m cp ΔT. What needs the special process is the heat: Q = m cv ΔT only at constant volume, and Q = m cp ΔT only at constant pressure.

**Why cp is bigger than cv.** Heated at constant pressure, the gas expands and spends part of the heat pushing back the surroundings. So the same temperature rise needs extra heat, and that extra, per kg per kelvin, is exactly R: cp − cv = R. For air, 1.005 − 0.718 = 0.287.

**Enthalpy is internal energy plus the cost of making room.** In anything that flows, each kilogram that enters has to push the fluid ahead of it out of the way. That push is the flow work pv. So a kilogram crossing the boundary carries u + pv, which is its enthalpy h. Think of boarding a crowded bus: you bring your own energy, and you also spend effort shoving to make room. This is why closed systems are worked with U and flow devices with H.

**One formula, five processes.** Every ideal process fits pV^n = constant:

| n | Process | What stays constant | Everyday example |
| --- | --- | --- | --- |
| 0 | Isobaric | Pressure | Heating air in a cylinder with a free, weighted piston |
| 1 | Isothermal | Temperature (ideal gas) | Very slow compression with steady cooling |
| Between 1 and γ | Polytropic | Nothing simple | A real compressor with a cooling jacket |
| γ | Reversible adiabatic | Entropy | Fast compression in an insulated cylinder |
| ∞ | Isochoric | Volume | Heating gas in a rigid tank |

On a P-V diagram the adiabatic curve is steeper than the isothermal one through the same point. During adiabatic compression the temperature rises too, so pressure climbs faster than volume alone would push it.

**Heat goes in, yet temperature falls.** In a polytropic expansion with n between 1 and γ, the gas receives heat but its temperature drops. It does more work than the heat it gets, so it pays the difference out of internal energy. The heat is a fixed fraction of the work:

```math
Q = W \, \frac{\gamma - n}{\gamma - 1}
```

Check the ends: n = 1 gives Q = W (isothermal), and n = γ gives Q = 0 (adiabatic).

**SFEE: the first law for things that flow.** Per kilogram, enthalpy plus kinetic plus potential energy coming in, plus heat added, equals the same three going out, plus shaft work. Each device simply drops the terms that are too small to matter:

| Device | Terms dropped | What the SFEE becomes |
| --- | --- | --- |
| Turbine | Heat, kinetic and potential energy change | w = h1 − h2 |
| Compressor or pump | Heat, kinetic and potential energy change | w = h1 − h2 (negative: work goes in) |
| Nozzle | Heat, work, inlet velocity | c2 = √(2(h1 − h2)) |
| Boiler or condenser | Work, kinetic and potential energy change | q = h2 − h1 |
| Throttle valve | Heat, work, kinetic energy change | h1 = h2 |

**Throttling keeps enthalpy, not temperature.** Squeeze a fluid through a part-open valve and h at the exit equals h at the inlet. For an ideal gas, h depends on temperature only, so the temperature stays put. For a real fluid it usually drops, which is how the expansion valve in a fridge makes the refrigerant cold. The Joule-Thomson coefficient μ = (∂T/∂p) at constant h tells which way it goes: μ > 0 means it cools as pressure falls (refrigerants, most gases at room temperature), μ = 0 for an ideal gas, and μ < 0 for hydrogen and helium at room temperature, which warm up. Throttling is irreversible, so entropy rises even though enthalpy is the same.

### Worked numbers

1. **Signs.** A gas receives 50 kJ of heat and does 20 kJ of work: ΔU = 50 − 20 = +30 kJ. Now the reverse: 20 kJ of work is done on the gas and it loses 50 kJ of heat. Then Q = −50 and W = −20, so ΔU = −50 − (−20) = −30 kJ.
2. **Heating at constant pressure.** 1 kg of air goes from 300 K to 400 K at constant pressure. ΔU = 0.718 × 100 = 71.8 kJ and Q = 1.005 × 100 = 100.5 kJ. So W = Q − ΔU = 28.7 kJ, which matches mRΔT = 0.287 × 100.
3. **Isothermal compression.** 0.1 m³ of air at 1 bar (100 kPa) is compressed slowly at constant temperature to 0.02 m³. W = p1V1 ln(V2/V1) = 100 × 0.1 × ln 0.2 = 10 × (−1.609) = −16.1 kJ. The minus sign means work was done on the gas. Since ΔU = 0, Q = W = −16.1 kJ: the gas gave out that much heat.
4. **Nozzle.** Steam enters with h1 = 3000 kJ/kg at negligible speed and leaves with h2 = 2800 kJ/kg. c2 = √(2 × 200 × 1000) = 632 m/s. The trap is the units: kJ/kg must become J/kg before the square root. The shortcut c2 = 44.72 √Δh, with Δh in kJ/kg, does it for you: 44.72 × 14.14 = 632 m/s.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| A closed system lets nothing cross | Energy crosses freely; only mass is fixed |
| Adiabatic means isolated | Adiabatic blocks heat only; work can still cross |
| A hot body contains a lot of heat | It contains internal energy; heat exists only in transit |
| ΔU = m cv ΔT needs constant volume | It holds for any ideal-gas process; only Q = m cv ΔT needs constant volume |
| Isothermal means no heat flows | For an ideal gas ΔU = 0, so Q = W: heat flows the whole time |
| Adiabatic means constant temperature | Adiabatic means Q = 0; the temperature still changes, because all the work comes out of or goes into internal energy |
| Throttling is isentropic | Enthalpy stays the same and entropy rises |
| Free expansion work is ∫p dV | It is zero: nothing resists the gas |
| Specific volume is extensive | Every "specific" (per kg) property is intensive |

## 2. Entropy, Carnot cycle and availability

The first law says energy is never lost. The second law says it does lose quality: heat always runs downhill in temperature, and only part of it can be turned into work on the way. Entropy is the number that keeps score of that loss.

### The picture

Carnot pictured a heat engine as a waterwheel. Water falling from a high tank to a low one turns the wheel, and the work depends on how far it falls. Heat "falling" from a hot source at TH to a cold sink at TL drives an engine the same way.

Two things follow. The water has to leave at the bottom, so an engine must always reject some heat to the sink. And the fall is measured from absolute zero, the true floor, which is why every formula here needs kelvin.

### Twisted points

**Why no engine can be 100% efficient.** Kelvin-Planck: an engine working in a cycle must hand some heat to a colder body. A car engine does this through its radiator and exhaust. Even a perfect engine between 1000 K and 300 K turns only 70% of the heat into work; the other 30% must go to the sink. A machine that turned all its heat into work would be a perpetual motion machine of the second kind.

**The two statements are one law.** Clausius says heat will not flow from cold to hot on its own. If you could build an engine that broke Kelvin-Planck, you could use its work to drive a fridge and get a net flow of heat from cold to hot with nothing else changing, breaking Clausius. Break one and you break the other, so they are equivalent.

**Refrigerator and heat pump are the same machine with different jobs.** Both use work to move heat from cold to hot. A refrigerator is judged by the heat it removes from the cold side; a heat pump by the heat it delivers to the hot side. A reverse-cycle air conditioner is a refrigerator in summer and a heat pump in winter. The hot side receives the heat taken from the cold side plus the work, which is why COP of a heat pump = COP of a refrigerator + 1.

**A COP above 1 breaks no law.** A heat pump with COP 3 uses 1 kW of electricity to deliver 3 kW of heat. It does not create energy: it moves 2 kW from the outside air and adds the 1 kW of work. Efficiency is about converting energy, COP is about moving it, which is why COP can be 3, 5 or more.

**Carnot efficiency depends only on the two temperatures, and they must be in kelvin.** All reversible engines between the same two temperatures have the same efficiency, whatever fluid they use. Between 27 °C and 327 °C: 1 − 300/600 = 50%. Using °C by mistake gives 1 − 27/327 = 92%, which is nonsense.

**Lowering the sink helps more than raising the source.** Start with 600 K and 300 K: η = 50%. Raise the source by 50 K: 1 − 300/650 = 53.8%. Lower the sink by 50 K instead: 1 − 250/600 = 58.3%. The sink sits on the top of the fraction TL/TH, so a change there counts in full, while a change in TH is diluted. In practice the sink is the river or the atmosphere and cannot be cooled cheaply, so designers raise the source instead.

**Why no real engine runs on the Carnot cycle.** Isothermal heat addition with a gas has to be very slow, while the adiabatic strokes have to be very fast; one machine cannot do both. The cycle also gives very little net work for its size (a tiny mean effective pressure), so friction would eat most of it. The Carnot cycle is a yardstick, not a design. Steam plants come closest, because boiling water takes in heat at constant temperature on its own.

**Entropy in plain words: heat divided by how hot it is.** dS = δQ/T for a reversible process. The same 1000 kJ of heat added at 300 K raises entropy by 3.33 kJ/K; added at 1000 K it raises it by only 1 kJ/K. Think of a thousand rupees: to a student it is a big change, to a millionaire hardly any. Heat delivered at high temperature brings little entropy per kJ, which is why it is high-grade energy and turns into work more easily.

**Entropy is a property, even though it is defined with reversible heat.** Since it is a property, ΔS between two states is the same whatever the actual process. For an irreversible process you imagine any reversible path between the same end states and calculate along that. Free expansion is the classic case: Q = 0, yet entropy rises. 1 kg of air that doubles its volume in a free expansion has ΔS = mR ln(V2/V1) = 0.287 × ln 2 = 0.199 kJ/K.

**A system's entropy can fall; the universe's cannot.** A cup of coffee cooling on the table loses entropy. The room gains more than the coffee loses, because the same heat enters the room at a lower temperature. Say the coffee at about 350 K gives 10 kJ to a room at 300 K. Coffee: −10/350 = −0.0286 kJ/K. Room: +10/300 = +0.0333 kJ/K. Net: +0.0047 kJ/K, so the total goes up. Entropy of an isolated system stays the same only if every process in it is reversible.

**Isentropic means reversible and adiabatic together.** Adiabatic alone is not enough. Steam expanding in a real, insulated turbine has Q = 0, but friction generates entropy, so its entropy rises. On a T-s diagram the ideal expansion is a vertical line and the real one leans to the right. That lean is what turbine and compressor efficiencies measure (Topics 7 and 8).

**Reading a T-s diagram.** Area under a process line is the heat for that process; the area enclosed by a cycle is the net work. An isothermal process is a horizontal line and an isentropic one is a vertical line, so the Carnot cycle is a rectangle. For a gas, a constant-volume line is steeper than a constant-pressure line: at constant pressure part of the heat leaves as work, so the temperature climbs more slowly for the same entropy rise.

**Clausius inequality: a quick test for impossible engines.** Add up Q/T for every heat transfer in a cycle, counting heat in as positive and heat out as negative. Zero means reversible, negative means real and possible, positive means impossible. An inventor claims an engine that takes 1000 kJ at 500 K and rejects 400 kJ at 300 K, giving 600 kJ of work. 1000/500 − 400/300 = 2 − 1.33 = +0.67, so it is impossible. The Carnot limit agrees: 1 − 300/500 = 40%, but the claim is 60%.

**Availability (exergy): the part of energy that can still do work.** Energy is only useful while it differs from the surroundings, which sit at T0. Of 1000 kJ of heat at 1000 K, with surroundings at 300 K, at most 1000 × (1 − 300/1000) = 700 kJ can become work. The other 300 kJ is unavailable, and it equals T0 × ΔS = 300 × 1 kJ/K. The same 1000 kJ at 400 K is worth only 250 kJ of work. That is why a flame is valuable and a tank of warm water is not, though both hold energy.

**Irreversibility is availability destroyed.** Every real process (friction, mixing, heat flowing across a temperature gap) generates entropy. The lost work is I = T0 × S\_gen, the Gouy-Stodola relation. Energy is not lost; its ability to do work is.

**Third law.** The entropy of a perfect crystal is zero at absolute zero. It gives entropy a true zero, and it implies absolute zero can be approached but never reached.

```math
\eta_{Carnot} = 1 - \frac{T_L}{T_H} \qquad COP_R = \frac{T_L}{T_H - T_L} \qquad COP_{HP} = \frac{T_H}{T_H - T_L} = COP_R + 1
```

```math
\text{Available energy} = Q\left(1 - \frac{T_0}{T}\right) \qquad \text{Unavailable energy} = T_0 \, \Delta S \qquad I = T_0 \, S_{gen}
```

### Worked numbers

1. **Carnot engine.** Source 527 °C (800 K), sink 27 °C (300 K), heat in 1000 kJ. η = 1 − 300/800 = 62.5%. Work = 625 kJ, heat rejected = 375 kJ. Check: 1000/800 = 375/300 = 1.25 kJ/K, so the entropy taken in equals the entropy rejected, as it must for a reversible cycle.
2. **Fridge and heat pump.** Freezer box at −3 °C (270 K), kitchen at 27 °C (300 K). COP\_R = 270/30 = 9 and COP\_HP = 300/30 = 10. A fridge removing 900 W from the box needs at least 100 W of work and dumps 1000 W into the kitchen.
3. **Entropy of heating water.** 1 kg of water (c = 4.18 kJ/kg K) is heated from 300 K to 350 K. Temperature changes, so integrate: ΔS = mc ln(T2/T1) = 4.18 × ln(1.1667) = 4.18 × 0.1542 = 0.644 kJ/K. Q/T with a single temperature would be wrong here.
4. **Available energy.** 500 kJ of heat is drawn from a source at 500 K, with surroundings at 300 K. Available = 500 × (1 − 300/500) = 200 kJ. Unavailable = 300 × (500/500) = 300 kJ.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| Entropy can never decrease | Only the entropy of an isolated system (or the universe) never decreases; a system that loses heat loses entropy |
| Adiabatic means isentropic | Only a reversible adiabatic process is isentropic; a real one has rising entropy |
| Carnot efficiency depends on the working fluid | It depends only on TH and TL |
| COP above 1 creates energy | It only moves heat; the delivered heat is moved heat plus work |
| Raising the source is the best way to improve efficiency | Lowering the sink by the same amount helps more |
| ΔS needs a reversible process to exist | ΔS exists for any process; you just calculate it along a reversible path |
| Unavailable energy is destroyed | It still exists, but cannot be turned into work in those surroundings |
| A positive Clausius sum means irreversible | A positive sum means impossible; negative means irreversible |

## 3. Air standard cycles (Otto, Diesel, Dual, Brayton)

An air standard cycle is an engine with the mess taken out: no fuel, no flame, no exhaust, just a fixed lump of air heated and cooled in a loop. It gives the best efficiency an engine type could ever reach, and it lets you compare engine types fairly.

### The picture

Think of a slow-motion replay of a cricket shot with the wind and the crowd edited out. It is not exactly what happened, but it shows the shape of the shot clearly. The air standard cycle does the same for an engine, using these simplifications:

- The working fluid is air only, treated as an ideal gas with constant cp and cv.
- Burning fuel is replaced by heat added from outside; the exhaust stroke is replaced by heat rejected to a sink.
- Every process is reversible, and the same air goes round the cycle again and again.

Each cycle is named by how heat goes in. Otto adds it at constant volume (a spark burns the mixture almost instantly at top dead centre). Diesel adds it at constant pressure (fuel is sprayed in over part of the stroke as the piston moves down). Dual does a bit of each. Brayton adds and rejects it at constant pressure in a steady flow (a gas turbine).

### Twisted points

**Otto efficiency depends only on the compression ratio.** η = 1 − 1/r^(γ−1). It does not depend on how much heat you add or how hard the engine works. During compression the temperature rises by the factor r^(γ−1), and during expansion it falls by the same factor. So heat is always added and rejected at temperatures in a fixed ratio, which fixes the efficiency. At r = 8, η = 1 − 1/2.297 = 56.5%.

**Compression ratio counts the clearance too.** r = (Vs + Vc)/Vc, total volume over clearance volume, not swept over clearance. If the clearance is 12.5% of the swept volume, r = 1 + 1/0.125 = 9.

**So why not run a petrol engine at r = 20?** Because the mixture is already in the cylinder during compression, and if it gets too hot it ignites on its own and knocks (Topic 4). Petrol engines stay around r = 8 to 11. A diesel compresses only air, so it can and must use r = 14 to 22 to make the air hot enough to ignite the fuel.

**At the same compression ratio, Otto beats Diesel.** The Diesel formula is the Otto one multiplied by a bracket bigger than 1:

```math
\eta_{Diesel} = 1 - \frac{1}{r^{\gamma-1}} \cdot \frac{\rho^{\gamma} - 1}{\gamma(\rho - 1)}
```

Here ρ = V3/V2 is the cut-off ratio: how far the piston moves while fuel is still being injected. The Diesel adds heat while the piston is already moving down, so the gas expands less after the heat goes in (expansion ratio r/ρ, smaller than r). It rejects heat from a hotter gas. That is also why a diesel gets less efficient as ρ grows, which is at heavier load.

**Yet real diesel engines are more efficient.** They run at a much higher compression ratio, and that wins. At r = 16 with ρ = 2, the Diesel cycle gives 61.4%, against 56.5% for an Otto cycle at its realistic r = 8. Compare at the same r = 16 and Otto would give 67%. Whether Otto or Diesel "wins" depends entirely on what is held equal:

| Held equal | Order of efficiency |
| --- | --- |
| Same compression ratio and same heat input | Otto > Dual > Diesel |
| Same peak pressure and peak temperature | Diesel > Dual > Otto |
| Same peak pressure and same heat input | Diesel > Dual > Otto |

With the same peak pressure, the Diesel reaches it with a much higher compression ratio, so more of the temperature rise comes "free" from compression and heat is added at a higher average temperature.

**Dual is the parent of the other two.** Heat goes in partly at constant volume (pressure ratio α = p3/p2) and partly at constant pressure (cut-off ratio ρ). Set ρ = 1 and you get Otto; set α = 1 and you get Diesel. It describes modern high-speed diesels best. It is also called the limited-pressure cycle, because the constant-volume part stops at a set peak pressure.

**Brayton efficiency depends only on the pressure ratio.** η = 1 − 1/rp^((γ−1)/γ). At rp = 10, η = 1 − 1/1.931 = 48.2%. It is really the Otto formula in disguise: the temperature rise in compression is rp^((γ−1)/γ) instead of r^(γ−1). An Otto cycle with r = 5.2 has the same 48.2%.

**A gas turbine spends much of its work driving its own compressor.** The compressor sits on the same shaft and eats 40 to 80% of the turbine's work. So the work ratio (net work over turbine work) is low, and small losses in the turbine or compressor wipe out the net output. Piston engines do not have this problem, since compression takes only a small part of the cycle's work.

**Best efficiency and best work happen at different pressure ratios.** Efficiency keeps rising with rp. Net work per kg rises, peaks, then falls back to zero, because at very high rp the compressor heats the air nearly to the turbine inlet temperature and there is no room left to add heat. The peak work comes where the compressor exit and turbine exit temperatures are equal:

```math
r_{p,\,opt} = \left(\frac{T_{max}}{T_{min}}\right)^{\frac{\gamma}{2(\gamma-1)}} \qquad T_2 = T_4 = \sqrt{T_1 T_3}
```

With T1 = 300 K and T3 = 1200 K, rp,opt = 4^1.75 = 11.3, and T2 = T4 = 600 K.

**A regenerator helps only at low pressure ratios.** It uses the hot turbine exhaust to preheat the air leaving the compressor, so the fuel only has to finish the job. This works only while the exhaust is hotter than the compressed air. In the example above that stops at rp = 11.3; above it a regenerator would cool the air. With an ideal regenerator, efficiency falls as rp rises, the opposite of the simple cycle: 1 − (T1/T3) rp^((γ−1)/γ) gives 62.8% at rp = 4 but 44.8% at rp = 16, where the simple cycle gives 54.7%.

**Mean effective pressure: work per litre.** MEP is the steady pressure that, pushing over one full stroke, would give the same net work as the whole cycle: MEP = net work / swept volume. It lets you compare engines of different sizes. The Carnot cycle has high efficiency but a tiny MEP, which is one more reason nobody builds one.

**Stirling and Ericsson can match Carnot.** Stirling adds and rejects heat isothermally and joins those with two constant-volume processes; Ericsson uses two constant-pressure processes instead. With a perfect regenerator storing the heat between the two middle processes, all the outside heat is taken in at TH and given out at TL, so both reach Carnot efficiency.

**Why a real engine gets only about half the air standard figure.** cp and cv rise with temperature, hot gases dissociate (split up and absorb heat), heat leaks to the cylinder walls, burning takes time, and the valves cost pumping work. The fuel-air cycle, which allows for the first two, sits between the air standard cycle and the real engine.

```math
\eta_{Otto} = 1 - \frac{1}{r^{\gamma - 1}} \qquad \eta_{Brayton} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}} \qquad r = \frac{V_s + V_c}{V_c} \qquad MEP = \frac{W_{net}}{V_s}
```

### Worked numbers

1. **A full Otto cycle.** r = 8, T1 = 300 K, peak T3 = 2000 K, air. Compression: T2 = 300 × 8^0.4 = 300 × 2.297 = 689 K. Expansion: T4 = 2000/2.297 = 871 K. Heat in = 0.718 × (2000 − 689) = 941 kJ/kg. Heat out = 0.718 × (871 − 300) = 410 kJ/kg. Net work = 531 kJ/kg and η = 531/941 = 56.5%, exactly the formula's answer.
2. **Diesel at r = 16, ρ = 2.** 16^0.4 = 3.031 and 2^1.4 = 2.639. Bracket = (2.639 − 1)/(1.4 × 1) = 1.171. η = 1 − 1.171/3.031 = 1 − 0.386 = 61.4%.
3. **Brayton.** rp = 10: 10^0.2857 = 1.931, so η = 48.2%. With T1 = 300 K, the compressor exit is 300 × 1.931 = 579 K.
4. **Compression ratio from clearance.** Swept volume 500 cc, clearance 62.5 cc. r = (500 + 62.5)/62.5 = 9, and the Otto efficiency is 1 − 1/9^0.4 = 1 − 1/2.408 = 58.5%.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| Otto efficiency rises with load | Air standard Otto efficiency depends on r alone |
| Compression ratio = swept / clearance | It is (swept + clearance) / clearance |
| Diesel cycle is always more efficient than Otto | Only at its higher compression ratio, or for the same peak pressure; at the same r Otto wins |
| A longer fuel cut-off improves a diesel | Larger ρ lowers efficiency |
| Brayton efficiency depends on turbine inlet temperature | Ideal Brayton efficiency depends on pressure ratio only; the inlet temperature sets the work and the optimum rp |
| A regenerator always helps a gas turbine | Only when the turbine exhaust is hotter than the compressor exit |
| Carnot is the best cycle to build | It has the best efficiency but almost no MEP |

## 4. IC engines: working, parts, performance, knocking

An engine breathes in, squeezes, burns and breathes out, over and over. Almost every question in this topic is about when each of those happens, how much of the power survives to the shaft, and what makes the burning go wrong.

### The picture

Suck, squeeze, bang, blow. A four-stroke engine gives each of these its own stroke, so it gets one bang every two crank revolutions. A two-stroke engine does two of them at once on each stroke, so it bangs every revolution.

Think of the power the way you think of a salary. Indicated power (IP) is the gross pay the gas earns on the piston. Friction power (FP) is the deductions: piston rings, bearings, the valve train, the pumps. Brake power (BP) is the take-home pay at the crankshaft. Mechanical efficiency is take-home over gross, BP/IP.

### Twisted points

**One power stroke per two revolutions.** In a four-stroke engine the crank turns twice for each cycle, so the camshaft, which opens each valve once per cycle, turns at half crank speed. This is why the IP formula uses n = N/2 power strokes per minute for a four-stroke and n = N for a two-stroke.

**A two-stroke does not give double the power.** On paper it fires twice as often. In practice part of each stroke is lost while the ports are uncovered, some fresh charge escapes straight out of the exhaust port (short-circuiting), and burnt gas is never fully cleared. It gives roughly 1.7 to 1.8 times the power of a four-stroke of the same size, with higher fuel use and smoke.

**Why a two-stroke petrol engine needs oil in its fuel.** Its crankcase is used to pre-compress the fresh charge before pushing it up through the transfer port. A crankcase full of charge cannot also be an oil sump, so the oil travels with the petrol and lubricates as a mist.

**Valves do not open and close at the dead centres.** Gases have inertia, like a crowd still running into a train after the whistle. So the inlet valve opens about 10° before TDC and closes about 30 to 40° after BDC, letting the moving air keep ramming in after the piston has turned round. The exhaust valve opens about 40° before BDC, so most of the burnt gas blows out under its own pressure, and closes a little after TDC. Near TDC both valves are open together: this is valve overlap.

**The spark comes before TDC.** The flame needs a few milliseconds to cross the cylinder. To get peak pressure just after TDC, the spark is fired early (spark advance), and earlier still at higher speeds because the same milliseconds cover more crank degrees. A diesel starts injection before TDC for the same reason.

**Petrol and diesel engines control power in opposite ways.** A petrol engine needs a nearly fixed air-fuel ratio to burn, so it throttles the amount of mixture: quantity governing. A diesel always takes a full charge of air and simply injects less fuel at light load, so the mixture gets leaner: quality governing. The throttle plate costs a petrol engine pumping work at part load, which is one reason diesels are more economical.

**Two efficiencies multiply.** Brake thermal efficiency = indicated thermal efficiency × mechanical efficiency, because BP/fuel = (IP/fuel) × (BP/IP). Relative efficiency compares the real engine with its air standard cycle: indicated thermal efficiency divided by the air standard efficiency.

**Finding friction power.** You cannot measure FP directly, so each test finds it a different way:

| Test | How it works | Used for |
| --- | --- | --- |
| Willan's line | Plot fuel used against BP at constant speed and extend the straight line back to zero fuel; the negative BP where it meets the axis is the FP | CI engines, where fuel use is a straight line with load |
| Morse test | Cut out one cylinder at a time and reduce the load to bring the speed back; the drop in BP is that cylinder's IP | Multi-cylinder SI engines |
| Motoring test | Drive the engine with an electric motor, no fuel; the motor's power is the FP | Any engine with a motoring dynamometer |

**Volumetric efficiency is below 100% for good reasons.** Hot walls warm the incoming air so it expands, the throttle and valves restrict flow, and leftover exhaust takes up room. At high speed the valves have less time open, so volumetric efficiency falls further. Supercharging pushes it above 100%, because it is measured against the swept volume at ambient conditions.

**bsfc and efficiency are two views of one number.** bsfc is kilograms of fuel per kWh of brake output. Since 1 kWh = 3600 kJ, brake thermal efficiency = 3600/(bsfc × CV), with bsfc in kg/kWh and CV in kJ/kg. Lower bsfc means higher efficiency.

**SI knock happens at the end of burning.** The spark starts a flame that sweeps across the chamber. Ahead of it, the unburnt end gas is squeezed and heated by the burning part. If it gets hot enough to ignite on its own before the flame arrives, it explodes all at once. Two pressure fronts collide, the cylinder rings (the ping you hear), and pistons and plugs overheat. Picture a line of dominoes whose last few fall by themselves before the wave reaches them.

**CI knock happens at the start of burning.** A diesel needs its fuel to ignite on its own. After injection begins there is a short ignition delay while the droplets heat up and vaporise. If the delay is too long, too much fuel piles up, and when it does ignite it all burns at once with a violent pressure rise.

**So the cures are opposite.** In a petrol engine you want the end gas to resist self-ignition (a long delay). In a diesel you want the fuel to self-ignite quickly (a short delay). That reverses almost every factor:

| Factor | To reduce SI knock | To reduce CI knock |
| --- | --- | --- |
| Compression ratio | Lower | Higher |
| Inlet air temperature | Lower | Higher |
| Inlet pressure (supercharging) | Lower | Higher |
| Cylinder wall temperature | Lower | Higher |
| Engine speed | Higher (more turbulence, faster flame) | Lower |
| Cylinder size | Smaller | Larger |
| Fuel | High octane (hard to self-ignite) | High cetane (easy to self-ignite) |

**Good petrol is bad diesel.** Octane number rates resistance to self-ignition: iso-octane is 100 and n-heptane is 0, so 91-octane petrol knocks like a blend of 91% iso-octane and 9% n-heptane. Cetane number rates ease of self-ignition: n-cetane is 100 and alpha-methyl naphthalene is 0. A fuel with a high octane number has a low cetane number, and the other way round.

**Pre-ignition is not knock.** Pre-ignition is the mixture lighting from a hot spot, such as a glowing carbon deposit or an overheated plug, before the spark fires. Knock is the end gas igniting after the spark. Each can lead to the other, since pre-ignition makes the cylinder hotter and knock creates hot spots.

**Stages of combustion.** SI: ignition lag, then flame propagation, then afterburning. CI: ignition delay, then rapid (uncontrolled) combustion of the fuel that piled up, then controlled combustion as fuel burns while it is injected, then afterburning.

### Worked numbers

1. **Swept volume and IP.** Single-cylinder four-stroke, bore 100 mm, stroke 120 mm, imep 6 bar, 1500 rpm. Area = π/4 × 0.1² = 7.854 × 10⁻³ m² and swept volume = 7.854 × 10⁻³ × 0.12 = 942.5 cc. Power strokes per minute n = 1500/2 = 750. IP = (6 × 10⁵ × 0.12 × 7.854 × 10⁻³ × 750)/60,000 = 7.07 kW. The same engine as a two-stroke would give 14.1 kW on paper.
2. **BP and mechanical efficiency.** The same engine gives 40 N·m of torque at 1500 rpm. BP = 2π × 1500 × 40/60,000 = 6.28 kW. ηm = 6.28/7.07 = 88.9%, and FP = 0.79 kW.
3. **Efficiency from bsfc.** bsfc = 0.25 kg/kWh, diesel CV = 42,000 kJ/kg. Brake thermal efficiency = 3600/(0.25 × 42,000) = 34.3%.
4. **Morse test.** A four-cylinder engine gives 30 kW. With cylinders 1 to 4 cut out in turn, BP falls to 21.0, 21.5, 21.2 and 20.8 kW. Each cylinder's IP is 30 minus that: 9.0, 8.5, 8.8 and 9.2 kW, total 35.5 kW. FP = 35.5 − 30 = 5.5 kW and ηm = 30/35.5 = 84.5%.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| A two-stroke gives twice the power of a four-stroke | About 1.7 to 1.8 times, because of port losses and short-circuiting |
| The camshaft turns at crank speed | It turns at half crank speed in a four-stroke |
| Valves open and close exactly at TDC and BDC | Inlet closes well after BDC and exhaust opens well before it, to use gas inertia |
| Knock means the same thing in petrol and diesel engines | SI knock is at the end of combustion, CI knock at the start |
| Higher compression ratio always causes knock | It causes SI knock but cures CI knock |
| Supercharging helps both engines against knock | It worsens SI knock and reduces CI knock |
| Octane and cetane numbers go up together | A high-octane fuel has a low cetane number |
| Pre-ignition and detonation are the same | Pre-ignition is before the spark from a hot spot; detonation is after it, in the end gas |
| Willan's line works for petrol engines | It needs fuel use to be linear with load at constant speed, which holds for CI engines |

## 5. IC engine systems: fuel, ignition, cooling, lubrication, supercharging

Each system around an engine exists to fix one problem: getting the right mixture in, lighting it at the right moment, keeping the metal at the right temperature, stopping the parts from wearing each other out, and squeezing in more air than the engine could breathe on its own. Knowing the problem makes each part's job obvious.

### The picture

Think of the engine as an athlete. The fuel system is the diet, measured out in the right mix. The ignition system is the nerve signal that fires each muscle on time. Cooling is sweating, lubrication is the fluid in the joints, and supercharging is training at sea level with an oxygen mask: more air in, more power out.

### Twisted points

**How a carburettor pulls fuel without a pump.** Air rushing through the narrow venturi speeds up, and by Bernoulli its pressure drops below atmospheric. The float chamber is open to the atmosphere, so the higher pressure there pushes petrol up through the jet into the low-pressure throat. The float and needle valve hold the petrol level steady, the same way the float in a toilet cistern does.

**A simple carburettor gets richer as you speed up.** As airflow rises, the air in the throat thins out while petrol does not, so fuel flow grows faster than air mass flow. A carburettor therefore needs a compensating device. The Zenith uses a compensating jet that runs leaner as flow rises, which offsets the main jet running richer.

**The engine wants different mixtures at different times.** It is not always 14.7:1:

| Condition | Mixture | Why |
| --- | --- | --- |
| Cold starting | Very rich | Petrol condenses on cold walls, so only the lightest part vaporises; the choke closes off air to boost suction on the jet |
| Idling | Rich | Leftover exhaust dilutes the small charge |
| Cruising (part load) | Lean, about 16:1 | Best economy |
| Full load | Rich, about 12 to 13:1 | Maximum power |
| Sudden acceleration | Extra rich for a moment | Air speeds up instantly but heavy fuel lags; the accelerator pump squirts extra fuel |

**Choke and throttle are different valves.** The choke sits upstream of the venturi and changes the mixture strength; closing it makes the mixture richer. The throttle sits downstream and changes the quantity of mixture, which sets the power.

**Why fuel injection replaced the carburettor.** MPFI sprays petrol at each inlet port, timed and metered by an electronic control unit. With no venturi in the way, the engine breathes more freely, every cylinder gets the same mixture, and the ratio stays exact for clean exhaust with a catalytic converter.

**Why diesel fuel must be injected at very high pressure.** The fuel has only a few milliseconds to break into tiny drops, travel through dense compressed air, vaporise and ignite. High pressure gives fine atomisation and deep penetration. Older pump systems use 100 to 300 bar; common rail (CRDI) uses up to about 2000 bar.

**"Solid injection" does not mean solid fuel.** It means airless injection: the pump pushes liquid fuel straight through the nozzle. Old engines used air injection, where a blast of compressed air carried the fuel in, which needed a separate compressor. Solid injection comes in three layouts: an individual pump per cylinder, a common rail, and a distributor pump.

**How a 12 V battery makes a 25,000 V spark.** Battery current flows through the coil's primary winding, a few hundred turns, building a magnetic field. When the contact breaker opens, the field collapses suddenly. That induces a few hundred volts in the primary and, through the secondary winding with about 100 times as many turns, 20,000 to 30,000 V. The distributor sends it to each plug in turn. The condenser across the breaker points stops them arcing and makes the field collapse faster.

**Battery ignition and magneto ignition are strong at opposite ends.** A battery gives full current at any speed, so the spark is strong when cranking and weakens at high speed as the coil has less time to charge. A magneto makes its own current from a spinning magnet, so the spark is weak at cranking speed and strong at high speed. That suits bikes, racing and small engines, and it needs no battery.

**The spark advance changes with speed and load.** A centrifugal advance adds more advance at higher speed, since the flame's fixed milliseconds cover more crank degrees. A vacuum advance adds more at light load, when high manifold vacuum means a thin, diluted charge that burns slowly.

**Firing order spreads the shocks.** In a four-stroke engine every cylinder fires once in 720°, so a four-cylinder engine fires every 180° and a six-cylinder every 120°. Cylinders next to each other do not fire one after another, so no single main bearing takes all the load. Common orders are 1-3-4-2 for four cylinders and 1-5-3-6-2-4 for an inline six.

**Overcooling is as bad as overheating.** Too cold, and petrol fails to vaporise, condenses on the walls and washes the oil off; acidic water condenses and corrodes the parts; friction rises in thick cold oil; and more fuel energy goes into the coolant. The thermostat keeps coolant away from the radiator until the engine reaches about 80 to 90 °C. A pressure cap raises the coolant's boiling point to about 120 °C.

**Thermosiphon needs no pump.** Hot water is lighter, so it rises from the engine jacket to the top of the radiator, cools, sinks and returns at the bottom. It is simple but slow, and it fails if the coolant level drops below the radiator inlet.

**Oil does five jobs, not one.** It reduces friction and wear, carries heat away from the pistons and bearings, seals the gap between the rings and the cylinder, washes away dirt and carbon, and protects against corrosion.

**Reading an oil grade.** In SAE 10W-30, the W stands for winter. The oil flows like a thin SAE 10 oil when cold, so the engine starts easily, and still holds up like SAE 30 when hot. Viscosity index measures how little the viscosity changes with temperature; a high index is better.

**Four temperatures of an oil.** The cloud point is where wax crystals first make it cloudy, and the pour point, a few degrees lower, is the lowest temperature at which it still flows. The flash point is where its vapour flashes for a moment over a flame; the fire point, higher, is where the vapour keeps burning for at least 5 seconds.

**Which lubrication system goes where.** Two-stroke petrol engines use mist (petroil) lubrication, with oil mixed into the fuel. Small four-strokes can use splash, where a dipper on the connecting rod flings oil from the sump. Car and heavy engines use pressure feed: a gear pump forces oil through drilled passages to every bearing. A wet sump keeps the oil in the crankcase; a dry sump keeps it in a separate tank, so it cannot slosh away in racing cars or aircraft.

**Supercharger or turbocharger.** Both compress the intake air so a bigger mass of air, and so more fuel, fits into the same cylinder. A supercharger is driven by the crankshaft, so it costs some engine power but responds instantly. A turbocharger is driven by an exhaust gas turbine, so it uses energy that would be wasted, but it has a short delay (turbo lag) while the turbine spins up. Aircraft engines use supercharging to make up for thin air at altitude.

**Compressing air also heats it, so an intercooler follows.** The hot air from the compressor is less dense and makes a petrol engine knock. An intercooler cools it before it enters the engine, so even more mass fits in. Supercharging suits diesels best, since hotter, denser air shortens the ignition delay (Topic 4).

### Worked numbers

1. **Fuel for a given air flow.** An engine draws 6 kg of air per minute at an air-fuel ratio of 15:1. Fuel used = 6/15 = 0.4 kg/min, or 24 kg/h.
2. **What an intercooler adds.** Air at 1 bar and 300 K is compressed to 1.5 bar. Isentropically it leaves at 300 × 1.5^0.2857 = 337 K. Density rises by (1.5/1) × (300/337) = 1.34 times. Cooled to 310 K in an intercooler, the gain becomes 1.5 × 300/310 = 1.45 times, about 9% more air per stroke.
3. **Firing interval.** Four-stroke engines: 720° divided by the number of cylinders, so 180° for four cylinders and 120° for six. Two-stroke engines: 360° divided by the number of cylinders.
4. **Coolant flow.** An engine burns fuel worth 90 kW and about 30% of that, 27 kW, goes to the coolant. For a 10 °C rise through the engine, the water flow needed = 27/(4.18 × 10) = 0.65 kg/s.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| The choke controls engine speed | The choke richens the mixture for starting; the throttle controls power |
| A carburettor pump pushes fuel into the venturi | Atmospheric pressure in the float chamber pushes it into the low-pressure throat |
| The best mixture is always 14.7:1 | Rich for starting, idling and full power; lean for cruising |
| Solid injection uses solid fuel | It means airless injection of liquid fuel |
| Magneto ignition gives a strong spark at starting | It is weakest at cranking speed; battery ignition is strongest there |
| Colder is always better for an engine | Overcooling wastes fuel, washes off oil and corrodes parts |
| The W in 10W-30 means weight | It means winter: the cold-start grade |
| Pour point is above cloud point | Cloud point is reached first as oil cools; pour point is lower |
| A turbocharger is driven by the crankshaft | That is a supercharger; a turbocharger uses an exhaust gas turbine |

## 6. Steam properties, Rankine cycle and boilers

Water turns to steam at a temperature fixed by the pressure, and while it boils, all the heat goes into changing its state rather than its temperature. Once that clicks, steam tables, the Rankine cycle and boiler design all follow from it.

### The picture

Put a pot of water at 25 °C on the stove at sea level and follow it:

1. **Sensible heat:** the temperature climbs to 100 °C. This is hf, the enthalpy of saturated water.
2. **Latent heat:** bubbles form and the temperature stays at 100 °C while the water turns to steam. Part way through it is wet steam; when the last drop goes it is dry saturated steam. This heat is hfg.
3. **Superheat:** keep heating the steam alone and its temperature rises above 100 °C.

A pressure cooker shows the pressure link. At about 2 bar, water boils at 120 °C, so food cooks faster. On a mountain the pressure is lower and water boils below 100 °C, so rice takes longer. Each pressure has exactly one boiling temperature, its saturation temperature.

### Twisted points

**Pressure and boiling temperature are locked together.** At 0.1 bar water boils at 45.8 °C, at 1 bar at 99.6 °C, at 10 bar at 179.9 °C, at 100 bar at 311 °C. So in the wet region you cannot set pressure and temperature separately: give one and the other is fixed. That is why wet steam needs the dryness fraction as a second property.

**Latent heat shrinks as pressure rises.** hfg is about 2258 kJ/kg at 1 bar, 2015 at 10 bar and 1317 at 100 bar. At higher pressure the liquid is already hot and spread out, and the vapour is dense, so the two phases are more alike and less energy separates them. At the critical point (about 221 bar and 374 °C) they are identical and hfg = 0.

**Above the critical pressure, water never boils.** Heated above 221 bar, it changes smoothly from liquid to vapour with no bubbles and no latent heat stage. There is nothing to separate, so a supercritical boiler such as the Benson needs no steam drum.

**Wet steam is a mixture, so its properties are a weighted average.** With dryness fraction x, h = hf + x hfg. At 10 bar (hf = 763, hfg = 2015 kJ/kg), steam with x = 0.9 has h = 763 + 0.9 × 2015 = 2577 kJ/kg. Its specific volume is roughly x vg, because the water drops take up almost no room.

**Dryness fraction applies only inside the wet region.** x = 0 is saturated water, x = 1 is dry saturated steam. Superheated steam has no dryness fraction; it is described by its degree of superheat, the actual temperature minus the saturation temperature.

**How to measure dryness: three calorimeters.** A throttling calorimeter throttles a sample down to about atmospheric pressure, where it becomes superheated. Throttling keeps h constant, and the superheated h can be read from its temperature, so the original x follows. This only works if the steam is dry enough (above about 0.95) to end up superheated. A separating calorimeter strips out the water drops mechanically, for wetter steam. A combined separating and throttling calorimeter does both, and x = x(separator) × x(throttle).

**Why steam plants use Rankine, not Carnot.** A Carnot cycle in the wet region would need to compress a mix of steam and water, which pumps handle badly and which needs a lot of work. Its top temperature would also be stuck at the saturation temperature. Rankine condenses the steam fully, so the pump handles only water, and it can superheat to a much higher temperature.

**Pumping water costs almost nothing.** Pump work = v Δp, and liquid water has a tiny specific volume of about 0.001 m³/kg. Pumping from 0.1 bar to 100 bar takes 0.001 × (10,000 − 10) = about 10 kJ/kg, while the turbine gives around 1000 kJ/kg. The back work is about 1%, against 40 to 80% in a gas turbine, where the compressor handles bulky gas. That is why pump work is often ignored in Rankine problems.

**Every way to improve the Rankine cycle does one of two things.** It raises the average temperature at which heat is added, or lowers the temperature at which heat is rejected:

| Change | Effect on efficiency | Side effect |
| --- | --- | --- |
| Lower condenser pressure | Up: heat is rejected at a lower temperature | Wetter steam at turbine exit; limited by cooling water temperature |
| Higher boiler pressure (same top temperature) | Up: boiling happens at a higher temperature | Wetter steam at turbine exit |
| Superheat | Up: higher average heat addition temperature | Drier exit steam, a bonus; limited by metal strength, about 600 °C |
| Reheat | Small gain | Main purpose: drier exit steam, so a higher boiler pressure can be used |
| Regeneration (feed heating) | Up: feed water enters the boiler hotter | Less work per kg of steam, so more steam must flow |

**Reheat is for dryness; regeneration is for efficiency.** This is the most twisted pair. Reheat sends partly expanded steam back to the boiler so it finishes expanding drier; the efficiency gain is small. Regeneration bleeds some steam from the turbine to preheat the feed water, so the boiler no longer heats cold water at low temperature. Heat is added at a higher average temperature and efficiency rises noticeably. Exit steam should stay above about 88% dry, or the water drops erode the last blades.

**Open and closed feed heaters.** An open heater mixes bled steam directly with the feed water; it also removes dissolved air, so it doubles as the deaerator. A closed heater keeps them apart in a shell-and-tube heat exchanger.

**Fire tube or water tube: who is inside the tube.** In a fire tube boiler the hot gases flow inside the tubes and water surrounds them. In a water tube boiler the water flows inside the tubes and the gases surround them.

**Why water tube boilers take high pressure.** The wall thickness a vessel needs grows with its diameter: t = pd/(2σ). A fire tube boiler's big shell holds the pressure, so it is limited to about 25 bar. In a water tube boiler, the small tubes hold the pressure. A 2 m shell at 20 bar needs 20 mm of steel (σ = 100 MPa), while a 50 mm tube at 100 bar needs only 2.5 mm. Water tube boilers also hold less water, so they raise steam faster and do less damage if they burst.

**Why very high pressure boilers need a pump.** In natural circulation, the hot steam-water mixture in the risers is lighter than the cold water in the downcomers, so it rises on its own. Near the critical pressure, steam and water have almost the same density and the drive disappears. Forced circulation boilers (La Mont, Benson, Loeffler, Velox) use a pump instead. The Loeffler evaporates water with superheated steam rather than in the tubes, so salts do not deposit there. The Velox uses very high gas velocity for fast heat transfer.

**Mountings are for safety, accessories are for efficiency.** A boiler must not run without its mountings: safety valve, water level indicator, pressure gauge, fusible plug, steam stop valve, feed check valve, blow-off cock and manhole. Accessories only raise efficiency: economiser, superheater, air preheater, feed pump, injector. The fusible plug sits in the furnace crown; if the water level falls and uncovers it, its low-melting alloy melts and steam rushes in to put out the fire.

**Equivalent evaporation puts every boiler on the same footing.** Boilers make steam at different pressures from feed water at different temperatures, so kilograms of steam cannot be compared directly. Equivalent evaporation converts each output to the water that would be evaporated "from and at 100 °C", which needs 2257 kJ/kg.

```math
h = h_f + x\,h_{fg} \qquad W_{pump} = v_f\,(p_{boiler} - p_{cond}) \qquad m_e = \frac{m_s\,(h - h_{feed})}{2257}
```

### Worked numbers

1. **Throttling calorimeter.** Steam at 10 bar is throttled to 1 bar and reaches 110 °C, where the tables give h = 2696 kJ/kg. Throttling keeps h, so 763 + x × 2015 = 2696 and x = 1933/2015 = 0.96.
2. **Rankine efficiency.** Turbine inlet h1 = 3200 kJ/kg, turbine exit h2 = 2200 kJ/kg, condensate hf = 192 kJ/kg, pump work 10 kJ/kg, so the water enters the boiler at 202 kJ/kg. Net work = 1000 − 10 = 990 kJ/kg. Heat in = 3200 − 202 = 2998 kJ/kg. η = 990/2998 = 33%.
3. **Equivalent evaporation and boiler efficiency.** A boiler makes 10 kg of dry steam at 10 bar (h = 2778 kJ/kg) per kg of coal, from feed water at 40 °C (h = 167.5 kJ/kg). Equivalent evaporation = 10 × (2778 − 167.5)/2257 = 11.6 kg per kg of coal. With coal of CV 30,000 kJ/kg, boiler efficiency = 10 × 2610.5/30,000 = 87%.
4. **Degree of superheat.** Steam at 10 bar and 250 °C has a degree of superheat of 250 − 179.9 = 70.1 °C.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| Water always boils at 100 °C | Only at 1.013 bar; the boiling point rises with pressure |
| Latent heat rises with pressure | It falls, reaching zero at the critical point |
| Superheated steam has a dryness fraction above 1 | Dryness fraction only exists in the wet region |
| Reheating is mainly for efficiency | It is mainly for drier exit steam; regeneration is for efficiency |
| Lower condenser pressure has no downside | It makes the exit steam wetter |
| A fire tube boiler has water in the tubes | Hot gases are in the tubes; water is outside them |
| Fire tube boilers suit high pressure | Their large shell limits them to about 25 bar; water tube boilers go far higher |
| The economiser is a mounting | It is an accessory; mountings are for safety |
| Pump work is a large part of the Rankine cycle | About 1% of the turbine work, because water is nearly incompressible |

## 7. Steam nozzles and turbines

A nozzle turns the steam's enthalpy into speed, and a turbine turns that speed into shaft work. The twists are about what happens near the speed of sound, and about where the pressure drops: only in the nozzles, or in the moving blades too.

### The picture

Pinch the end of a garden hose and the water shoots out faster: that is a nozzle. Point the jet at a pinwheel and the pinwheel spins because the jet hits its blades: that is an impulse turbine. A lawn sprinkler spins the other way round, pushed back by the water leaving its own arms, like a rocket: that is reaction. Most real "reaction" turbines use both effects at once.

### Twisted points

**Below the speed of sound, a narrowing passage speeds the flow up; above it, a widening one does.** The same mass must pass every section each second, and mass flow = density × area × velocity. At low speed the density hardly changes, so a smaller area means a higher velocity, as in the hose. Above the speed of sound the steam expands so much that its density falls faster than its velocity rises, so the area has to grow to carry the same mass. That is why a supersonic jet needs a convergent-divergent nozzle.

**Mach 1 can only happen at the throat.** The flow switches from "narrowing speeds it up" to "widening speeds it up" at the narrowest point. So a convergent nozzle can reach at most the speed of sound, at its exit, however low the back pressure. To go faster you must add a divergent part after the throat.

**Choked flow: lowering the back pressure stops helping.** As the pressure beyond the nozzle is lowered, mass flow rises until the throat reaches the critical pressure and the steam there moves at the speed of sound. After that, mass flow stays fixed. The "message" that the outlet pressure has dropped travels upstream as a pressure wave at the speed of sound, and it cannot get past a throat where the steam is already moving downstream at that speed. It is like shouting into a wind blowing as fast as sound.

**The critical pressure ratio depends only on the expansion index.** It is about 0.55 for steam, so the throat pressure is roughly half the inlet pressure:

```math
\frac{p_{throat}}{p_1} = \left(\frac{2}{n+1}\right)^{\frac{n}{n-1}}
```

| Fluid | n | Critical pressure ratio |
| --- | --- | --- |
| Air | 1.4 | 0.528 |
| Superheated steam | 1.3 | 0.546 |
| Dry saturated steam | 1.135 | 0.577 |

**Friction makes the jet slower but the steam drier.** Nozzle efficiency = actual enthalpy drop / isentropic enthalpy drop. Friction turns part of the kinetic energy back into heat inside the steam, so the exit steam is hotter or drier than the ideal case, but slower. Most of the friction happens in the divergent part, where the speed is highest.

**Supersaturated flow: steam that is too fast to condense.** Expanding through a nozzle takes a fraction of a millisecond, so steam crossing the saturation line has no time to form droplets. It stays as dry vapour below its saturation temperature, an unstable metastable state, until it condenses suddenly at about 3% wetness (the Wilson line). Because the undercooled vapour is denser, the mass flow comes out slightly higher than equilibrium predicts, and the enthalpy drop slightly lower.

**Impulse: the pressure drops only in the nozzles.** In an impulse turbine the moving blades are symmetric curved buckets. They just turn the jet round, and the steam pressure is the same on both sides of them; the push comes from changing the jet's direction. With no friction the steam's speed relative to the blade stays the same. The De Laval turbine is the simplest case: one nozzle set and one wheel.

**Reaction: the moving blades are nozzles too.** In a reaction stage the passages between moving blades narrow, so the steam speeds up relative to the blade and pushes it backwards as it leaves, like the sprinkler arm. The pressure drops across both the fixed and the moving blades. In the Parsons turbine the fixed and moving blades have the same shape, so each takes half the enthalpy drop: 50% degree of reaction.

```math
R = \frac{\Delta h_{moving}}{\Delta h_{fixed} + \Delta h_{moving}}
```

**Why a pressure drop across the moving blades matters.** Since the pressure is higher in front of a reaction blade row, steam leaks round the blade tips, so the clearances must be tight. The pressure difference also pushes the whole rotor along its axis, which a dummy piston balances. And steam must enter all the way round the wheel (full admission). An impulse turbine has none of these problems and can admit steam through nozzles covering only part of the circle.

**Best blade speed: the steam should leave with no speed left.** Any speed the steam still has when it leaves the wheel is energy wasted. Throw a ball at the back of a truck moving away at half the throw speed: the ball bounces back and drops with no ground speed, having given all its energy to the truck. For an impulse blade the same happens when the blade speed is half the jet's forward component:

```math
\left(\frac{u}{c_1}\right)_{opt} = \frac{\cos\alpha}{2} \qquad \eta_{blade,\,max} = \cos^2\alpha
```

For a 50% reaction (Parsons) stage, the best ratio is u/c1 = cos α and the maximum blade efficiency is 2cos²α/(1 + cos²α).

**Why turbines are compounded.** Let all the pressure drop happen in one nozzle and the jet reaches 1000 m/s or more. The best blade speed is then about 500 m/s, which means tens of thousands of rpm: the De Laval turbine needs reduction gearing, and the rotor is highly stressed. Compounding splits the job into steps:

| Type | What is split | How it works |
| --- | --- | --- |
| Velocity compounding (Curtis) | The velocity | One nozzle set takes the whole pressure drop; the fast jet gives up its speed over two or three moving rows, with fixed guide blades between them turning it back |
| Pressure compounding (Rateau) | The pressure | A series of simple impulse stages, each with its own nozzles taking part of the pressure drop |
| Pressure-velocity compounding | Both | Several pressure stages, each one velocity compounded |

A two-row Curtis stage runs best at u/c1 = cos α/4, half the single-row blade speed, and its first row does three quarters of the work. It is compact but less efficient than pressure compounding, which needs more stages and a longer casing.

**Where a turbine loses energy.** Friction in the nozzles and blades, the speed left in the leaving steam, leakage past blade tips and glands, friction of the discs spinning in steam, and, in impulse turbines with partial admission, the blades churning steam while outside the nozzle arc. Wet steam also brakes and erodes the last blades.

**Governing a steam turbine.** Throttle governing chokes the steam supply at the inlet, which is simple but wastes pressure. Nozzle governing shuts groups of nozzles, so the open ones still get full pressure. Bypass governing sends extra steam at overload past the first stages into later ones.

### Worked numbers

1. **Nozzle exit velocity.** The isentropic enthalpy drop is 300 kJ/kg and the nozzle efficiency is 90%, so the actual drop is 270 kJ/kg. With negligible inlet velocity, c2 = 44.72 × √270 = 44.72 × 16.43 = 735 m/s. If the steam enters at 100 m/s, use c2 = √(2 × 270,000 + 100²) = 742 m/s.
2. **Throat pressure.** Dry saturated steam at 12 bar: 0.577 × 12 = 6.92 bar. Superheated steam at 12 bar: 0.546 × 12 = 6.55 bar. Lowering the back pressure below these values does not raise the mass flow.
3. **Single-stage impulse.** Jet speed 1000 m/s, nozzle angle 20° (cos 20° = 0.940). Best blade speed = 1000 × 0.940/2 = 470 m/s, and the maximum blade efficiency = 0.940² = 88.3%. On a 1 m wheel that is N = 60 × 470/(π × 1) = 8970 rpm.
4. **Two-row Curtis.** Same jet: best blade speed = 1000 × 0.940/4 = 235 m/s, so the same wheel turns at about 4490 rpm.
5. **Degree of reaction.** A stage drops 20 kJ/kg in the fixed blades and 20 kJ/kg in the moving blades: R = 20/40 = 0.5, a Parsons stage. If the moving blades took no drop at all, R = 0, pure impulse.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| A narrower passage always speeds up the flow | Only below the speed of sound; above it the passage must widen |
| A convergent nozzle can give a supersonic jet if back pressure is low enough | It is limited to Mach 1 at the exit; supersonic needs a divergent part |
| Lowering back pressure always raises mass flow | Not after the throat reaches critical pressure: the flow is choked |
| Friction in a nozzle makes the exit steam wetter | It makes the steam drier but slower |
| In an impulse turbine the pressure drops across the moving blades | It drops only in the nozzles |
| Parsons turbine is pure reaction | It is 50% reaction: half the drop in fixed blades, half in moving blades |
| Compounding is done to raise efficiency | Mainly to bring the rotor speed down |
| Optimum impulse blade speed equals the jet speed | It is half the jet's forward component, c1 cos α/2 |

## 8. Air compressors

Squeezing air heats it, and hot air is harder to squeeze further. Nearly every compressor idea, from cooling jackets to multistage machines with intercoolers, is a way of fighting that heat or the air left behind in the clearance.

### The picture

Pump up a bicycle tyre and feel the barrel of the pump: it gets hot. That heat came from your arms. Hot air takes up more room than cool air at the same pressure, so you end up pushing a bulkier load up to tyre pressure. If you could keep the air cool while squeezing, every stroke would be easier. That ideal is isothermal compression.

### Twisted points

**Why isothermal compression needs the least work.** A compressor draws air in, squeezes it and pushes it out, and the net work over that whole cycle is ∫v dp, the area to the left of the curve on a P-V diagram. Hot air has a bigger volume at every pressure, so the hotter the compression, the bigger that area. The adiabatic curve is steepest and costs the most; isothermal is flattest and costs the least; real compressors are polytropic with n about 1.2 to 1.3, in between. For 1 kg of air from 1 to 8 bar at 300 K: isothermal 179 kJ, polytropic (n = 1.3) 230 kJ, adiabatic 245 kJ.

**Isothermal efficiency is the yardstick for a cooled compressor.** Isothermal efficiency = isothermal work / actual work. A water-jacketed reciprocating compressor is compared with the isothermal ideal it tries to reach. An uncooled rotary compressor is compared with the isentropic ideal instead, through its isentropic efficiency.

**Why there is always a clearance.** The piston must not hit the cylinder head or the valves, and parts expand when hot, so a small gap is left at the end of the stroke. The clearance ratio C = Vc/Vs is usually 4 to 10%.

**Clearance costs capacity, not work per kilogram.** The air trapped in the clearance re-expands as the piston returns, and fresh air cannot enter until it has dropped back to suction pressure. So part of every suction stroke is wasted, and the compressor delivers less air. But the trapped air gives its work back as it re-expands, like a spring, so ideally the work per kilogram delivered is unchanged.

```math
\eta_v = 1 + C - C\left(\frac{p_2}{p_1}\right)^{1/n}
```

**Push the pressure ratio high enough and the compressor delivers nothing.** As the pressure ratio rises, the clearance air re-expands over more of the stroke. When it fills the whole cylinder, ηv = 0 and no fresh air gets in at all. With C = 5% and n = 1.3, that happens at a pressure ratio of 21^1.3, about 52. This limit is one reason high pressures are reached in stages.

**Free air delivered is measured at the inlet conditions outside.** FAD is the delivered air's volume converted back to atmospheric pressure and temperature, not the volume inside the hot cylinder. Volumetric efficiency is FAD divided by the swept volume, typically 65 to 85%.

**Multistage compression with intercooling gains four ways.** Compress part way, cool the air back down in an intercooler, then compress again. It saves work, because the second stage handles cooler, smaller air. It lowers the delivery temperature, which keeps the lubricating oil from breaking down. It raises volumetric efficiency, because each stage has a small pressure ratio, so its clearance air re-expands less. And the high-pressure cylinder can be small, while only the big low-pressure cylinder has to be large.

**The best split gives every stage the same pressure ratio.** With perfect intercooling (back to the suction temperature), the total work is least when each stage has the same pressure ratio. Then each stage does equal work and each intercooler removes equal heat.

```math
p_2 = \sqrt{p_1\,p_3} \ \text{(two stages)} \qquad \text{ratio per stage} = \left(\frac{p_{final}}{p_1}\right)^{1/z}
```

From 1 to 16 bar in two stages, the intermediate pressure is 4 bar and each stage has a ratio of 4. From 1 to 27 bar in three stages, each has a ratio of 3, at 3 and 9 bar.

**Positive displacement or dynamic.** A reciprocating, screw, vane or Roots compressor traps a pocket of air and shrinks it, so it suits high pressure at modest flow. A centrifugal or axial compressor gives the air speed with spinning blades and then slows it down to turn that speed into pressure, so it suits very large flows at lower pressure ratios.

| Compressor | How it raises pressure | Typical use |
| --- | --- | --- |
| Reciprocating | Piston shrinks a trapped volume | Workshops, high pressure, small flow |
| Roots blower | Carries air round between lobes with no internal squeezing; pressure rises when air from the outlet rushes back into the pocket | Low pressure ratio, superchargers |
| Vane | Pockets between sliding vanes shrink as the rotor turns | Moderate pressure, steady flow |
| Centrifugal | Impeller flings air outward; the diffuser slows it to raise pressure | Turbochargers, large plants |
| Axial | Many rows of rotor and stator blades, a small pressure rise each | Jet engines, gas turbines |

**In a centrifugal compressor, the diffuser does half the job.** The impeller adds both speed and pressure. The diffuser after it is a widening passage that slows the air and turns that speed into more pressure, the reverse of a nozzle (Topic 7). Roughly half the pressure rise happens in each.

**Surging, choking and stalling are three different failures.** Surging happens at low flow: the compressor cannot hold the pressure in the delivery pipe, so flow briefly runs backwards, then forwards again, with loud pulsing. Choking happens at high flow: somewhere in the passages the air reaches the speed of sound and no more can pass (Topic 7). Stalling is flow breaking away from the blades, like an aircraft wing tilted too steeply; in an axial compressor it starts in a few blades, spreads round the ring as rotating stall and can trigger a surge.

### Worked numbers

1. **Three ways to compress 1 kg of air from 1 to 8 bar at 300 K** (RT1 = 0.287 × 300 = 86.1 kJ/kg).
   - Isothermal: 86.1 × ln 8 = 86.1 × 2.079 = 179 kJ. Delivery at 300 K.
   - Polytropic, n = 1.3: (1.3/0.3) × 86.1 × (8^0.2308 − 1) = 4.333 × 86.1 × 0.616 = 230 kJ. Delivery at 300 × 1.616 = 485 K.
   - Adiabatic, n = 1.4: 3.5 × 86.1 × (8^0.2857 − 1) = 3.5 × 86.1 × 0.811 = 245 kJ. Delivery at 543 K.
   - Isothermal efficiency of the polytropic machine: 179/230 = 78%.
2. **Volumetric efficiency.** C = 0.05, n = 1.3, pressure ratio 8. 8^(1/1.3) = 4.95, so ηv = 1 + 0.05 − 0.05 × 4.95 = 0.80, or 80%.
3. **What a second stage saves.** 1 kg of air from 1 to 16 bar, n = 1.3, from 300 K. Single stage: 4.333 × 86.1 × (16^0.2308 − 1) = 373 × 0.896 = 334 kJ, delivered at 569 K (296 °C). Two stages at 4 bar with perfect intercooling: 2 × 373 × (4^0.2308 − 1) = 2 × 373 × 0.377 = 281 kJ, delivered at 413 K (140 °C). That saves 53 kJ, about 16%, and the air leaves 156 °C cooler.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| Adiabatic compression needs the least work, since no heat is lost | Isothermal needs the least; heat left in the air makes it bulkier to compress |
| Clearance raises the work per kg of air | Ideally it does not; it reduces the air delivered per stroke |
| Volumetric efficiency rises with pressure ratio | It falls, and reaches zero at a high enough ratio |
| FAD is measured at delivery conditions | It is corrected back to the free air (inlet) conditions |
| The intermediate pressure is the average of suction and delivery | It is the geometric mean, √(p1 p3) |
| Intercooling is only to protect the oil | It also cuts the work and raises volumetric efficiency |
| Surging happens at high flow | Surging is at low flow; choking is at high flow |
| A Roots blower compresses air inside itself | It carries air round; the pressure rises by backflow at the outlet |

## 9. Refrigeration and air conditioning

A refrigerator moves heat uphill, from a cold box to a warm kitchen, and pays for the trip with work. It does that with one trick from Topic 6: change the pressure and you change the temperature at which a liquid boils.

### The picture

Think of the refrigerant as a sponge for heat. Inside the cold box it is kept at low pressure, so it boils at a temperature below the box's and soaks up heat as it boils. The compressor then squeezes it to high pressure, where it condenses at a temperature above the kitchen's, so it wrings the heat out through the coils at the back. That is why the back of a fridge is warm. The expansion valve drops the pressure again and the loop repeats.

R-134a, for example, boils at about −26 °C at atmospheric pressure but condenses at about 40 °C at 10 bar. The same fluid can be colder than the freezer at one end of the loop and hotter than the kitchen at the other.

### Twisted points

**What each part does to the refrigerant.** In the usual numbering, 1 is the evaporator exit, 2 the compressor exit, 3 the condenser exit and 4 the expansion valve exit.

| Part | From → to | What changes | Ideal process |
| --- | --- | --- | --- |
| Compressor | 1 → 2 | Low-pressure vapour becomes hot, high-pressure vapour | Isentropic |
| Condenser | 2 → 3 | Vapour gives up heat and condenses to liquid | Constant pressure |
| Expansion valve | 3 → 4 | Liquid drops to low pressure; part of it flashes to vapour and it turns cold | Throttling, constant enthalpy |
| Evaporator | 4 → 1 | Cold mixture boils, taking heat from the space | Constant pressure |

```math
RE = h_1 - h_4 \qquad W = h_2 - h_1 \qquad COP = \frac{h_1 - h_4}{h_2 - h_1} \qquad h_3 = h_4
```

**Why a throttle valve and not a small turbine.** Expanding a liquid gives back very little work, because liquid barely changes volume, and a turbine for a liquid flashing into vapour would be costly and delicate. A valve is cheap, has no moving parts and also controls the flow. The price is a small loss of refrigerating effect, since the vapour that flashes in the valve does no cooling in the evaporator.

**Why one tonne of refrigeration is 211 kJ/min and not 233.** The unit comes from the American short ton of 2000 lb (907 kg) of ice. Freezing 907 kg of water at 0 °C (latent heat 335 kJ/kg) in 24 hours takes 907 × 335/1440 = 211 kJ/min, or 3.5 kW. A metric tonne would have given 233 kJ/min.

**Subcooling and superheating are not the same kind of help.** Subcooling the liquid below its condensing temperature before the valve lowers h4, so each kilogram picks up more heat in the evaporator: refrigerating effect and COP both rise. Superheating the vapour before the compressor mainly protects it, because liquid drops are incompressible and smash the valves (slugging). Superheat picked up inside the cooled space adds a little cooling, but it also raises the compressor work.

**A bigger lift means a lower COP.** The further the heat must be lifted, the more work each kilojoule needs. The Carnot COP, TL/(TH − TL), shows it: with the evaporator at −10 °C and the condenser at 40 °C, COP is at most 263/50 = 5.3. Drop the evaporator to −20 °C and it falls to 253/60 = 4.2. This is why a fridge works harder on a hot day and why a freezer costs more to run than a cooler.

**Vapour absorption swaps the compressor for heat.** An absorber, a pump and a generator together do the compressor's job. Low-pressure refrigerant vapour dissolves in a cold absorbent in the absorber, the way gas dissolves in a cold soda. The pump lifts the liquid solution to high pressure, which needs very little work because it is liquid. In the generator, heat drives the refrigerant back out at high pressure, as fizz leaves a warm soda. The condenser, valve and evaporator are the same as before.

**Absorption runs on cheap heat, not on high COP.** Its COP is only about 0.5 to 0.8 for a single-effect system, against 3 or more for vapour compression. It makes sense where heat is cheap or wasted: exhaust steam, solar heat, engine exhaust, or a gas flame where there is no electricity.

**In the two common pairs, the refrigerant is different.** In ammonia-water, ammonia is the refrigerant and water the absorbent, so it can reach well below 0 °C, for ice plants and cold stores. It needs an analyser and rectifier to strip water vapour out of the ammonia. In lithium bromide-water, water is the refrigerant and LiBr the absorbent. Water freezes at 0 °C, so it is used for air-conditioning chillers, not freezers. The Electrolux fridge adds hydrogen as a third fluid so the pressure is the same everywhere, which removes the pump.

**Air refrigeration has a low COP but suits aircraft.** The Bell-Coleman cycle is a Brayton cycle run backwards with air. Air never boils or condenses, so it carries heat only by changing temperature, which needs a large flow and gives a low COP. On an aircraft, though, the engine compressor already supplies compressed air, and air is light, safe and free, so it is used for cabin cooling.

**Reading a refrigerant's number.** For simple halocarbons, R-xyz means x = carbon atoms − 1 (dropped when zero), y = hydrogen atoms + 1, z = fluorine atoms. R-12 is CCl₂F₂, R-22 is CHClF₂ and R-134a is C₂H₂F₄. The 700 series are inorganic, numbered 700 plus the molecular mass: R-717 is ammonia (17), R-718 water (18) and R-744 carbon dioxide (44). R-12 was banned because its chlorine destroys ozone; R-134a has no chlorine.

**Air conditioning starts with moist air.** Room air is dry air plus water vapour. Three thermometers read it differently:

- **Dry bulb (DBT):** an ordinary thermometer, the air's real temperature.
- **Wet bulb (WBT):** a thermometer with a wet wick. Water evaporating from the wick cools it, and the drier the air, the faster it evaporates, so the lower it reads.
- **Dew point (DPT):** the temperature at which the vapour starts to condense when the air is cooled, like the drops on a glass of cold water.

Normally DBT > WBT > DPT. In saturated air (100% RH) nothing more can evaporate, so all three are equal.

**Relative humidity is how full the air is; specific humidity is how much water it holds.** Warm air can hold more vapour, like a bigger sponge. Specific humidity ω is kilograms of vapour per kilogram of dry air, the actual amount. Relative humidity φ compares the vapour pressure with the most the air could hold at that temperature. Heat air without adding water and ω stays the same, but φ falls because the sponge got bigger.

```math
\omega = 0.622\,\frac{p_v}{p - p_v} \qquad \phi = \frac{p_v}{p_s}
```

**How an air conditioner dries the air.** The cooling coil is colder than the room air's dew point. Air touching it cools below the dew point, so vapour condenses on the coil and drips away through the drain pipe. Summer air conditioning is therefore cooling with dehumidification. Winter air conditioning is heating with humidification, because heating alone would leave the air uncomfortably dry.

**A desert cooler keeps the wet bulb temperature constant.** Air blowing over wet pads gives up its own heat to evaporate the water, so its dry bulb temperature falls and its moisture rises, while its wet bulb temperature stays almost unchanged. The drier the air to begin with, the bigger the cooling. It works well in Rajasthan in summer and does little in humid Kerala.

**Bypass factor: the air that missed the coil.** Some air passes between the fins without touching the coil, so the air leaving is warmer than the coil. Bypass factor = (air out − coil temperature)/(air in − coil temperature). Contact factor = 1 − bypass factor. More rows of tubes or slower air lower the bypass factor.

### Worked numbers

1. **Capacity in TR.** A cold room needs 7 kW of cooling: 7/3.5 = 2 TR.
2. **A vapour compression cycle.** h1 = 395, h2 = 425, h3 = h4 = 255 kJ/kg. Refrigerating effect = 395 − 255 = 140 kJ/kg, compressor work = 30 kJ/kg, COP = 140/30 = 4.67. For 1 TR (3.5 kW), the refrigerant flow = 3.5/140 = 0.025 kg/s, the compressor needs 0.025 × 30 = 0.75 kW, and the condenser rejects 0.025 × 170 = 4.25 kW, which is 3.5 + 0.75.
3. **Humidity.** Air at 30 °C and 101.3 kPa has a vapour pressure of 2 kPa; the saturation pressure at 30 °C is 4.25 kPa. ω = 0.622 × 2/99.3 = 0.0125 kg per kg of dry air, and RH = 2/4.25 = 47%. Heated to 40 °C (saturation pressure 7.38 kPa) with no added water, ω is unchanged but RH = 2/7.38 = 27%. Its dew point is about 17.5 °C, where the saturation pressure is 2 kPa.
4. **Bypass factor.** Coil at 10 °C, air in at 30 °C, air out at 15 °C: BF = (15 − 10)/(30 − 10) = 0.25, so the contact factor is 0.75.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| A fridge makes cold | It moves heat out of the box and dumps it in the kitchen |
| The compressor cools the refrigerant | It heats it by raising its pressure; the expansion valve makes it cold |
| Enthalpy drops across the expansion valve | It stays the same; pressure and temperature drop |
| 1 TR is 233 kJ/min | It is 211 kJ/min (3.5 kW), based on the 2000 lb short ton |
| In LiBr-water systems, LiBr is the refrigerant | Water is the refrigerant; LiBr is the absorbent |
| Absorption systems have a higher COP | Lower, but they run on cheap heat |
| Heating air raises its humidity | It lowers the relative humidity; specific humidity stays the same |
| Wet bulb is always below dew point | The order is DBT, then WBT, then DPT; all equal at saturation |
| An evaporative cooler works everywhere | It needs dry air; it does little in humid weather |

## 10. Fuels and combustion

Combustion is a recipe: carbon, hydrogen and sulphur in the fuel join with oxygen from the air in fixed proportions and release heat. Every combustion sum comes from three reactions and the fact that air is only 23% oxygen by mass.

### The picture

A recipe for chapatis needs flour and water in a fixed ratio. Too little water and some flour stays dry; too much and the dough is a mess. Fuel and oxygen work the same way, with one twist: oxygen comes mixed with a lot of nitrogen, which takes no part in burning but still has to be heated and carried up the chimney. So you need about 4.35 kg of air for every kilogram of oxygen you actually use.

### Twisted points

**Three reactions give every air requirement.** Work in kilograms using molecular masses (C = 12, H₂ = 2, O₂ = 32, S = 32):

| Reaction | By mass | Oxygen per kg of element | Product per kg |
| --- | --- | --- | --- |
| C + O₂ → CO₂ | 12 + 32 → 44 | 8/3 = 2.67 kg | 3.67 kg CO₂ |
| 2H₂ + O₂ → 2H₂O | 4 + 32 → 36 | 8 kg | 9 kg water |
| S + O₂ → SO₂ | 32 + 32 → 64 | 1 kg | 2 kg SO₂ |

Add up the oxygen for the carbon, hydrogen and sulphur in 1 kg of fuel, take away any oxygen the fuel already contains, and divide by 0.23 to get the air:

```math
A_{min} = \frac{100}{23}\left[\frac{8}{3}C + 8\left(H - \frac{O}{8}\right) + S\right] \ \text{kg of air per kg of fuel}
```

**Why H − O/8.** The oxygen already in the fuel is assumed to be joined to some of its hydrogen as water. Each kilogram of that oxygen ties up 1/8 kg of hydrogen, which can no longer burn. What is left, H − O/8, is the available hydrogen. The same term appears in Dulong's formula.

**Where the 15:1 for petrol comes from.** Take octane, C₈H₁₈: C₈H₁₈ + 12.5 O₂ → 8 CO₂ + 9 H₂O. 114 kg of fuel needs 12.5 × 32 = 400 kg of oxygen, which is 3.51 kg of oxygen per kg of fuel, or 3.51/0.23 = 15.3 kg of air. Real petrol is a blend, which gives the familiar 14.7:1.

**Air by mass or by volume.** Air is 23% oxygen and 77% nitrogen by mass, but 21% and 79% by volume. Divide oxygen mass by 0.23 for air mass; divide oxygen volume by 0.21 for air volume. Mixing the two is the commonest slip in these sums.

**Excess air: too little wastes fuel, too much wastes heat.** Mixing is never perfect, so some extra air is supplied to make sure every bit of fuel meets oxygen. Too little, and carbon burns only to CO or leaves as smoke. Carbon burnt to CO2 gives about 33,800 kJ/kg, but burnt to CO only about 10,200 kJ/kg, so roughly 70% of its heat is lost. Too much, and the extra air soaks up heat and carries it out of the chimney. Gas burners need the least excess air, oil a little more and coal the most, often 20 to 50%.

**Higher and lower calorific values differ by one thing: the water.** Burning hydrogen makes water. If the products are cooled to room temperature, that water condenses and gives up its latent heat, and you get the higher calorific value (HCV). In a real engine or boiler the water leaves as vapour up the exhaust, so that latent heat is never recovered, and the lower calorific value (LCV) is what you actually get. A fuel with no hydrogen, like pure carbon, has HCV = LCV.

```math
LCV = HCV - 9H \times h_{fg}
```

Here 9H is the kilograms of water formed per kilogram of fuel, and hfg is its latent heat, about 2442 kJ/kg at 25 °C (some books use 2466 or 2257).

**A bomb calorimeter measures HCV.** It burns a small sample in pure oxygen inside a sealed steel bomb, at constant volume, standing in a weighed amount of water. The products cool to near room temperature, so the water formed condenses and its latent heat is included. Corrections are made for the fuse wire, for acids formed from sulphur and nitrogen, and for heat lost to the room. Gaseous fuels are tested at constant pressure in a continuous-flow Junker's gas calorimeter.

**Proximate analysis needs only a balance and a furnace.** Moisture is the weight lost by heating 1 g of coal at about 105 °C. Volatile matter is the further loss when the dried coal is heated to about 950 °C in a covered crucible. Ash is what remains after burning it completely in an open crucible. Fixed carbon is not measured at all; it is whatever is left: 100 − (moisture + volatile matter + ash).

**Fixed carbon is not all the carbon.** The volatile matter also contains carbon, in gases and tars. The total carbon comes only from ultimate analysis, a chemical breakdown into C, H, O, N and S, which is what combustion calculations need.

**Rank of coal is its age.** Buried plant matter slowly loses moisture and volatile matter and gains carbon: peat, then lignite, then bituminous coal, then anthracite. Anthracite has the most carbon and the highest calorific value, but so little volatile matter that it is hard to light and burns with almost no smoke. Bituminous coal is the usual power station and coking coal. Coke is bituminous coal heated without air to drive off its volatile matter, for blast furnaces.

**Orsat analysis is dry, by volume, and in a fixed order.** The flue gas sample is measured in a burette over water at room temperature, so its water vapour condenses out first: the result is a dry analysis. CO2 is absorbed first in caustic potash, then O2 in alkaline pyrogallol, then CO in ammoniacal cuprous chloride, and nitrogen is what remains. The order matters because pyrogallol also takes up CO2, and cuprous chloride also takes up O2.

**Equivalence ratio and excess air ratio point opposite ways.** The equivalence ratio φ uses fuel-air ratios: actual over stoichiometric, so φ > 1 is rich. The excess air ratio λ uses air-fuel ratios, so λ > 1 is lean. One is the inverse of the other.

```math
\phi = \frac{(F/A)_{actual}}{(F/A)_{stoich}} = \frac{(A/F)_{stoich}}{(A/F)_{actual}} = \frac{1}{\lambda}
```

**Gas fuels at a glance.** LPG is propane and butane, heavier than air, so a leak pools at floor level; a smelly mercaptan is added so leaks are noticed. CNG is mostly methane, lighter than air. Producer gas is mainly CO and nitrogen from air blown through hot coal, with a low calorific value. Water gas is CO and hydrogen from steam passed over hot coke. Biogas is about 60% methane, the rest mostly CO2.

### Worked numbers

1. **Air for a coal.** Coal: C 80%, H 4%, O 8%, S 1% by mass. Oxygen = 2.667 × 0.80 + 8 × (0.04 − 0.08/8) + 0.01 = 2.133 + 0.24 + 0.01 = 2.383 kg per kg of coal. Minimum air = 2.383/0.23 = 10.4 kg. With 50% excess air, 15.5 kg.
2. **Dulong's HCV for the same coal.** 33,800 × 0.80 + 144,000 × (0.04 − 0.01) + 9270 × 0.01 = 27,040 + 4,320 + 93 = 31,450 kJ/kg.
3. **Bomb calorimeter.** 1 g of coal raises the water and calorimeter, together worth 2.5 kg of water, by 3.0 °C. Heat = 2.5 × 4.187 × 3.0 = 31.4 kJ, so HCV = 31.4 kJ/g = 31,400 kJ/kg, close to Dulong's estimate.
4. **LCV.** A liquid fuel has 15% hydrogen and HCV = 45,000 kJ/kg. Water formed = 9 × 0.15 = 1.35 kg per kg of fuel. LCV = 45,000 − 1.35 × 2442 = 41,700 kJ/kg.
5. **Equivalence ratio.** An engine runs at 12.5:1 on a fuel whose stoichiometric ratio is 15:1. φ = 15/12.5 = 1.2, a rich mixture, and λ = 1/1.2 = 0.83.

### Mix-ups to avoid

| People think | Actually |
| --- | --- |
| Air is 21% oxygen, so divide by 0.21 for air mass | 21% is by volume; by mass it is 23% |
| More excess air always means better combustion | Beyond what mixing needs, it only carries heat up the chimney |
| LCV is measured in a bomb calorimeter | The bomb gives HCV; LCV is calculated from it |
| HCV and LCV differ for every fuel | They are equal for a fuel with no hydrogen |
| Fixed carbon is the total carbon in coal | It is found by difference and excludes carbon in the volatile matter |
| Anthracite lights easily because it is the best coal | Its low volatile matter makes it hard to ignite |
| Orsat gives a wet analysis | It is dry: the water vapour condenses before measuring |
| φ greater than 1 means lean | φ > 1 is rich; λ > 1 is lean |
| LPG disperses upward like natural gas | LPG is heavier than air and collects low down |

## Further reading

Level 2 follows the standard textbook treatment of each topic. Property values are rounded from standard steam and refrigerant tables, so the table you use may differ in the last digit.

- P. K. Nag, *Engineering Thermodynamics*: Topics 1 to 3, 6 and 8.
- Yunus A. Çengel and Michael A. Boles, *Thermodynamics: An Engineering Approach*: Topics 1 to 3 and 6 to 9.
- V. Ganesan, *Internal Combustion Engines*: Topics 3 to 5 and 10.
- R. K. Rajput, *Thermal Engineering*: every topic, at exam level.
- C. P. Arora, *Refrigeration and Air Conditioning*: Topic 9.
- G. F. C. Rogers and Y. R. Mayhew, *Thermodynamic and Transport Properties of Fluids*: the steam tables behind Topic 6.
