const mongoose = require('../bin/mongodb');

const propietariosSchema = new mongoose.Schema ({


    nombre : String,
    apellido : String,
    tipoDoc : String,
    numeroDoc : String,
    email1 : String,
    email2 : String,
    telefono : String,
    telefono2 : String

});


module.exports = mongoose.model("propietarios", propietariosSchema)