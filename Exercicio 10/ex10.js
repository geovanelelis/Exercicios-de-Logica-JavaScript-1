// SISTEMA DE VAGAS DE EMPREGO

const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nomeVaga;
    textoFinal += " (" + vaga.candidatos.length + " inscrições)\n";
    return textoFinal;
  }, "");

  alert("Listagem de vagas:\n" + vagasEmTexto);
}

function criarNovaVaga() {
  const nomeVaga = prompt("Informe o nome da vaga:");
  const descricaoVaga = prompt("Informe uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para esta vaga:"
  );

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n\n" +
      "Nome da vaga: " +
      nomeVaga +
      "\n" +
      "Descrição da vaga: " +
      descricaoVaga +
      "\n" +
      "Data limite da vaga: " +
      dataLimite
  );

  if (confirmacao) {
    const criarNovaVaga = {
      nomeVaga,
      descricaoVaga,
      dataLimite,
      candidatos: [],
    };
    vagas.push(criarNovaVaga);
    alert("Vaga criada com sucesso!");
  }
}

function exibirUmaVaga() {
  const indiceVaga = prompt("Informe o índice da vaga que deseja visualizar:");

  if (indiceVaga >= vagas.length || indiceVaga < 0) {
    alert("Índice inválido");
    return;
  }

  const vaga = vagas[indiceVaga];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return (textoFinal += "\n - " + candidato);
  },
  "");

  alert(
    "Vaga nº " +
      indiceVaga +
      "\nNome: " +
      vaga.nomeVaga +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const nomeCandidato = prompt("Informe o nome do candidato:");
  const indiceVaga = prompt("Informe o índice da vaga que deseja inscrever:");
  const vaga = vagas[indiceVaga];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      nomeCandidato +
      " na vaga " +
      indiceVaga +
      "?\n" +
      "\nNome da vaga: " +
      vaga.nomeVaga +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato);
    alert("Candidato " + nomeCandidato + " inscrito com sucesso!");
  }
}

function excluirVaga() {
  const indiceVaga = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indiceVaga];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indiceVaga +
      "?\n\n" +
      "\nNome da vaga: " +
      vaga.nomeVaga +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indiceVaga, 1);
    alert("Vaga nº " + indiceVaga + " excluída com sucesso!");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego\n\n" +
      "Informe a opção desejada:\n" +
      "1 - Listar vagas disponíveis\n" +
      "2 - Cadastrar uma nova vaga\n" +
      "3 - Exibir uma vaga\n" +
      "4 - Inscrever um(a) candidato(a)\n" +
      "5 - Excluir uma vaga\n" +
      "6 - Sair\n"
  );
  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarNovaVaga();
        break;
      case "3":
        exibirUmaVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== "6");
}

executar();
