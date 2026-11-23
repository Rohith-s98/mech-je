# Industrial Engineering Level 3: Tricky Questions

Nov 23, 2026 · @Rohith

## How to use Level 3

Level 3 comes after the [Level 1 guide](../) and the [Level 2 theory](../level-2/). It has the same 10 topics in the same order, but only the parts examiners twist into traps. Finish a topic in Levels 1 and 2 first, then do it here.

| Part of each section | What it gives you |
| --- | --- |
| Going deeper | The ideas beyond Level 1 that tricky questions are built on. |
| Formulas worth adding | The formulas that Level 1 leaves out but harder papers use. |
| Doubts cleared | The questions students usually get stuck on, answered in plain words. |
| Tricky past questions | Real questions from GATE, ESE, state AE and JE exams and other technical papers, Kerala PSC included. Each solution goes step by step and says why the wrong options look right. |

**Which exams.** ESE is UPSC's Engineering Services exam, the hardest objective paper here. GATE ME is the graduate entrance test for mechanical engineering, and its industrial engineering questions are mostly short sums on EOQ, PERT, forecasting, LP and queues. Both ask about the same ideas as JE exams, with an extra twist. If you can solve these, JE questions on the same idea feel easy. Kerala PSC asks more management theory than any other exam, so most of Topic 9 and many of the statement questions come from its papers.

**Statement questions.** ESE often gives two statements and these four options. Check each statement on its own first. Only if both are true, ask whether Statement II is the reason for Statement I.

| Option | Meaning |
| --- | --- |
| (a) | Both true, and II explains I |
| (b) | Both true, but II does not explain I |
| (c) | I true, II false |
| (d) | I false, II true |

**Units used throughout.** Match the time units before you use a formula. With annual demand, the holding cost must be per unit per year; with a daily demand, the lead time must be in days. In queues, λ and μ must be per the same hour or minute. Rating and allowance percentages act on times, and a rating above 100 makes the normal time longer than the observed time. Most wrong options in numericals are a slip between a monthly and a yearly cost, a percentage of normal time and of standard time, or a standard deviation and a variance.

**How to practise.** Turn on Hide answers, try each question on paper, then read the solution even when you got it right. The solution explains the trap, and the trap is what comes back in the next exam. On the website, a topic with three or more four-option questions also gets a timed Practise this topic card.

## 1. Method study

The traps here come from three mix-ups: which charts have a time scale, which are drawn to scale, and which record hand motions instead of whole operations.

### Going deeper

| Idea | What it means |
| --- | --- |
| Charts with a time scale | The multiple activity chart (the man-machine chart is one kind) and the SIMO chart are drawn against time. Outline, flow and two-handed process charts show only the order of steps. |
| Charts drawn to scale | The flow diagram and the string diagram are scale drawings of the shop floor. Process charts are not drawn to any scale. |
| Outline process chart | Uses only two symbols, operation and inspection. It gives a quick overall view of a whole process. |
| Three kinds of flow process chart | Man type follows the worker, material type follows the material, and equipment type follows how a piece of equipment is used. All three use the five ASME symbols. |
| Flow diagram | The flow process chart's symbols placed on a scale plan of the shop, with lines for the path of the man, the material or the equipment. It shows backtracking and crowded aisles. |
| String diagram | A scale plan with a pin at each work point and a thread wound along the path. Thread length × scale gives the distance walked. Best when a worker moves often between many points. |
| Travel chart | Also called a from-to chart: a table of how many trips go from each station to every other station. It replaces a string diagram when there are too many movements to wind. |
| Multiple activity chart | One bar for each worker or machine, side by side on one time scale. Gaps show idle time, so work can be shared out better. |
| Two-handed process chart | Also called the operator chart. Columns for the left and right hands with process chart symbols, but no time scale. |
| SIMO chart | The simultaneous motion cycle chart. The therbligs of each hand are plotted against time read from a film. It is the record of a micromotion study. |
| Micromotion study | The job is filmed at a known speed and read frame by frame. A wink counter clock in the frame reads in winks of 1/2000 minute. It pays only for short jobs repeated many thousands of times. |
| Memomotion study | Filming at a slow speed, about 50 to 100 frames a minute, to study long or irregular jobs cheaply, such as crane or store work. |
| Cyclegraph and chronocyclegraph | A small light is fixed to the hand and photographed. A steady light (cyclegraph) shows only the path. A flashing light (chronocyclegraph) gives dots whose spacing shows speed and whose pear shape shows direction. |
| Therbligs | Gilbreth's 17 basic hand motions (18 if find is counted on its own). Some do useful work, such as reach, grasp, move, use and assemble. Others waste time, such as search, select, hold, delays and rest. |
| Principles of motion economy | Barnes's rules in three groups: use of the human body, arrangement of the workplace, and design of tools and equipment. One example: both hands should begin and end their motions together. |

### Formulas worth adding

```math
\text{Utilisation} = \frac{\text{working time in one cycle}}{\text{cycle time}} \times 100\%
```

Read the working time of each worker or machine off a multiple activity chart. Idle time is 100% minus the utilisation.

```math
n' = \frac{l + m}{l + w}
```

This is the number of identical machines one operator can look after: l is the loading and unloading time per machine, m the machine running time, and w the walking time between machines. If n' is not a whole number, compare the cost per piece for the whole numbers on each side of it.

```math
\text{Distance walked} = \text{length of thread} \times \text{scale of the drawing}
```

This is how a string diagram gives distance.

```math
1 \text{ wink} = \frac{1}{2000} \text{ min} = 0.03 \text{ s}
```

This is the time unit of micromotion study.

### Doubts cleared

**Doubt: Is a man-machine chart different from a multiple activity chart?** No. It is a multiple activity chart with one worker and one or more machines. Both are drawn on a time scale.

**Doubt: Flow diagram or string diagram?** Both are scale drawings. Use a flow diagram when the path is fairly regular and you want the chart symbols on it. Use a string diagram when a worker moves often between many points and you want the total distance.

**Doubt: Does a flow diagram show only the material?** No. It traces whatever the flow process chart follows: a worker, a material, or a piece of moving equipment such as a trolley or a crane.

**Doubt: Two-handed process chart or SIMO chart?** Both follow the two hands. The two-handed chart uses process chart symbols and has no time scale. The SIMO chart uses therbligs on a time scale read from film, so it is far more detailed and costs far more.

**Doubt: Why not film every job?** Cameras, film and frame-by-frame reading cost money. It pays only when a short cycle is repeated thousands of times, so that saving a fraction of a second each time adds up.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q100.** A multiple activity chart is used to: (i) detect the idle time of men and machines (ii) optimise the distribution of work (iii) show how the activities depend on each other. (a) Only (i) and (ii) (b) Only (ii) (c) Only (i) and (iii) (d) All of the above

*Answer: (d) All of the above.*

1. The chart puts one bar for each worker or machine on the same time scale, so gaps in a bar show idle time. (i) is true.
2. Once idle time is visible, work can be moved from busy members to idle ones, for example a worker loading a second machine while the first one runs. (ii) is true.
3. Because the bars share one time scale, you can see which activity must wait for another, for example a machine that cannot start until it is loaded. (iii) is true.

**The trap:** Most books list (i) and (ii) as the purposes, so (a) looks complete. The chart shows how activities depend on each other too, and that is what lets you plan the work with it.

**Q2. ESE Mechanical 2016 (Paper II).** Consider the following statements about the flow diagram in work study: 1. Movement of machines is drawn in a flow diagram. 2. Movement of men is drawn in a flow diagram. 3. In a flow diagram, all movements are drawn true to scale. Which of these statements are correct? (a) 1 and 2 only (b) 1 and 3 only (c) 2 and 3 only (d) 1, 2 and 3

*Answer: (d) 1, 2 and 3.*

1. A flow diagram is a flow process chart drawn on a scale plan of the shop. The flow process chart can be of the man, material or equipment type, so the path of a worker or of a piece of equipment can be drawn. Statements 1 and 2 are true.
2. The plan is drawn to scale, so the lines show the real paths and distances. Statement 3 is true.

**The trap:** "Movement of machines" sounds wrong because machines in a shop stay in one place. The statement means equipment that moves, such as a trolley, a fork-lift or a crane, which the equipment-type chart follows. Students who drop statement 1 pick (c).

**Q3. RPSC Lecturer (Technical Education) 2020, Mechanical Paper I.** A SIMO chart should be used with: (a) process chart (b) flow diagram (c) man-machine operation chart (d) therbligs

*Answer: (d) therbligs.*

1. SIMO stands for simultaneous motion cycle chart. It records what the left and right hands do at the same moment.
2. Its columns are filled with therbligs, the basic hand motions such as reach, grasp and move, each timed from a film.
3. Process charts, flow diagrams and man-machine charts deal with whole operations, not hand motions.

**The trap:** A man-machine chart also shows two things side by side on a time scale, so (c) looks close. The SIMO chart's unit is a therblig lasting a fraction of a second, which only a filmed micromotion study can time.

## 2. Work measurement and time study

The traps here are in the order of the steps: idle time is taken out first, the rating comes next, and the allowance is added last. The sign of the rating and whether the allowance is a share of the normal time or of the whole shift decide most answers.

### Going deeper

