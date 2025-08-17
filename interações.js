import { tocarSom, pararSom } from "./audio.js";
let ferramenta = "preparar";

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
function trocarFerramenta(id){
    ferramenta = id;
}
export function escolherFerramenta(id){
    const opção = document.getElementById(id);
    limpaAtivos();
    opção.classList.add('ativo');
    trocarFerramenta(id);
    tocarSom("trocarItem");
}

//Interações extras
export function passarTempo(){

}