const { Router } = require("express");
const { Evento } = require("../database/entities/Evento");

const router = Router();

router.get("/api/eventos", async (req, res) => {
    const eventos = await Evento.getAllEventos();
    res.status(200).json(eventos);
})

router.get("/api/eventos/:id", async (req, res) => {
    const { id } = req.params;
    const evento = await Evento.getEventoById(id);
    res.status(200).json(evento);
})

module.exports = {
    eventosRoutes: router
}