| Idea | What it means |
| --- | --- |
| Observed time first | Average the valid stop-watch readings of each element. Throw out readings with a foreign element, such as a dropped tool, before averaging. |
| Idle time is not work | When a study gives the output of a whole shift, take the idle share out of the shift first. Only the working minutes are divided by the output. |
| Rating above 100 | The worker was faster than normal, so a normal worker would take longer. Normal time = observed time × rating ÷ 100, which is longer than the observed time. |
| Rating systems | Speed (pace) rating compares speed with normal. The Westinghouse system rates skill, effort, conditions and consistency. Synthetic rating compares observed times with PMTS times for the same elements. |
| Allowance on normal time | When the allowance is given as a percentage of the normal time, standard time = normal time × (1 + allowance). |
| Allowance on the shift | When the allowance is given in minutes per shift or as a share of the working day, it eats into the shift. Standard time = normal time ÷ (1 − allowance share). |
| Kinds of allowance | Personal needs, fatigue (rest) and unavoidable delay are the usual ones. Policy and special allowances, such as for set-up, are added only when stated. |
| Fly-back and continuous timing | Fly-back: the watch is reset after every element. Continuous (cumulative): the watch runs on and element times are found by subtraction, so no time is lost while resetting. |
| Work sampling | Many random snapshots of whether a worker or machine is busy or idle. The share of snapshots gives the share of time. It needs no stop-watch and suits long, irregular jobs. |
| PMTS | Predetermined motion time systems give times for basic motions from tables, with no rating. MTM measures in time measurement units (TMU), and Work Factor is another such system. |
| Synthetic data and analytical estimating | Synthetic data builds a new job's time from element times already measured on similar jobs. Analytical estimating judges times for long, non-repetitive jobs such as maintenance. |
| Labour efficiency | Standard hours earned ÷ hours actually worked. Over 100% means the work took less time than standard. |

### Formulas worth adding

```math
\text{NT} = \text{OT} \times \frac{R}{100}
```

NT is normal time, OT observed time and R the performance rating in percent.

```math
\text{ST} = \text{NT}(1 + A) \qquad \text{or} \qquad \text{ST} = \frac{\text{NT}}{1 - A}
```

Use the first when A is a fraction of the normal time. Use the second when A is a fraction of the working shift, for example 60 minutes of allowances in a 480-minute shift gives A = 0.125.

```math
N = \frac{Z^2 \, p(1 - p)}{S^2}
```

This is the number of work sampling observations: p is the share of time in the activity, S the accuracy as an absolute share (±4% is 0.04), and Z is 1.96 for 95% confidence (often rounded to 2) or 3 for 99.73%. If the accuracy is given relative to p, replace S with S × p.

```math
N = \left( \frac{40\sqrt{n \sum x^2 - \left(\sum x\right)^2}}{\sum x} \right)^2
```

This is the number of stop-watch readings needed for 95% confidence and ±5% accuracy, from a first set of n readings x.

```math
1 \text{ TMU} = 0.00001 \text{ h} = 0.0006 \text{ min} = 0.036 \text{ s}
```

### Doubts cleared

**Doubt: Why does a rating above 100 make the normal time longer?** The rating says how fast the worker was. A worker at 120% did the job faster than a normal worker would, so a normal worker needs 1.2 times the observed time.

**Doubt: How do I know which allowance formula to use?** Read what the percentage is a share of. "12% of normal time" means multiply by 1.12. "60 minutes per 8-hour shift" or "12% of the working day" means divide by (1 − share).

**Doubt: Why is idle time taken out before dividing by the output?** The standard time is the time to do the work. Minutes in which nobody worked produced nothing, so they must not be spread over the pieces made.

**Doubt: Does work sampling need a rating?** Plain work sampling only counts busy and idle snapshots, so it needs no rating. Rated work sampling adds a rating to each snapshot when a standard time is wanted.

**Doubt: Is ±4% accuracy 0.04 or 4% of p?** Exam questions usually mean an absolute 0.04. If the answer is not in the options, try S × p as well.

### Tricky past questions with solutions

**Q1. ESE Mechanical 2017.** An 8-hour measurement study in a plant shows that 320 units were produced. The idle time was 15%, the performance rating 120% and the allowance 12% of the normal time. The standard time per unit is: (a) 1.823 min (b) 1.714 min (c) 1.645 min (d) 1.286 min

*Answer: (b) 1.714 min.*

1. Working time = 480 × (1 − 0.15) = 408 min.
2. Observed time per unit = 408 ÷ 320 = 1.275 min.
3. Normal time = 1.275 × 1.20 = 1.53 min.
4. Standard time = 1.53 × 1.12 = 1.714 min.

**The trap:** Leaving the idle time in gives 480 ÷ 320 = 1.5 min and a standard time of 2.016 min. Dividing by the rating instead of multiplying gives 1.19 min. Both slips are common, so do the three steps in order: remove idle time, apply the rating, add the allowance.

**Q2. ISRO IPRC Technical Assistant (Mechanical), 21 April 2016.** A job to be time studied has the following allowances in an 8-hour shift: fatigue 10 minutes, delay 25 minutes and personal 25 minutes. The total allowance factor used to find the standard time is: (a) 1.143 (b) 12.0 (c) 0.8 (d) None of these

*Answer: (a) 1.143.*

1. Total allowance = 10 + 25 + 25 = 60 min in a shift of 8 × 60 = 480 min.
2. These minutes are lost from the shift, so only 480 − 60 = 420 min are worked.
3. Allowance factor = 480 ÷ 420 = 1 ÷ (1 − 60/480) = 1.143.

**The trap:** 60 ÷ 480 = 12.5%, so many students write 1.125 and, not finding it, choose (d). When allowances are minutes of the shift, the factor is shift ÷ working time, not 1 + share. Options (b) and (c) are not factors at all: a factor that multiplies the normal time must be a little above 1.

**Q3. RPSC Mechanical Engineering Lecturer 2011.** A company wishes to find the proportion of time a machine is idle. In 150 random observations, the machine was idle 26% of the time. For 95% confidence and an accuracy of ±4%, how many more observations are needed? (a) 9 (b) 150 (c) 312 (d) 462

*Answer: (c) 312.*

1. Total observations N = 1.96² × 0.26 × 0.74 ÷ 0.04².
2. 3.8416 × 0.1924 = 0.7391, and 0.7391 ÷ 0.0016 = 462.
3. 150 have already been taken, so 462 − 150 = 312 more are needed.

**The trap:** (d) 462 is the total, not the number still to be taken. The question says "more", so subtract the 150 already made.

## 3. Inventory control

The traps here are the assumptions behind the basic EOQ, the price break that beats the EOQ, and the reorder point when the lead time is longer than one cycle.

### Going deeper

| Idea | What it means |
| --- | --- |
| What the basic EOQ assumes | Demand known and steady, lead time known and constant, the whole order arrives at once, no shortages, a fixed price with no discounts, a fixed cost per order and a holding cost per unit. |
| Lead time in the EOQ | The model needs the lead time to be known, not short. Its length changes only the reorder point, never the EOQ. |
| Costs at the EOQ | Yearly ordering cost equals yearly holding cost, each half of the total variable cost. |
| A flat cost curve | Near the EOQ the total cost hardly changes. Ordering 25% more than the EOQ raises the cost by only about 2.5%, so rounding the EOQ does little harm. |
| Shortages allowed | If unmet demand can wait (backorders), the best order is bigger than the basic EOQ by the factor √((Ch + Cs) ÷ Cs). With a huge shortage cost the factor falls to 1. |
| Production lot size | When stock is made at rate p while used at rate d, it never builds up to the full lot. The best lot (EPQ) is bigger than the EOQ. |
| Quantity discounts | Find the EOQ at each price. If it falls below the quantity needed for that price, move it up to that quantity. Then compare total costs with the purchase cost included. |
| Reorder point | Demand during the lead time plus any safety stock. If that is more than one order, some orders are already on the way, so subtract them. |
| ABC | By yearly consumption value (price × yearly use). A items: few items, most of the money. |
| VED | By how critical the item is: vital, essential, desirable. Used for spare parts. |
| HML | By unit price: high, medium, low. |
| FSN | By how often the item is issued: fast-moving, slow-moving, non-moving. |
| SDE and GOLF | SDE by how easy the item is to buy: scarce, difficult, easy. GOLF by source: government, ordinary, local, foreign. |
| Q and P systems | Q system: a fixed quantity is ordered whenever stock falls to the reorder point (two-bin is one form). P system: stock is reviewed at fixed intervals and topped up to a target. |

### Formulas worth adding

```math
Q^* = \sqrt{\frac{2DC_o}{C_h}}, \qquad \text{TVC}^* = \sqrt{2DC_oC_h} = C_h Q^*
```

D is the yearly demand, Co the cost per order and Ch the holding cost per unit per year. TVC\* is the yearly ordering plus holding cost at the EOQ.

```math
Q^*_{\text{shortage}} = \sqrt{\frac{2DC_o}{C_h}} \times \sqrt{\frac{C_h + C_s}{C_s}}
```

Cs is the shortage (backorder) cost per unit per year.

```math
\text{EPQ} = \sqrt{\frac{2DC_o}{C_h\left(1 - \dfrac{d}{p}\right)}}
```

d is the rate of use and p the rate of production, in the same units.

```math
\text{TC} = DP + \frac{D}{Q}C_o + \frac{Q}{2}C_h
```

This is the total yearly cost with the purchase cost DP. Use it to compare price breaks.

```math
\text{ROP} = dL - nQ^*
```

d is the demand per day and L the lead time in days. n is the number of whole orders that fit into dL (0 when dL is less than Q\*), which are already on the way.

### Doubts cleared

**Doubt: Does the EOQ model assume a long or a short lead time?** Neither. It assumes the lead time is known and constant. A long lead time only means you reorder earlier.

**Doubt: Why does allowing shortages make the order bigger?** Some demand waits for the next order instead of being held in stock, so the average stock and the holding cost fall. Holding is now cheaper, so fewer, bigger orders pay.

**Doubt: ABC or VED for spare parts?** VED. A cheap gasket can stop a whole plant, so it is vital even though ABC would call it C. Many stores use both together.

**Doubt: Why can't I just order the EOQ when there is a discount?** The EOQ formula leaves out the purchase price. A discount can save far more on purchase cost than it adds in holding cost, so the total cost must be compared.

**Doubt: How can the reorder point be smaller than the demand during the lead time?** When the lead time is longer than one cycle, a full order is already on the way when you reorder. The reorder point counts only the stock on hand, so the orders on the way are subtracted.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q96.** Which of the following are assumptions of the basic EOQ model? (i) Demand is known and constant. (ii) Lead time is high. (iii) Price per unit is fixed. (iv) Ordering cost does not vary with the quantity ordered. (a) (i) and (ii) (b) (i), (ii) and (iv) (c) (i), (iii) and (iv) (d) None of these

