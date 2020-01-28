"use strict";

var usuario = {
  nome: 'Hemerson',
  idade: 24,
  endereco: {
    cidade: "Natal",
    estado: "RN"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostrar(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrar(usuario);
