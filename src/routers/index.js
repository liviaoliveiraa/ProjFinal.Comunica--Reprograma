const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        "Message": "Bem vindo ao portal do alunx - Malhação",
        "Música": "Vou te levar, iéééé. Te levar daqui iêêê",
        "Objetivo": "Tornar um ambiente onde a comunicação entre professor e aluno seja mais clara e eficiente."
    })
})

module.exports = router;

