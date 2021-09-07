const mongoose = require("mongoose");
const Professores = require("../models/professores")
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET

const getAll = async (req, res) => {
  const professores = await Professores.find().populate('materia')
  res.status(200).json(professores)
}

const createProfessor = async (req, res) => {

  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1]

  if(authHeader == undefined){
    return res.status(403).send({message: "Por gentileza informar autorização"})
  }

  jwt.verify(token, SECRET, async (err) => {
    if(err){
      res.status(403).send({message: "token inválido", err})
    }
    const professor = await Professores.find()
  })

  const professor = new Professores({

    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    disponibilidade: req.body.disponibilidade,
    skype: req.body.skype,
    materia: req.body.materia 
  })
  try {
    const novoProfessor = await professor.save()
    res.status(201).json(novoProfessor)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const deleteProfessor = async (req, res) => {
  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1]

  if(!token){
    return res.status(403).send({message: "Por gentileza informar autorização"})
  }

  jwt.verify(token, SECRET, async (err)=> {

    if(err){
      res.status(403).send({message: "Token inválido"})
    }

      const professor = await Professores.find()
      res.json(professor)
  })

  try{
    const professor = await Professores.findById(req.params.id)
    if(professor == null){
      return res.status(404).json({message: "Professor não encontrado"})
    }

    professor.remove()
    res.status(200).json({message: "Professor removido com sucesso"})

  } catch(err){
    res.status(500).json({message: "Erro inexperado", err})
  }
}

module.exports = {
    getAll,
    createProfessor,
    deleteProfessor
}