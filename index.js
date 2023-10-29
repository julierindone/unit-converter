let valueToConvert = document.getElementById("value-to-convert")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

// Starts out with the conversions for the value of 1.
calculateConversions(1)

// Listening for the convert button to click...
convertBtn.addEventListener("click", function () {
  validateInput()
})

// This clears away any validation error text when the text box comes back into focus.
valueToConvert.addEventListener("focus", function () {
  document.getElementById("error-message").innerHTML = ""
})

function validateInput() {
  // trim whitespace
  valueToConvert.value = valueToConvert.value.trim()

  // check if input is empty
  if (valueToConvert.value === "") {
    message = "Please enter a number."
    document.getElementById("error-message").innerHTML = message
    resetAll()
  }

  // check if input is too long
  else if (valueToConvert.value.length > 12) {
    message = `Your entry is too long.<br />You may use up to 12 digits.`
    document.getElementById("error-message").innerHTML = message
    resetAll()
  }

  // check to see it's a valid number. 
  // I could probably combine this and the else, but this is fine.
  else if (isNaN(valueToConvert.value)) {
    message = `Your entry contains invalid characters.<br />Please enter a valid number.`
    document.getElementById("error-message").innerHTML = message
    resetAll()
  }

  // Finally, we have a usable number!
  else {
    let inputNum = Number(valueToConvert.value)
    calculateConversions(inputNum)
  }
}

// still confused about the problem I was having with inputNum/num situation 
// but it's working and I can look at it another time if I want.
function calculateConversions(num) {
  inputNum = num
  let measurements = []

  // each variable holds an array:
  // [0] = imp to met, [1] = met to imp
  let length = [(num / 3.28084).toFixed(3), (num * 3.28084).toFixed(3)]
  let volume = [(num * 3.785).toFixed(3), (num / 3.785).toFixed(3)]
  let mass = [(num * 0.45359237).toFixed(3), (num / 0.45359237).toFixed(3)]

  // create an array of arrays to pass to printToScreen()
  measurements = [length, volume, mass]

  // call printToScreen()
  printToScreen(inputNum, measurements)
}

// measurements are passed in as an array of arrays called 'amounts'
function printToScreen(num, amounts) {
  lengthEl.innerHTML = `<p class="output">${num} ft = ${amounts[0][0]} m<br />
  ${num} m = ${amounts[0][1]} ft</p>`

  volumeEl.innerHTML = `<p class="output">${num} gal = ${amounts[1][0]} L<br />
  ${num} L = ${amounts[1][1]} gal</p>`

  massEl.innerHTML = `<p class="output">${num} lb = ${amounts[2][0]} kg
  <br />${num} kg = ${amounts[2][1]} lb</p>`
}

// removes all output
function resetAll() {
  let allMeaurements = document.getElementsByClassName("output")

  for (var i = 0; i < allMeaurements.length; i++) {
    allMeaurements[i].innerHTML = null
  }
}
