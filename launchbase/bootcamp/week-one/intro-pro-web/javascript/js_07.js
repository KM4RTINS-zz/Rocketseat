// Aula - Operadores relacionais e comparativos

/*

DESAFIO

1°) 
Verificar se a pessoa é maior ou igual a 18 anos. sim(True) Não(False).

2°)
Se sim(True), deixar entrar.
Se não(False), bloquear entrada.

3º)
Se a pessoa tiver 17 anos.
1- Bloquear entrada.
2- Avisar para voltar quando fizer 18 anos.

*/

const idade = 17

//1º
console.log(idade >= 18)

//2º
if (idade >= 18) {
    console.log("Deixar entrar.")
} else {
    console.log("Bloquear entrada.")
}

//3º
if (idade == 17) {
    console.log("Volte quando estiver com 18 anos.")
}
