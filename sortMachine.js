

//priavte function called numList that is private
var numList = []

//the export module that includes numInput and numSort

module.exports = {

numInput: function (x) {
  numList.push(x);
},

numSort: function () {
  var listy = function (a, b) {
    return a - b;
  }
 return numList.sort(listy);
}

};

// module.exports.numInput(8);
// module.exports.numInput(6);
// module.exports.numInput(7);



// console.log(numList);
// console.log(module.exports.numSort());