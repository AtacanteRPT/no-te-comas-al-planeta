module.exports = (sequelize , Datatypes)=>{
    var Alternativa =  sequelize.define('alternativa' , {
        nombre: Datatypes.STRING,
        ingredientes : Datatypes.STRING,
        preparacion:Datatypes.STRING,
        img: Datatypes.STRING
    } , {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
        Alternativa.belongsTo(models.usuario);
      }

    }

   });

   return Alternativa;
} 