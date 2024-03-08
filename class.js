function firstLongest(words) {
    let longestWord = '';
    for (word of words) {
        if (word.length > longestWord.length) longestWord = word
    }
    return longestWord;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]))
console.log(firstLongest(["Apple", "Banana", "Orange"]))
console.log(firstLongest(["purple", "yellow", "orange"]))

console.log(lastShortest(["red", "blue", "yellow", "white"]))
console.log(lastShortest(["Apple", "Banana", "Mango"]))
console.log(lastShortest(["white", "yellow", "brown"]))

console.log(max([0, 3, -9,  5, 8]))
console.log(max([-2, 0, -7, 10, -5]))
console.log(max([1, 2, 3, -2]))   

console.log(min([0, 3,  5, 8]))
console.log(min([-2, 0, -7, 10, -5]))
console.log(min([1, 2, 3, 15]))