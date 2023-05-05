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

    // Section Filters
    const mediaFilters = document.createElement('section');
    mediaFilters.classList.add('section-media-filters');

    // Sous-titre "Trier par"
    const trierPar = document.createElement('p');
    trierPar.classList.add('trier-par');
    trierPar.textContent = "Trier par";

    // <div> dropdown
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    // ??? dropdown.setAttribute('role', 'listbox'); ???





    // Menu dropdown (Filtres + Logo)
    const menuDropdown = document.createElement('div');
    menuDropdown.classList.add('menu-dropdown');
    // Filtre Popularité
    const filtre1 = document.createElement('button');
    filtre1.classList.add('menu-filter');
    filtre1.textContent = "Popularité";
    // Filtre Date
    const filtre2 = document.createElement('button');
    filtre2.classList.add('menu-filter');
    filtre2.textContent = "Date";
    // Filtre Titre
    const filtre3 = document.createElement('button');
    filtre3.classList.add('menu-filter');
    filtre3.textContent = "Titre";

    // Logo Triangle
    const logoTriangle = document.createElement('i');
    logoTriangle.classList.add("fa-sharp");
    logoTriangle.classList.add("fa-solid");
    logoTriangle.classList.add("fa-angle-up");

    // Mise en page
    main.appendChild(mediaFilters);
    mediaFilters.appendChild(trierPar);
    mediaFilters.appendChild(dropdown);

    dropdown.appendChild(filtre1);
    filtre1.appendChild(logoTriangle);

    dropdown.appendChild(menuDropdown);
    menuDropdown.appendChild(filtre2);
    menuDropdown.appendChild(filtre3);
    
    



    // --------------------------------------------------------------------------------------------------
    // Section Medias :
    // --------------------------------------------------------------------------------------------------
    const wrapper = document.createElement('section'); // Wrapper pour mise en forme Grid :
    const div = displayPhotographerMedia(photographerMedia); // Appelle la fonction avec "photographerMedia"
    // Mise en page
    main.appendChild(wrapper);
    wrapper.appendChild(div);
}

async function init() {
    // Récupère les données de photographers & de media
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    // Exécute ensuite les fonctions plus haut avec les données obtenues
    filterPhotographerById(photographers);
    filterMediasById(media);
}

init();

function displayPhotographerMedia(tableau){
    const div = document.createElement("div");
    div.classList.add('wrapper');
     // Exécute mediaFactory() pour récupérer données ligne 3 de media.js
    // et exécute getMediaCardDOM() dans .forEach(element) pour chaque média.
    tableau.forEach((element) => {
        // Définit mediaData pour récupérer TOUT "element" en forme .JSON
        // puis injecte la variable "name" dans "element".
        const mediaData = {...element, "name": photographer.name};
        // console.log(mediaData);
        const mediaModel = mediaFactory(mediaData);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        div.appendChild(mediaCardDOM);
    });
    return div;
}

function sortByDate() {
    // trier le tableau photographerMedia par Date
    // 2 CHOIX : refaire 1 tableau trié OU trier le tableau existant
    // PAS DE ONCLICK() -> !!! addeventlistener();
}
function sortByTitle() {
    // trier le tableau photographerMedia par Titre
    // 2 CHOIX : refaire 1 tableau trié OU trier le tableau existant
    // PAS DE ONCLICK() -> !!! addeventlistener();
}
function sortByPopularity() {
    // trier le tableau photographerMedia par Popularity
    // 2 CHOIX : refaire 1 tableau trié OU trier le tableau existant
    // PAS DE ONCLICK() -> !!! addeventlistener();
}