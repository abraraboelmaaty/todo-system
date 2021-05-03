const express = require('express')
const router = express.Router()

const {Todo} = require('../modles/todo.modle') 
// const {User} = require('../modles/user.modle')
const {ValidatedToken} = require('../middleware/validation/validateToken.middleware')
const {todoDto} = require('../dto/todoDto')
const {IsTodoUser} = require('../middleware/todo/istodouser.middleware')
// const {IsUserAdmin} = require('../middleware/user/isUserAdmin.middleware')

router.get('/',ValidatedToken,async(req,res)=>{
    const userId = req.user.id
    
    const todos = await Todo.find({'user.id':userId})
    
    res.json({todos})
})

router.get('/all',async(req,res)=>{
    const todos = await Todo.find({})
    res.json({todos})
})

router.post('/',ValidatedToken,async(req,res)=>{
   const {title,completed} = req.body
   const user = req.user
   const todo = new Todo ({
       title,
       completed,
       user:{
           id:user.id,
           name:user.name
       }
   })
   await todo.save()
   const userId = user.id
   const todoData = todoDto(todo)
   res.json({todo:todoData,userId})
})

router.put('/:id',ValidatedToken,IsTodoUser,async(req,res)=>{
    const {id} = req.params
    const {completed,title} = req.body

    const todo = await Todo.findByIdAndUpdate(id,{
        completed,
        title
    },
    {
        new:true
    })
    const userId = req.user.id
    const todoData = todoDto(todo)
    res.json({todo:todoData,userId})
})

router.delete('/:id',ValidatedToken,IsTodoUser,async(req,res)=>{
    const {id} = req.params
    await Todo.findByIdAndDelete(id)
    res.json({mag:"the delete action has completed"})
})




module.exports = router