const { Router } = require("express");
const { Alergia } = require("../database/entities/Alergia");
const { Menu } = require("../database/entities/Menu");

const router = Router();

router.get("/api/menu", async (req, res) => {
    const alimentos = await Menu.getAllAlimentos();
    res.status(200).json(alimentos);
})


router.get("/api/alergias", async (req, res) => {
    const alergias = await Alergia.getAllAlergias();
    res.status(200).json(alergias);
})


module.exports = {
    menuAlergiasRoutes: router
}