// Task 1
let str1 = "5";
let str2 = "2";

let num1 = Number(str1);
let num2 = Number(str2);

let sum = num1 + num2;
let product = num1 * num2;
let division = num1 / num2;
let subtraction = num1 - num2;
let remainder = num1 % num2;
let exponentiation = num1 ** num2;

console.log(`The sum of ${num1} and ${num2} is = ${sum}`);
console.log(`The product of ${num1} and ${num2} is = ${product}`);
console.log(`The division of ${num1} and ${num2} is = ${division}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${subtraction}`);
console.log(`The remainder of ${num1} and ${num2} is = ${remainder}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${exponentiation}`);

// Task 2
let s1 = "200", s2 = "-50";
s1 = Number(s1);
s2 = Number(s2);
let greatest = Math.max(s1, s2);
let smallest = Math.min(s1, s2);
let average = (s1 + s2) / 2;
let absDifference = Math.abs(s1 - s2);

console.log(`The greatest value is = ${greatest}`);
console.log(`The smallest value is = ${smallest}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${absDifference}`);

// Task 3
let randomNum1 = Math.floor(Math.random() * 50) + 1;
let randomNum2 = Math.floor(Math.random() * 50) + 1;

let absoluteDifference = Math.abs(randomNum1 - randomNum2);

console.log(`The absolute difference between numbers is = ${absoluteDifference}`);

// Task 4
let randomNumber1 = Math.floor(Math.random() * 50) + 1;
let randomNumber2 = Math.floor(Math.random() * 50) + 1;
let randomNumber3 = Math.floor(Math.random() * 50) + 1;
let randomNumber4 = Math.floor(Math.random() * 50) + 1;
let randomNumber5 = Math.floor(Math.random() * 50) + 1;

let max = Math.max(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5);
let min = Math.min(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5);

console.log(`The max value = ${max}`);
console.log(`The min value = ${min}`);

// Task 5
let r1 = Math.floor(Math.random() * 50) + 1;
let r2 = Math.floor(Math.random() * 50) + 1;
let r3 = Math.floor(Math.random() * 50) + 1;

console.log(`The first number is = ${r1}`);
console.log(`The second number is = ${r2}`);
console.log(`The third number is = ${r3}`);
console.log(`The sum of the numbers = ${r1 + r2 + r3}`);

// Task 6
let rNum1 = Math.floor(Math.random() * 100) + 1;
let rNum2 = Math.floor(Math.random() * 100) + 1;
let rNum3 = Math.floor(Math.random() * 100) + 1;

let allGreaterThan25 = rNum1 > 25 && rNum2 > 25 && rNum3 > 25;

console.log(allGreaterThan25);

// Task 7
let fname = "David";
console.log(`The length of the name is = ${fname.length}`);
console.log(`The first letter of the name is = ${fname[0]}`);
console.log(`The last letter of the name is = ${fname[fname.length - 1]}`);
console.log(`The first 3 characters of the name are = ${fname.slice(0, 3)}`);
console.log(`The last 3 characters of the name are = ${fname.slice(-3)}`);