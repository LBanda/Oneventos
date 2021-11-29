// console.log("test")
import express, { json, static } from "express";
import { Database, OPEN_CREATE } from "sqlite3";
import { join } from 'path';
import cors from "cors";

const port = 8080;

var corsOptions = {
    origin: '*'
}

const app = express();
const db = new Database("./database.db", OPEN_CREATE);
const createUserSql = `
CREATE TABLE Users (
	Id TEXT PRIMARY KEY,
	Email TEXT NOT NULL,
	Password TEXT NOT NULL,
);`
db.run(createUserSql);
db.close();

app.use(json());
app.use(cors(corsOptions));
app.use(static(__dirname + "/public"));

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/", (req, res) => {
    const file = join(__dirname, "./public/index.html");
    res.status(200).sendFile(file);
})

app.get("*", (req, res) => {
    if (req.is("application/json")) {
        res.status(404).send({
            route: req.originalUrl,
            method: req.method,
            error: "Route does not exist"
        })
    } else {
        res.status(404).sendFile(join(__dirname, "404.html"));
    }
})