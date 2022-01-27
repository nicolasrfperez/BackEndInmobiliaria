const mongoose = require('../bin/mongodb');

const propiedadesSchema = new mongoose.Schema ({
    
    duenio:String,
    direccion : String,
    metrosCuad: Number,
    cantAmbientes: Number,
    precio:Number,
    precAlq:Number,
    //  estado:{
    //      enum :['libre', 'alquilada', 'vendida']
    // }
})
const imgSchema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number
})
module.exports = mongoose.model("propiedades", propiedadesSchema)