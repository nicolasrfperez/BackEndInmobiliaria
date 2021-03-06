const adminsModel = require('../models/adminsModel')

module.exports={
    getAll: async function(req, res, next) {
      
        const admins = await  adminsModel.find({
            
        })
        res.json(admins);
    },
    getOne: async  function(req, res, next){
        const admins = await adminsModel.findById(req.params.id);
        res.json(admins);
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