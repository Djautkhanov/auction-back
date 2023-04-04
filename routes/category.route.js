const Router = require('express')
const { categoryController } = require('../controllers/category.controller')
const  router  = Router() 

router.post('/category', categoryController.addCategory)
router.get('/category', categoryController.getCategory)
router.patch('/category/:id', categoryController.editCategory)
router.delete('/category/:id', categoryController.deleteCategory)

module.exports = router   