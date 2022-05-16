var mongoose = require("mongoose");

var siteSchema = new mongoose.Schema({
    Site_short_name: String,
    Site_name:  String
},{ strict: false });

module.exports = mongoose.model("site", siteSchema);