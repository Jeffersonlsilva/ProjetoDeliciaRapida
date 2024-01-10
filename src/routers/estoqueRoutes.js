const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.post('/atualizar', estoqueController.atualizarEstoque);

module.exports = router;