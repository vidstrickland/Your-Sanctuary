var mongoose = require("mongoose");

var sanctuaryDesc1Schema = new mongoose.Schema({
    sanctuaryDesc1: String
});

module.exports = mongoose.model("sanctuaryDesc1", sanctuaryDesc1Schema);