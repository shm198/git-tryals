var mongoose = require("mongoose");

var phaseStageSchema = new mongoose.Schema({
    Phase_number:  Number
},{ strict: false });

module.exports = mongoose.model("phaseStage", phaseStageSchema);