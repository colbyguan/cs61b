# Week 3 Post-discussion Notes

## Problem 1.2: reverse() hints
Here is the hint I used for the iterative (while loop) version:  
![alt text](http://i.imgur.com/CMSnj90.jpg)

Here is a hint for the recursive version. Note that you'll need a helper method that looks something like:
```
private IntNode reverseHelper(IntNode front) {
    // recursive stuff here?
}
```
Use this image to come up with your base and recursive cases:  
![alt text](http://i.imgur.com/CMSnj90.jpg)

## Hints for other problems (spoiler alert)
### 2.1: Array insert
### 2.2: Array reverse

## Generics - extra notes
*Note: this will be discussed a lot more in the Week 5 Generics + Autoboxing lecture*  
*This is a quick preview to address the question in discussion: Can we initialize `Type item` to null?*

We used generics like so:
```
// A generic version of SLList
public class GenericLinkedList<Type> {
    GenericNode sentinel;
    ...
    public static class GenericNode {
        public Type item;
        public IntNode next;
    }
}
```

where `Type` will be substituted with whatever is passed in between the `< ... >` brackets in a declaration like so:
```
// this list will hold doubles
GenericLinkedList<Double> doubles = new GenericLinkedList<>();
// this list will hold cars
GenericLinkedList<Car> cars = new GenericLinkedList<>();
```
You'll notice that the type we pass in for the double list is actually a **reference type** `Double` (as opposed to primitive type). It is required that you pass in a class to the generic brackets, so you **cannot** do something like this:
```
// will not compile
GenericLinkedList<int> cars = new GenericLinkedList<>();
```
Java has a class version of every primitive, eg. [Double](https://docs.oracle.com/javase/7/docs/api/java/lang/Double.html), [Integer](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html). These are mostly used for utility methods like converting numbers to/from Strings, and can be used like so:
```
Double someDecimal = new Double(3.14)
// this is the same as:
double someDecimal = 3.14;
// Example where the class version of double can be useful:
String s = "3.14159"
Double someDecimal = new Double(s);
// the constructor converted from String to Double for us, yay!
```
So, going back to the `GenericNode` class above, since any variables of type `Type` are *always going to be pointers*, we can indeed initialize `item` to `null` in our constructor for `GenericLinkedList`.

**Extra note**: Java automatically converts between `Double` and `double` for us. So we can do things like:
```
Double d1 = new Double(3.0);
double d2 = 4.0;
// This works just fine and sets d3 = 7
double d3 = d1 + d2;
```