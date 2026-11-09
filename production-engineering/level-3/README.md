# Production Engineering Level 3: Tricky Questions

Nov 9, 2026 · @Rohith

## How to use Level 3

Level 3 comes after the [Level 1 guide](../) and the [Level 2 theory](../level-2/). It has the same 9 topics in the same order, but only the parts examiners twist into traps. Finish a topic in Levels 1 and 2 first, then do it here.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Formulas worth adding | The formulas that Level 1 leaves out but harder papers use. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from GATE, ESE, ISRO, SSC JE and state AE and JE exams. Each solution starts from zero, goes step by step, and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam, the hardest objective paper here. GATE ME and GATE PI (Production and Industrial) are graduate entrance tests. They ask about the same production topics as JE exams, with a twist. If you can solve these, JE questions on the same idea feel easy.

**Statement questions.** ESE often gives two statements and these four options. Check each statement on its own first. Only if both are true, ask whether Statement II is the reason for Statement I.

| Option | Meaning |
| --- | --- |
| (a) | Both true, and II explains I |
| (b) | Both true, but II does not explain I |
| (c) | I true, II false |
| (d) | I false, II true |

**Units used throughout.** Cutting speed V is in m/min, feed f in mm/rev and depth of cut d in mm, unless a question says otherwise. With these units, V × f × d gives the metal removal rate straight in cm³/min, because 1 m = 1000 mm and 1 cm³ = 1000 mm³.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam. On the website, a topic with three or more four-option questions also gets a timed Practise this topic card.

## 1. Welding processes and defects

Welding traps hide in three places: how much of the arc's power really melts metal, how the arc and the power source share the voltage, and which polarity puts the heat where.

### Going deeper

| Idea | What it means |
| --- | --- |
| Two efficiencies | Heat transfer efficiency is the share of the arc power (V × I) that reaches the plate. Melting efficiency is the share of that heat which actually melts weld metal. The rest spreads into the plate. |
| Heat input per mm | Heat per mm of weld = heat transfer efficiency × V × I ÷ travel speed. Travel faster and each millimetre gets less heat, so it cools faster and the heat-affected zone is narrower. |
| Arc line | A longer arc needs more voltage: V = a + bL, where L is the arc length. |
| Power source line | A drooping power source gives less voltage as it gives more current. A linear one follows V = OCV − (OCV/SCC) × I, where OCV is the open circuit voltage and SCC the short circuit current. The machine works where the two lines cross. |
| Maximum arc power | On a linear source, V × I is greatest at half the OCV and half the SCC. |
| Polarity | In DC welding about two-thirds of the heat is released at the positive side. Straight polarity (DCSP, electrode negative) heats the work more and gives deeper penetration. Reverse polarity (DCRP, electrode positive) heats the electrode, melts it faster and breaks up oxide films. |
| Arc blow | Near plate ends or the earth clamp, the magnetic field around a DC arc becomes lopsided and pushes the arc sideways. AC reverses direction 100 times a second at 50 Hz, so the push averages out. |
| Duty cycle | The share of a 10-minute period a machine can run at a given current without overheating. The heating goes with I² × time, so I² × duty cycle stays the same. |
| Resistance heat | H = I²Rt. The current is squared, so it matters most. Most heat forms at the sheet-to-sheet contact, where the resistance is highest. |
| Weld decay | In stainless steel, the zone heated to about 450 to 850°C forms chromium carbide at its grain boundaries. The metal next to them loses chromium and corrodes. Low-carbon (L) grades or titanium and niobium additions prevent it. |

### Formulas worth adding

```math
H = \frac{\eta_h V I}{v}\ \text{J/mm}, \qquad v_{\max} = \frac{\eta_h\, \eta_m\, V I}{u_m\, A_w}
```

Here ηh is the heat transfer efficiency, ηm the melting efficiency, um the energy to melt 1 mm³ and Aw the weld's cross-section.

```math
V = V_{oc} - \frac{V_{oc}}{I_{sc}}\, I, \qquad V_{\text{arc}} = a + bL
```

```math
P_{\max} = \frac{V_{oc}\, I_{sc}}{4} \quad \text{at} \quad V = \frac{V_{oc}}{2},\ I = \frac{I_{sc}}{2}
```

```math
I_{\text{rated}}^2 \times D_{\text{rated}} = I^2 \times D, \qquad H_{\text{resistance}} = I^2 R\, t
```

### Doubts cleared

**Doubt: why does a longer arc carry less current?** The arc and the power source are in series. A longer arc needs more voltage to keep burning. On a drooping source, the voltage can rise only if the current falls along its line. So in OCV and SCC problems, pair the longest arc with the smallest current.

**Doubt: is straight polarity always the deeper one?** It is the exam answer for arc welding in general, and it holds for TIG and stick welding. MIG is the exception. It runs on reverse polarity, and the hot metal drops carry the heat into the pool, so penetration is good.

**Doubt: a spot welder uses 5000 A. Why does it not need a high voltage?** The resistance is only micro-ohms. At 200 µΩ, V = IR = 5000 × 0.0002 = 1 V. Heat goes with I², so the machine uses huge current at low voltage.

**Doubt: a machine is rated 300 A at 60% duty cycle. Can it weld non-stop at 200 A?** Yes. Duty cycle at 200 A = 60 × (300/200)² = 135%. Anything above 100% means it can run continuously.

**Doubt: is AC or DC used for TIG welding aluminium?** AC. On the reverse-polarity half the arc breaks the oxide film. On the straight-polarity half the tungsten stays cool and the work gets the heat.

### Tricky past questions with solutions

**Q1. GATE ME 2008.** In arc welding of a butt joint, the welding speed is to be selected such that the highest cooling rate is achieved. Melting efficiency and heat transfer efficiency are 0.5 and 0.7. The area of the weld cross-section is 5 mm² and the unit energy required to melt the metal is 10 J/mm³. If the welding power is 2 kW, the welding speed in mm/s is closest to: (a) 4 (b) 14 (c) 24 (d) 34

*Answer: (b) 14 mm/s.*

1. Heat that reaches the plate: 0.7 × 2000 W = 1400 W.
2. Heat that melts metal: 0.5 × 1400 = 700 W, which is 700 J every second.
3. Each millimetre of weld needs 10 J/mm³ × 5 mm² = 50 J.
4. Speed = 700 ÷ 50 = 14 mm/s.

**The trap:** "highest cooling rate" sends students looking for a cooling formula. It only means weld as fast as possible, and that is the speed at which all the melting heat just fills the groove.

**Q2. GATE ME 2012.** In a DC arc welding operation, the voltage-arc length characteristic was obtained as V = 20 + 5L, where the arc length L was varied between 5 mm and 7 mm and the arc current was varied from 400 A to 500 A. Assuming a linear power source characteristic, the open circuit voltage and short circuit current are: (a) 45 V, 450 A (b) 75 V, 750 A (c) 95 V, 950 A (d) 150 V, 1500 A

*Answer: (c) 95 V, 950 A.*

1. Arc voltage: at 5 mm, 20 + 25 = 45 V. At 7 mm, 20 + 35 = 55 V.
2. Pair them correctly. The short arc takes the larger current, so the two working points are (500 A, 45 V) and (400 A, 55 V).
3. Slope of the source line: (55 − 45) ÷ (500 − 400) = 0.1 V per A. So OCV/SCC = 0.1.
4. OCV = 45 + 0.1 × 500 = 95 V. SCC = 95 ÷ 0.1 = 950 A.

**The trap:** every option has OCV/SCC = 0.1, so the slope alone cannot pick the answer. You need step 4. Option (a) is just the arc voltage at 5 mm.

**Q3. VIZAG Steel MT Mechanical 2013.** Two 1 mm thick steel sheets are to be spot welded at a current of 5000 A. Assuming an effective resistance of 200 micro-ohms and a current flow time of 0.2 s, the heat generated during the process will be: (a) 0.2 J (b) 1 J (c) 5 J (d) 1000 J

*Answer: (d) 1000 J.*

1. Convert first: 200 µΩ = 200 × 10⁻⁶ Ω.
2. H = I²Rt = 5000² × 200 × 10⁻⁶ × 0.2.
3. 5000² = 25,000,000. Times 0.0002 gives 5000 W. Times 0.2 s gives 1000 J.

**The trap:** forget to square the current and you get 5000 × 0.0002 × 0.2 = 0.2 J, which is option (a).

**Q4. ESE Mechanical 2013 (Paper 2).** Statement (I): The deflection of the arc from its intended path is called arc blow. Statement (II): Arc blow is common in AC arc welding. Choose the option using the ESE statement key.

*Answer: (c) Statement I is true, Statement II is false.*

1. Statement I is the definition of arc blow. True.
2. Arc blow comes from the magnetic field around a DC arc. In AC the field reverses every half cycle, so it does not push the arc one way. Statement II is false.

**The cure examiners ask about next:** switch to AC, move the earth clamp, weld towards a heavy tack, or shorten the arc.

**Q5. UPPCL JE Mechanical, 27 November 2019.** When it is said that the duty cycle of a welding machine is 10%, it means: (a) The machine operates for two minutes in a period of ten minutes (b) The actual output of the machine is 10% of the rated output (c) The machine operates for one minute only in a ten-minute span (d) The machine operates at 10% efficiency

*Answer: (c).*

Duty cycle is arc-on time as a share of a 10-minute period. 10% of 10 minutes is 1 minute of welding, then 9 minutes of cooling.

**The trap:** (b) and (d) sound technical, but duty cycle says nothing about output or efficiency. It is a time limit set by heating.

**Q6. GATE ME 2015 (Shift 1).** In a linear arc welding process, the heat input per unit length is inversely proportional to: (a) welding current (b) welding voltage (c) welding speed (d) duty cycle of the power source

*Answer: (c) welding speed.*

Heat per mm = η × V × I ÷ v. Current and voltage are on top, so heat per mm rises with them. Speed is underneath: double the speed and each millimetre gets half the heat.

## 2. Machining: lathe, tool geometry, chips and tool life

Machining questions test whether you can turn the chip's shape into angles and forces, read a tool's angles in the right system, and handle Taylor's equation without flipping it.

### Going deeper

