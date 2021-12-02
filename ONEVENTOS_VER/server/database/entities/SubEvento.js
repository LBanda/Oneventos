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
	 * @param {number} id El ID del subevento
	 */
	static async getAllSubeventos(eventoId) {
		const db = await openConnection();
		const sql = ('SELECT * FROM SubEventos WHERE ID_Evento = ?');
		const [rows] = await db.query(sql, [eventoId]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del subevento
	 */
	static async getSubeventoById(id) {
		const db = await openConnection();
		const [[rows]] = await db.query('SELECT * FROM subeventos WHERE ID_Subevento = ?', [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del subevento
	 */
	static async getParticipantesBySubeventoId(id) {
		const db = await openConnection();
		const [[rows]] = await db.query("SELECT nombre,apellido FROM `empleados-subeventos` as Ev, empleados as Em WHERE Ev.ID_Empleado = Em.ID_Empleado AND ID_Subevento = ?", [id]);
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
	/** 
	 * @param {Array} subeventos 
	 */
	static async addSubeventos(subeventos) {
		if (!subeventos || !subeventos.length) {
			return false;
		}

		const sqlInsert = `INSERT INTO SubEventos (ID_Subevento,ID_Evento,Descripcion,FechaInicio,FechaFin,Nombre,CupoMaximo,Locacion) VALUES ?`;
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

	
	/** 
		* @param {number} id El ID del subevento
		*/
		static async deleteSubeventoById(id) {
			const db = await openConnection();
			const [ rows ] = await db.query('DELETE FROM subeventos WHERE ID_Subevento = ?', [id]);
			await db.end();
			return rows;
		}


	/**
	 * @param {Array} subevento El ID del suevento
	 */
	/*
	 static async editSubevento(id, subevento) {
		 const {nombre,descripcion,fechainicio,fechafin,cupomaximo,locacion } = subevento
	   
	   const sql = (`UPDATE subeventos 
				   SET  Descripcion = ?, 
				   FechaInicio = ?, 
				   FechaFin = ?, 
				   Nombre = ?,
				   CupoMaximo = ?,
				   Locacion = ? 
				   WHERE ID_Subevento = ?`);

	   const insertValues = [
		   nombre,
		   descripcion,
		   fechainicio,
		   fechafin,
		   cupomaximo,
		   locacion,
		   id 
	   ]
	   console.log(insertValues)
	   const db = await openConnection();
	   const [rows] = await db.query(sql, insertValues);
	   await db.end();
	   return rows['affectedRows'] > 0;
	}
	*/




}

module.exports = {
	SubEvento
};