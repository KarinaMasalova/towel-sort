module.exports = function towelSort (matrix) {
  let isReversed = false;
  let newArr = [];

  if (!matrix || matrix.length == 0) return [];

  if (matrix.length == 1) return matrix;

  matrix.forEach(function (row) {
    if(!isReversed) {
        row.forEach(item => newArr.push(item));
        isReversed = true;
    } else {
        row.reverse().forEach(item => newArr.push(item));
        isReversed = false;
    }
  });  

  return newArr;
}
