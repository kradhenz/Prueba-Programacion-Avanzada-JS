// IIFE for data source management
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