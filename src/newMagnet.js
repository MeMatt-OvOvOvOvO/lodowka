"use strict";
exports.__esModule = true;
exports.newMagnet = void 0;
var index_1 = require("../dist/index");
function newMagnet() {
    var magnet = new index_1.Magnet();
    magnet.createMagnet();
}
exports.newMagnet = newMagnet;
