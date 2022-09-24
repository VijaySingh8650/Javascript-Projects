let number = document.querySelector(".number");


function change() {
    
    number.innerHTML = Math.floor(Math.random() * 10);
    console.log(number.innerHTML);
    
}