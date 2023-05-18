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
    };

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
    };

    // PARTIE CARROUSSEL : 
    //  <modale>
    //      <CROIX POUR FERMER></>
    //      <div>
    //          <divFlecheGauche><i></>
    //          <divMediaAffiché+Titre>
    //                 <media>
    //                     <conteneur>
    //                         <slider>
    //                             <img></img>
    //                             <img></img>
    //                             <img></img>
    //                             <img></img>
    //                             <img></img>
    //                         </slider>
    //                     </conteneur>
    //                 </media>
    //              <titre></titre>
    //          </>
    //          <divFlecheDroite><i></>
    //      </div>
    //  </modale>


    const carroussel = document.createElement('div');



    main.appendChild(btn);
    main.appendChild(mainModale);
    mainModale.appendChild(closeModaleDiv);
    closeModaleDiv.appendChild(closeModale);
}
modaleGenerale();