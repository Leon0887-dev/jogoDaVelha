const quadradosVelha = document.querySelectorAll('.qd-velha');
var jogador = "X";
const jogadorSelecionado = document.querySelector('.vez-jogar p');

const combinacoesVitorias = [[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];

quadradosVelha.forEach(quadrado => {
    quadrado.addEventListener('click',clickQuadrados,{once: true}  );
})

function clickQuadrados (e){
    let clicandoQuadrado = e.target  
    clicandoQuadrado.innerHTML = jogador;
    clicandoQuadrado.style.color = '#F2D338';
    let qualEVez = jogador === 'X' ? 'O' : 'X'; 
    mudarJogador(qualEVez);
    checaJogador()
}

function mudarJogador(valor){
    jogador = valor
    jogadorSelecionado.innerHTML = 'jogador: ' + jogador;
}

function checaJogador(jogadorVencedor){
    return combinacoesVitorias.some(combinacao =>{

    })

    
}