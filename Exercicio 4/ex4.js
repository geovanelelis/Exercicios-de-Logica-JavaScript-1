/*
let speed = 40;

while (speed < 120) {
  alert(`O carro está a ${speed} hm/h`);
  speed += 20;
  alert("Aumentando 20 km/h");

  if (speed === 100) {
    alert("O carro atingiu 100 km/h");
    break;
  }
}

alert("Você atingiu a máxima velocidade da rodovia.");
*/

const name = prompt("Digite o seu nome:");
let visit = prompt(
  `Olá ${name}, tudo bem?\nVocê já visitou alguma cidade? (Sim/Não)`
);
let city;
let cities = "";
let amount = 0;

while (visit === "Sim") {
  city = prompt(`${name}, qual o nome da cidade que você visitou?`);
  cities += "- " + city + "\n";
  amount++;
  visit = prompt("Você visitou mais alguma cidade? (Sim/Não)");
}

alert(
  `Nome do turista: ${name}\n\nQuantidade de cidades visitadas: ${amount}\n\nCidades visitadas:\n${cities}`
);
