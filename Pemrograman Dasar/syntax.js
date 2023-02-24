let dino = {
    name: '',
    color: 'orange'
};

switch (dino.color) {
    case 'blue':
        dino.name = 'brachio';
        break;
    case 'green':
        dino.name = 'stego';
        break;
    case 'brown':
        dino.name = 'tricera';
        break;
    case 'orange':
        dino.name = 'allo';
        break;
    default:
        console.log('Sorry, cannot find dino name');
}

console.log(dino.name);