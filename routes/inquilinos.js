var express = require('express');
var router = express.Router();
var inquilinosController = require('../controllers/inquilinosController')

/* GET users listing. */
router.get('/listarInquilinos',inquilinosController.getAll);
router.get('/listarOneInq/:id', inquilinosController.getOne );
/*
router.post('/createUser', function(req, res, next) {
  res.send('post users');
});*/
router.put('/actualizaInquilino/:id', inquilinosController.modify );
router.delete('/borrarInquilino/:id', inquilinosController.delete);

module.exports = router;