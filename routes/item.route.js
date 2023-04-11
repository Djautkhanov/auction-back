const Router = require('express')
const { itemController } = require('../controllers/item.controller')
const fileMiddleware = require('../middleware/file.middleware')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router() 

router.post('/items',authMiddleware, itemController.addItems)
router.get('/items', itemController.getItems)
router.patch('/items/:id', itemController.editItems)
router.delete('/items/:id', itemController.deleteItems)  

module.exports = router  