<template>
    <div id="regex" class="md">
        <article>
        <h1 id="regex">Regex</h1>
<p><a href="http://www.regexplanet.com/advanced/java/index.html">This website</a> uses Java regex syntax if you want to check other solutions </p>
<h2 id="1-coordinates">1. Coordinates</h2>
<p>Write a regex that will full-line match x-y coordinates in the general form of <code>(x, y)</code>.</p>
<p>Some example matches:</p>
<ul>
<li><code>(333, 2)</code></li>
<li><code>(     1,    4 )</code></li>
<li><code>(0,0)</code></li>
</ul>
<p>The regex shouldn&#39;t match:</p>
<ul>
<li><code>(a, 23)</code></li>
<li><code>(4, )</code></li>
<li><code>(12, 12, 12)</code></li>
</ul>
<br>
<button v-on:click="toggleRegex1" class="button-soln button-primary">toggle solution</button>
<br><br>
<div v-if="showRegex1">
<p>A valid regex: <code>\( *[0-9]+ *, *[0-9]+ *\)</code>. Things to note:</p>
<ul>
<li>It must handle any number of spaces between characters</li>
<li>Escape the parentheses so they match the paren character</li>
</ul>
</div>
<br><br>
<h2 id="2-macs">2. Macs</h2>
<p>Write a regex that will full-line match certain products from Apple&#39;s Mac product line. Assume all characters will be lowercase:</p>
<ul>
<li><code>macbook</code></li>
<li><code>macbook pro</code></li>
<li><code>macbook air</code></li>
<li><code>mac pro</code></li>
<li><code>mac mini</code></li>
</ul>
<br>
<button v-on:click="toggleRegex2" class="button-soln button-primary">toggle solution</button>
<div v-if="showRegex2">
<p>A valid regex: <code>mac((book(| pro| air))| (pro|mini))</code>. The problem can be broken down like so:</p>
<ul>
<li><code>mac</code> must come first</li>
<li>Then either a space, or <code>book</code> comes next</li>
<li>If <code>book</code> comes next, then either nothing or a space and <code>pro</code> or a space and <code>air</code> comes next</li>
<li>If a space came after <code>mac</code>, then either <code>pro</code> or <code>mini</code> should come next</li>
</ul>
<p>So the regex can be broken down like so:</p>
<ul>
<li><code>mac</code> and then either <code>(book(| pro| air))</code> OR a space followed by <code>(pro|mini)</code></li>
<li><code>(book(| pro| air))</code> means <code>book</code> followed by nothing OR &quot; pro&quot; OR &quot; air&quot; -- note the spaces after the <code>|</code>. This lets us match any of the <code>macbook</code> or <code>macbook X</code> products. </li>
<li>The space and then <code>(pro|mini)</code> then allows us to match <code>mac pro</code> or <code>mac mini</code></li>
</ul>
</div>
    </article>
    </div>
</template>

<script>
export default {
  name: 'regex',
  data() {
    return {
        showRegex1: false,
        showRegex2: false,
    }
  },
  methods: {
    toggleRegex1: function() {
        this.showRegex1 = !this.showRegex1;
    },
    toggleRegex2: function() {
        this.showRegex2 = !this.showRegex2;
    },
  }
}
</script>
