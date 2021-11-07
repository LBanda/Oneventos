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

    static async getAllAlimentos() {
		const db = await openConnection();
		const [ rows ] = await db.query('SELECT * FROM Menus');
		await db.end();
		return rows;
	}
    
}

module.exports = {
	Menu
};