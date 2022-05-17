const express = require("express");
const router = express.Router();

router.get("/upload", (req, res) => {
    res.render("upload");
});

router.get("/update/:id", (req, res) => {
    res.render("update");
});

router.get("/:id", (req, res) => {
    res.render("detail");
});

module.exports = router;