| Idea | What it means |
| --- | --- |
| Chip thickness ratio | r = uncut thickness ÷ chip thickness, always below 1. The chip comes off thicker and shorter than the layer it was cut from. |
| Shear angle | Found from r and the rake angle. A bigger rake or a thinner chip gives a bigger shear angle, a smaller shear plane and less force. |
| Shear strain | γ = cot φ + tan(φ − α), usually 2 to 5. That is far more strain than in rolling or forging. |
| Forces on the shear plane | The cutting force Fc and thrust force Ft both have parts along the shear plane, and they point opposite ways. So the shear force is Fc cos φ minus Ft sin φ. |
| ASA and ORS angles | ASA measures rake along the feed (side rake) and along the tool's axis (back rake). ORS measures it at right angles to the cutting edge (orthogonal rake). They match only when the edge is at 90° to the feed. |
| Tool life exponent n | In VTⁿ = C, n is about 0.1 to 0.15 for HSS, 0.2 to 0.4 for carbide and 0.5 to 0.7 for ceramics. A bigger n means life falls less when you speed up. |
| Built-up edge | At low speeds, layers of a ductile work metal weld onto the tool tip. High speed, a large positive rake, a sharp tool and cutting fluid all reduce it. |
| Feed marks | A round-nosed tool leaves scallops of height f²/8R. A sharp-cornered tool leaves triangles. Ra, the average roughness, is about a quarter of the peak-to-valley height. |
| Size effect | Specific cutting energy rises as the chip gets thinner, because the rounded edge rubs more than it cuts. |

### Formulas worth adding

```math
r = \frac{t_1}{t_2} < 1, \qquad \tan\phi = \frac{r\cos\alpha}{1 - r\sin\alpha}, \qquad \gamma = \cot\phi + \tan(\phi - \alpha)
```

```math
F_s = F_c\cos\phi - F_t\sin\phi = \tau\,\frac{w\,t_1}{\sin\phi}
```

```math
\mu = \tan\beta = \frac{F_t + F_c\tan\alpha}{F_c - F_t\tan\alpha}
```

```math
n = \frac{\ln(V_2/V_1)}{\ln(T_1/T_2)}, \qquad \frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{1/n}
```

```math
h_{\text{nose radius}} = \frac{f^2}{8R}, \qquad h_{\text{sharp tool}} = \frac{f}{\cot\kappa + \cot\kappa'}, \qquad R_a \approx \frac{h}{4}
```

Here κ is the angle between the main cutting edge and the feed direction, and κ′ is the end cutting edge angle.

### Doubts cleared

**Doubt: why is the chip thicker than the layer it came from?** Metal keeps its volume. Shearing shortens the chip, so it must thicken. Uncut thickness × cut length = chip thickness × chip length, so r is also chip length ÷ cut length and chip speed ÷ cutting speed.

**Doubt: the question gives the cutting speed. Do I need it for the shear angle?** No. The shear angle and strain depend only on r and the rake angle. Speed is needed for power, chip velocity (r × V) and strain rate. Examiners often add it as a distractor.

**Doubt: is a big n good or bad?** Good. With VTⁿ = C, the life ratio is the speed ratio raised to 1/n. For n = 0.125, doubling speed cuts life 256 times. For n = 0.25 it cuts life only 16 times. That is why carbide runs faster than HSS.

**Doubt: is the built-up edge always harmful?** It spoils the finish and changes the size of the cut, so exams treat it as harmful. A small, stable built-up edge does shield the edge a little, so it can lengthen tool life.

**Doubt: which roughness formula do I use?** If the tool has a nose radius and the question gives it, use f²/8R. If the tool is "perfectly sharp", the two straight edges leave triangles, so use the cot formula.

### Tricky past questions with solutions

**Q1. GATE ME 2015 (Shift 3).** Orthogonal turning of a mild steel tube with a tool of rake angle 10° is carried out at a feed of 0.14 mm/rev. If the thickness of the chip produced is 0.28 mm, the shear angle and shear strain will be: (a) 28°20′ and 2.19 (b) 22°20′ and 3.53 (c) 24°30′ and 3.53 (d) 37°20′ and 5.19

*Answer: (a) 28°20′ and 2.19.*

1. In orthogonal turning of a tube, the edge is square to the feed, so the uncut thickness equals the feed: t₁ = 0.14 mm.
2. r = 0.14 ÷ 0.28 = 0.5.
3. tan φ = (0.5 × cos 10°) ÷ (1 − 0.5 × sin 10°) = 0.4924 ÷ 0.9132 = 0.539, so φ = 28.3°, which is 28°20′.
4. γ = cot 28.3° + tan(28.3° − 10°) = 1.855 + 0.331 = 2.19.

**The trap:** writing r as 0.28 ÷ 0.14 = 2. The ratio is always uncut over chip, so it is below 1.

**Q2. GATE ME 2022 (Shift 2).** In an orthogonal machining operation, the cutting and thrust forces are equal in magnitude. The uncut chip thickness is 0.5 mm and the shear angle is 15°. The orthogonal rake angle is 0° and the width of cut is 2 mm. The work material is perfectly plastic with a yield shear strength of 500 MPa. The cutting force is \_\_\_\_\_\_ N (numerical answer).

*Answer: about 2732 N (accepted range 2700 to 2750).*

1. The shear plane is longer than the uncut thickness: its area = w × t₁ ÷ sin φ = 2 × 0.5 ÷ sin 15° = 3.864 mm².
2. Force needed to shear it: Fs = 500 N/mm² × 3.864 mm² = 1932 N.
3. Fs = Fc cos φ − Ft sin φ. With Ft = Fc this is Fc × (cos 15° − sin 15°) = 0.7071 Fc.
4. Fc = 1932 ÷ 0.7071 = 2732 N.

**The trap:** dropping the thrust term gives Fc = 1932 ÷ cos 15° = 2000 N. The thrust force's part along the shear plane points the other way, so it has to be subtracted.

**Q3. UPPSC AE Mechanical 2013 (Paper I).** In a tool life test, doubling the cutting speed reduces the tool life to 1/8th of the original value. Taylor's tool life index is: (a) 1 (b) 1/2 (c) 1/3 (d) 1/4

*Answer: (c) 1/3.*

1. VTⁿ stays the same: V × Tⁿ = 2V × (T/8)ⁿ.
2. Cancel V and Tⁿ: 1 = 2 × (1/8)ⁿ, so 8ⁿ = 2.
3. 8 = 2³, so 2³ⁿ = 2 and n = 1/3.

**The trap:** setting it up the wrong way round gives 2ⁿ = 8 and n = 3. Real tools have n below 1, so a big n means you flipped the equation.

**Q4. GATE ME 2008.** In a single point turning tool, the side rake angle and the orthogonal rake angle are equal. φ is the principal cutting edge angle and its range is 0° ≤ φ ≤ 90°. The chip flows in the orthogonal plane. The value of φ is closest to: (a) 0° (b) 45° (c) 60° (d) 90°

*Answer: (d) 90°.*

1. Side rake is measured in the plane along the feed. Orthogonal rake is measured in the plane at right angles to the cutting edge.
2. "Chip flows in the orthogonal plane" means the inclination angle is zero. The conversion then becomes tan(orthogonal rake) = tan(side rake) ÷ sin φ.
3. The two rakes are equal only when sin φ = 1, so φ = 90°. The edge is then square to the feed, and both planes are the same plane.

**The trap:** 45° looks like a fair middle value. Picture the tool instead: only a square edge makes "along the feed" and "across the edge" the same direction.

**Q5. GATE PI 2015.** Built-up edge formation decreases under the conditions listed below EXCEPT: (a) at low cutting speeds (b) using a large positive rake angle (c) with a sharper tool (d) using cutting fluid

*Answer: (a) at low cutting speeds.*

Low speed is what causes a built-up edge. The chip presses on the tool long enough, at a moderate temperature, for its metal to weld on in layers. A positive rake, a sharp edge and cutting fluid all lower the pressure and friction at the tip, so they reduce it.

**The trap:** "EXCEPT" questions reverse the usual habit. Here you are looking for the one condition that makes the built-up edge worse.

**Q6. GATE PI 2018.** A cylindrical workpiece is turned at a feed of 0.1 mm/rev with a perfectly sharp tool. In the ASA system, the side and end cutting edge angles are 15° and 5°. The peak-to-valley roughness of the machined surface, in µm to one decimal place, is \_\_\_\_\_\_ (numerical answer).

*Answer: 8.5 µm (accepted range 8.4 to 8.7).*

1. A sharp tool leaves a triangle each revolution, and its base is the feed.
2. ASA's side cutting edge angle is measured from a line square to the feed. So the main edge makes 90° − 15° = 75° with the feed, and κ = 75°. The end edge makes κ′ = 5°.
3. h = 0.1 ÷ (cot 75° + cot 5°) = 0.1 ÷ (0.268 + 11.430) = 0.00855 mm = 8.5 µm.

**The trap:** putting cot 15° in place of cot 75° gives 0.1 ÷ (3.732 + 11.430) = 6.6 µm. Check which line the angle is measured from before you use it.

## 3. Casting

Casting numericals come from three ideas: Chvorinov's rule for freezing time, Bernoulli's equation for the sprue, and shrinkage that has to be fed or allowed for. The traps are in the units and in what each formula leaves out.

### Going deeper

| Idea | What it means |
| --- | --- |
| Three kinds of shrinkage | Liquid shrinkage happens as the melt cools to its freezing point. Solidification shrinkage happens as it freezes. Solid contraction happens as the solid cools to room temperature. The riser feeds the first two. The pattern's shrinkage allowance makes up for the third. |
| Grey cast iron | Graphite forms as it freezes and takes up space, so grey iron shrinks very little while solidifying and needs only small risers. |
| Chvorinov's rule | Freezing time = K × (V/A)². V/A is the casting modulus: metal held divided by skin that loses heat. For a given volume, a sphere has the least skin, so it freezes slowest. |
| Riser size | A riser must freeze after the part it feeds. A common rule is a riser modulus about 1.2 times the casting's, which makes its freezing time about 1.44 times as long. |
| Why sprues taper | Metal speeds up as it falls, by v = √(2gh). The same flow at a higher speed needs a smaller area. In a straight sprue the stream pulls away from the walls, and the low pressure there sucks in air and mould gas. This is aspiration. |
| Top and bottom gating | A top gate pours under the full sprue height the whole time. A bottom gate pours against the metal already in the cavity, so the head falls as it fills. For a cavity as tall as the sprue, bottom gating takes twice as long. |
| Gating ratio | Sprue : runner : gate area. A pressurised system (gates smallest, for example 1 : 0.75 : 0.5) stays full and takes in little air, but the metal moves fast, so it suits ferrous metals. An unpressurised one (for example 1 : 2 : 2) has its choke at the sprue, so the metal moves gently. It suits aluminium and magnesium, which oxidise easily. |
| Chills, padding, chaplets | Chills are metal pieces that draw heat out quickly from thick or distant spots. Padding is extra thickness that tapers towards the riser. Both make the casting freeze towards the riser. Chaplets only hold cores in place. |

