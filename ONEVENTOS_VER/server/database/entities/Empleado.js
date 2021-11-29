const { openConnection } = require('../connection');
class Empleado {
    /**
     * @param {number} ID_Empleado
     * @param {number} ID_Menu
     * @param {string} Nombre
     * @param {string} Apellido
     * @param {string} Email
     * @param {string} Telefono
     * @param {string} Comentario
     */
	constructor(
		ID_Empleado,
		ID_Menu,
		Nombre,
		Apellido,
		Email,
		Telefono,
		Comentario
	) {
		this.ID_Empleado = ID_Empleado;
		this.ID_Menu = ID_Menu;
		this.Nombre = Nombre;
		this.Apellido = Apellido;
		this.Email = Email;
		this.Telefono = Telefono;
		this.Comentario = Comentario;
	}

	static async getAllEmpleados() {
		const db = await openConnection();
		const [rows] = await db.query('SELECT ID_Evento, Nombre FROM Empleados');
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async deleteEmpleadoById(id) {
		const db = await openConnection();
		const sql = "DELETE * FROM Empleados WHERE ID_Empleado = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del empleado
	 */
	static async getEmpleadoById(id) {
		const db = await openConnection();
		const sql = "SELECT * FROM Empleados WHERE ID_Empleado = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del empleado
	 */
	 static async editEmpleado(empleado) {
		 const {
			 nombre,
			 apellido,
			 email, 
			 telefono,
			 comentario
		 } = empleado
		
		const sql = `UPDATE Empleados 
					SET Nombre = ?, 
					Apellido = ?, 
					Email = ?, 
					Telefono = ?, 
					Comentario = ? 
					WHERE ID_Empleado = ?`;

		const insertValues = [
			0,
			0,
			nombre,
			apellido,
			email,
			telefono, 
			comentario
		]
		const db = await openConnection();
		const [rows] = await db.query(sql, insertValues);
		await db.end();
		return rows['affectedRows'] > 0;
	}
}

module.exports = {
	Empleado
};
