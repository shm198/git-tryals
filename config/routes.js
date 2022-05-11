var express = require('express');
var app = express();

var adminstudyRoutes = require("../routes/adminstudy");
var authRoutes = require("../routes/auth");
var adminsiteRoutes = require("../routes/adminsite");
var adminsubjectRoutes = require("../routes/adminsubject");
var phaseRoutes = require("../routes/phase");
var visitRoutes = require("../routes/visit");
var reportsRoutes = require("../routes/reports");

app.use(authRoutes);
app.use(adminstudyRoutes);
app.use(adminsubjectRoutes);
app.use(adminsiteRoutes);
app.use(phaseRoutes);
app.use(visitRoutes);
app.use(reportsRoutes);