### Formulas worth adding

```math
t_s = K\left(\frac{V}{A}\right)^2, \qquad \left(\frac{V}{A}\right)_{\text{sphere}} = \frac{D}{6}, \quad \left(\frac{V}{A}\right)_{\text{cube}} = \frac{a}{6}, \quad \left(\frac{V}{A}\right)_{\text{cylinder},\,H = D} = \frac{D}{6}
```

```math
v = \sqrt{2gh}, \qquad v_2^2 = v_1^2 + 2gh, \qquad A_1 v_1 = A_2 v_2
```

```math
t_{\text{top}} = \frac{V}{A_g\sqrt{2g\,h_t}}, \qquad t_{\text{bottom}} = \frac{A_m}{A_g}\cdot\frac{2\left(\sqrt{h_t} - \sqrt{h_t - h_m}\right)}{\sqrt{2g}}
```

Here Ag is the gate area, Am the cavity's plan area, ht the sprue height and hm the cavity height.

```math
V_{\text{final}} = V_0\,(1 - s_1)(1 - s_2), \qquad a_{\text{final}} = a_0\left[(1 - s_1)(1 - s_2)\right]^{1/3}
```

### Doubts cleared

**Doubt: why multiply the shrinkages instead of adding them?** The second percentage acts on what is left after the first. 0.96 × 0.94 = 0.9024, not 0.90. The difference is small, but GATE options can be close.

**Doubt: a volume falls by 10%. Does each side fall by 10%?** No. Volume goes with side cubed, so each side falls by the cube root. The cube root of 0.9 is 0.965, so each side is about 3.5% shorter. A linear shrinkage of x% gives a volume shrinkage of about 3x%.

**Doubt: why is the sphere the slowest to freeze?** Heat leaves through the surface. For a given volume the sphere has the smallest surface, so it keeps its heat longest. Risers are usually cylinders with height equal to diameter, which have the same modulus D/6 and are easier to mould.

**Doubt: is K the same for every mould?** No. K depends on the metal, the pouring temperature and the mould. A metal mould pulls heat faster than sand, so K is smaller. Chvorinov comparisons only work for the same metal in the same kind of mould.

**Doubt: chaplets and chills are both metal pieces in the mould. What is the difference?** A chaplet is a small metal support that stops a core floating up. It melts into the casting and does nothing for freezing. A chill is a block that soaks up heat to make one place freeze first.

### Tricky past questions with solutions

**Q1. GATE ME 2011.** A cubic casting of 50 mm side undergoes volumetric solidification shrinkage and volumetric solid contraction of 4% and 6% respectively. No riser is used. Assume uniform cooling in all directions. The side of the cube after solidification and contraction is: (a) 48.32 mm (b) 49.90 mm (c) 49.94 mm (d) 49.96 mm

*Answer: (a) 48.32 mm.*

1. Starting volume: 50³ = 125,000 mm³.
2. After 4% solidification shrinkage, then 6% solid contraction: 125,000 × 0.96 × 0.94 = 112,800 mm³.
3. New side = ∛112,800 = 48.32 mm.

**The trap:** the three answers near 50 mm treat the percentages as tiny changes to the side. A 10% loss of volume takes about 1.7 mm off each side.

**Q2. GATE ME 2007.** A 200 mm long down sprue has an area of cross-section of 650 mm² where the pouring basin meets the down sprue. A constant head of molten metal is kept in the pouring basin. The flow rate is 6.5 × 10⁵ mm³/s. The end of the sprue is open to the atmosphere and g = 10⁴ mm/s². To avoid aspiration, the area at the end of the down sprue should be: (a) 650.0 mm² (b) 350.0 mm² (c) 290.7 mm² (d) 190.0 mm²

*Answer: (c) 290.7 mm².*

1. Speed at the top: v₁ = Q ÷ A₁ = 6.5 × 10⁵ ÷ 650 = 1000 mm/s. The metal is already moving when it enters the sprue.
2. Speed at the bottom: v₂² = v₁² + 2gh = 10⁶ + 2 × 10⁴ × 200 = 5 × 10⁶, so v₂ = 2236 mm/s.
3. Area at the bottom: A₂ = 6.5 × 10⁵ ÷ 2236 = 290.7 mm².

**The trap:** (a) is a straight sprue, the very shape that causes aspiration. Forgetting the 1000 mm/s at the top gives 325 mm², which is not offered.

**Q3. VIZAG Steel MT Mechanical 2013.** A mould has a down sprue whose length is 20 cm, and the cross-sectional area at its base is 1 cm². The sprue feeds a horizontal runner leading into a mould cavity of volume 2000 cm³. The time required to fill the mould cavity will be: (a) 10.1 s (b) 4.05 s (c) 5.05 s (d) 7.25 s

*Answer: (a) 10.1 s.*

1. Speed at the sprue base: v = √(2 × 981 × 20) = 198.1 cm/s. Work in cm so g = 981 cm/s².
2. Flow rate: Q = 1 cm² × 198.1 cm/s = 198.1 cm³/s.
3. Time: 2000 ÷ 198.1 = 10.1 s. This assumes the metal enters at full sprue speed throughout, as in top gating.

**The trap:** (c) 5.05 s is the answer for a 1000 cm³ cavity, a version of this question found in many question banks. Read the volume before you recall an answer.

**Q4. UPRVUNL JE Mechanical 2016 (Shift 1).** With a solidification factor of 0.97 × 10⁶ s/m², the solidification time in seconds for a spherical casting of 200 mm diameter is: (a) 539 (b) 1078 (c) 4311 (d) 3233

*Answer: (b) 1078 s.*

1. For a sphere, V/A = (4/3 πr³) ÷ (4πr²) = r/3 = D/6.
2. K is per m², so use metres: V/A = 0.2 ÷ 6 = 0.0333 m.
3. t = 0.97 × 10⁶ × 0.0333² = 0.97 × 10⁶ × 0.001111 = 1078 s.

**The trap:** (c) 4311 comes from using the diameter in place of the radius in r/3. That doubles V/A and makes the time four times too long.

**Q5. ISRO Scientist ME 2015.** Two castings of the same metal have the same surface area. One is a sphere and the other a cube. The ratio of the solidification time of the sphere to that of the cube is: (a) 3/4 (b) 6/π (c) 5/4π (d) 3π/8

*Answer: (b) 6/π.*

1. t is proportional to (V/A)². Sphere: V/A = r/3. Cube: V/A = a/6.
2. Same area: 4πr² = 6a², so r²/a² = 6/(4π).
3. Ratio = (r/3)² ÷ (a/6)² = 4r²/a² = 4 × 6/(4π) = 6/π, about 1.91.

**Quick check:** with the same skin, the sphere holds more metal, so it must take longer. The ratio has to be above 1, which rules out (a) and (c).

**Q6. BPSC AE Mechanical 2024 (Paper VI).** Directional solidification in castings can be improved by: (a) Chills and padding (b) Chaplets and padding (c) Chills, chaplets and padding (d) Chills and chaplets

*Answer: (a) Chills and padding.*

Chills make the far end of a casting freeze first. Padding thickens the casting towards the riser, so each section freezes after the section farther away. Together they make freezing march towards the riser. Chaplets only support cores.

**The trap:** chills and chaplets are both small metal pieces set in the mould, so they get swapped. Only chills change how the casting freezes.

## 4. Grinding and finishing

Grinding traps reverse your instincts: a soft wheel for hard work, the wheel worn being a tiny fraction, and a specific energy many times that of turning. Numericals test whether you pick the right force and the right width.

### Going deeper

| Idea | What it means |
| --- | --- |
| Wheel marking | In 51 A 46 K 5 V: A is the abrasive, 46 the grit, K the grade, 5 the structure and V the bond. The numbers at the ends are maker's codes. |
| Grit | The sieve number the grains pass through. A higher number means finer grains and a better finish. |
| Grade | How strongly the bond holds each grain, not how hard the grain is. A to H is soft, I to P medium, Q to Z hard. |
| Structure | Grain spacing. A low number is dense. A high number is open, with room for chips. |
| Abrasive choice | Aluminium oxide (A) for steels. Silicon carbide (C) for cast iron, non-ferrous metals and carbides. Diamond for carbides and glass. CBN for hardened steel, because diamond reacts with iron when hot. |
| Self-sharpening | As a grain blunts, the force on it rises. With the right grade, the grain then breaks or pulls out and a sharp one takes its place. |
| Glazing and loading | Glazing: a bond that is too hard holds blunt grains, so the face turns shiny and rubs instead of cutting. Loading: chips of a soft metal fill the pores. Dressing cures both. Truing restores the wheel's shape. |
| Specific energy | Grains have large negative rakes, take tiny chips and also rub and plough. So grinding needs 10 or more times the energy per mm³ of turning, and most of it heats the work. |
| Wheel speed | About 30 m/s, which is 1800 m/min. Milling cutters run at tens to a few hundred m/min. |
| Grinding ratio | Volume of work removed ÷ volume of wheel worn. A higher ratio means a longer-lasting wheel. |
| Finishing | Honing uses stones on bores and leaves a crosshatch. Lapping uses loose abrasive and gives the best flatness. Superfinishing uses very light pressure and short strokes. |

### Formulas worth adding

```math
G = \frac{\text{volume of work removed}}{\text{volume of wheel worn}}
```

```math
\text{MRR} = v_w\, b\, d, \qquad V_{\text{wheel}} = \frac{\pi D N}{60}
```

```math
u = \frac{P}{\text{MRR}} = \frac{F_t\, V_{\text{wheel}}}{v_w\, b\, d}
```

Here vw is the table speed, b the width actually ground (the smaller of the work width and the wheel width), d the depth of cut and Ft the tangential force.

### Doubts cleared

**Doubt: why a soft wheel for hard work?** Hard work blunts grains quickly. A soft bond lets the blunt grains go, so fresh sharp ones keep cutting. A hard bond would hold the blunt grains, and the wheel would glaze and burn the work.

**Doubt: why a fine grit for hard work?** Each grain can only bite a little into hard metal, so many small grains share the work better. Hard work also does not clog the wheel. Soft, ductile metals need a coarse grit and an open structure, so the chips have room.

