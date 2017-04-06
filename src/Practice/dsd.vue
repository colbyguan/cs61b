<template>
    <div id="dsd" class="md">
    <article>
    <h1 id="data-structure-design">Data Structure Design</h1>
<p>A few tips (that also apply to algorithm design):</p>
<ol>
<li><p>First see if you can look at the problem as a black box, as in focus on:</p>
<ul>
<li>What should the structure&#39;s <strong>inputs</strong> be? What is being or should be fed into the structure? eg. a Map&#39;s input is <code>keys</code> associated with <code>values</code></li>
<li>What should its <strong>outputs</strong> be? What information should my solution structure return? eg. a Map&#39;s output is a <code>value</code> given a <code>key</code></li>
<li>Depending on the problem, see if inputting and / or outputting should be optimized. eg. for a Map, ideally both <code>put</code> and <code>get</code> are as fast as possible</li>
</ul>
</li>
<li><p>See if you can break the problem into smaller problems. This may look like:</p>
<ul>
<li>Actually listing a step 1, step 2, step 3 of what the solution needs to do. For example, rotating a column in a 2D array:<ol>
<li>Create a copy of the column as a 1D array </li>
<li>Create a new 1D array of the same size; Loop through the above copy and place their values into right rotated indices in the new array.</li>
<li>Copy the values from the new array back into the 2D array</li>
</ol>
</li>
<li>Starting with an easier subproblem (like doing X with an 1-element list), then a harder subproblem (doing X with a huge list), and expanding until you see a solution. <a href="http://stackoverflow.com/a/354937">Link to a good example of this</a> </li>
</ul>
</li>
<li><p>See if you can start off with some structure you already know and add properties onto it to solve the problem (eg. putting more information into each Node inside a Tree). </p>
<ul>
<li>Or see if you can take two data structures you already know and combine them or nest them within each other to solve the problem. </li>
</ul>
</li>
</ol>
<p><br>
<br></p>
<h2 id="from-fall-2016-discussion-14">From Fall 2016 Discussion 14</h2>
<p>Nice!  You got an interview with Chalisee Fahwajiarns, CEO of Pearbnb, the hot new geoponics startup based in the Central Valley.  For each of the following scenarios, determine: </p>
<ul>
<li>Which <strong>data structures</strong> (doesn’t have to be strictly Java) would give the best performance and what <strong>algorithms</strong> would be used</li>
<li>Additionally, give the <strong>worst-case runtime</strong> for any operations listed.</li>
</ul>
<h3 id="1-crops">1. Crops</h3>
<p>Chalisee says she has a list of names of crops, where each entry in the list represents an acre offarmland in the Central Valley. Find the number of acres grown for each crop.
<br><br></p>
<button v-on:click="toggle1" class="button-soln button-primary">toggle solution</button>
<div v-if="show1">
<ul>
<li><strong>Data Structures</strong>: <code>HashMap&lt;String, Integer&gt;</code></li>
<li><strong>Algorithm</strong>:  Iterate through the list of names, maintaining a mapping from crop name to number of acres, incrementing at each occurrence.</li>
<li><strong>Runtime</strong>: Θ(N)
</li>
</ul>
</div>
<br><br><br>
<h3 id="2-big-data">2. Big Data</h3>
<p>One of the things that Pearbnb does is optimize the profits for farmers.  Pearbnb uses a database of N <code>Orders</code>.   Each <code>Order</code> represents an order from a customer for a specific product and has the following: the customer’s name, the <code>Date</code> the order was made, the <code>Date</code> requested for the delivery, the name of the product ordered, the quantity of the product ordered, and the price per unit for the product. Chalisee, a champion for Big Data, wants to run analytics on Pearbnb’s database and query for <code>Orders</code> requested to be delivered within a certain range of dates for a certain product. Optimize for both constructing the solution and matching a query.
<br><br></p>
<button v-on:click="toggle2" class="button-soln button-primary">toggle solution</button>
<div v-if="show2">
<ul>
<li><strong>Data Structures</strong>: <code>HashMap&lt;String, ArrayList&lt;Order&gt;&gt;</code> </li>
<li><strong>Algorithm</strong>: For each product, make a mapping from its name to an <code>ArrayList&lt;Order&gt;</code> sorted by delivery date for that product.  At query time, look up the appropriate list and do a binary search for the indices corresponding to the endpoints. Return a view of that range.</li>
<li><strong>Runtime</strong>: Θ(N log N)for construction and Θ(log N)for query.  (The worst case is all orders are for the same product)
</li>
</ul>
</div>
<br><br><br>
<h3 id="3-trucks">3. Trucks</h3>
<p>Pearbnb runs a subsidiary company, ImPearfect Produce, that handles it’s deliveries to customers in urban areas. ImPearfect Produce likes to optimize its deliveries and also promote fairness, but it only allows each of its trucks to carry one type of product at a time.  Therefore, ImPearfect Produce has the policy to send a truck carrying the product of the earliest uncompleted order, while trying to fulfill as many orders as possible for that product. ImPearfect Produce must maintain some collection of N <code>Orders</code> that optimizes adding new orders and figuring out what products to deliver on its next truck.
<br><br></p>
<button v-on:click="toggle3" class="button-soln button-primary">toggle solution</button>
<div v-if="show3">
<ul>
<li><strong>Data Structures</strong>: <code>PriorityQueue&lt;PriorityQueue&lt;Order&gt;&gt;</code> and <code>HashMap&lt;String, PriorityQueue&lt;Order&gt;&gt;</code> </li>
<li><strong>Algorithm</strong>: (one possible solution):  We assume <code>PriorityQueue</code>s can handle priority changes. Maintain a priority queue that tells us which product to ship next (denote as <code>ProductPQ</code>). Each element in the outer priority queue is a priority queue of all orders for a specific product (denote as <code>OrderPQ</code>). Each <code>OrderPQ</code> has a priority equal to the priority of the <code>Date</code> of its first <code>Order</code> (in this case, earlier dates have higher priority).  To figure out the product of a new shipment, peek at the <code>ProductPQ</code>. The <code>HashMap</code> will map from product names to product <code>OrderPQ</code>’s inside the <code>ProductPQ</code>. To add an order, use the mapping and add the order to its respective <code>OrderPQ</code>.</li>
<li><strong>Runtime</strong>: Θ(log N)for adding an order and Θ(1)to find the next product.</li>
<li><strong>Extra Note</strong>: To actually complete orders, pop from the <code>ProductPQ</code> and keep completing (popping) orders from the <code>OrderPQ</code> until no order can be fully completed, then add the <code>OrderPQ</code> back to the <code>ProductPQ</code>.
</li>
</ul>
</div>
<br><br><br>
<h2 id="from-spring-2016-discussion">From Spring 2016 Discussion 10</h2>
<h3 id="4-a-better-hashmap-">4. A Better HashMap?</h3>
<p>Alice has a wild idea to improve hash maps:  Instead of placing items via modulo, use the faster absolute value operation (<code>bin = Math.abs(key.hashCode())</code>), and preemptively expand the size of the hash map as necessary (so the bin exists).   Alice&#39;s brother, Bob,  believes Alice&#39;s idea is boloney,  as a hash map always runs in constant time anyways,  and thus doesn’t need improvement.</p>
<ul>
<li>Enumerate the pros and cons of Alice&#39;s modified implementation</li>
<li>Reject or justify the validity of Bob&#39;s reaction.
</li>
</ul>
<br>
<button v-on:click="toggle4" class="button-soln button-primary">toggle solution</button>
<div v-if="show4">

