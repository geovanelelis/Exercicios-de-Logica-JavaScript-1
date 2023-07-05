function areaTriangulo() {
  const base = prompt("Digite o valor da base do triângulo:");
  const altura = prompt("Digite o valor da altura do triângulo:");
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = prompt("Digite o valor da base do retângulo:");
  const altura = prompt("Digite o valor da altura do retângulo:");
  return base * altura;
}

function areaQuadrado() {
  const lado = prompt("Digite o valor do lado do quadrado:");
  return lado * lado;
}

function areaTrapezio() {
  const baseMaior = parseFloat(
    prompt("Digite o valor da base maior do trapézio:")
  );
  const baseMenor = parseFloat(
    prompt("Digite o valor da base menor do trapézio:")
  );
  const altura = prompt("Digite o valor da altura do trapézio:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  const raio = prompt("Digite o valor do raio do círculo:");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n\n" +
      "Escolha a opção que deseja calcular:\n" +
      "1. Área do Triângulo\n" +
      "2. Área do Retângulo\n" +
      "3. Área do Quadrado\n" +
      "4. Área do Trapézio\n" +
      "5. Área do Círculo\n" +
      "6. Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;

      case "2":
        resultado = areaRetangulo();
        break;

      case "3":
        resultado = areaQuadrado();
        break;

      case "4":
        resultado = areaTrapezio();
        break;

      case "5":
        resultado = areaCirculo();
        break;

      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida!");
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
