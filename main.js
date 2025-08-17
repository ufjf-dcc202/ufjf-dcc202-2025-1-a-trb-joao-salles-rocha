//Imports
import { criarJardim } from "./criaJardim.js";
import { escolherEnxada, escolherTesoura, escolherPicareta, escolherSemente, escolherRegador, passarTempo } from "./interações.js";

const btnPreparar = document.querySelector("#preparar");
const btnCortar = document.querySelector("#podar");
const btnQuebrar = document.querySelector("#quebrar");
const btnPlantar = document.querySelector("#plantar");
const btnRegar = document.querySelector("#regar");

const btnDormir = document.querySelector("#dormir");

criarJardim();

//Botões
btnPreparar.addEventListener("click", escolherEnxada);
btnCortar.addEventListener("click", escolherTesoura);
btnQuebrar.addEventListener("click", escolherPicareta);
btnPlantar.addEventListener("click", escolherSemente); 
btnRegar.addEventListener("click", escolherRegador);

btnDormir.addEventListener("click", passarTempo);
