const { openConnection } = require('../connection');
class Evento {
	/**
     * 
     * @param {number} ID_Evento 
     * @param {string} Nombre 
     * @param {string} Descripcion 
     * @param {number} CupoMaximo 
     * @param {Date} FechaInicio 
     * @param {Date} FechaFin 
     * @param {string} Locacion 
     * @param {string} Imagen 
     * @param {number} MaximoInvitados 
     */
	constructor(ID_Evento, Nombre, Descripcion, CupoMaximo, FechaInicio, FechaFin, Locacion, Imagen, MaximoInvitados) {
		this.ID_Evento = ID_Evento;
		this.Nombre = Nombre;
		this.Descripcion = Descripcion;
		this.CupoMaximo = CupoMaximo;
		this.FechaInicio = FechaInicio;
		this.FechaFin = FechaFin;
		this.Locacion = Locacion;
		this.Imagen = Imagen;
		this.MaximoInvitados = MaximoInvitados;
	}

	static async getAllEventos() {
		const db = await openConnection();
		const [ rows ] = await db.query('SELECT ID_Evento, Nombre, Descripcion FROM Eventos');
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getEventoById(id) {
		console.log("ID", id)
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT * FROM Eventos WHERE ID_Evento = ?', [id]);
		await db.end();
		return rows;
	}

	static async addEvento(nombre, descripcion, caupoMaximo, fechaInicio, fechaFin, locacion, imagen, maximoInvitados) {
		const sqlInsert =
			'INSERT INTO Eventos (id, Nombre, Descripcion, CupoMaximo, FechaInicio, FechaFin, Locacion, Imagen, MaximoInvitados) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
		const insertValues = [
			0,
			nombre,
			descripcion,
			caupoMaximo,
			fechaInicio,
			fechaFin,
			locacion,
			imagen,
			maximoInvitados
		];
		const db = await openConnection();

		const [ result ] = await db.query(sqlInsert, insertValues);
		await db.end();

		return result['affectedRows'] > 0;
	}
}

module.exports = {
	Evento
};
