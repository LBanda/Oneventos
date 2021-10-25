const { Router } = require("express");
const { Evento } = require("../database/entities/Evento");

const router = Router();

router.get("/api/eventos", async (req, res) => {
    const eventos = await(Evento.getAllEventos());
    res.status(200).send(eventos);
})

module.exports = {
    eventosRoutes: router
}