const express = require('express')
const router = express.Router()
const controller = require("../controllers/professoresController")

router.get('/', controller.getAll) //ok
router.post('/', controller.createProfessor) //ok
router.delete('/:id', controller.deleteProfessor)

module.exports = router;