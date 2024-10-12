function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;

  // Vérifie que l'entrée est un nombre entier positif
  if (!/^\d+$/.test(decimalInput)) {
      // Si l'entrée contient des caractères non numériques, ne rien afficher
      document.getElementById("binaryResult").textContent = "";
      return;
  }

  // Convertir l'entrée en nombre entier
  const decimalNumber = parseInt(decimalInput, 10);

  // Convertir le nombre décimal en binaire
  const binaryResult = decimalNumber.toString(2);

  // Afficher le résultat de la conversion
  document.getElementById("binaryResult").textContent = `Résultat binaire: ${binaryResult}`;
}
