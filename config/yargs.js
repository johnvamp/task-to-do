let comandos = {
	crear: {
		demand: true,
		alias: "b",
	},
	listar: {
		demand: true,
		alias: "l",
	},
	actualizar: {
		demand: true,
		alias: "a",
	},
};

const argv = require("yargs")
	.command("crear", "crea un +a tarea por hacer", comandos)
	.command("listar", "Muestra las tareas existentes", comandos)
	.command("actualizar", "Actualiza el estado de una tarea").argv;

module.exports = {
	argv,
};
