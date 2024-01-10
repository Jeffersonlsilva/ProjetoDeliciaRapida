const ClienteModel = require('../models/Cliente');

const cadastrarCliente = async (req, res) => {
    try {
        const { nome, enderecoEntrega, informacoesContato } = req.body;
        const novoCliente = new ClienteModel(nome, enderecoEntrega, informacoesContato);

        if (typeof nome !== 'string') {
            return res.status(400).json({ message: 'Nome do cliente inválido' });
        }

        if (enderecoEntrega && typeof enderecoEntrega !== 'string') {
            return res.status(400).json({ message: 'Endereço de entrega inválido' });
        }

        if (informacoesContato && typeof informacoesContato !== 'string') {
            return res.status(400).json({ message: 'Informações de contato inválidas' });
        }
        
        res.status(200).json({ message: 'Cliente cadastrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar cliente' });
    }
};

module.exports = { cadastrarCliente };