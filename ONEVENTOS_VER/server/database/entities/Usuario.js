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
		const { email, password, nombre, rol } = user;
        // Encripta la Contrasena
		const encryptedPwd = await encryptPassword(password);
		// Inserta los datos a la query
		const sqlInsert = `
            INSERT INTO Usuarios(ID_Usuario, Email, Password, NombreUsuario, ID_Rol)
            VALUES(?, ?, ?, ?, ?)
        `;
		const parameters = [ 0, email, encryptedPwd, nombre, rol ];
		await db.query(sqlInsert, parameters);

		const createdUser = await Usuario.tryLogin(email, password);
		await db.end();

		return createdUser;
	}

	static async getAllUsers() {
		const db = await openConnection();
		const [ rows ] = await db.query('SELECT * FROM Usuarios');
		await db.end();
		return rows;
	}
	static async getUserById(id) {
		const db = await openConnection();
		const [ [rows] ] = await db.query('SELECT * FROM Usuarios WHERE ID_Usuario = ?', [id]);
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

	/**
     * @param {Usuario} user
     */
	
	/*static async editUser(user) {
		 //Crea el Objeto en la DB
		if (!user) {
			return null;
		}
		// Crea la Conexion
		const db = await openConnection();
		const { email, password, nombre, rol } = user;
        // Encripta la Contrasena
		const encryptedPwd = await encryptPassword(password);
		// Inserta los datos a la query
		const sqlInsert = 'UPDATE Usuarios SET Email = ?, Password = ?, NombreUsuario = ?, ID_Rol = ? WHERE ID_Usuario = ?', [id];
		const parameters = [ 0, email, encryptedPwd, nombre, rol ];
		await db.query(sqlInsert, [parameters]);

		const createdUser = await Usuario.tryLogin(email, password);
		await db.end();

		return createdUser;
	}*/

	/*static EditUser(idEmpleado, Nombres, Apellidos, CorreoElectronico, Rol, Status){
        return db.execute('UPDATE usuarios SET  Nombres = ?, Apellidos = ?, CorreoElectronico =?, Rol = ?, Status = ? WHERE idEmpleado = ? ', [idEmpleado, Nombres, Apellidos, CorreoElectronico, Rol,Status])
    }*/
	/*
	putOne: async (user, id) => {
		const UPDATE = `
		  UPDATE usuarios
		  SET
		  nombre = $2,
		  apellido = $3,
		  correo_electronico = $4
		  WHERE id = $1
		  AND
		  existe = true
		`
		const values = [id, user.nombre, user.apellido, user.correo_electronico]
		try {
		  const { rowCount } = await db.query(UPDATE, values)
	
		  if (rowCount === 0) {
			return ['ERROR  UPDATE NOT FOUND', 404]
		  }
		  return ['UPDATE ONE USER', 201]
		} catch (error) {
		  console.log('ERROR UPDATE USER 🤯', error)
		  return ['ERROR UPDATE USER 🤯', 400]
		}
	}*/
	static async editUser(id, user) {
		const {email, nombre, password, rol } = user
		const encryptedPwd = await encryptPassword(password);
	   
	   const sql = (`UPDATE Usuarios 
				   SET Email = ?, 
				   NombreUsuario = ?, 
				   Password = ?, 
				   ID_Rol = ? 
				   WHERE ID_Usuario = ?`);

	   const insertValues = [
		   email,
		   nombre,
		   encryptedPwd,
		   rol,
		   id
	   ]
	   console.log(insertValues);
	   const db = await openConnection();
	   const [rows] = await db.query(sql, insertValues);
	   await db.end();
	   return rows['affectedRows'] > 0;
   }
	
}
	
	/** @param {string} password */
	const encryptPassword = (password) => hash(password, 10);


module.exports = {
	Usuario
};
