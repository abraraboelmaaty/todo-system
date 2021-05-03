const {Schema,model} = require('mongoose')

const userSchema = Schema({
    name:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    phone:String,
    address:String
})

const User = model('user',userSchema)

module.exports = {User}