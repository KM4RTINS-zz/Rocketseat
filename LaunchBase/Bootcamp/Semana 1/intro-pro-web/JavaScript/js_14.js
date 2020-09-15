// Aula - Funções e Métodos 

// Criar um programa que cálcula a média das notas entre os alunos e enviar uma mensagem do cálculo da média.

const alunosdaturmaA = [ 
    {   
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }
]

const alunosdaturmaB = [ 
    {   
        nome: "Alan",
        nota: 7
    },
    {
        nome: "Fábia",
        nota: 5
    },
    {
        nome: "Siclano",
        nota: 2
    }
]

/*

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
Normal seria duplicar, mas na programação existe a opção de aproveitamento de códigos 'funções'.

*/

function calculamedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

function enviamensagem(media, turma){
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}. Boa recuperação!`)
    }
}

// Use parâmetros para jogar valores para dentro de funções e retornar para variáveis.
const mediaA = calculamedia(alunosdaturmaA)
const mediaB = calculamedia(alunosdaturmaB)

enviamensagem(mediaA,'turma A')
enviamensagem(mediaB,'turma B')