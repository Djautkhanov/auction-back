const mongoose = require("mongoose");

const auctionShema = new mongoose.Shema({
  item_id: {
    type: mongoose.SchemaTypes.ObjectId,  
    ref: "item_id",
    required: true, 

    start_time: {
      type: Date,
      required: true,
    },

    end_time: { 
        type: Date, 
        required: true
       },
  },
});

 const   Auction = mongoose.model('Auction', auctionShema)    

 module.exports  = Auction          
