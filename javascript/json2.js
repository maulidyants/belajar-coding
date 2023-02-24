const jsonDino = `{
    "age": "150",
    "height": "1.5 m",
    "weight": "500 kg"
}`;

const blueDino = JSON.parse(jsonDino);

console.log(blueDino); // { age: '150', height: '1.5 m', weight: '500 kg' }