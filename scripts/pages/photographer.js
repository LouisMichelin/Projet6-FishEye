// Prend l'ID utilisé dans la search bar :
const params = new URLSearchParams(window.location.search);
const selectedArtist = params.get('id');
// console.log(selectedArtist);

// Photographes sélectionnés :
async function getPhotographers() {
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers;
};

// Filtre le photographe avec l'ID récupéré
async function filterById(photographers) {
    const photographer = photographers.filter((element) =>
        (element.id) == selectedArtist
    );

    // On envoie les données filtrées au Factory
    const photographerModel = photographerFactory(photographer[0]);
    // Ces données passent ensuite vers la fonction getUserHeaderDOM()
    const page = photographerModel.getUserHeaderDOM();
    // Avant d'être assemblées vers la balise <main>
    const mainSection = document.getElementById('main');
    mainSection.appendChild(page);
}

// Filtre les médias grâce au photographerId et l'ID récupéré
async function filterMediasById(medias) {
    const photographerMedia = medias.filter((element) =>
        (element.photographerId) == selectedArtist
    );

    // Sélection de la balise <main> dans le HTML
    const main = document.getElementById('main');

    // Exécution de la fonction mediaFactory() pour récupérer les données ligne3 factory
    // et ensuite exécution de getMediaCardDOM() .forEach(element) dont on a besoin.
    photographerMedia.forEach((element) => {
        const mediaModel = mediaFactory(element);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        main.appendChild(mediaCardDOM);
    });
}

async function init() {
    // Récupère les données de photographers & de media
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    // Exécute ensuite les fonctions plus haut avec les données obtenues
    filterById(photographers);
    filterMediasById(media);
};

init();