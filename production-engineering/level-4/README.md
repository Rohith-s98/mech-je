# Production Engineering Level 4: Exam Room

Nov 9, 2026 · @Rohith

## How to use Level 4

Take these mocks only after finishing Levels 1 to 3 on all 9 topics. Each mock mixes every topic, the way the real paper does.

- **On the website:** press Start on a mock. It works like the exam's CBT screen: 25 questions, 25 minutes, one question at a time, a question palette and Mark for review. When the time runs out, the test submits itself.
- **Marking:** +1 for a right answer, −1/3 for a wrong one, 0 for a skip. That is the penalty in RRB JE, Kerala PSC and SSC JE Paper 2.
- **When to guess:** a blind guess among four options gains nothing on average (1/4 × 1 − 3/4 × 1/3 = 0). Rule out one option and a guess among the other three is worth +1/9 of a mark. Rule out two and it is worth +1/3. So guess only after you have eliminated at least one option.
- **After the test:** the review shows every question with your answer, the right one and the full solution. Read why each wrong option is wrong, not just the right one. Weak topics link back to the same section in Levels 1 to 3.
- **Reading here instead:** the solution sits right under each question, so cover it before you answer.
- **Retakes:** wait about a week. An immediate retake mostly tests your memory of the answers.

Each question names its exam, date and topic number, and Topic N is section N in Levels 1 to 3. In test mode the exam and topic are hidden, because spotting which idea a question tests is part of the skill. None of these questions appear in Levels 1 to 3. Each mock follows the weighting below.

| Topic | Questions per mock |
| --- | --- |
| 1. Welding processes and defects | 4 |
| 2. Machining: lathe, tool geometry, chips and tool life | 5 |
| 3. Casting | 4 |
| 4. Grinding and finishing | 2 |
| 5. Metal forming and sheet metal | 3 |
| 6. Milling, drilling, shaping and broaching | 3 |
| 7. Unconventional machining | 2 |
| 8. NC/CNC and part programming | 1 |
| 9. Jigs and fixtures, powder metallurgy | 1 |

## Speed toolkit

Most Production questions in RRB JE, SSC JE and Kerala PSC are one fact or one short formula. Learn the values below by heart, and a two-minute question takes 30 seconds.

### Ready values

| Quantity | Value to remember |
| --- | --- |
| Neutral oxy-acetylene flame | O₂ : C₂H₂ = 1 : 1 by volume; about 3200°C at the tip of the inner cone |
| Welding arc | About 6000°C at its centre |
| Twist drill for general work | Point angle 118°, helix angle about 30° |
| Taylor's exponent n | HSS 0.08 to 0.2; carbide 0.2 to 0.5; ceramic 0.5 to 0.7 |
| Recrystallisation temperature | About 0.4 × melting point, in kelvin. Hot working is done above it, cold working below it. |
| Grinding wheel marking order | Abrasive, grain size, grade, structure, bond: for example A 46 K 5 V |
| Wheel grade letters | A to H soft, I to P medium, Q to Z hard |
| Grain size numbers | 10 to 24 coarse, 30 to 60 medium, 70 to 180 fine, 220 to 600 very fine |
| Common G codes | G00 rapid, G01 straight line, G02 clockwise arc, G03 anticlockwise arc, G90 absolute, G91 incremental |
| Common M codes | M03 spindle clockwise, M05 spindle stop, M06 tool change, M08 and M09 coolant on and off, M30 end and rewind |
| Faraday's constant | 96,500 C per mole of electrons |

### Relations that save a step

| Relation | Use it when |
| --- | --- |
| V = πDN/1000 | Cutting speed in m/min, with D in mm and N in rpm. It works for a lathe, a drill and a milling cutter. |
| VTⁿ = C, so V₁T₁ⁿ = V₂T₂ⁿ | Tool life when the cutting speed changes |
| Merchant: 2φ + β − α = 90° | Shear angle φ from friction angle β and rake angle α |
| r = t₁/t₂ = sin φ/cos(φ − α) | Chip thickness ratio; r is always below 1 |
| Turning time = L/(fN) | Length in mm, feed in mm/rev, speed in rpm gives minutes |
| Table feed = f\_z × z × N | Milling: feed per tooth × number of teeth × rpm |
| Simple indexing = 40/N turns | Dividing head with a 40 : 1 worm, N divisions |
| Driver/driven gears = pitch to be cut ÷ lead screw pitch | Change gears for thread cutting on a lathe |
| H = I²Rt | Heat in resistance (spot, seam) welding |
| v = √(2gh) and A₁v₁ = A₂v₂ | Sprue and gating: velocity from head, area from continuity |
| t = B(V/A)² | Chvorinov's rule: solidification time from volume and surface area |
| F = πdtτ | Blanking or punching force for a round hole: perimeter × thickness × shear strength |
| Δh\_max = μ²R | Largest reduction in one rolling pass |
| m = AIt/(ZF) | Mass removed in ECM: atomic weight, current, time, valency, Faraday's constant |

### Unit traps

- **m/min or m/s.** V = πDN/1000 gives m/min. Divide by 60 for m/s.
- **Feed per what?** Feed per revolution (turning, drilling), feed per tooth (milling) and table feed in mm/min are three different numbers.
- **N or kN.** F = πdtτ with mm and N/mm² gives newtons. Divide by 1000 for kN.
- **Blanking or punching.** In blanking the blank is the product, so the clearance comes off the punch. In punching the hole is the product, so the clearance is added to the die.
- **Degrees or radians.** A bite angle from √(Δh/R) comes out in radians.

### Eliminating options

- Strike out anything that breaks a process limit. EDM and ECM need an electrically conducting work piece. USM suits hard, brittle material. TIG uses a non-consumable tungsten electrode.
- Check the direction of the trend. A higher cutting speed shortens tool life, and a larger rake angle makes the tool sharper but weaker.
- One counterexample is enough to knock out a statement with "always", "never" or "all".
- For "which is NOT correct", mark every option true or false before choosing. The single false one is the answer.
- If two options say the same thing in different words, neither is the answer when only one can be right.

## Mock 1

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 10 questions come from Kerala PSC papers (2023, 2025 and 2026), 5 from SSC JE, 1 from RRB JE and 9 from other exams.

**Q1. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 1.** The distance from the joint root to the toe of the weld is called: (a) Leg (b) Face (c) Effective throat (d) Actual throat

*Answer: (a) Leg.*

In a fillet weld, the root is where the two plates meet and the toe is where the weld face meets the plate surface. The leg is measured along the plate from the root to the toe. An equal-leg fillet weld is specified by its leg length, for example a 6 mm fillet.

- **(b) Face:** the exposed outer surface of the weld, the part you see. It is a surface, not a distance.
- **(c) Effective throat:** the shortest distance from the root to the face of the flat-faced triangle drawn inside the weld. For an equal-leg fillet it is 0.707 × leg, and weld strength is calculated on it.
- **(d) Actual throat:** the shortest distance from the root to the real face, including any extra convex metal.

**Memory aid:** the leg runs along the plate, root to toe. The throat runs across the weld, root to face. Throat = 0.707 × leg.

**Q2. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 1) · Topic 2.** What is the primary function of the headstock in a lathe machine? (a) To provide support for cutting tools during operation (b) To adjust the feed mechanism for thread-cutting (c) To control the movement of the carriage and tailstock (d) To hold and rotate the workpiece at different speeds

*Answer: (d) To hold and rotate the workpiece at different speeds.*

The headstock sits at the left end of the bed. It carries the hollow spindle and the speed gears (or a cone pulley with back gear). The chuck or the live centre fits on the spindle, so the headstock holds the work and turns it at the speed you select.

- **(a):** the tool post on the compound rest, carried by the carriage, supports the tool.
- **(b):** the feed gearbox and the lead screw set the feed and the thread pitch. They are driven from the spindle, but that is not the headstock's main job.
- **(c):** the carriage is moved by its handwheel, the feed rod or the lead screw. The tailstock is slid by hand and clamped.

**The trap:** (b) looks right because the drive for thread cutting starts at the spindle. The question asks for the primary function, which is holding and rotating the work.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** In centrifugal casting impurities are: (a) Uniformly distributed (b) Collected in the centre of casting (c) Forced outside surface (d) Collected in the middle section of casting

*Answer: (b) Collected in the centre of casting.*

Spinning the mould sets up a radial force many times gravity. The dense metal is flung outward against the mould wall. Slag, oxides, sand and gas are lighter, so they move inward towards the axis, which is the bore of a pipe. That inner layer is machined away, and the outer wall is left dense and clean.

- **(a):** impurities would be uniformly spread only if nothing separated them. Rotation separates them by density.
- **(c):** this is the opposite. The heavy metal goes outward, not the impurities.
- **(d):** "middle section" means halfway along the length or halfway through the wall. No force pushes impurities there.

**The trap:** "centre" here means the axis of rotation, the inner surface. Do not confuse it with the middle of the length.

**Q4. SSC JE Mechanical, 3 December 2025 (Shift 2) · Topic 5.** What does hydrostatic pressure in extrusion process improve? (a) brittleness (b) compressive strength (c) ductility (d) tensile strength

*Answer: (c) ductility.*

In hydrostatic extrusion, the billet is surrounded by a fluid under very high pressure, and the fluid pushes it through the die. Pressure from all sides closes internal voids and stops cracks from opening, so the metal can deform much more before it breaks. That is a gain in ductility. This is why fairly brittle materials can be extruded this way. There is also no friction between the billet and the container wall.

- **(a) brittleness:** it is the opposite of what happens. All-round compression makes the metal behave less brittle.
- **(b) compressive strength:** this is a property of the material. The process does not raise it. The gain is in how far the metal can be deformed.
- **(d) tensile strength:** not what the pressure improves. The benefit is formability, not strength.

**Memory aid:** squeeze from all sides and cracks cannot open. Hydrostatic pressure means more ductility.

**Q5. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 7.** Among the following non-traditional machining methods, which one offers the highest material removal rate? (a) Electric discharge machining (EDM) (b) Electrochemical machining (ECM) (c) Ultrasonic machining (USM) (d) Laser beam machining (LBM)

*Answer: (b) Electrochemical machining (ECM).*

ECM dissolves metal over the whole face of the tool at currents of thousands of amperes, so it removes metal fast. Typical figures from the standard table (Pandey and Shan) are about 15,000 mm³/min for ECM, 800 for EDM, 300 for USM and 0.1 for LBM.

- **(a) EDM:** about 800 mm³/min. Each spark removes only a tiny crater.
- **(c) USM:** about 300 mm³/min. It chips brittle material grain by grain.
- **(d) LBM:** about 0.1 mm³/min, the lowest. It is used for tiny holes, not bulk removal.

**Memory aid:** the order by removal rate is PAM > ECM > EDM > USM > CHM > EBM > AJM > LBM. If plasma arc machining is an option, it beats ECM.

**Q6. SSC JE Mechanical, 4 December 2023 (Paper II) · Topic 1.** In the gas welding process, a neutral flame contains \_\_\_\_\_\_ and \_\_\_\_\_\_ in equal proportions. (a) oxygen; propane (b) oxygen; propylene (c) oxygen; natural gas (d) oxygen; acetylene

*Answer: (d) oxygen; acetylene.*

A neutral flame is made when the torch supplies oxygen and acetylene in about a 1 : 1 ratio by volume. The rest of the oxygen for complete burning comes from the surrounding air. The inner cone reaches about 3200 °C. It is used for most steels, cast iron, copper and aluminium.

- **(a), (b), (c):** propane, propylene and natural gas are fuel gases used for oxy-fuel cutting and heating. They burn cooler and need much more oxygen than 1 : 1; propane needs about 4 to 4.5 volumes. In exam questions, "neutral flame" always means oxy-acetylene.

**Memory aid:** oxygen and acetylene 1 : 1 gives a neutral flame. Extra oxygen gives an oxidising flame (brass, bronze). Extra acetylene gives a carburising flame (high-carbon steel, hard-facing).

**Q7. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** Tool life is most effected by: (a) Cutting speed (b) Tool geometry (c) Microstructure of material being cut (d) Feed and depth

*Answer: (a) Cutting speed.*

In the extended Taylor equation, VTⁿ f^a d^b = C, the exponents show that tool life is most sensitive to speed, then feed, then depth of cut. Speed raises the temperature at the tool–chip contact, and wear rises sharply with temperature. With n = 0.125 for HSS, doubling the speed cuts tool life to (1/2)⁸ = 1/256 of its value.

- **(b) Tool geometry:** rake, clearance and nose radius do matter, but within normal values they change tool life far less than speed does.
- **(c) Microstructure:** hard inclusions in the work wear the tool, but for any given material, speed is still the main factor.
- **(d) Feed and depth:** feed comes second and depth third.

**Memory aid:** speed, then feed, then depth. The same order applies to the heat generated.

**Q8. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 3.** What is the Shrink rule used for in casting processes? (a) Machining allowance (b) Draft allowance (c) Expansion allowance (d) Contraction allowance

*Answer: (d) Contraction allowance.*

A shrink rule, or pattern maker's rule, is a scale whose "metre" is longer than a true metre by the shrinkage of the metal to be cast: about 10 mm per metre for grey cast iron and about 20 mm per metre for steel. The pattern maker reads it like a normal scale, and the pattern comes out oversized by exactly the contraction allowance.

