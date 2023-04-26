// Prend l'ID utilisé dans la search bar :
const params = new URLSearchParams(window.location.search);
const selectedArtist = params.get('id');

// Définition globale "photographer" :
let photographer;

// Photographes sélectionnés depuis le .JSON :
async function getPhotographers() {
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers;
};

// Filtre le photographe avec l'ID récupéré :
function filterPhotographerById(photographers) {
    // Reprend globale "photographer" pour match "photographers" avec ID sélectionné PUIS index[0] car 1 seul artiste.
    photographer = photographers.filter((element) => (element.id) == selectedArtist)[0];
    // On envoie les données filtrées au Factory
    const photographerModel = photographerFactory(photographer);
    // Ces données passent ensuite vers la fonction getUserHeaderDOM()
    const page = photographerModel.getUserHeaderDOM();
    // Avant d'être assemblées vers la balise <main>
    const mainSection = document.getElementById('main');
    mainSection.appendChild(page);
};

// Filtre les médias grâce au photographerId et l'ID récupéré :
function filterMediasById(medias) {
    const photographerMedia = medias.filter((element) => (element.photographerId) == selectedArtist);
    // Select balise <main> dans le HTML :
    const main = document.getElementById('main');
    
    // --------------------------------------------------------------------------------------------------
    // Section "Trier par" :
    // --------------------------------------------------------------------------------------------------
    const mediaFilter = document.createElement('section');
    mediaFilter.classList.add('section-media-filters');
    
    // Nom de la zone "Trier par"
    const trierPar = document.createElement('p');
    trierPar.classList.add('trier-par');
    trierPar.textContent = "Trier par";
    // Menu déroulant des Filtres
    const menuFilters = document.createElement('div');
    menuFilters.classList.add('menu-filters');
    // Balise pour "POPULARITE" + Logo du menu
    const divPopularity = document.createElement('div');
    const logoMenuFilters = document.createElement('i');
    logoMenuFilters.classList.add("fa-sharp");
    logoMenuFilters.classList.add("fa-solid");
    logoMenuFilters.classList.add("fa-angle-up");
    logoMenuFilters.setAttribute('style', "style=color: #ffffff");


    // Trier par : POPULARITE
    const mediaFilterPopularity = document.createElement('div');
    mediaFilterPopularity.classList.add('filter-popularity');
    mediaFilterPopularity.setAttribute('href', '#');
    mediaFilterPopularity.textContent = "Popularité";
    // Trier par : DATE
    const mediaFilterDate = document.createElement('div');
    mediaFilterDate.classList.add('filter-date');
    mediaFilterDate.setAttribute('href', '#');
    mediaFilterDate.textContent = "Date";
    // Trier par : TITRE
    const mediaFilterTitre = document.createElement('div');
    mediaFilterTitre.classList.add('filter-titre');
    mediaFilterTitre.setAttribute('href', '#');
    mediaFilterTitre.textContent = "Titre";

    main.appendChild(mediaFilter);
    mediaFilter.appendChild(trierPar);
    mediaFilter.appendChild(menuFilters);
    menuFilters.appendChild(divPopularity);
    divPopularity.appendChild(mediaFilterPopularity); // Je place "POPULARITE" dans une div pour ajouter le logo du menu
    divPopularity.appendChild(logoMenuFilters)
    menuFilters.appendChild(mediaFilterDate);
    menuFilters.appendChild(mediaFilterTitre);

    // --------------------------------------------------------------------------------------------------
    // Section Medias :
    // --------------------------------------------------------------------------------------------------
    const wrapper = document.createElement('section'); // Wrapper pour mise en forme Grid :
    wrapper.classList.add('wrapper');
    main.appendChild(wrapper);
    // Exécute mediaFactory() pour récupérer données ligne 3 de media.js
    // et exécute getMediaCardDOM() dans .forEach(element) pour chaque média.
    photographerMedia.forEach((element) => {
        // Définit mediaData pour récupérer TOUT "element" en forme .JSON
        // puis injecte la variable "name" dans "element".
        const mediaData = {...element, "name": photographer.name};
        // console.log(mediaData);
        const mediaModel = mediaFactory(mediaData);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        wrapper.appendChild(mediaCardDOM);
    });
};

async function init() {
    // Récupère les données de photographers & de media
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    // Exécute ensuite les fonctions plus haut avec les données obtenues
    filterPhotographerById(photographers);
    filterMediasById(media);
};

init();