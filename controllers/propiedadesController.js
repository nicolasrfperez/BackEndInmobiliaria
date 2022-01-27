const propiedadesModel = require('../models/propiedadesModel')

// module.exports = {
//     getAll: async function(req, res, next) {
//         res.json('get propiedades');
//         const propiedad = await  propiedadesModel.find({
            
//         })
//     },
//     getOne: async  function(req, res, next){
//         const propiedad = await propiedadesModel.findById(req.params.id);
//         res.json(propiedad);
//     },
//     create: async function (req, res, next) {
//         console.log(req.body);
//         const propiedad = await new propiedadesModel({
//             duenio:req.body.duenio,
//             direccion : req.body.direccion,
//             metrosCuad: req.body.metrosCuad,
//             cantAmbientes: req.body.ambientes,
//             precio:req.body.precio,
//             precAlq:req.body.precAlq,
//            // estado:req.body.estado
//         })
//         propiedad.save();
//         res.json(propiedad)
// },

//     modify: async  function(req, res, next) {

//         const propiedad = await propiedadesModel.update({_id : req.params.id},req.body, {multi:false})
//         console.log(`este es el id de put ${req.params.id}`)
//         res.json(propiedad);
//     },
//     delete: async  function(req, res, next) {
//         const data = await propiedadesModel.deleteOne({_id : req.params.id})
//         console.log(`este es el id de delete ${req.params.id}`)
//         res.send('delete propi');
//     }
// }

const multer = require('multer');

const DIR = './public/images/';

const upload = multer({dest: DIR}).single('photo');
module.exports = {
    getAll: async (req, res, next) => {
        try{
            console.log(req.body.tokenData)

            let queryFind={};
            if(req.query.buscar){
                queryFind={name:{$regex:".*"+req.query.buscar+".*",$options:"i"}} //buscar por nombre similar al like
            }
            console.log(queryFind)
            const propiedades = await propiedadesModel.paginate(queryFind,{
                
                //sort:{[req.query.sort]:req.query.sortOrder},
                sort:{name:1},
                limit:req.query.limit || 3, //Resultados por pagina
                page:req.query.page || 1 //numero de pagina
            });
            res.status(200).json(propiedades);
        }catch(e){
            next(e)
        }
        
    },
    getById: async function (req, res, next) {
        try{
            console.log(req.params.id);
            const propiedades = await propiedadesModel.findById(req.params.id).select("name price");
            if(!propiedades){
                res.status(200).json({msg:"no existe el propiedade"})
                return; //Siempre despues de un res un return
            }
            res.status(200).json(propiedades);
        }catch(e){
            next(e)
        }
        
    },
    create: async function (req, res, next) {
        console.log(req.body);
        try{
            
            const propiedad = await new propiedadesModel({
        
                    duenio:req.body.duenio,
                    direccion : req.body.direccion,
                    metrosCuad: req.body.metrosCuad,
                    cantAmbientes: req.body.ambientes,
                    precio:req.body.precio,
                    precAlq:req.body.precAlq,
                    // estado:req.body.estado
            })
           // console.log(req.body.tags)
            const document = await  propiedad.save();
           
            res.status(201).json(document);
        }catch(e){
            console.log(e)
            e.status=204;
            next(e);
        }
        
    },
    update: async function (req, res, next) {
        try{
            console.log(req.params.id, req.body);
            const propiedades = await propiedadesModel.update({ _id: req.params.id }, req.body, { multi: false })
            res.status(200).json(propiedades);
        }catch(e){
            next(e)
        }
        
    },
    delete: async function (req, res, next) {
        try{
            console.log(req.params.id);
            const data = await propiedadesModel.deleteOne({ _id: req.params.id });
            res.status(200).json(data);
        }catch(e){
            next(e)
        }
        
    },
    upload: async function (req, res, next) {
        try{
            upload(req,res,function(err){
                if(err){
                    console.log(err);
                    next();
                }
                console.log(req.file);
                res.status(201).json({status:"success",message:"Imagen cargada",data:req.file})
            })
        }catch(e){
            next(e)
        }
        
    },
    modify: async function (req, res, next) {
        try{
            console.log(req.params.id, req.body);
            const propiedades = await propiedadesModel.updateOne({ _id: req.params.id }, req.body, { multi: false })
            res.status(200).json(propiedades);
        }catch(e){
            next(e)
        }
        
    },
    delete: async function (req, res, next) {
        try{
            console.log(req.params.id);
            const propiedades = await propiedadesModel.deleteOne({ _id: req.params.id });
            res.status(200).json(propiedades);
        }catch(e){
            next(e)
        }
    },
}