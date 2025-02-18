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
    var index = pessoas.findIndex(pessoa => pessoa.id == id);
    if(index != -1)
    {
        pessoas.splice(index,1);
        return true;
    }
    return false;

}


module.exports = {
    cadastrarPessoa,
    consultaTodasAsPessoas,
    deletarPessoas
};

// console.log(cadastrarPessoa("Larissa", 17));
// console.log(consultaTodasAsPessoas());
