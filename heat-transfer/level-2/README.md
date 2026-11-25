# Heat Transfer Level 2: Theory Deep Dive

Nov 25, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the formula lists and past questions are.

Conventions used throughout:

- SI units: heat flow Q in watts, heat flux q in W/m², thermal conductivity k in W/m·K, heat transfer coefficient h in W/m²·K. A temperature difference is the same number in °C and in kelvin, so differences can stay in °C.
- Absolute temperature (kelvin, °C + 273) is needed whenever a formula raises a temperature to a power or divides by it: the radiation laws, Wien's law, and the expansion coefficient of a gas, β = 1/T.
- The Stefan–Boltzmann constant is σ = 5.67 × 10⁻⁸ W/m²·K⁴, and Wien's constant is 2898 μm·K.
- A thermal resistance is a temperature difference divided by the heat flow it drives, in K/W. Temperature difference plays the part of voltage, heat flow the part of current, so walls, pipe layers, fluid films and radiation gaps add like electrical resistors.
- Topics 1 to 5 are conduction. Topics 6 and 7 are convection. Topics 8 and 9 are radiation. Topic 10, heat exchangers, uses all three.

## 1. Modes of heat transfer and thermal conductivity

Heat moves in three ways, and every heat transfer question starts by asking which one is at work. Exam setters twist the reason metals conduct so well, which way k moves with temperature, the difference between k and h, and the difference between conductivity and diffusivity.

### The picture

Sit near a campfire on a cold night. Your face feels warm although the air between you and the fire is cold: that heat came as radiation, which needs nothing to travel through. Above the fire, hot air and smoke rise and fresh air flows in from the sides: that is convection, heat carried by a moving fluid. Leave an iron rod with one end in the fire, and soon the other end is too hot to hold: that is conduction, heat handed along through the rod while the rod itself stays put.

Think of news spreading through a village. In conduction it is passed from neighbour to neighbour, and nobody moves. In convection someone carries it by walking across the village. In radiation it is announced on the radio and reaches everyone at once, even across an empty field.

### Twisted points

**Heat follows temperature, not the amount of heat.** Heat always flows from higher temperature to lower, whatever the sizes of the bodies. A red-hot needle dropped into a bucket of warm water warms the water, even though the bucket holds far more heat. Fourier's law says the same thing: Q = −kA dT/dx. The minus sign is there because dT/dx is negative in the direction heat flows, so Q comes out positive.

**Metals conduct well because of their free electrons.** In a metal, the free electrons that carry electric current also carry heat, so good electrical conductors (silver, copper, aluminium) are good heat conductors. Alloying elements scatter these electrons: pure copper has k of about 400 W/m·K, brass about 110, and stainless steel only about 15. Diamond has no free electrons and yet has the highest k of all, about 2000 W/m·K, because its very stiff, light lattice passes vibrations along almost without loss.

**k moves with temperature in opposite directions for different materials.** In a gas, hotter molecules move faster and carry energy across faster, so k rises with temperature. In a pure metal, a hotter lattice vibrates more and scatters the free electrons more, so k falls. Most liquids fall too, but water's k rises up to about 130 °C. Insulators rise, because more heat crosses their pores by radiation as they get hotter. "k falls when heated" is true only for metals and most liquids.

**k is a property of the material; h is not.** Thermal conductivity can be looked up in a table for each material at each temperature. The heat transfer coefficient cannot: the same air gives h of about 5 W/m²·K over a still, warm plate and about 100 W/m²·K when a fan blows on it. h depends on the fluid, its speed, the shape and size of the surface, and whether the fluid is boiling or condensing. Rough ranges: free convection in gases 2 to 25 W/m²·K, forced convection in gases 25 to 250, forced convection in liquids 50 to 20,000, and boiling or condensation 2,500 to 100,000. Their units differ too: k is per metre (W/m·K), h is per square metre (W/m²·K).

**Conductivity and diffusivity answer different questions.** Conductivity k says how much heat flows through a material once temperatures are steady. Diffusivity α = k/ρc says how fast a change in temperature spreads, because it divides k by the heat the material soaks up on the way (ρc per cubic metre per kelvin). Air has a very low k, but it stores so little heat that its α (about 2.2 × 10⁻⁵ m²/s) is about 150 times that of water (about 1.4 × 10⁻⁷ m²/s). High k does not always mean high α.

**Insulators work by trapping still air.** Air's k, 0.026 W/m·K, is lower than that of almost any solid, but moving air carries heat away by convection. Glass wool, thermocole and cork split the air into cells too small for it to circulate, so heat can only crawl through by conduction. If the insulation gets wet, water (k about 0.6) replaces the air and conducts over 20 times better. A vacuum flask goes further: the vacuum between its walls stops conduction and convection, and its silvered walls reflect radiation.

**Radiation needs no medium and grows fastest with temperature.** It travels best through a vacuum, which is how the Sun's heat reaches the Earth. A black body emits σT⁴ per square metre, with T in kelvin, so doubling the absolute temperature multiplies the emission by 16. At room temperature, radiation from a surface is about as large as free convection; in a furnace it dominates.

### Worked numbers

**Conduction through a wall.** A brick wall 0.2 m thick, with k = 0.7 W/m·K and an area of 10 m², is at 25 °C inside and 5 °C outside.

```math
Q = \frac{kA\,(T_1 - T_2)}{L} = \frac{0.7 \times 10 \times 20}{0.2} = 700\ \text{W}
```

The heat flux is 700 ÷ 10 = 70 W/m².

**Convection from a plate.** A plate 0.5 m × 0.5 m at 80 °C stands in air at 30 °C, with h = 10 W/m²·K.

```math
Q = hA\,(T_s - T_\infty) = 10 \times 0.25 \times 50 = 125\ \text{W}
```

**Radiation and the fourth power.** A black surface at 727 °C (1000 K) emits

```math
E_b = \sigma T^4 = 5.67\times10^{-8} \times 1000^{4} = 56{,}700\ \text{W/m}^2
```

At 27 °C (300 K) the same surface emits 5.67 × 10⁻⁸ × 300⁴ = 459 W/m². The absolute temperature rose 3.33 times, and the emission rose 3.33⁴ = 124 times. Working in °C instead (727⁴ ÷ 27⁴) would give a ratio of over 500,000, which is absurd.

**Diffusivity of copper and water.** Copper: k = 400 W/m·K, ρ = 8900 kg/m³, c = 385 J/kg·K.

```math
\alpha = \frac{k}{\rho c} = \frac{400}{8900 \times 385} = 1.17\times10^{-4}\ \text{m}^2/\text{s}
```

Water: k = 0.6, ρ = 1000, c = 4180, so α = 0.6 ÷ 4,180,000 = 1.4 × 10⁻⁷ m²/s. Copper spreads a temperature change about 800 times faster than water.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Heat flows from the body holding more heat to the one holding less. | It flows from higher temperature to lower, whatever the amounts. |
| Silver has the highest thermal conductivity. | Diamond, at about 2000 W/m·K, is higher. Silver is the best of the metals. |
| Every material conducts worse when heated. | Gases and insulators conduct better when heated. Pure metals and most liquids conduct worse. |
| k and h have the same unit. | k is in W/m·K, h in W/m²·K. |
| h is a property of the fluid, like its density. | It also depends on the fluid's speed and the surface's shape and size. |
| A thicker slab has a lower k. | k belongs to the material. A thicker slab has a larger resistance, L/kA. |
| Radiation needs air to travel through. | It travels best through a vacuum. |
| Convection can happen inside a solid. | It needs a moving fluid. Inside a solid, or a still fluid, heat only conducts. |
| A material with low k always has low α. | Air has a tiny k but a higher α than water, because it stores so little heat. |
| An alloy conducts better than its pure base metal. | Alloying scatters the free electrons: brass and stainless steel conduct far worse than copper and iron. |
| Wet insulation still insulates. | Water conducts over 20 times better than the air it replaces. |
| Liquid metals conduct like solid copper. | Mercury's k is only about 8 W/m·K. Sodium is the best liquid-metal conductor. |

## 2. Steady conduction through plane and composite walls

Steady conduction through layers is Ohm's law in disguise. Exam setters twist which layer takes the biggest temperature drop, when to add resistances and when to add conductances, what the overall coefficient U includes, why the equivalent conductivity is not an average, and how a k that changes with temperature bends the profile.

### The picture

Picture a single road with a row of toll booths, one after another. Every car that enters must pass every booth, so the number of cars per hour is the same at each booth, however fast or slow it is. The slowest booth builds the longest queue. That is a composite wall in series: the heat flow is the same through every layer, and the layer with the most resistance takes the biggest temperature drop.

Now open a second road beside the first, with its own booth. Cars split between the two roads, and the total per hour is the sum of the two. The faster road carries more of the traffic. That is a wall with parts side by side, such as a window set in a brick wall: the heat splits between the paths, and most of it takes the easy one.

### Twisted points

**In series, the heat flow is shared by every layer; the temperature drop is not.** The same Q passes through each layer, and each layer's drop is Q times its own resistance, L/kA. So drops share out in proportion to resistance. In two layers of equal thickness where k1 = 2k2, the second layer takes twice the drop of the first. Since q = k × (drop ÷ thickness) is the same in both, the temperature gradient is steepest in the layer with the lowest k.

**Steady does not mean still.** In steady state no temperature changes with time, but the temperatures differ from point to point and heat flows all the time. What is steady is the balance: each layer passes on exactly the heat it receives and stores none.

**Add resistances in series, conductances in parallel.** Layers one after another: R = R1 + R2 + …. Paths side by side: 1/R = 1/R1 + 1/R2 + …, which is the same as adding the UA values of each path. A parallel path with low resistance carries far more than its share of the area: a single-glazed window can lose almost as much heat as the much larger wall around it.

