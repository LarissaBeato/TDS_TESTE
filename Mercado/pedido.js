const pedidos = [];
var idSeq = 1;

function cadastrarPedido(id_cliente, id_produto, quantidade, total){
    var pedido = { id : idSeq++, id_cliente:id_cliente, id_produto:id_produto, quantidade:quantidade, total:total }
    pedidos.push(pedido);
    return pedido;
}

function consultaTodosOsPedidos(){
    return pedidos;
}
function deletarPedidos(id){
    for(let i = 0; i < pedidos.length; i++){
        if(pedidos[i].id == id){
            pedidos.splice(i, 1);
        }
    }
}

function consultarPedidosId(id){
    return pedidos.filter(item => item.id == id);
}

function atualizarPedidos(id, id_cliente, id_produto, quantidade, total){

    var teverRetorno = true;
    for(let i = 0; i < pedidos.length; i++){
        if(pedidos[i].id == id){
            pedidos[i].id_cliente = id_cliente;
            pedidos[i].id_produto = id_produto;
            pedidos[i].quantidade = quantidade;
            pedidos[i].total = total;
            return pedidos[i];
        }else{
            teverRetorno = false;
        }
    }

    if(teverRetorno){
        return "o codigo do pedido é invalido";
    }

}

module.exports = {
    cadastrarPedido,
    consultaTodosOsPedidos,
    deletarPedidos,
    consultarPedidosId,
    atualizarPedidos
    
}