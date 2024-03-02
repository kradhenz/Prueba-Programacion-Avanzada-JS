class Animal {
    constructor(name, age, img, comment, sound){
        this._name = name;
        this._age = age;
        this._img = img;
        this._comment = comment;
        this._sound = sound;
    }
    // Getter for 'name'
    get name() {
        return this._name;
    }
    // Getter for 'age'
    get age() {
        return this._age;
    }
    // Getter for 'img'
    get img() {
        return this._img;
    }
    // Getter & Setter for 'comment'
    get comment() {
        return this._comment;
    }
    set comment(newcomment) {
        this._comment = newcomment;
    }
    // Getter & Setter for 'sound'
    get sound() {
        return this._sound;
    }
}

export default Animal;