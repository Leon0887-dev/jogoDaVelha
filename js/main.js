const quadradosVelha = document.querySelectorAll('.qd-velha');
var jogador = "X";
const jogadorSelecionado = document.querySelector('.vez-jogar p');

quadradosVelha.forEach(quadrado => {
    quadrado.addEventListener('click', e =>{
        let clicandoQuadrado = e.target
        if(clicandoQuadrado.innerHTML !== '') return
        
        clicandoQuadrado.innerHTML = jogador;
        clicandoQuadrado.style.color = '#F2D338';
        
        if(jogador === 'X'){
            jogador = 'O'
        }else{
            jogador = 'X'
        }

        mudarJogador(jogador);
        checaJogador()
    });
})

function mudarJogador(valor){
    jogador = valor
    jogadorSelecionado.innerHTML = 'jogador: ' + jogador;
}

function checaJogador(){
    

    
}