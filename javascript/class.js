class Dino {
    constructor(name) {
        this.name = name;
    }

    weight = 100;

    sayHi() {
        console.log(`Hi my name is ${this.name}`);
    }
}

const blueDino = new Dino('brachio');
const redDino = new Dino('t-rex');

//call

console.log(blueDino.weight); //100
console.log(redDino.weight); // 100

blueDino.sayHi(); // Hi my name is brachio
redDino.sayHi(); // Hi my name ia t-rex