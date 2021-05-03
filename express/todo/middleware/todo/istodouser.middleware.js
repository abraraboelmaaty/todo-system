const {Todo} = require('../../modles/todo.modle')

const IsTodoUser = async(req,res,next)=>{
    const {id} = req.params
    const todo = await Todo.findById(id)

    if(!todo){
        return res.status(404).json({mag:'todo not found'})
    }


    const user = req.user
    if(todo.user.id != user.id){
        return res.status(403).json({mag:'you donot allowed for this action'})
    }

    req.todo = todo
    next()
}

module.exports = {IsTodoUser}