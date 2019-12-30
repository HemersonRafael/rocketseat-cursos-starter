var checaIdade = function(idade){
    return new Promise(function(resolve, reject){
        if(idade > 18){
            resolve()
        }else{
            reject()
        }

    });
}

//var resultado = minhaPromise();
//console.log(resultado) pedding
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });