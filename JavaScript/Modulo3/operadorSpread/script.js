// let numeros = [1, 2, 3, 4];

// let outros = [...numeros, 5, 6, 7, 8];

// console.log(outros);

// ---------------


// let info = {
//     nome: 'Joao',
//     sobrenome: 'Andrade',
//     idade: 26
// }

// let novaInfo = {
//     ...info,
//     pais: 'Brasil',
//     cidade: 'Belém',
//     estado: 'Pará' 
// }

// console.log(novaInfo);

// -----------------

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'asdkadaasd',
        data_cadastro: '00/24/21'
    };
    return novasInfo;
};


console.log(adicionarInfo({nome: 'João', sobrenome:'Andrade'}));

