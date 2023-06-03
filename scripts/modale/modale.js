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

// MODALE
const modale = document.getElementById('modale');
// BOUTON FERMER MODALE
modaleCloseButton.onclick = function() {
    modaleMedia.style.display = "none";
};
// WINDOW FERMER MODALE
window.onclick = function(event) {
    // console.log(event.target);
    let modal = document.getElementById("contact_modal");
    if (event.target == modaleMediaContent || event.target == modale || event.target == modal) {
        modale.style.display = "none";
        modal.style.display = "none";
        let removeModaleMedia = document.getElementById('modale-media');
        removeModaleMedia.removeChild(removeModaleMedia.firstChild);
    };
};
// TOGGLE CARROUSSEL
function toggleCarroussel(idMedia) {
    modaleMedia.style.display = "block";
    
    let pos = photographerMedia.findIndex(element => element.id == idMedia);
    console.log("I'm a working EventListener. ID Media =", pos);

    console.log(photographerMedia[pos].video || photographerMedia[pos].image);
};