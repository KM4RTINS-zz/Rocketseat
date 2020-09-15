// Aula - Condicionais

const aluno01 = "Mayk"
const notaAluno01 = 9.8

const aluno02 = "Diego"
const notaAluno02 = 10

const aluno03 = "Fulano"
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

console.log(media)

// Se a média for maior que 5 faz alguma coisa;
// Se não faça outra coisa;

// Estrutura condicional 
if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns!`)
} else {
    console.log(`A nota foi de ${media}. Boa recuperação!`)
}