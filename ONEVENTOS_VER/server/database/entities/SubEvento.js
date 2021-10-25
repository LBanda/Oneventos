export default class SubEvento {
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
}
