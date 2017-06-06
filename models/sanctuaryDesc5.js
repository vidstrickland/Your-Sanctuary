var mongoose = require("mongoose");

var sanctuaryDesc5Schema = new mongoose.Schema({
    sanctuaryDesc5: String
});

module.exports = mongoose.model("sanctuaryDesc5", sanctuaryDesc5Schema);