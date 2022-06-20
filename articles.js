const express = require('express')
const mongoose = require('mongoose')   
const router = express.Router()
const Article = require('./models/article')
const temprouter = require('./temprouter')
const deleterouter = require('./deleterouter')

mongoose.connect('mongodb://localhost/articles')

let record = new Article();

router.get('/', async (req, res) => {

    
    const articles = await Article.find().sort({timestamp:'desc'})
    res.render('temp', {
    tempvar: articles
    });
    
})



router.get('/newarticle',(req,res)=>{
    res.render('newarticle', {article:record})
})


router.post('/newarticle',async (req,res)=>{
    
    record = new Article({
        title: req.body.title,
        desc: req.body.desc,
        author: req.body.author
    })
    try{
    record = await record.save()
    res.redirect(`/articles/${record._id}`)
    }
    catch(err){
        res.render('newarticle',{article:record})
    }

} 
)

router.use('/edit',temprouter)
router.use('/delete',deleterouter)

router.get(`/:id`,async (req,res)=>{
    try{
        const temp = await Article.findOne({_id:req.params.id})
        res.render('individ',{article:temp})    
    }
    catch(err){
        res.redirect('/')
    }
    
})



module.exports = router