**Doubt: the question gives two forces. Which one goes into power?** Only the tangential force. The wheel's surface moves sideways, along the tangential force. The normal force presses the wheel into the work but moves nothing in its own direction, so it does no work.

**Doubt: the wheel is 12 mm wide but the plate is 10 mm wide. Which width do I use?** The width actually being ground, which is 10 mm. Metal is removed only where wheel and work overlap.

**Doubt: is specific energy given in J/mm³ or N/mm²?** Both are the same unit. 1 J/mm³ = 1 N·m/mm³ = 1000 N·mm/mm³ = 1000 N/mm². Watch for that factor of 1000 when options mix the two.

### Tricky past questions with solutions

**Q1. GATE ME 2018 (Shift 1).** A grinding ratio of 200 implies that the: (a) grinding wheel wears 200 times the volume of the material removed (b) grinding wheel wears 0.005 times the volume of the material removed (c) aspect ratio of the abrasive particles used in the wheel is 200 (d) ratio of the volume of abrasive particles to that of the grinding wheel is 200

*Answer: (b).*

Grinding ratio = work removed ÷ wheel worn = 200. So the wheel loses 1/200 = 0.005 of the volume it removes.

**The trap:** (a) flips the ratio. A wheel that wore 200 times what it removed would be useless, so a ratio above 1 must mean the wheel wears less.

**Q2. GATE PI 2015.** Which one of the following statements related to the grinding process is INCORRECT? (a) Grinding wheels made of finer abrasive grains produce a better surface finish (b) Abrasive grains tend to fracture frequently during the grinding process (c) Specific energy in grinding is higher than that in turning (d) Cutting speed in grinding is much lower than that in face milling

*Answer: (d).*

1. (a) is true: finer grains leave smaller scratches.
2. (b) is true: this is how a wheel sharpens itself.
3. (c) is true: negative rake, tiny chips and rubbing make grinding very wasteful.
4. (d) is false: a wheel runs at about 30 m/s, which is 1800 m/min. That is far faster than a face mill.

**The trap:** grinding removes metal slowly, so it feels slow. The removal rate is low, but the speed of each grain is very high.

**Q3. UPPSC AE Mechanical 2013 (Paper I).** Grinding of hard materials requires: (a) fine grit size and hard grades (b) fine grit size and soft grades (c) coarse grit size and hard grades (d) coarse grit size and soft grades

*Answer: (b) fine grit and soft grade.*

1. Grade: hard work blunts grains fast, so the bond must let them go. That means a soft grade.
2. Grit: hard work takes only a small bite per grain and does not clog the wheel, so fine grains work best.

**The trap:** "hard with hard" sounds natural. It is backwards for the grade, because grade is the bond's grip, not the grain's hardness.

**Q4. SSC JE Mechanical, 4 March 2017 (morning).** A grinding wheel gets glazed due to: (a) wear of abrasive grains (b) wear of bond (c) breaking of abrasives (d) cracks in the wheel

*Answer: (a) wear of abrasive grains.*

The grains wear flat, but the bond is too strong to let them go. The flat tips shine, rub the work and heat it. If the bond wore away (b) or the grains broke (c), fresh edges would appear, which is the opposite of glazing.

**The trap:** (b) and (c) describe a wheel sharpening itself. Glazing happens when that fails to occur.

**Q5. ESE Mechanical 2014 (Paper 2).** In a plunge grinding operation, the workpiece is 10 mm wide, and the wheel is 20 cm in diameter and 2 cm wide. The wheel speed is 3000 rpm and the table speed is 2.5 m/min. The depth of cut is 0.02 mm, the grain density is 250 per cm², and the grinding forces are 20 N tangential and 38 N thrust. The specific energy is: (a) 75.4 × 10⁴ N/mm² (b) 7.54 × 10⁴ N/mm² (c) 75.4 × 10⁶ N/mm² (d) 7.54 × 10⁶ N/mm²

*Answer: (b) 7.54 × 10⁴ N/mm².*

1. Wheel surface speed: π × 200 mm × 3000 ÷ 60 = 31,416 mm/s.
2. Power: 20 N × 31,416 mm/s = 628,320 N·mm/s. This uses the tangential force only.
3. Removal rate: table speed 2.5 m/min = 41.67 mm/s. MRR = 41.67 × 10 × 0.02 = 8.333 mm³/s, using the 10 mm work width.
4. u = 628,320 ÷ 8.333 = 75,400 N/mm² = 7.54 × 10⁴ N/mm².

**The trap:** the grain density and the 38 N thrust are not needed. The options differ only by powers of ten, so keep everything in mm and seconds.

**Q6. GATE ME 2021 (Shift 2).** A surface grinding operation is done on a cast iron plate 300 mm long, 10 mm wide and 50 mm high. An alumina wheel of 150 mm diameter and 12 mm width is used. The grinding speed is 40 m/s, the table speed 5 m/min and the depth of cut 50 µm per pass, for 20 passes. The average tangential and normal forces per pass are 40 N and 60 N. The specific grinding energy in J/mm³, to one decimal place, is \_\_\_\_\_\_ (numerical answer).

*Answer: 38.4 J/mm³ (accepted range 38 to 39).*

1. Power: tangential force × wheel speed = 40 × 40 = 1600 W.
2. Table speed: 5 m/min = 5000 ÷ 60 = 83.33 mm/s.
3. MRR = 83.33 × 10 × 0.05 = 41.67 mm³/s. The width is the plate's 10 mm, not the wheel's 12 mm.
4. u = 1600 ÷ 41.67 = 38.4 J/mm³.

**The trap:** using the 12 mm wheel width gives 32 J/mm³, and using the 60 N normal force gives 57.6 J/mm³. The 20 passes and the plate's length and height do not change the energy per mm³.

## 5. Metal forming and sheet metal

Forming traps come from geometry and from rules that feel backwards: friction that helps, "hot" working at room temperature, and clearance that goes on the punch for one job and the die for another.

### Going deeper

| Idea | What it means |
| --- | --- |
| Hot or cold working | The dividing line is the recrystallisation temperature, about 0.3 to 0.5 of the absolute melting temperature. Lead and tin recrystallise below room temperature, so rolling them at room temperature is hot working. Tungsten worked at 1000°C is still cold working. |
| Rolling geometry | Two rolls of diameter D squeeze the strip by Δh over an arc. Δh = D(1 − cos α), which is close to Rα² for small angles. α is the angle of bite. |
| Bite condition | The rolls can pull the strip in only through friction, so μ must be at least tan α. That sets the maximum draft: Δh max = μ²R. |
| Neutral point | The strip enters slower than the roll surface and leaves faster. At one point in the gap the two speeds match. Friction pulls the strip in before that point and holds it back after it. |
| Roll force | About the flow stress × strip width × contact length, and the contact length is √(RΔh). Smaller rolls need less force, which is why thin hard sheet is rolled on cluster mills with small work rolls. |
| Wire drawing limit | The ideal drawing stress is Y ln(A₀/A₁). When it reaches the flow stress Y, the wire coming out of the die yields. That caps one pass at 63% reduction of area, even with no friction. |
| Blanking or punching | The part you keep decides which tool takes the drawing size. Blanking keeps the disc, so the die is made to size and the punch is smaller. Punching keeps the hole, so the punch is made to size and the die is larger. |
| Die allowance | In blanking, the die opening wears larger with use. So it is made slightly undersize at first by the die allowance. |
| Deep drawing | The blank's area becomes the cup's area when thickness stays the same. The largest blank one pass can draw is about twice the punch diameter. The flange is squeezed round its circumference, so it wrinkles unless a blank holder presses it flat. |

### Formulas worth adding

```math
\Delta h = D(1 - \cos\alpha) \approx R\,\alpha^2, \qquad \Delta h_{\max} = \mu^2 R, \qquad \alpha_{\max} = \tan^{-1}\mu
```

```math
F_{\text{roll}} \approx \bar{Y}\, w\, \sqrt{R\,\Delta h}
```

```math
F_{\text{draw}} = \bar{Y}\, A_1 \ln\frac{A_0}{A_1}, \qquad \text{maximum reduction} = 1 - e^{-1} = 63\%
```

```math
D_{\text{die}} = d_{\text{blank}} - a, \qquad D_{\text{punch}} = D_{\text{die}} - 2c, \qquad F = \pi d\, t\, \tau
```

Here a is the die allowance, c the radial clearance, t the sheet thickness and τ its shear strength.

```math
D_{\text{blank}} = \sqrt{d^2 + 4dh} \quad \text{(flat-bottomed cup, diameter } d, \text{ height } h)
```

### Doubts cleared

**Doubt: friction is usually bad. Why does more friction allow a bigger draft?** Only friction drags the strip into the gap. A thicker strip meets the rolls at a steeper angle, and the roll's push tries to throw it back out. More friction lets the rolls win at a steeper angle, so they can take a thicker bite.

**Doubt: is rolling lead at room temperature cold working?** No, it is hot working. Lead recrystallises below room temperature, so its grains reform as fast as they are deformed. Hot and cold are judged against each metal's own recrystallisation temperature.

**Doubt: in blanking, why does the punch take the clearance?** The blank is the product, and the die opening it is pushed through sets its size. So the die is made to the blank size and the punch is made smaller. In punching the hole is the product, so the punch takes the hole size and the die is larger.

**Doubt: why does the wire drawing force use the final area?** You pull on the wire that has already come out of the die. For 10 mm drawn to 8 mm with Y = 400 MPa: F = 400 × 50.27 mm² × ln(100/64) = 400 × 50.27 × 0.446 = 8.97 kN.

**Doubt: why can a single pass not go beyond 63%?** The drawing stress rises with the reduction. At ln(A₀/A₁) = 1 it equals the flow stress, and the drawn wire itself starts to stretch. Then A₁/A₀ = 1/e = 0.368, a reduction of 63%. Friction brings the real limit down to about 30 to 45%.

### Tricky past questions with solutions

**Q1. GATE ME 2011.** The maximum possible draft in cold rolling of sheet increases with the: (a) increase in coefficient of friction (b) decrease in coefficient of friction (c) decrease in roll radius (d) increase in roll velocity

*Answer: (a) increase in coefficient of friction.*

The maximum draft is μ²R. It grows with friction squared and with roll radius. Roll speed does not appear in it.

**The trap:** (b) feels right because friction usually wastes energy. Here friction is what pulls the strip in, so more of it allows a thicker bite.

