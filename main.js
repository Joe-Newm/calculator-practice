
const btnNum = document.querySelectorAll("[data-number]")
const btnOperator = document.querySelectorAll("[data-operator]")
const btnClear = document.querySelector('[data-clear]')
const btnEqual = document.querySelector('[data-equal]')

const screen = document.querySelector('.screen')
const screen2 = document.querySelector('.screen2')


btnNum.forEach(button => {
    button.addEventListener('click', () => {
        if (screen2.innerText != "") {
            screen2.innerText = ""
            screen.append(`${button.innerText}`)
        } else {
        screen.append(`${button.innerText}`)
        console.log("num press")
        }
    })
})

btnOperator.forEach(button => {
    button.addEventListener("click", () => {
        if (screen2.innerText != "") {
            screen.innerText = screen2.innerText;
            screen.append(` ${button.innerText} `);
            screen2.innerText = ""
        } else {
        screen.append(` ${button.innerText} `)
        }
    })
})

btnClear.addEventListener('click', () => {
    screen.innerText = ""
    screen2.innerText = ""
})

btnEqual.addEventListener('click', () => {
    screen2.innerText = eval(screen.innerText);
    screen.innerText = ""
    console.log(screen)
})

