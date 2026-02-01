let inputEl = document.getElementById("input-El");
let btn = document.getElementById("button");
let length = document.getElementById("length-El");
let volume = document.getElementById("volume-El");
let mass = document.getElementById("mass-El")

btn.addEventListener("click", () => {
    const input = inputEl.value
    length.textContent = `${input} meters = ${3.28*input} feet | ${input} feet = ${input*0.3048} meters`;
    volume.textContent = `${input} liters = ${0.264*input} gallons | ${input} gallons = ${3.785*input} liters`;
    mass.textContent = `${input} kilo = ${(2.204*input).toFixed(3)} pounds | ${input} pounds = ${(0.543*input).toFixed(3)} kilo`;
})