//  Task 1
console.log('==========================================================\nTask 1:\n')

const noSpace = (str) =>  str.trim().split('').filter(char => char !== ' ').join('')

console.log(noSpace("") )
console.log(noSpace("Javascript") )
console.log(noSpace("    Hello   ") )
console.log(noSpace(" Hello World   ") )
console.log(noSpace("Tech Global") )

//  Task 2
console.log('==========================================================\nTask 2:\n')

function replaceFirstLast(str) {
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

function hasVowel(str) {
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            return true;
        }
    }
    return false;
}

console.log(hasVowel("")) 
console.log(hasVowel("Javascript")) 
console.log(hasVowel("Tech Global")) 
console.log(hasVowel("1234")) 
console.log(hasVowel("ABC")) 

//  Task 4
console.log('==========================================================\nTask 4:\n')

function checkAge(yearOfBirth) {
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

