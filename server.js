// server.js

const express = require('express');
const app = express();
const path = require('path');

// Define rotas para cada produto
app.get('/carregador-iphone', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'CarregadorIphone.html'));
});

app.get('/carregador-universal', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'CarregadorUniversal.html'));
});

app.get('/fone-de-ouvido', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'FoneDeOuvido.html'));
});

app.get('/suporte', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'Suporte.html'));
});

// Define rota para o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
