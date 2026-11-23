# Industrial Engineering Level 4: Exam Room

Nov 23, 2026 · @Rohith

## How to use Level 4

Take these mocks only after finishing Levels 1 to 3 on all 10 topics. Each mock mixes every topic, the way the real paper does.

- **On the website:** press Start on a mock. It works like the exam's CBT screen: 25 questions, 25 minutes, one question at a time, a question palette and Mark for review. When the time runs out, the test submits itself.
- **Marking:** +1 for a right answer, −1/3 for a wrong one, 0 for a skip. That is the penalty in RRB JE, Kerala PSC and SSC JE Paper 2.
- **When to guess:** a blind guess among four options gains nothing on average (1/4 × 1 − 3/4 × 1/3 = 0). Rule out one option and a guess among the other three is worth +1/9 of a mark. Rule out two and it is worth +1/3. So guess only after you have eliminated at least one option.
- **After the test:** the review shows every question with your answer, the right one and the full solution. Read why each wrong option is wrong, not just the right one. Weak topics link back to the same section in Levels 1 to 3.
- **Reading here instead:** the solution sits right under each question, so cover it before you answer.
- **Retakes:** wait about a week. An immediate retake mostly tests your memory of the answers.

Each question names its exam, date and topic number, and Topic N is section N in Levels 1 to 3. In test mode the exam and topic are hidden, because spotting which idea a question tests is part of the skill. None of these questions appear in Levels 1 to 3. Each mock follows the weighting below.

| Topic | Questions per mock |
| --- | --- |
| 1. Method study | 3 |
| 2. Work measurement and time study | 3 |
| 3. Inventory control | 3 |
| 4. PERT and CPM | 3 |
| 5. Production planning and control | 2 |
| 6. Plant layout and material handling | 2 |
| 7. Quality control | 3 |
| 8. Break-even analysis and depreciation | 2 |
| 9. Management principles and forms of ownership | 2 |
| 10. Forecasting and linear programming | 2 |

About two thirds of the Industrial Engineering questions test one fact: a chart and what it records, a control chart and its data, a layout and the production it suits, or a management principle. The rest are short numericals: a standard time, an EOQ, a PERT mean or variance, a float, a break-even quantity. In the mock you have one minute per question, so the aim is to recall the fact or formula at once and keep the arithmetic short. The Speed toolkit below collects the values and relations that do that.

## Speed toolkit

Most Industrial Engineering questions in RRB JE, SSC JE and Kerala PSC need one formula or one fact. Learn the values below by heart, and a two-minute question takes 30 seconds.

### Ready values

| Quantity | Value to remember |
| --- | --- |
| Process chart symbols | Operation: circle. Inspection: square. Transport: arrow. Delay: D. Storage: triangle. |
| Method study steps | Select, Record, Examine, Develop, Install, Maintain (SREDIM) |
| Recording charts | Outline process chart: operations and inspections only. Flow process chart: all five symbols. Two-handed chart: left and right hands. Multiple activity chart: several workers or machines on one time scale. Flow diagram and string diagram: drawn to scale on the floor plan. Travel chart: material moved between work stations. |
| Micromotion study | Gilbreth: 17 therbligs, the SIMO chart and film analysis. Cyclegraph: a light on the hand traces its path. Chronocyclegraph: a flashing light also shows speed and direction. Memomotion: film at a slow rate for long jobs. |
| Work measurement methods | Stopwatch time study for short repetitive jobs. Work sampling for long or irregular work. PMTS (MTM, work factor) needs no rating. Synthetic data and analytical estimating build times from elements already timed. |
| Inventory classes | ABC: annual consumption value (Pareto). VED: how critical. FSN: how fast it moves. HML: unit price. SDE: how hard to get. |
| PERT distributions | Activity time: beta. Project time: normal. |
| Normal table | P(Z ≤ 0) = 50%, P(Z ≤ 1) ≈ 84%, P(Z ≤ −1) ≈ 16%, P(Z ≤ 2) ≈ 97.7% |
| Layout by volume and variety | High volume, low variety: product layout. Low volume, high variety: process layout. Part families: group layout. Huge, heavy product: fixed position layout. |
| Control charts | Variables: X-bar and R. Attributes: p (fraction defective), np (number defective), c (defects in a unit of fixed size), u (defects per unit). Limits at ±3σ cover 99.73%. |
| Sampling risks | Producer's risk α: a good lot (at AQL) rejected, usually 5%. Consumer's risk β: a bad lot (at LTPD) accepted, usually 10%. The OC curve shows both. |
| Organisation types | Line: military type, unity of command. Functional: Taylor's specialist foremen. Line and staff: line authority plus advising specialists. Matrix: two bosses, so it breaks unity of command. |
| Wage plans | Straight piece rate: no guaranteed wage. Halsey: time wage plus a share (usually 50%) of the time saved. Rowan: time wage plus (time saved ÷ standard time) × time wage. Flat day rate: pay for hours only. |
| Forecasting methods | Qualitative (Delphi, expert opinion, market survey): new products with no data. Time series (moving average, exponential smoothing): past demand. Causal (regression): demand tied to another variable. |

### Relations that save a step

| Relation | Use it when |
| --- | --- |
| NT = OT × rating/100 | Normal time from observed time and performance rating |
| ST = NT × (1 + a), or ST = NT/(1 − a) | Standard time. Multiply when the allowance a is a share of normal time; divide when it is a share of standard (total) time. |
| N = 4p(1 − p)/L² | Work sampling observations for 95% confidence, with p the share of time in the activity and L the absolute accuracy |
| Productivity = actual output ÷ standard output | Standard output = time available ÷ standard time per piece |
| Q\* = √(2DCₒ/Cₕ) | EOQ. At Q\*, yearly ordering cost = yearly holding cost, and orders per year = D/Q\*. |
| ROL = demand per day × lead time in days + safety stock | Reorder level |
| tₑ = (tₒ + 4tₘ + tₚ)/6, σ = (tₚ − tₒ)/6 | PERT mean and standard deviation. Along a path add variances, never standard deviations. Z = (T − Tₑ)/σ. |
| Total float = LS − ES = LF − EF | Activity float. For an event, slack = TL − TE (latest allowable minus earliest expected). |
| Johnson's rule | Take the smallest time left. On machine 1, the job goes to the front; on machine 2, to the back. Strike it off and repeat. |
| BEP = F/(s − v) | Break-even quantity. (s − v) is the contribution per unit. Margin of safety = actual sales − break-even sales. |
| D = (C − S)/n | Straight-line depreciation each year |
| ρ = λ/μ | Utilisation of a single server: the share of time it is busy |
| m + n constraints, m + n − 1 basic cells | Transportation problem with m sources and n destinations |

### Unit traps

- **Rating in per cent.** 125% is a factor of 1.25. A rating below 100% makes the normal time shorter than the observed time.
- **Allowance base.** "Allowance 20% of normal time": multiply by 1.2. "Allowance 20% of total time": divide by 0.8.
- **Holding cost per unit per year.** D and Cₕ must be for the same period. A monthly holding cost is multiplied by 12.
- **Hours and minutes.** An 8-hour shift is 480 minutes. Convert before dividing by a standard time in minutes.
- **Variance or standard deviation.** PERT variance is σ². Only variances add along a path.

### Eliminating options

- **Check the direction.** Standard time is always more than normal time. Normal time is more than observed time only when the rating is above 100%.
- **Plug the option back in.** At the EOQ the two yearly costs are equal. At the break-even point revenue equals total cost.
- **Read the exact word.** Defects or defectives, variable or attribute, activity or event, float or slack: each pair has a different answer.
- **Statement and "NOT" questions.** Mark each item true or false before you look at the options.

## Mock 1

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from Kerala PSC papers (2023 and 2025), 4 from RRB JE (2019 and 2025) and 19 from other exams.

**Q1. UKPSC JE Mechanical 2013 (Paper I) · Topic 1.** Work study is mainly aimed at (a) determining the most efficient method of performing a job (b) establishing the minimum time of completion of job (c) developing the standard method and standard time of a job (d) economizing the motions involved on the part of the worker while performing a job

*Answer: (c) Developing the standard method and standard time of a job.*

Work study has two parts. Method study finds and standardises the best way to do a job, and work measurement sets the standard time for doing it that way. Only (c) names both.

- **(a):** the aim of method study alone.
- **(b):** work measurement sets the time for a qualified worker at a normal pace, not the shortest time possible.
- **(d):** motion economy, one tool inside method study.

**The trap:** (a) and (d) are true parts of work study. The question asks for its whole aim, which needs both the method and the time.

**Q2. RRB JE CBT 2 (Mechanical), 29 August 2019 · Topic 4.** The amount of time by which an activity can be delayed without affecting project completion time is (a) Free float (b) Total float (c) Independent float (d) Activity float

*Answer: (b) Total float.*

Total float = LS − ES = LF − EF. It is all the spare time an activity has while the project still ends on time. Use all of it and the activity becomes critical.

- **(a) Free float:** the delay allowed without delaying the earliest start of the next activity. It is never more than the total float.
- **(c) Independent float:** the delay allowed even when earlier activities finish late and later ones must start early. It is the smallest of the three.
- **(d) Activity float:** not a standard term.

**Memory aid:** total float protects the project's end date, free float protects the next activity, and independent float holds whatever happens around the activity.

**Q3. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 3.** The length of time between placing an order and receipt of items is called: (a) Re-order level (b) Order cycle (c) Inventory turnover (d) Lead time

*Answer: (d) Lead time.*

Lead time runs from the day an order is placed to the day the goods arrive. Stock must last through it, so reorder level = demand per day × lead time in days, plus any safety stock.

- **(a) Re-order level:** a stock quantity, the level at which the order is placed. It is not a time.
- **(b) Order cycle:** the time between two successive orders, Q/D for a fixed order quantity.
- **(c) Inventory turnover:** yearly consumption divided by average inventory, a ratio.

**The trap:** the order cycle is also a time, but it runs from one order to the next, not from order to receipt.

**Q4. MPSC AMVI 2005 (Paper 4) · Topic 7.** Which is the control chart for fraction defective? (a) V-chart (b) P-chart (c) X-chart (d) C-chart

*Answer: (b) P-chart.*

A p-chart plots p, the fraction of defective items in each sample: number defective ÷ sample size. It is an attribute chart, because each item is only judged good or bad. Its limits are p̄ ± 3√(p̄(1 − p̄)/n).

- **(c) X-chart:** plots sample means of a measured quantity.
- **(d) C-chart:** plots the number of defects in a unit of fixed size, not the fraction of items that are defective.
- **(a) V-chart:** not one of the standard control charts.

**Memory aid:** p for proportion, c for count of defects.

**Q5. ISRO VSSC Technical Assistant (Mechanical), 11 February 2024 · Topic 2.** The observed time for an operation of turning a shaft is 5 minutes. If the performance rating is 130% and allowances are 10% of the normal time, then what is the standard time for this job? (a) 7.15 minutes (b) 5.85 minutes (c) 3.85 minutes (d) 6.5 minutes

*Answer: (a) 7.15 minutes.*

1. Normal time = 5 × 1.30 = 6.5 min.
2. Standard time = 6.5 × 1.10 = 7.15 min.

- **(d) 6.5 minutes:** the normal time, before the allowance.
- **(b) 5.85 minutes:** 6.5 × 0.9, the allowance taken off instead of added.
- **(c) 3.85 minutes:** 5/1.3, dividing by the rating instead of multiplying.

**Quick check:** a rating above 100% means a fast worker, so the normal time is more than the observed 5 min, and the allowance adds more. Only (a) and (d) are above 5 min, and (d) has no allowance.

**Q6. RRB JE CBT 2 (Mechanical), 19 September 2019 (Shift 2) · Topic 6.** Which of the following type of layout is suitable for automobile manufacturing concern? (a) Product layout (b) Combination layout (c) Process layout (d) Fixed position layout

*Answer: (a) Product layout.*

Cars are made in very large numbers to nearly the same design. A product (line) layout places the stations in the order of operations, so each car moves straight down the line with little handling and little work in progress.

- **(c) Process layout:** groups similar machines together. It suits low volume and high variety, as in a jobbing shop.
- **(d) Fixed position layout:** the product stays put and the workers come to it, as in ship or aircraft building.
- **(b) Combination layout:** mixes types. A car plant may use one for some parts, but its signature is the assembly line.

**The trap:** a car plant also has machine shops laid out by process. The question asks about the concern as a whole, which is mass production on a line.

**Q7. ESE Mechanical 2014 (Paper 2) · Topic 8.** The data for break-even analysis of a product are given as: fixed cost is Rs. 10,000; variable cost is Rs. 10/unit; selling price is Rs. 15/unit. The break-even volume is (a) 2000 (b) 2500 (c) 3500 (d) 4000

*Answer: (a) 2000.*

Each unit sold covers its own Rs. 10 of variable cost and leaves Rs. 5 towards the fixed cost. BEP = F/(s − v) = 10,000/(15 − 10) = 2000 units.

