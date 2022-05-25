var mongoose = require("mongoose");
let study = require('./study');

let studyStageSchema = new mongoose.Schema(study.model("study").schema,{ strict: false });

module.exports = mongoose.model("studyStage", studyStageSchema);