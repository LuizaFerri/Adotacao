'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cachorros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cachorros.init({
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    descricao: DataTypes.STRING,
    sexo: DataTypes.STRING,
    castrado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cachorros',
  });
  return Cachorros;
};