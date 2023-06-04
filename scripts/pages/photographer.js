// Prend l'ID utilisé dans la search bar :
const params = new URLSearchParams(window.location.search);
const selectedArtist = params.get('id');
// Définition globale : photographer + photographerMedia
let photographer;
let photographerMedia = [];

// Photographes sélectionnés depuis le .JSON :
async function getPhotographers() {
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers;
}

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
}

// Filtre les médias grâce au photographerId et l'ID récupéré :
function filterMediasById(medias) {
    const filtredMedia = medias.filter((element) => (element.photographerId) == selectedArtist);
    
    filtredMedia.forEach((element) => {
        // Définit mediaData pour récupérer TOUT "element" en forme .JSON
        // puis injecte la variable "name" dans "element".
        photographerMedia.push({...element, "name": photographer.name});
        
    });

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
    const DateFiltre = document.createElement('button');
    DateFiltre.classList.add('menu-filter');
    DateFiltre.textContent = "Date";
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
    menuDropdown.appendChild(DateFiltre);
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
    Popularite.addEventListener("click", function(event) { // Filtre par Popularité (Nombre de likes)
        console.log("Fonction Popularité");
        // Evite les "event" de base
        event.preventDefault();
        event.stopPropagation();
        // Parcourir les médias disponibles et les trier par Popularité :
        const arraySorted = photographerMedia.sort((a,b)=>(b.likes - a.likes));
        displaySortedElements(arraySorted);
    });

    DateFiltre.addEventListener("click", function(event) { // Filtre par Date (du "Plus Récent" au "Plus Ancien")
        console.log("Fonction Date");
        // Evite les "event" de base
        event.preventDefault();
        event.stopPropagation();
        // Remplace les dates "String" en Millisecondes :
        for(i=0; i < photographerMedia.length; i++) {
            const dateString = photographerMedia[i].date;
            const dateMillisecondes = new Date(dateString).valueOf();
            photographerMedia[i].date = dateMillisecondes;
            // console.log("Pour " + photographerMedia[i].title + ", la valeur est : " + photographerMedia[i].date);
        };
        // Trier les médias
        const arraySorted = photographerMedia.sort((a,b)=>(b.date - a.date));
        displaySortedElements(arraySorted);
    });

    Titre.addEventListener("click", function(event) { // Filtre par Titre (Ordre alphabétique)
        console.log("Fonction Title");
        // Evite les "event" de base
        event.preventDefault();
        event.stopPropagation();
        // Parcourir les médias disponibles et les trier par Titre :
        const arraySorted = photographerMedia.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
        });
        displaySortedElements(arraySorted);
    });

    // --------------------------------------------------------------------------------------------------
    //
    // Partie "Likes + Tarif / jour en Bas à Droite"
    //
    // --------------------------------------------------------------------------------------------------
    const zoneLikesTarifs = document.createElement('div');
    zoneLikesTarifs.classList.add("zone-tarification");

    // -------------------- Partie "Total des Likes" --------------------
    const partieLikes = document.createElement('div');
    partieLikes.classList.add("partie-likes");
    function sommeTotalLikes() {
        let sumLikes = 0;
        for(i=0; i < photographerMedia.length; i++) {
            let mediaLikes = photographerMedia[i].likes;
            sumLikes += mediaLikes;
        };
        // console.log(sumLikes);
        return sumLikes
    };
    const totalLikes = document.createElement('p');
    totalLikes.id = "total-likes";
    totalLikes.textContent = sommeTotalLikes();
    const heartLogo = document.createElement('i');
    heartLogo.classList.add('logo-heart');
    heartLogo.classList.add("fa-sharp");
    heartLogo.classList.add("fa-solid");
    heartLogo.classList.add("fa-heart");
    heartLogo.classList.add("fa-lg");
    heartLogo.setAttribute('style', "color: #000000");

    // -------------------- Partie "Tarification Quotidienne" --------------------
    const partieTarifs = document.createElement('div');
    partieTarifs.classList.add("partie-tarifs");
    const tarifQuotidien = document.createElement('p');
    tarifQuotidien.id = "tarif-quotidien";
    tarifQuotidien.textContent = `${photographer.price}€ / jour`;

    // Mise en page :
    main.appendChild(zoneLikesTarifs);
    zoneLikesTarifs.appendChild(partieLikes);
    partieLikes.appendChild(totalLikes);
    partieLikes.appendChild(heartLogo);
    zoneLikesTarifs.appendChild(partieTarifs);
    partieTarifs.appendChild(tarifQuotidien);
}

// Alimenter la fonction par le tableau des Medias trié
function displaySortedElements(arraySorted){
    const wrapper = document.querySelector(".wrapper");
    let positionReference = 0;
    // Réorganisation des Médias triés par leur Popularité (sans supprimer ce qui est déjà affiché !) :
    arraySorted.forEach(element => {
        const arrayCreatedElement = Array.prototype.slice.call(wrapper.childNodes);
    
        let positionElement = arrayCreatedElement.findIndex((mediaContainer) =>
            (mediaContainer.dataset.id == element.id)
        );

        const nodeSearched = arrayCreatedElement[positionElement];
        const nodeReference = arrayCreatedElement[positionReference];
       // console.log(element.title +"/"+element.likes +" / position "+ positionElement + "deplacer vers: " +positionReference);
        wrapper.insertBefore(nodeSearched, nodeReference);
        positionReference++;
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
        const mediaModel = mediaFactory(element);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        div.appendChild(mediaCardDOM);
    });
    return div;
}