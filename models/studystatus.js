var mongoose = require("mongoose");

var studyStatusSchema = new mongoose.Schema({
    studyid: {type: mongoose.Schema.Types.ObjectId, ref: "study"},
    studystatus:  Boolean,
},{ strict: false });

module.exports = mongoose.model("studystatus", studyStatusSchema);