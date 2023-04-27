function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer :
    const { id, photographerId, name, title, image, video, likes, date, price } = data;
    // pour retourner : data.id, data.photographerId, data.name ...
  
    // Sépare le Prénom & le Nom avec .split() + Prend l'index [0] pour le prénom + Remplace "-" par " ".
    let prenom = name.split(" ")[0].replace("-", " ");

    // Source dynamique vers les medias :
    const imageSource = `/FishEye - Photos/Sample Photos/${prenom}/${image}`
    const videoSource = `/FishEye - Photos/Sample Photos/${prenom}/${video}`


    // --------------------------------------------------------------------------------------------------
    //
    // Section "Trier par" :
    //
    // --------------------------------------------------------------------------------------------------
    







    // --------------------------------------------------------------------------------------------------
    //
    // Création des medias du photographer choisi :
    //
    // --------------------------------------------------------------------------------------------------
    function getMediaCardDOM() {
        // Cards avec balise <a>
        const link = document.createElement('a');
        link.classList.add('media-card');
        link.setAttribute('href', imageSource);
        // Conteneur <div> des medias (photo/video)
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('media-container');
        // Conteneur <div> de (Titres + (Nombre Likes & Logo Coeur))
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('card-title-area');
        // Titre <p> des medias
        const p = document.createElement('p');
        p.classList.add('media-title');
        p.textContent = title;

        // Conteneur <div> de (Nb Likes + Logo Coeur)
        const nbLikesAndHeart = document.createElement('div');
        nbLikesAndHeart.classList.add('likes-heart-area');
        // Bouton Likes
        const mediaLikes = document.createElement('p');
        mediaLikes.classList.add('nombre-likes');
        mediaLikes.textContent = likes;
        // Bouton Coeur
        const heartLogo = document.createElement('i');
        heartLogo.classList.add('logo-heart');
        heartLogo.classList.add("fa-sharp");
        heartLogo.classList.add("fa-solid");
        heartLogo.classList.add("fa-heart");
        heartLogo.setAttribute('style', "color: #901C1C");

        // Mise en page SI image / SI video
        if (image) {
            const mediaImage = document.createElement('img');
            mediaImage.classList.add('media');
            mediaImage.setAttribute('src', imageSource);
            // Partie media
            link.appendChild(mediaContainer);
            mediaContainer.appendChild(mediaImage);
            // Partie titre
            link.appendChild(titleContainer);
            titleContainer.appendChild(p);
            // Zone Likes & Coeur
            titleContainer.appendChild(nbLikesAndHeart);
            nbLikesAndHeart.appendChild(mediaLikes);
            nbLikesAndHeart.appendChild(heartLogo);
        };

        if (video) {
            const mediaVideo = document.createElement('video');
            mediaVideo.classList.add('media');
            mediaVideo.setAttribute('src', videoSource);
            // Partie media
            link.appendChild(mediaContainer);
            mediaContainer.appendChild(mediaVideo);
            // Partie titre
            link.appendChild(titleContainer);
            titleContainer.appendChild(p);
            // Zone Likes & Coeur
            titleContainer.appendChild(nbLikesAndHeart);
            nbLikesAndHeart.appendChild(mediaLikes);
            nbLikesAndHeart.appendChild(heartLogo);
        };
        return link;
    };
    return { id, photographerId, name, title, image, video, likes, date, price, getMediaCardDOM };
};