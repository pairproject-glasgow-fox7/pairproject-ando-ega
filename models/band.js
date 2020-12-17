'use strict';
const {
  Model
} = require('sequelize');

const Op = require('sequelize').Op
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

    band(){
      if(this.band_member > 1){
        return `${this.band_name} Band`
      } else{
        return `${this.band_name}`
      }
    }

    static moreThanOne(){
      return Band.findAll({where:{band_member: {[Op.gt] : 1} }})
    }
  };
  Band.init({
    band_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg:`Band Name is Required!!`
        }
      }
    },
    band_origin: DataTypes.STRING,
    band_member: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: `Band Member is Required!!`
        },
        min:{
          args: 1,
          msg: `Minimum member is 1`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Band',
  });

  Band.beforeCreate((instance, options)=>{
    if(!instance.band_origin){
      instance.band_origin = 'unknown'
    }
  })
  return Band;
};