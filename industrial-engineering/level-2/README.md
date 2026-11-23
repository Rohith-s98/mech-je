# Industrial Engineering Level 2: Theory Deep Dive

Nov 23, 2026 · @Rohith

## How to use Level 2

Level 2 explains why each idea in Level 1 is true, in plain words. Once you know why, the tricky questions in Level 3 and the timed mocks in Level 4 stop feeling like tricks. There are no questions here. Read it like a textbook chapter, one topic at a sitting.

Every topic has the same four parts:

- **The picture:** one everyday comparison that holds the whole topic together.
- **Twisted points:** the ideas exam setters like to twist, each explained from scratch with an example.
- **Worked numbers:** a calculation done step by step, with units.
- **Mix-ups to avoid:** a table of what people often think and what is actually true.

Topic N here is Topic N in every level. On the website, the link under each topic heading opens the same topic in Level 1, where the formula lists and past questions are.

Conventions used throughout:

- Times are in minutes unless another unit is given. Money is in rupees (₹).
- In inventory, D is the annual demand in units, Co the cost of placing one order, Ch the cost of holding one unit for a year, and Q the order quantity.
- In PERT, to, tm and tp are the optimistic, most likely and pessimistic times of an activity, te its expected time and σ its standard deviation.
- A performance rating of 120% means the worker is 20% faster than a normal worker. Allowances are a percentage of the normal time unless the question says otherwise.
- Topics 1 to 7 run the shop floor: how work is done, timed, stocked, planned, laid out and checked. Topics 8 to 10 are the management side: costs, organisation and decisions.

## 1. Method study

Method study asks one question before anyone picks up a stopwatch: is there a better way to do this job? The steps, the charts, the symbols, the therbligs and the principles of motion economy are all ways of writing a job down so that its waste shows, and then removing that waste. Exam setters twist the order of the steps, which chart records what, the five symbols and the number of therbligs.

### The picture

Think of making tea in a small kitchen. Write down every step: walk to the shelf for a cup, back to the stove, wait for the water, walk to the fridge for milk, back again, open three tins to find the sugar. Now draw your path on a plan of the kitchen. The lines cross and recross.

Ask of each step why it is done, where, when, by whom and how. Keep the cups, tea and sugar beside the stove, in labelled tins. Set out the cups while the water heats. The tea is the same, but the walking is halved and the waiting has gone.

That is method study. Nobody was asked to work faster: steps that added nothing were removed. Only then is it worth timing the job (Topic 2). Timing the old way would only have written its waste into the standard.

### Twisted points

**Work study is method study plus work measurement, and method study comes first.** Method study cuts the work content, that is, the work the job really needs. Work measurement then finds how long the improved method should take and shows up the time lost to idling. Both raise productivity without new machines, which is why work study is called the cheapest way to raise output. Motivating workers or setting wages is not part of it; that belongs to incentive schemes (Topic 9).

**The order of the steps follows from logic, so you never need to learn it by rote.** Remember SREDIM: Select the job, Record the present method, Examine it critically, Develop a better method, Install it and Maintain it. You cannot record a job before you choose it, or examine what you have not recorded, and a method must be developed before it can be installed. Some books add Evaluate and Define (write the new method down as a standard) between Develop and Install, giving eight steps. The order of the six main steps does not change.

**Examining a job means asking two rounds of questions.** The primary questions ask about purpose (what is done and why), place (where), sequence (when), person (who) and means (how). The secondary questions ask what else could be done, somewhere else, at another time, by someone else or in another way. The answers lead to one of four actions: eliminate the step, combine it with another, change its sequence, or simplify it. A question about purpose can eliminate a step altogether, so it is always asked first.

**There are five process chart symbols, and only one of them adds value.** A circle is an operation: the part is changed, drilled or assembled. A square is an inspection. An arrow is a transport. A capital D is a delay: the part waits, unplanned, as a job beside a busy machine does. An inverted triangle is a storage: the part is kept under control and needs a written order to come out. A circle inside a square means an operation and an inspection done together. Only the operation adds value, so the other four are the targets.

**Each chart suits a different scale of job.**

- **Outline process chart:** operations and inspections only. A bird's-eye view of the whole process.
- **Flow process chart:** all five symbols, with distances and times. The material type follows the part, the man type follows the worker, and the equipment type follows a machine.
- **Flow diagram:** the flow process chart drawn on a plan of the floor, to show backtracking and crossing paths.
- **String diagram:** a scale plan with pins at each work point and a thread run between them. The length of thread gives the distance moved. It suits long, irregular paths with many trips.
- **Travel chart (from-to chart):** a table of how many trips go from each department to each other one. It is used to plan a layout (Topic 6).
- **Two-handed chart (operator chart):** what the left and right hands do, side by side.
- **Multiple activity chart:** several workers or machines on one time scale, to show who waits for whom. The man-machine chart is its commonest form.
- **SIMO chart:** the therbligs of each body member (left hand, right hand, eyes, feet) side by side, timed from film. It is for short, highly repeated jobs.

**Film and light record motions too fine to see.** Micromotion study films the job at normal or high speed (often 16 frames a second or more) so each therblig can be timed; its results go on the SIMO chart. Memomotion films slowly, about one frame a second, to cover long jobs such as a crane driver's shift cheaply. A cyclegraph photographs a small light fixed to the worker's finger, so the path shows as a line. A chronocyclegraph makes the light flash, so the line becomes a row of pear-shaped dots: their spacing shows the speed and their point shows the direction.

**Therbligs are Gilbreth's basic hand motions, and there are 17.** The name is Gilbreth spelt nearly backwards. They are search, select, grasp, reach (transport empty), move (transport loaded), hold, release, position, pre-position, inspect, assemble, disassemble, use, unavoidable delay, avoidable delay, plan and rest to overcome fatigue. Later writers added find, making 18; if both counts are offered, choose 17. Effective therbligs move the work on: reach, move, grasp, release, use, assemble, disassemble and pre-position. The rest, such as search, select, hold and the delays, are ineffective and should be designed out. Holding, for example, is better done by a fixture.

**The principles of motion economy fall into three groups.** The first is the use of the human body. Both hands should start and finish together, move in opposite and symmetrical directions, and never be idle at the same time except at rest. Motions should be smooth curves, not sharp zigzags, and should use momentum and a natural rhythm. Use the lowest class of movement that will do the job. The five classes turn about the knuckle (fingers only), wrist, elbow, shoulder and torso; the lower the class, the less effort and time.

The second group is the arrangement of the workplace. Tools and materials have a fixed place within the normal working area, the sweep of the forearm with the elbow at the side. Gravity-feed bins bring parts close, and finished parts are dropped down a chute. Lighting is good, and the chair lets the worker sit or stand. The third group is the design of tools and equipment. Jigs and fixtures free the hands from holding, foot pedals take simple jobs off the hands, and tools are combined and pre-positioned.

### Worked numbers

**How many machines can one operator run?** A worker loads and unloads a machine in 3 minutes, while the machine is stopped. The machine then runs on its own for 6 minutes, and walking to the next machine takes 0.5 minutes. With a as the loading and unloading time, t the machine running time and b the walking time:

```math
n = \frac{a + t}{a + b} = \frac{3 + 6}{3 + 0.5} = 2.57
```

- With 2 machines, each machine's cycle is 9 minutes. The operator works 2 × 3.5 = 7 minutes of every 9 and idles 2, and the machines never wait.
- With 3 machines, the operator is always busy and the cycle stretches to 3 × 3.5 = 10.5 minutes. Each machine then waits 10.5 − 9 = 1.5 minutes per cycle.
- Choose by cost: 2 machines if the operator's time is dearer, 3 if the machine's time is dearer.

**String diagram.** In the old layout, the thread for one batch measures 84 m. After the stores and the inspection bench are moved, it measures 30 m. The distance walked falls by (84 − 30)/84 = 64%.

**Counting symbols.** A part is turned, inspected, carried 20 m, kept waiting, drilled, inspected again and stored. Its outline process chart shows four symbols (two operations and two inspections). Its flow process chart shows all seven steps, including the transport, the delay and the storage.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Work study and method study mean the same. | Work study is method study plus work measurement. |
| Time the job first, then improve it. | Improve it first. Timing a poor method only writes its waste into the standard. |
| Delay and storage are both waiting, so they share a symbol. | A delay (D) is temporary and unplanned. A storage (inverted triangle) is planned and needs an order to release the part. |
| The square is an operation. | The square is an inspection and the circle an operation. A circle inside a square is both at once. |
| An outline process chart shows all five symbols. | It shows only operations and inspections. |
| A SIMO chart compares a worker with a machine. | It compares the body members of one worker. The man-machine chart is a multiple activity chart. |
| A string diagram records times. | It records distances, using thread on a scale plan. |
| Memomotion uses a high-speed camera. | Memomotion is slow, about one frame a second, for long jobs. Micromotion is the fast one. |
| A cyclegraph shows speed. | It shows only the path. The flashing light of a chronocyclegraph shows speed and direction. |
| There are 18 therbligs. | Gilbreth listed 17. Find was added later; choose 17 if both are offered. |
| Hold is a productive therblig. | Hold is ineffective. A fixture should do the holding. |
| The knee is one of the pivots of movement. | The pivots are the knuckle, wrist, elbow, shoulder and torso. |
| The hands should work one after the other. | They should start and finish together, moving in opposite, symmetrical directions. |

## 2. Work measurement and time study

Work measurement finds how long a qualified worker, working at a normal pace by the agreed method, should take for a job, with fair time added for rest and small delays. Every technique leads to the same chain: observed time, then normal time, then standard time. Exam setters twist the direction of the rating, the base of the allowance, the number of readings and which technique suits which job.

### The picture

Time a fast bowler's overs: 4 minutes each. But this bowler hurries back to the mark; an average bowler would be slower. Judge him at 120% of normal pace, and a normal bowler would take 4 × 1.2 = 4.8 minutes. Then allow for drinks, field changes and the odd lost ball, say 10% more: 4.8 × 1.1 = 5.28 minutes.

That last figure is the one to plan a day's play on. It is not the time of the fastest player, or of the player you happened to watch, but of an ordinary player at a steady pace with fair breaks. Time study does exactly this for a job: the 4 minutes is the observed time, the 4.8 the normal time and the 5.28 the standard time.

### Twisted points

**Rating corrects for the speed of the worker you timed.** You rarely time a perfectly average worker, so the observer judges the pace against a mental picture of normal pace. On the British Standard 0 to 100 scale, 100 is standard performance, often pictured as walking at 6.4 km/h on level ground without a load.

```math
\text{Normal time} = \text{Observed time} \times \frac{\text{Rating}}{100}
```

