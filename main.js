//Imports
import { criarJardim } from "./criaJardim.js";
import { escolherFerramenta, passarTempo } from "./interações.js";
import { tocarSom, pararSom } from "./audio.js";

const btnPreparar = document.querySelector("#preparar");
const btnRegar = document.querySelector("#regar");
const btnCortar = document.querySelector("#podar");
const btnQuebrar = document.querySelector("#quebrar");
const btnPlantar = document.querySelector("#plantar");

const btnDormir = document.querySelector("#dormir");

criarJardim();

//Botões
btnPreparar.addEventListener("click", () => escolherFerramenta("preparar"));
btnPreparar.addEventListener("click", () => tocarSom("plantando"));  //teste
btnRegar.addEventListener("click", () => escolherFerramenta("regar"));
btnCortar.addEventListener("click", () => escolherFerramenta("podar"));
btnQuebrar.addEventListener("click", () => escolherFerramenta("quebrar"));
btnPlantar.addEventListener("click", () => escolherFerramenta("plantar")); 

btnDormir.addEventListener("click", passarTempo);