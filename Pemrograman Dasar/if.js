let dino = {
    name: '',
    weight: 110,
    color: 'red'
};

if (dino.weight > 100 && dino.color === 'red') {
    dino.name = 't-rex';
}

console.log(dino.name);