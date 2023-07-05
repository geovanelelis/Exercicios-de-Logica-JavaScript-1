// Exercício 1: Cadastro de Recrutas
let nome = prompt("Insira o seu nome:");
let sobrenome = prompt("Insira o seu sobrenome:");
let estudo = prompt("Insira o seu campo de estudo:");
let idade = prompt("Insira o ano que voce nasceu:");

idade = 2023 - idade;

console.log(`Nome: ${nome}`);
console.log(`Sobrenome: ${sobrenome}`);
console.log(`Campo de estudo: ${estudo}`);
console.log(`Idade: ${idade}`);

/*
const numberOne = prompt("Insira o primeiro numero:");
const numberTwo = prompt("Insira o segundo numero:");
const x = parseFloat(numberOne);
const y = parseFloat(numberTwo);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtração +
    "\nMultiplicação: " +
    multiplicação +
    "\nDivisão: " +
    divisão
);
*/
