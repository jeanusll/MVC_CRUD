const Profesor = require("../model/profesor.model");

const profesorCtrl = {};

profesorCtrl.renderCrear = (req, res) => {
	res.render("profesor-create");
};

//create
profesorCtrl.createProfesor = async (req, res) => {
	const { telefono, nombre, apellidos, despacho, grado } = req.body;

	const prof = await new Profesor({
		telefono_profesor: telefono,
		nombre_profesor: nombre,
		apellido_profesor: apellidos,
		despacho_profesor: despacho,
		grado_profesor: grado,
	});

	prof.save();

	res.redirect("/");
};

//read
profesorCtrl.readProfesor = async (req, res) => {
	const profesores = await Profesor.find();
	res.render("profesor", { profesores });
};

profesorCtrl.renderUpdate = async (req, res) => {
	const prof = await Profesor.findById(req.params.id);

	res.render("profesor-update", { prof });
};

//update
profesorCtrl.updateProfesor = async (req, res, next) => {
	const { telefono, nombre, apellido, despacho, grado } = req.body;
	var prof = await Profesor.findById(req.params.id);

	prof.telefono_profesor = telefono;
	prof.nombre_profesor = nombre;
	prof.apellido_profesor = apellido;
	prof.despacho_profesor = despacho;
	prof.grado_profesor = grado;

	prof.save();
	next();

	res.redirect("/");
};

//delete
profesorCtrl.deleteProfesor = async (req, res) => {
	await Profesor.findByIdAndDelete(req.params.id);
	res.redirect("/");
};

module.exports = profesorCtrl;
