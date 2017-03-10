<template>
    <div id="week7" class="bordered-code md">
        <article>
    <h1 id="understanding-amortized-analysis">Understanding Amortized Analysis</h1>
<p>Make sure you&#39;ve gone through the <a href="https://docs.google.com/presentation/d/1_887tQpOVojoapHZxE3VG_3LVFAB7ePoeEY9JPl0ZgA/pub?start=false&amp;loop=false&amp;delayms=3000">lecture slides</a> up to at least Slide 18 before reading through this.</p>
<h2 id="explanation-1-quick-visual-intuition">Explanation 1 - Quick visual intuition</h2>
<p>Consider the graph below:</p>
<ul>
<li>Assume we are starting with a <code>new ArrayList(4)</code> so the initial capacity of the internal array is 4</li>
<li>Assume ArrayList doubles the size of its internal array on an <code>add()</code> that causes <code>size == capacity</code>.</li>
<li>We are plotting cumulative cost versus number of insertions N. <ul>
<li>eg. at N=3 the cumulative cost is 3 because calling <code>add(1)</code> three times will be three operations, each of cost 1</li>
</ul>
</li>
</ul>
<p><img src="http://i.imgur.com/NTAVeWx.png" alt=""></p>
<p>Let&#39;s inspect some random Ns and their cumulative costs:</p>
<ul>
<li>N = 7, cost = <code>(cumulative cost at N=4) + 3 more inserts</code> = 12 + 3 = <strong>15</strong><ul>
<li>So the cost is around 2*N, so around 2-cost per insert.</li>
</ul>
</li>
<li>N = 15, cost = 32 + 7 = <strong>39</strong><ul>
<li>So the cost is around 2.5*N, so around 2.5-cost per insert.</li>
</ul>
</li>
<li>N = 20, cost = 72 + 4 = <strong>76</strong><ul>
<li>So the cost is around 3.8*N, so around 3.8-cost per insert.</li>
</ul>
</li>
<li>N = 30, cost = 72 + 14 = <strong>86</strong><ul>
<li>So the cost is around 2.8*N, so around 2.8-cost per insert.</li>
</ul>
</li>
<li>Even if we jump to N=1000 using the script below, the cost = <strong>3040</strong><ul>
<li>So the cost is around 3*N, so around 3-cost per insert.</li>
</ul>
</li>
</ul>
<p>Notice that the cost of N <code>add()</code>s is always: <code>(some constant not scaling with N) * N</code>. Each time we average the cost across the N adds, we always end up with some constant as the cost of a single insert. This non-rigorously shows us that the amortized runtime of a single <code>add()</code> is in Θ(1)</p>
<p>Python3 script for checking math:</p>
<pre><code>N = <span class="hljs-number">30</span>
<span class="hljs-built_in">size</span> = <span class="hljs-number">4</span>

ops = <span class="hljs-number">0</span>
<span class="hljs-keyword">for</span> <span class="hljs-built_in">i</span> in range(<span class="hljs-number">1</span>,N+<span class="hljs-number">1</span>):
  <span class="hljs-keyword">if</span> <span class="hljs-built_in">i</span> == <span class="hljs-built_in">size</span>:
    ops += <span class="hljs-built_in">size</span> * <span class="hljs-number">2</span>
    <span class="hljs-built_in">size</span> *=<span class="hljs-number">2</span>
  ops += <span class="hljs-number">1</span>
  print(<span class="hljs-built_in">i</span>, ops)