*Answer: (c) (i), (iii) and (iv).*

1. The basic model takes demand as known and steady, so (i) is an assumption.
2. It assumes a fixed price with no discounts, so (iii) is one too.
3. The cost of placing an order is the same whatever the quantity, so (iv) is one too.
4. The model needs a known, constant lead time, not a high one, so (ii) is not.

**The trap:** Lead time does appear in the model's assumptions, so (ii) sounds familiar. The word that matters is "high": the length of the lead time changes only the reorder point.

**Q2. Kerala PSC AE (Mechanical) 104/2025, Q91.** Which of the following are selective inventory control techniques? (i) ABC (ii) HML (iii) VED (iv) FSN (a) Only (i) and (ii) (b) Only (ii) and (iv) (c) None of these (d) All of these

*Answer: (d) All of these.*

1. Selective control means sorting items into groups and controlling each group as closely as it deserves.
2. ABC sorts by consumption value, HML by unit price, VED by how critical the item is and FSN by how often it is issued. All four are such groupings.

**The trap:** ABC is the one everyone knows, so students stop at the options with (i) in them. Every lettered grouping in the table above, SDE and GOLF included, is a selective technique.

**Q3. DRDO CEPTAM Tier-II, STA B (Mechanical), 15 June 2026.** An item has an annual demand of 2400 units, an ordering cost of ₹120 per order, a holding cost of ₹8 per unit per year and a shortage cost of ₹20 per unit per year. Shortages are allowed and back-ordered. The economic order quantity is about: (a) 268 units (b) 368 units (c) 318 units (d) 218 units

*Answer: (c) 318 units.*

1. Basic EOQ = √(2 × 2400 × 120 ÷ 8) = √72,000 = 268.3 units.
2. Shortage factor = √((8 + 20) ÷ 20) = √1.4 = 1.183.
3. EOQ with shortages = 268.3 × 1.183 = 317.5, about 318 units.

**The trap:** (a) 268 is the basic EOQ, which is right only when shortages are not allowed. With shortages allowed, the order is always bigger than the basic EOQ, so (d) 218 cannot be right either.

**Q4. RPSC Lecturer (Technical Education) 2020, Mechanical Paper I.** The demand for a commodity is 100 units per day. Every time an order is placed, a fixed cost of ₹400 is incurred. The holding cost is ₹0.08 per unit per day. If the lead time is 13 days, the economic lot size and the reorder point are: (a) 800 and 130 units (b) 840 and 100 units (c) 890 and 300 units (d) 1000 and 300 units

*Answer: (d) 1000 and 300 units.*

1. All data are per day, so EOQ = √(2 × 100 × 400 ÷ 0.08) = √1,000,000 = 1000 units.
2. One order lasts 1000 ÷ 100 = 10 days, but the lead time is 13 days.
3. Demand during the lead time = 100 × 13 = 1300 units. One full order of 1000 is already on the way when you reorder.
4. Reorder point on hand = 1300 − 1000 = 300 units.

**The trap:** The usual answer is 1300, the demand during the lead time, and it is not among the options. The reorder point counts only the stock on hand, so the order of 1000 already on the way is subtracted. Always check whether the lead time is longer than one cycle.

**Q5. GATE ME 2006.** The annual demand for an item is 2500 units, the ordering cost is ₹100 per order and the holding cost is 25% of the unit price per year. The supplier charges ₹10 per unit for orders below 500 units and ₹9 per unit for orders of 500 units or more. The optimum order quantity is: (a) 447 units (b) 471 units (c) 500 units (d) 600 units or more

*Answer: (c) 500 units.*

1. At ₹10, Ch = 2.5, so EOQ = √(2 × 2500 × 100 ÷ 2.5) = 447 units. This is below 500, so it is allowed at ₹10.
2. At ₹9, Ch = 2.25, so EOQ = √(500,000 ÷ 2.25) = 471 units. This is below 500, so ₹9 is not available at 471. Move it up to 500.
3. Total cost at 447: 25,000 + 559 + 559 = ₹26,118.
4. Total cost at 500: 22,500 + 500 + 562.5 = ₹23,562.5. This is lower, so order 500 units.

**The trap:** (b) 471 is the EOQ at the lower price, but the supplier gives that price only from 500 units. (a) 447 is the right EOQ for the higher price but ignores the ₹2500 saved on purchase cost.

## 4. PERT and CPM

The traps here are adding standard deviations instead of variances, believing crashing always costs more, and mixing up which ideas belong to PERT and which to CPM.

### Going deeper

| Idea | What it means |
| --- | --- |
| Event-oriented and activity-oriented | A PERT network is built around events (the moments when activities start or finish). A CPM network is built around the activities and their costs. |
| Probabilistic and deterministic | PERT allows for doubt in the times, so it uses three estimates per activity and a beta distribution. CPM takes one known time per activity. |
| Project duration in PERT | The sum of the mean times along the critical path. By the central limit theorem it is taken as normally distributed. |
| Variance of the project | Add the variances of the critical activities, then take the square root. Standard deviations are never added. |
| Probability of finishing | Z = (scheduled time − expected time) ÷ σ. Z = 0 gives exactly 50%, Z = 1 about 84% and Z = 2 about 98%. |
| Slack and float | Slack belongs to events (L − E). Float belongs to activities. On the critical path both are the least, zero when the target equals the earliest finish. |
| Kinds of float | Total float: how long an activity can slip without delaying the project. Free float: without delaying the next activity. Independent float: without affecting any activity before or after it. |
| Crashing | Shortening an activity by spending more on it, for example with overtime. Only critical activities are crashed, cheapest cost slope first, and the critical path is checked after every step. |
| Parallel critical paths | Once two paths are both critical, they must be shortened together. Crash one activity common to both, or one activity on each path, whichever costs less per day. |
| Optimum duration | Direct cost rises and indirect cost falls as the project is crashed. Total cost falls while the cost slope is below the indirect cost per day, then rises. |
| Resource levelling and smoothing | Both are CPM resource scheduling methods. Levelling keeps resource use within a limit even if the project gets longer. Smoothing evens out resource use within the floats, keeping the duration fixed. |
| Dummy activity | Takes no time and no resources. It shows a dependency or keeps two activities from having the same start and end events. |

### Formulas worth adding

```math
t_e = \frac{t_o + 4t_m + t_p}{6}, \qquad \sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2
```

to is the optimistic, tm the most likely and tp the pessimistic time.

```math
T_e = \sum t_e, \qquad \sigma_T = \sqrt{\sum \sigma^2}, \qquad Z = \frac{T_s - T_e}{\sigma_T}
```

The sums run over the critical path. Ts is the scheduled time.

```math
\text{Cost slope} = \frac{C_c - C_n}{T_n - T_c}
```

Cc and Cn are the crash and normal costs, Tn and Tc the normal and crash times. It is the extra cost per day saved.

```math
\text{TF} = \text{LS} - \text{ES}, \qquad \text{FF} = \text{ES}_{\text{next}} - \text{EF}
```

TF is total float and FF free float. ES, EF and LS are the earliest start, earliest finish and latest start of the activity, and ESnext is the earliest start of the activity after it.

### Doubts cleared

**Doubt: Why add variances and not standard deviations?** For independent times, variances add exactly. Standard deviations do not: two activities with σ = 3 and 4 give σ = 5 for the pair, not 7.

**Doubt: Does crashing always make a project dearer?** No. Crashing raises the direct cost but saves indirect cost, such as overheads, every day the project is shorter. While the cost slope is below the daily indirect cost, the total falls.

**Doubt: Why crash only critical activities?** The project's length is the length of the critical path. Shortening any other activity just adds float to it and saves no time.

**Doubt: Can a PERT activity be crashed?** PERT is built to deal with doubtful times and has no time-cost trade-off. Crashing belongs to CPM, where times and costs are known.

**Doubt: Can the slack be negative?** Yes, when the scheduled completion is earlier than the earliest possible finish. The critical path is then the path with the least slack, not zero slack.

### Tricky past questions with solutions

**Q1. BPSC AE Paper 6 (Mechanical), 25 March 2022.** Consider the following statements about PERT and CPM: 1. PERT is event-oriented while CPM is activity-oriented. 2. PERT is probabilistic while CPM is deterministic. 3. Resource levelling and resource smoothing are resource scheduling techniques used in CPM. Which of these are correct? (a) 1, 2 and 3 (b) 1 and 2 only (c) 2 and 3 only (d) 1 and 3 only

*Answer: (a) 1, 2 and 3.*

1. PERT networks are drawn around events and CPM networks around activities, so 1 is true.
2. PERT uses three time estimates and a probability distribution, while CPM uses one fixed time, so 2 is true.
3. Levelling and smoothing both schedule resources over a CPM network using the floats, so 3 is true.

**The trap:** Statements 1 and 2 are the textbook pair, so (b) is the quick pick. Statement 3 is true too: CPM works with known times, which is what lets you move activities around within their floats.

**Q2. ESE Mechanical 2021.** Which of the following statements is not correct about PERT? (a) The network is built on events. (b) It does not take into account the uncertainty in estimating times. (c) It deals with uncertainty, so three time estimates are used. (d) As the time is not certain, activity durations cannot be reduced.

*Answer: (b).*

1. PERT networks are event-oriented, so (a) is correct.
2. PERT exists to deal with doubtful times, which is why it uses three estimates. So (c) is correct and (b), its opposite, is the wrong statement.
3. PERT has no time-cost trade-off: crashing is a CPM method. So (d) is taken as correct.

**The trap:** (d) looks wrong because any activity can be speeded up in real life. The examiner means that PERT itself has no crashing step, so (d) is not the statement to pick.

**Q3. ESE Civil 2016 (Paper I).** Statement (I): Crashing a project always increases its total cost, whatever the indirect cost. Statement (II): In crashing, only the activities on the critical path are compressed. (a) Both statements are true and Statement (II) is the correct explanation of Statement (I) (b) Both statements are true but Statement (II) is not the correct explanation of Statement (I) (c) Statement (I) is true but Statement (II) is false (d) Statement (I) is false but Statement (II) is true

