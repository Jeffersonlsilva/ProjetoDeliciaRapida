class Venda {
    constructor(quantidade, precoTotal) {
        this.quantidade = quantidade;
        this.precoTotal = precoTotal;
        this.data = new Date();
    }
}

module.exports = Venda;