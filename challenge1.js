const fs = require('fs')

const elfArray = fs.readFileSync('calories.txt').toString().split("\n\n");
console.log(elfArray);
const calorieTotals = elfArray.map(calorieStrings =>
    calorieStrings.split("\n").reduce((acc, curr) =>
        acc + parseInt(curr), 0
    )
)
console.log(calorieTotals)
// Part 1
console.log(Math.max(...calorieTotals))

calorieTotals.sort()
console.log(calorieTotals)
const topThree = calorieTotals.slice(calorieTotals.length - 3, calorieTotals.length)
console.log(topThree)
// Part 2
console.log(topThree.reduce((acc, curr) => acc + curr))
