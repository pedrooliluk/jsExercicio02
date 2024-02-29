/* 
  Cria uma lsita de alunos com suas notas e medias
*/
const media = 7;
let aAluno = [
    {
      name :'pedro',
      nota1: 10,
      nota2: 10
    },
    {
      name :'paulo',
      nota1: 5,
      nota2: 6
    },    
    {
      name :'tiago',
      nota1: 6,
      nota2: 8
    },    
];


for (let index = 0; index < aAluno.length; index++) {
  
    nome = aAluno[index].name
    nMediaAluno = RetMedia( aAluno[index].nota1 , aAluno[index].nota2)
    
    //RetMedia( aAluno[index].nota1 , aAluno[index].nota2)

    

  
    cAprove = ( nMediaAluno >= media ) ? 'Parabéns '+nome+'! Você foi aprovado(a)! ' : 'Não foi desta vez, '+nome+'! Tente novamente! '
    alert(`
    A média do(a) aluno(a) ${nome} é  ${nMediaAluno}} \n 
    ${cAprove} \n 
    `);
      
}


function RetMedia( nVal1 = 0, nVal2 = 0) {
  return ((nVal1+nVal2) / 2).toFixed(2)
}
