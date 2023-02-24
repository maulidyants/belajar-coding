const blueDino = {
    age: 150,
    height: '1.5 m',
    weight: '500 kg'
};

const jsonDino = JSON.stringify(blueDino);

console.log(jsonDino); // {"age": 150,"height","1.5 m","weight":"500 kg"}