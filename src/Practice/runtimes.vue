<template>
    <div id="runtimes" class="md">
<article>
    <h1 id="final-review-asymptotic-analysis">Final Review: Asymptotic Analysis</h1>
<h2 id="total-recall">Total Recall</h2>
<p>Choose Ω, Θ, or O notation for the following questions:</p>
<ol>
<li>Which is a good notation for the worst case of a function whose worse case runs the same way every time?</li>
<li>Which is a good notation for the average case of a function that has a 50% chance of running with a slow runtime bound and a 50% chance of running with a fast runtime bound?</li>
<li>Which is a good notation describing the bound on the runtime of comparison-based sorts that we went over in Lecture 35?</li>
</ol>
<button v-on:click="showRuntime1 = !showRuntime1" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime1">
<ol>
<li><strong>&Theta;</strong>, we&#39;re only bounding the worst case which runs the same way. </li>
<li><strong>&Omega; or O</strong>, the way the function run may vary</li>
<li><strong>&Omega;</strong> since comparison-based sorts can&#39;t be any faster than <code>n log n</code>, so we are lower-bounding. </li>
</ol>
<br><br>
</div>
<p>Give runtimes in Θ notation on the variable N for the following:</p>
<ol>
<li>Worst case for <code>put()</code> in a HashMap that already has N items</li>
<li>Worst case for inserting N items into an empty Binary Search Tree</li>
<li>Worst case for getting the list of neighbors of a vertex in a graph represented by an adjacency list with N vertices</li>
</ol>

<button v-on:click="showRuntime2 = !showRuntime2" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime2">
<ol>
<li><strong>&Theta;(N)</strong> to see if the element is already in the bucket it belongs to</li>
<li><strong>&Theta;(N<sup>2</sup>)</strong> because the N items could insert in a way that the tree looks like a linked list every time. </li>
<li><strong>&Theta;(1)</strong> because we can directly return the bucket of that vertex</li>
</ol>
<br><br>
</div>

<h2 id="calculator-life">Calculator life</h2>
<p>Input: two linked lists representing two numbers like so:</p>
<pre><code><span class="hljs-number">287</span>: <span class="hljs-number">7</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-number">2</span>
<span class="hljs-number">51</span>: <span class="hljs-number">1</span> -&gt; <span class="hljs-number">5</span>
</code></pre><p>Note that the linked lists go from the ones place to the tenths place, and so on.  </p>
<ul>
<li>Describe or write out an algorithm that outputs the sum of the two numbers as a linked list of the same form.</li>
<li>Given that the length of the first number is M and the length of the second is N, what should the runtime of this algorithm be?</li>
</ul>

<button v-on:click="showRuntime3 = !showRuntime3" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime3">
<ul>
<li>Use a recursive function <code>Node&lt;Integer&gt; addNumbers(Node&lt;Integer&gt; num1, Node&lt;Integer&gt; num2, int carry)</code> that does the following:<ul>
<li>Returns null if both <code>num1, num2</code> are null</li>
<li>If only <code>num1</code> is null, treat its current digit at <code>0</code>; same for <code>num2</code></li>
<li>Return a LinkedList Node where:<ul>
<li>Head is <code>carry + num1.head + num2.head</code></li>
<li>Tail is the result of <code>addNumbers(num1.tail or null, num2.tail or null, 1 if num1+num2 &gt;= 10 else 0)</code> -- the &quot;or null&quot; indicates the case where num1 might already be null at the start of the function. </li>
</ul>
</li>
</ul>
</li>
<li>Would expect runtime to be <strong>O(M + N)</strong>, since we only need to look at each digit of each number once. </li>
</ul>
<br><br>
</div>

<h2 id="reading">Reading</h2>
<p>Assume TreeNodes are part of a self-balancing binary search tree. See if you can figure out what the <code>f1</code> function is doing and what its runtime is in terms of N, the number of nodes in the tree. </p>
<pre><code><span class="hljs-keyword">static</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TreeNode</span> </span>{
  TreeNode left;
  TreeNode right;
  TreeNode <span class="hljs-keyword">parent</span>;
}

