// Task 7
const factorial = n => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
const arrFactorial = arr => arr.map(factorial);


console.log(arrFactorial([1, 2, 3 ,4]))
console.log(arrFactorial([0, 5]) )
console.log(arrFactorial([5 , 0, 6]) )
console.log(arrFactorial([]) )
