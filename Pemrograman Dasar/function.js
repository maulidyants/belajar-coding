// function declaration
function updateDinoName(name) {
    name = 't-rex';
    return name;
}

let dinoName = 'brachio';

// call function
dinoName = updateDinoName(dinoName);  // dinoName = 't-rex'

console.log(dinoName);