const propiedadesModel = require('../models/propiedadesModel')

module.exports = {
    getAll: async function(req, res, next) {
        res.json('get propiedades');
        const propiedad = await  propiedadesModel.find({
            
        })
    },
    getOne: async  function(req, res, next){
        const propiedad = await propiedadesModel.findById(req.params.id);
        res.json(propiedad);
    },
    create: async function (req, res, next) {
        console.log(req.body);
        const propiedad = await new propiedadesModel({
            duenio:req.body.duenio,
            direccion : req.body.direccion,
            metrosCuad: req.body.metrosCuad,
            cantAmbientes: req.body.ambientes,
            precio:req.body.precio
        })
        propiedad.save();
        res.json(propiedad)
},

    modify: async  function(req, res, next) {

        const propiedad = await propiedadesModel.update({_id : req.params.id},req.body, {multi:false})
        console.log(`este es el id de put ${req.params.id}`)
        res.json(propiedad);
    },
    delete: async  function(req, res, next) {
        const data = await propiedadesModel.deleteOne({_id : req.params.id})
        console.log(`este es el id de delete ${req.params.id}`)
        res.send('delete propi');
    }
}