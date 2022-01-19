const propietariosModel = require('../models/propietariosModel')

module.exports = {
    getAll: function(req, res, next) {
        res.json('get propietarios');
    },
    getOne:  function(req, res, next) {
        res.json('respond with a resource PROPI ');
    },
    create: function(req, res, next) {
        res.json('post propi');
    },
    modify:  function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put propi');
    }
}