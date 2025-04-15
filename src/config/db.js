//Importando a biblioteca mongoose
const mongoose = require('mongoose');

//Criando a conexão com o banco de dados

const uri = 'mongodb+srv://conection:millerinho@connection.mwooqzb.mongodb.net/experiencias?retryWrites=true&w=majority&appName=Connection';


const connectDB = async () => {

    try{

        await mongoose.connect('mongodb://localhost:27017/experiencias');
        console.log('MongoDB connectado com successo!');

    }catch(error){
        console.error('Erro ao conectar ao MongoDB', error);
    }
}

module.exports = connectDB;

