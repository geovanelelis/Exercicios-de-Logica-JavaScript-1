/*
const nameCar1 = prompt("Insira o nome do primeiro veículo")
const speedCar1 = parseFloat(prompt(`Insira a velocidade do ${nameCar1}`))
const nameCar2 = prompt("Insira o nome do segundo veículo")
const speedCar2 = parseFloat(prompt(`Insira a velocidade do ${nameCar2}`))

if (speedCar1 > speedCar2) {
   alert(`A velocidade do ${nameCar1} é maior`);
}
else if (speedCar1 < speedCar2) {
   alert(`A velocidade do ${nameCar2} é maior`);
} else {
   alert(`A velocidade do ${nameCar1} e do ${nameCar2} é igual`);
}
*/

const nameCharacter1 = prompt("Insira o nome do personagem de ataque:");
const powerCharacter1 = parseFloat(
  prompt(`Insira o poder de ataque de ${nameCharacter1}`)
);

const nameCharacter2 = prompt("Insira o nome do personagem de defesa:");
let lifePointsCharacter2 = parseFloat(
  prompt(`Insira os pontos de vida de ${nameCharacter2}`)
);
const defensePointsCharacter2 = parseFloat(
  prompt(`Insira os pontos de defesa de ${nameCharacter2}`)
);
const shieldCharacter2 = prompt(
  `${nameCharacter2} possui escudo?\nResponda com 's' para Sim e 'n' para Não`
);

let damage = 0;

if (powerCharacter1 > defensePointsCharacter2 && shieldCharacter2 == "n") {
  damage = powerCharacter1 - defensePointsCharacter2;

  lifePointsCharacter2 -= parseFloat(damage);
} else if (
  powerCharacter1 > defensePointsCharacter2 &&
  shieldCharacter2 == "s"
) {
  damage = (powerCharacter1 - defensePointsCharacter2) / 2;

  lifePointsCharacter2 -= parseFloat(damage);
} else if (powerCharacter1 <= defensePointsCharacter2) {
  damage = 0;
}

alert(
  `${nameCharacter1} causou ${damage} de dano em ${nameCharacter2}\n\n ${nameCharacter1}\n Pontos de ataque: ${powerCharacter1}\n\n ${nameCharacter2}:\n Pontos de vida: ${lifePointsCharacter2}\n Pontos de defesa: ${defensePointsCharacter2}`
);
