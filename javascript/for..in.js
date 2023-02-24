const blueDino = {
    age: 150,
    height: '1.5 m',
    weight: '500 kg'
};

for (const key in blueDino) {
    console.log(`${key}: ${blueDino[key]}`);
}