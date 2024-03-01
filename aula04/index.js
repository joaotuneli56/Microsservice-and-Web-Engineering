"use strict";
let nomeCompleto = "João Pedro Moura Tuneli";
const pi = 3.14;
let idade = 39;
console.log(nomeCompleto);
let frase = 'Olá';
let peso = 97;
let estaAprovado = true;
let texto = `${frase} ${nomeCompleto}. Voce tem ${idade} anos e pesa ${peso} kg.`;
console.log(texto);
let texto2 = [];
let texto3 = ["Olá", "Mundo", "!!!"];
console.log("Array texto 2");
texto2.push("Teste");
texto2.push("Outro item");
texto2.push("Terceiro");
console.log(`Itens do texto 2: ${texto2.length}`);
console.log();
texto2.forEach(item => {
    console.log(item);
});
let numeros = [1, 2, 3, 15];
numeros.push(50);
console.log();
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log("*** Tipos comlexos ***");
let pessoas = [];
let pessoa = {
    nome: "Baron",
    idade: 22
};
pessoas.push(pessoa);
let pessoa2 = {
    nome: "Maria",
    idade: 25
};
pessoas.push(pessoa2);
pessoas.forEach(pessoa => {
    console.log(pessoa.nome);
});
