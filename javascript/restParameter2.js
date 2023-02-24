const add = (...nums) => {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    return total;
};

add(1, 2, 3);

const result = add(1, 2, 3);

console.log(result); // 6