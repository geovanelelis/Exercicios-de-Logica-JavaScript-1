function somar(a, b) {
  return a + b;
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
let operacao = somar;

console.log(operacao(4, 5));

operacao = function (a, b) {
  return a - b;
};

console.log(operacao(4, 5));

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo();
// oiMundo();

function olaMundo() {
  //  console.log("Ola, mundo!");
}

const oiMundo = function () {
  //  console.log("Oi, mundo");
};

oiMundo();
