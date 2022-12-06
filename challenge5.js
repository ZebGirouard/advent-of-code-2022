const fs = require('fs')

const initialState = fs.readFileSync('initialCraneState.txt').toString().split("\n");
initialState.pop();
console.log(initialState);

const crateColumns = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
for (let i = initialState.length - 1; i >= 0 ; i--) {
    const crateRow = initialState[i].match(/.{3,4}/g);
    // console.log(crateRow);

    crateRow.forEach((crate, index) => {
        if(crate.includes('[')) {
            crateColumns[index].push(crate);
        }
    });
}
console.log(crateColumns);

const craneMoves = fs.readFileSync('craneMoves.txt').toString().split("\n");
// console.log(craneMoves);

craneMoves.forEach(move => {
    let amount = parseInt(move.match(/\d+/)[0]);
    const fromRow = parseInt(move.match(/\d+/g)[1]) - 1;
    const toRow = parseInt(move.match(/\d+/g)[2]) - 1;
    // console.log(amount, fromRow, toRow);
    crateColumns[fromRow].splice(crateColumns[fromRow].length - amount, crateColumns[fromRow].length).forEach(crate => crateColumns[toRow].push(crate));
    // Part 1
    // while(amount > 0) {
    //     const crate = crateColumns[fromRow].pop();
    //     crateColumns[toRow].push(crate);
    //     amount--;
    // }
});

console.log(crateColumns);