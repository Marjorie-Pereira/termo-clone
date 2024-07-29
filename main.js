const termo = 'TERMO';
// todas as divs com id linha-selecionada
const linhaSelecionada = document.querySelectorAll('#linha-selecionada');
const tentativas = document.querySelector('.tentativas');
const userInput = document.getElementById('userInput');
const alerta = document.getElementById('alerta');

userInput.focus();
// analisar palpite do usuário
userInput.addEventListener('keypress', (e) => {
    let palpite = userInput.value;
    if(e.key === 'Enter') {
        if(palpite.length < 5) {
            alerta.style.display = 'block';
        } else {
            alerta.style.display = 'none';
            verificarInput();
        }
    }
})
// coletando input e exibindo na tela

userInput.addEventListener('keypress', (e) => {
    if(e.key !== 'Enter') {
        let palpite = userInput.value;
        alerta.style.display = 'none';
        for(let i = 0; i < linhaSelecionada.length; i ++) {
            if(linhaSelecionada[i].innerHTML === '') {   
                linhaSelecionada[i].innerHTML = e.key.toUpperCase();
                linhaSelecionada[i].style.borderBottom = '4px solid rgb(122, 89, 89)';
                break;
            } 
        }
        

    }
    
})

//função apagar





// console.log(linhaSelecionada[0].innerHTML)
// userInput.addEventListener('keypress', (e) => {
//     for(let i = 0; i < linhaSelecionada.length; i ++) {
//         console.log(linhaSelecionada[i].innerHTML);
//     }
// })






// verificando input do usuário
function verificarInput() {
    for(let i = 0; i < linhaSelecionada.length; i++) {
        if(termo.includes(linhaSelecionada[i].innerHTML) ) {
            
            // comparando o indice da letra encontrada no termo com o indice da letra no elemento 
            if(termo.indexOf(linhaSelecionada[i].innerHTML) == i) {
                linhaSelecionada[i].style.borderBottom = 'none';
                linhaSelecionada[i].id = 'letra-certa'; 
            } else {
                linhaSelecionada[i].style.borderBottom = 'none';
                linhaSelecionada[i].id = 'posicao-errada';
            }
        } else {
            linhaSelecionada[i].style.borderBottom = 'none';
            linhaSelecionada[i].id = 'letra-errada';
        }
    }
}




