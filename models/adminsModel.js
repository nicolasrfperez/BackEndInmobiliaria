/*const mongoose = require('../bin/mongodb');

const adminsSchema = new mongoose.Schema ({
    email : "string",
    user: "string",
    password: "string"
})

module.exports = mongoose.model("admins", adminsSchema);*/

const mongoose = require("../bin/mongodb");


const adminsSchema = new mongoose.Schema ({
    email : String,
    user: String,
    password: String
})/*
adminsSchema.pre("save",function(next){
    this.password = password;
    next();

})*/
adminsSchema.statics.validateUser = async function(user,password){
    const admins = await this.findOne({user:user});
    if(admins){
        if/*bcrypt.compareSync*/(password,admins.password){
            //User y password ok, generar token
            
            return {error:false,message:"usuario ok",admins:admins.password};
        }else{
            return {error:true,message:"password incorrecto"};
        }
    }else{
        return {error:true,message:"usuario incorrecto"};
    }
}
module.exports = mongoose.model("admins",adminsSchema);