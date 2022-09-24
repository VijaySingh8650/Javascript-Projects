const name = document.querySelector(".count-color");


function change() {
    let color = Math.random().toString(16).substring(2, 8);
    name.innerHTML = "#" + color;
    name.style.color = name.innerHTML;
    document.body.style.background = name.innerHTML;
    // body.style.backgroundColor = color;
}
change();
