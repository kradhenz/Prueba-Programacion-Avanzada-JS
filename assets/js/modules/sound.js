import Animal from './animal.js'

let player = document.getElementById('player')

class Leon extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    rugir() {
        player.src = `./assets/sounds/${this._sound}`;
        player.play();
    }
}

class Lobo extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    aullar() {
        player.src = `./assets/sounds/${this._sound}`;
        player.play();
    }
}
class Oso extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    gruñir() {
        player.src = `./assets/sounds/${this._sound}`;
        player.play();
    }
}
class Serpiente extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    sisear() {
        player.src = `./assets/sounds/${this._sound}`;
        player.play();
    }
}
class Aguila extends Animal {
    constructor(name, age, img, comment, sound) {
        super(name, age, img, comment, sound);
    }
    chillar() {
        player.src = `./assets/sounds/${this._sound}`;
        player.play();
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };