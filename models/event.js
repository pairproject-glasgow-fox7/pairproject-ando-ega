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
    event_name: DataTypes.STRING,
    event_location: DataTypes.STRING,
    event_schedule: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};