const express = require("express");
const router = express.Router();
const controller = require("../controllers/infoMateriasController")

router.get('/', controller.rules)
router.get('/todas', controller.getAll)
router.post('/create', controller.createInfo)
router.delete('/id/:id', controller.deleteById)

module.exports = router;