// Main
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
    console.log(event.target);
    let modaleContent = document.getElementById('modale-content');
    if (event.target == modaleContent || event.target == modale) {
        modale.style.display = "none";
    };
};

// 1) REMETTRE LA LISTE DE "photographerMedia" accessible ici (not loading properly);
// 2) .querySelector('media-card').addEvelentListener("click", function() {
// })
// 3) Get ID du click
// 4) IF ID du click == ID de la liste photographerMedia (.forEach), alors donner l'emplacement dans la liste (findIndex)
// 5) IF video / IF img, alors ...IMG / ...VID
// 5) let mediaDisplayedIMG/VID = photographerMedia[findINDEX];
// 6) GGWP

let mediaDisplayedIMG = document.createElement('img');
let mediaDisplayedVID = document.createElement('video');