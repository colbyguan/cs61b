<template>
    <div id="week2" class="md">
    <article>
        <h1 id="week-2-lecture-takeaways">Week 2 Lecture Takeaways</h1>
        <h2 id="linked-lists">Linked Lists</h2>
        <ul>
        <li>Use <code>SLList</code> as a manager of <code>IntNodes</code> (adding, removing nodes) -- IntNode should be coded as an <em>nested static class</em><ul>
        <li>Benefits over just using <code>IntNodes</code>s: can quick-calculate <code>size()</code> of list, can use addFirst logic</li>
        </ul>
        </li>
        <li>Use a Sentinel node in SLList (a pointer to a placeholder IntNode) to handle empty SLLists</li>
        <li>DLList: We can speed up SLLists <code>add, get, remove</code> operations by adding a <code>prev</code> pointer to the Nodes.<ul>
        <li>Changing sentinel node: add a &quot;back&quot; sentinel node OR make it a circular list</li>
        </ul>
        </li>
        </ul>
        <h2 id="arrays">Arrays</h2>
        <ul>
        <li>Arrays are fixed length</li>
        <li>An array variable <code>int arr[]</code> is a container/pointer that will point to a set of cells out in memory (the actual array).</li>
        <li><code>arraycopy</code> to create copy all / parts of one array to another</li>
        <li><code>AList</code> concept: a resizing list using an internal array<ul>
        <li><code>removeLast()</code> - use the size variable to track what the index of the last element is, so just decrement size</li>
        <li>If array gets too full when adding element, copy all the elements over to a new array of ~double size. </li>
        </ul>
        </li>
        </ul>
        <h2 id="extras">Extras</h2>
        <ul>
        <li><code>private</code> means anything outside of the class <strong>cannot</strong> use it</li>
        <li>You can use <strong>generics</strong> to let your List nodes to hold different types</li>
        <li>Can use <code>null</code> to represent emptiness / a deleted element (but not for primitives)</li>
        <li>AList vs. DLList<ul>
        <li><code>addFirst</code> / <code>addLast</code> faster for <code>DLList</code></li>
        <li><code>get</code> for any position / index faster for <code>AList</code></li>
        </ul>
        </li>
        </ul>
    </article>
    </div>
</template>

<script>
export default {
  name: 'week2'
}
</script>