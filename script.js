const number1 = document.getElementById("num1")
const number2 = document.getElementById("num2")
const result = document.getElementById("result")

document.getElementById("addbtn").addEventListener("click", () => {
    const ans = Number(number1.value) + Number(number2.value)
    result.innerText = "Result:"+ ans
});

document.getElementById("subbtn").addEventListener("click", () => {
    const ans = Number(number1.value) - Number(number2.value)
    result.innerText = "Result:"+ ans
})

document.getElementById("mulbtn").addEventListener("click", () => {
    const ans = Number(number1.value) * Number(number2.value)
    result.innerText = "Result:"+ ans
})

document.getElementById("divbtn").addEventListener("click", () => {
    const ans = Number(number1.value) / Number(number2.value)
    result.innerText = "Result:"+ ans
})
