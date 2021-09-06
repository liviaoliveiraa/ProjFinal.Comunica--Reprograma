const mongoose = require("mongoose");
const infoMaterias = require("../models/infoMaterias");

const getInfoById = async (req, res) => {
    const requestedId = req.params.id;
    const filteredId = await infoMaterias.find({id: requestedId})

    if(filteredId){
        res.json(filteredId)
    } else {
        res.status(404).send({message: "Matéria não encontrada"})
    }
}

module.exports = {getInfoById}