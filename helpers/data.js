"use strict";
exports.__esModule = true;
exports.dataChangeNote = exports.dataCreate = void 0;
var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
exports.dataCreate = "".concat(month[new Date().getMonth()], ", ").concat(new Date().getDate(), ", ").concat(new Date().getFullYear());
exports.dataChangeNote = "".concat(new Date().getDate(), "/").concat(new Date().getMonth(), "/").concat(new Date().getFullYear());
