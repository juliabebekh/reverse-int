module.exports = function reverse (n) {
    let resultString = '';
  let str = '';
  if (n >= 0) {
  str = String(n) 
  } else {
    str = String(-n)
  }
  for (let i = str.length - 1; i >= 0; i--) {
  resultString += str[i]
  }
  return Number(resultString)
  } 