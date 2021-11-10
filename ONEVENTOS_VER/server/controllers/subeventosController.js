const { Router } = require("express");
const { SubEvento } = require("../database/entities/SubEvento");

const router = Router();

router.get("/api/subeventos", async(req, res) => {
    const subevento = await SubEvento.getAllSubeventos();
    res.status(200).json(subevento ?? []);
})

//Mostrar el subevento por ID
router.get("/api/subeventos/:id", async (req, res) => {
    const { id } = req.params;
    const subevento = await SubEvento.getSubeventoById(id);
    res.status(200).json(subevento.Nombre);
})

router.put("api/subeventos/:id/editar", async (req, res) => {
    const {id} = req.params; 
    const subevento = SubEvento.editEventoById(id);
    res.status(200).json(subevento ?? []);

})

router.get("/api/subeventos/:id/participantes", async (req, res) => {
    const { id } = req.params;
    const participantes = await SubEvento.getParticipantesBySubeventoId(id);
    res.status(200).json(participantes ?? []);
})

module.exports = {
    subEventosRoutes: router
}