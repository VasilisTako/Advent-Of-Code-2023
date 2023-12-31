
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

## Day 4

### Challenge

**--- Day 4: Scratchcards ---**  
The gondola takes you up. Strangely, though, the ground doesn't seem to be coming with you; you're not climbing a mountain. As the circle of Snow Island recedes below you, an entire new landmass suddenly appears above you! The gondola carries you to the surface of the new island and lurches into the station.

_As you exit the gondola, the first thing you notice is that the air here is much warmer than it was on Snow Island. It's also quite humid. Is this where the water source is?_

The next thing you notice is an Elf sitting on the floor across the station in what seems to be a pile of colorful square cards.

_"Oh! Hello!" The Elf excitedly runs over to you. "How may I be of service?" You ask about water sources._

"I'm not sure; I just operate the gondola lift. That does sound like something we'd have, though - this is Island Island, after all! I bet the gardener would know. He's on a different island, though - er, the small kind surrounded by water, not the floating kind. We really need to come up with a better naming scheme. Tell you what: if you can help me with something quick, I'll let you borrow my boat and you can go visit the gardener. I got all these scratchcards as a gift, but I can't figure out what I've won."

The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards, all with their opaque covering already scratched off. Picking one up, it looks like each card has two lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers you have. You organize the information into a table (your puzzle input).

_As far as the Elf has been able to figure out, you have to figure out which of the numbers you have appear in the list of winning numbers. The first match makes the card worth one point and each match after the first doubles the point value of that card._

For example:

```
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
```

In the above example, card 1 has five winning numbers (41, 48, 83, 86, and 17) and eight numbers you have (83, 86, 6, 31, 17, 9, 48, and 53). Of the numbers you have, four of them (48, 83, 17, and 86) are winning numbers! That means card 1 is worth 8 points (1 for the first match, then doubled three times for each of the three matches after the first).

- Card 2 has two winning numbers (32 and 61), so it is worth 2 points.
- Card 3 has two winning numbers (1 and 21), so it is worth 2 points.
- Card 4 has one winning number (84), so it is worth 1 point.
- Card 5 has no winning numbers, so it is worth no points.
- Card 6 has no winning numbers, so it is worth no points.


So, in this example, the Elf's pile of scratchcards is worth 13 points.

_Take a seat in the large pile of colorful cards. How many points are they worth in total?_

**--- Part Two ---**  

_Just as you're about to report your findings to the Elf, one of you realizes that the rules have actually been printed on the back of every card this whole time._

There's no such thing as "points". Instead, scratchcards only cause you to win more scratchcards equal to the number of winning numbers you have.

_Specifically, you win copies of the scratchcards below the winning card equal to the number of matches. So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15._

Copies of scratchcards are scored like normal scratchcards and have the same card number as the card they copied. So, if you win a copy of card 10 and it has 5 matching numbers, it would then win a copy of the same cards that the original card 10 won: cards 11, 12, 13, 14, and 15. This process repeats until none of the copies cause you to win any more cards. (Cards will never make you copy a card past the end of the table.)

This time, the above example goes differently:

```
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
```

- Card 1 has four matching numbers, so you win one copy each of the next four cards: cards 2, 3, 4, and 5.
- Your original card 2 has two matching numbers, so you win one copy each of cards 3 and 4.
- Your copy of card 2 also wins one copy each of cards 3 and 4.
- Your four instances of card 3 (one original and three copies) have two matching numbers, so you win four copies each of cards 4 and 5.
- Your eight instances of card 4 (one original and seven copies) have one matching number, so you win eight copies of card 5.
- Your fourteen instances of card 5 (one original and thirteen copies) have no matching numbers and win no more cards.
- Your one instance of card 6 (one original) has no matching numbers and wins no more cards.
- Once all of the originals and copies have been processed, you end up with 1 instance of card 1, 2 instances of card 2, 4 instances of card 3, 8 instances of card 4, 14 instances of card 5, and 1 instance of card 6. In total, this example pile of scratchcards causes you to ultimately have 30 scratchcards!

_Process all of the original and copied scratchcards until no more scratchcards are won. Including the original set of scratchcards, how many total scratchcards do you end up with?_

### Solutions

**Your puzzle answer for part 1 was 25010.**

**Your puzzle answer for part 2 was 9924412.**

_Both parts of this puzzle are complete! They provide two gold stars: **_

### Part 1:

**Language Used:**  Python
**Key Concepts:**

#### Approach


### Part 2:

**Language Used:** Python
**Key Concepts:**

#### Approach


