# Regex

[This website](http://www.regexplanet.com/advanced/java/index.html) uses Java regex syntax if you want to check other solutions 

## 1. Coordinates

Write a regex that will full-line match x-y coordinates in the general form of `(x, y)`.

Some example matches:
* `(333, 2)`
* `(     1,    4 )`
* `(0,0)`

The regex shouldn't match:
* `(a, 23)`
* `(4, )`
* `(12, 12, 12)`

A valid regex: `\( *[0-9]+ *, *[0-9]+ *\)`. Things to note:
* It must handle any number of spaces between characters
* Escape the parentheses so they match the paren character

## 2. Macs

Write a regex that will full-line match certain products from Apple's Mac product line. Assume all characters will be lowercase:
* `macbook`
* `macbook pro`
* `macbook air`
* `mac pro`
* `mac mini`

A valid regex: `mac((book(| pro| air))| (pro|mini))`. The problem can be broken down like so:
* `mac` must come first
* Then either a space, or `book` comes next
* If `book` comes next, then either nothing or a space and `pro` or a space and `air` comes next
* If a space came after `mac`, then either `pro` or `mini` should come next

So the regex can be broken down like so:
* `mac` and then either `(book(| pro| air))` OR a space followed by `(pro|mini)`
* `(book(| pro| air))` means `book` followed by nothing OR " pro" OR " air" -- note the spaces after the `|`. This lets us match any of the `macbook` or `macbook X` products. 
* The space and then `(pro|mini)` then allows us to match `mac pro` or `mac mini`
