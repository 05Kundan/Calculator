let btnOne = document.querySelector("#one");
let btnTwo = document.querySelector("#two");
let btnThree = document.querySelector("#three");
let inputDiv1 = document.querySelector(".input-div1");
let inputDiv2 = document.querySelector(".input-div2");
let btnNum = document.querySelectorAll("#btnNum");
let btnDecimal = document.querySelector("#decimal");
let btnMinusSing = document.querySelector("#minuSign");

// 
let btnAllClear = document.querySelector("#all-clear");
let btnBack = document.querySelector("#back");

// operator button
let btn2 = document.querySelectorAll(".btn2");
let btnPlus = document.querySelector("#plus");
let btnSubtract = document.querySelector("#subtract");
let btnMultiply = document.querySelector("#multiply");
let btnDivide = document.querySelector("#divide");
let btnEqual = document.querySelector("#equal");


// global variables
let txt2 = "";
let num1;
let num2;
let operator;
let equalValue = 0;
let minuSingValue = 0;

btnAllClear.addEventListener("click", function () {
    inputDiv1.innerText = "";
    inputDiv2.innerText = "";
    txt = "";
    operator = "";
});

for (b of btn2) {
    b.addEventListener("click", function () {
        if (inputDiv2.innerText.length > 0) {
            num1 = parseFloat(txt);
            txt2 = txt + " " + this.innerText;
            inputDiv1.innerText = txt2;
            inputDiv2.innerText = "";
            operator = this.innerText;
            txt = "";
        }
    });
}

let txt = "";
for (btn of btnNum) {
    btn.addEventListener("click", function () {
        if (equalValue === 1) {
            inputDiv1.innerText = "";
            inputDiv2.innerText = "";
            txt = "";
            operator = "";
            equalValue = 0;
        }
        txt = txt + this.innerText;
        inputDiv2.innerText = txt;
    });
}

// Equal button
btnEqual.addEventListener("click", function () {
    equalValue = 1;
    num2 = parseFloat(inputDiv2.innerText);
    txt2 = txt2 + " " + inputDiv2.innerText + " " + btnEqual.innerText + " ";
    inputDiv1.innerText = txt2;

    let value;
    // calculation result
    if (operator === "+") {
        value = num1 + num2;
    } else if (operator === "-") {
        value = num1 - num2;
    } else if (operator === "x") {
        value = num1 * num2;
    } else if (operator === "/") {
        value = num1 / num2;
    } else {
        alert("invalid input", operator);
    }
    inputDiv2.innerText = value;
});


// back button
btnBack.addEventListener('click', function () {
    if (equalValue === 1) {
        inputDiv1.innerText = "";
        inputDiv2.innerText = "";
        txt = "";
        operator = "";
        equalValue = 0;
    }
    txt = txt.slice(0, txt.length - 1);
    inputDiv2.innerText = txt;
});


// btn minuSing
btnMinusSing.addEventListener("click", function () {
    if (minuSingValue == 0) {
        txt = "-" + txt;
        minuSingValue = 1;
    } else {
        txt = txt.slice(1, txt.length);
        minuSingValue = 0;
    }
    inputDiv2.innerText = txt;

});
