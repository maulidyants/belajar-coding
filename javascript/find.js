const numbers = [10, 9, 11, 12, 8, 13];

function getBigNumber(number) {
    if (number > 10) {
        return number;
    }
}

const result = numbers.find(getBigNumber);

console.log(result); // 11