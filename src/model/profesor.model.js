const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profesorSchema = new Schema({
	telefono_profesor: String,
	nombre_profesor: String,
	apellido_profesor: String,
	despacho_profesor: String,
	grado_profesor: String,
});

const Profesor = mongoose.model("Profesor", profesorSchema);

module.exports = Profesor;
