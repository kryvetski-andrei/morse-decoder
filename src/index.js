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