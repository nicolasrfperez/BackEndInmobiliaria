const mongoose = require('../bin/mongodb');

const inquilinosSchema = new mongoose.Schema ({
    
    idInquilino:Number,
    nombre : String,
    apellido : String,
    tipoDoc : String,
    numeroDoc : Number,
    email : String,
    email2 : String,
    telefono : Number,
    telefono2 : Number,
    tipoGarantia : String,
    garante : String,
   // DNIFoto: File
})

module.exports = mongoose.model("inquilinos", inquilinosSchema)