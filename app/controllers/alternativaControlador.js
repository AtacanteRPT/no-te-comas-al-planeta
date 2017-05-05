var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    authMiddleware = require('.././middleware/auth');

module.exports = app => {
    app.use('/', authMiddleware.adicionarHeaders, router);
}

router.get('/alternativas', (req, res, next) => {
    db.alternativa.findAll({ attributes: ['id', 'nombre', 'ingredientes', 'preparacion'], include: [{ model: db.usuario, attributes: ['nombre'] }] })
        .then((recetas) => {
            res.json(recetas)
        }, (ex) => {
            res.status(500).send();
        });
});
router.get('/alternativas/:id', (req, res, next) => {
    var alternativaId = parseInt(req.params.id, 10);
    console.log(req.params.id)
    db.alternativa.findById(alternativaId).then(function (alternativa_uno) {
        if (alternativa_uno) {
            console.log(alternativa_uno.nombre);
            console.log(alternativa_uno.ingredientes);
            console.log(alternativa_uno.preparacion);

            res.render('users/receta', {
                titulo: 'No te comas el planeta',
                estaAutentificado: req.isAuthenticated(),
                user: req.user,
                alternativa: alternativa_uno
            });
        } else {
            res.status(404).send();
        }

    }, function (ex) {
        res.status(500).send();
    })
});
router.post('/alternativas', (req, res, next) => {
    var alternativa = {
        nombre: req.body.nombre,
        ingredientes: req.body.ingredientes,
        preparacion: req.body.preparacion,
        usuarioId: req.user.id
    }

    db.alternativa.create(alternativa).then(function (receta) {
        res.redirect('/calculadora');
    }, function (ex) {
        res.status(400).json(ex);
    })
});
router.get('/usuarios/:id', (req, res, next) => {
    var usuarioId = parseInt(req.params.id, 10);
    db.usuario.findById(usuarioId).then((usuario) => {
        if (usuario) {
            res.json({
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rango: usuario.rango
            });
        } else {
            res.status(404).send();
        }

    }, (ex) => {
        res.status(500).send();
    })
})
router.put('/usuarios/:id', (req, res, next) => {
    var usuarioId = parseInt(req.params.id, 10)
    var usuarioEditado = {
        nombre: req.body.nombre,
        rango: req.body.rango,
        email: req.body.email
    }

    db.usuario.findById(usuarioId).then((usuario) => {
        if (usuario) {
            usuarioEditado.id = usuario.id
            usuarioEditado.password = usuario.password
            usuario.update(usuarioEditado).then((usuario) => {
                res.json({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rango: usuario.rango
                });
            }, (ex) => {
                res.status(400).send();
            });
        } else {
            res.status(404).send();
        }

    }, (ex) => {
        res.status(500).send();
    });
})
router.delete('/usuarios/:id', (req, res, next) => {
    var usuarioId = parseInt(req.params.id, 10);
    db.usuario.destroy({
        where: {
            id: usuarioId
        }

    }).then((filas) => {
        if (filas === 0) {
            res.status(404).send();
        } else {
            res.status(204).send();
        }

    }, () => {
        res.status(500).send();
    })
})
