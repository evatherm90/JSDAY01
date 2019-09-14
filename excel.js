// total sales: F=E*C
// TOTAL PROFIT: G=E*D
console.log("running");
//alert();

let unitCol = document.querySelector("#units"); //h metavliti koyvalaei to selector
console.log(unitCol);

//change style:
//unitCol.style.backgroundColor = "red";
//unitCol.style.border = "2px solid black"; //to style einai object mesa sto unitcol

//change context:
//unitCol.textContent = "982537";

//HTMLElement.addEventListener(EVENT, CALLBACK);
unitCol.addEventListener("input", handleClick);// otan kano klik sto row me #units tha trexei to handleklik

//kapoy yparxei ayth h grammi poy ektelei ayto to function

function handleClick(e){
    //E:
    let unitsProjected=e.target;
    //G:
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    //D:
    let D = unitsProjected.previousElementSibling;
    let valE = unitsProjected.textContent;
    let valD = D.textContent;
    valE = parseFloat (valE); //ta ekene arithmo
    valD = parseInt (valD);
    console.log(typeof valE, typeof valD);
    console.log("G = ", valE*valD);
    G.textContent = valE*valD;
    }

//run();

try {
    run();
} catch(error) {
    console.log(error.message);
}

console.log("end of code");
//end of code
