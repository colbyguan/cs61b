# Week 2 Lecture Takeaways

## Linked Lists 
* Use `SLList` as a manager of `IntNodes` (adding, removing nodes) -- IntNode should be coded as an *nested static class*
    - Benefits over just using `IntNodes`s: can quick-calculate `size()` of list, can use addFirst logic
* Use a Sentinel node in SLList (a pointer to a placeholder IntNode) to handle empty SLLists
* DLList: We can speed up SLLists `add, get, remove` operations by adding a `prev` pointer to the Nodes.
    - Changing sentinel node: add a "back" sentinel node OR make it a circular list

## Arrays
* Arrays are fixed length
* An array variable `int arr[]` is a container/pointer that will point to a set of cells out in memory (the actual array).
* `arraycopy` to create copy all / parts of one array to another
* `AList` concept: a resizing list using an internal array
    - `removeLast()` - use the size variable to track what the index of the last element is, so just decrement size
    - If array gets too full when adding element, copy all the elements over to a new array of ~double size. 

## Extras
* `private` means anything outside of the class **cannot** use it
* You can use **generics** to let your List nodes to hold different types
* Can use `null` to represent emptiness / a deleted element (but not for primitives)
* AList vs. DLList
    - `addFirst` / `addLast` faster for `DLList`
    - `get` for any position / index faster for `AList`
