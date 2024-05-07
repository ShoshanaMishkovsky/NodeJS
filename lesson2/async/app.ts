import fs from 'fs';

const FILE_NAME = "input.txt";

function printCity(): void {
    fs.readFile(FILE_NAME, (err: any, city: Buffer) => {
        if (err) {
            console.log(`Failed reading the file ${FILE_NAME}: ${err.message}`);
            return;
        }
        console.log(`The city is ${city}`);
    });
}

printCity();