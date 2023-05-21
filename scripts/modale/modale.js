// Main
const main = document.querySelector('main');
// MODALE
const modale = document.getElementById('modale');
// BOUTON OPEN
const openModale = document.createElement('div');
openModale.classList.add('btn-modal');
openModale.onclick = function() {modale.style.display = "block"};
main.appendChild(openModale);
// BOUTON FERMER
const closeModale = document.getElementById('close-modale');
closeModale.onclick = function() {modale.style.display = "none"};





// function modaleGenerale() {
//     const main = document.getElementById('main');

//     const mainModale = document.createElement('div');
//     mainModale.classList.add('modale');

//     const closeModaleDiv = document.createElement('div');
//     closeModaleDiv.classList.add('div-close-modal');

//     // BOUTON POUR FERMER LA MODALE
//     const closeModale = document.createElement('i');
//     closeModale.classList.add('close-modal');
//     closeModale.classList.add('fa-sharp');
//     closeModale.classList.add('fa-solid');
//     closeModale.classList.add('fa-xmark');
//     closeModale.onclick = function() {
//         const modale = document.querySelector('.modale');
//         modale.style.display = "none";
//         const zoneTarif = document.querySelector('.zone-tarification');
//         zoneTarif.style.display = "flex";
//         const wrapper = document.querySelector('.wrapper');
//         wrapper.style.display = "grid";
//         const photographSection = document.querySelector('.photograph-header');
//         photographSection.style.display = "flex";
//         const filters = document.querySelector('.section-media-filters');
//         filters.style.display = "flex";
//         const btnOpen = document.querySelector('.btn-modal');
//         btnOpen.style.display = "";
//         // document.body.style.margin = "auto";
//     };

//     // BOUTON POUR OUVRIR LA MODALE
//     const btnOpen = document.createElement('div');
//     btnOpen.classList.add('btn-modal');
//     btnOpen.onclick = function() {
//         
//     };
// }
// modale();