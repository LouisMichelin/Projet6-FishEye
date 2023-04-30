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
    // Menu des Filtres
    const menuFilters = document.createElement('select');
    menuFilters.classList.add('menu-filters');

    
    // 1ère partie Menu : "Titre" + Logo "v"
    const option1 = document.createElement('option');
    option1.classList.add('menu-filter');
    option1.value = "Popularité";
    option1.text = "Popularité";

    const option2 = document.createElement('option');
    option2.classList.add('menu-filter');
    option2.value = "Date";
    option2.text = "Date";

    const option3 = document.createElement('option');
    option3.classList.add('menu-filter');
    option3.value = "Titre";
    option3.text = "Titre";

    main.appendChild(mediaFilter);
    mediaFilter.appendChild(trierPar);
    mediaFilter.appendChild(menuFilters);
    menuFilters.appendChild(option1);
    menuFilters.appendChild(option2);
    menuFilters.appendChild(option3);



    /*
    // menuPremierePartie.setAttribute('onclick', menuTest());
    const logoMenuFilters = document.createElement('i');
    logoMenuFilters.classList.add("fa-sharp");
    logoMenuFilters.classList.add("fa-solid");
    logoMenuFilters.classList.add("fa-angle-up");
    logoMenuFilters.setAttribute('style', "color: #ffffff");
    
*/
    // --------------------------------------------------------------------------------------------------
    // Section Medias :
    // --------------------------------------------------------------------------------------------------
    const wrapper = document.createElement('section'); // Wrapper pour mise en forme Grid :
   main.appendChild(wrapper);
    //
    
    const div = displayPhotographerMedia(photographerMedia);
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

function sortByDate(){
    // trier le tableau photographerMedia par date
// 2 CHOIX : refaire 1 tableau trié OU trier le tableau existant
// PAS DE ONCLICK() -> !!! addeventlistener();
}
function sortByTitle(){
    // trier le tableau photographerMedi apar date
    
}
function sortByPopularity(){
    // trier le tableau photographerMedia par date
    
}