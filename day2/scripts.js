/*
Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!

Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.

Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.

Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!

Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.

Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/
function submitButton(){
    var submitNome = document.getElementById("nome").value;
    var submitIdade = document.getElementById("idade").value;
    var submitLinguagem = document.getElementById("linguagem").value;
    var submitText = "Olá "+ submitNome +", você tem "+submitIdade+" anos e já está aprendendo " +submitLinguagem+ "!";
    var show = document.getElementById("show");
    //Atribuindo o texto a "text"
    document.getElementById("text").innerText = submitText;
    //mostrando a div "show"
    show.style.display = 'block';
    //Atribuindo o texto em "linguagem2"
    document.getElementById("linguagem2").innerText = 'Você gosta de estudar ' + submitLinguagem + '?';
}
function submitButton2(){
    var submitOption =document.getElementById("option").value;
    var submitText2 = "Muito bom! Continue estudando e você terá muito sucesso.";
    var submitText3 = "Ahh que pena... Já tentou aprender outras linguagens?"
    var submitText4 = "Você digitou um número inválido, tente novamente."
    //Condição de respostas do input que serão exibidas em "text2"
    if (submitOption == 1){
        document.getElementById("text2").innerText = submitText2;
    }
    else if(submitOption == 2){
        document.getElementById("text2").innerText = submitText3;
    }
    else{
        document.getElementById("text2").innerText = submitText4;
        document.getElementById('option').value = "";
    }
}
//Atribuindo a tecla enter as funções
document.getElementById('linguagem').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      submitButton();
    }
  });

  document.getElementById('option').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      submitButton2();
    }
  });
