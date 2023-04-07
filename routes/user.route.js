const { Router } = require('express')
const userController = require('../controllers/user.controller')
const {check} = require('express-validator')

const router = Router()


router.post('/auth', [
    check("login", "Имя пользователя не должно быть пустым").notEmpty(),
    check("password", "Пароль должен быть не меньше 6 и не больше 20 символов").isLength({min: 6, max: 20})
], userController.registerUser)

router.post('/registration', userController.login)
router.get('/users', userController.getAllUsers) 


module.exports = router