- **(b), (c) and (d):** at 2500 units, revenue is Rs. 37,500 against a total cost of Rs. 35,000, which is already a profit. The break-even volume must be lower.

**Quick check:** at 2000 units, revenue = 30,000 and total cost = 10,000 + 20,000 = 30,000.

**Q8. ISRO Scientist (Mechanical) 2017 · Topic 9.** Fredric W Taylor introduced a system of working known as (a) line organisation (b) effective organisation (c) functional organisation (d) none of the above

*Answer: (c) Functional organisation.*

Taylor split the foreman's job among eight specialists. Four sat in the planning room (route clerk, instruction card clerk, time and cost clerk, disciplinarian) and four were on the shop floor (gang boss, speed boss, repair boss, inspector). Each worker took orders from each specialist on that specialist's subject.

- **(a) Line organisation:** the oldest, military type, with authority in one straight chain. Taylor's scheme replaced it on the shop floor.
- **(b) Effective organisation:** not a type of organisation structure.

**The trap:** functional organisation breaks unity of command, because a worker has several bosses. That is its known weakness, but it is still Taylor's system.

**Q9. MPSC AMVI 2017 (Paper 1) · Topic 1.** The primary function of a \_\_\_\_\_\_\_\_\_\_ is to produce a record of an existing set of conditions so that the job of seeing what is actually taking place is made as simple as possible. (a) Flow diagram (b) String diagram (c) Operation process chart (d) None of above

*Answer: (b) String diagram.*

A string diagram is a scale plan of the work area with a pin at each work station. A thread is run from pin to pin in the order the worker or material moves. Its length gives the distance travelled, and the bunching of threads shows at a glance which routes are used most.

- **(a) Flow diagram:** also a scale plan, but it draws the route of one product with process chart symbols. It does not show how often each route is used.
- **(c) Operation process chart:** a sequence of operations and inspections with no plan of the shop, so it cannot show movement.

**The trap:** every recording technique records existing conditions. The key takes the string diagram, whose threads make irregular, repeated movement simple to see.

**Q10. TNTRB Mechanical 2017 · Topic 5.** The time required for two operations, cutting and binding, for five jobs are as follows: Job 1: cutting 8 min, binding 8 min; Job 2: cutting 6, binding 7; Job 3: cutting 2, binding 7; Job 4: cutting 5, binding 6; Job 5: cutting 7, binding 4. What is the optimal makespan sequence? (a) 2-4-1-3-5 (b) 3-4-2-1-5 (c) 1-2-3-4-5 (d) 3-5-2-4-1

*Answer: (b) 3-4-2-1-5.*

Use Johnson's rule, with cutting as machine 1 and binding as machine 2.

1. The smallest time is 2 (job 3, cutting), so job 3 goes first.
2. Next is 4 (job 5, binding), so job 5 goes last.
3. Next is 5 (job 4, cutting), so job 4 goes second.
4. Next is 6 (job 2, cutting), so job 2 goes third. Job 1 fills the gap: 3-4-2-1-5.
5. Cutting ends at 2, 7, 13, 21 and 28 min. Binding ends at 9, 15, 22, 30 and 34 min, so the makespan is 34 min.

- **(d) 3-5-2-4-1:** puts job 5, with the shortest binding, early. The binder then waits, and the makespan is 36 min.
- **(a) 2-4-1-3-5:** starts with a 6 min cut, so the binder is idle for 6 min. Makespan 38 min.
- **(c) 1-2-3-4-5:** job order as listed. Makespan 40 min.

**Quick check:** the binder needs 32 min in all and cannot start before the first cut ends. No order can beat 2 + 32 = 34 min, and only (b) reaches it.

**Q11. RRB JE CBT 2 (Mechanical), 30 August 2019 (Shift 1) · Topic 10.** In queuing theory, the ratio of the mean arrival rate and the mean service rate is called the (a) Work factor (b) Slack constant (c) Productivity rate (d) Utilization factor

*Answer: (d) Utilization factor.*

ρ = λ/μ. With customers arriving at λ per hour and served at μ per hour, the server is busy a fraction λ/μ of the time and idle for 1 − ρ. A queue settles only when ρ is less than 1.

- **(a) Work factor:** a predetermined motion time system in work measurement.
- **(b) Slack:** a PERT term, the spare time at an event.
- **(c) Productivity:** output ÷ input.

**Quick check:** λ = 4 and μ = 5 per hour give ρ = 0.8, so the server is busy 80% of the time.

**Q12. ESE Mechanical 2017 · Topic 3.** A particular item has a demand of 9000 units/year. The cost of one procurement is Rs. 108 and the holding cost per unit is Rs. 2.40 per year. The replacement is instantaneous and no shortages are allowed. What is the optimum number of orders/year? (a) 7 orders/year (b) 8 orders/year (c) 9 orders/year (d) 10 orders/year

*Answer: (d) 10 orders/year.*

1. Q\* = √(2DCₒ/Cₕ) = √(2 × 9000 × 108/2.40) = √810,000 = 900 units.
2. Orders per year = D/Q\* = 9000/900 = 10.

- **(a), (b) and (c):** fewer orders mean bigger lots. At 9 orders a year the lot is 1000 units, and the holding cost (Rs. 1200) is more than the ordering cost (Rs. 972). The total, Rs. 2172, is above the Rs. 2160 at 10 orders.

**Quick check:** at 900 units, ordering cost = 10 × 108 = Rs. 1080 and holding cost = 450 × 2.40 = Rs. 1080. They are equal, as they must be at the EOQ.

**Q13. GATE ME 2021 (Shift 2) · Topic 4.** A PERT network has 9 activities on its critical path. The standard deviation of each activity on the critical path is 3. The standard deviation of the critical path is (a) 3 (b) 9 (c) 81 (d) 27

*Answer: (b) 9.*

Variances add; standard deviations do not. Path variance = 9 × 3² = 81, so the path's standard deviation = √81 = 9.

- **(d) 27:** the standard deviations added, 9 × 3.
- **(c) 81:** the variance, not the standard deviation.
- **(a) 3:** one activity's standard deviation.

**The trap:** (d) looks natural. Independent activity times add their variances, so the path's spread grows only as √n.

**Q14. JKSSB JE Civil, 29 October 2021 (Shift 3) · Topic 7.** Statistical quality control (SQC) techniques are based on the theory of: (a) Statistics (b) Quality (c) Probability (d) Set theory

*Answer: (c) Probability.*

SQC judges a whole process or lot from a sample. Control limits at ±3σ and sampling plans rest on probability distributions: normal for measured values, binomial for defectives and Poisson for defects.

- **(a) Statistics:** SQC uses statistical tools, but the theory behind every accept-or-reject decision is probability. The key marks (c).
- **(b) Quality:** what is being controlled, not the theory behind the method.
- **(d) Set theory:** plays no part.

**The trap:** "statistical" is in the name, so (a) looks certain. The key wants the underlying theory: the chance that a sample point falls outside the limits by luck alone.

**Q15. UPRVUNL JE Mechanical, 24 October 2021 (Shift 2) · Topic 2.** A technique of work measurement in which times established for basic human motions are used to build up the time for a job at the defined level of performance is called: (a) Work sampling (b) Time study (c) Predetermined motion time study (d) Analytical estimating

*Answer: (c) Predetermined motion time study.*

PMTS systems such as MTM and work factor give tabled times for basic motions: reach, move, grasp, position, release. The analyst lists the motions in a job and adds their times. The tables already describe a defined level of performance, so no rating is needed.

- **(a) Work sampling:** many random observations give the share of time spent on each activity.
- **(b) Time study:** times the actual job with a stopwatch, then rates the worker.
- **(d) Analytical estimating:** an experienced estimator builds the time from known element times and judgement, for long jobs that do not repeat.

**Memory aid:** "basic human motions" points to PMTS every time.

**Q16. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 6.** The type of conveyor most suitable for moving granular materials (a) Roller conveyor (b) Chain conveyor (c) Bucket conveyor (d) Fork truck

*Answer: (c) Bucket conveyor.*

Granular material such as sand, grain, coal or cement is loose, so it needs a container. A bucket conveyor carries it in buckets fixed to a chain or belt and can lift it vertically or up steep slopes without spilling.

- **(a) Roller conveyor:** rolls cartons, boxes and other unit loads with flat bottoms. Loose grains fall between the rollers.
- **(b) Chain conveyor:** drags or carries unit loads such as pallets and heavy parts.
- **(d) Fork truck:** a mobile truck for palletised unit loads, not a conveyor.

**The trap:** over a long, level run a belt conveyor is the usual choice for bulk solids, but it is not among the options. Of these four, only the bucket conveyor carries loose material.

**Q17. RRB JE CBT 2 (Mechanical), 22 April 2025 (Shift 2) · Topic 9.** The factor considered for wage determination in the flat day rate basic wage incentive plan is: (a) individual performance (b) number of pieces produced (c) company profit (d) hours worked

*Answer: (d) Hours worked.*

Under a flat day rate (time wage), pay = hours worked × hourly rate, whatever the output. It is simple and gives a steady income, but no reward for extra effort.

- **(b):** the straight piece rate system pays per piece.
- **(a):** merit rating and incentive bonuses reward individual performance.
- **(c):** profit sharing pays out of the company's profit.

**The trap:** the words "incentive plan" suggest a bonus. A flat day rate has none; it is the base that the incentive plans are built on.

**Q18. HPCL Engineer (Mechanical), 27 March 2025 (Shift 2) · Topic 1.** The symbol used to represent 'Inspection' in a flow process chart used in a work study is given by (a/an): (a) square (b) arrow (c) Dee (d) triangle

*Answer: (a) Square.*

The five ASME symbols are: operation, a circle; inspection, a square; transport, an arrow; delay, a D; storage, a triangle.

- **(b) Arrow:** transport.
- **(c) Dee:** delay, also called temporary storage.
- **(d) Triangle:** storage.

**Memory aid:** inspection "squares up" the part against its drawing. A circle inside a square is a combined operation and inspection.

**Q19. ISRO Scientist (Mechanical) 2017 · Topic 3.** ABC inventory control focuses on those (a) Items not readily available (b) Items which consume less money (c) Items which have more demand (d) Items which consume more money

*Answer: (d) Items which consume more money.*

ABC analysis ranks items by annual consumption value: yearly usage × unit cost. About 10% of the items, class A, take about 70% of the money, so they get the closest control.

- **(a):** availability is SDE analysis (scarce, difficult, easy).
- **(b):** class C items, which get the loosest control.
- **(c):** demand alone does not make an item class A. A cheap, fast-moving item can be class C, and speed of movement is FSN analysis.

**The trap:** (c) sounds right because demand is part of the value. The ranking is on demand × price, not demand alone.

**Q20. UPPCL Assistant Accountant, 22 February 2022 · Topic 8.** Depreciation is a process of \_\_\_\_\_\_ of a fixed asset over its useful life. (a) allocating the cost (b) valuation (c) maintaining the value (d) measuring the cost

*Answer: (a) Allocating the cost.*

Depreciation spreads the cost of an asset, less its scrap value, over the years it is used. The straight-line method charges (C − S)/n each year; the declining balance method charges a fixed percentage of the remaining book value.

- **(b) Valuation:** the book value left after depreciation is not the market value, so depreciation is not a way of valuing the asset.
- **(c):** depreciation records the fall in value; it does not maintain it.
- **(d):** the cost is already known from the purchase. Depreciation divides it among the years.

**Memory aid:** depreciation answers "how much of the machine did this year use up?"

**Q21. UPPSC AE Mechanical 2019 (Paper I), 13 December 2020 · Topic 4.** In PERT and CPM network the dummy activity (a) Consumes time (b) Consume resources (c) Is used to preserve the logic (d) Is a real activity

*Answer: (c) Is used to preserve the logic.*

A dummy is a dashed arrow with zero duration. It is used when two activities would otherwise share both their start and end events, or to show that one activity depends on another with no real job between them.

- **(a) and (b):** a dummy takes no time and no resources.
- **(d):** it is not a real job; it only carries a dependency.

**Quick check:** activities A and B both drawn from event 1 to event 2 would both be called 1-2. A dummy gives one of them its own end event.

**Q22. ISRO IPRC Technical Assistant (Mechanical), 21 April 2016 · Topic 7.** \_\_\_\_\_\_\_\_\_ is the tool for organizing the workplace in a clean, efficient and safe manner to enhance productivity and enable standardized working. (a) 5S (b) 3D (c) 6σ (d) None of these

*Answer: (a) 5S.*

The five S's are Seiri (sort), Seiton (set in order), Seiso (shine), Seiketsu (standardise) and Shitsuke (sustain). Keep only what is needed, give everything a fixed place, keep it clean, and make the routine a habit.

- **(c) 6σ:** Six Sigma cuts process variation to about 3.4 defects per million. It is a statistical method, not workplace housekeeping.
- **(b) 3D:** not a quality tool.

**Memory aid:** the question's own words follow the S's: organise (sort, set in order), clean (shine), standardise, and keep it up (sustain).

