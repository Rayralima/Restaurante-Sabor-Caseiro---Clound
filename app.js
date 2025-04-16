const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Corrigido: pasta 'public'
app.use(express.static('public'));

// Corrigido: uso correto de sendFile com caminho para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});