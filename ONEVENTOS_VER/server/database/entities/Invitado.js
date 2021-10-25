export default class Invitado {
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
}
