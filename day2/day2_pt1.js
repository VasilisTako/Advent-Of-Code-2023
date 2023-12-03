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
    var validInput = true;
    parsedInput.map(function (colorItem) {
        var parsedColors = colorItem.split(',');
        parsedColors.map(function (color) {
            var match = color.match(regex);
            if (match) {
                var quantity = Number(match[0]);
                if (color.includes('red') && quantity > initGameState.red) {
                    validInput = false;
                }
                else if (color.includes('green') && quantity > initGameState.green) {
                    validInput = false;
                }
                else if (color.includes('blue') && quantity > initGameState.blue) {
                    validInput = false;
                }
            }
        });
    });
    if (validInput) {
        var match = item.split(":")[0].match(regex);
        if (match) {
            result += Number(match[0]);
        }
    }
});
console.log(result);
