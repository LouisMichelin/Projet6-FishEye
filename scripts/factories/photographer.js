function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;

    // création des profils photographes
    function getUserCardDOM() {
        // balise <article>
        const article = document.createElement( 'article' );
        // photo de profil
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        // prénom et nom
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        // ville et pays
        const villePays = document.createElement( 'h3' );
        villePays.innerText = `${city}, ${country}`;
        
        // tagline
        const dicton = document.createElement( 'p' );
        dicton.textContent = tagline;

        // tarifs
        const prix = document.createElement( 'p' );
        prix.innerText = `${price}€/jour`;

        // finalisation
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(dicton);
        article.appendChild(prix);
        return (article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}