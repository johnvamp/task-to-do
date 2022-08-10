const argv = require("./config/yargs").argv;

let commmand = argv._[0];

switch (commmand) {
	case "crear":
		console.log("Crea una tarea");
		break;
	case "listar":
		console.log("Lista todas las tareas");
		break;
	case "actualizar":
		console.log("Actualiza una tarea");
		break;
	default:
		console.log("comando no reconocido");
}
