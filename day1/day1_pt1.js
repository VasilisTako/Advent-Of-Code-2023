"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function readInput() {
    var fileContents = (0, fs_1.readFileSync)('day1/input.txt', 'utf8');
    var data = fileContents.split('\n').map(function (line) { return line.trim(); });
    return data;
}
function sumCalibrationValues(lines) {
    var sum = 0;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var digits = line.match(/\d/g);
        if (digits && digits.length > 0) {
            var firstDigit = digits[0];
            var lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
            var value = parseInt(firstDigit + lastDigit, 10);
            sum += value;
        }
    }
    return sum;
}
var calibrationLines = readInput();
var total = sumCalibrationValues(calibrationLines);
console.log(total);
