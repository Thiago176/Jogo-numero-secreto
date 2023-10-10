let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Número secretro ');
exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

 exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p', 'Você descobriu o numero secreto!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados=[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
