const termo = 'TERMO'
const input = document.getElementById('userInput');
const linhas = document.getElementById('tentativas').children;
let linhaSelecionada = document.getElementById('linha-selecionada');
const alerta = document.getElementById('alerta');


input.focus({ preventScroll: true });
linhaSelecionada.addEventListener('click', (e) => {
    input.focus({ preventScroll: true });
})
// validando palpite do usuário
function verificarInput() {
    let palpite = '';
    for(let i = 0; i < 5; i++) {
        palpite += linhaSelecionada.children[i].innerHTML;
        if(termo.includes(linhaSelecionada.children[i].innerHTML) ) {


            // comparando o indice da letra encontrada no termo com o indice da letra no elemento 
            if(termo.indexOf(linhaSelecionada.children[i].innerHTML) == i) {
                
                linhaSelecionada.children[i].id = 'letra-certa'; 
            } else {
                
                linhaSelecionada.children[i].id = 'posicao-errada';
            }
        } else {
            
            linhaSelecionada.children[i].id = 'letra-errada';
        }
        // primeiraLinha.nextElementSibling.children[i].id = 'linha-selecionada';
    }
    if(palpite === termo) {
        alerta.style.display = 'block';
        alerta.innerHTML = 'Parabéns você acertou!';
        const dis = document.createAttribute("disabled");
        input.setAttributeNode(dis);
        return true;
    }
}

// analisando input
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        if(e.target.value.length === 5) {
            if(linhas[5].children[0].innerHTML) {
                e.target.value = '';
                verificarInput();
                if(verificarInput() !== true) {
                    alerta.style.display = 'block';
                    alerta.innerHTML = 'As tentativas acabaram :(';
                    return;
                }

            }
            e.target.value = '';
            verificarInput();
            // selecionando a proxima linha das tentativas.
            linhaSelecionada.id = '';
            linhaSelecionada.nextElementSibling.id = 'linha-selecionada';
            linhaSelecionada.nextElementSibling.className = 'linha linha-selecionada';
            linhaSelecionada = linhaSelecionada.nextElementSibling;
            linhaSelecionada.children[0].id = 'letra-selecionada';


        } else {
            alerta.style.display = 'block';
        }
        

    }
})

// exibindo input na tela
input.addEventListener('input', (e) => {
    alerta.style.display = 'none';
    if(e.data === null) {
        for(let i = 4; i >= 0; i--) {
            if(linhaSelecionada.children[i].innerHTML) {
                linhaSelecionada.children[i].innerHTML = '';
                linhaSelecionada.children[i].id = 'letra-selecionada';
                if(i < 4) {
                    linhaSelecionada.children[i].nextElementSibling.id = '';
                }
                break;
            }
        }
        
        
    } else {
        for(let i = 0; i < 5; i ++) {
            if(!linhaSelecionada.children[i].innerHTML) {
                linhaSelecionada.children[i].innerHTML = e.data.toUpperCase();
                linhaSelecionada.children[i].id = '';
                if(i < 4) {
                    linhaSelecionada.children[i].nextElementSibling.id = 'letra-selecionada';
                }
                break;
            }
            
        }
    }
    
})

