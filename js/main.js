const quadradosVelha = document.querySelectorAll('.qd-velha');
var jogador = "X";
const jogadorSelecionado = document.querySelector('.vez-jogar p');

const combinacoesVitorias = [[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];

const VENCEDOR = document.querySelector(".vencedor");
const RESULTADO = document.querySelector('.resultado p');
const REINICAR = document.querySelector('.btn button');

 const iniciaJogo = () => {quadradosVelha.forEach(quadrado => {
    quadrado.innerHTML = '';
    quadrado.classList.remove("preencheu");
    quadrado.removeEventListener('click', clickQuadrados);
    quadrado.addEventListener('click',clickQuadrados,{once: true}  );
})
    VENCEDOR.style.display = "none";
    jogadorSelecionado.innerHTML = "jogador: ";
    jogador = "X"
 }


function mudarJogador(valor){
    jogador = valor === 'X' ? 'O' : 'X';
    jogadorSelecionado.innerHTML = 'jogador: ' + jogador;
}

function checaVencedor(jogadorVencedor){
    return combinacoesVitorias.some(combinacoes =>{
        return combinacoes.every( index =>{
            return quadradosVelha[index].innerHTML === jogadorVencedor ;
        })
    })
}

function checaEmpate(){
    return[...quadradosVelha].every(index => index.classList.contains('preencheu'))
}

function fimDeJogo(empate){

    if(empate){
        VENCEDOR.style.display = "flex";
        RESULTADO.innerHTML = "Empate!!"
    }else{
        VENCEDOR.style.display = "flex";
        jogador === 'X' ? RESULTADO.innerHTML = "X venceu!!" : RESULTADO.innerHTML = "O venceu!!"
    }
}


function clickQuadrados (e){
    let clicandoQuadrado = e.target  
    clicandoQuadrado.classList.add("preencheu");
    clicandoQuadrado.innerHTML = jogador;
    clicandoQuadrado.style.color = '#F2D338'; 
    let vencedor = checaVencedor(jogador); 
    let empate = checaEmpate()

    if(vencedor){
        fimDeJogo(false);
    }else if (empate){
        fimDeJogo(true);
    }
    mudarJogador(jogador); 
}

iniciaJogo();

REINICAR.addEventListener('click', iniciaJogo);