const mongoose = require("mongoose");
const infoMaterias = require("../models/infoMaterias");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const rules = (req, res) => {
    res.status(200).send({
        "Instrução": "Para saber as informações do plano do professor, por favor insira o id da matéria"
    })
}

//teste - nao quero
const getAll = async (req, res) => {
    const infoMateria = await infoMaterias.find().populate('materia')
    res.status(200).json(infoMateria)
}

const getInfoById = async (req, res) => {
    const requestedId = req.params.id;
    const filteredId = await infoMaterias.find({id: requestedId})

    if(filteredId){
        res.json(filteredId)
    } else {
        res.status(404).send({message: "Matéria não encontrada"})
    }
}

const createInfo = async (req, res) => {
    const authHeader = req.get('authorization');
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

module.exports = {rules, getAll, getInfoById, createInfo}