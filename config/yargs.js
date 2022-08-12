const argv = require("yargs")
	.command("crear", "crea una tarea por hacer", {
		descripcion: {
			demand: true,
			alias: "d",
		},
	})
	.command("listar", "Muestra las tareas existentes", {
		lista: {
			demand: true,
			alias: "l",
		},
	})
	.command("actualizar", "Actualiza el estado de una tarea", {
		descripcion: {
			demand: true,
			alias: "d",
		},
		completado: {
			alias: "c",
			default: true,
		},
	})
	.help().argv;

module.exports = {
	argv,
};
