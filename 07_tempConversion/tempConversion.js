const ftoc = function(cel) {
  //cel =  cel * 9 /5 + 32;
  cel =  (cel - 32) * 5 / 9
  if(cel == 0)
    return 0;
  else
    return Number(cel.toFixed(1));
};

const ctof = function(fah) {
  fah =  fah * 9 /5 + 32;
  return Number(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
