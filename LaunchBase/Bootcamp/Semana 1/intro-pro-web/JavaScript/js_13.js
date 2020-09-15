//  Aula - Vetores

// Como agrupar um grupo de objetos em uma única variável?

//Array
const alunos = [ 
// usamos conchetes para agrupar os valores.
    {   // 0 posição
        nome: "Mayk",
        nota: 9.8
    },
// dentro das chaves fica as propriedades de cada valor.
    {   // 1 posição
        nome: "Diego",
        nota: 10
    },
//Cada Objeto tem uma posição que começa do 0...
    {   // 2 posição
        nome: "Fulano",
        nota: 2
    }
]
// não esqueça de usa a ',' virgula para separar os valores.

const media = (aluno[0].nota + aluno[1].nota + aluno[2].nota) / 3

console.log(media)

if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns!`)
} else {
    console.log(`A nota foi de ${media}. Boa recuperação!`)
}