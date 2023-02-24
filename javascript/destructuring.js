const blueDino = {
    firstName: 'brachio',
    lastName: 'saurus',
    address: 'Jakarta'
};

const {firstName: name, address: city} = blueDino;

console.log(name); // brachio
console.log(city); // Jakarta