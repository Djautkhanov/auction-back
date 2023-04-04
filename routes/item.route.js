const Router = require('express')
const { itemController } = require('../controllers/item.controller')

const router = Router() 

router.post('/items', itemController.addItems)
router.get('/items', itemController.getItems)
router.patch('/items/:id', itemController.editItems)
router.delete('/items/:id', itemController.deleteItems)  

module.exports = router  