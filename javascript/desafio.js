var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('button.botao');
var ulElement = document.querySelector('ul[name=list]');


function getRepos(){
    var user = inputElement.value;
    var liElement = document.createElement('li');
    var liText = document.createTextNode("Carregando");
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
    axios.get("https://api.github.com/users/"+ user + "/repos")
    .then(function(response){
        ulElement.innerHTML = '';
        for(var i = 0; i < response.data.length; i++){
            var name = response.data[i].name;
            //console.log(name)
            var liElement = document.createElement('li');
            var liText = document.createTextNode(name);
            liElement.appendChild(liText);
            ulElement.appendChild(liElement);
        }
    })
    .catch(function(error){
        console.warn(error)
        alert("usuário inválido!")
    });
}

buttonElement.onclick= getRepos;

