var mongoose = require("mongoose");

var sanctuaryDescSchema = new mongoose.Schema({
    sanctuaryDesc1: String,
    sanctuaryDesc2: String
});

module.exports = mongoose.model("sanctuaryDesc", sanctuaryDescSchema);