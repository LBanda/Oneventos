// console.log("test")
const express = require("express");
const path = require('path');
const cors = require("cors");
const fs = require("fs");

const port = 8080;

var corsOptions = {
    origin: '*'
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/", (req, res) => {
    const file = path.join(__dirname, "./public/index.html");
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
        res.status(404).sendFile(path.join(__dirname, "404.html"));
    }
})