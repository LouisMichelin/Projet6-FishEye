function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
  
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
        // Partie <header> du photographer : nom/prénom/etc + Contact + Photo de profil
        const page = document.querySelector('.photograph-header');
        // Création de la balise <section>
        const presentationSection = page.appendChild(document.createElement("section"));
        presentationSection.setAttribute('class', 'photograph-presentation');
        // Création des balises pour Nom, Ville/Pays, Dicton dans la balise <section>
        const presentationName = presentationSection.appendChild(document.createElement("name"));
        presentationName.innerHTML = `${name}`;
        const presentationCity = presentationSection.appendChild(document.createElement("city"));
        presentationCity.innerHTML = `${city}, ${country}`;
        const presentationDicton = presentationSection.appendChild(document.createElement("dicton"));
        presentationDicton.innerHTML =`${tagline}`;
        // Insertion des balises avant bouton "Contactez-moi"
        page.insertBefore(presentationSection, document.querySelector('.contact_button'));
        // ------------------------------------------------------------------------------------------
        // Création de la balise <div> pour contenir la photo de profil
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'img-container');
        // Insertion photo de profil <img> dans <div> pour mise en place CSS
        const presentationPhoto = document.createElement('img');
        presentationPhoto.setAttribute('class', 'photo-profil')
        presentationPhoto.setAttribute('src', `${picture}`);
        // Ajout de presentationPhoto dans la page
        page.appendChild(imgContainer);
        imgContainer.appendChild(presentationPhoto);
        return page;
    };

    return { id, name, picture, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM };
};