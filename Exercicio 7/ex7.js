// Fila de Espera
/*
let option = "";
let fila = [];

do {
  let pacientes = "";

  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }

  option = prompt(
    "Fila de Pacientes:\n" +
      pacientes +
      "\nDigite um número para escolher a opção desejada:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  switch (option) {
    case "1":
      let novoPaciente = prompt("Digite o nome do novo paciente:");
      fila.push(novoPaciente);
      break;

    case "2":
      let consultarPaciente = fila.shift();
      if (fila.length > 0) {
        alert("Paciente consultado: " + consultarPaciente + "\n\n");
      } else {
        alert("Não há pacientes na fila.");
      }
      break;

    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");
*/

// Pilha de Cartas

let option = "";
let pilha = [];

do {
  option = prompt(
    "Cartas contidas no baralho: " +
      pilha.length +
      "\n\nEscolha uma opção:\n 1 - Adicionar uma carta\n 2 - Puxar uma carta\n 3 - Mostrar cartas adicionadas ao baralho\n 4 - Sair"
  );

  switch (option) {
    case "1":
      let novaCarta = prompt("Digite o nome da carta que deseja adicionar:");
      pilha.push(novaCarta);
      break;

    case "2":
      let puxarCarta = pilha.pop();
      if (pilha.length > 0) {
        alert("Carta puxada: " + puxarCarta);
      } else {
        alert("Não há cartas no baralho");
      }
      break;

    case "3":
      let cartas = "";
      for (let i = pilha.length - 1; i >= 0; i--) {
        cartas += i + 1 + "º carta:  " + pilha[i] + "\n";
      }
      alert("Cartas adicionadas ao baralho:\n" + cartas);
      break;

    case "4":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "4");
