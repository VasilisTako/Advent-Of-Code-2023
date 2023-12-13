import re
from collections import deque
from math import lcm

with open('input.txt') as f:
    lines = [line.rstrip() for line in f]

nodes = dict()
ghost_starts = []
ghost_ends = []

for i, line in enumerate(lines):
    if i == 0:
        directions = deque(line)
    elif i == 1:
        pass
    else:
        c, l, r = re.findall('[A-Z0-9]+', line)
        nodes[c] = (l, r)
        if c[2] == 'A':
            ghost_starts.append(c)
        elif c[2] == 'Z':
            ghost_ends.append(c)

ghost_paths = []

for this_start in ghost_starts:
    current_node = this_start
    steps = 0
    while current_node[2] != 'Z':
        turn = directions[0]
        if turn == 'L':
            current_node = nodes[current_node][0]
        else:
            current_node = nodes[current_node][1]
        directions.rotate(-1)
        steps += 1
    ghost_paths.append(steps)
    if this_start == 'AAA':
        print(f"Part 1: {steps}")

print(f"Part 2: {lcm(*ghost_paths)}")