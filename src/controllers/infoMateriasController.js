const mongoose = require("mongoose");
const infoMaterias = require("../models/infoMaterias");

const rules = (req, res) => {
    res.status(200).send({
        "Instrução": "Para saber as informações do plano do professor, por favor insira o id da matéria"
    })
}

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
    const info = new infoMaterias({
        _id: mongoose.Schema.Types.ObjectId,
        descrição : req.body.descrição,
        tarefa: req.body.tarefa,
        dataProva: req.body.dataProva,
        materia: req.body.materia //coloca o id da materia
    })
    try{
        const newInfo = await info.save()
        res.json(newInfo)
    } catch (err){
        res.status(400).json({message: message.err})
    }
}

module.exports = {rules, getAll, getInfoById, createInfo}