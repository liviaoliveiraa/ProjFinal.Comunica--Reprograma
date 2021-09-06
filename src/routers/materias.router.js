const express = require("express");
const router = express.Router();
const controller = require("../controllers/materiasControllers");

router.get("/", controller.start); //ok
router.get("/materia", controller.getAll) //ok
router.get("/materia/:materia", controller.getByMateria); //ok 
router.get("/periodo/:periodo", controller.getByPeriodo); //ok
router.get("/id/:id", controller.getById) //ok 
router.get("/ano/:ano", controller.getByAno)
router.delete("/:id", controller.deleteById)//ok
router.post('/create', controller.createMateria)//ok

module.exports = router;