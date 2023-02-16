const fs = require("fs");

const getLivros = (req, res) => {
    try {
        const livros = JSON.parse(fs.readFileSync("./livros.json"));
        res.send("Olá mundo teste 2!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = {
    getLivros
}