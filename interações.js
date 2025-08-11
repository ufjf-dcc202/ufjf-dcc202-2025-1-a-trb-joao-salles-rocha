export function escolherCorte(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('vazio');
}

export function escolherQuebra(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('pedra');
}

export function escolherSemente(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('erva');
    
}