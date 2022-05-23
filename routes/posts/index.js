const express = require("express");
const router = express.Router();
const upload = require("../../module/multer");
const postCtr = require("../../controler/postCtr");
const checkUser = require("../../module/checkUser");

router.get("/upload", checkUser, (req, res) => {
    res.render("upload");
});
router.get("/:id", postCtr.detail);

router.get("/update/:id", checkUser, postCtr.updateLayout);

router.post("/", upload.single("image"), postCtr.upload);

router.post("/update/:id", checkUser, postCtr.update);

router.post("/delete/:id", checkUser, postCtr.delete);

router.post("/like/:id", checkUser, postCtr.like);

module.exports = router;