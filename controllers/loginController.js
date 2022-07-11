require('dotenv').config()
const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { sendJsonResponse } = require('../helpers/validator')
const { helper } = require('../helpers/validate')
const Register = db.Register

const registerUser = async(req, res) => {  
    const { email, password: plainTextPassword } = req.body  
    
    const password = await bcrypt.hash(plainTextPassword, 10)
    
    try{
        const response = await Register.create({
            email,
            password             
        })
        res.send(response)
        console.log("User Registered successfully:", response);
        

    }catch(err){
      if(err){
        return helper(res, err);
      }
    
    return res.json({ status : 'fail'})
  }
}


// Login 
const loginUser = async(req, res) => {
  const { email, password } = req.body

  const emailId = await Register.findOne({ where: { email: email }})       
  
  if(!emailId){
    return sendJsonResponse(res, 401, {
      status: 'fail',
      code: 401,
      message: 'Email not found',
    });
  }
  if(await bcrypt.compare(password, emailId.password)){
      const token = jwt.sign({ 
          email : emailId.email
      },
      process.env.JWT_SECRET
      )
      return sendJsonResponse(res, 200, {
        status: 'success', data: token,
        code: 200,
        message: 'OK',
      })
  }
  return sendJsonResponse(res, 500, {
    status: 'fail',
    code: 500,
    message: 'Invalid email and password',
  });
};

const getAllUser = async (req, res) => {
  let user = await Register.findAll({})
  res.status(200).send(user)
}

const getOneUser = async (req, res) => {
  let id = req.params.id
  let user = await Register.findOne({ where: { id: id }})
  res.status(200).send(user)
}

const updateUser = async (req, res) => {
  let id = req.params.id
  const user = await Register.update(req.body, { where: { id: id }})
  res.status(200).send(user)
}

const deleteUser = async (req, res) => {
  let id = req.params.id  
  await Register.destroy({ where: { id: id }} )
  res.status(200).send('User is deleted !')
}

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser    
}