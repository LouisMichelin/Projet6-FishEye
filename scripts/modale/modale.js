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
        removeModaleMedia.removeChild(removeModaleMedia.firstChild);
        // console.log("media removed");
        let removeModaleTitle = document.getElementById('sous-titre-modale');
        removeModaleTitle.removeChild(removeModaleTitle.firstChild);
        // console.log("title removed");
        zoomedMedia.controls = false;
        // console.log("controls = FALSE");
    };
};
// TOGGLE CARROUSSEL ---------------------------------------------------------------------------
function toggleCarroussel(mediaModal) {
    modaleMedia.style.display = "block";
    let modale_media = document.getElementById('modale-media');
    
    let displayedMediaDIV = document.querySelector(".mediaModale");
    //Eliminer l'element en cours et ajouter le nouveau 
    displayedMediaDIV.remove();
    modale_media.appendChild(mediaModal);
}

// FLECHE DE DROITE ---------------------------------------------------------------------------
function displaynext() {
    // recuprer l'id de media affiché : en cours
    let displayedMediaDIV = document.querySelector(".mediaModale");
    let id = displayedMediaDIV.dataset.id;
    // chercher la position de l'element en cours pour prendre le suivant
    let pos = photographerMedia.findIndex(element => element.id == id);
    let nextPos ;
    if (pos == photographerMedia.length - 1) {
        nextPos = 0;
    } else {
        nextPos = pos++;
    }

    let mediaModel = mediaFactory(photographerMedia[nextPos]);
    let mediaCardDOM = mediaModel.getMediaModalDOM();
    toggleCarroussel(mediaCardDOM);
}
modaleMediaAngleDroit.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector(".mediaModale").remove();
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

