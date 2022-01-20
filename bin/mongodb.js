var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inmobUC', {useNewUrlParser:true}, function(errror) {
    if (error) {
        throw error;
    } else{
        console.log("Conectado a MongoDB");  
    }
});

module.exports = mongoose;