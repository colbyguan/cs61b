# Data Structure Design

A few tips (that also apply to algorithm design):
1. First see if you can look at the problem as a black box, as in focus on:
  * What should the structure's **inputs** be? What is being or should be fed into the structure? eg. a Map's input is `keys` associated with `values`
  * What should its **outputs** be? What information should my solution structure return? eg. a Map's output is a `value` given a `key`
  * Depending on the problem, see if inputting and / or outputting should be optimized. eg. for a Map, ideally both `put` and `get` are as fast as possible

2. See if you can break the problem into smaller problems. This may look like:
  * Actually listing a step 1, step 2, step 3 of what the solution needs to do. For example, rotating a column in a 2D array:
    1. Create a copy of the column as a 1D array 
    2. Create a new 1D array of the same size; Loop through the above copy and place their values into right rotated indices in the new array.
    3. Copy the values from the new array back into the 2D array
  * Starting with an easier subproblem (like doing X with an 1-element list), then a harder subproblem (doing X with a huge list), and expanding until you see a solution. [Link to a good example of this](http://stackoverflow.com/a/354937) 

3. See if you can start off with some structure you already know and add properties onto it to solve the problem (eg. putting more information into each Node inside a Tree). 
  * Or see if you can take two data structures you already know and combine them or nest them within each other to solve the problem. 

<br>
<br>

## From Fall 2016 Discussion 14

Nice!  You got an interview with Chalisee Fahwajiarns, CEO of Pearbnb, the hot new geoponics startup based in the Central Valley.  For each of the following scenarios, determine: 
* Which **data structures** (doesn’t have to be strictly Java) would give the best performance and what **algorithms** would be used
* Additionally, give the **worst-case runtime** for any operations listed.

### 1. Crops 
Chalisee says she has a list of names of crops, where each entry in the list represents an acre offarmland in the Central Valley. Find the number of acres grown for each crop.
<br><br>

* **Data Structures**: `HashMap<String, Integer>`
* **Algorithm**:  Iterate through the list of names, maintaining a mapping from crop name to number of acres, incrementing at each occurrence.
* **Runtime**: Θ(N)
<br><br>


### 2. Big Data
One of the things that Pearbnb does is optimize the profits for farmers.  Pearbnb uses a database of N `Orders`.   Each `Order` represents an order from a customer for a specific product and has the following: the customer’s name, the `Date` the order was made, the `Date` requested for the delivery, the name of the product ordered, the quantity of the product ordered, and the price per unit for the product. Chalisee, a champion for Big Data, wants to run analytics on Pearbnb’s database and query for `Orders` requested to be delivered within a certain range of dates for a certain product. Optimize for both constructing the solution and matching a query.
<br><br>

* **Data Structures**: `HashMap<String, ArrayList<Order>>` 
* **Algorithm**: For each product, make a mapping from its name to an `ArrayList<Order>` sorted by delivery date for that product.  At query time, look up the appropriate list and do a binary search for the indices corresponding to the endpoints. Return a view of that range.
* **Runtime**: Θ(N log N)for construction and Θ(log N)for query.  (The worst case is all orders are for the same product)
<br><br>

### 3. Trucks
Pearbnb runs a subsidiary company, ImPearfect Produce, that handles it’s deliveries to customers in urban areas. ImPearfect Produce likes to optimize its deliveries and also promote fairness, but it only allows each of its trucks to carry one type of product at a time.  Therefore, ImPearfect Produce has the policy to send a truck carrying the product of the earliest uncompleted order, while trying to fulfill as many orders as possible for that product. ImPearfect Produce must maintain some collection of N `Orders` that optimizes adding new orders and figuring out what products to deliver on its next truck.
<br><br>

* **Data Structures**: `PriorityQueue<PriorityQueue<Order>>` and `HashMap<String, PriorityQueue<Order>>` 
* **Algorithm**: (one possible solution):  We assume `PriorityQueue`s can handle priority changes. Maintain a priority queue that tells us which product to ship next (denote as `ProductPQ`). Each element in the outer priority queue is a priority queue of all orders for a specific product (denote as `OrderPQ`). Each `OrderPQ` has a priority equal to the priority of the `Date` of its first `Order` (in this case, earlier dates have higher priority).  To figure out the product of a new shipment, peek at the `ProductPQ`. The `HashMap` will map from product names to product `OrderPQ`’s inside the `ProductPQ`. To add an order, use the mapping and add the order to its respective `OrderPQ`.
* **Runtime**: Θ(log N)for adding an order and Θ(1)to find the next product.
* **Extra Note**: To actually complete orders, pop from the `ProductPQ` and keep completing (popping) orders from the `OrderPQ` until no order can be fully completed, then add the `OrderPQ` back to the `ProductPQ`.
<br><br>

## From Spring 2016 Discussion 

### 4. A Better HashMap?
Alice has a wild idea to improve hash maps:  Instead of placing items via modulo, use the faster absolute value operation (`bin = Math.abs(key.hashCode())`), and preemptively expand the size of the hash map as necessary (so the bin exists).   Alice's brother, Bob,  believes Alice's idea is boloney,  as a hash map always runs in constant time anyways,  and thus doesn’t need improvement.
  * Enumerate the pros and cons of Alice's modified implementation
  * Reject or justify the validity of Bob's reaction.
<br><br>

Almost all the points raised aren’t correct.

Modulo is slightly slower than absolute value, but not by much.  This has to do with how modulo in general is implemented by arithmetic operations (it abuses floor division, that `(int)/(int)=(int)`). (Extra notes) Absolute value can be implemented via flipping all the bits and adding one. It should be noted that in particular, modding by a power of 2 can be implemented much faster than the normal modulus, and thus HashMaps in Java are generally a size that is a power of 2. 

Alice potentially expands too much for an insertion, which would be space inefficient.  Imagine that the first element you insert into a HashMap has a hashcode output of 9,000,000.  Then the HashMap would expand to 9 million just to accommodate one item. Further suppose that we didn’t insert anything more into this HashMap. Then we just wasted a ton of time and space.

HashMaps don’t always run in constant time, it depends on the runtime of the hashcode function of the data type being stored and the depth of the bins.  While a hash map can’t really control the runtime of a datatypes hashcode, it can do some extra math processing on the hashcode output to ensure we are somewhat evenly distributed (see Java’s source code and `hash(int n)` method for an example of this optimization over a naive implementation).
<br><br>

### 5. LRU Cache 
LRU stands for Least Recently Used.  When removing from the LRU cache, we always remove the least "recently used" item.  An item is "recently used" if it was recently added (`add()`) or accessed (`get()`, `contains()`). For example, if we add three items  A, B, and C, and then check `.contains(B)`, calling remove three times would return A, C, and then B.
  * Describe how to implement an LRU cache as efficiently as possible.
  * Give the tightest Big-O runtimes of `add()`, `get()`, `remove()`, and `contains()`. 
<br><br>

Use a FastLinkedList, aka a Queue + indexing HashMap. For more thorough explanations, see [here](https://www.quora.com/What-is-the-best-way-to-Implement-a-LRU-Cache)

Essentially, we keep a Queue of recently used things. The item at the front of the queue is the least recently used, whereas the item at the back of the queue is the most recently used.  Anytime you access something, no matter what position it is in the queue, you can remove it and add it to the back (to properly mark it as recently used). If someone asks to remove the least recently used item,just return the front of the queue.

As  of  now,  the  runtime  is  not  perfect.   Searching  through  a  queue  takes  linear  time.  We  can fix this by maintaining essentially an indexer:  a HashMap mapping nodes to the corresponding QueueNode. You’ll also need to ensure that your Queue is implemented via a Doubly Linked List, and that it supports remove and add operations that take in a QueueNode argument (will have to break the abstraction barrier, but that’s ok). Then you can accomplish all the tasks in constant time (assuming good hashing).

An alternative solution involves just using a PriorityQueue, which isn’t too bad, but doesn’t achieve constant runtimes like the Queue + HashMap solution does.