**Q23. HPCL Junior Executive (Mechanical), 16 August 2025 (Shift 1) · Topic 10.** A key advantage of qualitative forecasting methods is that they: (a) are based on solid statistical data (b) are useful when accurate historical data is unavailable (c) focus solely on past demand trends (d) require minimal input from experts

*Answer: (b) Are useful when accurate historical data is unavailable.*

Qualitative methods (Delphi, expert opinion, sales force estimates, market surveys) rest on judgement. That makes them the choice for a new product or a changed market, where there is no past demand to work from.

- **(a) and (c):** describe quantitative time-series methods such as moving averages.
- **(d):** the opposite. Qualitative methods depend on expert input.

**Memory aid:** no data, ask people; plenty of data, use the numbers.

**Q24. MPSC AMVI 2011 (Paper 3) · Topic 2.** Object of time study is to determine the time taken by (a) expert worker (b) new employee (c) apprentice (d) average worker

*Answer: (d) Average worker.*

Time study sets the time a qualified worker of average skill takes at a normal pace. The observed time of the worker studied is adjusted by the rating to fit that average worker, and then allowances are added.

- **(a) Expert worker:** a standard set on the fastest worker would be out of reach for most.
- **(b) and (c):** a new employee or an apprentice is still learning, so a standard set on them would be too loose.

**The trap:** the worker actually timed may be fast or slow. Rating converts their time into the average worker's time.

**Q25. UKPSC JE Mechanical 2013 (Paper I) · Topic 5.** The word "Kanban" is used in (a) EOQ (b) JIT (c) MRP (d) SCM

*Answer: (b) JIT.*

Kanban (Japanese for "card" or "signboard") is the pull signal of the Toyota just-in-time system. A station makes or moves parts only when a kanban from the next station asks for them, so inventory stays small.

- **(a) EOQ:** a lot-size formula for systems that hold stock.
- **(c) MRP:** plans orders from the master schedule and the bill of materials, a push system.
- **(d) SCM:** supply chain management, a broad field, not the source of the word.

**Memory aid:** kanban is the card that pulls; JIT is the system it runs.

## Mock 2

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from Kerala PSC papers (2025 and 2026), 3 from RRB JE (2019 and 2025) and 20 from other exams.

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 3.** Which of the following is (are) correct statement(s) for economic order quantity? i. EOQ is the lot size that minimises total annual inventory holding and ordering costs. ii. EOQ is the lot size at which the annual holding and ordering costs are same. (a) i (b) ii (c) i and ii (d) None

*Answer: (c) i and ii.*

In the basic EOQ model, the yearly ordering cost (D/Q)Cₒ falls as the lot size Q grows and the yearly holding cost (Q/2)Cₕ rises. Their sum is lowest where the two are equal, so both statements describe the same lot size.

- **(a) and (b):** each leaves out a true statement.
- **(d):** both statements are true.

**The trap:** statement ii looks like a side effect rather than a definition, so many people tick only i. In the basic model the two always go together.

**Q2. ISRO VSSC Technical Assistant (Mechanical), 11 February 2024 · Topic 7.** Which of the statistical process control chart is used for measuring the quality characteristics of a product? (a) P chart (b) C chart (c) U chart (d) R chart

*Answer: (d) R chart.*

A quality characteristic that is measured, such as a diameter or a weight, needs a variables chart. The R chart plots the range (largest minus smallest) of each sample and tracks the spread of the process. It is drawn with the X̄ chart, which tracks the average.

- **(a) P chart:** fraction defective, an attribute chart.
- **(b) C chart:** number of defects per unit, an attribute chart.
- **(c) U chart:** defects per unit when the sample size changes, also an attribute chart.

**Memory aid:** X̄, R and σ charts measure; p, np, c and u charts count.

**Q3. MPSC AMVI 2002 (Paper 3) · Topic 1.** SIMO charts are used in (a) Method study (b) Micromotion study (c) Process analysis (d) Layout analysis

*Answer: (b) Micromotion study.*

A SIMO (simultaneous motion cycle) chart is drawn from a film of the job. It records the therbligs of the left and right hands side by side on a common time scale, often in winks (1 wink = 1/2000 min).

- **(a) Method study:** the wider field. Micromotion study is one of its detailed techniques, and the SIMO chart belongs to that.
- **(c) Process analysis:** uses flow process charts with the five symbols.
- **(d) Layout analysis:** uses flow diagrams, string diagrams and travel charts.

**The trap:** (a) is not wrong in a broad sense, but the specific answer is the one the SIMO chart was made for.

**Q4. UGC NET Paper II (Management), 12 March 2023 (Shift 2) · Topic 4.** For a project activity, the optimistic, the pessimistic and the most likely times are 4, 14 and 6 days respectively. Its average time is \_\_\_\_\_\_\_\_ (a) 10 days (b) 7 days (c) 12 days (d) 9 days

*Answer: (b) 7 days.*

PERT's expected time weights the most likely time four times: tₑ = (tₒ + 4tₘ + tₚ)/6 = (4 + 24 + 14)/6 = 42/6 = 7 days.

- **(d) 9 days:** (4 + 14)/2, the mid-point of the two extremes with tₘ left out.
- **(a) and (c):** both are above 9, which is not possible here. The most likely time (6) sits nearer the optimistic end, so tₑ must lie between 6 and 9.

**Quick check:** tₑ always lies between tₘ and the mid-point of tₒ and tₚ.

**Q5. SDSC ISRO Technical Assistant (Mechanical), 4 June 2022 · Topic 2.** The observed time for an element is 0.7 minutes. The rating factor is 90%. All the allowances put together are 20% of normal time. Calculate the standard time in minutes. (a) 0.756 (b) 0.856 (c) 0.5 (d) 2.0

*Answer: (a) 0.756.*

1. Normal time = 0.7 × 0.90 = 0.63 min.
2. Standard time = 0.63 × 1.20 = 0.756 min.

- **(c) 0.5:** about 0.63 × 0.8, the allowance taken off instead of added.
- **(b) and (d):** even at a 100% rating the standard time would be 0.7 × 1.2 = 0.84 min. A 90% rating lowers it, so anything above 0.84 is out.

**Quick check:** a rating below 100% means a slow worker, so the normal time is less than the observed 0.7 min.

**Q6. ISRO IPRC Technical Assistant (Mechanical), 10 April 2022 · Topic 8.** Breakeven point is the point where (a) fixed and variable cost lines intersect (b) fixed and total cost lines intersect (c) variable and total cost lines intersect (d) sales revenue and total cost lines intersect

*Answer: (d) Sales revenue and total cost lines intersect.*

At the break-even point, revenue equals total cost, so there is neither profit nor loss. To the right of it the revenue line is above the total cost line (profit); to the left it is below (loss).

- **(a):** where variable cost happens to equal fixed cost, which means nothing for profit.
- **(b):** the total cost line starts on the fixed cost line at zero output and rises above it, so they meet only at zero output.
- **(c):** the total cost line is the variable cost line lifted by the fixed cost. The two are parallel and never meet.

**Memory aid:** break-even is where money in equals money out: revenue meets total cost.

**Q7. VIZAG MT (Mechanical) 2015 · Topic 6.** The object of plant layout could be (a) To reduce material handling cost (b) For effective utilization of space (c) To increase production (d) Any of these

*Answer: (d) Any of these.*

A good layout shortens the paths of men and materials, removes bottlenecks and uses floor space well. Each of these cuts cost or raises output, so all three are aims of layout planning.

- **(a), (b) and (c):** each is true, but each alone is only part of the aim.

**Memory aid:** when every option is a genuine benefit of the same thing, "any of these" or "all of these" is the answer.

**Q8. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 2) · Topic 10.** \_\_\_\_\_\_\_\_\_ is a quantitative technique used to determine the optimal mix of limited resources for maximising profits or minimising costs. (a) Decision making (b) Cost-benefit analysis (c) Linear programming (d) Capital budgeting

*Answer: (c) Linear programming.*

Linear programming maximises or minimises a linear objective, such as profit = 5x + 4y, subject to linear limits on resources such as machine hours and material. The best mix lies at a corner of the feasible region.

- **(a) Decision making:** the general act of choosing, not a technique.
- **(b) Cost-benefit analysis:** compares a project's costs with its benefits; it does not find a best mix.
- **(d) Capital budgeting:** chooses long-term investments using NPV, IRR or payback.

**Memory aid:** "optimal mix of limited resources" is the textbook definition of LP.

**Q9. Kerala PSC AE (Mechanical), 18 August 2025 · Topic 1.** Which of the following is (are) the advantages of work study? (i) Uniform and improved production flow (ii) Higher productive efficiency (a) Only (i) (b) Only (ii) (c) Both (i) and (ii) (d) None of the above

*Answer: (c) Both (i) and (ii).*

Method study removes waste from the job and smooths the flow of work. Work measurement sets fair standard times, so planning and incentives become reliable. Together they give a steadier production flow and higher efficiency.

- **(a) and (b):** each leaves out a real advantage.
- **(d):** both are standard advantages of work study.

**The trap:** with "is/are" questions, check each statement on its own before choosing.

**Q10. RRB JE CBT 2 (Mechanical), 29 August 2019 · Topic 9.** If (R) is the base rate guaranteed per hour, (S) is the standard time for the job and (T) is the actual time, then according to Rowan plan, wages for the job will be (a) TR + (S − T) × R (b) TR + \[(S − T)/2\] × R (c) TR (d) TR + \[(S − T)/S\] × R

*Answer: (d) TR + \[(S − T)/S\] × R.*

The Rowan plan pays the time wage TR plus a bonus in proportion to the fraction of time saved, (S − T)/S. In full, the bonus is (S − T)/S × TR, the fraction saved times the wages earned. The printed option drops the T, but it is the only one with the Rowan fraction, so it is the key.

- **(a):** pays for all the time saved, which equals S × R, a straight piece rate.
- **(b):** pays for half the time saved, the 50% Halsey plan.
- **(c):** the time wage alone, with no bonus.

**Quick check:** S = 10 h, T = 6 h, R = Rs. 10/h. Rowan: 60 + (4/10) × 60 = Rs. 84. Halsey 50%: 60 + 0.5 × 4 × 10 = Rs. 80.

**Q11. HSSC JE Civil, 12 April 2018 (Shift 1) · Topic 4.** The path which moves along the activities having total float zero, in the network diagram is called (a) Free float (b) Critical path (c) Total float (d) Independent float

*Answer: (b) Critical path.*

The critical path is the longest path through the network. Its activities have zero total float, so any delay on them delays the whole project. Its length is the project duration.

- **(a), (c) and (d):** kinds of float, which are amounts of spare time, not paths.

**Memory aid:** the critical path is the longest path and has the least float.

**Q12. RRB JE CBT 2 (Mechanical), 29 August 2019 · Topic 3.** Which of the following inventory costs represents the cost of loss of demand due to shortage in supplies? (a) Stockout cost (b) Unit cost (c) Procurement cost (d) Carrying cost

*Answer: (a) Stockout cost.*

Stockout (shortage) cost is what is lost when an item is not in stock: lost sales and profit, idle men and machines, rush orders and goodwill.

- **(b) Unit cost:** the purchase price of each item.
- **(c) Procurement cost:** the cost of placing and receiving an order.
- **(d) Carrying cost:** the cost of holding stock: interest, storage, insurance and obsolescence.

**Memory aid:** safety stock is bought to cut stockout cost, at the price of extra carrying cost.

**Q13. RRB JE CBT 2 (Mechanical) Re-exam, 4 June 2025 · Topic 5.** The purpose of scheduling in production planning and control is to: (a) design new product layouts (b) determine the cost of materials (c) hire new personnel (d) ensure products are completed on time

*Answer: (d) Ensure products are completed on time.*

Scheduling fixes when each operation starts and ends on each machine, so that orders meet their delivery dates. Routing decides the path and sequence of operations, dispatching releases the work, and follow-up (expediting) checks progress.

- **(a):** layout planning, not PPC.
- **(b):** estimating and costing.
- **(c):** personnel management.

**Memory aid:** routing says where and in what order; scheduling says when.

**Q14. MPSC AMVI 2013 (Paper 2) · Topic 7.** \_\_\_\_\_\_\_ is the probability of a defective batch being accepted which is otherwise being rejected. (a) Purchaser's risk (b) Acceptable quality level (c) Producer's risk (d) Consumer's risk as well as producer's risk

*Answer: (a) Purchaser's risk.*

Acceptance sampling has two errors. A bad lot passing is the consumer's (purchaser's) risk β, which hurts the buyer. A good lot failing is the producer's risk α, which hurts the maker.

- **(c) Producer's risk:** a good lot rejected, the opposite case.
- **(b) AQL:** a quality level (the worst percent defective still treated as good), not a probability.
- **(d):** the two risks are separate errors; only the consumer's risk fits.

**Memory aid:** ask who suffers. A bad lot accepted lands on the buyer.

