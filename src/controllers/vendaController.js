const VendaModel = require('../models/Venda');


const registrarVenda = async (req, res) => {
    try {
        const { quantidade, precoTotal } = req.body;
        const novaVenda = new VendaModel(quantidade, precoTotal);
        
        if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
            return res.status(400).json({ message: 'Quantidade inválida' });
        }

        if (!precoTotal || isNaN(precoTotal) || precoTotal <= 0) {
            return res.status(400).json({ message: 'Preço total inválido' });
        }


        res.status(200).json({ message: 'Venda registrada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao registrar venda' });
    }
};

module.exports = { registrarVenda };