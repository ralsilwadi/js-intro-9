const {generateRandomNumber} = require('/Users/ralsilwadi/Desktop/js-intro-9-rabe/js-intro-9-master/utils/MathHelper.js')

const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
let sum = 0;
for (let i = 0; i < 3; i++) {
    sum += nums[i] + nums[nums.length - (i+1)]
}
console.log(`The sum is ${sum}`)