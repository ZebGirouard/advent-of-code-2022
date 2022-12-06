const fs = require('fs')

const signal = fs.readFileSync('signal.txt').toString();

currentBuffer = [];

for (let i = 0; i < signal.length; i++) {
    currentBuffer.push(signal[i]);
    // Part 1
    // if (currentBuffer.length > 4) {
    // Part 2
    if (currentBuffer.length > 14) {
        currentBuffer.shift();
        const bufferSet = new Set(currentBuffer);
        console.log(bufferSet)
        if (bufferSet.size === currentBuffer.length) {
            console.log(i + 1)
            break;
        }
    }
}