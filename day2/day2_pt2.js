"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var initGameState = { red: 12, green: 13, blue: 14 };
var data = fs.readFileSync('day2/input.txt', 'utf8');
var array = data.split('\n');
var separators = /[;:]/;
var regex = /\d+/g;
var result = 0;
array.map(function (item) {
    var parsedInput = item.split(separators);
    var biggestNumbers = { red: 0, green: 0, blue: 0 };
    parsedInput.map(function (colorItem) {
        var parsedColors = colorItem.split(',');
        parsedColors.map(function (color) {
            var match = color.match(regex);
            if (match) {
                var quantity = Number(match[0]);
                if (color.includes('red') && quantity > biggestNumbers.red) {
                    biggestNumbers.red = quantity;
                }
                else if (color.includes('green') && quantity > biggestNumbers.green) {
                    biggestNumbers.green = quantity;
                }
                else if (color.includes('blue') && quantity > biggestNumbers.blue) {
                    biggestNumbers.blue = quantity;
                }
            }
        });
    });
    result += biggestNumbers.red * biggestNumbers.green * biggestNumbers.blue;
});
console.log(result);
