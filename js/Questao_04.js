class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome;
    this.segundoNome;
    this.primeiraNota;
    this.segundaNota;
  }

  nomeCompleto(){
    alert("Nome do aluno: "+this.primeiroNome + " "+ this.segundoNome)
  }
  
  mediaFinal(){
    alert("Média final: " + ((this.primeiraNota + this.segundaNota) / 2))
  }
  situacaoAluno(){
    let mediaFinal = (primeiraNota + segundaNota) / 2;

   if (media > 6){
     alert("Aluno: Aprovado");
   } else {
     alert("Aluno: Reprovado");
   }
  }
}

function mostrarAlunos(alunos){
  for (let i = 0; i< alunos.length;i++){
    alunos[i] = this.nomeCompleto();
    alunos[i] = this.mediaFinal();
    alunos[i] = this.situacaoAluno();
  }
  
  var alunos = new Array()

  var alunos = new Aluno("Gustavo","Lemos",7,10);
  alunos[0] = aluno1;
  var alunos = new Aluno("Thiago","Silva",10,9);
  alunos[1] = aluno2;
  var alunos = new Aluno("Lucas","Santos",7,7);
  alunos[2] = aluno3;
}
mostrarAlunos(alunos);