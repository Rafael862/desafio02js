let med
let indexArray = 0
let nameStudent 
let noteOne
let noteTwo
let again
const date = [
    {
        name: '',
        oneNote: '',
        twoNote: '',
        medNote: '',
        status: ''
    }
]
let options = prompt(`Digite a opção desejada:
1 - Cadastrar novo estudante
2 - Consultar todas notas
3 - Finalizar`)

switch (options){
case "1": 
    question()
break;
case "2":
    result();
break;
case "3":
    alert('programa finalizado');
break;
    default: alert("Opção inválida!")
}


function question () {
    
        nameStudent = prompt("Digite o nome do aluno");
        noteOne = prompt("Digite a nota da primeira prova");
        noteTwo = prompt("Digite a nota da segunda prova");
        
        average()
        function average(){
            med = ((Number(noteOne) + Number(noteTwo)) / 2)
            return
        }

        date[indexArray].name = nameStudent;
        date[indexArray].oneNote = noteOne;
        date[indexArray].twoNote = noteTwo;
        date[indexArray].medNote = med;
        //date[indexArray].status = ;

        indexArray = Number(indexArray) + Number(1)

        let object = {
            name: '',
            oneNote: '',
            twoNote: '',
            medNote: '',
            status: ''
        }
        date.push(object)
    
     
    again = prompt(`Digite 1 para cadastrar outro estudante e 2 para finalizar`)
     
    switch (again){
        case "1": question()
        break
        case "2": result()
        break
        default: alert('Opção inválida')
     }
}

function result () {

    for(i = 0; i < (date.length - 1); i++){
        
        if(date[i].medNote >= 7){
            alert(`A média do(a) aluno(a) ${date[i].name} é: ${date[i].medNote}
            Parabéns, ${date[i].name} Você foi aprovado(a) no concurso! `)
        } else {
            alert(`A média do(a) aluno(a) ${date[i].name} é: ${date[i].medNote}\n
            Não foi dessa vez, ${date[i].name}! Tente novamente! `)
        }
    }
}
