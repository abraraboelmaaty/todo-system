const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../../config/secret/secretKey')

const ValidatedToken = (req,res,next)=>{

    try{
        const token = req.headers.authorization.split(' ')[1]
        const user = jwt.verify(token,SECRET_KEY)
        req.user = user
        next()
    }
    catch(err){
        res.status(400).json({ msg: "Invalid User Token" })
    }
   
}

module.exports = {ValidatedToken}