'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BandEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BandEvent.init({
    queue_perform: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: {
          msg: `Queue Perform is Required!!`
        },
        min:{
          args: 1,
          msg: `Minimum queue is 1`
        }
      }
    },
    eventId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: {
          msg: `Event id is Required!!`
        }
      }
    },
    bandId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: {
          msg: `Event id is Required!!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'BandEvent',
  });
  return BandEvent;
};