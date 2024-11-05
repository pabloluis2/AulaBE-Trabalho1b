// Importa o módulo 'express', que é um framework para construir aplicações web e APIs em Node.js.
const express = require('express');

// Cria uma instância do aplicativo Express, permitindo que você configure e manipule rotas e responda a solicitações.
const app = express();

// Define uma rota para o endpoint raiz ('/'). 
// Quando uma solicitação GET é feita para '/', essa função é executada.
app.get('/', function(request, response) {
    // Retorna uma resposta no formato JSON com uma mensagem de boas-vindas.
    return response.json({
        message: 'Olá leitor! Bem vindo à livraria online!'
    });
});

// Define uma rota para o endpoint '/livros'.
// Quando uma solicitação GET é feita para '/livros', essa função é executada.
app.get('/livros', function(request, response) {
    // Retorna uma resposta JSON com uma lista de livros.
    return response.json([
        'Harry Potter',
        'Percy Jackson'
    ]);
});

// Define uma rota para criar um novo projeto.
// Quando uma solicitação POST é feita para '/livros', essa função é executada.
app.post('/livros', function(request, response) {
    // Retorna uma resposta JSON com uma lista de livros, incluindo o novo livro.
    return response.json([
        'Harry Potter',
        'Percy Jackson',
        'O Caçador de Pipas'
    ]);    
});

// Define uma rota para atualizar um livro específico.
// O ':id' é um parâmetro de rota, que será substituído pelo ID do projeto na URL.
app.put('/livros/:id', function(request, response) {
    // Retorna uma resposta JSON com a lista de projetos atualizada.
    return response.json([
        'Principe dos Espinhos',
        'Percy Jackson',
        'O Caçador de Pipas'
    ]);
});

// Define uma rota para deletar um livro específico.
// O ':id' permite especificar qual livro deletar pelo ID.
app.delete('/livros/:id', function(request, response) {
    // Retorna uma resposta JSON com a lista de livros após a exclusão de um deles.
    return response.json([
        'Percy Jackson',
        'O Caçador de Pipas'
    ]);
});

// Inicia o servidor na porta 3455 e exibe uma mensagem no console.
// O servidor ficará "ouvindo" solicitações HTTP nessa porta.
app.listen(3455, () => {
    console.log('Server started on port 3455!');
});