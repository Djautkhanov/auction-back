const Router = require('express')
const {itemsController} = require('../controllers/item.controller')

const router = Router() 

router.post('items', itemsController.addItems)
router.get('items', itemsController.getItems)
router.patch('items/:id', itemsController.editItems)
router.delete('items/:id', itemsController.deleteItems)

module.exports = router  