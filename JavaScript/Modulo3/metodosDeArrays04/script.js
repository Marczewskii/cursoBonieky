// let lista = [45, 4, 9, 16, 25];
let lista = [
    {id:1, nome:'Joao Vitor', sobrenome:'Marczewski Andrade'},
    {id:2, nome:'Bonieky', sobrenome:'Lacerda'},
    {id:3, nome:'Jessica', sobrenome:'de Fatima'}
];

let lista2 = [];

// lista2 = lista.find(function(item){
//     if(item == 16) {
//         return (item == 16) ? true : false;
//     }
// });

// lista2 = lista.findIndex(function(item){
//     return (item == 16) ? true : false; 
// });

let pessoa = lista.find(function(item){
    return(item.sobrenome == 'Marczewski Andrade') ? true : false; 
});

let res = pessoa;

console.log(res);