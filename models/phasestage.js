let mongoose = require("mongoose");
let phase = require ('./phase');

let phaseStageSchema = new mongoose.Schema(phase.model('phase').schema,{ strict: false });

module.exports = mongoose.model("phaseStage", phaseStageSchema);