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
		const [rows] = await db.query('SELECT ID_Evento, Nombre, Descripcion FROM Eventos');
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getSubEventosByEventoId(id) {
		const db = await openConnection();
		const sql = "SELECT * FROM SubEventos WHERE ID_Evento = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getEmpleadosByEventoId(id) {
		const db = await openConnection();
		const sql = "SELECT * FROM `empleados` e JOIN `eventos-empleados` ev ON ev.ID_Empleado = e.ID_Empleado WHERE ev.ID_Evento = ?"
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getEventoById(id) {
		const db = await openConnection();
		const [[rows]] = await db.query('SELECT * FROM Eventos WHERE ID_Evento = ?', [id]);
		await db.end();
		return rows;
	}

	static async addEvento(evento) {
		if (!evento) {
			return false;
		}

		const {
			nombre,
			descripcion,
			cupoMaximo,
			fechaInicio,
			fechaFin,
			locacion,
			imagen,
			maximoInvitado
		} = evento;

		const sqlInsert =
			`INSERT INTO Eventos (
				ID_Evento,
				Nombre,
				Descripcion,
				CupoMaximo,
				FechaInicio,
				FechaFin,
				Locacion,
				Imagen,
				MaximoInvitados
			)
			VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

		const insertValues = [
			0,
			nombre,
			descripcion,
			cupoMaximo,
			new Date(fechaInicio),
			new Date(fechaFin),
			locacion,
			imagen,
			maximoInvitado
		];

		const db = await openConnection();

		const [result] = await db.query(sqlInsert, insertValues);
		await db.end();
		return result;
	}


	/**
	 * @param {number} id El ID del evento
	 */
	 static async editEvento(id, evento) {
		const {nombre, descripcion, cupomaximo, fechainicio, fechafin, locacion, imagen, maximoinvitados } = evento
		
		const sql = (`UPDATE eventos 
				   SET Nombre = ?, 
				   Descripcion = ?, 
				   CupoMaximo = ?,
				   FechaInicio = ?,
				   FechaFin = ?,
				   Locacion = ?,
				   Imagen = ?,
				   MaximoInvitados = ? 
				   WHERE ID_Evento = ?`);
		
		 const insertValues = [
			 nombre,
			 descripcion,
			 cupomaximo,
			 new Date(fechainicio),
			 new Date(fechafin),
			 locacion,
			 imagen,
			 maximoinvitados,
			 id
		 ]
		 console.log(insertValues);
		 const db = await openConnection();
		 const [rows] = await db.query(sql, insertValues);
		 await db.end();
		 return rows['affectedRows'] > 0;

	}

	static async addEvento(evento) {
		if (!evento) {
			return false;
		}

		const {
			nombre,
			descripcion,
			cupoMaximo,
			fechaInicio,
			fechaFin,
			locacion,
			imagen,
			maximoInvitado
		} = evento;

		const sqlInsert =
			`INSERT INTO Eventos (
				ID_Evento,
				Nombre,
				Descripcion,
				CupoMaximo,
				FechaInicio,
				FechaFin,
				Locacion,
				Imagen,
				MaximoInvitados
			)
			VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

		const insertValues = [
			0,
			nombre,
			descripcion,
			cupoMaximo,
			new Date(fechaInicio),
			new Date(fechaFin),
			locacion,
			imagen,
			maximoInvitado
		];

		const db = await openConnection();

		const [ result ] = await db.query(sqlInsert, insertValues);
		await db.end();
		return result;
	}






	/**
	 * @param {number} id El ID del evento
	 */
	static async deleteEventoById(id) {
		const db = await openConnection();
		const sql = "DELETE FROM Eventos WHERE ID_Evento = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}
}

module.exports = {
	Evento
};
