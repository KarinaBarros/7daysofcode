/* Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */
var numero = Math.floor(Math.random() * 10) + 1;
var tentativasRestantes = 3;
var jogo = document.getElementById("jogo");
var continuar = document.getElementById("continue");
var image = document.getElementById("image");

function submitButton() {
    var submitNumber = document.getElementById("submit-number").value;
    console.log(submitNumber);

    if (submitNumber > 10 || submitNumber < 0){
        alert("insira um número de 1 a 10.");
        return;
    }

    if (submitNumber == numero) {
        document.getElementById("acertou").innerText = ("Parabéns você acertou, o número era "+numero+" !");
        jogo.style.display = "none";
        image.style.display = "block";
        return;

    } else {
        tentativasRestantes--;

        if (tentativasRestantes > 0) {
            alert("Você errou. Restam " + tentativasRestantes + " tentativas");
            document.getElementById("submit-number").value = "";
        } 
        
        else {
            alert("Suas tentativas acabaram. O número correto era " + numero);
            jogo.style.display = "none";
            continuar.style.display = "block";
            return;
        }
    }
}

function submitButton2(){
    window.location.reload();
}