*Answer: (d).*

1. Crashing raises the direct cost but saves indirect cost every day the project is shortened. While the cost slope is below the daily indirect cost, the total cost falls. So (I) is false.
2. Only critical activities control the project's length, so only they are crashed. (II) is true.

**The trap:** Crashing means paying extra, so (I) sounds true and students pick (a) or (b). The words "whatever the indirect cost" make it false: the total cost curve is U-shaped.

**Q4. GATE ME 2021 (Shift 1).** Activities A, B, C and D form the critical path of a project network. Their mean durations are 6, 11, 8 and 15 days and their variances 4, 9, 4 and 9 days². The probability that the project is completed within 40 days is \_\_\_\_ (round off to one decimal place).

*Answer: 0.5.*

1. Expected project time = 6 + 11 + 8 + 15 = 40 days.
2. Variance = 4 + 9 + 4 + 9 = 26, so σ = 5.1 days.
3. Z = (40 − 40) ÷ 5.1 = 0, and the normal curve has half its area below Z = 0. The probability is 0.5.

**The trap:** The variances are there to make you calculate. When the scheduled time equals the expected time, the answer is 0.5 whatever σ is. Students who add the standard deviations (2 + 3 + 2 + 3 = 10) waste time and still get 0.5, but the same slip ruins any other target time.

**Q5. GATE ME 2014 (Shift 2).** A project has four activities. P takes 3 days, has no predecessor and costs ₹500 per day to crash. Q takes 7 days, follows P and costs ₹100 per day to crash. R takes 4 days, follows P and costs ₹400 per day to crash. S takes 5 days, follows R and costs ₹200 per day to crash. The normal cost of the project is ₹10,000 and the overhead cost is ₹200 per day. If the project is crashed to 9 days, the total cost of the project in rupees is \_\_\_\_.

*Answer: ₹12,500.*

1. Paths: P–Q = 3 + 7 = 10 days and P–R–S = 3 + 4 + 5 = 12 days. The normal duration is 12 days.
2. From 12 to 10 days only P–R–S is critical. Its cheapest activity is S at ₹200 per day, so crash S by 2 days: ₹400.
3. Both paths are now 10 days. To save one more day, crash P alone (₹500), or Q with S (₹100 + ₹200 = ₹300), or Q with R (₹500). Q with S is cheapest: ₹300.
4. Direct cost = 10,000 + 400 + 300 = ₹10,700. Overhead = 9 × 200 = ₹1800. Total = ₹12,500.

**The trap:** Crashing Q first because it is the cheapest gives nothing, since Q is not critical at the start. At the last step many students crash only S, which leaves P–Q at 10 days.

## 5. Production planning and control

The traps here are in sequencing: which rule minimises what, how Johnson's rule places a job, and the difference between lateness and tardiness. Kerala PSC also likes "none of these" options built on the list of rules.

### Going deeper

| Idea | What it means |
| --- | --- |
| Planning and control | Planning: routing, estimating, scheduling and loading. Control: dispatching, follow-up (expediting), inspection and corrective action. |
| Routing, scheduling, loading, dispatching | Routing fixes the path and order of operations. Scheduling fixes when each starts and ends. Loading assigns the work to machines. Dispatching releases the orders and papers to start the work. |
| FCFS | First come, first served. Fair, but it ignores job length and due date. |
| SPT | Shortest processing time first. It gives the least mean flow time, mean waiting time and average number of jobs in the shop. |
| EDD | Earliest due date first. It gives the least maximum lateness. |
| Critical ratio | Time left until the due date ÷ work time left. Below 1, the job is behind. The smallest ratio goes first, and the ratios are worked out again as time passes. |
| Slack time remaining | Time left until the due date minus work time left. The smallest slack goes first. |
| Johnson's rule | For n jobs on two machines in the same order, it gives the least makespan. Pick the smallest time left in the table. If it is on the first machine, put that job as early as possible; if on the second, as late as possible. Cross the job off and repeat. |
| Johnson for three machines | Allowed when the smallest time on machine 1 or machine 3 is at least the largest time on machine 2. Make two dummy machines, G = M1 + M2 and H = M2 + M3, and apply the two-machine rule. |
| Lateness and tardiness | Lateness = completion time − due date, and it can be negative. Tardiness is the lateness when positive and zero otherwise. |
| MRP | Inputs: master production schedule, bill of materials and inventory status file. Output: planned orders for every part. MRP II adds capacity, money and the rest of the business. |
| JIT and kanban | A pull system: each stage makes only what the next stage takes. Kanban cards carry the signal. Stock is kept as low as possible. |

### Formulas worth adding

```math
\bar{F} = \frac{\sum C_i}{n}, \qquad \text{average jobs in system} = \frac{\sum C_i}{\text{makespan}}
```

Ci is the completion time of job i when all jobs are ready at time zero, so it is also the flow time.

```math
L_i = C_i - d_i, \qquad T_i = \max(0,\; C_i - d_i)
```

di is the due date of job i, Li its lateness and Ti its tardiness.

```math
\text{CR} = \frac{\text{due date} - \text{today}}{\text{work time remaining}}
```

### Doubts cleared

**Doubt: Does SPT also give the least tardiness?** Not always. SPT gives the least mean flow time. EDD gives the least maximum lateness. Neither always gives the least total tardiness, so work out the rule the question names.

**Doubt: Is the critical ratio a sequencing rule or a measure?** Both. It measures how urgent a job is, and "smallest ratio first" is a sequencing rule that keeps changing as work goes on.

**Doubt: In Johnson's rule, what if two jobs tie?** If both are on the first machine, either can go first. If one job has the same smallest time on both machines, it can go at either end. The makespan comes out the same.

**Doubt: Is the makespan the total time on the first machine?** No. The second machine must wait for the first and then work on the last job. The makespan is at least the first machine's total plus the last job's second-machine time.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q93.** Consider these statements: (i) Critical ratio = time remaining until the due date ÷ total shop time remaining. (ii) The critical ratio is a sequencing rule. Which is correct? (a) Only (i) (b) Only (ii) (c) Both (i) and (ii) (d) Neither (i) nor (ii)

*Answer: (c) Both (i) and (ii).*

1. The critical ratio divides the time left before the due date by the processing time still needed in the shop, so (i) is the definition.
2. Jobs are run in order of smallest critical ratio first, which makes it a sequencing (priority) rule, so (ii) is true.

**The trap:** The ratio is often taught as a way to see which jobs are behind, so students think it only measures and choose (a). It is also one of the standard dispatching rules, with FCFS, SPT and EDD.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q95.** Which of the following is not a sequencing rule? (a) FCFS (b) EDD (c) SPT (d) None of these

*Answer: (d) None of these.*

1. FCFS runs jobs in order of arrival, EDD in order of due date and SPT in order of processing time.
2. All three are sequencing rules, so none of them is the odd one out.

**The trap:** The question asks for the one that is not a rule, so students feel they must pick a rule to reject. FCFS looks too simple to be a rule, but it is the usual baseline that others are compared with.

**Q3. GATE ME 2022 (Shift 2).** Parts P1 to P7 are machined first on a milling machine and then polished on a separate machine. The milling and polishing times in minutes are: P1 8 and 6, P2 3 and 2, P3 3 and 4, P4 4 and 6, P5 5 and 7, P6 6 and 4, P7 2 and 1. The least time needed to finish all seven parts is: (a) 31 min (b) 33 min (c) 30 min (d) 32 min

*Answer: (b) 33 min.*

1. Johnson's rule: P7 has the smallest time (1, polishing), so it goes last. Next, P2 (2, polishing) goes second last.
2. P3 (3, milling) goes first. Then P4 (4, milling) goes second and P6 (4, polishing) goes third last. Then P5 (5, milling) goes third, and P1 fills the gap.
3. Sequence: P3, P4, P5, P1, P6, P2, P7. Milling ends at 3, 7, 12, 20, 26, 29 and 31 min.
4. Polishing starts when both the part and the polisher are free: P3 3–7, P4 7–13, P5 13–20, P1 20–26, P6 26–30, P2 30–32 and P7 32–33. The makespan is 33 min.

**The trap:** (a) 31 min is when the milling machine finishes. The polisher still has P2 and P7 to do after that.

**Q4. GATE ME 2010.** Four jobs J1, J2, J3 and J4 have processing times of 4, 7, 2 and 8 days and due dates of 6, 9, 19 and 17 days. Using the shortest processing time (SPT) rule, the total tardiness is: (a) 0 (b) 2 (c) 6 (d) 8

*Answer: (d) 8 days.*

1. SPT order: J3 (2), J1 (4), J2 (7), J4 (8).
2. Completion times: J3 2, J1 6, J2 13, J4 21.
3. Tardiness: J3 0 (due 19), J1 0 (due 6), J2 13 − 9 = 4, J4 21 − 17 = 4.
4. Total tardiness = 0 + 0 + 4 + 4 = 8 days.

**The trap:** Adding lateness instead of tardiness gives −17 + 0 + 4 + 4 = −9, which is not an option, and students then guess. Tardiness never goes below zero, so early jobs count as zero, not as a credit.

## 6. Plant layout and material handling

The traps here are the line balancing sums, where the slowest station sets the pace, and the names: cellular, group and group technology layouts are one idea, and the unit load principle covers several ways of packing a load.

### Going deeper

