const mongoose = require("mongoose");

const materiasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ano: {type: String, require: true},
    materia: {type: String, require: true},
    tema: {type: String, require: true},
    preparacao: {type: String, require: true},
    diaEHora: {type: String, require: true}
}, {
    versionKey: false
});

const materias = mongoose.model('materias', materiasSchema);

module.exports = materias;

