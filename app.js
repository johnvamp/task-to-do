const argv = require("./config/yargs").argv;
const porhacer = require("./tareas-por-hacer/por-hacer");
let command = argv._[0];

switch (command) {
	case "crear":
		let tarea = porhacer.crear(argv.descripcion);
		console.log(tarea);
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
