var express = require('express'),
  bcrypt = require('bcryptjs'),
  router = express.Router(),
  passport = require('passport'),
  db = require('../models'),
  authMiddleware = require('.././middleware/auth');

module.exports = function (app) {
  app.use('/', router);

}

router.get('/', (req, res, next) => {
  return res.render('index', {
    titulo: 'No te comas el planeta',
    estaAutentificado: req.isAuthenticated(),
    user: req.user
  });
})

router.get('/auth/isloged', (req, res, next) => {
  res.status(200).json({ estaAutentificado: req.isAuthenticated() })
})

/**
 * Rutas de Creacion y Login de usuario  
 */
router.get('/auth/registro', (req, res, next) => {
  return res.render('users/registro', {
    titulo: 'No te comas el planeta',
    estaAutentificado: req.isAuthenticated(),
    user: req.user
  });
});
router.get('/calculadora', (req, res, next) => {

  db.alternativa.findAll({ attributes: ['id', 'nombre', 'ingredientes', 'preparacion'], include: [{ model: db.usuario, attributes: ['nombre'] }] })
    .then((recetas) => {

      var listaAlternativas = {}

      for (var index = 0; index < recetas.length; index++) {
        listaAlternativas[recetas[index].nombre] = recetas[index];
      }

      console.log(listaAlternativas);

      res.render('calculadora', {
        titulo: 'No te comas el planeta',
        estaAutentificado: req.isAuthenticated(),
        user: req.user,
        alternativas: recetas,
        listaAlternativas: listaAlternativas
      });
    }, (ex) => {
      res.status(500).send();
    });

});
router.get('/mapa', (req, res, next) => {
  return res.render('mapa', {
    titulo: 'No te comas el planeta',
    estaAutentificado: req.isAuthenticated(),
    user: req.user
  });
});

router.get('/auth/receta', (req, res, next) => {
  return res.render('users/recetaFinal', {
    titulo: 'No te comas el planeta',
    estaAutentificado: req.isAuthenticated(),
    user: req.user
  });
});

router.post('/auth/registro', (req, res, next) => {
  console.log(req.body.email);
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);
  var user = {
    email: req.body.email,
    nombre: req.body.nombre,
    password: password
  };

  db.usuario.findAll({ attributes: ['email'], where: { email: user.email } }).then(email => {

    if (email.length > 0) {
      return res.status(202).json({ respuesta: 'email ya registrado' })

    } else {
      db.usuario.create(user).then((usuario) => {
        req.flash('info', 'Se ha registrado correctamente, ya puede Iniciar sesion');
        return res.status(201).redirect('/auth/login');
      }, (ex) => {
        return res.status(400).json(ex);
      });
    }

  }, ex => {
    return res.status(400).json(ex);

  });
});

router.get('/auth/login', (req, res, next) => {
  return res.render('users/login', {
    titulo: 'No te comas el planeta',
    estaAutentificado: req.isAuthenticated(),
    user: req.user,
    mensaje: req.flash('info'),
    autoMensaje: req.flash('authmessage')
  });
});

router.post('/auth/login', passport.authenticate('local', {
  successRedirect: '/auth/crear-receta',
  failureRedirect: '/auth/login',
  failureFlash: true
}));

router.get('/auth/cerrar', authMiddleware.estaLogueado, (req, res, next) => {
  req.logout();
  res.redirect('/');
});
router.get('/auth/crear-receta', authMiddleware.estaLogueado, (req, res, next) => {
  return res.render('users/crearReceta', {
    usuarioLogeado: 'Feliz Experiencia',
    estaAutentificado: req.isAuthenticated(),
    user: req.user
  });
});

