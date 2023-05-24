const { Router } = require("express");

const {
    getFavoritos,
    postLivroFavorito,
    deletaLivroFavorito }
    = require('../controladores/favorito.js');

const router = Router();

router.get('/', getFavoritos);

router.post('/:id', postLivroFavorito);

router.delete('/:id', deletaLivroFavorito);

module.exports = router;