const grid = document.querySelector('.jardim');

        for (let i = 0; i < 12 * 12; i++) {
            let j = Math.floor(Math.random() * 30)
            if (j<22){
                const cell = document.createElement('div');
                cell.className = 'vazio';
                grid.appendChild(cell);
            }else{
                if (j<26){
                    const cell = document.createElement('div');
                    cell.className = 'erva';
                    grid.appendChild(cell);
                }else{
                    if (j<30){
                        const cell = document.createElement('div');
                        cell.className = 'pedra';
                        grid.appendChild(cell);
                    }
                }
            }
        }