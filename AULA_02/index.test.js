const index = require('./index');

test("Soma de dois valores!", () => {
    expect(index.soma(1, 1)).toBe(2);
});

test("Multiplicação de dois valores!", () => {
    expect(index.multiplicacao(4, 2)).toBe(8);
});

test("Divisão de dois valores!", () => {    
    expect(index.divisao(4, 2)).toBe(2);
});

test("subtracao de dois valores!", () => {    
    expect(index.subtracao(4, 2)).toBe(2);
});

test("Retorno de pessoas!", () => {
    expect(index.pessoa()).toEqual({
        id: 1,
        nome: "Larissa",
        idade: 17
    });
});