---

## Day 5

### Challenge

**--- Day 5: If You Give A Seed A Fertilizer ---**  
You take the boat and find the gardener right where you were told he would be: managing a giant "garden" that looks more to you like a farm.

_"A water source? Island Island is the water source!" You point out that Snow Island isn't receiving any water._

_"Oh, we had to stop the water because we ran out of sand to filter it with! Can't make snow with dirty water. Don't worry, I'm sure we'll get more sand soon; we only turned off the water a few days... weeks... oh no."_ His face sinks into a look of horrified realization.

_"I've been so busy making sure everyone here has food that I completely forgot to check why we stopped getting more sand! There's a ferry leaving soon that is headed over in that direction - it's much faster than your boat. Could you please go check it out?"_

You barely have time to agree to this request when he brings up another. "While you wait for the ferry, maybe you can help us with our food production problem. The latest Island Island Almanac just arrived and we're having trouble making sense of it."

The almanac (your puzzle input) lists all of the seeds that need to be planted. It also lists what type of soil to use with each kind of seed, what type of fertilizer to use with each kind of soil, what type of water to use with each kind of fertilizer, and so on. Every type of seed, soil, fertilizer and so on is identified with a number, but numbers are reused by each category - that is, soil 123 and fertilizer 123 aren't necessarily related to each other.

For example:

```
seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4
```

The almanac starts by listing which seeds need to be planted: seeds 79, 14, 55, and 13.

The rest of the almanac contains a list of maps which describe how to convert numbers from a source category into numbers in a destination category. That is, the section that starts with seed-to-soil map: describes how to convert a seed number (the source) to a soil number (the destination). This lets the gardener and his team know which soil to use with which seeds, which water to use with which fertilizer, and so on.

Rather than list every source number and its corresponding destination number one by one, the maps describe entire ranges of numbers that can be converted. Each line within a map contains three numbers: the destination range start, the source range start, and the range length.

Consider again the example seed-to-soil map:

```
50 98 2
52 50 48
```

The first line has a destination range start of 50, a source range start of 98, and a range length of 2. This line means that the source range starts at 98 and contains two values: 98 and 99. The destination range is the same length, but it starts at 50, so its two values are 50 and 51. With this information, you know that seed number 98 corresponds to soil number 50 and that seed number 99 corresponds to soil number 51.

The second line means that the source range starts at 50 and contains 48 values: 50, 51, ..., 96, 97. This corresponds to a destination range starting at 52 and also containing 48 values: 52, 53, ..., 98, 99. So, seed number 53 corresponds to soil number 55.

Any source numbers that aren't mapped correspond to the same destination number. So, seed number 10 corresponds to soil number 10.

So, the entire list of seed numbers and their corresponding soil numbers looks like this:


```
seed  soil
0     0
1     1
...   ...
48    48
49    49
50    52
51    53
...   ...
96    98
97    99
98    50
99    51
```
With this map, you can look up the soil number required for each initial seed number:

- Seed number 79 corresponds to soil number 81.
- Seed number 14 corresponds to soil number 14.
- Seed number 55 corresponds to soil number 57.
- Seed number 13 corresponds to soil number 13.


The gardener and his team want to get started as soon as possible, so they'd like to know the closest location that needs a seed. Using these maps, find the lowest location number that corresponds to any of the initial seeds. To do this, you'll need to convert each seed number through other categories until you can find its corresponding location number. In this example, the corresponding types are:

- Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.
- Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
- Seed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
- Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.

So, the lowest location number in this example is 35.

What is the lowest location number that corresponds to any of the initial seed numbers?

**--- Part Two ---**  

Everyone will starve if you only plant such a small number of seeds. Re-reading the almanac, it looks like the seeds: line actually describes ranges of seed numbers.

_The values on the initial seeds: line come in pairs. Within each pair, the first value is the start of the range and the second value is the length of the range. So, in the first line of the example above:_

```
seeds: 79 14 55 13
```

This line describes two ranges of seed numbers to be planted in the garden. The first range starts with seed number 79 and contains 14 values: 79, 80, ..., 91, 92. The second range starts with seed number 55 and contains 13 values: 55, 56, ..., 66, 67.

Now, rather than considering four seed numbers, you need to consider a total of 27 seed numbers.

In the above example, the lowest location number can be obtained from seed number 82, which corresponds to soil 84, fertilizer 84, water 84, light 77, temperature 45, humidity 46, and location 46. So, the lowest location number is 46.

_Consider all of the initial seed numbers listed in the ranges on the first line of the almanac. What is the lowest location number that corresponds to any of the initial seed numbers?_

