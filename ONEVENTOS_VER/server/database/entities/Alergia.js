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

	/**
	 * @param {number} id El ID de la alergia
	 */
	 static async getAlergiaById(id) {
		console.log("ID", id)
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT * FROM Alergias WHERE ID_Alergia = ?', [id]);
		await db.end();
		return rows;
	}

	    /**
	 * @param {string} Nombre El nombre del tipo de alergia
	 */
		 static async addAlergia(alergia) {
			const {
				nombre
			} = alergia;
			console.log(alergia)
	
			const sqlInsert =
				'INSERT INTO Alergias (ID_Alergia, Nombre) VALUES (?, ?)';
	
			const insertValues = [
				0,
				nombre
			]
			const db = await openConnection();
	
			const [ result ] = await db.query(sqlInsert, insertValues);
			await db.end();
	
			return result['affectedRows'] > 0;
			
		}
		/** 
		* @param {number} id El ID del tipo de alergia
		*/
		static async deleteAlergia(id) {
		   const db = await openConnection();
		   const [ rows ] = await db.query('DELETE FROM Alergias WHERE ID_Alergia = ?', [id]);
		   await db.end();
		   return rows;
	   }
}
module.exports = {
	Alergia
};