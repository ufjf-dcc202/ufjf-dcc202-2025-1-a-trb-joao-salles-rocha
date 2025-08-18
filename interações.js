import { tocarSom, pararSom } from "./audio.js";
let ferramenta = "preparar";
let semente = "cenoura";

//Interações com o solo
function limpaAtivosFerramenta(){
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

function limpaAtivosSemente(){
    const sementeGeral = document.getElementById("plantar");
    const cenoura = document.getElementById("cenoura");
    const cebola = document.getElementById("cebola");
    const batata = document.getElementById("batata");
    const espinafre = document.getElementById("beterraba");
    const girassol = document.getElementById("girassol");
    cenoura.classList.remove('ativo');
    cebola.classList.remove('ativo');
    batata.classList.remove('ativo');
    espinafre.classList.remove('ativo');
    girassol.classList.remove('ativo');

    sementeGeral.classList.remove('cenoura');
    sementeGeral.classList.remove('cebola');
    sementeGeral.classList.remove('batata');
    sementeGeral.classList.remove('beterraba');
    sementeGeral.classList.remove('girassol');
}


function trocarFerramenta(id){
    ferramenta = id;
}

function  trocarSemente(id){
    semente = id;
}

export function escolherFerramenta(id){
    const opFerramenta = document.getElementById(id);
    limpaAtivosFerramenta();
    opFerramenta.classList.add('ativo');
    trocarFerramenta(id);
    tocarSom("trocarItem");
}

export function escolherSemente(id){
    const opSemente = document.getElementById(id);
    const opSementeGeral = document.getElementById("plantar");
    limpaAtivosSemente();
    opSemente.classList.add('ativo');
    opSementeGeral.classList.add(id);
    trocarSemente(id);
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
                tocarSom("preparando");
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

       case ferramenta = "quebrar":
            if (canteiro.classList.contains('pedra_1') || canteiro.classList.contains('pedra_2')){
                canteiro.classList.remove('pedra_1');
                canteiro.classList.remove('pedra_2');
                canteiro.classList.add('vazio');
                tocarSom("quebrando");
                console.log("Pedra quebrada.");
            }else
                console.log("Nada pode ser feito.");
            break;

       case ferramenta = "podar":
            if (canteiro.classList.contains('erva')){
                canteiro.classList.remove('erva');
                canteiro.classList.add('vazio');
                tocarSom("cortando");
                console.log("Erva podada.");
            }else
                console.log("Nada pode ser feito.");
            break;

    }
}

//Interações extras
export function passarTempo(){

}