let nome = 'João Vitor Andrade';

let resultado1 = nome.length;

// Se não tiver o nome no indexOf o resultado é -1
let resultado2 = nome.indexOf("Andrade");

let resultado3 = '';

if (nome.indexOf("Andrade") >= 0 ) {
    resultado3 = "Achou";
} else {
    resultado3 = "Não achou";
}

console.log(resultado3);