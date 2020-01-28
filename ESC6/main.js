class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}
class TodoList extends List{
    constructor(){
        super();//chamada para construtor da class pai
        this.usuario = "hemerspn";
    }   
}

const MinhaLista = new TodoList();
const valor = document.getElementById('valor').value
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add(document.getElementById('valor').value);
}