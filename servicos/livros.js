const fs = require("fs");

const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("./livros.json"));
};

const getLivroId = (id) => {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id === id);
    return livroFiltrado;
}

module.exports = {
    getTodosLivros,
    getLivroId
}