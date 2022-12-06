const fs = require('fs')

const assignmentPairArray = fs.readFileSync('sectionPairs.txt').toString().split("\n");
console.log(assignmentPairArray);

const assignmentPairs = assignmentPairArray.map(pair => pair.split(',').map(range => range.split('-').map(num => parseInt(num))));
console.log(assignmentPairs);

const contained = assignmentPairs.filter(pair => (
    // Part 1
    // (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) || (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1])
    // Part 2
    (pair[0][1] >= pair[1][0] && pair[0][1] <= pair[1][1]) || (pair[0][0] >= pair[1][0] && pair[0][0] <= pair[1][1]) || (pair[1][0] >= pair[0][0] && pair[1][0] <= pair[0][1]) || (pair[1][1] >= pair[0][0] && pair[1][1] <= pair[0][1])
));
console.log(contained.length);
