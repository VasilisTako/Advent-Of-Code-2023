# Advent of Code 2023 Solutions

This repository contains my solutions for the Advent of Code 2023. Below is a summary of my approaches for each day's challenges.

## Day 1

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

More solutions will be added as I progress through the challenges.
