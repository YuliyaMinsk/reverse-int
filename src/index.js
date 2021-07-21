module.exports = function reverse (n) {
  if ( n >= 0) {
    return String(n).split('').reverse().join('');
  } else {
    return String(n).split('').reverse().slice(0, -1).join('');
  }
}
