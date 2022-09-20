"use strict";
exports.__esModule = true;
var express = require("express");
var router_js_1 = require("./routes/router.js");
var PORT = 4000;
var app = express();
app.use(express.json());
app.use("/api", router_js_1["default"]);
app.listen(PORT, function () { return console.log("Server work on port ".concat(PORT)); });
