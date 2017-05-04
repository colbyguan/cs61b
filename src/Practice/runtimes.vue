<template>
    <div id="runtimes" class="md">
<article>
    <h1 id="final-review-asymptotic-analysis">Final Review: Asymptotic Analysis</h1>
<h2 id="total-recall">Total Recall</h2>
<p>Choose &Omega;, &Theta;, or O notation for the following questions:</p>
<ol>
<li>Which is a good notation for the worst case of a function whose worse case runs the same way every time?</li>
<li>Which is a good notation for the average case of a function that has a 50% chance of running with a slow runtime bound and a 50% chance of running with a fast runtime bound?</li>
<li>Which is a good notation describing the bound on the runtime of comparison-based sorts that we went over in Lecture 35?</li>
</ol>
<p>Give runtimes in &Theta; notation on the variable N for the following:</p>
<ol>
<li>Worst case for <code>put()</code> in a HashMap that already has N items</li>
<li>Worst case for inserting N items into an empty Binary Search Tree</li>
<li>Worst case for getting the list of neighbors of a vertex in a graph represented by an adjacency list with N vertices</li>
</ol>
<h2 id="calculator-life">Calculator life</h2>
<p>Input: two linked lists representing two numbers like so:</p>
<pre><code><span class="hljs-number">287</span>: <span class="hljs-number">7</span> -&gt; <span class="hljs-number">8</span> -&gt; <span class="hljs-number">2</span>
<span class="hljs-number">51</span>: <span class="hljs-number">1</span> -&gt; <span class="hljs-number">5</span>
</code></pre><p>Note that the linked lists go from the ones place to the tenths place, and so on.  </p>
<ul>
<li>Describe or write out an algorithm that outputs the sum of the two numbers as a linked list of the same form.</li>
<li>Given that the length of the first number is M and the length of the second is N, what should the runtime of this algorithm be?</li>
</ul>
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
</code></pre><h2 id="outsourced-problems">Outsourced problems</h2>
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
<h2 id="i-m-not-sure-about-the-answer-to-this-one-yet">I&#39;m not sure about the answer to this one yet</h2>
<p>But I&#39;d love to discuss ideas with anyone</p>
<pre><code><span class="hljs-keyword">static</span> void <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(int n)</span> {</span>
  <span class="hljs-keyword">if</span> (n &lt; <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">return</span><span class="hljs-comment">;</span>
  }
  <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(n - <span class="hljs-number">1</span>)</span>;</span>
  <span class="hljs-function"><span class="hljs-keyword">func</span><span class="hljs-params">(n / <span class="hljs-number">2</span>)</span>;</span>
}
</code></pre><h3 id="looking-for-more-practice-">Looking for more practice?</h3>
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
}
</script>
