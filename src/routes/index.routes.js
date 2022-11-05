const { Router } = require("express");
const router = Router();

const {
	createProfesor,
	readProfesor,
	updateProfesor,
	deleteProfesor,
	renderCrear,
	renderUpdate,
} = require("../controllers/profesor.controller");

//Crear
router.get("/profesor/crear", renderCrear);
router.post("/profesor/crear", createProfesor);
//Listar
router.get("/", readProfesor);
//Actualizar
router.put("/profesor/actualizar/:id", updateProfesor);
router.get("/profesor/actualizar/:id", renderUpdate);
//Eliminar
router.delete("/:id", deleteProfesor);

module.exports = router;
