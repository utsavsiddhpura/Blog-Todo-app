const mongoose = require('mongoose')
async function main(){
    await mongoose.connect('mongodb://localhost/newdb')
    const User = require('./test')
    let user = new User({name:'Utsav'})
    user = await(user.save())
    console.log(user.id)

    const reqid = await User.findOne({name:'Utsav'})._id
    console.log(reqid)
    mongoose.disconnect()
}


main();

