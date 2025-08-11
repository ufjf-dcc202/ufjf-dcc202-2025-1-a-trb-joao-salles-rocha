const grid = document.querySelector('.jardim');

export function criarJardim(){
    for (let i = 0; i < 12 * 12; i++) {
        let j = Math.floor(Math.random() * 30)
        if (j<22){
            const cell = document.createElement('div');
            cell.className = 'vazio';
            cell.id = "canteiro_"+i;
            grid.appendChild(cell);
        }else{
            if (j<26){
                const cell = document.createElement('div');
                cell.className = 'erva';
                cell.id = "canteiro_"+i;
                grid.appendChild(cell);
            }else{
                if (j<30){
                    const cell = document.createElement('div');
                    cell.className = 'pedra';
                    cell.id = "canteiro_"+i;
                    grid.appendChild(cell);
                }
            }
        }
    }
}