const express = require('express')
const router = express.Router()
const controller = require("../controllers/professoresController")

router.get('/', controller.getAll) 
router.post('/', controller.createProfessor) 
router.delete('/:id', controller.deleteProfessor)


module.exports = router;