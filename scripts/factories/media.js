function mediaFactory(data) {
    // Ici, c'est les sous-parties de la sous-partie "MEDIA" du .JSON que l'on veut filtrer :
    const { id, photographerId, title, image, video, likes, date, price } = data;
    // pour en retourner data.id, data.photographerId, ...
  
    // Création des medias du photographe filtré 
    function getMediaCardDOM() {
        // Balise <a>
        const link = document.createElement('a');

        // PARTIE A DE-COMMENTER POUR RENDRE LES LIENS FONCTIONNELS :
        // link.setAttribute("href", `/photographer.html?id=${id}`);

        const h2 = document.createElement('h2');
        h2.textContent = title;
        link.appendChild(h2);
        return (link);
    };
    
    return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
};