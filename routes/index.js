const express = require('express');
const pacienteteControllers = require('../controllers/pacienteControllers');

const router = express.Router();

module.exports = function() {
    ///agrega nuevos pacientes


    router.get('/usuarios',
        pacienteteControllers.obtenerClientes
    );

    router.get('/usuarios/:id',
        pacienteteControllers.obtenerCliente
    );

    router.post('/usuarios',
        pacienteteControllers.nuevoCliete
    );

    //actualizar
    router.put('/usuarios/:id',
        pacienteteControllers.editarUsuario
    )

    router.delete('/usuarios/:id',
        pacienteteControllers.eliminarUsuario
    )


    return router;

}