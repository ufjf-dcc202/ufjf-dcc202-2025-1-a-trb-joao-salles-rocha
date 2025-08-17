//Imports
import { criarJardim } from "./criaJardim.js";
import { escolherEnxada, escolherTesoura, escolherPicareta, escolherSemente } from "./interações.js";

const btnPreparar = document.querySelector("#preparar");
const btnCortar = document.querySelector("#podar");
const btnQuebrar = document.querySelector("#quebrar");
const btnPlantar = document.querySelector("#plantar");

criarJardim();

//Botões
btnPreparar.addEventListener("click", escolherEnxada);
btnCortar.addEventListener("click", escolherTesoura);
btnQuebrar.addEventListener("click", escolherPicareta);
btnPlantar.addEventListener("click", escolherSemente); 