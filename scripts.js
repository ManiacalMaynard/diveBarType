// initial console log for my own sanity
console.log('These pretzels are making me thirsty!')

const display = document.getElementById('display')
const text = 'Dive Bar'
let currentFace = 'Courgette'

const showDisplayText = (input) => {

  display.innerText = input.toUpperCase()
  input[1] == 'o' ?
  display.style.fontFamily = currentFace :
  display.style.fontFamily = 'Molle' ;

  
}

showDisplayText(text)