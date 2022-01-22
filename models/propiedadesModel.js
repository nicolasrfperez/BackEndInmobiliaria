const mongoose = require('../bin/mongodb');

const propiedadesSchema = new mongoose.Schema ({
    
    duenio:String,
    direccion : String,
    metrosCuad: Number,
    cantAmbientes: Number,
    precio:Number
})

module.exports = mongoose.model("propiedades", propiedadesSchema)