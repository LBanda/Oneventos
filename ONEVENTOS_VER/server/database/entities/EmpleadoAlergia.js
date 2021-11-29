export default class EmpleadoAlergia {
	/**
     * 
     * @param {number} ID_Empleado 
     * @param {number} ID_Alergia 
     * @param {boolean} Activo 
     * @param {Date} Fecha 
     */
	constructor(ID_Empleado, ID_Alergia, Activo, Fecha) {
		this.ID_Empleado = ID_Empleado;
		this.ID_Alergia = ID_Alergia;
		this.Activo = Activo;
		this.Fecha = Fecha;
	}
}
