"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function readInput() {
    var fileContents = (0, fs_1.readFileSync)('day1/input.txt', 'utf8');
    return fileContents.split('\n').map(function (line) { return line.trim(); });
}
function getDigitFromWord(word) {
    var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numberWords.indexOf(word);
}
function findDigitsInLine(line) {
    var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var regex = new RegExp("(".concat(numberWords.join('|'), ")|\\d"), 'g');
    var matches = line.match(regex);
    return matches ? matches.map(function (match) {
        if (isNaN(parseInt(match))) {
            return getDigitFromWord(match).toString();
        }
        else {
            return match;
        }
    }) : [];
}
function sumCalibrationValues(lines) {
    var sum = 0;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var digits = findDigitsInLine(line);
        if (digits.length > 0) {
            var firstDigit = digits[0];
            var lastDigit = digits[digits.length - 1];
            var value = parseInt(firstDigit + lastDigit, 10);
            sum += value;
        }
    }
    return sum;
}
var calibrationLines = readInput();
var total = sumCalibrationValues(calibrationLines);
console.log(total);
