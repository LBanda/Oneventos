const { Router} = require("express");
const { Alergia } = require("../database/entities/Alergia");
const { Menu } = require("../database/entities/Menu");

const router = Router();

//Mostrar todos los tipos de menú
router.get("/api/menu", async (req, res) => {
    const menus = await Menu.getAllMenus();
    res.status(200).json(menus);
})

//Mostrar todos los tipos de alergias
router.get("/api/alergias", async (req, res) => {
    const alergias = await Alergia.getAllAlergias();
    res.status(200).json(alergias);
})

//Mostrar el tipo de menú según su ID
router.get("/api/menu/:id", async (req, res) => {
    const { id } = req.params;
    const menu = await Menu.getMenuById(id);
    res.status(200).json(menu.Tipo_Menu);
})

//Mostrar el tipo de alergia según su ID
router.get("/api/alergias/:id", async (req, res) => {
    const { id } = req.params;
    const alergia = await Alergia.getAlergiaById(id);
    res.status(200).json(alergia.Nombre);
})

//Mandar nuevo tipo de menú con método post
router.post("/api/menu", async (req, res) => {
    console.log(req.body)
    const { menu } = req.body ?? {};
    const result = await Menu.addMenu(menu);

    if (result) {
        res.status(201).json({message: "success", data: menu});
    }else{
        res.status(201).json({message: "Could not create menu", errors: []})
    }
});

//Mandar nuevo tipo de alergia con método post
router.post("/api/alergias", async (req, res) => {
    console.log(req.body)
    const { alergia } = req.body ?? {};
    const result = await Alergia.addAlergia(alergia);

    if (result) {
        res.status(201).json({message: "success", data: alergia});
    }else{
        res.status(201).json({message: "Could not create menu", errors: []})
    }
});

//Eliminar tipo de menú según su id 
router.delete("/api/menu/:id", async (req, res )=>{
    const { id } = req.params;
    const menu = await Menu.deleteMenu(id);
    if (menu) {
        res.status(201).json({message: "success", data: menu});
    }else{
        res.status(201).json({message: "Could not delete menu", errors: []})
    }
})

//Eliminar tipo de alergia según su id
router.delete("/api/alergias/:id", async (req, res )=>{
    const { id } = req.params;
    const alergia = await Alergia.deleteAlergia(id);
    if (alergia) {
        res.status(200).json({message: "success", data: alergia});
    }else{
        res.status(200).json({message: "Could not delete menu", errors: []})
    }
})

module.exports = {
    menuAlergiasRoutes: router
}