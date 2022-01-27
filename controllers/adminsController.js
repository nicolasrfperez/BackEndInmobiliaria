const adminsModel = require('../models/adminsModel')

module.exports={
    getAll:  function(req, res, next) {
        res.send('respond with a resource');
    },
    getOne: function(req, res, next) {
        res.send('respond with a resource');
    },
    login: async (req, res, next) => {
        try{
            console.log(req.query)
            const {error,message,admins} = await adminsModel.validateUser(req.body.user,req.body.password);
            if(!error){
                const token = ({userId:admins._id});
                res.json({message:message,token:token});
                return;
            }
            res.json({message:message});
            console.log(error,message)
            
        }catch(e){
            next(e)
        }
        
    },
    create:  function (req, res, next) {
            console.log(req.body);
            const admins =  new adminsModel({
                email: req.body.email,
                user:req.body.user,
                password:req.body.password
            })
            admins.save();
            res.json(admins)
    },
    

    modify:function(req, res, next) {
        console.log(`este es el id de put ${req.params.id}`)
        res.send('put users');
    }
}