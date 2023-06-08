// MAIN
const main = document.querySelector('main');
// Définitiation des VARIABLES de la Modale
const modaleMedia = document.createElement('div');
modaleMedia.id = "modale";
const modaleMediaContent = document.createElement('div');
modaleMediaContent.id = "modale-content";
// Bouton Close
const modaleCloseButton = document.createElement('span');
modaleCloseButton.id = "close-modale";
modaleCloseButton.innerHTML = "&times;";
const modaleMediaCarroussel = document.createElement('div');
modaleMediaCarroussel.id = "carroussel";
// Bouton <Gauche>
const modaleMediaFlecheGauche = document.createElement('div');
modaleMediaFlecheGauche.id = "fleche-gauche";
const modaleMediaAngleGauche = document.createElement('div');
modaleMediaAngleGauche.id = "angle-gauche";
modaleMediaAngleGauche.classList.add('fa-sharp');
modaleMediaAngleGauche.classList.add('fa-solid');
modaleMediaAngleGauche.classList.add('fa-angle-left');
// Media Affiché
const modaleMediaBG = document.createElement('div');
modaleMediaBG.id = "modale-media-bg";
const modaleMediaDisplayed = document.createElement('div');
modaleMediaDisplayed.id = "modale-media";
const modaleMediaSousTitre = document.createElement('div');
modaleMediaSousTitre.id = "sous-titre-modale";
// Bouton <Droite>
const modaleMediaFlecheDroite = document.createElement('div');
modaleMediaFlecheDroite.id = "fleche-droite";
const modaleMediaAngleDroit = document.createElement('div');
modaleMediaAngleDroit.id = "angle-droite";
modaleMediaAngleDroit.classList.add('fa-sharp');
modaleMediaAngleDroit.classList.add('fa-solid');
modaleMediaAngleDroit.classList.add('fa-angle-right');
// INITIALISATION MODALE
main.before(modaleMedia);
modaleMedia.appendChild(modaleMediaContent);
modaleMediaContent.appendChild(modaleCloseButton);
// Carroussel
modaleMediaContent.appendChild(modaleMediaCarroussel);
// Bouton Gauche
modaleMediaCarroussel.appendChild(modaleMediaFlecheGauche);
modaleMediaFlecheGauche.appendChild(modaleMediaAngleGauche);
// Media Displayed
modaleMediaCarroussel.appendChild(modaleMediaBG);
modaleMediaBG.appendChild(modaleMediaDisplayed);
modaleMediaBG.appendChild(modaleMediaSousTitre);
// Bouton Droite
modaleMediaCarroussel.appendChild(modaleMediaFlecheDroite);
modaleMediaFlecheDroite.appendChild(modaleMediaAngleDroit);

// ##################################################################################################################

// MODALE ---------------------------------------------------------------------------
const modale = document.getElementById('modale');
// BOUTON FERMER MODALE ---------------------------------------------------------------------------
modaleCloseButton.onclick = function() {
    modaleMedia.style.display = "none";
};
// WINDOW FERMER MODALE ---------------------------------------------------------------------------
window.onclick = function(event) {
    // console.log(event.target);
    let zoomedMedia = document.getElementsByClassName('zoomed-modal-media');
    zoomedMedia.controls = true;
    let modal = document.getElementById("contact_modal");
    if (event.target == modaleMediaContent || event.target == modale || event.target == modal) {
        modale.style.display = "none";
        modal.style.display = "none";
        let removeModaleMedia = document.getElementById('modale-media');
        if (removeModaleMedia) {
            removeModaleMedia.removeChild(removeModaleMedia.firstChild);
        }
        let removeModaleTitle = document.getElementById('sous-titre-modale');
        if (removeModaleTitle) {
            removeModaleTitle.removeChild(removeModaleTitle.firstChild);
        }
        zoomedMedia.controls = false;
        // console.log("controls = FALSE");
    };
}
// TOGGLE CARROUSSEL ---------------------------------------------------------------------------
function toggleCarroussel(mediaModal) {
    // Affiche la Modale
    modaleMedia.style.display = "block";
    // Affiche le Media sélectionné dans la Modale
    let modale_media = document.getElementById('modale-media');
    modale_media.appendChild(mediaModal);


    // Eliminer l'element en cours et ajouter le nouveau
    // let displayedMediaDIV = document.querySelector(".mediaModale");
    // displayedMediaDIV.remove();
}

// FLECHE DE DROITE ---------------------------------------------------------------------------
function displaynext() {
    // Media + Title
    let modale_media = document.getElementById('modale-media');
    let modale_title = document.getElementById('sous-titre-modale');
    // Récupérer l'ID du Media affiché :
    let displayedMediaDIV = document.querySelector(".mediaModale");
    let displayedMediaTitleValue = document.querySelector(".mediaTitle");
    // ID du Media affiché :
    let id = displayedMediaDIV.dataset.id;
    
    // Chercher la position de l'élément en cours pour prendre le suivant :
    let pos = photographerMedia.findIndex(element => element.id == id);
    let nextPos = pos;
    
    // IF (fin du carrousssel) ELSE (ajouter +1 à l'ID affiché pour Media + Title)
    if (pos == photographerMedia.length - 1) {
        nextPos = 0;
    } else {
        // On supprime le Media + son Titre de la Modale
        displayedMediaDIV.remove();
        displayedMediaTitleValue.remove();
        // Incrémenter ID
        nextPos += 1;
        console.log("id actuel=", pos);
        console.log("id suivant=", nextPos);


        // Test ~~~~~~~~~~~~~~~~~~~~~~
        let nextMedia = mediaFactory(photographerMedia[nextPos]);
        console.log("nextmedia =", nextMedia);
        let mediaCardDOM = nextMedia.getMediaModalDOM();
        toggleCarroussel(mediaCardDOM);


        // let nextMedia = mediaFactory(photographerMedia[nextPos]);
        // let mediaCardDOM = nextMedia.getMediaModalDOM();
        // toggleCarroussel(mediaCardDOM);
    };
}

modaleMediaAngleDroit.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    displaynext();
});


// FLECHE DE GAUCHE ---------------------------------------------------------------------------
modaleMediaAngleGauche.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  /*  let removeModaleMedia = document.getElementById('modale-media');
    removeModaleMedia.removeChild(removeModaleMedia.firstChild);
    let removeModaleTitle = document.getElementById('sous-titre-modale');
    removeModaleTitle.removeChild(removeModaleTitle.firstChild);*/
   // toggleCarroussel();
    
    
    
    
});

