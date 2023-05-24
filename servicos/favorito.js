const fs = require("fs");

const getLivrosFavoritos = () => {
    return JSON.parse(fs.readFileSync("./favoritos.json"));
};

const deletaLivroFavoritoporId = (id) => {
    const livros = JSON.parse(fs.readFileSync("./favoritos.json"));

    const livrosFiltrados = livros.filter(livro => livro.id !== id);

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));

}

const insereLivroFavorito = (id) => {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("./favoritos.json"));

    const livroInserido = livros.find(livro => livro.id === id);
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync("./favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos));
}

module.exports = {
    getLivrosFavoritos,
    deletaLivroFavoritoporId,
    insereLivroFavorito,
}