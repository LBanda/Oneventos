const { Router} = require("express");
const { Usuario } = require("../database/entities/Usuario");
const { sign } = require("jsonwebtoken");

const router = Router();

const expiration = 24 * 60 * 60;
const createToken = (user) => {
    // Tiempo de expiracion de la cookie 24Hrs
    return sign(user, process.env.JWT_SECRET, {
        expiresIn: expiration
    });
}

//Mostrar todos los usuarios registrados
router.get("/api/usuarios", async (req, res) => {
    const user = await Usuario.getAllUsers();
    res.status(200).json(user);
})

//Mostrar el usuario según su ID
router.get("/api/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const user = await Usuario.getUserById(id);
    res.status(200).json(user);
})

//Mandar nuevo registro del usuario con método post
router.post("/api/usuarios", async (req, res)=> {
    // Obtener los datos del request y el usuario de la DB
    const { user } = req.body || {};
    const savedUser = await Usuario.addUser(user);
    console.log("Usuario creado", savedUser);
    if (savedUser) {
        res.cookie("jwt", createToken(user), {
            httpOnly: true,
            secure: true,
            maxAge: expiration * 15
        });

        res.status(200).json({ user, message: "Success" });
    } else {
        res.status(401).json({ errors: [], message: "Failed to create user" })
    }
})

//Eliminar usuario según su id 
router.delete("/api/usuarios/:id", async (req, res )=>{
    const { id } = req.params;
    const user = await Usuario.deleteUser(id);
    if (user) {
        res.status(201).json({message: "success", data: user});
    }else{
        res.status(201).json({message: "Could not delete users", errors: []})
    }
})



module.exports = {
    usuarioRoutes: router
}
