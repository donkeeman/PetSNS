const express = require("express");
const router = express.Router();
const authCtr = require("../../controler/authCtr");

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", authCtr.register);

router.post("/login", authCtr.login);

module.exports = router;