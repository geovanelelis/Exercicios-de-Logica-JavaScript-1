function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}
const resultado = calcularMedia(7, 2);

//console.log(resultado);

// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
  const produto = {
    nome, // nome: nome
    preco, // preco: preco
    estoque: 1,
  };
  return produto;
}
//const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);
//console.log(notebook);  // Dá o mesmo resultado do código abaixo
//console.log(criarProduto("Notebook Intel Core i3 8GB", 2500));

function areaRetangulo(base, altura) {
  //const area = base * altura;
  //return area;  // Dá o mesmo resultado do código abaixo
  return base * altura;
}

function areaQuadrado(lado) {
  return areaRetangulo(lado, lado);
}

//console.log(areaRetangulo(3, 5));

//console.log(areaQuadrado(9));

function hello() {
  let texto = "...";
  return texto;
  texto = "Hello, world!";
  console.log(texto);

  // Uma função só pode ter uma saída, depois do return nada é executado
  // Por isso, o texto "Hello, world!" não é lido.
}
//console.log(hello());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

//console.log(maioridade(29));
//console.log(maioridade(15));
