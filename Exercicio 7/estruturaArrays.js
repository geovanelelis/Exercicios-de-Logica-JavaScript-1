/*
const listaDeCompras = ["Processador", "Placa mãe"];
console.log(listaDeCompras);

listaDeCompras[0] = "Placa de Vídeo";
listaDeCompras[1] = 2;
listaDeCompras[2] = true;

console.log(listaDeCompras);

console.log(listaDeCompras[4]);
*/
/*
const pc = ["Placa mãe", "Processador", "Placa de vídeo", "Fonte", "Cooler"];
console.log(pc);

// Adicionar Elementos no FINAL do Array: push
let tamanho = pc.push("Memória RAM");
pc.push("SSD");

console.log(pc);
console.log(tamanho);

// Adicionar Elementos no COMEÇO do Array: unshift
// O último 'unshift' adicionado fica na primeira posição
tamanho = pc.unshift("R$ 2000,00");

console.log(pc);
console.log(tamanho);

// Remover Elementos no FINAL do Array: pop
let ultimoElemento = pc.pop();
console.log(pc);
console.log(ultimoElemento);

// Remover Elementos no COMEÇO do Array: shift
ultimoElemento = pc.shift();
console.log(pc);
console.log(ultimoElemento);

// Pesquisar por um Elemento: includes
// O 'includes' pesquisa pelo valor exato, então, se houver alteração no valor em que ele está lendo, retornará 'false'

const inclui = pc.includes("Fonte");
console.log(inclui);
// Pode ser feito da forma acima ou abaixo
console.log(pc.includes("Fonte XX"));

// Pesquisar por um Elemento: indexOf
const indice = pc.indexOf("Placa de vídeo");
console.log(indice);
//console.log(pc.indexOf("Placa de vídeo"));    TAMBÉM PODE SER FEITO DESTA MANEIRA

// Cortar e Concatenar
// slice: funciona como se estivesse cortando(copiando) uma parte do Array (que é especificada) e salvando em uma variável.

const parte = pc.slice(0, 3); // O índice final '3' fica de fora, pois ele recorta do primeiro até o último elemento indicado.
let parteInverso = pc.slice(-1); // O sinal negativo faz com que o 'slice' comece a recortar os elementos no final do Array.
console.log(pc);
console.log(parte);
console.log(parteInverso);

parteInverso = pc.slice(-3);
console.log(parteInverso);

// concat
// console.log(parte.concat(parteInverso, "R$ 2000,00"));    // ou:
const pcCompleto = parte.concat(parteInverso, "R$ 2000,00");
console.log(pcCompleto);

// Substituição dos Elementos: splice
// 'splice' serve para remover um grupo de elementos e substituí-los por outros elementos ou por nada.
// Diferente do 'pop' e do 'shift', o 'splice' retorna uma lista de elementos removidos

// pcCompleto.splice(Indicar u Elemento para Remover, Indicar quantos elementos serão substituidos a partir do indicado, Indicar os elementos que irão substituir os elementos no Array original);

const elementosRemovidos = pcCompleto.splice(indice, 1, "MONITOR");
console.log(pcCompleto);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let indice = 0; indice < pcCompleto.length; indice++) {
  const elemento = pcCompleto[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
*/
