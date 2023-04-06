const Auction = require("../models/auction.model");
const moment = require("moment");

module.exports.auctionController = {
  addAuction: async (req, res) => {
    try {
      const start = moment(req.body.start_time, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ [(]Z[)]').toDate()  
      const end = moment(req.body.end_time, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ [(]Z[)]").toDate()
      const auction = await Auction.create({
        item_id: req.body.item_id,
        start_time: start,
        end_time: end,
      });
      return res.json(auction);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteAuction: async (req, res) => {
    try {
      await Auction.findByIdAndDelete(req.params.id);   
      res.json("deleted");
    } catch (error) {
      res.json(error.message);
    }
  },
  getAuction: async (req, res) => {
    try {
      const auctions = await Auction.find()
      res.json(auctions);
    } catch (error) {
      res.json(error.message);
    }
  },
};
