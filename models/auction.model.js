const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,       
    ref: "Category",
  },
  start_time: {   
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  rate: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,     
        ref: "User",
        required: true,
        default: null,
      },
      amount: {
        type: Number,
        required: true,
        default: null,
      },
    },
  ],
});

const Auction = mongoose.model("Auction", auctionSchema);
module.exports = Auction;
