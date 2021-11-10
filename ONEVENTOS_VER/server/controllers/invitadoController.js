const { Router } = require("express");
const { Invitado } = require("../database/entities/Invitado");

const router = Router();

router.get("/api/invitados", async (req, res) => {
    const invitados = await Invitado.getAllInvitados();
    res.status(200).json(invitados ?? []);
})

router.delete("/api/invitados/:id/borrar", async (req, res) => {
    const { id } = req.params;
    const invitados = await Invitado.deleteInvitadoById(id);
    res.status(200).json(invitados ?? {});
})

router.get("/api/invitados/:id/cosultar", async (req, res) => {
    const { id } = req.params;
    const invitado = await Invitado.getInvitadoById(id);
    res.status(200).json(invitado ?? []);
})

module.exports = {
    invitadoRoutes: router
}