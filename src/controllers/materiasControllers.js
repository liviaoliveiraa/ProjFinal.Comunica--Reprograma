const mongoose = require("mongoose");
const Materias = require("../models/materias")

const start = (req, res) => {
    res.status(200).send({
        "Instrução": "Para verificar o plano de aula dos professores separamos por categoria de acordo com cada matéria",
        "Instrução 2": "Caso queira ver as matérias por bimestre realizar o filtro"
    });
}

const getAll = async (req, res) => {
    const materias = await Materias.find()
    res.status(200).json(materias)
}

const getByMateria = async (req, res) => {
    const requestedMateria = req.params.materia;
    const filteredMateria = await Materias.find({materia: requestedMateria});

    if(filteredMateria){
        res.json(filteredMateria)
    } else {
        res.status(404).send() //nao entra aqui
    }
    
};

const getByPeriodo = async (req, res) => {
    const requestedPeriodo = req.params.periodo
    const filteredPeriodo = await Materias.find({periodo: requestedPeriodo})

    if(filteredPeriodo){
        res.status(200).json(filteredPeriodo)
    } else {
        res.status(404).send() //nao entra aqui
    }
}

const getByAno = async (req, res) => {
    const requestedAno = req.params.ano
    const filteredAno = await Materias.find({ano: requestedAno})

    if(filteredAno){
        res.status(200).json(filteredAno)
    } else {
        res.status(404).send({message: "Ano não encontrado."})
    }
}

const getById = (req, res) => {
    const requestedId = req.params.id;
    Materias.findOne({id: requestedId}, function (err, estruturasFounded){
        if(err){
            res.staus(500).send({menssagem: err.message})
        } else {
            if(estruturasFounded){
                res.status(200).send(estruturasFounded)
            } else {
                res.status(204)
            }
        }
    })
    
}

const createMateria = async (req, res) => {
    const materia = new Materias({
        _id: new mongoose.Types.ObjectId(),
        ano: req.body.ano,
        materia: req.body.materia,
        tema: req.body.tema,
        preparacao: req.body.preparacao,
        diaEHora: req.body.diaEHora
    })

    //POR ENQUANTO NAO TEM COMO ADD CASO EXISTA, POIS NAO TEM UM PARAMETRO ESPECIFICO
    //const modelExistente = await Models.findOne({materia: req.body.materia})
    //if(modelExistente){
        //return res.status(409).json({error: 'materia já cadastrada'})
    //}
    try{
        const novaMateria = await materia.save()
        res.json(novaMateria)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

//Ta funcionando
const deleteById = async (req, res) => {
    try{
        const materia = await Materias.findById(req.params.id)
        if(materia == null){
            return res.status(404).json({message: "ID não encontrada"})
        }

        materia.remove()
        res.status(200).json({message: "ID da matéria informado foi deletada com sucesso."}) 

    } catch (err){
        res.status(500).json({message: message.err})
    }   
}


module.exports = {start, getAll, createMateria, getByMateria, getByPeriodo, getById, deleteById, getByAno}

