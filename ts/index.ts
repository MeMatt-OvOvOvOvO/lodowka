import { newMagnet } from "./newMagnet";
import { makeResizableDiv } from "./resizable";

var idek = 0
var onBoard = 0
var paragMileage = document.createElement("p")
var paragOnFrigde = document.createElement("p")
export var tablica = []


export class Magnet{
    public id: number
    public txt: string
    public height: string
    public width: string
    public left: string
    public top: string
    public position: string

    public xHeight: string
    public xWidth: string
    public xRight: string
    public xTop: string

    constructor(id = idek, txt = "Hi, I'm new magnet", height = "200px", width = "200px", left = "100px", top = "100px",
                position = "absolute", xHeight = "17px", xWidth = "17px", xRight = "0px", xTop = "0px") {
        this.id = id
        this.txt = txt
        this.height = height
        this.width = width
        this.left = left
        this.top = top
        this.position = position

        this.xHeight = xHeight
        this.xWidth = xWidth
        this.xRight = xRight
        this.xTop = xTop
    }

    static deleteMagnet(e): void {
        onBoard--
        document.getElementById("div" + e.currentTarget.id).remove()
        paragOnFrigde.innerText = "on fridge: " + onBoard.toString()
    }

    createMagnet(): void{
        var div = document.createElement("DIV")
        div.id = "div" + idek.toString()
        div.className = "magnet"
        div.style.height = this.height
        div.style.minHeight = this.height
        div.style.width = this.width
        div.style.minWidth = this.width
        div.style.left = this.left
        div.style.top = this.top
        div.style.position = this.position

        var inside = document.createElement("DIV")
        inside.id = "inside" + idek.toString()
        inside.className = "inside"
        inside.innerText = this.txt

        var resizable = document.createElement("DIV")
        resizable.id = "roz" + idek.toString()
        resizable.className = "roz"
        resizable.addEventListener("mousemove", makeResizableDiv)

        var mousePosition
        var offset = [0,0]
        var isDown = false
        inside.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
        }, true)
    
        document.addEventListener('mouseup', function() {
            isDown = false;
        }, true)
    
        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
    
                    x : event.clientX,
                    y : event.clientY
    
                };
                div.style.left = (mousePosition.x + offset[0]) + 'px'
                div.style.top  = (mousePosition.y + offset[1]) + 'px'
            }
        }, true)

        var xDelete = document.createElement("img")
        xDelete.id = idek.toString()
        xDelete.src = "X.png"
        xDelete.style.position = this.position
        xDelete.style.height = this.xHeight
        xDelete.style.width = this.xWidth
        xDelete.style.right = this.xRight
        xDelete.style.top = this.xTop
        xDelete.addEventListener("click", Magnet.deleteMagnet)

//nowe rzeczyasdfasdf
        let edit = document.createElement("img")
        edit.id = idek.toString()
        edit.src = "edit.png"
        edit.style.position = this.position
        edit.style.height = this.xHeight
        edit.style.width = this.xWidth
        edit.style.right = this.xRight
        edit.style.top = this.xTop+40
        edit.addEventListener("click", Magnet.deleteMagnet)

        document.getElementById("mainDiv").appendChild(div)
        document.getElementById("div" + idek.toString()).appendChild(inside)
        document.getElementById("inside" + idek.toString()).appendChild(xDelete)
        document.getElementById("inside" + idek.toString()).appendChild(edit)
        document.getElementById("div" + idek.toString()).appendChild(resizable)


        var mileage = idek + 1
        paragMileage.innerText = "mileage: " + mileage.toString()
        var onFridge = onBoard + 1
        paragOnFrigde.innerText = "on fridge: " + onFridge.toString()

        idek++
        onBoard++
    }
}

var dokument: HTMLElement;
dokument = document.getElementById("addMagnet");
dokument.onclick = newMagnet;

// function newMagnet(){
//     var magnet = new Magnet()
//     magnet.createMagnet()
// }


paragMileage.id = "paragMileage"
paragMileage.innerText = "mileage: " + idek.toString()
document.getElementById("mainDiv").appendChild(paragMileage)

paragOnFrigde.id = "paragOnFrigde"
paragOnFrigde.innerText = "on fridge: " + onBoard.toString()
document.getElementById("mainDiv").appendChild(paragOnFrigde)




// function makeResizableDiv(e) {

//     var currentResizer = document.getElementById(e.currentTarget.id)
//     var pomoc = (e.currentTarget.id).split("z");
//     var element = document.getElementById("div" + pomoc[1]);
//     const minimum_size = 100;
//     let original_width = 0;
//     let original_height = 0;
//     let original_x = 0;
//     let original_y = 0;
//     let original_mouse_x = 0;
//     let original_mouse_y = 0;


//     currentResizer.addEventListener('mousedown', function (e) {
//         e.preventDefault()
//         window.addEventListener('mousemove', resize)
//         window.addEventListener('mouseup', stopResize)
//         original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
//         original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
//         original_x = element.getBoundingClientRect().left;
//         original_y = element.getBoundingClientRect().top;
//         original_mouse_x = e.pageX;
//         original_mouse_y = e.pageY;

//     })
//     function resize(e) {

//         const width = original_width + (e.pageX - original_mouse_x);
//         const height = original_height + (e.pageY - original_mouse_y)
//         if (width > minimum_size) {
//             element.style.width = width + 'px'
//         }
//         if (height > minimum_size) {
//             element.style.height = height + 'px'
//         }
//     }
//     function stopResize() {
//         for (var i = 0; i < tablica.length; i++) {
//             if ((tablica[i].id).toString() == pomoc[1]) {
//                 tablica[i].hei = element.style.height;
//                 tablica[i].wid = element.style.width;
//             }
//         }
//         window.removeEventListener('mousemove', resize)

//     }

// }
