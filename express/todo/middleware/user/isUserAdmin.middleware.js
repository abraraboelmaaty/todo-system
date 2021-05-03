const {Todo} = require('../../modles/todo.modle')

const IsUserAdmin = async(req,res,next)=>{
    const {id} = req.params
    const todo = await Todo.findById(id)
    if(!todo){
       return res.status(404).json({msg:'todo not found'})
    }
    const user= req.user 
    if(user.isAdmin == false){
        return res.status(403).json({msg:'you arnot allowed for this action'})
    }

    req.todo = todo
    next()
}

module.exports = {IsUserAdmin}