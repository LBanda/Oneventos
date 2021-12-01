const { Router } = require("express");
const { Empresa } = require("../database/entities/Empresa");

const router = Router();

router.post("/api/empresa/agregar", async (req, res) => {
    console.log(req.body)
    const { empresa } = req.body ?? {};
    const result = await Empresa.addEmpresa(empresa);

    if (result) {
        res.status(201).json({message: "success", data: empresa});
    }else{
        res.status(201).json({message: "Could not create empresa", errors: []})
    }
});


router.delete("/api/empresa/borrar/:id", async (req, res )=>{
    const { id } = req.params;
    const empresa = await Empresa.deleteEmpresa(id);
    if (empresa) {
        res.status(201).json({message: "success", data: empresa});
    }else{
        res.status(201).json({message: "Could not delete empresa", errors: []})
    }
})


module.exports = {
    empresasRoutes: router
}