function luhn(num){
  var theModifiedDigits = digitChange(num);
  var computed = ( (theModifiedDigits.reduce( (acc, cumm) => {return acc + cumm}) * 9 ) % 10);
  if (computed === Number(check(num))){
    return true;
  } else{
    return false;
  }
};

function check(num){
  var digit = num.toString().split('')
  return digit.pop();
};

function digitChange(num){
  if (Number.isInteger(num)){
    var numToArray = (num.toString().split(''));
    numToArray.pop();
    for (let i = numToArray.length - 1; i > 0; i -= 2){
      var isGreaterThanNine = (numToArray[i] * 2);
      if (isGreaterThanNine > 9) {
        numToArray.splice(i , 1, (Number(isGreaterThanNine) - 9));
      } else {
        numToArray.splice(i, 1, (Number(isGreaterThanNine)));
      }
    }
  } else {
    return undefined;
  }
  for (let i = numToArray.length - 2; i >= 0; i -= 2){
    numToArray.splice(i,1, (Number(numToArray[i])));
  }
  return numToArray;
}

module.exports = luhn;

