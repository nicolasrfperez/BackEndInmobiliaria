var express = require('express');
const propiedadesController = require('../controllers/propiedadesController');
var router = express.Router();

var express = require('../controllers/propiedadesController');

/* GET users listing. */
router.get('/listarPropiedades',propiedadesController.getAll);
router.get('/listarOnePropiedad/:id', propiedadesController.getById );

router.post('/createPropiedad', propiedadesController.create);
 // res.send('post users');
router.put('/actualizarPropiedad/:id', propiedadesController.update );
router.delete('/borrarPropiedad/:id', propiedadesController.delete);

module.exports = router;