const modal = document.getElementById("contact_modal");

// OPEN MODAL
function displayModal() {
	modal.style.display = "block";
    // HEADER AVEC NOM DU PHOTOGRAPHE
    let headerText = document.getElementById('contact_header');
    headerText.textContent = `Contactez-moi ${photographer.name}`;
}

// CLOSE MODAL
function closeModal() {
    modal.style.display = "none";
}

let contactButton = document.querySelector('.contact_button');

contactButton.addEventListener("click", function() {
    console.log("Merci de m'avoir contacté,"

    )
});