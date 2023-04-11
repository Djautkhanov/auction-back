const Item = require("../models/Item.model");
const path = require('path')

module.exports.itemController = {
  addItems: async (req, res) => {
    try {
      const image = req.files.img
      const imgName =  image.name
        const  uploadPath = './uploads/' + imgName ;   
      image.mv(uploadPath , err => {  
        if (err) {
          return res.json({error: err.message})  
        }
       console.log("completed")
      })
      const items = await Item.create({
        img: imgName,
        name: req.body.name,
        description: req.body.description,
        starting_price: req.body.starting_price,       
        user_id: req.body.user_id,
        category: req.body.category,
        user_id: req.user.id,
        blitzPrice: req.body.blitzPrice
      });
      return res.json(items);
    } catch (error) {
      return res.json(error.message);
    }
  },

  getItems: async (req, res) => {  
    try {
      const items = await Item.find().populate('category') 
      return res.json(items);  
    } catch (error) {
      return res.json(error.message);
    }
  },

  editItems: async (req, res) => {
    try {
      const items = await Item.findByIdAndUpdate(req.params.id, {
        img: req.body.img,
        name: req.body.name,
        description: req.body.description,
        startyng_price: req.body.start_price,
        user_id: req.body.user_id,
      });
      return res.json(items);
    } catch (error) {
      return res.json(error.message);
    }
  },

  deleteItems: async (req, res) => {
    try {
      const items = await Item.findByIdAndDelete(req.params.id);
      return res.json(items);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
