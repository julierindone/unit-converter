let valueToConvert = document.getElementById("value-to-convert")
const convertbtn = document.getElementById("convert-btn")
let testEl = document.getElementById("length-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertbtn.addEventListener("click", function () {
  // call calculateConversions with the input passed in as arg
     // console.log(`value to convert: ${valueToConvert.value}`)
  convertedNum = Number(valueToConvert.value)

  calculateConversions(convertedNum)
})

function calculateConversions(num) {
  console.log(num)

  let length = (num * 0.3048).toFixed(3)
  let volume = (num * 3.785).toFixed(3)
  let mass = (num * 0.45359237).toFixed(3)

  printToScreen(length, volume, mass)
}

function printToScreen(length, volume, mass) {
  // send to screen with innerHTML 
  lengthEl.innerHTML = `<p>${convertedNum} feet = ${length} meters</p>`
  volumeEl.innerHTML = `<p>${convertedNum} gallons = ${volume} liters</p>`
  massEl.innerHTML = `<p>${convertedNum} pounds = ${mass} kilograms</p>`
}