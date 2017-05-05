// Example model


module.exports = function (sequelize, DataTypes) {

  var Agua = sequelize.define('agua', {
    volumen: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Agua.hasMany(models.Comments);
      }

    }

  });

  return Agua;
};

