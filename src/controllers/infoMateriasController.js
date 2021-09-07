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
const getAll =  (req, res) => {
    infoMaterias.find(function(err, materiasFounded){
        if(err){
            res.status(500).send({message: err.message})
        } else {
            if(materiasFounded && materiasFounded.length > 0){
                res.status(200).send(materiasFounded)
            } else {
                res.status(204).send()
            }
        }
    
    })
    
    
    
    
    //const infoMateria = await infoMaterias.find().populate('materia')
    //res.status(200).json(infoMaterias)
}

const getInfoById = async (req, res) => {

    const requestedMateria = req.params.materia;
    console.log(requestedMateria)
    infoMaterias.findOne({materia: requestedMateria}, function (err, idFounded){
        if(err){
            res.staus(500).send({menssagem: err.message})
        } else {
            if(idFounded){
                res.status(200).send(idFounded)
            } else {
                res.status(204)
            }
        }
    })
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