module.exports = {
    getAll:  function(req, res, next) {
        res.send('respond with a resource');
    },
    getOne:  function(req, res, next) {
        res.send('respond with a resource');
    },
    create: function(req, res, next) {
        res.send('post users');
    },
    modify: function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put users');
    }

}