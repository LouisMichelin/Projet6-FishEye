function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer...
    let { id, photographerId, name, title, image, video, likes, date, price } = data;
    // ...pour retourner : data.id, data.photographerId, data.name, etc.
    //
    // Séparer le Prénom & le Nom avec .split() + Prend l'index [0] pour le prénom + Remplace "-" par " ".
    let prenom = name.split(" ")[0].replace("-", " ");
    //
    // Source dynamique vers les medias :
    const imageSource = `/FishEye - Photos/Sample Photos/${prenom}/${image}`;
    const videoSource = `/FishEye - Photos/Sample Photos/${prenom}/${video}`;
    
    function getMediaCardDOM() {
        const allCardContainer = document.createElement('div');
        allCardContainer.classList.add('media-card');
        allCardContainer.setAttribute("data-id", id);

        const mediaContainer = document.createElement('a');
        mediaContainer.classList.add('media-container');
        mediaContainer.setAttribute("data-id", id);

        if (image) {
            // mediaContainer.setAttribute('href', imageSource);
            const mediaImage = document.createElement('img');
            mediaImage.classList.add('media');
            mediaImage.setAttribute('src', imageSource);
            mediaImage.addEventListener("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                toggleCarroussel(id);
                getMediaModalDOM();
            });
            mediaContainer.appendChild(mediaImage);
        }
        if (video) {
            // mediaContainer.setAttribute('href', videoSource);
            const mediaVideo = document.createElement('video');
            mediaVideo.classList.add('media');
            mediaVideo.controls = true;
            mediaVideo.addEventListener("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                toggleCarroussel(id);
                getMediaModalDOM();
            });
            mediaVideo.setAttribute('onclick', 'toggleCarroussel()');
            const mediaVideoSource = document.createElement('source');
            mediaVideoSource.setAttribute('src', videoSource);
            mediaVideoSource.setAttribute('type', "video/mp4");
            mediaContainer.appendChild(mediaVideo);
            mediaVideo.appendChild(mediaVideoSource); 
        }
        // Zone [Titre + (Nb likes & Logo Coeur)]
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('card-title-area');
        // Titre
        const p = document.createElement('p');
        p.classList.add('media-title');
        p.textContent = title;
        // Balise Likes + Coeur
        const nbLikesAndHeart = document.createElement('a');
        nbLikesAndHeart.classList.add('likes-heart-area');
        nbLikesAndHeart.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            mediaLikes.textContent++;
            let totalLikesUpdate =  document.getElementById('total-likes');
            totalLikesUpdate.textContent++;
        }, {once : true});

        // Likes
        let mediaLikes = document.createElement('p');
        mediaLikes.classList.add('nombre-likes');
        mediaLikes.textContent = likes;
        // Coeur
        const heartLogo = document.createElement('i');
        heartLogo.classList.add('logo-heart');
        heartLogo.classList.add("fa-sharp");
        heartLogo.classList.add("fa-solid");
        heartLogo.classList.add("fa-heart");
        heartLogo.classList.add("fa-lg");
        heartLogo.setAttribute('style', "color: #901C1C");
        // MISE EN PAGE
        allCardContainer.appendChild(mediaContainer);
        allCardContainer.appendChild(titleContainer);
        titleContainer.appendChild(p);
        titleContainer.appendChild(nbLikesAndHeart);
        nbLikesAndHeart.appendChild(mediaLikes);
        nbLikesAndHeart.appendChild(heartLogo);
        return allCardContainer;
    }

    function getMediaModalDOM() {
        // coder le contenu d'un element media dans la modale
        // grande div du centre de la modale avec le contenu image ou video et tu le retourne à la fin  
        let displayedMediaDIV = document.getElementById('modale-media');

        if (image) {
            console.log(imageSource);
            let displayedMedia = document.createElement('img');
            displayedMedia.setAttribute('src', imageSource);
            displayedMediaDIV.appendChild(displayedMedia);

        }
        

        
        
        
        console.log("je suis getMediaModalDOM()");
    }

    return { id, photographerId, name,prenom, title, image, video,imageSource,videoSource, likes, date, price, getMediaCardDOM, getMediaModalDOM };
};