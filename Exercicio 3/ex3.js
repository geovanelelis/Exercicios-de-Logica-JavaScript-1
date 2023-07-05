let value = parseFloat(prompt("Escreva um valor em metros:"));
let option = parseFloat(
  prompt(
    `Escolha o número de acordo com a unidade de medida que você deseja converter ${value} metros:\n\n1. milímetro (mm)\n2. centímetro (cm)\n3. decímetro (dm)\n4. decâmetro (dam)\n5. hectômetro (hm)\n6. quilômetro (km)`
  )
);

let conversion = 0;

switch (option) {
  case 1:
    conversion = value * 1000 + "mm";
    break;

  case 2:
    conversion = value * 100 + "cm";
    break;

  case 3:
    conversion = value * 10 + "dm";
    break;

  case 4:
    conversion = value / 10 + "dam";
    break;

  case 5:
    conversion = value / 100 + "hm";
    break;

  case 6:
    conversion = value / 1000 + "km";
    break;

  default:
    alert("Opção inválida");
}

alert(`Resultado da Conversão:\n${value}m = ${conversion}`);
