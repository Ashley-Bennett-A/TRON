/// <reference path="./p5.global-mode.d.ts" />
let buttons = document.getElementsByClassName("button")


const keyCode = () => {
    let key = event.key;
    let code = event.code;
    let which = event.which;
    console.log(event.key);
    console.log(event.code);
    console.log(event.which);
}
console.log()