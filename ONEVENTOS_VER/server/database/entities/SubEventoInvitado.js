export default class SubEventoInvitado {
	/**
	 * 
	 * @param {number} ID_Subevento 
	 * @param {number} ID_Invitado 
	 * @param {boolean} Asistencia 
	 */
	constructor(
		ID_Subevento, 
		ID_Invitado, 
		Asistencia
    ) {
		this.ID_Subevento = ID_Subevento;
		this.ID_Invitado = ID_Invitado;
		this.Asistencia = Asistencia;
	}
}
