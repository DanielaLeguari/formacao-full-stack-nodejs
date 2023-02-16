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

const editaLivro = (modificacoes, id) => {
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"));
    const indiceMofificado = livrosAtuais.findIndex(livro => livro.id === id);
                                 //verifica as alterações de modo mais genérico       
    const conteudoMudado = {...livrosAtuais[indiceMofificado], ...modificacoes};
    livrosAtuais[indiceMofificado] = conteudoMudado;
    fs.writeFileSync("./livros.json", JSON.stringify(livrosAtuais));
}

const excluirLivroPorId = (id) => {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const livrosFiltrados = livros.filter(livro => livro.id !== id);
    fs.writeFileSync("./livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    editaLivro,
    excluirLivroPorId
}