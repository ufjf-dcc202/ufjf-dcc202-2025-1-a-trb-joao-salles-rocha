import { tocarSom, pararSom } from "./audio.js";
let ferramenta = "preparar";
let semente = "cenoura";
let dinheiro = 10;

//Interações com o solo
function limpaAtivosFerramenta(){
    const enxada = document.getElementById("preparar");
    const regador = document.getElementById("regar");
    const tesoura = document.getElementById("podar");
    const picareta = document.getElementById("quebrar");
    const semente = document.getElementById("plantar");
    const mão = document.getElementById("colher");
    enxada.classList.remove('ativo');
    regador.classList.remove('ativo');
    tesoura.classList.remove('ativo');
    picareta.classList.remove('ativo');
    semente.classList.remove('ativo');
    mão.classList.remove('ativo');
}

function limpaAtivosSemente(){
    const sementeGeral = document.getElementById("plantar");
    const cenoura = document.getElementById("cenoura");
    const cebola = document.getElementById("cebola");
    const batata = document.getElementById("batata");
    cenoura.classList.remove('ativo');
    cebola.classList.remove('ativo');
    batata.classList.remove('ativo');

    sementeGeral.classList.remove('cenoura');
    sementeGeral.classList.remove('cebola');
    sementeGeral.classList.remove('batata');
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
            }else if(canteiro.classList.contains('plantado')){
                canteiro.classList.remove('plantado');
                canteiro.classList.add('plantadoRegado');
                console.log("Canteiro regado.");
            }
            //Cenoura
            if(canteiro.classList.contains('cenoura_1a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cenoura_1b');
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('cenoura_2a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cenoura_2b');
                console.log("Canteiro regado.");
            }

            //Batata
            if(canteiro.classList.contains('batata_1a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('batata_1b');
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('batata_2a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('batata_2b');
                console.log("Canteiro regado.");
            }

            //Cebola
            if(canteiro.classList.contains('cebola_1a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cebola_1b');
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('cebola_2a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cebola_2b');
                console.log("Canteiro regado.");
            }
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

        case ferramenta = "plantar":
            if (canteiro.classList.contains('preparado')){
                canteiro.classList.remove('preparado');
                canteiro.classList.add('plantado');
                canteiro.classList.add('plantado_'+semente);
                tocarSom("plantando");
                console.log("Semente plantada.");
            }else if (canteiro.classList.contains('regado')){
                canteiro.classList.remove('regado');
                canteiro.classList.add('plantadoRegado');
                canteiro.classList.add('plantado_'+semente);
                tocarSom("plantando");
                console.log("Semente plantada.");
            }else
                console.log("Nada pode ser feito.");
            break;

        case ferramenta = "mão":
            if (canteiro.classList.contains('cenoura_3')){
                dinheiro+=20;
                canteiro.removeAttribute('class');
                canteiro.classList.add('vazio');
                tocarSom("plantando");
                console.log("Cenoura coletada.");
                console.log(dinheiro);
            }else if (canteiro.classList.contains('batata_3')){
                dinheiro+=40;
                canteiro.removeAttribute('class');
                canteiro.classList.add('vazio');
                tocarSom("plantando");
                console.log("Batata coletada.");
                console.log(dinheiro);
            }else if (canteiro.classList.contains('cebola_3')){
                dinheiro+=60;
                canteiro.removeAttribute('class');
                canteiro.classList.add('vazio');
                tocarSom("plantando");
                console.log("Cebola coletada.");
                console.log(dinheiro);
            }
            break;
    }
}

