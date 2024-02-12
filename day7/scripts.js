let valor1 = '';
let valor2 = '';
let operacao = '';
let resultado = '';

function atualizaFuncao() {
    let funcao = valor1.replace('.', ',');

    if (operacao !== '') {
        funcao += ` ${operacao.replace('*', 'x')}`
    }

    if (valor2 !== '') {
        funcao += ` ${valor2.replace('.', ',')}`
    }

    if (resultado !== '') {
        funcao += ` = ${resultado.toString().replace('.', ',')}`;
    }

    document.getElementById('captura').value = funcao;
}

function setValor(valor) {
    if (resultado === '') {
        if (operacao === '') {
            valor1 += valor;
        } else {
            valor2 += valor;
        }
    
        atualizaFuncao();
    }
}

function setOperacao(valor) {
    if (resultado === '') {
        operacao = valor;
        atualizaFuncao();
    }
}

function setResultado() {
    if (valor1 !== '' && operacao !== '' && valor2 !== '' && resultado === '') {
        switch (operacao) {
            case '+':
                resultado = parseFloat(valor1) + parseFloat(valor2);
                break;
                
            case '-':
                resultado = parseFloat(valor1) - parseFloat(valor2);
                break;
                
            case '*':
                resultado = parseFloat(valor1) * parseFloat(valor2);
                break;
            
            case '/':
                resultado = parseFloat(valor1) / parseFloat(valor2);
                break;
            
            default:
                break;
        }
        valor1 = resultado.toString();
        valor2 = '';
        operacao = '';
        resultado = '';
        atualizaFuncao();
    }
}

function ac(){
    valor1 = '';
    valor2 = '';
    operacao = '';
    resultado = '';
    atualizaFuncao();
}

function backspace() {

    if (resultado !== '') {
        resultado = resultado.slice(0, -1);
    } else if (operacao !== '') {
        operacao = operacao.slice(0, -1);
    } else if (valor2 !== '') {
        valor2 = valor2.slice(0, -1);
    } else if (valor1 !== '') {
        valor1 = valor1.slice(0, -1);
    }

    atualizaFuncao();
}