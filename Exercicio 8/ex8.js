let properties = [];
let options = "";
do {
  options = prompt(
    "Bem vindo(a) ao cadastro de imóveis!\nTotal de imóveis: " +
      properties.length +
      "\n\nEscolha uma opção:\n1. Salvar um novo imóvel\n2. Mostrar os imóveis salvos\n3. Sair"
  );

  switch (options) {
    case "1":
      let property = {};

      property.owner = prompt("Digite o nome do proprietário:");
      property.bedwooms = prompt("Quantos quartos o imóvel possui?");
      property.bathroom = prompt("Quantos banheiros o imóvel possui?");
      property.garage = prompt("O imóvel possui garagem? (Sim/Não)");

      let confirmation = confirm(
        "Salvar este imóvel?\n" +
          "Proprietário: " +
          property.owner +
          "\nQuartos: " +
          property.bedwooms +
          "\nBanheiros: " +
          property.bathroom +
          "\nPossui garagem? " +
          property.garage
      );

      if (confirmation) {
        properties.push(property);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu.");
      }
      break;

    case "2":
      for (let i = 0; i < properties.length; i++) {
        alert(
          i +
            1 +
            "º Imóvel:" +
            "\nProprietário: " +
            properties[i].owner +
            "\nQuartos: " +
            properties[i].bedwooms +
            "\nBanheiros: " +
            properties[i].bathroom +
            "\nPossui garagem: " +
            properties[i].garage
        );
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
  }
} while (options !== "3");
