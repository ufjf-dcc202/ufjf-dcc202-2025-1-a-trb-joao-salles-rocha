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

export function usarFerramenta(num){
    const canteiro = document.getElementById("canteiro_"+num);
    const tipo = document.classList
    console.log(canteiro);

    switch(ferramenta){
        case ferramenta = "preparar":
            if (canteiro.classList.contains('vazio')){
                canteiro.classList.remove('vazio');
                canteiro.classList.add('preparado');
                console.log("Canteiro preparado.");
            }else
                console.log("Nada pode ser feito.");
            break;

       case ferramenta = "regar":
            if (canteiro.classList.contains('preparado')){
                canteiro.classList.remove('preparado');
                canteiro.classList.add('regado');
                console.log("Canteiro regado.");
            }else
                console.log("Nada pode ser feito.");
            break;

       case ferramenta = "podar":
            if (canteiro.classList.contains('erva')){
                canteiro.classList.remove('erva');
                canteiro.classList.add('vazio');
                console.log("Erva podada.");
            }else
                console.log("Nada pode ser feito.");
            break;

       case ferramenta = "quebrar":
            if (canteiro.classList.contains('pedra_1') || canteiro.classList.contains('pedra_2')){
                canteiro.classList.remove('pedra_1');
                canteiro.classList.remove('pedra_2');
                canteiro.classList.add('vazio');
                console.log("Pedra quebrada.");
            }else
                console.log("Nada pode ser feito.");
            break;
    }
}

//Interações extras
export function passarTempo(){

}