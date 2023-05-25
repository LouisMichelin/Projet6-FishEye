// MAIN
const main = document.querySelector('main');
// MODALE
const modale = document.getElementById('modale');

// BOUTON OPEN
// const openModale = document.createElement('div');
// openModale.classList.add('btn-modal');
// openModale.onclick = function() {modale.style.display = "block"};
// main.appendChild(openModale);

// BOUTON FERMER MODALE
const closeModale = document.getElementById('close-modale');
closeModale.onclick = function() {
    modale.style.display = "none"
};
// WINDOW FERMER MODALE
window.onclick = function(event) {
    // console.log(event.target);
    let modaleContent = document.getElementById('modale-content');
    if (event.target == modaleContent || event.target == modale) {
        modale.style.display = "none";
    };
};

// ##################################################################################################################
// ##################################################################################################################
// ##################################################################################################################
// #################################### IMPORT DES DATA DE MEDIA ####################################################
// ##################################################################################################################
// ##################################################################################################################
// ##################################################################################################################

let tableauMedias = [];
let tableauPhotographers = [];
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




function toggleCarroussel() {
    let value;
    console.log("je suis un onclick qui marche");
    // RECUPERER LE DATA-ID
    window.onclick = function(event) {
        console.log(event.target.parentElement.getAttribute("data-id"));
        value = event.target.parentElement.getAttribute("data-id")
    };
}


// DATA MEDIA
function tableauDataMedia(medias) {
    for (let i=0; i < medias.length; i++) {
        if (medias[i].photographerId == selectedArtist) {
            tableauMedias.push(medias[i]);
        };
    };
    console.log(tableauMedias);
}


// DATA PHOTOGRAPHERS
function tableauDataPhotographers(photographers) {
    for (let i=0; i < photographers.length; i++) {
        if (photographers[i].id == selectedArtist) {
            tableauPhotographers.push(photographers[i]);
        };
    };
    console.log(tableauPhotographers);
}

// ------------------------------------------------------------------------------------------------
//     tableauMedias.forEach(media => {
//         console.log(media)
//     });
//     //
//     // if (image) {
//     //     mediaContainer.setAttribute('href', imageSource);
//     //     const mediaImage = document.createElement('img');
//     //     mediaImage.classList.add('media');
//     //     mediaImage.setAttribute('src', imageSource);
//     //     mediaContainer.appendChild(mediaImage);
//     // }
//
//     // if (video) {
//     //     mediaContainer.setAttribute('href', videoSource);
//     //     const mediaVideo = document.createElement('video');
//     //     mediaVideo.classList.add('media');
//     //     mediaVideo.controls = true;
//     //     const mediaVideoSource = document.createElement('source');
//     //     mediaVideoSource.setAttribute('src', videoSource);
//     //     mediaVideoSource.setAttribute('type', "video/mp4");
//     //     mediaContainer.appendChild(mediaVideo);
//     //     mediaVideo.appendChild(mediaVideoSource); 
//     // }
//     // let mediaDisplayed = document.createElement('img');
//     // mediaDisplayed.id = "media-displayed";
//     // mediaDisplayed.setAttribute('src', `/FishEye - Photos/Sample Photos/Ellie Rose/Architecture_Connected_Curves.jpg`);
//     // const modaleMedia = document.getElementById('modale-media');
//     // modaleMedia.appendChild(mediaDisplayed);
// };
//
// ------------------------------------------------------------------------------------------------

// SETUP DATA MEDIA 1
async function importData() {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    return data;
}
// SETUP DATA MEDIA 2
async function launchData() {
    const { media } = await importData();
    const { photographers } = await importData();
    tableauDataMedia(media)
    tableauDataPhotographers(photographers);
    return media, photographers;
}
// SETUP DATA MEDIA 3
launchData();