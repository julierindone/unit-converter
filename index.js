let valueToConvert = document.getElementById("value-to-convert")
const convertbtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertbtn.addEventListener("click", function () {
  // call calculateConversions with the input passed in as arg
     // console.log(`value to convert: ${valueToConvert.value}`)
  inputNum = Number(valueToConvert.value)
  calculateConversions(inputNum)
})

function calculateConversions(num) {
  console.log(num)

  // each variable holds an array 
    // [0] = imp to met, [1] = met to imp
  let length = [(num * 0.3048).toFixed(3), (num / 0.3048).toFixed(3)]
  let volume = [(num * 3.785).toFixed(3), (num / 3.785).toFixed(3)]
  let mass = [(num * 0.45359237).toFixed(3), (num / 0.45359237).toFixed(3)]

  printToScreen(length, volume, mass)
}

function printToScreen(length, volume, mass) {
  // send to screen with innerHTML 
  lengthEl.innerHTML = `<p class="output">${inputNum} feet = ${length[0]} meters
  <br />${inputNum} meters = ${length[1]} feet</p>`

  volumeEl.innerHTML = `<p class="output">${inputNum} gallons = ${volume[0]} liters
  <br />${inputNum} liters = ${volume[1]} gallons</p>`

  massEl.innerHTML = `<p class="output">${inputNum} pounds = ${mass[0]} kilograms
  <br />${inputNum} kilograms = ${mass[1]} pounds</p>`
}

//Got this from Codepen but I don't really know if it's needed... my input thing doesn't work either way.
// Array.from( document.querySelectorAll('[data-expand]'), (input)=>{
//   let parent = input.parentNode;
//   function updateSize(){
//     parent.dataset.value = input.value
//   }
//   input.addEventListener('input', updateSize);
//   updateSize();
// });