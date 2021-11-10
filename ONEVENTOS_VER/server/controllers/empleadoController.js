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

module.exports = {
    empleadoRoutes: router
}