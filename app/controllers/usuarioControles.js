var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    authMiddleware = require('.././middleware/auth');

module.exports = app => {
    app.use('/', authMiddleware.adicionarHeaders, router);
}

router.get('/usuarios', (req, res, next) => {
    db.usuario.findAll({ attributes: ['id', 'nombre', 'email'] }).then((usuarios) => {
        res.json(usuarios);
    }, (ex) => {
        res.status(500).send();
    });
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
router.delete('/usuarios/:id', (req , res , next)=>{
    var usuarioId = parseInt(req.params.id, 10 );
    db.usuario.destroy({
        where:{
            id : usuarioId
        }

    }).then((filas)=>{
        if(filas ===0){
            res.status(404).send();
        }else{
            res.status(204).send();
        }

    }, ()=>{
        res.status(500).send();
    })
})
