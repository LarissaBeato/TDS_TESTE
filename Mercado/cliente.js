const clientes = [];
var idSeq = 1;

function cadastrarCliente(nome, cpf){
    var cliente = { id : idSeq++, nome:nome, cpf:cpf }
    clientes.push(cliente);
    return cliente;
}

function consultaTodosOsCliente(){
    return clientes;
}
function deletarCliente(id){
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].id == id){
            clientes.splice(i, 1);
        }
    }
}

function consultarCliente(id){
    return clientes.filter(item => item.id == id);
}

function atualizarCliente(id, nome, cpf){

    var teverRetorno = true;
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].id == id){
            clientes[i].nome = nome;
            clientes[i].cpf = cpf;
            return clientes[i];
        }else{
            teverRetorno = false;
        }
    }

    if(teverRetorno){
        return "o codigo do cliente é invalido";
    }

}

module.exports = {
    cadastrarCliente,
    consultaTodosOsCliente,
    deletarCliente,
    consultarCliente,
    atualizarCliente
    
}