**Q2. GATE ME 2012.** In a single pass rolling process using 410 mm diameter steel rollers, a strip of width 140 mm and thickness 8 mm undergoes 10% reduction of thickness. The angle of bite in radians is: (a) 0.006 (b) 0.031 (c) 0.062 (d) 0.600

*Answer: (c) 0.062 rad.*

1. Draft: Δh = 10% of 8 mm = 0.8 mm.
2. Δh = D(1 − cos α), so 1 − cos α = 0.8 ÷ 410 = 0.00195 and cos α = 0.99805.
3. α = 3.58° = 0.0625 rad. Quick check: α ≈ √(Δh/R) = √(0.8/205) = 0.0625 rad.

**The trap:** the 140 mm width is not needed. (b) is half the right value, and (a) and (d) are ten times off, so check powers of ten as well as the formula.

**Q3. GATE ME 2015 (Shift 1).** In a slab rolling operation, the maximum thickness reduction is Δh max = μ²R, where R is the roll radius and μ the coefficient of friction between roll and sheet. If μ = 0.1, the maximum angle subtended by the deformation zone at the centre of the roll (bite angle, in degrees) is \_\_\_\_\_\_ (numerical answer).

*Answer: about 5.73° (accepted range 5.70 to 5.75).*

1. Geometry: Δh = 2R(1 − cos α).
2. Set it equal to μ²R: 2(1 − cos α) = 0.01, so cos α = 0.995.
3. α = 5.73°. The bite rule gives nearly the same: tan⁻¹ 0.1 = 5.71°.

**The trap:** the question asks for degrees. Writing 0.1, which is the angle in radians, scores nothing.

**Q4. GATE ME 2012.** Calculate the punch size in mm for a circular blanking operation: blank size 25 mm, sheet thickness 2 mm, radial clearance between punch and die 0.06 mm, die allowance 0.05 mm. (a) 24.83 (b) 24.89 (c) 25.01 (d) 25.17

*Answer: (a) 24.83 mm.*

1. Blanking keeps the disc, so the die sets its size.
2. The die is made smaller by the allowance, because it wears larger: die = 25 − 0.05 = 24.95 mm.
3. The clearance is radial, so it is taken off both sides: punch = 24.95 − 2 × 0.06 = 24.83 mm.

**The trap:** (b) takes the clearance off only once. (d) adds instead of subtracting, which is the rule for punching a hole.

**Q5. GATE ME 2017 (Shift 1).** A 10 mm deep cylindrical cup with a diameter of 15 mm is drawn from a circular blank. Neglecting the variation in sheet thickness, the diameter of the blank, to 2 decimal places, is \_\_\_\_\_\_ mm (numerical answer).

*Answer: 28.72 mm (accepted range 28.71 to 28.73).*

1. Thickness stays the same, so the blank's area equals the cup's area.
2. Blank: πD²/4. Cup: base πd²/4 plus wall πdh.
3. D² = d² + 4dh = 225 + 600 = 825, so D = 28.72 mm.

**The trap:** unfolding the walls flat gives 15 + 2 × 10 = 35 mm. That ignores how the flange shrinks round its circumference as it is drawn in. Equal areas is the rule.

## 6. Milling, drilling, shaping and broaching

The traps in this topic are about extra travel and which mechanism does which job. Time questions hide an approach distance. Machine questions swap the mechanism that drives the tool with the one that feeds the work.

### Going deeper

| Idea | What it means |
| --- | --- |
| Up milling | Also called conventional milling. Where it touches the work, the cutter turns against the feed. Each chip starts thin and ends thick, so the tooth rubs before it bites. The force tends to lift the work. |
| Down milling | Also called climb milling. The cutter turns with the feed, so each chip starts thick. The force presses the work onto the table, and finish and tool life are better. But the cutter pulls the table along, so any lead-screw backlash lets it jump forward. It needs a backlash eliminator and should not be used on castings with hard scale. |
| Slab milling approach | The cutter touches the work before its centre is over the edge. It must travel √(d(D − d)) extra before the full depth is being cut. |
| Table feed | Feed per tooth × number of teeth × rpm, in mm/min. |
| Drilling | Each lip cuts from the centre to the edge, so the depth of cut is D/2. A 118° point needs about 0.3D of extra travel before the full diameter is cutting. |
| Shaper drive | A Whitworth or crank-and-slotted-lever mechanism drives the ram and gives a quick return. The return stroke takes less time, typically about 2/3 of the cutting stroke time. |
| Shaper feed | A ratchet and pawl turns the cross-feed screw a few teeth at a time, at the end of each return stroke, while the tool is clear of the work. |
| Planer drive | Large planers often move the table with a Ward-Leonard DC motor system, which gives smooth speed control and quick reversal. |
| Simple indexing | The crank turns a single-start worm on a 40-tooth worm wheel, so 40 crank turns rotate the work once. For Z divisions, turn the crank 40/Z times. |
| Broaching | Each tooth stands a little higher than the one before, by the rise per tooth. One pass finishes the job. The tool is costly, so broaching suits mass production. A pull broach has to pass right through, so it cannot finish a blind hole. |

### Formulas worth adding

```math
\text{approach}_{\text{slab}} = \sqrt{d\,(D - d)}, \qquad F_{\text{table}} = f_t\, z\, N
```

```math
t_{\text{drill}} = \frac{L + A}{f\,N}, \qquad A = \frac{D}{2}\cot\frac{\theta_p}{2} \approx 0.3D \ \ (\theta_p = 118^\circ)
```

```math
V_{\text{shaper}} = \frac{L\,N\,(1 + m)}{1000}\ \text{m/min}
```

Here L is the stroke length in mm, N the strokes per minute and m the return time ÷ cutting time.

```math
n_{\text{crank}} = \frac{40}{Z}
```

### Doubts cleared

**Doubt: which is better, up or down milling?** Down milling gives a better finish and longer tool life. It needs a backlash-free table and a clean surface. Up milling is safer on older machines and on castings with hard scale, because the tooth starts below the scale.

**Doubt: where does √(d(D − d)) come from?** Draw the cutter touching the top corner of the work. The radius to that point, the vertical drop (radius − d) and the horizontal gap x make a right triangle. (D/2)² = (D/2 − d)² + x² gives x² = d(D − d).

**Doubt: is a drill's depth of cut its diameter?** No, half of it. The two lips each cut from the centre to the edge, so each removes a band D/2 wide.

**Doubt: why does a shaper feed with a ratchet instead of a screw that turns all the time?** The feed must happen once per stroke, during the return, when the tool is clear. A continuous feed would drag the tool sideways during the cut. A ratchet gives one small step per stroke.

**Doubt: how do I pick the hole circle in indexing?** Write 40/Z as a whole number of turns plus a fraction in lowest terms. Any circle whose hole count is a multiple of the fraction's bottom number works. Then scale the top number to match.

### Tricky past questions with solutions

**Q1. GATE ME 2014 (Shift 2).** A hole of 20 mm diameter is to be drilled in a steel block 40 mm thick. The drilling is done at 400 rpm with a feed of 0.1 mm/rev. The approach and over-run of the drill together equal the radius of the drill. The drilling time in minutes is: (a) 1.00 (b) 1.25 (c) 1.50 (d) 1.75

*Answer: (b) 1.25 min.*

1. Travel = thickness + approach and over-run = 40 + 10 = 50 mm.
2. Feed per minute = 0.1 mm/rev × 400 rev/min = 40 mm/min.
3. Time = 50 ÷ 40 = 1.25 min.

**The trap:** (a) leaves out the extra travel. (c) adds the full diameter instead of the radius.

**Q2. GATE PI 2015.** In a slab milling operation, a cutter of 75 mm diameter with sufficient width removes 5 mm thick material from a 200 mm long part in a single pass. The minimum length of travel in mm for the cutter to engage and completely cut the part surface is \_\_\_\_\_\_ (numerical answer).

*Answer: about 218.7 mm (accepted range 218 to 219).*

1. Extra travel before the full depth reaches the far end: √(d(D − d)) = √(5 × 70) = √350 = 18.71 mm.
2. Total travel = 200 + 18.71 = 218.71 mm.

**The trap:** adding the cutter's radius, 37.5 mm, assumes the cutter must clear the work completely. The question asks only for the travel to finish the cut.

**Q3. ESE Mechanical 2016 (Paper 2).** Consider the following statements for the down-milling operation: 1. The workpiece is forced against the holding device by the cutter. 2. The cutter rotates in the same direction as the feed. 3. Backlash elimination is not required. 4. The cut starts with a full chip thickness. Which of the above statements are correct? (a) 1, 2 and 3 only (b) 3 and 4 only (c) 1, 2 and 4 only (d) 1, 2, 3 and 4

*Answer: (c) 1, 2 and 4 only.*

1. Statement 1 is true. The cutter's force presses the work down onto the table and fixture.
2. Statement 2 is true. At the point of contact, the teeth move the same way as the work.
3. Statement 3 is false. The cutter pulls the table forward, so backlash must be removed. Down milling is the one that needs an eliminator.
4. Statement 4 is true. Each tooth enters at full thickness and leaves at zero.

**The trap:** students remember "backlash" as a milling word but not which kind of milling needs the cure.

**Q4. ISRO VSSC Technical Assistant Mechanical, 14 July 2021.** In a shaper machine, the mechanism for tool movement is: (a) Geneva mechanism (b) Ratchet and pawl mechanism (c) Ward-Leonard system (d) Whitworth mechanism

*Answer: (d) Whitworth mechanism.*

The tool rides on the ram, and the Whitworth quick-return mechanism drives the ram back and forth. The ratchet and pawl moves the table across for feed, not the tool. A Ward-Leonard system drives large planer tables. A Geneva drive gives intermittent rotation, as in indexing tables.

**The trap:** all four are real mechanisms found near machine tools. Ask which part moves, the tool or the work, before choosing.

**Q5. ISRO Scientist ME 2011.** A milling machine has two index plates. Plate 1 has 15, 16, 17, 18, 19 and 20 hole circles. Plate 2 has 21, 23, 27, 29, 31 and 33 hole circles. A spur gear of 28 teeth is to be milled by simple indexing. Which combination is correct? (a) Plate 1: 1 revolution and 9 holes in the 18-hole circle (b) Plate 2: 1 revolution and 9 holes in the 21-hole circle (c) Plate 2: 1 revolution and 9 holes in the 33-hole circle (d) Plate 1: 1 revolution and 9 holes in the 15-hole circle

*Answer: (b).*

