// Example model


module.exports = function (sequelize, DataTypes) {

  var Carne = sequelize.define('carne', {
    peso: DataTypes.DOUBLE,
    alimentacion: DataTypes.STRING,

  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Carne.hasMany(models.Comments);

      }

    }

  });

  return Carne;
};

