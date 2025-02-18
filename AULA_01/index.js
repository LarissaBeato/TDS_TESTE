const pessoa =  require("./pessoa");

pessoa.cadastrarPessoa("Larissa", 17)
pessoa.cadastrarPessoa("Julia", 17)
pessoa.cadastrarPessoa("Moreira", 17)

console.log(pessoa.consultaTodasAsPessoas());

pessoa.deletarPessoas(0)
console.log(pessoa.consultaTodasAsPessoas());