export default class EmpleadoSubevento {
	/**
     * @param {number} ID_Subevento
     * @param {number} ID_Empleado
     * @param {boolean} Asistencia
     */
	constructor(ID_Subevento, ID_Empleado, Asistencia) {
		this.ID_Subevento = ID_Subevento;
		this.ID_Empleado = ID_Empleado;
		this.Asistencia = Asistencia;
	}
}
