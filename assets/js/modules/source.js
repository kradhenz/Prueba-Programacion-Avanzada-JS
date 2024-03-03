// IIFE for data source
/*
const dataAnimals = (async () => {
    // try-catch to manage errors
    try {
        let response = await fetch("../../../animales.json");
        let { animals } = await response.json();
        return animals;
    } catch (e) {
        console.log(e); // error message
        return [];
    }
})();

export default dataAnimals;
*/

const dataAnimals = (() => {

    const getData = async () => {
        const response = await fetch("./animals.json");
        const { animals } = await response.json();

        return animals;
    };

    return {
        getData
    }
})();

export default dataAnimals