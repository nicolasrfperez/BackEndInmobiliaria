var express = require('express');
const adminsController = require('../controllers/adminsController');
var router = express.Router();



//CREAR LAS RUTAS CORRESPONDIENTES A ADMINS

/* GET users listing. */
router.get('/consultarAdmins',adminsController.getAll);
router.get('/listarAdmins/:id',adminsController.getOne);
router.post('/createAdmins',adminsController.create);
router.put('/updateAdmins/:id', adminsController.modify);


module.exports = router;