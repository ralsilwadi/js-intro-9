// Task 1

let r1 = Math.floor(Math.random() * 100) + 1

if (r1 <= 50) {
    console.log(r1, 'is in the 1st half') 
} else (console.log(r1, 'is in the 2nd half') )


if (r1 <= 25) {
    console.log(r1, 'is in the 1st quarter') 
}
else if (r1 <= 50) { 
     console.log(r1, 'is in the 2nd quarter')
}
else if (r1 <= 75) {
    console.log(r1, 'is in the 3rd quarter')
}
else console.log(r1, 'is in the 4th quarter')

console.log('\n-----------------------------------------------\n')

// Task 2

let t2r1 = Math.floor(Math.random() * 100) + 1
let t2r2 = Math.floor(Math.random() * 100) + 1
let t2r3 = Math.floor(Math.random() * 100) + 1

console.log(t2r1 % 2 === 0 && t2r2 % 2 === 0 && t2r3 % 2 === 0)

console.log('\n-----------------------------------------------\n')

// Task 3

const str1 = '/';
let str1A = str1.charCodeAt(0)

if ((str1A >= 65 && str1A <= 90) || (str1A >= 97 && str1A <= 122)) {
    console.log(`${str1} is a letter`);
} 
else if (str1A >= 48 && str1A <= 57) {
    console.log(`${str1} is a digit`);
}
else if (str1A === 32) {
    console.log(`${str1} is a whitespace`);
}
else {
    console.log(`${str1} is a special character`);
}

console.log('\n-----------------------------------------------\n')

// Task 4

function hasBlue(word) {
    return word.toLowerCase().includes('blue')
}

console.log(hasBlue('JavaBLUEsCr )893'))

console.log('\n-----------------------------------------------\n')

// Task 5

function startT(word1) {
    return word1.toLowerCase().startsWith('t')
}

console.log(startT('T'))


