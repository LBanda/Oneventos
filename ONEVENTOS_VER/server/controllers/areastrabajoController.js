const { Router } = require("express");
const { AreaTrabajo } = require("../database/entities/AreaTrabajo");

const router = Router();


router.delete("/api/areatrabajo/borrar/:id", async (req, res )=>{
    const { id } = req.params;
    const areatrabajo = await AreaTrabajo.deleteAreaTrabajo(id);
    if (areatrabajo) {
        res.status(201).json({message: "success", data: areatrabajo});
    }else{
        res.status(201).json({message: "Could not delete area de trabajo", errors: []})
    }
})





module.exports = {
    areastrabajoRoutes: router
}