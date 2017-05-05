module.exports = (sequelize , Datatypes)=>{
    var Usuario =  sequelize.define('usuario' , {
        nombre: Datatypes.STRING,
        email : Datatypes.STRING,
        password:Datatypes.STRING
    } , {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
        
      }

    }

   });

   return Usuario;
} 