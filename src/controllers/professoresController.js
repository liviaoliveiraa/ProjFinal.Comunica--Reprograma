const mongoose = require("mongoose");
const Professores = require("../models/professores")

//Pega todos os professores
const getAll = async (req, res) => {
    const professores = await Professores.find().populate('materia')
    res.status(200).json(professores)
}

//cria um professor
const createProfessor = async (req, res) => {

  const professor = new Professores({

    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    disponibilidade: req.body.disponibilidade,
    skype: req.body.skype,
    materia: req.body.materia //coloca o id da materia
  })
  try {
    const novoProfessor = await professor.save()
    res.status(201).json(novoProfessor)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

//deletar um professor
const deleteProfessor = async (req, res) => {
  try{
    const professor = await Professores.findById(req.params.id)
    if(professor == null){
      return res.status(404).json({message: "Professor não encontrado"})
    }

    professor.remove()
    res.status(200).json({message: "Professor removido com sucesso"})

  } catch(err){
    res.status(500).json({message:err.message})
  }
}

module.exports = {
    getAll,
    createProfessor,
    deleteProfessor
}