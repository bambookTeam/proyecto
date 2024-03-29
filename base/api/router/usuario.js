'use strict';

const nodeMailer = require('nodemailer');
const express = require('express'),
    router = express.Router(),
    Usuario = require('../models/usuario.model');

router.param("_id", function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bambooks.team@gmail.com',
        pass: '#bambook123'
    }
});

router.post('/registrar_usuario', function (req, res) {
    let body = req.body;

    console.log("registro de usuario activado");
    console.log(req.body);

    let nuevo_usuario = new Usuario({
        primerNombre: body.primerNombre,
        segundoNombre: body.segundoNombre,
        primerApellido: body.primerApellido,
        segundoApellido: body.segundoApellido,
        sexo: body.sexo,
        identificacion: body.identificacion,
        correo: body.correo,

        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,

        direccion: body.direccion,
        nombreUsuario: body.nombreUsuario,
        contrasena: body.contrasena,
        tipo: body.tipo,
        contador: body.contador,
        avatar: body.avatar,
        estado: body.estado

    });

    nuevo_usuario.save(function (err, usuarioDB) {

        if (err) {
            console.log("error registro de usuario");
            console.log(err);
            return res.status(500).json(
                {
                    success: false,
                    msj: 'El usuario no se pudo guardar',
                    err
                });
        } else {

            let mailOptions = {

                from: 'bambooks.team@gmail.com',
                to: nuevo_usuario.correo,
                subject: 'Bienvenido a Bambooks',
                text: 'Usar este pin para iniciar sesion: ' + body.contrasena + 'Bienvenido!'


            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {

                    console.log(error);
                } else {

                    console.log('Correo enviado')
                }


            });
            res.json(
                {
                    success: true,
                    msj: 'El usuario se guardó con éxito'
                }
            );
            console.log("sirvió");
            // console.log(res);
        }
    });

});

router.post('/registrar_admin_libreria', function (req, res) {
    let body = req.body;


    let nuevo_usuario = new Usuario({

        identificacion: body.identificacion,
        primerNombre: body.primerNombre,
        segundoNombre: body.segundoNombre,
        primerApellido: body.primerApellido,
        segundoApellido: body.segundoApellido,
        sexo: body.sexo,
        correo: body.correo,

        provincia: body.provincia,
        canton: body.canton,
        distrito: body.distrito,

        nombreUsuario: body.nombreUsuario,
        contrasena: body.contrasena,
        tipo: body.tipo,
        contador: body.contador,
        estado: body.estado,
        avatar: body.avatar
    });

    nuevo_usuario.save(function (err, usuarioDB) {

        if (err) {
            console.log('Error registro Admin Librería')
            console.log(err)

            return res.status(500).json(
                {
                    success: false,
                    msj: 'El usuario no se pudo guardar',
                    err
                });
        } else {
            console.log('funcion guardar usuario');
            let mailOptions = {

                from: 'bambooks.team@gmail.com',
                to: nuevo_usuario.correo,
                subject: 'Bienvenido a Bambooks',
                text: 'Bienvenido \n Usar este pin para iniciar sesion: ' + body.contrasena


            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {

                    console.log(error);
                } else {

                    console.log('Correo enviado')
                }


            });
            res.json(
                {
                    success: true,
                    msj: 'El usuario se guardó con éxito'
                }
            );
        }
    });

});

router.post('/modificar-usuario', function (req, res) {
    let body = req.body;
    console.log("modificar usuario ejecutado");
    console.log(body);

    Usuario.findByIdAndUpdate(body._id, {
        $set: req.body
    },
        function (error) {

            if (error) {
                console.log("error");
                console.log(error);
                res.json({ success: false, msg: 'No se pudo habilitar el usuario' });
            } else {
                console.log("conoce");
                res.json({ success: true, msg: 'El usuario se habilitó con éxito' });
            }
        }
    )

});
router.post('/deshabilitar-usuario', function (req, res) {
    let body = req.body;

    Usuario.findByIdAndUpdate(body._id, {
        $set: {
            estado: 0
        }
    },
        function (error) {
            if (error) {
                console.log("error")
                console.log(error)
                res.json({ success: false, msg: 'No se pudo deshabilitar el usuario' });
            } else {
                console.log("sirve")
                res.json({ success: true, msg: 'El usuario se deshabilitó con éxito' });
            }
        }
    )
});

router.post('/habilitar-usuario', function (req, res) {
    let body = req.body;

    Usuario.findByIdAndUpdate(body._id, {
        $set: {
            estado: 1
        }
    },
        function (error) {

            if (error) {
                res.json({ success: false, msg: 'No se pudo habilitar el usuario' });
            } else {
                res.json({ success: true, msg: 'El usuario se habilitó con éxito' });
            }
        }
    )
});


