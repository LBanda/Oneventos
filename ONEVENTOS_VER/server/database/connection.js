// get the client
const { createConnection } = require('mysql2/promise');

/**
 * Crea una nueva conexión a la base de datos
 * @return Conexión a la base de datos
 */
const openConnection = () => {
    return createConnection({
        host: process.env.DB_HOST       || "localhost",
        user: process.env.DB_USER       || "root",
        database: process.env.DB_NAME   || "oneventos",
        
    });
};

const openConnectionWith = (host, user, database) => {
    return createConnection({
        host: host,
        user: user,
        database: database,
        
    });
};

module.exports = {
    openConnection,
    openConnectionWith
}