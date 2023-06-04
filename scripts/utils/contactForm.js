const modal = document.getElementById("contact_modal");

// OPEN MODAL ------------------------------------------------------------
function displayModal() {
	modal.style.display = "block";
    // HEADER AVEC NOM DU PHOTOGRAPHE
    let headerText = document.getElementById('contact_header');
    headerText.textContent = `Contactez-moi ${photographer.name}`;
}

// CLOSE MODAL ------------------------------------------------------------
function closeModal() {
    modal.style.display = "none";
}

// ENVOYER FORMULAIRE ------------------------------------------------------------
//
// Données renseignées
let userPrenom = document.getElementById('user_prenom');
let userNom = document.getElementById('user_nom');
let userEmail = document.getElementById('user_email');
let userMessage = document.getElementById('user_message');

// Fonction submit
document.getElementById("contactForm").addEventListener("submit", function() {
    console.log(
        `Merci de m'avoir contacté,
        ${userPrenom.value} ${userNom.value},
        vous trouverez davantage de renseignements à votre adresse email :
        ${userEmail},
        et je prendrais en compte chaque élément de votre message :
        ${userMessage}
        Passez une agréable journée !
        `);
        alert("esssss");
});