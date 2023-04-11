// Prend l'ID utilisé dans la search bar :
const params = new URLSearchParams(window.location.search);
const selectedArtist = params.get('id');
// console.log(selectedArtist);

// Page d'un photographe sélectionné :
async function getPhotographers() {
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers;
};

// Filtre le photographe avec l'ID récupéré
async function filterById(photographers) {
    const photographer = photographers.filter((element) =>
        (element.id) == selectedArtist
    );
    // On envoie les données filtrées au Factory
    const photographerModel = photographerFactory(photographer);
    // Ces données passent ensuite vers la fonction getUserHeaderDOM()
    const page = photographerModel.getUserHeaderDOM();
    // Avant d'être assemblées vers la balise <main>
    const mainSection = document.getElementById('main');
    mainSection.appendChild(page);
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    filterById(photographers);
};

init();