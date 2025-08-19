import { tocarSom, pararSom } from "./audio.js";
let ferramenta = "preparar";
let semente = "cenoura";
let dinheiro = 10;
let dia = 1;

let qntCenoura = 3;
let qntBatata = 3;
let qntCebola = 3;
let plantou = 0;

let contadores = new Array(144).fill(0);

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

function trocarSemente(id){
    semente = id;
}

function checarCor(){
    if (qntCenoura === 0)
        document.getElementById("qntCenoura").style.color = 'red';
    else
        document.getElementById("qntCenoura").style.color = 'black';

    if (qntBatata === 0)
        document.getElementById("qntBatata").style.color = 'red';
    else
        document.getElementById("qntBatata").style.color = 'black';

    if (qntCebola === 0)
        document.getElementById("qntCebola").style.color = 'red';
    else
        document.getElementById("qntCebola").style.color = 'black';
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
                tocarSom("regando");
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('plantado')){
                canteiro.classList.remove('plantado');
                canteiro.classList.add('plantadoRegado');
                tocarSom("regando");
                console.log("Canteiro regado.");
            }

            //Cenoura
            if(canteiro.classList.contains('cenoura_1a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cenoura_1b');
                tocarSom("regando");
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('cenoura_2a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cenoura_2b');
                tocarSom("regando");
                console.log("Canteiro regado.");
            }

            //Batata
            if(canteiro.classList.contains('batata_1a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('batata_1b');
                tocarSom("regando");
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('batata_2a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('batata_2b');
                tocarSom("regando");
                console.log("Canteiro regado.");
            }

            //Cebola
            if(canteiro.classList.contains('cebola_1a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cebola_1b');
                tocarSom("regando");
                console.log("Canteiro regado.");
            }else if(canteiro.classList.contains('cebola_2a')){
                canteiro.removeAttribute('class');
                canteiro.classList.add('cebola_2b');
                tocarSom("regando");
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
            if (((canteiro.classList.contains('preparado') || canteiro.classList.contains('regado')) && semente === "cenoura" && qntCenoura === 0 )|| 
                ((canteiro.classList.contains('preparado') || canteiro.classList.contains('regado')) && semente === "batata" && qntBatata === 0 )||
                ((canteiro.classList.contains('preparado') || canteiro.classList.contains('regado')) && semente === "cebola" && qntCebola === 0 )){
                   console.log("Sem mais sementes. :(");
                   tocarSom("erro");
            }else if (canteiro.classList.contains('preparado')){
                canteiro.classList.remove('preparado');
                canteiro.classList.add('plantado');
                canteiro.classList.add('plantado_'+semente);
                tocarSom("plantando");
                console.log("Semente plantada.");
                plantou = 1;
            }else if (canteiro.classList.contains('regado')){
                canteiro.classList.remove('regado');
                canteiro.classList.add('plantadoRegado');
                canteiro.classList.add('plantado_'+semente);
                tocarSom("plantando");
                console.log("Semente plantada.");
                plantou = 1;
            }else
                console.log("Nada pode ser feito.");

            //Limitador de sementes
            if (plantou === 1 && semente === "cenoura" && qntCenoura > 0){
                qntCenoura--;
                plantou = 0;
                console.log("Cenoura: "+qntCenoura);
                document.getElementById("qntCenoura").innerHTML = qntCenoura;
                checarCor();
            }
            if (plantou === 1 && semente === "batata" && qntBatata > 0){
                qntBatata--;
                plantou = 0;
                console.log("Batata: "+qntBatata);
                document.getElementById("qntBatata").innerHTML = qntBatata;
                checarCor();
            }
            if (plantou === 1 && semente === "cebola" && qntCebola > 0){
                qntCebola--;
                plantou = 0;
                console.log("Cebola: "+qntCebola);
                document.getElementById("qntCebola").innerHTML = qntCebola;
                checarCor();
            }
            break;

        case ferramenta = "mão":
            if (canteiro.classList.contains('cenoura_3')){
                dinheiro+=20;
                canteiro.removeAttribute('class');
                canteiro.classList.add('vazio');
                tocarSom("plantando");
                console.log("Cenoura coletada.");
                document.getElementById("qntDinheiro").innerHTML = "DINHEIRO: "+dinheiro;
                console.log(dinheiro);
            }else if (canteiro.classList.contains('batata_3')){
                dinheiro+=40;
                canteiro.removeAttribute('class');
                canteiro.classList.add('vazio');
                tocarSom("plantando");
                console.log("Batata coletada.");
                document.getElementById("qntDinheiro").innerHTML = "DINHEIRO: "+dinheiro;
                console.log(dinheiro);
            }else if (canteiro.classList.contains('cebola_3')){
                dinheiro+=60;
                canteiro.removeAttribute('class');
                canteiro.classList.add('vazio');
                tocarSom("plantando");
                console.log("Cebola coletada.");
                document.getElementById("qntDinheiro").innerHTML = "DINHEIRO: "+dinheiro;
                console.log(dinheiro);
            }
            break;
    }
}

//Interações extras
export function passarTempo(){
    tocarSom("interagindo");
    dia++;
    document.getElementById("qntDia").innerHTML = "DIA: "+dia;
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

        //Despreparar chão
        if (canteiro.classList.contains('preparado')){
            canteiro.classList.remove('preparado');
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
        if (canteiro.classList.contains('plantado_cenoura') && canteiro.classList.contains('plantado')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
        }

        if (canteiro.classList.contains('plantado_cenoura') && canteiro.classList.contains('plantadoRegado')){ // +1 ->
            canteiro.removeAttribute('class');
            canteiro.classList.add('cenoura_1a');
            contadores[i]++;
            console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
        }else if (canteiro.classList.contains('cenoura_1a')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
        }
        if (contadores[i] < 1){
            if (canteiro.classList.contains('cenoura_1b')){ // 1 ->
                canteiro.removeAttribute('class');
                canteiro.classList.add('cenoura_1a');                
                contadores[i]++;
                console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
            }
        }

        if (contadores[i] === 1 && canteiro.classList.contains('cenoura_1b')){ // -> 2
            canteiro.removeAttribute('class');
            canteiro.classList.add('cenoura_2a');
            contadores[i]++;
            console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
        }else if (canteiro.classList.contains('cenoura_2a')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
        }
        if (contadores[i] < 3){
            if (canteiro.classList.contains('cenoura_2b')){ // 3 ->
                canteiro.removeAttribute('class');
                canteiro.classList.add('cenoura_2a');                
                contadores[i]++;
                console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
            }
        }

        if (contadores[i] === 3 && canteiro.classList.contains('cenoura_2b')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('cenoura_3');
            contadores[i] = 0;
            console.log("Estado Cenoura do canteiro "+i+": "+contadores[i]);
        }

        //Semente batata
        if (canteiro.classList.contains('plantado_batata') && canteiro.classList.contains('plantado')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
        }

        if (canteiro.classList.contains('plantado_batata') && canteiro.classList.contains('plantadoRegado')){ // +1 ->
            canteiro.removeAttribute('class');
            canteiro.classList.add('batata_1a');
            contadores[i]++;
            console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
        }else if (canteiro.classList.contains('batata_1a')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
        }
        if (contadores[i] < 2){
            if (canteiro.classList.contains('batata_1b')){ // 2 ->
                canteiro.removeAttribute('class');
                canteiro.classList.add('batata_1a');                
                contadores[i]++;
                console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
            }
        }

        if (contadores[i] === 2 && canteiro.classList.contains('batata_1b')){ // -> 3
            canteiro.removeAttribute('class');
            canteiro.classList.add('batata_2a');
            contadores[i]++;
            console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
        }else if (canteiro.classList.contains('batata_2a')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
        }
        if (contadores[i] < 5){
            if (canteiro.classList.contains('batata_2b')){ // 5 ->
                canteiro.removeAttribute('class');
                canteiro.classList.add('batata_2a');                
                contadores[i]++;
                console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
            }
        }

        if (contadores[i] === 5 && canteiro.classList.contains('batata_2b')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('batata_3');
            contadores[i] = 0;
            console.log("Estado Batata do canteiro "+i+": "+contadores[i]);
        }

        //Semente cebola
        if (canteiro.classList.contains('plantado_cebola') && canteiro.classList.contains('plantado')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
        }

        if (canteiro.classList.contains('plantado_cebola') && canteiro.classList.contains('plantadoRegado')){ // +1 ->
            canteiro.removeAttribute('class');
            canteiro.classList.add('cebola_1a');
            contadores[i]++;
            console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
        }else if (canteiro.classList.contains('cebola_1a')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
        }
        if (contadores[i] < 3){
            if (canteiro.classList.contains('cebola_1b')){ // 3 ->
                canteiro.removeAttribute('class');
                canteiro.classList.add('cebola_1a');                
                contadores[i]++;
                console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
            }
        }

        if (contadores[i] === 3 && canteiro.classList.contains('cebola_1b')){ // -> 3
            canteiro.removeAttribute('class');
            canteiro.classList.add('cebola_2a');
            contadores[i]++;
            console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
        }else if (canteiro.classList.contains('cebola_2a')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('seco');
            contadores[i] = 0;
            console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
        }
        if (contadores[i] < 7){
            if (canteiro.classList.contains('cebola_2b')){ // 7 ->
                canteiro.removeAttribute('class');
                canteiro.classList.add('cebola_2a');                
                contadores[i]++;
                console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
            }
        }

        if (contadores[i] === 7 && canteiro.classList.contains('cebola_2b')){ // 0!
            canteiro.removeAttribute('class');
            canteiro.classList.add('cebola_3');
            contadores[i] = 0;
            console.log("Estado Cebola do canteiro "+i+": "+contadores[i]);
        }
    }
}

export function abrirLoja(){
    tocarSom("interagindo");
}

//Atalhos
document.addEventListener("keydown", executarAtalhos);

function executarAtalhos(){
    if (event.key === 'w') { 
        console.log('Semente anterior');
        switch(semente){
            case semente = "cenoura":
               escolherSemente("cebola");
                break;
                
            case semente = "batata":
                escolherSemente("cenoura");
                break;

            case semente = "cebola":
                escolherSemente("batata");
                break;
        }
    }

    if (event.key === 's') { 
        console.log('Próxima semente');
        switch(semente){
            case semente = "cenoura":
                 escolherSemente("batata");
                break;
                
             case semente = "batata":
             escolherSemente("cebola");
                break;

            case semente = "cebola":
                escolherSemente("cenoura");
                break;              
        }
    }

    if (event.key === 'a'){
        console.log('Ferramenta anterior');
        switch(ferramenta){
            case ferramenta = "preparar":
                escolherFerramenta("colher");
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

            case ferramenta = "colher":
                escolherFerramenta("plantar")
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
                escolherFerramenta("colher");
                break;   

            case ferramenta = "colher":
                escolherFerramenta("preparar")
                break;             
        }
    }

    //Para testes
    if (event.key === 'p'){
        dinheiro = 999999;
        document.getElementById("qntDinheiro").innerHTML = "DINHEIRO: "+dinheiro;
        qntCenoura = 99;
        document.getElementById("qntCenoura").innerHTML = qntCenoura;
        qntBatata = 99;
        document.getElementById("qntBatata").innerHTML = qntBatata;
        qntCebola = 99;
        document.getElementById("qntCebola").innerHTML = qntCebola;
    }
}