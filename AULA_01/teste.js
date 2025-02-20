//Soma de dois valores 
function somaDeDoisValores(a, b){
    return a + b;
}

console.log(somaDeDoisValores(4,2));

//Multiplicação de dois valores
function multiplicacao(a, b){
    return a * b;
}

console.log(multiplicacao(4,2));

//Divisão de dois valores
function divisao(a, b){
    return a/b;
}

console.log(divisao(4,2));

//Trabalhando com array list
const data = []

data.push(1);
data.push(2);
data.push(3);
data.push(4);
data.push(5);


console.log(data);

data.splice(0,1);

console.log(data);

// Utilizando objetos no JS

const pessoa = {
    id: 1,
    nome: "Larissa",
    idade: 17
}

console.log(pessoa);
console.log(pessoa.nome);

module.exports = {
    somaDeDoisValores,
    multiplicacao,
    divisao
}