| Idea | What it means |
| --- | --- |
| Product (line) layout | Machines in the order of operations for one product. Little handling and little work in progress, but no flexibility: one breakdown stops the line. Used for mass production. |
| Process (functional) layout | Similar machines grouped together, such as all lathes in one bay. Flexible for job and batch work, but parts travel far and wait long. |
| Fixed position layout | The product stays in one place and the workers, tools and materials come to it. Used for ships, aircraft and large turbines. |
| Cellular (group technology) layout | Parts are sorted into families with similar shapes or routes, and each family gets a cell of the different machines it needs. It combines the flow of a product layout with the variety of a process layout. Also called group layout. |
| Forming part families | Coding systems such as Opitz sort parts by shape. Production flow analysis and rank order clustering sort them by the machines they visit. |
| Cycle time | When a line is designed, the cycle time comes from demand: available time ÷ required output. On an existing line, the slowest station sets it. |
| Line balancing | Grouping tasks into stations so that each station's time is as close as possible to the cycle time. Common methods are the largest candidate rule, Kilbridge and Wester, and ranked positional weights. |
| Balance delay | The share of the line's time that is idle. It is 1 minus the line efficiency. |
| Computer layout methods | CRAFT improves a starting layout using a from-to chart and handling costs. ALDEP and CORELAP build a layout from a relationship chart with ratings A, E, I, O, U and X. |
| Unit load principle | Move goods in the largest unit that can be handled safely: on pallets (palletisation), in containers (containerisation) or strapped together as one unit (unitisation). |
| Other handling principles | Use gravity where possible, handle as few times as possible, keep the dead weight of the equipment low compared with the load, and standardise the equipment. |
| Choosing equipment | Conveyors: a fixed path and a steady flow. Cranes and hoists: heavy loads lifted within a fixed area. Industrial trucks and AGVs: any path, loads moved now and then. |

### Formulas worth adding

```math
C = \frac{\text{available time per day}}{\text{required output per day}}, \qquad N_{\min} = \left\lceil \frac{\sum t_i}{C} \right\rceil
```

ti are the task times. Round the minimum number of stations up.

```math
\eta = \frac{\sum t_i}{n\,C}, \qquad \text{balance delay} = 1 - \eta = \frac{nC - \sum t_i}{nC}
```

n is the number of stations actually used. On an existing line, C is the largest station time.

```math
\text{SI} = \sqrt{\sum \left(t_{\max} - t_i\right)^2}
```

The smoothness index: tmax is the largest station time and ti each station's time. A perfectly balanced line has SI = 0.

### Doubts cleared

**Doubt: Which cycle time do I use, the demand one or the slowest station?** If the question gives a required output, use available time ÷ output. If it gives the station times of a line already running, the slowest station sets the cycle time, because every other station must wait for it.

**Doubt: Is balance delay the same as idle time?** It is the idle time as a share of the total station time, nC. Divide by nC, not by the work content.

**Doubt: Are cellular layout and group layout different?** No. Both mean cells built for part families, the group technology idea. Kerala PSC uses "group layout".

**Doubt: Is palletisation different from the unit load principle?** It is one way of applying it. Containerisation and unitisation are others, so a question that lists all three wants "all of these".

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q92.** Which of the following follows the unit load principle of material handling? (a) Containerisation (b) Palletisation (c) Unitisation (d) All of these

*Answer: (d) All of these.*

1. The unit load principle says that goods should be moved in the largest unit that can be handled safely, not piece by piece.
2. Putting goods on a pallet, packing them in a container and strapping them into one unit are all ways of making such a unit load.

**The trap:** Palletisation is the textbook example, so (b) is tempting. Containerisation and unitisation are the same idea at a different size.

**Q2. AAI JE (Technical) 2018.** To apply the concepts, principles and approaches of group technology, the type of layout used is: (a) job-shop layout (b) fixed position layout (c) product layout (d) cellular layout

*Answer: (d) cellular layout.*

1. Group technology sorts parts into families that need similar machining.
2. Each family is given a cell holding the different machines it needs, laid out in the order the parts visit them. That is a cellular layout.

**The trap:** Inside each cell the machines follow the parts' route, like a small product layout, so (c) looks right. But the plant as a whole makes many families on many cells, which is the cellular layout.

**Q3. UPSC ESE 2017 (Paper I).** Five workers on a gear box assembly line take 10, 8, 6, 9 and 10 minutes for their tasks. The balance delay of the line is: (a) 13.3% (b) 14.0% (c) 16.0% (d) 43.3%

*Answer: (b) 14.0%.*

1. The slowest stations take 10 min, so the cycle time is 10 min.
2. Total work content = 10 + 8 + 6 + 9 + 10 = 43 min. Total station time = 5 × 10 = 50 min.
3. Line efficiency = 43 ÷ 50 = 86%, so the balance delay is 100 − 86 = 14%.

**The trap:** Dividing the idle time (7 min) by the work content (43 min) gives 16.3%, close to (c). Balance delay is always idle time ÷ total station time.

## 7. Quality control

The traps here are the names: process capability against the capability index, control limits against specification limits, and which chart goes with which kind of data. Acceptance sampling adds the shape of the OC curve.

### Going deeper

| Idea | What it means |
| --- | --- |
| Charts for variables | Measured values such as a diameter. The X-bar chart watches the average and the R chart (or s chart) watches the spread. They are used together. |
| Charts for attributes | Counted values. p chart: fraction defective. np chart: number defective in samples of a fixed size. c chart: defects per unit or per sample of fixed size. u chart: defects per unit when the sample size changes. |
| 3-sigma limits | 99.73% of points from a stable process fall inside them, so only about 3 in 1000 cross the limits by chance. |
| Chance and assignable causes | Chance (common) causes are the many small variations always present. Assignable (special) causes, such as a worn tool, push points out of the limits and can be found and removed. |
| Run rules | A process can be out of control with every point inside the limits, for example seven points in a row on one side of the centre line. |
| Control limits and specification limits | Control limits come from the process: what it does. Specification limits come from the design: what is wanted. A stable process can still make rejects. |
| Process capability | The natural spread of the process, 6σ. It is a length, not a ratio. |
| Capability index Cp | Specification width ÷ 6σ. Above 1 the process fits inside the specification; 1.33 or more is the usual target. |
| Cpk | Like Cp, but measured from the process mean to the nearer limit. It equals Cp only when the process is centred. |
| OC curve | Probability of accepting a lot against the fraction defective in it. The ideal curve is a vertical step: accept every good lot, reject every bad one. A bigger sample makes the curve steeper. |
| Shape of the OC curve | With acceptance number c of 1 or more the curve is an inverted S, flat at first. With c = 0 it falls from the start and bends upward all the way: a convex curve with no flat shoulder. |
| Producer's and consumer's risk | Producer's risk α: a good lot (at the AQL) is rejected. Consumer's risk β: a bad lot (at the LTPD) is accepted. |
| Kinds of sampling plan | Single, double, multiple and sequential. Double and multiple plans take a second sample only when the first is unclear, so they inspect less on average. |
| Six sigma | The limits are 6σ from the mean. Allowing the mean to drift by 1.5σ, this gives 3.4 defects per million. |

### Formulas worth adding

```math
\text{UCL}_{\bar{X}} = \bar{\bar{X}} + A_2\bar{R}, \quad \text{LCL}_{\bar{X}} = \bar{\bar{X}} - A_2\bar{R}, \quad \text{UCL}_R = D_4\bar{R}, \quad \text{LCL}_R = D_3\bar{R}
```

A2, D3 and D4 come from tables for the sample size.

```math
\text{p chart: } \bar{p} \pm 3\sqrt{\frac{\bar{p}(1 - \bar{p})}{n}}, \qquad \text{c chart: } \bar{c} \pm 3\sqrt{\bar{c}}
```

If a lower limit comes out negative, it is taken as zero.

```math
C_p = \frac{\text{USL} - \text{LSL}}{6\sigma}, \qquad C_{pk} = \min\left(\frac{\text{USL} - \mu}{3\sigma},\; \frac{\mu - \text{LSL}}{3\sigma}\right)
```

```math
P_a = (1 - p)^n \approx e^{-np} \quad (c = 0), \qquad \text{AOQ} \approx P_a\, p
```

Pa is the probability of acceptance. AOQ is the average outgoing quality when rejected lots are fully inspected and their defectives replaced.

### Doubts cleared

**Doubt: Can a process be in control and still make rejects?** Yes. In control means only chance causes are acting. If the natural spread 6σ is wider than the specification (Cp below 1), some parts will fall outside it.

**Doubt: Process capability or capability index?** Process capability is the spread itself, 6σ. The capability index is the ratio of the specification width to that spread.

**Doubt: p chart or c chart?** Ask what is counted. If each part is either good or defective, use p or np. If one part can have many defects, such as flaws on a sheet, use c or u.

**Doubt: Why does c = 0 give a convex OC curve?** With c = 0, a single defective in the sample rejects the lot. Pa = (1 − p)ⁿ falls fast as soon as p rises above zero, with no flat start.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q98.** Which are advantages of acceptance sampling? (i) It is less expensive than 100% inspection. (ii) It is useful where inspection damages or destroys the product. (a) Only (i) (b) Only (ii) (c) Both (i) and (ii) (d) Neither (i) nor (ii)

*Answer: (c) Both (i) and (ii).*

1. Only a sample of each lot is inspected, so it costs less than checking every item. (i) is true.
2. When a test destroys the item, such as firing a cartridge or a tensile test, 100% inspection would leave nothing to sell. Sampling is the only way. (ii) is true.

**The trap:** Sampling sounds like a shortcut that only saves money, so (a) is tempting. Destructive testing is in fact the main case where sampling is the only choice.

**Q2. GATE PI 2021.** When the acceptance number of a single sampling plan is zero and the sample size is 10 or less, the operating characteristic (OC) curve is: (a) a horizontal line (b) a vertical line (c) a convex function (d) an inverted S-shape

*Answer: (c) a convex function.*

1. With c = 0, the lot is accepted only if the sample has no defective, so Pa = (1 − p)ⁿ.
2. This falls steeply as soon as p rises above zero and flattens out later. It bends upward all the way, so the curve is convex.
3. An inverted S needs c of 1 or more, which gives the flat start.

**The trap:** (d) is the shape drawn in every textbook, so most students pick it. The vertical line in (b) is the ideal OC curve, which no real sampling plan reaches.

**Q3. GATE PI 2019.** The average proportion non-conforming of 20 samples, each of size 100, is 0.12. The upper control limit of the p chart is \_\_\_\_ (round off to two decimal places).

