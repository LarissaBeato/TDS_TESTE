function soma(a, b) {
    return a + b;
}
console.log(soma(1, 1));

function multiplicacao(a, b){
    return a * b;
}
console.log(multiplicacao(4, 2));

function divisao(a, b){
    return a/b;
}
console.log(divisao(4, 2));


function subtracao(a, b){
    return a - b;
}
console.log(subtracao(4, 2));

function pessoa(){
    return {
        id: 1,
        nome: "Larissa",
        idade: 17
    }
}



module.exports = {
    soma,
    multiplicacao,
    divisao,
    subtracao,
    pessoa
}