**The equivalent conductivity of series layers is not the average.** For two layers of equal thickness in series, k\_eq = 2k1k2/(k1 + k2), which is the harmonic mean and always sits close to the smaller k. With k1 = 1 and k2 = 100 W/m·K it is 1.98, not 50.5: the poor conductor controls the flow. For two equal layers side by side, each carrying heat across the full thickness, k\_eq is the plain average, (k1 + k2)/2.

**U is built from reciprocals, and the lowest h controls it.** 1/U = 1/h1 + ΣL/k + 1/h2, so U is always smaller than the smallest of h1, k/L and h2. If a thin metal wall separates air with h = 10 W/m²·K from water with h = 1000, then 1/U = 0.1 + 0.001 = 0.101, and U = 9.9 W/m²·K. Doubling the water-side h changes U by about half a percent; doubling the air-side h nearly doubles it. To raise U, attack the largest resistance, which is the smallest h. This is why fins go on the air side (Topic 4).

**A k that varies with temperature bends the straight line.** Take k = k0(1 + βT). The flux q = −k dT/dx is the same at every plane. If β is positive, k is larger at the hot face, so the gradient there is gentle, and it gets steeper towards the cold face: the profile bulges above the straight line. If β is negative, it sags below. The heat flow still comes out exactly as Q = k\_m A(T1 − T2)/L, with k\_m taken at the mean temperature (T1 + T2)/2.

**Every joint adds a contact resistance.** Two faces pressed together touch only at their high spots, and the gaps between are filled with air, which conducts poorly. So a joint has its own temperature jump, as if a thin extra layer were there. Higher pressure, smoother faces, a soft metal foil or a conducting paste all shrink it. In a vacuum, with no air in the gaps, contact resistance is larger still.

**Check the ratio, not the numbers.** Q = kAΔT/L, so doubling k or A or ΔT doubles Q, and doubling L halves it. Doubling k and L together leaves Q unchanged. Many one-mark questions are only this.

### Worked numbers

**A furnace wall with films.** Per square metre of wall: inside gas at 520 °C with h1 = 50 W/m²·K, then 0.2 m of firebrick (k = 1.0 W/m·K), then 0.1 m of insulating brick (k = 0.1), then outside air at 20 °C with h2 = 10.

```math
R = \frac{1}{50} + \frac{0.2}{1.0} + \frac{0.1}{0.1} + \frac{1}{10}
```

```math
= 0.02 + 0.2 + 1.0 + 0.1 = 1.32\ \text{m}^2\text{K/W}
```

```math
q = \frac{520 - 20}{1.32} = 379\ \text{W/m}^2 \qquad U = \frac{1}{1.32} = 0.76\ \text{W/m}^2\text{K}
```

The drops are q times each resistance: 7.6 °C across the inside film, 75.8 °C across the firebrick, 378.8 °C across the insulation and 37.9 °C across the outside film, adding up to 500 °C. So the inside face of the wall is at 512 °C, the joint at 437 °C and the outer face at 58 °C. The insulating brick, half as thick as the firebrick, takes three-quarters of the drop.

**Equivalent k of two equal layers.** With k1 = 1 and k2 = 100 W/m·K in series:

```math
k_{eq} = \frac{2k_1k_2}{k_1 + k_2} = \frac{2 \times 1 \times 100}{101} = 1.98\ \text{W/m\,K}
```

**A window in a wall.** A wall has 8 m² of brick (0.2 m thick, k = 0.7 W/m·K) and 2 m² of glass (5 mm thick, k = 0.8). Inside h = 10 and outside h = 25 W/m²·K, so the two films add 0.1 + 0.04 = 0.14 m²·K/W to each path. The inside is 20 °C warmer than the outside.

- Brick path: 0.14 + 0.2/0.7 = 0.426 m²·K/W, so U = 2.35 and Q = 2.35 × 8 × 20 = 376 W.
- Glass path: 0.14 + 0.005/0.8 = 0.146 m²·K/W, so U = 6.84 and Q = 6.84 × 2 × 20 = 274 W.

The glass is 20% of the area but loses 42% of the 650 W. Almost all of its resistance is the two air films, not the glass.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| More heat flows through the better-conducting layer of a series wall. | The same heat flows through every layer in series. |
| The best conductor takes the biggest temperature drop. | The layer with the largest resistance (thick, or low k) takes it. |
| The equivalent k of two equal series layers is their average. | It is 2k1k2/(k1 + k2), close to the smaller k. |
| U = h1 + k/L + h2. | 1/U = 1/h1 + L/k + 1/h2. U is smaller than every one of them. |
| In steady state no heat flows. | Heat flows steadily; only the temperatures stop changing with time. |
| The temperature profile in a plane wall is always a straight line. | Only when k is constant and no heat is generated inside. |
| To raise U, improve the side with the higher h. | Improve the side with the lower h: it holds the largest resistance. |
| Side-by-side paths: add their resistances. | Add their conductances (1/R), or their UA values. |
| Polished faces pressed together have no contact resistance. | There is always some. Pressure, foil or paste reduces it. |
| Doubling both k and thickness doubles Q. | Q depends on k/L, so it stays the same. |
| Thermal resistance is in W/K. | It is in K/W; per square metre of wall, m²·K/W. |

## 3. Cylinders, spheres and critical radius of insulation

In a pipe or a sphere, the area through which heat flows grows with radius, and that one fact changes everything from Topic 2. Exam setters twist the mean radius to use, why the critical radius gives the most heat loss rather than the least, which k and h go into it, the factor of 2 for a sphere, and the order in which to wrap two insulating layers.

### The picture

Think of a crowd leaving a stadium through a round concourse. Near the inner gates people are packed tight; every ring further out is longer, so the same crowd spreads thinner. Heat leaving a pipe does the same. The same Q passes every radius, but through ever more area, so the heat flux and the temperature gradient fall as you go outwards. The temperature curve flattens with radius: it is a log curve, not the straight line of a flat wall.

Now wrap a thin electric wire in insulation. You have made its walls thicker, which slows the heat. But you have also given it much more skin facing the air, which speeds the heat up. On a thin wire the extra skin wins at first, and the wire loses more heat than it did bare. On a fat steam pipe the skin is already large, so only the thicker walls count, and every layer saves heat.

### Twisted points

**The same Q, ever more area, so the gradient falls outwards.** At radius r the heat crosses an area 2πrL, so the flux and dT/dr are both proportional to 1/r. That is why T falls in a straight line against ln r, giving R = ln(r2/r1)/(2πkL). When the wall is thin compared with the radius, ln(r2/r1) is close to (r2 − r1)/r1, and the formula turns back into the plane wall's L/kA. So a thin tube wall can be treated as flat.

**Three means, in a fixed order.** A pipe wall acts like a flat wall with its area taken at the log mean radius, (r2 − r1)/ln(r2/r1). A sphere uses the geometric mean, √(r1r2). For r1 = 1 and r2 = 3, the arithmetic mean is 2, the log mean 1.82 and the geometric mean 1.73. The log mean always lies between the other two, and all three meet when r2 is close to r1.

**The critical radius gives the most heat loss, not the least.** For a pipe of length L with insulation out to radius r, the total resistance is the insulation's ln(r/r1)/(2πkL) plus the outside film's 1/(2πrhL). The first grows with r and the second shrinks. Their sum is smallest where its slope is zero:

```math
\frac{dR}{dr} = \frac{1}{2\pi k L r} - \frac{1}{2\pi h L r^{2}} = 0 \;\Rightarrow\; r_c = \frac{k}{h}
```

The least resistance means the greatest heat loss. For a sphere the film term is 1/(4πr²h), which shrinks faster with r, and the same steps give rc = 2k/h.

**rc belongs to the insulation and the air, not to the pipe.** rc = k/h uses the conductivity of the insulation and the h of the outside fluid. The pipe's own radius is not in it; it only decides which side of the peak you start on. A higher h (wind, forced air) makes rc smaller. For glass wool (k about 0.04 W/m·K) in still air (h about 10), rc is about 4 mm, so any steam pipe is already far past it, and lagging always saves heat. A thin wire under PVC (k about 0.2) has rc of about 20 mm, so its insulation helps it shed heat and run cooler.

**Thin insulation can raise the loss; thick insulation still cuts it.** If the bare radius is below rc, heat loss rises as insulation is added, peaks at rc, then falls. It falls back to the bare value only at some radius well beyond rc, and below it after that. For a very thin wire, that radius is so large that in practice its insulation never brings the loss below the bare value. So "insulation increases heat loss" is true only for the first part of the layer on a thin pipe or wire.

**Wrap the better insulator first.** On a pipe, a layer's resistance is ln(r\_out/r\_in)/(2πkL), and the ratio r\_out/r\_in is largest close to the pipe, where the radius is small. So the inner layer carries more weight, and the material with the lower k should go inside. On a flat wall the order makes no difference, since L/k is the same wherever the layer sits.

**A sphere alone in a still fluid still has Nu = 2.** For a sphere of radius r1 in an endless still medium, let r2 grow without limit in Q = 4πk r1 r2 ΔT/(r2 − r1). Q tends to 4πkr1ΔT. Dividing by the surface area 4πr1² gives h = k/r1, so Nu = hD/k = 2. That is the smallest Nusselt number a sphere can have, the value for pure conduction with no flow (Topic 6).

### Worked numbers

**Lagging a steam pipe.** A pipe of outer radius 50 mm is at 200 °C in air at 30 °C, with h = 10 W/m²·K outside. It is lagged with 25 mm of insulation, k = 0.05 W/m·K. Per metre of pipe:

```math
R_{ins} = \frac{\ln(75/50)}{2\pi \times 0.05 \times 1} = \frac{0.405}{0.314} = 1.291\ \text{K/W}
```