*Answer: 0.22 (0.21 to 0.23 accepted).*

1. σp = √(0.12 × 0.88 ÷ 100) = √0.001056 = 0.0325.
2. UCL = 0.12 + 3 × 0.0325 = 0.12 + 0.0975 = 0.2175, about 0.22.

**The trap:** The 20 samples are there to mislead: n in the formula is the size of one sample, 100, not 20 or 2000. Using n = 2000 gives 0.14.

**Q4. JKSSB JE (Mechanical), 2 November 2021 (Shift 1).** The ratio of the difference between the specification limits to the process spread is called the: (a) process capability (b) process index (c) quality index (d) capability index

*Answer: (d) capability index.*

1. The difference between the specification limits is USL − LSL, the tolerance.
2. The process spread is 6σ.
3. Their ratio is Cp, the process capability index.

**The trap:** (a) process capability is the spread 6σ itself, not a ratio. The word "capability" in both options is what catches students.

## 8. Break-even analysis and depreciation

The traps here are dividing by the wrong per-unit figure, choosing between two processes with different fixed costs, and the book value under the faster depreciation methods.

### Going deeper

| Idea | What it means |
| --- | --- |
| Contribution | Selling price minus variable cost per unit. Each unit sold pays this much towards the fixed cost, then towards profit. |
| Break-even quantity | Fixed cost ÷ contribution per unit. Below it the firm loses money, above it the firm makes a profit. |
| P/V ratio | Contribution ÷ selling price. Fixed cost ÷ P/V ratio gives the break-even sales in rupees. |
| Margin of safety | Actual sales minus break-even sales. It is how far sales can fall before a loss. Profit = margin of safety × P/V ratio. |
| Angle of incidence | The angle at which the sales line cuts the total cost line on the chart. A larger angle means profit grows faster above break-even. |
| What moves the break-even point | Higher fixed cost or higher variable cost raises it. A higher selling price lowers it. The number of units actually sold does not change it. |
| Choosing between processes | A process with low fixed cost and high variable cost suits small outputs. One with high fixed cost and low variable cost suits large outputs. They cost the same at the indifference point. |
| Capital in the break-even point | The money spent on a machine enters the break-even sum only through yearly fixed costs, such as depreciation and interest. |
| Straight line | Equal depreciation every year: (cost − salvage) ÷ life. |
| Declining balance | A fixed percentage of the book value each year. The book value never reaches zero. Double declining balance uses twice the straight-line rate, 2 ÷ life. |
| Sum of years' digits | For a 5-year life the digits add to 15, and the yearly charges are 5/15, 4/15, 3/15, 2/15 and 1/15 of (cost − salvage). |
| Sinking fund | Equal yearly deposits that grow with interest to cover (cost − salvage). The charge is smallest early on, the opposite of the accelerated methods. |
| Accelerated methods | Declining balance and sum of years' digits charge more in the early years, so the book value falls faster than with the straight line. |

### Formulas worth adding

```math
Q_{\text{BEP}} = \frac{F}{S - V}, \qquad \text{BEP sales} = \frac{F}{1 - V/S}, \qquad \text{Profit} = Q(S - V) - F
```

F is the fixed cost, S the selling price and V the variable cost per unit.

```math
Q_{\text{indifference}} = \frac{F_Y - F_X}{V_X - V_Y}
```

This is the output at which processes X and Y cost the same.

```math
D_{\text{SL}} = \frac{P - S}{n}, \qquad \text{BV}_t = P - tD_{\text{SL}}
```

P is the first cost, S the salvage value, n the life and BVt the book value after t years.

```math
D_t = \frac{n - t + 1}{n(n + 1)/2}\,(P - S)
```

This is the sum of years' digits charge for year t.

```math
\text{BV}_t = P(1 - r)^t, \qquad r = 1 - \left(\frac{S}{P}\right)^{1/n}
```

This is the declining balance method with rate r.

### Doubts cleared

**Doubt: Does selling more units lower the break-even point?** No. The break-even point depends only on the fixed cost, the price and the variable cost. Selling more raises the profit and the margin of safety.

**Doubt: Why isn't the price of a machine used directly in the break-even sum?** The machine lasts many years. Only its yearly share, the depreciation plus interest on the money, is a fixed cost of each year.

**Doubt: In a process choice, which process wins above the indifference point?** The one with the lower variable cost. Its higher fixed cost is spread over so many units that the saving per unit wins.

**Doubt: Can declining balance depreciate an asset to zero?** No. A fixed share of what is left always leaves something. That is why its rate formula needs a salvage value above zero.

### Tricky past questions with solutions

**Q1. GATE PI 2014.** A company must choose a process for a new product. Process X has a fixed cost of ₹10,000 and a variable cost of ₹5 per unit. Process Y has a fixed cost of ₹40,000 and a variable cost of ₹2 per unit. For the least total cost, the right choice is: (a) below 10,000 units process X, above 10,000 units process Y (b) below 10,000 units process Y, above 10,000 units process X (c) below 20,000 units process X, above 20,000 units process Y (d) below 20,000 units process Y, above 20,000 units process X

*Answer: (a).*

1. Equal cost: 10,000 + 5Q = 40,000 + 2Q, so 3Q = 30,000 and Q = 10,000 units.
2. Below 10,000 units, X's low fixed cost wins. For example, at 5000 units X costs ₹35,000 and Y costs ₹50,000.
3. Above 10,000 units, Y's low variable cost wins.

**The trap:** 20,000 comes from 40,000 ÷ 2, using process Y alone instead of the differences between the two processes. Options (b) and (d) swap the processes, which happens when students think the bigger investment suits a small output.

**Q2. HPCL Engineer (Mechanical), 27 March 2025 (Shift 2).** When choosing plant and equipment, which cost factor most affects the break-even point? (a) The depreciation rate of the equipment over its useful life (b) The fixed operating costs of the equipment (c) The initial capital investment in the equipment (d) The variation in the cost of the raw materials it uses

*Answer: (b).*

1. Break-even quantity = fixed cost ÷ contribution per unit. The fixed cost is the numerator.
2. A plant's fixed operating costs, such as its depreciation, interest, insurance and upkeep, make up that numerator year after year.
3. Capital and depreciation enter only as parts of the yearly fixed cost, and raw materials are a variable cost.

**The trap:** (c) looks right because a big machine costs a lot. But the purchase price is spread over its life and enters only as part of the fixed costs in (b), which is the wider and correct answer.

**Q3. UKPSC JE (Mechanical) 2013, Paper I.** The fixed cost of making a product is ₹1,00,000 and the variable cost is ₹40 per unit. If the selling price is ₹80 per unit, the break-even quantity is: (a) 2500 units (b) 3500 units (c) 5000 units (d) 7000 units

*Answer: (a) 2500 units.*

1. Contribution per unit = 80 − 40 = ₹40.
2. Break-even quantity = 1,00,000 ÷ 40 = 2500 units.

**The trap:** Here the variable cost and the contribution are both ₹40, so a student who wrongly divides by the variable cost still gets 2500. That luck will not repeat: always divide by S − V. Dividing by the selling price gives 1250.

**Q4. GATE PI 2018.** The break-even point of a manufacturing company is 50,000 units. The fixed cost is ₹2,00,000 and the variable cost is ₹20 per unit. The selling price per unit in rupees is \_\_\_\_.

*Answer: ₹24.*

1. At break-even, Q(S − V) = F, so S − V = 2,00,000 ÷ 50,000 = ₹4.
2. S = 20 + 4 = ₹24.

**The trap:** ₹4 is the contribution, not the price. Students who stop after the division lose the mark.

**Q5. GATE CE 2021 (Shift 2).** Equipment bought for ₹1,60,000 has a salvage value of ₹10,000 and a life of 5 years. The difference between its book values at the end of the 4th year by the straight-line method and by the sum of years' digits method, in rupees, is \_\_\_\_.

*Answer: ₹20,000.*

1. Amount to depreciate = 1,60,000 − 10,000 = ₹1,50,000.
2. Straight line: 30,000 a year. Book value after 4 years = 1,60,000 − 1,20,000 = ₹40,000.
3. Sum of years' digits: 1 + 2 + 3 + 4 + 5 = 15. The first four years take (5 + 4 + 3 + 2)/15 = 14/15 of 1,50,000 = ₹1,40,000. Book value = ₹20,000.
4. Difference = 40,000 − 20,000 = ₹20,000.

**The trap:** Taking the charges in the wrong order (1/15 in the first year, 2/15 in the second) gives (1 + 2 + 3 + 4)/15 = 10/15 and a book value of ₹60,000. Sum of years' digits charges the most in the first year.

## 9. Management principles and forms of ownership

The traps here are in what each management function and method covers. Job evaluation rates the job, not the person; controlling checks the work, it does not hand it out; and the incentive plans differ only in how the time saved is shared.

### Going deeper

| Idea | What it means |
| --- | --- |
| Functions of management | Fayol: planning, organising, commanding, coordinating and controlling. Gulick's POSDCORB: planning, organising, staffing, directing, coordinating, reporting and budgeting. |
| Controlling | Set standards, measure the work done, compare it with the standards and correct the gap. Handing out tasks belongs to organising and directing. |
| Unity of command and unity of direction | Unity of command: each worker takes orders from one boss. Unity of direction: one plan and one head for each group of activities with the same aim. |
| Delegation | Authority can be passed down. Responsibility cannot: the manager stays answerable for the work delegated. |
| Span of control | The number of people one manager supervises directly. Graicunas showed that the relationships to manage grow much faster than the number of people. |
| Forms of organisation | Line (military): orders flow straight down. Line and staff: line managers plus advisers. Functional: Taylor's specialist foremen, each worker has several bosses. Matrix: each worker reports to a project head and a department head. |
| Taylor's scientific management | Time and motion study, standard tools and methods, the differential piece rate and functional foremanship with eight foremen, four for planning and four in the shop. |
| Job evaluation | Finds the worth of a job compared with other jobs, to fix fair pay. Ranking and grading are non-quantitative. Point rating and factor comparison are quantitative. |
| Factor comparison | Key jobs are compared factor by factor: mental requirements, skill, physical requirements, responsibility and working conditions. Each factor carries a money value. |
| Merit rating | Rates the person in the job, for promotion or increments. Job evaluation never rates the person. |
| Halsey and Rowan plans | Both guarantee the time wage and pay a bonus for time saved. Halsey pays a fixed share (usually 50%) of the time saved. Rowan pays a share equal to the fraction of the standard time saved. |
| Taylor and Merrick piece rates | Taylor: a low rate below standard output and a high rate above it. Merrick: three rates, so beginners are not punished so hard. |
| Management development | Builds managers. On the job: coaching, job rotation, understudy and action learning. Off the job: case study, role playing, in-basket and business games. Programmed learning is a way of training operatives in set skills. |
| Motivation theories | Maslow: a ladder of needs from body to self-actualisation. Herzberg: hygiene factors prevent unhappiness, motivators create drive. McGregor: Theory X and Theory Y. |
| Forms of ownership | Sole trader and partnership: unlimited liability. Joint stock company: limited liability and a separate legal identity. Cooperative: one member, one vote. |

