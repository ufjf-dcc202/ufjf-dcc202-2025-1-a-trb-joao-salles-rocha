import { usarFerramenta } from "./interações.js";

const grid = document.querySelector('.jardim');

export function criarJardim(){
    for (let i = 0; i < 144; i++) {
        let j = Math.floor(Math.random() * 30);
        const cell = document.createElement('div');
        cell.id = "canteiro_" + i;
        cell.addEventListener("click", () => usarFerramenta(i));
        if (j < 22) {
            cell.className = 'vazio';
        } else if (j < 26) {
            cell.className = 'erva';
        } else if (j < 28) {
            cell.className = 'pedra_1';
        } else {
            cell.className = 'pedra_2';
        }
        grid.appendChild(cell);
    }
}