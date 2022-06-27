const validator = require('express-validator')
module.exports = (sequelize, DataTypes) => {
  
    const register = sequelize.define('Register', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg : 'email must be unique, email already in used'
        },
        isLowercase: true,
        validate:{
          notEmpty: {
            msg: 'Validation notEmpty on email failed'
          },
          isEmail: {
            msg: 'Please provide valid email'
          }
        }
      },  
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {msg: 'Validation isAlpha on password failed'}
      }
     }
    });
    return register;
    
    }