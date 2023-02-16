const express = require("express"); //importação do express
const rotaLivro = require("./rotas/livro");

const app = express();

//dessa forma a aplicação aceita receber json
app.use(express.json());

app.use('/livros', rotaLivro);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})