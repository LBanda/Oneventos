require('dotenv').config()
const express = require("express");
const cookieParser = require("cookie-parser");
const { authRoutes } = require("./controllers/authController");
const { eventosRoutes } = require("./controllers/eventosController");
const { subEventosRoutes } = require("./controllers/subeventosController");
const { empleadoRoutes } = require("./controllers/empleadoController");
const { invitadoRoutes } = require("./controllers/invitadoController");
const {usuarioRoutes} = require("./controllers/usuarioController");
const {menuAlergiasRoutes} = require("./controllers/menuAlergiasController");
const { auth } = require("./middleware/auth");
const { join } = require("path");
const cors = require("cors");

const port = process.env.SERVER_PORT;

const app = express();
app.use(cors({
    origin: "*",
    allowedHeaders: "*"
}));
app.use(express.urlencoded({ extended: true} ));
app.use(cookieParser());
app.use(express.json());

app.use(authRoutes);
app.use(express.static(join(__dirname, "./views")));
/* app.use(auth, express.static(join(__dirname, "./public"))); */

app.listen(port, () => console.log(`Server running on port ${port}`));
app.use(eventosRoutes);
app.use(subEventosRoutes);
app.use(empleadoRoutes);
app.use(invitadoRoutes);
app.use(usuarioRoutes);
app.use(menuAlergiasRoutes);

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