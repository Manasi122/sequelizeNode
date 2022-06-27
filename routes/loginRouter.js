const loginController = require('../controllers/loginController.js')

const router = require('express').Router()

router.post('/registerUser', loginController.registerUser)

router.post('/loginUser', loginController.loginUser)

router.get('/registerUsers', loginController.getAllUser)

router.get('/:id', loginController.getOneUser)

router.put('/:id', loginController.updateUser)

router.delete('/:id', loginController.deleteUser)

module.exports = router