1. Crank turns per tooth: 40/28 = 1 12/28 = 1 3/7.
2. The fraction's bottom number is 7, so the circle needs a multiple of 7 holes. Only the 21-hole circle on Plate 2 has one.
3. 3/7 = 9/21, so turn 1 full revolution plus 9 holes in the 21-hole circle.

**The trap:** every option says "9 holes", so only the circle decides it. 9 holes in an 18-hole circle is half a turn, which would cut 40 ÷ 1.5 = 26.7 teeth, not 28.

## 7. Unconventional machining

Each of these processes removes metal by one mechanism, through one medium. Questions swap the media (electrolyte, dielectric, slurry, gas), swap the mechanisms, or hide a units trap in Faraday's law.

### Going deeper

| Process | Medium | How metal comes off | Points examiners use |
| --- | --- | --- | --- |
| ECM | Electrolyte such as salt water, pumped fast | Ion displacement: the work is the anode and dissolves atom by atom | The tool does not wear. Hardness does not matter. Removal depends on current, atomic weight and valency. |
| EDM | Dielectric such as kerosene or deionised water | Sparks melt and vaporise tiny craters | The work must conduct. The tool wears too, so it is made of copper or graphite. |
| USM | Abrasive slurry (boron carbide, silicon carbide) | Brittle fracture from grains hammered by a tool vibrating at about 20 kHz | Best for glass, ceramics and germanium. Poor for soft, ductile metals. |
| AJM | Dry abrasive in a fast gas jet | Erosion by the grains | No liquid. The nozzle is tungsten carbide or sapphire. |
| Chemical machining | Etchant | Corrosive reaction, with no current | A maskant protects the parts that stay. |
| LBM | Air or assist gas | Melting and vaporisation by focused light | No vacuum needed. Shiny metals such as copper reflect the beam. |
| EBM | Vacuum | Melting and vaporisation by fast electrons | It needs a vacuum, because air molecules would scatter the electrons. |

### Formulas worth adding

```math
\dot m = \frac{\eta\, I\, A_w}{Z\, F}\ \text{g/s}, \qquad \text{MRR}_{\text{volume}} = \frac{\eta\, I\, A_w}{Z\, F\, \rho}, \qquad F = 96\,500\ \text{C}
```

Here η is the current efficiency, Aw the atomic weight, Z the valency and ρ the density.

```math
I = \frac{V}{R}, \qquad R = \frac{\rho_e\, g}{A}
```

Here ρe is the electrolyte's specific resistance, g the gap and A the area being machined.

```math
E_{\text{spark}} = \tfrac{1}{2}\, C\, V_b^2, \qquad P_{\text{average}} = \frac{E_{\text{spark}}}{t_{\text{cycle}}}
```

### Doubts cleared

**Doubt: does hardness matter in ECM?** No. Metal leaves atom by atom as current flows, and Faraday's law has no hardness in it. That is why ECM shapes hardened steel and superalloy turbine blades easily.

**Doubt: does the ECM tool wear?** No. The tool is the cathode, where only hydrogen gas forms. One tool can make thousands of parts. In EDM the sparks hit both sides, so the tool does wear.

**Doubt: electrolyte or dielectric?** An electrolyte conducts, so current flows steadily in ECM. A dielectric insulates until the voltage breaks it down, which makes each spark in EDM. It then cools the crater and flushes away the debris.

**Doubt: why does USM fail on soft metals?** The grains strike the surface like tiny hammers. Brittle materials chip off. Ductile metals only dent and work-harden.

**Doubt: EDM is called spark erosion. Is its mechanism erosion?** No. Each spark melts and vaporises a crater, so the mechanism is fusion and vaporisation. "Erosion" in exam lists means mechanical wear by grains, as in USM and AJM.

### Tricky past questions with solutions

**Q1. GATE ME 2009.** Electrochemical machining removes material from an iron surface of 20 mm × 20 mm. The inter-electrode gap is 0.2 mm, the DC supply is 12 V and the electrolyte's specific resistance is 2 Ω·cm. Iron has atomic weight 55.85 and valency 2, and Faraday's constant is 96,540 C. The material removal rate in g/s is: (a) 0.3471 (b) 3.471 (c) 34.71 (d) 347.1

*Answer: (a) 0.3471 g/s.*

1. The resistance is in Ω·cm, so work in cm: gap = 0.02 cm and area = 2 × 2 = 4 cm².
2. R = 2 × 0.02 ÷ 4 = 0.01 Ω.
3. I = 12 ÷ 0.01 = 1200 A.
4. MRR = 1200 × 55.85 ÷ (2 × 96,540) = 0.3471 g/s.

**The trap:** the options differ only by powers of ten, so the units decide the answer. Convert every length to cm before using Ω·cm.

**Q2. GATE ME 2013.** During ECM of iron (atomic weight 56, valency 2) at 1000 A with 90% current efficiency, the material removal rate was 0.26 g/s. If titanium (atomic weight 48, valency 3) is machined at 2000 A with 90% current efficiency, the expected removal rate in g/s will be: (a) 0.11 (b) 0.23 (c) 0.30 (d) 0.52

*Answer: (c) 0.30 g/s.*

1. With the same efficiency, the removal rate in g/s goes with I × (atomic weight ÷ valency).
2. Iron: 1000 × 56/2 = 28,000. Titanium: 2000 × 48/3 = 32,000.
3. Titanium rate = 0.26 × 32,000/28,000 = 0.297, which is about 0.30 g/s.

**The trap:** (d) 0.52 doubles the rate for the doubled current but forgets the change of metal. Titanium gives 16 g per mole of electrons, against iron's 28.

**Q3. GATE ME 2019 (Shift 2).** In an electrical discharge machining process, the breakdown voltage across the inter-electrode gap is 200 V and the capacitance of the RC circuit is 50 µF. The energy in joules released per spark across the gap is \_\_\_\_\_\_ (numerical answer).

*Answer: 1 J.*

1. The capacitor stores ½ CV² and releases it in one spark.
2. E = ½ × 50 × 10⁻⁶ × 200² = ½ × 50 × 10⁻⁶ × 40,000 = 1 J.

**The trap:** forgetting the ½ gives 2 J. Also take micro as 10⁻⁶.

**Q4. GATE PI 2016.** Consider the statements: (P) Electrolyte is used in electrochemical machining. (Q) Electrolyte is used in electrical discharge machining. (R) Abrasive slurry is used in ultrasonic machining. (S) Abrasive slurry is used in abrasive jet machining. The correct ones are: (a) P and R only (b) Q and S only (c) Q, R and S only (d) P and Q only

*Answer: (a) P and R only.*

1. P is true: ECM needs a conducting electrolyte.
2. Q is false: EDM uses an insulating dielectric.
3. R is true: USM hammers grains carried in a liquid slurry.
4. S is false: AJM blows dry grains in a gas jet.

**The trap:** USM and AJM both use abrasives. Only USM carries them in a liquid.

**Q5. GATE ME 2011.** Match each process with its material removal mechanism. Processes: P. Chemical machining, Q. Electrochemical machining, R. Electro-discharge machining, S. Ultrasonic machining. Mechanisms: 1. Erosion, 2. Corrosive reaction, 3. Ion displacement, 4. Fusion and vaporisation. (a) P-2, Q-3, R-4, S-1 (b) P-2, Q-4, R-3, S-1 (c) P-3, Q-2, R-4, S-1 (d) P-2, Q-3, R-1, S-4

*Answer: (a) P-2, Q-3, R-4, S-1.*

1. Chemical machining: an etchant corrodes the metal with no current. That is a corrosive reaction.
2. ECM: current drives metal ions out of the anode. That is ion displacement.
3. EDM: sparks melt and boil the metal. That is fusion and vaporisation.
4. USM: grains chip the surface. That is erosion.

**The trap:** (c) swaps the two chemical processes. The one with current is ion displacement. (d) falls for EDM's other name, spark erosion.

## 8. NC/CNC and part programming

CNC numericals are all one chain: pulses turn the motor, the motor turns the screw, and the screw moves the table. Code questions test the direction of an arc and what each kind of control actually controls.

### Going deeper

| Idea | What it means |
| --- | --- |
| Basic length unit (BLU) | The smallest move the table can make, one pulse's worth. BLU = screw pitch ÷ (steps per motor turn × motor turns per screw turn). |
| Step angle | A 1.8° stepper takes 360 ÷ 1.8 = 200 steps per turn. |
| Gear reduction | A 4 : 1 reduction means 4 motor turns for 1 screw turn. Each pulse then moves the table 4 times less, so resolution is finer and more pulses are needed. |
| Open loop | Stepper motor with no position feedback. If the motor misses a step, the controller never knows. |
| Closed loop | Servo motor with an encoder or resolver. The controller compares the actual position with the command and corrects it. |
| Point-to-point | Only the end position matters, as in drilling, punching and spot welding. The tool is not cutting while it moves, so the path and speed between points are not controlled. |
| Contouring | Two or more axes move together under interpolation, so the path and the feed along it are both controlled, as in milling a profile. |
| G02 and G03 | Clockwise and counterclockwise arcs, viewed from the positive end of the third axis. For the XY plane, that means looking down from +Z at the drawing with X to the right and Y up. |
| G90 and G91 | Absolute coordinates are measured from the program zero. Incremental coordinates are measured from the last point. |
| Modal codes | Codes such as G01, G90 and the F feed stay active until another code replaces them. |
| Common M codes | M03 spindle clockwise, M04 counterclockwise, M05 spindle stop, M06 tool change, M08 coolant on, M09 coolant off, M30 end and rewind. |

### Formulas worth adding

```math
n_s = \frac{360^\circ}{\text{step angle}}, \qquad \text{BLU} = \frac{p}{n_s \times g}, \qquad f_{\text{pulse}} = \frac{v_{\text{table}}}{\text{BLU}}
```

Here p is the screw pitch and g the number of motor turns per screw turn.

```math
t = \frac{\sqrt{\Delta x^2 + \Delta y^2}}{F}
```

### Doubts cleared

**Doubt: does a gear reduction make the table faster?** No. With 4 : 1 the motor turns 4 times for every screw turn, so each pulse moves the table a quarter as far. You need 4 times the pulses for the same speed.

**Doubt: clockwise when viewed from where?** From the positive end of the axis at right angles to the plane. For an XY arc, look down from +Z, which is the normal view of a drawing with X to the right and Y up.

**Doubt: on a diagonal cut, does the machine move X and then Y?** Not in G01. Linear interpolation moves both axes together, so the tool travels the straight-line distance. A point-to-point move may go one axis at a time, but then it is not cutting.

