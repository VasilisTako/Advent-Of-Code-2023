import regex as re

numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
]

numbers_string = '|'.join(numbers)

if __name__ == "__main__":
    sum = 0

    with open('day1/input.txt', 'r') as file:
        input_text = file.read()

    for line in input_text.splitlines():
        digits = re.findall(rf"(\d|{numbers_string})", line, overlapped=True)
        first = digits[0]
        last = digits[-1]
        if len(first) > 1:
            first = numbers.index(first) + 1

        if len(last) > 1:
            last = numbers.index(last) + 1

        linedigits = f"{first}{last}"
        sum += int(linedigits)
        print(linedigits)

    print(f"Result: {sum}")
