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

router.get("/api/invitados/:id", async (req, res) => {
    const { id } = req.params;
    const invitado = await Invitado.getInvitadoById(id);
    res.status(200).json(invitado ?? []);
})

router.post("/api/invitados", async (req, res) => {
    console.log(req.body)
    const { invitado } = req.body ?? {};
    const result = await Invitado.addInvitado(invitado);

    if (result) {
        res.status(201).json({message: "success", data: invitado});
    }else{
        res.status(201).json({message: "Could not create invitado", errors: []})
    }
});


module.exports = {
    invitadoRoutes: router
}