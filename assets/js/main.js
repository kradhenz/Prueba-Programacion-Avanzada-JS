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

        console.log(`${name}, ${age}, ${comment},\n${img},\n${sound}`);

        if (name && age && comment) {
            const option = getInstance(name, age, img, comment, sound);
            let animalsSection = document.getElementById('Animals');

            let animals = [];
            animals.push(option);
            console.log(animals);

            // animalsSection.innerHTML = ""; // >> REVISAR <<

            animals.forEach(animal => {
                animalsSection.innerHTML += createCard(animal, option);
            });

            /*
            document.getElementById('animal').value = "Seleccione un animal";
            document.getElementById('age').value = "Seleccione un rango de años";
            document.getElementById('comment').value = "";
            */
            
            preview.style.backgroundImage = "";

            // Event for audio button
            let btnAudio = document.getElementById(`${name}`); // >> REVISAR << 
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