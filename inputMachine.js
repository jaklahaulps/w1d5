
var importNum = require("./sortMachine");

var input = process.argv;
var processArray = [];
//console.log(input.length)
function arraySetup (theProcess){
  for (var j = input.length - 1; j > 1; j--){
    processArray.push(Number(input[j]))
  }
}

function grouped (array) {
for (var i = 0; i < array.length; i++) {
importNum.numInput(array[i]);
  }
}
//console.log(Number(process.argv[2]))

arraySetup(input);
grouped(processArray);

console.log(importNum.numSort());
