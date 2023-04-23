function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer :
    const { id, photographerId, name, title, image, video, likes, date, price } = data;
    // pour retourner : data.id, data.photographerId, data.name ...
  
    // Sépare le Prénom & le Nom avec .split() + Prend l'index [0] pour le prénom + Remplace "-" par " ".
    let prenom = name.split(" ")[0].replace("-", " ");

    // Source dynamique vers les medias :
    const imageSource = `/FishEye - Photos/Sample Photos/${prenom}/${image}`
    const videoSource = `/FishEye - Photos/Sample Photos/${prenom}/${video}`
    
    // Création des medias du photographer choisi :
    function getMediaCardDOM() {
        // Balise <a>
        const link = document.createElement('a');
        link.setAttribute('href', imageSource);
        // Titre des medias
        const h2 = document.createElement('h2');
        h2.textContent = title;
        // Condition SI image / SI video
        if (image) {
            const testImage = document.createElement('img');
            testImage.setAttribute('src', imageSource);
            testImage.setAttribute('height', '150px');
            testImage.setAttribute('width', '150px');
            link.appendChild(h2);
            h2.appendChild(testImage);
        };
        if (video) {
            const testVideo = document.createElement('video');
            testVideo.setAttribute('src', videoSource);
            testVideo.setAttribute('width', '150px');
            link.appendChild(h2);
            h2.appendChild(testVideo);
        };
        return link;
    };
    return { id, photographerId, name, title, image, video, likes, date, price, getMediaCardDOM };
};