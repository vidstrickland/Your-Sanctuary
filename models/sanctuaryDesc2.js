var mongoose = require("mongoose");

var sanctuaryDesc2Schema = new mongoose.Schema({
    sanctuaryDesc2: String
});

module.exports = mongoose.model("sanctuaryDesc2", sanctuaryDesc2Schema);