**Doubt: is point-to-point always open loop?** No. The kind of motion (point-to-point or contouring) and the kind of loop (open or closed) are separate choices. A drilling machine can have either loop.

**Doubt: how do I find an arc's direction quickly?** Place the centre, then read the start and end like a clock face around it. Going from 9 o'clock to 12 o'clock is clockwise, so it is G02.

### Tricky past questions with solutions

**Q1. GATE ME 2022 (Shift 1).** A CNC worktable is driven in a linear direction by a lead screw connected directly to a stepper motor. The pitch of the lead screw is 5 mm. The stepper motor completes one full revolution on receiving 600 pulses. If the worktable speed is 5 m/min and no pulse is missed, the pulse rate received by the stepper motor is: (a) 20 kHz (b) 10 kHz (c) 3 kHz (d) 15 kHz

*Answer: (b) 10 kHz.*

1. Table speed: 5 m/min = 5000 mm/min.
2. Screw turns: 5000 ÷ 5 = 1000 rev/min = 16.67 rev/s.
3. Pulses: 16.67 × 600 = 10,000 per second = 10 kHz.

**The trap:** the speed is per minute, but hertz is per second. Convert before you finish, or the answer comes out 60 times too large.

**Q2. GATE PI 2021.** In a point-to-point open-loop NC drive, a stepper motor with a 1.8° step angle is coupled to a lead screw through a 4 : 1 gear reduction (4 motor turns for 1 lead screw turn). The single-start lead screw has a pitch of 4 mm and drives the worktable. If the table moves at a uniform 10 mm/s, the pulse frequency in Hz needed to drive the stepper motor is \_\_\_\_\_\_ (numerical answer).

*Answer: 2000 Hz (accepted range 1999 to 2001).*

1. Steps per motor turn: 360 ÷ 1.8 = 200.
2. Pulses per screw turn: 200 × 4 = 800. One screw turn moves the table 4 mm.
3. BLU = 4 ÷ 800 = 0.005 mm. Pulse rate = 10 ÷ 0.005 = 2000 Hz.

**The trap:** using the gear ratio the wrong way round gives 125 Hz. A reduction means more motor turns, so more pulses.

**Q3. GATE ME 2012.** A CNC vertical milling machine has to cut a straight slot 10 mm wide and 2 mm deep with a cutter of 10 mm diameter, between points (0, 0) and (100, 100) on the XY plane, in mm. The feed rate is 50 mm/min. The milling time for the slot in seconds is: (a) 120 (b) 170 (c) 180 (d) 240

*Answer: (b) 170 s.*

1. The cutter is as wide as the slot, so one pass along the centre line cuts it.
2. The path is the diagonal: √(100² + 100²) = 141.4 mm.
3. Time = 141.4 ÷ 50 = 2.83 min = 170 s.

**The trap:** (d) 240 s moves X and then Y, 200 mm in all. (a) 120 s uses only 100 mm. The width, depth and cutter size are there to distract.

**Q4. VIZAG Steel MT Mechanical 2013 (re-exam).** The tool of an NC machine has to move along a circular arc from (5, 5) to (10, 10). The centre of the arc is at (10, 5). Which NC tool path command performs this? (a) N010 G02 X10 Y10 X5 Y5 R5 (b) N010 G03 X10 Y10 X5 Y5 R5 (c) N010 G01 X5 Y5 X10 Y10 R5 (d) N010 G02 X5 Y5 X10 Y10 R5

*Answer: (d).*

1. Both points are 5 from the centre, so R = 5.
2. The start (5, 5) is directly left of the centre, at 9 o'clock. The end (10, 10) is directly above it, at 12 o'clock.
3. From 9 to 12 o'clock is clockwise, so the code is G02. Option (d) gives the start first, then the end.

**The trap:** (a) has the right code but swaps start and end. This old textbook style writes both points. A real controller block gives only the end point with R, or with I and J.

**Q5. TNTRB Mechanical 2012.** In a point-to-point control type of NC system: (a) control of the position and velocity of the tool is essential (b) control of only the position of the tool is essential (c) control of only the velocity of the tool is sufficient (d) neither position nor velocity need be controlled

*Answer: (b).*

The tool works only after it arrives, as when drilling a hole. So only where it stops matters. How fast it travels between holes, and along what path, does not affect the part.

**The trap:** (a) describes contouring, where the tool cuts while moving, so the feed along the path must be controlled as well.

## 9. Jigs and fixtures, powder metallurgy

Fixture questions count degrees of freedom in a way that surprises most students, and they test which locator suits which kind of variation. Powder metallurgy questions test the order of steps and words that sound alike.

### Going deeper

| Idea | What it means |
| --- | --- |
| Jig and fixture | A jig holds and locates the work and also guides the tool through hardened bushes, as for drilling, reaming and tapping. A fixture holds and locates the work, and the tool is set with setting blocks, as for milling, turning, grinding and welding. |
| Twelve degrees of freedom | Count each movement in each direction: + and − along X, Y and Z, and + and − rotation about each axis. That makes 12. |
| 3-2-1 location | Three pins under the base, two on a side and one at the end. Together they stop 9 of the 12 movements. Clamps take away the last 3 by pressing the work onto the pins. |
| Where forces should go | The cutting force should push the work towards the locators, never towards a clamp. Locators should sit on a machined surface and be spread as far apart as possible. |
| Redundant location | Two locators doing the same job fight each other. Two round pins in two holes jam unless the hole spacing is exact. |
| Diamond pin | A pin relieved on two sides. Used with one round pin, it stops rotation about the round pin but lets the centre distance between the holes vary. |
| Conical locator | A cone seats in holes of different diameters and still centres them. |
| Drill bushes | Press-fit bushes are fixed. Renewable bushes are replaced when worn. Slip bushes change quickly, for example from drill to reamer in the same hole. |
| Powder metallurgy steps | Make the powder (atomisation is the most common way), blend it, compact it cold into a green compact, then sinter it. Finishing steps such as sizing, impregnation and infiltration come last. |
| Green compact | The pressed part before sintering. Only interlocking and cold welding hold it together, so it is weak. |
| Sintering | Heating to about 0.7 to 0.9 of the melting temperature, in kelvin, in a protective atmosphere. Atoms diffuse across the contacts, so density rises and the part shrinks slightly. |
| Impregnation and infiltration | Impregnation fills the pores with oil, giving self-lubricating bearings. Infiltration fills them with a lower-melting metal, such as copper into iron, for strength. |
| What it makes well | Tungsten filaments, cemented carbide tips, porous filters, self-lubricating bushes and magnets. Dies are costly, so it pays only for large batches. |

### Formulas worth adding

```math
\underbrace{5}_{\text{3 base pins}} + \underbrace{3}_{\text{2 side pins}} + \underbrace{1}_{\text{1 end pin}} = 9 \ \text{of the 12 freedoms}
```

```math
\text{porosity} = 1 - \frac{\rho_{\text{part}}}{\rho_{\text{solid}}}, \qquad T_{\text{sinter}} \approx (0.7\ \text{to}\ 0.9)\, T_m \ \ (\text{kelvin})
```

### Doubts cleared

**Doubt: six pins, so why nine freedoms and not six?** A pin stops movement only towards itself. But three spread-out base pins also stop tilting both ways about two axes, because any tilt pushes one side down onto a pin. So the base stops 5 movements, the two side pins stop 3, and the end pin stops 1.

**Doubt: jig or fixture for milling?** A fixture. A bush can guide a drill, but nothing can guide a milling cutter that sweeps across the work. The cutter is set once with a setting block.

**Doubt: why not just use a smaller round pin instead of a diamond pin?** A small round pin would let the part shift in every direction. The diamond stays full size in the one direction that stops rotation and is cut away along the line between the holes, where the spacing varies.

**Doubt: is sintering melting?** No. It happens below the melting point, by solid-state diffusion. The exception is liquid-phase sintering, where a minor ingredient melts, as cobalt does in cemented carbides.

**Doubt: impregnation or infiltration?** Impregnation uses oil or wax, which is not a metal, and gives lubrication or sealing. Infiltration uses a molten metal and gives strength and density.

### Tricky past questions with solutions

**Q1. ISRO Scientist ME 2015.** The 3-2-1 method of location in a jig or fixture collectively restricts the workpiece in n degrees of freedom, where n is: (a) 6 (b) 8 (c) 9 (d) 1

*Answer: (c) 9.*

1. Count 12 freedoms: + and − movement along each of three axes, and + and − rotation about each.
2. Three base pins stop movement down and tilting both ways about two axes: 5.
3. Two side pins stop movement towards them and turning both ways about the vertical axis: 3.
4. One end pin stops movement towards it: 1. Total 9. Clamps take the remaining 3.

**The trap:** (a) 6 is the number of pins, and also the answer if you count only 6 freedoms. Questions that ask how many the method restricts use the 12-way count.

**Q2. WBPSC JE Mechanical 2018.** A diamond locating pin is used in jigs and fixtures because: (a) diamond is very hard and wear-resistant (b) it occupies very little space (c) it helps assembly with a tolerance on the centre distance (d) it has a long life

*Answer: (c).*

The pin is diamond-shaped, not made of diamond. With one round pin and one diamond pin, the part goes on even if its two holes are slightly closer or farther apart than the pins, and it still cannot rotate.

**The trap:** (a) and (d) assume the pin is made of diamond. It is hardened steel.

**Q3. AFCAT EKT Mechanical 2015 (Paper 2).** If the diameter of the hole is subject to considerable variation, then for locating in jigs and fixtures, the pressure type of locator used is: (a) Conical locator (b) Cylindrical locator (c) Diamond pin locator (d) Vee locator

*Answer: (a) Conical locator.*

A cone touches the rim of the hole wherever it is, so a small hole sits higher on the cone and a large one lower. Either way the hole is centred.

**The trap:** the diamond pin (c) absorbs variation in the distance between holes, not in a hole's diameter. Match each locator to the kind of variation it handles.

**Q4. GATE PI 2017.** In powder metallurgy, the process of atomization refers to a method of: (a) producing powders (b) compaction of powders (c) sintering of powder compacts (d) blending of metal powders

*Answer: (a) producing powders.*

Molten metal is forced through a small hole and broken into droplets by a jet of air, inert gas or water. The droplets freeze as powder. It is the most common way to make metal powders.

**The trap:** "atomize" sounds like breaking something already made into fine bits, such as blending. It acts on liquid metal, before any of the other steps.

