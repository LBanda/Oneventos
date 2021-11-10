const { openConnection } = require('../connection');
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

	static async getAllSubeventos() {
		const db = await openConnection();
		const [rows] = await db.query('SELECT ID_Subevento, Nombre, Descripcion FROM SubEventos');
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del subevento
	 */
	 static async getSubeventoById(id) {
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT * FROM subeventos WHERE ID_Subevento = ?', [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del suevento
	 */
	 static async editSubevento(subevento) {
		const {
			Nombre,
			Descripcion,
			FechaInicio,
			FechaFin, 
			CupoMaximo,
			Locacion
		} = subevento
	   
	   const sql = `UPDATE Subeventos 
				   SET Nombre = ?, 
				   Descripcion = ?, 
				   FechaInicio = ?, 
				   FechaFin = ?, 
				   CupoMaximo = ?,
				   Locacion = ? 
				   WHERE ID_Empleado = ?`;

	   const insertValues = [
		   0,
		   0,
		   Nombre,
		   Descripcion,
		   FechaInicio,
		   FechaFin,
		   CupoMaximo,
		   Locacion 
	   ]
	   const db = await openConnection();
	   const [rows] = await db.query(sql, insertValues);
	   await db.end();
	   return rows['affectedRows'] > 0;
   }

}

module.exports = {
	SubEvento
};