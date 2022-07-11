const db = require('../models')

const User = db.User

const addUser = async (req, res) => {
    let info = {
        firstName: req.body.firstName,
        age: req.body.age,
    }
    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)
}

const getAllUser = async (req, res) => {
    let user = await User.findAll({})
    res.status(200).send(user)
}

const getOneUser = async (req, res) => {
    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)
}

const updateUser = async (req, res) => {
    let id = req.params.id
    const user = await User.update(req.body, { where: { id: id }})
    res.status(200).send(user)
}

const deleteUser = async (req, res) => {
    let id = req.params.id  
    await User.destroy({ where: { id: id }} )
    res.status(200).send('User is deleted !')
}


module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    
}