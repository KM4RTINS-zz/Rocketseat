//  Aula - Objetos

const aluno01 = {
    nome: "mayk",
    nota: 9.8
} 

// para criar um objeto é só colocar as chaves no valor da variável, assim ela irá receber várias propriedades.

const aluno02 = {
    nome: "Diego",
    nota: 10
} 

const aluno03 = {
    nome: "Fulano",
    nota: 2
} 

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3
const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3
// Repare que Alunos estão recebendo a propriedade através do ponto (objeto.propriedade), sendo assim o console.log também é um objeto, já que ele também recebe várias funcionalidades.

console.log(media)

// Se a média for maior que 5 faz alguma coisa;
// Se não faça outra coisa;

// Estrutura condicional 
if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns!`)
} else {
    console.log(`A nota foi de ${media}. Boa recuperação!`)
}