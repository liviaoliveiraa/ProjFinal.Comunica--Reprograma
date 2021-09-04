const express = require("express");
const router = express.Router();
const controller = require("../controllers/materiasControllers");

router.get("/", controller.start); //ok
router.get("/disciplina", controller.getAll) //ok
router.get("/disciplina/:disciplina", controller.getByDisciplina); //ok 
router.post('/create', controller.createMateria)//PRECISO VERIFICAR POIS HAVERA ALTERAÇOES
router.get("/periodo/:periodo", controller.getByPeriodo); //ok
router.get("/id/:id", controller.getById) //ok 
router.delete("/:id", controller.deleteById)//ok

module.exports = router;