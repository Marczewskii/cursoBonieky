// fetch('https://alunos.b7web.com.br/api/ping')
//     .then((r)=>r.json())
//     .then((json)=>{
//         console.log(json);
//     });


const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method: 'POST', 
    body: JSON.stringify({
        nome: 'Joao Andrade',
        idade: 26
    })
};

fetch(url, params)
    .then((r)=>r.json())
    .then((json)=>{
        console.log(json);
    })
