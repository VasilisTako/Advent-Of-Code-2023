
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
For the first part of Day 1, I implemented a solution in TypeScript. 

The core of the solution involved using a simple regular expression (`\d`) to match digit values in the lines of the input. This input was read from a file, processed, and the necessary computations were carried out to get at the solution.

### Part 2: Number Word Matching with Python

**Language Used:** Python  
**Key Concepts:** Regular Expressions, File I/O  

#### Approach
For the second part, I switched to Python due to its native support for overlapping matches in regular expressions, a feature I needed for this specific challenge and was being a bit challenging to be solved in js but the regex still remains the same of the ts implementation and the business logic too.

 So I constructed a regex that combined both digit characters (`\d`) and word representations of numbers (like "one", "two", etc.). This allowed me to process the input effectively, capturing the required elements from each line the get the final result.

---
## Day 2

### Challenge

**--- Day 2: Cube Conundrum ---**  
_You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you._

_The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?_

As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.

To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

For example, the record of a few games might look like this:

```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.


_The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?_

In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.

_Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?_

**--- Part Two ---**  
The Elf says they've stopped producing snow because they aren't getting any water! He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!

As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

Again consider the example games from earlier:

```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

- In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
- Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.
- Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
- Game 4 required at least 14 red, 3 green, and 15 blue cubes.
- Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.

The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.

_For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?_

### Solutions

**Your puzzle answer for part 1 was 2776.**

**Your puzzle answer for part 2 was 68638.**

_Both parts of this puzzle are complete! They provide two gold stars: **_

### Part 1: Input parsing and digit Matching with TypeScript

**Language Used:** TypeScript  
**Key Concepts:** Input Parsing using Regex

#### Approach
For the first part of Day 2, I implemented a solution in TypeScript. 

The core solution consisted in two different regexes one for matching the input separators and parse correctly the input and one to find digits in a substring. 

With a parsed input per game we then looped the list of of colors sorted out and used the includes() method to check which color is sorted and the regex to find the corresponding digit for that color. 

Ff the digit is greater then the initalGameState value of that color the validInput boolean is set to false.

### Part 2: Number Word Matching with Python

**Language Used:** TypeScript  
**Key Concepts:** Input Parsing using Regex and max 

#### Approach
For the second part, I used the same approach of the part1 to parse the input and loop each color sorted. 

In this case the business logic is represted by summing for each line of the input the maximum quantity of each color multiplied with the other colors max quantities. 

So we can get the sum of the power of the minimum set of cubes that must have been present.

---

## Day 3

### Challenge

**--- Day 3: Gear Ratios ---**  
You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source, but this is as far as he can bring you. You go inside.

It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.

"Aaah!"

You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.

The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.

The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)

Here is an example engine schematic:

```
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
```

In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

Of course, the actual engine schematic is much larger. 

_What is the sum of all of the part numbers in the engine schematic?_

**--- Part Two ---**  
The engineer finds the missing part and installs it in the engine! As the engine springs to life, you jump in the closest gondola, finally ready to ascend to the water source.

You don't seem to be going very fast, though. Maybe something is still wrong? Fortunately, the gondola has a phone labeled "help", so you pick it up and the engineer answers.

Before you can explain the situation, she suggests that you look out the window. There stands the engineer, holding a phone in one hand and waving with the other. You're going so slowly that you haven't even left the station. You exit the gondola.

The missing part wasn't the only issue - one of the gears in the engine is wrong. A gear is any * symbol that is adjacent to exactly two part numbers. Its gear ratio is the result of multiplying those two numbers together.

This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.

Consider the same engine schematic again:

```
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
```

In this schematic, there are two gears. The first is in the top left; it has part numbers 467 and 35, so its gear ratio is 16345. The second gear is in the lower right; its gear ratio is 451490. (The * adjacent to 617 is not a gear because it is only adjacent to one part number.) Adding up all of the gear ratios produces 467835.

_What is the sum of all of the gear ratios in your engine schematic?_

### Solutions

**Your puzzle answer for part 1 was 527364.**

**Your puzzle answer for part 2 was 79026871.**

_Both parts of this puzzle are complete! They provide two gold stars: **_

### Part 1:

**Language Used:** Java  
**Key Concepts:** regex, offset map

#### Approach
#### Here a definition of what each method is doing to resolve the first part:

**calculateSumOfAdjacentPartNumbers(List<String> engineSchematicLines)**_: Calculates the sum of all part numbers adjacent to symbols._

**findAllPartNumbersAdjacentToSymbols(List<String> engineSchematicLines)**_: Finds all part numbers adjacent to symbols by scanning each line and character of the schematic._

**extractPartNumbersFromSchematicLine(List<String> engineSchematicLines, int lineNumber)**_: Extracts part numbers from a specific line in the schematic._

**extractPartNumbersAdjacentToSymbol(List<String> engineSchematicLines, int lineNumber, int charIndex)**_: Extracts part numbers adjacent to a particular symbol in the schematic._

**extractPartNumberAtPosition(List<String> engineSchematicLines, AdjacentPosition indexes)**_: Extracts a part number at a given position, if it exists._

**isIndexesValid(List<String> engineSchematicLines, AdjacentPosition indexes)**: _Checks if a given position is valid within the schematic._

### Part 2:

**Language Used:** Java  
**Key Concepts:** 

#### Approach

#### Here a definition of what each method is doing to resolve the second part:

**calculateSumOfGearRatios(List<String> engineSchematicLines)**_: Calculates the sum of gear ratios in the schematic._

**sumGearRatiosInSchematicLine(List<String> engineSchematicLines, int lineNumber)**: _Sums the gear ratios found in a specific line of the schematic._

**calculateGearRatioNearSymbol(List<String> engineSchematicLines, int gearLineNumber, int gearLocationIndex)**: _Calculates the gear ratio for a gear symbol located at a specific index in the schematic._

**isSymbolCharacter(char character) and isGearCharacter(char character)**: _Utility methods to determine if a character is a symbol or a gear._

**getAdjacentIndexForDirection(AdjacentDirection direction, int currentLineNumber, int foundSymbolIndex)**: _Calculates the position adjacent to a given index in a specific direction._

**isIndexesValid(List<String> engineSchematicLines, AdjacentPosition indexes)**: _Checks if a given position is valid within the schematic._

---

_More solutions will be added as I progress through the challenges._
