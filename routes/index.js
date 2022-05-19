var express = require('express');
var router = express.Router();
const authRouter = require("./auth");
const postsRouter = require("./posts");
const postStr = require("../controler/postCtr");

/* GET home page. */
router.get('/', postStr.list);

router.use("/auth", authRouter);
router.use("/posts", postsRouter);

module.exports = router;
