const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "Tack! Ditt meddelande har skickats.";

    form.reset();
});