```math
R_{conv} = \frac{1}{10 \times 2\pi \times 0.075 \times 1} = 0.212\ \text{K/W}
```

```math
Q = \frac{200 - 30}{1.291 + 0.212} = 113\ \text{W per metre}
```

Bare, the pipe would have R = 1/(10 × 2π × 0.05) = 0.318 K/W and lose 534 W per metre, so the lagging saves about 79%. The outside of the lagging is at 30 + 113 × 0.212 = 54 °C.

**A wire that loses more heat when insulated.** A wire of radius 1 mm is 50 °C above the air, with h = 10 W/m²·K. Its insulation has k = 0.2 W/m·K, so rc = 0.2/10 = 0.02 m = 20 mm. Per metre:

- Bare: R = 1/(10 × 2π × 0.001) = 15.9 K/W, so Q = 50/15.9 = 3.1 W.
- Insulated to 5 mm radius: R = ln 5/(2π × 0.2) + 1/(10 × 2π × 0.005) = 1.28 + 3.18 = 4.46 K/W, so Q = 11.2 W.
- Insulated to rc = 20 mm: R = ln 20/(2π × 0.2) + 1/(10 × 2π × 0.02) = 2.38 + 0.80 = 3.18 K/W, so Q = 15.7 W, the most it can lose.

The critical thickness is 20 − 1 = 19 mm.

**Which layer goes inside.** A pipe of radius 50 mm takes two layers 25 mm thick, one with k = 0.05 and one with k = 0.1 W/m·K. The inner layer runs from 50 to 75 mm (ln 1.5 = 0.405) and the outer from 75 to 100 mm (ln 1.333 = 0.288). Leaving out the common factor 2πL:

- Lower k inside: 0.405/0.05 + 0.288/0.1 = 8.11 + 2.88 = 10.99
- Lower k outside: 0.405/0.1 + 0.288/0.05 = 4.05 + 5.75 = 9.80

Putting the better insulator inside gives about 12% more resistance, so about 11% less heat loss, from the same material.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The critical radius gives the least heat loss. | It gives the greatest heat loss, because the total resistance is least there. |
| rc = k/h uses k of the pipe metal. | It uses k of the insulation and h of the outside fluid. |
| rc for a sphere is k/h. | It is 2k/h. For a cylinder or wire it is k/h. |
| rc is the thickness of insulation. | It is a radius from the centre. The critical thickness is rc minus the bare radius. |
| Insulation always reduces heat loss. | On a pipe or wire thinner than rc, a thin layer increases it. |
| A higher outside h raises rc. | It lowers rc, since rc = k/h. |
| The temperature falls in a straight line through a pipe wall. | It falls along a log curve, straight only when plotted against ln r. |
| The log mean radius is (r1 + r2)/2. | It is (r2 − r1)/ln(r2/r1), a little smaller than the arithmetic mean. |
| A hollow sphere uses the log mean area. | It uses the geometric mean area, at the radius √(r1r2). |
| The order of two insulating layers on a pipe makes no difference. | The lower-k layer should go inside. The order matters only on curved walls. |
| Cable insulation should be as thick as possible. | Insulation near rc helps the cable shed heat while still insulating it electrically. |

## 4. Fins

A fin is extra surface stuck on to a hot wall so that it sheds more heat. Exam setters twist which side of a wall the fins belong on, what the fin parameter m measures, why a longer fin soon stops helping, the difference between efficiency and effectiveness, and the case where a fin makes things worse.

### The picture

Picture a crowded hall with a long corridor leading off it. Along both walls of the corridor are doors to the street. People leave the hall by walking down the corridor and out through the side doors. If the corridor is wide and easy to walk along, people reach its far end, and every door is used. If it is narrow and crowded, most people leave by the first few doors, and the far end is wasted. If the doors are huge, people leave the moment they enter, and the hall's own doors would have done almost as well.

The corridor is the fin. Walking along it is conduction (k and the cross-section A). Leaving by the side doors is convection (h and the perimeter P). The fin parameter m = √(hP/kA) compares the two: a small m means heat travels the whole length before it leaves, and the whole fin works.

### Twisted points

**Fins pay where h is low.** Convection carries away hAΔT, so where h is small, adding A is the only cheap way to raise the heat flow. That is why fins sit on the air side: on a motorcycle cylinder, on the outside of a car radiator's tubes (water runs inside), and on the heat sink of a computer chip. On the water side, or where steam condenses, h is already large, and fins add little.

**What m measures.** m² = hP/kA is the heat leaving the sides per metre of fin divided by the fin's ability to conduct heat along itself. Its unit is per metre, and 1/m is roughly the length over which the excess temperature of a long fin falls to 37% (1/e). For a thin plate fin of thickness t, P/A is about 2/t, so m = √(2h/kt). For a pin fin of diameter d, P/A = 4/d, so m = √(4h/kd). High k, low h and a thick fin give a small m.

**A longer fin carries more heat, but soon only a little more.** For an insulated tip the heat flow carries the factor tanh mL, which climbs quickly and then flattens: 0.76 at mL = 1, 0.96 at mL = 2 and 0.995 at mL = 3. Past mL of about 2 to 3, adding length adds metal and weight but almost no heat. The far end of a long fin is nearly at the fluid temperature and does no work.

**Efficiency and effectiveness compare with different things.** Efficiency compares the fin with a perfect fin held at the base temperature all along, so it can never reach 1, and it falls as the fin gets longer. Effectiveness compares the fin with no fin at all, so it should be well above 1. A very short stub has an efficiency close to 1 but hardly adds any heat; a long fin has a low efficiency but a large effectiveness. Neither number alone says the fin is good. They are linked by ε = η × (fin surface area ÷ base area).

**A fin can make things worse.** For a long fin, ε = √(kP/hA). If hA/kP is larger than 1, the fin is worse than bare wall: it adds more conduction resistance than it adds surface. For a thin plate fin this is √(2k/ht), so the danger is low k, high h and thick fins. A plastic fin in water insulates; an aluminium fin in air helps enormously. Designers ask for ε of at least 2 before a fin is worth its cost.

**Many thin fins beat a few thick ones, up to a point.** For the same mass of metal, thin fins have more perimeter per unit cross-section, so they offer more surface for convection. But fins set too close together block the air between them, the boundary layers on neighbouring fins merge, and h falls. Real heat sinks space fins to balance the two.

**The tip: three models and one trick.** A very long fin has its tip at the fluid temperature. An insulated tip loses no heat, which is the model most questions use. A tip that does lose heat is handled by pretending it is insulated and adding its area to the sides: a pin fin's tip area πd²/4 equals side area πd × (d/4), so the corrected length is L + d/4. A plate fin's tip area wt equals side area 2w × (t/2), so the corrected length is L + t/2.

### Worked numbers

**An aluminium pin fin.** Diameter d = 5 mm, length L = 50 mm, k = 200 W/m·K, h = 20 W/m²·K, base at 100 °C, air at 25 °C, so θ0 = 75 °C. Treat the tip as insulated.

```math
m = \sqrt{\frac{4h}{kd}} = \sqrt{\frac{4 \times 20}{200 \times 0.005}} = \sqrt{80} = 8.94\ \text{m}^{-1}
```

So mL = 8.94 × 0.05 = 0.447, and tanh 0.447 = 0.420. With P = πd = 0.0157 m and A = πd²/4 = 1.96 × 10⁻⁵ m²:

```math
\sqrt{hPkA} = \sqrt{20 \times 0.0157 \times 200 \times 1.96\times10^{-5}} = 0.0351\ \text{W/K}
```

```math
Q = 0.0351 \times 75 \times 0.420 = 1.11\ \text{W}
```

- Efficiency: η = tanh mL / mL = 0.420/0.447 = 0.94.
- Tip temperature: θtip = 75/cosh 0.447 = 75/1.102 = 68 °C, so the tip is at 93 °C.
- Effectiveness: the 1.96 × 10⁻⁵ m² of base would lose 20 × 1.96 × 10⁻⁵ × 75 = 0.029 W bare, so ε = 1.11/0.029 = 37.5. Check: η × (fin side area ÷ base area) = 0.94 × (4L/d) = 0.94 × 40 = 37.5.

**Where extra length stops paying.** For an insulated tip, Q is proportional to tanh mL and η = tanh mL / mL:

| mL | tanh mL (share of the most heat a fin this thick can carry) | Efficiency |
| --- | --- | --- |
| 0.5 | 0.46 | 0.92 |
| 1 | 0.76 | 0.76 |
| 2 | 0.96 | 0.48 |
| 3 | 0.995 | 0.33 |

Going from mL = 2 to mL = 3 makes the fin 50% longer for about 3% more heat.

**A fin that insulates.** A plastic plate fin 2 mm thick (k = 0.2 W/m·K) in water with h = 1000 W/m²·K:

```math
\varepsilon = \sqrt{\frac{2k}{ht}} = \sqrt{\frac{2 \times 0.2}{1000 \times 0.002}} = 0.45
```

The wall loses less than half as much heat where the fin is fixed as it would bare. An aluminium fin of the same size in air (k = 200, h = 25) gives √(400/0.05) = 89.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Fins belong on the side with the higher h. | They belong on the side with the lower h, usually the air side. |
| A longer fin is always better. | Beyond mL of about 2 to 3, extra length adds almost no heat. |
| Fin efficiency can be more than 1. | It is always below 1. Effectiveness is the one that should be well above 1. |
| Efficiency and effectiveness mean the same. | Efficiency compares with an ideal fin at base temperature; effectiveness compares with no fin. |
| A fin with high efficiency is a good fin. | A very short stub has efficiency near 1 but adds almost nothing. |
| Any fin increases heat transfer. | If hA/kP is above 1 (low k, high h, thick fin), the fin reduces it. |
| The fin material makes little difference. | High k is essential: aluminium and copper are used. |
| Thicker fins transfer more heat. | For the same metal, many thin fins give more surface. |
| The tip of a long fin is at the base temperature. | It is at the fluid temperature. |
| The corrected length is L + t for a plate fin. | It is L + t/2 for a plate fin and L + d/4 for a pin fin. |
| m is a pure number. | m is per metre. mL is the pure number. |
| Fins should be packed as close as possible. | Too close, and the air between them stops moving and h falls. |

