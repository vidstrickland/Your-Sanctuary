var mongoose = require("mongoose");

var sanctuaryDescSchema = new mongoose.Schema({
    sanctuaryDesc2: String
});

module.exports = mongoose.model("sanctuaryDesc2", sanctuaryDescSchema);