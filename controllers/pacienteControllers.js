const Paciente = require('../models/paciente');

//crear usuario
exports.nuevoCliete = async(req, res, next) => {

    //crar objeto de paciente
    let body = req.body;


    if (body.nombre == undefined || body.nombre == '') {
        return res.json({ mensaje: 'error' });
    }

    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({ mensaje: 'Hola mundo' });
    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerClientes = async(req, res, next) => {

    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerCliente = async(req, res, next) => {

    try {
        const pacientes = await Paciente.findById(req.params.id);
        res.json({
            ok: true,
            usuario: pacientes
        });
    } catch (error) {
        console.log(error);
        next();
    }

}


exports.editarUsuario = async(req, res, next) => {

    try {

        const paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(paciente);

    } catch (errror) {

        console.log(errror);
        next();

    }

}

exports.eliminarUsuario = async(req, res, next) => {

    try {

        const paciente = await Paciente.findOneAndDelete({ _id: req.params.id });
        res.json({
            ok: true,
            mensaje: 'el usuario fue eliminado correctamente'
        });
        res.json(paciente);

    } catch (errror) {

        console.log(errror);
        next();

    }

}