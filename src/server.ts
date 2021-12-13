import express from 'express' ;

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do Back-End
// POST: Criar uma nova informação no Back-End
// PUT: Atualizar uma informação existente no Back-End
// DELETE: Remover uma informação do Back-End

//POST http://localhost:3333/users = Criar um usuário
//GET http://localhost:3333/users = Listar usuários
//GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

app.get('/users', (request, response) => {
    console.log ('listagem de usuários');
   

    return response.json([

    
        'Diego',
        'Claitom',
        'Robson',
        'Daniel',
        'Zion'


    ]);
});

app.post('/users', (request, response) => {
    const user= {
        name: 'Diego',
        email: 'diego@rocketseat.com'


    }
    return response.json(user);
})

app.listen(3333);


