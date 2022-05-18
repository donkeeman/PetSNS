const mongoose = require("mongoose");

const schema = mongoose.Schema;

const authSchema = new schema({
    userName: String,
    password: String,
});

module.exports = mongoose.model("auth", authSchema);