console.log("Running Fizz Buzz");
const btnMin = document.getElementById("minval");
const btnMax = document.getElementById("maxval");
const fizzVal = document.getElementById("fizzval");
const buzzVal = document.getElementById("buzzval");
const btnClear = document.getElementById("ClearAll");
const btnReset = document.getElementById("ResetAll");
const cont = document.getElementById("container");


btnMin.value = 1;
btnMax.value = 100;

// const create = function () {
//     while (cont.mainChild) {
//         cont.removeChild(main.firstChild);
//     }
// }

// const elDiv = document.createElement('div');
// elDiv.innerText = "FizzBuzz"; //vēlāk izdzēst
// cont.appendChild(elDiv);
// cont.appendChild(document.createElement('p'));
// const mypar = cont.querySelector('p');
// mypar.innerText = "FizzBuzzParagraph";
// mypar.classList.add("something");
// mypar.id = "paragrapghID"

// function addElement(parent, id, tag = 'div', content = null, classList = null) {
//     const elem = document.createElement(tag);
//     elem.id = id;
//     elem.classList.add(classList);
// if (content) elem.innerText = content;
// if (classList) elem.classList.add(classList);
//     parent.appendChild(elem);
//     return elem;
// }
for (let i = 1; i < 101; i++) {
    // addElement(cont, "myid" + i, "div", "My text" + i)
    const elem = document.createElement('div');
    // elem.className = "elem" + i;
    elem.id = "myid" + 1;
    cont.appendChild(elem);
    // addElement(cont, "myid" + i, "div")
    if (i % 3 === 0 && i % 5 === 0) {
        //         addElement(cont, "myid" + i, "div", content = i + "FizzBuzz", classList = "FizzBuzz");
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
}

//Jaizveido mains, ja būs nepieciešams izsaukt vairākas funkcijas.Jābūt vienām funkcijas izsaukumu
// onClick();
