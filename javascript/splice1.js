const dinoGroup = ['t-rex', 'brachio', 'tricera'];

dinoGroup.splice(1, 0, 'allo');

console.log(dinoGroup); // [ 't-rex', 'allo', 'brachio', 'tricera' ]