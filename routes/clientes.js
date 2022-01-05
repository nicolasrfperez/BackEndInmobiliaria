var express = require('express');
var router = express.Router();
var clientesController = require('../controllers/clientesController');


//FALTAN VARIAS LAS RUTAS

/* GET users listing. */
router.get('/',clientesController.getAll);
router.get('/login', clientesController.getOne );
router.put('/',clientesController.modify);


module.exports = router;
