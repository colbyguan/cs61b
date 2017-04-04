# Regular Expressions
Regex is super useful for checking that strings match a certain format, or for running advanced <code>Command+F</code> search queries or searching your computer for folders/files. The regex syntax detailed below is for Java. For the most part it is the same in other languages / environments like Javascript or the <code>grep</code> command that you can use in most terminals. Also, reh-gex or reh-jex? JIF or GIF?
* [Useful Java regex tool](http://www.regexplanet.com/advanced/java/index.html)
* [Nice-looking general regex tool](http://regexr.com/)

## Symbols
|symbol|meaning|notes|
|-|-|-|
|hi|exactly the character `h` followed by `i`|-|
|.|one of any character|-|
|A&#124;B| A or B | usually used with parentheses
|(AB) | group | usually used with modifiers
|[a-z]| range for single character |-|
|[abcd]| possibilities for single character | expanded for (a&#124;b&#124;c&#124;d)
|`\.`|the actual period character | eg. `\(\)` will match literal parentheses "()"

## Modifiers
These are used right after one of the symbols above for extra functionality. "Previous" here means whatever expression is right before the modifier.

|modifier|meaning
|-|-|
|{3}| 3 occurrences of previous |
|{2,4} | 2, 3, or 4 occurrences of previous (2 to 4) |
|*| 0 or more occurrences of previous |
|+| 1 or more occurrences of previous |

## Some Combinations
* `.*` - 0 or more of any characters (not necessarily the same character)
  * eg. `.*add.*` will match `asdfadd002` and `add` but not match `ad` 
  * eg. `add.*ToHeap\(\)` will match `addNumberToHeap()` and `addToHeap()` but not `addoHeap` or `adToHeap`

* `[a-zA-Z0-9_-]{3,16}` - any letters, numbers, an underscore, or a hyphen, 3 to 16 times
  * matches `cs61b` and `colby` and `hello-world`
  * won't match `cs61b@berkeley` or `hi`

## Important things to note
* Spaces matter. If you write a space in a regex, it will match the space character.
  * eg. `[a-z A-Z]` means match a letter or a space.
  * eg. `left *right` will match "left" then any number of spaces then "right". It will also match "leftright"
* In Java: if you want to escape special characters like a period, in a Java string literal you must write `String regex = "\\."` rather than just `String regex = "\."`.
  * Extra details: This is so that the literal `\` character is kept in the regex string -- with `\.`, Java just thinks "special period". With `\\.` Java will think "an escaped backlash aka a literal backslash, then a period".
* Entire line matching vs. substring matching
  * Keep in mind whether you're trying to match an *entire line* or just a *substring* in a line
  * In Java:
    * `someString.matches(someRegexString)`, the `.matches` method does full line matches
    * The `Pattern` class used with the `Matcher` class will do substring matches
  * Example: if I have the three lines:
```
moon
xxmoon123
mooonhimoon
```
  * `m.*n` in full line matching line 1 but not match line 2 or 3
  * `m.*n` in substring matching will match every line
  * `.*m.*n.*` in full line matching will match every line


