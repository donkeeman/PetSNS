const express = require("express");
const router = express.Router();
const authCtr = require("../../controler/authCtr");

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/login", authCtr.login);

router.post("/register", authCtr.register);

router.post("/logout", (req, res) => {
    res.clearCookie("access_token");
    res.redirect("/");
});

module.exports = router;