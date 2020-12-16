'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Band.belongsToMany(models.Event, {
        through: models.BandEvent,
        foreignKey: 'bandId'
      })
    }
  };
  Band.init({
    band_name: DataTypes.STRING,
    band_origin: DataTypes.STRING,
    band_member: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};