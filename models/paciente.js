const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const pacienteShema = new Shema({
    nombre: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Usuarios', pacienteShema);