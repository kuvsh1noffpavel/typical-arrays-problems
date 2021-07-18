
exports.min = function min (array) {

    if (array == null || array.length == 0){
        return 0;
    }

    let resultMin = 0;
    for (let i = 0; i < array.length; i++){
        if (resultMin > array[i]){
            resultMin = array[i]; 
        }
    }
  return resultMin;
}

exports.max = function max (array) {

  if (array == null || array.length == 0){
    return 0;
  }

  let resultMax = 0;
  for (let i = 0; i < array.length; i++){
    if (resultMax < array[i]){
        resultMax = array[i];
    }
  }

  return resultMax;
}

exports.avg = function avg (array) {
 
  if (array == null || array.length == 0){
    return 0;
  }
  
  let resultAvg = 0;
  let avgArr = 0;
    for (let i = 0; i < array.length; i++){
    avgArr += array[i];
    }
  resultAvg = avgArr / array.length;
  return resultAvg;
}
