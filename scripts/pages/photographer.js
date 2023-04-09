const params = new URLSearchParams(window.location.search);
const selectedArtist = params.get('id');
console.log(selectedArtist);

// Page d'un photographe sélectionné
async function getPhotographers() {
    // Importe les datas du document .JSON
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers
};

async function filterById(photographers) {

    const photographer = photographers.filter((element) => (element.id == selectedArtist));
    console.log(photographer);
    const photographerModel = photographerFactory(photographer);
    const page = photographerModel.getUserDetailDOM();


    const main  = document.getElementById("main");
    console.log(main);
    main.appendChild(page);

}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const photographer = filterById(photographers);
};

init();