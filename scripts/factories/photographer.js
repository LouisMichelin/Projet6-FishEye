function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price, photographerId } = data;
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
        // Import local des datas filtrées
        const { name, portrait, city, country, tagline } = data[0];
        
        const picture = `/assets/photographers/${portrait}`;
        // Partie <header> du photographer : nom/prénom/etc + Contact + Photo de profil
        const page = document.querySelector('.photograph-header');
        // Création de la balise <section>
        const presentationSection = page.appendChild(document.createElement("section"));
        presentationSection.setAttribute('class', 'photograph-presentation');
        // Création des balises pour Nom, Ville/Pays, Dicton dans la balise <section>
        const presentationName = presentationSection.appendChild(document.createElement("name"));
        presentationName.innerHTML = name;
        const presentationCity = presentationSection.appendChild(document.createElement("city"));
        presentationCity.innerHTML = `${city}, ${country}`;
        const presentationDicton = presentationSection.appendChild(document.createElement("dicton"));
        presentationDicton.innerHTML = tagline;
        // Insertion des balises avant bouton "Contactez-moi"
        page.insertBefore(presentationSection, document.querySelector('.contact_button'));
        // ------------------------------------------------------------------------------------------
        // Création de la balise <div> pour contenir la photo de profil
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'img-container');
        // Insertion photo de profil <img> dans <div> pour mise en place CSS
        const presentationPhoto = document.createElement('img');
        presentationPhoto.setAttribute('class', 'photo-profil')
        presentationPhoto.setAttribute('src', picture);
        // Ajout de presentationPhoto dans la page
        page.appendChild(imgContainer);
        imgContainer.appendChild(presentationPhoto);
        return page;
    };

    // Création de l'ensemble des photos & vidéos du photographe sélectionné
    function getUserDetailDOM() {
        // 1 - recuperer depuis le fichier json les media du photographer selctionné 
        // 2 - boucler sur cette liste 
        // 3 - et pour chaque element je vais creer une carte 
        // 4 - je vais donc creer une factory pour media qui me donne une carte de type video ou de type image
        const { image, video, likes, title } = data[0];
        console.log(data[0]);
        // Setup main division
        const main = document.getElementById('main');
        const mediaSection = main.appendChild(document.createElement("medias-section"));
        // Partie filtres
        const filters = mediaSection.appendChild(document.createElement("filters"));
        filters.innerHTML = "Trier par";
        const filterPopular = filters.appendChild(document.createElement("filter_button-popular"));
        const filterDate = filters.appendChild(document.createElement("filter_button-date"));
        const filterTitre = filters.appendChild(document.createElement("filter_button-titre"));
        // Partie photos & vidéos
        const gallerieMedias = mediaSection.append(document.createElement("gallerie"));

        const divPhotos = `/FishEye - Photos/Sample Photos/${image}`;
        const divVideos = `/FishEye - Photos/Sample Photos/${video}`;
        const divTitle = title;
        const divLikes = likes;

        const photoTest = gallerieMedias.appendChild(divPhotos);
        

        

        return main;
    };

    return { id, name, picture, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM, getUserDetailDOM };
};

// Nouvelle factory pour les Medias vidéos/images
// // function mediaVideosFactory(data) {
// 
// }