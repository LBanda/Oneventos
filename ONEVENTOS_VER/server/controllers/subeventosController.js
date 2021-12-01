const { Router } = require("express");
const { SubEvento } = require("../database/entities/SubEvento");

const router = Router();

router.get("/api/subeventos/:id", async (req, res) => {
    const { id } = req.params;
    const subevento = await SubEvento.getAllSubeventos(id);
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
router.post("/api/subeventos/", async (req, res) => {
    const { subeventos } = req.body ?? {};
    const addedSubeventos = await SubEvento.addSubeventos(subeventos);

    if (addedSubeventos) {
        res.status(201).json({ message: "added subeventos", data: subeventos });
    } else {
        res.status(400).json({ message: "request error", errors: [] });
    }
})


//Eliminar subevento según su id 
router.delete("/api/subevento/:id/borrar", async (req, res )=>{
    const { id } = req.params;
    const subevento = await SubEvento.deleteSubeventoById(id);
    if (subevento) {
        res.status(201).json({message: "success", data: subevento});
    }else{
        res.status(201).json({message: "Could not delete subevento", errors: []})
    }
})

router.put("api/subevento/editar/:id", async (req, res) => {
    const { id } = req.params; 
    const { subevento } = req.body;
    const updateSubevento = await SubEvento.editSubevento(parseInt(id),subevento);
    res.status(200).json(updateSubevento ?? {});
    

})




module.exports = {
    subEventosRoutes: router
}