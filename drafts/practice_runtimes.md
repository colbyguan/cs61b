# Final Review: Asymptotic Analysis

## Total Recall
Choose Ω, Θ, or O notation for the following questions:

1. Which is a good notation for the worst case of a function whose worse case runs the same way every time?
2. Which is a good notation for the average case of a function that has a 50% chance of running with a slow runtime bound and a 50% chance of running with a fast runtime bound?
3. Which is a good notation describing the bound on the runtime of comparison-based sorts that we went over in Lecture 35?


1. **&Theta;**, we're only bounding the worst case which runs the same way. 
2. **&Omega; or O**, the way the function run may vary
3. **&Omega;** since comparison-based sorts can't be any faster than `n log n`, so we are lower-bounding. 

Give runtimes in Θ notation on the variable N for the following:
1. Worst case for `put()` in a HashMap that already has N items
2. Worst case for inserting N items into an empty Binary Search Tree
3. Worst case for getting the list of neighbors of a vertex in a graph represented by an adjacency list with N vertices


1. **&Theta;(N)** to see if the element is already in the bucket it belongs to
2. **&Theta;(N<sup>2</sup>)** because the N items could insert in a way that the tree looks like a linked list every time. 
3. **&Theta;(1)** because we can directly return the bucket of that vertex


## Calculator life
Input: two linked lists representing two numbers like so:
```
287: 7 -> 8 -> 2
51: 1 -> 5
```
Note that the linked lists go from the ones place to the tenths place, and so on.  
* Describe or write out an algorithm that outputs the sum of the two numbers as a linked list of the same form.
* Given that the length of the first number is M and the length of the second is N, what should the runtime of this algorithm be?


* Use a recursive function `Node<Integer> addNumbers(Node<Integer> num1, Node<Integer> num2, int carry)` that does the following:
  * Returns null if both `num1, num2` are null
  * If only `num1` is null, treat its current digit at `0`; same for `num2`
  * Return a LinkedList Node where:
    * Head is `carry + num1.head + num2.head`
    * Tail is the result of `addNumbers(num1.tail or null, num2.tail or null, 1 if num1+num2 >= 10 else 0)` -- the "or null" indicates the case where num1 might already be null at the start of the function. 
* Would expect runtime to be **O(M + N)**, since we only need to look at each digit of each number once. 



## Reading
Assume TreeNodes are part of a self-balancing binary search tree. See if you can figure out what the `f1` function is doing and what its runtime is in terms of N, the number of nodes in the tree. 
```
static class TreeNode {
  TreeNode left;
  TreeNode right;
  TreeNode parent;
}

static TreeNode f1(TreeNode n) {
  if (n == null) {
    return null;
  }

  if (n.right != null) {
    return f2(n.right);
  } else {
    TreeNode q = n;
    TreeNode x = q.parent;

    // Go up
    while (x != null && x.left != q) {
      q = x;
      x = x.parent;
    }
    return x;
  }
}

static TreeNode f2(TreeNode n) {
  if (n == null) {
    return null;
  }
  while (n.left != null) {
    n = n.left;
  }
  return n;
}
```

* `f1` returns the TreeNode that is the in-order successor of `TreeNode n`. You can think of it as the number than would come right after `n` in the sorted list that this BST represents
* `f2` is used to find the leftmost child of n's right child, which would be the in-order successor if n has a right subtree
* Otherwise if `n` has no more nodes to its right, so we need to go back up the BST to a point where our "current" pointer is the left child of some node `x`. At this point, the parent of our pointer, `x`, must be the successor of `n` (Draw out a BST where n is a right-leaning leaf in the root's left subtree to understand this visually) 
* Since the tree is self-balancing, we won't have any cases where our tree resembles a linked list. In the worst case we would need to traverse upwards or downwards the entire height of the tree, so the runtime is **O(log N)**

## Outsourced problems
The problems in this section were created by Leonino Colobong, a former CS 61B TA

```
static LinkedList<String> stringPerms(String curr, String rest) {
  LinkedList<String> result = new LinkedList<>();

  if (rest.isEmpty()) {
    result.add(curr);
    return result;
  }
  int len = rest.length();
  String newCurr = "";
  String newRest = "";
  for (int i = 0; i < len; i++) {
    newCurr = curr + rest.charAt(i);
    newRest = rest.substring(0, i) + rest.substring(i + 1, len);
    result.addAll(stringPerms(newCurr, newRest));
  }
  return result;
}
```
What is the tight Big-O runtime of the above function in terms of N, the length of rest?

* **O(N!)**
* (it helps to draw out a tree visualization for this) In the for loop, we loop len times.  In body of the for loop, setting newCurr and newRest are constant operations.  However, the recursive call to stringPerms will have a for loop that will run (n−1) times. The next recursive call will run (n−2) times.  This goes on until it only loops once.  This will look liken∗(n−1)∗(n−2)∗. . .∗1, which can be simplified to `N!`


```
static int finn(int n) {
  if (n == 7) {
    return jake(3);
  } else if (n == 5) {
    return 7;
  } else {
    return jake(7);
  }
}

static int jake(int n) {
  if (n + 2 == 5) {
    return finn(5);
  }
  return finn(n);
}
```
In Big-O notation using the `int n` argument:
* What is the runtime of finn?
* What is the runtime of jake


* **O(1)** Both functions have a maximum number of operations that can occur which is a constant.

## I'm not sure about the answer to this one yet
But I'd love to discuss ideas with anyone
```
static void func(int n) {
  if (n < 1) {
    return;
  }
  func(n - 1);
  func(n / 2);
}
```

* Possibly n<sup>log n</sup>

### Looking for more practice?
* Doing problems on other topics, and for any algorithm-writing problems, asking yourself what the runtime of your algorithm is.
* [The 3 Asymptotics study guides on Week 7](http://datastructur.es/sp17/)
* [Week 7 and 8 of Fall 2016 Discussions](http://inst.eecs.berkeley.edu/~cs61b/fa16/)
* [Antares and Kevin's big Midterm 2 worksheet](http://datastructur.es/sp17/materials/review/MT2ReviewDocument.pdf)


