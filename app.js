const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('puplic'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + index.html);
}
)

app.listen(port, () =>{
    console.log("Servidor rodando")
})