- **(a) Machining allowance:** extra metal left on surfaces that will be machined. It is added as a fixed thickness, not through a special scale.
- **(b) Draft allowance:** a taper on vertical faces so the pattern can be drawn out of the sand.
- **(c) Expansion allowance:** there is no such pattern allowance. The negative allowance is the shake (rapping) allowance, which makes the pattern slightly smaller.

**The trap:** (c) sounds right because the pattern is made bigger. The allowance is named after its cause, the contraction of the cooling metal.

**Q9. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 6.** A machining process used to create flat horizontal surfaces: (a) slab milling (b) form milling (c) straddle milling (d) face milling

*Answer: (a) slab milling.*

Slab (plain) milling uses a cylindrical cutter with teeth on its periphery, mounted on a horizontal arbor. It produces a flat surface parallel to the cutter axis, so on a horizontal milling machine the surface is horizontal. It is the standard way to mill a wide flat horizontal surface.

- **(b) form milling:** a cutter with a shaped profile copies that shape, for example convex or concave edges and gear teeth.
- **(c) straddle milling:** two side-and-face cutters on one arbor machine two parallel vertical faces at once.
- **(d) face milling:** also gives a flat surface, but one perpendicular to the cutter axis. On a horizontal machine that face is vertical.

**The trap:** face milling on a vertical machine also makes horizontal surfaces. The textbook phrase is "plain or slab milling produces flat horizontal surfaces", so pick slab milling when it is offered.

**Q10. ISRO VSSC Technical Assistant (Mechanical), 30 July 2023 · Topic 8.** Which of the following code will change specified input values in metric units (millimetres) in CNC machine tool? (a) G20 (b) G21 (c) G90 (d) G25

*Answer: (b) G21.*

G21 tells the control to read all dimensions in the program as millimetres. It is modal, so it stays in force until G20 is given.

- **(a) G20:** inch input, the partner of G21.
- **(c) G90:** absolute programming. G91 is incremental.
- **(d) G25:** not a units code. On Fanuc controls it relates to spindle speed fluctuation detection.

**Memory aid:** the bigger number is the smaller unit. G21 is millimetres and G20 is inches.

**Q11. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 4.** Among the conventional machining processes, maximum specific energy is consumed in: (a) Turning (b) drilling (c) Planing (d) Grinding

*Answer: (d) Grinding.*

Specific energy is the energy needed to remove one cubic millimetre of metal. In grinding it is often 10 or more times higher than in turning. The chips are tiny (the size effect), the grains cut with large negative rake, and many grains only rub or plough without cutting. For steel, turning needs about 2 to 9 J/mm³, while grinding can need 15 to 70 J/mm³.

- **(a) Turning:** a single-point tool cuts large chips with positive or small rake, so it uses the least energy per unit volume.
- **(b) Drilling:** higher than turning because of rubbing at the chisel edge and poor chip removal, but still far below grinding.
- **(c) Planing:** similar to turning, a single-point tool with large chips.

**Memory aid:** the smaller the chip, the higher the specific energy. Grinding has the smallest chips.

**Q12. RPSC Lecturer (Mechanical) 2011 · Topic 2.** At what rpm should a lathe be run to give a cutting speed of 20 m/min when turning a rod of diameter 40 mm? (a) 100 rpm (b) 160 rpm (c) 200 rpm (d) 250 rpm

*Answer: (b) 160 rpm.*

N = 1000V/(πD) = (1000 × 20)/(π × 40) = 20,000/125.7 = 159 rpm, about 160 rpm.

- **(a) 100 rpm:** gives V = π × 40 × 100/1000 = 12.6 m/min.
- **(c) 200 rpm:** gives 25.1 m/min.
- **(d) 250 rpm:** gives 31.4 m/min.

**Memory aid:** for D = 40 mm, πD ≈ 126 mm per revolution. 20 m is 20,000 mm, and 20,000/126 ≈ 159. Always turn metres into millimetres before dividing.

**Q13. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 5.** Hot forging is used for producing: (a) Piston (b) Crankshaft (c) Carburettor (d) All the above

*Answer: (b) Crankshaft.*

A crankshaft carries changing bending and twisting loads, so it needs high fatigue strength. Hot closed-die forging gives continuous grain flow that follows the shape of the crank, which is what gives that strength. Connecting rods, gears and spanners are forged for the same reason.

- **(a) Piston:** made of aluminium alloy, usually cast in permanent moulds. Racing pistons are sometimes forged, but the textbook answer is casting.
- **(c) Carburettor:** a complex, thin-walled body full of passages, made by pressure die casting.
- **(d) All the above:** wrong, because the piston and carburettor are cast.

**The trap:** (d) is tempting because all three are engine parts. Ask which part needs grain flow for fatigue strength. That is the crankshaft.

**Q14. MP ITI Training Officer (Welder), 7 October 2024 (Shift 2) · Topic 1.** What is a key difference between TIG welding and MIG welding? (a) TIG welding uses a consumable electrode; MIG welding does not (b) MIG welding uses a non-consumable electrode; TIG welding does not (c) TIG welding requires a filler metal, while MIG welding does not (d) TIG welding uses a non-consumable electrode; MIG welding uses a consumable electrode

*Answer: (d) TIG welding uses a non-consumable electrode; MIG welding uses a consumable electrode.*

TIG (GTAW) uses a tungsten electrode, which melts at about 3400 °C and does not melt in the arc. Filler, when needed, is a separate rod fed by hand. MIG (GMAW) uses a wire fed continuously from a spool. The wire is the electrode, and it melts to become the filler. Both use inert shielding gas such as argon or helium.

- **(a) and (b):** both swap the two processes.
- **(c):** this is the reverse of the truth. TIG can weld thin sheet with no filler at all, while MIG always adds metal, because its electrode wire is the filler.

**Memory aid:** the names tell you. The Tungsten in TIG does not melt. The Metal wire in MIG does.

**Q15. BEL Probationary Engineer (Mechanical), 31 May 2025 · Topic 3.** Which type of pattern contains removable sections or pieces that are inserted into the main pattern to create complex features in the casting and can be removed from the mold after pattern withdrawal? (a) Loose Piece pattern (b) Gated Pattern (c) Cope and Drag Pattern (d) Shell Pattern

*Answer: (a) Loose Piece pattern.*

A boss or projection that would lock the pattern in the sand is made as a separate loose piece, held by a pin or dowel. The main pattern is drawn out first, leaving the loose piece in the sand. The loose piece is then moved sideways into the cavity and lifted out.

- **(b) Gated pattern:** several small patterns joined by gates and runners as one unit, for making many small castings at once.
- **(c) Cope and drag pattern:** a split pattern mounted on two plates, so the cope and drag can be rammed separately. It is used for large castings.
- **(d) Shell pattern:** a hollow pattern made in halves, used for pipe work and drainage fittings.

**Memory aid:** whenever a feature would stop the pattern coming out of the sand (an undercut), think loose piece.

**Q16. SSC JE Mechanical, 7 June 2024 (Shift 2, Paper I) · Topic 6.** A quick return motion mechanism used in shaper machine (a) Maximize the time of forward stroke (b) Reduce the motion of the machine (c) Complete cutting stroke as quickly as possible (d) Complete return stroke as quickly as possible

*Answer: (d) Complete return stroke as quickly as possible.*

A shaper cuts only on the forward stroke, so the return stroke is wasted time. In the crank and slotted lever mechanism, the crank pin turns through a larger angle during cutting and a smaller angle during return. The ram therefore comes back faster than it goes out. A typical cutting-to-return time ratio is about 3 : 2.

- **(a):** the cutting stroke does take a larger share of each cycle, but that is a result. The purpose is to cut down idle time, and the cutting speed is set by the tool and work, not maximised.
- **(b):** the ram still travels the full stroke both ways. Nothing is reduced.
- **(c):** the cutting stroke must run at the correct cutting speed. Rushing it would burn the tool.

**The trap:** (a) and (d) describe the same timing from two sides. The mechanism exists to save time on the idle stroke, so choose the return stroke.

**Q17. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** A good lubricant for thread cutting operation is: (a) Graphite (b) Mineral lard oil (c) Emulsified oil (d) White lead

*Answer: (b) Mineral lard oil.*

Thread cutting and tapping run slowly with heavy contact along long cutting edges. The need is lubrication, to stop the chip welding to the tool and to give a clean thread, not cooling. Mineral oil blended with lard oil (an animal fat) has the oiliness and film strength needed.

- **(a) Graphite:** a dry solid lubricant used in forging and press work, not as a cutting fluid.
- **(c) Emulsified oil:** soluble oil is mostly water, so it is mainly a coolant. It suits fast turning and grinding, where heat is the problem.
- **(d) White lead:** a paste used on the lathe dead centre and in some drawing work, not for cutting threads.

**Memory aid:** slow, heavy cuts (threading, tapping, broaching, gear cutting) need straight cutting oils. Fast, hot cuts (turning, grinding) need soluble oil.

**Q18. JKSSB JE Mechanical 2015 · Topic 7.** The size of abrasive grains in an abrasive jet machining ranges from (a) 1 to 10 microns (b) 10 to 50 microns (c) 50 to 100 microns (d) 100 to 500 microns

*Answer: (b) 10 to 50 microns.*

Abrasive jet machining blows fine aluminium oxide or silicon carbide particles, typically about 25 µm across, in a jet of dry air at 150 to 300 m/s. The jet passes through a small tungsten carbide or sapphire nozzle and chips away hard, brittle material.

- **(a) 1 to 10 µm:** too fine. The powder flows badly, clogs, and each grain removes almost nothing.
- **(c) 50 to 100 µm and (d) 100 to 500 µm:** too coarse. They would block the small nozzle and give a rough cut. These are grit-blasting sizes.

**Memory aid:** AJM uses a grain of about 25 µm in a jet of 150 to 300 m/s.

**Q19. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 9.** The powder metallurgy part has tiny capillary pores all over which can be filled by oil or other lubricant is called: (a) Repressing (b) Impregnation (c) Infiltration (d) Sintering

*Answer: (b) Impregnation.*

Sintered parts keep a network of fine pores. Soaking them in hot oil fills the pores by capillary action. This is impregnation, and it gives self-lubricating bronze bearings: when the bearing warms up, oil seeps out to the surface, and when it cools, the oil is drawn back in.

- **(a) Repressing:** pressing the part again after sintering to raise density and improve size accuracy.
- **(c) Infiltration:** filling the pores with a molten metal of lower melting point, such as copper into an iron part, to raise strength.
- **(d) Sintering:** heating the pressed green compact below its melting point so the particles bond.

**Memory aid:** impregnate with oil, a non-metal. Infiltrate with a metal.

**Q20. ISRO IPRC Technical Assistant (Mechanical), 21 April 2016 · Topic 5.** Blanking and Piercing operations can be performed simultaneously in (a) Simple die (b) Compound die (c) Progressive die (d) Combination die

*Answer: (b) Compound die.*

A compound die does two or more cutting operations at one station in one stroke. A washer is the classic example: the outer edge is blanked and the hole is pierced together. Because both happen in one position, the hole and the outer edge are concentric.

- **(a) Simple die:** one operation per stroke.
- **(c) Progressive die:** several operations at successive stations as the strip moves forward. It pierces and blanks in each stroke, but at different stations on different parts of the strip.
- **(d) Combination die:** combines a cutting operation with a forming one, such as blanking and drawing, in one stroke.

**The trap:** a progressive die also pierces and blanks in every stroke. "Simultaneously" means at one station, which is the compound die.

**Q21. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 1.** Seam welding is a (a) Single spot welding process (b) Arc welding process (c) A type of stud welding (d) Continuous spot welding process

*Answer: (d) Continuous spot welding process.*

In resistance seam welding, two copper-alloy wheel electrodes roll along the lapped sheets. Current pulses make overlapping weld spots, giving a leak-tight seam. It is used for fuel tanks, cans and radiators.

- **(a):** a single spot is made by spot welding, with rod-shaped electrodes.
- **(b):** there is no arc. The heat comes from the resistance of the joint, I²Rt.
- **(c):** stud welding joins the end of a stud to a plate, usually with an arc.

**Memory aid:** spot welding makes one nugget, seam welding makes overlapping nuggets from rollers, and projection welding makes nuggets at small pressed bumps.

**Q22. BPSC AE Paper VI (Mechanical) 2024 · Topic 4.** Removing dull grains in order to make grinding wheel sharp is known as (a) Dressing (b) Glazing (c) Trueing (d) Loading

*Answer: (a) Dressing.*

Dressing breaks away dull grains and clogged material from the wheel face to expose fresh, sharp grains. It is done with a star-wheel dresser, an abrasive stick or a diamond.

- **(b) Glazing:** the fault itself. The grains have worn smooth and shiny because the bond is too hard to release them.
- **(c) Trueing:** restoring the wheel's shape and making it run true with the spindle, usually with a diamond. It sharpens the wheel as a side effect, but its purpose is geometry.
- **(d) Loading:** another fault, where chips of soft metal such as aluminium clog the pores of the wheel. It is also cured by dressing.

**Memory aid:** glazing and loading are faults. Dressing cures both. Trueing fixes the shape.

**Q23. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 2.** Which of the following is NOT a lathe turning operation? (a) Threading (b) Sawing (c) Facing (d) Grooving

*Answer: (b) Sawing.*

