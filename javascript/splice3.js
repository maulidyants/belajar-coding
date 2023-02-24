const dinoGroup = ['t-rex', 'brachio', 'tricera'];

dinoGroup.splice(1, 1, 'allo');

console.log(dinoGroup); // [ 't-rex', 'allo', 'tricera' ]