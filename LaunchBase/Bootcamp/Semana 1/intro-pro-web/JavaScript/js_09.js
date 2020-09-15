// Aula - Operadores lógicos e aritméticos

/*

DESAFIO

1°) 
Verificar se a pessoa é maior igual a 18 anos. sim(True) Não(False).

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

//2º e 3°
if ( !(idade >= 18) || idade === 17) {
    console.log("Bloquear entrada.")
} else {
    console.log("Deixar entrar.")
}

//Usamos operadores lógicos para simplificar a condição.
