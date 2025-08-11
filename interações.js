let corte = 0 ;
let quebra = 0;
let semente = 0;

function removerTodos(){
    corte = 0;
    quebra = 0;
    semente = 0;
}

export function escolherCorte(){
    removerTodos();
    corte = 1;
    div1.style.color = 'red';
}

export function escolherQuebra(){
    removerTodos();
    quebra = 1;
}

export function escolherSemente(){
    removerTodos();
    semente = 1;
}