<p>Almost all the points raised aren’t correct.</p>
<p>Modulo is slightly slower than absolute value, but not by much.  This has to do with how modulo in general is implemented by arithmetic operations (it abuses floor division, that <code>(int)/(int)=(int)</code>). (Extra notes) Absolute value can be implemented via flipping all the bits and adding one. It should be noted that in particular, modding by a power of 2 can be implemented much faster than the normal modulus, and thus HashMaps in Java are generally a size that is a power of 2. </p>
<p>Alice potentially expands too much for an insertion, which would be space inefficient.  Imagine that the first element you insert into a HashMap has a hashcode output of 9,000,000.  Then the HashMap would expand to 9 million just to accommodate one item. Further suppose that we didn’t insert anything more into this HashMap. Then we just wasted a ton of time and space.</p>
<p>HashMaps don’t always run in constant time, it depends on the runtime of the hashcode function of the data type being stored and the depth of the bins.  While a hash map can’t really control the runtime of a datatypes hashcode, it can do some extra math processing on the hashcode output to ensure we are somewhat evenly distributed (see Java’s source code and <code>hash(int n)</code> method for an example of this optimization over a naive implementation).
</p></div>
<br><br><br>
<h3 id="5-lru-cache">5. LRU Cache</h3>
<p>LRU stands for Least Recently Used.  When removing from the LRU cache, we always remove the least &quot;recently used&quot; item.  An item is &quot;recently used&quot; if it was recently added (<code>add()</code>) or accessed (<code>get()</code>, <code>contains()</code>). For example, if we add three items  A, B, and C, and then check <code>.contains(B)</code>, calling remove three times would return A, C, and then B.</p>
<ul>
<li>Describe how to implement an LRU cache as efficiently as possible.</li>
<li>Give the tightest Big-O runtimes of <code>add()</code>, <code>get()</code>, <code>remove()</code>, and <code>contains()</code>. 
<br><br></li>
</ul>
<button v-on:click="toggle5" class="button-soln button-primary">toggle solution</button>
<div v-if="show5">
<p>Use a FastLinkedList, aka a Queue + indexing HashMap. For more thorough explanations, see <a href="https://www.quora.com/What-is-the-best-way-to-Implement-a-LRU-Cache">here</a></p>
<p>Essentially, we keep a Queue of recently used things. The item at the front of the queue is the least recently used, whereas the item at the back of the queue is the most recently used.  Anytime you access something, no matter what position it is in the queue, you can remove it and add it to the back (to properly mark it as recently used). If someone asks to remove the least recently used item,just return the front of the queue.</p>
<p>As  of  now,  the  runtime  is  not  perfect.   Searching  through  a  queue  takes  linear  time.  We  can fix this by maintaining essentially an indexer:  a HashMap mapping nodes to the corresponding QueueNode. You’ll also need to ensure that your Queue is implemented via a Doubly Linked List, and that it supports remove and add operations that take in a QueueNode argument (will have to break the abstraction barrier, but that’s ok). Then you can accomplish all the tasks in constant time (assuming good hashing).</p>
<p>An alternative solution involves just using a PriorityQueue, which isn’t too bad, but doesn’t achieve constant runtimes like the Queue + HashMap solution does.</p>

  </article>
    </div>
</template>

<script>
export default {
  name: 'dsd',
  data() {
    return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
    }
  },
  methods: {
    toggle1: function() {
        this.show1 = !this.show1;
    },
    toggle2: function() {
        this.show2 = !this.show2;
    },
    toggle3: function() {
        this.show3 = !this.show3;
    },
    toggle4: function() {
        this.show4 = !this.show4;
    },
    toggle5: function() {
        this.show5 = !this.show5;
    },
  }
}
</script>
