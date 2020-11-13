//   function adicionar(...numeros) {
//       console.log(numeros);
//   }

//   adicionar(5, 6, 7, 8, 9, 10);

// ----------------------

// function adicionar(...nomes){
//     console.log(nomes);
// }

// adicionar('João Vitor', 'Jessica', 'Walter', 'Dulce', 'Ana Paula', 'Luis Paulo');


// ------------------------



function adicionar(nomes, ...novosNomes) {

    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
    
}

let nomes =['João', 'Jessica'];

let outros = adicionar(nomes, 'Walter', 'Dulce');

console.log(outros);