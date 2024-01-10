const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

router.post('/registrar', vendaController.registrarVenda);

module.exports = router;