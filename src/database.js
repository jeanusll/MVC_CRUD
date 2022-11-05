const mongoose = require("mongoose");
const { mongodb } = require("./key");
const start = async () => {
	await mongoose
		.connect(mongodb.URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(console.log("Base de datos conectada a: ", mongodb.URI))
		.catch((err) => console.log(`Error al conectar la base de datos: ${err}`));
};
start();
