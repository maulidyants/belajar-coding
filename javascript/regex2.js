let word = 'Brachiosaurus has been estimated at 20 meters';
let regexPattern = /[0-9]+/;

let newWord = word.replace(regexPattern, 140);

console.log(newWord); // Brachiosaurus has been estimated at 140 meters