function isDigit(char) {
    let charAscii = char.charCodeAt(0);

    return 48 <= charAscii && charAscii <= 57;
}


function isSpace(char) {
    let charAscii = char.charCodeAt(0);

    return charAscii === 32;
}


function isUpperCase(char) {
    let charAscii = char.charCodeAt(0);

    return 65 <= charAscii && charAscii <= 90;
}


function isLowerCase(char) {
    let charAscii = char.charCodeAt(0);

    return 97 <= charAscii && charAscii <= 122;
}


function isLetter(char) {
    return isUpperCase(char) || isLowerCase(char);
}


function isLetterOrDigit(char) {
    return isDigit(char) || isLetter(char);
}


function isSpecial(char) {
    return !isLetterOrDigit(char) && !isSpace(char);
}


function isVowel(char) {
    return 'aeouiAEOUI'.includes(char);
}

//  Task 1
console.log('==========================================================\nTask 1:\n')

function countPos(nums) {
    let posCount = 0
    for (const num of nums) {
        if (num > 0) posCount++
    }
    return posCount
}

// const countPos = (nums) => nums.reduce((count, num) => num > 0 ? count + 1 : count, 0);

console.log(countPos([-45, 0, 0, 34, 5, 67]) )
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]) )
console.log(countPos([0, -1, -2, -3]) )

//  Task 2
console.log('==========================================================\nTask 2:\n')

function countA(str) {
    str.trim()
    arr = str.split('')
    let aCount = 0
    for (const char of arr) {
        if (char.toLowerCase() === 'a') aCount++
    }
    return aCount
}

console.log(countA("TechGlobal is a QA bootcamp") )
console.log(countA("QA stands for Quality Assurance") )
console.log(countA("Cypress") )

//  Task 3
console.log('==========================================================\nTask 3:\n')

function countVowels(str) {
    str.trim()
    arr = str.split('')
    let vCount = 0
    for (const char of arr) {
        if ('aeouiAEOUI'.includes(char)) vCount++
    }
    return vCount
}

console.log(countVowels("Hello") )
console.log(countVowels("Hello World") )
console.log(countVowels("JavaScript is fun") )
console.log(countVowels("") )

//  Task 4
console.log('==========================================================\nTask 4:\n')

function countConsonants(str) {
    str.trim()
    arr = str.split('')
    let cCount = 0
    for (const char of arr) {
        if (!'aeouiAEOUI'.includes(char)) cCount++
    }
    return cCount
}

console.log(countConsonants("Hello") )
console.log(countConsonants("Hello World") )
console.log(countConsonants("JavaScript is fun") )
console.log(countConsonants("") )

//  Task 5
console.log('==========================================================\nTask 5:\n')

// function countWords(str) {
//     return str.trim().split(' ').length
// }

const countWords = (str) => str.trim().split(/\s+/).length;

console.log(countWords("     Javascript is fun       "))
console.log(countWords("Cypress is an UI automation tool.    ") )
console.log(countWords("1 2 3 4") )

//  Task 6
console.log('==========================================================\nTask 6:\n')

function factorial(n1) {
    let result = 1;
    for (let i = n1; i >= 1; i--) {
        result *= i;
    }
    return result
}

console.log(factorial(5) )
console.log(factorial(4) )
console.log(factorial(0) )
console.log(factorial(1) )

//  Task 7
console.log('==========================================================\nTask 7:\n')

function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (str[i].toLowerCase() !== str[str.length - (i+1)].toLowerCase()) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic") )
console.log(isPalindrome("abba") )
console.log(isPalindrome("ab  a") )
console.log(isPalindrome("123454321") )
console.log(isPalindrome("A") )
console.log(isPalindrome("") )

//  Task 8
console.log('==========================================================\nTask 8:\n')

function countMultipleWords(arr) {
    let multipleWordCount = 0
    for (const element of arr) {
        if (element.trim().includes(' ')) multipleWordCount++
    }
    return multipleWordCount
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) )
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) )
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) )
console.log(countMultipleWords([ ]) )

//  Task 9
console.log('==========================================================\nTask 9:\n')

// const count3OrLess = (str) => str.trim().split(' ').reduce((count, element) => element.length <= 3 && element.length > 0 ? count + 1 : count, 0);

function count3OrLess(str) {
    let arr = str.trim().split(' ')
    let lessThan3Count = 0
    for (const element of arr) {
        if (element.length <= 3 && element.length > 0) lessThan3Count++
    }
    return lessThan3Count
}

