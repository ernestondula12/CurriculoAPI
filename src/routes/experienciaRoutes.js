const express = require('express');
const router = express.Router();
const controller = require('../controllers/experienciaController');


router.get('/', controller.listaExperiencias);
router.post('/', controller.adicionarExperiencia);


module.exports = router;