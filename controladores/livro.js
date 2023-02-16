const { getTodosLivros, getLivroId, insereLivro, editaLivro, excluirLivroPorId } = require("../servicos/livros");

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
        if (id && Number(id)) {
            const livro = getLivroId(id);
            if (livro && livro.length > 0) {
                res.send(livro);
            }
        } else {
            res.status(422);
            res.send("Id inválido.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postLivro = (req, res) => {
    try {
        const livroNovo = req.body;
        if (req.body.titulo) {
            insereLivro(livroNovo);
            res.status(201);
            res.send("Livro inserido com sucesso!");
        } else {
            res.status(422);
            res.send("O campo nome é obrigatório");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const patchLivro = (req, res) => {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const body = req.body;
            editaLivro(body, id);
            res.send("Item modificado com sucesso!");
        } else {
            res.status(422);
            res.send("Id inválido.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteLivro = (req, res) => {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const livro = getLivroId(id);
            if (livro && livro.length > 0) {
                excluirLivroPorId(id);
                res.send("Item deletado com sucesso!");
            } else {
                res.status(422);
                res.send("Id inválido.");
            }
        } else {
            res.status(422);
            res.send("Id inválido.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}