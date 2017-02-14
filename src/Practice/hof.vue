<template>
    <div id="hof" class="md">
    <article>
        <h1 id="higher-order-functions">Higher-order functions</h1>
<h2 id="1-warmup">1. Warmup</h2>
<p>Given the following interface and classes, can you fill in the main method of <code>ConverterMain</code> so that it prints the conversion of 5 US dollars to Canadian dollars in three lines?:</p>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">interface</span> <span class="hljs-title">UnitConverter</span> {
  <span class="hljs-function"><span class="hljs-keyword">double</span> <span class="hljs-title">convert</span>(<span class="hljs-params"><span class="hljs-keyword">double</span> x</span>)</span>;
}
</code></pre><pre><code><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">USDToEuroConverter</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">UnitConverter</span> </span>{
  <span class="hljs-meta">@Override</span>
  <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">double</span> <span class="hljs-title">convert</span><span class="hljs-params">(<span class="hljs-keyword">double</span> x)</span> </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-number">0.94</span> * x;
  }
}
</code></pre><pre><code><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">EuroToCanadianConverter</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">UnitConverter</span> </span>{
    <span class="hljs-meta">@Override</span>
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">double</span> <span class="hljs-title">convert</span><span class="hljs-params">(<span class="hljs-keyword">double</span> x)</span> </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-number">1.39</span> * x;
    }
}
</code></pre><pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">ConverterMain</span> {
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <div v-if="showHOF1">        UnitConverter converter1 = <span class="hljs-keyword">new</span> DollarToEuroConverter();
        UnitConverter converter2 = <span class="hljs-keyword">new</span> EuroToCanadianConverter();

        System.<span class="hljs-keyword">out</span>.println(converter2.convert(converter1.convert(<span class="hljs-number">5.0</span>)));</div><div v-else>        ______________________________ ;
        ______________________________ ;
        ______________________________ ;</div>
    }
}
</code></pre>
<button v-on:click="toggleHOF1" class="button-soln button-primary">toggle solution</button>
<br><br>

<h2 id="2-multiple-applications">2. Multiple Applications</h2>
<p>Write a higher-order function that takes in an <code>IntUnaryFunction</code> and applies it to the input <code>n</code> times repeatedly:</p>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">interface</span> <span class="hljs-title">IntUnaryFunction</span> {
    <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">apply</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> x</span>)</span>;
}
</code></pre><pre><code>...

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span> <span class="hljs-title">apply_n</span> <span class="hljs-params">(IntUnaryFunction f, <span class="hljs-keyword">int</span> n, <span class="hljs-keyword">int</span> input)</span> </span>{
<div v-if="showHOF2">
<span class="hljs-keyword">    for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; n; i++) {
        <span class="hljs-keyword">input</span> = f<span class="hljs-variable">.apply</span>(<span class="hljs-keyword">input</span>);
    }
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">input</span></div>
}
...
</code></pre>
<button v-on:click="toggleHOF2" class="button-soln button-primary">toggle solution</button>
<br><br>
<h2 id="3-mystery">3. Mystery</h2>
<p>Describe what is returned by <code>mysteryHoF</code>. <code>Set</code> is an interface that contains <code>add()</code> and <code>contains()</code> methods that do what they sound like; <code>HashSet</code> is just a class that implements the <code>Set</code> interface.</p>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">interface</span> <span class="hljs-title">FunctionWrapper</span> {
    <span class="hljs-function">boolean <span class="hljs-title">apply</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> x, Set <span class="hljs-keyword">set</span></span>)</span>;
}
</code></pre><pre><code><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SomeFunctionWrapper</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">FunctionWrapper</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">boolean</span> <span class="hljs-title">apply</span><span class="hljs-params">(<span class="hljs-keyword">int</span> x, Set set)</span> </span>{
        <span class="hljs-function"><span class="hljs-keyword">return</span> set.<span class="hljs-title">contains</span><span class="hljs-params">(x)</span></span>;
    }
}
</code></pre><pre><code>...

<span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> Deque mysteryHoF (Deque input, SomeFunctionWrapper f) {
    Set&lt;Integer&gt; <span class="hljs-built_in">set</span> = <span class="hljs-keyword">new</span> HashSet&lt;&gt;();
    Deque output = <span class="hljs-keyword">new</span> ArrayDeque();

    <span class="hljs-keyword">for</span> (<span class="hljs-built_in">int</span> i = <span class="hljs-number">0</span>; i &lt; input.<span class="hljs-built_in">size</span>(); i++) {
        <span class="hljs-built_in">int</span> cur = input.<span class="hljs-built_in">get</span>(i);

        <span class="hljs-keyword">if</span> (f.apply(cur, <span class="hljs-built_in">set</span>)) {
            output.addBack(cur);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">set</span>.<span class="hljs-built_in">add</span>(cur)
        }
    }
    <span class="hljs-keyword">return</span> output
}

...
</code></pre>
<div v-if="showHOF3">
<p><strong><code>mysteryHof</code> returns a Deque of the duplicates / items that appear more than once in <code>input</code>. </strong>  </p>
<p><strong> Another answer: <code>mysteryHoF</code> returns a <code>Deque</code> which is effectively <code>input</code> but with the first occurrence of every value removed</strong></p>
</div>
<button v-on:click="toggleHOF3" class="button-soln button-primary">toggle solution</button>
<br><br>

