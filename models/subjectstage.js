var mongoose = require("mongoose");
let subject = require('./subject');

let subjectStageSchema = new mongoose.Schema(subject.model("subject").schema,{ strict: false });

subjectschema.index({ Subject_Name: "text" })

module.exports = mongoose.model("subjectStage", subjectStageschema);