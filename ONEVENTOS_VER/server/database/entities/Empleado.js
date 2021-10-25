export default class Empleado {
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
}