**Q15. UPRVUNL AE (Mechanical) 2016 · Topic 2.** Performance rating of an employee may be expressed as: (a) (Normal performance) × (Observed performance) (b) (Normal performance/Observed performance)² (c) √(Observed performance/Normal performance) (d) Observed performance/Normal performance

*Answer: (d) Observed performance/Normal performance.*

Rating compares the observed worker's pace with the normal pace. A worker going 20% faster than normal is rated 120%, and normal time = observed time × rating.

- **(a), (b) and (c):** none is a ratio of the two paces in the right form; a product, a square or a root has no meaning here.

**Quick check:** a worker 20% faster than normal must be rated 120%. Only (d) gives 1.2; (b) gives (1/1.2)² = 0.69 and (c) gives √1.2 = 1.10.

**Q16. HPCL Engineer (Mechanical), 27 March 2025 (Shift 2) · Topic 6.** What is the full form of COMSOAL? (a) Computerised Simulation and Optimisation of Assembly Line (b) Computer Method for Sequencing Operations for Assembly Lines (c) Computerised Solution of Assembly Line Balancing (d) Computerised Simulation of Assembly Line

*Answer: (b) Computer Method for Sequencing Operations for Assembly Lines.*

COMSOAL (Arcus, 1966) balances an assembly line by building many random sequences of tasks that obey the precedence rules and keeping the one that needs the fewest stations.

- **(a), (c) and (d):** made-up expansions that sound right.

**Memory aid:** COM-S-O-A-L: COmputer Method, Sequencing Operations, Assembly Lines. Other line balancing methods are Kilbridge and Wester and ranked positional weight. CRAFT, ALDEP and CORELAP are layout programs.

**Q17. SSC JE Civil, 25 January 2018 (Morning) · Topic 8.** In the straight line method, the expression for depreciation of a machine having purchasing cost C, scrap value S and useful life of the machinery n, is \_\_\_\_\_. (a) (C + S)/n (b) (C − S)/n (c) \[1 − (C/S)\] × n (d) \[1 + (C/S)\] × n

*Answer: (b) (C − S)/n.*

The machine loses C − S over its life, and the straight-line method charges the same share every year: (C − S)/n.

- **(a):** adds the scrap value, which the machine never loses.
- **(c) and (d):** have no units of money per year; C/S is a pure number.

**Quick check:** C = Rs. 1,00,000, S = Rs. 10,000 and n = 9 years give Rs. 10,000 a year. After 9 years the book value is the scrap value.

**Q18. DSSSB AE (Civil), 30 June 2024 (Shift 2) · Topic 4.** Slack of an event in PERT is \_\_\_\_\_\_\_\_\_\_\_\_. (a) Latest allowable time minus early expected time (b) Early expected time minus latest allowable time (c) Early allowable time minus latest expected time (d) Latest expected time minus early allowable time

*Answer: (a) Latest allowable time minus early expected time.*

Event slack = TL − TE. TE is the earliest the event can happen, from the forward pass. TL is the latest it can happen without delaying the project, from the backward pass. Slack is zero on the critical path and positive elsewhere.

- **(b):** the reverse, which would come out negative for every event.
- **(c) and (d):** swap the names: there is no "early allowable" or "latest expected" time in PERT.

**Memory aid:** slack is latest minus earliest, never the other way round. In PERT, event slack; in CPM, activity float.

**Q19. UPRVUNL JE (Mechanical), 24 October 2021 (Shift 2) · Topic 1.** The chart which records activities of workers and/or machines on a common time scale is known as: (a) Flow process chart (b) Travel chart (c) Operations process chart (d) Multiple activity chart

*Answer: (d) Multiple activity chart.*

A multiple activity chart puts each worker and each machine in its own column against one time scale. Idle time shows up as gaps, so the chart is used to decide how many machines one worker can tend. The man-machine chart is one kind.

- **(a) Flow process chart:** follows one subject (a man, a material or a machine) with the five symbols, without a common time scale.
- **(b) Travel chart:** a from-to table of movements between work stations.
- **(c) Operations process chart:** shows only the operations and inspections in sequence.

**Memory aid:** "common time scale" means the multiple activity chart.

**Q20. HPCL Junior Executive (Mechanical), 14 September 2025 (Shift 1) · Topic 10.** The demand behaviour, showing repeated increase and decrease over short periods, is called: (a) cyclical variation (b) random variation (c) seasonal variation (d) trend

*Answer: (c) Seasonal variation.*

Seasonal variation repeats within a year at fixed times: umbrellas in the monsoon, sweets at festivals.

- **(a) Cyclical variation:** rises and falls over several years with the business cycle.
- **(b) Random variation:** irregular and without a pattern.
- **(d) Trend:** the long-term rise or fall.

**The trap:** cyclical also means repeated ups and downs. The words "short periods" decide it: seasons are short and regular, cycles are long and irregular.

**Q21. SSC JE Civil, 9 October 2023 (Shift 1) · Topic 3.** Which of the following keeps a record of receipts, issues and running balance of certain items of stock, especially of fitting items? (a) Stock items (b) Bin card (c) Quantity account (d) Value account

*Answer: (b) Bin card.*

A bin card hangs at the bin or rack. The storekeeper enters each receipt and issue, with the running balance, in quantity only. The stores ledger in the accounts office keeps the same record in money too.

- **(a) Stock items:** the goods themselves, not a record.
- **(c) and (d):** a quantity account and a value account are ledger records, not the card kept with the stock.

**Memory aid:** the bin card lives at the bin.

**Q22. DSSSB JE (E&M), 21 March 2022 (Shift 1) · Topic 7.** Which of the following is NOT a principle of total quality management (TQM)? (a) Customer-focused (b) Process-centred (c) Product-centred (d) Fact-based decision making

*Answer: (c) Product-centred.*

TQM's principles are customer focus, total employee involvement, a process-centred approach, an integrated system, a strategic approach, continual improvement, fact-based decisions and communication. It improves the processes that make the product, rather than inspecting the product at the end.

- **(a), (b) and (d):** all are TQM principles.

**The trap:** quality sounds like a property of the product, so (c) seems natural. TQM's point is that quality is built into processes by everyone.

**Q23. Bihar STET (Commerce) Paper II, 8 November 2025 (Shift 1) · Topic 9.** Matrix organisation violates which of the following management principles? (a) Span of management (b) Scalar chain (c) Unity of direction (d) Unity of command

*Answer: (d) Unity of command.*

In a matrix, each person reports to both a functional manager and a project manager. Fayol's unity of command says each employee should take orders from only one boss.

- **(a) Span of management:** how many people one manager can supervise.
- **(b) Scalar chain:** the line of authority from top to bottom.
- **(c) Unity of direction:** one head and one plan for activities with the same objective. Each matrix project has this.

**Memory aid:** two bosses break unity of command. Taylor's functional foremanship breaks it too.

**Q24. ESE Mechanical 2013 (Paper 2) · Topic 2.** The objective of work measurement is to: (a) Plan and schedule the problem (b) Estimating the delivery price and delivery date (c) Formulate a proper incentive scheme (d) All of the above

*Answer: (d) All of the above.*

Standard times feed almost every plan in a factory. They set machine loads and schedules, give the labour cost for quoting prices and promising delivery dates, and set the targets that incentive schemes pay against.

- **(a), (b) and (c):** each is a real use, so none alone is the full answer.

**Memory aid:** no standard time, no schedule, no quote, no bonus.

**Q25. BPSC AE Paper 4 (General Engineering Science) 2019 · Topic 5.** A bar chart is drawn for (a) time versus activity (b) activity versus resources (c) resources versus progress (d) progress versus time

*Answer: (a) Time versus activity.*

In a bar (Gantt) chart, each activity is a row and the horizontal axis is time. Each bar runs from the activity's start to its end, so the chart shows what happens when.

- **(b):** a resource chart.
- **(c) and (d):** progress curves, such as the S-curve of cumulative progress against time.

**The trap:** a bar chart cannot show how activities depend on each other. That weakness is why networks (PERT and CPM) were developed.

## Mock 3

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 2 questions come from Kerala PSC papers (2023 and 2026), 3 from RRB JE (2019, 2025 and 2026) and 20 from other exams.

**Q1. Kerala PSC Deputy Engineer / AE (Mechanical), 18 June 2023 · Topic 9.** In the context of industrial psychology, the groups where the individuals are in face-to-face relationships with each other are called (a) Primary groups (b) Secondary groups (c) Working groups (d) Quality circle

*Answer: (a) Primary groups.*

