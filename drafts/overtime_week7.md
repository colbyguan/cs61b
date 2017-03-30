# Post-Discussion 7 Notes

## Problem 1 (solutions)
Detailed solutions for the True/False section. I use the terms order-of-growth / category / family interchangeably but they all mean the same thing:

1. Is `f(n) = 20501` in O(1) ?
  * Yes. f(n) runs in a constant number of times no matter what `n` is, so its order of growth is in the upper bound of O(1). We could also have said it was in Θ(1) or Ω(1) since it falls directly in the category of constant time.

2. Is `f(n) = n^2 + n` in Ω(`0.000001n^3`) ?
  * No. `g(n)` falls in the `n^3` category, which `f(n)` is faster than. Since Ω is a lower bound, a.k.a. covering functions that run in `n^3` or *slower*, this is not true. Note that O(n<sup>3</sup>) would have worked here.

3. Is `f(n) = 2^(2n)+1000` in O(`4^n + n^100`) ?
  * Yes. Simplying `f(n)` to `4^n + 1000`, and simplifying the big-O bound to O(`4^n`) since `4^n` is slower (and therefore dominates) `n^100`, we can rephrase this as: Is `4^n + 1000` in O(`4^n`)?

4. Is `f(n) = log (n ^ 100) = 100 log n` in Θ(`n log n`) ?
  * No. The question here is if `f(n)` is *exactly* (big Theta) in the family/category of functions that run in `n log n`. `f(n)` is in the `log n` family, which is faster than `n log n`. Note that O(`n log n`) would have made this true.

5. Is `f(n) = n log n + 3^n + n` in Ω(`n^2 + n + log n`) ?
  * Simplifying `f(n)` to `f(n) = 3^n` like in part 3,
  * Simplifying the Omega bound to Ω(`n^2`),
  * Yes. We see that `f(n)`, which is significantly slower than the family of `n^2`, is indeed lower bounded by `n^2`. Note that other bounds like O or Θ would not work here.

6. Is `f(n) = n log n + n^2` in Θ(`log n + n^2`) ?
  * Yes. After simplifying `f(n)` and the Θ bound, we see that `f(n)` falls exactly in the `n^2` family of functions.

7. Is `n log n` in O(`(log n)^2`) ?
  * No. It's easier to see this as "Is `n log n` upper bounded by the family `(log n) * log n` ? We see that `n log n` is *slower* the the `(log n)^2` category, so no.

## Problem 2 (solutions)
### First part:
```
int j = 0;
for (int i = N; i > 0; i--) { // Call this loop 1
  for (; j <= M; j++) {       // Call this loop 2
    if (ping(i, j) > 64) {
      break;
    }
  }
}
```
Take some time to notice why the result of `ping(i , j)` is the difference between the worst and best case
#### Worst case behavior (ping condition always false): 
1. Enter loop 1
2. Enter loop 2. Since the if condition doesn't return true, it will loop again
3. The if condition never returns true, so **loop 2 runs for M operations**
4. Loop 1 finishes and loops. It tries to enter loop 2 which hits the `j <= M` condition since `j` has already been incremented to `M` in the previous step. So loop 2 runs the condition check and exits.
5. Now, **each** loop 1 loop runs in `O(1)` now since it hits an immediately-terminating loop 2. So there are `N-1` more runs of loop 1 after step 3.

Summing up this process:
* `1 + M operations` for first entering loop 1, and then M loops of loop 2 (step 1,3)
* \+ `(N - 1)` for the loop 1 runs (step 4, 5)
* = `M + N` which is bounded by O(`M + N`)

#### Best case behavior (ping condition always true)
1. Enter loop 1, Enter loop 2, ~2 operations
2. The if condition is true and breaks loop 2, ~1 operation
3. Loop 1 runs its code again, which runs loop 2, step 2 happens again. This happens N times.

So with the practical runtime being `N * constant number of operations`, we can bound this to Ω(N). 

### Second part:
```
public static boolean mystery(int[] arr) {
  arr = mrpoolsort(arr); // Lets say this sort runs in Theta(N log N)
  int N = arr.length;    // Using the length of the array as our runtime variable
  for (int i = 0; i < N; i += 1) {    // Call this loop 1
    boolean x = false;
    for (int j = 0; j < N; j += 1) {  // Call this loop 2
      if (i != j && arr[i] == arr[j]) {
        x = true;
      }
    }
    if (!x) {
      return false;
    }
  }
  return true;
}
```

(What is mystery doing?) When doing runtime analysis, it helps to know what functions actually do. If we look inside loop 2, it's another for loop through the elements of the array but with variable `i` staying the same. The if condition excludes comparing the focused item `arr[i]` with itself, so functionally it's looking to see if any other array elements are the same value as `arr[i]`. The outer loop iterates `i` through every index, so putting this all together, `x` is set to true if the current value `arr[i]` has a duplicate. If `x` is never set to true for an `i` / a run of the outer loop, the function will return false. Therefore the function only loops through everything and returns true if every element has a duplicate. 

#### Worst case behavior (never return early):  
* if the `i != j && arr[i] == arr[j]` condition returns true, `x` is set to `true` but loop 2 *keeps on running*. So loop 2 always runs in O(N) time. This is possible in the case that each element has a duplicate eg. `arr = {1, 2, 3, 1, 2 ,3}`
* This means the `if (!x)` condition will never be true and therefore loop 1 will never stop early. It will loop all the way until it hits the `i < N` condition. So loop 1 runs N times.
* `N operations from loop 2 going from j = 0 to N` * `loop 1 loops N times` = `N^2`.
* This runtime dominates the `N log N` runtime of the sort, so we can bound the overall runtime to O(`N^2`)


#### Best case behavior (return early):
* The `i != j && arr[i] == arr[j]` *never* returns true. This takes `N` operations to happen since loop 2 will still go through all array elements.
* Immediately after the *first* loop 2 finishes, `if (!x)` will be true and the function will stop. So the runtime of loop 1 and loop 2 is `N`
* However, we must consider the time to sort the array. Combining the runtimes, we get `N log N + N`, so `N log N` dominates the overall runtime.
* = Ω(`N log N`)
  
### Problem 3 (hint)
For the "Can we do this faster?" part, what the "Does order matter here" hint is implying is to note that the array is already sorted. So you may think about how you might traverse the array in a way that *moves towards* finding elements that sum to x.

### Problem 4 (hint)
Think about using ADTs for both questions

