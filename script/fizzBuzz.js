console.log("Running Fizz Buzz");

const fizzVal = document.getElementById("fizzval");
const buzzVal = document.getElementById("buzzval");
const btnClear = document.getElementById("ClearAll");
const btnReset = document.getElementById("ResetAll");
const minVal = document.getElementById("minval");
const maxVal = document.getElementById("maxval");
const cont = document.getElementById("container");


function createDivs() {

    for (let i = 1; i <= 101; i++) {
        const elem = document.createElement('div');
        elem.id = "myid" + 1;
        cont.appendChild(elem);
        if (i < minVal.value || i > maxVal.value) {
            elem.style = "display: none";
        }

        else if (i % 3 === 0 && i % 5 === 0) {
            elem.innerText = i + "  FizzBuzz";
            elem.classList.add("FizzBuzz");
        }

        else if (i % 3 === 0 && i % 5 !== 0) {
            elem.innerText = i + "  Fizz";
            elem.classList.add("Fizz");
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            elem.innerText = i + "  Buzz";
            elem.classList.add("Buzz");
        }
        else if (i % 3 !== 0 && i % 5 !== 0) {
            elem.innerText = i;
            elem.classList.add("NoFizzBuzz");
        }
    }
}



btnClear.addEventListener('click', () => { console.log("Clicked Clear"); });
btnClear.onclick = (event) => {
    console.log("I want to delet all Divs");
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
}

minVal.onchange = () => {
    console.log("Refreshing from Min");
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    createDivs();
}

maxVal.onchange = () => {
    console.log("Refreshing from Max");
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    createDivs();
}

btnReset.addEventListener('click', () => { console.log("Clicked Reset"); });
btnReset.onclick = (event) => {
    console.log("I want to reset all Divs");
    createDivs();
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    createDivs();
}


function main() {
    createDivs();
}

main();