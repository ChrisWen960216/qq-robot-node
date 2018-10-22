function calMatthewCandy(candys) {
  let matthewCandy = 0;
  if (candys > 5) {
    matthewCandy = candys * 2;
  } else {
    matthewCandy = Math.round(candys / 2);
  }
  return matthewCandy;
}

module.exports = { calMatthewCandy };
