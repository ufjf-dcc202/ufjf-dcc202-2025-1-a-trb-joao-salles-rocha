//Imports
import { criarJardim } from "./criaJardim.js";
import { escolherFerramenta, escolherSemente, passarTempo } from "./interações.js";


const btnPreparar = document.querySelector("#preparar");
const btnRegar = document.querySelector("#regar");
const btnQuebrar = document.querySelector("#quebrar");
const btnCortar = document.querySelector("#podar");
const btnPlantar = document.querySelector("#plantar");

const btnCenoura = document.querySelector("#cenoura");
const btnCebola = document.querySelector("#cebola");
const btnBatata = document.querySelector("#batata");

const btnDormir = document.querySelector("#cama");

criarJardim();

//Botões
btnPreparar.addEventListener("click", () => escolherFerramenta("preparar"));
btnRegar.addEventListener("click", () => escolherFerramenta("regar"));
btnQuebrar.addEventListener("click", () => escolherFerramenta("quebrar"));
btnCortar.addEventListener("click", () => escolherFerramenta("podar"));
btnPlantar.addEventListener("click", () => escolherFerramenta("plantar"));

btnCenoura.addEventListener("click", () => escolherSemente("cenoura"));
btnCebola.addEventListener("click", () => escolherSemente("cebola"));
btnBatata.addEventListener("click", () => escolherSemente("batata"));

btnDormir.addEventListener("click", () => passarTempo());