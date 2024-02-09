/*Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado. */
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