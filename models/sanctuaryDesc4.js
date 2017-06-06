var mongoose = require("mongoose");

var sanctuaryDesc4Schema = new mongoose.Schema({
    sanctuaryDesc4: String
});

module.exports = mongoose.model("sanctuaryDesc4", sanctuaryDesc4Schema);