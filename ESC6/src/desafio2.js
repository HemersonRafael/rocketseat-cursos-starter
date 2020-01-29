const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

console.log(usuarios.map((item) => {
    return item.idade;
}));

console.log(usuarios.filter((item) => {
    return item.empresa === 'Rocketseat' && item.idade > 18;
}));

console.log(usuarios.find((item) => {
    return item.empresa === 'Google';
}));

const doubleAge =  usuarios.map((item, index) => {
    usuarios[index].idade = item.idade * 2;
    return item.idade * 2;
})

console.log(usuarios.filter((item) => {
    return item.idade < 50;
}));