"use strict";
exports.__esModule = true;
exports.makeResizableDiv = void 0;
var index_1 = require("../dist/index");
function makeResizableDiv(e) {
    var currentResizer = document.getElementById(e.currentTarget.id);
    var pomoc = (e.currentTarget.id).split("z");
    var element = document.getElementById("div" + pomoc[1]);
    var minimum_size = 100;
    var original_width = 0;
    var original_height = 0;
    var original_x = 0;
    var original_y = 0;
    var original_mouse_x = 0;
    var original_mouse_y = 0;
    currentResizer.addEventListener('mousedown', function (e) {
        e.preventDefault();
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
    });
    function resize(e) {
        var width = original_width + (e.pageX - original_mouse_x);
        var height = original_height + (e.pageY - original_mouse_y);
        if (width > minimum_size) {
            element.style.width = width + 'px';
        }
        if (height > minimum_size) {
            element.style.height = height + 'px';
        }
    }
    function stopResize() {
        for (var i = 0; i < index_1.tablica.length; i++) {
            if ((index_1.tablica[i].id).toString() == pomoc[1]) {
                index_1.tablica[i].hei = element.style.height;
                index_1.tablica[i].wid = element.style.width;
            }
        }
        window.removeEventListener('mousemove', resize);
    }
}
exports.makeResizableDiv = makeResizableDiv;
