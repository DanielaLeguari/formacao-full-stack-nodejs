const { getTodosLivros, getLivroId, insereLivro, editaLivro } = require("../servicos/livros");

const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getLivro = (req, res) => {
    try {
        const id = req.params.id;
        const livro = getLivroId(id);
        res.send(livro);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postLivro = (req, res) => {
    try {
        const livroNovo = req.body;
        insereLivro(livroNovo);
        res.status(201);
        res.send("Livro inserido com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const patchLivro = (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        editaLivro(body, id);
        res.send("Item modificado com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro
}