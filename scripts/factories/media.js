function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer...
    let { id, photographerId, name, title, image, video, likes, date, price } = data;
    // ...pour retourner : data.id, data.photographerId, data.name, etc.

    // Séparer le Prénom & le Nom avec .split() + Prend l'index [0] pour le prénom + Remplace "-" par " ".
    let prenom = name.split(" ")[0].replace("-", " ");
    
    // Source dynamique vers les medias :
    const imageSource = `./FishEye - Photos/Sample Photos/${prenom}/${image}`;
    const videoSource = `./FishEye - Photos/Sample Photos/${prenom}/${video}`;
    
    function getMediaCardDOM() {
        let allCardContainer = document.createElement('div');
        allCardContainer.classList.add('media-card');
        allCardContainer.setAttribute("data-id", id);
        allCardContainer.setAttribute("tabIndex" , 0);
        const mediaContainer = document.createElement('a');
        mediaContainer.classList.add('media-container');
        mediaContainer.setAttribute("data-id", id);

        if (image) {
            const mediaImage = document.createElement('img');
            mediaImage.classList.add('media');
            mediaImage.setAttribute('src', imageSource);
            mediaImage.addEventListener("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                const mediaModal = getMediaModalDOM(image);
                toggleCarroussel(mediaModal);
            });
            mediaImage.setAttribute("alt", `${title}`);
            mediaContainer.appendChild(mediaImage);
        };
        
        if (video) {
            const mediaVideo = document.createElement('video');
            mediaVideo.classList.add('media');
            mediaVideo.setAttribute('src', videoSource);
            mediaVideo.setAttribute('type', "video/mp4");
            mediaVideo.controls = true;
            mediaVideo.addEventListener("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                const mediaModal = getMediaModalDOM(video);
                toggleCarroussel(mediaModal);
            });
            mediaVideo.setAttribute("alt", `${title}`);
            mediaContainer.appendChild(mediaVideo);
        };
        
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
        nbLikesAndHeart.setAttribute('aria-label', 'likes');
        nbLikesAndHeart.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            let totalLikesUpdate =  document.getElementById('total-likes');
           // AJOUTER - ENLEVER Likes
            if (mediaLikes.textContent == likes+1) {
                mediaLikes.textContent--;
                totalLikesUpdate.textContent--;
            }
           else {
           mediaLikes.textContent++;
             totalLikesUpdate.textContent++;
           }
        });

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

    // LIKES ACCESSIBLES EN TABULATION
        // heartLogo.setAttribute("tabIndex" , 0);
        // heartLogo.addEventListener("keydown", function(e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     if (e.key == 'Enter') {
        //         console.log('je suis ENTER heart');
        //         let totalLikesUpdate =  document.getElementById('total-likes');
        //         if (mediaLikes.textContent == likes+1) {
        //             mediaLikes.textContent--;
        //             totalLikesUpdate.textContent--;
        //         }
        //         else {
        //             mediaLikes.textContent++;
        //             totalLikesUpdate.textContent++;
        //         }
        //     }
        // });

        // MISE EN PAGE
        allCardContainer.appendChild(mediaContainer);
        allCardContainer.appendChild(titleContainer);
        titleContainer.appendChild(p);
        titleContainer.appendChild(nbLikesAndHeart);
        nbLikesAndHeart.appendChild(mediaLikes);
        nbLikesAndHeart.appendChild(heartLogo);
        allCardContainer.addEventListener("keydown", function(e) {
            if (e.key == 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            let mediaModal = null;
            // LES IF sans { } exécutent UNIQUEMENT la 1ère ligne sous eux
            if (image)
            mediaModal = getMediaModalDOM(image);
            else 
            mediaModal = getMediaModalDOM(video);
            mediaModal.setAttribute("tabindex", 1);
            toggleCarroussel(mediaModal);
        }});

        return allCardContainer;
    }

    function getMediaModalDOM() {
        let displayedMediaDIV = document.createElement("div");
        displayedMediaDIV.setAttribute("class", "mediaModale");
        displayedMediaDIV.dataset.id = id;
       
        let displayedImage = document.createElement('img');
        displayedImage.classList.add('zoomed-modal-media');
        displayedImage.setAttribute('alt', `${title}`);
        let displayedVideo = document.createElement('video');
        displayedVideo.classList.add('zoomed-modal-media');
        // Sous-titre du media :
        let displayedMediaTitle = document.getElementById('sous-titre-modale');
        let displayedMediaTitleValue = document.createElement('p');
        displayedMediaTitleValue.setAttribute("class", "mediaTitle");
        // displayedMediaTitleValue.textContent = `${title}`;
        
        if (image) {
            console.log(imageSource);
            displayedMediaDIV.appendChild(displayedImage);
            displayedImage.setAttribute('src', imageSource);
            displayedMediaTitle.appendChild(displayedMediaTitleValue).textContent = `${title}`;
        };
        
        if (video) {
            console.log(videoSource);
            displayedMediaDIV.appendChild(displayedVideo);
            displayedVideo.setAttribute('src', videoSource);
            displayedVideo.controls = true;
            displayedMediaTitle.appendChild(displayedMediaTitleValue).textContent = `${title}`;
        };

        return displayedMediaDIV;
    }

    return { id, photographerId, name, prenom, title, image, video, imageSource, videoSource, likes, date, price, getMediaCardDOM, getMediaModalDOM };
};