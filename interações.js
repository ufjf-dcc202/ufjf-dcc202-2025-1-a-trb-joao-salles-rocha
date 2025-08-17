//Interações com o solo
function limpaAtivos(){
    const enxada = document.getElementById("preparar");
    const regador = document.getElementById("regar");
    const tesoura = document.getElementById("podar");
    const picareta = document.getElementById("quebrar");
    const semente = document.getElementById("plantar");
    enxada.classList.remove('ativo');
    regador.classList.remove('ativo');
    tesoura.classList.remove('ativo');
    picareta.classList.remove('ativo');
    semente.classList.remove('ativo');
}

export function escolherFerramenta(id){
    const ferramenta = document.getElementById(id);
    limpaAtivos();
    ferramenta.classList.add('ativo');
}

//Interações extras

export function passarTempo(){

}