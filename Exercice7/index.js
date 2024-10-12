function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;
  const decimalNumber = parseInt(decimalInput, 10);

  // Vérifie que la saisie est bien un nombre entier valide
  if (isNaN(decimalNumber)) {
      // Laisser #binaryResult vide si l'entrée est invalide
      document.getElementById("binaryResult").textContent = "";
      return;
  }

  // Convertir le nombre décimal en binaire
  const binaryResult = decimalNumber.toString(2);

  // Afficher le résultat de la conversion
  document.getElementById("binaryResult").textContent = `Résultat binaire: ${binaryResult}`;
}
