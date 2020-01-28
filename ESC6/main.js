const usuario = {
    nome: 'Hemerson',
    idade: 24,
    endereco: {
        cidade: "Natal",
        estado: "RN"
    },
}

const {nome, idade, endereco:{ cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostrar({nome, idade}){
    console.log(nome, idade);
}

mostrar(usuario)