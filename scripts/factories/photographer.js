function photographerFactory(data) {
    const {id, name, portrait, city, country, tagline, price} = data;
    const picture = `/assets/photographers/${portrait}`;
    
    // Création des profils photographes
    function getUserCardDOM() {
        // Balise <a>
        const link = document.createElement('a');
        link.setAttribute("href", `/photographer.html?id=${id}`);
        // Balise <article>
        const article = document.createElement('article');
        // Conteneur de Photo de profil
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'img-container');
        // Photo de profil
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Photo de ${name}`);
        img.setAttribute('aria-label', `Photo du photographe ${name}`);
        // Prénom + Nom
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute('aria-label', `Photographe ${name}`);
        // Ville + Pays
        const villePays = document.createElement('h3');
        villePays.textContent = `${city}, ${country}`;
        villePays.setAttribute('aria-label', `Le photographe ${name} travaille dans la ville de ${city}, ${country}`);
        // Tagline
        const dicton = document.createElement('p');
        dicton.setAttribute('class', 'dicton')
        dicton.textContent = tagline;
        dicton.setAttribute('aria-label', `Le dicton de ${name} est : "${tagline}"`);
        // Tarifs
        const prix = document.createElement('p');
        prix.setAttribute('class', 'tarif')
        prix.textContent = `${price}€/jour`;
        prix.setAttribute('aria-label', `La prestation de ${name} est à ${price} € par jour`);
        // Finalisation
        article.appendChild(imgContainer)
        imgContainer.appendChild(img);
        article.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(dicton);
        article.appendChild(prix);
        link.appendChild(article);
        return (link);
    };
    
    // Création du profil individuel de photographe
    function getUserHeaderDOM() {
        const { name, portrait, city, country, tagline } = data[0];

        // Partie <header> du photographer : nom/prénom/etc + Contact + Photo de profil
        const page = document.querySelector('.photograph-header');

        const presentationSection = page.appendChild(document.createElement("section"));
        presentationSection.setAttribute('class', 'photograph-presentation');

        const presentationName = presentationSection.appendChild(document.createElement("name"));
        presentationName.textContent = name;

        const presentationCity = presentationSection.appendChild(document.createElement("city"));
        presentationCity.innerHTML = `${city}, ${country}`;

        const presentationDicton = presentationSection.appendChild(document.createElement("dicton"));
        presentationDicton.innerHTML = tagline;

        page.insertBefore(presentationSection, document.querySelector('.contact_button'));
        return page;
    };
    // ---------------------------------------------------------------------------------------------
            // page.insertAdjacentHTML('afterbegin', `
            //     <section class="user_header-DOM">
            //         <name>${name}</name>
            //         <city>ReTest</city>
            //         <dicton>Suivez moi sur insta</dicton>
            //     </section>
            // `);
            //
            // const fragment = document.createDocumentFragment();
            // const photographHeader = fragment.appendChild(document.createElement("carte-photographe"));
            //     .appendChild(document.createElement("name"))
            //     .appendChild(document.createElement("ville"))
            //     .appendChild(document.createElement("dicton"))
            // photographHeader.textContent = "HelloWorld";
    // ---------------------------------------------------------------------------------------------

    // Création de l'ensemble des photos & vidéos du photographe sélectionné
    // function getUserDetailDOM() {
    //     // recuperer depuis le fichier json les media du photographer selctionné 
    //     // boucler sur cette liste 
    //     // et pour chaque element je vais creer une carte 
    //     // je vais donc creer une factory pour media qui me donne une carte de type video ou de type image 
    //     const page = document.createElement("div");
    //     page.textContent =" ceci est un test";
    //     return page;
    // };
    return {id, name, picture, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM};
};

// Nouvelle factory pour les Medias vidéos/images
// // function mediaVideosFactory(data) {
// 
// }