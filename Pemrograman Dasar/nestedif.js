let dino = {
    name: '',
    weight: 190,
    color: 'red'
};

if (dino.color === 'red') {
    if(dino.weight > 100) {
        dino.name = 't-rex';
    } else {
        dino.name = 'allo';
    }
}

console.log(dino.name);