Sawing is done on a power hacksaw, band saw or circular saw. On a lathe, the nearest operation is parting off, which uses a narrow parting tool, not a saw.

- **(a) Threading:** cutting a thread with a single-point tool, with the carriage driven by the lead screw.
- **(c) Facing:** feeding the tool across the end of the work to make it flat.
- **(d) Grooving:** plunging a form tool radially to cut a groove, for example for a circlip or a thread run-out.

**Memory aid:** lathe operations include turning, facing, taper turning, threading, knurling, grooving, parting, drilling, boring and reaming. Sawing, broaching and gear hobbing need other machines.

**Q24. NCL Assistant Foreman Trainee (Mechanical), 4 March 2024 (Shift 1) · Topic 3.** Which property of the molding sand is the ability to allow gases, water vapor and air to pass through it? (a) Green sand strength (b) Permeability (c) Cohesiveness (d) Refractoriness

*Answer: (b) Permeability.*

When hot metal fills the mould, moisture in the sand turns to steam, and air and other gases must escape through the sand. If the sand is not permeable enough, the gas is trapped in the metal as blowholes.

- **(a) Green strength:** the strength of moist, rammed sand to hold the mould's shape.
- **(c) Cohesiveness:** the grains holding together (the bond). Adhesiveness is sticking to the moulding box.
- **(d) Refractoriness:** standing the pouring temperature without fusing.

**Doubt: why not just ram the sand harder for a stronger mould?** Harder ramming raises strength but closes the gaps between grains, so permeability falls. That is why moulders also pierce vent holes with a vent rod.

**Q25. MPSC Assistant Motor Vehicle Inspector 2002 (Paper 3) · Topic 6.** The device, used for dividing the periphery of the gear blank into a desired number of equal parts, is (a) Combination head (b) Dividing head (c) Multiple head (d) Periphery head

*Answer: (b) Dividing head.*

The dividing (indexing) head mounts on the milling machine table. Its crank turns a 40-tooth worm wheel, so one turn of the crank rotates the work by 1/40 of a turn. For simple indexing, crank turns = 40/N. For a 25-tooth gear, 40/25 = 1 3/5, which is one full turn plus 9 holes on a 15-hole circle.

- **(a) Combination head:** not a milling attachment. A combination set, with its square head, centre head and protractor head, is a marking-out tool.
- **(c) Multiple head and (d) Periphery head:** these are not standard devices.

**Memory aid:** dividing head ratio 40 : 1, crank turns = 40/N.

## Mock 2

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 10 questions come from Kerala PSC papers (2023, 2025 and 2026), 1 from SSC JE, 5 from RRB JE and 9 from other exams.

**Q1. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 2.** Taylor's tool life equation is (a) VTⁿ = C (b) V × T = Cⁿ (c) V/T = Cⁿ (d) T/V = C

*Answer: (a) VTⁿ = C.*

V is the cutting speed in m/min, T is the tool life in minutes, n is an exponent that depends mainly on the tool material, and C is a constant: the cutting speed that gives a tool life of one minute. Because the product stays constant, a higher speed must give a shorter life.

- **(b) V × T = Cⁿ:** this would mean n = 1 for every tool, and the exponent is on the wrong side. It is not Taylor's form.
- **(c) V/T = Cⁿ:** a ratio means tool life rises with speed, which is impossible.
- **(d) T/V = C:** this also makes tool life grow as speed goes up.

**Memory aid:** Taylor's equation is a product, VTⁿ = C. Any form with a ratio says faster cutting makes the tool last longer, which tells you it is wrong.

**Q2. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 3.** The casting process that employs a permanent metal or ceramic mould, is \_\_\_\_\_\_. (a) die casting (b) centrifugal casting (c) sand casting (d) investment casting

*Answer: (a) die casting.*

Die casting uses a reusable steel die. Metal is either forced in under pressure (pressure die casting) or poured in by gravity (gravity die or permanent mould casting). One die makes thousands of castings.

- **(b) centrifugal casting:** the defining feature is spinning the mould to feed the metal. The mould may be metal or sand-lined, so permanence is not what defines it.
- **(c) sand casting:** the mould is broken up to remove each casting.
- **(d) investment casting:** it does use a ceramic shell, but the shell is broken off every time. The mould and the wax pattern are both used once only.

**The trap:** investment casting has a ceramic mould too. The key word is "permanent", and only die casting reuses its mould.

**Q3. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 1.** Which one of the following is the strongest among the following brazing joints? (a) Inclined (b) Lap (c) Butt (d) V-butt

*Answer: (b) Lap.*

The brazing filler, a brass or silver alloy, is weaker than the parent metal, and it flows by capillary action into a narrow gap of a few hundredths of a millimetre. The strength of the joint depends on how much filler area is loaded in shear. A lap joint gives the largest area. With an overlap of about three times the sheet thickness, the joint can be as strong as the parent metal.

- **(a) Inclined (scarf):** the sloping faces give more area than a plain butt, but much less than a lap.
- **(c) Butt:** the filler area is only the cross-section of the part, so it is the weakest.
- **(d) V-butt:** a V groove suits fusion welding, where the groove is filled with melted metal. Brazing filler cannot bridge a wide groove.

**Memory aid:** brazed and soldered joints are designed as laps loaded in shear, with an overlap of about 3t.

**Q4. RRB JE CBT-2 Mechanical re-exam, 4 June 2025 · Topic 6.** In the up-milling process, the metal is removed in the form of small chips by a cutter rotating \_\_\_\_\_. (a) against the direction of the travel of the workpiece (b) perpendicular to the direction of the travel of the workpiece (c) in the same direction of the feed of the workpiece (d) Metal will not be removed in the milling process.

*Answer: (a) against the direction of the travel of the workpiece.*

In up milling (conventional milling), where the tooth meets the work it moves against the feed. Each chip starts at zero thickness and ends at its thickest. The cutting force tends to lift the work, so it must be clamped firmly. It is safe on machines with backlash in the table feed screw.

- **(b):** the cutter's axis is at right angles to the feed, but at the cutting point the teeth can only move with the feed or against it.
- **(c):** this is down (climb) milling. The chip starts thick, the force presses the work down, and the finish is better, but the machine needs a backlash eliminator.
- **(d):** milling plainly removes metal.

**Memory aid:** up milling means up against the feed, with the chip going thin to thick. Down milling goes with the feed, thick to thin.

**Q5. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1) · Topic 4.** Glazing in grinding wheels can be decreased by- (a) Using a harder wheel or by decreasing the wheel speed (b) Using a harder wheel or by increasing the wheel speed (c) Using a softer wheel or by increasing the wheel speed (d) Using a softer wheel or by decreasing the wheel speed

*Answer: (d) Using a softer wheel or by decreasing the wheel speed.*

A glazed wheel has dull grains that the bond will not let go of. The face turns shiny, the wheel rubs instead of cutting, and the work burns. The cure is to let dull grains break out sooner. A softer grade does this directly. A lower wheel speed also helps, because each grain then takes a bigger bite, so the force on it is larger and it breaks free sooner.

- **(a) and (b):** a harder wheel holds dull grains even longer, so glazing gets worse.
- **(c):** softer is right, but a higher wheel speed makes the wheel act harder and undoes the gain.

**Memory aid:** a wheel acts harder when the wheel speed goes up or the work speed goes down. To make it act softer, slow the wheel, speed up the work, or use a softer grade.

**Q6. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 5.** In sheet metal section, sheet means (a) Less than 6 mm (b) Less than 10 mm (c) Less than 2 mm (d) Less than 20 mm

*Answer: (a) Less than 6 mm.*

Flat rolled stock thinner than about 6 mm is called sheet (or strip when it is narrow). From 6 mm upwards it is called plate.

- **(b) and (d):** 10 mm and 20 mm are plate thicknesses.
- **(c):** 2 mm is too low a limit. Sheets of 3 to 5 mm are common, for example in tanks and vehicle frames.

**Memory aid:** 6 mm is the dividing line. Below it is sheet, above it is plate.

**Q7. UPPSC AE Mechanical 2013 (Paper I) · Topic 2.** Crater wear occurs mainly on the (a) nose part, front and side relief faces of the cutting tool (b) face of the cutting tool at a short distance from the cutting edge only (c) cutting edge only (d) front face only

*Answer: (b) face of the cutting tool at a short distance from the cutting edge only.*

The chip slides over the rake face, and the hottest spot is a little behind the cutting edge. At high speeds, tool material diffuses into the chip there and a hollow, the crater, forms. A thin land is left between the edge and the crater. If the crater grows until it reaches the edge, the edge breaks.

- **(a):** wear on the relief (flank) faces and the nose comes from rubbing against the machined surface. That is flank wear.
- **(c):** wear or chipping right at the edge is edge chipping, not crater wear.
- **(d):** the crater does not cover a whole face. It is a local hollow set back from the edge.

**Memory aid:** flank wear comes from rubbing against the work and is worst at low speed. Crater wear comes from the hot chip on the rake face and is worst at high speed.

**Q8. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** If subscript 1 denotes the top of the sprue and subscript 2 denotes the bottom, assuming that pressure at the top of the sprue is equal to the pressure at the bottom and that there are no frictional losses, the relationship between height h and cross sectional area A at any point in the sprue is given by (a) A₁/A₂ = h₁/h₂ (b) A₁/A₂ = h₂/h₁ (c) A₁/A₂ = √(h₁/h₂) (d) A₁/A₂ = √(h₂/h₁)

*Answer: (d) A₁/A₂ = √(h₂/h₁).*

With h measured down from the metal level in the pouring basin, Bernoulli gives v = √(2gh). Continuity gives A₁v₁ = A₂v₂, so A₁/A₂ = v₂/v₁ = √(h₂/h₁). Since h₂ is larger than h₁, A₂ is smaller than A₁: the sprue tapers towards the bottom. Without the taper, the falling stream would pull away from the walls and suck in air (aspiration).

- **(a):** no square root, and upside down.
- **(b):** forgets the square root. Velocity varies with √h, not with h.
- **(c):** upside down. It would make the bottom wider than the top.

**Memory aid:** a stream of water from a tap gets narrower as it falls. The sprue copies that shape. For example, with h₁ = 50 mm and h₂ = 200 mm, A₁/A₂ = √4 = 2.

**Q9. UPPSC Lecturer (Mechanical) 2021 (Paper I) · Topic 7.** The dielectric fluid used in the electro discharge machining is (a) Sodium hydroxide (b) Water (c) Aqueous salt solution (d) Kerosene

*Answer: (d) Kerosene.*

EDM needs an insulating liquid. It breaks down only when the gap becomes very small, giving a sharp controlled spark, and then recovers its insulation at once. It also cools the work and flushes away debris. Kerosene or a similar hydrocarbon oil is the standard dielectric for die-sinking EDM. Wire EDM uses deionised water.

- **(a) and (c):** sodium hydroxide and salt solutions conduct electricity. They are ECM electrolytes. With them, current flows all the time and no spark forms.
- **(b) Water:** ordinary water conducts too well. Only deionised water is used, and that is in wire EDM.

**The trap:** EDM uses an insulating dielectric. ECM uses a conducting electrolyte. Mixing them up is the most common mistake in this topic.

**Q10. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 1.** The function of rectifier in Welding is (a) Reducing voltage (b) Converting AC to DC (c) Reducing ampere (d) Converting DC to AC

*Answer: (b) Converting AC to DC.*

A welding rectifier set has a transformer that steps the mains voltage down to welding voltage, followed by a bank of silicon diodes or thyristors that converts the AC to DC. DC gives a steadier arc and lets the welder choose the polarity.

- **(a) Reducing voltage:** that is the transformer's job, for example 415 V mains down to an open-circuit voltage of 60 to 80 V.
- **(c) Reducing ampere:** the current is set by the regulator (taps, a moving core or thyristor control), not by the rectifier.
- **(d) Converting DC to AC:** that happens in an inverter power source, at high frequency, before the output is rectified again.

**Memory aid:** a transformer gives AC in and lower-voltage AC out. A rectifier gives AC in and DC out. A motor-generator set makes DC directly.

**Q11. DSSSB JE Mechanical, 6 November 2019 (Shift 1) · Topic 2.** If cutting tool travel 1000 mm in the direction of feed motion with work piece rotational speed of 500 rpm and feed rate of 0.2 mm/rev, machining time in minutes will be: (a) 6 (b) 10 (c) 2 (d) 8

*Answer: (b) 10.*

t = L/(fN) = 1000/(0.2 × 500) = 1000/100 = 10 min. The tool advances 0.2 mm every revolution and makes 500 revolutions a minute, so it moves 100 mm a minute.

- **(c) 2:** this is L/N = 1000/500, which forgets the feed.
- **(a) 6 and (d) 8:** no single slip in the formula gives these values.

**Memory aid:** feed × rpm gives millimetres per minute. Length divided by that gives minutes.

**Q12. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 8.** The NC system which is applicable to a milling machine is called the (a) Point to point system (b) Continuous path system (c) Zig-zag machining system (d) Contour system

*Answer: (b) Continuous path system.*

A milling cutter cuts while the table moves, so the control must manage the path and the feed rate all along the way, using linear and circular interpolation. That is continuous path control.

