function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporting your reusable methods
module.exports.generateRandomNumber = generateRandomNumber;
// const {generateRandomNumber} = require('/Users/ralsilwadi/Desktop/js-intro-9-rabe/js-intro-9-master/utils/MathHelper.js')
