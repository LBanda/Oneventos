const { Router } = require("express");
const { SubEvento } = require("../database/entities/SubEvento");

const router = Router();

router.get("/api/subeventos/:id", async(req, res) => {
    const { id } = req.params;
    const subevento = await SubEvento.getAllSubeventos(id);
    res.status(200).json(subevento ?? []);
})

router.post("/api/subeventos/", async (req, res) => {
    const { subeventos } = req.body ?? {};
    const addedSubeventos = await SubEvento.addSubeventos(subeventos);

    if (addedSubeventos) {
        res.status(201).json({ message: "added subeventos", data: subeventos });
    } else {
        res.status(400).json({ message: "request error", errors: [] });
    }
})

router.delete("/api/subevento/:id/borrar", async (req, res )=>{
    const { id } = req.params;
    const subevento = await SubEvento.deleteSubevento(id);
    res.status(200).json(subevento ?? {});
  
})

router.put("api/subevento/:id/editar", async (req, res) => {
    const {id} = req.params; 
    const subevento = SubEvento.editSubeventoById(id);
    res.status(200).json(subevento ?? []);

})


module.exports = {
    subEventosRoutes: router
}