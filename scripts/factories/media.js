function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer :
    const { id, photographerId, name, title, image, video, likes, date, price } = data;
    // pour en retourner data.id, data.photographerId, ...
  
    let prenom = name.split(" ")[0].replace("-", " ");

    // Chemin vers les photos & vidéos
    // const imageSource = `/FishEye - Photos/Sample Photos/${filtreTest42}/${image}` // TENTATIVE DE FILTRE-PRENOM par ID
    const imageSource = `/FishEye - Photos/Sample Photos/${prenom}/${image}`
    const videoSource = `/FishEye - Photos/Sample Photos/${prenom}/${video}` // CE SONT LES MEDIAS DE ELLIE ROSE EN LOCAL
    
   
    
    // Création des medias du photographe choisi
    function getMediaCardDOM() {
        // Balise <a>
        const link = document.createElement('a');
        link.setAttribute('href', `${imageSource}`);
        // Titre des medias
        const h2 = document.createElement('h2');
        h2.textContent = title;
        // Condition SI image OU SI video
        if (image) {
            const testImage = document.createElement('img');
            testImage.setAttribute('src', imageSource);
            testImage.setAttribute('height', '100px');
            testImage.setAttribute('width', '100px');
            link.appendChild(h2);
            h2.appendChild(testImage);
        } else if (video) {
            const testVideo = document.createElement('video');
            testVideo.setAttribute('src', videoSource);
            testVideo.setAttribute('width', '150px');
            link.appendChild(h2);
            h2.appendChild(testVideo);
        }
        return link;
    };
    return { id, photographerId, name, title, image, video, likes, date, price, getMediaCardDOM };
};