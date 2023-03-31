const Auction = require("../models/auction.model");

module.exports.auctionController = {
  addAuction: async (req, res) => {
    try {
      const auction = await Auction.create({
        item_id: req.body.item_id,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        rate: [{ user_id: null, amount: null }],
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
      const auctions = await Auction.find();
      res.json(auctions);
    } catch (error) {
      res.json(error.message);
    }
  },
};
