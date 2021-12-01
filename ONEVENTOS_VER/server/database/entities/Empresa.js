const { openConnection } = require('../connection');


class Empresa {
	/**
	 * @param {number} ID_Empresa 
	 * @param {string} Nombre 
	 */
	constructor(ID_Empresa, Nombre) {
		this.ID_Empresa = ID_Empresa;
		this.Nombre = Nombre;
	}

	/**
	 * @param {string} Nombre El nombre de la empresa
	 */
	 static async addEmpresa(empresa) {
		const {
			nombre
		} = empresa;
		console.log(empresa)

		const sqlInsert =
			'INSERT INTO empresas (ID_Empresa, Nombre) VALUES (?, ?)';

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
		* @param {number} id El ID de la empresa
		*/
		static async deleteEmpresa(id) {
			const db = await openConnection();
			const [ rows ] = await db.query('DELETE FROM empresas WHERE ID_Empresa = ?', [id]);
			await db.end();
			return rows;
		}

	





}
module.exports = {
	Empresa
};
