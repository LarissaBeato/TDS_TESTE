const pedido = require('./pedido');
const produto = require('./produto');
const cliente = require('./cliente');

test('Cadastrar um produto', () => {
    expect(produto.cadastrarProduto('arroz', 10)).toEqual({ id: 1, nome: 'arroz', preco: 10 });
    expect(produto.cadastrarProduto('feijao', 8)).toEqual({ id: 2, nome: 'feijao', preco: 8 });
});

test('Consultar todos os produtos', () => {
    expect(produto.consultaTodosOsProdutos()).toEqual([{ id: 1, nome: 'arroz', preco: 10 }, { id: 2, nome: 'feijao', preco: 8 }]);
});

test('Consultar produto por id', () => {
    expect(produto.consultarProdutosId(1)).toEqual([{ id: 1, nome: 'arroz', preco: 10 }]);
});

test('Atualizar produto', () => {
    expect(produto.atualizarProduto(1, 'arroz', 15)).toEqual({ id: 1, nome: 'arroz', preco: 15 });
});

test('Deletar produto', () => {
    expect(produto.deletarProduto(1)).toEqual();
});

test('Cadastrar um cliente', () => {
    expect(cliente.cadastrarCliente('julia', '123.456.789-00')).toEqual({ id: 1, nome: 'julia', cpf: '123.456.789-00' });
    expect(cliente.cadastrarCliente('larissa', '987.654.321-00')).toEqual({ id: 2, nome: 'larissa', cpf: '987.654.321-00' });
});

test('Consultar todos os clientes', () => {
    expect(cliente.consultaTodosOsCliente()).toEqual([{ id: 1, nome: 'julia', cpf: '123.456.789-00' }, { id: 2, nome: 'larissa', cpf: '987.654.321-00' }]);
});     

test('Consultar cliente por id', () => {
    expect(cliente.consultarCliente(1)).toEqual([{ id: 1, nome: 'julia', cpf: '123.456.789-00' }]);
});

test('Atualizar cliente', () => {
    expect(cliente.atualizarCliente(1, 'Julia hang', '123.456.789-00')).toEqual({ id: 1, nome: 'Julia hang', cpf: '123.456.789-00' });
});


test('Deletar cliente', () => {
    expect(cliente.deletarCliente(1)).toEqual();
});

test('Cadastrar um pedido', () => {
    expect(pedido.cadastrarPedido(1, 1, 2, 20)).toEqual({ id: 1, id_cliente: 1, id_produto: 1, quantidade: 2, total: 20 });
    expect(pedido.cadastrarPedido(2, 2, 3, 24)).toEqual({ id: 2, id_cliente: 2, id_produto: 2, quantidade: 3, total: 24 });
});

test('Consultar todos os pedidos', () => {
    expect(pedido.consultaTodosOsPedidos()).toEqual([{ id: 1, id_cliente: 1, id_produto: 1, quantidade: 2, total: 20 }, { id: 2, id_cliente: 2, id_produto: 2, quantidade: 3, total: 24 }]);
});

test('Consultar pedido por id', () => {
    expect(pedido.consultarPedidosId(1)).toEqual([{ id: 1, id_cliente: 1, id_produto: 1, quantidade: 2, total: 20 }]);
});

test('Atualizar pedido', () => {
    expect(pedido.atualizarPedidos(1, 1, 1, 3, 30)).toEqual({ id: 1, id_cliente: 1, id_produto: 1, quantidade: 3, total: 30 });
});

test('Deletar pedido', () => {
    expect(pedido.deletarPedidos(1)).toEqual();
});

