const termo = 'TERMO';

const tentativas = document.querySelector('.tentativas');
const primeiraLinha = tentativas.firstElementChild;
for(let i = 0; i < 5; i ++) {
    primeiraLinha.children[i].id = 'linha-selecionada';
}

const linhaSelecionada = document.querySelectorAll('#linha-selecionada');
const userInput = document.getElementById('userInput');
const alerta = document.getElementById('alerta');
let enviado = false;

userInput.focus();

// analisar palpite do usuário

function verificarInput() {
    for(let i = 0; i < 5; i++) {
        linhaSelecionada[i].style.borderBottom = 'none';
        if(termo.includes(linhaSelecionada[i].innerHTML) ) {
            
            // comparando o indice da letra encontrada no termo com o indice da letra no elemento 
            if(termo.indexOf(linhaSelecionada[i].innerHTML) == i) {
                
                linhaSelecionada[i].id = 'letra-certa'; 
            } else {
                
                linhaSelecionada[i].id = 'posicao-errada';
            }
        } else {
            
            linhaSelecionada[i].id = 'letra-errada';
        }
        primeiraLinha.nextElementSibling.children[i].id = 'linha-selecionada';
    }
    
}

// verificando input do usuário
userInput.addEventListener('keypress', (e) => {
    let palpite = userInput.value;
    if(e.key === 'Enter') {
        if(palpite.length < 5) {
            alerta.style.display = 'block';
        } else {
            alerta.style.display = 'none';
            userInput.value = '';
            enviado = true;
            verificarInput();
            
        }
    }
})
// coletando input e exibindo na tela

userInput.addEventListener('keypress', (e) => {
    if(e.key !== 'Enter') {
        alerta.style.display = 'none';
        for(let i = 0; i < 5; i ++) {
            if(linhaSelecionada[i].innerHTML === '') {   
                linhaSelecionada[i].innerHTML = e.key.toUpperCase();
                linhaSelecionada[i].style.borderBottom = '4px solid rgb(122, 89, 89)';
                break;
            } 
        }
        
        
        console.log(linhaSelecionada);
    }
    
})

//função apagar

userInput.addEventListener('input', (e) => {
    // verificando se o 'backspace' foi pressionado, ou seja, se retorna null
    alerta.style.display = 'none';
    let palpite = '';
    // para impedir o usuário de apagar o palpite já enviado
    if(!enviado) {
        for(let i = 0; i < linhaSelecionada.length; i ++) {
            palpite += linhaSelecionada[i].innerHTML;
            
        }
        if(e.data === null) {
            
            palpite = palpite.slice(0, -1);
            for(let i = 0; i < linhaSelecionada.length; i ++) {
                if(i >= palpite.length) {
                    linhaSelecionada[i].innerHTML = '';
                    break;
                }
                linhaSelecionada[i].innerHTML = palpite[i];
                
            }
            
        }
    }
    

})















