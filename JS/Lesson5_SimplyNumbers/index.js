function ifDiv(n) {
  if (n % 2 === 0) return 1;
  if (n % 3 === 0) return 1;
  if (n % 5 === 0) return 1;
  if (n % 7 === 0) return 1;
  return 0;
}
function ifDivide(n) {
  if (n % 2 === 0) {
    if (ifDiv(n / 2) === 0) return 1;
    return 0;
  }
  if (n % 3 === 0) {
    if (ifDiv(n / 3) === 0) return 1;
    return 0;
  }
  if (n % 5 === 0) {
    if (ifDiv(n / 5) === 0) return 1;
    return 0;
  }
  if (n % 7 === 0) {
    if (ifDiv(n / 7) === 0) return 1;
    return 0;
  }
  return 1;
}

function getPrimes(n) {
  for (let i = 2; i <= n; i += 1) {
    if (ifDivide(i) === 1) console.log(i);
  }
}
getPrimes(20);
