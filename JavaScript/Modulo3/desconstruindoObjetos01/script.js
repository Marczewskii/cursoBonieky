 let pessoa = {
     nome: 'João', 
     sobrenome: 'Andrade',
    //  idade: 26,
     social: {
         facebook: 'joao_vitor_anrade',
         instagram: 'jvitorrrr94'
     },
     nomeCompleto: function() {
         return `${this.nome} ${this.sobrenome}`;
     }
 }

//  console.log(pessoa.nomeCompleto());

/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let instagram = pessoa.social.instagram;
*/
let {nome, sobrenome, idade = 0} = pessoa;

console.log(nome, sobrenome, idade);