A primary group (Cooley's term) is small and close: the members meet face to face, know each other well and influence each other directly, like a family or a small team on the shop floor.

- **(b) Secondary groups:** large and impersonal, held together by formal rules, such as a trade union or the whole company.
- **(c) Working groups:** a broad term for any group formed for a task; it does not name the face-to-face type.
- **(d) Quality circle:** a small group that meets to solve quality problems. Its members do meet face to face, but it is one particular use of a group, not the name of the type.

**The trap:** (d) also involves people meeting in person. The question asks for the general name of such groups.

**Q2. JKSSB JE (Mechanical) 2015 · Topic 4.** Pessimistic time and optimistic time of completion of an activity are given as 10 days and 4 days respectively. The variance of the activity will be (a) 1 (b) 6 (c) 12 (d) 18

*Answer: (a) 1.*

In PERT, σ = (tₚ − tₒ)/6 = (10 − 4)/6 = 1 day, and the variance is σ² = 1.

- **(b) 6:** the range tₚ − tₒ, not divided by 6.
- **(c) and (d):** have no PERT formula behind them.

**Quick check:** the variance needs only tₒ and tₚ, so no most likely time is given. A range of six standard deviations is PERT's assumption.

**Q3. ISRO SDSC Technical Assistant (Mechanical), 12 February 2017 · Topic 1.** Founder of micro motion study is (a) Taylor (b) Fayol (c) Gilbreth (d) Mundel

*Answer: (c) Gilbreth.*

Frank and Lillian Gilbreth filmed workers with a clock in view and broke each job into 17 basic hand motions, the therbligs (Gilbreth spelt backwards, nearly). Micromotion study and the SIMO chart came from this work.

- **(a) Taylor:** the father of scientific management and of time study.
- **(b) Fayol:** gave the 14 principles of management.
- **(d) Mundel:** developed memo-motion study, a slow-speed filming method for long jobs.

**Memory aid:** Taylor timed the work; Gilbreth filmed the motions.

**Q4. HPCL Engineer (Mechanical), 12 August 2021 (Shift 1) · Topic 7.** Control charts for the attribute are concerned with (a) Checking if the variable is out of control (b) The actual measurement of the parameter, comparing with a standard (c) Qualitative checking of defects (d) Direct measurement of the variable for control

*Answer: (c) Qualitative checking of defects.*

An attribute is judged, not measured: an item is good or bad, or the defects on it are counted. The p, np, c and u charts track these counts.

- **(a), (b) and (d):** all speak of measuring a variable, which is the job of X̄ and R charts.

**Memory aid:** the word "variable" or "measurement" in an option rules it out for attribute charts.

**Q5. WBMSC Sub Assistant Engineer (Mechanical), 5 June 2022 · Topic 3.** ABC analysis is based on (a) Parkinson principle (b) Porter's principle (c) Philip Kotler's principle (d) Pareto principle

*Answer: (d) Pareto principle.*

Pareto's rule says a vital few cause most of the effect. In stores, a few items (class A) take most of the money, so they get the closest control.

- **(a) Parkinson:** work expands to fill the time available.
- **(b) Porter:** competitive strategy and the five forces.
- **(c) Kotler:** marketing management.

**Memory aid:** the 80/20 rule is Pareto's.

**Q6. MPSC AMVI 2002 (Paper 3) · Topic 2.** Actual observed time for an operation was 1 min/piece. If the performance rating of the operator was 120 and a 5% personal time is to be provided, the standard time in min/piece is (a) 1 (b) 1.2 (c) 1.25 (d) 1.26

*Answer: (d) 1.26.*

1. Normal time = 1 × 120/100 = 1.2 min.
2. If 5% of the working time is personal time, standard time = 1.2/0.95 = 1.263 min, about 1.26. Taking 5% of the normal time instead gives 1.2 × 1.05 = 1.26 as well.

- **(a) 1:** the observed time.
- **(b) 1.2:** the normal time, before the allowance.
- **(c) 1.25:** neither way of adding 5% to 1.2 gives it.

**Quick check:** the standard time must be more than the normal time of 1.2. Of (c) and (d), only (d) fits a 5% allowance.

**Q7. UKPSC JE Mechanical 2013 (Paper I) · Topic 6.** Which of the following material handling devices are used for the movement of materials in a fixed route and fixed area of operation? (a) Cranes (b) Pallets (c) Industrial trucks (d) Elevators

*Answer: (a) Cranes.*

An overhead travelling crane runs on rails along a bay, and its trolley crosses the bay. It can reach any point in that rectangle and nowhere else: a fixed area, served along fixed rails.

- **(b) Pallets:** platforms that hold a unit load; they move nothing by themselves.
- **(c) Industrial trucks:** fork lifts and tractors go wherever there is an aisle, so their route is not fixed.
- **(d) Elevators:** move up and down one shaft, a fixed path with no area of operation.

**Memory aid:** conveyors serve a fixed path, trucks any path, and cranes a fixed area.

**Q8. HPCL Engineer (Mechanical), 16 August 2025 (Shift 2) · Topic 10.** Which of the following forecasting methods is used to form a weighted average of past observations to smooth short-term fluctuations? (a) Simple moving average method (b) Logarithmic average method (c) Fourier averaging method (d) Exponentially weighted moving average method

*Answer: (d) Exponentially weighted moving average method.*

Exponential smoothing gives the latest demand a weight α and older demands weights that shrink by (1 − α) each period back: Fₜ₊₁ = αDₜ + (1 − α)Fₜ.

- **(a) Simple moving average:** averages the last n demands with equal weight, so it is not a weighted average.
- **(b) and (c):** not forecasting methods used in production planning.

**The trap:** a simple moving average also smooths short-term ups and downs. The word "weighted" rules it out.

**Q9. RRB JE CBT 2 (Mechanical), 22 April 2025 (Shift 1) · Topic 5.** The main objective of the sequencing problem in production is to: (a) ignore the order of job processing (b) maximise the number of jobs processed (c) increase the processing time of jobs (d) minimise the idle time of machines

*Answer: (d) Minimise the idle time of machines.*

Sequencing chooses the order in which jobs pass through the machines. A good order (Johnson's rule for two machines) cuts the time machines stand waiting, which also cuts the total elapsed time.

- **(a):** the order is exactly what sequencing decides.
- **(b):** the number of jobs is fixed; sequencing only orders them.
- **(c):** processing times are given and do not change with the order.

**Memory aid:** in sequencing, the jobs and their times are fixed. Only the order changes, and with it the idle time and the makespan.

**Q10. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 1 · Topic 8.** Fixed cost of an equipment is Rs. 6,000. If variable cost of an item it produces is Rs. 2 per item and it sells for Rs. 7 per item, what is the break-even point? (a) 1200 items (b) 3000 items (c) 7000 items (d) 6500 items

*Answer: (a) 1200 items.*

Each item leaves 7 − 2 = Rs. 5 towards the fixed cost. BEP = 6000/5 = 1200 items.

- **(b) 3000:** 6000/2, dividing by the variable cost instead of the contribution.
- **(c) and (d):** far too high. At 1200 items, revenue already equals cost.

**Quick check:** revenue 1200 × 7 = Rs. 8,400; cost 6000 + 1200 × 2 = Rs. 8,400.

**Q11. MPSC AMVI 2017 (Paper 1) · Topic 1.** In order to indicate the sequence of events and movements of men, material, etc., while work is being accomplished, the recording technique used is (a) Flow diagram (b) Flow process chart (c) Gang process chart (d) Two handed process chart

*Answer: (a) Flow diagram.*

A flow diagram is a scale drawing of the shop with the flow process chart's symbols placed on it. It shows the order of events and also the actual paths of movement, so back-tracking and crossing routes become visible.

- **(b) Flow process chart:** lists the events in order, but with no plan of the shop it cannot show where the movements go.
- **(c) Gang process chart:** follows a group of workers on one job.
- **(d) Two handed process chart:** records the left and right hands of one worker at a bench.

**The trap:** (b) gives the sequence too. The word "movements" calls for a drawing of the floor, which is the flow diagram.

**Q12. BHEL Engineer Trainee (Mechanical), 24 August 2023 · Topic 4.** Which of the following is correct about CPM and PERT? \[A = earliest start time, B = latest start time, C = earliest finish time, D = latest finish time, E = total float\] (a) E = D + C (b) E = B + A (c) E² = B² − A² (d) E = B − A

*Answer: (d) E = B − A.*

Total float = LS − ES = LF − EF. In the letters given, E = B − A, which also equals D − C.

- **(a) and (b):** add two times; float is a difference.
- **(c):** squares have no meaning for float.

**Memory aid:** float is always latest minus earliest, at the start or at the finish.

**Q13. RRB JE CBT 2 (Mechanical), 30 August 2019 (Shift 1) · Topic 3.** In inventory planning, extra inventory is unnecessarily carried to the end of the planning period when using which of the following lot size decision policies? (a) Part period total cost balancing (b) EOQ lot size (c) Lot-for-lot production (d) EPQ lot size

*Answer: (b) EOQ lot size.*

In MRP, demand comes in lumps, period by period. An EOQ lot is a fixed size worked out for steady demand, so it rarely matches the sum of whole periods' needs. Part of the last lot is left over at the end of the plan.

- **(c) Lot-for-lot:** orders exactly each period's net need, so nothing is left over.
- **(a) Part period balancing:** sizes each lot to cover a whole number of periods, balancing ordering and holding cost, so lots end with the periods.
- **(d) EPQ:** the same fixed-lot idea for production. The key takes EOQ as the standard example.

**The trap:** EOQ is the "best" lot for steady demand. With lumpy MRP demand, that same fixed lot causes leftover stock.

**Q14. ISRO IPRC Technical Assistant (Mechanical), 21 April 2016 · Topic 7.** The ability of an acceptance sampling plan to distinguish between good and bad lots of products is known from its (a) Trend graph (b) OC curve (c) Quality history (d) None of these

*Answer: (b) OC curve.*

The operating characteristic curve plots the chance of accepting a lot against the lot's fraction defective. A steep curve means the plan accepts good lots and rejects bad ones sharply. The ideal plan, 100% inspection, has a vertical step.

- **(a) Trend graph:** shows how a value changes over time.
- **(c) Quality history:** past records of a supplier, not a property of the plan.

**Memory aid:** the OC curve is the report card of a sampling plan; a larger sample makes it steeper.

**Q15. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 1) · Topic 2.** In synthetic rating, the speed or the pace rate of an operator is evaluated with the help of \_\_\_\_\_\_\_\_. (a) speed rating (b) predetermined motion time standards (c) rating factor (d) observed time

*Answer: (b) Predetermined motion time standards.*

Synthetic rating (Morrow) takes a few elements of the job, finds their times from PMTS tables, and compares them with the observed times: rating = PMTS time/observed time. That factor then rates the rest of the study.

- **(a) Speed rating:** the analyst's judgement of pace, the method synthetic rating replaces.
- **(c) Rating factor:** the result, not the tool used to find it.
- **(d) Observed time:** one input. It must be compared with something, and that is the PMTS time.

**Memory aid:** synthetic means built from tables, not from the observer's eye.

**Q16. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 10.** If the gain of one player equals loss of other player in a game, it is called (a) Cooperative game (b) Zero sum game (c) Dynamic game (d) None

*Answer: (b) Zero sum game.*

If one player's gain is exactly the other's loss, the payoffs always add to zero. Two-person zero-sum games are the type solved in operations research, by saddle points, dominance or mixed strategies.

- **(a) Cooperative game:** the players can make binding deals and share the gains.
- **(c) Dynamic game:** the players move in turns over time; it says nothing about payoffs.

**Memory aid:** gain + loss = 0, hence zero sum.

**Q17. RRB JE CBT 2 (Mechanical and Allied Engineering), 2 July 2026 · Topic 6.** Which of the following plots is used for the classification of types of facilities and layouts used for different levels of the production? (a) Production quantity vs. product cost plot (b) Production mass vs. product variety plot (c) Product cost vs. product variety plot (d) Production quantity vs. product variety plot

*Answer: (d) Production quantity vs. product variety plot.*

The product-process matrix puts quantity on one axis and variety on the other. Low quantity and high variety call for fixed-position or process layouts; medium for cellular (group) layouts; high quantity and low variety for product layouts.

- **(a) and (c):** cost is not used to classify layouts.
- **(b):** "production mass" is not a measure of volume.

**Memory aid:** the more you make of fewer things, the closer you move to a product line.

**Q18. JKSSB JE (Mechanical), 2 November 2021 (Shift 1) · Topic 9.** Which one of the following wage incentive plans is highly disadvantageous to workers? (a) Straight piece rate system (b) Rowan plan (c) Halsey plan (d) Differential piece rate system

*Answer: (a) Straight piece rate system.*

Under a straight piece rate, pay = pieces × rate, with no guaranteed wage. A breakdown, a late delivery of material or a learner's slow start cuts pay, though none of them is the worker's fault.

- **(b) Rowan and (c) Halsey:** guarantee the time wage and add a bonus for time saved.
- **(d) Differential piece rate:** pays a higher rate to anyone who reaches the standard.

**The trap:** Taylor's differential piece rate is also hard on slow workers, since every piece below standard gets the lower rate. The key marks the straight piece rate because nothing in it protects the worker's income.

**Q19. GATE ME 2016 (Shift 3) · Topic 4.** In PERT chart, the activity time distribution is (a) Normal (b) Binomial (c) Poisson (d) Beta

*Answer: (d) Beta.*

Each activity time is taken to follow a beta distribution, which has fixed ends (tₒ and tₚ) and can lean to either side. That gives tₑ = (tₒ + 4tₘ + tₚ)/6 and σ = (tₚ − tₒ)/6.

- **(a) Normal:** the distribution of the whole project time, by the central limit theorem, not of one activity.
- **(b) and (c):** count distributions used for defectives and defects in quality control.

**The trap:** the probability of finishing on time is found from the normal table, so (a) feels right. That is for the project; each activity is beta.

**Q20. GATE PI 2017 · Topic 1.** Match the ASME process chart symbols with their correct description. Symbols: P, a circle; Q, an arrow; R, a square; S, a triangle; T, a D shape. Descriptions: 1 storage, 2 transportation, 3 operation, 4 delay, 5 inspection. (a) P-3, Q-4, R-1, S-5, T-2 (b) P-4, Q-2, R-5, S-1, T-3 (c) P-3, Q-2, R-5, S-1, T-4 (d) P-1, Q-5, R-3, S-2, T-4

*Answer: (c) P-3, Q-2, R-5, S-1, T-4.*

Circle = operation (3), arrow = transport (2), square = inspection (5), triangle = storage (1), D = delay (4).

- **(a):** makes the arrow a delay and the D a transport.
- **(b):** makes the circle a delay.
- **(d):** makes the circle a storage.

**Quick check:** two sure pairs settle it. The circle is an operation (P-3) and the arrow is transport (Q-2); only (c) has both.

**Q21. HPCL Engineer (Mechanical), 18 August 2024 · Topic 3.** Safety stock is used to \_\_\_\_\_\_\_\_\_\_\_. (a) eliminate the need for forecasting (b) protect against variability in demand and lead time (c) increase the reorder point (d) decrease the carrying cost

*Answer: (b) Protect against variability in demand and lead time.*

If demand is higher than expected, or the supplier is late, the stock on hand runs out before the order arrives. Safety stock is the extra kept for those cases.

- **(a):** safety stock covers forecast errors; it does not remove the need to forecast.
- **(c):** it does raise the reorder point (ROL = demand in lead time + safety stock), but that is a result, not the purpose.
- **(d):** it raises carrying cost, since more stock is held.

**The trap:** (c) is a true fact about safety stock. The question asks what it is for.

**Q22. UPPSC AE Mains Paper I (Mechanical) 2024, 29 September 2025 · Topic 5.** Match List I with List II. List I: A. Efficiency; B. Effectiveness; C. Productivity; D. Total factor productivity. List II: i. A combined effect of resource utilisation and performance; ii. Ratio of actual output attained to standard expected output; iii. Ratio of net output to the sum of labour and capital inputs; iv. Degree of accomplishing objectives. (a) A-i, B-ii, C-iv, D-iii (b) A-ii, B-iii, C-i, D-iv (c) A-ii, B-iv, C-i, D-iii (d) A-ii, B-i, C-iii, D-iv

*Answer: (c) A-ii, B-iv, C-i, D-iii.*

- Efficiency is doing things right: actual output against the standard output (ii).
- Effectiveness is doing the right things: how far the objectives are met (iv).
- Productivity combines the two, how well resources are used and how well the work is done (i).
- Total factor productivity divides net output by labour and capital together (iii).

**Wrong options:** (a) makes efficiency the combined effect; (b) and (d) give effectiveness a ratio of inputs or the combined effect.

**Quick check:** "labour and capital" can only be total factor productivity, so D-iii. That leaves (a) and (c), and efficiency is a ratio to standard output, so A-ii.

**Q23. WBMSC Sub Assistant Engineer (Mechanical), 5 June 2022 · Topic 7.** 'If a defective part or equipment malfunction is discovered, the machine automatically stops and operators stop work and correct the problem rather than continuing production.' It is the principle of: (a) TPM (b) 5S (c) Kaizen (d) Jidoka

*Answer: (d) Jidoka.*

Jidoka (autonomation, "automation with a human touch") is a pillar of the Toyota Production System alongside JIT. A machine or worker stops the line the moment something is wrong, so no defect is passed on.

- **(a) TPM:** total productive maintenance, which keeps machines from breaking down.
- **(b) 5S:** workplace organisation.
- **(c) Kaizen:** continuous improvement in small steps.

**Memory aid:** Toyota's two pillars: JIT makes only what is needed; jidoka stops at the first defect.

**Q24. UP TGT Commerce 2019 · Topic 8.** Break even analysis is also known as: (a) Cost volume profit analysis (b) Cost benefit analysis (c) Incremental analysis (d) None of these

*Answer: (a) Cost volume profit analysis.*

Break-even analysis studies how profit changes with output, given fixed cost, variable cost and price. That is CVP analysis; the break-even point is the volume where profit is zero.

- **(b) Cost-benefit analysis:** compares a project's costs and benefits.
- **(c) Incremental analysis:** compares the extra cost and extra revenue of one choice over another.

**Memory aid:** the break-even chart has volume on one axis, money on the other, and profit as the gap between the lines.

**Q25. UPPSC AE Mechanical 2019 (Paper I), 13 December 2020 · Topic 2.** An industry produces 300 spark plugs in one shift of 8 hours. If the standard time per piece is 1.5 minute, the productivity would be (a) 3/4 (b) 5/8 (c) 7/16 (d) 15/16

*Answer: (d) 15/16.*

1. Standard output in a shift = 480 min/1.5 min = 320 plugs.
2. Productivity = actual/standard = 300/320 = 15/16.

- **(b) 5/8:** 300/480, plugs per minute, which leaves out the standard time.
- **(a) and (c):** do not come from the data.

**Quick check:** 300 plugs at 1.5 min each is 450 standard minutes of work in 480 minutes, and 450/480 = 15/16.

## Mock 4

25 questions, 25 minutes, +1 for a right answer and −1/3 for a wrong one. 1 question comes from a Kerala PSC paper (2026), 1 from RRB JE (2025) and 23 from other exams.

**Q1. Kerala PSC AE (Mechanical) / Inspector of Factories, 22 July 2026 · Topic 6.** A layout in which a set of machines chosen so that it can carry out the complete processing of a given family of products is (a) Product layout (b) Group layout (c) Process layout (d) None

*Answer: (b) Group layout.*

Group technology sorts parts into families that need similar operations. Each family gets its own cell of different machines, enough to finish the part completely. This is the group (cellular) layout.

- **(a) Product layout:** a line for one product in high volume, not for a family of parts.
- **(c) Process layout:** groups machines of the same kind together, so a part travels between departments.

**The trap:** a group cell looks like a small product line. The words "family of products" point to group technology.

**Q2. GATE PI 2016 · Topic 2.** ST and NT denote the standard time and the normal time, respectively, to complete a job. Allowance = LL × ST, where 0 < LL < 1. Which one of the following relationships is correct? (a) ST = NT/(1 − LL) (b) ST = NT(1 + LL) (c) ST = NT/(1 + LL) (d) ST = NT(1 − LL)

*Answer: (a) ST = NT/(1 − LL).*

ST = NT + allowance = NT + LL × ST. So ST(1 − LL) = NT, and ST = NT/(1 − LL).

- **(b):** right only if the allowance were a fraction of the normal time. Here it is a fraction of the standard time.
- **(c) and (d):** both make ST smaller than NT, which can never happen.

**The trap:** most questions give allowances as a percentage of normal time, so (b) is the habit. Always check which time the percentage is of.

**Q3. UPPSC AE Mains Paper I (Mechanical) 2024, 29 September 2025 · Topic 4.** Time estimates of an activity in a PERT network are: optimistic time tₒ = 9 days, pessimistic time tₚ = 21 days and most likely time tₘ = 15 days. The approximate probability of completion of this activity in 13 days is: (a) 64% (b) 50% (c) 16% (d) 34%

*Answer: (c) 16%.*

1. tₑ = (9 + 4 × 15 + 21)/6 = 90/6 = 15 days.
2. σ = (21 − 9)/6 = 2 days.
3. Z = (13 − 15)/2 = −1, and the area below Z = −1 is 50% − 34% = 16%.

- **(b) 50%:** the chance of finishing by the expected time, 15 days.
- **(d) 34%:** the area between Z = 0 and Z = −1, not the area below −1.
- **(a) 64%:** not a value from the table here. The chance of finishing within 17 days (Z = +1) would be 84%.

**Quick check:** 13 days is earlier than the expected 15, so the chance must be below 50%. That leaves (c) and (d).

**Q4. MP Vyapam Sub Engineer (Mechanical), 10 November 2022 (Shift 1) · Topic 1.** Micro motion study is called\_\_\_\_. (a) A methodical motion examination of a series of procedures (b) Motion research seen with increased time intervals (c) A concurrent study of humans and machines (d) Analysis of a man-work approach employing a motion picture camera with a timing device in the field of vision

*Answer: (d) Analysis of a man-work approach employing a motion picture camera with a timing device in the field of vision.*

In micromotion study the job is filmed with a fine clock (a microchronometer) in view. Each frame can then be read off in time, and the motions are broken into therbligs.

- **(a):** motion study in general, not the filmed micro version.
- **(b):** memo-motion study, which films at long intervals (one frame a second or slower) for long jobs.
- **(c):** a multiple activity (man-machine) chart.

**Memory aid:** micro means a camera and a clock; memo means slow frames for long jobs.

**Q5. UPPSC AE Mains Paper I (Mechanical) 2024, 29 September 2025 · Topic 3.** ABC analysis deals with: (a) The cost involved with the materials (b) Ordering cost (c) Flow of materials (d) Ordering schedule of materials

*Answer: (a) The cost involved with the materials.*

ABC analysis ranks items by annual consumption value, the yearly money spent on each. Class A (about 10% of items, 70% of value) gets tight control; class C gets simple rules.

- **(b) Ordering cost:** a cost per order, which goes into the EOQ, not into ABC.
- **(c) Flow of materials:** FSN analysis ranks items by how fast they move.
- **(d) Ordering schedule:** set by MRP or the reorder system.

**Memory aid:** ABC follows the money; FSN follows the movement; VED follows how critical an item is.

**Q6. MPSC AMVI 2013 (Paper 2) · Topic 7.** There are two basic types of control charts. I. When the method of inspection is by variables, the most popular control charts are X̄ and R charts. II. When the method of inspection is by attributes, the most popular control chart is P-charts. Which of the above statements is/are true? (a) I only (b) II only (c) I and II both (d) Neither I nor II

*Answer: (c) I and II both.*

Measured quality uses the X̄ chart (average) with the R chart (spread). Counted quality uses attribute charts, of which the p-chart for fraction defective is the most used; c-charts count defects.

- **(a) and (b):** each drops a true statement.
- **(d):** both are standard facts.

**The trap:** "most popular" makes some people doubt II because c-charts exist too. The p-chart is the standard attribute chart.

**Q7. UPPSC LT Grade Assistant Teacher (Commerce), 29 July 2018 · Topic 9.** Halsey premium plan is based on (a) time taken (b) quantity of work (c) time saved (d) quality of work

*Answer: (c) Time saved.*

Halsey pays the guaranteed time wage, TR, plus a bonus for part of the time saved: usually 50% (sometimes 33⅓%) of (S − T) × R.

- **(a) Time taken:** the basis of the plain time wage. Halsey uses it too, but its bonus comes from the time saved.
- **(b) Quantity of work:** the basis of piece rate systems.
- **(d) Quality of work:** not the basis of any of the usual wage plans.

**Memory aid:** Halsey halves the time saved; Rowan pays the fraction saved.

**Q8. BHEL Engineer Trainee (Mechanical), May 2019 · Topic 10.** In a transportation problem with 4 supply points and 5 demand points, how many number of constraints are required in its formulation? (a) 20 (b) 1 (c) 0 (d) 9

*Answer: (d) 9.*

There is one supply constraint for each source and one demand constraint for each destination: m + n = 4 + 5 = 9.

- **(a) 20:** m × n, the number of decision variables (one for each route), not constraints.
- **(b) and (c):** too few. Every source and every destination needs its own limit.

**Quick check:** in a balanced problem one constraint is redundant, so a basic solution has m + n − 1 = 8 allocations. That is the non-degeneracy count, not the number of constraints.

**Q9. JKSSB JE (Mechanical) 2015 · Topic 5.** Johnson's rule is used for (a) Sequencing problem (b) Assignment problem (c) Aggregate planning (d) Scheduling

*Answer: (a) Sequencing problem.*

Johnson's rule orders n jobs through two machines (in the same order) to give the least total elapsed time. Pick the smallest time left: if it is on machine 1, the job goes as early as possible; if on machine 2, as late as possible.

- **(b) Assignment:** one job to one machine at the least cost, solved by the Hungarian method.
- **(c) Aggregate planning:** sets output and workforce levels months ahead.
- **(d) Scheduling:** the wider task that includes sequencing. The specific answer is sequencing.

**Memory aid:** Johnson orders, Hungary assigns.

**Q10. ISRO IPRC Technical Assistant (Mechanical), 28 August 2016 · Topic 8.** Break even analysis considers \_\_\_\_\_\_\_\_ cost(s). (a) Fixed (b) Variable (c) Fixed & variable (d) No

*Answer: (c) Fixed & variable.*

Total cost = fixed cost + variable cost × quantity. The break-even point is where revenue covers both: Q = F/(s − v).

- **(a) and (b):** each leaves out half the total cost.
- **(d):** the analysis is built on costs.

**Memory aid:** the break-even formula has F on top and v underneath, so it needs both.

**Q11. MPSC AMVI 2002 (Paper 3) · Topic 2.** The number of observations to be made on a machine for a work sampling study for absolute accuracy of A% with 95% confidence level (if the probability of machine being busy is P%) is equal to (a) 4P(100 − P)/A² (b) P(100 − P)/A² (c) 9P(100 − P)/A² (d) 2P(100 − P)/A²

*Answer: (a) 4P(100 − P)/A².*

N = Z² × P(100 − P)/A². For 95% confidence Z is about 2, so Z² = 4.

- **(b):** Z = 1, about 68% confidence.
- **(c):** Z = 3, about 99.7% confidence.
- **(d):** uses Z instead of Z².

**Quick check:** P = 80% and A = 4% give N = 4 × 80 × 20/16 = 400 observations.

**Q12. UGC NET Paper II (Home Science), 8 January 2025 (Shift 2) · Topic 1.** A photographic device is attached to the limb in motion that registers the pathway of light projected by electric bulbs to analyze the pattern of rhythm in movements. (a) Cycle graph (b) Pathway chart (c) Micromotion film analysis (d) Memo motion film analysis

*Answer: (a) Cycle graph.*

For a cyclegraph, a small bulb is tied to the hand and a still camera with an open shutter photographs the whole movement as one line of light. The line shows the path and rhythm of the motion.

- **(b) Pathway chart:** not a standard motion study record.
- **(c) Micromotion film analysis:** a cine film read frame by frame against a clock.
- **(d) Memo-motion film analysis:** a film taken at slow speed for long jobs.

**Memory aid:** a steady light gives a cyclegraph (path only). A light that flashes gives a chronocyclegraph, whose dots also show speed and direction.

**Q13. RPSC Lecturer (Technical Education) 2020, Mechanical Paper 1 · Topic 4.** What is the total float of an activity for which earliest start time ES = 5, earliest finish time EF = 15, latest start time LS = 35, latest finish time LF = 45? (a) 10 (b) 20 (c) 30 (d) 40

*Answer: (c) 30.*

Total float = LS − ES = 35 − 5 = 30. As a check, LF − EF = 45 − 15 = 30.

- **(a) 10:** the activity's duration, EF − ES.
- **(d) 40:** LF − ES, which mixes a finish time with a start time.
- **(b) 20:** has no formula behind it.

**Memory aid:** compare like with like: start with start, finish with finish.

**Q14. UPRVUNL AE (Mechanical), 5 July 2021 · Topic 3.** Which of the following is a type of indirect inventory? (a) Raw material inventory (b) Anticipation inventory (c) Work in process inventory (d) Finished goods inventory

*Answer: (b) Anticipation inventory.*

Direct inventories are the stocks that become the product: raw material, work in process and finished goods. Indirect inventories are grouped by the job they do: anticipation stock built ahead of a busy season, fluctuation (safety) stock, lot-size (cycle) stock and transit stock.

- **(a), (c) and (d):** the three stages of the product itself, so all are direct.

**The trap:** anticipation stock is often of finished goods too. It is named by its purpose, meeting expected demand, which puts it in the indirect group.

**Q15. HPCL Junior Executive (Mechanical), 14 September 2025 (Shift 1) · Topic 7.** The main advantage of using variables control charts over attribute control charts is: (a) they are useful for non-measurable characteristics (b) they are simpler to construct (c) they require smaller sample sizes for same level of control (d) they cannot detect process variation

*Answer: (c) They require smaller sample sizes for same level of control.*

A measurement tells you how far off a part is, while an attribute only says good or bad. Each measured part carries more information, so X̄ and R charts work with samples of 4 or 5, where p-charts often need 50 or more.

- **(a):** the advantage of attribute charts, which handle features that cannot be measured.
- **(b):** attribute charts are the simpler ones.
- **(d):** detecting variation is exactly what variables charts do well.

**Memory aid:** measure more, sample less.

**Q16. UGC NET Paper II (Management), 16 June 2023 (Shift 1) · Topic 6.** Which of the following statements are true about line balancing? A. The total amount of work on a line is divided into different tasks. B. Line balancing mainly ensures that each work station gets approximately equal amount of time. C. Cycle time is determined by the minimum time required at any workstation. D. Line balancing is not useful for the process industry. E. Tasks are assigned to workstations that allow the work to be performed in a feasible sequence. (a) C, D and E only (b) A and E only (c) A, B and C only (d) B, C and D only

*Answer: (b) A and E only.*

C is plainly false: the cycle time is set by the slowest workstation (or by available time ÷ required output), not the fastest. Every option except (b) contains C, so (b) is the only one left.

- **(a), (c) and (d):** each includes the false statement C.
- **A and E:** the two steps of balancing. Split the work into tasks, then group tasks into stations in an order the precedence rules allow.

**The trap:** B reads like the aim of balancing, so you may hunt for an option with A, B and E. There is none. When a statement is clearly false, strike out every option that holds it.

**Q17. RRB JE CBT 2 (Mechanical), 22 April 2025 (Shift 2) · Topic 9.** The primary purpose of job rating or evaluation is to: (a) provide benefits like leave and housing (b) assess an employee's performance (c) motivate employees for higher production (d) determine the relative worth of different jobs

*Answer: (d) Determine the relative worth of different jobs.*

Job evaluation compares jobs by skill, effort, responsibility and working conditions (by ranking, grading, factor comparison or points) so that pay rises fairly from job to job.

- **(b):** merit rating, which judges the person doing the job.
- **(c):** the aim of wage incentives.
- **(a):** fringe benefits, outside job evaluation.

**The trap:** job evaluation rates the job, not the person. A good and a poor turner do the same job and get the same job rating.

**Q18. ISRO IPRC Technical Assistant (Mechanical), 10 December 2016 · Topic 2.** Time study is carried out by (a) Finding all significant regarding the job, work, place, machine tool, etc. (b) Breaking up each operation into small elements, which can be measured accurately (c) Observing and recording the time taken by the operator for an operation (d) All the above

*Answer: (b) Breaking up each operation into small elements, which can be measured accurately.*

The key picks the step that sets time study apart: the job is split into short elements with clear break points, and each element is timed and rated separately.

- **(a):** collecting information about the job is a preliminary step, done before any timing.
- **(c):** describes timing a whole operation at once, which is not how a time study is done.
- **(d):** the key does not accept it.

**The trap:** "All the above" looks safe, since all three things happen during a study. The key wants the defining step, the breakdown into elements. Be ready for either view in the hall; this exam keyed (b).

**Q19. DSSSB AE (Civil), 22 June 2024 (Shift 3) · Topic 4.** Which of the following statements related to PERT is/are true? Statement 1: Time estimates of activities follow beta distribution. Statement 2: Probability of activity occurrence follows beta distribution. (a) Only Statement 2 is true. (b) Both Statements 1 and 2 are true. (c) Neither Statement 1 nor Statement 2 is true. (d) Only Statement 1 is true.

*Answer: (d) Only Statement 1 is true.*

In PERT every activity happens; what is uncertain is how long it takes. The duration follows a beta distribution, which gives tₑ and σ.

- **(a) and (b):** Statement 2 is false. Whether an activity occurs is not a matter of chance in PERT.
- **(c):** Statement 1 is the basic PERT assumption.

**The trap:** the two statements differ in one word, time against occurrence. Read the subject of each statement.

**Q20. UPRVUNL AE (Mechanical), 16 July 2022 (Shift 1) · Topic 10.** \_\_\_\_\_\_\_\_ is an operation research technique which aids the manager in making decisions involving the establishment of service facilities to meet irregular demands. (a) Queuing theory (b) Information theory (c) Simulation theory (d) Game theory

*Answer: (a) Queuing theory.*

When customers arrive at random, too few service points cause long queues and too many leave servers idle. Queuing theory weighs the cost of waiting against the cost of service to choose the number of counters, machines or crews.

- **(b) Information theory:** about coding and sending messages.
- **(c) Simulation:** imitates a system, often a queue, on a computer. It is a general tool; the technique built for service facilities is queuing theory.
- **(d) Game theory:** decisions against a competitor.

**Memory aid:** "service facilities" plus "irregular demand" is a waiting line.

**Q21. TNTRB Mechanical 2017 · Topic 3.** In a fixed order quantity, constant lead time inventory system, the safety stock is dependent on: (a) Service level (b) Demand variation during lead time (c) Service level and demand variation during lead time (d) Order quantity

*Answer: (c) Service level and demand variation during lead time.*

Safety stock = Z × σ, where σ is the standard deviation of demand during the lead time and Z comes from the service level wanted (Z = 1.65 for 95%).

- **(a) and (b):** each is one factor of the product; both are needed.
- **(d):** the order quantity sets how often you order, not how much buffer you keep.

**Memory aid:** more doubt or more protection means more safety stock.

**Q22. ISRO IPRC Technical Assistant (Mechanical), 21 April 2016 · Topic 7.** In Q7 tools for process improvement, the one that graphs pairs of numerical data to look for a relationship is \_\_\_\_\_\_\_. (a) Fishbone chart (b) Scatter diagram (c) Check sheet (d) Histogram

*Answer: (b) Scatter diagram.*

A scatter diagram plots one variable against another, such as cutting speed against surface roughness. A band of points rising or falling shows the two are related.

- **(a) Fishbone chart:** lists the possible causes of one problem.
- **(c) Check sheet:** a form for tallying data as it is collected.
- **(d) Histogram:** the spread of a single variable.

**Memory aid:** the seven QC tools are the check sheet, histogram, Pareto chart, fishbone diagram, scatter diagram, control chart and stratification. Only the scatter diagram uses pairs.

**Q23. TNTRB Mechanical 2012 · Topic 5.** Sequencing is a subset of (a) routing (b) scheduling (c) expediting (d) none of these

*Answer: (b) Scheduling.*

Scheduling decides when each job is done on each machine. Choosing the order of jobs on a machine is part of that decision.

- **(a) Routing:** fixes the path and order of operations for one job, not the order of different jobs on a machine.
- **(c) Expediting:** follow-up, chasing work that is behind schedule.

**The trap:** routing also involves an order, of operations. Sequencing orders the jobs, which belongs to scheduling.

**Q24. JKSSB JE Civil (Jal Shakti), 5 December 2022 (Shift 2) · Topic 1.** The chart which gives an estimate about the amount of materials handling between various work stations is known as (a) flow chart (b) process chart (c) travel chart (d) operation chart

*Answer: (c) Travel chart.*

A travel (from-to) chart is a table with the work stations along the top and down the side. Each cell holds the number of trips or the load moved from one station to another. Stations with heavy traffic between them are placed close together.

- **(a), (b) and (d):** record the order of steps, not the amount of handling between stations.

**Memory aid:** a from-to chart for many products; a string diagram for one worker's path.

**Q25. TNTRB Mechanical 2012 · Topic 8.** Break-even analysis chart is drawn between (a) overhead cost and fixed cost (b) volume of production and income (c) material cost and labour cost (d) none of these

*Answer: (b) Volume of production and income.*

The break-even chart has output on the horizontal axis and money (income and cost) on the vertical. The revenue line and the total cost line cross at the break-even point.

- **(a) and (c):** pairs of costs. Neither shows output, which the chart is built on.

**Quick check:** a break-even point is a volume, so volume must be on one axis.

## Sources

Every question comes from a real paper. Of the 100 questions, 7 are from Kerala PSC, 11 from RRB JE and 82 from other exams: state JE and AE papers, PSU engineer papers, ESE, GATE, ISRO, UGC NET and teaching exams. The Kerala PSC questions are copied from the official question booklets (version A), and their answers follow the commission's answer keys. All the other questions come from Testbook solution pages, which name the paper each question appeared in. Every answer was checked by working the question out. None of the 100 questions appears in Levels 1 to 3. Question numbers below are the numbers in this guide.

A few questions were adjusted so they read cleanly here, without changing the data or the answer:

- **Kerala PSC questions:** the options are lettered (a) to (d) here. The booklets use (A) to (D) or a) to d).
- **Mock 2 Q9:** "Which is the following" is corrected to "Which of the following", and option (d), printed as "None of the above (i) and (ii)", is shortened to "None of the above".
- **Mock 3 Q16:** option (a), printed as "corporative game", is spelt "cooperative game".
- **Mock 2 Q10:** the Rowan option is kept as printed, with the fraction multiplied by R. The explanation gives the full form, (S − T)/S × TR.
- **Mock 3 Q20:** the paper draws the five ASME symbols. They are described in words here.
- **Mock 3 Q22:** a typing slip in List II (iii) is corrected; it reads "ratio of net output to the sum of labour and capital inputs".