console.log(count3OrLess("Hello") )
console.log(count3OrLess("Hi John") )
console.log(count3OrLess("JavaScript is fun") )
console.log(count3OrLess("My name is John Doe") )
console.log(count3OrLess("") )

//  Task 10
console.log('==========================================================\nTask 10:\n')

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(5) )
console.log(isPrime(2) )
console.log(isPrime(29) )
console.log(isPrime(-5) )
console.log(isPrime(0) )
console.log(isPrime(1) )

//  Task 11
console.log('==========================================================\nTask 11:\n')

function add(array1, array2) {
    const array3 = [];
    const shortArray = array1.length < array2.length ? array1 : array2;
    const longArray = array1.length > array2.length ? array1 : array2;

    for(let i = 0; i < shortArray.length; i++) {
        array3.push(array1[i] + array2[i]);
    }

    return array3.concat(longArray.slice(shortArray.length));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ) )
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) )
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]) )

//  Task 12
console.log('==========================================================\nTask 12:\n')

// function removeExtraSpaces(str) {
//     return str.trim().split(' ').filter((element) => element !== '').join(' ')
// }

const removeExtraSpaces = (str) => str.trim().split(' ').filter((element) => element !== '').join(' ');

console.log(removeExtraSpaces("Hello") )
console.log(removeExtraSpaces("      Hello    World     ") )
console.log(removeExtraSpaces("     JavaScript is          fun") )
console.log(removeExtraSpaces("") )

//  Task 13
console.log('==========================================================\nTask 13:\n')

// function findClosestTo10(arr) {
//     const filteredArr = arr.filter(value => value !== 10);
//     const arrDiffs = filteredArr.map(value => Math.abs(value - 10));
//     const minDiff = Math.min(...arrDiffs);
//     const candidateElements = filteredArr.filter((value, index) => arrDiffs[index] === minDiff);
//     return Math.min(...candidateElements);
// }

function findClosestTo10(arr) {
    let closest = Infinity
    for (const value of arr) {
        let tenDiff = Math.abs(10 - value);
        let closeDiff = Math.abs(10 - closest);
        if (value !== 10 && (tenDiff < closeDiff || (tenDiff === closeDiff && value < closest))) {
            closest = value;
        }
    }
    return closest
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]))
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosestTo10([0, -1, -2]))

//  Task 14
console.log('==========================================================\nTask 14:\n')

/*
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
    •There should be at least characters before @ character.
    •There should be at least 2 characters between @ and . 
    Characters.
    •There should be at least 2 characters after the . character.
*/

function isEmailValid(email) {
    if (!email.includes('@') || !email.includes('.') || email.includes(' ') || email.split('@').length !== 2) {
        return false;
    }
    const [localPart, domainPart, url] = email.split(/[.@]+/);
    if (localPart.length < 2 || domainPart.length < 2 || !url || url.length < 2) {
        return false;
    }
    return true;
}

console.log(isEmailValid(""));  // false
console.log(isEmailValid("@gmail.com"));  // false
console.log(isEmailValid("johndoe@yahoo"));  // false
console.log(isEmailValid("johndoe@.com"));  // false
console.log(isEmailValid("a@outlook.com"));  // false
console.log(isEmailValid("johndoe@a.com"));  // false
console.log(isEmailValid("johndoe@@gmail.com"));  // false
console.log(isEmailValid("johndoe@gmail.com"));  // true


//  Task 15
console.log('==========================================================\nTask 15:\n')

function isPasswordValid(password) {
    if (password.length < 8 || password.length > 16 || password.includes(' ')) return false;

    let upperCount = 0;
    let digitCount = 0;
    let lowerCount = 0;
    let specialCount = 0;

    for (const char of password) {
        if (char >= '0' && char <= '9') digitCount++;
        else if (char >= 'a' && char <= 'z') lowerCount++;
        else if (char >= 'A' && char <= 'Z') upperCount++;
        else specialCount++;
    }

    if (upperCount === 0 || digitCount === 0 || lowerCount === 0 || specialCount === 0) {
        return false;
    }

    return true;
}

console.log(isPasswordValid(""));                // false
console.log(isPasswordValid("abcd"));            // false
console.log(isPasswordValid("abcd1234"));        // false
console.log(isPasswordValid("Abcd1234"));        // false
console.log(isPasswordValid("Chicago12345US!#$%"));// true
console.log(isPasswordValid("Abcd1234$"));       // true
console.log(isPasswordValid("Chicago123$"));      // false
console.log(isPasswordValid("Test1234#"));        // false
