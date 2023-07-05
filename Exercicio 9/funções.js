function hello() {
  // console.log("Hello, world!");
}
hello(); // Chama a função "hello()" mostrando no console a mensagem "Hello, world!"

function double(x) {
  alert("O dobro de " + x + " é " + x * 2);
}
//double(5); // saída: O dobro de 5 é 10
//double(); // saída: O dobro de undefined é NaN

// speakHello(name = "world") -> Faz com que o valor padrão para "name" seja "world"
function speakHello(name = "world") {
  alert("Hello, " + name + "!");
}
//speakHello("Geovane"); // saída: Hello, Geovane!
//speakHello(); // saída: Hello, world!

function sum(a, b) {
  alert("O resultado da soma é: " + (a + b));
}
//sum(6, 4);

function createUser(name, email, password, type = "admin") {
  const user = {
    name, // é o mesmo que name = name,
    email,
    password,
    type,
  };
  console.log(user);
}

//createUser("Elvis", "elvis@gmail.com", "123456");

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}

function objetoComoParametros(usuario) {
  // ...
  usuario.nome;
  usuario.email;
}
muitosParametros(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

objetoComoParametros(dadosDoUsuario);
