# Final Review: Asymptotic Analysis

## Total Recall
Choose &Omega;, &Theta;, or O notation for the following questions:

1. Which is a good notation for the worst case of a function whose worse case runs the same way every time?
2. Which is a good notation for the average case of a function that has a 50% chance of running with a slow runtime bound and a 50% chance of running with a fast runtime bound?
3. Which is a good notation describing the bound on the runtime of comparison-based sorts that we went over in Lecture 35?

Give runtimes in &Theta; notation on the variable N for the following:
1. Worst case for `put()` in a HashMap that already has N items
2. Worst case for inserting N items into an empty Binary Search Tree
3. Worst case for getting the list of neighbors of a vertex in a graph represented by an adjacency list with N vertices



## Calculator life
Input: two linked lists representing two numbers like so:
```
287: 7 -> 8 -> 2
51: 1 -> 5
```
Note that the linked lists go from the ones place to the tenths place, and so on.  
* Describe or write out an algorithm that outputs the sum of the two numbers as a linked list of the same form.
* Given that the length of the first number is M and the length of the second is N, what should the runtime of this algorithm be?



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

### Looking for more practice?
* Doing problems on other topics, and for any algorithm-writing problems, asking yourself what the runtime of your algorithm is.
* [The 3 Asymptotics study guides on Week 7](http://datastructur.es/sp17/)
* [Week 7 and 8 of Fall 2016 Discussions](http://inst.eecs.berkeley.edu/~cs61b/fa16/)
* [Antares and Kevin's big Midterm 2 worksheet](http://datastructur.es/sp17/materials/review/MT2ReviewDocument.pdf)


