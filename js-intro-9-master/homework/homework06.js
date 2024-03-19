//  Task 1
console.log('==========================================================\nTask 1:\n')

const noSpace = (str) => str.trim().split(' ').join('')

console.log(noSpace("") )
console.log(noSpace("Javascript") )
console.log(noSpace("    Hello   ") )
console.log(noSpace(" Hello    World   ") )
console.log(noSpace("Tech Global") )

//  Task 2
console.log('==========================================================\nTask 2:\n')

const replaceFirstLast = (str) => {
    str = str.trim().split('');
    if (str.length < 2) return '';
    [str[0], str[str.length - 1]] = [str[str.length - 1], str[0]];
    return str.join('');
}


console.log(replaceFirstLast("") )
console.log(replaceFirstLast("Hello") )
console.log(replaceFirstLast("Tech Global") )
console.log(replaceFirstLast("A") )
console.log(replaceFirstLast("    A      ") )

//  Task 3
console.log('==========================================================\nTask 3:\n')

// const hasVowel = (str) => str.toLowerCase().split('').some(char => ['a', 'e', 'i', 'o', 'u'].includes(char));
const hasVowel = (str) => str.toLowerCase().includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u');


console.log(hasVowel("")) 
console.log(hasVowel("Javascript")) 
console.log(hasVowel("Tech Global")) 
console.log(hasVowel("1234")) 
console.log(hasVowel("ABC")) 

//  Task 4
console.log('==========================================================\nTask 4:\n')

const checkAge = (yearOfBirth) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age < 16) {
        return "AGE IS NOT ALLOWED";
    } else if (age >= 16 && age <= 120) {
        return "AGE IS ALLOWED";
    } else {
        return "AGE IS NOT VALID";
    }
}

console.log(checkAge(2015)); 
console.log(checkAge(2007)); 
console.log(checkAge(2050)); 
console.log(checkAge(1920)); 
console.log(checkAge(1800)); 

//  Task 5
console.log('==========================================================\nTask 5:\n')

const averageOfEdges = (n1, n2, n3) => (Math.min(n1, n2, n3) + Math.max(n1, n2, n3)) / 2

console.log(averageOfEdges(0, 0, 0) )
console.log(averageOfEdges(0, 0, 6) )
console.log(averageOfEdges(-2, -2, 10) )
console.log(averageOfEdges(-3, 15, -3) )
console.log(averageOfEdges(10, 13, 20))

//  Task 6
console.log('==========================================================\nTask 6:\n')

const noA = (arr) => arr.map(word => word[0].toLowerCase() === 'a' ? word = '###' : word)

console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"])  )
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))

//  Task 7
console.log('==========================================================\nTask 7:\n')

const no3and5 = (arr) => arr.map(num => (num % 3 === 0 && num % 5 === 0) ? num = 101 : num % 3 === 0 ? num = 100 : num % 5 === 0 ? num = 99 : num)

console.log(no3and5([7, 4, 11, 23, 17]))
console.log(no3and5([3, 4, 5, 6]) )
console.log(no3and5([10, 11, 12, 13, 14, 15]))

//  Task 8
console.log('==========================================================\nTask 8:\n')

const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d+=2;
    }

    return true;
}

const countPrimes = (arr) => arr.reduce((count, number) => isPrime(number) ? count + 1 : count, 0);

console.log(countPrimes([-10, -3, 0, 1]))
console.log(countPrimes([7, 4, 11, 23, 17]) )
console.log(countPrimes([41, 53, 19, 47, 67]) )

//  Task 9
console.log('==========================================================\nTask 9:\n')

   const removeDuplicates = (arr) => [...new Set(arr)];
// const removeDuplicates = (arr) => arr.reduce((newArr, el) => !newArr.includes(el) ? newArr.concat(el) : newArr, [])
// const removeDuplicates = (arr) => arr.filter((el, index) => arr.indexOf(el) === index);


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) )
console.log(removeDuplicates([1, 2, 5, 2, 3]) )
console.log(removeDuplicates([0, -1, -2, -2, -1]) )
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) )
console.log(removeDuplicates(["1", "2", "3", "2", "3"]) )

//  Task 10
console.log('==========================================================\nTask 10:\n')

// const isDateFormatValid = date => date.includes('/') && (date = date.split('/')) && date[0].trim().length === 2 && date[1].trim().length === 2 && date[2].trim().length === 4;

const isDateFormatValid = date => {
    const [month, day, year] = date.split('/')
    if (month > 12 || day > 31) return false
    return (month.trim().length === 2 && day.trim().length === 2 && year.trim().length === 4)
}

console.log(isDateFormatValid("") )
console.log(isDateFormatValid("") )
console.log(isDateFormatValid("15-30-2020 ") )
console.log(isDateFormatValid("10.30.2020") )
console.log(isDateFormatValid("5/30/2020") )
console.log(isDateFormatValid("05/30/2020 "))
console.log(isDateFormatValid("10/2/2020") )
console.log(isDateFormatValid("10/02/2020 ") )

//  Task 11
console.log('==========================================================\nTask 11:\n')

const secondMax = (arr) => arr.length < 2 ? Math.max(...arr) : Math.max(...arr.filter(element => element !== Math.max(...arr)))
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMax([3, 4, 5, 6]))
console.log(secondMax([10]))

//  Task 12
console.log('==========================================================\nTask 12:\n')

const secondMin = (arr) => arr.length < 2 ? Math.min(...arr) : Math.min(...arr.filter(element => element !== Math.min(...arr)))

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMin([3, 4, 5, 6]))
console.log(secondMin([10]))

// Task 13
console.log('==========================================================\nTask 13:\n')

const mostRepeated = (arr) => {
    const choices = [...new Set(arr)];
    let mostR;
    let longestAmount = 0;

    for (const element of choices) {
        const currentAmount = arr.reduce((count, el) => el === element ? count + 1 : count, 0);

        if (currentAmount > longestAmount) {
            longestAmount = currentAmount;
            mostR = element;
        }
    }
    return mostR;
};

// const mostRepeated = (arr) => {
//     const counts = {};

//     arr.forEach(element => {
//         counts[element] = (counts[element] || 0) + 1;
//     });

//     let mostRepeatedElement;
//     let maxCount = 0;

//     Object.entries(counts).forEach(([element, count]) => {
//         if (count > maxCount) {
//             maxCount = count;
//             mostRepeatedElement = element;
//         }
//     });

//     return mostRepeatedElement;
// };


console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) )
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))
console.log(mostRepeated([10]) )
console.log(mostRepeated(["TechGlobal"])  )

