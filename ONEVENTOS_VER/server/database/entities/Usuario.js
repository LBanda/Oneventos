
const { openConnection } = require('../connection');
const { hash, compare } = require('bcrypt');
class Usuario {
	/**
     * @param {string} Email 
     * @param {string} Password
     * @param {string} NombreUsuario
     * @param {number} ID_Usuario
     */
	constructor(Email, Password, NombreUsuario, ID_Usuario) {
		this.Password = Password;
		this.Email = Email;
		this.NombreUsuario = NombreUsuario;
		this.ID_Usuario = ID_Usuario;
	}

    /**
     * @param {string} email
     * @param {string} password
     */
	static async tryLogin(email, password) {
		// Crea la Conexion
		const db = await openConnection();
		const sql = 'SELECT * FROM Usuarios WHERE Email = ?';
		const [ [ user ] ] = await db.query(sql, [ email ]);
		
		if (!user) {
			return null;
		}

		// Terminar Conexion
		await db.end();
		const validPassword = await compare(password, user.Password);

		if (validPassword) {
			return user;
		}

		return null;
	}

	/**
     * @param {Usuario} user
     */
	static async addUser(user) {
		// Crea el Objeto en la DB
		if (!user) {
			return null;
		}
		// Crea la Conexion
		const db = await openConnection();
		const { email, password, nombre } = user;
        // Encripta la Contrasena
		const encryptedPwd = await encryptPassword(password);
		// Inserta los datos a la query
		const sqlInsert = `
            INSERT INTO Usuarios(ID_Usuario, Email, Password, NombreUsuario)
            VALUES(?, ?, ?, ?)
        `;
		const parameters = [ 0, email, encryptedPwd, nombre ];
		await db.query(sqlInsert, parameters);

		const createdUser = await Usuario.tryLogin(email, password);
		await db.end();

		return createdUser;
	}

	static async getAllUsers() {
		const db = await openConnection();
		const [ rows ] = await db.query('SELECT ID_Usuario, NombreUsuario, Email FROM Usuarios');
		await db.end();
		return rows;
	}
	static async getUserById(id) {
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT ID_Usuario, NombreUsuario, Email FROM Usuarios WHERE ID_Usuario = ?', [id]);
		await db.end();
		return rows;
	}

	/**
	 * @param {number} id El ID del Usuario
	 */
	static async deleteUser(id) {
		const db = await openConnection();
		const [ rows ] = await db.query('DELETE FROM Usuarios WHERE ID_Usuario = ?', [id]);
		await db.end();
		return rows;
		}
	
}
	/** @param {string} password */
	const encryptPassword = (password) => hash(password, 10);


module.exports = {
	Usuario
}
