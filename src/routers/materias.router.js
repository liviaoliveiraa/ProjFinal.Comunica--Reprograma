const express = require("express");
const router = express.Router();
const controller = require("../controllers/materiasControllers");

router.get("/", controller.start); 
router.get("/materia", controller.getAll);
router.get("/materia/:materia", controller.getByMateria); 
router.get("/id/:id", controller.getById); 
router.get("/ano/:ano", controller.getByAno);
router.delete("/:id", controller.deleteById);
router.post('/create', controller.createMateria);

module.exports = router;