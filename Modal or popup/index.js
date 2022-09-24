const btn = document.querySelector("#btn");

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const close = document.querySelector(".close")
// modalContent.classList.remove("slide-up");
btn.addEventListener("click", function () {
    modal.style.display = "flex";
    // modalContent.classList.remove("slide-up");

});
close.addEventListener("click", function () {

  
    modal.style.display = "none";
    
});
modal.addEventListener("click", function () {
  
        
        modal.style.display = "none";
   

});
