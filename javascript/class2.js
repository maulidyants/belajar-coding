class Dino {
    // contructor 
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    // getter
    get name() {
        return this.name;
    }

    // setter
    set name(newName) {
        this.name = newName
    }

    // method
    greeting() {
        console.log(`Hi my name is ${this.name}`);
    }
}

console.log(Dino); // Hi my name is Brachio