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
    queue_perform: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BandEvent',
  });
  return BandEvent;
};