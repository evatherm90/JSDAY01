// total sales: F=E*C
// TOTAL PROFIT: G=E*D
console.log("running");
//alert();

let unitCol = document.querySelector("#units");
console.log(unitCol);

//change style:
unitCol.style.backgroundColor = "red";
unitCol.style.border = "2px solid black"; //to style einai object mesa sto unitcol

//change context:
unitCol.textContent = "982537";

//run();

try {
    run();
} catch(error) {
    console.log(error.message);
}

console.log("end of code");
//end of code
