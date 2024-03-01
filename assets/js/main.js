import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modules/sound.js";
import dataAnimals from "./modules/source.js";

// IIFE for main functionality

(async function() {
    const animals = [];
    const animalsSection = document.getElementById('Animals');
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', addAnimal);

    async function addAnimal() {
        const name = document.getElementById('animal').value;
        const age = document.getElementById('age').value;
        const comment = document.getElementById('comment').value;
        const img = await getImage(name);
        const sound = await getSound(name);

        let animal;
        switch(name) {
            case 'Leon':
                animal = new Leon(name, age, img, comment, sound);
                break;
            case 'Lobo':
                animal = new Lobo(name, age, img, comment, sound);
                break;
            case 'Oso':
                animal = new Oso(name, age, img, comment, sound);
                break;
            case 'Serpiente':
                animal = new Serpiente(name, age, img, comment, sound);
                break;
            case 'Aguila':
                animal = new Aguila(name, age, img, comment, sound);
                break;
            default:
                break;
        }

        animals.push(animal);
        showAnimals();
    }

    async function getImage(name) {
        const response = await fetch(`./assets/img/${name}.jpg`);
        return response.ok ? name : '';
    }
    async function getSound(name) {
        const response = await fetch(`./assets/sound/${name}.mp3`);
        return response.ok ? name : '';
    }

    function showAnimals() {
        animalsSection.innerHTML = '';
        animals.forEach(animal => {
            const animalCard = document.createElement('article');
            animalCard.classList.add('card', 'm-2');
            animalCard.innerHTML = `
                <img src="./assets/img/${animal.img}.jpg" class="card-img-top" alt="${animal.name}">
                <article class="card-body">
                    <h5 class="card-title">${animal.name}</h5>
                    <p class="card-text">age: ${animal.age}</p>
                    <p class="card-text">${animal.comment}</p>
                </article>
            `;
            animalsSection.appendChild(animalCard);
        });
    }
})();