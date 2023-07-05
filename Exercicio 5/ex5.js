/*let option = "";

do {
  option = prompt(
    "Escolha uma opção Cardápio:\n1. Omelete\n2. Bife açebolado com fritas\n3. Frango frito\n4. Carne cozida com mandioca\n5. Encerrar"
  );

  switch (option) {
    case "1":
      alert("Opção escolhida: " + option + ". Omelete");
      break;
    case "2":
      alert("Opção escolhida: " + option + ". Bife açebolado com fritas");
      break;
    case "3":
      alert("Opção escolhida: " + option + ". Frango frito");
      break;
    case "4":
      alert("Opção escolhida: " + option + ". Carne cozida com mandioca");
      break;
    case "5":
      alert("O programa será encerrado");
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (option !== "5");
*/

let amount = parseFloat(
  prompt("Coloque a quantidade inicial de dinheiro disponível:")
);
let options = 0;
let amountAdd = 0;
let amountRemove = 0;

do {
  options = prompt(
    `Sua quantia: R$ ${amount}\n\nO que deseja fazer:\n1. Adicionar dinheiro\n2. Retirar dinheiro\n3. Sair`
  );

  switch (options) {
    case "1":
      amountAdd = parseFloat(prompt("Qual quantidade deseja adicionar?"));
      amount += amountAdd;
      break;

    case "2":
      amountRemove = parseFloat(prompt("Qual quantidade deseja remover?"));
      amount -= amountRemove;
      break;

    case "3":
      alert("O programa será encerrado");
      break;

    default:
      alert("Opção inválida.");
  }
} while (options !== "3");
