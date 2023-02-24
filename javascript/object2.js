const blueDino = {
    age: 150,
    height: '1.5 m',
    weight: '500 kg'
};

blueDino.age = 200;
blueDino['weight'] = '650 kg';

console.log(blueDino.age); // 200
console.log(blueDino['weight']); // 650 kg