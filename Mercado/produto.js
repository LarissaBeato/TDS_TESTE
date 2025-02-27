const produtos = [];
var idSeq = 1;

function cadastrarProduto(nome, preco){
    var produto = { id : idSeq++, nome:nome, preco:preco }
    produtos.push(produto);
    return produto;
}

function consultaTodosOsProdutos(){
    return produtos;
}
function deletarProduto(id){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id == id){
            produtos.splice(i, 1);
        }
    }
}

function consultarProdutosId(id){
    return produtos.filter(item => item.id == id);
}

function atualizarProduto(id, nome, preco){

    var teverRetorno = true;
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id == id){
            produtos[i].nome = nome;
            produtos[i].preco = preco;
            return produtos[i];
        }else{
            teverRetorno = false;
        }
    }

    if(teverRetorno){
        return "o codigo do produto é invalido";
    }

}

module.exports = {
    cadastrarProduto,
    consultaTodosOsProdutos,
    deletarProduto,
    consultarProdutosId,
    atualizarProduto
    
}