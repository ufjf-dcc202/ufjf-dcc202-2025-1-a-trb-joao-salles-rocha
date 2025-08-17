//Interações com o solo

export function escolherEnxada(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('preparado');
}

export function escolherRegador(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('regado');
}

export function escolherTesoura(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('vazio');
}

export function escolherPicareta(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('pedra_1');
}

export function escolherSemente(){
    const canteiroEscolhido = document.getElementById("canteiro_0");
    canteiroEscolhido.removeAttribute("class");
    canteiroEscolhido.classList.add('erva');
}

//Interações extras

export function passarTempo(){

}