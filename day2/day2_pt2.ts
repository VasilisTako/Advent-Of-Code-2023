import * as fs from 'fs';
interface GameState {
    red: number;
    green: number;
    blue: number;
}

const initGameState: GameState = { red: 12, green: 13, blue: 14 };

const data: string = fs.readFileSync('day2/input.txt', 'utf8');
const array: string[] = data.split('\n');

const separators: RegExp = /[;:]/;
const regex: RegExp = /\d+/g;
let result: number = 0;

array.map((item: string) => {
    let parsedInput: string[] = item.split(separators);
    let biggestNumbers: GameState = { red: 0, green: 0, blue: 0 };

    parsedInput.map((colorItem: string) => {
        const parsedColors: string[] = colorItem.split(',');
        parsedColors.map((color: string) => {
            const match = color.match(regex);
            if (match) {
                const quantity: number = Number(match[0]);
                if (color.includes('red') && quantity > biggestNumbers.red) {
                    biggestNumbers.red = quantity;
                } else if (color.includes('green') && quantity > biggestNumbers.green) {
                    biggestNumbers.green = quantity;
                } else if (color.includes('blue') && quantity > biggestNumbers.blue) {
                    biggestNumbers.blue = quantity;
                }
            }
        });
    });

    result += biggestNumbers.red * biggestNumbers.green * biggestNumbers.blue;
});

console.log(result);