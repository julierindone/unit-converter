let valueToConvert = document.getElementById("value-to-convert")
const convertbtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertbtn.addEventListener("click", function () {
  // call calculateConversions with the input passed in as arg
  console.log(`value to convert: ${valueToConvert.value}`)
  validateInput()
})

function validateInput() {
  console.log(`validate Input ${valueToConvert.value} and length is ${valueToConvert.value.length}`)
  if (valueToConvert.value.length > 2) {
    console.log(`${valueToConvert}'s length Is Greater than 2`)
    alert("Your number is too large!");
    valueToConvert.value = " "
    return false;
  }

  else {

    let inputNum = Number(valueToConvert.value)
    console.log(`inputNum is ${inputNum}. Returning input now.`)
    calculateConversions(inputNum)
  }
}

function calculateConversions(num) {
  inputNum = num
  let measurements = []

  // each variable holds an array 
  // [0] = imp to met, [1] = met to imp
  let length = [(num / 3.28084).toFixed(3), (num * 3.28084).toFixed(3)]
  let volume = [(num * 3.785).toFixed(3), (num / 3.785).toFixed(3)]
  let mass = [(num * 0.45359237).toFixed(3), (num / 0.45359237).toFixed(3)]

  measurements = [length, volume, mass]

  printToScreen(inputNum, measurements)
}

// measurements are passed in as an array of arrays called 'amounts'
function printToScreen(num, amounts) {
  lengthEl.innerHTML = `<p class="output">${num} feet = ${amounts[0][0]} meters<br />
  ${num} meters = ${amounts[0][1]} feet</p>`

  volumeEl.innerHTML = `<p class="output">${num} gallons = ${amounts[1][0]} liters
  // <br />${num} liters = ${amounts[1][1]} gallons</p>`

  massEl.innerHTML = `<p class="output">${num} pounds = ${amounts[2][0]} kilograms
  <br />${num} kilograms = ${amounts[2][1]} pounds</p>`
}
