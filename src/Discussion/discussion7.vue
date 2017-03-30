<template>
    <div id="discussion7" class="md">
    <article>
    <h1 id="post-discussion-7-notes">Post-Discussion 7 Notes</h1>
<h2 id="problem-1-solutions-">Problem 1 (solutions)</h2>
<p>Detailed solutions for the True/False section. I use the terms order-of-growth / category / family interchangeably but they all mean the same thing:</p>
<ol>
<li><p>Is <code>f(n) = 20501</code> in O(1) ?</p>
<ul>
<li>Yes. f(n) runs in a constant number of times no matter what <code>n</code> is, so its order of growth is in the upper bound of O(1). We could also have said it was in Θ(1) or Ω(1) since it falls directly in the category of constant time.</li>
</ul>
</li>
<li><p>Is <code>f(n) = n^2 + n</code> in Ω(<code>0.000001n^3</code>) ?</p>
<ul>
<li>No. <code>g(n)</code> falls in the <code>n^3</code> category, which <code>f(n)</code> is faster than. Since Ω is a lower bound, a.k.a. covering functions that run in <code>n^3</code> or <em>slower</em>, this is not true. Note that O(n<sup>3</sup>) would have worked here.</li>
</ul>
</li>
<li><p>Is <code>f(n) = 2^(2n)+1000</code> in O(<code>4^n + n^100</code>) ?</p>
<ul>
<li>Yes. Simplying <code>f(n)</code> to <code>4^n + 1000</code>, and simplifying the big-O bound to O(<code>4^n</code>) since <code>4^n</code> is slower (and therefore dominates) <code>n^100</code>, we can rephrase this as: Is <code>4^n + 1000</code> in O(<code>4^n</code>)?</li>
</ul>
</li>
<li><p>Is <code>f(n) = log (n ^ 100) = 100 log n</code> in Θ(<code>n log n</code>) ?</p>
<ul>
<li>No. The question here is if <code>f(n)</code> is <em>exactly</em> (big Theta) in the family/category of functions that run in <code>n log n</code>. <code>f(n)</code> is in the <code>log n</code> family, which is faster than <code>n log n</code>. Note that O(<code>n log n</code>) would have made this true.</li>
</ul>
</li>
<li><p>Is <code>f(n) = n log n + 3^n + n</code> in Ω(<code>n^2 + n + log n</code>) ?</p>
<ul>
<li>Simplifying <code>f(n)</code> to <code>f(n) = 3^n</code> like in part 3,</li>
<li>Simplifying the Omega bound to Ω(<code>n^2</code>),</li>
<li>Yes. We see that <code>f(n)</code>, which is significantly slower than the family of <code>n^2</code>, is indeed lower bounded by <code>n^2</code>. Note that other bounds like O or Θ would not work here.</li>
</ul>
</li>
<li><p>Is <code>f(n) = n log n + n^2</code> in Θ(<code>log n + n^2</code>) ?</p>
<ul>
<li>Yes. After simplifying <code>f(n)</code> and the Θ bound, we see that <code>f(n)</code> falls exactly in the <code>n^2</code> family of functions.</li>
</ul>
</li>
<li><p>Is <code>n log n</code> in O(<code>(log n)^2</code>) ?</p>
<ul>
<li>No. It&#39;s easier to see this as &quot;Is <code>n log n</code> upper bounded by the family <code>(log n) * log n</code> ? We see that <code>n log n</code> is <em>slower</em> the the <code>(log n)^2</code> category, so no.</li>
</ul>
</li>
</ol>
<h2 id="problem-2-solutions-">Problem 2 (solutions)</h2>
<h3 id="first-part-">First part:</h3>
<pre><code><span class="hljs-keyword">int</span> j = <span class="hljs-number">0</span>;
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = N; i &gt; <span class="hljs-number">0</span>; i--) { <span class="hljs-comment">// Call this loop 1</span>
  <span class="hljs-keyword">for</span> (; j &lt;= M; j++) {       <span class="hljs-comment">// Call this loop 2</span>
    <span class="hljs-keyword">if</span> (ping(i, j) &gt; <span class="hljs-number">64</span>) {
      <span class="hljs-keyword">break</span>;
    }
  }
}
</code></pre><p>Take some time to notice why the result of <code>ping(i , j)</code> is the difference between the worst and best case</p>
<h4 id="worst-case-behavior-ping-condition-always-false-">Worst case behavior (ping condition always false):</h4>
<ol>
<li>Enter loop 1</li>
<li>Enter loop 2. Since the if condition doesn&#39;t return true, it will loop again</li>
<li>The if condition never returns true, so <strong>loop 2 runs for M operations</strong></li>
<li>Loop 1 finishes and loops. It tries to enter loop 2 which hits the <code>j &lt;= M</code> condition since <code>j</code> has already been incremented to <code>M</code> in the previous step. So loop 2 runs the condition check and exits.</li>
<li>Now, <strong>each</strong> loop 1 loop runs in <code>O(1)</code> now since it hits an immediately-terminating loop 2. So there are <code>N-1</code> more runs of loop 1 after step 3.</li>
</ol>
<p>Summing up this process:</p>
<ul>
<li><code>1 + M operations</code> for first entering loop 1, and then M loops of loop 2 (step 1,3)</li>
<li>+ <code>(N - 1)</code> for the loop 1 runs (step 4, 5)</li>
<li>= <code>M + N</code> which is bounded by O(<code>M + N</code>)</li>
</ul>
<h4 id="best-case-behavior-ping-condition-always-true-">Best case behavior (ping condition always true)</h4>
<ol>
<li>Enter loop 1, Enter loop 2, ~2 operations</li>
<li>The if condition is true and breaks loop 2, ~1 operation</li>
<li>Loop 1 runs its code again, which runs loop 2, step 2 happens again. This happens N times.</li>
</ol>
<p>So with the practical runtime being <code>N * constant number of operations</code>, we can bound this to Ω(N). </p>
<h3 id="second-part-">Second part:</h3>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-keyword">boolean</span> <span class="hljs-title">mystery</span><span class="hljs-params">(<span class="hljs-keyword">int</span>[] arr)</span> </span>{
  arr = mrpoolsort(arr); <span class="hljs-comment">// Lets say this sort runs in Theta(N log N)</span>
  <span class="hljs-keyword">int</span> N = arr.length;    <span class="hljs-comment">// Using the length of the array as our runtime variable</span>
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; N; i += <span class="hljs-number">1</span>) {    <span class="hljs-comment">// Call this loop 1</span>
    <span class="hljs-keyword">boolean</span> x = <span class="hljs-keyword">false</span>;
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> j = <span class="hljs-number">0</span>; j &lt; N; j += <span class="hljs-number">1</span>) {  <span class="hljs-comment">// Call this loop 2</span>
      <span class="hljs-keyword">if</span> (i != j &amp;&amp; arr[i] == arr[j]) {
        x = <span class="hljs-keyword">true</span>;
      }
    }
    <span class="hljs-keyword">if</span> (!x) {
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span>;
    }
  }
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">true</span>;
}
</code></pre><p>(What is mystery doing?) When doing runtime analysis, it helps to know what functions actually do. If we look inside loop 2, it&#39;s another for loop through the elements of the array but with variable <code>i</code> staying the same. The if condition excludes comparing the focused item <code>arr[i]</code> with itself, so functionally it&#39;s looking to see if any other array elements are the same value as <code>arr[i]</code>. The outer loop iterates <code>i</code> through every index, so putting this all together, <code>x</code> is set to true if the current value <code>arr[i]</code> has a duplicate. If <code>x</code> is never set to true for an <code>i</code> / a run of the outer loop, the function will return false. Therefore the function only loops through everything and returns true if every element has a duplicate. </p>
<h4 id="worst-case-behavior-never-return-early-">Worst case behavior (never return early):</h4>
<ul>
<li>if the <code>i != j &amp;&amp; arr[i] == arr[j]</code> condition returns true, <code>x</code> is set to <code>true</code> but loop 2 <em>keeps on running</em>. So loop 2 always runs in O(N) time. This is possible in the case that each element has a duplicate eg. <code>arr = {1, 2, 3, 1, 2 ,3}</code></li>
<li>This means the <code>if (!x)</code> condition will never be true and therefore loop 1 will never stop early. It will loop all the way until it hits the <code>i &lt; N</code> condition. So loop 1 runs N times.</li>
<li><code>N operations from loop 2 going from j = 0 to N</code> * <code>loop 1 loops N times</code> = <code>N^2</code>.</li>
<li>This runtime dominates the <code>N log N</code> runtime of the sort, so we can bound the overall runtime to O(<code>N^2</code>)</li>
</ul>
<h4 id="best-case-behavior-return-early-">Best case behavior (return early):</h4>
<ul>
<li>The <code>i != j &amp;&amp; arr[i] == arr[j]</code> <em>never</em> returns true. This takes <code>N</code> operations to happen since loop 2 will still go through all array elements.</li>
<li>Immediately after the <em>first</em> loop 2 finishes, <code>if (!x)</code> will be true and the function will stop. So the runtime of loop 1 and loop 2 is <code>N</code></li>
<li>However, we must consider the time to sort the array. Combining the runtimes, we get <code>N log N + N</code>, so <code>N log N</code> dominates the overall runtime.</li>
<li>= Ω(<code>N log N</code>)</li>
</ul>
<h3 id="problem-3-hint-">Problem 3 (hint)</h3>
<p>For the &quot;Can we do this faster?&quot; part, what the &quot;Does order matter here&quot; hint is implying is to note that the array is already sorted. So you may think about how you might traverse the array in a way that <em>moves towards</em> finding elements that sum to x.</p>
<h3 id="problem-4-hint-">Problem 4 (hint)</h3>
<p>Think about using ADTs for both questions</p>

  </article>
    </div>
</template>

<script>
export default {
  name: 'discussion7'
}
</script>