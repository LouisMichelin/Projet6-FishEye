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
closeModale.onclick = function() {
    modale.style.display = "none"
};
// WINDOW FERMER MODALE
window.onclick = function(event) {
    // console.log(event.target);
    let modaleContent = document.getElementById('modale-content');
    let modal = document.getElementById("contact_modal");
    if (event.target == modaleContent || event.target == modale || event.target == modal) {
        modale.style.display = "none";
        modal.style.display = "none";
    };
};


// ##################################################################################################################
// ##################################################################################################################
// ##################################################################################################################
// #################################### IMPORT DES DATA DE MEDIA ####################################################
// ##################################################################################################################
// ##################################################################################################################
// ##################################################################################################################

const mediaDisplayed = document.getElementById('media-displayed');
const allMediasOfDoc = document.querySelectorAll('.media'); // query ALL
const video = document.querySelector('.media'); // query UNIQUE

// allMediasOfDoc.forEach(media => {
//     if(media.nodeName == "IMG") {
//         console.log(media, "c'est une image !");
//     } else if(media.nodeName == "VIDEO") {
//         console.log(media, "c'est une video !");
//     }
// });



function toggleCarroussel(idMedia) {
    console.log(idMedia);
    console.log(photographerMedia);
    let pos = photographerMedia.findIndex(element => element.id == idMedia);
    
    

    modale.style.display = "block";
    console.log("je suis un onclick qui marche", pos), {once : true};

    console.log(photographer.name)
};