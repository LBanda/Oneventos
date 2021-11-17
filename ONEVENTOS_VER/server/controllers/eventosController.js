const { Router } = require("express");
const { Evento } = require("../database/entities/Evento");
const { SubEvento } = require("../database/entities/SubEvento");

const router = Router();

router.get("/api/eventos", async (req, res) => {
    const eventos = await Evento.getAllEventos();
    res.status(200).json(eventos ?? []);
})

router.get("/api/eventos/:id/consultar", async (req, res) => {
    const { id } = req.params;
    const evento = await Evento.getEventoById(id);
    res.status(200).json(evento ?? {});
})

router.delete("/api/invitados/:id/borrar", async (req, res) => {
    const { id } = req.params;
    const evento = await Evento.deleteEventoById(id);
    res.status(200).json(evento ?? {});
})

router.get("/api/eventos/:id/subeventos", async (req, res) => {
    const { id } = req.params;
    const subeventos = await Evento.getSubEventosByEventoId(id);
    res.status(200).json(subeventos ?? []);
})

router.post("/api/eventos/", async (req, res) => {
    const { evento } = req.body ?? {};
    const addedEvento = await Evento.addEvento(evento);
    const addedSubeventos = await SubEvento.addSubeventos(evento.subeventos);

    if (addedEvento && addedSubeventos) {
        res.status(201).json({ message: "added evento and subevento(s)", data: evento });
    } else if (addedEvento) {
        res.status(201).json({ message: "added evento", data: evento });
    } else {
        res.status(400).json({ message: "request error", errors: [] });
    }
})

module.exports = {
    eventosRoutes: router
}