Four answers follow the official key on a point where some textbooks differ: Mock 1 Q14, Mock 3 Q18, Mock 4 Q16 and Mock 4 Q18. Each explanation says what the other view is and why the key's answer is the one to mark.

**Kerala PSC papers**

- Deputy Engineer / AE (Mechanical), 050/2023: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2023-06/qp__deputy_engineer.pdf) and [provisional answer key](https://www.keralapsc.gov.in/sites/default/files/2023-06/provisional_answer_key__deputy_engineer.pdf)
- AE (Mechanical), 104/2025: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2025-08/104-2025-A.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2025-09/finalkeyforomr_104_25.pdf)
- AE (Mechanical) / Inspector of Factories, 68/2026: [question booklet](https://www.keralapsc.gov.in/sites/default/files/2026-07/68-26%20%28Set-A%29.pdf) and [final answer key](https://www.keralapsc.gov.in/sites/default/files/2026-09/final_answer_key_asst_eng_mechanical_541_2025_0.pdf)

Question numbers in those papers:

- Mock 1: Q3 is 104/2025 Q95, Q16 is 050/2023 Q99.
- Mock 2: Q1 is 68/2026 Q97, Q9 is 104/2025 Q99.
- Mock 3: Q1 is 050/2023 Q95, Q16 is 68/2026 Q100.
- Mock 4: Q1 is 68/2026 Q98.

**Mock 1, other papers**

- Q1 work study aim: [Testbook](https://testbook.com/question-answer/work-study-is-mainly-aimed-at--587f5dac032821446c4b4d77)
- Q2 total float: [Testbook](https://testbook.com/question-answer/the-amount-of-time-by-which-an-activity-can-be-del--5f2e6ae0cae55c0d07ac07d8)
- Q4 chart for fraction defective: [Testbook](https://testbook.com/question-answer/p-chart--5f749a19a73534791cae574a)
- Q5 standard time of 7.15 min: [Testbook](https://testbook.com/question-answer/the-observed-time-for-an-operation-of-turning-a-sh--67af16d9d5d9f743db894dc2)
- Q6 layout for a car plant: [Testbook](https://testbook.com/question-answer/which-of-the-following-type-of-layout-is-suitable--621e1cfcaae3c9b517f3be51)
- Q7 break-even volume: [Testbook](https://testbook.com/question-answer/the-data-for-break-even-analysis-of-a-product-are--5fc888ee133f63b13abc4a22)
- Q8 Taylor's system: [Testbook](https://testbook.com/question-answer/fredric-w-taylor-introduced-a-system-of-working-kn--649c338fd9e0f910f3bcbb8f)
- Q9 string diagram: [Testbook](https://testbook.com/question-answer/the-primary-function-of-a-__________-is-to-produce--5f60d537dbde962e8e65afe6)
- Q10 Johnson sequence: [Testbook](https://testbook.com/question-answer/the-time-required-for-two-operations-cutting-and-b--5f33de17ce62be0d137cddc5)
- Q11 utilisation factor: [Testbook](https://testbook.com/question-answer/in-queuing-theory-the-ratio-of-the-mean-arrival-r--6221658c8f47593762b04253)
- Q12 orders per year: [Testbook](https://testbook.com/question-answer/a-particular-item-has-a-demand-of-9000-unitsyear--5eb42006f60d5d187fa5f9a3)
- Q13 critical path SD: [Testbook](https://testbook.com/question-answer/a-pert-network-has-9-activities-on-its-critical-pa--6033caee0b7aeaee76a19427)
- Q14 theory behind SQC: [Testbook](https://testbook.com/question-answer/statistical-quality-control-sqc-techniques-are-b--6220e21be89775c2a8672acd)
- Q15 PMTS: [Testbook](https://testbook.com/question-answer/a-technique-of-work-measurement-in-which-times-est--617f7bfeb02ddca047a4ed32)
- Q17 flat day rate: [Testbook](https://testbook.com/question-answer/the-factor-considered-for-wage-determination-in-th--681203e9bae99af3607efc8d)
- Q18 inspection symbol: [Testbook](https://testbook.com/question-answer/the-symbol-used-to-represent-inspection--69acb93e9d027d4bb06f9279)
- Q19 ABC focus: [Testbook](https://testbook.com/question-answer/abc-inventory-control-focuses-on-those--5f33afeee8ef8d0d0e85e4b9)
- Q20 depreciation: [Testbook](https://testbook.com/question-answer/depreciation-is-a-process-of-______-of-a-fixed-ass--6392b88d4042a164dc32c0ef)
- Q21 dummy activity: [Testbook](https://testbook.com/question-answer/in-pert-and-cpm-network-the-dummy-activity--5ffd4095b3651d604c8e88f2)
- Q22 5S: [Testbook](https://testbook.com/question-answer/_________-is-the-tool-for-organizing-the-workplace--5fb28364da15fd119e660200)
- Q23 qualitative forecasting: [Testbook](https://testbook.com/question-answer/a-key-advantage-of-qualitative-forecasting-methods--69bd386461c7f6b1f533db78)
- Q24 object of time study: [Testbook](https://testbook.com/question-answer/object-of-time-study-is-to-determine-the-tim--5f7370f42d4c0cfb02c98aa0)
- Q25 kanban: [Testbook](https://testbook.com/question-answer/the-word-kanban-is-used-in--61b9ac67d4d55832b14c6cb6)

**Mock 2, other papers**

- Q2 R chart: [Testbook](https://testbook.com/question-answer/which-of-the-statistical-process-control-chart-is--67af171e09415d5a1245c062)
- Q3 SIMO chart: [Testbook](https://testbook.com/question-answer/simo-charts-are-used-in--5f8429f7fec557cd43f35f18)
- Q4 expected time: [Testbook](https://testbook.com/question-answer/for-a-project-activity-the-optimistic-the-pessim--643db4099ff81effdea6ed9a)
- Q5 standard time of 0.756 min: [Testbook](https://testbook.com/question-answer/the-observed-time-for-an-element-is-0-7-minutes-t--630368385555749b1105ac9e)
- Q6 break-even point: [Testbook](https://testbook.com/question-answer/breakeven-point-is-the-point-where--646208337784ef5a7ecfbc0e)
- Q7 object of plant layout: [Testbook](https://testbook.com/question-answer/the-object-of-plant-layout-could-be--5fc09e834a4b427af7cf9d3e)
- Q8 linear programming: [Testbook](https://testbook.com/question-answer/_________-is-a-quantitative-technique-used-to-dete--62d8cc90d2d68bf494ce94d1)
- Q10 Rowan plan: [Testbook](https://testbook.com/question-answer/if-r-is-the-base-rate-guaranteed-per-hour-s-i--5f326e96d94e610d140a0fa9)
- Q11 critical path: [Testbook](https://testbook.com/question-answer/the-path-which-moves-along-the-activities-having-t--63dea9f257b8517dd8716bfb)
- Q12 stockout cost: [Testbook](https://testbook.com/question-answer/which-of-the-following-inventory-costs-represents--5f2be253edec780d1412fa74)
- Q13 purpose of scheduling: [Testbook](https://testbook.com/question-answer/the-purpose-of-scheduling-in-production-planning-a--68470dece5fc63f274db72a5)
- Q14 purchaser's risk: [Testbook](https://testbook.com/question-answer/_______-is-the-probability-of-a-defective-batch-be--5f701de90f50a09d0c66dcc1)
- Q15 performance rating: [Testbook](https://testbook.com/question-answer/performance-rating-of-an-employee-may-be-expressed--5e7b4f47f60d5d29f99c7614)
- Q16 COMSOAL: [Testbook](https://testbook.com/question-answer/what-is-the-full-form-of-comsoal--69acb60b78b1fe2b46573657)
- Q17 straight-line depreciation: [Testbook](https://testbook.com/question-answer/in-the-straight-line-method-the-expression-for-de--5e75a88ef60d5d2bf3e7a883)
- Q18 event slack: [Testbook](https://testbook.com/question-answer/slack-of-an-event-in-pert-is-____________--69f2f15827111c20c7c4d165)
- Q19 multiple activity chart: [Testbook](https://testbook.com/question-answer/the-chart-which-records-activities-of-workers-and--61820a65fa83bd34fcc01d10)
- Q20 seasonal variation: [Testbook](https://testbook.com/question-answer/the-demand-behaviour-showing-repeated-increase-an--69acc6a8524471c21748ebbe)
- Q21 bin card: [Testbook](https://testbook.com/question-answer/which-of-the-following-keeps-a-record-of-receipts--65312ed96fc4a50416089a6f)
- Q22 TQM principles: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-not-a-principle-of-total--68bb136cde4599bbecc0ff01)
- Q23 matrix organisation: [Testbook](https://testbook.com/question-answer/matrix-organisation-violates-which-of-the-followin--6ab10eece7875a6894964ea5)
- Q24 objective of work measurement: [Testbook](https://testbook.com/question-answer/the-objective-of-work-measurement-is-to--5e5e1cc5f60d5d467ef5fd2b)
- Q25 bar chart: [Testbook](https://testbook.com/question-answer/a-bar-chart-is-drawn-for--627550666e08d3aa0907ae69)

**Mock 3, other papers**

- Q2 activity variance: [Testbook](https://testbook.com/question-answer/pessimistic-time-and-optimistic-time-of-completion--6023b0947c00719939a5552f)
- Q3 founder of micromotion study: [Testbook](https://testbook.com/question-answer/founder-of-micro-motion-study-is--5e6101c3f60d5d332ddc5720)
- Q4 attribute charts: [Testbook](https://testbook.com/question-answer/control-charts-for-the-attribute-are-concerned-wit--612343376e581913125d8515)
- Q5 ABC and Pareto: [Testbook](https://testbook.com/question-answer/abc-analysis-is-based-on--68c040001c64d82d85452255)
- Q6 standard time of 1.26 min: [Testbook](https://testbook.com/question-answer/actual-observed-time-for-an-operation-time-was-1-m--5f8437efdc342ad5dcd0c420)
- Q7 cranes: [Testbook](https://testbook.com/question-answer/which-of-the-following-material-handling-devices-a--61b9aa17cabae20b3c119290)
- Q8 exponential smoothing: [Testbook](https://testbook.com/question-answer/which-of-the-following-forecasting-methods-is-used--69aef319e1b54a7a03e42f2e)
- Q9 aim of sequencing: [Testbook](https://testbook.com/question-answer/the-main-objective-of-the-sequencing-problem-in-pr--68107843a0ff011a1cf9feaa)
- Q10 break-even of 1200 items: [Testbook](https://testbook.com/question-answer/fixed-cost-of-an-equipment-is-rs-6000-if-variab--60fe85f4854b6b52921e2908)
- Q11 flow diagram: [Testbook](https://testbook.com/question-answer/in-order-to-indicate-the-sequence-of-events--5f60e28dba46207aca440f1c)
- Q12 total float in letters: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-correct-about-cpm-and-pe--679e9b5e1e7a49408dd5a95f)
- Q13 EOQ lots in MRP: [Testbook](https://testbook.com/question-answer/in-inventory-planning-extra-inventory-is-unnecess--621f5fb52b2b3e0831c93915)
- Q14 OC curve: [Testbook](https://testbook.com/question-answer/the-ability-of-an-acceptance-sampling-plan-to-dist--5fc48b87bb8e7972b2046448)
- Q15 synthetic rating: [Testbook](https://testbook.com/question-answer/in-synthetic-rating-the-speed-or-the-pace-rate-of--62dd35c1222d89d574e86fb8)
- Q17 product-process plot: [Testbook](https://testbook.com/question-answer/which-of-the-following-plots-is-used-for-the-class--6a523e2124dae088a3afae8a)
- Q18 straight piece rate: [Testbook](https://testbook.com/question-answer/which-one-of-the-following-wage-incentive-plans-is--63c97da954120a44e7b735ef)
- Q19 beta distribution: [Testbook](https://testbook.com/question-answer/in-pert-chart-the-activity-time-distribution-is--5ddcd5abf60d5d58a9ee3fce)
- Q20 ASME symbols: [Testbook](https://testbook.com/question-answer/match-the-asme-process-chart-symbols-with-their-co--609cad28eaaade6f06545390)
- Q21 purpose of safety stock: [Testbook](https://testbook.com/question-answer/safety-stock-is-used-to-___________--684a3690727dfcc0a9d7cd47)
- Q22 efficiency and productivity: [Testbook](https://testbook.com/question-answer/match-list-i-with-list-ii-and-choose-the-correct-a--6a6b37cc93eb34de81a863a8)
- Q23 jidoka: [Testbook](https://testbook.com/question-answer/if-a-defective-part-or-equipment-malfunction--68c03fd478133ae17c61e0e6)
- Q24 CVP analysis: [Testbook](https://testbook.com/question-answer/break-even-analysis-is-also-known-as--62cff754fcc289de6b866811)
- Q25 spark plug productivity: [Testbook](https://testbook.com/question-answer/an-industry-produces-300-spark-plugs-in-one--5fe990d0cccfc8da90138898)

**Mock 4, other papers**

- Q2 ST and NT: [Testbook](https://testbook.com/question-answer/st-and-nt-denote-the-standard-time-and-the-n--60adc8a686404a885aacfc7a)
- Q3 PERT probability: [Testbook](https://testbook.com/question-answer/time-estimates-of-an-activity-in-a-pert-network-ar--6a6b37cc00bdf856f938e04b)
- Q4 micromotion study defined: [Testbook](https://testbook.com/question-answer/micro-motion-study-is-called____--6388951f5a4b0f905ba4e97f)
- Q5 what ABC deals with: [Testbook](https://testbook.com/question-answer/abc-analysis-deals-with--6a6b37bdbb31fa05de816637)
- Q6 two types of control chart: [Testbook](https://testbook.com/question-answer/there-are-two-basic-types-of-control-chartsi-w--5f6a33c69cf4f5710b86883f)
- Q7 Halsey plan: [Testbook](https://testbook.com/question-answer/halsey-premium-plan-is-based-on--68da3d6e35fd7aafc6642cf7)
- Q8 transportation constraints: [Testbook](https://testbook.com/question-answer/in-a-transportation-problem-with-4-supply-points-a--5f4f2982ffc6ca46f86b568d)
- Q9 Johnson's rule: [Testbook](https://testbook.com/question-answer/johnsons-rule-is-used-for--6023f7a88dd0d996be1742da)
- Q10 costs in break-even: [Testbook](https://testbook.com/question-answer/break-even-analysis-considers-________-cost-s--5fcff4e087fce95292520d39)
- Q11 work sampling observations: [Testbook](https://testbook.com/question-answer/the-number-of-observations-to-be-made-on-a-machine--5f80068b448552c8fc2d5072)
- Q12 cyclegraph: [Testbook](https://testbook.com/question-answer/a-photographic-device-is-attached-to-the-limb-in-m--67a4a716fc1d37a2d879bb18)
- Q13 total float of 30: [Testbook](https://testbook.com/question-answer/what-is-the-total-float-of-an-activity-for-which--60fe7fad03bc414e11615679)
- Q14 indirect inventory: [Testbook](https://testbook.com/question-answer/which-of-the-following-is-a-type-of-indirect-inven--628ba1d6a9e28134669d30db)
- Q15 variables charts: [Testbook](https://testbook.com/question-answer/the-main-advantage-of-using-variables-contro--69acc687f21bd225c75a4025)
- Q16 line balancing statements: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-are-true-about-l--64b396a1f4052ffdbfe5cea6)
- Q17 job evaluation: [Testbook](https://testbook.com/question-answer/the-primary-purpose-of-job-rating-or-evaluation-is--6811df2671efcb345b288acf)
- Q18 how time study is done: [Testbook](https://testbook.com/question-answer/time-study-is-carried-out-by--5fb4081224196c2924c72554)
- Q19 PERT statements: [Testbook](https://testbook.com/question-answer/which-of-the-following-statements-related-to-pert--69f2f641978c63aad7561d71)
- Q20 queuing theory: [Testbook](https://testbook.com/question-answer/________-is-an-operation-research-technique-which--62dc22579dc57741b8f6fea5)
- Q21 what safety stock depends on: [Testbook](https://testbook.com/question-answer/in-a-fixed-order-quantity-constant-lead-time-inve--5f7370f341da155cf6569d27)
- Q22 scatter diagram: [Testbook](https://testbook.com/question-answer/in-q7-tools-for-process-improvement-the-one-that--5fb2852ab2338d3773c4bce9)
- Q23 sequencing and scheduling: [Testbook](https://testbook.com/question-answer/sequencing-is-a-subset-of--5f31595c7c790e0d0ad97f91)
- Q24 travel chart: [Testbook](https://testbook.com/question-answer/the-chart-which-gives-an-estimate-about-the-amount--63985f56f637765b0eb13bf6)
- Q25 break-even chart axes: [Testbook](https://testbook.com/question-answer/break-even-analysis-chart-is-drawn-between--5f368c94bffb4d0d16b2197b)
