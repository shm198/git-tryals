var mongoose = require("mongoose");

var AppStatusSchema = new mongoose.Schema({
    AppStatus:  Boolean,
},{ strict: false });

module.exports = mongoose.model("AppStatus", AppStatusSchema);