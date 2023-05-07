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
    //
    // Section "Trier par" :
    //
    // --------------------------------------------------------------------------------------------------
    const mediaFilters = document.createElement('section');
    mediaFilters.classList.add('section-media-filters');
    // Sous-titre "Trier par"
    const trierPar = document.createElement('p');
    trierPar.classList.add('trier-par');
    trierPar.textContent = "Trier par";
    // <div> dropdown
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    // Menu dropdown (Filtres + Logo)
    const menuDropdown = document.createElement('div');
    menuDropdown.classList.add('menu-dropdown');
    // Filtre Popularité
    const Popularite = document.createElement('button');
    Popularite.classList.add('menu-filter');
    Popularite.classList.add('style-bouton-popularite');
    Popularite.textContent = "Popularité";
    // Filtre Date
    const Date = document.createElement('button');
    Date.classList.add('menu-filter');
    Date.textContent = "Date";
    // Filtre Titre
    const Titre = document.createElement('button');
    Titre.classList.add('menu-filter');
    Titre.classList.add('style-bouton-titre');
    Titre.textContent = "Titre";
    // Logo Triangle
    const logoTriangle = document.createElement('i');
    logoTriangle.classList.add("fa-sharp");
    logoTriangle.classList.add("fa-solid");
    logoTriangle.classList.add("fa-angle-up");
    // Cases vides
    const emptyButton = document.createElement('div');
    emptyButton.classList.add("empty-button");
    const emptyButton2 = document.createElement('div');
    emptyButton2.classList.add("empty-button");
    const emptyButtonWhite = document.createElement('div');
    emptyButtonWhite.classList.add("empty-button-red");
    const emptyButtonWhite2 = document.createElement('div');
    emptyButtonWhite2.classList.add("empty-button-red");
    // Mise en page
    main.appendChild(mediaFilters);
    mediaFilters.appendChild(trierPar);
    mediaFilters.appendChild(dropdown);
    dropdown.appendChild(Popularite);
    Popularite.appendChild(logoTriangle);
    dropdown.appendChild(menuDropdown);
    menuDropdown.appendChild(emptyButton); // Obligé d'avoir 2 "const" différentes pour les afficher toutes les 2
    emptyButton.appendChild(emptyButtonWhite);
    menuDropdown.appendChild(Date);
    menuDropdown.appendChild(emptyButton2); // Sinon, seule la "emptyButton2" est considérée en HTML...
    emptyButton2.appendChild(emptyButtonWhite2);
    menuDropdown.appendChild(Titre);

    // --------------------------------------------------------------------------------------------------
    //
    // Section display Medias :
    //
    // --------------------------------------------------------------------------------------------------
    const wrapper = document.createElement('section'); // Wrapper pour mise en forme Grid :
    const div = displayPhotographerMedia(photographerMedia); // Appelle la fonction avec "photographerMedia"
    main.appendChild(wrapper); // Mise en page 1
    wrapper.appendChild(div); // Mise en page 2

    // --------------------------------------------------------------------------------------------------
    //
    // Fonction Trier par Popularité, Date et Titre
    //
    // --------------------------------------------------------------------------------------------------

    // Filtre Popularité
    Popularite.addEventListener("click", function(event) {
        console.log("Fonction Popularité");
        // Evite les "event" de base
        event.preventDefault();
        event.stopPropagation();

        // Parcourir les médias disponibles et les trier par Popularité :
        const arraySorted = photographerMedia.sort((a,b)=>(a.likes - b.likes));
        // console.log(photographerMedia.sort((a,b)=>(b.likes - a.likes)));

        // Mettre à jour les éléments sur le DOM :
        const wrapper = document.querySelector(".wrapper");
        // arrayCreatedElement reprend tous les éléments affichés par défaut
        const arrayCreatedElement = Array.prototype.slice.call(wrapper.childNodes);
       
        const index = 0;
        // Réorganisation des Médias triés par leur Popularité (sans supprimer ce qui est déjà affiché !) :
        arraySorted.forEach(element => {

            // 1er élément "Child" de "Wrapper"
            let elementInitial = wrapper.childNodes[index];
           
            // Cherche "Link" dont le "Data-id" est identique au "Data-id" de "Element"
            let positionElement = arrayCreatedElement.findIndex((link) =>
                ( link.dataset.id == element.id)
            );
            
            // Définit le "Link" picked avec son "Index" assigné juste haut dessus
            let linkPicked = wrapper.childNodes[positionElement];
            // "ElementTemp" = le 1er "Child" de "Wrapper"
            let elementTemp = elementInitial;
            // "ElementInitial" prend la valeur de LinkPicked
            elementInitial= linkPicked;
            // "LinkPicked" reprend la valeur de "ElementTemp"
            linkPicked = elementTemp;
        });

    
    });

    // Filtre Date
    Date.addEventListener("click", function() {
        console.log("Fonction Date");
    });

    // Filtre Titre
    Titre.addEventListener("click", function() {
        console.log("Fonction Titre");
    });
}


// Récupération des données Photographers + Medias :
async function init() {
    // Récupère les données de photographers & de media
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    // Exécute ensuite les fonctions plus haut avec les données obtenues
    filterPhotographerById(photographers);
    filterMediasById(media);
}

init();

// Display les médias dans le Wrapper :
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