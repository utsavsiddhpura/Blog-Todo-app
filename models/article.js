const mongoose = require('mongoose')

const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    author: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
},
{ collection: 'articles',
    database: 'tempdb' }
)

module.exports = mongoose.model('Article', articleSchema)