A fast worker is rated above 100, so the normal time comes out longer than the observed time. A slow worker is rated below 100 and the normal time comes out shorter. Speed rating, the commonest system, judges pace alone. The Westinghouse (levelling) system scores skill, effort, conditions and consistency separately. Synthetic rating compares the observed times of some elements with their PMTS values. Machine-controlled elements are not rated, because the worker cannot change the machine's speed.

**The job is timed element by element.** An element is a distinct part of the job with clear start and end points, such as "pick up part and place in fixture". Splitting a job this way lets you rate each part, separate manual from machine work, and reuse the times later. Repetitive elements happen every cycle and occasional ones now and then, such as changing a tool. Constant elements take the same time on every job and variable ones change with size or weight. Foreign elements are not part of the job at all, like a chat with the foreman, and are struck out. A stopwatch can be read by the flyback (snap-back) method, reset to zero after each element, or by the continuous method, read without stopping and subtracted later. The continuous method loses no time between readings, so it suits short elements.

**Allowances are added to the normal time, and the base matters.** Personal allowance covers needs such as a drink or the toilet. Fatigue allowance covers rest; personal plus fatigue together are called the relaxation allowance. Contingency allowance covers small unavoidable delays such as a blunt tool. Special or policy allowances cover cases like learning a new job or one worker minding several machines (interference allowance). Allowances do not make up for a slow worker; that is what rating is for.

The allowance can be stated two ways, and the formula changes:

```math
\text{Standard time} = NT\,(1 + A) \quad \text{(A as a fraction of normal time)} \qquad \text{Standard time} = \frac{NT}{1 - A} \quad \text{(A as a fraction of standard time)}
```

The second gives a slightly larger answer. If a question says the allowance is a share of the working day or of the standard time, use it. If it just says "allowance of 15%", use the first.

**More readings are needed when times vary and when you want more accuracy.** Short cycles are timed many times and long cycles fewer. The rule behind it is the same as in work sampling: the error of an average falls with the square root of the number of readings. To halve the error, you need four times the readings.

**Work sampling counts; it does not time.** Also called ratio delay study (L. H. C. Tippett, 1934), it makes many observations at random moments and notes only whether the worker or machine is working or idle. If 15% of the observations find the machine idle, it is idle about 15% of the time. With p the share of observations in a state and N the number of observations:

```math
\text{Standard error} = \sqrt{\frac{p(1 - p)}{N}} \qquad N = \frac{4p(1 - p)}{e^2} \quad \text{(95\% confidence, absolute accuracy } \pm e)
```

It needs no stopwatch, can watch many workers at once and is less resented. It suits long, irregular work such as maintenance, stores and offices. It does not suit short, repeated cycles, where it cannot give element times.

**PMTS and synthetic data build a time without timing the worker.** A predetermined motion time system (PMTS) holds tables of times for basic motions such as reach, grasp and move, found once from many studies. MTM (methods-time measurement), Work-Factor and MOST are the best-known. The times already mean normal pace, so no rating is needed, and a job can be timed on paper before it is ever done. MTM works in TMU: 1 TMU = 0.00001 hour = 0.036 second. Synthetic data is different: it reuses element times from the plant's own earlier time studies for a new job with the same elements. Analytical estimating lets an experienced person estimate long, non-repeated jobs, such as maintenance, element by element. Stopwatch time study is the one direct method, and the one that needs rating.

**Efficiency compares standard time with actual time.** Operator efficiency is the standard time for the work done divided by the actual time taken. An efficiency over 100% means the worker beat the standard. If the worker lost time for reasons outside their control, such as waiting for material, that time is taken out of the actual time before working out their efficiency.

### Worked numbers

**Standard time from a time study.** A job has three elements. Element 1 averages 0.40 min at a rating of 110%, element 2 averages 0.25 min at 90%, and element 3 is a machine cut of 0.50 min. Allowances are 12% of normal time.

- Normal times: 0.40 × 1.10 = 0.440 min, 0.25 × 0.90 = 0.225 min, and 0.500 min for the machine element (not rated).
- Normal time for the job = 0.440 + 0.225 + 0.500 = 1.165 min.
- Standard time = 1.165 × 1.12 = 1.305 min.
- In an 8-hour shift (480 min), the standard output is 480 ÷ 1.305 = 367 pieces.

**The two allowance bases.** Normal time 5 min, allowance 20%. As a share of normal time: 5 × 1.20 = 6.00 min. As a share of standard time: 5 ÷ 0.80 = 6.25 min.

**Work sampling.** Out of 400 random observations, the machine is idle in 60, so p = 0.15.

- Standard error = √(0.15 × 0.85 ÷ 400) = 0.0179, or 1.8%.
- At 95% confidence (about ±2 standard errors), the idle share lies between 15 − 3.6 = 11.4% and 15 + 3.6 = 18.6%.
- To narrow this to ±2%: N = 4 × 0.15 × 0.85 ÷ 0.02² = 1275 observations.

**Efficiency.** In a 480-minute shift, a worker makes 50 pieces with a standard time of 8.4 min each, so 420 standard minutes. Efficiency = 420 ÷ 480 = 87.5%. If 30 minutes were lost waiting for material, the worker's own efficiency = 420 ÷ 450 = 93.3%.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A rating above 100 makes the normal time shorter than the observed time. | It makes it longer. A fast worker's time is stretched to a normal worker's pace. |
| Allowances make up for a slow worker. | Rating handles speed. Allowances cover personal needs, fatigue and small delays. |
| Standard time is always NT × (1 + A). | Only when A is a share of normal time. As a share of standard time, it is NT ÷ (1 − A). |
| Machine elements are rated like manual ones. | The worker cannot change a machine's speed, so machine elements are not rated. |
| Foreign elements are averaged into the time. | They are not part of the job and are struck out. |
| Work sampling needs a stopwatch. | It only counts random observations of working or idle. |
| Doubling the observations halves the error. | Error falls with the square root of N. It takes four times as many to halve it. |
| PMTS times must be rated. | Normal pace is built into the tables, so no rating is needed. |
| Synthetic data and PMTS are the same thing. | Synthetic data reuses the plant's own earlier element times. PMTS uses published tables of basic motions. |
| 1 TMU is one second. | 1 TMU = 0.00001 hour = 0.036 second. |
| Efficiency = actual time ÷ standard time. | Efficiency = standard time for the work done ÷ actual time taken. |

## 3. Inventory control

Inventory is money sitting on shelves. Controlling it means deciding how much to order and when, so that the cost of ordering plus the cost of holding stock is least, without running out. Exam setters twist what is equal at the EOQ, the units of the holding cost, the basis of each selective control and the difference between lead time and reorder point.

### The picture

Think of buying rice for a family. Buy a small packet every day and you make a trip every day: that is ordering cost. Buy a whole year's rice at once and you make one trip, but the sacks fill a room, some may spoil, and the money is locked up for months: that is holding cost. Somewhere between the two is the cheapest size of purchase, and that is the economic order quantity.

The second question is when to buy. If the shop takes three days to deliver and you eat 2 kg a day, you must order when about 6 kg is left, plus a little extra in case the delivery is late. That level is the reorder point, and the little extra is the safety stock.

### Twisted points

**The EOQ balances two costs that pull opposite ways.** Each year you place D/Q orders, so the ordering cost is (D/Q) × Co, and it falls as Q grows. Stock falls steadily from Q to zero, so the average stock is Q/2 and the holding cost is (Q/2) × Ch, which rises as Q grows. The total is least where the two are equal:

```math
Q^* = \sqrt{\frac{2DC_o}{C_h}} \qquad \text{At } Q^*: \; \frac{D}{Q^*}C_o = \frac{Q^*}{2}C_h \qquad TC^* = \sqrt{2DC_oC_h} = C_hQ^*
```

The cost of buying the items themselves (D × price) is the same whatever Q is, so it does not enter the EOQ, unless the supplier offers a discount for large orders. The total cost curve has a flat bottom: ordering 20% more than the EOQ raises the cost by under 2%. And because of the square root, doubling the demand raises the EOQ by only 41% (√2 = 1.41).

**Holding cost is mostly the cost of the money.** It includes interest on the money locked in stock (usually the largest part), storage space, insurance, taxes, handling, theft, deterioration and obsolescence. It is often 15 to 30% of the item's price per year. Ordering cost covers preparing and following up the order, receiving, inspecting and paying. When the item is made in-house, the set-up cost of the machine plays the same part. Shortage (stock-out) cost is the loss when stock runs out: lost sales, goodwill, idle machines. Always use Ch per unit per year when D is per year. If a question gives holding cost per month, multiply it by 12.

**Each assumption of the basic EOQ, once dropped, gives a new model.** The basic model assumes known, steady demand; a known, fixed lead time; the whole order arriving at once; no shortages; no quantity discounts; and fixed costs. Drop instant arrival and you get the economic batch quantity (EBQ) for a part made at rate p while used at rate d:

```math
Q_{\text{EBQ}} = \sqrt{\frac{2DC_o}{C_h\,(1 - d/p)}} \qquad \text{Maximum stock} = Q\left(1 - \frac{d}{p}\right)
```

The stock never climbs to the full batch, because parts are used while the batch is being made, so the EBQ is larger than the EOQ. Allowing planned shortages (backorders) also makes the best lot larger. With quantity discounts, work out the total cost including the purchase price at the EOQ and at each price break, and pick the lowest.

**The reorder point is a quantity; the lead time is a time.** The lead time is the gap between placing an order and receiving it. The reorder point (ROP) is the stock level at which you order:

```math
\text{ROP} = d \times L + \text{safety stock} \qquad \text{Maximum stock} = SS + Q \qquad \text{Average stock} = SS + \frac{Q}{2}
```

Here d is the demand per day and L the lead time in days. Safety stock covers demand above normal or a late delivery. More safety stock means fewer stock-outs (a higher service level) but more holding cost. The two-bin system is the ROP made physical: when the first bin is empty, you order, and the second bin holds the stock to last until delivery.

**Fixed quantity and fixed period are the two ways to reorder.** In the fixed order quantity system (Q system, or perpetual review), stock is watched all the time and the same quantity Q is ordered whenever it falls to the ROP. The interval between orders varies. In the fixed period system (P system, or periodic review), stock is checked every T days and enough is ordered to bring it up to a target level. The quantity varies. The P system needs more safety stock, because it must cover the review period as well as the lead time.

**Selective control puts the effort where it pays, and each method has its own basis.**

