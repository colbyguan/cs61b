<template>
    <div id="discussion3" class="md">
    <article>
        <h1 id="week-3-post-discussion-notes">Week 3 Post-discussion Notes</h1>
    <h2 id="problem-1-2-reverse-hints">Problem 1.2: reverse() hints</h2>
    <p>Here is the hint I used for the iterative (while loop) version:<br><em>Right click -&gt; Open image in new tab, for a larger version</em> </p>
    <p><img src="http://i.imgur.com/CMSnj90.jpg" height="600"></p>
    <p>Here is a hint for the recursive version. Note that you&#39;ll need a helper method that looks something like:</p>
    <pre><code><span class="hljs-function"><span class="hljs-keyword">private</span> IntNode <span class="hljs-title">reverseHelper</span><span class="hljs-params">(IntNode front)</span> </span>{
        <span class="hljs-comment">// recursive stuff here?</span>
    }
    </code></pre><p>Here&#39;s set of hints that may help you come up with your base and recursive cases: </p>
    <p><img src="http://i.imgur.com/fSf5xXA.jpg" height="600"> </p>
    <h2 id="hints-for-other-problems-spoiler-alert-">Hints for other problems (spoiler alert)</h2>
    <h3 id="2-1-array-insert">2.1: Array insert</h3>
    <p>Remember this method?</p>
    <pre><code>System.arraycopy(<span class="hljs-built_in">source</span>Array,
                     startIndexForSource,
                     destinationArray,
                     startIndexForDest,
                     lengthOfSourceToCopyOver)
    </code></pre><h3 id="2-2-array-reverse">2.2: Array reverse</h3>
    <p>See if you can do this problem using a loop that <strong>does not</strong> go through every index of the array. Your code probably will <em>access</em> every element in the array, but your loop does not need to hit all their indices.</p>
    <h2 id="generics-extra-notes">Generics - extra notes</h2>
    <p><em>Note: this will be discussed a lot more in the Week 5 Generics + Autoboxing lecture</em><br><em>This is a quick preview to address the question in discussion: Can we initialize <code>Type item</code> to null?</em></p>
    <p>We used generics like so:</p>
    <pre><code><span class="hljs-comment">// A generic version of SLList</span>
    <span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">GenericLinkedList</span>&lt;<span class="hljs-title">Type</span>&gt; </span>{
        GenericNode sentinel;
        ...
        <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">GenericNode</span> </span>{
            <span class="hljs-keyword">public</span> Type item;
            <span class="hljs-keyword">public</span> IntNode next;
        }
    }
    </code></pre><p>where <code>Type</code> will be substituted with whatever is passed in between the <code>&lt; ... &gt;</code> brackets in a declaration like so:</p>
    <pre><code><span class="hljs-comment">// this list will hold doubles</span>
    GenericLinkedList<span class="hljs-params">&lt;Double&gt;</span> doubles = new GenericLinkedList<span class="hljs-params">&lt;&gt;</span>();
    <span class="hljs-comment">// this list will hold cars</span>
    GenericLinkedList<span class="hljs-params">&lt;Car&gt;</span> cars = new GenericLinkedList<span class="hljs-params">&lt;&gt;</span>();
    </code></pre><p>You&#39;ll notice that the type we pass in for the double list is actually a <strong>reference type</strong> <code>Double</code> (as opposed to primitive type). It is required that you pass in a class to the generic brackets, so you <strong>cannot</strong> do something like this:</p>
    <pre><code><span class="hljs-comment">// will not compile</span>
    GenericLinkedList&lt;<span class="hljs-keyword">int</span>&gt; cars = <span class="hljs-keyword">new</span> GenericLinkedList&lt;&gt;();
    </code></pre><p>Java has a class version of every primitive, eg. <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/Double.html">Double</a>, <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html">Integer</a>. These are mostly used for utility methods like converting numbers to/from Strings, and can be used like so:</p>
    <pre><code><span class="hljs-keyword">Double</span> someDecimal = <span class="hljs-keyword">new</span> <span class="hljs-keyword">Double</span>(<span class="hljs-number">3.14</span>)
    <span class="hljs-comment">// this is the same as:</span>
    <span class="hljs-keyword">double</span> someDecimal = <span class="hljs-number">3.14</span>;
    <span class="hljs-comment">// Example where the class version of double can be useful:</span>
    String s = <span class="hljs-string">"3.14159"</span>
    <span class="hljs-keyword">Double</span> someDecimal = <span class="hljs-keyword">new</span> <span class="hljs-keyword">Double</span>(s);
    <span class="hljs-comment">// the constructor converted from String to Double for us, yay!</span>
    </code></pre><p>So, going back to the <code>GenericNode</code> class above, since any variables of type <code>Type</code> are <em>always going to be pointers</em>, we can indeed initialize <code>item</code> to <code>null</code> in our constructor for <code>GenericLinkedList</code>.</p>
    <p><strong>Extra note</strong>: Java automatically converts between <code>Double</code> and <code>double</code> for us. So we can do things like:</p>
    <pre><code><span class="hljs-symbol">Double</span> <span class="hljs-built_in">d1</span> = new Double(<span class="hljs-number">3</span>.<span class="hljs-number">0</span>)<span class="hljs-comment">;</span>
    <span class="hljs-symbol">double</span> <span class="hljs-built_in">d2</span> = <span class="hljs-number">4</span>.<span class="hljs-number">0</span><span class="hljs-comment">;</span>
    // This works just fine <span class="hljs-keyword">and </span><span class="hljs-meta">sets</span> <span class="hljs-built_in">d3</span> = <span class="hljs-number">7</span>
    <span class="hljs-symbol">double</span> <span class="hljs-built_in">d3</span> = <span class="hljs-built_in">d1</span> + <span class="hljs-built_in">d2</span><span class="hljs-comment">;</span>
    </code></pre>
    </article>
    </div>
</template>

<script>
export default {
  name: 'discussion3'
}
</script>