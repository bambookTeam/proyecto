'use strict';

const express = require('express'),
    router = express.Router(),
    Chat = require('../models/chat.model');


router.post('/crear-chat', function (req, res) {
    let body = req.body;

    let nuevo_chat = new Chat({
        idClub: body.idClub,
        mensajes: [{
            idSender: body.idSender,
            descripcion: body.descripcion,
            hora: body.hora
        }]
    });

    nuevo_chat.save(
        function (err, chatDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El chat no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El chat se guardó con éxito'
                });
            }
        }
    );
});
router.get('/listar-chats', function (req, res) {
    Chat.find(function (err, chatDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los chats',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_chats: chatDB
            });
        }
    })
});


router.post('/agregar-mensaje', function (req, res) {
    
    Chat.update({ _id: req.body._id }, {
        $push: {
            'mensajes': {
                idSender: req.body.idSender,
                descripcion: req.body.descripcion,
                hora: req.body.hora
            }
        }
    },
        function (error) {
            if (error) {
                return res.status(400).json({
                    success: false,
                    msj: 'No se pudo agregar el mensaje',
                    err
                });
            } else {
                return res.json({
                    success: true,
                    msj: 'Se agregó correctamente el mensaje'
                });
            }
        }
    )
})

module.exports = router;