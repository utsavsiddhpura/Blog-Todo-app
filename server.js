const express = require('express')
const app = express()
const articleRouter = require('./articles')




app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use('/articles',articleRouter)

app.get('/',(req,res)=>{
    // articles = [{
    //     title: 'Article 1',
    //     desc: 'Desc 1'
    // }]
    res.render('index')
})







app.listen(3000)