### Solutions

**Your puzzle answer for part 1 was 282277027.**

**Your puzzle answer for part 2 was 11554135.**

_Both parts of this puzzle are complete! They provide two gold stars: **_

### Part 1:

**Language Used:** Python
**Key Concepts:** 

#### Approach

### Part 2:

**Language Used:** Python
**Key Concepts:** 

#### Approach

---

## Day 6

### Challenge

**--- Day 6: Wait For It ---**  
The ferry quickly brings you across Island Island. After asking around, you discover that there is indeed normally a large pile of sand somewhere near here, but you don't see anything besides lots of water and the small island where the ferry has docked.

As you try to figure out what to do next, you notice a poster on a wall near the ferry dock. "Boat races! Open to the public! Grand prize is an all-expenses-paid trip to Desert Island!" That must be where the sand comes from! Best of all, the boat races are starting in just a few minutes.

You manage to sign up as a competitor in the boat races just in time. The organizer explains that it's not really a traditional race - instead, you will get a fixed amount of time during which your boat has to travel as far as it can, and you win if your boat goes the farthest.

As part of signing up, you get a sheet of paper (your puzzle input) that lists the time allowed for each race and also the best distance ever recorded in that race. To guarantee you win the grand prize, you need to make sure you go farther in each race than the current record holder.

The organizer brings you over to the area where the boat races are held. The boats are much smaller than you expected - they're actually toy boats, each with a big button on top. Holding down the button charges the boat, and releasing the button allows the boat to move. Boats move faster if their button was held longer, but time spent holding the button counts against the total race time. You can only hold the button at the start of the race, and boats don't move until the button is released.

For example:
```
Time:      7  15   30
Distance:  9  40  200
```

This document describes three races:

- The first race lasts 7 milliseconds. The record distance in this race is 9 millimeters.
- The second race lasts 15 milliseconds. The record distance in this race is 40 millimeters.
- The third race lasts 30 milliseconds. The record distance in this race is 200 millimeters.

Your toy boat has a starting speed of zero millimeters per millisecond. For each whole millisecond you spend at the beginning of the race holding down the button, the boat's speed increases by one millimeter per millisecond.


So, because the first race lasts 7 milliseconds, you only have a few options:


- Don't hold the button at all (that is, hold it for 0 milliseconds) at the start of the race. The boat won't move; it will have traveled 0 millimeters by the end of the race.
- Hold the button for 1 millisecond at the start of the race. Then, the boat will travel at a speed of 1 millimeter per millisecond for 6 milliseconds, reaching a total distance traveled of 6 millimeters.
- Hold the button for 2 milliseconds, giving the boat a speed of 2 millimeters per millisecond. It will then get 5 milliseconds to move, reaching a total distance of 10 millimeters.
- Hold the button for 3 milliseconds. After its remaining 4 milliseconds of travel time, the boat will have gone 12 millimeters.
- Hold the button for 4 milliseconds. After its remaining 3 milliseconds of travel time, the boat will have gone 12 millimeters.
- Hold the button for 5 milliseconds, causing the boat to travel a total of 10 millimeters.
- Hold the button for 6 milliseconds, causing the boat to travel a total of 6 millimeters.
- Hold the button for 7 milliseconds. That's the entire duration of the race. You never let go of the button. The boat can't move until you let go of the button. Please make sure you let go of the button so the boat gets to move. 0 millimeters.


Since the current record for this race is 9 millimeters, there are actually 4 different ways you could win: you could hold the button for 2, 3, 4, or 5 milliseconds at the start of the race.

In the second race, you could hold the button for at least 4 milliseconds and at most 11 milliseconds and beat the record, a total of 8 different ways to win.

In the third race, you could hold the button for at least 11 milliseconds and no more than 19 milliseconds and still beat the record, a total of 9 ways you could win.

To see how much margin of error you have, determine the number of ways you can beat the record in each race; in this example, if you multiply these values together, you get 288 (4 * 8 * 9).

_Determine the number of ways you could beat the record in each race. What do you get if you multiply these numbers together?_

**--- Part Two ---**  

### Solutions

**Your puzzle answer for part 1 was XXXX.**

**Your puzzle answer for part 2 was XXXX.**

_Both parts of this puzzle are complete! They provide two gold stars: **_

### Part 1:

**Language Used:** 
**Key Concepts:**

#### Approach

### Part 2:

**Language Used:** 
**Key Concepts:**

#### Approach

---


_More solutions will be added as I progress through the challenges._
