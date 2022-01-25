const mongoose = require('../bin/mongodb');

const inquilinosSchema = new mongoose.Schema ({
    
    inquilino:String,
    direccion : String,
    duenio : String,
    precioAlq: Number,
    estadoAlq: Boolean,
    estadoPagAlq:Boolean
})

module.exports = mongoose.model("inquilinos", inquilinosSchema)