const inquilinosModel = require('../models/inquilinosModel');
//const inqulinosModel = require('../models/inquilinosModel')

module.exports={

        getAll: async function(req, res, next) {
      
        const inquilinos = await  inquilinosModel.find({
            
        })
        res.json(inquilinos);
    },
    getOne: async  function(req, res, next){
        const inquilino = await inqulinosModel.findById(req.params.id);
        res.json(inquilino);
    },
    // getAll: function(req, res, next) {
    //     res.send('respond with a resource inqui');
    // },
    // getOne:function(req, res, next) {
    //     res.send('respond with a resource inqui');
    // },
    create: async function (req, res, next) {
        console.log(req.body);
        const inquilino = await new inqulinosModel({
            idInquilino:req.body.idInquilino,
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            tipoDoc : req.body.tipoDoc,
            numeroDoc : req.body.numeroDoc,
            email : req.body.email,
            email2 : req.body.email2,
            telefono : req.body.telefono,
            telefono2 : req.body.telefono2,
            tipoGarantia : req.body.tipoGarantia,
            garante : req.body.garante,
            //DNIFoto: File
        })
        inquilino.save();
        res.json(inquilino)
},
    // modify: function(req, res, next) {
    //     console.log(`este es el id de put ${req.params.id}`)
    //     res.send('put inqui');
    // },
    // delete: function(req, res, next) {
    //     res.send('respond with a resource inqui');
    // }
    modify: async function (req, res, next) {
        try{
            console.log(req.params.id, req.body);
            const inquilino = await inqulinosModel.updateOne({ _id: req.params.id }, req.body, { multi: false })
            res.status(200).json(inquilino);
        }catch(e){
            next(e)
        }
        
    },
    delete: async function (req, res, next) {
        try{
            console.log(req.params.id);
            const inquilino = await inquilinosModel.deleteOne({ _id: req.params.id });
            res.status(200).json(inquilino);
        }catch(e){
            next(e)
        }
        
    },
}
