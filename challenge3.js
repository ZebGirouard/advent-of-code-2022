const fs = require('fs')

const letterArray = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const rucksackArray = fs.readFileSync('rucksackItems.txt').toString().split("\n");
const commonItems = [];
while (rucksackArray.length) {
    const nextThree = rucksackArray.splice(0, 3);
    commonItems.push(findCommonItem(nextThree));
}
console.log(commonItems);

// const commonItems = rucksackArray.map(rucksack => findCommonItem(rucksack));
// console.log(commonItems);
// console.log(letterArray);
// console.log(letterArray.findIndex(letter => letter === 'D'));
const priority = commonItems.map(item => letterArray.findIndex(letter => letter === item));
console.log(priority);

console.log(priority.reduce((acc, item) => acc + item, 0))

// const totalPriority = commonItems.reduce((acc, item) => acc + letterArray.findIndex(letter => letter === item), 0);
// console.log(totalPriority)
// Part 2
function findCommonItem(threeRucksacks) {
    const compartmentOne = threeRucksacks[0].split('');
    const compartmentTwo = threeRucksacks[1].split('');
    const compartmentThree = threeRucksacks[2].split('');
    const commonItem = compartmentOne.filter(item => compartmentTwo.includes(item) && compartmentThree.includes(item))[0];

    console.log(commonItem);
    return commonItem;
}
// Part 1
// function findCommonItem(rucksack) {
//     const midpoint = Math.ceil((rucksack.length) / 2);
//     const compartmentOne = rucksack.slice(0, midpoint).split('');
//     const compartmentTwo = rucksack.slice(midpoint, rucksack.length).split('');
//     // console.log(compartmentOne, compartmentTwo);
//     // const commonItems = compartmentOne.filter(item => compartmentTwo.includes(item));
//     const commonItems = compartmentOne.filter(item => compartmentTwo.includes(item))[0];

//     // console.log(commonItem);
//     return commonItems;
// }