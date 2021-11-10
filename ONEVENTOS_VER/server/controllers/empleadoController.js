const { Router } = require("express");
const { Empleado } = require("../database/entities/Empleado");

const router = Router();

router.get("/api/empleados", async (req, res) => {
    const empleados = await Empleado.getAllEmpleados();
    res.status(200).json(empleados ?? []);
})

router.delete("/api/empleados/:id", async (req, res) => {
    const { id } = req.params;
    const empleados = await Empleado.deleteEmpleadoById(id);
    res.status(200).json(empleados ?? {});
})

router.get("/api/empleados/:id", async (req, res) => {
    const { id } = req.params;
    const empleado = await Empleado.getEmpleadoById(id);
    res.status(200).json(empleado ?? []);
})

router.put("api/empleados/:id/editar", async (req, res) => {
    const {id} = req.params; 
    const empleado = Empleado.editEmpleadoById(id);
    res.status(200).json(empleado ?? []);

})

router.get("/api/empleados/:id/invitados", async (req, res) => {
    const { id } = req.params;
    const empleados = await Empleado.getInvitadosByEmpleadoId(id);
    res.status(200).json(empleados ?? []);
})

router.post("/api/empleados", async (req, res) => {
    console.log(req.body)
    const { empleado } = req.body ?? {};
    const result = await Empleado.addEmpleado(empleado);

    if (result) {
        res.status(201).json({message: "success", data: empleado});
    }else{
        res.status(201).json({message: "Could not create empleado", errors: []})
    }
});

module.exports = {
    empleadoRoutes: router
}