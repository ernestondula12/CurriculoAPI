const express = require('express');
const connectDB = require('./src/config/db');
const experienciasRoutes = require('./src/routes/experienciaRoutes')
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/experiencias', experienciasRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`O Servidor esta rodando na porta: ${PORT}`);
})