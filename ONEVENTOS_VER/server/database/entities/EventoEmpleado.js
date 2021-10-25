export default class EventoEmpleado {
    /**
     * 
     * @param {number} ID_Evento 
     * @param {number} ID_Empleado 
     * @param {boolean} Asistencia 
     */
	constructor(
        ID_Evento, 
        ID_Empleado, 
        Asistencia
    ) {
		this.ID_Evento = ID_Evento;
		this.ID_Empleado = ID_Empleado;
		this.Asistencia = Asistencia;
	}
}