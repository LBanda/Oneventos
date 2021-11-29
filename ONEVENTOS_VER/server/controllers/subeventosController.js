const { Router } = require("express");
const { SubEvento } = require("../database/entities/SubEvento");

const router = Router();

router.get("/api/subeventos", async(req, res) => {
    const subevento = await SubEvento.getAllSubeventos();
    res.status(200).json(subevento ?? []);
})


module.exports = {
    subEventosRoutes: router
}