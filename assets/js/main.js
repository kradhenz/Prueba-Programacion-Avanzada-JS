import { getInstance } from "./modules/sound.js";
import dataAnimals from "./modules/source.js";
import createCard from "./modules/card.js"

let animal = document.getElementById("animal");

animal.addEventListener('change', async () => {
    let name = animal.value;
    let data = await dataAnimals.getData();
    const result = data.find((test) => test.name == name);

    let img = `./assets/img/${result.image}`;
    let preview = document.getElementById('preview');
    let btnAdd = document.getElementById('btnAdd');

    preview.style.backgroundImage = `url(${img})`;

    btnAdd.addEventListener('click', async () => {
        let age = document.getElementById('age').value;
        let comment = document.getElementById('comment').value;
        let sound = `./assets/sound/${result.sound}`;

        if (name && age && comment) {
            const option = getInstance(name, age, img, comment, sound);
            let animalsSection = document.getElementById('Animals');

            let animals = [];
            animals.push(option);
            console.log(animals);

            //animalsSection.innerHTML = "";
            animals.forEach(animal => {
                animalsSection.innerHTML += createCard(animal, img, sound);
            });
            //animalsSection.innerHTML = createCard(option);
            
            // Event for audio button
            let btnAudio = document.getElementById('btnAudio');
            btnAudio.addEventListener('click', async () => {
                console.log('click');
                if (name == 'Leon') {
                    option.rugir()
                    console.log('Rugir');
                } else if (name == 'Lobo') {
                    option.aullar()
                    console.log('Aullar');
                } else if (name == 'Oso') {
                    option.gruñir()
                    console.log('Gruñir');
                } else if (name == 'Serpiente') {
                    option.sisear()
                    console.log('Sisear');
                } else {
                    option.chillar()
                    console.log('Chillar');
                }
            });
        } else {
            alert("Por favor seleccione una opción en todos los campos");
        }
    });
});