### Formulas worth adding

```math
E_{\text{Halsey}} = TR + \frac{p}{100}(S - T)R
```

T is the time taken, S the standard time, R the hourly rate and p the share of the time saved paid to the worker, usually 50.

```math
E_{\text{Rowan}} = TR + \frac{S - T}{S}\,TR
```

The two plans pay the same when T = S/2. Rowan pays more when less than half the standard time is saved, and Halsey pays more beyond that.

```math
R = n\left(2^{\,n-1} + n - 1\right)
```

Graicunas: R is the number of relationships a manager has with n direct subordinates. With 4 people it is 44, with 5 it is 100.

### Doubts cleared

**Doubt: Does job evaluation consider how good the worker is?** No. It rates the job, whoever holds it. How well a person does the job is merit rating.

**Doubt: Which pays more, Halsey or Rowan?** It depends on the saving. Below half the standard time saved, Rowan pays more; at exactly half they are equal; beyond half, Halsey pays more, because Rowan's bonus can never reach the full time wage.

**Doubt: If I delegate a job, am I still responsible for it?** Yes. Authority goes down with the job, but responsibility stays with you as well as with the person you gave it to.

**Doubt: Is job rotation training or management development?** Both can use it. For managers it is a development technique: they learn how several departments work. Programmed learning, by contrast, teaches fixed skills step by step and is used for operatives.

### Tricky past questions with solutions

**Q1. Kerala PSC Deputy Engineer / AE (Mechanical) 050/2023, Q100.** Which of the following is not an element of the factor comparison method of job evaluation? (a) Physical effort (b) Skill (c) Responsibility (d) Employee worth

*Answer: (d) Employee worth.*

1. The factor comparison method compares jobs on mental requirements, skill, physical requirements, responsibility and working conditions.
2. Physical effort, skill and responsibility are on that list.
3. Employee worth describes the person, not the job, so it has no place in job evaluation.

**The trap:** "Employee worth" sounds like what pay should reflect. That is merit rating. Job evaluation prices the job only.

**Q2. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q90.** Controlling, as a function of management, involves: (i) monitoring progress and making changes (ii) assigning tasks. (a) Only (i) (b) Only (ii) (c) Both (i) and (ii) (d) Neither (i) nor (ii)

*Answer: (a) Only (i).*

1. Controlling compares the work done with the plan and corrects the gap, so (i) is part of it.
2. Assigning tasks is part of organising and directing, which come before control. So (ii) is not.

**The trap:** Managers who control also give out work, so (c) feels natural. Exam questions keep the functions separate: control starts only once the work is under way.

**Q3. Kerala PSC AE (Mechanical) / Inspector of Factories 68/2026, Q99.** Which of the following is not a management development technique? (a) Action learning (b) Job rotation (c) Role playing (d) Programmed learning

*Answer: (d) Programmed learning.*

1. Action learning and job rotation develop managers on the job, by solving real problems and by working in several departments.
2. Role playing develops managers off the job, for example by acting out a difficult meeting.
3. Programmed learning feeds set information in small steps with checks, and is used to train operatives in fixed skills.

**The trap:** Job rotation is also used to train workers, so it looks like the odd one out. For managers it is one of the most common development methods.

**Q4. BDL Management Trainee (Mechanical), 16 April 2022.** During a week, a worker produced 300 units in 48 hours. The wage rate is ₹4 per hour and the standard time is 10 minutes per unit. Under the Halsey premium plan, the worker's earnings for the week are: (a) ₹196 (b) ₹216 (c) ₹200 (d) ₹190

*Answer: (a) ₹196.*

1. Standard time for 300 units = 300 × 10 = 3000 min = 50 h. Time taken = 48 h, so 2 h are saved.
2. Time wage = 48 × 4 = ₹192.
3. Halsey bonus = 50% of the time saved × rate = 0.5 × 2 × 4 = ₹4.
4. Earnings = 192 + 4 = ₹196.

**The trap:** (c) ₹200 is what the worker gets if paid for the full standard time (50 × 4), and the Rowan plan gives almost the same: 192 + (2/50) × 48 × 4 = ₹199.68. The Halsey plan shares the saving, so the worker gets only half of it.

## 10. Forecasting and linear programming

The traps here are the direction of the smoothing constant, the rules for writing a dual, and the difference between time in the queue and time in the system. Kerala PSC sets them as pairs of statements, one true and one turned around.

### Going deeper

| Idea | What it means |
| --- | --- |
| Kinds of forecast | Qualitative: Delphi, market surveys and expert opinion, used when there is little data. Time series: moving averages, exponential smoothing and trend lines. Causal: regression on a factor that drives demand. |
| Moving average | The average of the last n periods. A larger n gives a smoother forecast that reacts more slowly to real changes. |
| Exponential smoothing | New forecast = old forecast + α × (actual − old forecast). Every past demand counts, with weights that shrink by (1 − α) each period back. |
| The smoothing constant α | Close to 1: the forecast follows the latest demand closely. Close to 0: it changes slowly and ignores short swings. α lies between 0 and 1. |
| Forecast errors | MAD: mean of the absolute errors. MSE: mean of the squared errors. Bias: mean of the signed errors. Tracking signal: running sum of errors ÷ MAD, which flags a forecast that keeps missing on one side. |
| LP corner points | The best value of a linear objective is always at a corner of the feasible region. If the objective line is parallel to a binding constraint, a whole edge is optimal. |
| Simplex variables | A slack variable is added to a ≤ constraint. A surplus variable is subtracted from a ≥ constraint, and an artificial variable is added to start the method (Big M or two-phase). |
| Special cases in simplex | Tie in the ratio test: degeneracy. No positive entry in the entering column: unbounded. An artificial variable left in the final answer: infeasible. |
| Writing the dual | A maximisation primal gives a minimisation dual. Each primal constraint gives a dual variable and each primal variable gives a dual constraint. The right-hand sides and the objective costs swap places. |
| Duality results | At the optimum, the primal and dual objective values are equal. The dual of the dual is the primal. Dual variables are the shadow prices of the resources. |
| Transportation problem | Balanced when total supply equals total demand; otherwise a dummy row or column with zero cost is added. A starting solution has m + n − 1 filled cells. North-west corner, least cost and Vogel's method (VAM) all give a starting solution, VAM usually the best. MODI or stepping stone then tests it. |
| Assignment problem | A special transportation problem in which every supply and demand is 1. Solved by the Hungarian method. For a maximisation, subtract every value from the largest first. |
| Single-server queue | Arrivals at rate λ, service at rate μ. It works only if λ < μ. Utilisation ρ = λ ÷ μ is also the chance the server is busy. |
| Little's law | Average number = arrival rate × average time, in the system (L = λW) and in the queue (Lq = λWq). |

### Formulas worth adding

```math
F_{t+1} = F_t + \alpha\,(A_t - F_t) = \alpha A_t + (1 - \alpha)F_t
```

Ft is the forecast and At the actual demand for period t.

```math
\text{MAD} = \frac{\sum \lvert A_t - F_t \rvert}{n}, \qquad \text{Tracking signal} = \frac{\sum (A_t - F_t)}{\text{MAD}}
```

```math
L_s = \frac{\lambda}{\mu - \lambda}, \quad L_q = \frac{\lambda^2}{\mu(\mu - \lambda)}, \quad W_s = \frac{1}{\mu - \lambda}, \quad W_q = \frac{\lambda}{\mu(\mu - \lambda)}
```

These are for one server with random (Poisson) arrivals and exponential service. The s means in the system, q in the queue.

```math
W_s = W_q + \frac{1}{\mu}, \qquad P_0 = 1 - \frac{\lambda}{\mu}
```

P0 is the chance that nobody is in the system.

### Doubts cleared

**Doubt: Does a large α give a smooth forecast?** No, the opposite. A large α puts most weight on the latest demand, so the forecast jumps with it. A small α smooths.

**Doubt: If the primal maximises, what does the dual do?** It minimises. A maximisation with ≤ constraints becomes a minimisation with ≥ constraints, and the number of variables and constraints swap.

**Doubt: Can VAM be used on a balanced transportation problem?** Yes. VAM, like the north-west corner and least cost methods, needs a balanced problem. An unbalanced one is first balanced with a dummy.

**Doubt: Waiting time in the queue or in the system?** The queue time Wq is before service starts. The system time Ws adds the service time 1/μ. Read which one the question asks for.

### Tricky past questions with solutions

**Q1. Kerala PSC AE (Mechanical) 104/2025, Q92.** Consider these statements about duality in linear programming: (i) If the primal is a maximisation problem, the dual is also a maximisation problem. (ii) The number of variables in the primal equals the number of constraints in the dual, and the number of constraints in the primal equals the number of variables in the dual. Which is correct? (a) Only (i) (b) Only (ii) (c) Both (i) and (ii) (d) Neither (i) nor (ii)

*Answer: (b) Only (ii).*

