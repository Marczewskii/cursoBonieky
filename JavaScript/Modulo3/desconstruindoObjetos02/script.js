let pessoa = {
    nome: 'João', 
    sobrenome: 'Andrade',
    idade: 26,
    social: {
        facebook: 'joao_vitor_anrade',
        instagram: {
            url: '@jvitorrrr', 
            seguidores: 1000,
        }
    },
    // nomeCompleto: function() {
    //     return `${this.nome} ${this.sobrenome}`;
    // }
}

// let {facebook, instagram } = pessoa.social;
// console.log(facebook, instagram);


// let {nome, idade, social: {instagram}} = pessoa;
// let {nome, idade, social: {instagram:{url:instagram, seguidores}}, social:{facebook:face}} = pessoa;
// let {nome, idade, social: {instagram:{url:instagram, seguidores}, facebook:face}} = pessoa;

// console.log(nome, idade, instagram, seguidores, face);


// function pegarNomeCompleto(obj) {
//     return obj.nome + ' ' + obj.sobrenome;
// }

// console.log(pegarNomeCompleto(pessoa));


/*
function pegarNomeCompleto(obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;

    return `${nome} ${sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa));
*/

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url:instagram}, facebook:face}}){
    return `${nome} ${sobrenome} ${instagram} ${face}`;
}

console.log(pegarNomeCompleto(pessoa));