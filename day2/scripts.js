function submitButton(){
    var submitNome = document.getElementById("nome").value;
    var submitIdade = document.getElementById("idade").value;
    var submitLinguagem = document.getElementById("linguagem").value;
    var submitText = "Olá "+ submitNome +", você tem "+submitIdade+" anos e já está aprendendo " +submitLinguagem+ "!";
    var show = document.getElementById("show");

    document.getElementById("text").innerText = submitText;

    show.style.display = 'block';

    document.getElementById("linguagem2").innerText = 'Você gosta de estudar ' + submitLinguagem + '?';

}

function submitButton2(){
    var submitOption =document.getElementById("option").value;
    var submitText2 = "Muito bom! Continue estudando e você terá muito sucesso.";
    var submitText3 = "Ahh que pena... Já tentou aprender outras linguagens?"
    if (submitOption == 1){
        document.getElementById("text2").innerText = submitText2;
    }
    else{
        document.getElementById("text2").innerText = submitText3;
    }
}