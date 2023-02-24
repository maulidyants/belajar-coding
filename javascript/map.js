const numbers = [1, 2, 3, 4, 5];

function doubleIt(number) {
    return number * 2;
}

const result = numbers.map(doubleIt);

console.log(result); // [ 2, 4, 6, 8, 10 ]