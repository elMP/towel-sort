
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix)
    return [];
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0)
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        //console.log(matrix[i].join(', '));
        newMatrix.push(matrix[i][j]);
      }
    else
      for (let j = 0; j < matrix[i].length; j++) {
        //console.log(matrix[i].join(', '));
        newMatrix.push(matrix[i][j]);
      }
  }
  return newMatrix
}
