// Task 1

let r1 = Math.floor(Math.random() * 100) + 1;
let r2 = Math.floor(Math.random() * 100) + 1;
let r3 = Math.floor(Math.random() * 100) + 1;
let avg = (r1 + r2 + r3)/3

console.log(avg >= 50)

console.log('\n-----------------------------------------------\n')
// Task 2

let r4 = Math.floor(Math.random() * 3) + 1;
let r5 = Math.floor(Math.random() * 3) + 1;
let r6 = Math.floor(Math.random() * 3) + 1;

if (r4 === r5 && r5 === r6) {
    console.log("TRIPLE MATCH")
}
else if (r4 === r5 || r5 === r6 || r4 === r6) {
    console.log("DOUBLE MATCH")
}
else {
    console.log("NO MATCH")
}

console.log('\n-----------------------------------------------\n')
// Task 3

function hasA(word) {
    return word.includes('a') || word.includes('A');
}

console.log(hasA("Hello")); // Output: false
console.log(hasA("A")); // Output: true
console.log(hasA("a")); // Output: true

console.log('\n-----------------------------------------------\n')
// Task 4

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) {
      return word + word + word;
    } else {
      return word + word;
    }
  }
  
  // Example usage:
  console.log(doubleOrTripleWord("Hello"))
  console.log(doubleOrTripleWord("JavaScript"))

  console.log('\n-----------------------------------------------\n')
  // Task 5

  function firstWord(word) {
    return word.slice(0, word.indexOf(' '))
  }

  console.log(firstWord('Hello World'))

  console.log('\n-----------------------------------------------\n')
  // Task 6

  function lastWord(word) {
    

    return word.slice(word.lastIndexOf(' ') + 1)
  }

  console.log(lastWord('Hello World'))

  console.log('\n-----------------------------------------------\n')
  // Task 7

  function firstlastWord(word) {
    return (word.slice(0, word.indexOf(' ')) + word.slice(word.lastIndexOf(' ') + 1))
  }

  console.log(firstlastWord('Hello World'))

  console.log('\n-----------------------------------------------\n')
  // Task 8

  function startVowel(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
  }

  console.log(startVowel("Hello"))
  console.log(startVowel("Apple"))

  console.log('\n-----------------------------------------------\n')
  // Task 9

  function swap4(word) {
    if (word.length >= 8) {
      let firstFour = word.slice(0, 4);
      let lastFour = word.slice(-4);
      let newWord = lastFour + word.slice(4, -4) + firstFour;
      return newWord;
    } else {
      return '';
    }
  }
  
  console.log(swap4('TechGlobal'))
  console.log(swap4('abcd'))

  console.log('\n-----------------------------------------------\n')
  // Task 10

  function swapFirstLastWord(sentence) {
    sentence = sentence.trim()
    const firstSpaceIndex = sentence.indexOf(' ');
    const lastSpaceIndex = sentence.lastIndexOf(' ');
  
    if (sentence.includes(' ')){
      let firstWord = sentence.slice(0, firstSpaceIndex);
      let lastWord = sentence.slice(lastSpaceIndex);
      let swappedSentence = lastWord + sentence.slice(firstSpaceIndex, lastSpaceIndex + 1) + firstWord;
      return swappedSentence;
 
    } else {
      return '';
    }
  }
  console.log(swapFirstLastWord('  '))
  console.log(swapFirstLastWord('Hello World'))
  console.log(swapFirstLastWord('I like JavaScript'))