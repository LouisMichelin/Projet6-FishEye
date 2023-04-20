function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer :
    const { id, photographerId, title, image, video, likes, date, price } = data;
    // pour en retourner data.id, data.photographerId, ...
  
    // Chemin vers les photos & vidéos
    const imageSource = `/FishEye - Photos/Sample Photos/Ellie Rose/${image}` // CE SONT LES PHOTOS DE ELLIE ROSE EN LOCAL
    //
    // OBJECTIF =
    // const imageSource = `/FishEye - Photos/Sample Photos/${firstNameFilter}/${image}`
    //
    // let firstNameFilter = photographers[0].name.split(" ");
    // firstNameFilter = firstNameFilter[0];
 





    // Création des medias du photographe filtré 
    function getMediaCardDOM() {
        // Balise <a>
        const link = document.createElement('a');
        link.setAttribute('href', `${imageSource}`);




        const h2 = document.createElement('h2');
        h2.textContent = title;

        if (image) {
            const testImage = document.createElement('img');
            testImage.setAttribute('src', imageSource)
            testImage.setAttribute('height', '100px');
            testImage.setAttribute('width', '100px');
            link.appendChild(h2);
            h2.appendChild(testImage);
            return testImage;
        } else if (video) {
            const testVideo = document.createElement('video');
            
            testVideo.setAttribute('width', '150px');

            link.appendChild(h2);
            h2.appendChild(testVideo);
        }
        
        




        // link.appendChild(h2);
        // h2.appendChild(testImage);
        // console.log(testImage);

        return link;
    };
    
    return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
};