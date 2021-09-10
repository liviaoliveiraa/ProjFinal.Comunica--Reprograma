const mongoose = require("mongoose");
const infoMaterias = require("../models/infoMaterias");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET

const rules = (req, res) => {
    res.status(200).send({
        "Instrução": "Bem vindo ao portal de plano de ensino do professor."
    })
}

const getAll = async (req, res) => {
    const infoMateria = await infoMaterias.find().populate('materia')
    res.status(200).json(infoMateria)
}

const createInfo = async (req, res) => {
    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]

    if(!token){
        return res.status(403).send({message: "Por gentileza informar autorização"})
    }

    jwt.verify(token, SECRET, async (err) => {
        if(err){
            res.status(403).send({message: "token inválido", err})
        }
        const infoMateria = await infoMaterias.find()
    })

    const info = new infoMaterias({
        _id: new mongoose.Types.ObjectId(),
        descricao : req.body.descricao,
        tarefa: req.body.tarefa,
        dataProva: req.body.dataProva,
        materia: req.body.materia 
    })

    try{

        const newInfo = await info.save()
        res.json(newInfo)

    } catch (err){
        res.status(400).json({message: "Erro inexperado", err})
    }
}

const deleteById = async (req, res) => {

    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]

    if(!token){
        return res.status(403).send({message: "Por gentileza informar autorização"})
    }

    jwt.verify(token, SECRET, async (err)=> {
        if(err){
        res.status(403).send({message: "Token inválido"})
        }

        const infoMateria = await infoMaterias.find()
        res.json(infoMateria)
    })    

    try{
        const infmateria = await infoMaterias.findById(req.params.id)
        if(infmateria == null){
            return res.status(404).json({message: "ID não encontrada"})
        }

        infmateria.remove()
        res.status(200).json({message: "ID da matéria informado foi deletada com sucesso."}) 

    } catch (err){
        res.status(500).json({message: message.err})
    }   
}

module.exports = {rules, getAll, createInfo, deleteById}