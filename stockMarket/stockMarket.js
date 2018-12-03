function stockMarket(array){
  var difference = 0;

  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++) {
      if (i < j && (array[j] - array[i] > difference)){
        difference = array[j] - array[i];
      };
    }
  }
  return difference;
}