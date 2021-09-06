const express = require("express");
const router = express.Router();
const controller = require("../controllers/infoMateriasController")

router.get('/:id', controller.getInfoById)

module.exports = router;