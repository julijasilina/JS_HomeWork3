console.log("Running Fizz Buzz");
const minVal = document.getElementById("minval");
const maxVal = document.getElementById("maxval");
const fizzVal = document.getElementById("fizzval");
const buzzVal = document.getElementById("buzzval");
const btnClear = document.getElementById("ClearAll");
const btnReset = document.getElementById("ResetAll");
const cont = document.getElementById("container");


minVal.value = 1;
maxVal.value = 100;

for (let i = 1; i < 101; i++) {
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

function onClick() {
    console.log("You clicked me!");
    const butClear = document.querySelector('#ClearAll');
    butClear.onclick = onClick;
    const butReset = document.querySelector('#ResetAll');
    butReset.onclick = onClick;
    const butFizz = document.querySelector('#fizzValue');
    butFizz.onclick = onClick;
    const butValue = document.querySelector('#buzzValue');
    butValue.onclick = onClick;
}

//Jaizveido mains, ja būs nepieciešams izsaukt vairākas funkcijas.Jābūt vienām funkcijas izsaukumu
onClick();
