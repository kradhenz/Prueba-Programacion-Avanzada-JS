// IIFE for data source
/*let dataAnimals = (() => {
    async function getData() {
        // try-catch to manage errors
        try {
            const response = await fetch("http://localhost:5501/animales.json");
            const { animals } = await response.json();
            return animals;
        } catch (e) {
            console.log(e); // error message
            return [];
        }
    };
    return getData;
})();

export default dataAnimals;*/

let animales = (() => {
    const url = "http://localhost:5500/animales.json";
    const getData = async () => {
        const res = await fetch(url);
        const { animales } = await res.json();
        return animales;
    };
    return { getData };
})();

export default animales;


// Suponiendo que el archivo JSON está disponible en la misma carpeta y se llama 'datos_animales.json'

// Cargar el archivo JSON
fetch('animales.json')
    .then(response => response.json())
    .then(data => {
        // Acceder a la lista de animales
        const animals = data.animals;

        // Iterar sobre los animales y mostrar su información
        animals.forEach(animal => {
            const name = animal.name;
            const img = animal.img;
            const sound = animal.sound;
            console.log(`Nombre: ${name}, Imagen: ${img}, Sonido: ${sound}`);
        });

        // Aquí puedes usar los datos cargados en tu aplicación
        // Por ejemplo, podrías mostrar la información de los animales en una interfaz gráfica
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
