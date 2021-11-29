export default class InvitadoAlergia {
    /**
     * 
     * @param {number} ID_Invitado 
     * @param {number} ID_Alergia 
     * @param {boolean} Activo 
     * @param {Date} Fecha 
     */
	constructor(
        ID_Invitado, 
        ID_Alergia, 
        Activo, 
        Fecha
    ) {
		this.ID_Invitado = ID_Invitado;
		this.ID_Alergia = ID_Alergia;
		this.Activo = Activo;
		this.Fecha = Fecha;
	}
}
