const express = require('express')
const temprouter = express.Router()
const Article = require('./models/article')

temprouter.get(`/:id`, async (req, res) => {
    record = await Article.findOne({_id:req.params.id})
    res.render('editarticle', {article:record})
})

temprouter.post(`/:id`,async (req,res)=>{
    const newrecord = {
        title: req.body.title,
        desc: req.body.desc,
        author: req.body.author,
        timestamp: Date.now()
    }

    try{
    await Article.findOneAndReplace({_id:req.params.id},newrecord)
    res.redirect(`/articles/${req.params.id}`)
    }
    catch(err){
        res.render('editarticle',{article:newrecord})
    }
}
)

module.exports = temprouter

