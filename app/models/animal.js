// Example model


module.exports = function (sequelize, DataTypes) {

  var Animal = sequelize.define('animal', {
    tiempo_de_vida: DataTypes.STRING,
    alimentacion: DataTypes.STRING,
    tierra_consumida: DataTypes.STRING,
    agua_consumida: DataTypes.STRING,
    tipo: DataTypes.STRING,
    metado_volumen: DataTypes.STRING,
    cantidad_quimicos: DataTypes.STRING

  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Animal.hasMany(models.Comments);

      }

    }

  });

  return Animal;
};

