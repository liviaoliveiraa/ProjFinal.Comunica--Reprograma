const express = require("express");
const router = express.Router();
const controller = require("../controllers/infoMateriasController")

router.get('/', controller.rules)
router.get('/teste', controller.getAll)//quero tirar
router.get('/:id', controller.getInfoById)
router.post('/create', controller.createInfo)

module.exports = router;