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
    let validInput: boolean = true;

    parsedInput.map((colorItem: string) => {
        const parsedColors: string[] = colorItem.split(',');
        parsedColors.map((color: string) => {
            const match = color.match(regex);
            if (match) {
                const quantity: number = Number(match[0]);
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
        const match = item.split(":")[0].match(regex);
        if (match) {
            result += Number(match[0]);
        }
    }
});

console.log(result);
