const pessoa =  require("./pessoa");

pessoa.cadastrarPessoa("Larissa", 17)
pessoa.cadastrarPessoa("Julia", 17)
pessoa.cadastrarPessoa("Moreira", 17)

console.log(pessoa.consultaTodasAsPessoas());

pessoa.deletarPessoas(2);
console.log(pessoa.consultaTodasAsPessoas());

console.log(pessoa.consultarPessoasId(1));
