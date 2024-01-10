const PedidoModel = require('../models/Pedido');

const criarPedido = async (req, res) => {
    try {
        const { personalizacoes } = req.body;
        const novoPedido = new PedidoModel(personalizacoes);

        if (typeof personalizacoes !== 'string') {
            return res.status(400).json({ message: 'Personalizações inválidas' });
        }

        res.status(200).json({ message: 'Pedido criado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar pedido' });
    }
};

module.exports = { criarPedido };