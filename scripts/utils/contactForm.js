// OPEN MODAL
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}
// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
// WINDOW CLOSE MODAL
window.onclick = function(event) {
    console.log(event.target);

    const contactModal = document.getElementById("contact_modal");
    if (event.target == modal || event.target == contactModal) {
        contactModal.style.display = "none";
    };
};      

// HEADER AVEC NOM DU PHOTOGRAPHE
let headerText = document.getElementById('contact_header');
headerText.textContent += ` ${photographerMedia.name}`;