- **ABC:** annual usage value (usage × unit price). Class A is about 10% of the items but 70% of the value, and gets tight control and frequent small orders. Class C is about 70% of the items but 10% of the value, and gets loose control and bulk orders. Class B sits between. This is the Pareto principle.
- **VED:** how critical an item is: vital, essential or desirable. Used for spare parts.
- **HML:** unit price: high, medium or low.
- **FSN:** rate of issue: fast-moving, slow-moving or non-moving.
- **SDE:** how easy an item is to buy: scarce, difficult or easy.
- **GOLF:** source: government, ordinary, local or foreign.
- **XYZ:** the value of the stock in hand.

### Worked numbers

**EOQ.** An item costs ₹20. Annual demand is 3600 units, each order costs ₹50, and holding costs 20% of the price per year, so Ch = ₹4 per unit per year.

- Q\* = √(2 × 3600 × 50 ÷ 4) = √90,000 = 300 units.
- Orders per year = 3600 ÷ 300 = 12, one a month.
- Ordering cost = 12 × 50 = ₹600. Holding cost = (300 ÷ 2) × 4 = ₹600. They are equal, as they must be.
- Total = ₹1200 = √(2 × 3600 × 50 × 4).

**The flat bottom.** Order 400 units instead: 9 orders cost ₹450 and holding costs 200 × 4 = ₹800, a total of ₹1250. A lot 33% too big costs only about 4% more.

**Reorder point.** The same item is used on 300 working days a year, so d = 3600 ÷ 300 = 12 units a day. Lead time is 5 days and safety stock 40 units.

- ROP = 12 × 5 + 40 = 100 units.
- Maximum stock = 40 + 300 = 340 units. Average stock = 40 + 150 = 190 units.

**EBQ.** Suppose the item is made in-house at 30 a day while it is used at 12 a day, with a set-up cost of ₹50.

- 1 − d/p = 1 − 12/30 = 0.6.
- Q = √(2 × 3600 × 50 ÷ (4 × 0.6)) = √150,000 = 387 units, larger than the EOQ of 300.
- Maximum stock = 387 × 0.6 = 232 units.

**ABC goes by value, not count.** A pump seal used 2000 times a year at ₹500 has a usage value of ₹10 lakh: class A. A washer used 50,000 times a year at ₹2 has a usage value of ₹1 lakh: class C, even though far more washers are used.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| At the EOQ, purchase cost equals ordering cost. | At the EOQ, annual ordering cost equals annual holding cost. |
| The average stock is Q. | It is Q/2, plus the safety stock if there is any. |
| Holding cost per month can go straight into the formula. | With D per year, Ch must be per year: multiply a monthly cost by 12. |
| Doubling the demand doubles the EOQ. | EOQ grows with √D, so it rises by 41%. |
| The reorder point is the lead time. | The reorder point is a stock level: lead-time demand plus safety stock. |
| Safety stock is used up and bought again every cycle. | It stays as a buffer and raises the average stock by its own size. |
| ABC sorts items by how critical they are. | ABC sorts by annual usage value. VED sorts by how critical, FSN by rate of issue, HML by unit price. |
| Class A items are the most numerous. | They are few, about 10%, but carry about 70% of the value. |
| The EBQ is smaller than the EOQ. | It is larger, because stock builds up gradually and never reaches the full batch. |
| The price of the item sets the EOQ. | Price matters only through Ch (when it is a share of price) or through quantity discounts. |
| The fixed period system orders the same quantity each time. | It orders at fixed intervals, and the quantity varies. The fixed quantity system orders the same Q each time. |

## 4. PERT and CPM

A project is a set of activities, some of which must wait for others. PERT and CPM draw them as a network and find the longest chain through it, the critical path, which fixes how soon the project can finish. Exam setters twist the expected time formula, the distributions, which float is which, what a dummy is for and the probability of finishing on time.

### The picture

Think of cooking Sunday lunch. Chopping the vegetables takes 10 minutes, and the curry then cooks for 30. The rice takes 20 minutes and can cook at the same time. Lunch is served when both are ready.

The chain chop-then-curry takes 40 minutes; the rice takes 20. So lunch takes 40 minutes, and the rice has 20 minutes to spare: it can start up to 20 minutes late without delaying anything. The chopping and the curry have no spare time at all. Any delay there delays lunch, and cooking the rice faster saves nothing.

The chop-then-curry chain is the critical path, and the rice's 20 spare minutes are its float. A manager watches the critical path most closely and uses the float of the other jobs to move workers and machines about.

### Twisted points

**Activities take time; events do not.** In the usual activity-on-arrow network, each arrow is an activity, which takes time and resources. Each circle (node) is an event, an instant when activities finish or start, which takes neither. In an activity-on-node network the activities sit in boxes and the arrows only show order; such networks need no dummies. A network has one start event and one end event, no loops, and no loose ends. Fulkerson's rule numbers the events so that every arrow runs from a lower number to a higher one.

**A dummy carries logic, not work.** A dummy is a dashed arrow that takes zero time and zero resources. It is used for two reasons. First, if two activities start and end at the same pair of events, they would share the same label, so a dummy gives one of them its own end event. Second, it shows a dependence the arrows alone cannot. Say C needs both A and B finished, but D needs only B. A dummy from the end of B to the start of C lets C wait for B without making D wait for A.

**The critical path is the longest path, and finding it takes two passes.** In the forward pass, each event's earliest time is the largest of the times arriving at it: you cannot start until the slowest job before you is done. In the backward pass from the end, each event's latest time is the smallest of the times worked back to it. Activities on the critical path have zero float, and its length is the shortest time in which the project can be finished. A network can have more than one critical path. In PERT language, the slack of an event is its latest time minus its earliest time.

**There are three floats, and each answers a different question.**

- **Total float** = LFT − EFT = LST − EST. How long can this activity slip without delaying the whole project?
- **Free float** = earliest time of the head event − EFT. How long can it slip without delaying any following activity's earliest start?
- **Independent float** = earliest time of the head event − latest time of the tail event − duration (taken as zero if negative). How long can it slip even if the activities before it finish as late as allowed?

Total float is always at least the free float, and free float at least the independent float. The difference between total and free float, called interfering float, is float shared with the activities that follow. A critical activity has all three equal to zero. A negative total float means the project cannot meet its scheduled date.

**PERT uses three time estimates because its activities have never been done before.** For each activity you estimate an optimistic time, a most likely time and a pessimistic time. PERT assumes each activity's time follows a beta distribution, which has fixed ends and can lean to one side, as real delays do. Then:

```math
t_e = \frac{t_o + 4t_m + t_p}{6} \qquad \sigma = \frac{t_p - t_o}{6} \qquad \text{variance} = \sigma^2
```

The project time is the sum of many activity times along the critical path, so it follows a normal distribution (the central limit theorem). Its mean is the sum of the expected times, and its variance is the sum of the variances. Add variances, never standard deviations. The chance of finishing by a scheduled time Ts comes from Z:

```math
Z = \frac{T_s - T_e}{\sigma_{cp}} \qquad \sigma_{cp} = \sqrt{\sum \sigma^2 \text{ along the critical path}}
```

Remember a few values of the normal table: Z = 0 gives 50%, Z = 1 gives 84.1%, Z = 2 gives 97.7%, Z = 3 gives 99.9%, and Z = −1 gives 15.9%.

