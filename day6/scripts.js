/*
Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
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
var forms4 = document.getElementById("forms4");
var forms5 = document.getElementById("forms5");
var printHortifruti = document.getElementById("print-hortifruti");
var printBebidas = document.getElementById("print-bebidas");
var printAlimentos = document.getElementById("print-alimentos");
var printAçougue = document.getElementById("print-açougue");
var printLimpeza = document.getElementById("print-limpeza");
var printHigiene = document.getElementById("print-higiene");
var arrays = [aHortifruti, aBebidas, aAlimentos, aAçougue, aLimpeza, aHigiene];
var printElements = [printHortifruti, printBebidas, printAlimentos, printAçougue, printLimpeza, printHigiene];


function submitHortifruti(){
    var hortifruti = document.getElementById("hortifruti").value;
    aHortifruti.push(hortifruti);
    document.getElementById("hortifruti").value = "";
    console.log("aHortifruti: ", aHortifruti);
    printHortifruti.textContent = "Hortifruti: " + aHortifruti.join(', ');

}

function submitBebidas(){
    var bebidas = document.getElementById("bebidas").value;
    aBebidas.push(bebidas);
    document.getElementById("bebidas").value = "";
    console.log("aBebidas: ", aBebidas);
    printBebidas.textContent = "Bebidas: " + aBebidas.join(', ');
}

function submitAlimentos(){
    var alimentos = document.getElementById("alimentos").value;
    aAlimentos.push(alimentos);
    document.getElementById("alimentos").value = "";
    console.log("aAlimentos: ", aAlimentos);
    printAlimentos.textContent = "Alimentos: " + aAlimentos.join(', ');
}

function submitAçougue(){
    var açougue = document.getElementById("açougue").value;
    aAçougue.push(açougue);
    document.getElementById("açougue").value = "";
    console.log("aAçougue: ", aAçougue);
    printAçougue.textContent = "Açougue: " + aAçougue.join(', ');
}

function submitLimpeza(){
    var limpeza = document.getElementById("limpeza").value;
    aLimpeza.push(limpeza);
    document.getElementById("limpeza").value = "";
    console.log("aLimpeza: ", aLimpeza);
    printLimpeza.textContent = "Limpeza: " + aLimpeza.join(', ');
}

function submitHigiene(){
    var higiene = document.getElementById("higiene").value;
    aHigiene.push(higiene);
    document.getElementById("higiene").value = "";
    console.log("aHigiene: ", aHigiene);
    printHigiene.textContent = "Higiene: " + aHigiene.join(', ');
}

function pronto(){
    forms.style.display = "none";
    forms2.style.display = "none";


    printHortifruti.textContent = "Hortifruti: " + aHortifruti.join(', ');
    printBebidas.textContent = "Bebidas: " + aBebidas.join(', ');
    printAlimentos.textContent = "Alimentos: " + aAlimentos.join(', ');   
    printAçougue.textContent = "Açougue: " + aAçougue.join(', ');    
    printLimpeza.textContent = "Limpeza: " + aLimpeza.join(', ');    
    printHigiene.textContent = "Higiene: " + aHigiene.join(', ');

    forms3.style.display = "block";
    forms4.style.display = "block";
}

function optionAdd(){
    var option = document.getElementById("option").value;
    if(option == 1){
        forms3.style.display = "none";
        forms4.style.display = "none";
        alert("Certo, você pode continuar adicionando quantos ítens quiser.");
        forms2.style.display = "block";
        forms3.style.display = "block";
        document.getElementById("option").value = "";
    }
    else if(option == 2){
        forms3.style.display = "none";
        forms4.style.display = "none";
        alert("Certo, você excluir quantos ítens quiser.");
        forms3.style.display = "block";
        forms5.style.display = "block";
        document.getElementById("option").value = "";
        var hasElements = arrays.some(array => array.length > 0);

        if (!hasElements) {
            alert("Não há elementos nas arrays para continuar.");
            forms5.style.display = "none";
            forms4.style.display = "block";
            return;
        }
    }
    else{
        alert("Você digitou uma opção invalida");
        document.getElementById("option").value = "";
    }

}

function delet1() {
    var option = document.getElementById("item-delete").value;
    var deleted = false;

    for (var i = 0; i < arrays.length; i++) {
        var array = arrays[i];

        if (array.includes(option)) {
            var index = array.indexOf(option);
            array.splice(index, 1);
            deleted = true;
        }
    }

    if (deleted) {
        printHortifruti.textContent = "Hortifruti: " + aHortifruti.join(', ');
        printBebidas.textContent = "Bebidas: " + aBebidas.join(', ');
        printAlimentos.textContent = "Alimentos: " + aAlimentos.join(', ');
        printAçougue.textContent = "Açougue: " + aAçougue.join(', ');
        printLimpeza.textContent = "Limpeza: " + aLimpeza.join(', ');
        printHigiene.textContent = "Higiene: " + aHigiene.join(', ');
        document.getElementById("item-delete").value = "";
    } else {
        alert("O item a ser excluído não foi encontrado.");
        document.getElementById("item-delete").value = "";
    }
}

function delet2(){
    forms5.style.display = "none";
    forms4.style.display = "block";

}