const {generateRandomNumber} = require('/Users/ralsilwadi/Desktop/js-intro-9-rabe/js-intro-9-master/utils/MathHelper.js')

const numbers = [3, 4, 7, 3, 2, 2, 7];
let product = 1
for (i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) product *= numbers[i]
}
console.log(product)