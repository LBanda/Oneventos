import { isEmail } from "validator";
import { Database, OPEN_READWRITE } from "sqlite3";
import { v4 as uuid } from 'uuid';

const connection = new Database("../database.db", OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Opened connection to database");
    }
});

export default class User {
    constructor(email, password, id = "") {
        if (!email || !password) {
            throw new Error(`Inválido. Email: ${email} - Pw: ${password}`);
        }

        if (!isEmail(email)) {
            throw new Error(`Email invalido`);
        }

        this.password = User.encryptPassword(password);
        this.email = email;
        this.id = id || uuid();
    }

    static encryptPassword(password) {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(password, salt)
    }
}

export function tryLogin(email, password) {
    const user = findByEmail(email);
    if (!user) {
        throw new Error("user not found");
    }

    const passwordsMatch = bcrypt.compareSync(password, user.password);
    if (!passwordsMatch) {
        throw new Error("wrong password")
    }

    return user;
}

export function addUser(user) {
    const { id, email, password } = user;
    const sqlInsert = `INSERT INTO Users(Id, Email, Password) VALUES(?, ?, ?)`;
    const parameters = [id, email, password];
    connection.run(sqlInsert, parameters, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("User inserted in database");
        }
    });
}

export function findById(userId) {
    // Obtener de la base de datos
    let record = null;
    const sqlSelect = "SELECT * FROM Users WHERE Id = ?";
    const parameters = [userId];
    connection.get(sqlSelect, parameters, (err, row) => {
        if (err) {
            console.error(err.message)
        }

        record = row;
    });

    const { Id, Email, Password } = record || {};
    return record ? new User(Email, Password, Id) : null;
}

export function findByEmail(email) {
    // Obtener de la base de datos
    let record = null;
    const sqlSelect = "SELECT * FROM Users WHERE Email = ?";
    const parameters = [email];
    connection.get(sqlSelect, parameters, (err, row) => {
        if (err) {
            console.error(err.message)
        }

        record = row;
    });

    const { Id, Email, Password } = record || {};
    return record ? new User(Email, Password, Id) : null;
}