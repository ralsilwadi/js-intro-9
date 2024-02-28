const {generateRandomNumber} = require('/Users/ralsilwadi/Desktop/js-intro-9-rabe/js-intro-9-master/utils/MathHelper.js')

let r1 = generateRandomNumber(1,10)
let r2 = generateRandomNumber(1,10)
smallNum = (Math.min(r1, r2))
bigNum = (Math.max(r1, r2))

for (let i = smallNum; i <= bigNum; i++) {
    console.log(i)
}