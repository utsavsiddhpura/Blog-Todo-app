const mongoose = require('mongoose')
const Test = require('./testmodel')
mongoose.connect('mongodb://localhost/newdb')

Test.create({
    name: 'Test 1'
})