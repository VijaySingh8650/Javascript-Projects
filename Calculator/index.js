let clearAllEl = document.querySelector(".all-clear");
let clearLastEl = document.querySelector(".last-entity-clear");
let display2El = document.querySelector(".display-2");
let display1El = document.querySelector(".display-1");
let equalEl = document.querySelector(".equal");
let numbersEl = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

//number
numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
        //we dont want dot to come twice, therefor we will return nothing If dot pressed twice
        if (e.target.innerText === "." && !haveDot) haveDot = true;
        else if (e.target.innerText === "." && haveDot) { return };
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
});

//operation
operationEl.forEach((operation) => {
    operation.addEventListener("click", e => {
        if (!dis2Num) return null;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) mathOperation(dis1Num, dis2Num, lastOperation);
        else result = parseFloat(dis2Num);

        clearVar(operationName);
        lastOperation = operationName;
        // display1El.innerHTML = result;
        // console.log(result);
   }) 
})

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";

        
        display1El.innerHTML = dis1Num;
  
    display2El.innerText =0;
    dis2Num = "";

}

function mathOperation() {
    if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } 
    else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } 
    else if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    } 
    else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    } 
    // console.log(result);
    display1El.innerHTML = result;
    
}

clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    result = "";
    display1El.innerHTML = 0;
    display2El.innerHTML = 0;
})

clearLastEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display2El.innerHTML = 0;
    
})


equalEl.addEventListener("click", () => {
    // console.log(dis2Num);
    if (!dis2Num || !dis1Num) return;
    
    haveDot = false;
    // display1El.innerHTML = dis2Num;
    mathOperation();
    clearVar();
    display2El.innerHTML = result;
    dis2Num = result;
    dis1Num = "";
   
   


})






  