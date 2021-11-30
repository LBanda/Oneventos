require('dotenv').config()
const express = require("express");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { extname } = require("path");
const { existsSync } = require("fs");

const { authRoutes } = require("./controllers/authController");
const { eventosRoutes } = require("./controllers/eventosController");
const { subEventosRoutes } = require("./controllers/subeventosController");
const { empleadoRoutes } = require("./controllers/empleadoController");
const { invitadoRoutes } = require("./controllers/invitadoController");
const { menuAlergiasRoutes } = require("./controllers/menuAlergiasController");
const { empresasRoutes } = require("./controllers/empresasController");


// const { auth } = require("./middleware/auth");
const { join } = require("path");
const cors = require("cors");

const port = process.env.SERVER_PORT || 8081;
const imagesFolder = "./images";
const viewsFolder = "./views";
const app = express();

app.use(cors({ origin: "*", allowedHeaders: "*" }));
app.use(express.urlencoded({ extended: true} ));
app.use(cookieParser());
app.use(express.json());

const storage = multer.diskStorage({
    destination: imagesFolder,
    filename: (req, file, cb) => {
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`);
    },
});

const upload = multer({ storage: storage }).single("image");

app.use(authRoutes);
app.use(express.static(join(__dirname, viewsFolder)));
/* app.use(auth, express.static(join(__dirname, "./public"))); */

app.listen(port, () => console.log(`Server running on port ${port}`));
app.use(eventosRoutes);
app.use(subEventosRoutes);
app.use(empleadoRoutes);
app.use(invitadoRoutes);
app.use(menuAlergiasRoutes);
app.use(empresasRoutes);

app.post("/images", upload, (req, res) => {
    if (req.file) {
        res.status(201).send({ message: "uploaded", image: req.file });
    } else {
        res.status(400).send({ message: "no image provided" });
    }
})

app.get("/images/:name", (req, res) => {
    const imagePath = join(__dirname, "/images", req.params?.name ?? "");

    if (existsSync(imagePath)) {
        res.status(200).sendFile(imagePath)
    } else if (req.is("application/json")) {
        res.status(404).send({
            route: req.originalUrl,
            method: req.method,
            error: "Image does not exist"
        })
    } else {
        res.status(404).sendFile(join(__dirname, "404.html"));
    }
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