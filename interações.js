export function escolherEnxada(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('preparado');
}

export function escolherTesoura(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('vazio');
}

export function escolherPicareta(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('pedra');
}

export function escolherSemente(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('erva');
}