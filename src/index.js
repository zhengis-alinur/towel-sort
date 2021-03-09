
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix == 'undefined') {
    return [];
  } else if(matrix.length == 0) {
    return [];
  }
  result = [];
  for(i = 0; i < matrix.length; i++) {
    if(i % 2 != 0) {
      for(x = matrix[i].length - 1; x >= 0; x--) {
        result.push(matrix[i][x]);
      }
    } else {
      for(y = 0; y < matrix[i].length; y++) {
        result.push(matrix[i][y]);
      }
    }
  }
  return result;
}
