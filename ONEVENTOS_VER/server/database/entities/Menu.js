const { request } = require('express');
const { openConnection } = require('../connection');

class Menu {
    /**
     * 
     * @param {number} ID_Menu 
     * @param {string} Tipo_Menu 
     */
    constructor(
        ID_Menu, 
        Tipo_Menu,
    ) {
        
        this.ID_Menu = ID_Menu;
        this.Tipo_Menu = Tipo_Menu;

    }

    static async getAllMenus() {
		const db = await openConnection();
		const [ rows ] = await db.query('SELECT * FROM Menus');
		await db.end();
		return rows;
	}
    
    /**
	 * @param {number} id El ID del tipo de menú
	 */
	static async getMenuById(id) {
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT * FROM Menus WHERE ID_Menu = ?', [id]);
		await db.end();
		return rows;
	}
    
    /**
	 * @param {string} Tipo_Menu El nombre del tipo de menú
	 */
    static async addMenu(menu) {
		const {
            nombre
        } = menu;
        console.log(menu)

        const sqlInsert =
			'INSERT INTO Menus (ID_Menu, Tipo_Menu) VALUES (?, ?)';

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
	 * @param {number} id El ID del tipo de menú
	 */
     static async deleteMenu(id) {
		const db = await openConnection();
		const [ rows ] = await db.query('DELETE FROM Menus WHERE ID_Menu = ?', [id]);
		await db.end();
		return rows;
	}
 
}

module.exports = {
	Menu
};