- **(a) Point to point:** the tool is moved to a position and then works there, as in drilling, boring and punching. The path between points is not controlled.
- **(c) Zig-zag machining:** a tool-path pattern used for clearing pockets, not a type of NC system.
- **(d) Contour system:** many books call continuous path control "contouring", so this option is close. The commission's provisional key gives (b), the standard name of the system.

**The trap:** if "continuous path" and "contour" both appear, choose continuous path, as the key does here.

**Q13. TNTRB Mechanical 2017 · Topic 5.** Spring back during the sheet metal operation is caused because of the: (a) Release of stored energy during elastic and plastic deformation (b) Release of stored energy during plastic deformation (c) Release of stored energy during elastic deformation (d) Excess energy that was utilized during the forming process

*Answer: (c) Release of stored energy during elastic deformation.*

When a sheet is bent, the outer fibres yield, but a band near the neutral axis stays elastic, and every fibre carries some elastic strain on top of its plastic strain. When the punch lifts, the elastic part recovers and the plastic part stays. So the bend opens up slightly. That is spring back.

- **(a) and (b):** the energy of plastic deformation turns into heat and into the metal's internal structure. It does not come back as a change of shape.
- **(d):** "excess energy" is not a physical cause of anything here.

**Memory aid:** spring back grows with yield strength divided by modulus and with bend radius divided by thickness. High-strength steel and large radii spring back most. The cures are overbending, bottoming (coining) the bend, and stretch bending.

**Q14. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 3.** Cores are employed in castings to (a) make desired recess in castings (b) Save moulding sand (c) Strengthen the casting (d) None of the above

*Answer: (a) make desired recess in castings.*

A core is a body of sand (or metal) set inside the mould to form holes, recesses and internal cavities that the pattern cannot form. Core prints on the pattern leave seats in the mould that hold the core in place.

- **(b):** cores are made of special core sand with binders. They do not save moulding sand.
- **(c):** a core makes the casting hollow by keeping metal out. It adds no strength.
- **(d):** wrong, because (a) is correct.

**Memory aid:** the pattern makes the outside and the core makes the inside. Core prints locate the core, and chaplets hold it where prints cannot.

**Q15. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1) · Topic 1.** Backhand technique in the oxy-acetylene welding process is also known as- (a) Rightward technique (b) Forward technique (c) Leftward technique (d) Middle hand technique

*Answer: (a) Rightward technique.*

For a right-handed welder, rightward welding goes from left to right. The flame points back at the finished weld and the filler rod follows the torch. It is used for plates thicker than about 5 mm, because it gives better penetration and uses less filler on thick work.

- **(b) Forward and (c) Leftward:** two names for the same technique, the opposite of backhand. It runs from right to left with the flame pointing ahead at the unwelded joint, and is used for thin plate.
- **(d) Middle hand:** not a standard term.

**Memory aid:** backhand, backward and rightward go together, for thick plate. Forehand, forward and leftward go together, for thin plate.

**Q16. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** Cutting speed equation of a milling cutter is (a) V = πDN/1000 m/sec (b) V = πDN/1000 mm/min (c) V = πD/N × 1000 m/min (d) V = πDN/1000 m/min

*Answer: (d) V = πDN/1000 m/min.*

With D in mm and N in rpm, πDN is the distance a point on the cutter's edge travels in a minute, in mm/min. Dividing by 1000 gives m/min.

- **(a) m/sec:** wrong unit. To get m/s you would divide by 60,000.
- **(b) mm/min:** πDN on its own is mm/min. Dividing by 1000 gives metres.
- **(c):** puts N in the denominator, which gives a speed that falls as the rpm rises.

**The trap:** in milling, D is the diameter of the cutter. In turning, it is the diameter of the work. In drilling, it is the diameter of the drill.

**Q17. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** Increasing the positive back rake angle will make the tool: (a) Weaker (b) Smoother (c) Harder (d) Stronger

*Answer: (a) Weaker.*

A larger positive rake makes the wedge behind the edge thinner, because the lip angle is 90° minus the rake minus the clearance. There is less metal to support the edge and carry away heat. Cutting force falls and finish improves, but the edge chips more easily.

- **(b) Smoother:** the cut may be smoother, but the tool itself does not become smoother.
- **(c) Harder:** hardness belongs to the tool material. Rake angle does not change it.
- **(d) Stronger:** the opposite. Zero or negative rake makes a stronger edge.

**Memory aid:** positive rake is sharp but weak, for soft ductile metals with HSS tools. Negative rake is blunt but strong, for hard metals, interrupted cuts and carbide or ceramic tools.

**Q18. BPSC Assistant Professor (Mechanical) 2022 · Topic 9.** When a cylinder is located in a V-block, then the number of degrees of freedom which are arrested is (a) 2 (b) 4 (c) 7 (d) 8

*Answer: (b) 4.*

Counting six degrees of freedom (three slides and three turns), the V-block stops the cylinder sliding in the two directions across its axis and tilting about those two directions. That is 4. The cylinder can still slide along its own axis and rotate about it, so 6 − 4 = 2 remain.

- **(a) 2:** this is the number left free, not the number arrested.
- **(c) 7:** more than the six freedoms counted here.
- **(d) 8:** the count you get if every motion is split into two senses (the 12-freedom count used with the 3-2-1 rule). The key uses the plain count of six.

**The trap:** reading (a) as the answer. The question asks for the freedoms arrested, not the ones left.

**Q19. NCL Assistant Foreman (Mechanical) Trainee, 27 December 2020 · Topic 5.** A 'two high rolling mill' consists of two rolls which rotate: (a) At the same speed and in same direction (b) At the same speed but in opposite direction (c) At different speeds and in same direction (d) At different speeds and in opposite direction

*Answer: (b) At the same speed but in opposite direction.*

One roll sits above the other. The top roll turns one way and the bottom roll the other, so at the gap both surfaces move with the stock and friction draws it in. Equal speeds keep both surfaces moving together, so the stock is squeezed without being sheared.

- **(a) and (c):** if both rolls turned the same way, one would push the stock in and the other would push it back out. It would not be drawn through.
- **(d):** unequal speeds would shear the stock. They are used only in special mills, not in a plain two-high mill.

**Memory aid:** a two-high mill has two rolls turning in opposite directions. A reversing two-high mill flips both rolls after each pass. A three-high mill needs no reversing: the stock goes one way below the middle roll and back above it.

**Q20. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 7.** In ultrasonic machining process, the metal removal rate will be higher for materials with (a) Higher toughness (b) Higher ductility (c) Lower toughness (d) Higher fracture strain

*Answer: (c) Lower toughness.*

In USM, the tool vibrates at about 20 kHz and hammers abrasive grains into the work, chipping off tiny pieces. Brittle materials with low toughness, such as glass, ceramics and germanium, crack and chip easily, so removal is fast. Ductile metals absorb the blows by deforming instead of chipping, so removal is slow.

- **(a), (b) and (d):** higher toughness, ductility and fracture strain all describe materials that deform rather than chip, so they give lower removal rates.

**Memory aid:** USM likes brittle work. That is also why its tool is made of a tough, ductile metal: the tool should not chip.

**Q21. RRB JE CBT-2 Mechanical, 30 August 2019 (Shift 1) · Topic 4.** Which of the following indicates the open structure of the grinding wheel? (a) 1 (b) 2 (c) 5 (d) 12

*Answer: (d) 12.*

The structure number shows how widely the grains are spaced. Low numbers are dense (grains close together) and high numbers are open, so 12 is the only clearly open value here. In a marking such as A 46 K 12 V, the 12 is the structure. Open wheels give more room for chips, so they suit soft, ductile metals and heavy cuts. Dense wheels suit hard, brittle materials and fine finishes.

- **(a) 1, (b) 2 and (c) 5:** all low numbers, so the grains are closely packed and the wheel is dense.

**Memory aid:** a bigger structure number means bigger gaps between grains.

**Q22. NHPC JE Mechanical, 6 April 2022 (Shift 2) · Topic 3.** \_\_\_\_\_\_ defect is caused due to casting getting solidified before the entire mould cavity is filled. (a) Hot tears (b) Cold shots (c) Misruns (d) Porosity

*Answer: (c) Misruns.*

A misrun is a casting left incomplete because the metal froze before reaching the end of the cavity. The causes are low pouring temperature, poor fluidity, thin sections, slow pouring and poor gating.

- **(a) Hot tears:** cracks that form when the cooling metal is held back from shrinking (by a hard mould or core) while it is still weak at high temperature.
- **(b) Cold shots:** small drops of metal, splashed and frozen early, trapped in the casting.
- **(d) Porosity:** small holes left by gas.

**The trap:** misrun and cold shut have the same causes. In a misrun, the cavity is not filled. In a cold shut, the cavity fills but two streams meet without fusing, leaving a seam.

**Q23. TANGEDCO AE Mechanical 2015 · Topic 1.** In which one of the following welding process vacuum environment is required? (a) Ultrasonic welding (b) Laser beam welding (c) Electron beam welding (d) Plasma arc welding

*Answer: (c) Electron beam welding.*

Electrons are scattered by air molecules, so the electron gun needs a high vacuum, and the work is usually welded inside a vacuum chamber. EBW gives deep, narrow welds with a small heat-affected zone and no contamination, which suits reactive metals such as titanium and zirconium.

- **(a) Ultrasonic welding:** a solid-state process using vibration and pressure, done in open air.
- **(b) Laser beam welding:** light travels through air, so laser welding is done in air with a shielding gas.
- **(d) Plasma arc welding:** a constricted arc with plasma gas and shielding gas, done in air.

**Memory aid:** EBW needs a vacuum, LBW does not. Electrons need a vacuum, light does not.

**Q24. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 2.** The type of surface produced by a taper turning operation performed on a lathe machine is: (a) curved one (b) conical (c) cylindrical (d) flat

*Answer: (b) conical.*

In taper turning, the tool moves at an angle to the work's axis, so the diameter changes evenly along the length. The surface is a frustum of a cone. A taper is turned by swivelling the compound rest, by setting over the tailstock, with a taper turning attachment, or with a form tool for short tapers.

- **(a) curved:** form turning or copy turning gives curved profiles.
- **(c) cylindrical:** straight turning, with the tool moving parallel to the axis.
- **(d) flat:** facing.

**Memory aid:** the half-angle of the taper is given by tan α = (D − d)/(2L).

**Q25. BHEL Artisan (Fitter), 8 October 2025 · Topic 6.** What is the primary purpose of counterboring? (a) To create internal threads (b) To provide a tapered entrance to the hole (c) To enlarge the diameter of the entire hole (d) To provide a flat seating surface around a hole

*Answer: (d) To provide a flat seating surface around a hole.*

Counterboring enlarges the top of an existing hole to a set depth with a flat bottom, so the head of a cap screw or bolt sits flat, flush or below the surface. The counterbore has a pilot that runs in the existing hole and keeps the step concentric.

- **(a):** internal threads are cut by tapping.
- **(b):** a tapered entrance is made by countersinking or chamfering.
- **(c):** enlarging the whole hole is done by drilling a larger size, boring or reaming.

**Memory aid:** a counterbore is a flat-bottomed step for a cap-screw head. A countersink is a cone for a countersunk screw. A spot face is a very shallow counterbore that just cleans up a seat on a rough casting.

## Mock 3

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 9 questions come from Kerala PSC papers (2025 and 2026), 5 from RRB JE and 11 from other exams.

**Q1. RRB JE CBT-2 Mechanical, 31 August 2019 · Topic 1.** The complete resistance spot weld cycle has been divided into \_\_\_\_ parts. (a) Four (b) Five (c) Three (d) Two

*Answer: (a) Four.*

The four parts are squeeze time (the electrodes close and pressure builds, with no current), weld time (current flows and the nugget melts), hold time (current off, pressure kept while the nugget freezes) and off time (the electrodes open and the work moves to the next spot). Each is set in cycles of the mains supply, where one cycle is 1/50 s.

- **(b) Five:** some machines add stages such as up-slope or post-heating, but the basic cycle has four.
- **(c) Three and (d) Two:** these leave out stages. Squeeze, weld and hold is only three. Without the off time, the work cannot be moved.

**Memory aid:** squeeze, weld, hold, off: S-W-H-O.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 2.** If φ is the shear angle and α is the rake angle, chip-thickness ratio r of an orthogonal cutting operation is given by (a) r = cos φ/sin (φ – α) (b) r = sin α/cos (φ – α) (c) r = sin φ/cos (φ – α) (d) r = cos α/sin (φ – α)

*Answer: (c) r = sin φ/cos (φ – α).*

The shear plane has one length, l. Seen from the uncut layer, t₁ = l sin φ. Seen from the chip, t₂ = l cos(φ − α). So r = t₁/t₂ = sin φ/cos(φ − α). Turned round, it gives tan φ = r cos α/(1 − r sin α).

- **(a) and (d):** these put cos over sin. With φ = 25° and α = 10° they give about 3.5 and 3.8, but r must be less than 1 because the chip is thicker than the uncut layer.
- **(b):** puts the rake angle in the numerator. It gives about 0.18 for the same angles and does not come from the geometry.

**Memory aid:** r is always less than 1. Test the options with φ = 25° and α = 10°: only (c) gives a sensible value, about 0.44.

**Q3. NRL GET Mechanical, 23 September 2021 (Shift 1) · Topic 3.** Which of the following acts as reservoir of molten metal and supply it as required to overcome porosity because of shrinkage while solidification? (a) Sprue (b) Riser (c) Pouring Basin (d) Runner

