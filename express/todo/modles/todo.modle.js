const {Schema,model,Types} = require('mongoose')

const todoSchema = Schema({
    user:{
        id:{
            type:Types.ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    },
    title:{
        type:String,
        require:true
    },
    completed:{
        type:Boolean,
        require:true,
        default:false
    }
})

const Todo = model('todo',todoSchema)


module.exports = {Todo}