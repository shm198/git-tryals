var mongoose = require("mongoose");
let visit = require('./visit');

let visitStageSchema = new mongoose.Schema(subject.model("visit").schema,{ strict: false });

module.exports = mongoose.model("visitStage", visitStageSchema);