const { getTodosLivros, getLivroId } = require("../servicos/livros");

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

module.exports = {
    getLivros,
    getLivro
}