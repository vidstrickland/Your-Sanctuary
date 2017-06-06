var mongoose = require("mongoose");

var sanctuaryDescSchema = new mongoose.Schema({
    sanctuaryDesc1: String
});

module.exports = mongoose.model("sanctuaryDesc1", sanctuaryDescSchema);