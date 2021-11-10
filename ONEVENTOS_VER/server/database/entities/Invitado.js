const { openConnection } = require('../connection');
class Invitado {
	/**
	 * @param {number} ID_Invitado
	 * @param {number} ID_Menu
	 * @param {number} ID_Empleado
	 * @param {string} Nombre
	 * @param {string} Apellido
	 * @param {string} Email
	 * @param {string} Telefono
	 * @param {string} Comentario
	 */
	constructor(
		ID_Invitado,
		ID_Menu,
		ID_Empleado,
		Nombre,
		Apellido,
		Email,
		Telefono,
		Comentario
	) {
		this.ID_Invitado = ID_Invitado;
		this.ID_Menu = ID_Menu;
		this.ID_Empleado = ID_Empleado;
		this.Nombre = Nombre;
		this.Apellido = Apellido;
		this.Email = Email;
		this.Telefono = Telefono;
		this.Comentario = Comentario;
	}

	static async getAllInvitados() {
		const db = await openConnection();
		const [rows] = await db.query('SELECT ID_Invitado, Nombre FROM Invitados');
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async deleteInvitadoById(id) {
		const db = await openConnection();
		const sql = "DELETE * FROM Invitados WHERE ID_Invitado = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del evento
	 */
	static async getInvitadoById(id) {
		const db = await openConnection();
		const sql = "SELECT * FROM Invitados WHERE ID_Invitado = ?";
		const [rows] = await db.query(sql, [id]);
		await db.end();
		return rows;
	}
}

module.exports = {
	Invitado
};
