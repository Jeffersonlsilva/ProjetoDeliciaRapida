const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/cadastrar', clienteController.cadastrarCliente);

module.exports = router;