<h2 id="4-code-reduction">4. Code Reduction</h2>
<p>Write <strong>overloaded</strong> <code>reduce</code> methods that take an <code>IntBinaryFunction</code> (different!) as well an array of <code>ints</code>. <code>reduce</code> should cumulatively apply the function over the elements of the array by using the binary function (recall Python&#39;s <code>reduce</code> from CS 61A?).</p>
<p><strong>Example:</strong> (see below for code example) If we had an IntBinaryFunction <code>Adder</code> where its <code>apply(x, y)</code> method returned x + y, then calling <code>reduce</code> with an instance of <code>Adder</code> and the array [1, 2, 3, 4] should return:
10 = (((1 + 2) + 3) + 4))</p>
<p>The <code>reduce</code> method with three arguments should use the <code>start</code> variable as the integer to start reducing on eg. <code>reduce({1, 2, 3}, new Adder(), 10)</code> would return 16. <strong>See if you can repeat as little code as possible.</strong></p>
<pre><code><span class="hljs-keyword">public</span> <span class="hljs-keyword">interface</span> <span class="hljs-title">IntBinaryFunction</span> {
    <span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">apply</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> x, <span class="hljs-keyword">int</span> y</span>)</span>;
}
</code></pre><p>Fill in:</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span> <span class="hljs-title">reduce</span><span class="hljs-params">(IntBinaryFunction f, <span class="hljs-keyword">int</span>[] arr, <span class="hljs-keyword">int</span> start)</span> </span>{
<div v-if="showHOF4">
    <span class="hljs-comment">// This version is ok</span>
    arr[<span class="hljs-number">0</span>] = f.apply(arr[<span class="hljs-number">0</span>], start);
    <span class="hljs-function"><span class="hljs-keyword">return</span> <span class="hljs-title">reduce</span><span class="hljs-params">(f, arr)</span></span>;

    <span class="hljs-comment">// ALTERNATE SOLUTION: This version preserves what the first element of arr[] used to be!</span>
    <span class="hljs-keyword">int</span> oldFirstElement = arr[<span class="hljs-number">0</span>];
    arr[<span class="hljs-number">0</span>] = f.apply(arr[<span class="hljs-number">0</span>], start);
    <span class="hljs-keyword">int</span> result = reduce(f, arr);
    arr[<span class="hljs-number">0</span>] = oldFirstElement;
    <span class="hljs-keyword">return</span> result;
</div>
}

<span class="hljs-function"><span class="hljs-keyword">static</span> <span class="hljs-keyword">int</span> <span class="hljs-title">reduce</span><span class="hljs-params">(IntBinaryFunction f, <span class="hljs-keyword">int</span>[] arr)</span> </span>{
<div v-if="showHOF4">
    <span class="hljs-keyword">int</span> cur = arr[<span class="hljs-number">0</span>];

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">1</span>; i &lt; arr.length; i++) {
        cur = f.apply(cur, arr[i]);
    }
    <span class="hljs-keyword">return</span> cur;
</div>

}
</code></pre>
<button v-on:click="toggleHOF4" class="button-soln button-primary">toggle solution</button>
<br><br>

<p>Example usage:</p>
<pre><code><span class="hljs-keyword">static</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Adder</span> <span class="hljs-title">implements</span> <span class="hljs-title">IntBinaryFunction</span> {
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">apply</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> x, <span class="hljs-keyword">int</span> y</span>) </span>{
        <span class="hljs-keyword">return</span> x + y;
    }
}

<span class="hljs-keyword">static</span> <span class="hljs-keyword">class</span> <span class="hljs-title">Multiplier</span> <span class="hljs-title">implements</span> <span class="hljs-title">IntBinaryFunction</span> {
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">int</span> <span class="hljs-title">apply</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> x, <span class="hljs-keyword">int</span> y</span>) </span>{
        <span class="hljs-keyword">return</span> x * y;
    }
}

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span>(<span class="hljs-params">String[] args</span>) </span>{
    <span class="hljs-keyword">int</span>[] arr = {<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>};
    <span class="hljs-keyword">int</span>[] arr2 = {<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>};

    IntBinaryFunction adder = <span class="hljs-keyword">new</span> Adder();
    IntBinaryFunction multiplier = <span class="hljs-keyword">new</span> Multiplier();

    System.<span class="hljs-keyword">out</span>.println(reduce(adder, arr));
    <span class="hljs-comment">// Prints 9</span>
    System.<span class="hljs-keyword">out</span>.println(reduce(adder, arr, <span class="hljs-number">1</span>));
    <span class="hljs-comment">// Prints 10</span>

    System.<span class="hljs-keyword">out</span>.println(reduce(multiplier, arr2));
    <span class="hljs-comment">// Prints 24</span>
    System.<span class="hljs-keyword">out</span>.println(reduce(multiplier, arr2, <span class="hljs-number">0</span>));
    <span class="hljs-comment">// Prints 0</span>
}
</code></pre>
    </article>
    </div>
</template>

<script>
export default {
  name: 'hof',
  data() {
    return {
        showHOF1: false,
        showHOF2: false,
        showHOF3: false,
        showHOF4: false
    }
  },
  methods: {
    toggleHOF1: function() {
        this.showHOF1 = !this.showHOF1;
    },
    toggleHOF2: function() {
        this.showHOF2 = !this.showHOF2;
    },
    toggleHOF3: function() {
        this.showHOF3 = !this.showHOF3;
    },
    toggleHOF4: function() {
        this.showHOF4 = !this.showHOF4;
    }
  }
}
</script>