const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

module.exports = userController = {

    getAllUsers: async (req, res) => {

        try {
            const users = await User.find()
        res.json(users)

        } catch(e) {
            return res.status(401).json('Ошибка...')
        }
        
    },

    registerUser: async (req, res) => {

        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(401).json({ message: "Ошибка при регистрации", errors })
            }

            const { login, password, firstName, lastName } = req.body
            const candidate = await User.findOne({ login })

            if (candidate) {
                return res.status(401).json("Пользователь с таким именем уже существует")
            }

            const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
            const user = await User.create({ login, password: hash, firstName, lastName })

            await user.save()
            res.json("Пользователь успешно зарегистрирован")
        }

        catch (e) {
            return res.status(401).json(e.message)
        }

    },
    getUserId : async (req, res) => {
        try {
            const userToken = await jwt.verify(req.headers.authorization, process.env.SECRET_JWT_KEY)
            
            return await res.json(userToken.id)
        } catch (error) {
            return res.json(error)
        }
    },

    login: async (req, res) => {

        try {
            const { login, password } = req.body
            const candidate = await User.findOne({ login: login })

            if (!candidate) {
                return res.status(401).json({ error: `Пользователь ${login} не найден` })
            }

            const valid = await bcrypt.compare(password, candidate.password)
            if (!valid) {
                return res.status(401).json({error: "Неверный пароль"})
            }

            const payload = {
                id: candidate._id,
                login: candidate.login
            }
    
            const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
                expiresIn: "24h"
            })
            res.json(token)
        }

        catch (e) {
                return res.status(401).json('Ошибка входа')
            }
    }
}