*Answer: (b) Riser.*

Metal shrinks as it freezes. A riser is a reservoir of hot metal joined to the heaviest section of the casting and made to freeze after it, because it has a larger volume-to-surface ratio (Chvorinov's rule). While the casting shrinks, the riser keeps feeding it liquid metal, so the shrinkage cavity forms in the riser instead of the casting. The riser is cut off afterwards.

- **(a) Sprue:** the vertical channel that carries metal down from the pouring basin to the runner.
- **(c) Pouring basin:** the cup at the top that receives the metal, calms the flow and holds back slag.
- **(d) Runner:** the horizontal channel that carries metal to the gates.

**Memory aid:** metal flows pouring basin, sprue, sprue well, runner, gate, cavity. The riser is not on that path. It feeds the casting after the cavity is full. An open riser is open at the top, and a blind riser is closed inside the mould.

**Q4. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** Which of the following correctly defines the function of planer? (a) The tool moving across the work (b) The tool moving on the work in horizontal direction (c) The work is supported on the table and tool is stationary (d) The tool moving in rotational direction clockwise and anticlockwise

*Answer: (c) The work is supported on the table and tool is stationary.*

In a planer, heavy work is clamped on a long table that moves back and forth under a fixed tool. The tool is fed sideways a little between strokes. It is used for large, heavy jobs such as machine beds.

- **(a) and (b):** these describe a shaper, where the ram carries the tool across fixed work.
- **(d):** a rotating tool belongs to milling or drilling.

**Memory aid:** in a shaper, the tool moves and the work stays still, for small jobs. In a planer, the work moves and the tool stays still, for big jobs.

**Q5. DRDO CEPTAM STA-B (Mechanical), 15 June 2026 · Topic 5.** The process of punching a hole in a sheet metal is called (a) Bending (b) Piercing (c) Blanking (d) Deep drawing

*Answer: (b) Piercing.*

In piercing (punching), the slug pushed out is scrap, and the sheet with the hole is the product. The punch is made to the hole size and the clearance goes on the die.

- **(a) Bending:** a forming process. Nothing is cut.
- **(c) Blanking:** the same cut, but the piece pushed out is the product. The die is made to the blank size and the clearance goes on the punch.
- **(d) Deep drawing:** forms a cup from a flat blank.

**Memory aid:** blanking keeps the piece, piercing keeps the sheet. For a blank, the die sets the size. For a hole, the punch sets the size.

**Q6. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 1) · Topic 4.** Which of the following wheels supports the workpiece in internal centreless grinding operation? (a) Pressure roller, supporting roller and regulating wheel (b) Only pressure roller (c) Only supporting roller (d) Only regulating wheel

*Answer: (a) Pressure roller, supporting roller and regulating wheel.*

In internal centreless grinding, a ring such as a bearing race is held from the outside by three rolls. The regulating wheel turns it, the supporting roll holds it from below, and the pressure roll keeps it pressed against both. The grinding wheel works inside the bore, so the bore comes out concentric with the outside.

- **(b), (c) and (d):** a single roll cannot hold a ring in place. It needs support at three points.

**Memory aid:** external centreless grinding uses the grinding wheel, the regulating wheel and a work rest blade. Internal centreless grinding uses a regulating wheel, a support roll and a pressure roll.

**Q7. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 7.** The machining process in which the metal of work piece is dissolved is: (a) Chemical machining (b) Ultrasonic machining (c) Electro discharge machining (d) Electro chemical machining

*Answer: (d) Electro chemical machining.*

In ECM, the work is the anode and the tool is the cathode, with an electrolyte such as sodium chloride solution pumped fast through the gap. Metal atoms leave the work as ions (anodic dissolution, following Faraday's law) and are carried away as a hydroxide sludge. The tool's shape is copied into the work.

- **(a) Chemical machining:** also removes metal by chemical attack, using an acid or alkali etchant, so it is the closest wrong answer. The key takes ECM, the process textbooks describe by dissolution of the work.
- **(b) Ultrasonic machining:** removes material by mechanical chipping with abrasive grains.
- **(c) Electro discharge machining:** removes metal by melting and vaporising it with sparks.

**The trap:** "dissolved" points to ECM's anodic dissolution. If the question had said "etched", the answer would be chemical machining.

**Q8. UPRVUNL JE Mechanical, 25 October 2021 (Shift 2) · Topic 2.** \_\_\_\_\_ operation in a lathe is used for producing a serrated surface. (a) Turning (b) Knurling (c) Taper-turning (d) Facing

*Answer: (b) Knurling.*

A knurling tool carries hardened rollers with a ridged pattern. Pressed against the rotating work, it pushes the metal into straight or diamond-shaped ridges. Nothing is cut away. Knurling gives grip on handles, gauges and thumbscrews, and can raise a diameter slightly for a press fit. It is done at a low speed, about a third of the turning speed, with plenty of oil.

- **(a) Turning:** gives a smooth cylindrical surface.
- **(c) Taper-turning:** gives a smooth conical surface.
- **(d) Facing:** gives a flat end surface.

**Memory aid:** knurling is forming, not cutting. It needs low speed, high pressure and oil. The patterns are straight, diagonal and diamond, in fine, medium and coarse pitches.

**Q9. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 1.** In solid-state welding the contamination layers between the surfaces to be welded are removed by: (a) Alcohol (b) Plastic deformation (c) Sand blasting (d) Water jet

*Answer: (b) Plastic deformation.*

Solid-state processes (cold pressure, friction, forge, roll, explosive and ultrasonic welding) do not melt the metal. Pressure and movement deform the surfaces plastically. This breaks up the oxide films and spreads them out, so clean metal meets clean metal and the atoms bond.

- **(a), (c) and (d):** cleaning beforehand helps, but a fresh oxide film forms in seconds in air. Only deformation during the weld exposes clean metal at the moment of bonding.

**Memory aid:** in friction welding, the flash squeezed out of the joint carries the oxides away. The deformation does the cleaning.

**Q10. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** Ornaments are cast by: (a) Die casting (b) Pressed casting (c) Gravity casting (d) Continuous casting

*Answer: (b) Pressed casting.*

In pressed (Corthias) casting, metal is poured into an open split mould and a core or plunger is pushed in, forcing the metal against the walls. The extra metal is pushed out. This gives thin-walled hollow castings such as ornaments, lamp bases and statuettes.

- **(a) Die casting:** high-pressure injection for engineering parts such as carburettor bodies and housings.
- **(c) Gravity casting:** a general term for pouring under gravity. It is not the special method for hollow ornaments.
- **(d) Continuous casting:** makes long bars, billets and slabs.

**Memory aid:** hollow decorative pieces are made by slush casting or pressed casting. Jewellery with fine detail is made by investment casting.

**Q11. TSPSC AEE Mechanical 2015 (Paper II) · Topic 8.** The term ATC in CNC machine tool means (a) Automatic Tool control (b) Automatic Tool Changer (c) Automatic Table Contour (d) Automatic Tool Coding

*Answer: (b) Automatic Tool Changer.*

An ATC is a tool magazine (a drum or chain) with an arm that swaps tools between the magazine and the spindle when the program calls for it. It cuts idle time and is a defining feature of a machining centre.

- **(a), (c) and (d):** none of these is a standard term.

**Memory aid:** an ATC is called with M06 and a T number. An APC (automatic pallet changer) swaps the workpieces instead.

**Q12. ISRO Scientist (Mechanical), 7 January 2024 · Topic 6.** A face milling operation is carried out with a 100 mm diameter milling cutter having 4 teeth and spindle speed of 300 rpm. If the feed per tooth is 0.125 mm, what is the table feed in mm/min? (a) 90 mm/min (b) 120 mm/min (c) 150 mm/min (d) 180 mm/min

*Answer: (c) 150 mm/min.*

Table feed = feed per tooth × number of teeth × rpm = 0.125 × 4 × 300 = 150 mm/min. The diameter is not needed for the feed. It gives only the cutting speed, π × 100 × 300/1000 = 94 m/min.

- **(a) 90:** close to the cutting speed of 94 m/min, which is a different quantity in different units.
- **(b) 120 and (d) 180:** these do not come from the given values.

**The trap:** the 100 mm diameter is extra information. Table feed does not depend on it.

**Q13. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 5.** The primary rolling operation used to manufacture the spherical balls for ball bearings (a) profile rolling (b) ring rolling (c) transverse rolling (d) skew rolling

*Answer: (d) skew rolling.*

In skew rolling, two rolls with continuous helical grooves are set with their axes slightly inclined to each other. A round bar fed between them is formed into balls and parted off continuously.

- **(a) profile rolling:** grooved rolls give a constant cross-section, such as rails, channels and I-sections.
- **(b) ring rolling:** a thick ring is rolled into a larger, thinner ring. This is how bearing races are made.
- **(c) transverse rolling:** a bar is rolled across its axis to make stepped or tapered round parts such as shafts.

**The trap:** ring rolling makes the races and skew rolling makes the balls. Both are bearing parts, so read which part is asked.

**Q14. RRB JE CBT-2 Mechanical re-exam, 4 June 2025 · Topic 2.** When is the lead screw engaged in a lathe? (a) Only for turning and facing operations (b) Only during thread-cutting operations (c) During both knurling and continuous feed motion (d) Continuously for all machining processes

*Answer: (b) Only during thread-cutting operations.*

For threading, the half nut in the apron is closed on the lead screw, which keeps an exact ratio between spindle rotation and carriage travel. For ordinary turning and facing, the feed rod drives the carriage through the apron gears and a clutch. Keeping the lead screw for threading only saves it from wear, so it stays accurate.

- **(a), (c) and (d):** these operations use the feed rod or hand feed. Using the lead screw all the time would wear it and spoil thread accuracy.

**Memory aid:** the lead screw and half nut cut threads. The feed rod does everything else.

**Q15. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2) · Topic 1.** In Carbon Arc Welding, DCSP stands for \_\_\_\_\_. (a) Direct current straight porosity (b) Direct current straight pressure (c) Direct current straight polarity (d) Dual current straight polarity

*Answer: (c) Direct current straight polarity.*

Straight polarity means the electrode is negative and the work positive (DCEN). About two-thirds of the arc heat goes to the positive side, so the work gets more heat and penetration is deeper. Carbon arc welding uses DCSP so the carbon electrode, on the cooler side, wears slowly and less carbon gets into the weld.

- **(a) and (b):** porosity is a weld defect and pressure has nothing to do with polarity.
- **(d):** "dual current" is not a term. DC means direct current.

**Memory aid:** straight polarity is electrode negative (EN). Reverse polarity is electrode positive (EP). The positive side gets about two-thirds of the heat.

**Q16. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 3.** What is the use of riddle? (a) It is used for mixing the moulding sand (b) It is used for holding the cope and drag (c) It is used to remove small metals and foreign materials (d) It is used for separating cope and drag

*Answer: (c) It is used to remove small metals and foreign materials.*

A riddle is a hand sieve, a wire mesh in a frame. Moulding sand is shaken through it to remove lumps, nails, bits of metal and other foreign matter. Facing sand is riddled over the pattern so the mould face is fine and clean.

- **(a):** sand is mixed with a shovel or in a sand muller.
- **(b):** the cope and drag are held together by flask pins and clamps.
- **(d):** the cope is lifted off by its handles, and parting sand stops the halves sticking.

**Memory aid:** the moulder's hand tools are the riddle (sieve), rammer, strike-off bar, vent rod, draw spike, slick, trowel, lifter, swab and gate cutter.

**Q17. UKPSC JE Mechanical 2013 (Paper II) · Topic 4.** The correct sequence of processes for getting smooth surface is as follows: (I – Grinding, II – Honing, III – Burnishing, IV – Buffing) (a) I → IV → II → III (b) I → II → III → IV (c) I → II → IV → III (d) I → IV → III → II

*Answer: (b) I → II → III → IV.*

Each step gives a finer finish than the one before. Grinding gives size and a ground finish. Honing, with abrasive stones, corrects the bore's shape and leaves a fine cross-hatch. Burnishing presses hard rollers or balls over the surface and flattens the peaks by plastic flow. Buffing, with a cloth wheel and fine compound, gives the final lustre. It improves appearance, not accuracy.

- **(a) and (d):** buffing right after grinding would be wasted, because the later steps would mark the surface again.
- **(c):** puts buffing before burnishing. Buffing is always the last, decorative step.

**Memory aid:** from rough to fine: grinding, honing, (lapping or superfinishing), burnishing, then polishing and buffing. Buffing always comes last.

**Q18. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 9.** The medium used in mond process for manufacture of metal powders (a) Graphite (b) Carbon monoxide (c) charcoal (d) Hydrocarbon

*Answer: (b) Carbon monoxide.*

In the Mond (carbonyl) process, impure nickel reacts with carbon monoxide at about 50 to 60 °C to form nickel carbonyl, Ni(CO)₄, a gas. Heated to about 200 °C, the gas breaks down into very pure, fine nickel powder and carbon monoxide, which is reused. Iron powder is made the same way from iron carbonyl.

- **(a) Graphite and (c) charcoal:** solid carbon is used to reduce iron oxide to sponge iron powder, which is a different route.
- **(d) Hydrocarbon:** not used in this process.

