//Importando a biblioteca mongoose
const mongoose = require('mongoose');

//Criando a conexão com o banco de dados

const connectDB = async () => {

    try{

        await mongoose.connect('mongodb://localhost:27017/experiencias');
        console.log('MongoDB connectado com successo!');

    }catch(error){
        console.error('Erro ao conectar ao MongoDB', error);
    }
}

module.exports = connectDB;

