var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

var express = require('../controllers/usersController');


/* GET users listing. */
router.get('/consultarUsuarios', usersController.getAll);
router.get('/listarOneUser/:id', usersController.getOne);
router.post('/createUser', usersController.create);
router.post('/login', usersController.validate)
router.put('/updateUsuario:id', usersController.modify);


module.exports = router;