</code></pre><h2 id="explanation-2-withdraw-deposit-idea-from-lecture-metaphor">Explanation 2 - Withdraw/Deposit Idea from Lecture + metaphor</h2>
<p>Let&#39;s use the size-4 <code>ArrayList</code> from above again, but add a couple things:</p>
<ul>
<li>It now costs money to use <code>ArrayList.add()</code>. You are charged 5 cents for one call to <code>add()</code>.</li>
<li>The <code>ArrayList</code> uses the money as cost for internal operations (think time = money). So the machine uses 1 cent for each write and 1 cent for each copy.<ul>
<li>eg. So if we call <code>add(1)</code> for the first time, we would pay 5 cents, but the machine would only use 1 cent to perform the 1 write</li>
<li>eg. If the machine needs to resize the array to 8 cells and do an <code>add()</code>, it would use 9 cents.</li>
</ul>
</li>
<li>Any money the machine does not use for <code>add()</code>s is stored for later use, like a bank account balance.<ul>
<li>eg. So if we wanted to do <code>add(1);add(2);add(3)</code>, we would have to pay a total of 15 cents, but the machine would only use 3 cents to execute the <code>add()</code>s and keep the remaining 12.</li>
</ul>
</li>
<li>Note that the machine / <code>ArrayList.add()</code> won&#39;t work if it ever has a negative balance.</li>
</ul>
<p>We can construct a table to keep track of how this <code>ArrayList</code> machine would run. Here is a shorter version to check understanding:</p>
<table>
<thead>
<tr>
<th>Nth add():</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
</tr>
</thead>
<tbody>
<tr>
<td>¢ paid by us:</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>¢ the machine uses:</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>8+1=9</td>
</tr>
<tr>
<td>¢ left over in machine:</td>
<td>4</td>
<td>8</td>
<td>12</td>
<td>8</td>
</tr>
</tbody>
</table>
<p>The 4th row in the table tracks money left in the machine after we pay the charge and after the machine performs the operations. <em>The following bullets points are for understanding the table:</em></p>
<ul>
<li>Consider the 2nd <code>add()</code>. Before this happens, the machine has 4¢ stored. We paid 5¢ which brings its total money to 9¢. The machine then needs to do one write, which costs one ¢. So at the end of the 2nd <code>add()</code>, the machine still has 8¢</li>
<li>Consider the 4th <code>add()</code>, which causes a resize. The machine has 12¢ in its balance . This is increased to 17¢ after we pay for this <code>add()</code>. The internal cost of this one <code>add()</code> will be:<ul>
<li><code>(cost of copying 3 filled cells + 5 empty cells) + (cost of 1 write)</code> = 9 operations = 9¢.</li>
<li>So the machine is left with 17-9 = 8¢</li>
</ul>
</li>
</ul>
<p>Longer version of the table for analysis (very similar to lecture) -- note the balance of the machine after <code>add()</code>s that cause resizing:</p>
<table>
<thead>
<tr>
<th>Nth add():</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
<th>11</th>
<th>12</th>
<th>13</th>
<th>14</th>
<th>15</th>
<th>16</th>
<th>17</th>
</tr>
</thead>
<tbody>
<tr>
<td>¢ paid by us:</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>¢ the machine uses:</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>9</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>17</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>33</td>
<td>1</td>
</tr>
<tr>
<td>¢ left over in machine:</td>
<td>4</td>
<td>8</td>
<td>12</td>
<td>8</td>
<td>12</td>
<td>16</td>
<td>20</td>
<td>8</td>
<td>12</td>
<td>16</td>
<td>20</td>
<td>24</td>
<td>28</td>
<td>32</td>
<td>36</td>
<td>8</td>
<td>12</td>
</tr>
</tbody>
</table>
<p>Let&#39;s bring this back to amortized analysis, with the idea that number of cents are parallel to number of operations:</p>
<ol>
<li>We notice that the total ¢ in the machine never goes below 0 -- the machine always has enough saved-up operations to run <code>add()</code>.</li>
<li>So 5¢-per-add is actually an over-estimation of how much we need to spend to keep calling <code>add()</code><ul>
<li>a.k.a. an over-estimation of how much the machine should charge to have enough money to always run <code>add()</code>.</li>
</ul>
</li>
<li>So then 5¢ is effectively <strong>an upper-bound on the actual cost</strong> (¢ the machine uses) <strong>of each <code>add()</code></strong>.</li>
<li>Converting this to asymptotic notation, the cost of <code>add()</code> is therefore <code>O(5)</code> which is on the order of <code>O(1)</code>.</li>
<li>So here is the key parallel: <strong>The amount charged for each add() call is the amortized cost for that add()</strong>. Because the amount charged is some non-growing constant, the amortized cost / runtime is constant time.</li>
</ol>
<h2 id="beyond-arraylist-extra-for-experts-">Beyond ArrayList (Extra for Experts)</h2>
<p>Since <code>ArrayList.add()</code> is the classic data structure operation to explain amortized analysis, you may be looking for another data structure + operation to analyze. Here is another one thanks to notes from Princeton&#39; CS department:</p>
<p><em>The data structure</em>: a <strong>stack</strong> of items which are pushed / popped onto.</p>
<p><em>The operation (pseudocode)</em>:</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">popSomePushOne</span><span class="hljs-params">(<span class="hljs-keyword">int</span> n)</span> </span>{
  <span class="hljs-comment">// Precondition: at least n items are already on the stack</span>
  pop n items from the <span class="hljs-built_in">stack</span>
  push <span class="hljs-number">1</span> item onto the <span class="hljs-built_in">stack</span>
}
</code></pre><p>How would you do amortized analysis on this function?</p>
<ul>
<li>Hint: Think similar to explanation 2</li>
<li>For the solution, look in the &quot;Example&quot; sections of &quot;The account method&quot; or &quot;The potential method&quot; of the Princeton notes linked below. </li>
</ul>
<h2 id="sources-">Sources:</h2>
<ul>
<li><a href="https://docs.google.com/presentation/d/1_887tQpOVojoapHZxE3VG_3LVFAB7ePoeEY9JPl0ZgA/pub?start=false&amp;loop=false&amp;delayms=3000">CS 61B Asymptotics 3 Lecture</a></li>
<li><a href="https://www.cs.princeton.edu/~fiebrink/423/AmortizedAnalysisExplained_Fiebrink.pdf">&quot;Amortized Analysis Explained&quot;, notes from Princeton CS</a></li>
</ul>

  </article>
    </div>
</template>

<script>
export default {
  name: 'week7'
}
</script>