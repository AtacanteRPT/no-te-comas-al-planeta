// Example model


module.exports = function (sequelize, DataTypes) {

  var Alimento = sequelize.define('alimento', {
    nombre : DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Alimento.hasMany(models.Comments);
      }

    }

  });

  return Alimento;
};

