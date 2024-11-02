const termo = 'TERMO'
const input = document.getElementById('userInput');
const linhas = document.getElementById('tentativas');
let linhaSelecionada = linhas.firstElementChild;
const alerta = document.getElementById('alerta');
let tentativas = 6;
const dis = document.createAttribute("disabled");

// habilitando digitação
input.focus({ preventScroll: true });

linhaSelecionada.addEventListener('click', (e) => {
    input.focus({ preventScroll: true });
    console.log(palpite);

})

// validando palpite do usuário
function verificarInput() {
    let palpite = '';
    for(let i = 0; i < 5; i++) {
        palpite += linhaSelecionada.children[i].innerHTML;
        if(termo.includes(palpite[i]) ) {


            // comparando o indice da letras do termo e do palpite do usuário
            if(termo.indexOf(palpite[i]) === i) {
                
                linhaSelecionada.children[i].id = 'letra-certa';
            } else {
                
                linhaSelecionada.children[i].id = 'posicao-errada';
            }
        } else {
            
            linhaSelecionada.children[i].id = 'letra-errada';
        }
    }
    if(palpite === termo) {
        alerta.style.visibility = 'visible';
        alerta.innerHTML = 'Parabéns você acertou!';
        // impede o usuário de continuar jogando ao definir atributo do input como disabled
        input.setAttributeNode(dis);
        // isTermoFound = true;
        return true;
    }

    if(linhaSelecionada.nextElementSibling !== null) {
        linhaSelecionada = linhaSelecionada.nextElementSibling;
        linhaSelecionada.className = 'linha linha-selecionada';
        linhaSelecionada.id = 'linha-selecionada';
        linhaSelecionada.firstElementChild.id = 'letra-selecionada';
        linhaSelecionada.previousElementSibling.id = '';
        linhaSelecionada.previousElementSibling.className = 'linha';
    }


}

// analisando input
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' ) {
        if(e.target.value.length < 5) {
            alerta.style.visibility = 'visible';
            return;
        }
        tentativas -= 1;
        e.target.value = '';
        palpite = '';
        verificarInput();
            // if(linhas.children[5].firstElementChild.innerHTML) {
            //     if (!isTermoFound) {
            //         alerta.style.display = 'block';
            //         alerta.innerHTML = 'As tentativas acabaram :(';
            //         return;
            //     }
            //
            // }
        if(tentativas === 0 && !verificarInput()) {
            alerta.style.visibility = 'visible';
            alerta.innerHTML = "As tentativas acabaram :(";
            input.setAttributeNode(dis);
        }




        

    }
})

let palpite = '';
// exibindo input na tela
input.addEventListener('input', (e) => {
    alerta.style.visibility = 'hidden';


    if(e.data === ' ') {
        console.log('blank');
        return false;
    }
    // apagando input
    else if(e.data === null) {
         palpite = palpite.slice(0, -1);
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
         palpite += e.data;

        for(let i = 0; i < 5; i ++) {
            if(!linhaSelecionada.children[i].innerHTML) {
                linhaSelecionada.children[i].innerHTML = palpite[i].toUpperCase();
                linhaSelecionada.children[i].id = '';
                if(i < 4) {
                    // selecionando a proxima letra
                    linhaSelecionada.children[i].nextElementSibling.id = 'letra-selecionada';
                }
                break;
            }
            
        }
    }
})
