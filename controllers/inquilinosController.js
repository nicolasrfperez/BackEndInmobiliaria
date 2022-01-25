const inqulinosModel = require('../models/inquilinosModel')

module.exports={
    getAll: function(req, res, next) {
        res.send('respond with a resource inqui');
    },
    getOne:function(req, res, next) {
        res.send('respond with a resource inqui');
    },
    create: async function (req, res, next) {
        console.log(req.body);
        const inquilino = await new inqulinosModel({
            inquilino:req.body.inquilino,
            direccion :req.body.direccion,
            duenio : req.body.duenio,
            precioAlq: req.body.precioAlq,
            estadoAlq: req.body.estadoAlq,
            estadoPagAlq:req.body.estadoPagAlq
        })
        inquilino.save();
        res.json(inquilino)
},
    modify: function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put inqui');
    },
    delete: function(req, res, next) {
        res.send('respond with a resource inqui');
    }
}