<span class="hljs-keyword">static</span> TreeNode f1(TreeNode n) {
  <span class="hljs-keyword">if</span> (n == <span class="hljs-keyword">null</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">null</span>;
  }

  <span class="hljs-keyword">if</span> (n.right != <span class="hljs-keyword">null</span>) {
    <span class="hljs-keyword">return</span> f2(n.right);
  } <span class="hljs-keyword">else</span> {
    TreeNode q = n;
    TreeNode x = q.<span class="hljs-keyword">parent</span>;

    <span class="hljs-comment">// Go up</span>
    <span class="hljs-keyword">while</span> (x != <span class="hljs-keyword">null</span> &amp;&amp; x.left != q) {
      q = x;
      x = x.<span class="hljs-keyword">parent</span>;
    }
    <span class="hljs-keyword">return</span> x;
  }
}

<span class="hljs-keyword">static</span> TreeNode f2(TreeNode n) {
  <span class="hljs-keyword">if</span> (n == <span class="hljs-keyword">null</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">null</span>;
  }
  <span class="hljs-keyword">while</span> (n.left != <span class="hljs-keyword">null</span>) {
    n = n.left;
  }
  <span class="hljs-keyword">return</span> n;
}
</code></pre>

<button v-on:click="showRuntime4 = !showRuntime4" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime4">
<ul>
<li><code>f1</code> returns the TreeNode that is the in-order successor of <code>TreeNode n</code>. You can think of it as the number than would come right after <code>n</code> in the sorted list that this BST represents</li>
<li><code>f2</code> is used to find the leftmost child of n&#39;s right child, which would be the in-order successor if n has a right subtree</li>
<li>Otherwise if <code>n</code> has no more nodes to its right, so we need to go back up the BST to a point where our &quot;current&quot; pointer is the left child of some node <code>x</code>. At this point, the parent of our pointer, <code>x</code>, must be the successor of <code>n</code> (Draw out a BST where n is a right-leaning leaf in the root&#39;s left subtree to understand this visually) </li>
<li>Since the tree is self-balancing, we won&#39;t have any cases where our tree resembles a linked list. In the worst case we would need to traverse upwards or downwards the entire height of the tree, so the runtime is <strong>O(log N)</strong></li>
</ul>
<br><br>
</div>

<h2 id="outsourced-problems">Outsourced problems</h2>
<p>The problems in this section were created by Leonino Colobong, a former CS 61B TA</p>
<pre><code>static LinkedList&lt;String&gt; stringPerms(String curr, String <span class="hljs-built_in">rest</span>) {
  LinkedList&lt;String&gt; <span class="hljs-literal">result</span> = new LinkedList&lt;&gt;();

  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">rest</span>.isEmpty()) {
    <span class="hljs-literal">result</span>.add(curr);
<span class="hljs-built_in">    return</span> <span class="hljs-literal">result</span>;
  }
  int len = <span class="hljs-built_in">rest</span>.<span class="hljs-built_in">length</span>();
  String newCurr = <span class="hljs-string">""</span>;
  String newRest = <span class="hljs-string">""</span>;
  <span class="hljs-keyword">for</span> (int i = <span class="hljs-number">0</span>; i &lt; len; i++) {
    newCurr = curr + <span class="hljs-built_in">rest</span>.charAt(i);
    newRest = <span class="hljs-built_in">rest</span>.substring(<span class="hljs-number">0</span>, i) + <span class="hljs-built_in">rest</span>.substring(i + <span class="hljs-number">1</span>, len);
    <span class="hljs-literal">result</span>.addAll(stringPerms(newCurr, newRest));
  }
<span class="hljs-built_in">  return</span> <span class="hljs-literal">result</span>;
}
</code></pre><p>What is the tight Big-O runtime of the above function in terms of N, the length of rest?</p>

