var fOrB = ("");
function submitButton(){
    var option = document.getElementById("option").value;
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if(option == 1){
        front.style.display = 'block';
        fOrB = ("Front-End");
    }
    else if(option == 2){
        back.style.display = 'block';
        fOrB = ("Back-End");
    }
    else{
        document.getElementById('option').value = "";
        alert('Você digitou um numero invalido por favor digite 1 para Front-End ou 2 para Back-End');
    }
}

function submitButton2(){
    var question = document.getElementById("question");
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = (option2 || option3);
   
    if(option4 == 1 || option4 == 2 ){
        document.getElementById('area').innerText=("Você escolheu a carreira de "+fOrB+"!");
        document.getElementById('frontBack').innerText=("Digite 1 para se especializar como "+fOrB+ " ou 2 para se tornar um Fullstack");
        question.style.display = 'block';
    }
    else{
        document.getElementById('option2').value = "";
        document.getElementById('option3').value = "";
        alert('Você digitou um numero invalido por favor digite 1 ou 2');
    }
}

function submitButton3(){
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var linguagem = ("")
    if(option2 == 1){
        linguagem = "React";
    }
    else if(option2 == 2){
        linguagem = "Vue";
    }

    if(option3 == 1){
        linguagem = "C#"
    }
    else if(option3 == 2){ 
        linguagem = "Java"
    }
    if (option4 == 1 || option4 == 2){
        document.getElementById('area2').innerText = ("Além da linguagem "+linguagem+" que outras linguagens você gostaria de aprender?");
        looping.style.display = 'block';
    }
    else{
        document.getElementById('option4').value = "";
        alert('Você digitou um numero invalido por favor digite 1 ou 2');
    }
}

var language = [];
var receberItens = true;

    function submitButton4() {
      var iLooping = document.getElementById("iLooping").value;
      if (iLooping.trim() !== "") {
        language.push(iLooping);
        document.getElementById("iLooping").value = "";
        console.log("Valores na array:", language);
      } else {
        alert("Digite uma linguagem antes de adicionar à lista de desejos.");
      }
    }

    function submitButton5(){
        var listaDesejo = document.getElementById("listaDesejo");
        receberItens = false;
        listaDesejo.style.display = 'block';

       

    }
    function submitButton5(){
        var listaDesejo = document.getElementById("listaDesejo");
        receberItens = false;
        listaDesejo.style.display = 'block';
        var listaContainer = document.getElementById('lista-container');
        var ul = document.createElement('ul');
        for (var i = 0; i < language.length; i++) {
            var li = document.createElement('li');
            li.textContent = language[i];
            ul.appendChild(li);
         }
        listaContainer.appendChild(ul);

    }