'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.Band, {
        through : models.BandEvent,
        foreignKey: 'eventId'
      })
    }
  };
  Event.init({
    event_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Event Name is Required!!`
        }
      }
    },
    event_location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Event Location is Required!!`
        }
      }
    },
    event_schedule: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty:{
          msg: `Event Schedule is Required!!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};