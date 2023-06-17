const modal = document.getElementById("contact_modal");

// COULEUR DU BOUTON "CONTACTEZ-MOI" ------------------------------------------------------------
const contactButton = document.querySelector('.contact_button');
contactButton.addEventListener("mouseenter", function() {
    contactButton.style.background = "#DB8876";
    contactButton.style.color = "#000000";
});
contactButton.addEventListener("mouseleave", function() {
    contactButton.style.background = "#901C1C";
    contactButton.style.color = "#FFFFFF";
});
contactButton.setAttribute("aria-label", "Contact Me");

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
        Vous trouverez davantage de renseignements à votre adresse email :
        ${userEmail.value},
        Et je prendrais en compte chaque élément de votre message :
        ${userMessage.value}
        Passez une agréable journée !`
    );
    // PREMIERE ALERT() POUR DISPLAY LE CONSOLE.LOG()
    alert("Alerte n°1");
    
    window.location.href = `./index.html`;
    
    // DEUXIEME ALERT() POUR CONSIDERER LE WINDOW.LOCATION.HREF
    alert("Alerte n°2");
});