**Memory aid:** Mond, nickel, carbonyl, carbon monoxide. The powder routes are atomisation (the most common), reduction, electrolysis, the carbonyl process and mechanical milling.

**Q19. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 2.** In machine tools, chatter is due to: (a) Free vibrations (b) Forced vibrations (c) Self-excited vibrations (d) Cutting vibrations

*Answer: (c) Self-excited vibrations.*

Chatter is a self-excited (regenerative) vibration. The tool leaves a wavy surface. On the next revolution it cuts over those waves, so the chip thickness and the cutting force vary, and this feeds energy back into the vibration at the natural frequency of the set-up. It grows by itself without any outside periodic force and leaves chatter marks.

- **(a) Free vibrations:** these die away after a single disturbance, such as a knock. They do not keep going.
- **(b) Forced vibrations:** caused by an outside periodic force such as an unbalanced part, gear errors or the interrupted cut in milling. They occur at the forcing frequency.
- **(d) Cutting vibrations:** not a type of vibration in the standard classification.

**Memory aid:** to cure chatter, reduce the depth or width of cut, change the speed, stiffen the set-up, shorten the overhang or add damping.

**Q20. ISRO Scientist (Mechanical), 7 January 2024 · Topic 7.** In abrasive jet machining process, the main mechanism of material removal takes place due to? (a) Electrochemical action (b) Ionic dissolution (c) Mechanical impact (d) Melting and evaporation

*Answer: (c) Mechanical impact.*

Fine abrasive particles hit the work at high speed and chip off tiny fragments by brittle fracture. That is why AJM works best on hard, brittle materials such as glass, ceramics and silicon.

- **(a) and (b):** these describe ECM, which removes metal electrolytically.
- **(d):** melting and evaporation happen in the thermal processes: EDM, LBM, EBM and plasma arc machining.

**Memory aid:** sort the processes by the energy they use. Mechanical: USM, AJM, WJM. Electrochemical: ECM. Chemical: CHM. Thermal: EDM, LBM, EBM, PAM.

**Q21. NPCIL Scientific Assistant (Mechanical), 8 November 2019 (Shift 1) · Topic 1.** In which of the following welding process flux is used in the form of granules? (a) AC arc welding (b) Submerged arc welding (c) Argon arc welding (d) DC arc welding

*Answer: (b) Submerged arc welding.*

In SAW, the arc burns between a bare wire and the work, buried under a heap of granular flux fed from a hopper. The arc cannot be seen and there is no spatter. Part of the flux melts into a protective slag, and the unmelted flux is collected and reused. SAW uses high currents and gives deep penetration, so it suits thick plate in ships, pressure vessels and pipes, mostly in the flat position.

- **(a) and (d):** AC and DC describe the power supply, not the flux. In manual metal arc welding, the flux is a coating on the electrode.
- **(c) Argon arc welding:** TIG and MIG are shielded by gas, with no flux.

**Memory aid:** flux as a coating is SMAW. Flux as granules is SAW. Flux inside a tubular wire is FCAW. Gas only, no flux, is TIG and MIG.

**Q22. TSPSC AEE Mechanical 2015 (Paper II) · Topic 5.** Thickness in the drawn cup by deep drawing process keeps on increasing in the wall region because of (a) compressive normal stress (b) compressive hoop stress (c) shear stress in flange region (d) Biaxial pure compression

*Answer: (b) compressive hoop stress.*

As the flange is drawn in towards the die, its circumference shrinks from πD to πd. The metal is squeezed round the circle (hoop compression), and since its volume stays the same it gets thicker. So the upper wall of the cup is thicker than the original sheet. The thinnest place is near the punch corner, where the metal is stretched, and that is where cups tear. Hoop compression also causes wrinkling, which the blank holder prevents.

- **(a) compressive normal stress:** the pressure through the thickness from the blank holder is small, and it would thin the sheet, not thicken it.
- **(c) shear stress:** shear is not the main stress in the flange.
- **(d) biaxial pure compression:** the radial stress in the flange is tensile, so the flange is not under compression both ways.

**Memory aid:** in the flange, radial tension and hoop compression give thickening and wrinkles. At the punch corner, stretching gives thinning and fracture.

**Q23. TANGEDCO AE Mechanical 2015 · Topic 3.** Centrifugally cast products have (a) larger grain structure with high porosity (b) fine grain structure with high density (c) fine grain structure with low density (d) segregation of slag towards the outer skin of the casting

*Answer: (b) fine grain structure with high density.*

The metal freezes from the mould wall inwards under centrifugal pressure, so it feeds itself as it shrinks. Gas and inclusions are pushed inwards. The chilling metal mould and the pressure give a fine, dense grain structure.

- **(a):** the opposite of what centrifugal casting gives.
- **(c):** fine grain is right, but the density is high, not low.
- **(d):** slag moves to the inner surface (the bore), not the outer skin.

**Memory aid:** a centrifugal casting is dense and fine-grained on the outside, and the dirt goes to the bore.

**Q24. DFCCIL Junior Executive (Mechanical), 27 September 2021 · Topic 6.** In the \_\_\_\_\_\_\_\_ multiple cutters are mounted on the same arbor to produce the desired shape on the workpiece. (a) end milling operation (b) face milling operation (c) straddle milling operation (d) gang milling operation

*Answer: (d) gang milling operation.*

In gang milling, several cutters, often of different types and diameters, are mounted on one arbor and machine several surfaces in a single pass. It saves time in production work.

- **(a) end milling:** one end mill on a vertical spindle, for slots and pockets.
- **(b) face milling:** one face-milling cutter.
- **(c) straddle milling:** exactly two side-and-face cutters, spaced apart, to mill two parallel faces, such as the flats on a bolt head. It is a special two-cutter case, so it is the closest wrong answer.

**Memory aid:** straddle milling uses two cutters for two parallel faces. Gang milling uses many cutters for many surfaces.

**Q25. RRB JE CBT-2 Mechanical, 2 July 2026 · Topic 2.** The lathe bed is designed with which type of guideways? (a) Triangular (b) Inverted V and flat combination (c) Rectangular (d) Circular

*Answer: (b) Inverted V and flat combination.*

Most lathe beds have inverted V ways to guide the carriage and tailstock accurately, because a V centres itself and takes up wear, and flat ways to carry the load. The bed is grey cast iron, which damps vibration, with hardened ways.

- **(a) Triangular:** an inverted V is triangular in section, but a V on its own is only half the standard answer.
- **(c) Rectangular:** flat ways are used on heavy machines, but alone they do not centre themselves.
- **(d) Circular:** round guides are used on radial drill columns, not lathe beds.

**Memory aid:** the V guides and the flat carries.

## Mock 4

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 9 questions come from Kerala PSC papers (2023 and 2026), 5 from SSC JE, 4 from RRB JE and 7 from other exams.

**Q1. SSC JE Mechanical, 5 June 2024 (Shift 2, Paper I) · Topic 3.** The casting process that employs a wax pattern coated with a ceramic shell to make the mould, is \_\_\_\_\_\_\_\_. (a) sand casting (b) die casting (c) centrifugal casting (d) investment casting

*Answer: (d) investment casting.*

In investment (lost-wax) casting, wax patterns are injected in a metal die and joined on a wax tree. The tree is dipped in ceramic slurry and coated with sand again and again to build a shell. The wax is then melted out, the shell is fired, and metal is poured in. The shell is broken off afterwards. It gives fine detail and close tolerances with no parting line, so it is used for turbine blades, jewellery and dental work.

- **(a) sand casting:** uses a wooden or metal pattern and a sand mould.
- **(b) die casting:** uses a permanent metal die and no pattern at all.
- **(c) centrifugal casting:** spins the mould. Wax patterns are not part of it.

**Memory aid:** "invest" means to cover. The wax pattern is invested with refractory, then lost.

**Q2. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 2.** In lathe, the pitch of a leadscrew is 4 mm and the pitch of the thread to be cut 2 mm. Find change gear ratio. (a) 1/3 (b) 1/2 (c) 1/4 (d) 1/6

*Answer: (b) 1/2.*

Driver/driven = pitch of the thread to be cut/pitch of the lead screw = 2/4 = 1/2. For example, a 20-tooth gear on the spindle side driving a 40-tooth gear on the lead screw makes the lead screw turn half as fast as the spindle, so the carriage moves 2 mm for each turn of the work.

- **(a) 1/3, (c) 1/4 and (d) 1/6:** these would cut pitches of 1.33 mm, 1 mm and 0.67 mm.

**Memory aid:** driver/driven = work pitch/lead screw pitch. To check, multiply the lead screw's turns per spindle turn by its pitch. You should get the thread pitch.

**Q3. RRB JE CBT-2 Mechanical, 19 September 2019 (Shift 2) · Topic 1.** Rails of railway track are welded by - (a) Thermit welding (b) TIG welding (c) Carbon dioxide welding (d) SAW

*Answer: (a) Thermit welding.*

Thermit is a mixture of fine aluminium powder and iron oxide, about 1 : 3 by weight. Once ignited, the aluminium takes the oxygen from the iron oxide (8Al + 3Fe₃O₄ → 9Fe + 4Al₂O₃) and the heat raises the iron to well over 2500 °C. The molten iron runs into a mould around the gap between the rails. It needs no power supply, so it suits joints in the field. In depots, long rails are flash butt welded.

- **(b) TIG welding:** used for thin sheet and non-ferrous metals, not for massive rail sections in the field.
- **(c) Carbon dioxide welding:** a workshop process that needs power and a gas supply.
- **(d) SAW:** for long seams in the flat position, in a workshop.

**Memory aid:** thermit welding is used for rails in the field and for repairing large castings and shafts.

**Q4. SSC JE Mechanical, 9 October 2023 (Shift 2, Paper I) · Topic 5.** Which of the following statements is true about hot working process? (a) All hot working processes must be done above local environment temperature. (b) Hot working process of tin is also a cold working process. (c) It is a process of working above recrystallisation temperature of the materials. (d) It is a process of working above room temperature.

*Answer: (c) It is a process of working above recrystallisation temperature of the materials.*

Hot or cold working is judged against each metal's own recrystallisation temperature, roughly 0.4 to 0.5 of its melting point in kelvin. Above it, new grains form as fast as the old ones are deformed, so the metal does not strain harden.

- **(a) and (d):** the temperature of the surroundings or the room is not the test. Lead and tin recrystallise at about room temperature, so working them at room temperature is already hot working. Tungsten worked at 1000 °C is still cold working.
- **(b):** this has it backwards. Working tin at room temperature, which looks like cold working, is really hot working.

**Memory aid:** hot or cold depends on the metal's own recrystallisation temperature. Lead and tin are hot worked at room temperature.

**Q5. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 6.** Plain milling of mild steel plates produces (a) Irregular shaped discontinuous chips (b) Regular shaped discontinuous chips (c) Continuous chips without built up edge (d) Jointed chips

*Answer: (b) Regular shaped discontinuous chips.*

Milling is an interrupted cut. Each tooth is in the work for only part of a turn, so it cuts a separate comma-shaped chip. Mild steel is ductile, so each chip is well formed and has the same shape every time. The chips are discontinuous but regular. (This answer follows the commission's provisional key.)

- **(a):** irregular broken fragments come from brittle materials such as cast iron.
- **(c):** continuous chips need an uninterrupted cut in ductile metal, as in turning. A milling tooth leaves the work every turn, so it cannot make one.
- **(d):** jointed (segmented) chips are partly sheared through but still come from a continuous cut, as when turning harder ductile metals.

**The trap:** mild steel normally gives continuous chips. In milling the cut is interrupted, so the chips are discontinuous, yet still regular.

**Q6. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2) · Topic 4.** Which of the following elements provides the necessary horizontal force to the workpiece in centerless grinding? (a) Regulating wheel (b) Stationary wheel (c) Work test blade (d) Revolving wheel

*Answer: (a) Regulating wheel.*

In external centreless grinding, the work sits on a work rest blade between the fast grinding wheel and a slow, rubber-bonded regulating wheel. The regulating wheel pushes the work against the grinding wheel and controls how fast it spins. Tilted by a few degrees, it also feeds the work along in through-feed grinding, at a rate of πdN sin α, where d and N are the regulating wheel's diameter and speed and α is its tilt.

- **(b) Stationary wheel:** there is no such element. Both wheels turn.
- **(c) Work test blade:** this means the work rest blade, which supports the work from below. It does not push it sideways.
- **(d) Revolving wheel:** too vague. Both wheels revolve, but only the regulating wheel supplies the push.

**Memory aid:** the grinding wheel cuts, the regulating wheel drives and feeds, and the blade supports.

**Q7. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 1.** Lamellar tears may develop in welding because of (a) melting away of the base metal resulting in groove generation (b) joint not getting filled with the proper amount of weld (c) shrinkage of the restrained components of the structure during cooling (d) localized heating and cooling during welding resulting in expansion and contraction of the weld area

*Answer: (c) shrinkage of the restrained components of the structure during cooling.*

Lamellar tears are step-shaped cracks in the parent plate, running parallel to its surface, under T-joints and corner joints in thick rolled plate. Rolling flattens non-metallic inclusions (such as manganese sulphide) into thin layers, which makes the plate weak through its thickness. When the weld shrinks and the joint cannot move, it pulls on the plate through its thickness and opens those layers into terraced tears.

