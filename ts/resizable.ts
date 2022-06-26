import { tablica } from "./index";
export function makeResizableDiv(e) {

    var currentResizer = document.getElementById(e.currentTarget.id)
    var pomoc = (e.currentTarget.id).split("z");
    var element = document.getElementById("div" + pomoc[1]);
    const minimum_size = 100;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;


    currentResizer.addEventListener('mousedown', function (e) {
        e.preventDefault()
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;

    })
    function resize(e) {

        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
            element.style.width = width + 'px'
        }
        if (height > minimum_size) {
            element.style.height = height + 'px'
        }
    }
    function stopResize() {
        for (var i = 0; i < tablica.length; i++) {
            if ((tablica[i].id).toString() == pomoc[1]) {
                tablica[i].hei = element.style.height;
                tablica[i].wid = element.style.width;
            }
        }
        window.removeEventListener('mousemove', resize)

    }

}