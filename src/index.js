const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

// function decode(expr) {
//   let result = []
//   let result2 = []
//   const splitedExpr = expr.split('')
//   const wordLength = 10
//   const quantityOfWords = expr.length / wordLength
//   console.log(quantityOfWords, ' - quantityOfWords') 

//   function some(startIndex, endIndex) {
//     result = []
//     if (startIndex === expr.length) return
//     // if (startIndex === 150) return
//     for (let i = startIndex; i < endIndex; i = i + 2) {
//       if (splitedExpr[i] != '**') {
//         result.push(splitedExpr[i] + splitedExpr[i + 1])
//       }
//       if (result.length === 0) {
//         result.push(' ')
//       }
      
//     }

//     for (let i = 0; i < result.length; i++) {
//       if (result[i] === '10') {
//         result[i] = '.'
//       } else if (result[i] === '11') {
//         result[i] = '-'
//       } 
//     }
//     console.log(result)
//     const joinedResult = result.join('')
//     const filtered = joinedResult.split('').filter((letter) => {return letter.indexOf('0')} )

//     for (key in MORSE_TABLE) {
//       if (key === filtered.join('')) {
//         result2.push(MORSE_TABLE[key])
//       }
//       if (filtered.join('') === ' ') {
//         result2.push(' ')
//       }
//     }
//     some(startIndex + 10, endIndex + 10)
//     // console.log(result)
//     // console.log(joinedResult, ' - joinedResult')
//     // console.log(filtered, ' - filtered')
//     // console.log(result2.join(''))
//   }
//   some(0, 10)
//   console.log(result2.join(''))
//   return result2.join('')
// }

function decode(expr) {
  const splitedExpr = expr.split('');
  let stash = [];
  let result = []

  function recursion(startIndex, endIndex) {
    stash = []

    if (startIndex === expr.length) return;

    for (let i = startIndex; i < endIndex; i = i + 2) {

      if (splitedExpr[i] + splitedExpr[i + 1] === '10') stash.push('.');

      if (splitedExpr[i] + splitedExpr[i + 1] === '11') stash.push('-');

      if (splitedExpr[i] === '*') {
        result.push(' ');
        return recursion(startIndex + 10, endIndex + 10);
      }
    }

    for (key in MORSE_TABLE) {
      if (key === stash.join('')) {
        result.push(MORSE_TABLE[key])
      } 
    }
    recursion(startIndex + 10, endIndex + 10)
  }

  recursion(0, 10)
  
  return result.join('')
}
module.exports = {
  decode
}