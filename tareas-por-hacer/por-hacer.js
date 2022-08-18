const fs = require("fs");
let listadoPorHacer = [];

const guardarDb = () => {
	return new Promise((resolve, reject) => {
		let data = JSON.stringify(listadoPorHacer);
		fs.writeFile("db/data.json", data, (err) => {
			if (err) reject("a ocurrido un error al guardar la tarea", err);
			else {
				resolve(data);
			}
		});
	});
};

const cargarDb = () => {
	try {
		listadoPorHacer = require("../db/data.json");
	} catch (error) {
		listadoPorHacer = [];
	}
};

const crear = (descripcion) => {
	cargarDb();
	let porHacer = {
		descripcion,
		completado: false,
	};
	listadoPorHacer.push(porHacer);
	guardarDb();
	return porHacer;
};

module.exports = {
	crear,
};
