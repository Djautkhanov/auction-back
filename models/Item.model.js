const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
   
  img:{
    type:String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  starting_price: {
    type: Number,
    // required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  }
});

const Item  = mongoose.model('Item', itemSchema);

module.exports = Item  