## 5. Transient conduction

When a body is suddenly put into a hotter or colder fluid, its temperature changes with time before it settles. Exam setters twist the meaning of the Biot number and which k goes into it, the characteristic length of a sphere, the meaning of the time constant, why cooling slows down as it goes, and how the time to heat a body grows with its size.

### The picture

Take a thin chapati and a big potato out of the same hot oven. The chapati cools in a minute, and it is equally warm everywhere while it cools: heat reaches its surface from the inside far faster than the air can carry it away, so nothing builds up inside. That is a lumped body, with a small Biot number.

The potato's skin cools quickly, but its centre stays hot for a long time, because heat must crawl out through the potato itself. The bottleneck is now inside the body, not at its surface, so the inside and the surface are at very different temperatures. That is a large Biot number, and the lumped formula no longer applies.

### Twisted points

**The Biot number compares two resistances.** Bi = hLc/k is the resistance to conduction inside the body (Lc/k) divided by the resistance to convection at its surface (1/h). When Bi is small, the inside passes heat easily and the surface is the bottleneck, so the whole body stays at nearly one temperature. When Bi is large, the inside is the bottleneck and the centre lags behind the surface. The k in Bi is the solid's; Nu = hL/k looks the same but uses the fluid's k (Topic 6).

**The characteristic length is V/As, not the radius.** For a plate cooled on both faces, Lc is half the thickness. For a long cylinder it is r/2, for a sphere r/3 (D/6), and for a cube a/6. Using r for a sphere makes Bi three times too big and can wrongly fail the Bi < 0.1 check. Heisler charts use the half-thickness or the full radius instead, but the lumped check always uses V/As.

**The fall is exponential because the cooling rate follows the excess.** In a lumped body, the heat lost at the surface each second, hAs(T − T∞), is the drop in stored heat, −ρVc dT/dt. The rate is proportional to the excess temperature itself, so the excess falls by the same fraction in each equal stretch of time, not by the same number of degrees. Tea at 90 °C in a 20 °C room has an excess of 70 °C. Cooling from 90 to 60 °C (excess 70 to 40) takes ln(70/40) = 0.56 time constants; cooling from 60 to 30 °C (excess 40 to 10) takes ln(40/10) = 1.39, about two and a half times longer.

**The time constant is when 37% of the excess is left.** τ = ρVc/hAs. After one τ the excess has fallen to 1/e = 36.8% of its start, so 63.2% of the change is done. After 2τ, 13.5% is left; after 3τ, 5%; after 5τ, under 1%. A thermocouple with a smaller bead has a smaller V/As and so a smaller τ: it reads a sudden change faster. A faster gas stream raises h and also speeds it up.

**Bi × Fo is the lumped exponent.** The Fourier number Fo = αt/Lc² is a dimensionless time. Multiply the two numbers:

```math
Bi \cdot Fo = \frac{hL_c}{k}\cdot\frac{\alpha t}{L_c^{2}} = \frac{h\,t}{\rho c\,L_c} = \frac{hA_s\,t}{\rho V c} = \frac{t}{\tau}
```

So the lumped formula can be written either way: e^(−hAs t/ρVc) or e^(−Bi·Fo).

**Size changes the time differently in the two cases.** In a lumped body, τ = ρcLc/h, so doubling the size doubles the cooling time. In a body limited by internal conduction (large Bi), the same stage of cooling is reached at the same Fourier number, αt/Lc², so doubling the size makes it take four times as long. That is why a large roast takes much longer to cook through than a small one.

**Shape sets the cooling rate for a given volume.** The heat leaves through the surface, so for the same volume and material the body with the least surface cools slowest. A sphere has the least surface for its volume and cools slowest; a thin plate cools fastest. That is also why fins are thin.

**The general equation and its three named forms.** In one dimension with no heat generated, ∂T/∂t = α ∂²T/∂x²: a point heats up where the profile curves upward around it. Steady with no generation, the equation becomes ∇²T = 0, the Laplace equation. Steady with generation, ∇²T + q̇/k = 0, the Poisson equation. Unsteady with no generation, ∇²T = (1/α) ∂T/∂t, the Fourier (diffusion) equation. α appears only when time does, so diffusivity matters only in unsteady problems.

### Worked numbers

**Cooling a steel ball.** A steel ball 10 mm across (k = 40 W/m·K, ρ = 7800 kg/m³, c = 460 J/kg·K) at 600 °C is cooled by an air blast at 30 °C with h = 100 W/m²·K. How long until it reaches 100 °C?

Lc = r/3 = 5/3 = 1.67 mm.

```math
Bi = \frac{hL_c}{k} = \frac{100 \times 0.00167}{40} = 0.0042 < 0.1
```

So the ball is lumped.

```math
\tau = \frac{\rho c L_c}{h} = \frac{7800 \times 460 \times 0.00167}{100} = 59.8\ \text{s}
```

```math
t = \tau \ln\frac{T_i - T_\infty}{T - T_\infty} = 59.8 \ln\frac{570}{70} = 59.8 \times 2.10 = 125\ \text{s}
```

**When lumping fails.** A steel ball 100 mm across, quenched in water with h = 2000 W/m²·K: Lc = 50/3 = 16.7 mm, so Bi = 2000 × 0.0167/40 = 0.83. That is far above 0.1, so the centre lags well behind the surface, and its temperature must come from the Heisler charts.

**A thermocouple bead.** A bead 1 mm across with ρ = 8500 kg/m³ and c = 400 J/kg·K sits in a gas stream with h = 200 W/m²·K. Lc = d/6 = 0.000167 m.

```math
\tau = \frac{\rho c L_c}{h} = \frac{8500 \times 400 \times 0.000167}{200} = 2.8\ \text{s}
```

To show 99% of a sudden change, 1% of the excess may remain: t = τ ln 100 = 4.6τ = 13 s. A bead half the size would take half as long.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Bi uses k of the fluid. | It uses k of the solid. Nu uses k of the fluid. |
| Lc of a sphere is its radius. | It is V/As = r/3. For a long cylinder r/2. |
| Lc of a plate is its thickness. | It is half the thickness when both faces are cooled. |
| The lumped method needs Bi > 0.1. | It needs Bi < 0.1. |
| A high Bi means the body stays at one temperature. | A low Bi does. A high Bi means a large difference between centre and surface. |
| After one time constant, 37% of the change is done. | 63% is done, and 37% of the excess is left. |
| A body cools by equal degrees in equal times. | It loses equal fractions of its excess in equal times, so cooling slows down. |
| A bigger thermocouple bead responds faster. | A smaller bead, with less volume per unit area, responds faster. |
| Fo is a temperature ratio. | Fo = αt/Lc² is a dimensionless time. |
| The Laplace equation includes heat generation. | Laplace has neither generation nor time. Poisson adds generation. |
| Doubling a body's size always doubles its heating time. | Only for a lumped body. When conduction inside controls, the time grows four times. |
| A sphere cools faster than a plate of the same volume. | It cools slower, because it has the least surface for its volume. |

## 6. Convection, boundary layers and dimensionless numbers

Convection looks like a new mode, but at the wall itself it is conduction through a thin layer of fluid. Once that is clear, the dimensionless numbers explain themselves. Exam setters twist what each number compares, which boundary layer is thicker for a given Prandtl number, how h changes along a plate, the fixed Nusselt numbers of laminar pipe flow, and the exponent in the Dittus–Boelter equation.

### The picture

Blow across a cup of hot tea and it cools faster. Sitting on the tea is a thin film of warm, still air, and heat must cross that film by conduction before the room's air can carry it away. Your breath strips the film down and keeps replacing it with cool air, so the film stays thin and heat crosses it faster.

That is all of forced convection. Right against any surface the fluid does not move (it sticks to the wall), so heat enters the fluid by conduction through a thin layer. The faster the flow, the thinner the layer and the larger h. Roughly, h is the fluid's k divided by the thickness of that thermal layer.

### Twisted points

**h is the conductance of the fluid layer at the wall.** At the wall the fluid is at rest, so the heat flux is q = −k\_fluid (dT/dy) at the wall, and h = q/(Ts − T∞). A thin thermal boundary layer means a steep gradient and a large h; roughly h ≈ k/δT. This is why the Nusselt number, hL/k, is called the dimensionless temperature gradient at the wall: it is about L/δT.

**h is highest at the leading edge and falls along a laminar plate.** The boundary layer starts with zero thickness at the leading edge and grows as √x in laminar flow, so the local h falls as 1/√x. Averaging 1/√x from 0 to L gives exactly twice its value at L, which is why the average coefficient 0.664 is twice the local 0.332. Where the flow turns turbulent, eddies thin the layer near the wall again, and h jumps up.

**The critical Reynolds number depends on the geometry and the length used.** Flow over a flat plate turns turbulent at about Re = 5 × 10⁵, with Re based on the distance x from the leading edge. Flow in a pipe turns turbulent at about 2,300, with Re based on the diameter. Re always compares inertia with viscous force; only the length in it changes.

