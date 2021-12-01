const { Router } = require("express");
const { Usuario } = require("../database/entities/Usuario");
const { sign } = require("jsonwebtoken");
const { join } = require("path");

const router = Router();
const root = join(__dirname, "../views");

const expiration = 24 * 60 * 60;
const createToken = (user) => {
    // Tiempo de expiracion de la cookie 24Hrs
    return sign(user, process.env.JWT_SECRET, {
        expiresIn: expiration
    });
}

router.get("/login", (req, res) => {
    const view = join(root, "/login.html");
    res.status(200).sendFile(view);
})

router.post("/api/login", async (req, res) => {
    // Obtener los datos del request y el usuario de la DB
    const { email, password } = req.body?.user || {};
    const user = await Usuario.tryLogin(email, password);
    console.log("Login", user);

    if (user) {
        res.cookie("jwt", createToken(user), {
            httpOnly: true,
            secure: true,
            maxAge: expiration * 15
        });

        res.status(200).json({ user, message: "Success" });
    } else {
        res.status(401).json({ errors: [], message: "Failed to login" })
    }
})

/*
router.get("/signup", (req, res) => {
    const view = join(root, "/signin.html");
    res.status(200).sendFile(view);
})

router.post("/api/signup", async (req, res)=> {
    // Obtener los datos del request y el usuario de la DB
    const { user } = req.body || {};
    const savedUser = await Usuario.signUp(user);
    console.log("Signup", savedUser);
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
})*/

router.get("/logout", (req,res)=> {
    // Limpia la cookie
    res.clearCookie("jwt");
    // res.send("Cookie has been deleted successfully");
    // Redirect to home page
    res.redirect("/login");
})

module.exports = {
    authRoutes: router
}