//Interações extras
export function passarTempo(){
    tocarSom("trocarItem");
    for (let i = 0; i < 144; i++){
        let canteiro = document.getElementById("canteiro_"+i);
        
        //Semente seca
        if (canteiro.classList.contains('seco')){
            canteiro.classList.remove('seco');
            canteiro.classList.add('vazio');
        }

        //Secar chão
        if (canteiro.classList.contains('regado')){
            canteiro.classList.remove('regado');
            canteiro.classList.add('vazio');
        }

        //Nascer erva
        if (canteiro.classList.contains('vazio')){

            let i = Math.floor(Math.random() * 100);
            if (i>=95){
                canteiro.classList.remove('vazio');
                canteiro.classList.add('erva');
            }
        }
        //Semente cenoura
        if (canteiro.classList.contains('plantado_cenoura') && canteiro.classList.contains('plantadoRegado')){
            canteiro.classList.remove('plantado_cenoura');
            canteiro.classList.remove('plantadoRegado');
            canteiro.classList.add('cenoura_1a');   
        }else if (canteiro.classList.contains('plantado_cenoura') && canteiro.classList.contains('plantado')){
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');   
        }else if (canteiro.classList.contains('cenoura_1b')){
            canteiro.classList.remove('cenoura_1b');
            canteiro.classList.add('cenoura_2a');   
        }else if (canteiro.classList.contains('cenoura_1a')){
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');   
        }else if (canteiro.classList.contains('cenoura_2b')){
            canteiro.removeAttribute('class');
            canteiro.classList.add('cenoura_3');   
        }else if (canteiro.classList.contains('cenoura_2a')){
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');   
        }

        //Semente batata
        if (canteiro.classList.contains('plantado_batata') && canteiro.classList.contains('plantadoRegado')){
            canteiro.classList.remove('plantado_batata');
            canteiro.classList.remove('plantadoRegado');
            canteiro.classList.add('batata_1a');   
        }else if (canteiro.classList.contains('plantado_batata') && canteiro.classList.contains('plantado')){
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');   
        }else if (canteiro.classList.contains('batata_1b')){
            canteiro.classList.remove('batata_1b');
            canteiro.classList.add('batata_2a');   
        }else if (canteiro.classList.contains('batata_1a')){
            canteiro.classList.remove('batata_1a');
            canteiro.classList.add('seco');   
        }else if (canteiro.classList.contains('batata_2b')){
            canteiro.classList.remove('batata_2b');
            canteiro.classList.add('batata_3');   
        }else if (canteiro.classList.contains('batata_2a')){
            canteiro.classList.remove('batata_2a');
            canteiro.classList.add('seco');   
        }

        //Semente cebola
        if (canteiro.classList.contains('plantado_cebola') && canteiro.classList.contains('plantadoRegado')){
            canteiro.classList.remove('plantado_cebola');
            canteiro.classList.remove('plantadoRegado');
            canteiro.classList.add('cebola_1a');   
        }else if (canteiro.classList.contains('plantado_cebola') && canteiro.classList.contains('plantado')){
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');   
        }else if (canteiro.classList.contains('cebola_1b')){
            canteiro.classList.remove('cebola_1b');
            canteiro.classList.add('cebola_2a');   
        }else if (canteiro.classList.contains('cebola_1a')){
            canteiro.classList.remove('cebola_1a');
            canteiro.classList.add('seco');   
        }else if (canteiro.classList.contains('cebola_2b')){
            canteiro.classList.remove('cebola_2b');
            canteiro.classList.add('cebola_3');   
        }else if (canteiro.classList.contains('cebola_2a')){
            canteiro.classList.remove('cebola_2a');
            canteiro.classList.add('seco');   
        }

    }
}

//Atalhos
document.addEventListener("keydown", executarAtalhos);

function executarAtalhos(){
    if (event.key === 'w') { 
        console.log('Semente anterior');
        switch(semente){
            case semente = "cenoura":
               escolherSemente("batata");
                break;
                
            case semente = "cebola":
                escolherSemente("cenoura");
                break;

            case semente = "batata":
                escolherSemente("cebola");
                break;
        }
    }

    if (event.key === 's') { 
        console.log('Próxima semente');
        switch(semente){
            case semente = "cenoura":
                 escolherSemente("cebola");
                break;
                
             case semente = "cebola":
             escolherSemente("batata");
                break;

            case semente = "batata":
                escolherSemente("cenoura");
                break;              
        }
    }

    if (event.key === 'a'){
        console.log('Ferramenta anterior');
        switch(ferramenta){
            case ferramenta = "preparar":
                escolherFerramenta("plantar");
                break;
                
            case ferramenta = "regar":
                escolherFerramenta("preparar");
                break;

            case ferramenta = "quebrar":
                escolherFerramenta("regar");
                break;

            case ferramenta = "podar":
                escolherFerramenta("quebrar");
                break;

            case ferramenta = "plantar":
                escolherFerramenta("podar");
                break;                
        }
    }

    if (event.key === 'd'){
        console.log('Próxima ferramenta');
        switch(ferramenta){
            case ferramenta = "preparar":
                escolherFerramenta("regar");
                break;
                
            case ferramenta = "regar":
                escolherFerramenta("quebrar");
                break;

            case ferramenta = "quebrar":
                escolherFerramenta("podar");
                break;

            case ferramenta = "podar":
               escolherFerramenta("plantar");
                break;

            case ferramenta = "plantar":
                escolherFerramenta("preparar");
                break;                
        }
    }
}