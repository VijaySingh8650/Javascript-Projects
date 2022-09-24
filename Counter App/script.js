let number = document.querySelector(".number");
// let btnsub = document.querySelector(".btnsub");
// let num = 0;
// btnsub.addEventListener("click", () => 
//     number.innerHTML = --num
// )

// let btnadd = document.querySelector(".btnadd");
// btnadd.addEventListener("click", () => {
//     number.innerHTML =++num;
// })


// let btnres= document.querySelector(".btnres");
// btnres.addEventListener("click", () => {
//     num = 0;
//     number.innerHTML = num;
// })

let btn= document.querySelector(".buttons");
btn.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("btnres")) number.innerHTML = 0; 
    else if (e.target.classList.contains("btnadd")) number.innerHTML++;
   else  if (e.target.classList.contains("btnsub")) number.innerHTML--; 
    
    setColor();
    
})
function setColor() {
    if (number.innerHTML > 0) number.style.color = "yellow";

    else if (number.innerHTML < 0) number.style.color = "orangered";

    else  number.style.color = "black";
}