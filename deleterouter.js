const express = require('express')
const deleterouter = express.Router()
const Article = require('./models/article')

deleterouter.post(`/:id`,async (req,res)=>{
    try{
        await Article.findOneAndDelete({_id:req.params.id})
        res.redirect('/articles')
    }
    catch(err){
        console.log(`delete operation failed with error: ${err}`);
        res.redirect('/articles')
    }
})


module.exports = deleterouter