const express = require("express");
const router = express.Router();
const controller = require("../controllers/materiasControllers");

router.get("/", controller.start); 
router.get("/materia", controller.getAll) // OK 08/09 21:23
router.get("/materia/:materia", controller.getByMateria); 
router.get("/id/:id", controller.getById) 
router.get("/ano/:ano", controller.getByAno) 
router.delete("/:id", controller.deleteById) //OK 08/09 21:23 (até a mensagem de deletada com sucesso)
router.post('/create', controller.createMateria) //OK 08/09 21:23

module.exports = router;