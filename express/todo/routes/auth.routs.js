const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {User} = require('../modles/user.modle')
const {userDto} = require('../dto/userdto')
const {SECRET_KEY} = require('../config/secret/secretKey')

router.post('/login',async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})

    if(!user){
        return res.status(404).json({mag:'you arnot a user ,you need to sign up'})
    }

    const validPssword = bcrypt.compareSync(password,user.password)
    if(!validPssword){
        return res.status(400).json({mag:'cheack your email or password'})
    }

    const userData = userDto(user)
    const token = jwt.sign(userData,SECRET_KEY)

    res.json({user:userData,token})

})

router.post('/signup',async(req,res)=>{
    const {name,email,password,phone,address,isAdmin} = req.body
    const exsistUser = await User.findOne({email})
    if(exsistUser){
        return res.status(400).json({mag:'user aleardy exist'})
    }
    const user = new User({
        name,
        email,
        phone,
        address,
        isAdmin
    })

    const hashPassword = bcrypt.hashSync(password,10)
    user.password = hashPassword

    await user.save()
    const userData = userDto(user)
    res.json({userData})
})


module.exports = router