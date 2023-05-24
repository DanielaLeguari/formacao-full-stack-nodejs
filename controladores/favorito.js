const { getLivrosFavoritos,
    deletaLivroFavoritoporId,
    insereLivroFavorito
} = require("../servicos/livros");

const getFavoritos = (req, res) => {
    try {
        const livros = getLivrosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const postLivroFavorito = (req, res) => {
    try {
        const id = req.params.id;

        insereLivroFavorito(id);
        res.status(201);
        res.send("Livro inserido com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletaLivroFavorito = (req, res) => {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const livro = deletaLivroFavoritoporId(id);
            if (livro && livro.length > 0) {
                excluirLivroPorId(id);
                res.send("Favorito deletado com sucesso!");
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
    getFavoritos,
    postLivroFavorito,
    deletaLivroFavorito,
}
