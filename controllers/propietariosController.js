const propietariosModel = require('../models/propietariosModel')

module.exports = {
    getAll: function(req, res, next) {
        res.json('get propietarios');
    },
    getOne:  function(req, res, next) {
        res.json('respond with a resource PROPI ');
    },
    create: async function (req, res, next) {
        console.log(req.body);
        const propietario = await new propietariosModel({
            nombre:req.body.nombre,
            apellido :req.body.apellido,
            tipo_doc : req.body.string,
            numero_documento : req.body.numeroDoc,
            email1: req.body.email1,
            email2:req.body.email2,
            telefono: req.body.telefono,
            telefono2: req.body.telefono2

        })
        propietario.save();
        res.json(propietario)
},
    modify:  function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put propi');
    }
}