**Prandtl decides which layer is thicker.** Pr = ν/α compares how fast momentum spreads through the fluid with how fast heat spreads. It is a property of the fluid alone, though it changes with temperature (water's falls from about 13.7 at 0 °C to 1.75 at 100 °C). For Pr greater than 1, as in water and oils, momentum spreads further, so the velocity layer is thicker than the thermal layer. For Pr much less than 1, as in liquid metals, heat spreads further, and the thermal layer is far thicker. Gases sit near 0.7, so the two layers are about the same. For a laminar flat plate, δ/δT ≈ Pr^(1/3).

**Nu and Bi look alike but describe different things.** Both are hL/k. In Nu, k is the fluid's, and it describes the fluid layer: its conduction resistance (L/k) over its convection resistance (1/h). Nu = 1 means the fluid is only conducting. In Bi, k is the solid's, and it describes how evenly the solid heats (Topic 5).

**The same eddies carry heat and momentum.** In a turbulent flow, the eddies that carry momentum to the wall (and cause friction) also carry heat. So friction and heat transfer rise and fall together: St = Cf/2 when Pr = 1 (the Reynolds analogy), and St Pr^(2/3) = Cf/2 for other fluids (Colburn). Measure the drag on a plate and you can work out its h. The Stanton number, St = h/(ρVcp) = Nu/(Re Pr), compares the heat actually passed to the wall with the heat the stream could carry.

**In fully developed laminar pipe flow, Nu is a fixed number.** Once the thermal boundary layer has grown to fill the pipe, the shape of the temperature profile stops changing, and so does Nu = hD/k: 3.66 for a constant wall temperature and 4.36 (= 48/11) for a constant wall heat flux. It does not depend on Re or Pr. So in laminar pipe flow, h = Nu k/D does not change with velocity, and halving the diameter doubles h. Near the pipe entrance the layer is still thin, and h is higher.

**In turbulent pipe flow, h grows as V^0.8.** Dittus–Boelter, Nu = 0.023 Re^0.8 Pr^n, makes h proportional to V^0.8, so doubling the speed raises h by 2^0.8 = 1.74 times. The exponent n is 0.4 when the fluid is being heated and 0.3 when it is being cooled. The reason: a liquid next to a hot wall becomes less viscous, its film near the wall thins, and heat transfer improves; for Pr above 1, Pr^0.4 is larger than Pr^0.3. With the mass flow rate held fixed, V grows as 1/D², and h ends up proportional to 1/D^1.8: narrower tubes give much higher h, at the cost of more pumping power.

**Dimensional analysis tells you what Nu depends on.** In forced convection, Nu = f(Re, Pr). In free convection, buoyancy replaces the fan, and Nu = f(Gr, Pr) (Topic 7). A question that lists the groups for forced convection with Gr in place of Re is wrong.

### Worked numbers

**Air over a flat plate.** Air at 20 °C flows at 5 m/s along a plate 1 m long held at 60 °C. Take ν = 1.6 × 10⁻⁵ m²/s, k = 0.027 W/m·K and Pr = 0.7.

```math
Re_L = \frac{VL}{\nu} = \frac{5 \times 1}{1.6\times10^{-5}} = 3.13\times10^{5} < 5\times10^{5}
```

So the flow is laminar over the whole plate.

```math
\overline{Nu} = 0.664\,Re_L^{1/2}\,Pr^{1/3} = 0.664 \times 559 \times 0.888 = 330
```

```math
\bar{h} = \frac{\overline{Nu}\,k}{L} = \frac{330 \times 0.027}{1} = 8.9\ \text{W/m}^2\text{K}
```

The local h at the trailing edge is half that, 4.45 W/m²·K. A square metre of the plate loses 8.9 × 1 × 40 = 356 W from one face.

**Water heated in a tube.** Water flows at 1 m/s through a tube 25 mm across. Take ν = 0.8 × 10⁻⁶ m²/s, k = 0.62 W/m·K and Pr = 5.4.

```math
Re = \frac{VD}{\nu} = \frac{1 \times 0.025}{0.8\times10^{-6}} = 31{,}250
```

That is turbulent. The water is being heated, so n = 0.4.

```math
Nu = 0.023 \times 31{,}250^{0.8} \times 5.4^{0.4} = 0.023 \times 3943 \times 1.963 = 178
```

```math
h = \frac{Nu\,k}{D} = \frac{178 \times 0.62}{0.025} = 4{,}400\ \text{W/m}^2\text{K}
```

That is about 500 times the h of the air on the plate above. At 2 m/s, h would be 4,400 × 1.74 = 7,700 W/m²·K.

**Laminar oil in a tube.** Oil (k = 0.14 W/m·K) flows slowly through a tube 10 mm across with its wall held at a constant temperature. Once the flow is fully developed, Nu = 3.66, so h = 3.66 × 0.14/0.01 = 51 W/m²·K, whatever the speed, as long as the flow stays laminar.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| h is the same all along a plate. | It is highest at the leading edge, falls along the laminar part and jumps up where the flow turns turbulent. |
| The average Nu over a laminar plate equals the local Nu at its end. | It is twice the local value at the end: 0.664 against 0.332. |
| The critical Re for a flat plate is 2,300. | It is about 5 × 10⁵. 2,300 is for flow in a pipe. |
| Pr depends on the flow speed. | It depends only on the fluid and its temperature. |
| Pr greater than 1 means the thermal layer is thicker. | It means the velocity layer is thicker. Liquid metals (Pr much less than 1) have the thicker thermal layer. |
| Gases have Pr far above 1. | Gases are about 0.7 to 1. Oils are far above 1. |
| Nu uses k of the solid wall. | Nu uses k of the fluid. Bi uses k of the solid. |
| In laminar pipe flow, faster flow gives a larger h. | Once fully developed, Nu is fixed at 3.66 or 4.36, whatever the speed. |
| 3.66 is for constant heat flux. | 3.66 is for constant wall temperature; 4.36 is for constant heat flux. |
| In Dittus–Boelter, n = 0.3 when the fluid is heated. | n = 0.4 when the fluid is heated and 0.3 when it is cooled. |
| St = Nu × Re × Pr. | St = Nu/(Re × Pr) = h/(ρVcp). |
| Re compares viscous force with gravity. | Re compares inertia with viscous force. Gr compares buoyancy with viscous force. |

## 7. Free convection, boiling and condensation

In free convection nothing pushes the fluid: it moves because heating makes it lighter. Boiling and condensation add latent heat, and give the largest h of all. Exam setters twist the need for gravity, the Grashof number and β = 1/T, the order of the regimes on the boiling curve, why the critical heat flux burns out heaters, the Leidenfrost effect, and film against dropwise condensation.

### The picture

Watch a pot of water on a stove. At first there are no bubbles, but warm water rises from the middle of the bottom and cooler water sinks at the sides: that is free convection. Then small bubbles start at a few spots on the bottom, grow and break away, faster and faster: that is nucleate boiling, the most vigorous heat transfer you will see in a kitchen.

Now flick a few drops of water on to a tawa. On a tawa that is just above 100 °C, a drop sizzles and vanishes in a second. On a very hot tawa, the drop skates about for a long time: it is floating on a cushion of its own vapour, which insulates it from the iron. That is film boiling, and the hotter surface evaporates the drop more slowly. Pick up a glass of cold water on a humid day and the reverse happens: vapour condenses on the outside. On clean glass it spreads into a film that runs down; on a greasy patch it beads into drops.

### Twisted points

**No gravity, no free convection.** Free convection needs two things: a density difference caused by the temperature difference, and gravity to make the lighter fluid rise. In orbit a candle flame is round and dim, because its hot gases do not rise and fresh air does not flow in. For an ideal gas the expansion coefficient is β = 1/T with T in kelvin, so air at 27 °C has β = 1/300 per kelvin.

**Grashof does Reynolds's job.** Gr = gβΔTL³/ν² compares the buoyancy force driving the flow with the viscous force resisting it, just as Re compares inertia with viscous force. The Rayleigh number Ra = Gr × Pr then sets Nu = C Ra^n. On a vertical plate the flow is laminar up to about Ra = 10⁹, with n = 1/4; above it, turbulent, with n = 1/3. With n = 1/3, Nu = hL/k grows in proportion to L, so h no longer depends on the plate's height at all.

**Gr/Re² says which kind of convection wins.** Much less than 1: forced convection dominates and free convection can be ignored. Much more than 1: free convection dominates. Near 1 (roughly 0.1 to 10): both count, and the flow is mixed convection. The viscosity cancels in this ratio, which is gLβΔT/V².

**The boiling curve, in order.** For water at 1 atm, plotting heat flux against the excess temperature ΔTe = Ts − Tsat: up to about 5 °C, free convection with no bubbles; from about 5 to 30 °C, nucleate boiling, where bubbles form at pits in the surface, churn the liquid right at the wall and carry away latent heat, giving the highest h; at about 30 °C, the peak, the critical heat flux, about 1 MW/m²; from there to about 120 °C, transition boiling, where patches of vapour film come and go and the heat flux falls as the wall gets hotter; at about 120 °C, the minimum, the Leidenfrost point; and beyond it, film boiling, with a steady vapour blanket, where the heat flux rises again only slowly, helped by radiation across the film.

**Why the critical heat flux is called burnout.** An electric heater or a nuclear fuel rod sets the heat flux, not the temperature. If that flux is pushed just past the peak, the surface cannot stay on the nucleate part of the curve. It jumps straight across, at the same heat flux, to the film-boiling branch, where the same flux needs a wall temperature hundreds of degrees higher. The heater can melt. A surface heated by condensing steam, which sets the temperature instead, simply moves into transition boiling.

**A hotter surface can cool more slowly.** Past the Leidenfrost point, the vapour blanket insulates the surface. That is why a drop lasts longer on a very hot tawa, and why, in quenching steel, a vapour blanket first forms round the hot part and slows its cooling; stirring the bath breaks the blanket and gives a faster, more even quench.

**Dropwise condensation beats film condensation, but nobody designs on it.** In film condensation the liquid film covering the wall is itself a resistance, and heat must conduct across it. In dropwise condensation, drops form on a non-wettable surface (oily, or coated with a promoter such as oleic acid or Teflon), roll off and leave bare metal, so h is 5 to 10 times higher. But promoters wear off, and the surface drifts back to film condensation, so designers use film-condensation values.

**A little air spoils a condenser.** As steam condenses, any air that came with it is left behind and piles up next to the wall. Fresh steam must then diffuse through this air layer to reach the wall. Even a few percent of air can cut h by half or more, which is why condensers have air ejectors or vents.

**In film condensation, h falls down the wall, and horizontal tubes beat vertical ones.** The film is thinnest at the top and thickens as condensate collects on the way down, so h falls along a vertical plate (as L^(−1/4) in Nusselt's theory). On a horizontal tube, the film only has to run half way round the tube before it drips off, a short path, so the film stays thin. For a tube 50 times as long as its diameter, laid horizontally it condenses about twice as well as standing upright. That is why power-station condensers use horizontal tubes.

### Worked numbers

**Free convection from a vertical plate.** A plate 0.5 m high at 60 °C stands in still air at 20 °C. Take properties at the film temperature, (60 + 20)/2 = 40 °C = 313 K: β = 1/313 per K, ν = 1.7 × 10⁻⁵ m²/s, k = 0.027 W/m·K, Pr = 0.7.

```math
Gr = \frac{g\beta\Delta T L^{3}}{\nu^{2}} = \frac{9.81 \times \frac{1}{313} \times 40 \times 0.5^{3}}{(1.7\times10^{-5})^{2}} = 5.4\times10^{8}
```

Ra = Gr × Pr = 3.8 × 10⁸, below 10⁹, so the flow is laminar. With the common laminar constant, Nu = 0.59 Ra^(1/4):

```math
Nu = 0.59 \times (3.8\times10^{8})^{1/4} = 0.59 \times 139.6 = 82
```

```math
h = \frac{Nu\,k}{L} = \frac{82 \times 0.027}{0.5} = 4.4\ \text{W/m}^2\text{K}
```

That sits in the 2 to 25 W/m²·K range for free convection in gases, about half the forced-convection value of Topic 6's plate.

**Is that plate in Topic 6 really in forced convection?** It was 1 m long, 40 °C above the air, in a 5 m/s stream. Taking β = 1/313 per K again:

```math
\frac{Gr}{Re^{2}} = \frac{g\beta\Delta T L}{V^{2}} = \frac{9.81 \times \frac{1}{313} \times 40 \times 1}{5^{2}} = 0.05
```

That is well below 1, so treating it as forced convection was right. At 1 m/s the ratio would be 1.25, and free convection would matter as much as the stream.

**Horizontal against vertical condenser tubes.** Nusselt's theory gives h\_horizontal/h\_vertical ≈ 0.77 (L/D)^(1/4). For a tube 2 m long and 40 mm across, L/D = 50 and 50^(1/4) = 2.66, so the ratio is about 2.0. The two are equal only when L/D is about 2.8, a tube hardly longer than it is wide.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Free convection happens just the same in a spacecraft. | It needs gravity. Without it, heated fluid does not rise. |
| For a gas, β = 1/T with T in °C. | T must be in kelvin. |
| Re governs free convection. | Gr does. Nu = f(Gr, Pr), or C Ra^n. |
| Ra = Gr/Pr. | Ra = Gr × Pr. |
| Gr/Re² much greater than 1 means forced convection dominates. | It means free convection dominates. |
| h is lowest in nucleate boiling. | Nucleate boiling gives the highest h on the boiling curve. |
| Past the critical heat flux, the heat flux keeps rising with wall temperature. | It falls through transition boiling to the Leidenfrost minimum. |
| A hotter surface always evaporates a drop faster. | Past the Leidenfrost point, the drop lasts longer, insulated by vapour. |
| Film boiling gives a very high h. | The vapour blanket insulates, so h is low. |
| Film condensation gives a higher h than dropwise. | Dropwise gives 5 to 10 times higher. |
| Condensers are designed for dropwise condensation. | They are designed on film-condensation values, since dropwise is hard to keep up. |
| A little air in steam hardly matters. | It collects at the wall and sharply cuts h. Condensers are vented. |
| Vertical tubes condense better than horizontal ones. | Horizontal tubes do, for any tube more than about three diameters long. |
| Dropwise condensation needs a clean, wettable surface. | It needs a non-wettable one: oily, or coated with a promoter. |

## 8. Radiation laws and surface properties

Radiation is mostly a list of named laws, and most of the trouble comes from mixing up what each one relates. Exam setters twist what a black body is (it need not look black), the conditions for Kirchhoff's law, which way Wien's peak moves, kelvin in the fourth-power law, the factor π in E = πI, and why glass traps heat.

### The picture

Watch a blacksmith heat an iron rod. At first it gives off heat you can feel but cannot see. Then it glows dull red, then orange, then yellow-white, and as the colour changes, the glow gets enormously brighter. Two laws are at work. The colour moves from red towards blue because the peak of the emission shifts to shorter wavelengths as the rod gets hotter (Wien's law). The brightness climbs so fast because the total emission grows as the fourth power of the absolute temperature (the Stefan–Boltzmann law).

Now look at a small hole in the side of a large closed box. It looks blacker than any black paint. Light that enters the hole bounces round inside, losing a little at every bounce, and almost none finds its way out again. A hole into a cavity is the nearest thing to a perfect absorber, which is the definition of a black body.

### Twisted points

**A black body is defined by what it does, not by its colour.** It absorbs all radiation falling on it, at every wavelength and from every direction, and at any temperature it emits the most that any surface can, equally in all directions. Snow looks white, but in the infrared, where a body near room temperature radiates, its emissivity is about 0.97: nearly black. White paint is nearly black in the infrared too. The Sun behaves roughly as a black body at about 5800 K.

**α + ρ + τ = 1, and which term drops out.** Opaque solids transmit nothing, so for them α + ρ = 1, and a surface that absorbs 30% reflects 70%. A black body has α = 1; a white body (a perfect reflector) has ρ = 1; a transparent (diathermanous) body has τ = 1. Oxygen and nitrogen let radiation through almost completely, while carbon dioxide and water vapour absorb it in certain wavelength bands.

**Kirchhoff's law holds at one temperature and one wavelength.** A body in thermal equilibrium with its surroundings has ε = α at the same temperature and wavelength: a good absorber is a good emitter, and a poor absorber, such as polished silver (ε about 0.02), is a poor emitter. It does not say that a surface absorbs sunlight as well as it emits at room temperature, because those are different wavelengths. White paint absorbs only about 20% of sunlight but has ε of about 0.9 in the infrared, so a white roof stays cool. Solar collectors use selective surfaces that do the opposite: high α for sunlight, low ε in the infrared. Only for a gray body, whose ε is the same at every wavelength, does ε = α hold whatever the temperatures.

**Hotter bodies peak at shorter wavelengths.** Wien's law, λmax T = 2898 μm·K, makes the peak wavelength inversely proportional to the absolute temperature. The Sun peaks near 0.5 μm, in the middle of visible light; a person peaks near 9.3 μm, deep in the infrared. Even a red-hot iron at 1000 K peaks at 2.9 μm, still in the infrared: the red we see is only the short-wavelength tail of its curve.

**Planck's curves never cross.** At every wavelength, a hotter black body emits more than a cooler one. Each curve rises steeply on the short-wavelength side to its peak and falls away more gently on the long side, and the peak of a hotter curve is both higher and further left. The Stefan–Boltzmann law is the area under one curve, Planck's law integrated over all wavelengths.

**The fourth power makes small temperature changes large.** Eb = σT⁴ with T in kelvin. Doubling the absolute temperature multiplies the emission by 16; even a 10% rise multiplies it by 1.1⁴ = 1.46. A real surface emits E = εσT⁴.

**E = πI, not 2πI.** A diffuse surface sends out the same intensity I in every direction, but what it sends in a direction at angle θ from the normal falls as cos θ (Lambert's cosine law), because the surface looks foreshortened from the side. Adding up over the whole hemisphere, whose solid angle is 2π, the cos θ factor halves the total, giving E = πI. A matte wall looks equally bright from every angle because of this.

**Glass is transparent only to short waves.** Glass lets through most sunlight, which is short-wave (below about 3 μm), but it is nearly opaque to the long-wave infrared (about 10 μm) that objects inside a room or a greenhouse give off. So radiation gets in but cannot get out, and the inside warms up: the greenhouse effect. Transmissivity, like absorptivity, depends on wavelength.

### Worked numbers

**Peak wavelengths with Wien's law.**

- The Sun at 5800 K: λmax = 2898 ÷ 5800 = 0.50 μm (visible).
- A lamp filament at 2900 K: 2898 ÷ 2900 = 1.0 μm (near infrared, so most of a filament lamp's output is heat, not light).
- Skin at 37 °C = 310 K: 2898 ÷ 310 = 9.3 μm (infrared).

**Emission from a gray surface.** A surface of 0.5 m² with ε = 0.8 is at 500 K.

```math
E = \varepsilon\sigma T^{4} = 0.8 \times 5.67\times10^{-8} \times 500^{4} = 2835\ \text{W/m}^2
```

So it emits 2835 × 0.5 = 1418 W in all.

**Temperature from emission.** What temperature must a black body be at to emit 1 kW/m²?

```math
T = \left(\frac{E_b}{\sigma}\right)^{1/4} = \left(\frac{1000}{5.67\times10^{-8}}\right)^{1/4} = 364\ \text{K} = 91\ \text{°C}
```

**Kirchhoff and an opaque surface.** An opaque gray surface absorbs 30% of the radiation falling on it. Then α = 0.3, so ε = 0.3 and, with τ = 0, ρ = 0.7.

**Intensity of a black body.** At 1000 K, Eb = 56,700 W/m² (Topic 1), so I = 56,700 ÷ π = 18,000 W/m² per steradian.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A black body must look black. | It is defined by absorbing everything. Snow and white paint are nearly black in the infrared. |
| A white body absorbs all radiation. | A white body reflects all of it (ρ = 1). A black body absorbs all of it. |
| Kirchhoff's law makes ε = α in every case. | Only at the same temperature and wavelength, or for a gray body. |
| White paint absorbs sunlight as well as it emits heat. | It absorbs little sunlight but emits strongly in the infrared. |
| A hotter body peaks at a longer wavelength. | It peaks at a shorter one: λmax = 2898/T μm. |
| Wien's constant is 2898 mm·K. | It is 2898 μm·K, which is 2.898 mm·K. |
| The fourth-power law can use °C. | T must be in kelvin. |
| Doubling the temperature doubles the emission. | Doubling the absolute temperature multiplies it by 16. |
| A diffuse surface has E = 2πI. | E = πI. The cosine law halves the hemisphere's 2π. |
| Planck curves for two temperatures cross. | They never cross. The hotter curve is higher at every wavelength. |
| Polished metal is a good emitter. | It is a poor emitter and a poor absorber (ε about 0.02 to 0.1). |
| Glass lets all radiation through. | It passes short-wave sunlight but blocks long-wave infrared. |
| Air absorbs thermal radiation strongly. | Oxygen and nitrogen are nearly transparent. CO₂ and water vapour absorb in bands. |
| Thermal radiation is only infrared. | It runs from about 0.1 to 100 μm, including visible light and some ultraviolet. |

## 9. Radiation exchange, view factors and shields

Two surfaces trade radiation according to how well they see each other and how well they emit. Exam setters twist what the view factor depends on, which way round reciprocity goes, the self view factor of a curved surface, the hemisphere and concentric cases, the −1 in the parallel-plate formula, why the room's emissivity drops out for a small body, and how much a shield cuts the heat flow.

### The picture

Stand in the middle of a room and look around. The window fills a small part of what you see; the walls, floor and ceiling fill the rest. If you glowed, the fraction of your glow that would land directly on the window is your view factor to the window. It depends only on sizes, distances and angles. Now let the window look back at you: you fill only a tiny part of its view, so its view factor to you is small, even though yours to it was not.

On a sunny day a foil sunshade behind a car's windscreen keeps the dashboard cool. The foil reflects most of the sunlight back out, and the little it absorbs it re-radiates weakly, because a shiny surface is a poor emitter. That is a radiation shield: one more barrier in the path, and the shinier it is, the more it blocks.

### Twisted points

**The view factor is pure geometry.** F12 is the fraction of the radiation leaving surface 1 that strikes surface 2 directly. It depends on the sizes, shapes, distance and angle of the two surfaces, never on their temperatures or emissivities, and it lies between 0 and 1.

**Reciprocity: the area goes with the first letter.** A1F12 = A2F21. A small body enclosed by a large one sees nothing else, so F12 = 1; then F21 = A1/A2, small. Get the easy factor first (usually from the smaller or enclosed surface), then use reciprocity for the other.

**Flat and convex surfaces cannot see themselves.** Radiation leaving a flat or outward-curving surface never comes straight back to it, so F11 = 0. Only a concave surface, such as the inside of a dome or a pipe, has F11 greater than 0.

**The hemisphere, from two rules.** A flat base of radius r sits under a hemispherical dome. The base is flat and the dome covers it, so F(base to dome) = 1. Reciprocity: πr² × 1 = 2πr² × F(dome to base), so F(dome to base) = 0.5. Summation for the dome: F(dome to dome) = 1 − 0.5 = 0.5. Half of what the dome sends out lands back on the dome.

**Concentric cylinders and spheres.** The inner surface sees only the outer, so F12 = 1. Then F21 = A1/A2, which is r1/r2 for long cylinders (area grows with r) and (r1/r2)² for spheres (area grows with r²). The outer surface sees itself for the rest: F22 = 1 − F21.

**The radiation network has two kinds of resistance.** Each gray surface has a surface resistance (1 − ε)/(εA) between its black-body emission Eb and its radiosity J. For a black surface, ε = 1, and this resistance is zero, so J = Eb. Between two surfaces there is a space resistance 1/(A1F12). Radiosity J is everything leaving a surface, emitted plus reflected (J = εEb + ρG); irradiation G is everything arriving.

**Parallel plates and the −1.** For two large parallel plates, A1 = A2 and F12 = 1, and adding the three resistances gives q = σ(T1⁴ − T2⁴)/(1/ε1 + 1/ε2 − 1). The −1 is there because the space resistance is 1, while each surface resistance (1 − ε)/ε is 1/ε − 1: adding 1/ε1 − 1, then 1, then 1/ε2 − 1 leaves 1/ε1 + 1/ε2 − 1. If both plates are black, the denominator is 1.

**For a small body in a large room, the room's emissivity drops out.** For concentric surfaces, Q = σA1(T1⁴ − T2⁴)/\[1/ε1 + (A1/A2)(1/ε2 − 1)\]. When A1 is tiny compared with A2, the second term vanishes, leaving Q = ε1A1σ(T1⁴ − T2⁴). The room behaves as a black body, because what it reflects is almost all caught by the room again before it can reach the small body. When A1 = A2, the same formula gives the parallel-plate result.

**Every shield cuts the heat flow, and shiny shields cut it most.** A thin shield between two surfaces adds two surface resistances and one more space resistance in series, so the heat flow falls whatever its emissivity. With n shields of the same emissivity as the plates, the total resistance is n + 1 times as large, and the heat flow falls to 1/(n + 1). A shield of low emissivity has huge surface resistances, so polished foil does far better than that.

**A shield's temperature is not the average.** With one shield of the same emissivity between two plates, equal heat flows through both gaps, so T1⁴ − Ts⁴ = Ts⁴ − T2⁴. The fourth powers average, not the temperatures: Ts⁴ = (T1⁴ + T2⁴)/2, so the shield runs hotter than the plain average.

**Radiation can be written as an h.** Q = εAσ(T1⁴ − T2⁴) can be rewritten as h\_r A(T1 − T2), with h\_r = εσ(T1² + T2²)(T1 + T2). Near room temperature h\_r is about 6 W/m²·K for a black surface, about the same as free convection, so a warm pipe in a room loses roughly as much by radiation as by convection.

### Worked numbers

**Plates with and without shields.** Two large parallel plates are at 800 K and 500 K, both with ε = 0.8.

```math
\sigma (T_1^4 - T_2^4) = 5.67\times10^{-8} \times (800^4 - 500^4) = 19{,}680\ \text{W/m}^2
```

- No shield: the denominator is 1/0.8 + 1/0.8 − 1 = 1.5, so q = 19,680/1.5 = 13,120 W/m².
- One shield with ε = 0.8: each gap gives 1.5, so the total is 3.0, and q = 6,560 W/m², half as much. The shield sits at Ts = \[(800⁴ + 500⁴)/2\]^(1/4) = 697 K, not the plain average of 650 K.
- One foil shield with ε = 0.05: each gap gives 1/0.8 + 1/0.05 − 1 = 20.25, so the total is 40.5, and q = 19,680/40.5 = 486 W/m², under 4% of the unshielded flow.

**A steam pipe in a room.** A pipe 0.1 m across with ε = 0.9 is at 450 K in a room at 300 K. Its area per metre is π × 0.1 = 0.314 m², and the room is far larger, so:

```math
Q = \varepsilon A\sigma (T_1^4 - T_2^4) = 0.9 \times 0.314 \times 5.67\times10^{-8} \times (450^4 - 300^4)
```

```math
= 0.283 \times 5.67\times10^{-8} \times 3.29\times10^{10} = 528\ \text{W per metre}
```

As an h: h\_r = 0.9 × 5.67 × 10⁻⁸ × (450² + 300²) × (450 + 300) = 11.2 W/m²·K, more than free convection would give.

**Concentric spheres.** Inner radius 0.1 m, outer 0.3 m: F12 = 1, F21 = (0.1/0.3)² = 1/9, and F22 = 8/9.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The view factor depends on temperature and emissivity. | It depends only on geometry. |
| A1F21 = A2F12. | A1F12 = A2F21: each area goes with the factor that starts from it. |
| A flat plate has F11 greater than 0. | Flat and convex surfaces have F11 = 0. Only concave ones see themselves. |
| The summation rule leaves out F11. | It includes F11: F11 + F12 + … = 1. |
| In a hemisphere, dome to base is 1. | Base to dome is 1. Dome to base is 0.5, and dome to itself 0.5. |
| The large outer surface sees all of the small inner one. | The small inner one sees all of the outer: F12 = 1. F21 = A1/A2. |
| For concentric spheres, F21 = r1/r2. | For spheres it is (r1/r2)². r1/r2 is for long cylinders. |
| For parallel plates, the denominator is 1/ε1 + 1/ε2. | It is 1/ε1 + 1/ε2 − 1. |
| A black surface has a surface resistance. | Its surface resistance is zero, and J = Eb. |
| For a small body in a large room, the room's ε matters. | It drops out: Q = ε1A1σ(T1⁴ − T2⁴). |
| A shield with high ε can increase the heat flow. | Every shield reduces it. Low-ε shields reduce it most. |
| n shields always cut the heat flow to 1/(n + 1). | Only when every surface has the same emissivity. |
| A shield's temperature is the average of the two plates'. | Its T⁴ is the average of their T⁴ (for equal emissivities). |
| Radiosity is the emitted radiation only. | Radiosity is emitted plus reflected. Irradiation is what arrives. |

## 10. Heat exchangers, LMTD and effectiveness-NTU

A heat exchanger puts everything from Topics 2 to 7 into one device: two fluid films, a wall, perhaps fins, and a temperature difference that changes along the length. Exam setters twist why the mean temperature difference is a log mean, how to pair the ends, why counter flow wins, the two special cases of LMTD, which fluid is Cmin, and how far effectiveness can rise.

### The picture

Picture a line of people with warm hands and a line with cold hands, each person warming the cold hands they meet. In parallel flow, the two lines walk side by side in the same direction. The first pair warms up fast, but as they go on, the warm and cold hands get closer in temperature and the warming stalls: neither line can pass the other.

In counter flow, the lines walk past each other in opposite directions. A cold person first meets the warm line where it is nearly spent, and meets warmer and warmer hands as they go. So every cold person always has someone warmer to meet, and the cold line can finish warmer than the warm line finishes. That is why counter flow transfers more heat from the same exchanger.

### Twisted points

**Why the mean is a log mean.** Along an exchanger the local temperature difference shrinks (or grows) exponentially, and the heat passed at each point is proportional to it. The true average of such a curve is the log mean, (ΔT1 − ΔT2)/ln(ΔT1/ΔT2), which is always smaller than the arithmetic mean. With end differences of 100 and 10 °C, the LMTD is 39.1 °C, against an arithmetic mean of 55. When one end difference is less than about twice the other, the arithmetic mean is within about 4%.

**Pair the ends correctly.** In parallel flow, ΔT1 = Th,in − Tc,in and ΔT2 = Th,out − Tc,out, because the inlets are at the same end. In counter flow, the hot inlet faces the cold outlet: ΔT1 = Th,in − Tc,out and ΔT2 = Th,out − Tc,in. Which end you call 1 does not matter; the formula gives the same answer either way.

**Counter flow needs less area, and only it can cross temperatures.** For the same four end temperatures, counter flow has the higher LMTD, so it needs less area for the same heat. Only in counter flow can the cold fluid leave hotter than the hot fluid leaves. In parallel flow the two outlets can at best become equal, and only with an infinite area. Parallel flow is still used where the wall must not get too hot, or the cold fluid must be heated quickly at the start.

**Two special cases of LMTD.** In counter flow with equal capacity rates (Ch = Cc), both fluids change by the same number of degrees, so ΔT is the same all along. The formula gives 0/0, and the LMTD is simply that ΔT. When one fluid condenses or boils, its temperature stays constant, so it does not matter which way the other flows: parallel, counter and cross flow give the same LMTD and the same effectiveness.

**Cmin is the fluid whose temperature changes more.** The heat lost by one fluid is gained by the other, ChΔTh = CcΔTc, so the fluid with the smaller capacity rate C = ṁc has the larger temperature change. The most heat any exchanger could pass is Qmax = Cmin(Th,in − Tc,in), because only the Cmin fluid could change by the whole inlet difference; the Cmax fluid would change by less. Using Cmax would ask the Cmin fluid to change by more than the whole difference, which is impossible.

**Effectiveness rises with NTU, but with diminishing returns.** NTU = UA/Cmin measures how big the exchanger is for the fluid it has to heat or cool. With a phase change (C = 0), ε = 1 − e^(−NTU): 0.63 at NTU = 1, 0.86 at NTU = 2 and 0.95 at NTU = 3. Doubling the area from NTU 2 to 4 gains only 12 points of effectiveness.

**Parallel flow has a ceiling.** For parallel flow with equal capacity rates (C = 1), ε = \[1 − e^(−2NTU)\]/2, which can never pass 0.5 however large the exchanger. Counter flow with C = 1 gives ε = NTU/(1 + NTU), which approaches 1 as the area grows. That is the ceiling of parallel flow in numbers.

**U depends on the area it is based on.** For a tube, 1/U includes 1/hi, the wall and 1/ho, and fouling (scale and dirt) adds two more resistances that grow over time. Because the inside and outside areas of a tube differ, U based on the outside area is smaller than U based on the inside; what stays the same is the product: UiAi = UoAo. Designers add a fouling allowance, so a new exchanger is deliberately oversized.

**Cross flow and multi-pass exchangers use a correction factor.** For these, Q = UAF × LMTD, with the LMTD worked out as if the exchanger were counter flow, and F at most 1. When one fluid changes phase, F = 1, as the special case above would suggest.

**Recuperator, regenerator, direct contact.** A recuperator keeps the two fluids apart by a wall, as in a shell-and-tube exchanger. A regenerator lets hot and cold fluids flow in turn through the same matrix, which stores heat from one and gives it to the other, as in the rotating air preheater of a boiler. A direct-contact exchanger mixes them, as in a cooling tower.

### Worked numbers

**Counter against parallel flow.** Oil cools from 150 to 90 °C while water warms from 30 to 70 °C. The exchanger must pass 50 kW, with U = 500 W/m²·K.

- Counter flow: ΔT1 = 150 − 70 = 80 and ΔT2 = 90 − 30 = 60, so LMTD = 20/ln(80/60) = 69.5 °C, and A = 50,000/(500 × 69.5) = 1.44 m².
- Parallel flow: ΔT1 = 150 − 30 = 120 and ΔT2 = 90 − 70 = 20, so LMTD = 100/ln 6 = 55.8 °C, and A = 50,000/(500 × 55.8) = 1.79 m².

Counter flow does the same job with about 20% less area.

**Effectiveness-NTU when the outlets are unknown.** Oil (Ch = 1000 W/K) enters a parallel-flow exchanger at 150 °C; water (Cc = 2090 W/K) enters at 30 °C. UA = 1500 W/K. The oil has the smaller C, so Cmin = 1000 W/K, C = 1000/2090 = 0.478 and NTU = 1500/1000 = 1.5.

```math
\varepsilon = \frac{1 - e^{-NTU(1+C)}}{1 + C} = \frac{1 - e^{-1.5 \times 1.478}}{1.478} = \frac{1 - 0.109}{1.478} = 0.603
```

```math
Q = \varepsilon\,C_{min}\,(T_{h,in} - T_{c,in}) = 0.603 \times 1000 \times 120 = 72.3\ \text{kW}
```

The oil leaves at 150 − 72,300/1000 = 77.7 °C, and the water at 30 + 72,300/2090 = 64.6 °C. In parallel flow the water must leave cooler than the oil, and it does.

**A condenser.** Steam condenses at 100 °C while cooling water enters at 20 °C, with NTU = 2. Since C = 0, ε = 1 − e^(−2) = 0.865 for any arrangement, and the water leaves at 20 + 0.865 × (100 − 20) = 89 °C.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The mean temperature difference is the arithmetic mean. | It is the log mean, which is always smaller. |
| Parallel flow can heat the cold fluid above the hot outlet. | Only counter flow can do that. |
| Counter flow needs more area. | It needs less, because its LMTD is higher. |
| With one fluid condensing, counter flow still beats parallel. | Every arrangement then gives the same LMTD. |
| When ΔT1 = ΔT2, the LMTD is zero. | It equals that ΔT. |
| Qmax = Cmax(Th,in − Tc,in). | Qmax uses Cmin. |
| Cmin belongs to the fluid with the smaller temperature change. | It belongs to the fluid with the larger temperature change. |
| NTU = UA/Cmax. | NTU = UA/Cmin. |
| Any exchanger can approach ε = 1 if it is big enough. | Parallel flow with C = 1 can never pass 0.5. |
| Fouling raises U. | Fouling adds resistance and lowers U. |
| Fins go on the liquid side. | They go on the side with the lower h, usually the gas side. |
| U is the same whichever area it is based on. | UA is the same. U on the outside area is smaller than U on the inside. |
| A regenerator separates the fluids by a wall. | A recuperator does. A regenerator passes them in turn through a heat-storing matrix. |
| Baffles are there to cut the pressure drop. | They raise turbulence and h on the shell side and support the tubes, at the cost of more pressure drop. |

## Further reading

The values in this guide are the ones Indian textbooks and exam keys use most. Books differ a little on several of them: the ranges of h for each kind of convection, the temperatures on the boiling curve (the critical heat flux near an excess of 30 °C and the Leidenfrost point near 120 °C are for water at 1 atm), the constant in Nu = C Ra^n, the critical Reynolds number (2,000 or 2,300 in a pipe; 3 × 10⁵ to 5 × 10⁵ on a flat plate), and the rounding of σ (5.67 or 5.669 × 10⁻⁸) and Wien's constant (2898 or 2897.8 μm·K). The pipe-flow Nusselt numbers 3.66 and 4.36 and the Biot limit of 0.1 are the same in every book. If only one of the close figures appears among a question's options, pick it. If two close figures both appear, go with the one your exam board's past answer keys use.

- R. K. Rajput, *Heat and Mass Transfer*: short, exam-oriented chapters with many solved problems and objective questions.
- P. K. Nag, *Heat and Mass Transfer*: a thorough Indian text, strong on conduction, fins and heat exchangers.
- R. C. Sachdeva, *Fundamentals of Engineering Heat and Mass Transfer*: clear derivations and many worked examples in SI units.
- Yunus A. Çengel and Afshin J. Ghajar, *Heat and Mass Transfer: Fundamentals and Applications*: the best book for the physical meaning behind each formula, with everyday examples.
- Frank P. Incropera, David P. DeWitt, Theodore L. Bergman and Adrienne S. Lavine, *Fundamentals of Heat and Mass Transfer*: the standard international text, especially good on boundary layers, boiling and radiation exchange.
- J. P. Holman, *Heat Transfer*: a compact classic, good for a quick second explanation of any topic.
- C. P. Kothandaraman and S. Subramanyan, *Heat and Mass Transfer Data Book*: the property tables, correlations and view-factor charts used in Indian university exams.
