#!/usr/bin/env python3

import sys

with open('day4/input.txt', 'r') as file:
    input_text = file.read()

matches = []

for line in input_text.splitlines():
	winners, numbers = line[line.find(':') + 1:].split('|')
	winners = set(map(int, winners.split()))
	numbers = set(map(int, numbers.split()))
	matches.append(len(numbers & winners))

score = sum(int(2**(n - 1)) for n in matches)
print('Part 1:', score)


copies = [1] * len(matches)

for i, n in enumerate(matches):
	for j in range(i + 1, i + n + 1):
		copies[j] += copies[i]

total = sum(copies)
print('Part 2:', total)