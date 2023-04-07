const mongoose = require('mongoose')


const categoryShema = mongoose.Schema({
    title:{
        type:String,
    },


})

const Category = mongoose.model('Category', categoryShema)

module.exports = Category