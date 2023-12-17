import numpy as np

with open('day13/input.txt') as f:
    data = [
        np.array([[char == '#' for char in line] for line in matrix.split('\n')])
        for matrix in f.read().split('\n\n')
    ]

def mirror(matrix, smudges):
    rows = matrix.shape[0]
    for i in range(1, rows):
        upper_half = matrix[max(0, 2 * i - rows):i]
        lower_half = matrix[i:min(2 * i, rows)]
        if np.count_nonzero(upper_half != lower_half[::-1]) == smudges:
            return i
    return None

def calculate_reflection_score(data, smudges):
    score = 0
    for matrix in data:
        vertical_reflection = mirror(matrix.transpose(), smudges)
        if vertical_reflection is not None:
            score += vertical_reflection
        else:
            horizontal_reflection = mirror(matrix, smudges)
            if horizontal_reflection is not None:
                score += 100 * horizontal_reflection
    return score

print(calculate_reflection_score(data, 0))
print(calculate_reflection_score(data, 1))
