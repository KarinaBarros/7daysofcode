/*
Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

Depois que você resolver o desafio de hoje, com certeza não fará mais isso!

Assim como a nossa lista de compras, é muito comum que programas trabalhem com listas de strings, números e objetos.

Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam listas para exibir informações de uma forma simples e fácil de entender.

Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?

Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
*/
var aHortifruti = [];
var aBebidas = [];
var aAlimentos = [];
var aAçougue = [];
var aLimpeza = [];
var aHigiene = [];
var forms = document.getElementById("forms");
var forms2 = document.getElementById("forms2");
var forms3 = document.getElementById("forms3");

function submitHortifruti(){
    var hortifruti = document.getElementById("hortifruti").value;
    aHortifruti.push(hortifruti);
    document.getElementById("hortifruti").value = "";
    console.log("aHortifruti: ", aHortifruti);

}

function submitBebidas(){
    var bebidas = document.getElementById("bebidas").value;
    aBebidas.push(bebidas);
    document.getElementById("bebidas").value = "";
    console.log("aBebidas: ", aBebidas);

}

function submitAlimentos(){
    var alimentos = document.getElementById("alimentos").value;
    aAlimentos.push(alimentos);
    document.getElementById("alimentos").value = "";
    console.log("aAlimentos: ", aAlimentos);

}

function submitAçougue(){
    var açougue = document.getElementById("açougue").value;
    aAçougue.push(açougue);
    document.getElementById("açougue").value = "";
    console.log("aAçougue: ", aAçougue);

}

function submitLimpeza(){
    var limpeza = document.getElementById("limpeza").value;
    aLimpeza.push(limpeza);
    document.getElementById("limpeza").value = "";
    console.log("aLimpeza: ", aLimpeza);

}

function submitHigiene(){
    var higiene = document.getElementById("higiene").value;
    aHigiene.push(higiene);
    document.getElementById("higiene").value = "";
    console.log("aHigiene: ", aHigiene);

}

function pronto(){
    forms.style.display = "none";
    forms2.style.display = "none";

    var printHortifruti = document.getElementById("print-hortifruti");
    printHortifruti.textContent = "Hortifruti: " + aHortifruti.join(', ');

    var printBebidas = document.getElementById("print-bebidas");
    printBebidas.textContent = "Bebidas: " + aBebidas.join(', ');

    var printAlimentos = document.getElementById("print-alimentos");
    printAlimentos.textContent = "Alimentos: " + aAlimentos.join(', ');

    var printAçougue = document.getElementById("print-açougue");
    printAçougue.textContent = "Açougue: " + aAçougue.join(', ');

    var printLimpeza = document.getElementById("print-limpeza");
    printLimpeza.textContent = "Limpeza: " + aLimpeza.join(', ');

    var printHigiene = document.getElementById("print-higiene");
    printHigiene.textContent = "Higiene: " + aHigiene.join(', ');

    forms3.style.display = "block";
}