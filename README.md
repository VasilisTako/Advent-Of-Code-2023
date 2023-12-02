
# Advent of Code 2023 Solutions

This repository contains my solutions for the Advent of Code 2023. Below is a summary of my approaches for each day's challenges.

## Day 1

### Challenge

**--- Day 1: Trebuchet?! ---**  
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

_Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!_

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:
```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

_Consider your entire calibration document. What is the sum of all of the calibration values?_

**--- Part Two ---**  
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:
```
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
```
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

_What is the sum of all of the calibration values?_

### Solutions

**Your puzzle answer for part 1 was 54159.**

**Your puzzle answer for part 2 was 53866.**

_Both parts of this puzzle are complete! They provide two gold stars: **_

### Part 1: Digit Matching with TypeScript

**Language Used:** TypeScript  
**Key Concepts:** Regular Expressions  

#### Approach
For the first part of Day 1, I implemented a solution in TypeScript. The core of the solution involved using a simple regular expression (`\d`) to match digit values in the lines of the input. This input was read from a file, processed, and the necessary computations were carried out to get at the solution.

### Part 2: Number Word Matching with Python

**Language Used:** Python  
**Key Concepts:** Regular Expressions, File I/O  

#### Approach
For the second part, I switched to Python due to its native support for overlapping matches in regular expressions, a feature I needed for this specific challenge and was being a bit challenging to be solved in js but regex still remains the same of the ts implementation and the business logic too. So I constructed a regex that combined both digit characters (`\d`) and word representations of numbers (like "one", "two", etc.). This allowed me to process the input effectively, capturing the required elements from each line the get the final result.

---

_More solutions will be added as I progress through the challenges._
