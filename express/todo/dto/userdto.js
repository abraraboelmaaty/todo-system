const userDto = ({_id,name,email,phone,isAdmin}) => ({
    id:_id,
    name,
    email,
    phone,
    isAdmin
})

module.exports = {userDto}