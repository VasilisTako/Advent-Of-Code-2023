import { readFileSync } from 'fs';

function readInput(): string[] {
    const fileContents: string = readFileSync('day1/input.txt', 'utf8');
    return fileContents.split('\n').map(line => line.trim());
}

function getDigitFromWord(word: string): number {
    const numberWords: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numberWords.indexOf(word);
}

function findDigitsInLine(line: string): string[] {
    const numberWords: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const regex = new RegExp(`(${numberWords.join('|')})|\\d`, 'g');
    const matches = line.match(regex);

    return matches ? matches.map(match => {
        if (isNaN(parseInt(match))) {
            return getDigitFromWord(match).toString();
        } else {
            return match;
        }
    }) : [];
}

function sumCalibrationValues(lines: string[]): number {
    let sum: number = 0;
    for (const line of lines) {
        const digits: string[] = findDigitsInLine(line);
        if (digits.length > 0) {
            const firstDigit: string = digits[0];
            const lastDigit: string = digits[digits.length - 1];
            const value: number = parseInt(firstDigit + lastDigit, 10);
            sum += value;
        }
    }
    return sum;
}

const calibrationLines: string[] = readInput();
const total: number = sumCalibrationValues(calibrationLines);
console.log(total);
