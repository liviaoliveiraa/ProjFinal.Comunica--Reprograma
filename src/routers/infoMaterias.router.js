const express = require("express");
const router = express.Router();
const controller = require("../controllers/infoMateriasController")

router.get('/', controller.rules)
router.get('/todas', controller.getAll)
//router.get('/id/:id', controller.getInfoById)
//router.get('/materia/:id', controller.getInfoByMateria)
router.post('/create', controller.createInfo)
router.delete('/:id', controller.deleteById)

module.exports = router;