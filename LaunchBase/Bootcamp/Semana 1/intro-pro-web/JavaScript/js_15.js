// Aula - Estrutura de Repetição


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
    },
    {
        nome: "Luna",
        nota: 8
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
    },
    {
        nome: "Luan",
        nota: 6
    }
]

function calculamedia(alunos){
    //return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
    // Precisamos de uma estrutura de repetição quando o array recebe valores frequentimente. 
    let soma = 0
    // let é uma variável que pode receber diferentes tipos de valores.
    for (let i = 0; i < alunos.length; i++)  {
        // i = 0; i tem que ser menor que o numero de valores do meu Array; i = i + 1
        soma = soma + alunos[i].nota
        /* Operação lógica 
        0 = 0 + 9.8 (0 = 0 + nota do aluno na posição 0)
        0 = 9.8 + 10 ( 0 = 9.8 + nota do aluno na posição 1) (i recebeu 1 por conta da lógica de repetição i = 0 + 1)
        0 = 19.8 + 2 (0 = 19.8 + nota do aluno na posição 2)
        0 = 21.8 + 8 (0 = 21.8 + nota do aluno na posição 3) 
        (A estrutura de repetição para quando o valor de i for igual ao número de valores dentro do array.)
        Ou seja a soma = 29.8
        */
    }

    const media = soma / alunos.length // length mostra o total de valores dentro de um array.
    return media // jogando a média para fora da função com o comando return.
}

function enviamensagem(media, turma){
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}. Boa recuperação!`)
    }
}

const mediaA = calculamedia(alunosdaturmaA)
const mediaB = calculamedia(alunosdaturmaB)

enviamensagem(mediaA,'turma A')
enviamensagem(mediaB,'turma B')