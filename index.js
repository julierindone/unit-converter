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
function calculateConversions(inputNum) {
  console.log(`inside the calcconversions, inputnumber is  ${inputNum}`)

// //  each variable holds an array 
  // [0] = imp to met, [1] = met to imp
  let length = [(inputNum * 0.3048).toFixed(3), (inputNum / 0.3048).toFixed(3)]
  let volume = [(inputNum * 3.785).toFixed(3), (inputNum / 3.785).toFixed(3)]
  let mass = [(inputNum * 0.45359237).toFixed(3), (inputNum / 0.45359237).toFixed(3)]

  console.log(length  + volume + mass)

  printToScreen(length, volume, mass)
}

// WHY DOESNT THIS FUCKING WORK
function printToScreen(length, volume, mass) {
  // send to screen with innerHTML 
  lengthEl.innerHTML = `<p class="output">${inputNum} feet = ${length[0]} meters
  <br />${inputNum} meters = ${length[1]} feet</p>`

  volumeEl.innerHTML = `<p class="output">${inputNum} gallons = ${volume[0]} liters
  <br />${inputNum} liters = ${volume[1]} gallons</p>`

  massEl.innerHTML = `<p class="output">${inputNum} pounds = ${mass[0]} kilograms
  <br />${inputNum} kilograms = ${mass[1]} pounds</p>`
}
