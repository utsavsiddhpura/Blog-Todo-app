const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
},
{collection:'tests'})


module.exports = mongoose.model('User',userSchema)