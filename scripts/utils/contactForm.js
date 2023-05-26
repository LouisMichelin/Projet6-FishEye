// OPEN MODAL
const modal = document.getElementById("contact_modal");

function displayModal() {
    console.log("test Sarra");
	modal.style.display = "block";
}
// CLOSE MODAL
function closeModal() {
    console.log("test Sarra 2");
    modal.style.display = "none";
}
// WINDOW CLOSE MODAL
window.onclick = function(event) {
    
    if (event.target == modal) {
        modal.style.display = "none";
    }
};      

// HEADER AVEC NOM DU PHOTOGRAPHE
let headerText = document.getElementById('contact_header');
headerText.textContent += ` ${photographerMedia.name}`;