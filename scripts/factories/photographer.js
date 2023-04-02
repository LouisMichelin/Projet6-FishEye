function photographerFactory(data) {
    console.log("data:", data)
    const {id, name, portrait, city, country, tagline, price} = data;
    const picture = `/assets/photographers/${portrait}`;

    // Création des profils photographes
    function getUserCardDOM() {
        // Balise <a>
        const link = document.createElement('a');
        link.setAttribute("href", `/photographer.html?${id}`)
        // Balise <article>
        const article = document.createElement('article');
        // Conteneur de Photo de profil
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'img-container');
        // Photo de profil
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Photo de ${name}`);
        img.setAttribute('aria-label', `Photo de ${name}`);
        // Prénom + Nom
        const h2 = document.createElement('h2');
        h2.textContent = name;
        
        // Ville + Pays
        const villePays = document.createElement('h3');
        villePays.textContent = `${city}, ${country}`;
        
        // Tagline
        const dicton = document.createElement('p');
        dicton.setAttribute('class', 'dicton')
        dicton.textContent = tagline;

        // Tarifs
        const prix = document.createElement('p');
        prix.setAttribute('class', 'tarif')
        prix.textContent = `${price}€/jour`;

        // Finalisation
        article.appendChild(imgContainer)
        imgContainer.appendChild(img);
        article.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(dicton);
        article.appendChild(prix);

        link.appendChild(article);
        return (link);
    }
    return {id, name, picture, city, country, tagline, price, getUserCardDOM}
}