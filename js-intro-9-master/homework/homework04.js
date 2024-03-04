//Task 1
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
*/

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i)
    }
}

console.log('==========================================================\n')
//Task 2
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i)
    }
}
console.log('==========================================================\n')
//Task 3
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
*/

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) {
        console.log(i)
    }
}
console.log('==========================================================\n')
//Task 4
/*
Requirement:
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
*/

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is ${i ** 2}`)
}
console.log('==========================================================\n')
//Task 5
/*
Requirement:
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/

let sum = 0
for (let i = 1; i <= 10; i++) {
    sum = sum + i
}
console.log(sum)
console.log('==========================================================\n')
//Task 6
/*
Requirement:
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

let r1 = Math.floor(Math.random() * 10) + 1
console.log(r1)
let factorial = 1;
for (let i = r1; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)
console.log('==========================================================\n')
//Task 7
/*
Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.

The program should also count how many attempts it 
takes to generate such a number.

Eventually, print the random number divisible by 5 with 
the number of attempts as below.

Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/

let r7 = 0
let attempts = 0
do {
    r7 = Math.floor(Math.random() * 100) + 1
    attempts += 1
} while (r7 % 5 !== 0);
console.log(`The random number is ${r7} and it took 
${attempts} attempt/s to generate it.`)

console.log('==========================================================\n')
//Task 8
/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/
let arr8 = ['Germany', 'Argentina', 'Ukraine', 'Romania']
console.log(arr8)
console.log(arr8.sort())

console.log('==========================================================\n')
//Task 9
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/

let arr9 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']
console.log(arr9)
console.log(arr9.includes('Pluto'))
console.log('==========================================================\n')


//Task 10
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

let arr10 = [`Garfield`, `Tom`, `Sylvester`, `Azrael`]
console.log(arr10.sort())
console.log(arr10.includes('Garfield') && arr10.includes('Felix'))
console.log('==========================================================\n')

//Task 11
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

let arr11 = [10.5, 20.75, 70, 80, 15.75]
console.log(arr11)
for (let i of arr11) {
    console.log(i)
}
console.log('==========================================================\n')

//Task 12
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4
*/

let objs = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(objs);

let countBorP = 0;
let countBookOrPen = 0;
for (let i of objs) {
    if (i[0].toLowerCase() === 'b' || i[0].toLowerCase() === 'p') {
        countBorP++;
    }

    if (i.toLowerCase().includes('book') || i.toLowerCase().includes('pen')) {
        countBookOrPen++;
    }
}
console.log(`Elements starting with 'B' or 'P' = ${countBorP}`);
console.log(`Elements having 'book' or 'pen' = ${countBookOrPen}`);
console.log('==========================================================\n')

//Task 13
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/
arr13 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
let moreThan10 = 0;
let lessThan10 = 0;
let is10 = 0;

for (let i in arr13) {
    if (arr13[i] > 10) moreThan10++
    else if (arr13[i] < 10) lessThan10++
    else is10++
}
console.log(arr13)
console.log(`Elements that are more than 10 = ${moreThan10}`)
console.log(`Elements that are less than 10 = ${lessThan10}`)
console.log(`Elements that are 10 = ${is10}`)
console.log('==========================================================\n')

//Task 14
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is =  [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/
let ar1 = [5, 8, 13, 1, 2]
let ar2 = [9, 3, 67, 1, 0]
let ar3 = []

for (let i in ar1) {
    if (ar1[i] >= ar2[i]) ar3.push(ar1[i])
    else ar3.push(ar2[i])
}

console.log(`1st array is = [${ar1}]`);
console.log(`2nd array is = [${ar2}]`);
console.log(`3rd array is = [${ar3}]`);
console.log(ar3)
console.log('==========================================================\n')
//Task 15
/*
Requirement:
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar' ])  -> -1
*/

function firstDuplicate(arr) {
    for (let i in arr) {
        let ct = 0;
        for (let j in arr) {
            if (arr[i] === arr[j]) {
                ct++
            }
            if (ct === 2) {
                return arr[i]
            }
        }
    }
    return -1
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]))
console.log(firstDuplicate([5, '5', 3, 7, 4]))
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']))
console.log(firstDuplicate([1, 2, 3]))
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']))
console.log('==========================================================\n')

//Task 16
/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a' ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/

function getDuplicates(arr) {
    let dupes = []
    for (let i in arr) {
        let ct = 0;
        for (let j in arr) {
            if (arr[i] === arr[j] && !dupes.includes(arr[i])) {
                ct++
            }
            if (ct === 2) {
                dupes.push(arr[i])
                break
            }
        }
    }
    return dupes
}


console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]))
console.log(getDuplicates([1, 2, 5, 0, 7]))
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']))
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']))
console.log('==========================================================\n')
//Task 17
/*
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

function reverseStringWords(str) {
    str = str.trim()
    let arr = str.split(' ')
    for (let i in arr) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    str = arr.join(' ')
    return str
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))
console.log('==========================================================\n')

//Task 18
/*
Requirement:
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 

Assume you will not be given negative numbers.

Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/

function getEvens(n1, n2) {
    let arr = []
    let smallNum = (Math.min(n1, n2))
    let bigNum = (Math.max(n1, n2))
    for (i = smallNum; i <= bigNum; i++) {
        if (i % 2 === 0) arr.push(i)
    }
    return arr
}

console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))
console.log('==========================================================\n')
//Task 19
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(n1, n2) {
    let arr = []
    let smallNum = (Math.min(n1, n2))
    let bigNum = (Math.max(n1, n2))
    for (i = smallNum; i <= bigNum; i++) {
        if (i % 5 === 0) arr.push(i)
    }
    return arr
}

console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))
console.log('==========================================================\n')

// Task 20 
function fizzBuzz(n1, n2) {
    let arr = []
    let smallNum = (Math.min(n1, n2))
    let bigNum = (Math.max(n1, n2))
    for (i = smallNum; i <= bigNum; i++) {
        if (i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz')
        else if (i % 5 === 0) arr.push('Buzz')
        else if (i % 3 === 0) arr.push('Fizz')
        else arr.push(i)
    }
    str = arr.join(' | ')
    return str
}
console.log(fizzBuzz(13, 18))
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))
console.log(fizzBuzz(9, 6))