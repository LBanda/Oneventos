export default class EventoAlergia {
	/**
	 * @param {number} ID_Evento
	 * @param {number} ID_Alergia
	 * @param {boolean} Activo
	 */
	constructor(ID_Evento, ID_Alergia, Activo) {
		this.ID_Evento = ID_Evento;
		this.ID_Alergia = ID_Alergia;
		this.Activo = Activo;
	}
}
