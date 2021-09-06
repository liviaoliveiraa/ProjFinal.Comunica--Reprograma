const express = require("express");
const router = express.Router();
const controller = require("../controllers/materiasControllers");

router.get("/", controller.start); //ok
router.get("/materia", controller.getAll) //ok
router.get("/materia/:materia", controller.getByMateria); 
router.post('/create', controller.createMateria)//ok
router.get("/periodo/:periodo", controller.getByPeriodo); //ok
router.get("/materia/:id", controller.getById) 
router.get("/ano/:ano", controller.getByAno)
router.delete("/:id", controller.deleteById)//ok

module.exports = router;