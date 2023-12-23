// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btnPlus = document.getElementById("btn+");
// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const btn6 = document.getElementById("btn6");
// const btnMinus = document.getElementById("btn-");
// const btn7 = document.getElementById("btn7");
// const btn8 = document.getElementById("btn8");
// const btn9 = document.getElementById("btn9");
// const btnMultiply = document.getElementById("btn*");
// const btnClear = document.getElementById("btnC");
// const btn0 = document.getElementById("btn0");
// const btnEqual = document.getElementById("btn=");
// const btnDivide = document.getElementById("btn/");

const btnNum = document.querySelectorAll("[data-number]")
const btnOperator = document.querySelectorAll("[data-operator]")
const btnClear = document.querySelector('[data-clear]')
const btnEqual = document.querySelector('[data-equal]')

const screen = document.querySelector('.screen')

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        screen.append(`${button.innerText}`)
        console.log("num press")
    })
})

btnOperator.forEach(button => {
    button.addEventListener("click", () => {
        screen.append(` ${button.innerText} `)
    })
})

btnClear.addEventListener('click', () => {
    screen.innerText = ""
})

btnEqual.addEventListener('click', () => {
    screen.innerText = eval(screen.innerText);
    console.log(screen)
})