1. The dual of a maximisation is a minimisation, so (i) is false.
2. Each primal constraint gives one dual variable and each primal variable gives one dual constraint, so (ii) is true.

**The trap:** Statement (i) borrows the word "also" to sound like a rule. The objective always flips between the primal and the dual.

**Q2. Kerala PSC AE (Mechanical) 104/2025, Q94.** Consider these statements about a balanced transportation problem: (i) Total supply equals total demand. (ii) Vogel's approximation method cannot be used to find an initial basic feasible solution. Which is correct? (a) Only (i) (b) Only (ii) (c) Both (i) and (ii) (d) Neither (i) nor (ii)

*Answer: (a) Only (i).*

1. Balanced means total supply equals total demand, so (i) is true.
2. VAM is one of the three usual ways to find a starting solution, and it works on a balanced problem. So (ii) is false.

**The trap:** VAM is described as an approximation, so students think it cannot give a proper feasible solution. It always gives a feasible one, usually close to the best.

**Q3. GATE ME 2013.** In simple exponential smoothing, to give more weight to recent demand, the smoothing constant must be close to: (a) −1 (b) zero (c) 0.5 (d) 1

*Answer: (d) 1.*

1. F(t+1) = αA(t) + (1 − α)F(t). The latest demand A(t) carries the weight α.
2. The closer α is to 1, the more the new forecast follows the latest demand.

**The trap:** "Smoothing" suggests a small constant, so students pick zero. A small α gives a smooth forecast that leans on the past, the opposite of what is asked. A negative α is never used.

**Q4. GATE ME 2020 (Shift 2).** A product's monthly demand is forecast by exponential smoothing. Month 1: forecast 32.00, actual 30.00. Month 2: forecast 31.80, actual 32.00. Month 3: forecast 31.82, actual 30.00. The smoothing constant is: (a) 0.10 (b) 0.40 (c) 0.50 (d) 1.00

*Answer: (a) 0.10.*

1. F2 = F1 + α(A1 − F1): 31.80 = 32.00 + α(30.00 − 32.00) = 32.00 − 2α, so α = 0.10.
2. Check: F3 = 31.80 + 0.10 × (32.00 − 31.80) = 31.82, which matches.

**The trap:** The forecast moved by 0.20 while the error was 2.00. Students who divide the other way get 10, see no such option and pick 1.00. Month 3's actual demand is not needed at all.

**Q5. GATE ME 2016 (Shift 2).** In a single-channel queue, customers arrive at 12 per hour and are served at 24 per hour. The average waiting time of a customer in the queue, in minutes, is \_\_\_\_.

*Answer: 2.5 min.*

1. Wq = λ ÷ \[μ(μ − λ)\] = 12 ÷ (24 × 12) = 1/24 hour.
2. 1/24 × 60 = 2.5 min.

**The trap:** Ws = 1 ÷ (μ − λ) = 1/12 hour = 5 min is the time in the system, which includes the 2.5 min of service. The question asks for the queue only.

## Sources

Of the 41 past questions, 13 are from GATE (8 ME, 4 PI and 1 Civil), 5 from ESE, 12 from Kerala PSC AE papers and 11 from other AE, JE, lecturer and PSU exams. None of them appears in Level 1. The Kerala PSC questions come from the official question booklets (version A), with answers from the commission's keys: the provisional key for the 2023 paper and the final keys for the others. They are listed by paper and question number. The rest were checked on their Testbook question pages, which name the paper each was asked in. Where Testbook does not name the paper, the year comes from ExamSIDE's GATE archive. Every answer was worked out again for this guide.

- Kerala PSC Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- Kerala PSC AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- Kerala PSC AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)
- **1. Method study:** Q1 Kerala PSC 104/2025 Q100, [Q2 ESE 2016](https://testbook.com/question-answer/consider-the-following-statements-with-respect-to--5eba03a8f60d5d2fd8c9b564), [Q3 RPSC Lecturer 2020](https://testbook.com/question-answer/a-simo-chart-should-be-used-with--60fe9b889ee22bd2eaf98e6f)
- **2. Work measurement:** [Q1 ESE 2017](https://testbook.com/question-answer/an-8-hour-measurement-study-in-a-plant-reveals-tha--5eb41e83f60d5d187fa5f8bc), [Q2 ISRO IPRC 2016](https://testbook.com/question-answer/a-job-design-to-be-time-studied-has-fatigue-and-de--5fb288f368fdd41f2d5fa57a), [Q3 RPSC Lecturer 2011](https://testbook.com/question-answer/a-company-wishes-to-determine-the-proportion-of-ti--6019530eae2a6897ca41f5cc)
- **3. Inventory control:** Q1 Kerala PSC 104/2025 Q96, Q2 Kerala PSC 104/2025 Q91, [Q3 DRDO CEPTAM 2026](https://testbook.com/question-answer/an-item-has-annual-demand-2400-units-ordering-c--6a38cc1602ea1079d5f8f858), [Q4 RPSC Lecturer 2020](https://testbook.com/question-answer/the-demand-for-a-commodity-is-100-units-per-day-e--60f15d1e3dfc0b39b25131e8), [Q5 GATE 2006](https://questions.examside.com/past-years/year-wise/gate/gate-me/gate-me-2006/vPMqU0Y4PCvPugvZ) ([Testbook](https://testbook.com/question-answer/consider-the-following-data-for-an-item-price-qu--56580f9f995a2d13ea3f0d8e))
- **4. PERT and CPM:** [Q1 BPSC AE 2022](https://testbook.com/question-answer/consider-the-following-statements-in-respect-of-pe--6246cb005eefd40175ebf0ee), [Q2 ESE 2021](https://testbook.com/question-answer/which-of-the-following-statements-is-not-correct-a--61545ea4b68b2551cc5f881b), [Q3 ESE Civil 2016](https://testbook.com/question-answer/statement-i-crashing-of-project-duration-always--5ed9076ef60d5d1a815ac118), [Q4 GATE 2021](https://testbook.com/question-answer/activities-a-b-c-and-d-from-the-critical-path-fo--603381458b5a6b637aebe973), [Q5 GATE 2014](https://testbook.com/question-answer/a-project-has-four-activities-p-q-r-and-s-as-sho--565d5596995a2d0c5d4d152e)
- **5. Production planning and control:** Q1 Kerala PSC 68/2026 Q93, Q2 Kerala PSC 68/2026 Q95, [Q3 GATE 2022](https://testbook.com/question-answer/parts-p1-p7-are-machined-first-on-a-milling-mach--620f691663e898f321f7e6f7), [Q4 GATE 2010](https://testbook.com/question-answer/using-the-shortest-processing-time-spt-rule-tot--56582ffd995a2d13ea3f47d8)
- **6. Plant layout and material handling:** Q1 Kerala PSC 68/2026 Q92, [Q2 AAI JE 2018](https://testbook.com/question-answer/for-the-use-of-concept-principles-and-approaches--6056146dee8787e8ea54d96c), [Q3 ESE 2017](https://testbook.com/question-answer/in-a-company-assembly-line-assembling-gear-boxes--5f211038d0cbab0d0c032e0f)
- **7. Quality control:** Q1 Kerala PSC 104/2025 Q98, [Q2 GATE PI 2021](https://testbook.com/question-answer/when-acceptance-number-of-a-single-sampling-plan-u--608bb29cecd1bbada0fcadff), [Q3 GATE PI 2019](https://testbook.com/question-answer/the-average-proportion-non-conforming-of-20-sample--6090e2286f0692d723a4b9ff), [Q4 JKSSB JE 2021](https://testbook.com/question-answer/the-ratio-of-the-difference-of-specification-limit--63c97d7c975c0dd370cc6a78)
- **8. Break-even and depreciation:** [Q1 GATE PI 2014](https://testbook.com/question-answer/a-manufacturing-company-must-select-a-process-for--60ac763e5fec5c608cc9b40d), [Q2 HPCL 2025](https://testbook.com/question-answer/when-selecting-plant-and-equipment-for-a-manufactu--69acb630e6babc23763dfa27), [Q3 UKPSC JE 2013](https://testbook.com/question-answer/the-initial-cost-of-making-a-product-is-100000-a--61b857f7cf0f1447ef8d8d00), [Q4 GATE PI 2018](https://testbook.com/question-answer/the-breakeven-point-of-a-manufacturing-company-is--609bdee179ecce8a7013d808), [Q5 GATE Civil 2021](https://testbook.com/question-answer/an-equipment-has-been-purchased-at-an-initial-cost--6030fb9fdc9e57aa0fec7c67)
- **9. Management:** Q1 Kerala PSC 050/2023 Q100, Q2 Kerala PSC 68/2026 Q90, Q3 Kerala PSC 68/2026 Q99, [Q4 BDL MT 2022](https://testbook.com/question-answer/during-a-week-a-worker-produced-300-units-workin--626d2bd0627385f1f25e6aa1)
- **10. Forecasting and linear programming:** Q1 Kerala PSC 104/2025 Q92, Q2 Kerala PSC 104/2025 Q94, [Q3 GATE 2013](https://testbook.com/question-answer/in-simple-exponential-smoothing-forecasting-to-gi--565bf1ba03282114ca1d0ad2), [Q4 GATE 2020](https://testbook.com/question-answer/the-forecast-for-the-monthly-demand-of-a-product-i--5ead83fcf60d5d2459766e10), [Q5 GATE 2016](https://testbook.com/question-answer/in-a-single-channel-queuing-model-the-customer-ar--5e0ee921e2686a659dae4873)
- Wording changes: Kerala PSC options are lettered (a) to (d) here instead of A to D. In its questions with two statements, the last option, printed in several ways such as "None of the above (i) and (ii)", reads "Neither (i) nor (ii)". Questions whose data came as a table have the table written into the question (3 Q5, 4 Q5, 5 Q3, 5 Q4 and 10 Q4). In 4 Q3 the two statements are shortened without changing their meaning. In 8 Q3 the page's "initial cost" is called the fixed cost, which is what the sum uses. Other questions are lightly edited for grammar; their options and answers are unchanged.
