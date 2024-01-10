const ProdutoModel = require('../models/Produto');

const atualizarEstoque = async (req, res) => {
    try {
        const { nome, quantidade } = req.body;
        const novoProduto = new ProdutoModel(nome, quantidade);

        if (typeof nome !== 'string') {
            return res.status(400).json({ message: 'Nome do produto inválido' });
        }

        if (!quantidade || isNaN(quantidade) || quantidade < 0) {
            return res.status(400).json({ message: 'Quantidade inválida' });
        }

        res.status(200).json({ message: 'Estoque atualizado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar estoque' });
    }
};

module.exports = { atualizarEstoque };