//  Task 1
console.log('==========================================================\nTask 1:\n')

const hasUpperCase = str => str.split('').some(char => (char >= 'A' && char <= 'Z'))

console.log(hasUpperCase("javascript"))
console.log(hasUpperCase("John"))
console.log(hasUpperCase("$125.0"))
console.log(hasUpperCase(""))

//  Task 2
console.log('==========================================================\nTask 2:\n')

const noDigit = str => str.split('').filter(char => !(char >= '0' && char <= '9')).join('')

console.log(noDigit("") )
console.log(noDigit("Javascript") )
console.log(noDigit("123Hello")  )
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149") )

//  Task 3
console.log('==========================================================\nTask 3:\n')

const noVowel = str => str.split('').filter(char => !('aeouiAEOUI'.includes(char))).join('')

console.log(noVowel("TechGlobal") )
console.log(noVowel("AEOxyz") )
console.log(noVowel("Javascript") )
console.log(noVowel("") )
console.log(noVowel("125$") )

//  Task 4
console.log('==========================================================\nTask 4:\n')

const no13 = arr => arr.map(element => element === 13 ? element = 0 : element)

console.log(no13([1, 2, 3 ,4]) )
console.log(no13([13, 2, 3]) )
console.log(no13([13, 13, 13 , 13, 13]) )
console.log(no13([]) )

//  Task 5
console.log('==========================================================\nTask 5:\n')

const middleInt = (...nums) => nums.filter((element) => element !== Math.max(...nums) && element !== Math.min(...nums) )[0]

console.log(middleInt(1, 20, 3))

//  Task 6
console.log('==========================================================\nTask 6:\n')

const sumOfDigits = (str) => str.split('').reduce((sum, char) => (char >= '0' && char <= '9') ? sum += parseInt(char) : sum, 0)

console.log(sumOfDigits("$125.0") )

//  Task 7
console.log('==========================================================\nTask 7:\n')
const factorial = n => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
const arrFactorial = arr => arr.map(factorial);

console.log(arrFactorial([1, 2, 3 ,4]))
console.log(arrFactorial([0, 5]) )
console.log(arrFactorial([5 , 0, 6]) )
console.log(arrFactorial([]) )

// Task 8
console.log('==========================================================\nTask 8:\n')

const categorizeCharacters = str => {
    str = str.split('')
    let letters = '', numbers = '', specials = ''
    for (char of str) {
        if (char >= '0' && char <= '9') numbers += char
        else if (char >= 'a' && char <= 'z') letters += char
        else if (char >= 'A' && char <= 'Z') letters += char
        else specials += char
    }
    return [letters, numbers, specials]
}

console.log(categorizeCharacters("abc123$#%"))
console.log(categorizeCharacters("12ab$%3c%"))
