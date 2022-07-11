module.exports = (sequelize, DataTypes) => {
  
    const register = sequelize.define('Register', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          message : 'email must be unique, email already in used'
        },
        isLowercase: true,
        validate:{
          notEmpty: {
            message: 'Please enter email id'
          },
          isEmail: {
            message: 'Please provide valid email'
          }
        }
      },  
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   notNull: { args: true, message: 'password can\'t be empty' },           
        //   len: { args: [5,50], message: 'password length must be more than 5 characters' },
        // }
     }
    });
    return register;
    
    }