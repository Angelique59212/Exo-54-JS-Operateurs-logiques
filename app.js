let x = 1;
let y =4;
let z = -1;

let condition1 = document.getElementById('condition1');
    if (x < 2) {
        condition1.innerHTML = "x est inférieur à 2";
    }
    else {
        condition1.innerHTML = "x est supérieur à 2";
    }

let condition2 = document.getElementById("condition2");
    if (y > 3) {
        condition2.innerHTML = "y est supérieur à 3";
    }
    else {
        condition2.innerHTML = "y est inférieur à 3";
    }

let condition3 = document.getElementById("condition3");
    if (z <= 0) {
       condition3.innerHTML = "z est inférieur ou égal à 0";
    }
    else {
        condition3.innerHTML = "z est supérieur à 0";
    }

if (( x < 2 && y > 3) || (z <= 0)) {
    (document.querySelector("#condition4")).innerHTML = "les trois sont vraies";
}
else {
    (document.querySelector("#condition4")).innerHTML = "l'une des trois est fausse";
}

let condition5 = document.getElementById("condition5");
    if (( x < 2 && y > 3) || (z === -1)) {
        condition5.innerHTML = "les deux premières conditions sont vraies ou z est égal à -1";
    }
    else  {
        condition5.innerHTML = "Soit l'une des deux premières conditions est fausse ou z n'est pas égal à -1";
    }
