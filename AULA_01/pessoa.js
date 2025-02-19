//CRUD
//CREATE - CRIAR 
//READES - LER
//UPTADES - ATUALIZAR
//DELETE - DELETAR

// ID, NOME, IDADE
const pessoas = [];
var idSeq = 0;

function cadastrarPessoa(nome, idade){
    var pessoa = { id : idSeq++, nome:nome, idade:idade }
    pessoas.push(pessoa);
    return pessoa;
}

function consultaTodasAsPessoas(){
    return pessoas;
}
function deletarPessoas(id){
    //pesquisar qual é a posição do item no ArrayList
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].id == id){
            console.log(pessoas[i]);
            pessoas.splice(i, 1);
        }
    }
}

function deletaPessoa(id){
//Pesquisar qual a posição do item no Arraylist
    for (let i = 0; i < pessoas.length; i++) {
        if(pessoas[i].id == id){
            console.log(pessoas[i]);
            pessoas.splice(i, 1); //Deleta o item do Arraylist
        }
    }
    
};

function consultarPessoasId(){
    return pessoas.filter(item => item.id == id);
}

function atualizarPessoa(id, nome, idade){

}

module.exports = {
    cadastrarPessoa,
    consultaTodasAsPessoas,
    deletarPessoas
}

// console.log(cadastrarPessoa("Larissa", 17));
// console.log(consultaTodasAsPessoas());
