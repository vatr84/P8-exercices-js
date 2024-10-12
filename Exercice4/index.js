// Sélectionne le bouton et le paragraphe
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Ajoute un gestionnaire d'événement pour le clic du bouton
button.addEventListener('click', () => {
  messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});
