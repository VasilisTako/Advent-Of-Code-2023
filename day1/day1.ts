
import { dummyData } from "./dummyData";
import { readFileSync } from 'fs';


function readInput(): string[]{
    const fileContents: string = readFileSync('day1/input.txt', 'utf8');
    const data: string[] = fileContents.split('\n').map(line => line.trim());
    return data;
}

function sumCalibrationValues(lines: string[]): number {
    let sum = 0;
    for (const line of lines) {
        const digits = line.match(/\d/g);
        if (digits && digits.length > 0) {
            const firstDigit = digits[0];
            const lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
            const value = parseInt(firstDigit + lastDigit, 10);
            sum += value;
        }
    }
    return sum;
}


const calibrationLines = readInput();
const total = sumCalibrationValues(calibrationLines);
console.log(total);

