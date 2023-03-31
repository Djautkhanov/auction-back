const { Router } = require("express");
const { auctionController } = require("../controllers/auction.controller");
const router = Router()

router.get('/auctions', auctionController.getAuction),
router.post('/auction/add', auctionController.addAuction),
router.delete('/auction/:id',  auctionController.deleteAuction),


module.exports = router