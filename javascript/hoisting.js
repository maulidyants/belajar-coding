let dinoName = 'brachio';

updateDinoName(dinoName); // ReferenceError: Cannot access 'updateDinoName' before initialization

const updateDinoName = function (name) {
    name = 't-rex';
    return name;
};