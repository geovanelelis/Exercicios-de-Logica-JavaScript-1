
let number = parseFloat(prompt("Digite um número:"));
let calc = 0;
let result = "";

for (let i = 1; i <= 20; i++) {
  calc = number * i;
  result += `-> ${number} * ${i} = ${calc}\n`;
}
alert(`Tabuada de ${number}:\n${result}`);



let name = prompt("Informe uma palavra:");
let invert = "";

for (let i = name.length - 1; i >= 0; i--) {
  invert += name[i];
}

if (name === invert) {
  alert(name + " é um palíndromo!");
} else {
  alert(`${name} não é um palíndromo\n\n${name} é diferente de ${invert}`);
}
