let dino = {
    name: '',
    color: 'orange'
};

if (dino.color === 'red') {
    dino.name = 't-rex';
} else if (dino.color === 'blue') {
    dino.name = 'brachio';
} else {
    dino.name = 'stego';
}

console.log(dino.name);