- **(a):** melting a groove into the base metal at the weld edge is undercut.
- **(b):** a joint not filled enough is underfill.
- **(d):** this describes how distortion and residual stress arise in any weld. Lamellar tearing needs the restraint and the weak through-thickness plate as well.

**Memory aid:** lamellar tears are prevented with low-sulphur plate that has guaranteed through-thickness ductility (Z-grade plate), and with joint designs that avoid pulling through the thickness.

**Q8. BPSC AE Paper 6 (Mechanical), 14 October 2022 · Topic 2.** During metal cutting, the chip thickness ratio (a) is always more than 1 (b) determines the shear angle from the geometry of chip formation (c) is the ratio (length of uncut chip / length of chip) (d) is the ratio (cutting speed / chip velocity)

*Answer: (b) determines the shear angle from the geometry of chip formation.*

The chip thickness ratio r = t₁/t₂ can be measured from the chip. With the rake angle α known, tan φ = r cos α/(1 − r sin α) gives the shear angle. This is the practical way to find φ.

- **(a):** the chip is thicker than the uncut layer, so r is always less than 1.
- **(c):** upside down. Volume stays the same, so t₁l₁ = t₂l₂ and r = chip length/uncut length.
- **(d):** also upside down. r = chip velocity/cutting speed.

**The trap:** (c) and (d) look right but are inverted. The chip is thicker, so it is shorter and slower. Both correct ratios have the chip's value on top, and both are less than 1.

**Q9. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 7.** A main advantage of ECM over EDM is that (a) it can cut harder material (b) it is more accurate and precise (c) it consumes less power (d) its tool wear is negligible

*Answer: (d) its tool wear is negligible.*

In ECM, only hydrogen gas is given off at the tool (the cathode). No metal leaves it, so one tool can make thousands of parts. In EDM, every spark also erodes the tool, so tools wear and must be replaced or dressed.

- **(a):** both processes cut any conducting material, however hard. Neither has an advantage here.
- **(b):** EDM is the more accurate of the two. ECM suffers from overcut and stray machining.
- **(c):** ECM draws thousands of amperes and uses more energy per cubic millimetre removed than EDM.

**Memory aid:** ECM gives no tool wear, no heat damage, no residual stress and high removal rates, but lower accuracy and a corrosive electrolyte. EDM gives good accuracy, but the tool wears and a thin recast layer is left on the work.

**Q10. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 3.** In sand casting process, when the mold consists of more than two pieces, the additional parts are called (a) Foundations (b) Cheeks (c) Necks (d) Copes

*Answer: (b) Cheeks.*

A two-part moulding box has a cope (top) and a drag (bottom). For tall castings, or patterns that need more than one parting, extra middle sections are added between them. These are cheeks, as in three-part moulding.

- **(a) Foundations:** not a moulding-box term.
- **(c) Necks:** a neck is the short passage joining a riser to the casting, not a part of the box.
- **(d) Copes:** the cope is the top part, and there is only one.

**Memory aid:** cope on top, drag at the bottom, cheek in the middle.

**Q11. GATE ME, 3 February 2024 · Topic 5.** The "Earing" phenomenon in metal forming is associated with (a) deep drawing (b) extrusion (c) rolling (d) forging

*Answer: (a) deep drawing.*

Ears are the wavy high points (usually four) on the rim of a deep-drawn cup. They appear because rolled sheet is planar anisotropic: it flows differently at 0°, 45° and 90° to the rolling direction. The ears are trimmed off as scrap.

- **(b) extrusion and (d) forging:** neither has a cup rim on which ears could form.
- **(c) rolling:** rolling creates the anisotropy that causes ears, but earing itself shows up only when the sheet is drawn.

**Memory aid:** high normal anisotropy (a large average R) allows deeper draws. Planar anisotropy (R changing with direction) causes ears. The ideal sheet has a high average R and no planar variation.

**Q12. RRB JE CBT-2 Mechanical, 22 April 2025 (Shift 2) · Topic 2.** What is the primary function of the tool post in a lathe machine? (a) To secure the workpiece firmly on the machine bed (b) To control the feed rate and depth of cut during machining (c) To hold and adjust the tool for a suitable working position (d) To support the compound rest and provide rotational movement

*Answer: (c) To hold and adjust the tool for a suitable working position.*

The tool post sits on top of the compound rest. It clamps the tool and lets you set its height and angle. Common types are the ring-and-rocker, four-way and quick-change tool posts.

- **(a):** the work is held in a chuck, on a faceplate or between centres, never on the bed.
- **(b):** the feed is set by the feed gearbox and the depth of cut by the cross-slide handwheel.
- **(d):** backwards. The compound rest supports the tool post, and the compound rest swivels on the cross-slide.

**Memory aid:** on the carriage, from the bottom up: saddle, cross-slide, compound rest, tool post.

**Q13. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 8.** For a CNC machining process, which of the following is not applicable? (a) Close tolerances required (b) Part geometry is complex (c) design changes are frequent (d) No inspection is required

*Answer: (d) No inspection is required.*

CNC suits complex parts, close tolerances, frequent design changes (only the program needs editing), small to medium batches and jobs with many operations. CNC parts are very repeatable, so less inspection is needed, but they still have to be inspected, at least the first part and samples after that. (This answer follows the commission's provisional key.)

- **(a), (b) and (c):** all three are standard reasons for choosing CNC.

**The trap:** CNC reduces inspection because the parts repeat well. It does not remove the need for it.

**Q14. SSC JE Mechanical, 4 December 2023 (Paper II) · Topic 1.** Which of following is a defect that would never occur in shielded metal arc welding? (a) Tungsten inclusion (b) Slag inclusion (c) Crack (d) Porosity

*Answer: (a) Tungsten inclusion.*

An SMAW electrode is a steel core wire with a flux coating, and there is no tungsten anywhere in the process. Tungsten inclusions happen only in TIG welding, when the tungsten electrode touches the pool or is overloaded and pieces of it break off.

- **(b) Slag inclusion:** SMAW makes slag from the flux. If it is not chipped off between passes, it gets trapped.
- **(c) Crack:** hot cracks and hydrogen cracks can occur in any fusion weld. Damp electrodes are a common cause of hydrogen cracking.
- **(d) Porosity:** caused by damp flux, a long arc or a dirty surface.

**Memory aid:** a defect needs a source. No tungsten means no tungsten inclusion. No flux, as in TIG, means no slag inclusion.

**Q15. Kerala PSC AE (Mechanical, Ports), 15 July 2026 · Topic 6.** What is the twist drill cutting angle for general work? (a) 116 degree (b) 118 degree (c) 110 degree (d) 90 degree

*Answer: (b) 118 degree.*

The point angle, the included angle between the two cutting lips, is 118° for general work in mild steel. That is 59° on each side of the axis.

- **(a) 116° and (c) 110°:** not standard point angles.
- **(d) 90°:** a smaller point angle like this is used for soft materials such as plastics and wood. It is also the usual countersink angle. Hard steels need a larger angle, about 135° to 140°.

**Memory aid:** 118° for general work, 59° each side of the axis.

**Q16. SSC JE Mechanical, 4 December 2025 (Shift 2) · Topic 4.** What does the grinding wheel structure describe? (a) Abrasive type (b) Bond type (c) Density/Porosity (d) Grain size

*Answer: (c) Density/Porosity.*

Structure is the spacing of the grains in the wheel: how dense or open the wheel is. In the standard marking, for example A 46 K 5 V, the order is abrasive (A, aluminium oxide), grain size (46), grade (K), structure (5) and bond (V, vitrified).

- **(a) Abrasive type:** the first letter, A for aluminium oxide or C for silicon carbide.
- **(b) Bond type:** the last letter, such as V (vitrified), B (resinoid), R (rubber), S (silicate), E (shellac) or M (metal).
- **(d) Grain size:** the number after the abrasive, from coarse (8 to 24) to very fine (up to 600).

**The trap:** grade is not structure. Grade is how firmly the bond holds the grains. Structure is how far apart the grains are.

**Q17. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** As grain size of a cast alloy decreases (a) strength decreases (b) ductility increases (c) microporosity increases (d) tendency to crack during solidification increases

*Answer: (b) ductility increases.*

Finer grains mean more grain boundaries. Boundaries block dislocations and spread the deformation more evenly, so both strength and ductility rise. Fine grains also spread shrinkage and segregation more evenly, so there is less microporosity and less hot cracking.

- **(a):** the opposite. Strength rises as grains get finer (the Hall–Petch relation).
- **(c):** microporosity falls with finer grains.
- **(d):** the tendency to crack during solidification also falls.

**Memory aid:** fine grains improve almost everything at room temperature. Only for creep at high temperature are coarse grains preferred.

**Q18. HPCL Engineer (Mechanical), 27 March 2025 (Shift 2) · Topic 2.** Which type of feed is needed in facing operation? (a) Parallel to the axis of rotation (b) Neither parallel nor perpendicular to the axis of rotation (c) Perpendicular to the axis of rotation (d) Both parallel and perpendicular to the axis of rotation

*Answer: (c) Perpendicular to the axis of rotation.*

In facing, the cross-slide feeds the tool across the end of the work at right angles to the axis, while the carriage stays locked. Because the diameter shrinks as the tool moves towards the centre, the cutting speed falls too, unless a CNC lathe keeps it constant with G96.

- **(a):** a feed parallel to the axis is turning.
- **(b):** a feed at an angle, with the compound rest set over, is taper turning.
- **(d):** combined feeds trace profiles, as in CNC contour turning. That is not facing.

**Memory aid:** turning feeds parallel to the axis. Facing and parting feed perpendicular to it. Taper turning feeds at an angle.

**Q19. MPPSC AE Mechanical 2021 · Topic 7.** Of the following process, which one is noted for the excellent material removal rates? (a) Electric discharge machining (b) Laser beam machining (c) Plasma arc cutting (d) Ultrasonic machining

*Answer: (c) Plasma arc cutting.*

A plasma jet, at well over 10,000 °C, melts the metal and blows it away. In the standard table it removes about 75,000 mm³/min, the highest of all the unconventional processes.

- **(a) EDM:** about 800 mm³/min.
- **(b) LBM:** about 0.1 mm³/min, the lowest.
- **(d) USM:** about 300 mm³/min.

**Memory aid:** by removal rate, PAM > ECM > EDM > USM > CHM > EBM > AJM > LBM.

**Q20. ISRO SDSC Technician B (Fitter), 4 June 2022 · Topic 9.** The purpose of jig and fixture is\_\_\_\_\_\_\_\_\_\_. (a) to increase machining efficiency (b) to increase the production rate (c) to facilitate interchangeability (d) all of the above

*Answer: (d) all of the above.*

A jig locates and holds the work and guides the tool, for example through a drill bush. A fixture locates and holds the work, and the tool is set using setting blocks. Both remove the need for marking out and repeated setting up. Parts load faster (higher production rate), less skill is needed, every part sits in the same place (interchangeability), and fewer parts are rejected (efficiency).

- **(a), (b) and (c):** each is true, but each is only part of the answer.

**Memory aid:** a jig guides the tool, for drilling, reaming and tapping. A fixture holds the work, for milling, turning, grinding and welding.

**Q21. BPSC Assistant Professor (Mechanical), November 2015 · Topic 5.** In blanking operation, the angle of shear is provided on (a) die (b) punch (c) both punch and die (d) can be on either die or punch

*Answer: (a) die.*

Shear is a slight slope ground on the cutting face, so the cut runs progressively instead of all round at once. This lowers the peak press force, but the part touching the sloped face gets bent. In blanking, the blank pushed through the die is the product and must stay flat. So the shear goes on the die, and the scrap strip resting on it takes the bending.

- **(b) punch:** shear goes on the punch in piercing, so the sheet with the hole stays flat and the slug is bent.
- **(c) and (d):** shear on the wrong tool would bend the product.

**Memory aid:** shear goes on the tool that touches the scrap: the die in blanking, the punch in piercing.

**Q22. RRB JE CBT-2 Mechanical re-exam, 4 June 2025 · Topic 1.** \_\_\_\_\_ is used for mixing oxygen and acetylene in gas welding processes. (a) Earth clamp (b) Goggles (c) Welding torch (d) Spark-lighter

*Answer: (c) Welding torch.*

The torch (blowpipe) has two inlets with needle valves, one for oxygen and one for acetylene. The gases mix in its mixing chamber and burn at the nozzle tip. Setting the two valves sets the flame type.

- **(a) Earth clamp:** the return lead clamp of arc welding. Gas welding has no electrical circuit.
- **(b) Goggles:** tinted eye protection.
- **(d) Spark-lighter:** lights the flame. Matches should never be used.

**Memory aid:** in India, oxygen cylinders are painted black and acetylene cylinders maroon. Acetylene fittings have left-hand threads so the two cannot be swapped.

**Q23. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 2.** BUE (Built Up Edge) formation during machining can be reduced by (a) decreasing cutting speed (b) decreasing depth of cut (c) decreasing rake angle (d) all of the above

*Answer: (b) decreasing depth of cut.*

A built-up edge is a lump of work metal welded onto the tool face. It forms with ductile metals at low to moderate speeds, grows, breaks off and spoils the finish. It is reduced by a higher cutting speed, a smaller depth of cut, a larger rake angle, a sharp tool, a good cutting fluid and a tool material with little affinity for the work.

- **(a):** the opposite. A higher speed heats the interface so the metal no longer sticks, and BUE disappears at high speed.
- **(c):** also the opposite. A larger positive rake reduces BUE.
- **(d):** wrong, because (a) and (c) are wrong.

**Memory aid:** to beat BUE, raise the speed, cut the depth, raise the rake, keep the tool sharp and use a good fluid.

**Q24. UPRVUNL JE Mechanical 2016 (Shift 2) · Topic 3.** Hollow pipes and barrels are produced in: (a) centrifugal casting (b) true centrifugal casting (c) die casting (d) semi centrifugal casting

*Answer: (b) true centrifugal casting.*

In true centrifugal casting, the mould spins about its own axis (horizontal for long pipes) and no core is used. Centrifugal force forms the bore, and the wall thickness is set by how much metal is poured. Cast iron water pipes, bushes and barrels are made this way.

- **(a) centrifugal casting:** in this three-way classification, it means centrifuging, where several small moulds are arranged round a central sprue and spun so metal is flung into them. It is for small, irregular parts.
- **(c) die casting:** a permanent die, for small solid or cored non-ferrous parts.
- **(d) semi centrifugal casting:** spun about a vertical axis, with a core if needed, for symmetrical parts with solid centres such as wheels, pulleys and gear blanks.

**Memory aid:** true centrifugal casting makes pipes with no core. Semi-centrifugal makes wheels. Centrifuging makes small odd shapes round a sprue.

**Q25. SSC JE Mechanical, 3 December 2025 (Shift 2) · Topic 6.** Which of the following operations cannot be performed on a lathe? (a) Turning (b) Drilling (c) Knurling (d) Broaching

*Answer: (d) Broaching.*

A broach is a long tool with many teeth, each a little higher than the one before (the rise per tooth). It is pushed or pulled through or over the work in a single straight stroke on a broaching machine. It cuts keyways, splines and square or hexagonal holes.

- **(a) Turning:** the basic lathe operation.
- **(b) Drilling:** done with the drill in the tailstock and the work rotating.
- **(c) Knurling:** a knurling tool is pressed against the rotating work to roll a diamond or straight pattern. It forms the surface instead of cutting it, but it is a lathe operation.

**Memory aid:** broaching is one stroke with many teeth. The feed is built into the tool.

## Sources

Every question comes from a real paper. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys. For the 2023 paper that is the provisional key, which the solutions mention where it matters. All the other questions come from Testbook solution pages, which name the paper each question appeared in. Their answers were checked against standard textbook reasoning. Question numbers below are the numbers in this guide, not in the original papers. Small typing slips in the booklets, such as "id" for "is", were corrected without changing the meaning.

**Kerala PSC papers**

- Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- AE (Mechanical, Ports), 065/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/65-2026.pdf) and [final answer key](https://keralapsc.gov.in/sites/default/files/2026-08/fkey-65-26.pdf)
- AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)

