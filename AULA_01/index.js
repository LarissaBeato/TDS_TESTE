const pessoa =  require("./pessoa");

pessoa.cadastrarPessoa("Larissa", 17)
pessoa.cadastrarPessoa("Julia", 17)
pessoa.cadastrarPessoa("Moreira", 17)

console.log(pessoa.consultaTodasAsPessoas());

pessoa.deletarPessoas(2);

console.log(pessoa.consultaTodasAsPessoas());

console.log(pessoa.consultarPessoasId(1));

pessoa.atualizarPessoa(1, "Larissa Beato", 18);
console.log(pessoa.consultarPessoasId(1));

