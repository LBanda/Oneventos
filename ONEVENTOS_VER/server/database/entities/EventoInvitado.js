export default class EventoInvitado {
	/**
	 * @param {number} ID_Invitado
	 * @param {number} ID_Evento
	 * @param {boolean} Asistencia
	 */
	constructor(ID_Invitado, ID_Evento, Asistencia) {
		this.ID_Invitado = ID_Invitado;
		this.ID_Evento = ID_Evento;
		this.Asistencia = Asistencia;
	}
}