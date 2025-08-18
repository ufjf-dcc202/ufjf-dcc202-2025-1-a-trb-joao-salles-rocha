//Imports
import { criarJardim } from "./criaJardim.js";
import { escolherFerramenta, passarTempo } from "./interações.js";


const btnPreparar = document.querySelector("#preparar");
const btnRegar = document.querySelector("#regar");
const btnQuebrar = document.querySelector("#quebrar");
const btnCortar = document.querySelector("#podar");
const btnPlantar = document.querySelector("#plantar");

const btnDormir = document.querySelector("#dormir");

criarJardim();

//Botões
btnPreparar.addEventListener("click", () => escolherFerramenta("preparar"));
btnRegar.addEventListener("click", () => escolherFerramenta("regar"));
btnQuebrar.addEventListener("click", () => escolherFerramenta("quebrar"));
btnCortar.addEventListener("click", () => escolherFerramenta("podar"));
btnPlantar.addEventListener("click", () => escolherFerramenta("plantar"));

btnDormir.addEventListener("click", passarTempo);