//Imports
import { criarJardim } from "./criaJardim.js";
import { escolherCorte, escolherQuebra, escolherSemente } from "./interações.js";

const btnCortar = document.querySelector("#cortar");
const btnQuebrar = document.querySelector("#quebrar");
const btnPlantar = document.querySelector("#plantar");

criarJardim();

//Botões
btnCortar.addEventListener("click", escolherCorte);
btnQuebrar.addEventListener("click", escolherQuebra);
btnPlantar.addEventListener("click", escolherSemente); 