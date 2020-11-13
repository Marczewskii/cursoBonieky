// let telefone = '98015'; 
// console.log(telefone.padEnd(9, '*'));
// console.log(telefone.padStart(9, '*'));


let cartao = '1234 1234 1234 1234';
// console.log('Este é o seu cartão ? ' + cartao);
let lastDigits = cartao.slice(-4);
let cartaoMascarado = lastDigits.padStart(16, '*');
console.log('Este é o seu cartão ? ' + cartaoMascarado);

