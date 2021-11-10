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
	static async getSubEventosByEventoId(id) {
		const db = await openConnection();
		const sql = "SELECT * FROM SubEventos WHERE ID_Evento = ?";
		const [ rows ] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	 static async getEmpleadosByEventoId(id) {
		const db = await openConnection();
		const sql = "SELECT Em.ID_Empleado,nombre,apellido FROM `eventos-empleados` as Ev, empleados as Em WHERE Ev.ID_Empleado = Em.ID_Empleado AND ID_Evento = ?";
		const [ rows ] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getEventoById(id) {
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT * FROM Eventos WHERE ID_Evento = ?', [id]);
		await db.end();
		return rows;
	}

	static async addEvento(evento) {
		const {
			nombre,
			descripcion,
			cupoMaximo,
			fechaInicio,
			fechaFin,
			locacion,
			imagen,
			maximoInvitados
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
			maximoInvitados
		];

		const db = await openConnection();

		const [ result ] = await db.query(sqlInsert, insertValues);
		await db.end();
		return result['affectedRows'] > 0;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async deleteEventoById(id) {
		const db = await openConnection();
		const sql = "DELETE * FROM Eventos WHERE ID_Evento = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}
}

module.exports = {
	Evento
};
