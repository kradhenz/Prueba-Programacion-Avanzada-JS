// IIFE for card to display animal data
const createCard = (function() {
    return function(animal) {
        return `
            <article class="pb-3 px-2 style="with: 22rem;">
                <article class="bg-dark text-white">
                    <img height="200" width="200" src="${animal.img}"/>
                    <article>
                        <audio class="card-text" src="${animal.sound}"></audio>
                        <button id="btnAudio" class="btn btn-secondary w-100">
                            <img height="30" src="assets/img/audio.svg"/>
                        </button>
                    </article>
                </article>
            </article>
        `;
    };
})();

export default createCard;