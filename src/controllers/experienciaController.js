const Experiencia = require('../models/Experiencia');

exports.listaExperiencias = async (req, res) => {

    const experiencias = await Experiencia.find();
    res.json(experiencias);
};

exports.adicionarExperiencia = async (req, res) => {
    const nova = Experiencia(req.body);
    await nova.save();
    res.status(201).json(nova);
}