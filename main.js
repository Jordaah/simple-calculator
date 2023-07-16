function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Erreur : division par zéro";
  }
  return a / b;
}

function calculatrice() {
  var nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
  var operateur = prompt("Entrez l'opérateur (+, -, *, /) :");
  var nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

  var resultat;

  switch (operateur) {
    case "+":
      resultat = addition(nombre1, nombre2);
      break;
    case "-":
      resultat = soustraction(nombre1, nombre2);
      break;
    case "*":
      resultat = multiplication(nombre1, nombre2);
      break;
    case "/":
      resultat = division(nombre1, nombre2);
      break;
    default:
      resultat = "Opérateur non valide";
  }

  alert("Le résultat est : " + resultat);
}
calculatrice();
