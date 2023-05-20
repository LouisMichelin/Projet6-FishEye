function modaleGenerale() {
    const main = document.getElementById('main');

    const mainModale = document.createElement('div');
    mainModale.classList.add('modale');

    const closeModaleDiv = document.createElement('div');
    closeModaleDiv.classList.add('div-close-modal');

    // BOUTON POUR FERMER LA MODALE
    const closeModale = document.createElement('i');
    closeModale.classList.add('close-modal');
    closeModale.classList.add('fa-sharp');
    closeModale.classList.add('fa-solid');
    closeModale.classList.add('fa-xmark');
    closeModale.onclick = function() {
        const modale = document.querySelector('.modale');
        modale.style.display = "none";
        const zoneTarif = document.querySelector('.zone-tarification');
        zoneTarif.style.display = "flex";
        const wrapper = document.querySelector('.wrapper');
        wrapper.style.display = "grid";
        const photographSection = document.querySelector('.photograph-header');
        photographSection.style.display = "flex";
        const filters = document.querySelector('.section-media-filters');
        filters.style.display = "flex";
        const btnOpen = document.querySelector('.btn-modal');
        btnOpen.style.display = "";
        // document.body.style.margin = "auto";
    };

    // FERMER LA MODALE SI OUT OF MODAL
    
   


    // BOUTON POUR OUVRIR LA MODALE
    const btn = document.createElement('div');
    btn.classList.add('btn-modal');
    btn.onclick = function() {
        const modale = document.querySelector('.modale');
        modale.style.display = "block";
        const zoneTarif = document.querySelector('.zone-tarification');
        zoneTarif.style.display = "none";
        const wrapper = document.querySelector('.wrapper');
        wrapper.style.display = "none";
        const photographSection = document.querySelector('.photograph-header');
        photographSection.style.display = "none";
        const filters = document.querySelector('.section-media-filters');
        filters.style.display = "none";
        const btnOpen = document.querySelector('.btn-modal');
        btnOpen.style.display = "none";
        // document.body.style.margin = "0px";
    };

    // PARTIE CARROUSSEL :
    const carroussel = document.createElement('div'); // Regroupe tout le monde
    carroussel.id = "carroussel";

    // FLECHE DE GAUCHE
    const flecheGauche = document.createElement('div'); // Flèche à gauche du média
    flecheGauche.id = "fleche-gauche";
    flecheGauche.onclick = function() {
        console.log("à Gauche !");
    };
    const angleGauche = document.createElement('i');
    angleGauche.classList.add('fa-sharp');
    angleGauche.classList.add('fa-solid');
    angleGauche.classList.add('fa-angle-left');
    angleGauche.id = "angle-gauche";

    // ZONE MEDIAS & SLIDER
    const partieMedias = document.createElement('div'); // Média + Titre du média
    partieMedias.id = "partie-medias";

    // SLIDER
    const slider = document.createElement('div'); // Slider : contient TOUS LES MEDIAS
    slider.id = "slider-medias"

    // SLIDING MEDIAS
    let slidingMedia1 = document.createElement('img');
    slidingMedia1.classList.add('sliding-media');
    slidingMedia1.setAttribute('src', `/FishEye - Photos/Sample Photos/Ellie Rose/Architecture_Connected_Curves.jpg`);
    //
    let slidingMedia2 = document.createElement('img');
    slidingMedia2.classList.add('sliding-media');
    slidingMedia2.setAttribute('src', `/FishEye - Photos/Sample Photos/Ellie Rose/Architecture_Horseshoe.jpg`);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

    // ETAPE 3: ON UTILISE LES DATAS IMPORTEES AVEC CETTE FONCTION ICI-PRESENTE
    let listeCarroussel = [];
    function carrousselTitre(medias) {
        for (let i=0; i < medias.length; i++) {
            medias[i].photographerId == photographer.id ? listeCarroussel.push(medias[i].image) : null;
            // if (medias[i].photographerId == photographer.id) {
            //     listeCarroussel.push(medias[i]);
            //     // console.log(medias[i].title);
            // };
        };
        console.log(listeCarroussel);
    };
    console.log(listeCarroussel);
    
    // ETAPE 1: FETCH() LES DONNEES DU .JSON
    async function recupLesData() {
        const response = await fetch('/data/photographers.json');
        const data = await response.json();
        return data;
    };
    // ETAPE 2: ON MET A DISPOSITION LES DATAS RECUPEREES (ETAPE 1)
    async function testData() {
        const { media } = await recupLesData();
        carrousselTitre(media);
    };
    testData();

// 2) AFFICHER L'IMAGE [0]
// 3) FLECHE DROITE <=> IMAGE [0]+1
// 4) FLECHE GAUCHE <=> IMAGE [X]-1
// 5) SI IMAGE[0], FLECHE GAUCHE = NONE
// 6) SI IMAGE[MAX], FLECHE DROITE = NONE

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

    // FLECHE DE DROITE
    const flecheDroite = document.createElement('div');
    flecheDroite.id = "fleche-droite";
    flecheDroite.onclick = function() {
        console.log("à Droite !");
        // slidingMedia1.style.display = "none";
    };
    const angleDroite = document.createElement('i');
    angleDroite.classList.add('fa-sharp');
    angleDroite.classList.add('fa-solid');
    angleDroite.classList.add('fa-angle-right');
    angleDroite.id = "angle-droite";
    // SOUS-TITRES
    const sousTitres = document.createElement('p');
    sousTitres.id = "sous-titre-carroussel";
    sousTitres.textContent = "Hello World";
    // MISE EN PAGE
    main.appendChild(btn);
    main.appendChild(mainModale);
    mainModale.appendChild(closeModaleDiv);
    closeModaleDiv.appendChild(closeModale);
    mainModale.appendChild(carroussel);
    carroussel.appendChild(flecheGauche); // Flèche Gauche
    flecheGauche.appendChild(angleGauche);
    carroussel.appendChild(partieMedias) // Médias
    partieMedias.appendChild(slider);
    slider.appendChild(slidingMedia1);
    slider.appendChild(slidingMedia2);


    carroussel.appendChild(flecheDroite); // Flèche Droite
    flecheDroite.appendChild(angleDroite);
    mainModale.appendChild(sousTitres); // Sous-titres
}
modaleGenerale();