**PERT and CPM were built for different kinds of project.** PERT (the US Navy's Polaris missile, 1958) is event-oriented and probabilistic. It suits research and new work where times are uncertain. CPM (DuPont, 1957) is activity-oriented and deterministic, with one time per activity. It suits construction and maintenance, where times are known from experience, and it deals with the trade-off between time and cost.

**Crashing buys time with money, the cheapest day first.** Direct costs such as labour and materials rise when an activity is hurried. Indirect costs such as overheads and penalties fall as the project gets shorter. The best duration is where their total is least. To crash, shorten only critical activities, starting with the lowest cost slope, one day at a time:

```math
\text{Cost slope} = \frac{\text{Crash cost} - \text{Normal cost}}{\text{Normal time} - \text{Crash time}}
```

Crashing a non-critical activity only adds cost. Once a second path becomes critical, both paths must be shortened together.

**Smoothing and levelling are different.** Resource smoothing keeps the project time and slides non-critical activities within their float to even out the daily demand for workers. Resource levelling works within a fixed limit of resources and lets the project time grow if it must.

### Worked numbers

**Expected time.** An activity has an optimistic time of 4 days, a most likely time of 6 days and a pessimistic time of 14 days.

- te = (4 + 4 × 6 + 14) ÷ 6 = 42 ÷ 6 = 7 days.
- σ = (14 − 4) ÷ 6 = 1.67 days, and the variance is 2.78.
- The expected time is more than the most likely time because the pessimistic estimate sits far out.

**Critical path and floats.** A project has four activities. A runs from event 1 to 2 and takes 3 days. B runs from 1 to 3 and takes 2 days. C runs from 2 to 4 and takes 6 days. D runs from 3 to 4 and takes 3 days.

- Forward pass: event 1 = 0, event 2 = 3, event 3 = 2, event 4 = the larger of 3 + 6 and 2 + 3 = 9 days.
- Backward pass: event 4 = 9, event 2 = 9 − 6 = 3, event 3 = 9 − 3 = 6, event 1 = the smaller of 3 − 3 and 6 − 2 = 0.
- The critical path is A then C, 9 days. Events 1, 2 and 4 have zero slack; event 3 has 6 − 2 = 4 days.
- B: total float = 6 − 2 = 4 days, but free float = 2 − 2 = 0. If B uses its float, D must start later.
- D: total float = 9 − 5 = 4 days, and free float = 9 − 5 = 4 days.
- B and D share the same 4 days. Total float belongs to the path, not to each activity separately.

**Probability of finishing on time.** The critical path's expected length is 30 days, and its activities have variances of 1.0, 2.25 and 0.75.

- Path variance = 4.0, so σ = 2 days.
- By 32 days: Z = (32 − 30) ÷ 2 = 1, so the chance is 84.1%. By 30 days: 50%.
- For 97.7% confidence (Z = 2), allow 30 + 2 × 2 = 34 days.

**Crashing.** A critical activity costs ₹6000 in its normal 8 days and ₹9000 if crashed to 5 days. Cost slope = 3000 ÷ 3 = ₹1000 per day. If the project's overheads are ₹1500 a day, each day saved earns ₹500. Crashing all 3 days saves ₹1500, provided the activity stays critical.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| The critical path is the shortest path. | It is the longest path, and it sets the shortest possible project time. |
| Events take time. | Events are instants. Only activities take time. |
| A dummy takes a little time. | A dummy takes zero time and zero resources. |
| te = (to + 2tm + tp) ÷ 6. | te = (to + 4tm + tp) ÷ 6. |
| Each activity time in PERT is normally distributed. | Each activity follows a beta distribution. The project total is roughly normal. |
| Add the standard deviations along the path. | Add the variances, then take the square root. |
| There is no chance of finishing exactly on the expected time. | The chance of finishing by the expected time is 50%. |
| Free float can be more than total float. | Total float is at least free float, which is at least independent float. |
| Free float = LFT − EFT. | That is total float. Free float = earliest time of the head event − EFT. |
| CPM is probabilistic and PERT deterministic. | PERT is probabilistic and event-oriented. CPM is deterministic and activity-oriented. |
| Crashing any activity shortens the project. | Only critical activities. Crash the lowest cost slope first. |
| The forward pass takes the smallest value at a merge. | The forward pass takes the largest. The backward pass takes the smallest. |

## 5. Production planning and control

Production planning and control (PPC) decides what to make, by which route, on which machine and when, then checks that it happens. Planning covers routing, loading and scheduling. Control covers dispatching and follow-up. Exam setters twist the order of these steps, the meaning of each, the sequencing rules, Johnson's rule and the inputs to MRP.

### The picture

Think of a tailoring shop in the week before a festival. First the master tailor decides the path each order will take: cut, stitch, fix buttons, iron. That is routing. Then each tailor gets a fair share of the work, so no machine is piled up while another sits idle. That is loading. Then each job gets a start and finish time on each machine. That is scheduling.

In the morning the master hands out the job cards and the cloth: now begin. That is dispatching. Each evening he checks which orders are behind and pushes them through. That is follow-up, or expediting. The first three steps are planning, done on paper. The last two are control, done on the shop floor.

### Twisted points

**The steps come in a fixed order: routing, scheduling, dispatching, follow-up.** Some books list more: estimating, routing, loading, scheduling, dispatching, expediting, inspection and evaluation. Whatever the list, the order follows the work.

- **Routing** decides what operations are done, on which machines and in what order. It produces the route sheet (operation sheet).
- **Loading** assigns jobs to work centres up to their capacity. It decides how much work each machine gets.
- **Scheduling** fixes when each job starts and finishes. The master schedule covers products; detailed schedules cover machines.
- **Dispatching** gives the authority to start: work orders, materials, tools and drawings are released. It is where planning turns into action.
- **Follow-up (expediting)** checks progress against the schedule and clears delays such as missing material or a broken machine.

**A Gantt chart is a time chart, not a network.** Henry Gantt's chart (around 1917) draws each job or machine as a bar along a time scale, with the plan and the actual progress side by side. The load chart shows how busy each machine is; the progress chart shows how far each order has got. Its weakness is that it does not show which job must wait for which. The PERT and CPM networks of Topic 4 were developed to show this.

**Each sequencing rule is best at one thing.** When several jobs wait at one machine, a rule decides which goes first.

- **First come, first served (FCFS):** fair, but not efficient.
- **Shortest processing time (SPT):** gives the least average flow time, the least average waiting and the fewest jobs waiting.
- **Earliest due date (EDD):** gives the least maximum lateness.
- **Critical ratio (CR):** time left until the due date ÷ processing time still needed. A CR below 1 means the job is behind, so the smallest ratio goes first.

**Johnson's rule orders n jobs through two machines, in the same order on both, to finish the whole lot soonest.** Find the smallest time anywhere in the table. If it is on machine 1, put that job as early as possible. If it is on machine 2, put it as late as possible. Cross the job out and repeat. The reason: a job short on machine 1 gets machine 2 busy quickly, and a job short on machine 2 frees it quickly at the end. The rule extends to three machines when machine 2 is dominated, that is, when the smallest time on machine 1 or on machine 3 is at least the largest time on machine 2. You then add the times to make two imaginary machines, M1 + M2 and M2 + M3.

**MRP turns a master schedule into orders for parts.** Material requirements planning has three inputs:

- the master production schedule (MPS): which end products, how many and when;
- the bill of materials (BOM): the parts in each product, level by level, often drawn as a product structure tree;
- the inventory status file: stock on hand, stock already on order, and lead times.

Machine capacity is not an input to MRP; capacity is checked separately by capacity requirements planning (CRP). MRP's output is a list of planned orders, each released one lead time before it is needed. MRP suits dependent demand: the number of wheels follows from the number of bicycles. End products have independent demand, which is forecast (Topic 10) and suits the EOQ of Topic 3. MRP II (manufacturing resource planning) adds capacity, finance and marketing. ERP spreads the same idea across the whole company.

**JIT pulls; MRP pushes.** Just-in-time, developed at Toyota, makes only what the next station needs, when it needs it. The next station sends back a kanban card as the signal to make more: a pull system. Its aim is zero inventory, which needs small lots, quick set-ups (SMED, single-minute exchange of die), reliable suppliers and very few defects. It counts seven wastes: overproduction, waiting, transport, over-processing, inventory, unnecessary motion and defects. Poka-yoke means mistake-proofing, jidoka means stopping the line as soon as a defect appears, and kaizen means continuous small improvement.

**The type of production shapes the planning.** Job production makes one-off items on general-purpose machines in a process layout, so routing and scheduling are hard and done order by order. Batch production makes lots of similar items. Mass (flow) production runs one product down a line of special-purpose machines in a product layout. There the route is fixed by the line, and PPC is mostly about keeping the line fed and balanced (Topic 6).

### Worked numbers

**Johnson's rule.** Five jobs pass through machine 1 then machine 2. Times in hours (M1, M2): A (5, 2), B (1, 6), C (9, 7), D (3, 8), E (10, 4).

- Smallest is B's 1 on M1: B goes first.
- Next is A's 2 on M2: A goes last.
- Next is D's 3 on M1: D goes second.
- Next is E's 4 on M2: E goes fourth, just before A.
- C fills the middle. Sequence: B, D, C, E, A.
- M1 finishes jobs at 1, 4, 13, 23 and 28 hours. M2 runs B 1–7, D 7–15, C 15–22, E 23–27 and A 28–30.
- Total time 30 hours. M2 works 27 hours and waits 3 (0–1, 22–23, 27–28).

**SPT against FCFS.** Three jobs arrive in the order X (6 days), Y (2 days), Z (4 days).

- FCFS: they finish at 6, 8 and 12 days, an average flow time of 26 ÷ 3 = 8.67 days.
- SPT (Y, Z, X): they finish at 2, 6 and 12 days, an average of 20 ÷ 3 = 6.67 days.

**Critical ratio.** Today is day 20.

- Job P is due on day 30 and needs 5 more days: CR = 10 ÷ 5 = 2.0, ahead of schedule.
- Job Q is due on day 26 and needs 8 more days: CR = 6 ÷ 8 = 0.75, behind schedule.
- Job R is due on day 28 and needs 8 more days: CR = 8 ÷ 8 = 1.0, exactly on schedule.
- Q goes first.

**MRP.** An order is for 100 bicycles. Each bicycle needs 2 wheels and each wheel 36 spokes. There are 30 wheels and 1000 spokes in stock.

- Wheels: gross 200, net 200 − 30 = 170.
- Spokes: gross 170 × 36 = 6120, net 6120 − 1000 = 5120.
- Bicycles are due in week 10 and take a week to assemble, so the wheels are needed in week 9. Wheels take a week to build, so their order is released in week 8. Spokes take two weeks to arrive, so they are ordered in week 6.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Routing decides when a job is done. | Routing decides the path: which operations, on which machines, in what order. Scheduling decides when. |
| Loading and scheduling are the same. | Loading shares work among machines up to their capacity. Scheduling fixes the times. |
| Dispatching is part of planning. | Dispatching is the first step of control: the order to start. |
| Follow-up comes before dispatching. | Follow-up checks progress after the work has been dispatched. |
| A Gantt chart shows which job depends on which. | It shows only bars on a time scale. Networks show the dependencies. |
| SPT gives the least maximum lateness. | SPT gives the least average flow time. EDD gives the least maximum lateness. |
| The job with the largest critical ratio is most urgent. | The smallest ratio is most urgent. Below 1 means the job is behind. |
| In Johnson's rule, a smallest time on machine 2 puts the job first. | It puts the job last. A smallest time on machine 1 puts it first. |
| Machine capacity is an input to MRP. | The inputs are the MPS, the BOM and the inventory status. Capacity is checked by CRP. |
| MRP is for end products sold to customers. | MRP is for dependent demand: parts and sub-assemblies. End products are forecast. |
| JIT is a push system. | JIT pulls, with kanban signals. MRP pushes to a schedule. |

## 6. Plant layout and material handling

Layout decides where the machines, stores and people go. Material handling moves things between them. A good layout keeps the flow short, straight and one-way, because moving a part costs money but adds nothing to it. Exam setters twist which layout suits which kind of production, the advantages of each, the line balancing numbers and which handling equipment suits which job.

### The picture

Think of four ways to feed people. A big hotel kitchen keeps all the ovens in one corner and all the chopping boards in another. It can cook any dish on the menu, but plates and pans criss-cross the room all day. That is a process layout.

A college canteen making only dosas puts batter, griddle, filling and plate in one straight line and serves a thousand an hour. Change the menu and the line is useless. That is a product layout. A wedding caterer brings the stoves and the cooks to the hall, because the hall cannot come to them. That is a fixed position layout. A food court has small counters, each with its own stove, fryer and fridge, each serving one family of dishes. That is a cellular, or group, layout.

### Twisted points

**The right layout depends on how many of how many kinds you make.**

- **Product (line) layout:** machines stand in the order of operations for one product, for mass and continuous production with high volume and little variety. Handling is short, work in progress small, scheduling simple and workers need less skill. But the line is inflexible, one breakdown stops it all, it costs a lot to set up, and the work is monotonous. Examples: car assembly, bottling, cement.
- **Process (functional) layout:** similar machines are grouped together, all lathes in one bay and all milling machines in another. It suits job and batch production with low volume and high variety. It is flexible, one breakdown does not stop everything, and the machines are well used. But handling is long and criss-crossing, work in progress is large, and scheduling is hard. Examples: tool rooms, repair shops, hospitals.
- **Fixed position layout:** the product stays put and the workers, machines and materials come to it. It is for very large or heavy products such as ships, aircraft, locomotives, dams and buildings.
- **Group (cellular) layout:** parts with similar shapes or process routes form a family, and each family is made in its own cell of different machines. This is group technology. It suits medium volume and variety, cutting handling, set-ups and work in progress, and it is more flexible than a line but less flexible than a process layout. Rank order clustering (King's algorithm) sorts a table of machines against parts to find the families and cells.

**Line balancing gives every station about the same work, equal to the cycle time.** The cycle time is how often a finished unit must leave the line:

```math
C = \frac{\text{Available time}}{\text{Required output}} \qquad n_{\min} = \frac{\sum t_i}{C} \;\text{(round up)} \qquad \text{Line efficiency} = \frac{\sum t_i}{n\,C} \qquad \text{Balance delay} = 1 - \text{efficiency}
```

Here Σti is the total work content of one unit and n the number of stations. The slowest station sets the pace of the whole line, so the cycle time can never be shorter than the longest single task, unless that task is split or given two stations side by side. Tasks are packed into stations in an order the precedence allows, for example by the largest-candidate rule or the ranked positional weight method.

**Layout planning has its own tools.** The travel (from-to) chart counts the trips between departments, and the flow diagram and string diagram of Topic 1 show the paths. Muther's systematic layout planning rates how close each pair of departments should be: A (absolutely necessary), E (especially important), I (important), O (ordinary), U (unimportant) and X (undesirable, keep apart). Computer methods come in two kinds. CRAFT improves an existing layout by swapping departments to cut handling cost. CORELAP and ALDEP build a layout from the closeness ratings.

**The best handling is no handling.** Handling adds cost but no value, and it is often put at 20 to 50% of the cost of production. Its main principles are:

- move many items as one (the unit load principle: pallets, containers);
- let gravity do the work where it can;
- keep paths straight, short and without backtracking;
- use the height of the building, not only the floor;
- cut dead weight and empty return trips;
- standardise and mechanise the equipment, and plan handling as one system with the layout.

**Pick the equipment by the kind of movement.**

- **Conveyors:** a fixed path and a steady, high-volume flow. A belt conveyor carries bulk material over long distances and up moderate slopes. Roller conveyors move boxes, often by gravity. A screw conveyor moves powder a short way. A bucket elevator lifts bulk material straight up. Overhead trolley conveyors carry parts through assembly and paint shops. Pneumatic conveyors blow grain or powder through pipes.
- **Cranes and hoists:** heavy loads moved now and then over a fixed area. An electric overhead travelling (EOT) crane covers a whole bay. A jib crane covers a circle around its post, and a gantry crane runs on rails on its own legs, often outdoors.
- **Industrial trucks:** any path, moved now and then. A forklift lifts and stacks pallets, a pallet truck moves them along the floor, and an automated guided vehicle (AGV) follows a wire or tape with no driver.

### Worked numbers

**Balancing a line.** A line must make 400 units in an 8-hour shift. Five tasks follow one another in order: A 0.4 min, B 0.3 min, C 0.5 min, D 0.2 min, E 0.6 min, a total of 2.0 min.

- C = 480 ÷ 400 = 1.2 min per unit.
- nmin = 2.0 ÷ 1.2 = 1.67, so at least 2 stations.
- Station 1: A + B + C = 1.2 min. Station 2: D + E = 0.8 min.
- Efficiency = 2.0 ÷ (2 × 1.2) = 83.3%. Balance delay = 16.7%.
- The line can never beat its longest task, 0.6 min, so its top output is 480 ÷ 0.6 = 800 units a shift.

**Balance delay from station times.** Four stations take 8, 10, 9 and 7 minutes. The slowest, 10 minutes, sets the cycle time.

- Time paid for per unit = 4 × 10 = 40 min. Work done = 34 min.
- Efficiency = 34 ÷ 40 = 85%, and balance delay = 15%.
- The idle time is 6 minutes in every cycle, spread over the three faster stations.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| A product layout suits a job shop. | A product layout suits mass production of one product. Job and batch work use a process layout. |
| A process layout has the least handling. | A product layout has the least. A process layout has long, criss-crossing paths. |
| One breakdown stops a whole process layout. | That happens in a product layout. In a process layout, another machine of the same kind takes over. |
| Ships are built in a process layout. | Ships, aircraft and buildings use a fixed position layout. |
| Group technology is a process layout. | It groups different machines around a family of parts, not similar machines together. |
| Cycle time is the total of the task times. | Cycle time = available time ÷ required output. The total of task times is the work content. |
| Stations needed = cycle time ÷ work content. | Stations needed = work content ÷ cycle time, rounded up. |
| Balance delay is the line efficiency. | Balance delay = 100% − line efficiency. |
| A line can run faster than its longest task. | Only if that task is split or given parallel stations. |
| CRAFT builds a layout from nothing. | CRAFT improves an existing layout. CORELAP and ALDEP build one. |
| X in a closeness chart means very important. | X means undesirable, keep apart. A means absolutely necessary. |
| A forklift suits a fixed, high-volume path. | Conveyors suit fixed paths, trucks suit varying paths, and cranes suit heavy loads over a fixed area. |

## 7. Quality control

Quality control keeps a process making good parts by checking samples instead of every piece. It has two branches. Control charts ask whether the process is stable, and acceptance sampling decides whether to accept a lot. Around them sit the wider systems: TQM, Six Sigma, the quality gurus and the cost of quality. Exam setters twist which chart is for which data, what 3σ limits mean, chance against assignable causes, the OC curve and its two risks, and the Six Sigma figure.

### The picture

Your bus to work takes 30 to 40 minutes. Traffic lights, passengers and rain make it vary a little every day, and nothing can be done about that short of a new road. One day it takes 75 minutes: a lorry has broken down on the bridge. That day there is a cause you can find and deal with.

A control chart does the same for a machine. It draws the normal band of variation from the process's own past and flags any point outside it, so you hunt for a cause only when there really is one. Reacting to every small wobble would make the process worse, not better.

Acceptance sampling is buying a sack of mangoes. You check ten from the sack, and if more than one is rotten you send the sack back. Sometimes you will reject a good sack, unluckily, and sometimes accept a bad one. Choosing the sample size and the limit sets how often each mistake happens.

### Twisted points

**Variation has two kinds of cause.** Chance (common, random) causes are many small causes built into the process, such as slight differences in material or vibration. They are always present, and only a change to the process itself, which is management's job, can reduce them. Assignable (special) causes are particular events such as a worn tool, a bad batch of material or an untrained operator. They can be found and removed. A process with only chance causes is in statistical control: it is stable and predictable. Being in control does not mean the parts are within specification. That is a separate question, answered by the process capability:

```math
C_p = \frac{USL - LSL}{6\sigma} \qquad C_{pk} = \min\left(\frac{USL - \mu}{3\sigma},\; \frac{\mu - LSL}{3\sigma}\right)
```

Cp compares the tolerance with the natural spread of the process (6σ). Cp = 1 means the spread just fills the tolerance, and 1.33 or more is usually wanted. Cpk also allows for a process that is not centred.

**Variables are measured; attributes are counted.** Variables charts plot a measurement such as a diameter or a weight. The X̄ chart watches the process average (its centring), and the R chart watches the range (its spread); the two are used together. For larger samples, the σ (s) chart replaces the R chart. Attributes charts count good and bad.

- **p chart:** the fraction defective in each sample. The sample size may vary.
- **np chart:** the number defective in each sample. The sample size must be fixed.
- **c chart:** the number of defects in one unit, such as flaws on a painted car door. It follows the Poisson distribution.
- **u chart:** defects per unit when the units differ in size.

A defect is one fault; a defective item has one or more defects. Attribute charts are cheap and quick but need larger samples and tell you less. Variables charts catch a drift sooner.

**3σ limits trade false alarms against missed signals.** Walter Shewhart (Bell Labs, 1924) set control limits at the mean plus and minus three standard deviations of whatever is plotted. With only chance causes at work, 99.73% of points fall inside, so only about 3 in 1000 fall outside by chance. Warning limits at 2σ hold 95.45%. The limits for X̄ use σ/√n, because averages vary less than single pieces. A point outside the limits is not the only signal. Seven or more points in a row on one side of the centre line, seven rising or falling in a row, or a regular cycle all point to an assignable cause.

**Control limits come from the process; specification limits come from the designer.** Control limits say what the process does. Specification (tolerance) limits say what the part must do. Never plot the tolerance on a control chart, and never work out control limits from the tolerance.

**Acceptance sampling judges a lot by a sample.** It is used when testing destroys the item, when inspecting everything costs too much, or when 100% inspection would still miss defects through fatigue and boredom. In a single sampling plan (n, c), you test n items and accept the lot if c or fewer are defective. A double sampling plan takes a second sample when the first is borderline, and multiple and sequential plans go further.

**The OC curve shows how well a plan tells good lots from bad.** The operating characteristic curve plots the chance of accepting a lot against the lot's fraction defective. The ideal curve is a vertical step: accept every lot better than the agreed quality and reject every worse one. Only perfect 100% inspection gives it. A bigger sample makes the curve steeper and the plan sharper.

- **AQL (acceptable quality level):** a quality the customer is happy with. The producer's risk α, often 5%, is the chance a lot this good is rejected. It is a Type I error.
- **LTPD (lot tolerance percent defective):** a quality the customer will not accept. The consumer's risk β, often 10%, is the chance a lot this bad is accepted. It is a Type II error.
- **AOQ (average outgoing quality):** the quality reaching the customer when rejected lots are sorted and their defectives replaced. Its highest value is the AOQL.

**The quality movement has a few names to remember.** Deming gave 14 points and the PDCA (plan, do, check, act) cycle. Juran defined quality as fitness for use and gave the trilogy of quality planning, control and improvement. Crosby preached zero defects and "quality is free". Ishikawa gave the cause-and-effect (fishbone) diagram and quality circles. Taguchi's loss function says any departure from the target costs money, growing with the square of the departure, and his robust design makes products insensitive to it. The seven basic QC tools are the check sheet, histogram, Pareto chart, cause-and-effect diagram, scatter diagram, control chart and stratification (some lists give the flow chart instead). A fishbone diagram groups causes under the 6Ms: man, machine, method, material, measurement and mother nature (environment).

**TQM and Six Sigma make quality everyone's job.** Total quality management rests on customer focus, continuous improvement (kaizen), involving every employee, managing processes, and deciding by facts. Six Sigma, begun at Motorola in 1986, aims at 3.4 defects per million opportunities. That figure allows for the process mean drifting by 1.5σ; a perfectly centred ±6σ process would give about 2 per billion. Its projects follow DMAIC: define, measure, analyse, improve, control. ISO 9001 is the standard against which a firm's quality management system is certified; ISO 14001 covers environmental management.

**The cost of quality has four parts.** Prevention costs (training, planning, good design) and appraisal costs (inspection, testing) are spent to get quality right. Internal failure costs (scrap, rework) and external failure costs (warranty claims, returns, lost customers) come from getting it wrong. Money spent on prevention cuts the failure costs most.

### Worked numbers

**X̄ and R chart.** Twenty samples of 5 shafts give a grand mean of 50.00 mm and an average range of 0.40 mm. For n = 5, A2 = 0.577, D3 = 0, D4 = 2.114 and d2 = 2.326.

- X̄ chart: 50.00 ± 0.577 × 0.40 = 50.00 ± 0.23, so the limits are 49.77 and 50.23 mm.
- R chart: upper limit = 2.114 × 0.40 = 0.85 mm, lower limit = 0.
- Process σ = 0.40 ÷ 2.326 = 0.172 mm, so 6σ = 1.03 mm.
- If the specification is 50.00 ± 0.50 mm: Cp = 1.00 ÷ 1.03 = 0.97. Even in control, the process will make a few shafts out of tolerance.

**p chart.** Twenty-five samples of 100 parts hold 75 defectives in all, so p̄ = 0.03.

- σp = √(0.03 × 0.97 ÷ 100) = 0.0171.
- Upper limit = 0.03 + 3 × 0.0171 = 0.081. The lower limit works out negative, so it is taken as 0.

**c chart.** Car doors average 9 paint flaws each. σ = √9 = 3, so the limits are 9 ± 9: 0 to 18 flaws.

**OC curve points.** A plan tests 50 items and accepts the lot if 1 or fewer are defective. Using the Poisson approximation:

- A 2% defective lot gives on average 1 defective in the sample. P(accept) = e⁻¹ × (1 + 1) = 0.74.
- A 6% defective lot gives on average 3. P(accept) = e⁻³ × (1 + 3) = 0.20.

**Defects per million opportunities.** 2000 forms, each with 10 entries, contain 30 errors. DPMO = 30 ÷ (2000 × 10) × 1,000,000 = 1500, far from Six Sigma's 3.4.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Control limits are the specification limits. | Control limits come from the process's own variation. Specification limits come from the design. |
| In control means every part is good. | In control means stable. With Cp below 1, a stable process still makes bad parts. |
| The R chart is an attributes chart. | The R chart is a variables chart for spread. The p, np, c and u charts are for attributes. |
| The p chart counts defects. | The p chart plots the fraction of defective items. The c chart counts defects in a unit. |
| 3σ limits hold every point. | They hold 99.73%. About 3 in 1000 fall outside by chance alone. |
| The operator can remove chance causes. | Assignable causes can be found and removed. Chance causes need a change to the process. |
| Producer's risk is accepting a bad lot. | Producer's risk is rejecting a good lot (at AQL). Consumer's risk is accepting a bad lot (at LTPD). |
| The ideal OC curve is a sloping straight line. | The ideal is a vertical step, and only perfect 100% inspection gives it. |
| Six Sigma means 3.4 defects per billion. | It means 3.4 defects per million opportunities. |
| Quality is the inspection department's job. | In TQM it is everyone's job, led by management. |
| 100% inspection catches every defect. | Fatigue lets some through, and it is impossible when the test destroys the part. |
| A fishbone diagram ranks problems by size. | It sorts causes of one problem. The Pareto chart ranks problems by size. |

## 8. Break-even analysis and depreciation

Break-even analysis asks how many units must be sold before a product stops losing money. Depreciation spreads the cost of a machine over its working life. Exam setters twist contribution against profit, what moves the break-even point, the margin of safety, the P/V ratio and which depreciation method charges most in which year.

### The picture

Think of a tea stall. Rent and the licence cost ₹9000 a month whether you sell one cup or a thousand: that is fixed cost. Each cup uses ₹6 of milk, tea, sugar and gas, and sells for ₹10. The ₹6 is variable cost, and the ₹4 left over from each cup is its contribution, which goes first towards the rent.

After 9000 ÷ 4 = 2250 cups the rent is paid. That is the break-even point. Every cup after it adds ₹4 of profit, and every cup short of it leaves ₹4 of the rent unpaid.

The stall's cart cost ₹50,000 and will last five years. No money leaves your pocket each year, but the cart is wearing out. Counting ₹10,000 a year as a cost, and keeping that money aside, means a new cart can be bought when this one is finished. That yearly charge is depreciation.

### Twisted points

**Fixed cost is fixed in total; variable cost is fixed per unit.** Fixed costs such as rent, salaries, insurance, interest and depreciation stay the same in total over the normal range of output, so the fixed cost per unit falls as output rises. Variable costs such as direct material, direct labour and power stay the same per unit, so their total rises with output. Some costs, such as maintenance and telephone, are semi-variable. Costs also build up in layers:

- prime cost = direct material + direct labour + direct expenses;
- works (factory) cost = prime cost + factory overheads;
- cost of production = works cost + office and administration overheads;
- total cost (cost of sales) = cost of production + selling and distribution overheads;
- selling price = total cost + profit.

**Contribution pays the fixed cost first, then becomes profit.** Contribution per unit is the selling price minus the variable cost (s − v). Total contribution = fixed cost + profit. At the break-even point (BEP), the contribution just covers the fixed cost, total revenue equals total cost, and profit is zero.

```math
Q_{BEP} = \frac{F}{s - v} \qquad \text{BEP sales (₹)} = \frac{F}{P/V} \qquad P/V = \frac{s - v}{s} = \frac{\text{Contribution}}{\text{Sales}}
```

The P/V (profit-volume) ratio is the share of every rupee of sales left after variable cost. Profit = sales × P/V − F. On a break-even chart, the angle between the sales line and the total cost line is the angle of incidence: the larger the angle, the faster profit grows beyond the BEP.

**Only three things move the break-even point.** Higher fixed cost raises the BEP. Higher variable cost cuts the contribution and raises the BEP. A higher selling price raises the contribution and lowers the BEP. Selling more or fewer units does not move the BEP at all; it moves only the profit and the margin of safety. A low BEP means a safer business.

**The margin of safety is how far sales can fall before a loss.** Margin of safety = actual sales − BEP sales = profit ÷ P/V. It is often given as a percentage of actual sales. A large margin means the business can survive a bad season.

**The simple break-even chart rests on assumptions.** Costs and revenue are straight lines; the selling price does not change with volume; everything made is sold; there is one product, or a fixed mix of products; and fixed costs stay fixed. Outside the normal range of output these break down, which is the main limit of the method.

**Make or buy compares the buying price with the extra cost of making.** If the plant has spare capacity, its fixed costs are paid anyway, so compare the buying price with the variable cost of making. Make if the variable cost is lower. If making needs new machines, add their fixed cost. The same idea picks between two machines or processes: with fixed costs F1 and F2 and variable costs v1 and v2, the two cost the same at Q = (F2 − F1) ÷ (v1 − v2). Below that quantity, choose the one with the lower fixed cost; above it, the one with the lower variable cost.

**Depreciation is a cost that takes no cash.** It is the fall in an asset's value through wear, age and obsolescence (being overtaken by better machines even while it still works). Charging it as a cost reduces the taxable profit and sets money aside to replace the asset. With first cost C, salvage value S and life n years, the main methods are:

- **Straight line:** (C − S) ÷ n every year. The book value falls in a straight line.
- **Declining balance (written-down value):** a fixed percentage f of the book value at the start of each year. The charge is large early and small later, and the book value never quite reaches zero. Book value after k years = C(1 − f)^k. Double declining balance uses f = 2/n.
- **Sum of years' digits:** in year k the charge is (n − k + 1) ÷ \[n(n + 1)/2\] of (C − S). Also large early.
- **Sinking fund:** equal yearly deposits that grow at interest to (C − S) by the end of the life. Each year's charge is the deposit plus the interest earned on the fund, so it is small early and grows.
- **Machine hour or production unit:** charged by use, not by time.

### Worked numbers

**The tea stall.** F = ₹9000 a month, s = ₹10 and v = ₹6 per cup.

- Contribution = ₹4 per cup and P/V = 4 ÷ 10 = 40%.
- BEP = 9000 ÷ 4 = 2250 cups, or 9000 ÷ 0.40 = ₹22,500 of sales.
- Selling 3000 cups: profit = 750 × 4 = ₹3000. Margin of safety = 750 cups, or ₹7500, which is 25% of sales. Check: 3000 ÷ 0.40 = 7500.
- For a profit of ₹6000: (9000 + 6000) ÷ 4 = 3750 cups.
- Price up to ₹11: contribution ₹5, BEP 1800 cups. Milk dearer, v = ₹7: contribution ₹3, BEP 3000 cups.

**P/V ratio from two periods.** Sales of ₹1,00,000 give a profit of ₹10,000, and sales of ₹1,50,000 give ₹25,000.

- P/V = change in profit ÷ change in sales = 15,000 ÷ 50,000 = 30%.
- F = 1,00,000 × 0.30 − 10,000 = ₹20,000.
- BEP sales = 20,000 ÷ 0.30 = ₹66,667.

**Choosing between two machines.** Machine A has a fixed cost of ₹20,000 and a variable cost of ₹30 per unit; machine B ₹50,000 and ₹20. They cost the same at (50,000 − 20,000) ÷ (30 − 20) = 3000 units. Below 3000 units a year choose A; above it, B.

**Depreciation.** A machine costs ₹1,00,000, has a salvage value of ₹10,000 and a life of 5 years.

- Straight line: 90,000 ÷ 5 = ₹18,000 a year. Book value after 2 years = ₹64,000.
- Sum of years' digits: the digits add to 15. Year 1 = 5/15 × 90,000 = ₹30,000, year 2 = 4/15 × 90,000 = ₹24,000. Book value after 2 years = ₹46,000.
- Double declining balance at 2/5 = 40%: year 1 = ₹40,000, leaving ₹60,000; year 2 = 40% of 60,000 = ₹24,000, leaving ₹36,000.
- Sinking fund at 10%: deposit = 90,000 × 0.10 ÷ (1.1⁵ − 1) = 9000 ÷ 0.6105 = ₹14,742. Year 1's charge is ₹14,742; year 2's is 14,742 + 10% of 14,742 = ₹16,216. It grows each year.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Profit is largest at the break-even point. | Profit is zero there: total revenue = total cost, and contribution = fixed cost. |
| Contribution is the same as profit. | Contribution = sales − variable cost = fixed cost + profit. |
| Selling more units lowers the BEP. | Volume does not move the BEP. It changes the profit and the margin of safety. |
| Higher fixed cost lowers the BEP. | It raises it, and so does higher variable cost. A higher price lowers it. |
| Margin of safety = BEP sales − actual sales. | Margin of safety = actual sales − BEP sales = profit ÷ P/V. |
| P/V ratio = profit ÷ sales. | P/V ratio = contribution ÷ sales. |
| Fixed cost per unit stays constant. | Fixed cost stays constant in total. Per unit it falls as output rises. |
| Make or buy compares the buying price with the full cost of making. | With spare capacity, compare it with the variable cost, since fixed costs are paid anyway. |
| Depreciation is a cash payment. | It is a cost charged in the accounts. No cash leaves. |
| Declining balance takes a percentage of the first cost. | It takes a percentage of the book value at the start of each year. Straight line works from the first cost. |
| The sinking fund method charges most in the early years. | It charges least early, growing each year. Declining balance and sum of years' digits charge most early. |
| Declining balance brings the book value to zero. | It never quite reaches zero. |

## 9. Management principles and forms of ownership

This is the theory corner of the subject, and Kerala PSC asks more of it than RRB or SSC do. It covers who said what (Taylor, Fayol and the rest), the functions of management, the types of organisation, delegation, the forms of business ownership and wage incentive plans. Exam setters twist names against ideas, line against staff authority, what can and cannot be delegated, and who carries what liability.

### The picture

Think of a cricket team. The captain gives orders on the field, and the players follow: that is line authority, running straight down. The coach and the analyst advise the captain but cannot order a player on the field: that is staff. A team with separate batting, bowling and fielding coaches, each giving orders in their own area, is functional organisation: a player now has three bosses.

Now think of who owns the team. A boy who owns the bat and ball and runs a street team alone is a sole proprietor; if a window breaks, he pays from his own pocket. Friends who share the costs and the say are partners. A franchise owned by thousands of shareholders and run by a board of directors is a joint stock company, and if it fails, each shareholder loses at most what they paid for their shares.

### Twisted points

**Taylor made management a science.** F. W. Taylor is the father of scientific management (*The Principles of Scientific Management*, 1911). His principles were:

- science, not rule of thumb;
- scientific selection and training of workers;
- cooperation between management and workers (harmony, not discord);
- dividing the responsibility: management plans, workers do;
- maximum output in place of restricted output.

His techniques included time study, standard tools and methods, the differential piece rate, management by exception and functional foremanship. Functional foremanship gives each worker eight specialist bosses. Four plan the work in the office: the route clerk, instruction card clerk, time and cost clerk and disciplinarian. Four see it done on the floor: the gang boss, speed boss, repair boss and inspector. It breaks unity of command.

**Fayol looked at management from the top.** Henri Fayol is the father of modern (administrative) management (*General and Industrial Management*, 1916). He named five functions: planning, organising, commanding, coordinating and controlling. Gulick later stretched these into POSDCORB: planning, organising, staffing, directing, coordinating, reporting and budgeting. Fayol's 14 principles are division of work, authority and responsibility, discipline, unity of command, unity of direction, subordination of individual interest to the general interest, remuneration, centralisation, scalar chain, order, equity, stability of tenure, initiative and esprit de corps (team spirit).

Two of them are easily confused. Unity of command means each person takes orders from one boss only. Unity of direction means one head and one plan for a group of activities with the same aim. The scalar chain is the line of authority from top to bottom; Fayol's gang plank lets two people at the same level speak directly in an emergency instead of going up and down the chain.

**Other names come with one idea each.** Frank and Lillian Gilbreth: motion study and therbligs (Topic 1). Henry Gantt: the Gantt chart and the task-and-bonus plan. Elton Mayo: the Hawthorne experiments, which showed that attention and the work group matter as much as pay, starting the human relations school. Abraham Maslow: the hierarchy of needs, from physiological to safety, social, esteem and, at the top, self-actualisation. Frederick Herzberg: hygiene factors (pay, conditions) that only prevent dissatisfaction, and motivators (achievement, recognition) that satisfy. Douglas McGregor: Theory X (people dislike work and must be pushed) and Theory Y (people like work and direct themselves). Peter Drucker: management by objectives (MBO).

**Planning comes first and controlling last, and they are linked.** Planning decides in advance what to do. Organising arranges the people and resources. Staffing fills the posts. Directing leads, motivates and communicates. Controlling sets standards, measures the work, compares it with the standard and corrects it. Control needs the plan's standards to measure against, and its findings feed the next plan, which is why the two are called twins.

**Each type of organisation fits a different size of firm.**

- **Line (military, scalar):** authority flows straight down. It keeps unity of command, is simple and decides quickly, but loads the top and has no specialists. It suits small firms.
- **Functional:** specialists give orders in their own field, as in Taylor's foremanship. Expert, but it breaks unity of command and confuses the worker.
- **Line and staff:** line managers decide and command; staff specialists only advise and have no authority over line workers. It suits large firms.
- **Committee:** decisions by a group. Balanced, but slow, and no one person is responsible.
- **Project:** a team formed for one project and broken up when it ends.
- **Matrix:** a project organisation laid over a functional one. Each person has two bosses, the functional manager and the project manager. Used in aerospace, construction and consulting.

The span of control is the number of people one manager directly supervises. A narrow span gives a tall structure with many levels; a wide span gives a flat structure with few. Graicunas showed why spans are kept small: the number of relationships grows much faster than the number of subordinates.

**Authority can be delegated; accountability cannot.** Delegation has three parts: giving a subordinate a duty (responsibility), granting the authority to carry it out, and creating accountability for the result. The manager can pass on authority but stays answerable for the work. Authority should match responsibility, neither more nor less. Decentralisation is delegation spread systematically through the whole organisation.

**The forms of ownership differ mainly in liability and control.**

- **Sole proprietorship:** one owner, unlimited liability, easy to start, quick decisions and secrecy, but limited money and no continuity after the owner.
- **Partnership:** formed under the Indian Partnership Act, 1932, by a partnership deed, with up to 50 partners. Liability is unlimited, joint and several: any partner can be made to pay all the firm's debts. It is not a separate legal person. A limited liability partnership (LLP, 2008) is the exception.
- **Joint stock company:** formed under the Companies Act, 2013. It is a separate legal person with perpetual succession, shareholders' liability is limited to their shares, and it is managed by a board of directors elected by the shareholders, so ownership is separate from management. A private limited company has at least 2 members, at most 200, and shares that cannot be freely sold. A public limited company has at least 7 members, no upper limit, and can invite the public to buy its shares.
- **Cooperative society:** a voluntary association that serves its members rather than seeking profit, run on one member, one vote, however many shares a member holds.
- **Public sector:** a departmental undertaking runs under a ministry, like the railways and the post office. A public corporation is created by a special Act of Parliament, like LIC. A government company has at least 51% of its shares held by the government, like BHEL and SAIL.

**Wage incentive plans share the time saved in different ways.** With standard time S, time taken T and hourly rate R:

```math
\text{Halsey: } E = TR + 0.5\,(S - T)\,R \qquad \text{Rowan: } E = TR + \frac{S - T}{S}\,TR
```

Halsey pays the worker a fixed share of the time saved, usually half. Rowan pays a bonus that is the time saved as a fraction of the standard time, applied to the wages earned. Rowan pays more than Halsey when less than half the time is saved, the same at exactly half, and less beyond that. A Rowan bonus can never exceed the time wage, which stops workers rushing. Taylor's differential piece rate pays a low rate below the standard and a high rate above it. Merrick's plan uses three rates. Gantt's task-and-bonus plan guarantees the time wage below the standard and adds a bonus above it. Emerson's plan starts a small bonus at about two-thirds efficiency and raises it with efficiency.

### Worked numbers

**Halsey against Rowan.** Standard time 10 hours, rate ₹100 an hour.

- Done in 8 hours: time wage ₹800. Halsey bonus = 0.5 × 2 × 100 = ₹100, earnings ₹900. Rowan bonus = (2/10) × 800 = ₹160, earnings ₹960. Rowan pays more.
- Done in 5 hours: Halsey = 500 + 0.5 × 5 × 100 = ₹750. Rowan = 500 + (5/10) × 500 = ₹750. Equal.
- Done in 4 hours: Halsey = 400 + 0.5 × 6 × 100 = ₹700. Rowan = 400 + (6/10) × 400 = ₹640. Halsey pays more.

**Effective hourly rate.** In the 8-hour case, Halsey gives 900 ÷ 8 = ₹112.50 an hour and Rowan 960 ÷ 8 = ₹120 an hour.

**Why spans stay small.** Graicunas counted the possible relationships between a manager and n subordinates as n(2ⁿ⁻¹ + n − 1). With 5 subordinates that is 5 × (16 + 4) = 100; with 6 it is 6 × (32 + 5) = 222. One more person more than doubles the relationships.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Fayol is the father of scientific management. | Taylor is. Fayol is the father of modern (administrative) management. |
| Unity of command and unity of direction are the same. | Command: one boss for each person. Direction: one head and one plan for activities with one aim. |
| Functional organisation keeps unity of command. | It breaks it, since each worker has several specialist bosses. |
| Staff specialists can give orders to line workers. | Staff only advise. Line managers command. |
| Each person in a matrix organisation has one boss. | Each has two: the functional manager and the project manager. |
| A manager can delegate responsibility completely. | Authority can be delegated, but the manager stays accountable. |
| Controlling is the first function of management. | Planning comes first and controlling last, and each feeds the other. |
| Partners have limited liability. | Their liability is unlimited, joint and several, except in an LLP. |
| Shareholders manage a company. | A board of directors manages it. Ownership is separate from management. |
| Cooperative members vote by the number of shares. | It is one member, one vote. |
| Esteem is the top of Maslow's hierarchy. | Self-actualisation is at the top. |
| The Hawthorne experiments were Taylor's. | They were Elton Mayo's, and began the human relations school. |
| A Rowan bonus can exceed the time wage. | It never can. Halsey's bonus keeps growing as more time is saved. |

## 10. Forecasting and linear programming

Forecasting estimates future demand, so that inventory (Topic 3) and production planning (Topic 5) have a number to start from. Operations research then finds the best plan within the limits: linear programming, the transportation and assignment methods, queues and games. Exam setters twist judgement against time-series methods, the smoothing constant, the assumptions of linear programming, which method solves which problem, the m + n − 1 rule and the queue formulas.

### The picture

A baker decides each morning how much bread to bake. His forecast for yesterday was 57 loaves, and he sold 62. He does not jump all the way to 62, because yesterday may have been a one-off, but he does not ignore it either. He moves part of the way: 57 + 0.3 × (62 − 57) = 58.5 loaves. That is exponential smoothing, and the 0.3 is how much he trusts the latest day.

His billing counter is a queue. If the cashier can serve 10 customers an hour and 5 arrive, she is busy half the time, and half the customers walk straight up to her. If 9 arrive, the line grows long, though she is still not quite full. Queues blow up long before the server is 100% busy.

### Twisted points

**Forecasts come from judgement or from numbers.** Qualitative methods rely on judgement and suit long-range forecasts and new products with no history.

- **Delphi method:** experts answer in writing, anonymously, over several rounds. A coordinator feeds back a summary each round until the answers converge. Anonymity stops one strong voice or the crowd from swaying the others.
- **Expert opinion (jury of executives):** managers pool their views, openly.
- **Sales force composite:** each salesperson estimates their own area.
- **Market (consumer) survey:** ask the buyers.

Quantitative methods use past figures. Time-series methods (moving averages, exponential smoothing, trend lines) project the past forward and suit short-range forecasts. Causal methods (regression, econometric models) link demand to its causes, such as income or price. A time series has four parts: trend, seasonal, cyclical and random.

**Moving averages smooth but lag.** A simple n-period moving average gives each of the last n periods equal weight. A longer average is smoother but slower to react, and every moving average lags behind a rising trend. A weighted moving average gives recent periods more weight, with the weights adding to 1.

**Exponential smoothing moves the old forecast part of the way towards the latest demand.** With smoothing constant α, between 0 and 1:

```math
F_{t+1} = \alpha D_t + (1 - \alpha)F_t = F_t + \alpha\,(D_t - F_t)
```

A high α (0.7 to 0.9) reacts fast but also chases random noise. A low α (0.1 to 0.3) gives a steady forecast that is slow to follow a real change. The method needs only three numbers: the last forecast, the last demand and α. Yet the last forecast holds all past demand, with weights α, α(1 − α), α(1 − α)² and so on, falling away exponentially. A smoothing constant of α = 2/(n + 1) behaves roughly like an n-period moving average. When demand has a trend, Holt's double exponential smoothing adds a trend term.

**Forecast errors are measured several ways.** The mean absolute deviation (MAD) is the average size of the errors, ignoring their signs. The mean squared error (MSE) squares them, punishing big misses. MAPE gives the errors as percentages. The bias (mean error) keeps the signs, and shows whether the forecast leans one way. The tracking signal, the running sum of errors divided by the MAD, flags a biased forecast when it drifts beyond about ±4.

**A trend line is fitted by least squares.** For y = a + bx, the line that makes the sum of squared errors least has b = (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²) and a = ȳ − bx̄. Number the years so that Σx = 0 (−2, −1, 0, 1, 2) and these shrink to b = Σxy ÷ Σx² and a = ȳ.

**Linear programming finds the best use of limited resources.** A problem has decision variables, a linear objective to maximise (profit) or minimise (cost), and linear constraints, with all variables zero or positive. Its assumptions are proportionality (linearity), additivity, divisibility (answers may be fractions), certainty (all numbers known) and non-negativity. Discreteness is not one of them: if the answers must be whole numbers, the problem needs integer programming.

With two variables, the graphical method draws the constraints. The feasible region they enclose is a convex polygon, and the best answer always lies at one of its corners. The simplex method (Dantzig, 1947) does the same in many dimensions, moving from corner to better corner. It adds a slack variable to each ≤ constraint, and a surplus variable and an artificial variable to each ≥ constraint (handled by the Big M or two-phase method). Special cases are an unbounded answer, no feasible answer, more than one best answer (when the objective runs parallel to a constraint) and degeneracy. Every LP has a dual: a maximising primal gives a minimising dual, with one dual variable for each primal constraint. The dual variable is the shadow price, the value of one more unit of that resource.

**Transportation and assignment are special linear programmes with their own methods.**

- **Transportation:** m sources supply n destinations at the least total cost. If total supply and demand differ, a dummy row or column with zero cost balances them. A starting solution comes from the north-west corner rule (ignores cost), the least cost method, or Vogel's approximation method (VAM), which uses the penalty between the two cheapest cells in each row and column and usually starts closest to the best. The MODI (u-v) or stepping stone method then tests and improves it. A basic solution has m + n − 1 occupied cells; with fewer it is degenerate.
- **Assignment:** n jobs to n workers, one each, at the least total cost. The Hungarian method subtracts each row's smallest number, then each column's, and covers all the zeros with the fewest lines. If n lines are needed, an assignment using the zeros is the best one. For a maximising problem, first subtract every entry from the largest. An unbalanced problem gets a dummy row or column.

**A single queue is stable only if service is faster than arrival.** Kendall's notation M/M/1 means Poisson arrivals at rate λ, exponential service at rate μ, and one server. The utilisation is ρ = λ/μ, and it must be below 1, or the queue grows without limit.

```math
P_0 = 1 - \rho \qquad L_s = \frac{\lambda}{\mu - \lambda} \qquad L_q = \frac{\lambda^2}{\mu(\mu - \lambda)} \qquad W_s = \frac{1}{\mu - \lambda} \qquad W_q = \frac{\lambda}{\mu(\mu - \lambda)}
```

P0 is the chance the system is empty, which is also the chance an arriving customer is served at once. Little's law links the averages: L = λW. A customer who sees the queue and does not join is balking; one who joins and then leaves is reneging; one who switches lines is jockeying.

**Games and simulation finish the toolkit.** In a two-person zero-sum game, one player's gain is exactly the other's loss. If the largest of the row minimums equals the smallest of the column maximums, the game has a saddle point, each player has one best (pure) strategy, and that number is the value of the game. Without a saddle point, players mix their strategies. Dominance removes rows or columns that are never worth playing. Monte Carlo simulation imitates a random system with random numbers when the formulas get too hard.

### Worked numbers

**Moving averages.** Monthly demand: 120, 130, 110, 140, 150.

- 3-month moving average for month 6 = (110 + 140 + 150) ÷ 3 = 133.3.
- Weighted, with 0.5 on the latest, 0.3 on the one before and 0.2 on the third: 0.5 × 150 + 0.3 × 140 + 0.2 × 110 = 139. It sits closer to the recent rise.

**Exponential smoothing.** The forecast was 200 and the demand came in at 230. The next demand is 210.

- With α = 0.2: 200 + 0.2 × 30 = 206, then 206 + 0.2 × 4 = 206.8.
- With α = 0.8: 200 + 0.8 × 30 = 224, then 224 + 0.8 × (−14) = 212.8.
- The high α swings with every change; the low α hardly moves.

**Trend line.** Sales over five years were 10, 12, 15, 17 and 21, numbered x = −2 to 2.

- a = 75 ÷ 5 = 15. Σxy = −20 − 12 + 0 + 17 + 42 = 27 and Σx² = 10, so b = 2.7.
- y = 15 + 2.7x. Next year (x = 3): 15 + 8.1 = 23.1.

**Tracking signal.** Four errors of +5, −3, +6 and +4: the running sum is 12, MAD = 18 ÷ 4 = 4.5, and the tracking signal = 12 ÷ 4.5 = 2.7. The forecast runs low but is still within limits.

**Graphical LP.** Maximise Z = 3x + 5y subject to x + 2y ≤ 8, 3x + 2y ≤ 12, and x, y ≥ 0.

- The corners are (0, 0), (4, 0), (0, 4) and the crossing of the two lines. Subtracting the first from the second gives 2x = 4, so x = 2 and y = 3.
- Z at the corners: 0, 12, 20 and 6 + 15 = 21.
- The best is x = 2, y = 3, with Z = 21.

**Assignment.** Three workers and three jobs, with costs: W1 (9, 4, 7), W2 (6, 8, 3), W3 (5, 7, 6).

- Subtract each row's smallest: W1 (5, 0, 3), W2 (3, 5, 0), W3 (0, 2, 1). Every column already has a zero.
- The zeros give one job each: W1 to job 2, W2 to job 3, W3 to job 1.
- Total cost = 4 + 3 + 5 = 12, the least of all six possible assignments.

**Transportation size.** With 3 factories and 4 warehouses, a basic solution needs 3 + 4 − 1 = 6 occupied cells.

**Queue.** Customers arrive at 8 an hour and are served at 10 an hour.

- ρ = 0.8 and P0 = 0.2, so 20% of customers are served at once.
- Ls = 8 ÷ 2 = 4 customers and Lq = 64 ÷ 20 = 3.2 waiting.
- Ws = 1 ÷ 2 hour = 30 minutes and Wq = 8 ÷ 20 hour = 24 minutes.
- If arrivals rise to 9 an hour, Ls = 9 and Ws = 1 hour. A 12% rise in arrivals doubles the time spent.

### Mix-ups to avoid

| What people often think | What is actually true |
| --- | --- |
| Delphi experts meet and argue face to face. | They answer anonymously in writing, over rounds with feedback. |
| A high α gives a smoother forecast. | A high α reacts faster and follows noise. A low α smooths. |
| Exponential smoothing uses only last period's data. | The last forecast carries all past data, with weights that fall away exponentially. |
| A longer moving average reacts faster. | It is smoother but slower, and every moving average lags a trend. |
| Discreteness is an assumption of linear programming. | Divisibility is. Whole-number answers need integer programming. |
| The best LP answer can lie inside the feasible region. | It lies at a corner, or along an edge when there are several best answers. |
| A slack variable is added to a ≥ constraint. | Slack goes with ≤. A ≥ constraint takes a surplus and an artificial variable. |
| VAM gives the optimal transportation solution. | It gives a good starting solution. MODI or stepping stone tests and improves it. |
| The Hungarian method solves transportation problems. | It solves assignment problems. |
| A basic transportation solution has m + n occupied cells. | It has m + n − 1. Fewer makes it degenerate. |
| P0 = ρ. | P0 = 1 − ρ, the chance the system is empty. |
| A queue is stable when arrivals equal service. | It needs λ below μ. At λ = μ the queue grows without limit. |
| In a zero-sum game both players can gain. | One player's gain is exactly the other's loss. |

## Further reading

Level 2 follows the standard textbook treatment of each topic. Figures such as the ABC shares, the typical holding and handling cost shares, the Cp target of 1.33 and the ranges for α are rules of thumb, so another book may quote slightly different values. The limits on partners and company members follow the Companies Act, 2013 and its rules. The reasoning behind them does not change.

- O. P. Khanna, *Industrial Engineering and Management*: every topic, at the level of JE and AE papers.
- M. Mahajan, *Industrial Engineering and Production Management*: Topics 1 to 8 and 10, with many solved problems.
- International Labour Office, *Introduction to Work Study*: the classic treatment of Topics 1 and 2.
- Ralph M. Barnes, *Motion and Time Study*: therbligs, motion economy and time study in depth.
- R. Panneerselvam, *Production and Operations Management*: Topics 3, 5, 6 and 10.
- Douglas C. Montgomery, *Introduction to Statistical Quality Control*: Topic 7.
- Hamdy A. Taha, *Operations Research: An Introduction*: Topics 4 and 10.
- Harold Koontz and Heinz Weihrich, *Essentials of Management*: Topic 9.
