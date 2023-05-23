// MAIN
const main = document.querySelector('main');
// MODALE
const modale = document.getElementById('modale');
// BOUTON OPEN
const openModale = document.createElement('div');
openModale.classList.add('btn-modal');
openModale.onclick = function() {modale.style.display = "block"};
main.appendChild(openModale);

// BOUTON FERMER MODALE
const closeModale = document.getElementById('close-modale');
closeModale.onclick = function() {modale.style.display = "none"};
// WINDOW FERMER MODALE
window.onclick = function(event) {
    // console.log(event.target);
    let modaleContent = document.getElementById('modale-content');
    if (event.target == modaleContent || event.target == modale) {
        modale.style.display = "none";
    };
};

// --------------------------------------------------------
// DISPLAY LE MEDIA (FIXE) DANS LA MODALE !!!
// --------------------------------------------------------
let mediaDisplayedIMG = document.createElement('img');
let mediaDisplayedVID = document.createElement('video');

let mediaDisplayed = document.createElement('img');
mediaDisplayed.id = "media-displayed";
mediaDisplayed.setAttribute('src', `/FishEye - Photos/Sample Photos/Ellie Rose/Architecture_Connected_Curves.jpg`);
const modaleMedia = document.getElementById('modale-media');
modaleMedia.appendChild(mediaDisplayed);




// ------------------------------------------------------------------------------------------------------------------------
// TO-DO LISTE :
// ------------------------------------------------------------------------------------------------------------------------
// 1) REMETTRE LA LISTE DE "photographerMedia" accessible ici (not loading properly);
// 2) .querySelector('media-card').addEvelentListener("click", function() {
// })
// 3) Get ID du click
// 4) IF ID du click == ID de la liste photographerMedia (.forEach), alors donner l'emplacement dans la liste (findIndex)
// 5) IF video / IF img, alors ...IMG / ...VID
// 5) let mediaDisplayedIMG/VID = photographerMedia[findINDEX];
// 6) GGWP
// ------------------------------------------------------------------------------------------------------------------------

// 2:
// let mediaCard = document.querySelector('.media-card');
// mediaCard.addEventListener("click", function() {


// ###################################################################################################
// ###################################################################################################
// #################################### IMPORT DES DATA DE MEDIA #####################################
// ###################################################################################################
// ###################################################################################################

let tableauMedias = [];

function tableauData(medias) {
    
    for (let i=0; i < medias.length; i++) {
        if (medias[i].photographerId == selectedArtist) {
            tableauMedias.push(medias[i]);
        };
    };
    console.log(tableauMedias[1].image);
};

console.log(tableauMedias);




// SETUP DATA MEDIA
async function importData() {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    return data;
}
// SETUP DATA MEDIA
async function launchData() {
    const { media } = await importData();
    tableauData(media);
    return media;
}
// SETUP DATA MEDIA
launchData();