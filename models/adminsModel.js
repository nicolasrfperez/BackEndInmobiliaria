const mongoose = require('../bin/mongodb');

const adminsSchema = new mongoose.Schema ({
    email : "string",
    user: "string",
    password: "string"
})

module.exports = mongoose.model("admins", adminsSchema);