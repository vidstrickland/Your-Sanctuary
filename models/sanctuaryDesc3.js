var mongoose = require("mongoose");

var sanctuaryDesc3Schema = new mongoose.Schema({
    sanctuaryDesc3: String
});

module.exports = mongoose.model("sanctuaryDesc3", sanctuaryDesc3Schema);