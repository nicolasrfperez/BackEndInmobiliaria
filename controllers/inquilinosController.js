module.exports={
    getAll: function(req, res, next) {
        res.send('respond with a resource inqui');
    },
    getOne:function(req, res, next) {
        res.send('respond with a resource inqui');
    },
    modify: function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put inqui');
    },
    delete: function(req, res, next) {
        res.send('respond with a resource inqui');
    }
}