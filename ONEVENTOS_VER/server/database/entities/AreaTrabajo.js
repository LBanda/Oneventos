const { openConnection } = require('../connection');

class AreaTrabajo {
    /**
     * @param {number} ID_AreaTrabajo
     * @param {string} Nombre
     */
	constructor(ID_AreaTrabajo, Nombre) {
		this.ID_AreaTrabajo = ID_AreaTrabajo;
		this.Nombre = Nombre;
	}

    /** 
		* @param {number} id El ID del Area de trabajo
		*/
		static async deleteAreaTrabajo(id) {
			const db = await openConnection();
			const [ rows ] = await db.query('DELETE FROM areastrabajo WHERE ID_AreaTrabajo = ?', [id]);
			await db.end();
			return rows;
		}











}
module.exports = {
	AreaTrabajo
};

