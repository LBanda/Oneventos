const { openConnection } = require('../connection');

class Alergia {
	/**
     * 
     * @param {number} ID_Alergia 
     * @param {string} Nombre 
     */
	constructor(ID_Alergia, Nombre) {
		this.ID_Alergia = ID_Alergia;
		this.Nombre = Nombre;
	}

	static async getAllAlergias() {
		const db = await openConnection();
		const [ rows ] = await db.query('SELECT * FROM Alergias');
		await db.end();
		return rows;
	}
}
module.exports = {
	Alergia
};