const fs = require('fs')

const rpsArray = fs.readFileSync('rps.txt').toString().split("\n");
console.log(rpsArray);

const totalScore = rpsArray.reduce((acc, rpsStrings) => (
    acc + calculateScore(rpsStrings)
), 0);

console.log(totalScore);

// Part 1
// function calculateScore(rpsChoices) {
//     const shapeScores = {
//         'X': 1,
//         'Y': 2,
//         'Z': 3,
//     };
//     const shapeScore = shapeScores[rpsChoices[2]];

//     const outcomeWins = {
//         'A': 'Y',
//         'B': 'Z',
//         'C': 'X',
//     };

//     const outcomeDraws = {
//         'A': 'X',
//         'B': 'Y',
//         'C': 'Z',
//     };
    
//     const outcomeLosses = {
//         'A': 'Z',
//         'B': 'X',
//         'C': 'Y',
//     };

//     let outcomeScore;

//     if (outcomeWins[rpsChoices[0]] === rpsChoices[2]) {
//         outcomeScore = 6;
//     } else if (outcomeDraws[rpsChoices[0]] === rpsChoices[2]) {
//         outcomeScore = 3;
//     } else if (outcomeLosses[rpsChoices[0]] === rpsChoices[2]) {
//         outcomeScore = 0;
//     }

    
//     return outcomeScore + shapeScore;
// }

// Part 2
function calculateScore(rpsChoices) {
    const outcomeScores = {
        'X': 0,
        'Y': 3,
        'Z': 6,
    };
    const outcomeScore = outcomeScores[rpsChoices[2]];

    const shapeScores = {
        'A X': 3,
        'A Y': 1,
        'A Z': 2,
        'B X': 1,
        'B Y': 2,
        'B Z': 3,
        'C X': 2,
        'C Y': 3,
        'C Z': 1,
    }

    const shapeScore = shapeScores[rpsChoices];
    
    return outcomeScore + shapeScore;
}

// 15387 is too high