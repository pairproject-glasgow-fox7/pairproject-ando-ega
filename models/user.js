'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Username is Required!!`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Password is Required!!`
        }
      }
    },
    email: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: `Email is Required!!`
      }
    }
  },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Role is Required!!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance, options)=>{
    instance.password = hashPassword(instance.password)
  })

  return User;
};