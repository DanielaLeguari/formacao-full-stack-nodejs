const fs = require("fs");

const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("./livros.json"));
};

const getLivroId = (id) => {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id === id);
    return livroFiltrado;
}

const insereLivro = (livroNovo) => {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));

    const novaListaDeLivros = [...livros, livroNovo];
    fs.writeFileSync("./livros.json", JSON.stringify(novaListaDeLivros));
}

const editaLivro = (modificacoes) => {
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"));
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    editaLivro
}