const { openConnection, openConnectionWith } = require('../connection');
class SubEvento {
	/**
	 * 
	 * @param {number} ID_Subevento 
	 * @param {number} ID_Evento 
	 * @param {string} Descripcion 
	 * @param {Date} FechaInicio 
	 * @param {Date} FechaFin 
	 * @param {string} Nombre 
	 * @param {number} CupoMaximo 
	 * @param {string} Locacion 
	 */
	constructor(
		ID_Subevento, 
		ID_Evento, 
		Descripcion, 
		FechaInicio, 
		FechaFin, 
		Nombre, 
		CupoMaximo, 
		Locacion
	) {
		this.ID_Subevento = ID_Subevento;
		this.ID_Evento = ID_Evento;
		this.Descripcion = Descripcion;
		this.FechaInicio = FechaInicio;
		this.FechaFin = FechaFin;
		this.Nombre = Nombre;
		this.CupoMaximo = CupoMaximo;
		this.Locacion = Locacion;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getAllSubeventos(eventoId) {
		const db = await openConnection();
		const sql = ('SELECT * FROM SubEventos WHERE ID_Evento = ?');
		const [rows] = await db.query(sql, [eventoId]);
		await db.end();
		return rows;
	}

	/** 
	 * @param {Array} subeventos 
	 */
	static async addSubeventos(subeventos) {
		if (!subeventos) {
			return false;
		}

		const sqlInsert = `INSERT INTO SubEventos (ID_Subevento,ID_Evento,Descripcion,FechaInicio,FechaFin,Nombre,CupoMaximo,Locacion) VALUES(?)`;
		const subeventosArray = subeventos.map(subevento => [
			0,
			subevento.ID_Evento,
			subevento.descripcion,
			new Date(subevento.fechaInicio),
			new Date(subevento.fechaFin),
			subevento.nombre,
			subevento.cupoMaximo,
			subevento.locacion
		]);

		// const db = await openConnection();
		const db = await openConnectionWith("localhost", "root", "oneventos");

		const [result] = await db.query(sqlInsert, [subeventosArray]);
		await db.end();
		return result['affectedRows'] > 0;
	}



}

module.exports = {
	SubEvento
};