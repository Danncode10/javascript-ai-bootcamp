let btn = document.querySelector("#myBtn");
let msg = document.querySelector("#message");

let clicked = false;

btn.addEventListener("click", function(event) {
if (!clicked) {
    msg.innerHTML = "You clicked the button!";
    clicked = true;
} else {
    msg.innerHTML = "Hello";
    clicked = false;
}
});
