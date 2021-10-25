// get the client
const { createConnection } = require('mysql2/promise');

/**
 * Crea una nueva conexión a la base de datos
 * @return Conexión a la base de datos
 */
const openConnection = () => {
    return createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
    });
};

module.exports = {
    openConnection
}