<button v-on:click="showRuntime5 = !showRuntime5" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime5">
<ul>
<li><strong>O(N!)</strong></li>
<li>(it helps to draw out a tree visualization for this) In the for loop, we loop len times.  In body of the for loop, setting newCurr and newRest are constant operations.  However, the recursive call to stringPerms will have a for loop that will run (n−1) times. The next recursive call will run (n−2) times.  This goes on until it only loops once.  This will look liken∗(n−1)∗(n−2)∗. . .∗1, which can be simplified to <code>N!</code></li>
</ul>
<br><br>
</div>

<pre><code><span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">finn</span><span class="hljs-params">(<span class="hljs-keyword">int</span> n)</span> </span>{
  <span class="hljs-keyword">if</span> (n == <span class="hljs-number">7</span>) {
    <span class="hljs-function"><span class="hljs-keyword">return</span> <span class="hljs-title">jake</span><span class="hljs-params">(<span class="hljs-number">3</span>)</span></span>;
  } <span class="hljs-function"><span class="hljs-keyword">else</span> <span class="hljs-title">if</span> <span class="hljs-params">(n == <span class="hljs-number">5</span>)</span> </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-number">7</span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-function"><span class="hljs-keyword">return</span> <span class="hljs-title">jake</span><span class="hljs-params">(<span class="hljs-number">7</span>)</span></span>;
  }
}

<span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">jake</span><span class="hljs-params">(<span class="hljs-keyword">int</span> n)</span> </span>{
  <span class="hljs-keyword">if</span> (n + <span class="hljs-number">2</span> == <span class="hljs-number">5</span>) {
    <span class="hljs-function"><span class="hljs-keyword">return</span> <span class="hljs-title">finn</span><span class="hljs-params">(<span class="hljs-number">5</span>)</span></span>;
  }
  <span class="hljs-function"><span class="hljs-keyword">return</span> <span class="hljs-title">finn</span><span class="hljs-params">(n)</span></span>;
}
</code></pre><p>In Big-O notation using the <code>int n</code> argument:</p>
<ul>
<li>What is the runtime of finn?</li>
<li>What is the runtime of jake</li>
</ul>

<button v-on:click="showRuntime6 = !showRuntime6" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime6">
<ul>
<li><strong>O(1)</strong> Both functions have a maximum number of operations that can occur which is a constant.</li>
</ul>
<br><br>
</div>
<h2 id="i-m-not-sure-about-the-answer-to-this-one-yet">I&#39;m not sure about the answer to this one yet</h2>
<p>But I&#39;d love to discuss ideas with anyone</p>
<pre><code><span class="hljs-keyword">static</span> void <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(int n)</span> {</span>
  <span class="hljs-keyword">if</span> (n &lt; <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">return</span><span class="hljs-comment">;</span>
  }
  <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(n - <span class="hljs-number">1</span>)</span>;</span>
  <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(n / <span class="hljs-number">2</span>)</span>;</span>
}
</code></pre>

<button v-on:click="showRuntime7 = !showRuntime7" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRuntime7">
<ul>
<li>Possibly n<sup>log n</sup></li>
</ul>
<br><br>
</div>
<h3 id="looking-for-more-practice-">Looking for more practice?</h3>
<ul>
<li>Doing problems on other topics, and for any algorithm-writing problems, asking yourself what the runtime of your algorithm is.</li>
<li><a href="http://datastructur.es/sp17/">The 3 Asymptotics study guides on Week 7</a></li>
<li><a href="http://inst.eecs.berkeley.edu/~cs61b/fa16/">Week 7 and 8 of Fall 2016 Discussions</a></li>
<li><a href="http://datastructur.es/sp17/materials/review/MT2ReviewDocument.pdf">Antares and Kevin&#39;s big Midterm 2 worksheet</a></li>
</ul>
  </article>
    </div>
</template>

<script>
export default {
  name: 'runtimes',
  data() {
    return {
        showRuntime1: false,
        showRuntime2: false,
        showRuntime3: false,
        showRuntime4: false,
        showRuntime5: false,
        showRuntime6: false,
        showRuntime7: false,
    }
  },
}
</script>
