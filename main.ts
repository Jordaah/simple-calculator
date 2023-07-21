import Prompt from "prompt-sync";

const prompt = Prompt({
  sigint: false,
});

function addition(a: number, b: number) {
  return a + b;
}

function substraction(a: number, b: number) {
  return a - b;
}

function multiplication(a: number, b: number) {
  return a * b;
}

function division(a: number, b: number) {
  if (b === 0) {
    return "Erreur : division par zéro";
  }
  return a / b;
}

function calculator() {
  const numberOne = parseFloat(prompt("Entrez le premier nombre :"));
  const operator = prompt("Entrez l'opérateur (+, -, *, /) :");
  const numberTwo = parseFloat(prompt("Entrez le deuxième nombre :"));

  let result: any;

  switch (operator) {
    case "+":
      result = addition(numberOne, numberTwo);
      break;
    case "-":
      result = substraction(numberOne, numberTwo);
      break;
    case "*":
      result = multiplication(numberOne, numberTwo);
      break;
    case "/":
      result = division(numberOne, numberTwo);
      break;
    default:
      result = "Opérateur non valide";
  }

  prompt("Le résultat est : " + result);
}

calculator();
