const Item = require("../models/Item.model");
const path = require('path')

module.exports.itemController = {
  addItems: async (req, res) => {
    // console.log(path.extname(req.files.img));
    try {
      const image = req.files.img
      // console.log(req.files)
      const imgName =  image.name
      // `${new Date().toISOString()}${path.extname(image.name)}`
      const  uploadPath = './uploads/' + imgName ;
      image.mv(uploadPath , err => {
        if (err) {
          return res.json(err)  
        }
        res.json("completed")
      })

      // const items = await Item.create({
      //   img: req.file.path,
      //   name: req.body.name,
      //   description: req.body.description,
      //   starting_price: req.body.starting_price,       
      //   user_id: req.body.user_id,
      // });
      // return res.json(items);
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
