# Understanding Amortized Analysis

Make sure you've gone through the [lecture slides](https://docs.google.com/presentation/d/1_887tQpOVojoapHZxE3VG_3LVFAB7ePoeEY9JPl0ZgA/pub?start=false&loop=false&delayms=3000) up to at least Slide 18 before reading through this.

## Explanation 1 - Quick visual intuition
Consider the graph below:
* Assume we are starting with a `new ArrayList(4)` so the initial capacity of the internal array is 4
* Assume ArrayList doubles the size of its internal array on an `add()` that causes `size == capacity`.
* We are plotting cumulative cost versus number of insertions N. 
  * eg. at N=3 the cumulative cost is 3 because calling `add(1)` three times will be three operations each of cost 1

![](http://i.imgur.com/NTAVeWx.png)

Let's inspect some random Ns and their cumulative costs:
* N = 7, cost = `(cumulative cost at N=4) + 3 more inserts` = 12 + 3 = **15**
  * So the cost is around 2*N, so around 2-cost per insert.
* N = 15, cost = 32 + 7 = **39**
  * So the cost is around 2.5*N, so around 2.5-cost per insert.
* N = 20, cost = 72 + 4 = **76**
  * So the cost is around 3.8*N, so around 3.8-cost per insert.
* N = 30, cost = 72 + 14 = **86**
  * So the cost is around 2.8*N, so around 2.8-cost per insert.
* Even if we jump to N=1000 using the script below, the cost = **3040**
  * So the cost is around 3*N, so around 3-cost per insert.

Notice that the cost of N `add()`s is always: `(some constant not scaling with N) * N`. Each time we average the cost across the N adds, we always end up with some constant as the cost of a single insert. This non-rigorously shows us that the amortized runtime of a single `add()` is in Θ(1)

Python3 script for checking math:
```
N = 30
size = 4

ops = 0
for i in range(1,N+1):
  if i == size:
    ops += size * 2
    size *=2
  ops += 1
  print(i, ops)
```

## Explanation 2 - Withdraw/Deposit Idea from Lecture + metaphor
Let's use the size-4 `ArrayList` from above again, but add a couple things:
* It now costs money to use `ArrayList.add()`. You are charged 5 cents for one call to `add()`.
* The `ArrayList` uses the money as cost for internal operations (think time = money). So the machine uses 1 cent for each write and 1 cent for each copy.
  * eg. So if we call `add(1)` for the first time, we would pay 5 cents, but the machine would only use 1 cent to perform the 1 write
  * eg. If the machine needs to resize the array to 8 cells and do an `add()`, it would use 9 cents.
* Any money the machine does not use for `add()`s is stored for later use, like a bank account balance.
  * eg. So if we wanted to do `add(1);add(2);add(3)`, we would have to pay a total of 15 cents, but the machine would only use 3 cents to execute the `add()`s and keep the remaining 12.
* Note that the machine / `ArrayList.add()` won't work if it ever has a negative balance.

We can construct a table to keep track of how this `ArrayList` machine would run. Here is a shorter version to check understanding:

| Nth add():                |1|2|3| 4|
|-|-|-|
| ¢ paid by us:     |5|5|5| 5|
| ¢ the machine uses:   |1|1|1|8+1=9|
| ¢ left over in machine:|4|8|12|8|

The 4th row in the table tracks money left in the machine after we pay the charge and after the machine performs the operations. *The following bullets points are for understanding the table:*
*  Consider the 2nd `add()`. Before this happens, the machine has 4¢ stored. We paid 5¢ which brings its total money to 9¢. The machine then needs to do one write, which costs one ¢. So at the end of the 2nd `add()`, the machine still has 8¢
* Consider the 4th `add()`, which causes a resize. The machine has 12¢ in its balance . This is increased to 17¢ after we pay for this `add()`. The internal cost of this one `add()` will be:
  * `(cost of copying 3 filled cells + 5 empty cells) + (cost of 1 write)` = 9 operations = 9¢.
  * So the machine is left with 17-9 = 8¢

Longer version of the table for analysis (very similar to lecture) -- note the balance of the machine after `add()`s that cause resizing:

| Nth add():                  |1|2|3 |4|5 | 6| 7| 8| 9|10|11|12|13|14|15|16|17|
|-|-|-|
| ¢ paid by us:      |5|5|5 |5| 5| 5| 5| 5| 5| 5| 5| 5| 5| 5| 5| 5|5|
| ¢ the machine uses:    |1|1|1 |9| 1|1 | 1|17| 1|1 | 1| 1| 1| 1| 1|33|1
| ¢ left over in machine:|4|8|12|8|12|16|20| 8|12|16|20|24|28|32|36| 8|12|

Let's bring this back to amortized analysis, with the idea that number of cents are parallel to number of operations:
1. We notice that the total ¢ in the machine never goes below 0 -- the machine always has enough saved-up operations to run `add()`.
2. So 5¢-per-add is actually an over-estimation of how much we need to spend to keep calling `add()`
  * a.k.a. an over-estimation of how much the machine should charge to have enough money to always run `add()`.
3. So then 5¢ is effectively **an upper-bound on the actual cost** (¢ the machine uses) **of each `add()`**.
4. Converting this to asymptotic notation, the cost of `add()` is therefore `O(5)` which is on the order of `O(1)`.
5. So here is the key parallel: **The amount charged for each add() call is the amortized cost for that add()**. Because the amount charged is some constant, the amortized cost / runtime is constant time.

## Beyond ArrayList (Extra for Experts)
Since `ArrayList.add()` is the classic data structure operation to explain amortized analysis, you may be looking for another data structure + operation to analyze. Here is another one thanks to notes from Princeton' CS department:

*The data structure*: a **stack** of items which are pushed / popped onto.

*The operation (pseudocode)*:
```
void popSomePushOne(int n) {
  // Precondition: at least n items are already on the stack
  pop n items from the stack
  push 1 item onto the stack
}
```
How would you do amortized analysis on this function?
* Hint: Think similar to explanation 2
* For the solution, look in the "Example" sections of "The account method" or "The potential method" of the Princeton notes linked below. 


## Sources:
* [CS 61B Asymptotics 3 Lecture](https://docs.google.com/presentation/d/1_887tQpOVojoapHZxE3VG_3LVFAB7ePoeEY9JPl0ZgA/pub?start=false&loop=false&delayms=3000)
* ["Amortized Analysis Explained", notes from Princeton CS](https://www.cs.princeton.edu/~fiebrink/423/AmortizedAnalysisExplained_Fiebrink.pdf)

