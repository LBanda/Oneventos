export default class EventoMenu {
    /**
     * 
     * @param {number} ID_Evento 
     * @param {number} ID_Menu 
     * @param {boolean} Activo 
     */
	constructor(
        ID_Evento, 
        ID_Menu, 
        Activo
    ) {
		this.ID_Evento = ID_Evento;
		this.ID_Menu = ID_Menu;
		this.Activo = Activo;
	}
}