**Mock 1, other papers**

- Q2 headstock: [Testbook](https://testbook.com/question-answer/what-is-the-primary-function-of-the-headstock-in-a--6810849d168539a006e1a4e7)
- Q4 hydrostatic extrusion: [Testbook](https://testbook.com/question-answer/what-does-hydrostatic-pressure-in-extrusion-proces--6946c771dad5df3d6f0a9d0e)
- Q6 neutral flame: [Testbook](https://testbook.com/question-answer/in-the-gas-welding-process-a-neutral-flame-contai--657aedcf0215706c60d05eb8)
- Q8 shrink rule: [Testbook](https://testbook.com/question-answer/what-is-the-shrink-rule-used-for-in-casting-proces--6946c896896dfb75f9cd3904)
- Q10 G21: [Testbook](https://testbook.com/question-answer/which-of-the-following-code-will-change-specified--6851202ee8ba0416fcbc53e2)
- Q12 lathe rpm: [Testbook](https://testbook.com/question-answer/at-what-rpm-should-a-lathe-be-run-to-give-a-cuttin--60195286bb70b3e610ac136f)
- Q14 TIG and MIG: [Testbook](https://testbook.com/question-answer/what-is-a-key-difference-between-tig-welding-and-m--697f4b787010086c20633181)
- Q15 loose piece pattern: [Testbook](https://testbook.com/question-answer/which-type-of-pattern-contains-removable-sections--6900129026a05d64fa6e2f60)
- Q16 quick return: [Testbook](https://testbook.com/question-answer/a-quick-return-motion-mechanism-used-in-shaper-mac--666d86e6392f29b279b06398)
- Q18 AJM grain size: [Testbook](https://testbook.com/question-answer/the-size-of-abrasive-grains-in-an-abrasive-jet-mac--602d899cc5428563448d7861)
- Q20 compound die: [Testbook](https://testbook.com/question-answer/blanking-and-piercing-operations-can-be-performed--581b22700328213e0dee900a)
- Q22 dressing: [Testbook](https://testbook.com/question-answer/removing-dull-grains-in-order-to-make-grinding-whe--680b68a5d0a4c56afe12e065)
- Q23 sawing: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-not-a-lathe-turning-oper--666d56b6bc02815b83ac69ec)
- Q24 permeability: [Testbook](https://testbook.com/question-answer/which-property-of-the-molding-sand-is-the-ability--69941d9cdeddc166f7441383)
- Q25 dividing head: [Testbook](https://testbook.com/question-answer/the-device-used-for-dividing-the-periphery-of-the--5f8344a69ceb34c140415a0c)

**Mock 2, other papers**

- Q2 die casting: [Testbook](https://testbook.com/question-answer/the-casting-process-that-employs-a-permanent-metal--666d5779936efe764688f4b8)
- Q4 up milling: [Testbook](https://testbook.com/question-answer/in-the-up-milling-process-the-metal-is-removed-in--68470c8f123f22caf8fd6820)
- Q5 glazing: [Testbook](https://testbook.com/question-answer/glazing-in-grinding-wheels-can-be-decreased-by--62208b10b92dfc07dd0a6f76)
- Q7 crater wear: [Testbook](https://testbook.com/question-answer/crater-wear-occurs-mainly-on-the--5e7e6576f60d5d5ae74635e4)
- Q9 EDM dielectric: [Testbook](https://testbook.com/question-answer/the-dielectric-fluid-used-in-the-electro-discharge--61cdb5df2bd7bc05b216b647)
- Q11 machining time: [Testbook](https://testbook.com/question-answer/if-cutting-tool-travel-1000-mm-in-the-direction-of--604db8a01a5140aaad322fe6)
- Q13 spring back: [Testbook](https://testbook.com/question-answer/spring-back-during-the-sheet-metal-operation-is-ca--5f392bb64d51730d0cff134d)
- Q15 backhand welding: [Testbook](https://testbook.com/question-answer/backhand-technique-in-the-oxy-acetylene-welding-pr--62207f44b5b968a525204f96)
- Q18 V-block: [Testbook](https://testbook.com/question-answer/when-a-cylinder-is-located-in-a-v-block-then-the--625fe5e2894e32c9625229b4)
- Q19 two-high mill: [Testbook](https://testbook.com/question-answer/a-two-high-rolling-mill-consists-of-two--65a4f354d96c0936182fcad7)
- Q21 open structure: [Testbook](https://testbook.com/question-answer/which-of-the-following-indicates-the-open-structur--621f5dec775c5b5a5a8f0ef0)
- Q22 misrun: [Testbook](https://testbook.com/question-answer/______-defect-is-caused-due-to-casting-getting-sol--625ab872b4928654de308a0f)
- Q23 EBW vacuum: [Testbook](https://testbook.com/question-answer/in-which-one-of-the-following-welding-process-vacu--5f536a23a3da023d0ad93e4a)
- Q24 taper turning: [Testbook](https://testbook.com/question-answer/the-type-of-surface-produced-by-a-taper-turning-op--6a523df442129b6ecc96dd07)
- Q25 counterboring: [Testbook](https://testbook.com/question-answer/what-is-the-primary-purpose-of-counterboring--691706b9ef933e7aab9ead24)

**Mock 3, other papers**

- Q1 spot weld cycle: [Testbook](https://testbook.com/question-answer/the-complete-resistance-spot-weld-cycle-has-been-d--5f2ec553d56cbc0d0aca5024)
- Q3 riser: [Testbook](https://testbook.com/question-answer/which-of-the-following-acts-as-reservoir-of-molten--6166c19ad5a1e777d8bb32bc)
- Q5 piercing: [Testbook](https://testbook.com/question-answer/the-process-of-punching-a-hole-in-a-sheet-metal-is--6a38cbe7b277a8aa2031911a)
- Q6 internal centreless: [Testbook](https://testbook.com/question-answer/which-of-the-following-wheels-supports-the-workpie--68107d9066ff753c4b8cb54f)
- Q8 knurling: [Testbook](https://testbook.com/question-answer/_____operation-in-a-lathe-is-used-for-produc--618bc171a7d764870ede6600)
- Q11 ATC: [Testbook](https://testbook.com/question-answer/the-term-atc-in-cnc-machine-tool-means--6323810de89a057146ee4f5b)
- Q12 table feed: [Testbook](https://testbook.com/question-answer/a-face-milling-operation-is-carried-out-with-a-100--683ff409f777830d02433806)
- Q14 lead screw: [Testbook](https://testbook.com/question-answer/when-is-the-lead-screw-engaged-in-a-lathe--68470bade1386838775e504f)
- Q15 DCSP: [Testbook](https://testbook.com/question-answer/in-carbon-arc-welding-dcsp-stands-for-___________--6811f6c56c6411e2203880ea)
- Q17 finishing sequence: [Testbook](https://testbook.com/question-answer/the-correct-sequence-of-processes-for-getting-smoo--61bae5ce2c70bb30194fadd2)
- Q20 AJM mechanism: [Testbook](https://testbook.com/question-answer/in-abrasive-jet-machining-process-the-main-mechan--683ff438ac24fa93bafd512a)
- Q21 SAW flux: [Testbook](https://testbook.com/question-answer/in-which-of-the-following-welding-process-flux-is--5822d992995a2d1a2056d09a)
- Q22 deep-drawn wall: [Testbook](https://testbook.com/question-answer/thickness-in-the-drawn-cup-by-deep-drawing-process--632389de6c6173fba47aceee)
- Q23 centrifugal products: [Testbook](https://testbook.com/question-answer/centrifugally-cast-products-have--5f3009e0a7bbbc0d15ca525b)
- Q24 gang milling: [Testbook](https://testbook.com/question-answer/in-the-________-multiple-cutters-are-mounted-on-th--6166d822f3ecdec7638b5721)
- Q25 lathe bed: [Testbook](https://testbook.com/question-answer/the-lathe-bed-is-designed-with-which-type-of-guide--6a523de8e1f98ed2266eedaf)

**Mock 4, other papers**

- Q1 investment casting: [Testbook](https://testbook.com/question-answer/the-casting-process-that-employs-a-wax-pattern-coa--666d58306226c06d2b82ee20)
- Q3 thermit welding: [Testbook](https://testbook.com/question-answer/rails-of-railway-track-are-welded-by--621e2281b2aa18b4e9865ee7)
- Q4 hot working: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-is-true-about-ho--6530a51ed06bd7c52cc336a9)
- Q6 regulating wheel: [Testbook](https://testbook.com/question-answer/which-of-the-following-elements-provides-the-neces--6811f543c0bf944e839494b3)
- Q8 chip thickness ratio: [Testbook](https://testbook.com/question-answer/during-metal-cutting-the-chip-thickness-ratio--6351a0ff9638558544055e78)
- Q11 earing: [Testbook](https://testbook.com/question-answer/the-earing-phenomenon-in-metal-forming--678a51cf8ebcb5c476f44d7e)
- Q12 tool post: [Testbook](https://testbook.com/question-answer/what-is-the-primary-function-of-the-tool-post-in-a--6811d765b9d2cd3cd5d6da5a)
- Q14 tungsten inclusion: [Testbook](https://testbook.com/question-answer/which-of-following-is-a-defect-that-would-never-oc--657ad99e94917d566510a96e)
- Q16 wheel structure: [Testbook](https://testbook.com/question-answer/what-does-the-grinding-wheel-structure-describe--6946c88e477fa6aef88e421f)
- Q18 facing feed: [Testbook](https://testbook.com/question-answer/which-type-of-feed-is-needed-in-facing-operation--69acb552405c68847b091279)
- Q19 plasma arc cutting: [Testbook](https://testbook.com/question-answer/of-the-following-process-which-one-is-noted-for-t--6253c85a15b205e629a8c16b)
- Q20 jig and fixture: [Testbook](https://testbook.com/question-answer/the-purpose-of-jig-and-fixture-is__________--631c34d2f964ad0dd9d59a89)
- Q21 blanking shear: [Testbook](https://testbook.com/question-answer/in-blanking-operation-the-angle-of-shear-is-provi--5f86b497821a4b3a30c3fe64)
- Q22 welding torch: [Testbook](https://testbook.com/question-answer/_____-is-used-for-mixing-oxygen-and-acetylene-in-g--68470841794f7f08529eb61b)
- Q24 true centrifugal: [Testbook](https://testbook.com/question-answer/hollow-pipes-and-barrels-are-produced-in--6094e87b38fa60537bd5bee1)
- Q25 broaching: [Testbook](https://testbook.com/question-answer/which-of-the-following-operations-cannot-be-perfor--6946c76ded34cde1ae53716e)
