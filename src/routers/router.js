const vendaRoutes = require('./routes/vendaRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

app.use('/vendas', vendaRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/estoque', estoqueRoutes);
app.use('/clientes', clienteRoutes);