**Q5. ESE Mechanical 2015 (Paper 2).** Consider the following statements regarding powder metallurgy: 1. Refractory materials made of tungsten can be manufactured easily. 2. In metal powder, control of grain size results in a much more uniform structure. 3. The powder heated in a die or mould at high temperature is then pressed and compressed to get the desired shape and strength. 4. In sintering, the metal powder is gradually heated, resulting in a coherent bond. Which of the above statements are correct? (a) 1, 2 and 3 only (b) 1, 2 and 4 only (c) 2, 3 and 4 only (d) 1, 2, 3 and 4

*Answer: (b) 1, 2 and 4 only.*

1. Statement 1 is true. Tungsten melts at about 3400°C, so it is hard to cast but easy to make from powder.
2. Statement 2 is true. The powder's particle size sets the grain size, so the structure is uniform.
3. Statement 3 is false for the normal route. Powder is pressed cold into a green compact and heated afterwards, in a separate sintering step.
4. Statement 4 is true. Sintering bonds the particles below the melting point.

**The trap:** hot pressing does exist, so statement 3 sounds possible. The basic process the question describes compacts first and sinters second.

## Sources

Of the 49 past questions, 29 are from GATE (22 ME, 7 PI), 4 from ESE and 16 from ISRO, JE, AE and other technical exams. Each was checked on its Testbook question page, which names the paper it was asked in. Where Testbook does not name the paper, the year comes from ExamSIDE's GATE archive (section 1 Q1, section 2 Q4) or from the GATE 2007 label on the question's figure (section 3 Q2). Every answer was worked out again for this guide.

- **1. Welding:** [Q1 GATE 2008](https://questions.examside.com/past-years/gate/question/in-arc-welding-of-a-butt-joint-the-welding-speed-is-to-be-se-gate-me-2008-marks-2-mt7pu0reicioktye.htm) ([Testbook](https://testbook.com/question-answer/in-arc-welding-of-a-butt-joint-the-welding-speed--5655bab6995a2d521ff048be)), [Q2 GATE 2012](https://testbook.com/question-answer/in-a-dc-arc-welding-operation-the-voltage-arc-len--565c3ff5995a2d0c5d4be662), [Q3 VIZAG MT 2013](https://testbook.com/question-answer/two-1-mm-thick-steel-steels-are-to-be-spot-welded--58a80e31995a2d2555d8dcf2), [Q4 ESE 2013](https://testbook.com/question-answer/statement-i-the-deflection-of-arc-from-its-inte--5fbf62a4dfbb9a6e5318934e), [Q5 UPPCL JE 2019](https://testbook.com/question-answer/when-it-is-said-that-the-duty-cycle-of-a-welding-m--5f33ce62e8ef8d0d0e87f472), [Q6 GATE 2015](https://testbook.com/question-answer/in-a-linear-arc-welding-process-the-heat-input-pe--565c15a803282114ca1d3c54)
- **2. Machining:** [Q1 GATE 2015](https://testbook.com/question-answer/orthogonal-turning-of-a-mild-steel-tube-with-a-too--5659a582995a2d13ea41d550), [Q2 GATE 2022](https://testbook.com/question-answer/in-an-orthogonal-machining-operation-the-cutting--62133d6b557703ce364a0044), [Q3 UPPSC AE 2013](https://testbook.com/question-answer/in-a-tool-life-test-doubling-the-cutting-speed-re--5e84447af60d5d3f31801137), [Q4 GATE 2008](https://questions.examside.com/past-years/gate/question/in-a-single-point-turning-tool-the-side-rake-angle-and-ortho-gate-me-2008-marks-2-zldksuivmlrqecev.htm) ([Testbook](https://testbook.com/question-answer/in-a-single-point-turning-tool-the-side-rake-angl--5655b8af0328213d4a8d1e67)), [Q5 GATE PI 2015](https://testbook.com/question-answer/built-up-edge-formation-decreases-under-the-condit--60a62e7ae0a0fdaee624e795), [Q6 GATE PI 2018](https://testbook.com/question-answer/a-cylindrical-workpiece-is-turned-at-a-feed-of-0-1--60a24b00256d9c95a5e9673f)
- **3. Casting:** [Q1 GATE 2011](https://testbook.com/question-answer/a-cubic-casting-of-50-mm-side-undergoes-volumetric--565860f9995a2d13ea3fb5e2), [Q2 GATE 2007](https://testbook.com/question-answer/a-200-mm-long-down-sprue-has-an-area-of-cross-sect--565452f50328213d4a8c1023), [Q3 VIZAG MT 2013](https://testbook.com/question-answer/a-mould-has-a-down-sprue-whose-length-is-20-cm-and--58a7fd57995a2d2555d8b0d4), [Q4 UPRVUNL JE 2016](https://testbook.com/question-answer/with-a-solidification-factor-of-0-97-x-106-sm2-t--6066ad8b821694468eefaff7), [Q5 ISRO 2015](https://testbook.com/question-answer/two-castings-of-the-same-metal-have-the-same-surfa--5f3a314126ea9d0d0b0b4ae9), [Q6 BPSC AE 2024](https://testbook.com/question-answer/directional-solidification-in-castings-can-be-impr--680b689c638d9243ffd1c2ca)
- **4. Grinding:** [Q1 GATE 2018](https://testbook.com/question-answer/a-grinding-ratio-of-200-implies-that-the--5dc948fbf60d5d2e3fa0c2c7), [Q2 GATE PI 2015](https://testbook.com/question-answer/which-one-of-the-following-statements-related-to-g--60a20dbcde59dfeada7deef5), [Q3 UPPSC AE 2013](https://testbook.com/question-answer/grinding-of-hard-materials-requires--5e7e6a92f60d5d5ae746360c), [Q4 SSC JE 2017](https://testbook.com/question-answer/a-grinding-wheel-gets-glazed-due-to--59a55c9fe07ce00e7832032d), [Q5 ESE 2014](https://testbook.com/question-answer/in-a-plunge-grinding-operation-the-workpiece-is-1--5ef9a1a8a9baf40d1293a370), [Q6 GATE 2021](https://testbook.com/question-answer/a-surface-grinding-operation-has-been-performed-on--6033a15a8b5a6b637aed9388)
- **5. Forming:** [Q1 GATE 2011](https://testbook.com/question-answer/the-maximum-possible-draft-in-cold-rolling-of-shee--56584623995a2d13ea3f7756), [Q2 GATE 2012](https://testbook.com/question-answer/in-a-single-pass-rolling-process-using-410-mm-diam--565c3f51995a2d0c5d4be4fc), [Q3 GATE 2015](https://testbook.com/question-answer/in-a-slab-rolling-operation-the-maximum-thickness--565c2c4203282114ca1d5a31), [Q4 GATE 2012](https://testbook.com/question-answer/calculate-the-punch-size-in-mm-for-a-circular-bla--565c3ea403282114ca1d71fa), [Q5 GATE 2017](https://testbook.com/question-answer/a-10-mm-deep-cylindrical-cup-with-diameter-of-15-m--58e4ec3c0328217f0c07f84e)
- **6. Milling, drilling, shaping:** [Q1 GATE 2014](https://testbook.com/question-answer/a-hole-of-20-mm-diameter-is-to-be-drilled-in-a-ste--565d588a03282114ca1e98a0), [Q2 GATE PI 2015](https://testbook.com/question-answer/in-a-slab-milling-operation-a-cutter-of-75-mm-dia--60a624d4713bb435d228ad2d), [Q3 ESE 2016](https://testbook.com/question-answer/consider-the-following-statements-for-down-milling--5eba1293f60d5d2fd8c9b83c), [Q4 ISRO VSSC 2021](https://testbook.com/question-answer/in-a-shaper-machine-the-mechanism-for-tool-moveme--6463423e597a9d1baf83e086), [Q5 ISRO 2011](https://testbook.com/question-answer/a-milling-machine-has-the-following-two-index-plat--5f4e51e7031814282f581443)
- **7. Unconventional machining:** [Q1 GATE 2009](https://testbook.com/question-answer/electrochemical-machining-is-performed-to-remove-m--566009ce995a2d0c5d508f72), [Q2 GATE 2013](https://testbook.com/question-answer/during-the-electrochemical-machining-ecm-of-iron--565c067203282114ca1d2b91), [Q3 GATE 2019](https://testbook.com/question-answer/in-an-electrical-discharge-machining-process-the--5dde9452f60d5d44b47ddfaf), [Q4 GATE PI 2016](https://testbook.com/question-answer/consider-the-following-statements-p-electrolyt--60ac9b39509197a609034895), [Q5 GATE 2011](https://testbook.com/question-answer/match-the-following-non-traditional-machining-proc--56585fd4995a2d13ea3fb2a0)
- **8. NC/CNC:** [Q1 GATE 2022](https://testbook.com/question-answer/a-cnc-worktable-is-driven-in-a-linear-direction-by--620f407a0e004f99afa064f9), [Q2 GATE PI 2021](https://testbook.com/question-answer/in-a-point-to-point-open-loop-nc-drive-a-stepper--608fabe547d7a49482ee3968), [Q3 GATE 2012](https://testbook.com/question-answer/a-cnc-vertical-milling-machine-has-to-cut-a--565c29ba995a2d0c5d4bc3be), [Q4 VIZAG MT 2013](https://testbook.com/question-answer/the-tool-of-an-nc-machine-has-to-move-along-a-circ--5fcf3518e4531065884c57d8), [Q5 TNTRB 2012](https://testbook.com/question-answer/in-a-point-to-point-control-type-of-nc-system--5f354bf8ac72d10d13fb3847)
- **9. Jigs, fixtures and powder metallurgy:** [Q1 ISRO 2015](https://testbook.com/question-answer/3-2-1-method-of-location-in-a-jig-or-fixture-would--5f3a3acbeebea50d0df08567), [Q2 WBPSC JE 2018](https://testbook.com/question-answer/a-diamond-locating-pin-is-used-in-jigs-and-fixture--63b599e3db3670bcb481d5c6), [Q3 AFCAT EKT 2015](https://testbook.com/question-answer/if-the-diameter-of-the-hole-is-subject-to-consider--582c0e9803282150b4259a58), [Q4 GATE PI 2017](https://testbook.com/question-answer/in-powder-metallurgy-the-process-atomizati--609ba16e73dc6c18e15670e1), [Q5 ESE 2015](https://testbook.com/question-answer/consider-the-following-statements-regarding-powder--5ed0788af60d5d63b57136ab)
