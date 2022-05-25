let mongoose = require("mongoose");
let site = require('./site');

let siteStageSchema = new mongoose.Schema(site.model("site").schema,{ strict: false });

module.exports = mongoose.model("siteStage", siteStageSchema);