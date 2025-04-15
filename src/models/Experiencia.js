const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
    cargo: String,
    empresa: String,
    inicio: String,
    fim: String,
    descricao: String
})

module.exports = mongoose.model('Experiencia', experienciaSchema);