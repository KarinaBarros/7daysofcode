function submitButton(){
    var submitNome = document.getElementById("nome").value;
    var submitIdade = document.getElementById("idade").value;
    var submitLinguagem = document.getElementById("linguagem").value;
    var submitText = "Olá "+ submitNome +", você tem "+submitIdade+" anos e já está aprendendo " +submitLinguagem+ "!";

    document.getElementById("text").innerText = submitText;


}