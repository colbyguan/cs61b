<template>
    <div id="discussion11" class="md">
        <article>
    <h1 id="regular-expressions">Regular Expressions</h1>
<p>Regex is super useful for checking that strings match a certain format, or for running advanced <code>Command+F</code> search queries or searching your computer for folders/files. The regex syntax detailed below is for Java. For the most part it is the same in other languages / environments like Javascript or the <code>grep</code> command that you can use in most terminals. Also, reh-gex or reh-jex? JIF or GIF?</p>
<ul>
<li><a href="http://www.regexplanet.com/advanced/java/index.html">Useful Java regex tool</a></li>
<li><a href="http://regexr.com/">Nice-looking general regex tool</a></li>
</ul>
<h2 id="symbols">Symbols</h2>
<table>
<thead>
<tr>
<th>symbol</th>
<th>meaning</th>
<th>notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>hi</td>
<td>exactly the character <code>h</code> followed by <code>i</code></td>
<td>-</td>
</tr>
<tr>
<td>.</td>
<td>one of any character</td>
<td>-</td>
</tr>
<tr>
<td>A&#124;B</td>
<td>A or B</td>
<td>usually used with parentheses</td>
</tr>
<tr>
<td>(AB)</td>
<td>group</td>
<td>usually used with modifiers</td>
</tr>
<tr>
<td>[a-z]</td>
<td>range for single character</td>
<td>-</td>
</tr>
<tr>
<td>[abcd]</td>
<td>possibilities for single character</td>
<td>expanded for (a&#124;b&#124;c&#124;d)</td>
</tr>
<tr>
<td><code>\.</code></td>
<td>the actual period character</td>
<td>eg. <code>\(\)</code> will match literal parentheses &quot;()&quot;</td>
</tr>
</tbody>
</table>
<h2 id="modifiers">Modifiers</h2>
<p>These are used right after one of the symbols above for extra functionality. &quot;Previous&quot; here means whatever expression is right before the modifier.</p>
<table>
<thead>
<tr>
<th>modifier</th>
<th>meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>{3}</td>
<td>3 occurrences of previous</td>
</tr>
<tr>
<td>{2,4}</td>
<td>2, 3, or 4 occurrences of previous (2 to 4)</td>
</tr>
<tr>
<td>*</td>
<td>0 or more occurrences of previous</td>
</tr>
<tr>
<td>+</td>
<td>1 or more occurrences of previous</td>
</tr>
</tbody>
</table>
<h2 id="some-combinations">Some Combinations</h2>
<ul>
<li><p><code>.*</code> - 0 or more of any characters (not necessarily the same character)</p>
<ul>
<li>eg. <code>.*add.*</code> will match <code>asdfadd002</code> and <code>add</code> but not match <code>ad</code> </li>
<li>eg. <code>add.*ToHeap\(\)</code> will match <code>addNumberToHeap()</code> and <code>addToHeap()</code> but not <code>addoHeap</code> or <code>adToHeap</code></li>
</ul>
</li>
<li><p><code>[a-zA-Z0-9_-]{3,16}</code> - any letters, numbers, an underscore, or a hyphen, 3 to 16 times</p>
<ul>
<li>matches <code>cs61b</code> and <code>colby</code> and <code>hello-world</code></li>
<li>won&#39;t match <code>cs61b@berkeley</code> or <code>hi</code></li>
</ul>
</li>
</ul>
<h2 id="important-things-to-note">Important things to note</h2>
<ul>
<li>Spaces matter. If you write a space in a regex, it will match the space character.<ul>
<li>eg. <code>[a-z A-Z]</code> means match a letter or a space.</li>
<li>eg. <code>left *right</code> will match &quot;left&quot; then any number of spaces then &quot;right&quot;. It will also match &quot;leftright&quot;</li>
</ul>
</li>
<li>In Java: if you want to escape special characters like a period, in a Java string literal you must write <code>String regex = &quot;\\.&quot;</code> rather than just <code>String regex = &quot;\.&quot;</code>.<ul>
<li>Extra details: This is so that the literal <code>\</code> character is kept in the regex string -- with <code>\.</code>, Java just thinks &quot;special period&quot;. With <code>\\.</code> Java will think &quot;an escaped backlash aka a literal backslash, then a period&quot;.</li>
</ul>
</li>
<li>Entire line matching vs. substring matching<ul>
<li>Keep in mind whether you&#39;re trying to match an <em>entire line</em> or just a <em>substring</em> in a line</li>
<li>In Java:<ul>
<li><code>someString.matches(someRegexString)</code>, the <code>.matches</code> method does full line matches</li>
<li>The <code>Pattern</code> class used with the <code>Matcher</code> class will do substring matches</li>
</ul>
</li>
<li>Example: if I have the three lines:<pre><code><span class="hljs-attribute">moon</span>
xxmoon123
mooonhimoon
</code></pre></li>
<li><code>m.*n</code> in full line matching line 1 but not match line 2 or 3</li>
<li><code>m.*n</code> in substring matching will match every line</li>
<li><code>.*m.*n.*</code> in full line matching will match every line</li>
</ul>
</li>
</ul>
  </article>
    </div>
</template>

<script>
export default {
  name: 'discussion11'
}
</script>
