var mongoose = require("mongoose");

var studyStageSchema = new mongoose.Schema({
    Study_short_name: String,
    Study_name:  String
},{ strict: false });

module.exports = mongoose.model("studyStage", studyStageSchema);