//iniciar-sesion
router.post('/validar_credenciales', function (req, res) {
    Usuario.findOne({ correo: req.body.correo }).then(
        function (usuario) {
            if (usuario) {
                if (usuario.contrasena == req.body.contrasena) {
                    res.json({
                        success: true,
                        usuario: usuario
                    })
                } else {
                    res.json({
                        success: false,
                        usuario: usuario
                    })
                }
            } else {
                res.json({
                    success: false,
                    usuario: usuario
                })
            }
        }
    )
})

router.post('/validar_pin', function (req, res) {
    Usuario.findOne({ correo: req.body.correo }).then(
        function (usuario) {

            if (usuario) {

                if (usuario.pin == req.body.contrasena) {
                    res.json({
                        success: true,
                        usuario: usuario
                    })

                } else {
                    res.json({
                        success: false,
                        usuario: usuario

                    })
                }

            } else {

                res.json({
                    success: false,
                    usuario: usuario

                })

            }



        }

    )
})

router.get('/listar-usuarios', function (req, res) {
    Usuario.find(function (err, usuariosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los usuarios',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_usuarios: usuariosBD
            });
        }
    })
});

router.get('/buscar-usuario-id/:_id', function (req, res) {
    Usuario.findById(req.body._id, function (err, usuarioBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún usuario con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                usuario: usuarioBD
            });
        }
    })
});

router.post('/buscar-usuario-perfil', function (req, res) {
    Usuario.findById(req.body._id, function (err, usuarioBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún usuario con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                usuario: usuarioBD
            });
        }
    })
});

router.post('/crear-contrasenna', function (req, res) {
    Usuario.updateOne({ _id: req.body._id }, { $set: { contrasena: req.body.contrasena } },

        function (error) {
            if (error) {
                return res.status(500).json({
                    success: false,
                    msj: 'No se pudo crear la contraseña',
                    err
                });

            } else {

                return res.status(400).json({
                    success: true,
                    msj: 'Se pudo crear la contraseña correctamente'
                });
            }
        }



    )

});

router.post('/actualizar-contador', function (req, res) {
    console.log("inicio funcion  contador");
    Usuario.updateOne({ _id: req.body._id }, { $set: { contador: req.body.contador } },
        function (error) {
            if (error) {
                return res.status(500).json({
                    success: false,
                    msj: 'No se pudo actualizar el contador',
                    error
                });

                console.log("error contador");
                console.log(error);

            } else {

                return res.status(200).json({
                    success: true,
                    msj: 'El contador se actualizo correctamente'

                });
                console.log("actualizar contador");
                console.log("Se ejecuta correctamente ");
                console.log(res);

            }

        }


    )
    // $push: {
    //     'contador': req.body.contador
    // }

});

router.post('/recuperar-contrasena', function (req, res) {

    Usuario.updateOne({ _id: req.body._id }, { $set: { contrasena: req.body.contrasena } },

        function (error) {

            if (error) {
                return res.status(500).json({
                    success: false,
                    msj: 'No se pudo restablecer la contrasena',
                    error

                });

            } else {

                let mailOptions = {

                    from: 'bambooks.team@gmail.com',
                    to: req.body.correo,
                    subject: 'Bienvenido a Bambooks',
                    text: ' Se ha restablecido su contraseña utilice este pin para iniciar sesión: ' + req.body.contrasena


                };

                transporter.sendMail(mailOptions, function (error, info) {

                    if (error) {

                        console.log(error);
                    } else {

                        console.log('Se ha restablecido la nueva contraseña')
                    }

                });


                return res.status(400).json({
                    success: true,
                    msj: 'Se restablecio la contrasenna'


                });



            }


        }


    )

});

router.post('/eliminar-usuario', function (req, res) {
    let body = req.body;

    Usuario.findByIdAndRemove(body._id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo borrar el usuario' });
            } else {
                res.json({ success: true, msg: 'El usuario se borró con éxito' });
            }
        }
    )
});

router.post('/suscribirse-sucursal', function (req, res) {
    let body = req.body;

    if (body.ofertas == "false") {  
        let mailOptions = {

            from: 'bambooks.team@gmail.com',
            to: body.correo,
            subject: 'Suscripción a una sucursal',
            text: body.text,
           

        };
        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {

                console.log(error);
            } else {

                console.log('Se ha restablecido la nueva contraseña')
            }
        });
    } else {
        var arrayImageSources = req.body.listaImageSources.split(",");

        let array = [];
        for (let index = 0; index < arrayImageSources.length; index++) {

            let arrayPush = {
                filename: 'oferta-' + (index + 1) + '.png',
                path: arrayImageSources[index]
            }
            array.push(arrayPush);

        }

        console.log(array);
        let mailOptions = {

            from: 'bambooks.team@gmail.com',
            to: body.correo,
            subject: 'Suscripción a una sucursal',
            text: body.text,
            attachments: array

        };
        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {

                console.log(error);
            } else {

                console.log('Se ha restablecido la nueva contraseña')
            }
        });
    }


    return res.status(400).json({
        success: true,
        msj: 'Se restablecio la contrasenna'
    });





});

module.exports = router;
