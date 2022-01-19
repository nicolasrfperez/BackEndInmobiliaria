const adminsModel = require('../models/adminsModel')

module.exports={
    getAll:  function(req, res, next) {
        res.send('respond with a resource');
    },
    getOne: function(req, res, next) {
        res.send('respond with a resource');
    },
    create: function(req, res, next) {
        res.send('post users');
    },
    validate: async (req, res, next) => {
        try{
            console.log(req.query)
            const {error,message,userAdmin} = await adminsModel.validateUser(req.body.user,req.body.password);
            if(!error){
                const token = jwt.sign({userId:userAdmin._id},req.app.get("secretKey"),{expiresIn:"1h"});
                res.json({message:message,token:token});
                return;
            }
            res.json({message:message});
            console.log(error,message)
            
        }catch(e){
            next(e)
        }
        
    },
    modify:function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put users');
    }
}