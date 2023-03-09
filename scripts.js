// initial console log for my own sanity
console.log('These pretzels are making me thirsty!')

const display = document.getElementById('display')
const text1 = 'Dive Bar'
const text2 = 'of the Month'
let currentFace = 'Courgette'

const showDisplayText = (input) => {
  display.style.fontFamily = input
}

