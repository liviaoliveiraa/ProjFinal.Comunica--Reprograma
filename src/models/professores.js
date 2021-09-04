const mongoose = require("mongoose");

const professoresSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  nome: {type: String, required: true},
  telefone: {type: String, required: true},
  email: {type: String, required: true},
  disponibilidade: {type: String, required: true},
  skype: {type: String, required: true},
  materia : {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'materias'}
});

module.exports = mongoose.model('professores', professoresSchema);