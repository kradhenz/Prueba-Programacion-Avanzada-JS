import Animal from './modules/animal.js'

const player = document.getElementById("player");

class Leon extends Animal{
    constructor(name, age, img, comment, sound){
        super(name, age, img, comment, sound);
    }
    rugir(){
        console.log(this.sound);
    }
}

class Lobo extends Animal{
    constructor(name, age, img, comment, sound){
        super(name, age, img, comment, sound);
    }
    aullar(){
        console.log(this.sound);
    }
}
class Oso extends Animal{
    constructor(name, age, img, comment, sound){
        super(name, age, img, comment, sound);
    }
    gruñir(){
        console.log(this.sound);
    }
}
class Serpiente extends Animal{
    constructor(name, age, img, comment, sound){
        super(name, age, img, comment, sound);
    }
    sisear(){
        console.log(this.sound);
    }
}
class Aguila extends Animal{
    constructor(name, age, img, comment, sound){
        super(name, age, img, comment, sound);
    }
    chillar(){
        console.log(this.sound);
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }; // Used to export the classes