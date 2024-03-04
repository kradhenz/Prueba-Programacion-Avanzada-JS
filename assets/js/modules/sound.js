import Animal from './animal.js'

let player = document.getElementById('player')
// Each animal class below have a function to play a different sound
class Leon extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    rugir() {
        player.src = `./${this._sound}`;
        player.play();
    }
}
class Lobo extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    aullar() {
        player.src = `./${this._sound}`;
        player.play();
    }
}
class Oso extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    gruñir() {
        player.src = `./${this._sound}`;
        player.play();
    }
}
class Serpiente extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    sisear() {
        player.src = `./${this._sound}`;
        player.play();
    }
}
class Aguila extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    chillar() {
        player.src = `./${this._sound}`;
        player.play();
    }
}
// Function to create an instance of the specified animal
function getInstance(name, age, img, comment, sound) {
    switch (name) {
        // Creating and returning a new instance for each animal
        case 'Leon':
            return new Leon(name, age, img, comment, sound);
        case 'Lobo':
            return new Lobo(name, age, img, comment, sound);
        case 'Oso':
            return new Oso(name, age, img, comment, sound);
        case 'Serpiente':
            return new Serpiente(name, age, img, comment, sound);
        case 'Aguila':
            return new Aguila(name, age, img, comment, sound);
        default:
            throw new Error(`Animal "${name}" no reconocido`);
    }
}

export { getInstance };