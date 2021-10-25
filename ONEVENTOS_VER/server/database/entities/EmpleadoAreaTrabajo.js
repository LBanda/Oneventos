export default class EmpleadoAreaTrabajo {
	/**
	 * @param {number} ID_Empleado
	 * @param {number} ID_AreaTrabajo
	 * @param {Date} Fecha
	 */
	constructor(ID_Empleado, ID_AreaTrabajo, Fecha) {
		this.ID_Empleado = ID_Empleado;
		this.ID_AreaTrabajo = ID_AreaTrabajo;
		this.Fecha = Fecha;
	}
}
