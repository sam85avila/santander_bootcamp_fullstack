const alunos = [
        {
                nome: "Amy",
                nota: 6,
                turma: '1A'
        },
        {
                nome: "Ellie",
                nota: 10,
                turma: '1A'
        },
        {
                nome: "Rich",
                nota: 7,
                turma: '1A'
        },
        {
                nome: "Sam",
                nota: 10,
                turma: '1A'
        },
        {
                nome: "Mel",
                nota: 8,
                turma: '1A'
        },
        {
                nome: "Ron",
                nota: 5,
                turma: '1A'
        },
];

const media = 7;

function exibeAprovados(array, media) {
        let aprovados = [];
        
        for (let i = 0; i < array.length; i++) {                
                // usando object desestructuring
                const {nome, nota} = array[i];
               
                if(nota >= 7){
                        aprovados.push(nome);
                }
        }
        return aprovados;
}

console.log('Relação de alunos aprovados: ', exibeAprovados(alunos, media));