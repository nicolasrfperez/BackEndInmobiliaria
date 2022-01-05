var express = require('express');
var router = express.Router();

var propietariosController = require('../controllers/propietariosController');

/* GET users listing. */
router.get('/listarPropietarios', propietariosController.getAll);
router.get('/listarOneProp/:id', propietariosController.getOne);
router.post('/createPropietario', propietariosController.create );
router.put('/actualizaPropietario/:id',propietariosController.modify);


module.exports = router;
